ace.define(
  "ace/theme/base16-atelier-dune-light",
  ["require", "exports", "module", "ace/lib/dom"],
  function (acequire, exports, module) {
    exports.isDark = false;
    exports.cssClass = "ace-base16-atelier-dune-light";

    exports.cssText = `
    .ace-base16-atelier-dune-light {
        /* rsthemes 0.4.0 */
        /* https://github.com/gadenbuie/rsthemes */
        /* rs-theme-name: base16 Atelier Dune Light {rsthemes} */
        /* Atelier Dune Light by Bram de Haan (http://atelierbramdehaan.nl) */
        /* rs-theme-is-dark: FALSE */
      }
      .ace-base16-atelier-dune-light .ace_gutter {
        background: #fdf9e2;
        color: rgba(32, 32, 29, 0.5);
      }
      .ace-base16-atelier-dune-light .ace_print-margin {
        width: 2px;
        background: rgba(166, 162, 140, 0.2);
      }
      .ace-base16-atelier-dune-light .ace_editor {
        background-color: #fefbec;
        color: #20201d;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat.ace_editor_theme {
        background-color: #fefbec;
        color: #20201d;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat.ace_editor_theme .profvis-flamegraph {
        background-color: #fefbec;
        color: #20201d;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .ace_editor_theme {
        background-color: #fefbec !important;
        color: #20201d !important;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .ace_editor_theme table {
        background-color: #fefbec !important;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .ace_editor_theme table thead > tr > th {
        background-color: #fefbec !important;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat.ace_editor_theme a {
        color: #20201d !important;
        font-weight: bold;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .gwt-Label {
        color: #20201d;
      }
      .ace-base16-atelier-dune-light .ace_cursor {
        color: #ae9513;
      }
      .ace-base16-atelier-dune-light .normal-mode .ace_cursor {
        border: 0 !important;
        background-color: #ae9513;
      }
      .ace-base16-atelier-dune-light .ace_marker-layer .ace_selection {
        background: rgba(166, 162, 140, 0.4);
      }
      .ace-base16-atelier-dune-light .ace_marker-layer .ace_step {
        background: #79c652;
      }
      .ace-base16-atelier-dune-light .ace_marker-layer .ace_bracket {
        margin: -1px 0 0 -1px;
        border: 1px solid #a6a28c;
      }
      .ace-base16-atelier-dune-light .ace_marker-layer .ace_active-line {
        background: rgba(251, 241, 188, 0.5);
      }
      .ace-base16-atelier-dune-light .ace_marker-layer .ace_selected-word {
        border: 1px solid rgba(166, 162, 140, 0.4);
      }
      .ace-base16-atelier-dune-light .ace_marker-layer .ace_foreign_line {
        position: absolute;
        z-index: -1;
        background-color: #e8e4cf;
      }
      .ace-base16-atelier-dune-light .ace_marker-layer .ace_active_debug_line {
        position: absolute;
        z-index: -1;
        background-color: #fbf1bc;
      }
      .ace-base16-atelier-dune-light .ace_marker-layer .ace_find_line {
        position: absolute;
        z-index: -1;
        background-color: #e8e4cf;
      }
      .ace-base16-atelier-dune-light .ace_gutter-active-line {
        background-color: #e8e4cf;
      }
      .ace-base16-atelier-dune-light .ace_fold {
        background-color: #d73737;
        border: 1px solid #20201d !important;
      }
      .ace-base16-atelier-dune-light .ace_indent-guide {
        display: inline-block;
        height: 100%;
        box-shadow: 1px 0 0 #a6a28c;
      }
      .ace-base16-atelier-dune-light .ace_active-line ~ .ace_selection.ace_start {
        background-color: #a6a28c;
      }
      .ace-base16-atelier-dune-light [class="ace_keyword"] {
        color: #b854d4;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_keyword {
        font-style: normal;
      }
      .ace-base16-atelier-dune-light .ace_keyword.ace_operator {
        font-style: normal;
        color: #1fad83;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_keyword.ace_other.ace_unit {
        font-style: normal;
        color: #b65611;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_constant.ace_language {
        color: #d43552;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_constant.ace_numeric {
        color: #b65611;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_constant.ace_character {
        color: #b65611;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_constant.ace_other {
        color: #20201d;
      }
      .ace-base16-atelier-dune-light .ace_line > .ace_constant.ace_language {
        color: #b65611;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_identifier.ace_support.ace_function {
        color: #6684e1;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_identifier.ace_support.ace_constant {
        color: #b65611;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_identifier.ace_support.ace_class {
        font-style: italic;
        color: #ae9513;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_identifier.ace_support.ace_type {
        color: #ae9513;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_paren.ace_keyword.ace_operator {
        color: #1fad83;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_storage {
        color: #b854d4;
      }
      .ace-base16-atelier-dune-light .ace_storage.ace_type {
        color: #b854d4;
      }
      .ace-base16-atelier-dune-light .ace_invalid {
        background-color: rgba(215, 55, 55, 0.5);
      }
      .ace-base16-atelier-dune-light .ace_invalid.ace_deprecated {
        background-color: rgba(184, 84, 212, 0.5);
      }
      .ace-base16-atelier-dune-light .ace_string {
        color: #60ac39;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_comment {
        color: #7d7a68;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_invisible {
        color: #999580;
      }
      .ace-base16-atelier-dune-light .ace_variable {
        color: #d73737;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_variable.ace_parameter {
        color: #b65611;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_identifier {
        color: #20201d;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_entity.ace_name.ace_function {
        color: #6684e1;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_entity.ace_name.ace_tag {
        color: #d73737;
      }
      .ace-base16-atelier-dune-light .ace_entity.ace_other.ace_attribute-name {
        color: #b854d4;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_bracket {
        margin: 0 !important;
        border: 0 !important;
        background-color: #a6a28c;
      }
      .ace-base16-atelier-dune-light .ace_console_error {
        background-color: #e8e4cf;
      }
      .ace-base16-atelier-dune-light .ace_layer {
        z-index: 4;
      }
      .ace-base16-atelier-dune-light .ace_layer.ace_print-margin-layer {
        z-index: 2;
      }
      .ace-base16-atelier-dune-light .ace_layer.ace_marker-layer {
        z-index: 1;
      }
      .ace-base16-atelier-dune-light .ace_layer.ace_cursor-layer {
        z-index: 3;
      }
      .ace-base16-atelier-dune-light .ace_selection.ace_start {
        box-shadow: 0 0 3px 0 #fefbec;
        border-radius: 2px;
      }
      .ace-base16-atelier-dune-light .ace_meta.ace_tag {
        color: #1fad83;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_markup.ace_heading, .ace-base16-atelier-dune-light .ace_markup.ace_heading ~ .ace_heading {
        font-weight: 600;
        color: #60ac39;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_support.ace_function.ace_codebegin, .ace-base16-atelier-dune-light .ace_support.ace_function.ace_codeend {
        color: #6684e1;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .ace_markup.ace_href {
        color: #b854d4;
        background-color: inherit;
      }
      .ace-base16-atelier-dune-light .nocolor.ace_editor .ace_line span {
        color: #b854d4 !important;
        background-color: inherit !important;
      }
      .ace-base16-atelier-dune-light #rstudio_console_input .ace_marker-layer .ace_selection {
        background: rgba(166, 162, 140, 0.4);
        /* ---- RStudio Theme ---- */
        /* background */
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-default {
        background: #fefbec !important;
        color: #20201d !important;
        /* collapsed toolbar on rstudio server */
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-default .rstudio-themes-background {
        background: #fefbec !important;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-default [role="banner"] + [role="navigation"] > table > tbody > tr > td, .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-default header + [role="navigation"] > table > tbody > tr > td {
        background: #fefbec;
        border-color: #fefbec;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-default .rstudio-themes-border {
        border-color: #fefbec;
        /* inactive tabs */
      }
      .ace-base16-atelier-dune-light table.rstheme_tabLayoutCenter, .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-default .gwt-TabLayoutPanelTabs, .ace-base16-atelier-dune-light .rstheme_multiPodUtilityTabArea {
        background: #a6a28c !important;
      }
      .ace-base16-atelier-dune-light table.rstheme_tabLayoutCenter .gwt-Label, .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-default .gwt-TabLayoutPanelTabs .gwt-Label, .ace-base16-atelier-dune-light .rstheme_multiPodUtilityTabArea .gwt-Label {
        color: #292824;
        /* toolbar and selected tab */
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-default .rstheme_center, .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-default .gwt-TabLayoutPanelTabs .gwt-TabLayoutPanelTab-selected table.rstheme_tabLayoutCenter {
        background: #e8e4cf !important;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-default .gwt-TabLayoutPanelTab-selected .gwt-Label {
        color: #6e6b5e;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-default .gwt-TabLayoutPanelTab:hover .rstheme_tabLayoutCenter {
        background: #a6a28c !important;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .rstheme_toolbarWrapper {
        background: #e8e4cf !important;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .rstheme_toolbarWrapper button, .ace-base16-atelier-dune-light .rstudio-themes-flat .rstheme_toolbarWrapper a, .ace-base16-atelier-dune-light .rstudio-themes-flat .rstheme_toolbarWrapper div {
        color: #20201d !important;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-default .gwt-SplitLayoutPanel-HDragger, .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-default .gwt-SplitLayoutPanel-VDragger {
        /* spliters */
        background: transparent !important;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .search, .ace-base16-atelier-dune-light .rstudio-themes-flat.rstudio-themes-default-menus .search {
        /* search */
        background: #e8e4cf !important;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat #rstudio_workbench_panel_find_in_files td[colspan="2"] {
        /* file name in Find in Files */
        color: #d43552;
        /* pane toolbars */
      }
      .ace-base16-atelier-dune-light .rstheme_secondaryToolbar, .ace-base16-atelier-dune-light .rstudio-themes-flat .dataGridHeader {
        background: #e8e4cf !important;
        /* menu background */
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .popupMiddleCenter, .ace-base16-atelier-dune-light .rstudio-themes-flat .menuPopupMiddleCenter, .ace-base16-atelier-dune-light .rstudio-themes-flat .suggestPopupMiddleCenter {
        background: #fefbec !important;
        color: #20201d !important;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .popupMiddleCenter .item.item-selected, .ace-base16-atelier-dune-light .rstudio-themes-flat .menuPopupMiddleCenter .item.item-selected, .ace-base16-atelier-dune-light .rstudio-themes-flat .suggestPopupMiddleCenter .item.item-selected {
        color: #20201d !important;
        background: #a6a28c !important;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .themedPopupPanel {
        border: solid 1px #a6a28c;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .themedPopupPanel ~ div.popupContent div:nth-child(1) {
        border: solid 1px #a6a28c;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .popupContent {
        background: #fefbec;
        color: #20201d;
        border-color: #a6a28c;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .popupContent:not(.popupMiddleCenterInner) div div:nth-child(2) {
        background-color: unset;
        border: none;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .popupContent + .rstudio-themes-scrollbars {
        border-color: #a6a28c;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .gwt-PopupPanel .popupContent {
        background: #fefbec;
        padding: 2px;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .gwt-PopupPanel .popupContent table {
        background: #20201d;
        border: 0;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .gwt-PopupPanel .popupContent table .gwt-Label {
        color: #fefbec;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat.rstudio-themes-dark-menus .gwt-MenuItem.gwt-MenuItem-selected, .ace-base16-atelier-dune-light .rstudio-themes-flat.rstudio-themes-dark-menus .gwt-MenuItem.gwt-MenuItem-selected > table {
        background: #a6a28c;
        color: #20201d;
        /* hacky toolbars section */
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-default {
        /* this next one might not be needed anymore (at least after 1.4+) */
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-default .windowframe > div:last-child > div > div > div > div > div:not(.gwt-TabLayoutPanelTabs) {
        background: #a6a28c !important;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-default .windowframe > div:last-child > div > div > div:nth-child(3) > div {
        background: #a6a28c !important;
        /* Data Frame Preview */
      }
      .ace-base16-atelier-dune-light .dataTables_wrapper thead th {
        background-color: #e8e4cf !important;
        color: #6e6b5e !important;
      }
      .ace-base16-atelier-dune-light .dataTables_scrollBody table tbody td:first-child {
        background: #e8e4cf !important;
        color: #6e6b5e !important;
      }
      .ace-base16-atelier-dune-light .dataTables_info {
        background: #e8e4cf !important;
        color: #6e6b5e !important;
        /* scrollbars */
        /* reset scrollbar background color */
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-scrollbars ::-webkit-scrollbar {
        background-color: unset;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .ace_scroller {
        overflow: visible;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat, .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-scrollbars {
        /* Works on Firefox */
        scrollbar-width: auto;
        scrollbar-color: #e8e4cf rgba(254, 251, 236, 0.5);
        /* Works on Chrome, Edge, and Safari */
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat ::-webkit-scrollbar, .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-scrollbars ::-webkit-scrollbar {
        width: auto;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat *::-webkit-scrollbar-track, .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-scrollbars *::-webkit-scrollbar-track {
        background: rgba(254, 251, 236, 0.5);
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat *::-webkit-scrollbar-thumb, .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-scrollbars *::-webkit-scrollbar-thumb {
        background-color: #e8e4cf;
        border-radius: 0px;
        border: 2px solid #fefbec;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat *::-webkit-scrollbar-thumb:hover, .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-scrollbars *::-webkit-scrollbar-thumb:hover {
        background-color: #e0dabe;
        /* fix overly zealous css rules */
      }
      .ace-base16-atelier-dune-light .gwt-DialogBox-ModalDialog .dialogContent .gwt-Label {
        color: #333333;
        /* job progress bar */
      }
      .ace-base16-atelier-dune-light .rstheme_toolbarWrapper [role="progressbar"] > div, .ace-base16-atelier-dune-light .windowframe [role="progressbar"] > div {
        background-color: #a6a28c;
      }
      .ace-base16-atelier-dune-light #rstudio_command_palette_search, .ace-base16-atelier-dune-light #rstudio_command_palette_list [id^="rstudio_command_"], .ace-base16-atelier-dune-light input#rstudio_command_palette_search {
        background-color: #fefbec;
        border: none;
      }
      .ace-base16-atelier-dune-light #rstudio_command_palette_list {
        background-color: #fefbec;
        border-color: #fefbec;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .rstudio-themes-border {
        border-color: #fefbec;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .gwt-PopupPanel .popupContent #rstudio_command_palette_list [id*="rstudio_command_"] table .gwt-Label, .ace-base16-atelier-dune-light .rstudio-themes-flat .gwt-PopupPanel .popupContent #rstudio_command_palette_list [id*="rstudio_command_"] table td {
        background-color: #fefbec;
        color: #20201d;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .gwt-PopupPanel .popupContent #rstudio_command_palette_list [id*="rstudio_command_"]:hover, .ace-base16-atelier-dune-light .rstudio-themes-flat .gwt-PopupPanel .popupContent #rstudio_command_palette_list [id*="rstudio_command_"]:hover [id^="rstudio_command_entry"], .ace-base16-atelier-dune-light .rstudio-themes-flat .gwt-PopupPanel .popupContent #rstudio_command_palette_list [id*="rstudio_command_"]:hover table .gwt-Label, .ace-base16-atelier-dune-light .rstudio-themes-flat .gwt-PopupPanel .popupContent #rstudio_command_palette_list [id*="rstudio_command_"]:hover table td {
        background-color: #fdf6d4;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .gwt-PopupPanel .popupContent #rstudio_command_palette_list [aria-selected="true"], .ace-base16-atelier-dune-light .rstudio-themes-flat .gwt-PopupPanel .popupContent #rstudio_command_palette_list [aria-selected="true"] [id^="rstudio_command_entry"], .ace-base16-atelier-dune-light .rstudio-themes-flat .gwt-PopupPanel .popupContent #rstudio_command_palette_list [aria-selected="true"] table .gwt-Label, .ace-base16-atelier-dune-light .rstudio-themes-flat .gwt-PopupPanel .popupContent #rstudio_command_palette_list [aria-selected="true"] table td {
        background-color: #fbf1bc;
      }
      .ace-base16-atelier-dune-light input#rstudio_command_palette_search {
        padding: 10px 0;
        width: 580px;
        border: none;
      }
      .ace-base16-atelier-dune-light .js-focus-visible input#rstudio_command_palette_search {
        outline-offset: 5px !important;
      }
      .ace-base16-atelier-dune-light .rstudio-themes-flat .popupContent [id^="rstudio_command"] [id^="rstudio_command_entry_"] .gwt-Label, .ace-base16-atelier-dune-light .rstudio-themes-flat .popupContent [id^="rstudio_command"] [id^="rstudio_command_entry_"] .gwt-Label span {
        border: none;
        /* Rainbow Parenthesis */
      }
      .ace-base16-atelier-dune-light .ace_paren_color_0 {
        color: #1fad83;
      }
      .ace-base16-atelier-dune-light .ace_paren_color_1 {
        color: #6684e1;
      }
      .ace-base16-atelier-dune-light .ace_paren_color_2 {
        color: #ae9513;
      }
      .ace-base16-atelier-dune-light .ace_paren_color_3 {
        color: #b65611;
      }
      .ace-base16-atelier-dune-light .ace_paren_color_4 {
        color: #d73737;
      }
      .ace-base16-atelier-dune-light .ace_paren_color_5 {
        color: #60ac39;
      }
      .ace-base16-atelier-dune-light .ace_paren_color_6 {
        color: #b854d4;
      }
    `;

    var dom = acequire("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
  }
);
