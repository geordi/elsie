from ..text.textstyle import TextStyle
from .svg import apply_rotation


def set_font_from_style(xml, style):
    if style.font is not None:
        xml.set("font-family", style.font)
    if style.size is not None:
        xml.set("font-size", style.size)

    s = ""
    if style.color is not None:
        s += "fill:{};".format(style.color)
    if style.bold:
        s += "font-weight: bold;"
    if style.italic:
        s += "font-style: italic;"
    if s:
        xml.set("style", s)


def set_paint_style(xml, color, bg_color, stroke_width, stroke_dasharray):
    styles = []
    if bg_color:
        styles.append("fill:{}".format(bg_color))
    else:
        styles.append("fill:none")

    if color:
        styles.append("stroke:{}".format(color))
        styles.append("stroke-width:{}".format(stroke_width))
        if stroke_dasharray:
            styles.append("stroke-dasharray:{}".format(stroke_dasharray))
    else:
        styles.append("stroke:none")

    xml.set("style", ";".join(styles))


def draw_text(
    xml, x, y, parsed_text, style, styles, id=None, id_index=None, transform=None
):
    assert isinstance(style, TextStyle)
    xml.element("text")

    if id is not None and id_index is None:
        xml.set("id", id)

    xml.set("x", x)
    xml.set("y", y)

    if transform is not None:
        xml.set("transform", transform)

    anchor = {"left": "start", "middle": "middle", "right": "end"}

    xml.set("text-anchor", anchor[style.align])

    set_font_from_style(xml, style)

    line_size = style.size * style.line_spacing
    active_styles = [style]

    xml.element("tspan")
    if style.variant_numeric:
        xml.set("font-variant-numeric", style.variant_numeric)

    for i, (token_type, value) in enumerate(parsed_text):
        if token_type == "text":
            xml.text(value)
        elif token_type == "newline":
            for _ in active_styles:
                xml.close("tspan")  # tspan
            for j, s in enumerate(active_styles):
                if s is None:
                    continue
                xml.element("tspan")
                xml.set("xml:space", "preserve")
                if j == 0:
                    xml.set("x", x)
                    xml.set("dy", line_size * value)
                set_font_from_style(xml, s)
        elif token_type == "begin":
            is_dummy = value and value[0] == "#"
            s = styles.get(value, None)
            if s is None and not is_dummy:
                raise Exception("Style '{}' not found".format(value))
            active_styles.append(s)
            xml.element("tspan")
            if id is not None and id_index == i:
                xml.set("id", id)
            xml.set("xml:space", "preserve")
            if not is_dummy:
                set_font_from_style(xml, s)
        elif token_type == "end":
            xml.close("tspan")
            active_styles.pop()
        else:
            raise Exception("Invalid token")

    for s in active_styles:
        if s is not None:
            xml.close("tspan")
    xml.close("text")


def draw_bitmap(xml, x, y, width, height, mime, data, rotation=None, extra_args=None):
    xml.element("image")
    xml.set("x", x)
    xml.set("y", y)
    if width is not None:
        xml.set("width", width)
    if height is not None:
        xml.set("height", height)
    if rotation:
        apply_rotation(xml, rotation, (x + width / 2, y + height / 2))
    if extra_args is not None:
        for k, v in extra_args:
            xml.set(k, v)
    xml.set("xlink:href", "data:{};base64,{}".format(mime, data), escape=False)
    xml.close("image")
