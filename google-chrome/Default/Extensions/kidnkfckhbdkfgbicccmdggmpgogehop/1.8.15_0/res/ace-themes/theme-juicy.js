/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

define('ace/theme/juicy', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-juicy";
exports.cssText = "/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: 4b481719-122a-431e-3fdb-8d6f0c1b9bc5) */\
.ace-juicy .ace_gutter {\
background: #e8e8e8;\
color: #333;\
}\
.ace-juicy .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-juicy {\
background-color: #222222;\
color: #e3e2e0;\
}\
.ace-juicy .ace_cursor {\
color: #f8f8f0;\
}\
.ace-juicy .ace_marker-layer .ace_selection {\
background: #FF4E50;\
}\
.ace-juicy.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #222222;\
border-radius: 2px;\
}\
.ace-juicy .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174);\
}\
.ace-juicy .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #3b3a32;\
}\
.ace-juicy .ace_marker-layer .ace_active-line {\
background: #282828;\
}\
.ace-juicy .ace_gutter-active-line {\
background-color: #282828;\
}\
.ace-juicy .ace_marker-layer .ace_selected-word {\
border: 1px solid #FF4E50;\
}\
.ace-juicy .ace_fold {\
background-color: #c3cb4c;\
border-color: #e3e2e0;\
}\
.ace-juicy .ace_keyword{color:#EDB92E;}.ace-juicy .ace_keyword.ace_other.ace_unit{color:#FF4E50;}.ace-juicy .ace_constant.ace_language{color:#3bc7b8;}.ace-juicy .ace_constant.ace_numeric{color:#CE1836;}.ace-juicy .ace_constant.ace_character{color:#3bc7b8;}.ace-juicy .ace_constant.ace_other{color:#3bc7b8;}.ace-juicy .ace_support.ace_function{color:#F85931;}.ace-juicy .ace_support.ace_constant{color:#3bc7b8;}.ace-juicy .ace_support.ace_constant.ace_property-value{color:#3bc7b8;}.ace-juicy .ace_support.ace_class{font-style:italic;\
color:#3bc7b8;}.ace-juicy .ace_support.ace_type{font-style:italic;\
color:#3bc7b8;}.ace-juicy .ace_storage{color:#3bc7b8;}.ace-juicy .ace_storage.ace_type{color:#FF4E50;}.ace-juicy .ace_invalid{color:#f8f8f0;\
background-color:#00a8c6;}.ace-juicy .ace_invalid.ace_deprecated{color:#f8f8f0;\
background-color:#00a8c6;}.ace-juicy .ace_string{color:#3bc7b8;}.ace-juicy .ace_comment{color:#777777;}.ace-juicy .ace_variable{color:#c3cb4c;}.ace-juicy .ace_variable.ace_parameter{font-style:italic;}.ace-juicy .ace_entity.ace_other.ace_attribute-name{color:#3bc7b8;}.ace-juicy .ace_entity.ace_name.ace_function{color:#c3cb4c;}.ace-juicy .ace_entity.ace_name.ace_tag{color:#FF4E50;}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
