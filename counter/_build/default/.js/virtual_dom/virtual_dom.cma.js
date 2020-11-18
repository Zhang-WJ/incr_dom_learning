(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_js_from_array=runtime.caml_js_from_array,
     caml_js_wrap_callback=runtime.caml_js_wrap_callback,
     caml_jsstring_of_string=runtime.caml_jsstring_of_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_string_of_jsstring=runtime.caml_string_of_jsstring;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call8(f,a0,a1,a2,a3,a4,a5,a6,a7)
     {return f.length == 8
              ?f(a0,a1,a2,a3,a4,a5,a6,a7)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7])}
    function caml_call9(f,a0,a1,a2,a3,a4,a5,a6,a7,a8)
     {return f.length == 9
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_src_dom_float_ml$0=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_src_dom_float_ml$1=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_src_dom_float_ml$2=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_src_dom_float_ml$3=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_src_dom_float_ml$4=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_src_dom_float_ml$5=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_src_dom_float_ml$6=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_Virtual_dom_Dom_float=
      caml_string_of_jsbytes("Virtual_dom__Dom_float"),
     cst_virtual_dom=caml_string_of_jsbytes("virtual_dom"),
     cst_src_dom_float_ml=caml_string_of_jsbytes("src/dom_float.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_virtual_dom$0=caml_string_of_jsbytes("virtual_dom"),
     cst_src_dom_float_ml$7=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_src_dom_float_ml$8=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_src_dom_float_ml$9=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_src_dom_float_ml$10=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_src_dom_float_ml$11=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_src_dom_float_ml$12=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_src_dom_float_ml$13=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_src_dom_float_ml$14=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_src_dom_float_ml$15=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_src_dom_float_ml$16=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_src_dom_float_ml$17=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_src_dom_float_ml$18=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_src_dom_float_ml$19=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_src_dom_float_ml$20=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_src_dom_float_ml$21=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_src_dom_float_ml$22=caml_string_of_jsbytes("src/dom_float.ml"),
     cst_73a2b20534ede23efe6432d58d=
      caml_string_of_jsbytes("73a2b20534ede23efe6432d58da7721e"),
     cst_virtual_dom$1=caml_string_of_jsbytes("virtual_dom"),
     cst_Virtual_dom_Dom_float$0=
      caml_string_of_jsbytes("Virtual_dom__Dom_float"),
     cst_Virtual_dom_Event=caml_string_of_jsbytes("Virtual_dom__Event"),
     cst_virtual_dom$2=caml_string_of_jsbytes("virtual_dom"),
     cst_src_event_ml=caml_string_of_jsbytes("src/event.ml"),
     cst$0=caml_string_of_jsbytes(""),
     cst_virtual_dom$3=caml_string_of_jsbytes("virtual_dom"),
     cst_Virtual_dom_Event_Viewport=
      caml_string_of_jsbytes("Virtual_dom__Event.Viewport_changed"),
     cst_Virtual_dom_Event_Stop_pro=
      caml_string_of_jsbytes("Virtual_dom__Event.Stop_propagation"),
     cst_Virtual_dom_Event_Prevent_=
      caml_string_of_jsbytes("Virtual_dom__Event.Prevent_default"),
     cst_virtual_dom$4=caml_string_of_jsbytes("virtual_dom"),
     cst_Virtual_dom_Event$0=caml_string_of_jsbytes("Virtual_dom__Event"),
     cst_Virtual_dom_Event_intf=
      caml_string_of_jsbytes("Virtual_dom__Event_intf"),
     cst_virtual_dom$5=caml_string_of_jsbytes("virtual_dom"),
     cst_src_event_intf_ml=caml_string_of_jsbytes("src/event_intf.ml"),
     cst$1=caml_string_of_jsbytes(""),
     cst_virtual_dom$6=caml_string_of_jsbytes("virtual_dom"),
     cst_virtual_dom$7=caml_string_of_jsbytes("virtual_dom"),
     cst_Virtual_dom_Event_intf$0=
      caml_string_of_jsbytes("Virtual_dom__Event_intf"),
     cst_placeholder$0=caml_string_of_jsbytes("placeholder"),
     cst_on=caml_string_of_jsbytes("on"),
     cst_max=caml_string_of_jsbytes("max"),
     cst_min=caml_string_of_jsbytes("min"),
     cst_src=caml_string_of_jsbytes("src"),
     cst_title=caml_string_of_jsbytes("title"),
     cst_tabindex=caml_string_of_jsbytes("tabindex"),
     cst_value$0=caml_string_of_jsbytes("value"),
     cst_type=caml_string_of_jsbytes("type"),
     cst_for=caml_string_of_jsbytes("for"),
     cst_autofocus=caml_string_of_jsbytes("autofocus"),
     cst_placeholder=caml_string_of_jsbytes("placeholder"),
     cst_href=caml_string_of_jsbytes("href"),
     cst_name=caml_string_of_jsbytes("name"),
     cst_id=caml_string_of_jsbytes("id"),
     cst_class=caml_string_of_jsbytes("class"),
     cst_invalid_classnames=caml_string_of_jsbytes("invalid classnames"),
     cst_invalid_classname=caml_string_of_jsbytes("invalid classname"),
     cst_foo_bar$0=caml_string_of_jsbytes("foo bar"),
     cst$3=caml_string_of_jsbytes(""),
     cst_foo_bar=caml_string_of_jsbytes("foo-bar"),
     cst_style=caml_string_of_jsbytes("style"),
     cst_value=caml_string_of_jsbytes("value"),
     cst_Virtual_dom_Attr=caml_string_of_jsbytes("Virtual_dom__Attr"),
     cst_virtual_dom$8=caml_string_of_jsbytes("virtual_dom"),
     cst_src_attr_ml=caml_string_of_jsbytes("src/attr.ml"),
     cst$2=caml_string_of_jsbytes(""),
     cst_virtual_dom$9=caml_string_of_jsbytes("virtual_dom"),
     cst_src_attr_ml$0=caml_string_of_jsbytes("src/attr.ml"),
     cst_valid=caml_string_of_jsbytes(": valid"),
     cst_src_attr_ml$1=caml_string_of_jsbytes("src/attr.ml"),
     cst_invalid_empty=caml_string_of_jsbytes(": invalid-empty"),
     cst_src_attr_ml$2=caml_string_of_jsbytes("src/attr.ml"),
     cst_invalid_space=caml_string_of_jsbytes(": invalid-space"),
     cst$4=caml_string_of_jsbytes(""),
     cst_checked=caml_string_of_jsbytes("checked"),
     cst$5=caml_string_of_jsbytes(""),
     cst_selected=caml_string_of_jsbytes("selected"),
     cst$6=caml_string_of_jsbytes(""),
     cst_hidden=caml_string_of_jsbytes("hidden"),
     cst$7=caml_string_of_jsbytes(""),
     cst_disabled=caml_string_of_jsbytes("disabled"),
     cst_focus=caml_string_of_jsbytes("focus"),
     cst_blur=caml_string_of_jsbytes("blur"),
     cst_click=caml_string_of_jsbytes("click"),
     cst_contextmenu=caml_string_of_jsbytes("contextmenu"),
     cst_dblclick=caml_string_of_jsbytes("dblclick"),
     cst_mousemove=caml_string_of_jsbytes("mousemove"),
     cst_mouseup=caml_string_of_jsbytes("mouseup"),
     cst_mousedown=caml_string_of_jsbytes("mousedown"),
     cst_mouseenter=caml_string_of_jsbytes("mouseenter"),
     cst_mouseleave=caml_string_of_jsbytes("mouseleave"),
     cst_mouseover=caml_string_of_jsbytes("mouseover"),
     cst_mouseout=caml_string_of_jsbytes("mouseout"),
     cst_keyup=caml_string_of_jsbytes("keyup"),
     cst_keypress=caml_string_of_jsbytes("keypress"),
     cst_keydown=caml_string_of_jsbytes("keydown"),
     cst_change=caml_string_of_jsbytes("change"),
     cst_input=caml_string_of_jsbytes("input"),
     cst_virtual_dom$10=caml_string_of_jsbytes("virtual_dom"),
     cst_Virtual_dom_Attr$0=caml_string_of_jsbytes("Virtual_dom__Attr"),
     cst_Virtual_dom_Attr_intf=
      caml_string_of_jsbytes("Virtual_dom__Attr_intf"),
     cst_virtual_dom$11=caml_string_of_jsbytes("virtual_dom"),
     cst_src_attr_intf_ml=caml_string_of_jsbytes("src/attr_intf.ml"),
     cst$8=caml_string_of_jsbytes(""),
     cst_virtual_dom$12=caml_string_of_jsbytes("virtual_dom"),
     cst_virtual_dom$13=caml_string_of_jsbytes("virtual_dom"),
     cst_Virtual_dom_Attr_intf$0=
      caml_string_of_jsbytes("Virtual_dom__Attr_intf"),
     cst_Virtual_dom_Attrs=caml_string_of_jsbytes("Virtual_dom__Attrs"),
     cst_virtual_dom$14=caml_string_of_jsbytes("virtual_dom"),
     cst_src_attrs_ml=caml_string_of_jsbytes("src/attrs.ml"),
     cst$9=caml_string_of_jsbytes(""),
     cst_virtual_dom$15=caml_string_of_jsbytes("virtual_dom"),
     cst_virtual_dom$16=caml_string_of_jsbytes("virtual_dom"),
     cst_Virtual_dom_Attrs$0=caml_string_of_jsbytes("Virtual_dom__Attrs"),
     cst$11=caml_string_of_jsbytes(""),
     cst_Virtual_dom_Node=caml_string_of_jsbytes("Virtual_dom__Node"),
     cst_virtual_dom$17=caml_string_of_jsbytes("virtual_dom"),
     cst_src_node_ml=caml_string_of_jsbytes("src/node.ml"),
     cst$10=caml_string_of_jsbytes(""),
     cst_virtual_dom$18=caml_string_of_jsbytes("virtual_dom"),
     cst_a=caml_string_of_jsbytes("a"),
     cst_body=caml_string_of_jsbytes("body"),
     cst_button=caml_string_of_jsbytes("button"),
     cst_code=caml_string_of_jsbytes("code"),
     cst_div=caml_string_of_jsbytes("div"),
     cst_footer=caml_string_of_jsbytes("footer"),
     cst_h1=caml_string_of_jsbytes("h1"),
     cst_h2=caml_string_of_jsbytes("h2"),
     cst_h3=caml_string_of_jsbytes("h3"),
     cst_h4=caml_string_of_jsbytes("h4"),
     cst_h5=caml_string_of_jsbytes("h5"),
     cst_h6=caml_string_of_jsbytes("h6"),
     cst_header=caml_string_of_jsbytes("header"),
     cst_html=caml_string_of_jsbytes("html"),
     cst_input$0=caml_string_of_jsbytes("input"),
     cst_textarea=caml_string_of_jsbytes("textarea"),
     cst_select=caml_string_of_jsbytes("select"),
     cst_option=caml_string_of_jsbytes("option"),
     cst_label=caml_string_of_jsbytes("label"),
     cst_li=caml_string_of_jsbytes("li"),
     cst_p=caml_string_of_jsbytes("p"),
     cst_pre=caml_string_of_jsbytes("pre"),
     cst_section=caml_string_of_jsbytes("section"),
     cst_span=caml_string_of_jsbytes("span"),
     cst_strong=caml_string_of_jsbytes("strong"),
     cst_table=caml_string_of_jsbytes("table"),
     cst_tbody=caml_string_of_jsbytes("tbody"),
     cst_td=caml_string_of_jsbytes("td"),
     cst_th=caml_string_of_jsbytes("th"),
     cst_thead=caml_string_of_jsbytes("thead"),
     cst_tr=caml_string_of_jsbytes("tr"),
     cst_ul=caml_string_of_jsbytes("ul"),
     cst_ol=caml_string_of_jsbytes("ol"),
     cst_br=caml_string_of_jsbytes("br"),
     cst_hr=caml_string_of_jsbytes("hr"),
     cst_virtual_dom$19=caml_string_of_jsbytes("virtual_dom"),
     cst_Virtual_dom_Node$0=caml_string_of_jsbytes("Virtual_dom__Node"),
     cst_Virtual_dom_Tyxml_f=caml_string_of_jsbytes("Virtual_dom__Tyxml_f"),
     cst_virtual_dom$20=caml_string_of_jsbytes("virtual_dom"),
     cst_src_tyxml_f_ml=caml_string_of_jsbytes("src/tyxml_f.ml"),
     cst$12=caml_string_of_jsbytes(""),
     cst_virtual_dom$21=caml_string_of_jsbytes("virtual_dom"),
     cst_virtual_dom$22=caml_string_of_jsbytes("virtual_dom"),
     cst_Virtual_dom_Tyxml_f$0=caml_string_of_jsbytes("Virtual_dom__Tyxml_f"),
     cst_Virtual_dom_Vdom=caml_string_of_jsbytes("Virtual_dom__Vdom"),
     cst_virtual_dom$23=caml_string_of_jsbytes("virtual_dom"),
     cst_src_vdom_ml=caml_string_of_jsbytes("src/vdom.ml"),
     cst$13=caml_string_of_jsbytes(""),
     cst_virtual_dom$24=caml_string_of_jsbytes("virtual_dom"),
     cst_virtual_dom$25=caml_string_of_jsbytes("virtual_dom"),
     cst_Virtual_dom_Vdom$0=caml_string_of_jsbytes("Virtual_dom__Vdom"),
     cst$18=caml_string_of_jsbytes(";"),
     cst$19=caml_string_of_jsbytes("&"),
     cst$17=caml_string_of_jsbytes(" "),
     cst$16=caml_string_of_jsbytes(","),
     cst$15=caml_string_of_jsbytes(" "),
     cst_checked$0=caml_string_of_jsbytes("checked"),
     cst_selected$0=caml_string_of_jsbytes("selected"),
     cst_value$1=caml_string_of_jsbytes("value"),
     cst_Virtual_dom_Tyxml=caml_string_of_jsbytes("Virtual_dom__Tyxml"),
     cst_virtual_dom$26=caml_string_of_jsbytes("virtual_dom"),
     cst_src_tyxml_ml=caml_string_of_jsbytes("src/tyxml.ml"),
     cst$14=caml_string_of_jsbytes(""),
     cst_virtual_dom$27=caml_string_of_jsbytes("virtual_dom"),
     cst_virtual_dom$28=caml_string_of_jsbytes("virtual_dom"),
     cst_Virtual_dom_Tyxml$0=caml_string_of_jsbytes("Virtual_dom__Tyxml"),
     cst_Virtual_dom=caml_string_of_jsbytes("Virtual_dom"),
     cst_virtual_dom$29=caml_string_of_jsbytes("virtual_dom"),
     cst_src_virtual_dom_ml=caml_string_of_jsbytes("src/virtual_dom.ml"),
     cst$20=caml_string_of_jsbytes(""),
     cst_virtual_dom$30=caml_string_of_jsbytes("virtual_dom"),
     cst_virtual_dom$31=caml_string_of_jsbytes("virtual_dom"),
     cst_Virtual_dom$0=caml_string_of_jsbytes("Virtual_dom"),
     Core_kernel=global_data.Core_kernel,
     Expect_test_common_File=global_data.Expect_test_common__File,
     Core_kernel_Float=global_data.Core_kernel__Float,
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Expect_test_config=global_data.Expect_test_config,
     Inline_test_config=global_data.Inline_test_config,
     Js_of_ocaml_Dom=global_data.Js_of_ocaml__Dom,
     Base_Option=global_data.Base__Option,
     Js_of_ocaml_Dom_html=global_data.Js_of_ocaml__Dom_html,
     Base_List=global_data.Base__List,
     include=global_data.Ui_event,
     Stdlib_obj=global_data.Stdlib__obj,
     Base_Hashtbl=global_data.Base__Hashtbl,
     Base_Fn=global_data.Base__Fn,
     Base=global_data.Base,
     Base_Type_equal=global_data.Base__Type_equal,
     Js_of_ocaml_Js=global_data.Js_of_ocaml__Js,
     Base_Int=global_data.Base__Int,
     Base_Bool=global_data.Base__Bool,
     Base_Set=global_data.Base__Set,
     Base_String=global_data.Base__String,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Base_Char=global_data.Base__Char,
     Css_gen=global_data.Css_gen,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Base_Printf=global_data.Base__Printf,
     Base_Array=global_data.Base__Array,
     Stdlib=global_data.Stdlib,
     Assert_failure=global_data.Assert_failure,
     Stdlib_string=global_data.Stdlib__string,
     Xml_wrap=global_data.Xml_wrap,
     Svg_f=global_data.Svg_f,
     Html_f=global_data.Html_f,
     Virtual_dom=[0];
    caml_register_global(255,Virtual_dom,"Virtual_dom__");
    caml_call1(Ppx_module_timer_runtime[4],cst_Virtual_dom_Dom_float);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_virtual_dom);
    caml_call1(Expect_test_collector[4][1],cst_src_dom_float_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$0,cst);
    var
     _b_=[0,[2,0,0],caml_string_of_jsbytes("%s")],
     _d_=[1,caml_string_of_jsbytes(" 1 ")],
     _e_=[0,caml_string_of_jsbytes("")],
     _h_=[1,caml_string_of_jsbytes(" NaN ")],
     _i_=[0,caml_string_of_jsbytes("")],
     _l_=[1,caml_string_of_jsbytes(" Infinity ")],
     _m_=[0,caml_string_of_jsbytes("")],
     _p_=[1,caml_string_of_jsbytes(" -Infinity ")],
     _q_=[0,caml_string_of_jsbytes("")],
     _t_=[1,caml_string_of_jsbytes(" 1e-8 ")],
     _u_=[0,caml_string_of_jsbytes("")],
     _x_=[1,caml_string_of_jsbytes(" -1 ")],
     _y_=[0,caml_string_of_jsbytes("")],
     _B_=[1,caml_string_of_jsbytes(" 1.0000001 ")],
     _C_=[0,caml_string_of_jsbytes("")],
     _R_=[0,caml_string_of_jsbytes(" ")],
     _Q_=[0,caml_string_of_jsbytes("classnames")],
     _P_=[0,caml_string_of_jsbytes("classname")],
     _Y_=[0,caml_string_of_jsbytes("src/tyxml.ml"),69,19],
     _X_=[0,caml_string_of_jsbytes("src/tyxml.ml"),68,17];
    function to_js_string(t0){return t0.toString()}
    function to_string(value)
     {return caml_string_of_jsstring(value.toString())}
    var
     Expect_test_collector$0=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _a_(param)
     {function print(f)
       {var _cU_=to_string(f);return caml_call2(Core_kernel[235],_b_,_cU_)}
      print(1.);
      var
       _cN_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$0),
         10,
         241,
         245,
         251];
      caml_call1(Expect_test_collector$0[1],_cN_);
      print(Core_kernel_Float[14]);
      var
       _cO_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$1),
         12,
         281,
         285,
         291];
      caml_call1(Expect_test_collector$0[1],_cO_);
      print(Core_kernel_Float[15]);
      var
       _cP_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$2),
         14,
         328,
         332,
         338];
      caml_call1(Expect_test_collector$0[1],_cP_);
      print(Core_kernel_Float[16]);
      var
       _cQ_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$3),
         16,
         384,
         388,
         394];
      caml_call1(Expect_test_collector$0[1],_cQ_);
      print(1e-08);
      var
       _cR_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$4),
         18,
         433,
         437,
         443];
      caml_call1(Expect_test_collector$0[1],_cR_);
      print(-1.);
      var
       _cS_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$5),
         20,
         472,
         476,
         482];
      caml_call1(Expect_test_collector$0[1],_cS_);
      print(1.0000001);
      var
       _cT_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$6),
         22,
         513,
         517,
         523];
      return caml_call1(Expect_test_collector$0[1],_cT_)}
    var
     _c_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$7),
       10,
       241,
       252,
       259],
     _f_=
      [0,
       [0,
        _e_,
        _d_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$8),
         10,
         241,
         245,
         251],
        _c_],
       0],
     _g_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$9),
       12,
       281,
       292,
       301],
     _j_=
      [0,
       [0,
        _i_,
        _h_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$10),
         12,
         281,
         285,
         291],
        _g_],
       _f_],
     _k_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$11),
       14,
       328,
       339,
       353],
     _n_=
      [0,
       [0,
        _m_,
        _l_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$12),
         14,
         328,
         332,
         338],
        _k_],
       _j_],
     _o_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$13),
       16,
       384,
       395,
       410],
     _r_=
      [0,
       [0,
        _q_,
        _p_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$14),
         16,
         384,
         388,
         394],
        _o_],
       _n_],
     _s_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$15),
       18,
       433,
       444,
       454],
     _v_=
      [0,
       [0,
        _u_,
        _t_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$16),
         18,
         433,
         437,
         443],
        _s_],
       _r_],
     _w_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$17),
       20,
       472,
       483,
       491],
     _z_=
      [0,
       [0,
        _y_,
        _x_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$18),
         20,
         472,
         476,
         482],
        _w_],
       _v_],
     _A_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$19),
       22,
       513,
       524,
       539],
     _D_=
      [0,
       [0,
        _C_,
        _B_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$20),
         22,
         513,
         517,
         523],
        _A_],
       _z_],
     _E_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_dom_float_ml$22),
       6,
       138,
       138,
       540],
     _F_=
      caml_call1(Expect_test_common_File[4][3],cst_73a2b20534ede23efe6432d58d);
    caml_call9
     (Expect_test_collector$0[3],
      _F_,
      _E_,
      cst_src_dom_float_ml$21,
      0,
      0,
      _D_,
      0,
      Inline_test_config,
      _a_);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Virtual_dom_Dom_float$0);
    var Virtual_dom_Dom_float=[0,to_js_string,to_string];
    caml_register_global(265,Virtual_dom_Dom_float,"Virtual_dom__Dom_float");
    caml_call1(Ppx_module_timer_runtime[4],cst_Virtual_dom_Event);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_virtual_dom$2);
    caml_call1(Expect_test_collector[4][1],cst_src_event_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$3,cst$0);
    var
     Ignore=include[1],
     Many=include[2],
     Define=include[3],
     Expert=include[4],
     visibility_handlers=[0,0];
    function Define_visibility(VH)
     {visibility_handlers[1] = [0,VH[1],visibility_handlers[1]];return [0]}
    var
     id=Stdlib_obj[24],
     of_val=Stdlib_obj[22],
     Viewport_changed=[248,cst_Virtual_dom_Event_Viewport,caml_fresh_oo_id(0)],
     Stop_propagation=[248,cst_Virtual_dom_Event_Stop_pro,caml_fresh_oo_id(0)],
     Prevent_default=[248,cst_Virtual_dom_Event_Prevent_,caml_fresh_oo_id(0)],
     current_dom_event=[0,0];
    function _G_(param)
     {function _cM_(f){return caml_call1(f,0)}
      return caml_call2(Base_List[9],visibility_handlers[1],_cM_)}
    var _H_=caml_call1(id,caml_call1(of_val,Viewport_changed));
    caml_call3(Base_Hashtbl[36],Expert[2],_H_,_G_);
    function _I_(param)
     {return caml_call2
              (Base_Option[9],current_dom_event[1],Js_of_ocaml_Dom_html[116])}
    var _J_=caml_call1(id,caml_call1(of_val,Stop_propagation));
    caml_call3(Base_Hashtbl[36],Expert[2],_J_,_I_);
    function _K_(param)
     {return caml_call2
              (Base_Option[9],current_dom_event[1],Js_of_ocaml_Dom[18])}
    var _L_=caml_call1(id,caml_call1(of_val,Prevent_default));
    caml_call3(Base_Hashtbl[36],Expert[2],_L_,_K_);
    var handle_non_dom_event_exn=Expert[1];
    function handle(dom_event,event)
     {var old=current_dom_event[1];
      current_dom_event[1] = [0,dom_event];
      caml_call1(Expert[1],event);
      current_dom_event[1] = old;
      return 0}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Virtual_dom_Event$0);
    var
     Event=
      [0,
       Ignore,
       Viewport_changed,
       Stop_propagation,
       Prevent_default,
       Many,
       Define,
       Define_visibility,
       [0,handle,handle_non_dom_event_exn]];
    caml_register_global(273,Event,"Virtual_dom__Event");
    caml_call1(Ppx_module_timer_runtime[4],cst_Virtual_dom_Event_intf);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_virtual_dom$5);
    caml_call1(Expect_test_collector[4][1],cst_src_event_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$6,cst$1);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Virtual_dom_Event_intf$0);
    var Virtual_dom_Event_intf=[0];
    caml_register_global(274,Virtual_dom_Event_intf,"Virtual_dom__Event_intf");
    caml_call1(Ppx_module_timer_runtime[4],cst_Virtual_dom_Attr);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_virtual_dom$8);
    caml_call1(Expect_test_collector[4][1],cst_src_attr_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$9,cst$2);
    var
     generic_hook=
      [246,function(_cL_){return Js_of_ocaml_Js[50][1].GenericHook}];
    function create(init,update,destroy,id)
     {var
       init$0=caml_js_wrap_callback(init),
       _cH_=caml_call2(Base_Option[30],update,caml_js_wrap_callback),
       update$0=caml_call1(Js_of_ocaml_Js[5][9],_cH_);
      function _cI_(param,_cK_){return 0}
      var
       destroy$0=
        caml_js_wrap_callback(caml_call2(Base_Option[41],destroy,_cI_)),
       _cJ_=runtime.caml_obj_tag(generic_hook),
       generic_hook$0=
        250 === _cJ_
         ?generic_hook[1]
         :246 === _cJ_
           ?caml_call1(CamlinternalLazy[2],generic_hook)
           :generic_hook;
      return generic_hook$0(init$0,update$0,destroy$0,id)}
    function create$0(name,value)
     {return [1,name,caml_jsstring_of_string(value)]}
    function to_style(param)
     {if(0 === param[0]){var s=param[1];return [0,s]}return 0}
    function style(css){return [0,css]}
    function valid_class_name(s)
     {var
       _cG_=caml_call1(Base_String[5],s),
       invalid=_cG_ || caml_call2(Base_String[10],s,Base_Char[44]);
      return 1 - invalid}
    function _M_(param){return valid_class_name(cst_foo_bar)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_valid,
      0,
      cst_src_attr_ml$0,
      136,
      0,
      45,
      _M_);
    function _N_(param){return 1 - valid_class_name(cst$3)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_invalid_empty,
      0,
      cst_src_attr_ml$1,
      137,
      0,
      52,
      _N_);
    function _O_(param){return 1 - valid_class_name(cst_foo_bar$0)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_invalid_space,
      0,
      cst_src_attr_ml$2,
      138,
      0,
      59,
      _O_);
    function class$0(classname)
     {if(1 - valid_class_name(classname))
       {var
         _cE_=[0,[1,[0,_P_,[0,caml_call1(Base[165],classname),0]]],0],
         _cF_=
          [1,[0,caml_call1(Sexplib0_Sexp_conv[7],cst_invalid_classname),_cE_]];
        caml_call1(Base[222],_cF_)}
      return [1,caml_call2(Base_Set[6],[0,Base_String[39]],classname)]}
    function classes(classes){return [1,classes]}
    function classes$0(classnames)
     {if(1 - caml_call2(Base_List[14],classnames,valid_class_name))
       {var
         _cC_=
          [0,[1,[0,_Q_,[0,caml_call2(Base[140],Base[165],classnames),0]]],0],
         _cD_=
          [1,
           [0,caml_call1(Sexplib0_Sexp_conv[7],cst_invalid_classnames),_cC_]];
        caml_call1(Base[222],_cD_)}
      return [1,caml_call2(Base_Set[32],[0,Base_String[39]],classnames)]}
    function to_class(param)
     {if(1 === param[0]){var cs=param[1];return [0,cs]}return 0}
    function create$1(name,value){return [2,create$0(name,value)]}
    function create_float(name,value){return [2,[1,name,value.toString()]]}
    function property(name,value){return [2,[0,name,value]]}
    function string_property(name,value)
     {return [2,[0,name,caml_jsstring_of_string(value)]]}
    function bool_property(name,value){return [2,[0,name,! ! value]]}
    function id$0(s){return create$1(cst_id,s)}
    function name(s){return create$1(cst_name,s)}
    function href(r){return create$1(cst_href,r)}
    var
     checked=create$1(cst_checked,cst$4),
     selected=create$1(cst_selected,cst$5),
     hidden=create$1(cst_hidden,cst$6),
     disabled=create$1(cst_disabled,cst$7);
    function placeholder(x){return create$1(cst_placeholder,x)}
    function autofocus(b)
     {return create$1(cst_autofocus,caml_call1(Base_Bool[8],b))}
    function for$0(x){return create$1(cst_for,x)}
    function type(x){return create$1(cst_type,x)}
    function value(x){return create$1(cst_value$0,x)}
    function tabindex(x)
     {return create$1(cst_tabindex,caml_call1(Base_Int[11],x))}
    function title(x){return create$1(cst_title,x)}
    function src(x){return create$1(cst_src,x)}
    function min(x){return create_float(cst_min,x)}
    function max(x){return create_float(cst_max,x)}
    function on(event,convert_to_vdom_event)
     {function f(e)
       {var _cB_=caml_call1(convert_to_vdom_event,e);
        caml_call2(Event[8][1],e,_cB_);
        return Js_of_ocaml_Js[7]}
      var _cA_=caml_call1(Js_of_ocaml_Dom[10],f);
      return property(caml_call2(Base[217],cst_on,event),_cA_)}
    function on_focus(_cz_){return on(cst_focus,_cz_)}
    function on_blur(_cy_){return on(cst_blur,_cy_)}
    function on_click(_cx_){return on(cst_click,_cx_)}
    function on_contextmenu(_cw_){return on(cst_contextmenu,_cw_)}
    function on_double_click(_cv_){return on(cst_dblclick,_cv_)}
    function on_mousemove(_cu_){return on(cst_mousemove,_cu_)}
    function on_mouseup(_ct_){return on(cst_mouseup,_ct_)}
    function on_mousedown(_cs_){return on(cst_mousedown,_cs_)}
    function on_mouseenter(_cr_){return on(cst_mouseenter,_cr_)}
    function on_mouseleave(_cq_){return on(cst_mouseleave,_cq_)}
    function on_mouseover(_cp_){return on(cst_mouseover,_cp_)}
    function on_mouseout(_co_){return on(cst_mouseout,_co_)}
    function on_keyup(_cn_){return on(cst_keyup,_cn_)}
    function on_keypress(_cm_){return on(cst_keypress,_cm_)}
    function on_keydown(_cl_){return on(cst_keydown,_cl_)}
    function const_ignore(param){return Event[1]}
    function run_coercion(coercion,target,prev)
     {if(prev)return prev;
      var _ck_=caml_call1(coercion,target);
      return caml_call1(Js_of_ocaml_Js[5][10],_ck_)}
    function on_input_event(event,handler)
     {return on
              (event,
               function(ev)
                {function _ce_(target)
                  {function _ci_(target)
                    {var text=caml_string_of_jsstring(target.value);
                     return caml_call2(handler,ev,text)}
                   var
                    _cj_=Event[1],
                    _cf_=run_coercion(Js_of_ocaml_Dom_html[117][33],target,0),
                    _cg_=run_coercion(Js_of_ocaml_Dom_html[117][50],target,_cf_),
                    _ch_=run_coercion(Js_of_ocaml_Dom_html[117][55],target,_cg_);
                   return caml_call3(Base_Option[38],_ch_,_cj_,_ci_)}
                 return caml_call3
                         (Js_of_ocaml_Js[5][7],ev.target,const_ignore,_ce_)})}
    function on_change(_cd_){return on_input_event(cst_change,_cd_)}
    function on_input(_cc_){return on_input_event(cst_input,_cc_)}
    function to_raw(param)
     {switch(param[0])
       {case 0:
         var
          css=param[1],
          props=caml_call1(Css_gen[30],css),
          obj={},
          _ca_=
           function(param)
            {var v=param[2],k=param[1];
             return obj[caml_jsstring_of_string(k)]
                    =
                    caml_jsstring_of_string(v)};
         caml_call2(Base_List[9],props,_ca_);
         return [0,cst_style,obj];
        case 1:
         var classes=param[1],_cb_=caml_call1(Base_Set[34],classes);
         return create$0(cst_class,caml_call2(Base_String[50],_R_,_cb_));
        default:var r=param[1];return r}}
    function list_to_obj(l)
     {var attrs=caml_call2(Base_List[74],l,to_raw),attrs_obj={};
      function _b__(param)
       {switch(param[0])
         {case 0:
           var _b$_=param[1];
           if(caml_string_notequal(_b$_,cst_value))
            {var value$0=param[2];
             return attrs_obj[caml_jsstring_of_string(_b$_)] = value$0}
           var
            value$1=param[2],
            value=Js_of_ocaml_Js[50][1].SoftSetHook(value$1);
           return attrs_obj.value = value;
          case 1:
           var value$2=param[2],name=param[1];
           if(1 - caml_call1(Js_of_ocaml_Js[6][5],attrs_obj.attributes))
            attrs_obj.attributes = {};
           return attrs_obj.attributes[caml_jsstring_of_string(name)]
                  =
                  value$2;
          default:
           var hook=param[2],name$0=param[1];
           return attrs_obj[caml_jsstring_of_string(name$0)] = hook}}
      caml_call2(Base_List[9],attrs,_b__);
      return attrs_obj}
    function create_basic_hook(name,hook,unhook,param)
     {var
       _b8_=caml_call1(Base_Fn[1],0),
       hook$0=caml_call2(Base_Option[41],hook,_b8_);
      function _b9_(f,param){return f}
      var
       unhook$0=caml_call2(Base_Option[30],unhook,_b9_),
       id=caml_call2(Base_Type_equal[12][4],cst_placeholder$0,Base[177]);
      return [2,[2,name,create(hook$0,0,unhook$0,id)]]}
    function create_stateful_hook(name,hook,unhook,id)
     {return [2,[2,name,create(hook,0,[0,unhook],id)]]}
    function create_persistent_hook(name,init,update,destroy,id)
     {return [2,[2,name,create(init,[0,update],[0,destroy],id)]]}
    var
     Expert$0=
      [0,create_basic_hook,create_stateful_hook,create_persistent_hook];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$10);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Virtual_dom_Attr$0);
    var
     Virtual_dom_Attr=
      [0,
       create$1,
       create_float,
       string_property,
       bool_property,
       property,
       on,
       autofocus,
       checked,
       class$0,
       to_class,
       classes$0,
       classes,
       disabled,
       for$0,
       href,
       id$0,
       name,
       placeholder,
       selected,
       hidden,
       style,
       min,
       max,
       to_style,
       tabindex,
       type,
       value,
       title,
       src,
       on_focus,
       on_blur,
       on_input,
       on_change,
       on_click,
       on_contextmenu,
       on_double_click,
       on_mousemove,
       on_mouseup,
       on_mousedown,
       on_mouseenter,
       on_mouseleave,
       on_mouseover,
       on_mouseout,
       on_keyup,
       on_keypress,
       on_keydown,
       Expert$0,
       list_to_obj];
    caml_register_global(287,Virtual_dom_Attr,"Virtual_dom__Attr");
    caml_call1(Ppx_module_timer_runtime[4],cst_Virtual_dom_Attr_intf);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_virtual_dom$11);
    caml_call1(Expect_test_collector[4][1],cst_src_attr_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$12,cst$8);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$13);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Virtual_dom_Attr_intf$0);
    var Virtual_dom_Attr_intf=[0];
    caml_register_global(288,Virtual_dom_Attr_intf,"Virtual_dom__Attr_intf");
    caml_call1(Ppx_module_timer_runtime[4],cst_Virtual_dom_Attrs);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_virtual_dom$14);
    caml_call1(Expect_test_collector[4][1],cst_src_attrs_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$15,cst$9);
    function make_map(extract,combine,is_empty,make_attr,t,f)
     {function _b7_(a)
       {var match=caml_call1(extract,a);
        if(match){var c=match[1];return [0,c]}
        return [1,a]}
      var
       match=caml_call2(Base_List[56],t,_b7_),
       other=match[2],
       specials=match[1],
       cl=caml_call1(f,caml_call1(combine,specials));
      return caml_call1(is_empty,cl)?other:[0,caml_call1(make_attr,cl),other]}
    var _S_=Base_Set[8],_T_=caml_call1(Base_Set[13],[0,Base_String[39]]);
    function map_class(_b5_,_b6_)
     {return make_map(to_class,_T_,_S_,classes,_b5_,_b6_)}
    function add_class(t,c)
     {return map_class(t,function(cs){return caml_call2(Base_Set[10],cs,c)})}
    var _U_=Css_gen[20];
    function _V_(x_002)
     {var match=caml_call2(Css_gen[10],_U_,x_002);return 0 === match?1:0}
    var _W_=Css_gen[29];
    function map_style(_b3_,_b4_)
     {return make_map(to_style,_W_,_V_,style,_b3_,_b4_)}
    function add_style(t,s)
     {return map_style(t,function(ss){return caml_call2(Css_gen[27],ss,s)})}
    function merge_classes_and_styles(t)
     {function _b0_(_b2_){return _b2_}
      return map_class(map_style(t,function(_b1_){return _b1_}),_b0_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$16);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Virtual_dom_Attrs$0);
    var
     Virtual_dom_Attrs=
      [0,merge_classes_and_styles,map_style,add_style,map_class,add_class];
    caml_register_global(289,Virtual_dom_Attrs,"Virtual_dom__Attrs");
    caml_call1(Ppx_module_timer_runtime[4],cst_Virtual_dom_Node);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_virtual_dom$17);
    caml_call1(Expect_test_collector[4][1],cst_src_node_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$18,cst$10);
    var t52=Js_of_ocaml_Js[50][1].VirtualDom;
    function tag(t){return t[1]}
    function attrs(t){return t[3]}
    function key(t){return t[2]}
    function with_key(t,key){return [0,t[1],[0,key],t[3],t[4],t[5]]}
    function map_attrs(init,f)
     {var _bX_=init[5],_bY_=init[4],_bZ_=caml_call1(f,init[3]);
      return [0,init[1],init[2],_bZ_,_bY_,_bX_]}
    function add_class$0(t,c)
     {return map_attrs(t,function(a){return add_class(a,c)})}
    function add_style$0(t,s)
     {return map_attrs(t,function(a){return add_style(a,s)})}
    function string_to_js_text(s)
     {var t22=t52.VText,t21=caml_jsstring_of_string(s);return new t22(t21)}
    function to_js(param)
     {if(typeof param === "number")
       return string_to_js_text(cst$11);
      else
       switch(param[0])
        {case 0:var s=param[1];return string_to_js_text(s);
         case 1:
          var
           _bQ_=param[1],
           _bR_=_bQ_[4],
           _bS_=_bQ_[3],
           _bT_=_bQ_[2],
           _bU_=_bQ_[1];
          if(4153924 <= _bQ_[5])
           {var t39=t52.svg;
            if(_bT_)
             {var
               key=_bT_[1],
               t43=
                caml_call1(Js_of_ocaml_Js[6][2],caml_jsstring_of_string(key)),
               t42=caml_js_from_array(caml_call1(Base_Array[38],_bR_)),
               t41=list_to_obj(_bS_),
               t40=caml_jsstring_of_string(_bU_);
              return new t39(t40,t41,t42,t43)}
            var
             _bV_=Js_of_ocaml_Js[6][1],
             t37=caml_js_from_array(caml_call1(Base_Array[38],_bR_)),
             t36=list_to_obj(_bS_),
             t35=caml_jsstring_of_string(_bU_);
            return new t39(t35,t36,t37,_bV_)}
          var t28=t52.VNode;
          if(_bT_)
           {var
             key$0=_bT_[1],
             t32=
              caml_call1(Js_of_ocaml_Js[6][2],caml_jsstring_of_string(key$0)),
             t31=caml_js_from_array(caml_call1(Base_Array[38],_bR_)),
             t30=list_to_obj(_bS_),
             t29=caml_jsstring_of_string(_bU_);
            return new t28(t29,t30,t31,t32)}
          var
           _bW_=Js_of_ocaml_Js[6][1],
           t26=caml_js_from_array(caml_call1(Base_Array[38],_bR_)),
           t25=list_to_obj(_bS_),
           t24=caml_jsstring_of_string(_bU_);
          return new t28(t24,t25,t26,_bW_);
         default:var w=param[1];return w}}
    function element(kind,tag,key,attrs,children)
     {function _bP_(other)
       {return typeof other === "number"?0:[0,to_js(other)]}
      var children$0=caml_call2(Base_List[122],children,_bP_);
      return [0,tag,key,attrs,children$0,kind]}
    function text(s){return [0,s]}
    function widget(destroy$0,update$0,id,init,param)
     {if(destroy$0)
       var sth=destroy$0[1],destroy=sth;
      else
       var destroy=function(param,_bO_){return 0};
      if(update$0)
       var sth$0=update$0[1],update=sth$0;
      else
       var update=function(s,elt){return [0,s,elt]};
      var obj={};
      obj.type = "Widget";
      obj.name = 0;
      obj.id = id;
      obj.init
      =
      caml_js_wrap_callback
       (function(param)
         {var match=caml_call1(init,0),dom_node=match[2],s0=match[1];
          obj.state = s0;
          return dom_node});
      obj.update
      =
      caml_js_wrap_callback
       (function(prev,dom_node)
         {caml_call2(Base_Type_equal[12][11],prev.id,id);
          var
           match=caml_call2(update,prev.state,dom_node),
           dom_node$0=match[2],
           state=match[1];
          obj.state = state;
          return dom_node$0});
      obj.destroy
      =
      caml_js_wrap_callback
       (function(dom_node){return caml_call2(destroy,obj.state,dom_node)});
      return [2,obj]}
    function create$2(tag,key,attrs,children)
     {return [1,element(-847254184,tag,key,attrs,children)]}
    function create_childless(tag,key,attrs){return create$2(tag,key,attrs,0)}
    function create_svg(tag,key,attrs,children)
     {return [1,element(4153924,tag,key,attrs,children)]}
    var none=0;
    function textf(format){return caml_call2(Base_Printf[4],text,format)}
    function to_dom(t){var t45=to_js(t);return t52.createElement(t45)}
    function unsafe_to_js(t){return to_js(t)}
    function a(_bL_,_bM_,_bN_){return create$2(cst_a,_bL_,_bM_,_bN_)}
    function body(_bI_,_bJ_,_bK_){return create$2(cst_body,_bI_,_bJ_,_bK_)}
    function button(_bF_,_bG_,_bH_)
     {return create$2(cst_button,_bF_,_bG_,_bH_)}
    function code(_bC_,_bD_,_bE_){return create$2(cst_code,_bC_,_bD_,_bE_)}
    function div(_bz_,_bA_,_bB_){return create$2(cst_div,_bz_,_bA_,_bB_)}
    function footer(_bw_,_bx_,_by_)
     {return create$2(cst_footer,_bw_,_bx_,_by_)}
    function h1(_bt_,_bu_,_bv_){return create$2(cst_h1,_bt_,_bu_,_bv_)}
    function h2(_bq_,_br_,_bs_){return create$2(cst_h2,_bq_,_br_,_bs_)}
    function h3(_bn_,_bo_,_bp_){return create$2(cst_h3,_bn_,_bo_,_bp_)}
    function h4(_bk_,_bl_,_bm_){return create$2(cst_h4,_bk_,_bl_,_bm_)}
    function h5(_bh_,_bi_,_bj_){return create$2(cst_h5,_bh_,_bi_,_bj_)}
    function h6(_be_,_bf_,_bg_){return create$2(cst_h6,_be_,_bf_,_bg_)}
    function header(_bb_,_bc_,_bd_)
     {return create$2(cst_header,_bb_,_bc_,_bd_)}
    function html(_a__,_a$_,_ba_){return create$2(cst_html,_a__,_a$_,_ba_)}
    function input(_a7_,_a8_,_a9_)
     {return create$2(cst_input$0,_a7_,_a8_,_a9_)}
    function textarea(_a4_,_a5_,_a6_)
     {return create$2(cst_textarea,_a4_,_a5_,_a6_)}
    function select(_a1_,_a2_,_a3_)
     {return create$2(cst_select,_a1_,_a2_,_a3_)}
    function option(_aY_,_aZ_,_a0_)
     {return create$2(cst_option,_aY_,_aZ_,_a0_)}
    function label(_aV_,_aW_,_aX_){return create$2(cst_label,_aV_,_aW_,_aX_)}
    function li(_aS_,_aT_,_aU_){return create$2(cst_li,_aS_,_aT_,_aU_)}
    function p(_aP_,_aQ_,_aR_){return create$2(cst_p,_aP_,_aQ_,_aR_)}
    function pre(_aM_,_aN_,_aO_){return create$2(cst_pre,_aM_,_aN_,_aO_)}
    function section(_aJ_,_aK_,_aL_)
     {return create$2(cst_section,_aJ_,_aK_,_aL_)}
    function span(_aG_,_aH_,_aI_){return create$2(cst_span,_aG_,_aH_,_aI_)}
    function strong(_aD_,_aE_,_aF_)
     {return create$2(cst_strong,_aD_,_aE_,_aF_)}
    function table(_aA_,_aB_,_aC_){return create$2(cst_table,_aA_,_aB_,_aC_)}
    function tbody(_ax_,_ay_,_az_){return create$2(cst_tbody,_ax_,_ay_,_az_)}
    function td(_au_,_av_,_aw_){return create$2(cst_td,_au_,_av_,_aw_)}
    function th(_ar_,_as_,_at_){return create$2(cst_th,_ar_,_as_,_at_)}
    function thead(_ao_,_ap_,_aq_){return create$2(cst_thead,_ao_,_ap_,_aq_)}
    function tr(_al_,_am_,_an_){return create$2(cst_tr,_al_,_am_,_an_)}
    function ul(_ai_,_aj_,_ak_){return create$2(cst_ul,_ai_,_aj_,_ak_)}
    function ol(_af_,_ag_,_ah_){return create$2(cst_ol,_af_,_ag_,_ah_)}
    function br(_ad_,_ae_){return create_childless(cst_br,_ad_,_ae_)}
    function hr(_ab_,_ac_){return create_childless(cst_hr,_ab_,_ac_)}
    function create$3(previous,current)
     {var t48=to_js(current),t47=to_js(previous);return t52.diff(t47,t48)}
    function apply(t51,t50){return t52.patch(t50,t51)}
    function f(patch)
     {for(var key in patch)if(key !== "a")return false;return true}
    function is_empty(t){return f(t) | 0}
    var Patch=[0,create$3,apply,is_empty];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$19);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Virtual_dom_Node$0);
    var
     Virtual_dom_Node=
      [0,
       [0,tag,attrs,key,with_key,map_attrs,add_style$0,add_class$0],
       [0],
       none,
       text,
       textf,
       a,
       body,
       button,
       code,
       div,
       footer,
       h1,
       h2,
       h3,
       h4,
       h5,
       h6,
       header,
       html,
       input,
       textarea,
       select,
       option,
       label,
       li,
       p,
       pre,
       section,
       span,
       strong,
       table,
       tbody,
       td,
       th,
       thead,
       tr,
       ul,
       ol,
       br,
       hr,
       create$2,
       create_svg,
       to_dom,
       unsafe_to_js,
       widget,
       Patch];
    caml_register_global(292,Virtual_dom_Node,"Virtual_dom__Node");
    caml_call1(Ppx_module_timer_runtime[4],cst_Virtual_dom_Tyxml_f);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_virtual_dom$20);
    caml_call1(Expect_test_collector[4][1],cst_src_tyxml_f_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$21,cst$12);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$22);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Virtual_dom_Tyxml_f$0);
    var Virtual_dom_Tyxml_f=[0];
    caml_register_global(293,Virtual_dom_Tyxml_f,"Virtual_dom__Tyxml_f");
    caml_call1(Ppx_module_timer_runtime[4],cst_Virtual_dom_Vdom);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_virtual_dom$23);
    caml_call1(Expect_test_collector[4][1],cst_src_vdom_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$24,cst$13);
    var
     Attr=
      [0,
       create$1,
       create_float,
       string_property,
       bool_property,
       property,
       on,
       autofocus,
       checked,
       class$0,
       to_class,
       classes$0,
       classes,
       disabled,
       for$0,
       href,
       id$0,
       name,
       placeholder,
       selected,
       hidden,
       style,
       min,
       max,
       to_style,
       tabindex,
       type,
       value,
       title,
       src,
       on_focus,
       on_blur,
       on_input,
       on_change,
       on_click,
       on_contextmenu,
       on_double_click,
       on_mousemove,
       on_mouseup,
       on_mousedown,
       on_mouseenter,
       on_mouseleave,
       on_mouseover,
       on_mouseout,
       on_keyup,
       on_keypress,
       on_keydown,
       Expert$0];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$25);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Virtual_dom_Vdom$0);
    var Virtual_dom_Vdom=[0,Attr,Event];
    caml_register_global(294,Virtual_dom_Vdom,"Virtual_dom__Vdom");
    caml_call1(Ppx_module_timer_runtime[4],cst_Virtual_dom_Tyxml);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_virtual_dom$26);
    caml_call1(Expect_test_collector[4][1],cst_src_tyxml_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$27,cst$14);
    function uri_of_string(s){return s}
    function string_of_uri(s){return s}
    function attr(name,value)
     {if
       (caml_string_notequal(name,cst_checked$0)
        &&
        caml_string_notequal(name,cst_selected$0)
        &&
        caml_string_notequal(name,cst_value$1))
       return create$1(name,value);
      return property(name,caml_jsstring_of_string(value))}
    function attr_ev(name,cvt_to_vdom_event)
     {function f(e)
       {var _aa_=caml_call1(cvt_to_vdom_event,e);
        caml_call2(Event[8][1],e,_aa_);
        return Js_of_ocaml_Js[7]}
      return property(name,caml_call1(Js_of_ocaml_Dom[10],f))}
    function float_attrib(name,value)
     {return attr(name,caml_call1(Stdlib[35],value))}
    function int_attrib(name,value)
     {return attr(name,caml_call1(Stdlib[33],value))}
    function string_attrib(name,value){return attr(name,value)}
    function space_sep_attrib(name,values)
     {return attr(name,caml_call2(Stdlib_string[7],cst$15,values))}
    function comma_sep_attrib(name,values)
     {return attr(name,caml_call2(Stdlib_string[7],cst$16,values))}
    function event_handler_attrib(name,value){return attr_ev(name,value)}
    function mouse_event_handler_attrib(name,value)
     {return attr_ev(name,value)}
    function touch_event_handler_attrib(name,value)
     {return attr_ev(name,value)}
    function keyboard_event_handler_attrib(name,value)
     {return attr_ev(name,value)}
    function uri_attrib(name,value){return attr(name,value)}
    function uris_attrib(name,values)
     {return attr(name,caml_call2(Stdlib_string[7],cst$17,values))}
    function empty(param){throw [0,Assert_failure,_X_]}
    function comment(c){throw [0,Assert_failure,_Y_]}
    function pcdata(s){return [0,s]}
    function encodedpcdata(s){return [0,s]}
    function entity(e)
     {var
       ___=caml_call2(Stdlib[28],e,cst$18),
       _$_=caml_jsstring_of_string(caml_call2(Stdlib[28],cst$19,___)),
       entity=caml_call1(Js_of_ocaml_Dom_html[122],_$_);
      return [0,caml_string_of_jsstring(entity)]}
    function leaf(opt,name)
     {if(opt)var sth=opt[1],a=sth;else var a=0;return create$2(name,0,a,0)}
    function node(opt,name,children)
     {if(opt)var sth=opt[1],a=sth;else var a=0;
      return create$2(name,0,a,children)}
    function cdata(s){return [0,s]}
    function cdata_script(s){return [0,s]}
    function cdata_style(s){return [0,s]}
    function leaf$0(opt,name)
     {if(opt)var sth=opt[1],a=sth;else var a=0;return create_svg(name,0,a,0)}
    function node$0(opt,name,children)
     {if(opt)var sth=opt[1],a=sth;else var a=0;
      return create_svg(name,0,a,children)}
    var
     Svg=
      caml_call1
       (Svg_f[1],
        [0,
         Xml_wrap[1],
         string_of_uri,
         uri_of_string,
         float_attrib,
         int_attrib,
         string_attrib,
         space_sep_attrib,
         comma_sep_attrib,
         event_handler_attrib,
         mouse_event_handler_attrib,
         keyboard_event_handler_attrib,
         touch_event_handler_attrib,
         uri_attrib,
         uris_attrib,
         empty,
         comment,
         pcdata,
         encodedpcdata,
         entity,
         leaf$0,
         node$0,
         cdata,
         cdata_script,
         cdata_style]),
     _Z_=
      [0,
       Svg[2],
       Svg[3],
       Svg[4],
       Svg[5],
       Svg[6],
       Svg[7],
       Svg[8],
       Svg[9],
       Svg[10],
       Svg[11],
       Svg[12],
       Svg[13],
       Svg[14],
       Svg[15],
       Svg[16],
       Svg[17],
       Svg[18],
       Svg[19],
       Svg[20],
       Svg[21],
       Svg[22],
       Svg[23],
       Svg[24],
       Svg[25],
       Svg[26],
       Svg[27],
       Svg[28],
       Svg[29],
       Svg[30],
       Svg[31],
       Svg[32],
       Svg[33],
       Svg[34],
       Svg[35],
       Svg[36],
       Svg[37],
       Svg[38],
       Svg[39],
       Svg[40],
       Svg[41],
       Svg[42],
       Svg[43],
       Svg[44],
       Svg[45],
       Svg[46],
       Svg[47],
       Svg[48],
       Svg[49],
       Svg[50],
       Svg[51],
       Svg[52],
       Svg[53],
       Svg[54],
       Svg[55],
       Svg[56],
       Svg[57],
       Svg[58],
       Svg[59],
       Svg[60],
       Svg[61],
       Svg[62],
       Svg[63],
       Svg[64],
       Svg[65],
       Svg[66],
       Svg[67],
       Svg[68],
       Svg[69],
       Svg[70],
       Svg[71],
       Svg[72],
       Svg[73],
       Svg[74],
       Svg[75],
       Svg[76],
       Svg[77],
       Svg[78],
       Svg[79],
       Svg[80],
       Svg[81],
       Svg[82],
       Svg[83],
       Svg[84],
       Svg[85],
       Svg[86],
       Svg[87],
       Svg[88],
       Svg[89],
       Svg[90],
       Svg[91],
       Svg[92],
       Svg[93],
       Svg[94],
       Svg[95],
       Svg[96],
       Svg[97],
       Svg[98],
       Svg[99],
       Svg[100],
       Svg[101],
       Svg[102],
       Svg[103],
       Svg[104],
       Svg[105],
       Svg[106],
       Svg[107],
       Svg[108],
       Svg[109],
       Svg[110],
       Svg[111],
       Svg[112],
       Svg[113],
       Svg[114],
       Svg[115],
       Svg[116],
       Svg[117],
       Svg[118],
       Svg[119],
       Svg[120],
       Svg[121],
       Svg[122],
       Svg[123],
       Svg[124],
       Svg[125],
       Svg[126],
       Svg[127],
       Svg[128],
       Svg[129],
       Svg[130],
       Svg[131],
       Svg[132],
       Svg[133],
       Svg[134],
       Svg[135],
       Svg[136],
       Svg[137],
       Svg[138],
       Svg[139],
       Svg[140],
       Svg[141],
       Svg[142],
       Svg[143],
       Svg[144],
       Svg[145],
       Svg[146],
       Svg[147],
       Svg[148],
       Svg[149],
       Svg[150],
       Svg[151],
       Svg[152],
       Svg[153],
       Svg[154],
       Svg[155],
       Svg[156],
       Svg[157],
       Svg[158],
       Svg[159],
       Svg[160],
       Svg[161],
       Svg[162],
       Svg[163],
       Svg[164],
       Svg[165],
       Svg[166],
       Svg[167],
       Svg[168],
       Svg[169],
       Svg[170],
       Svg[171],
       Svg[172],
       Svg[173],
       Svg[174],
       Svg[175],
       Svg[176],
       Svg[177],
       Svg[178],
       Svg[179],
       Svg[180],
       Svg[181],
       Svg[182],
       Svg[183],
       Svg[184],
       Svg[185],
       Svg[186],
       Svg[187],
       Svg[188],
       Svg[189],
       Svg[190],
       Svg[191],
       Svg[192],
       Svg[193],
       Svg[194],
       Svg[195],
       Svg[196],
       Svg[197],
       Svg[198],
       Svg[199],
       Svg[200],
       Svg[201],
       Svg[202],
       Svg[203],
       Svg[204],
       Svg[205],
       Svg[206],
       Svg[207],
       Svg[208],
       Svg[209],
       Svg[210],
       Svg[211],
       Svg[212],
       Svg[213],
       Svg[214],
       Svg[215],
       Svg[216],
       Svg[217],
       Svg[218],
       Svg[219],
       Svg[220],
       Svg[221],
       Svg[222],
       Svg[223],
       Svg[224],
       Svg[225],
       Svg[226],
       Svg[227],
       Svg[228],
       Svg[229],
       Svg[230],
       Svg[231],
       Svg[232],
       Svg[233],
       Svg[234],
       Svg[235],
       Svg[236],
       Svg[237],
       Svg[238],
       Svg[239],
       Svg[240],
       Svg[241],
       Svg[242],
       Svg[243],
       Svg[244],
       Svg[245],
       Svg[246],
       Svg[247],
       Svg[248],
       Svg[249],
       Svg[250],
       Svg[251],
       Svg[252],
       Svg[253],
       Svg[254],
       Svg[255],
       Svg[256],
       Svg[257],
       Svg[258],
       Svg[259],
       Svg[260],
       Svg[261],
       Svg[262],
       Svg[263],
       Svg[264],
       Svg[265],
       Svg[266],
       Svg[267],
       Svg[268],
       Svg[269],
       Svg[270],
       Svg[271],
       Svg[272],
       Svg[273],
       Svg[274],
       Svg[275],
       Svg[276],
       Svg[277],
       Svg[278],
       Svg[279],
       Svg[280],
       Svg[281],
       Svg[282],
       Svg[283],
       Svg[284],
       Svg[285],
       Svg[286],
       Svg[287],
       Svg[288],
       Svg[289],
       Svg[290],
       Svg[291],
       Svg[292],
       Svg[293],
       Svg[294],
       Svg[295],
       Svg[296],
       Svg[297],
       Svg[298],
       Svg[299],
       Svg[300],
       Svg[301],
       Svg[302],
       Svg[303],
       Svg[304],
       Svg[305],
       Svg[306],
       Svg[307],
       Svg[308],
       Svg[309],
       Svg[310],
       Svg[311],
       Svg[312],
       Svg[313],
       Svg[314],
       Svg[315],
       Svg[316],
       Svg[317],
       Svg[318],
       Svg[319],
       Svg[320],
       Svg[321],
       Svg[322],
       Svg[323],
       Svg[324],
       Svg[325],
       Svg[326],
       Svg[327],
       Svg[328],
       Svg[329],
       Svg[330]],
     Html=
      caml_call1
       (caml_call1
         (Html_f[1],
          [0,
           Xml_wrap[1],
           string_of_uri,
           uri_of_string,
           float_attrib,
           int_attrib,
           string_attrib,
           space_sep_attrib,
           comma_sep_attrib,
           event_handler_attrib,
           mouse_event_handler_attrib,
           keyboard_event_handler_attrib,
           touch_event_handler_attrib,
           uri_attrib,
           uris_attrib,
           empty,
           comment,
           pcdata,
           encodedpcdata,
           entity,
           leaf,
           node,
           cdata,
           cdata_script,
           cdata_style]),
        _Z_);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$28);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Virtual_dom_Tyxml$0);
    var
     Virtual_dom_Tyxml=
      [0,
       [0,
        Xml_wrap[1],
        string_of_uri,
        uri_of_string,
        float_attrib,
        int_attrib,
        string_attrib,
        space_sep_attrib,
        comma_sep_attrib,
        event_handler_attrib,
        mouse_event_handler_attrib,
        keyboard_event_handler_attrib,
        touch_event_handler_attrib,
        uri_attrib,
        uris_attrib,
        empty,
        comment,
        pcdata,
        encodedpcdata,
        entity,
        leaf,
        node,
        cdata,
        cdata_script,
        cdata_style],
       Svg,
       Html];
    caml_register_global(301,Virtual_dom_Tyxml,"Virtual_dom__Tyxml");
    caml_call1(Ppx_module_timer_runtime[4],cst_Virtual_dom);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_virtual_dom$29);
    caml_call1(Expect_test_collector[4][1],cst_src_virtual_dom_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_virtual_dom$30,cst$20);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_virtual_dom$31);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Virtual_dom$0);
    var Virtual_dom$0=[0];
    caml_register_global(302,Virtual_dom$0,"Virtual_dom");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ2aXJ0dWFsX2RvbS5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOlsicGF0Y2giLCJrZXkiXSwic291cmNlcyI6WyIiXSwibWFwcGluZ3MiOiI7O0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFDbUJBO01BQ1QsUUFBU0MsT0FBT0QsTUFBTyxHQUNqQkMsWUFBYSxhQUVuQixXQUpEO0kiLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
