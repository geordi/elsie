# The file is not named "slide.py" because of class of "slide" import in __init__.py

import os.path

from .box import Box
from .geom import Rect
from .layout import Layout
from .rcontext import RenderingContext
from .show import ShowInfo
from .svg import svg_begin, svg_end
from .inkscape import export_by_inkscape
from .sxml import Xml


class Slide:
    def __init__(
        self,
        slides,
        index,
        width,
        height,
        styles,
        fs_cache,
        temp_cache,
        view_box,
        name,
        debug_boxes,
    ):
        self.slides = slides
        self.name = name
        self.width = width
        self.height = height
        self.index = index
        self.view_box = view_box
        self.debug_boxes = debug_boxes
        self._box = Box(
            self,
            layout=Layout(x=0, y=0, width=width, height=height),
            styles=styles,
            show_info=ShowInfo(),
            name=name,
        )
        self.max_step = 1
        self.temp_cache = temp_cache
        self.fs_cache = fs_cache

    def box(self):
        return self._box

    def prepare(self):
        rect = Rect(0, 0, self.width, self.height)
        self._box.layout.set_rect(rect)

    def steps(self):
        shows = [1]
        self._box._traverse(lambda box: shows.append(box._min_steps()))
        return max(value for value in shows if value)

    def make_svg(self, step):
        xml = Xml()
        svg_begin(xml, self.width, self.height, self.view_box)
        ctx = RenderingContext(xml, step, self.debug_boxes)
        painters = self._box.get_painters(ctx, 0)
        painters.sort(key=lambda painter: painter.z_level)
        for p in painters:
            p.render(ctx)
        svg_end(xml)
        return xml.to_string()

    def render(self, step, debug, export_type, inkscape):
        svg = self.make_svg(step)

        if debug:
            svg_file = os.path.join(
                self.fs_cache.cache_dir, "{}-{}.svg".format(self.index, step)
            )
            with open(svg_file, "w") as f:
                f.write(svg)

        return self.fs_cache.ensure(
            svg.encode(),
            export_type,
            lambda source, target, export_type: export_by_inkscape(
                inkscape, source, target, export_type
            ),
        )

    def _repr_html_(self):
        from . import jupyter

        return jupyter.render_slide(self)


class DummyPdfSlide:
    def __init__(self, filename):
        self.filename = os.path.abspath(filename)

    def prepare(self):
        pass

    def steps(self):
        return 1

    def make_svg(self):
        return None

    def render(self, step, debug, export_type, inkscape_bin):
        return self.filename
