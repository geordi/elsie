$(function() {
    var NEDOC_MODULES = JSON.parse('[["Arrow", "elsie.arrow", true], ["Box", "elsie.box", true], ["BoxItem", "elsie.boxitem", true], ["BoxMixin", "elsie.boxmixin", true], ["ExternPdfSlide", "elsie.slide", true], ["ExternalMerger", "elsie.pdfmerge", true], ["FsCache", "elsie.cache", true], ["InkscapeShell", "elsie.inkscape", true], ["Layout", "elsie.layout", true], ["LazyPoint", "elsie.lazy", true], ["LazyValue", "elsie.lazy", true], ["MyFormatter", "elsie.highlight", true], ["PdfRenderUnit", "elsie.render", true], ["PosValue", "elsie.value", true], ["PyPdfMerger", "elsie.pdfmerge", true], ["Rect", "elsie.geom", true], ["RenderUnit", "elsie.render", true], ["RenderingContext", "elsie.rcontext", true], ["ShowInfo", "elsie.show", true], ["SimpleBoxItem", "elsie.boxitem", true], ["SizeValue", "elsie.value", true], ["Slide", "elsie.slide", true], ["Slides", "elsie.slides", true], ["SvgRenderUnit", "elsie.render", true], ["TextBoxItem", "elsie.textboxitem", true], ["TextStyle", "elsie.textstyle", true], ["Xml", "elsie.sxml", true], ["__eq__", "elsie.geom.Rect", false], ["__init__", "elsie.arrow.Arrow", false], ["__init__", "elsie.box.Box", false], ["__init__", "elsie.boxitem.BoxItem", false], ["__init__", "elsie.boxitem.SimpleBoxItem", false], ["__init__", "elsie.cache.FsCache", false], ["__init__", "elsie.geom.Rect", false], ["__init__", "elsie.highlight.MyFormatter", false], ["__init__", "elsie.inkscape.InkscapeShell", false], ["__init__", "elsie.layout.Layout", false], ["__init__", "elsie.lazy.LazyPoint", false], ["__init__", "elsie.lazy.LazyValue", false], ["__init__", "elsie.pdfmerge.ExternalMerger", false], ["__init__", "elsie.pdfmerge.PyPdfMerger", false], ["__init__", "elsie.rcontext.RenderingContext", false], ["__init__", "elsie.render.PdfRenderUnit", false], ["__init__", "elsie.render.RenderUnit", false], ["__init__", "elsie.render.SvgRenderUnit", false], ["__init__", "elsie.show.ShowInfo", false], ["__init__", "elsie.slide.ExternPdfSlide", false], ["__init__", "elsie.slide.Slide", false], ["__init__", "elsie.slides.Slides", false], ["__init__", "elsie.sxml.Xml", false], ["__init__", "elsie.textboxitem.TextBoxItem", false], ["__init__", "elsie.textstyle.TextStyle", false], ["__init__", "elsie.value.PosValue", false], ["__init__", "elsie.value.SizeValue", false], ["__repr__", "elsie.geom.Rect", false], ["__repr__", "elsie.show.ShowInfo", false], ["__repr__", "elsie.value.SizeValue", false], ["_apply_name_policy", "elsie.slides.Slides", false], ["_box_children", "elsie.box.Box", false], ["_check_bool", "elsie.textstyle", false], ["_check_choice", "elsie.textstyle", false], ["_check_number", "elsie.textstyle", false], ["_check_string", "elsie.textstyle", false], ["_check_visibility", "elsie.ora", false], ["_children_to_svg", "elsie.ora", false], ["_close", "elsie.sxml.Xml", false], ["_create_simple_box_item", "elsie.boxmixin.BoxMixin", false], ["_debug_paint", "elsie.box.Box", false], ["_ensure_steps", "elsie.box.Box", false], ["_full_path", "elsie.cache.FsCache", false], ["_get_block_end_index", "elsie.textparser", false], ["_get_box", "elsie.box.Box", false], ["_get_box", "elsie.boxitem.BoxItem", false], ["_get_box", "elsie.boxmixin.BoxMixin", false], ["_get_filename", "elsie.cache.FsCache", false], ["_image_bitmap", "elsie.boxmixin.BoxMixin", false], ["_image_ora", "elsie.boxmixin.BoxMixin", false], ["_image_svg", "elsie.boxmixin.BoxMixin", false], ["_layer_to_svg", "elsie.ora", false], ["_load_query_cache", "elsie.slides.Slides", false], ["_make_query", "elsie.textboxitem.TextBoxItem", false], ["_min_steps", "elsie.box.Box", false], ["_open_blocks", "elsie.textparser", false], ["_open_blocks_count", "elsie.textparser", false], ["_query_cache_file", "elsie.slides.Slides", false], ["_render_svg", "elsie.boxmixin.BoxMixin", false], ["_repr_html_", "elsie.box.Box", false], ["_repr_html_", "elsie.slide.Slide", false], ["_save_query_cache", "elsie.slides.Slides", false], ["_set_padding", "elsie.layout", false], ["_show_progress", "elsie.slides.Slides", false], ["_stack_to_svg", "elsie.ora", false], ["_text_box_helper", "elsie.textboxitem.TextBoxItem", false], ["_text_helper", "elsie.boxmixin.BoxMixin", false], ["_tokens_merge_helper", "elsie.textparser", false], ["_traverse", "elsie.box.Box", false], ["add", "elsie.layout.Layout", false], ["add", "elsie.lazy.LazyPoint", false], ["add", "elsie.lazy.LazyValue", false], ["add_callback", "elsie.layout.Layout", false], ["add_child", "elsie.box.Box", false], ["add_line_numbers", "elsie.textparser", false], ["add_pdf", "elsie.slides.Slides", false], ["align", "elsie.textstyle.TextStyle", false], ["align", "elsie.textstyle.TextStyle", false], ["append", "elsie.pdfmerge.ExternalMerger", false], ["append", "elsie.pdfmerge.PyPdfMerger", false], ["arrow", "elsie", true], ["bold", "elsie.textstyle.TextStyle", false], ["bold", "elsie.textstyle.TextStyle", false], ["box", "elsie", true], ["box", "elsie.boxmixin.BoxMixin", false], ["box", "elsie.slide.Slide", false], ["boxitem", "elsie", true], ["boxmixin", "elsie", true], ["cache", "elsie", true], ["check_and_unpack_path_commands", "elsie.path", false], ["close", "elsie.inkscape.InkscapeShell", false], ["close", "elsie.sxml.Xml", false], ["code", "elsie.boxmixin.BoxMixin", false], ["color", "elsie.textstyle.TextStyle", false], ["color", "elsie.textstyle.TextStyle", false], ["compose", "elsie.textstyle.TextStyle", false], ["compose_style", "elsie.textstyle", false], ["compute", "elsie.value.PosValue", false], ["compute", "elsie.value.SizeValue", false], ["compute_query", "elsie.query", false], ["compute_size_request", "elsie.layout.Layout", false], ["convert_ora_to_svg", "elsie.ora", false], ["convert_to_pdf", "elsie.inkscape.InkscapeShell", false], ["copy", "elsie.textstyle.TextStyle", false], ["create_image_data", "elsie.image", false], ["current_fragment", "elsie.box.Box", false], ["current_fragment", "elsie.slide.Slide", false], ["draw", "elsie", true], ["draw", "elsie.boxitem.BoxItem", false], ["draw_bitmap", "elsie.draw", false], ["draw_text", "elsie.draw", false], ["element", "elsie.sxml.Xml", false], ["ellipse", "elsie.boxmixin.BoxMixin", false], ["ensure", "elsie.cache.FsCache", false], ["ensure", "elsie.value.SizeValue", false], ["ensure_by_file", "elsie.cache.FsCache", false], ["ensure_height", "elsie.layout.Layout", false], ["ensure_steps", "elsie.show.ShowInfo", false], ["ensure_width", "elsie.layout.Layout", false], ["escape_text", "elsie.sxml", false], ["eval", "elsie.lazy.LazyPoint", false], ["eval", "elsie.lazy.LazyValue", false], ["eval_pair", "elsie.lazy", false], ["eval_path_commands", "elsie.path", false], ["eval_value", "elsie.lazy", false], ["export", "elsie.render.PdfRenderUnit", false], ["export", "elsie.render.SvgRenderUnit", false], ["export_by_inkscape", "elsie.inkscape", false], ["extract_line", "elsie.textparser", false], ["extract_styled_content", "elsie.textparser", false], ["fbox", "elsie.boxmixin.BoxMixin", false], ["font", "elsie.textstyle.TextStyle", false], ["font", "elsie.textstyle.TextStyle", false], ["format", "elsie.highlight.MyFormatter", false], ["from_label", "elsie.show.ShowInfo", false], ["geom", "elsie", true], ["get", "elsie.cache.FsCache", false], ["get_image_steps", "elsie.image", false], ["get_javascript", "elsie.jupyter", false], ["get_painters", "elsie.box.Box", false], ["get_pdf_merger_by_name", "elsie.pdfmerge", false], ["get_slide_by_name", "elsie.slides.Slides", false], ["get_slide_repr_steps", "elsie.jupyter", false], ["get_style", "elsie.box.Box", false], ["get_style", "elsie.slides.Slides", false], ["get_svg", "elsie.render.RenderUnit", false], ["get_svg", "elsie.render.SvgRenderUnit", false], ["get_version", "elsie.inkscape.InkscapeShell", false], ["get_width", "elsie.inkscape.InkscapeShell", false], ["get_x", "elsie.inkscape.InkscapeShell", false], ["highlight", "elsie", true], ["highlight_code", "elsie.highlight", false], ["image", "elsie", true], ["image", "elsie.boxmixin.BoxMixin", false], ["inkscape", "elsie", true], ["inline_box", "elsie.textboxitem.TextBoxItem", false], ["is_inside_notebook", "elsie.jupyter", false], ["is_managed", "elsie.layout.Layout", false], ["is_visible", "elsie.show.ShowInfo", false], ["italic", "elsie.textstyle.TextStyle", false], ["italic", "elsie.textstyle.TextStyle", false], ["jupyter", "elsie", true], ["latex", "elsie", true], ["latex", "elsie.boxmixin.BoxMixin", false], ["layout", "elsie", true], ["lazy", "elsie", true], ["line", "elsie.boxmixin.BoxMixin", false], ["line_box", "elsie.textboxitem.TextBoxItem", false], ["line_spacing", "elsie.textstyle.TextStyle", false], ["line_spacing", "elsie.textstyle.TextStyle", false], ["make_highlight_styles", "elsie.highlight", false], ["make_render_unit", "elsie.slide.ExternPdfSlide", false], ["make_render_unit", "elsie.slide.Slide", false], ["managed_children", "elsie.layout.Layout", false], ["map", "elsie.lazy.LazyValue", false], ["max_step", "elsie.show.ShowInfo", false], ["mid_point", "elsie.boxmixin.BoxMixin", false], ["mid_x", "elsie.geom.Rect", false], ["mid_y", "elsie.geom.Rect", false], ["min_children_size", "elsie.layout.Layout", false], ["min_steps", "elsie.show.ShowInfo", false], ["move_end_point", "elsie.arrow.Arrow", false], ["new_slide", "elsie.slides.Slides", false], ["normalize_tokens", "elsie.textparser", false], ["number_of_lines", "elsie.textparser", false], ["ora", "elsie", true], ["overlay", "elsie.boxmixin.BoxMixin", false], ["p", "elsie.boxmixin.BoxMixin", false], ["parse", "elsie.show.ShowInfo", false], ["parse", "elsie.value.PosValue", false], ["parse", "elsie.value.SizeValue", false], ["parse_show_info_from_label", "elsie.image", false], ["parse_text", "elsie.textparser", false], ["path", "elsie", true], ["path", "elsie.boxmixin.BoxMixin", false], ["path_points_for_end_arrow", "elsie.path", false], ["path_update_end_point", "elsie.path", false], ["pdfmerge", "elsie", true], ["per_page_groupping", "elsie.render", false], ["point", "elsie.layout.Layout", false], ["polygon", "elsie.boxmixin.BoxMixin", false], ["position", "elsie.geom.Rect", false], ["prepare", "elsie.slide.ExternPdfSlide", false], ["prepare", "elsie.slide.Slide", false], ["process_query", "elsie.slides.Slides", false], ["query", "elsie", true], ["raw_text", "elsie.sxml.Xml", false], ["rcontext", "elsie", true], ["rect", "elsie.boxmixin.BoxMixin", false], ["remove_unused", "elsie.cache.FsCache", false], ["rename_ids", "elsie.svg", false], ["render", "elsie", true], ["render", "elsie.arrow.Arrow", false], ["render", "elsie.slides.Slides", false], ["render", "elsie.textboxitem.TextBoxItem", false], ["render_latex", "elsie.latex", false], ["render_slide_html", "elsie.jupyter", false], ["replace_relative_steps", "elsie.show", false], ["run_command", "elsie.inkscape.InkscapeShell", false], ["run_query", "elsie.inkscape.InkscapeShell", false], ["sbox", "elsie.boxmixin.BoxMixin", false], ["scaler", "elsie.boxmixin", false], ["segment_delta", "elsie.geom", false], ["segment_len", "elsie.geom", false], ["segment_resize", "elsie.geom", false], ["set", "elsie.sxml.Xml", false], ["set_font_from_style", "elsie.draw", false], ["set_image_size_request", "elsie.layout.Layout", false], ["set_paint_style", "elsie.draw", false], ["set_rect", "elsie.layout.Layout", false], ["set_style", "elsie.box.Box", false], ["set_style", "elsie.slides.Slides", false], ["show", "elsie", true], ["shrink", "elsie.geom.Rect", false], ["size", "elsie.geom.Rect", false], ["size", "elsie.textstyle.TextStyle", false], ["size", "elsie.textstyle.TextStyle", false], ["slide", "elsie", true], ["slide", "elsie.slides.Slides", false], ["slides", "elsie", true], ["steps", "elsie.slide.ExternPdfSlide", false], ["steps", "elsie.slide.Slide", false], ["svg", "elsie", true], ["svg_begin", "elsie.svg", false], ["svg_end", "elsie.svg", false], ["svg_file_input", "elsie.inkscape", false], ["svg_size_to_pixels", "elsie.svg", false], ["sxml", "elsie", true], ["text", "elsie.boxmixin.BoxMixin", false], ["text", "elsie.sxml.Xml", false], ["text_x_in_rect", "elsie.textboxitem", false], ["textboxitem", "elsie", true], ["textparser", "elsie", true], ["textstyle", "elsie", true], ["to_string", "elsie.sxml.Xml", false], ["tokens_merge", "elsie.textparser", false], ["tokens_to_text_without_style", "elsie.textparser", false], ["unpack_point", "elsie.lazy", false], ["update", "elsie.textstyle.TextStyle", false], ["update_style", "elsie.box.Box", false], ["update_style", "elsie.slides.Slides", false], ["value", "elsie", true], ["variant_numeric", "elsie.textstyle.TextStyle", false], ["variant_numeric", "elsie.textstyle.TextStyle", false], ["version", "elsie", true], ["wait_for_prompt", "elsie.inkscape.InkscapeShell", false], ["write", "elsie.pdfmerge.ExternalMerger", false], ["write", "elsie.pdfmerge.PyPdfMerger", false], ["write", "elsie.sxml.Xml", false], ["write_debug", "elsie.render.RenderUnit", false], ["write_debug", "elsie.render.SvgRenderUnit", false], ["x", "elsie.boxmixin.BoxMixin", false], ["x", "elsie.layout.Layout", false], ["x2", "elsie.geom.Rect", false], ["y", "elsie.boxmixin.BoxMixin", false], ["y", "elsie.layout.Layout", false], ["y2", "elsie.geom.Rect", false]]');
    $("#search").autocomplete({
    source: NEDOC_MODULES.map(function(i) { return { label: i[0], desc: i[1], fulllink: i[2] }; }),
    select: function(event, ui) {
        if (ui.fulllink) {
            window.location.href = ui.item.desc + "." + ui.item.label + ".html";
        } else {
            window.location.href = ui.item.desc + ".html#" + ui.item.label;
        }
    },
    }).autocomplete("instance")._renderItem = function(ul, item) {
        return $("<li>")
            .append("<div><b>" + item.label + "</b><br>" + item.desc + "</div>")
            .appendTo(ul);
    };

    $(".fexpand").on("click", function(event) {
        event.preventDefault();
        var elem = $(this);
        var parent = elem.closest(".fn");
        parent.children(".fdetail").toggle(200);
    })

    if(window.location.hash) {
        var name = window.location.hash.slice(3); // remove #f_ prefix
        var elem = $("#fn_" + name);
        elem.toggle(0);
        elem.parent().parent().css("backgroundColor", "#e9f6ff");
    }
});
