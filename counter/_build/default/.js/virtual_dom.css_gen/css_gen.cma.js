(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_compare=runtime.caml_compare,
     caml_int_compare=runtime.caml_int_compare,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_register_global=runtime.caml_register_global,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    function caml_call9(f,a0,a1,a2,a3,a4,a5,a6,a7,a8)
     {return f.length == 9
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_test_19abf2_2=caml_string_of_jsbytes('"test\\19abf2\\2"'),
     cst_010_xFFa_o123_n_u_12345_aa=
      caml_string_of_jsbytes
       ('"\\010\\xFFa\\o123\\n\\\\\\u{12345}aa\xf0\x9f\x90\xaa\xf0\x9f\x90\xaa\xf0\x9f\x90\xaa\xf0\x9f\x90\xaa\xf0\x9f\x90\xaa"'),
     cst$11=
      caml_string_of_jsbytes
       ('"\xe2\x86\x90 \xe2\x86\x91 \xe2\x86\x92 \xe2\x86\x93 \xe2\x86\x94 \xe2\x86\x95 \xe2\x87\xaa \xe2\x86\xb9 \xe2\xac\x88 \xe2\x86\x98 \xe2\x9f\xbe \xe2\x86\xb6"'),
     cst_css_gen_src_css_tokenizer_$55=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_url_http_wwww_google_com=
      caml_string_of_jsbytes('url( "http://wwww.google.com")'),
     cst_url_http_wwww_google_com$0=
      caml_string_of_jsbytes("url('http://wwww.google.com')"),
     cst_url_http_wwww_google_com$1=
      caml_string_of_jsbytes("url('http://wwww.google.com' )"),
     cst_url_http_wwww_google_com$2=
      caml_string_of_jsbytes("url(  http://wwww.google.com )"),
     cst_url_http_wwww_google_com$3=
      caml_string_of_jsbytes('url(  http://wwww.google."com )'),
     cst_css_gen_src_css_tokenizer_$50=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_red=caml_string_of_jsbytes("red-->"),
     cst_css_gen_src_css_tokenizer_$45=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_import_foo_bar=caml_string_of_jsbytes('@import "foo.bar";'),
     cst_css_gen_src_css_tokenizer_$40=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_color_f00=caml_string_of_jsbytes("color: #f00"),
     cst_color_rgb_255_0_0=caml_string_of_jsbytes("color: rgb(255,0,0)"),
     cst_color_rgb_255_0_0$0=caml_string_of_jsbytes("color: rgb(255,0,0)"),
     cst_css_gen_src_css_tokenizer_$35=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_Foo_Bar=caml_string_of_jsbytes("'Foo '\"Bar\"';' '\\'' \"\\\"\""),
     cst_css_gen_src_css_tokenizer_$30=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_foo_bar$3=caml_string_of_jsbytes("'foo bar"),
     cst$9=caml_string_of_jsbytes("'"),
     cst$10=caml_string_of_jsbytes("'\\'"),
     cst_css_gen_src_css_tokenizer_$25=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_margin_0_5in=caml_string_of_jsbytes("margin: 0.5in"),
     cst_line_height_3cm=caml_string_of_jsbytes("line-height: 3cm"),
     cst_line_height_120=caml_string_of_jsbytes("line-height: 120%"),
     cst_grid_0_1_foo=caml_string_of_jsbytes("grid: 0 1 foo"),
     cst_margin_0_5_in=caml_string_of_jsbytes("margin: 0.5-in"),
     cst_margin_02e_20=caml_string_of_jsbytes("margin: .02e+20"),
     cst_margin_02e_20$0=caml_string_of_jsbytes("margin: .02e-20"),
     cst_margin_02E_20=caml_string_of_jsbytes("margin: .02E+20"),
     cst_margin_02E_20$0=caml_string_of_jsbytes("margin: .02E-20"),
     cst_margin_02E20=caml_string_of_jsbytes("margin: .02E20"),
     cst_margin_02e20=caml_string_of_jsbytes("margin: .02e20"),
     cst_css_gen_src_css_tokenizer_$20=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst$8=caml_string_of_jsbytes("  "),
     cst_css_gen_src_css_tokenizer_$15=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_foo_bar_baz=caml_string_of_jsbytes("-foo-bar: baz"),
     cst_foo_bar=caml_string_of_jsbytes("-foo-bar("),
     cst_foo_bar$0=caml_string_of_jsbytes("@foo-bar"),
     cst_foo_bar$1=caml_string_of_jsbytes("@-foo-bar"),
     cst_foo_bar$2=caml_string_of_jsbytes("@--foo-bar"),
     cst_var=caml_string_of_jsbytes("--var"),
     cst_RGBA=caml_string_of_jsbytes("RGBA"),
     cst_css_gen_src_css_tokenizer_$10=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst$7=caml_string_of_jsbytes(")({}[];:"),
     cst_css_gen_src_css_tokenizer_$5=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst$6=caml_string_of_jsbytes(""),
     cst_css_gen_src_css_tokenizer_$0=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst$5=caml_string_of_jsbytes(""),
     cst$4=caml_string_of_jsbytes("@"),
     cst$3=caml_string_of_jsbytes(""),
     cst$2=caml_string_of_jsbytes("*/"),
     cst$1=caml_string_of_jsbytes("/*"),
     cst_url=caml_string_of_jsbytes("url("),
     cst$0=caml_string_of_jsbytes(""),
     cst_atkeyword=caml_string_of_jsbytes("atkeyword"),
     cst_Lbracket=caml_string_of_jsbytes("Lbracket"),
     cst_Dimension=caml_string_of_jsbytes("Dimension"),
     cst_Atkeyword=caml_string_of_jsbytes("Atkeyword"),
     cst_Colon=caml_string_of_jsbytes("Colon"),
     cst_Comma=caml_string_of_jsbytes("Comma"),
     cst_Comment=caml_string_of_jsbytes("Comment"),
     cst_Delim=caml_string_of_jsbytes("Delim"),
     cst_Eof=caml_string_of_jsbytes("Eof"),
     cst_Error=caml_string_of_jsbytes("Error"),
     cst_Function=caml_string_of_jsbytes("Function"),
     cst_Hash=caml_string_of_jsbytes("Hash"),
     cst_Ident=caml_string_of_jsbytes("Ident"),
     cst_Rcurly=caml_string_of_jsbytes("Rcurly"),
     cst_Lcurly=caml_string_of_jsbytes("Lcurly"),
     cst_Lparen=caml_string_of_jsbytes("Lparen"),
     cst_Number=caml_string_of_jsbytes("Number"),
     cst_Percentage=caml_string_of_jsbytes("Percentage"),
     cst_Rbracket=caml_string_of_jsbytes("Rbracket"),
     cst_Rparen=caml_string_of_jsbytes("Rparen"),
     cst_Semi_colon=caml_string_of_jsbytes("Semi_colon"),
     cst_String=caml_string_of_jsbytes("String"),
     cst_Uri=caml_string_of_jsbytes("Uri"),
     cst_White_space=caml_string_of_jsbytes("White_space"),
     cst_lcurly=caml_string_of_jsbytes("lcurly"),
     cst_eof=caml_string_of_jsbytes("eof"),
     cst_colon=caml_string_of_jsbytes("colon"),
     cst_comma=caml_string_of_jsbytes("comma"),
     cst_comment=caml_string_of_jsbytes("comment"),
     cst_delim=caml_string_of_jsbytes("delim"),
     cst_dimension=caml_string_of_jsbytes("dimension"),
     cst_error=caml_string_of_jsbytes("error"),
     cst_function=caml_string_of_jsbytes("function"),
     cst_hash=caml_string_of_jsbytes("hash"),
     cst_ident=caml_string_of_jsbytes("ident"),
     cst_lbracket=caml_string_of_jsbytes("lbracket"),
     cst_rparen=caml_string_of_jsbytes("rparen"),
     cst_lparen=caml_string_of_jsbytes("lparen"),
     cst_number=caml_string_of_jsbytes("number"),
     cst_percentage=caml_string_of_jsbytes("percentage"),
     cst_rbracket=caml_string_of_jsbytes("rbracket"),
     cst_rcurly=caml_string_of_jsbytes("rcurly"),
     cst_semi_colon=caml_string_of_jsbytes("semi_colon"),
     cst_string=caml_string_of_jsbytes("string"),
     cst_uri=caml_string_of_jsbytes("uri"),
     cst_white_space=caml_string_of_jsbytes("white_space"),
     cst_atkeyword$0=caml_string_of_jsbytes("atkeyword"),
     cst_Lbracket$0=caml_string_of_jsbytes("Lbracket"),
     cst_Dimension$0=caml_string_of_jsbytes("Dimension"),
     cst_Atkeyword$0=caml_string_of_jsbytes("Atkeyword"),
     cst_Colon$0=caml_string_of_jsbytes("Colon"),
     cst_Comma$0=caml_string_of_jsbytes("Comma"),
     cst_Comment$0=caml_string_of_jsbytes("Comment"),
     cst_Delim$0=caml_string_of_jsbytes("Delim"),
     cst_Eof$0=caml_string_of_jsbytes("Eof"),
     cst_Error$0=caml_string_of_jsbytes("Error"),
     cst_Function$0=caml_string_of_jsbytes("Function"),
     cst_Hash$0=caml_string_of_jsbytes("Hash"),
     cst_Ident$0=caml_string_of_jsbytes("Ident"),
     cst_Rcurly$0=caml_string_of_jsbytes("Rcurly"),
     cst_Lcurly$0=caml_string_of_jsbytes("Lcurly"),
     cst_Lparen$0=caml_string_of_jsbytes("Lparen"),
     cst_Number$0=caml_string_of_jsbytes("Number"),
     cst_Percentage$0=caml_string_of_jsbytes("Percentage"),
     cst_Rbracket$0=caml_string_of_jsbytes("Rbracket"),
     cst_Rparen$0=caml_string_of_jsbytes("Rparen"),
     cst_Semi_colon$0=caml_string_of_jsbytes("Semi_colon"),
     cst_String$0=caml_string_of_jsbytes("String"),
     cst_Uri$0=caml_string_of_jsbytes("Uri"),
     cst_White_space$0=caml_string_of_jsbytes("White_space"),
     cst_lcurly$0=caml_string_of_jsbytes("lcurly"),
     cst_eof$0=caml_string_of_jsbytes("eof"),
     cst_colon$0=caml_string_of_jsbytes("colon"),
     cst_comma$0=caml_string_of_jsbytes("comma"),
     cst_comment$0=caml_string_of_jsbytes("comment"),
     cst_delim$0=caml_string_of_jsbytes("delim"),
     cst_dimension$0=caml_string_of_jsbytes("dimension"),
     cst_error$0=caml_string_of_jsbytes("error"),
     cst_function$0=caml_string_of_jsbytes("function"),
     cst_hash$0=caml_string_of_jsbytes("hash"),
     cst_ident$0=caml_string_of_jsbytes("ident"),
     cst_lbracket$0=caml_string_of_jsbytes("lbracket"),
     cst_rparen$0=caml_string_of_jsbytes("rparen"),
     cst_lparen$0=caml_string_of_jsbytes("lparen"),
     cst_number$0=caml_string_of_jsbytes("number"),
     cst_percentage$0=caml_string_of_jsbytes("percentage"),
     cst_rbracket$0=caml_string_of_jsbytes("rbracket"),
     cst_rcurly$0=caml_string_of_jsbytes("rcurly"),
     cst_semi_colon$0=caml_string_of_jsbytes("semi_colon"),
     cst_string$0=caml_string_of_jsbytes("string"),
     cst_uri$0=caml_string_of_jsbytes("uri"),
     cst_white_space$0=caml_string_of_jsbytes("white_space"),
     cst_Css_gen_Css_tokenizer=
      caml_string_of_jsbytes("Css_gen__Css_tokenizer"),
     cst_css_gen=caml_string_of_jsbytes("css_gen"),
     cst_css_gen_src_css_tokenizer_=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_css_gen$0=caml_string_of_jsbytes("css_gen"),
     tp_loc=caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml.Token.t"),
     cst_Css_gen_Css_tokenizer_Erro=
      caml_string_of_jsbytes("Css_gen__Css_tokenizer.Error_happened"),
     cst_css_gen_src_css_tokenizer_$1=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$2=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$3=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$4=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_35dff7058879738597a4585fdd=
      caml_string_of_jsbytes("35dff7058879738597a4585fdd8d6e17"),
     cst_css_gen_src_css_tokenizer_$6=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$7=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$8=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$9=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_35dff7058879738597a4585fdd$0=
      caml_string_of_jsbytes("35dff7058879738597a4585fdd8d6e17"),
     cst_css_gen_src_css_tokenizer_$11=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$12=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$13=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$14=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_35dff7058879738597a4585fdd$1=
      caml_string_of_jsbytes("35dff7058879738597a4585fdd8d6e17"),
     cst_css_gen_src_css_tokenizer_$16=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$17=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$18=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$19=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_35dff7058879738597a4585fdd$2=
      caml_string_of_jsbytes("35dff7058879738597a4585fdd8d6e17"),
     cst_css_gen_src_css_tokenizer_$21=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$22=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$23=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$24=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_35dff7058879738597a4585fdd$3=
      caml_string_of_jsbytes("35dff7058879738597a4585fdd8d6e17"),
     cst_css_gen_src_css_tokenizer_$26=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$27=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$28=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$29=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_35dff7058879738597a4585fdd$4=
      caml_string_of_jsbytes("35dff7058879738597a4585fdd8d6e17"),
     cst_css_gen_src_css_tokenizer_$31=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$32=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$33=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$34=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_35dff7058879738597a4585fdd$5=
      caml_string_of_jsbytes("35dff7058879738597a4585fdd8d6e17"),
     cst_css_gen_src_css_tokenizer_$36=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$37=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$38=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$39=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_35dff7058879738597a4585fdd$6=
      caml_string_of_jsbytes("35dff7058879738597a4585fdd8d6e17"),
     cst_css_gen_src_css_tokenizer_$41=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$42=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$43=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$44=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_35dff7058879738597a4585fdd$7=
      caml_string_of_jsbytes("35dff7058879738597a4585fdd8d6e17"),
     cst_css_gen_src_css_tokenizer_$46=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$47=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$48=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$49=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_35dff7058879738597a4585fdd$8=
      caml_string_of_jsbytes("35dff7058879738597a4585fdd8d6e17"),
     cst_css_gen_src_css_tokenizer_$51=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$52=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$53=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$54=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_35dff7058879738597a4585fdd$9=
      caml_string_of_jsbytes("35dff7058879738597a4585fdd8d6e17"),
     cst_css_gen_src_css_tokenizer_$56=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$57=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$58=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_css_gen_src_css_tokenizer_$59=
      caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),
     cst_35dff7058879738597a4585fdd$10=
      caml_string_of_jsbytes("35dff7058879738597a4585fdd8d6e17"),
     cst_css_gen$1=caml_string_of_jsbytes("css_gen"),
     cst_Css_gen_Css_tokenizer$0=
      caml_string_of_jsbytes("Css_gen__Css_tokenizer"),
     cst_Expected_any=caml_string_of_jsbytes("Expected <any>"),
     cst_Expected_value=caml_string_of_jsbytes("Expected <value>"),
     cst_flex_1_0_auto$0=caml_string_of_jsbytes("flex: 1 0 auto"),
     cst_flex_1_0_auto$1=caml_string_of_jsbytes("flex: 1 0 auto;"),
     cst_background_5d9ab2_url_img_=
      caml_string_of_jsbytes
       ('background: #5d9ab2 url("img_tree.png") no-repeat top left;margin-left: 200px'),
     cst$14=caml_string_of_jsbytes(";;;;;"),
     cst_flex_1_0_auto_other_sa=
      caml_string_of_jsbytes("flex: 1 0 auto ;; other : sa "),
     cst_css_gen_src_css_parser_ml$23=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_content=
      caml_string_of_jsbytes
       ("content: '\xe2\x86\x90 \xe2\x86\x91 \xe2\x86\x92 \xe2\x86\x93 \xe2\x86\x94 \xe2\x86\x95 \xe2\x87\xaa \xe2\x86\xb9 \xe2\xac\x88 \xe2\x86\x98 \xe2\x9f\xbe \xe2\x86\xb6'"),
     cst_css_gen_src_css_parser_ml$18=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_flex_1_0_auto=caml_string_of_jsbytes("flex: 1 0 auto"),
     cst_content_Hello_World=caml_string_of_jsbytes("content: 'Hello World'"),
     cst_content_foo=caml_string_of_jsbytes("content: foo;"),
     cst_content_bar=caml_string_of_jsbytes("content: bar "),
     cst_css_gen_src_css_parser_ml$13=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_x=caml_string_of_jsbytes("x"),
     cst_3=caml_string_of_jsbytes("3"),
     cst_3in=caml_string_of_jsbytes("3in"),
     cst_3$0=caml_string_of_jsbytes("3%"),
     cst_fff=caml_string_of_jsbytes("#fff"),
     cst_1_0_auto=caml_string_of_jsbytes("1 0 auto"),
     cst_Hello_World=caml_string_of_jsbytes("'Hello World'"),
     cst_rgb_0_0_0=caml_string_of_jsbytes("rgb(0,0,0)"),
     cst_css_gen_src_css_parser_ml$8=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     s=
      caml_string_of_jsbytes
       ("0 4px 8px 0 RGBA(var(--js-text-color-rgb), 0.12), 0 2px 4px 0 RGBA(var(--js-text-color-rgb), 0.08)"),
     cst_css_gen_src_css_parser_ml$0=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$1=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_s_sexp_arg_Or_error_t=
      caml_string_of_jsbytes("%s --> %{sexp:arg Or_error.t}\n"),
     cst$13=caml_string_of_jsbytes(" --> "),
     cst_Expected_declaration=caml_string_of_jsbytes("Expected <declaration>"),
     cst_Unexpected_token=caml_string_of_jsbytes("Unexpected token"),
     cst_Css_gen_Css_parser=caml_string_of_jsbytes("Css_gen__Css_parser"),
     cst_css_gen$2=caml_string_of_jsbytes("css_gen"),
     cst_css_gen_src_css_parser_ml=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst$12=caml_string_of_jsbytes(""),
     cst_css_gen$3=caml_string_of_jsbytes("css_gen"),
     cst_css_gen_src_css_parser_ml$2=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$3=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$4=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$5=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$6=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$7=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_74a84add0e27aefc1e1423192c=
      caml_string_of_jsbytes("74a84add0e27aefc1e1423192c0e2e0e"),
     cst_css_gen_src_css_parser_ml$9=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$10=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$11=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$12=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_74a84add0e27aefc1e1423192c$0=
      caml_string_of_jsbytes("74a84add0e27aefc1e1423192c0e2e0e"),
     cst_css_gen_src_css_parser_ml$14=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$15=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$16=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$17=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_74a84add0e27aefc1e1423192c$1=
      caml_string_of_jsbytes("74a84add0e27aefc1e1423192c0e2e0e"),
     cst_css_gen_src_css_parser_ml$19=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$20=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$21=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$22=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_74a84add0e27aefc1e1423192c$2=
      caml_string_of_jsbytes("74a84add0e27aefc1e1423192c0e2e0e"),
     cst_css_gen_src_css_parser_ml$24=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$25=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$26=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_css_gen_src_css_parser_ml$27=
      caml_string_of_jsbytes("css_gen/src/css_parser.ml"),
     cst_74a84add0e27aefc1e1423192c$3=
      caml_string_of_jsbytes("74a84add0e27aefc1e1423192c0e2e0e"),
     cst_css_gen$4=caml_string_of_jsbytes("css_gen"),
     cst_Css_gen_Css_parser$0=caml_string_of_jsbytes("Css_gen__Css_parser"),
     cst_red$0=caml_string_of_jsbytes("red"),
     cst_ff0000=caml_string_of_jsbytes("#ff0000"),
     cst_black=caml_string_of_jsbytes("black"),
     cst_css_gen_src_css_gen_ml$5=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml"),
     cst_red$1=caml_string_of_jsbytes("red"),
     cst_black$0=caml_string_of_jsbytes("black"),
     cst_css_gen_src_css_gen_ml$6=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml"),
     cst$22=caml_string_of_jsbytes('";"'),
     cst_content$0=caml_string_of_jsbytes("content"),
     cst_css_gen_src_css_gen_ml$0=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml"),
     cst_animation_delay=caml_string_of_jsbytes("animation-delay"),
     cst_animation_iteration_count=
      caml_string_of_jsbytes("animation-iteration-count"),
     cst_animation_timing_function=
      caml_string_of_jsbytes("animation-timing-function"),
     cst_animation_fill_mode=caml_string_of_jsbytes("animation-fill-mode"),
     cst_animation_direction=caml_string_of_jsbytes("animation-direction"),
     cst_animation_duration=caml_string_of_jsbytes("animation-duration"),
     cst_animation_name=caml_string_of_jsbytes("animation-name"),
     cst_align_self=caml_string_of_jsbytes("align-self"),
     cst_order=caml_string_of_jsbytes("order"),
     cst_flex=caml_string_of_jsbytes("flex"),
     cst_align_items=caml_string_of_jsbytes("align-items"),
     cst_flex_wrap=caml_string_of_jsbytes("flex-wrap"),
     cst_flex_direction=caml_string_of_jsbytes("flex-direction"),
     cst_center=caml_string_of_jsbytes("center"),
     cst_auto$0=caml_string_of_jsbytes("auto"),
     cst_flex_start=caml_string_of_jsbytes("flex-start"),
     cst_baseline=caml_string_of_jsbytes("baseline"),
     cst_flex_end=caml_string_of_jsbytes("flex-end"),
     cst_stretch=caml_string_of_jsbytes("stretch"),
     cst_text_decoration=caml_string_of_jsbytes("text-decoration"),
     cst_border_radius=caml_string_of_jsbytes("border-radius"),
     cst_border_collapse=caml_string_of_jsbytes("border-collapse"),
     cst_outline=caml_string_of_jsbytes("outline"),
     cst_border_left=caml_string_of_jsbytes("border-left"),
     cst_border_bottom=caml_string_of_jsbytes("border-bottom"),
     cst_border_top=caml_string_of_jsbytes("border-top"),
     cst_border_right=caml_string_of_jsbytes("border-right"),
     cst_border=caml_string_of_jsbytes("border"),
     cst$19=caml_string_of_jsbytes(""),
     cst$20=caml_string_of_jsbytes(""),
     cst$21=caml_string_of_jsbytes(" "),
     cst_float=caml_string_of_jsbytes("float"),
     cst_background_image=caml_string_of_jsbytes("background-image"),
     cst_background_color=caml_string_of_jsbytes("background-color"),
     cst_color=caml_string_of_jsbytes("color"),
     cst_font_variant=caml_string_of_jsbytes("font-variant"),
     cst_font_weight=caml_string_of_jsbytes("font-weight"),
     cst_font_style=caml_string_of_jsbytes("font-style"),
     cst_font_family=caml_string_of_jsbytes("font-family"),
     cst_initial=caml_string_of_jsbytes("initial"),
     cst_pre=caml_string_of_jsbytes("pre"),
     cst_inherit=caml_string_of_jsbytes("inherit"),
     cst_nowrap=caml_string_of_jsbytes("nowrap"),
     cst_normal=caml_string_of_jsbytes("normal"),
     cst_pre_line=caml_string_of_jsbytes("pre-line"),
     cst_pre_wrap=caml_string_of_jsbytes("pre-wrap"),
     cst_white_space$1=caml_string_of_jsbytes("white-space"),
     cst_opacity=caml_string_of_jsbytes("opacity"),
     cst_z_index=caml_string_of_jsbytes("z-index"),
     cst_visibility=caml_string_of_jsbytes("visibility"),
     cst_display=caml_string_of_jsbytes("display"),
     cst_box_sizing=caml_string_of_jsbytes("box-sizing"),
     cst_sticky=caml_string_of_jsbytes("sticky"),
     cst_static=caml_string_of_jsbytes("static"),
     cst_absolute=caml_string_of_jsbytes("absolute"),
     cst_relative=caml_string_of_jsbytes("relative"),
     cst_fixed=caml_string_of_jsbytes("fixed"),
     cst_position=caml_string_of_jsbytes("position"),
     cst$18=caml_string_of_jsbytes(""),
     cst_auto=caml_string_of_jsbytes("auto"),
     cst_Auto$0=caml_string_of_jsbytes("Auto"),
     cst_Auto$1=caml_string_of_jsbytes("Auto"),
     cst_Ch=caml_string_of_jsbytes("Ch"),
     cst_Em=caml_string_of_jsbytes("Em"),
     cst_Percent=caml_string_of_jsbytes("Percent"),
     cst_Pt=caml_string_of_jsbytes("Pt"),
     cst_Px=caml_string_of_jsbytes("Px"),
     cst_Rem=caml_string_of_jsbytes("Rem"),
     cst_Vh=caml_string_of_jsbytes("Vh"),
     cst_Vw=caml_string_of_jsbytes("Vw"),
     cst_Ch$0=caml_string_of_jsbytes("Ch"),
     cst_Em$0=caml_string_of_jsbytes("Em"),
     cst_Percent$0=caml_string_of_jsbytes("Percent"),
     cst_Pt$0=caml_string_of_jsbytes("Pt"),
     cst_Px$0=caml_string_of_jsbytes("Px"),
     cst_Rem$0=caml_string_of_jsbytes("Rem"),
     cst_Vh$0=caml_string_of_jsbytes("Vh"),
     cst_Vw$0=caml_string_of_jsbytes("Vw"),
     cst_Bottom=caml_string_of_jsbytes("Bottom"),
     cst_Center=caml_string_of_jsbytes("Center"),
     cst_Justify=caml_string_of_jsbytes("Justify"),
     cst_Left=caml_string_of_jsbytes("Left"),
     cst_Middle=caml_string_of_jsbytes("Middle"),
     cst_Right=caml_string_of_jsbytes("Right"),
     cst_Top=caml_string_of_jsbytes("Top"),
     cst_Bottom$0=caml_string_of_jsbytes("Bottom"),
     cst_Center$0=caml_string_of_jsbytes("Center"),
     cst_Justify$0=caml_string_of_jsbytes("Justify"),
     cst_Left$0=caml_string_of_jsbytes("Left"),
     cst_Middle$0=caml_string_of_jsbytes("Middle"),
     cst_Right$0=caml_string_of_jsbytes("Right"),
     cst_Top$0=caml_string_of_jsbytes("Top"),
     partial=[12,41,0],
     partial$0=[0,2],
     partial$1=[0,0,0],
     err=[2,caml_string_of_jsbytes("css_gen/src/css_gen.ml.Color.T.t")],
     cst_HSLA=caml_string_of_jsbytes("HSLA"),
     cst_Hex=caml_string_of_jsbytes("Hex"),
     cst_Name=caml_string_of_jsbytes("Name"),
     cst_RGBA$0=caml_string_of_jsbytes("RGBA"),
     cst_Var=caml_string_of_jsbytes("Var"),
     cst_HSLA$0=caml_string_of_jsbytes("HSLA"),
     cst_Hex$0=caml_string_of_jsbytes("Hex"),
     cst_Name$0=caml_string_of_jsbytes("Name"),
     cst_RGBA$1=caml_string_of_jsbytes("RGBA"),
     cst_Var$0=caml_string_of_jsbytes("Var"),
     cst_css_gen_src_css_gen_ml_Col$0=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml.Color.T.HSLA.t"),
     cst_a$2=caml_string_of_jsbytes("a"),
     cst_h=caml_string_of_jsbytes("h"),
     cst_l=caml_string_of_jsbytes("l"),
     cst_s=caml_string_of_jsbytes("s"),
     cst_a$3=caml_string_of_jsbytes("a"),
     cst_l$0=caml_string_of_jsbytes("l"),
     cst_s$0=caml_string_of_jsbytes("s"),
     cst_h$0=caml_string_of_jsbytes("h"),
     cst_css_gen_src_css_gen_ml_Col=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml.Color.T.RGBA.t"),
     cst_a=caml_string_of_jsbytes("a"),
     cst_b=caml_string_of_jsbytes("b"),
     cst_g=caml_string_of_jsbytes("g"),
     cst_r=caml_string_of_jsbytes("r"),
     cst_a$0=caml_string_of_jsbytes("a"),
     cst_b$0=caml_string_of_jsbytes("b"),
     cst_g$0=caml_string_of_jsbytes("g"),
     cst_r$0=caml_string_of_jsbytes("r"),
     cst_Inherit=caml_string_of_jsbytes("Inherit"),
     cst_Initial=caml_string_of_jsbytes("Initial"),
     cst_Inherit$0=caml_string_of_jsbytes("Inherit"),
     cst_Initial$0=caml_string_of_jsbytes("Initial"),
     cst$16=caml_string_of_jsbytes("-"),
     cst$17=caml_string_of_jsbytes("_"),
     cst_Css_gen=caml_string_of_jsbytes("Css_gen"),
     cst_css_gen$5=caml_string_of_jsbytes("css_gen"),
     cst_css_gen_src_css_gen_ml=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml"),
     cst$15=caml_string_of_jsbytes(""),
     cst_css_gen$6=caml_string_of_jsbytes("css_gen"),
     tp_loc$0=caml_string_of_jsbytes("css_gen/src/css_gen.ml.Stable.V1.t"),
     cst_t=caml_string_of_jsbytes("t"),
     cst_css_gen_src_css_gen_ml_7_4=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml:7:4"),
     cst_t$0=caml_string_of_jsbytes("t"),
     tp_loc$1=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml.css_global_values"),
     tp_loc$2=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml.css_global_values"),
     cst_Initial$1=caml_string_of_jsbytes("Initial"),
     cst_Inherit$1=caml_string_of_jsbytes("Inherit"),
     cst_css_gen_src_css_gen_ml_21_=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml:21:2"),
     cst_css_global_values=caml_string_of_jsbytes("css_global_values"),
     cst_css_gen_src_css_gen_ml_20_=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml:20:0"),
     cst_css_global_values$0=caml_string_of_jsbytes("css_global_values"),
     tp_loc$3=caml_string_of_jsbytes("css_gen/src/css_gen.ml.Color.T.RGBA.t"),
     cst_a$1=caml_string_of_jsbytes("a"),
     cst_b$1=caml_string_of_jsbytes("b"),
     cst_g$1=caml_string_of_jsbytes("g"),
     cst_r$1=caml_string_of_jsbytes("r"),
     cst_t$1=caml_string_of_jsbytes("t"),
     cst_css_gen_src_css_gen_ml_29_=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml:29:6"),
     cst_t$2=caml_string_of_jsbytes("t"),
     tp_loc$4=caml_string_of_jsbytes("css_gen/src/css_gen.ml.Color.T.HSLA.t"),
     cst_a$4=caml_string_of_jsbytes("a"),
     cst_l$1=caml_string_of_jsbytes("l"),
     cst_s$1=caml_string_of_jsbytes("s"),
     cst_h$1=caml_string_of_jsbytes("h"),
     cst_t$3=caml_string_of_jsbytes("t"),
     cst_css_gen_src_css_gen_ml_41_=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml:41:6"),
     cst_t$4=caml_string_of_jsbytes("t"),
     tp_loc$5=caml_string_of_jsbytes("css_gen/src/css_gen.ml.Color.T.t"),
     tp_loc$6=caml_string_of_jsbytes("css_gen/src/css_gen.ml.Color.T.t"),
     cst_css_gen_src_css_gen_ml_58_=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml:58:8"),
     cst_Var$1=caml_string_of_jsbytes("Var"),
     cst_Hex$1=caml_string_of_jsbytes("Hex"),
     cst_Name$1=caml_string_of_jsbytes("Name"),
     cst_HSLA$1=caml_string_of_jsbytes("HSLA"),
     cst_RGBA$2=caml_string_of_jsbytes("RGBA"),
     cst_css_gen_src_css_gen_ml_53_=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml:53:6"),
     cst_t$5=caml_string_of_jsbytes("t"),
     cst_css_gen_src_css_gen_ml_52_=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml:52:4"),
     cst_t$6=caml_string_of_jsbytes("t"),
     tp_loc$7=caml_string_of_jsbytes("css_gen/src/css_gen.ml.Alignment.t"),
     tp_loc$8=caml_string_of_jsbytes("css_gen/src/css_gen.ml.Alignment.t"),
     cst_css_gen_src_css_gen_ml_102=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml:102:6"),
     cst_Justify$1=caml_string_of_jsbytes("Justify"),
     cst_Middle$1=caml_string_of_jsbytes("Middle"),
     cst_Bottom$1=caml_string_of_jsbytes("Bottom"),
     cst_Top$1=caml_string_of_jsbytes("Top"),
     cst_Center$1=caml_string_of_jsbytes("Center"),
     cst_Right$1=caml_string_of_jsbytes("Right"),
     cst_Left$1=caml_string_of_jsbytes("Left"),
     cst_css_gen_src_css_gen_ml_95_=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml:95:4"),
     cst_t$7=caml_string_of_jsbytes("t"),
     cst_css_gen_src_css_gen_ml_94_=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml:94:2"),
     cst_t$8=caml_string_of_jsbytes("t"),
     tp_loc$9=caml_string_of_jsbytes("css_gen/src/css_gen.ml.Length.t"),
     tp_loc$10=caml_string_of_jsbytes("css_gen/src/css_gen.ml.Length.t"),
     cst_css_gen_src_css_gen_ml_123=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml:123:6"),
     cst_Vw$1=caml_string_of_jsbytes("Vw"),
     cst_Vh$1=caml_string_of_jsbytes("Vh"),
     cst_Px$1=caml_string_of_jsbytes("Px"),
     cst_Pt$1=caml_string_of_jsbytes("Pt"),
     cst_Percent$1=caml_string_of_jsbytes("Percent"),
     cst_Em$1=caml_string_of_jsbytes("Em"),
     cst_Rem$1=caml_string_of_jsbytes("Rem"),
     cst_Ch$1=caml_string_of_jsbytes("Ch"),
     cst_css_gen_src_css_gen_ml_115=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml:115:4"),
     cst_t$9=caml_string_of_jsbytes("t"),
     cst_css_gen_src_css_gen_ml_114=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml:114:2"),
     cst_t$10=caml_string_of_jsbytes("t"),
     cst_css_gen_src_css_gen_ml_145=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml:145:6"),
     cst_Auto=caml_string_of_jsbytes("Auto"),
     cst_css_gen_src_css_gen_ml_144=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml:144:4"),
     cst_t$11=caml_string_of_jsbytes("t"),
     cst_css_gen_src_css_gen_ml_143=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml:143:2"),
     cst_t$12=caml_string_of_jsbytes("t"),
     tp_loc$11=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml.Auto_or_length.t"),
     tp_loc$12=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml.Auto_or_length.t"),
     cst_left=caml_string_of_jsbytes("left"),
     cst_top=caml_string_of_jsbytes("top"),
     cst_bottom=caml_string_of_jsbytes("bottom"),
     cst_right=caml_string_of_jsbytes("right"),
     cst_overflow=caml_string_of_jsbytes("overflow"),
     cst_overflow_x=caml_string_of_jsbytes("overflow-x"),
     cst_overflow_y=caml_string_of_jsbytes("overflow-y"),
     cst_font_size=caml_string_of_jsbytes("font-size"),
     cst_text_align=caml_string_of_jsbytes("text-align"),
     cst_horizontal_align=caml_string_of_jsbytes("horizontal-align"),
     cst_vertical_align=caml_string_of_jsbytes("vertical-align"),
     cst_width=caml_string_of_jsbytes("width"),
     cst_min_width=caml_string_of_jsbytes("min-width"),
     cst_max_width=caml_string_of_jsbytes("max-width"),
     cst_height=caml_string_of_jsbytes("height"),
     cst_min_height=caml_string_of_jsbytes("min-height"),
     cst_max_height=caml_string_of_jsbytes("max-height"),
     cst_padding_top=caml_string_of_jsbytes("padding-top"),
     cst_padding_bottom=caml_string_of_jsbytes("padding-bottom"),
     cst_padding_left=caml_string_of_jsbytes("padding-left"),
     cst_padding_right=caml_string_of_jsbytes("padding-right"),
     cst_margin_top=caml_string_of_jsbytes("margin-top"),
     cst_margin_bottom=caml_string_of_jsbytes("margin-bottom"),
     cst_margin_left=caml_string_of_jsbytes("margin-left"),
     cst_margin_right=caml_string_of_jsbytes("margin-right"),
     cst_border_spacing=caml_string_of_jsbytes("border-spacing"),
     cst_css_gen_src_css_gen_ml$1=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml"),
     cst_css_gen_src_css_gen_ml$2=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml"),
     cst_css_gen_src_css_gen_ml$3=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml"),
     cst_css_gen_src_css_gen_ml$4=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml"),
     cst_1dc95c75fcf6cb6c36feae5456=
      caml_string_of_jsbytes("1dc95c75fcf6cb6c36feae5456bffc80"),
     cst_css_gen_src_css_gen_ml$7=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml"),
     cst_css_gen_src_css_gen_ml$8=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml"),
     cst_css_gen_src_css_gen_ml$9=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml"),
     cst_css_gen_src_css_gen_ml$10=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml"),
     cst_css_gen_src_css_gen_ml$11=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml"),
     cst_css_gen_src_css_gen_ml$12=
      caml_string_of_jsbytes("css_gen/src/css_gen.ml"),
     cst_1dc95c75fcf6cb6c36feae5456$0=
      caml_string_of_jsbytes("1dc95c75fcf6cb6c36feae5456bffc80"),
     cst_css_gen$7=caml_string_of_jsbytes("css_gen"),
     cst_Css_gen$0=caml_string_of_jsbytes("Css_gen"),
     Expect_test_common_File=global_data.Expect_test_common__File,
     Core_kernel=global_data.Core_kernel,
     Core_kernel_Sexp=global_data.Core_kernel__Sexp,
     Core_kernel_List=global_data.Core_kernel__List,
     Core_kernel_String=global_data.Core_kernel__String,
     Core_kernel_Int=global_data.Core_kernel__Int,
     Assert_failure=global_data.Assert_failure,
     Core_kernel_Char=global_data.Core_kernel__Char,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Expect_test_config=global_data.Expect_test_config,
     Inline_test_config=global_data.Inline_test_config,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Core_kernel_Unit=global_data.Core_kernel__Unit,
     Core_kernel_Or_error=global_data.Core_kernel__Or_error,
     Sexplib0_Sexp=global_data.Sexplib0__Sexp,
     Core_kernel_Percent=global_data.Core_kernel__Percent,
     Core_kernel_Time_ns=global_data.Core_kernel__Time_ns,
     Core_kernel_Option=global_data.Core_kernel__Option,
     Core_kernel_Float=global_data.Core_kernel__Float,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Bin_prot_Read=global_data.Bin_prot__Read,
     Bin_prot_Common=global_data.Bin_prot__Common,
     Bin_prot_Write=global_data.Bin_prot__Write,
     Core_kernel_Stable=global_data.Core_kernel__Stable,
     Bin_prot_Shape=global_data.Bin_prot__Shape,
     Core_kernel_Sexpable=global_data.Core_kernel__Sexpable,
     Core_kernel_Fn=global_data.Core_kernel__Fn,
     Css_gen=[0];
    caml_register_global(853,Css_gen,"Css_gen__");
    caml_call1(Ppx_module_timer_runtime[4],cst_Css_gen_Css_tokenizer);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_css_gen);
    caml_call1(Expect_test_collector[4][1],cst_css_gen_src_css_tokenizer_);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_css_gen$0,cst);
    var
     _H_=[0,caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),277,2],
     _G_=[0,caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),254,2],
     _F_=[0,caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),255,2],
     _E_=[0,caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),246,2],
     _D_=[0,caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),247,2],
     _C_=[0,caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),235,2],
     _B_=[0,caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),236,2],
     _A_=[0,caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),223,2],
     _z_=[0,caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),202,2],
     _y_=[0,caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),145,2],
     _x_=[0,caml_string_of_jsbytes("css_gen/src/css_tokenizer.ml"),55,2],
     _a_=[0,caml_string_of_jsbytes("Ident")],
     _b_=[0,caml_string_of_jsbytes("Function")],
     _c_=[0,caml_string_of_jsbytes("Atkeyword")],
     _d_=[0,caml_string_of_jsbytes("Hash")],
     _e_=[0,caml_string_of_jsbytes("String")],
     _f_=[0,caml_string_of_jsbytes("Uri")],
     _g_=[0,caml_string_of_jsbytes("Delim")],
     _h_=[0,caml_string_of_jsbytes("Number")],
     _i_=[0,caml_string_of_jsbytes("Percentage")],
     _j_=[0,caml_string_of_jsbytes("Dimension")],
     _k_=[0,caml_string_of_jsbytes("White_space")],
     _l_=[0,caml_string_of_jsbytes("Colon")],
     _m_=[0,caml_string_of_jsbytes("Semi_colon")],
     _n_=[0,caml_string_of_jsbytes("Comma")],
     _o_=[0,caml_string_of_jsbytes("Lbracket")],
     _p_=[0,caml_string_of_jsbytes("Rbracket")],
     _q_=[0,caml_string_of_jsbytes("Lparen")],
     _r_=[0,caml_string_of_jsbytes("Rparen")],
     _s_=[0,caml_string_of_jsbytes("Lcurly")],
     _t_=[0,caml_string_of_jsbytes("Rcurly")],
     _u_=[0,caml_string_of_jsbytes("Comment")],
     _v_=[0,caml_string_of_jsbytes("Eof")],
     _w_=[0,caml_string_of_jsbytes("Error")],
     _L_=[1,caml_string_of_jsbytes("((Eof 0 0))")],
     _M_=[0,caml_string_of_jsbytes("")],
     _O_=[0,caml_string_of_jsbytes("eof")],
     _T_=
      [1,
       caml_string_of_jsbytes
        (" ((Rparen 0 1)(Lparen 1 1)(Lcurly 2 1)(Rcurly 3 1)(Lbracket 4 1)(Rbracket 5 1)(Semi_colon 6 1)(Colon 7 1)(Eof 8 0)) ")],
     _U_=[0,caml_string_of_jsbytes("")],
     _W_=[0,caml_string_of_jsbytes("simple_tokens")],
     _$_=
      [1,
       caml_string_of_jsbytes
        ("\n    ((Ident 0 8)(Colon 8 1)(White_space 9 1)(Ident 10 3)(Eof 13 0))\n    ((Function 0 9)(Eof 9 0))\n    ((Atkeyword 0 8)(Eof 8 0))\n    ((Atkeyword 0 9)(Eof 9 0))\n    ((Atkeyword 0 10)(Eof 10 0))\n    ((Ident 0 5)(Eof 5 0))\n    ((Ident 0 4)(Eof 4 0)) ")],
     _aa_=[0,caml_string_of_jsbytes("")],
     _ac_=[0,caml_string_of_jsbytes("ident")],
     _ah_=[1,caml_string_of_jsbytes("((White_space 0 2)(Eof 2 0))")],
     _ai_=[0,caml_string_of_jsbytes("")],
     _ak_=[0,caml_string_of_jsbytes("whitespace")],
     _ap_=
      [1,
       caml_string_of_jsbytes
        ("\n    ((Ident 0 6)(Colon 6 1)(White_space 7 1)(Dimension 8 5)(Eof 13 0))\n    ((Ident 0 11)(Colon 11 1)(White_space 12 1)(Dimension 13 3)(Eof 16 0))\n    ((Ident 0 11)(Colon 11 1)(White_space 12 1)(Percentage 13 4)(Eof 17 0))\n    ((Ident 0 4)(Colon 4 1)(White_space 5 1)(Number 6 1)(White_space 7 1)(Number 8 1)(White_space 9 1)(Ident 10 3)(Eof 13 0))\n    ((Ident 0 6)(Colon 6 1)(White_space 7 1)(Dimension 8 6)(Eof 14 0))\n    ((Ident 0 6)(Colon 6 1)(White_space 7 1)(Number 8 7)(Eof 15 0))\n    ((Ident 0 6)(Colon 6 1)(White_space 7 1)(Number 8 7)(Eof 15 0))\n    ((Ident 0 6)(Colon 6 1)(White_space 7 1)(Number 8 7)(Eof 15 0))\n    ((Ident 0 6)(Colon 6 1)(White_space 7 1)(Number 8 7)(Eof 15 0))\n    ((Ident 0 6)(Colon 6 1)(White_space 7 1)(Number 8 6)(Eof 14 0))\n    ((Ident 0 6)(Colon 6 1)(White_space 7 1)(Number 8 6)(Eof 14 0)) ")],
     _aq_=[0,caml_string_of_jsbytes("")],
     _as_=[0,caml_string_of_jsbytes("numbers")],
     _ax_=
      [1,
       caml_string_of_jsbytes
        ("\n    ((Error 0 8))\n    ((Error 0 1))\n    ((Error 0 3)) ")],
     _ay_=[0,caml_string_of_jsbytes("")],
     _aA_=[0,caml_string_of_jsbytes("badly_quoted")],
     _aF_=
      [1,
       caml_string_of_jsbytes
        (" ((String 0 6)(String 6 5)(String 11 3)(White_space 14 1)(String 15 4)(White_space 19 1)(String 20 4)(Eof 24 0)) ")],
     _aG_=[0,caml_string_of_jsbytes("")],
     _aI_=[0,caml_string_of_jsbytes("quoted")],
     _aN_=
      [1,
       caml_string_of_jsbytes
        ("\n    ((Ident 0 5)(Colon 5 1)(White_space 6 1)(Hash 7 4)(Eof 11 0))\n    ((Ident 0 5)(Colon 5 1)(White_space 6 1)(Function 7 4)(Number 11 3)(Comma 14 1)(Number 15 1)(Comma 16 1)(Number 17 1)(Rparen 18 1)(Eof 19 0))\n    ((Ident 0 5)(Colon 5 1)(White_space 6 1)(Function 7 4)(Number 11 3)(Comma 14 1)(Number 15 1)(Comma 16 1)(Number 17 1)(Rparen 18 1)(Eof 19 0)) ")],
     _aO_=[0,caml_string_of_jsbytes("")],
     _aQ_=[0,caml_string_of_jsbytes("colors")],
     _aV_=
      [1,
       caml_string_of_jsbytes
        (" ((Atkeyword 0 7)(White_space 7 1)(String 8 9)(Semi_colon 17 1)(Eof 18 0)) ")],
     _aW_=[0,caml_string_of_jsbytes("")],
     _aY_=[0,caml_string_of_jsbytes("import")],
     _a3_=[1,caml_string_of_jsbytes(" ((Ident 0 5)(Delim 5 1)(Eof 6 0)) ")],
     _a4_=[0,caml_string_of_jsbytes("")],
     _a6_=[0,caml_string_of_jsbytes("red example")],
     _a$_=
      [1,
       caml_string_of_jsbytes
        ("\n    ((Function 0 4)(White_space 4 1)(String 5 24)(Rparen 29 1)(Eof 30 0))\n    ((Function 0 4)(String 4 24)(Rparen 28 1)(Eof 29 0))\n    ((Function 0 4)(String 4 24)(White_space 28 1)(Rparen 29 1)(Eof 30 0))\n    ((Uri 0 30)(Eof 30 0))\n    ((Error 0 25)) ")],
     _ba_=[0,caml_string_of_jsbytes("")],
     _bc_=[0,caml_string_of_jsbytes("url")],
     _bh_=
      [1,
       caml_string_of_jsbytes
        ("\n    ((String 0 15)(Eof 15 0))\n    ((String 0 51)(Eof 51 0))\n    ((String 0 49)(Eof 49 0)) ")],
     _bi_=[0,caml_string_of_jsbytes("")],
     _bk_=[0,caml_string_of_jsbytes("escape")],
     _bW_=
      [0,
       caml_string_of_jsbytes
        ("\xe2\x86\x90 \xe2\x86\x91 \xe2\x86\x92 \xe2\x86\x93 \xe2\x86\x94 \xe2\x86\x95 \xe2\x87\xaa \xe2\x86\xb9 \xe2\xac\x88 \xe2\x86\x98 \xe2\x9f\xbe \xe2\x86\xb6")],
     _bt_=[0,caml_string_of_jsbytes("validate_value value")],
     _bq_=[12,10,0],
     _br_=[0,0],
     _bo_=[0,caml_string_of_jsbytes("got")],
     _bp_=[0,caml_string_of_jsbytes("expected")],
     _bv_=
      [1,
       caml_string_of_jsbytes
        ("\n    Number\n    White_space\n    Dimension\n    White_space\n    Dimension\n    White_space\n    Number\n    White_space\n    Function\n    Function\n    Ident\n    Rparen\n    Comma\n    White_space\n    Number\n    Rparen\n    Comma\n    White_space\n    Number\n    White_space\n    Dimension\n    White_space\n    Dimension\n    White_space\n    Number\n    White_space\n    Function\n    Function\n    Ident\n    Rparen\n    Comma\n    White_space\n    Number\n    Rparen ")],
     _bw_=[0,caml_string_of_jsbytes("")],
     _bz_=
      [1,caml_string_of_jsbytes('\n    ("validate_value value" (Ok ())) ')],
     _bA_=[0,caml_string_of_jsbytes("")],
     _bC_=[0,caml_string_of_jsbytes("")],
     _bH_=
      [1,
       caml_string_of_jsbytes
        ("\n      x --> (Ok ())\n      3 --> (Ok ())\n      3in --> (Ok ())\n      3% --> (Ok ())\n      #fff --> (Ok ())\n      1 0 auto --> (Ok ())\n      'Hello World' --> (Ok ())\n      rgb(0,0,0) --> (Ok ()) ")],
     _bI_=[0,caml_string_of_jsbytes("")],
     _bK_=[0,caml_string_of_jsbytes("values")],
     _bP_=
      [1,
       caml_string_of_jsbytes
        ('\n      flex: 1 0 auto --> (Ok (flex "1 0 auto"))\n      content: \'Hello World\' --> (Ok (content "\'Hello World\'"))\n      content: foo; --> (Error ("Unexpected token" (expected Eof) (got Semi_colon)))\n      content: bar  --> (Ok (content bar)) ')],
     _bQ_=[0,caml_string_of_jsbytes("")],
     _bS_=[0,caml_string_of_jsbytes("declaration")],
     _bY_=
      [1,
       caml_string_of_jsbytes
        ("\n    content: '\xe2\x86\x90 \xe2\x86\x91 \xe2\x86\x92 \xe2\x86\x93 \xe2\x86\x94 \xe2\x86\x95 \xe2\x87\xaa \xe2\x86\xb9 \xe2\xac\x88 \xe2\x86\x98 \xe2\x9f\xbe \xe2\x86\xb6' --> (Ok\n     (content\n      \"'\\226\\134\\144 \\226\\134\\145 \\226\\134\\146 \\226\\134\\147 \\226\\134\\148 \\226\\134\\149 \\226\\135\\170 \\226\\134\\185 \\226\\172\\136 \\226\\134\\152 \\226\\159\\190 \\226\\134\\182'\"))\n    \"\\226\\134\\144 \\226\\134\\145 \\226\\134\\146 \\226\\134\\147 \\226\\134\\148 \\226\\134\\149 \\226\\135\\170 \\226\\134\\185 \\226\\172\\136 \\226\\134\\152 \\226\\159\\190 \\226\\134\\182\" ")],
     _bZ_=[0,caml_string_of_jsbytes("")],
     _b1_=[0,caml_string_of_jsbytes("unicode")],
     _b6_=
      [1,
       caml_string_of_jsbytes
        ('\n    flex: 1 0 auto --> (Ok ((flex "1 0 auto")))\n    flex: 1 0 auto; --> (Ok ((flex "1 0 auto")))\n    background: #5d9ab2 url("img_tree.png") no-repeat top left;margin-left: 200px --> (Ok\n     ((background "#5d9ab2 url(\\"img_tree.png\\") no-repeat top left")\n      (margin-left 200px)))\n    ;;;;; --> (Ok ())\n    flex: 1 0 auto ;; other : sa  --> (Ok ((flex "1 0 auto") (other sa))) ')],
     _b7_=[0,caml_string_of_jsbytes("")],
     _b9_=[0,caml_string_of_jsbytes("declaration list")],
     _fs_=[0,3404198,90],
     _fi_=[0,-81804554],
     _fj_=[0,1],
     _fe_=[0,caml_string_of_jsbytes("None")],
     _ff_=[0,caml_string_of_jsbytes("Backwards")],
     _fg_=[0,caml_string_of_jsbytes("Both")],
     _fd_=[0,caml_string_of_jsbytes("Forwards")],
     _fa_=[0,caml_string_of_jsbytes("Alternate_reverse")],
     _fb_=[0,caml_string_of_jsbytes("Reverse")],
     _fc_=[0,caml_string_of_jsbytes("Alternate")],
     _e$_=[0,caml_string_of_jsbytes("Normal")],
     _e__=[0,[8,[0,0,0],0,[0,2],[12,115,0]],caml_string_of_jsbytes("%.2fs")],
     _e9_=
      [0,
       [8,[0,0,0],0,0,[12,32,[8,[0,0,0],0,0,[12,32,[2,0,0]]]]],
       caml_string_of_jsbytes("%f %f %s")],
     _e7_=[0,caml_string_of_jsbytes("Wrap")],
     _e8_=[0,caml_string_of_jsbytes("Nowrap")],
     _e6_=[0,caml_string_of_jsbytes("Wrap_reverse")],
     _e2_=[0,caml_string_of_jsbytes("Column_reverse")],
     _e3_=[0,caml_string_of_jsbytes("Row_reverse")],
     _e4_=[0,caml_string_of_jsbytes("Row")],
     _e5_=[0,caml_string_of_jsbytes("Column")],
     _e1_=[0,caml_string_of_jsbytes(" ")],
     _eX_=[0,caml_string_of_jsbytes("Wavy")],
     _eW_=[0,caml_string_of_jsbytes("Solid")],
     _eZ_=[0,caml_string_of_jsbytes("Double")],
     _e0_=[0,caml_string_of_jsbytes("Dashed")],
     _eY_=[0,caml_string_of_jsbytes("Dotted")],
     _eT_=[0,caml_string_of_jsbytes("None")],
     _eU_=[0,caml_string_of_jsbytes("Underline")],
     _eV_=[0,caml_string_of_jsbytes("Line_through")],
     _eS_=[0,caml_string_of_jsbytes("Overline")],
     _eQ_=[0,caml_string_of_jsbytes("Collapse")],
     _eR_=[0,caml_string_of_jsbytes("Separate")],
     _eC_=[0,caml_string_of_jsbytes("None")],
     _eD_=[0,caml_string_of_jsbytes("Solid")],
     _eE_=[0,caml_string_of_jsbytes("Hidden")],
     _eF_=[0,caml_string_of_jsbytes("Ridge")],
     _eG_=[0,caml_string_of_jsbytes("Double")],
     _eH_=[0,caml_string_of_jsbytes("Dotted")],
     _eI_=[0,caml_string_of_jsbytes("Dashed")],
     _eJ_=[0,caml_string_of_jsbytes("Inset")],
     _eK_=[0,caml_string_of_jsbytes("Groove")],
     _eL_=[0,caml_string_of_jsbytes("Outset")],
     _ez_=[0,caml_string_of_jsbytes("None")],
     _eA_=[0,caml_string_of_jsbytes("Left")],
     _eB_=[0,caml_string_of_jsbytes("Right")],
     _ex_=
      [0,
       [11,caml_string_of_jsbytes("radial-gradient("),[2,0,[12,41,0]]],
       caml_string_of_jsbytes("radial-gradient(%s)")],
     _ey_=
      [0,
       [11,
        caml_string_of_jsbytes("linear-gradient("),
        [4,0,0,0,[11,caml_string_of_jsbytes("deg, "),[2,0,[12,41,0]]]]],
       caml_string_of_jsbytes("linear-gradient(%ddeg, %s)")],
     _ew_=
      [0,
       [11,caml_string_of_jsbytes("url("),[2,0,[12,41,0]]],
       caml_string_of_jsbytes("url(%s)")],
     _eu_=
      [0,
       [2,0,[12,32,[8,[0,0,0],0,0,[12,37,0]]]],
       caml_string_of_jsbytes("%s %f%%")],
     _ev_=[0,caml_string_of_jsbytes(", ")],
     _et_=[0,caml_string_of_jsbytes("Normal")],
     _es_=[0,caml_string_of_jsbytes("Small_caps")],
     _ep_=[0,caml_string_of_jsbytes("Bold")],
     _eq_=[0,caml_string_of_jsbytes("Lighter")],
     _er_=[0,caml_string_of_jsbytes("Normal")],
     _eo_=[0,caml_string_of_jsbytes("Bolder")],
     _el_=[0,caml_string_of_jsbytes("Italic")],
     _em_=[0,caml_string_of_jsbytes("Oblique")],
     _en_=[0,caml_string_of_jsbytes("Normal")],
     _ek_=[0,caml_string_of_jsbytes(",")],
     _eg_=[0,caml_string_of_jsbytes("Auto")],
     _eh_=[0,caml_string_of_jsbytes("Hidden")],
     _ei_=[0,caml_string_of_jsbytes("Scroll")],
     _ej_=[0,caml_string_of_jsbytes("Visible")],
     _ee_=[0,caml_string_of_jsbytes("Collapse")],
     _ef_=[0,caml_string_of_jsbytes("Visible")],
     _ed_=[0,caml_string_of_jsbytes("Hidden")],
     _d6_=[0,caml_string_of_jsbytes("None")],
     _d7_=[0,caml_string_of_jsbytes("Flex")],
     _d8_=[0,caml_string_of_jsbytes("Table")],
     _d9_=[0,caml_string_of_jsbytes("List_item")],
     _d__=[0,caml_string_of_jsbytes("Inline_flex")],
     _ea_=[0,caml_string_of_jsbytes("Inline_block")],
     _eb_=[0,caml_string_of_jsbytes("Inline")],
     _ec_=[0,caml_string_of_jsbytes("Inline_table")],
     _d$_=[0,caml_string_of_jsbytes("Block")],
     _d5_=[0,caml_string_of_jsbytes("Content_box")],
     _d4_=[0,caml_string_of_jsbytes("Border_box")],
     _d1_=
      [0,
       [2,0,[11,caml_string_of_jsbytes(": "),[2,0,0]]],
       caml_string_of_jsbytes("%s: %s")],
     _d2_=[0,caml_string_of_jsbytes(";")],
     _d0_=[0,caml_string_of_jsbytes("Auto")],
     _dK_=
      [0,
       [8,[0,0,0],0,[0,2],[11,caml_string_of_jsbytes("rem"),0]],
       caml_string_of_jsbytes("%.2frem")],
     _dL_=
      [0,
       [8,[0,0,0],0,[0,2],[11,caml_string_of_jsbytes("vw"),0]],
       caml_string_of_jsbytes("%.2fvw")],
     _dM_=
      [0,
       [8,[0,0,0],0,[0,2],[11,caml_string_of_jsbytes("vh"),0]],
       caml_string_of_jsbytes("%.2fvh")],
     _dN_=
      [0,
       [4,3,0,0,[11,caml_string_of_jsbytes("px"),0]],
       caml_string_of_jsbytes("%ipx")],
     _dO_=
      [0,
       [8,[0,0,0],0,[0,2],[11,caml_string_of_jsbytes("pt"),0]],
       caml_string_of_jsbytes("%.2fpt")],
     _dP_=
      [0,
       [4,3,0,0,[11,caml_string_of_jsbytes("em"),0]],
       caml_string_of_jsbytes("%iem")],
     _dQ_=
      [0,
       [8,[0,0,0],0,[0,2],[11,caml_string_of_jsbytes("ch"),0]],
       caml_string_of_jsbytes("%.2fch")],
     _dR_=[0,[8,[0,0,0],0,[0,2],[12,37,0]],caml_string_of_jsbytes("%.2f%%")],
     _dn_=[0,caml_string_of_jsbytes("Rem")],
     _do_=[0,caml_string_of_jsbytes("Vw")],
     _dp_=[0,caml_string_of_jsbytes("Vh")],
     _dq_=[0,caml_string_of_jsbytes("Px")],
     _dr_=[0,caml_string_of_jsbytes("Pt")],
     _ds_=[0,caml_string_of_jsbytes("Em")],
     _dt_=[0,caml_string_of_jsbytes("Ch")],
     _du_=[0,caml_string_of_jsbytes("Percent")],
     _c4_=[0,caml_string_of_jsbytes("Center")],
     _c5_=[0,caml_string_of_jsbytes("Left")],
     _c6_=[0,caml_string_of_jsbytes("Bottom")],
     _c7_=[0,caml_string_of_jsbytes("Middle")],
     _c8_=[0,caml_string_of_jsbytes("Top")],
     _c9_=[0,caml_string_of_jsbytes("Right")],
     _c__=[0,caml_string_of_jsbytes("Justify")],
     _c0_=
      [0,
       [11,
        caml_string_of_jsbytes("rgba("),
        [4,
         3,
         0,
         0,
         [12,
          44,
          [4,3,0,0,[12,44,[4,3,0,0,[12,44,[8,[0,0,0],0,[0,2],[12,41,0]]]]]]]]],
       caml_string_of_jsbytes("rgba(%i,%i,%i,%.2f)")],
     _c1_=
      [0,
       [11,
        caml_string_of_jsbytes("rgb("),
        [4,3,0,0,[12,44,[4,3,0,0,[12,44,[4,3,0,0,[12,41,0]]]]]]],
       caml_string_of_jsbytes("rgb(%i,%i,%i)")],
     _c2_=
      [0,
       [11,
        caml_string_of_jsbytes("hsla("),
        [4,
         3,
         0,
         0,
         [12,
          44,
          [8,
           [0,0,0],
           0,
           [0,0],
           [12,
            37,
            [12,
             44,
             [8,
              [0,0,0],
              0,
              [0,0],
              [12,37,[12,44,[8,partial$1,0,partial$0,partial]]]]]]]]]],
       caml_string_of_jsbytes("hsla(%i,%.0f%%,%.0f%%,%.2f)")],
     _c3_=
      [0,
       [11,
        caml_string_of_jsbytes("hsl("),
        [4,
         3,
         0,
         0,
         [12,
          44,
          [8,
           [0,0,0],
           0,
           [0,0],
           [12,37,[12,44,[8,[0,0,0],0,[0,0],[12,37,[12,41,0]]]]]]]]],
       caml_string_of_jsbytes("hsl(%i,%.0f%%,%.0f%%)")],
     _cZ_=
      [0,
       [11,caml_string_of_jsbytes("var("),[2,0,[12,41,0]]],
       caml_string_of_jsbytes("var(%s)")],
     _cJ_=[0,caml_string_of_jsbytes("RGBA")],
     _cK_=[0,caml_string_of_jsbytes("Name")],
     _cL_=[0,caml_string_of_jsbytes("HSLA")],
     _cM_=[0,caml_string_of_jsbytes("Hex")],
     _cI_=[0,caml_string_of_jsbytes("Var")],
     _cz_=[0,caml_string_of_jsbytes("a")],
     _cA_=[0,caml_string_of_jsbytes("l")],
     _cB_=[0,caml_string_of_jsbytes("s")],
     _cC_=[0,caml_string_of_jsbytes("h")],
     _cy_=[0,caml_string_of_jsbytes("css_gen/src/css_gen.ml"),41,6],
     _cp_=[0,caml_string_of_jsbytes("a")],
     _cq_=[0,caml_string_of_jsbytes("b")],
     _cr_=[0,caml_string_of_jsbytes("g")],
     _cs_=[0,caml_string_of_jsbytes("r")],
     _co_=[0,caml_string_of_jsbytes("css_gen/src/css_gen.ml"),29,6],
     _cf_=[0,caml_string_of_jsbytes("Initial")],
     _cg_=[0,caml_string_of_jsbytes("Inherit")],
     _eM_=[0,4202101],
     _eN_=[0,437082891],
     _eO_=[0,847852583],
     _eP_=[0,-57574468],
     _fl_=
      [1,
       caml_string_of_jsbytes
        ('\n    flex: 1.000000 1.000000 auto;overflow: scroll\n    flex: 1.000000 1.000000 auto;overflow: scroll\n    display: inline-flex;flex-direction: column;flex-wrap: nowrap;border: dashed\n    display: inline-flex;flex-direction: column;flex-wrap: nowrap;border: dashed\n    color: rgb(100,100,100)\n    color: rgb(100,100,100)\n    color: hsl(100,75%,60%)\n    color: hsl(100,75%,60%)\n    content: ";"\n    content: ";" ')],
     _fm_=[0,caml_string_of_jsbytes("")],
     _fo_=
      [0,
       caml_string_of_jsbytes
        ("to_string_css -> of_string_css_exn -> to_string_css")],
     _fu_=
      [1,
       caml_string_of_jsbytes
        (" background-image: linear-gradient(90deg, black 0.000000%, #ff0000 20.000000%, red 40.000000%, rgba(100,50,30,0.75) 100.000000%) ")],
     _fv_=[0,caml_string_of_jsbytes("")],
     _fy_=
      [1,
       caml_string_of_jsbytes
        (" background-image: radial-gradient(black 0.000000%, red 100.000000%) ")],
     _fz_=[0,caml_string_of_jsbytes("")],
     _fB_=[0,caml_string_of_jsbytes("gradients")];
    function t_of_sexp(sexp)
     {if(0 === sexp[0])
       {var
         _j3_=sexp[1],
         _j4_=caml_string_compare(_j3_,cst_atkeyword),
         switch$0=0;
        if(0 <= _j4_)
         if(0 < _j4_)
          {var _j5_=caml_string_compare(_j3_,cst_lcurly);
           if(0 <= _j5_)
            if(0 < _j5_)
             {var _j6_=caml_string_compare(_j3_,cst_rparen);
              if(0 <= _j6_)
               if(0 < _j6_)
                if(caml_string_notequal(_j3_,cst_semi_colon))
                 if(caml_string_notequal(_j3_,cst_string))
                  if(caml_string_notequal(_j3_,cst_uri))
                   {if(! caml_string_notequal(_j3_,cst_white_space))
                     switch$0 = 11}
                  else
                   switch$0 = 6;
                 else
                  switch$0 = 5;
                else
                 switch$0 = 13;
               else
                switch$0 = 18;
              else
               if(caml_string_notequal(_j3_,cst_lparen))
                if(caml_string_notequal(_j3_,cst_number))
                 if(caml_string_notequal(_j3_,cst_percentage))
                  if(caml_string_notequal(_j3_,cst_rbracket))
                   {if(! caml_string_notequal(_j3_,cst_rcurly))switch$0 = 20}
                  else
                   switch$0 = 16;
                 else
                  switch$0 = 9;
                else
                 switch$0 = 8;
               else
                switch$0 = 17}
            else
             switch$0 = 19;
           else
            {var _j7_=caml_string_compare(_j3_,cst_eof);
             if(0 <= _j7_)
              if(0 < _j7_)
               if(caml_string_notequal(_j3_,cst_error))
                if(caml_string_notequal(_j3_,cst_function))
                 if(caml_string_notequal(_j3_,cst_hash))
                  if(caml_string_notequal(_j3_,cst_ident))
                   {if(! caml_string_notequal(_j3_,cst_lbracket))switch$0 = 15}
                  else
                   switch$0 = 1;
                 else
                  switch$0 = 4;
                else
                 switch$0 = 2;
               else
                switch$0 = 23;
              else
               switch$0 = 22;
             else
              if(caml_string_notequal(_j3_,cst_colon))
               if(caml_string_notequal(_j3_,cst_comma))
                if(caml_string_notequal(_j3_,cst_comment))
                 if(caml_string_notequal(_j3_,cst_delim))
                  {if(! caml_string_notequal(_j3_,cst_dimension))switch$0 = 10}
                 else
                  switch$0 = 7;
                else
                 switch$0 = 21;
               else
                switch$0 = 14;
              else
               switch$0 = 12}}
         else
          switch$0 = 3;
        else
         {var _j8_=caml_string_compare(_j3_,cst_Lbracket);
          if(0 <= _j8_)
           if(0 < _j8_)
            {var _j9_=caml_string_compare(_j3_,cst_Rcurly);
             if(0 <= _j9_)
              if(0 < _j9_)
               if(caml_string_notequal(_j3_,cst_Rparen))
                if(caml_string_notequal(_j3_,cst_Semi_colon))
                 if(caml_string_notequal(_j3_,cst_String))
                  if(caml_string_notequal(_j3_,cst_Uri))
                   {if(! caml_string_notequal(_j3_,cst_White_space))
                     switch$0 = 11}
                  else
                   switch$0 = 6;
                 else
                  switch$0 = 5;
                else
                 switch$0 = 13;
               else
                switch$0 = 18;
              else
               switch$0 = 20;
             else
              if(caml_string_notequal(_j3_,cst_Lcurly))
               if(caml_string_notequal(_j3_,cst_Lparen))
                if(caml_string_notequal(_j3_,cst_Number))
                 if(caml_string_notequal(_j3_,cst_Percentage))
                  {if(! caml_string_notequal(_j3_,cst_Rbracket))switch$0 = 16}
                 else
                  switch$0 = 9;
                else
                 switch$0 = 8;
               else
                switch$0 = 17;
              else
               switch$0 = 19}
           else
            switch$0 = 15;
          else
           {var _j__=caml_string_compare(_j3_,cst_Dimension);
            if(0 <= _j__)
             if(0 < _j__)
              if(caml_string_notequal(_j3_,cst_Eof))
               if(caml_string_notequal(_j3_,cst_Error))
                if(caml_string_notequal(_j3_,cst_Function))
                 if(caml_string_notequal(_j3_,cst_Hash))
                  {if(! caml_string_notequal(_j3_,cst_Ident))switch$0 = 1}
                 else
                  switch$0 = 4;
                else
                 switch$0 = 2;
               else
                switch$0 = 23;
              else
               switch$0 = 22;
             else
              switch$0 = 10;
            else
             if(caml_string_notequal(_j3_,cst_Atkeyword))
              if(caml_string_notequal(_j3_,cst_Colon))
               if(caml_string_notequal(_j3_,cst_Comma))
                if(caml_string_notequal(_j3_,cst_Comment))
                 {if(! caml_string_notequal(_j3_,cst_Delim))switch$0 = 7}
                else
                 switch$0 = 21;
               else
                switch$0 = 14;
              else
               switch$0 = 12;
             else
              switch$0 = 3}}
        switch(switch$0)
         {case 1:return 0;
          case 2:return 1;
          case 3:return 2;
          case 4:return 3;
          case 5:return 4;
          case 6:return 5;
          case 7:return 6;
          case 8:return 7;
          case 9:return 8;
          case 10:return 9;
          case 11:return 10;
          case 12:return 11;
          case 13:return 12;
          case 14:return 13;
          case 15:return 14;
          case 16:return 15;
          case 17:return 16;
          case 18:return 17;
          case 19:return 18;
          case 20:return 19;
          case 21:return 20;
          case 22:return 21;
          case 23:return 22
          }}
      else
       {var _j$_=sexp[1];
        if(! _j$_)return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc,sexp);
        var _ka_=_j$_[1];
        if(0 !== _ka_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc,sexp);
        var
         _kb_=_ka_[1],
         _kc_=caml_string_compare(_kb_,cst_atkeyword$0),
         switch$1=0;
        if(0 <= _kc_)
         if(0 < _kc_)
          {var _kd_=caml_string_compare(_kb_,cst_lcurly$0);
           if(0 <= _kd_)
            if(0 < _kd_)
             {var _ke_=caml_string_compare(_kb_,cst_rparen$0);
              if(0 <= _ke_)
               if(0 < _ke_)
                if(caml_string_notequal(_kb_,cst_semi_colon$0))
                 if(caml_string_notequal(_kb_,cst_string$0))
                  if(caml_string_notequal(_kb_,cst_uri$0))
                   {if(! caml_string_notequal(_kb_,cst_white_space$0))
                     switch$1 = 11}
                  else
                   switch$1 = 6;
                 else
                  switch$1 = 5;
                else
                 switch$1 = 13;
               else
                switch$1 = 18;
              else
               if(caml_string_notequal(_kb_,cst_lparen$0))
                if(caml_string_notequal(_kb_,cst_number$0))
                 if(caml_string_notequal(_kb_,cst_percentage$0))
                  if(caml_string_notequal(_kb_,cst_rbracket$0))
                   {if(! caml_string_notequal(_kb_,cst_rcurly$0))switch$1 = 20}
                  else
                   switch$1 = 16;
                 else
                  switch$1 = 9;
                else
                 switch$1 = 8;
               else
                switch$1 = 17}
            else
             switch$1 = 19;
           else
            {var _kf_=caml_string_compare(_kb_,cst_eof$0);
             if(0 <= _kf_)
              if(0 < _kf_)
               if(caml_string_notequal(_kb_,cst_error$0))
                if(caml_string_notequal(_kb_,cst_function$0))
                 if(caml_string_notequal(_kb_,cst_hash$0))
                  if(caml_string_notequal(_kb_,cst_ident$0))
                   {if(! caml_string_notequal(_kb_,cst_lbracket$0))
                     switch$1 = 15}
                  else
                   switch$1 = 1;
                 else
                  switch$1 = 4;
                else
                 switch$1 = 2;
               else
                switch$1 = 23;
              else
               switch$1 = 22;
             else
              if(caml_string_notequal(_kb_,cst_colon$0))
               if(caml_string_notequal(_kb_,cst_comma$0))
                if(caml_string_notequal(_kb_,cst_comment$0))
                 if(caml_string_notequal(_kb_,cst_delim$0))
                  {if(! caml_string_notequal(_kb_,cst_dimension$0))
                    switch$1 = 10}
                 else
                  switch$1 = 7;
                else
                 switch$1 = 21;
               else
                switch$1 = 14;
              else
               switch$1 = 12}}
         else
          switch$1 = 3;
        else
         {var _kg_=caml_string_compare(_kb_,cst_Lbracket$0);
          if(0 <= _kg_)
           if(0 < _kg_)
            {var _kh_=caml_string_compare(_kb_,cst_Rcurly$0);
             if(0 <= _kh_)
              if(0 < _kh_)
               if(caml_string_notequal(_kb_,cst_Rparen$0))
                if(caml_string_notequal(_kb_,cst_Semi_colon$0))
                 if(caml_string_notequal(_kb_,cst_String$0))
                  if(caml_string_notequal(_kb_,cst_Uri$0))
                   {if(! caml_string_notequal(_kb_,cst_White_space$0))
                     switch$1 = 11}
                  else
                   switch$1 = 6;
                 else
                  switch$1 = 5;
                else
                 switch$1 = 13;
               else
                switch$1 = 18;
              else
               switch$1 = 20;
             else
              if(caml_string_notequal(_kb_,cst_Lcurly$0))
               if(caml_string_notequal(_kb_,cst_Lparen$0))
                if(caml_string_notequal(_kb_,cst_Number$0))
                 if(caml_string_notequal(_kb_,cst_Percentage$0))
                  {if(! caml_string_notequal(_kb_,cst_Rbracket$0))
                    switch$1 = 16}
                 else
                  switch$1 = 9;
                else
                 switch$1 = 8;
               else
                switch$1 = 17;
              else
               switch$1 = 19}
           else
            switch$1 = 15;
          else
           {var _ki_=caml_string_compare(_kb_,cst_Dimension$0);
            if(0 <= _ki_)
             if(0 < _ki_)
              if(caml_string_notequal(_kb_,cst_Eof$0))
               if(caml_string_notequal(_kb_,cst_Error$0))
                if(caml_string_notequal(_kb_,cst_Function$0))
                 if(caml_string_notequal(_kb_,cst_Hash$0))
                  {if(! caml_string_notequal(_kb_,cst_Ident$0))switch$1 = 1}
                 else
                  switch$1 = 4;
                else
                 switch$1 = 2;
               else
                switch$1 = 23;
              else
               switch$1 = 22;
             else
              switch$1 = 10;
            else
             if(caml_string_notequal(_kb_,cst_Atkeyword$0))
              if(caml_string_notequal(_kb_,cst_Colon$0))
               if(caml_string_notequal(_kb_,cst_Comma$0))
                if(caml_string_notequal(_kb_,cst_Comment$0))
                 {if(! caml_string_notequal(_kb_,cst_Delim$0))switch$1 = 7}
                else
                 switch$1 = 21;
               else
                switch$1 = 14;
              else
               switch$1 = 12;
             else
              switch$1 = 3}}
        switch(switch$1)
         {case 1:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 2:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 3:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 4:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 5:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 6:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 7:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 8:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 9:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 10:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 11:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 12:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 13:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 14:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 15:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 16:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 17:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 18:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 19:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 20:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 21:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 22:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp);
          case 23:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp)
          }}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc,sexp)}
    function sexp_of_t(param)
     {switch(param)
       {case 0:return _a_;
        case 1:return _b_;
        case 2:return _c_;
        case 3:return _d_;
        case 4:return _e_;
        case 5:return _f_;
        case 6:return _g_;
        case 7:return _h_;
        case 8:return _i_;
        case 9:return _j_;
        case 10:return _k_;
        case 11:return _l_;
        case 12:return _m_;
        case 13:return _n_;
        case 14:return _o_;
        case 15:return _p_;
        case 16:return _q_;
        case 17:return _r_;
        case 18:return _s_;
        case 19:return _t_;
        case 20:return _u_;
        case 21:return _v_;
        default:return _w_}}
    function equal(x_003,x_004)
     {var match=caml_int_compare(x_003,x_004);return 0 === match?1:0}
    function source(t){return t[1]}
    function next_pos(t){return t[2] + t[3] | 0}
    function is_next_eof(t)
     {var _j1_=caml_ml_string_length(t[1]),_j2_=next_pos(t);
      return caml_call2(Core_kernel_Int[123][1],_j2_,_j1_)}
    function next_char(t)
     {var _j0_=next_pos(t);return runtime.caml_string_get(t[1],_j0_)}
    function reset(t,param){t[3] = param;return 0}
    function consume_1(t){t[3] = t[3] + 1 | 0;return 0}
    function one_char_token(t,tok)
     {if(caml_call2(Core_kernel_Int[123][3],t[3],0))
       {consume_1(t);t[4] = tok;return 0}
      throw [0,Assert_failure,_x_]}
    var
     Error_happened=
      [248,cst_Css_gen_Css_tokenizer_Erro,runtime.caml_fresh_oo_id(0)];
    function error(t){t[4] = 22;throw Error_happened}
    function accept(t,f)
     {if(! is_next_eof(t) && caml_call1(f,next_char(t)))
       {consume_1(t);return 1}
      return 0}
    function accept_char(t,ch)
     {return accept(t,caml_call1(Core_kernel_Char[44],ch))}
    function accept_string(t,str)
     {if(caml_call2(Core_kernel_Int[123][3],caml_ml_string_length(str),0))
       return 1;
      var pos=next_pos(t),n=caml_ml_string_length(str);
      return caml_call2
               (Core_kernel_Int[123][4],
                pos + n | 0,
                caml_ml_string_length(t[1]))
              ?0
              :caml_call3(Core_kernel_String[47],t[1],pos,str)
                ?(t[3] = t[3] + n | 0,1)
                :0}
    function expect(t,f){return accept(t,f)?0:error(t)}
    function expect_char(t,ch)
     {return expect(t,caml_call1(Core_kernel_Char[44],ch))}
    function many(t,f)
     {for(;;)
       {if(! is_next_eof(t) && caml_call1(f,next_char(t)))
         {consume_1(t);continue}
        return 0}}
    function many1(t,f){expect(t,f);return many(t,f)}
    function plus_or_minus(param)
     {if(43 !== param && 45 !== param)return 0;return 1}
    function nmstart(param)
     {var _jZ_=param - 91 | 0,switch$0=0;
      if(5 < _jZ_ >>> 0)
       {if(! (57 < (_jZ_ + 26 | 0) >>> 0))switch$0 = 1}
      else
       if(4 === _jZ_)switch$0 = 1;
      return switch$0?1:0}
    function nmchar(param)
     {var switch$0=0;
      if(65 <= param)
       {var _jY_=param - 91 | 0;
        if(5 < _jY_ >>> 0)
         {if(! (32 <= _jY_))switch$0 = 1}
        else
         if(4 === _jY_)switch$0 = 1}
      else
       if(48 <= param)
        {if(! (58 <= param))switch$0 = 1}
       else
        if(45 === param)switch$0 = 1;
      return switch$0?1:0}
    function ident(t)
     {return accept_char(t,45)
              ?accept_char(t,45)
                ?many(t,nmchar)
                :(expect(t,nmstart),many(t,nmchar))
              :(expect(t,nmstart),many(t,nmchar))}
    function ident_or_function(t)
     {ident(t);return accept_char(t,40)?(t[4] = 1,0):(t[4] = 0,0)}
    function is_whitespace(param)
     {var _jX_=param - 9 | 0,switch$0=0;
      if(4 < _jX_ >>> 0)
       {if(23 === _jX_)switch$0 = 1}
      else
       if(2 !== _jX_)switch$0 = 1;
      return switch$0?1:0}
    function start_ident(prefix,t)
     {var cur=t[3],_jV_=accept_string(t,prefix);
      if(_jV_)
       if(accept_char(t,45))
        var _jW_=accept_char(t,45),b=_jW_ || accept(t,nmstart);
       else
        var b=accept(t,nmstart);
      else
       var b=_jV_;
      reset(t,cur);
      return b}
    function _I_(t)
     {var new_off=next_pos(t);
      t[2] = new_off;
      t[3] = 0;
      if(is_next_eof(t)){t[4] = 21;return 0}
      var quote=next_char(t);
      if(is_whitespace(quote)){many(t,is_whitespace);t[4] = 10;return 0}
      if(94 <= quote)
       {var switcher$0=quote - 117 | 0;
        if(! (8 < switcher$0 >>> 0))
         switch(switcher$0)
          {case 0:
            if(caml_call2(Core_kernel_Int[123][3],t[3],0))
             {var _jQ_=next_char(t);
              if(caml_call2(Core_kernel_Char[44],_jQ_,117))
               {if(accept_string(t,cst_url))
                 {var m=t[3];
                  many(t,is_whitespace);
                  var _jR_=next_char(t);
                  if(! caml_call2(Core_kernel_Char[44],_jR_,34))
                   {var _jS_=next_char(t);
                    if(! caml_call2(Core_kernel_Char[44],_jS_,39))
                     {many
                       (t,
                        function(c)
                         {var _jT_=c - 32 | 0;
                          if(! (9 < _jT_ >>> 0))
                           switch(_jT_)
                            {case 0:
                             case 9:return 0;
                             case 2:
                             case 7:
                             case 8:return error(t)
                             }
                          return caml_call1(Core_kernel_Char[18],c)?1:error(t)});
                      many(t,is_whitespace);
                      expect_char(t,41);
                      t[4] = 5;
                      return 0}}
                  reset(t,m);
                  t[4] = 1;
                  return 0}
                return ident_or_function(t)}
              throw [0,Assert_failure,_F_]}
            throw [0,Assert_failure,_G_];
           case 6:return one_char_token(t,18);
           case 8:return one_char_token(t,19)
           }}
      else
       if(34 <= quote)
        {var switcher$1=quote - 34 | 0;
         switch(switcher$1)
          {case 1:
            if(caml_call2(Core_kernel_Int[123][3],t[3],0))
             {var _jO_=next_char(t);
              if(caml_call2(Core_kernel_Char[44],_jO_,35))
               {consume_1(t);
                return accept(t,nmchar)
                        ?(many1(t,nmchar),t[4] = 3,0)
                        :(t[4] = 6,0)}
              throw [0,Assert_failure,_B_]}
            throw [0,Assert_failure,_C_];
           case 6:return one_char_token(t,16);
           case 7:return one_char_token(t,17);
           case 10:return one_char_token(t,13);
           case 13:
            if(caml_call2(Core_kernel_Int[123][3],t[3],0))
             {if(accept_string(t,cst$1))
               for(;;)
                {many(t,function(param){return 42 === param?0:1});
                 if(accept_string(t,cst$2)){t[4] = 20;return 0}
                 if(accept_char(t,42))continue;
                 return error(t)}
              expect_char(t,47);
              t[4] = 6;
              return 0}
            throw [0,Assert_failure,_H_];
           case 24:return one_char_token(t,11);
           case 25:return one_char_token(t,12);
           case 30:
            if(start_ident(cst$4,t))
             {if(caml_call2(Core_kernel_Int[123][3],t[3],0))
               {var _jP_=next_char(t);
                if(caml_call2(Core_kernel_Char[44],_jP_,64))
                 {consume_1(t);ident(t);t[4] = 2;return 0}
                throw [0,Assert_failure,_D_]}
              throw [0,Assert_failure,_E_]}
            break;
           case 57:return one_char_token(t,14);
           case 59:return one_char_token(t,15);
           case 0:
           case 5:
            if(caml_call2(Core_kernel_Int[123][3],t[3],0))
             {var _jN_=next_char(t);
              if(caml_call2(Core_kernel_Char[44],_jN_,quote))
               {consume_1(t);
                for(;;)
                 {many
                   (t,
                    function(c)
                     {var _jU_=c - 10 | 0,switch$0=0;
                      if(3 < _jU_ >>> 0)
                       {if(82 === _jU_)switch$0 = 1}
                      else
                       if(1 !== _jU_)switch$0 = 1;
                      return switch$0
                              ?0
                              :caml_call2(Core_kernel_Char[44],c,quote)?0:1});
                  if(accept_char(t,92))
                   {if(accept_char(t,quote))continue;
                    var c=next_char(t),switch$0=0;
                    if(11 <= c)
                     {if(! (14 <= c))
                       {var switcher=c - 11 | 0;
                        switch(switcher)
                         {case 0:break;
                          case 1:switch$0 = 1;break;
                          default:consume_1(t);accept_char(t,10);continue}}}
                    else
                     if(10 <= c)switch$0 = 1;
                    if(switch$0){consume_1(t);continue}
                    consume_1(t);
                    continue}
                  expect_char(t,quote);
                  t[4] = 4;
                  return 0}}
              throw [0,Assert_failure,_y_]}
            throw [0,Assert_failure,_z_];
           case 9:
           case 11:
           case 12:
           case 14:
           case 15:
           case 16:
           case 17:
           case 18:
           case 19:
           case 20:
           case 21:
           case 22:
           case 23:
            var cur=t[3];
            accept(t,plus_or_minus);
            accept_char(t,46);
            var b=accept(t,Core_kernel_Char[13]);
            reset(t,cur);
            if(b)
             {if(caml_call2(Core_kernel_Int[123][3],t[3],0))
               {accept(t,plus_or_minus);
                if(accept_char(t,46))
                 many1(t,Core_kernel_Char[13]);
                else
                 {many1(t,Core_kernel_Char[13]);
                  if(accept_char(t,46))many1(t,Core_kernel_Char[13])}
                if
                 (accept
                   (t,
                    function(param)
                     {if(69 !== param && 101 !== param)return 0;return 1}))
                 {accept(t,plus_or_minus);many1(t,Core_kernel_Char[13])}
                return accept_char(t,37)
                        ?(t[4] = 8,0)
                        :start_ident(cst$0,t)?(ident(t),t[4] = 9,0):(t[4] = 7,0)}
              throw [0,Assert_failure,_A_]}
            break
           }}
      return start_ident(cst$3,t)
              ?ident_or_function(t)
              :(consume_1(t),t[4] = 6,0)}
    function next(t)
     {if(equal(t[4],22))return 0;
      try
       {var _jL_=_I_(t);return _jL_}
      catch(_jM_)
       {_jM_ = caml_wrap_exception(_jM_);
        if(_jM_ === Error_happened)return 0;
        throw _jM_}}
    function create(s){var t=[0,s,0,0,10];next(t);return t}
    function slice(t){return [0,t[2],t[3]]}
    function current(t){return t[4]}
    function current_text(t)
     {if(equal(t[4],21))return cst$5;
      var match=slice(t),len=match[2],pos=match[1];
      return caml_call3(Core_kernel_String[2],t[1],pos,len)}
    function test(s)
     {var t=create(s),acc=0;
      for(;;)
       {var
         match=slice(t),
         len=match[2],
         start=match[1],
         acc$0=[0,[0,t[4],start,len],acc];
        if(! equal(t[4],21) && ! equal(t[4],22))
         {next(t);var acc=acc$0;continue}
        var
         _jH_=caml_call1(Core_kernel_List[34],acc$0),
         _jI_=
          function(param)
           {var
             v2=param[3],
             v1=param[2],
             v0=param[1],
             v0$0=sexp_of_t(v0),
             v1$0=caml_call1(Core_kernel[340],v1),
             v2$0=caml_call1(Core_kernel[340],v2);
            return [1,[0,v0$0,[0,v1$0,[0,v2$0,0]]]]},
         _jJ_=caml_call1(caml_call1(Core_kernel[405],_jI_),_jH_),
         _jK_=caml_call1(Core_kernel_Sexp[80],_jJ_);
        return caml_call1(Core_kernel[29],_jK_)}}
    var
     Expect_test_collector$0=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _J_(param)
     {test(cst$6);
      var
       _jG_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$0),
         380,
         7815,
         7819,
         7825];
      return caml_call1(Expect_test_collector$0[1],_jG_)}
    var
     _K_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$1),
       380,
       7815,
       7826,
       7841],
     _N_=
      [0,
       [0,
        _M_,
        _L_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$2),
         380,
         7815,
         7819,
         7825],
        _K_],
       0],
     _P_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$4),
       378,
       7780,
       7780,
       7842],
     _Q_=
      caml_call1(Expect_test_common_File[4][3],cst_35dff7058879738597a4585fdd);
    caml_call9
     (Expect_test_collector$0[3],
      _Q_,
      _P_,
      cst_css_gen_src_css_tokenizer_$3,
      _O_,
      0,
      _N_,
      0,
      Inline_test_config,
      _J_);
    var
     Expect_test_collector$1=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _R_(param)
     {test(cst$7);
      var
       _jF_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$5),
         385,
         7900,
         7904,
         7910];
      return caml_call1(Expect_test_collector$1[1],_jF_)}
    var
     _S_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$6),
       386,
       7911,
       7915,
       8035],
     _V_=
      [0,
       [0,
        _U_,
        _T_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$7),
         385,
         7900,
         7904,
         7910],
        _S_],
       0],
     _X_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$9),
       383,
       7847,
       7847,
       8036],
     _Y_=
      caml_call1
       (Expect_test_common_File[4][3],cst_35dff7058879738597a4585fdd$0);
    caml_call9
     (Expect_test_collector$1[3],
      _Y_,
      _X_,
      cst_css_gen_src_css_tokenizer_$8,
      _W_,
      0,
      _V_,
      0,
      Inline_test_config,
      _R_);
    var
     Expect_test_collector$2=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _Z_(param)
     {test(cst_foo_bar_baz);
      test(cst_foo_bar);
      test(cst_foo_bar$0);
      test(cst_foo_bar$1);
      test(cst_foo_bar$2);
      test(cst_var);
      test(cst_RGBA);
      var
       _jE_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$10),
         397,
         8202,
         8206,
         8212];
      return caml_call1(Expect_test_collector$2[1],_jE_)}
    var
     ___=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$11),
       398,
       8213,
       8217,
       8469],
     _ab_=
      [0,
       [0,
        _aa_,
        _$_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$12),
         397,
         8202,
         8206,
         8212],
        ___],
       0],
     _ad_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$14),
       389,
       8041,
       8041,
       8470],
     _ae_=
      caml_call1
       (Expect_test_common_File[4][3],cst_35dff7058879738597a4585fdd$1);
    caml_call9
     (Expect_test_collector$2[3],
      _ae_,
      _ad_,
      cst_css_gen_src_css_tokenizer_$13,
      _ac_,
      0,
      _ab_,
      0,
      Inline_test_config,
      _Z_);
    var
     Expect_test_collector$3=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _af_(param)
     {test(cst$8);
      var
       _jD_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$15),
         410,
         8519,
         8523,
         8529];
      return caml_call1(Expect_test_collector$3[1],_jD_)}
    var
     _ag_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$16),
       410,
       8519,
       8530,
       8562],
     _aj_=
      [0,
       [0,
        _ai_,
        _ah_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$17),
         410,
         8519,
         8523,
         8529],
        _ag_],
       0],
     _al_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$19),
       408,
       8475,
       8475,
       8563],
     _am_=
      caml_call1
       (Expect_test_common_File[4][3],cst_35dff7058879738597a4585fdd$2);
    caml_call9
     (Expect_test_collector$3[3],
      _am_,
      _al_,
      cst_css_gen_src_css_tokenizer_$18,
      _ak_,
      0,
      _aj_,
      0,
      Inline_test_config,
      _af_);
    var
     Expect_test_collector$4=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _an_(param)
     {test(cst_margin_0_5in);
      test(cst_line_height_3cm);
      test(cst_line_height_120);
      test(cst_grid_0_1_foo);
      test(cst_margin_0_5_in);
      test(cst_margin_02e_20);
      test(cst_margin_02e_20$0);
      test(cst_margin_02E_20);
      test(cst_margin_02E_20$0);
      test(cst_margin_02E20);
      test(cst_margin_02e20);
      var
       _jC_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$20),
         425,
         8878,
         8882,
         8888];
      return caml_call1(Expect_test_collector$4[1],_jC_)}
    var
     _ao_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$21),
       426,
       8889,
       8893,
       9725],
     _ar_=
      [0,
       [0,
        _aq_,
        _ap_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$22),
         425,
         8878,
         8882,
         8888],
        _ao_],
       0],
     _at_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$24),
       413,
       8568,
       8568,
       9726],
     _au_=
      caml_call1
       (Expect_test_common_File[4][3],cst_35dff7058879738597a4585fdd$3);
    caml_call9
     (Expect_test_collector$4[3],
      _au_,
      _at_,
      cst_css_gen_src_css_tokenizer_$23,
      _as_,
      0,
      _ar_,
      0,
      Inline_test_config,
      _an_);
    var
     Expect_test_collector$5=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _av_(param)
     {test(cst_foo_bar$3);
      test(cst$9);
      test(cst$10);
      var
       _jB_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$25),
         444,
         9810,
         9814,
         9820];
      return caml_call1(Expect_test_collector$5[1],_jB_)}
    var
     _aw_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$26),
       444,
       9810,
       9821,
       9880],
     _az_=
      [0,
       [0,
        _ay_,
        _ax_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$27),
         444,
         9810,
         9814,
         9820],
        _aw_],
       0],
     _aB_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$29),
       440,
       9731,
       9731,
       9881],
     _aC_=
      caml_call1
       (Expect_test_common_File[4][3],cst_35dff7058879738597a4585fdd$4);
    caml_call9
     (Expect_test_collector$5[3],
      _aC_,
      _aB_,
      cst_css_gen_src_css_tokenizer_$28,
      _aA_,
      0,
      _az_,
      0,
      Inline_test_config,
      _av_);
    var
     Expect_test_collector$6=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _aD_(param)
     {test(cst_Foo_Bar);
      var
       _jA_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$30),
         452,
         9950,
         9954,
         9960];
      return caml_call1(Expect_test_collector$6[1],_jA_)}
    var
     _aE_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$31),
       453,
       9961,
       9965,
       10082],
     _aH_=
      [0,
       [0,
        _aG_,
        _aF_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$32),
         452,
         9950,
         9954,
         9960],
        _aE_],
       0],
     _aJ_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$34),
       450,
       9886,
       9886,
       10083],
     _aK_=
      caml_call1
       (Expect_test_common_File[4][3],cst_35dff7058879738597a4585fdd$5);
    caml_call9
     (Expect_test_collector$6[3],
      _aK_,
      _aJ_,
      cst_css_gen_src_css_tokenizer_$33,
      _aI_,
      0,
      _aH_,
      0,
      Inline_test_config,
      _aD_);
    var
     Expect_test_collector$7=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _aL_(param)
     {test(cst_color_f00);
      test(cst_color_rgb_255_0_0);
      test(cst_color_rgb_255_0_0$0);
      var
       _jz_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$35),
         460,
         10203,
         10207,
         10213];
      return caml_call1(Expect_test_collector$7[1],_jz_)}
    var
     _aM_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$36),
       461,
       10214,
       10218,
       10581],
     _aP_=
      [0,
       [0,
        _aO_,
        _aN_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$37),
         460,
         10203,
         10207,
         10213],
        _aM_],
       0],
     _aR_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$39),
       456,
       10088,
       10088,
       10582],
     _aS_=
      caml_call1
       (Expect_test_common_File[4][3],cst_35dff7058879738597a4585fdd$6);
    caml_call9
     (Expect_test_collector$7[3],
      _aS_,
      _aR_,
      cst_css_gen_src_css_tokenizer_$38,
      _aQ_,
      0,
      _aP_,
      0,
      Inline_test_config,
      _aL_);
    var
     Expect_test_collector$8=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _aT_(param)
     {test(cst_import_foo_bar);
      var
       _jy_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$40),
         469,
         10645,
         10649,
         10655];
      return caml_call1(Expect_test_collector$8[1],_jy_)}
    var
     _aU_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$41),
       470,
       10656,
       10660,
       10739],
     _aX_=
      [0,
       [0,
        _aW_,
        _aV_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$42),
         469,
         10645,
         10649,
         10655],
        _aU_],
       0],
     _aZ_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$44),
       467,
       10587,
       10587,
       10740],
     _a0_=
      caml_call1
       (Expect_test_common_File[4][3],cst_35dff7058879738597a4585fdd$7);
    caml_call9
     (Expect_test_collector$8[3],
      _a0_,
      _aZ_,
      cst_css_gen_src_css_tokenizer_$43,
      _aY_,
      0,
      _aX_,
      0,
      Inline_test_config,
      _aT_);
    var
     Expect_test_collector$9=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _a1_(param)
     {test(cst_red);
      var
       _jx_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$45),
         475,
         10794,
         10798,
         10804];
      return caml_call1(Expect_test_collector$9[1],_jx_)}
    var
     _a2_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$46),
       475,
       10794,
       10805,
       10844],
     _a5_=
      [0,
       [0,
        _a4_,
        _a3_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$47),
         475,
         10794,
         10798,
         10804],
        _a2_],
       0],
     _a7_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$49),
       473,
       10745,
       10745,
       10845],
     _a8_=
      caml_call1
       (Expect_test_common_File[4][3],cst_35dff7058879738597a4585fdd$8);
    caml_call9
     (Expect_test_collector$9[3],
      _a8_,
      _a7_,
      cst_css_gen_src_css_tokenizer_$48,
      _a6_,
      0,
      _a5_,
      0,
      Inline_test_config,
      _a1_);
    var
     Expect_test_collector$10=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _a9_(param)
     {test(cst_url_http_wwww_google_com);
      test(cst_url_http_wwww_google_com$0);
      test(cst_url_http_wwww_google_com$1);
      test(cst_url_http_wwww_google_com$2);
      test(cst_url_http_wwww_google_com$3);
      var
       _jw_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$50),
         484,
         11089,
         11093,
         11099];
      return caml_call1(Expect_test_collector$10[1],_jw_)}
    var
     _a__=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$51),
       485,
       11100,
       11104,
       11361],
     _bb_=
      [0,
       [0,
        _ba_,
        _a$_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$52),
         484,
         11089,
         11093,
         11099],
        _a__],
       0],
     _bd_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$54),
       478,
       10850,
       10850,
       11362],
     _be_=
      caml_call1
       (Expect_test_common_File[4][3],cst_35dff7058879738597a4585fdd$9);
    caml_call9
     (Expect_test_collector$10[3],
      _be_,
      _bd_,
      cst_css_gen_src_css_tokenizer_$53,
      _bc_,
      0,
      _bb_,
      0,
      Inline_test_config,
      _a9_);
    var
     Expect_test_collector$11=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _bf_(param)
     {test(cst_test_19abf2_2);
      test(cst_010_xFFa_o123_n_u_12345_aa);
      test(cst$11);
      var
       _jv_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$55),
         497,
         11548,
         11552,
         11558];
      return caml_call1(Expect_test_collector$11[1],_jv_)}
    var
     _bg_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$56),
       498,
       11559,
       11563,
       11658],
     _bj_=
      [0,
       [0,
        _bi_,
        _bh_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$57),
         497,
         11548,
         11552,
         11558],
        _bg_],
       0],
     _bl_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_tokenizer_$59),
       493,
       11367,
       11367,
       11659],
     _bm_=
      caml_call1
       (Expect_test_common_File[4][3],cst_35dff7058879738597a4585fdd$10);
    caml_call9
     (Expect_test_collector$11[3],
      _bm_,
      _bl_,
      cst_css_gen_src_css_tokenizer_$58,
      _bk_,
      0,
      _bj_,
      0,
      Inline_test_config,
      _bf_);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_css_gen$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Css_gen_Css_tokenizer$0);
    var
     _bn_=[0,t_of_sexp,sexp_of_t,equal],
     Css_gen_Css_tokenizer=
      [0,create,_bn_,current,slice,current_text,source,next];
    caml_register_global(869,Css_gen_Css_tokenizer,"Css_gen__Css_tokenizer");
    caml_call1(Ppx_module_timer_runtime[4],cst_Css_gen_Css_parser);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_css_gen$2);
    caml_call1(Expect_test_collector[4][1],cst_css_gen_src_css_parser_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_css_gen$3,cst$12);
    function next$0(ct)
     {for(;;){next(ct);if(caml_call2(_bn_[3],ct[4],20))continue;return 0}}
    function skip_white_space(ct)
     {for(;;){if(caml_call2(_bn_[3],ct[4],10)){next$0(ct);continue}return 0}}
    function accept$0(ct,expected)
     {var got=ct[4];return caml_call2(_bn_[3],got,expected)?(next$0(ct),1):0}
    function expect$0(ct,expected)
     {var got=ct[4];
      if(caml_call2(_bn_[3],got,expected))return next$0(ct);
      var
       _js_=[0,[1,[0,_bo_,[0,caml_call1(_bn_[2],got),0]]],0],
       _jt_=[0,[1,[0,_bp_,[0,caml_call1(_bn_[2],expected),0]]],_js_],
       _ju_=
        [1,[0,caml_call1(Sexplib0_Sexp_conv[7],cst_Unexpected_token),_jt_]];
      return caml_call1(Core_kernel[238],_ju_)}
    function many$0(ct,f){for(;;){if(caml_call1(f,ct))continue;return 0}}
    function expect_any(ct)
     {if(any(ct))return 0;
      var _jr_=caml_call1(Sexplib0_Sexp_conv[7],cst_Expected_any);
      return caml_call1(Core_kernel[238],_jr_)}
    function any(ct)
     {var match=ct[4];
      switch(match)
       {case 1:
         next$0(ct);
         skip_white_space(ct);
         many$0(ct,any);
         expect$0(ct,17);
         var res=1;
         break;
        case 14:
         next$0(ct);
         skip_white_space(ct);
         expect_any(ct);
         expect$0(ct,15);
         var res=1;
         break;
        case 16:
         next$0(ct);
         skip_white_space(ct);
         expect_any(ct);
         expect$0(ct,17);
         var res=1;
         break;
        case 18:var res=0;break;
        case 15:
        case 17:
        case 19:var res=0;break;
        case 2:
        case 11:
        case 12:var res=0;break;
        case 10:
        case 20:
        case 21:
        case 22:var res=0;break;
        default:next$0(ct);var res=1}
      if(res)skip_white_space(ct);
      return res}
    function f(ct)
     {var _jm_=any(ct);
      if(_jm_)
       var _jn_=_jm_;
      else
       {var
         _jo_=
          accept$0(ct,18)
           ?(skip_white_space(ct),
             many$0
              (ct,
               function(ct)
                {var _jp_=f(ct);
                 if(_jp_)
                  var _jq_=_jp_;
                 else
                  {if(accept$0(ct,12)){skip_white_space(ct);return 1}
                   var _jq_=0}
                 return _jq_}),
             expect$0(ct,19),
             skip_white_space(ct),
             1)
           :0;
        if(_jo_)
         var _jn_=_jo_;
        else
         {if(accept$0(ct,2)){skip_white_space(ct);return 1}var _jn_=0}}
      return _jn_}
    function expect_value(ct)
     {var _jk_=f(ct)?(many$0(ct,f),1):0;
      if(_jk_)return 0;
      var _jl_=caml_call1(Sexplib0_Sexp_conv[7],cst_Expected_value);
      return caml_call1(Core_kernel[238],_jl_)}
    function declaration(ct)
     {var match=slice(ct),ident_len=match[2],ident_start=match[1];
      if(accept$0(ct,0))
       {skip_white_space(ct);
        expect$0(ct,11);
        skip_white_space(ct);
        var value_start=slice(ct)[1];
        expect_value(ct);
        var
         next_token_start=slice(ct)[1],
         source=ct[1],
         _ji_=
          caml_call3
           (Core_kernel_String[2],
            source,
            value_start,
            next_token_start - value_start | 0),
         _jj_=caml_call2(Core_kernel_String[62],0,_ji_);
        return [0,
                [0,
                 caml_call3
                  (Core_kernel_String[2],source,ident_start,ident_len),
                 _jj_]]}
      return 0}
    function expect_declaration(ct)
     {var match=declaration(ct);
      if(match)
       {var match$0=match[1],value=match$0[2],field=match$0[1];
        return [0,field,value]}
      var _jh_=caml_call1(Sexplib0_Sexp_conv[7],cst_Expected_declaration);
      return caml_call1(Core_kernel[238],_jh_)}
    function expect_declaration_list(ct)
     {var res=[0,0];
      function add(kv)
       {if(kv)
         {var match=kv[1],v=match[2],k=match[1];
          res[1] = [0,[0,k,v],res[1]];
          return 0}
        return 0}
      skip_white_space(ct);
      add(declaration(ct));
      many$0
       (ct,
        function(ct)
         {return accept$0(ct,12)
                  ?(skip_white_space(ct),add(declaration(ct)),1)
                  :0});
      return caml_call1(Core_kernel_List[34],res[1])}
    function parse(parser_f,s)
     {var ct=create(s);
      for(;;)
       {if(caml_call2(_bn_[3],ct[4],20)){next(ct);continue}
        var
         _jg_=
          function(param)
           {var res=caml_call1(parser_f,ct);expect$0(ct,21);return res};
        return caml_call2(Core_kernel_Or_error[32],0,_jg_)}}
    function validate_value(_jf_){return parse(expect_value,_jf_)}
    function parse_declaration_list(s)
     {return parse(expect_declaration_list,s)}
    function test_parser(p,sexp_of_arg,s)
     {var
       r=parse(p,s),
       _jd_=
        [0,
         [2,
          0,
          [11,
           cst$13,
           [24,
            _br_,
            function(param,custom_printf_001)
             {var
               _je_=
                caml_call2
                 (Core_kernel_Or_error[13],sexp_of_arg,custom_printf_001);
              return caml_call2(Sexplib0_Sexp[14],0,_je_)},
            _bq_]]],
         cst_s_sexp_arg_Or_error_t];
      return caml_call3(Core_kernel[235],_jd_,s,r)}
    var
     Expect_test_collector$12=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _bs_(param)
     {var ct=create(s);
      for(;;)
       {if(caml_call2(_bn_[3],ct[4],21))
         {var
           _i$_=
            [0,
             caml_call1
              (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$0),
             206,
             4983,
             4987,
             4993];
          caml_call1(Expect_test_collector$12[1],_i$_);
          var
           _ja_=validate_value(s),
           _jb_=
            [1,
             [0,
              _bt_,
              [0,caml_call2(Core_kernel_Or_error[13],Core_kernel[502],_ja_),0]]];
          caml_call2(Core_kernel[233],0,_jb_);
          var
           _jc_=
            [0,
             caml_call1
              (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$1),
             243,
             5513,
             5517,
             5523];
          return caml_call1(Expect_test_collector$12[1],_jc_)}
        var _i__=caml_call1(_bn_[2],ct[4]);
        caml_call2(Core_kernel[233],0,_i__);
        next(ct);
        continue}}
    var
     _bu_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$2),
       207,
       4994,
       4998,
       5447],
     _bx_=
      [0,
       [0,
        _bw_,
        _bv_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$3),
         206,
         4983,
         4987,
         4993],
        _bu_],
       0],
     _by_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$4),
       243,
       5513,
       5524,
       5566],
     _bB_=
      [0,
       [0,
        _bA_,
        _bz_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$5),
         243,
         5513,
         5517,
         5523],
        _by_],
       _bx_],
     _bD_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$7),
       200,
       4809,
       4809,
       5567],
     _bE_=
      caml_call1(Expect_test_common_File[4][3],cst_74a84add0e27aefc1e1423192c);
    caml_call9
     (Expect_test_collector$12[3],
      _bE_,
      _bD_,
      cst_css_gen_src_css_parser_ml$6,
      _bC_,
      0,
      _bB_,
      0,
      Inline_test_config,
      _bs_);
    var
     Expect_test_collector$13=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _bF_(param)
     {var _i7_=Core_kernel_Unit[15];
      function test(_i9_){return test_parser(expect_value,_i7_,_i9_)}
      test(cst_x);
      test(cst_3);
      test(cst_3in);
      test(cst_3$0);
      test(cst_fff);
      test(cst_1_0_auto);
      test(cst_Hello_World);
      test(cst_rgb_0_0_0);
      var
       _i8_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$8),
         257,
         5785,
         5789,
         5795];
      return caml_call1(Expect_test_collector$13[1],_i8_)}
    var
     _bG_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$9),
       258,
       5796,
       5800,
       5999],
     _bJ_=
      [0,
       [0,
        _bI_,
        _bH_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$10),
         257,
         5785,
         5789,
         5795],
        _bG_],
       0],
     _bL_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$12),
       247,
       5572,
       5572,
       6000],
     _bM_=
      caml_call1
       (Expect_test_common_File[4][3],cst_74a84add0e27aefc1e1423192c$0);
    caml_call9
     (Expect_test_collector$13[3],
      _bM_,
      _bL_,
      cst_css_gen_src_css_parser_ml$11,
      _bK_,
      0,
      _bJ_,
      0,
      Inline_test_config,
      _bF_);
    var
     Expect_test_collector$14=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _bN_(param)
     {function _i4_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=caml_call1(Core_kernel[455],v0),
         v1$0=caml_call1(Core_kernel[455],v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      function test(_i6_){return test_parser(expect_declaration,_i4_,_i6_)}
      test(cst_flex_1_0_auto);
      test(cst_content_Hello_World);
      test(cst_content_foo);
      test(cst_content_bar);
      var
       _i5_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$13),
         277,
         6327,
         6331,
         6337];
      return caml_call1(Expect_test_collector$14[1],_i5_)}
    var
     _bO_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$14),
       278,
       6338,
       6342,
       6587],
     _bR_=
      [0,
       [0,
        _bQ_,
        _bP_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$15),
         277,
         6327,
         6331,
         6337],
        _bO_],
       0],
     _bT_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$17),
       269,
       6005,
       6005,
       6588],
     _bU_=
      caml_call1
       (Expect_test_common_File[4][3],cst_74a84add0e27aefc1e1423192c$1);
    caml_call9
     (Expect_test_collector$14[3],
      _bU_,
      _bT_,
      cst_css_gen_src_css_parser_ml$16,
      _bS_,
      0,
      _bR_,
      0,
      Inline_test_config,
      _bN_);
    var
     Expect_test_collector$15=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _bV_(param)
     {test_parser
       (expect_declaration,
        function(param)
         {var
           v1=param[2],
           v0=param[1],
           v0$0=caml_call1(Core_kernel[455],v0),
           v1$0=caml_call1(Core_kernel[455],v1);
          return [1,[0,v0$0,[0,v1$0,0]]]},
        cst_content);
      var _i2_=caml_call1(Core_kernel_Sexp[81],_bW_);
      caml_call1(Core_kernel[29],_i2_);
      var
       _i3_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$18),
         290,
         6865,
         6869,
         6875];
      return caml_call1(Expect_test_collector$15[1],_i3_)}
    var
     _bX_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$19),
       291,
       6876,
       6880,
       7300],
     _b0_=
      [0,
       [0,
        _bZ_,
        _bY_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$20),
         290,
         6865,
         6869,
         6875],
        _bX_],
       0],
     _b2_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$22),
       285,
       6593,
       6593,
       7301],
     _b3_=
      caml_call1
       (Expect_test_common_File[4][3],cst_74a84add0e27aefc1e1423192c$2);
    caml_call9
     (Expect_test_collector$15[3],
      _b3_,
      _b2_,
      cst_css_gen_src_css_parser_ml$21,
      _b1_,
      0,
      _b0_,
      0,
      Inline_test_config,
      _bV_);
    var
     Expect_test_collector$16=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _b4_(param)
     {function _iY_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=caml_call1(Core_kernel[455],v0),
         v1$0=caml_call1(Core_kernel[455],v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      var _iZ_=caml_call1(Core_kernel[405],_iY_);
      function test(_i1_)
       {return test_parser(expect_declaration_list,_iZ_,_i1_)}
      test(cst_flex_1_0_auto$0);
      test(cst_flex_1_0_auto$1);
      test(cst_background_5d9ab2_url_img_);
      test(cst$14);
      test(cst_flex_1_0_auto_other_sa);
      var
       _i0_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$23),
         305,
         7627,
         7631,
         7637];
      return caml_call1(Expect_test_collector$16[1],_i0_)}
    var
     _b5_=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$24),
       306,
       7638,
       7642,
       8028],
     _b8_=
      [0,
       [0,
        _b7_,
        _b6_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$25),
         305,
         7627,
         7631,
         7637],
        _b5_],
       0],
     _b__=
      [0,
       caml_call1
        (Expect_test_common_File[1][6],cst_css_gen_src_css_parser_ml$27),
       298,
       7306,
       7306,
       8029],
     _b$_=
      caml_call1
       (Expect_test_common_File[4][3],cst_74a84add0e27aefc1e1423192c$3);
    caml_call9
     (Expect_test_collector$16[3],
      _b$_,
      _b__,
      cst_css_gen_src_css_parser_ml$26,
      _b9_,
      0,
      _b8_,
      0,
      Inline_test_config,
      _b4_);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_css_gen$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Css_gen_Css_parser$0);
    var Css_gen_Css_parser=[0,validate_value,parse_declaration_list];
    caml_register_global(874,Css_gen_Css_parser,"Css_gen__Css_parser");
    caml_call1(Ppx_module_timer_runtime[4],cst_Css_gen);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_css_gen$5);
    caml_call1(Expect_test_collector[4][1],cst_css_gen_src_css_gen_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_css_gen$6,cst$15);
    function t_of_sexp$0(t)
     {function _iV_(sexp)
       {if(1 === sexp[0])
         {var _iW_=sexp[1];
          if(_iW_)
           {var _iX_=_iW_[2];
            if(_iX_ && ! _iX_[2])
             {var
               v1=_iX_[1],
               v0=_iW_[1],
               v0$0=caml_call1(Core_kernel_Stable[277],v0),
               v1$0=caml_call1(Core_kernel_Stable[277],v1);
              return [0,v0$0,v1$0]}}}
        return caml_call3(Sexplib0_Sexp_conv_error[2],tp_loc$0,2,sexp)}
      return caml_call2(Core_kernel_Stable[265],_iV_,t)}
    function sexp_of_t$0(v)
     {function _iU_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=caml_call1(Core_kernel_Stable[276],v0),
         v1$0=caml_call1(Core_kernel_Stable[276],v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      return caml_call2(Core_kernel_Stable[264],_iU_,v)}
    function compare(a_001,b_002)
     {function _iT_(a_003,b_004)
       {var
         t_006=a_003[2],
         t_005=a_003[1],
         t_008=b_004[2],
         t_007=b_004[1],
         n=caml_call2(Core_kernel_Stable[368],t_005,t_007);
        return 0 === n?caml_call2(Core_kernel_Stable[368],t_006,t_008):n}
      return caml_call3(Core_kernel_Stable[371],_iT_,a_001,b_002)}
    var
     _ca_=
      caml_call1
       (Bin_prot_Shape[7],
        [0,Core_kernel_Stable[59],[0,Core_kernel_Stable[59],0]]),
     _cb_=caml_call1(Core_kernel_Stable[150],_ca_),
     _cc_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t),0,_cb_],0],
     _cd_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_7_4),
     group=caml_call2(Bin_prot_Shape[6],_cd_,_cc_),
     _ce_=caml_call1(Bin_prot_Shape[2][1],cst_t$0),
     bin_shape_t=caml_call1(caml_call2(Bin_prot_Shape[14],group,_ce_),0);
    function bin_size_t(v)
     {function _iQ_(param)
       {var
         v2=param[2],
         v1=param[1],
         _iR_=caml_call1(Core_kernel_Stable[3],v1),
         size=caml_call2(Bin_prot_Common[23],0,_iR_),
         _iS_=caml_call1(Core_kernel_Stable[3],v2);
        return caml_call2(Bin_prot_Common[23],size,_iS_)}
      return caml_call2(Core_kernel_Stable[18],_iQ_,v)}
    function bin_write_t(buf,pos,v)
     {function _iP_(buf,pos,param)
       {var
         v2=param[2],
         v1=param[1],
         pos$0=caml_call3(Core_kernel_Stable[61],buf,pos,v1);
        return caml_call3(Core_kernel_Stable[61],buf,pos$0,v2)}
      return caml_call3(caml_call1(Core_kernel_Stable[152],_iP_),buf,pos,v)}
    var bin_writer_t=[0,bin_size_t,bin_write_t];
    function bin_read_t(buf,pos_ref,vint)
     {function _iO_(buf,pos_ref)
       {var
         v1=caml_call2(Core_kernel_Stable[63],buf,pos_ref),
         v2=caml_call2(Core_kernel_Stable[63],buf,pos_ref);
        return [0,v1,v2]}
      return caml_call3
              (caml_call1(Core_kernel_Stable[155],_iO_),buf,pos_ref,vint)}
    function bin_read_t$0(buf,pos_ref)
     {function _iN_(buf,pos_ref)
       {var
         v1=caml_call2(Core_kernel_Stable[63],buf,pos_ref),
         v2=caml_call2(Core_kernel_Stable[63],buf,pos_ref);
        return [0,v1,v2]}
      return caml_call2(caml_call1(Core_kernel_Stable[154],_iN_),buf,pos_ref)}
    var
     bin_reader_t=[0,bin_read_t$0,bin_read_t],
     bin_t=[0,bin_shape_t,bin_writer_t,bin_reader_t];
    function sanitize_sexp(s)
     {var
       _iL_=caml_call1(Core_kernel_Sexp[81],s),
       _iM_=caml_call1(Core_kernel_String[30],_iL_);
      return caml_call3(Core_kernel_String[45],_iM_,cst$17,cst$16)}
    function css_global_values_of_sexp(sexp)
     {if(0 === sexp[0])
       {var atom=sexp[1];
        return caml_string_notequal(atom,cst_Inherit)
                ?caml_string_notequal(atom,cst_Initial)
                  ?caml_call1(Sexplib0_Sexp_conv_error[19],0)
                  :418396260
                :-72987685}
      var _iJ_=sexp[1];
      if(_iJ_)
       {var _iK_=_iJ_[1];
        if(0 === _iK_[0])
         {var atom$0=_iK_[1];
          return caml_string_notequal(atom$0,cst_Inherit$0)
                  ?caml_string_notequal(atom$0,cst_Initial$0)
                    ?caml_call1(Sexplib0_Sexp_conv_error[19],0)
                    :caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc$1,sexp)
                  :caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc$1,sexp)}
        return caml_call2(Sexplib0_Sexp_conv_error[24],tp_loc$1,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[25],tp_loc$1,sexp)}
    function css_global_values_of_sexp$0(sexp)
     {try
       {var _iH_=css_global_values_of_sexp(sexp);return _iH_}
      catch(_iI_)
       {_iI_ = caml_wrap_exception(_iI_);
        if(_iI_ === Sexplib0_Sexp_conv_error[18])
         return caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc$2,sexp);
        throw _iI_}}
    function sexp_of_css_global_values(param)
     {return 418396260 <= param?_cf_:_cg_}
    var
     _ch_=[0,caml_call2(Bin_prot_Shape[10],cst_Initial$1,0),0],
     _ci_=[0,caml_call2(Bin_prot_Shape[10],cst_Inherit$1,0),_ch_],
     _cj_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_21_),
     _ck_=caml_call2(Bin_prot_Shape[12],_cj_,_ci_),
     _cl_=
      [0,[0,caml_call1(Bin_prot_Shape[2][1],cst_css_global_values),0,_ck_],0],
     _cm_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_20_),
     group$0=caml_call2(Bin_prot_Shape[6],_cm_,_cl_),
     _cn_=caml_call1(Bin_prot_Shape[2][1],cst_css_global_values$0),
     bin_shape_css_global_values=
      caml_call1(caml_call2(Bin_prot_Shape[14],group$0,_cn_),0);
    function compare_css_global_values(a_009,b_010)
     {if(caml_call2(Ppx_compare_lib[1],a_009,b_010))return 0;
      if(418396260 <= a_009)
       {if(418396260 === b_010)return 0}
      else
       if(-72987685 === b_010)return 0;
      return caml_int_compare(a_009,b_010)}
    function t_of_sexp$1(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc$3,sexp);
      var
       field_sexps=sexp[1],
       r_field=[0,0],
       g_field=[0,0],
       b_field=[0,0],
       a_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _ix_=param[1];
          if(1 === _ix_[0])
           {var _iy_=_ix_[1];
            if(_iy_)
             {var _iz_=_iy_[1];
              if(0 === _iz_[0])
               {var _iA_=_iy_[2],_iB_=_iz_[1],switch$0=0;
                if(! _iA_ || ! _iA_[2])switch$0 = 1;
                if(switch$0)
                 {var
                   tail=param[2],
                   field_sexp$4=
                    function(_iG_)
                     {function field_sexp(param)
                       {if(_iG_)
                         {if(_iG_[2])throw [0,Assert_failure,_co_];
                          var x=_iG_[1];
                          return x}
                        return caml_call2
                                (Sexplib0_Sexp_conv_error[10],tp_loc$3,sexp)}
                      return field_sexp},
                   field_sexp=field_sexp$4(_iA_);
                  if(caml_string_notequal(_iB_,cst_a))
                   if(caml_string_notequal(_iB_,cst_b))
                    if(caml_string_notequal(_iB_,cst_g))
                     if(caml_string_notequal(_iB_,cst_r))
                      {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_iB_,extra[1]]}
                     else
                      if(r_field[1])
                       duplicates[1] = [0,_iB_,duplicates[1]];
                      else
                       {var
                         field_sexp$0=field_sexp(0),
                         fvalue=caml_call1(Core_kernel[341],field_sexp$0);
                        r_field[1] = [0,fvalue]}
                    else
                     if(g_field[1])
                      duplicates[1] = [0,_iB_,duplicates[1]];
                     else
                      {var
                        field_sexp$1=field_sexp(0),
                        fvalue$0=caml_call1(Core_kernel[341],field_sexp$1);
                       g_field[1] = [0,fvalue$0]}
                   else
                    if(b_field[1])
                     duplicates[1] = [0,_iB_,duplicates[1]];
                    else
                     {var
                       field_sexp$2=field_sexp(0),
                       fvalue$1=caml_call1(Core_kernel[341],field_sexp$2);
                      b_field[1] = [0,fvalue$1]}
                  else
                   if(a_field[1])
                    duplicates[1] = [0,_iB_,duplicates[1]];
                   else
                    {var
                      field_sexp$3=field_sexp(0),
                      fvalue$2=
                       caml_call2
                        (Core_kernel[439],Core_kernel_Percent[5],field_sexp$3);
                     a_field[1] = [0,fvalue$2]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc$3,_ix_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc$3,duplicates[1],sexp);
        if(extra[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[13],tp_loc$3,extra[1],sexp);
        var _iC_=r_field[1],_iD_=g_field[1],_iE_=b_field[1],_iF_=a_field[1];
        if(_iC_ && _iD_ && _iE_ && _iF_)
         {var a_value=_iF_[1],b_value=_iE_[1],g_value=_iD_[1],r_value=_iC_[1];
          return [0,r_value,g_value,b_value,a_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[15],
                 tp_loc$3,
                 sexp,
                 [0,
                  [0,0 === r_field[1]?1:0,cst_r$0],
                  [0,
                   [0,0 === g_field[1]?1:0,cst_g$0],
                   [0,
                    [0,0 === b_field[1]?1:0,cst_b$0],
                    [0,[0,0 === a_field[1]?1:0,cst_a$0],0]]]])}}
    function sexp_of_t$1(param)
     {var
       v_a=param[4],
       v_b=param[3],
       v_g=param[2],
       v_r=param[1],
       arg=caml_call2(Core_kernel[438],Core_kernel_Percent[6],v_a),
       bnds=[0,[1,[0,_cp_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[340],v_b),
       bnds$0=[0,[1,[0,_cq_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Core_kernel[340],v_g),
       bnds$1=[0,[1,[0,_cr_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Core_kernel[340],v_r),
       bnds$2=[0,[1,[0,_cs_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    var
     _ct_=
      [0,[0,cst_a$1,caml_call1(Core_kernel[427],Core_kernel_Percent[11])],0],
     _cu_=
      caml_call1
       (Bin_prot_Shape[8],
        [0,
         [0,cst_r$1,Core_kernel[328]],
         [0,
          [0,cst_g$1,Core_kernel[328]],
          [0,[0,cst_b$1,Core_kernel[328]],_ct_]]]),
     _cv_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$1),0,_cu_],0],
     _cw_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_29_),
     group$1=caml_call2(Bin_prot_Shape[6],_cw_,_cv_),
     _cx_=caml_call1(Bin_prot_Shape[2][1],cst_t$2),
     bin_shape_t$0=caml_call1(caml_call2(Bin_prot_Shape[14],group$1,_cx_),0);
    function bin_size_t$0(param)
     {var
       v4=param[4],
       v3=param[3],
       v2=param[2],
       v1=param[1],
       _it_=caml_call1(Core_kernel[329],v1),
       size=caml_call2(Bin_prot_Common[23],0,_it_),
       _iu_=caml_call1(Core_kernel[329],v2),
       size$0=caml_call2(Bin_prot_Common[23],size,_iu_),
       _iv_=caml_call1(Core_kernel[329],v3),
       size$1=caml_call2(Bin_prot_Common[23],size$0,_iv_),
       _iw_=caml_call2(Core_kernel[428],Core_kernel_Percent[7],v4);
      return caml_call2(Bin_prot_Common[23],size$1,_iw_)}
    function bin_write_t$0(buf,pos,param)
     {var
       v4=param[4],
       v3=param[3],
       v2=param[2],
       v1=param[1],
       pos$0=caml_call3(Core_kernel[330],buf,pos,v1),
       pos$1=caml_call3(Core_kernel[330],buf,pos$0,v2),
       pos$2=caml_call3(Core_kernel[330],buf,pos$1,v3);
      return caml_call3
              (caml_call1(Core_kernel[429],Core_kernel_Percent[8]),
               buf,
               pos$2,
               v4)}
    var bin_writer_t$0=[0,bin_size_t$0,bin_write_t$0];
    function bin_read_t$1(buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],cst_css_gen_src_css_gen_ml_Col,pos_ref[1])}
    function bin_read_t$2(buf,pos_ref)
     {var
       v_r=caml_call2(Core_kernel[332],buf,pos_ref),
       v_g=caml_call2(Core_kernel[332],buf,pos_ref),
       v_b=caml_call2(Core_kernel[332],buf,pos_ref),
       v_a=
        caml_call2
         (caml_call1(Core_kernel[431],Core_kernel_Percent[9]),buf,pos_ref);
      return [0,v_r,v_g,v_b,v_a]}
    var
     bin_reader_t$0=[0,bin_read_t$2,bin_read_t$1],
     bin_t$0=[0,bin_shape_t$0,bin_writer_t$0,bin_reader_t$0];
    function compare$0(a_011,b_012)
     {if(caml_call2(Ppx_compare_lib[1],a_011,b_012))return 0;
      var n=caml_call2(Core_kernel[336],a_011[1],b_012[1]);
      if(0 === n)
       {var n$0=caml_call2(Core_kernel[336],a_011[2],b_012[2]);
        if(0 === n$0)
         {var n$1=caml_call2(Core_kernel[336],a_011[3],b_012[3]);
          if(0 === n$1)
           {var
             _iq_=b_012[4],
             _ir_=a_011[4],
             _is_=
              function(a_013,b_014)
               {return caml_call2(Core_kernel_Percent[22],a_013,b_014)};
            return caml_call3(Core_kernel[435],_is_,_ir_,_iq_)}
          return n$1}
        return n$0}
      return n}
    function create$0(r,g,b,a,param){return [0,r,g,b,a]}
    function t_of_sexp$2(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc$4,sexp);
      var
       field_sexps=sexp[1],
       h_field=[0,0],
       s_field=[0,0],
       l_field=[0,0],
       a_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _ig_=param[1];
          if(1 === _ig_[0])
           {var _ih_=_ig_[1];
            if(_ih_)
             {var _ii_=_ih_[1];
              if(0 === _ii_[0])
               {var _ij_=_ih_[2],_ik_=_ii_[1],switch$0=0;
                if(! _ij_ || ! _ij_[2])switch$0 = 1;
                if(switch$0)
                 {var
                   tail=param[2],
                   field_sexp$4=
                    function(_ip_)
                     {function field_sexp(param)
                       {if(_ip_)
                         {if(_ip_[2])throw [0,Assert_failure,_cy_];
                          var x=_ip_[1];
                          return x}
                        return caml_call2
                                (Sexplib0_Sexp_conv_error[10],tp_loc$4,sexp)}
                      return field_sexp},
                   field_sexp=field_sexp$4(_ij_);
                  if(caml_string_notequal(_ik_,cst_a$2))
                   if(caml_string_notequal(_ik_,cst_h))
                    if(caml_string_notequal(_ik_,cst_l))
                     if(caml_string_notequal(_ik_,cst_s))
                      {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_ik_,extra[1]]}
                     else
                      if(s_field[1])
                       duplicates[1] = [0,_ik_,duplicates[1]];
                      else
                       {var
                         field_sexp$0=field_sexp(0),
                         fvalue=caml_call1(Core_kernel_Percent[5],field_sexp$0);
                        s_field[1] = [0,fvalue]}
                    else
                     if(l_field[1])
                      duplicates[1] = [0,_ik_,duplicates[1]];
                     else
                      {var
                        field_sexp$1=field_sexp(0),
                        fvalue$0=caml_call1(Core_kernel_Percent[5],field_sexp$1);
                       l_field[1] = [0,fvalue$0]}
                   else
                    if(h_field[1])
                     duplicates[1] = [0,_ik_,duplicates[1]];
                    else
                     {var
                       field_sexp$2=field_sexp(0),
                       fvalue$1=caml_call1(Core_kernel[341],field_sexp$2);
                      h_field[1] = [0,fvalue$1]}
                  else
                   if(a_field[1])
                    duplicates[1] = [0,_ik_,duplicates[1]];
                   else
                    {var
                      field_sexp$3=field_sexp(0),
                      fvalue$2=
                       caml_call2
                        (Core_kernel[439],Core_kernel_Percent[5],field_sexp$3);
                     a_field[1] = [0,fvalue$2]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc$4,_ig_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc$4,duplicates[1],sexp);
        if(extra[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[13],tp_loc$4,extra[1],sexp);
        var _il_=h_field[1],_im_=s_field[1],_in_=l_field[1],_io_=a_field[1];
        if(_il_ && _im_ && _in_ && _io_)
         {var a_value=_io_[1],l_value=_in_[1],s_value=_im_[1],h_value=_il_[1];
          return [0,h_value,s_value,l_value,a_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[15],
                 tp_loc$4,
                 sexp,
                 [0,
                  [0,0 === h_field[1]?1:0,cst_h$0],
                  [0,
                   [0,0 === s_field[1]?1:0,cst_s$0],
                   [0,
                    [0,0 === l_field[1]?1:0,cst_l$0],
                    [0,[0,0 === a_field[1]?1:0,cst_a$3],0]]]])}}
    function sexp_of_t$2(param)
     {var
       v_a=param[4],
       v_l=param[3],
       v_s=param[2],
       v_h=param[1],
       arg=caml_call2(Core_kernel[438],Core_kernel_Percent[6],v_a),
       bnds=[0,[1,[0,_cz_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel_Percent[6],v_l),
       bnds$0=[0,[1,[0,_cA_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Core_kernel_Percent[6],v_s),
       bnds$1=[0,[1,[0,_cB_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Core_kernel[340],v_h),
       bnds$2=[0,[1,[0,_cC_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    var
     _cD_=
      [0,[0,cst_a$4,caml_call1(Core_kernel[427],Core_kernel_Percent[11])],0],
     _cE_=
      caml_call1
       (Bin_prot_Shape[8],
        [0,
         [0,cst_h$1,Core_kernel[328]],
         [0,
          [0,cst_s$1,Core_kernel_Percent[11]],
          [0,[0,cst_l$1,Core_kernel_Percent[11]],_cD_]]]),
     _cF_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$3),0,_cE_],0],
     _cG_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_41_),
     group$2=caml_call2(Bin_prot_Shape[6],_cG_,_cF_),
     _cH_=caml_call1(Bin_prot_Shape[2][1],cst_t$4),
     bin_shape_t$1=caml_call1(caml_call2(Bin_prot_Shape[14],group$2,_cH_),0);
    function bin_size_t$1(param)
     {var
       v4=param[4],
       v3=param[3],
       v2=param[2],
       v1=param[1],
       _ic_=caml_call1(Core_kernel[329],v1),
       size=caml_call2(Bin_prot_Common[23],0,_ic_),
       _id_=caml_call1(Core_kernel_Percent[7],v2),
       size$0=caml_call2(Bin_prot_Common[23],size,_id_),
       _ie_=caml_call1(Core_kernel_Percent[7],v3),
       size$1=caml_call2(Bin_prot_Common[23],size$0,_ie_),
       _if_=caml_call2(Core_kernel[428],Core_kernel_Percent[7],v4);
      return caml_call2(Bin_prot_Common[23],size$1,_if_)}
    function bin_write_t$1(buf,pos,param)
     {var
       v4=param[4],
       v3=param[3],
       v2=param[2],
       v1=param[1],
       pos$0=caml_call3(Core_kernel[330],buf,pos,v1),
       pos$1=caml_call3(Core_kernel_Percent[8],buf,pos$0,v2),
       pos$2=caml_call3(Core_kernel_Percent[8],buf,pos$1,v3);
      return caml_call3
              (caml_call1(Core_kernel[429],Core_kernel_Percent[8]),
               buf,
               pos$2,
               v4)}
    var bin_writer_t$1=[0,bin_size_t$1,bin_write_t$1];
    function bin_read_t$3(buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_css_gen_src_css_gen_ml_Col$0,
               pos_ref[1])}
    function bin_read_t$4(buf,pos_ref)
     {var
       v_h=caml_call2(Core_kernel[332],buf,pos_ref),
       v_s=caml_call2(Core_kernel_Percent[9],buf,pos_ref),
       v_l=caml_call2(Core_kernel_Percent[9],buf,pos_ref),
       v_a=
        caml_call2
         (caml_call1(Core_kernel[431],Core_kernel_Percent[9]),buf,pos_ref);
      return [0,v_h,v_s,v_l,v_a]}
    var
     bin_reader_t$1=[0,bin_read_t$4,bin_read_t$3],
     bin_t$1=[0,bin_shape_t$1,bin_writer_t$1,bin_reader_t$1];
    function compare$1(a_015,b_016)
     {if(caml_call2(Ppx_compare_lib[1],a_015,b_016))return 0;
      var n=caml_call2(Core_kernel[336],a_015[1],b_016[1]);
      if(0 === n)
       {var n$0=caml_call2(Core_kernel_Percent[22],a_015[2],b_016[2]);
        if(0 === n$0)
         {var n$1=caml_call2(Core_kernel_Percent[22],a_015[3],b_016[3]);
          if(0 === n$1)
           {var
             _h$_=b_016[4],
             _ia_=a_015[4],
             _ib_=
              function(a_017,b_018)
               {return caml_call2(Core_kernel_Percent[22],a_017,b_018)};
            return caml_call3(Core_kernel[435],_ib_,_ia_,_h$_)}
          return n$1}
        return n$0}
      return n}
    function create$1(h,s,l,a,param){return [0,h,s,l,a]}
    function t_of_sexp$3(sexp)
     {if(0 === sexp[0])
       {var atom=sexp[1];
        try
         {var _h5_=css_global_values_of_sexp(sexp);return _h5_}
        catch(_h__)
         {_h__ = caml_wrap_exception(_h__);
          if(_h__ === Sexplib0_Sexp_conv_error[18])
           return caml_string_notequal(atom,cst_HSLA)
                   ?caml_string_notequal(atom,cst_Hex)
                     ?caml_string_notequal(atom,cst_Name)
                       ?caml_string_notequal(atom,cst_RGBA$0)
                         ?caml_string_notequal(atom,cst_Var)
                           ?caml_call1(Sexplib0_Sexp_conv_error[19],0)
                           :caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$5,sexp)
                         :caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$5,sexp)
                       :caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$5,sexp)
                     :caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$5,sexp)
                   :caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$5,sexp);
          throw _h__}}
      var _h6_=sexp[1];
      if(_h6_)
       {var _h7_=_h6_[1];
        if(0 === _h7_[0])
         {var sexp_args=_h6_[2],atom$0=_h7_[1];
          if(caml_string_notequal(atom$0,cst_HSLA$0))
           {if(caml_string_notequal(atom$0,cst_Hex$0))
             {if(caml_string_notequal(atom$0,cst_Name$0))
               {if(caml_string_notequal(atom$0,cst_RGBA$1))
                 {if(caml_string_notequal(atom$0,cst_Var$0))
                   try
                    {var _h8_=css_global_values_of_sexp(sexp);return _h8_}
                   catch(_h9_)
                    {_h9_ = caml_wrap_exception(_h9_);
                     if(_h9_ === Sexplib0_Sexp_conv_error[18])
                      return caml_call1(Sexplib0_Sexp_conv_error[19],0);
                     throw _h9_}
                  if(sexp_args && ! sexp_args[2])
                   {var v0=sexp_args[1],v0$0=caml_call1(Core_kernel[456],v0);
                    return [0,4298439,v0$0]}
                  return caml_call3
                          (Sexplib0_Sexp_conv_error[22],tp_loc$5,atom$0,sexp)}
                if(sexp_args && ! sexp_args[2])
                 {var v0$1=sexp_args[1],v0$2=t_of_sexp$1(v0$1);
                  return [0,912890036,v0$2]}
                return caml_call3
                        (Sexplib0_Sexp_conv_error[22],tp_loc$5,atom$0,sexp)}
              if(sexp_args && ! sexp_args[2])
               {var v0$3=sexp_args[1],v0$4=caml_call1(Core_kernel[456],v0$3);
                return [0,869834347,v0$4]}
              return caml_call3
                      (Sexplib0_Sexp_conv_error[22],tp_loc$5,atom$0,sexp)}
            if(sexp_args && ! sexp_args[2])
             {var v0$5=sexp_args[1],v0$6=caml_call1(Core_kernel[456],v0$5);
              return [0,3603131,v0$6]}
            return caml_call3
                    (Sexplib0_Sexp_conv_error[22],tp_loc$5,atom$0,sexp)}
          if(sexp_args && ! sexp_args[2])
           {var v0$7=sexp_args[1],v0$8=t_of_sexp$2(v0$7);
            return [0,802593344,v0$8]}
          return caml_call3(Sexplib0_Sexp_conv_error[22],tp_loc$5,atom$0,sexp)}
        return caml_call2(Sexplib0_Sexp_conv_error[24],tp_loc$5,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[25],tp_loc$5,sexp)}
    function t_of_sexp$4(sexp)
     {try
       {var _h3_=t_of_sexp$3(sexp);return _h3_}
      catch(_h4_)
       {_h4_ = caml_wrap_exception(_h4_);
        if(_h4_ === Sexplib0_Sexp_conv_error[18])
         return caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc$6,sexp);
        throw _h4_}}
    function sexp_of_t$3(v)
     {if(typeof v === "number")return sexp_of_css_global_values(v);
      var _h2_=v[1];
      if(4298439 === _h2_)
       {var v0=v[2];return [1,[0,_cI_,[0,caml_call1(Core_kernel[455],v0),0]]]}
      if(869834347 <= _h2_)
       {if(912890036 <= _h2_)
         {var v0$0=v[2];return [1,[0,_cJ_,[0,sexp_of_t$1(v0$0),0]]]}
        var v0$1=v[2];
        return [1,[0,_cK_,[0,caml_call1(Core_kernel[455],v0$1),0]]]}
      if(802593344 <= _h2_)
       {var v0$2=v[2];return [1,[0,_cL_,[0,sexp_of_t$2(v0$2),0]]]}
      var v0$3=v[2];
      return [1,[0,_cM_,[0,caml_call1(Core_kernel[455],v0$3),0]]]}
    var
     _cN_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_58_),
     _cO_=
      [0,caml_call2(Bin_prot_Shape[11],_cN_,bin_shape_css_global_values),0],
     _cP_=
      [0,caml_call2(Bin_prot_Shape[10],cst_Var$1,[0,Core_kernel[443]]),_cO_],
     _cQ_=
      [0,caml_call2(Bin_prot_Shape[10],cst_Hex$1,[0,Core_kernel[443]]),_cP_],
     _cR_=
      [0,caml_call2(Bin_prot_Shape[10],cst_Name$1,[0,Core_kernel[443]]),_cQ_],
     _cS_=[0,caml_call2(Bin_prot_Shape[10],cst_HSLA$1,[0,bin_shape_t$1]),_cR_],
     _cT_=[0,caml_call2(Bin_prot_Shape[10],cst_RGBA$2,[0,bin_shape_t$0]),_cS_],
     _cU_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_53_),
     _cV_=caml_call2(Bin_prot_Shape[12],_cU_,_cT_),
     _cW_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$5),0,_cV_],0],
     _cX_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_52_),
     group$3=caml_call2(Bin_prot_Shape[6],_cX_,_cW_),
     _cY_=caml_call1(Bin_prot_Shape[2][1],cst_t$6),
     bin_shape_t$2=caml_call1(caml_call2(Bin_prot_Shape[14],group$3,_cY_),0);
    function bin_size_t$2(v)
     {if(typeof v === "number")return 4;
      var _h1_=v[1];
      if(4298439 === _h1_)
       {var args=v[2],size_args=caml_call1(Core_kernel[444],args);
        return caml_call2(Bin_prot_Common[23],size_args,4)}
      if(869834347 <= _h1_)
       {if(912890036 <= _h1_)
         {var args$0=v[2],size_args$0=bin_size_t$0(args$0);
          return caml_call2(Bin_prot_Common[23],size_args$0,4)}
        var args$1=v[2],size_args$1=caml_call1(Core_kernel[444],args$1);
        return caml_call2(Bin_prot_Common[23],size_args$1,4)}
      if(802593344 <= _h1_)
       {var args$2=v[2],size_args$2=bin_size_t$1(args$2);
        return caml_call2(Bin_prot_Common[23],size_args$2,4)}
      var args$3=v[2],size_args$3=caml_call1(Core_kernel[444],args$3);
      return caml_call2(Bin_prot_Common[23],size_args$3,4)}
    function bin_write_t$2(buf,pos,v)
     {if(typeof v === "number")
       return 418396260 <= v
               ?caml_call3(Bin_prot_Write[29],buf,pos,418396260)
               :caml_call3(Bin_prot_Write[29],buf,pos,-72987685);
      var _h0_=v[1];
      if(4298439 === _h0_)
       {var args=v[2],pos$0=caml_call3(Bin_prot_Write[29],buf,pos,4298439);
        return caml_call3(Core_kernel[445],buf,pos$0,args)}
      if(869834347 <= _h0_)
       {if(912890036 <= _h0_)
         {var
           args$0=v[2],
           pos$1=caml_call3(Bin_prot_Write[29],buf,pos,912890036);
          return bin_write_t$0(buf,pos$1,args$0)}
        var
         args$1=v[2],
         pos$2=caml_call3(Bin_prot_Write[29],buf,pos,869834347);
        return caml_call3(Core_kernel[445],buf,pos$2,args$1)}
      if(802593344 <= _h0_)
       {var
         args$2=v[2],
         pos$3=caml_call3(Bin_prot_Write[29],buf,pos,802593344);
        return bin_write_t$1(buf,pos$3,args$2)}
      var args$3=v[2],pos$4=caml_call3(Bin_prot_Write[29],buf,pos,3603131);
      return caml_call3(Core_kernel[445],buf,pos$4,args$3)}
    var bin_writer_t$2=[0,bin_size_t$2,bin_write_t$2];
    function bin_read_t$5(buf,pos_ref,vint)
     {if(802593344 <= vint)
       {if(869834347 === vint)
         {var arg_1=caml_call2(Core_kernel[447],buf,pos_ref);
          return [0,869834347,arg_1]}
        if(912890036 === vint)
         {var arg_1$0=bin_read_t$2(buf,pos_ref);return [0,912890036,arg_1$0]}
        if(! (802593345 <= vint))
         {var arg_1$1=bin_read_t$4(buf,pos_ref);return [0,802593344,arg_1$1]}}
      else
       {if(3603131 === vint)
         {var arg_1$2=caml_call2(Core_kernel[447],buf,pos_ref);
          return [0,3603131,arg_1$2]}
        if(4298439 === vint)
         {var arg_1$3=caml_call2(Core_kernel[447],buf,pos_ref);
          return [0,4298439,arg_1$3]}}
      if(-72987685 === vint)return -72987685;
      if(418396260 === vint)return 418396260;
      throw Bin_prot_Common[13]}
    function bin_read_t$6(buf,pos_ref)
     {var vint=caml_call2(Bin_prot_Read[28],buf,pos_ref);
      try
       {var _hY_=bin_read_t$5(buf,pos_ref,vint);return _hY_}
      catch(_hZ_)
       {_hZ_ = caml_wrap_exception(_hZ_);
        if(_hZ_ === Bin_prot_Common[13])
         return caml_call2(Bin_prot_Common[18],err,pos_ref[1]);
        throw _hZ_}}
    var
     bin_reader_t$2=[0,bin_read_t$6,bin_read_t$5],
     bin_t$2=[0,bin_shape_t$2,bin_writer_t$2,bin_reader_t$2];
    function compare$2(a_019,b_020)
     {if(caml_call2(Ppx_compare_lib[1],a_019,b_020))return 0;
      if(typeof a_019 === "number")
       {var switch$0=0;
        if(-72987685 === b_020 || 418396260 === b_020)switch$0 = 1;
        if(switch$0)return compare_css_global_values(a_019,b_020)}
      else
       {var _hX_=a_019[1];
        if(4298439 === _hX_)
         {if(typeof b_020 !== "number" && 4298439 === b_020[1])
           {var right_030=b_020[2],left_029=a_019[2];
            return caml_call2(Core_kernel[451],left_029,right_030)}}
        else
         if(869834347 <= _hX_)
          {if(912890036 <= _hX_)
            {if(typeof b_020 !== "number" && 912890036 === b_020[1])
              {var right_022=b_020[2],left_021=a_019[2];
               return compare$0(left_021,right_022)}}
           else
            if(typeof b_020 !== "number" && 869834347 === b_020[1])
             {var right_026=b_020[2],left_025=a_019[2];
              return caml_call2(Core_kernel[451],left_025,right_026)}}
         else
          if(802593344 <= _hX_)
           {if(typeof b_020 !== "number" && 802593344 === b_020[1])
             {var right_024=b_020[2],left_023=a_019[2];
              return compare$1(left_023,right_024)}}
          else
           if(typeof b_020 !== "number" && 3603131 === b_020[1])
            {var right_028=b_020[2],left_027=a_019[2];
             return caml_call2(Core_kernel[451],left_027,right_028)}}
      return caml_compare(a_019,b_020)}
    caml_call1(Core_kernel_Sexpable[1],[0,t_of_sexp$4,sexp_of_t$3]);
    function to_string_css(c)
     {if(typeof c === "number")return sanitize_sexp(sexp_of_t$3(c));
      var _hQ_=c[1];
      if(4298439 === _hQ_)
       {var var$0=c[2];return caml_call2(Core_kernel[241],_cZ_,var$0)}
      if(869834347 <= _hQ_)
       {if(912890036 <= _hQ_)
         {var match=c[2],a=match[4],b=match[3],g=match[2],r=match[1];
          if(a)
           {var p=a[1],_hR_=caml_call1(Core_kernel_Percent[68],p);
            return caml_call5(Core_kernel[241],_c0_,r,g,b,_hR_)}
          return caml_call4(Core_kernel[241],_c1_,r,g,b)}
        var name=c[2];
        return name}
      if(802593344 <= _hQ_)
       {var
         match$0=c[2],
         a$0=match$0[4],
         l=match$0[3],
         s=match$0[2],
         h=match$0[1];
        if(a$0)
         {var
           p$0=a$0[1],
           _hS_=caml_call1(Core_kernel_Percent[68],p$0),
           _hT_=caml_call1(Core_kernel_Percent[70],l),
           _hU_=caml_call1(Core_kernel_Percent[70],s);
          return caml_call5(Core_kernel[241],_c2_,h,_hU_,_hT_,_hS_)}
        var
         _hV_=caml_call1(Core_kernel_Percent[70],l),
         _hW_=caml_call1(Core_kernel_Percent[70],s);
        return caml_call4(Core_kernel[241],_c3_,h,_hW_,_hV_)}
      var hex=c[2];
      return hex}
    function t_of_sexp$5(sexp)
     {try
       {if(0 === sexp[0])
         {var atom=sexp[1];
          if(caml_string_notequal(atom,cst_Bottom))
           if(caml_string_notequal(atom,cst_Center))
            if(caml_string_notequal(atom,cst_Justify))
             if(caml_string_notequal(atom,cst_Left))
              if(caml_string_notequal(atom,cst_Middle))
               if(caml_string_notequal(atom,cst_Right))
                if(caml_string_notequal(atom,cst_Top))
                 try
                  {var _hI_=css_global_values_of_sexp(sexp),_hM_=_hI_}
                 catch(_hO_)
                  {_hO_ = caml_wrap_exception(_hO_);
                   if(_hO_ !== Sexplib0_Sexp_conv_error[18])throw _hO_;
                   var _hM_=caml_call1(Sexplib0_Sexp_conv_error[19],0)}
                else
                 var _hM_=4202101;
               else
                var _hM_=-57574468;
              else
               var _hM_=15943541;
             else
              var _hM_=847852583;
            else
             var _hM_=-788068560;
           else
            var _hM_=980392437;
          else
           var _hM_=437082891}
        else
         {var _hJ_=sexp[1];
          if(_hJ_)
           {var _hK_=_hJ_[1];
            if(0 === _hK_[0])
             {var atom$0=_hK_[1];
              try
               {var _hL_=css_global_values_of_sexp(sexp),_hM_=_hL_}
              catch(_hP_)
               {_hP_ = caml_wrap_exception(_hP_);
                if(_hP_ !== Sexplib0_Sexp_conv_error[18])throw _hP_;
                var
                 _hM_=
                  caml_string_notequal(atom$0,cst_Bottom$0)
                   ?caml_string_notequal(atom$0,cst_Center$0)
                     ?caml_string_notequal(atom$0,cst_Justify$0)
                       ?caml_string_notequal(atom$0,cst_Left$0)
                         ?caml_string_notequal(atom$0,cst_Middle$0)
                           ?caml_string_notequal(atom$0,cst_Right$0)
                             ?caml_string_notequal(atom$0,cst_Top$0)
                               ?caml_call1(Sexplib0_Sexp_conv_error[19],0)
                               :caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc$7,sexp)
                             :caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc$7,sexp)
                           :caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc$7,sexp)
                         :caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc$7,sexp)
                       :caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc$7,sexp)
                     :caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc$7,sexp)
                   :caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc$7,sexp)}}
            else
             var _hM_=caml_call2(Sexplib0_Sexp_conv_error[24],tp_loc$7,sexp)}
          else
           var _hM_=caml_call2(Sexplib0_Sexp_conv_error[25],tp_loc$7,sexp)}
        return _hM_}
      catch(_hN_)
       {_hN_ = caml_wrap_exception(_hN_);
        if(_hN_ === Sexplib0_Sexp_conv_error[18])
         return caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc$8,sexp);
        throw _hN_}}
    function sexp_of_t$4(v)
     {if(15943541 <= v)
       {if(418396260 !== v)
         return 847852583 <= v
                 ?980392437 <= v?_c4_:_c5_
                 :437082891 <= v?_c6_:_c7_}
      else
       {if(-57574468 <= v)return 4202101 <= v?_c8_:_c9_;
        if(! (-72987685 <= v))return _c__}
      return sexp_of_css_global_values(v)}
    var
     _c$_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_102),
     _da_=
      [0,caml_call2(Bin_prot_Shape[11],_c$_,bin_shape_css_global_values),0],
     _db_=[0,caml_call2(Bin_prot_Shape[10],cst_Justify$1,0),_da_],
     _dc_=[0,caml_call2(Bin_prot_Shape[10],cst_Middle$1,0),_db_],
     _dd_=[0,caml_call2(Bin_prot_Shape[10],cst_Bottom$1,0),_dc_],
     _de_=[0,caml_call2(Bin_prot_Shape[10],cst_Top$1,0),_dd_],
     _df_=[0,caml_call2(Bin_prot_Shape[10],cst_Center$1,0),_de_],
     _dg_=[0,caml_call2(Bin_prot_Shape[10],cst_Right$1,0),_df_],
     _dh_=[0,caml_call2(Bin_prot_Shape[10],cst_Left$1,0),_dg_],
     _di_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_95_),
     _dj_=caml_call2(Bin_prot_Shape[12],_di_,_dh_),
     _dk_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$7),0,_dj_],0],
     _dl_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_94_),
     group$4=caml_call2(Bin_prot_Shape[6],_dl_,_dk_),
     _dm_=caml_call1(Bin_prot_Shape[2][1],cst_t$8);
    caml_call1(caml_call2(Bin_prot_Shape[14],group$4,_dm_),0);
    caml_call1(Core_kernel_Sexpable[1],[0,t_of_sexp$5,sexp_of_t$4]);
    var
     to_string_css$0=
      caml_call2(Core_kernel_Fn[5],sanitize_sexp,sexp_of_t$4);
    function t_of_sexp$6(sexp)
     {if(0 === sexp[0])
       {var atom=sexp[1];
        try
         {var _hC_=css_global_values_of_sexp(sexp);return _hC_}
        catch(_hH_)
         {_hH_ = caml_wrap_exception(_hH_);
          if(_hH_ === Sexplib0_Sexp_conv_error[18])
           return caml_string_notequal(atom,cst_Ch)
                   ?caml_string_notequal(atom,cst_Em)
                     ?caml_string_notequal(atom,cst_Percent)
                       ?caml_string_notequal(atom,cst_Pt)
                         ?caml_string_notequal(atom,cst_Px)
                           ?caml_string_notequal(atom,cst_Rem)
                             ?caml_string_notequal(atom,cst_Vh)
                               ?caml_string_notequal(atom,cst_Vw)
                                 ?caml_call1(Sexplib0_Sexp_conv_error[19],0)
                                 :caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$9,sexp)
                               :caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$9,sexp)
                             :caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$9,sexp)
                           :caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$9,sexp)
                         :caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$9,sexp)
                       :caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$9,sexp)
                     :caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$9,sexp)
                   :caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$9,sexp);
          throw _hH_}}
      var _hD_=sexp[1];
      if(_hD_)
       {var _hE_=_hD_[1];
        if(0 === _hE_[0])
         {var sexp_args=_hD_[2],atom$0=_hE_[1];
          if(caml_string_notequal(atom$0,cst_Ch$0))
           {if(caml_string_notequal(atom$0,cst_Em$0))
             {if(caml_string_notequal(atom$0,cst_Percent$0))
               {if(caml_string_notequal(atom$0,cst_Pt$0))
                 {if(caml_string_notequal(atom$0,cst_Px$0))
                   {if(caml_string_notequal(atom$0,cst_Rem$0))
                     {if(caml_string_notequal(atom$0,cst_Vh$0))
                       {if(caml_string_notequal(atom$0,cst_Vw$0))
                         try
                          {var _hF_=css_global_values_of_sexp(sexp);return _hF_}
                         catch(_hG_)
                          {_hG_ = caml_wrap_exception(_hG_);
                           if(_hG_ === Sexplib0_Sexp_conv_error[18])
                            return caml_call1(Sexplib0_Sexp_conv_error[19],0);
                           throw _hG_}
                        if(sexp_args && ! sexp_args[2])
                         {var
                           v0=sexp_args[1],
                           v0$0=caml_call1(Core_kernel_Percent[5],v0);
                          return [0,19297,v0$0]}
                        return caml_call3
                                (Sexplib0_Sexp_conv_error[22],tp_loc$9,atom$0,sexp)}
                      if(sexp_args && ! sexp_args[2])
                       {var
                         v0$1=sexp_args[1],
                         v0$2=caml_call1(Core_kernel_Percent[5],v0$1);
                        return [0,19282,v0$2]}
                      return caml_call3
                              (Sexplib0_Sexp_conv_error[22],tp_loc$9,atom$0,sexp)}
                    if(sexp_args && ! sexp_args[2])
                     {var
                       v0$3=sexp_args[1],
                       v0$4=caml_call1(Core_kernel[324],v0$3);
                      return [0,4100410,v0$4]}
                    return caml_call3
                            (Sexplib0_Sexp_conv_error[22],tp_loc$9,atom$0,sexp)}
                  if(sexp_args && ! sexp_args[2])
                   {var
                     v0$5=sexp_args[1],
                     v0$6=caml_call1(Core_kernel[341],v0$5);
                    return [0,17960,v0$6]}
                  return caml_call3
                          (Sexplib0_Sexp_conv_error[22],tp_loc$9,atom$0,sexp)}
                if(sexp_args && ! sexp_args[2])
                 {var
                   v0$7=sexp_args[1],
                   v0$8=caml_call1(Core_kernel[324],v0$7);
                  return [0,17956,v0$8]}
                return caml_call3
                        (Sexplib0_Sexp_conv_error[22],tp_loc$9,atom$0,sexp)}
              if(sexp_args && ! sexp_args[2])
               {var
                 v0$9=sexp_args[1],
                 v0$10=caml_call1(Core_kernel_Percent[5],v0$9);
                return [0,-970206555,v0$10]}
              return caml_call3
                      (Sexplib0_Sexp_conv_error[22],tp_loc$9,atom$0,sexp)}
            if(sexp_args && ! sexp_args[2])
             {var v0$11=sexp_args[1],v0$12=caml_call1(Core_kernel[341],v0$11);
              return [0,15496,v0$12]}
            return caml_call3
                    (Sexplib0_Sexp_conv_error[22],tp_loc$9,atom$0,sexp)}
          if(sexp_args && ! sexp_args[2])
           {var v0$13=sexp_args[1],v0$14=caml_call1(Core_kernel[324],v0$13);
            return [0,15045,v0$14]}
          return caml_call3(Sexplib0_Sexp_conv_error[22],tp_loc$9,atom$0,sexp)}
        return caml_call2(Sexplib0_Sexp_conv_error[24],tp_loc$9,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[25],tp_loc$9,sexp)}
    function t_of_sexp$7(sexp)
     {try
       {var _hA_=t_of_sexp$6(sexp);return _hA_}
      catch(_hB_)
       {_hB_ = caml_wrap_exception(_hB_);
        if(_hB_ === Sexplib0_Sexp_conv_error[18])
         return caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc$10,sexp);
        throw _hB_}}
    function sexp_of_t$5(v)
     {if(typeof v === "number")return sexp_of_css_global_values(v);
      var _hz_=v[1];
      if(17960 <= _hz_)
       {if(19297 <= _hz_)
         {if(4100410 <= _hz_)
           {var v0=v[2];
            return [1,[0,_dn_,[0,caml_call1(Core_kernel[323],v0),0]]]}
          var v0$0=v[2];
          return [1,[0,_do_,[0,caml_call1(Core_kernel_Percent[6],v0$0),0]]]}
        if(19282 <= _hz_)
         {var v0$1=v[2];
          return [1,[0,_dp_,[0,caml_call1(Core_kernel_Percent[6],v0$1),0]]]}
        var v0$2=v[2];
        return [1,[0,_dq_,[0,caml_call1(Core_kernel[340],v0$2),0]]]}
      if(15496 <= _hz_)
       {if(17956 <= _hz_)
         {var v0$3=v[2];
          return [1,[0,_dr_,[0,caml_call1(Core_kernel[323],v0$3),0]]]}
        var v0$4=v[2];
        return [1,[0,_ds_,[0,caml_call1(Core_kernel[340],v0$4),0]]]}
      if(15045 <= _hz_)
       {var v0$5=v[2];
        return [1,[0,_dt_,[0,caml_call1(Core_kernel[323],v0$5),0]]]}
      var v0$6=v[2];
      return [1,[0,_du_,[0,caml_call1(Core_kernel_Percent[6],v0$6),0]]]}
    var
     _dv_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_123),
     _dw_=
      [0,caml_call2(Bin_prot_Shape[11],_dv_,bin_shape_css_global_values),0],
     _dx_=
      [0,
       caml_call2(Bin_prot_Shape[10],cst_Vw$1,[0,Core_kernel_Percent[11]]),
       _dw_],
     _dy_=
      [0,
       caml_call2(Bin_prot_Shape[10],cst_Vh$1,[0,Core_kernel_Percent[11]]),
       _dx_],
     _dz_=
      [0,caml_call2(Bin_prot_Shape[10],cst_Px$1,[0,Core_kernel[328]]),_dy_],
     _dA_=
      [0,caml_call2(Bin_prot_Shape[10],cst_Pt$1,[0,Core_kernel[311]]),_dz_],
     _dB_=
      [0,
       caml_call2
        (Bin_prot_Shape[10],cst_Percent$1,[0,Core_kernel_Percent[11]]),
       _dA_],
     _dC_=
      [0,caml_call2(Bin_prot_Shape[10],cst_Em$1,[0,Core_kernel[328]]),_dB_],
     _dD_=
      [0,caml_call2(Bin_prot_Shape[10],cst_Rem$1,[0,Core_kernel[311]]),_dC_],
     _dE_=
      [0,caml_call2(Bin_prot_Shape[10],cst_Ch$1,[0,Core_kernel[311]]),_dD_],
     _dF_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_115),
     _dG_=caml_call2(Bin_prot_Shape[12],_dF_,_dE_),
     _dH_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$9),0,_dG_],0],
     _dI_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_114),
     group$5=caml_call2(Bin_prot_Shape[6],_dI_,_dH_),
     _dJ_=caml_call1(Bin_prot_Shape[2][1],cst_t$10),
     bin_shape_t$3=caml_call1(caml_call2(Bin_prot_Shape[14],group$5,_dJ_),0);
    function compare$3(a_037,b_038)
     {if(caml_call2(Ppx_compare_lib[1],a_037,b_038))return 0;
      if(typeof a_037 === "number")
       {var switch$0=0;
        if(-72987685 === b_038 || 418396260 === b_038)switch$0 = 1;
        if(switch$0)return compare_css_global_values(a_037,b_038)}
      else
       {var _hy_=a_037[1];
        if(17960 <= _hy_)
         {if(19297 <= _hy_)
           {if(4100410 <= _hy_)
             {if(typeof b_038 !== "number" && 4100410 === b_038[1])
               {var right_042=b_038[2],left_041=a_037[2];
                return caml_call2(Core_kernel[319],left_041,right_042)}}
            else
             if(typeof b_038 !== "number" && 19297 === b_038[1])
              {var right_054=b_038[2],left_053=a_037[2];
               return caml_call2(Core_kernel_Percent[22],left_053,right_054)}}
          else
           if(19282 <= _hy_)
            {if(typeof b_038 !== "number" && 19282 === b_038[1])
              {var right_052=b_038[2],left_051=a_037[2];
               return caml_call2(Core_kernel_Percent[22],left_051,right_052)}}
           else
            if(typeof b_038 !== "number" && 17960 === b_038[1])
             {var right_050=b_038[2],left_049=a_037[2];
              return caml_call2(Core_kernel[336],left_049,right_050)}}
        else
         if(15496 <= _hy_)
          {if(17956 <= _hy_)
            {if(typeof b_038 !== "number" && 17956 === b_038[1])
              {var right_048=b_038[2],left_047=a_037[2];
               return caml_call2(Core_kernel[319],left_047,right_048)}}
           else
            if(typeof b_038 !== "number" && 15496 === b_038[1])
             {var right_044=b_038[2],left_043=a_037[2];
              return caml_call2(Core_kernel[336],left_043,right_044)}}
         else
          if(15045 <= _hy_)
           {if(typeof b_038 !== "number" && 15045 === b_038[1])
             {var right_040=b_038[2],left_039=a_037[2];
              return caml_call2(Core_kernel[319],left_039,right_040)}}
          else
           if(typeof b_038 !== "number" && -970206555 === b_038[1])
            {var right_046=b_038[2],left_045=a_037[2];
             return caml_call2(Core_kernel_Percent[22],left_045,right_046)}}
      return caml_compare(a_037,b_038)}
    function to_string_css$1(l)
     {if(typeof l === "number")
       return sanitize_sexp(sexp_of_css_global_values(l));
      var _hu_=l[1];
      if(17960 <= _hu_)
       {if(19297 <= _hu_)
         {if(4100410 <= _hu_)
           {var f=l[2];return caml_call2(Core_kernel[241],_dK_,f)}
          var p=l[2],_hv_=caml_call1(Core_kernel_Percent[70],p);
          return caml_call2(Core_kernel[241],_dL_,_hv_)}
        if(19282 <= _hu_)
         {var p$0=l[2],_hw_=caml_call1(Core_kernel_Percent[70],p$0);
          return caml_call2(Core_kernel[241],_dM_,_hw_)}
        var i=l[2];
        return caml_call2(Core_kernel[241],_dN_,i)}
      if(15496 <= _hu_)
       {if(17956 <= _hu_)
         {var p$1=l[2];return caml_call2(Core_kernel[241],_dO_,p$1)}
        var i$0=l[2];
        return caml_call2(Core_kernel[241],_dP_,i$0)}
      if(15045 <= _hu_){var c=l[2];return caml_call2(Core_kernel[241],_dQ_,c)}
      var p$2=l[2],_hx_=caml_call1(Core_kernel_Percent[70],p$2);
      return caml_call2(Core_kernel[241],_dR_,_hx_)}
    var
     percent100=[0,-970206555,caml_call1(Core_kernel_Percent[69],100.)],
     _dS_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_145),
     _dT_=[0,caml_call2(Bin_prot_Shape[11],_dS_,bin_shape_t$3),0],
     _dU_=[0,caml_call2(Bin_prot_Shape[10],cst_Auto,0),_dT_],
     _dV_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_144),
     _dW_=caml_call2(Bin_prot_Shape[12],_dV_,_dU_),
     _dX_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$11),0,_dW_],0],
     _dY_=caml_call1(Bin_prot_Shape[4][1],cst_css_gen_src_css_gen_ml_143),
     group$6=caml_call2(Bin_prot_Shape[6],_dY_,_dX_),
     _dZ_=caml_call1(Bin_prot_Shape[2][1],cst_t$12);
    caml_call1(caml_call2(Bin_prot_Shape[14],group$6,_dZ_),0);
    function compare$4(a_057,b_058)
     {if(caml_call2(Ppx_compare_lib[1],a_057,b_058))return 0;
      var switch$0=0;
      if(typeof a_057 === "number" && 726666127 <= a_057)
       {if(726666127 === b_058)return 0}
      else
       switch$0 = 1;
      if(switch$0)
       {var switch$1=0;
        if(typeof b_058 === "number")
         {if(-72987685 !== b_058 && 418396260 !== b_058)switch$1 = 1}
        else
         {var _ht_=b_058[1];
          if(17957 <= _ht_)
           {if(19283 <= _ht_)
             {if(19297 !== _ht_ && 4100410 !== _ht_)switch$1 = 1}
            else
             if(17960 !== _ht_ && ! (19282 <= _ht_))switch$1 = 1}
          else
           if(15046 <= _ht_)
            {if(15496 !== _ht_ && ! (17956 <= _ht_))switch$1 = 1}
           else
            if(-970206555 !== _ht_ && ! (15045 <= _ht_))switch$1 = 1}
        if(! switch$1)return compare$3(a_057,b_058)}
      return caml_compare(a_057,b_058)}
    function t_of_sexp$8(sexp)
     {if(0 === sexp[0])
       {var atom=sexp[1];
        if(caml_string_notequal(atom,cst_Auto$0))
         try
          {var _hn_=t_of_sexp$6(sexp);return _hn_}
         catch(_hs_)
          {_hs_ = caml_wrap_exception(_hs_);
           if(_hs_ === Sexplib0_Sexp_conv_error[18])
            return caml_call1(Sexplib0_Sexp_conv_error[19],0);
           throw _hs_}
        return 726666127}
      var _ho_=sexp[1];
      if(_ho_)
       {var _hp_=_ho_[1];
        if(0 === _hp_[0])
         {var atom$0=_hp_[1];
          try
           {var _hq_=t_of_sexp$6(sexp);return _hq_}
          catch(_hr_)
           {_hr_ = caml_wrap_exception(_hr_);
            if(_hr_ === Sexplib0_Sexp_conv_error[18])
             return caml_string_notequal(atom$0,cst_Auto$1)
                     ?caml_call1(Sexplib0_Sexp_conv_error[19],0)
                     :caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc$11,sexp);
            throw _hr_}}
        return caml_call2(Sexplib0_Sexp_conv_error[24],tp_loc$11,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[25],tp_loc$11,sexp)}
    function t_of_sexp$9(sexp)
     {try
       {var _hl_=t_of_sexp$8(sexp);return _hl_}
      catch(_hm_)
       {_hm_ = caml_wrap_exception(_hm_);
        if(_hm_ === Sexplib0_Sexp_conv_error[18])
         return caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc$12,sexp);
        throw _hm_}}
    function sexp_of_t$6(v)
     {if(typeof v === "number" && 726666127 <= v)return _d0_;
      return sexp_of_t$5(v)}
    function to_string_css$2(l)
     {if(typeof l === "number" && 726666127 <= l)return cst_auto;
      return to_string_css$1(l)}
    function value_map(o,f)
     {return caml_call3(Core_kernel_Option[46],o,cst$18,f)}
    function symbol(t1,t2){return caml_call2(Core_kernel[142],t1,t2)}
    function concat(l){return caml_call1(Core_kernel_List[130],l)}
    function to_string_list(_hk_){return _hk_}
    function to_string_css$3(t)
     {function _hi_(param)
       {var value=param[2],field=param[1];
        return caml_call3(Core_kernel[241],_d1_,field,value)}
      var _hj_=caml_call2(Core_kernel_List[71],t,_hi_);
      return caml_call2(Core_kernel_String[26],_d2_,_hj_)}
    function of_string_css_exn(s)
     {var _hh_=parse_declaration_list(s);
      return caml_call1(Core_kernel_Or_error[35],_hh_)}
    function create_raw(field,value){return [0,[0,field,value],0]}
    function create$2(field,value)
     {var _hg_=validate_value(value);
      caml_call1(Core_kernel_Or_error[35],_hg_);
      return create_raw(field,value)}
    var empty=0,_d3_=Core_kernel_List[8];
    function create_placement(name,length)
     {return create$2(name,to_string_css$1(length))}
    function left(_hf_){return create_placement(cst_left,_hf_)}
    function top(_he_){return create_placement(cst_top,_he_)}
    function bottom(_hd_){return create_placement(cst_bottom,_hd_)}
    function right(_hc_){return create_placement(cst_right,_hc_)}
    function position(tp,bt,lt,rt,pos)
     {var
       value=
        332360020 === pos
         ?cst_fixed
         :982536398 <= pos
           ?1070408009 <= pos?cst_sticky:cst_static
           :491227799 <= pos?cst_absolute:cst_relative,
       pos$0=create$2(cst_position,value);
      function convert(opt_l,f)
       {return caml_call3(Core_kernel_Option[46],opt_l,empty,f)}
      var
       _g$_=[0,convert(bt,bottom),0],
       _ha_=[0,convert(rt,right),_g$_],
       _hb_=[0,convert(lt,left),_ha_];
      return concat([0,pos$0,[0,convert(tp,top),_hb_]])}
    function box_sizing(v)
     {var
       _g__=
        92813848 === v?_d4_:367114405 === v?_d5_:sexp_of_css_global_values(v),
       value=sanitize_sexp(_g__);
      return create_raw(cst_box_sizing,value)}
    function display(v)
     {var switch$0=0;
      if(168351231 <= v)
       if(498536372 <= v)
        var
         _g9_=
          781663065 <= v?870530776 <= v?_d6_:_d7_:504440814 <= v?_d8_:_d9_;
       else
        if(418396260 <= v)switch$0 = 1;else var _g9_=_d__;
      else
       if(-936778451 === v)
        var _g9_=_d$_;
       else
        if(-266363961 <= v)
         if(-72987685 <= v)switch$0 = 1;else var _g9_=_ea_;
        else
         var _g9_=-841728391 <= v?_eb_:_ec_;
      if(switch$0)var _g9_=sexp_of_css_global_values(v);
      var value=sanitize_sexp(_g9_);
      return create_raw(cst_display,value)}
    function visibility(v)
     {var
       _g8_=
        19559306 === v
         ?_ed_
         :-260726701 <= v
           ?507973005 <= v?_ee_:sexp_of_css_global_values(v)
           :_ef_,
       value=sanitize_sexp(_g8_);
      return create_raw(cst_visibility,value)}
    function make_overflow(field,v)
     {var switch$0=0;
      if(-67548115 <= v)
       if(418396260 <= v)
        if(726666127 <= v)var _g7_=_eg_;else switch$0 = 1;
       else
        var _g7_=19559306 <= v?_eh_:_ei_;
      else
       if(-72987685 <= v)switch$0 = 1;else var _g7_=_ej_;
      if(switch$0)var _g7_=sexp_of_css_global_values(v);
      var value=sanitize_sexp(_g7_);
      return create_raw(field,value)}
    function overflow(_g6_){return make_overflow(cst_overflow,_g6_)}
    function overflow_x(_g5_){return make_overflow(cst_overflow_x,_g5_)}
    function overflow_y(_g4_){return make_overflow(cst_overflow_y,_g4_)}
    function z_index(i)
     {return create_raw(cst_z_index,caml_call1(Core_kernel_Int[103],i))}
    function opacity(i)
     {return create_raw(cst_opacity,caml_call1(Core_kernel_Float[150],i))}
    function create_length_field(field,l)
     {return create_raw(field,to_string_css$2(l))}
    function white_space(v)
     {var
       value=
        -397426005 <= v
         ?4003843 <= v
           ?418396260 <= v?cst_initial:cst_pre
           :-72987685 <= v?cst_inherit:cst_nowrap
         :-932293946 === v
           ?cst_pre_wrap
           :-453122489 <= v?cst_normal:cst_pre_line;
      return create$2(cst_white_space$1,value)}
    function font_size(_g3_){return create_length_field(cst_font_size,_g3_)}
    function font_family(l)
     {return create_raw
              (cst_font_family,caml_call2(Core_kernel_String[26],_ek_,l))}
    function font_style(s)
     {var
       _g2_=
        -72987685 <= s
         ?989373200 <= s?_el_:sexp_of_css_global_values(s)
         :-115526511 <= s?_em_:_en_,
       value=sanitize_sexp(_g2_);
      return create_raw(cst_font_style,value)}
    function font_weight(s)
     {if(typeof s === "number")
       var
        _g1_=
         347568466 === s
          ?_eo_
          :-415993180 <= s
            ?737455525 <= s?_ep_:sexp_of_css_global_values(s)
            :-415993181 <= s?_eq_:_er_,
        value=sanitize_sexp(_g1_);
      else
       var i=s[2],value=caml_call1(Core_kernel_Int[103],i);
      return create_raw(cst_font_weight,value)}
    var bold=font_weight(737455525);
    function font_variant(s)
     {var
       _g0_=
        57678329 === s?_es_:-453122488 <= s?sexp_of_css_global_values(s):_et_,
       value=sanitize_sexp(_g0_);
      return create_raw(cst_font_variant,value)}
    function font(size,family,style,weight,variant,param)
     {var
       _gV_=[0,caml_call2(Core_kernel_Option[39],variant,font_variant),0],
       _gW_=[0,caml_call2(Core_kernel_Option[39],weight,font_weight),_gV_],
       _gX_=[0,caml_call2(Core_kernel_Option[39],style,font_style),_gW_],
       _gY_=[0,[0,font_family(family)],_gX_],
       _gZ_=[0,[0,font_size(size)],_gY_];
      return concat(caml_call1(Core_kernel_List[121],_gZ_))}
    function color(c){return create_raw(cst_color,to_string_css(c))}
    function background_color(c)
     {return create_raw(cst_background_color,to_string_css(c))}
    function stops_to_string(stops)
     {function _gR_(param)
       {var
         color=param[2],
         pct=param[1],
         _gT_=caml_call1(Core_kernel_Percent[70],pct),
         _gU_=to_string_css(color);
        return caml_call3(Core_kernel[241],_eu_,_gU_,_gT_)}
      var _gS_=caml_call2(Core_kernel_List[71],stops,_gR_);
      return caml_call2(Core_kernel_String[26],_ev_,_gS_)}
    function background_image(spec)
     {var _gN_=spec[1];
      if(4252495 === _gN_)
       var url=spec[2],value=caml_call2(Core_kernel[241],_ew_,url);
      else
       if(411117168 <= _gN_)
        var
         match=spec[2],
         stops=match[1],
         _gO_=stops_to_string(stops),
         value=caml_call2(Core_kernel[241],_ex_,_gO_);
       else
        var
         _gP_=spec[2],
         stops$0=_gP_[2],
         match$0=_gP_[1],
         direction=match$0[2],
         _gQ_=stops_to_string(stops$0),
         value=caml_call3(Core_kernel[241],_ey_,direction,_gQ_);
      return create_raw(cst_background_image,value)}
    function create_alignment(field,a)
     {return create_raw(field,caml_call1(to_string_css$0,a))}
    function text_align(_gM_){return create_alignment(cst_text_align,_gM_)}
    function horizontal_align(_gL_)
     {return create_alignment(cst_horizontal_align,_gL_)}
    function vertical_align(_gK_)
     {return create_alignment(cst_vertical_align,_gK_)}
    function float$0(f)
     {var
       _gJ_=
        847852583 <= f
         ?870530776 <= f?_ez_:_eA_
         :-57574468 === f?_eB_:sexp_of_css_global_values(f);
      return create_raw(cst_float,sanitize_sexp(_gJ_))}
    function width(_gI_){return create_length_field(cst_width,_gI_)}
    function min_width(_gH_){return create_length_field(cst_min_width,_gH_)}
    function max_width(_gG_){return create_length_field(cst_max_width,_gG_)}
    function height(_gF_){return create_length_field(cst_height,_gF_)}
    function min_height(_gE_){return create_length_field(cst_min_height,_gE_)}
    function max_height(_gD_){return create_length_field(cst_max_height,_gD_)}
    function padding_top(_gC_)
     {return create_length_field(cst_padding_top,_gC_)}
    function padding_bottom(_gB_)
     {return create_length_field(cst_padding_bottom,_gB_)}
    function padding_left(_gA_)
     {return create_length_field(cst_padding_left,_gA_)}
    function padding_right(_gz_)
     {return create_length_field(cst_padding_right,_gz_)}
    function padding(top,bottom,left,right,param)
     {var
       m=Core_kernel_Option[39],
       _gv_=[0,caml_call2(m,right,padding_right),0],
       _gw_=[0,caml_call2(m,left,padding_left),_gv_],
       _gx_=[0,caml_call2(m,bottom,padding_bottom),_gw_],
       _gy_=[0,caml_call2(m,top,padding_top),_gx_];
      return concat(caml_call1(Core_kernel_List[121],_gy_))}
    function uniform_padding(l){return padding([0,l],[0,l],[0,l],[0,l],0)}
    function margin_top(_gu_){return create_length_field(cst_margin_top,_gu_)}
    function margin_bottom(_gt_)
     {return create_length_field(cst_margin_bottom,_gt_)}
    function margin_left(_gs_)
     {return create_length_field(cst_margin_left,_gs_)}
    function margin_right(_gr_)
     {return create_length_field(cst_margin_right,_gr_)}
    function margin(top,bottom,left,right,param)
     {var
       m=Core_kernel_Option[39],
       _gn_=[0,caml_call2(m,right,margin_right),0],
       _go_=[0,caml_call2(m,left,margin_left),_gn_],
       _gp_=[0,caml_call2(m,bottom,margin_bottom),_go_],
       _gq_=[0,caml_call2(m,top,margin_top),_gp_];
      return concat(caml_call1(Core_kernel_List[121],_gq_))}
    function uniform_margin(l){return margin([0,l],[0,l],[0,l],[0,l],0)}
    function concat2v(x,match)
     {if(caml_string_notequal(x,cst$19))
       {if(caml_string_notequal(match,cst$20))
         {var _gm_=caml_call2(Core_kernel[15],cst$21,match);
          return caml_call2(Core_kernel[15],x,_gm_)}
        return x}
      return match}
    function concat3v(v1,v2,v3){return concat2v(concat2v(v1,v2),v3)}
    function border_value(width,color,style,param)
     {if(-72987685 <= style)
       {var switch$0=0;
        if(19559306 <= style)
         if(418396260 <= style)
          if(870530776 <= style)var _gl_=_eC_;else switch$0 = 1;
         else
          var _gl_=334701579 <= style?_eD_:_eE_;
        else
         if(-57723893 <= style)var _gl_=_eF_;else switch$0 = 1;
        if(switch$0)var _gl_=sexp_of_css_global_values(style)}
      else
       var
        _gl_=
         -783455043 <= style
          ?-423359734 <= style
            ?-413163727 <= style?_eG_:_eH_
            :-696935855 <= style?_eI_:_eJ_
          :-793243622 <= style?_eK_:_eL_;
      var
       style$0=sanitize_sexp(_gl_),
       width$0=value_map(width,to_string_css$1),
       color$0=value_map(color,to_string_css);
      return concat3v(width$0,style$0,color$0)}
    function create_border(side,param)
     {if(side)
       var
        _gj_=side[1],
        _gk_=
         437082891 <= _gj_
          ?847852583 <= _gj_?cst_border_left:cst_border_bottom
          :4202101 <= _gj_?cst_border_top:cst_border_right,
        field=_gk_;
      else
       var field=cst_border;
      return function(width,color,style,param)
       {return create_raw(field,border_value(width,color,style,0))}}
    var
     border_top=create_border(_eM_,0),
     border_bottom=create_border(_eN_,0),
     border_left=create_border(_eO_,0),
     border_right=create_border(_eP_,0),
     border=create_border(0,0);
    function outline(width,color,style,param)
     {return create_raw(cst_outline,border_value(width,color,style,0))}
    function border_collapse(v)
     {var
       _gi_=
        -72987685 <= v?507973005 <= v?_eQ_:sexp_of_css_global_values(v):_eR_,
       value=sanitize_sexp(_gi_);
      return create_raw(cst_border_collapse,value)}
    function border_spacing(_gh_)
     {return create_length_field(cst_border_spacing,_gh_)}
    function border_radius(l)
     {return create$2(cst_border_radius,to_string_css$1(l))}
    function text_decoration(style,color,line,param)
     {function _gd_(l)
       {var
         _gg_=
          518168424 === l
           ?_eS_
           :698610924 <= l
             ?870530776 <= l?_eT_:_eU_
             :-72987685 <= l?sexp_of_css_global_values(l):_eV_;
        return sanitize_sexp(_gg_)}
      var
       _ge_=caml_call2(Core_kernel_List[71],line,_gd_),
       line$0=caml_call2(Core_kernel_String[26],_e1_,_ge_),
       style$0=
        value_map
         (style,
          function(s)
           {var
             _gf_=
              -72987685 <= s
               ?334701579 === s
                 ?_eW_
                 :969642477 <= s?_eX_:sexp_of_css_global_values(s)
               :-423359734 === s?_eY_:-413163727 <= s?_eZ_:_e0_;
            return sanitize_sexp(_gf_)}),
       color$0=value_map(color,to_string_css),
       value=concat3v(line$0,style$0,color$0);
      return create_raw(cst_text_decoration,value)}
    function item_alignment_to_string_css(param)
     {return -354838363 <= param
              ?726666127 <= param
                ?980392437 <= param?cst_center:cst_auto$0
                :555646908 <= param?cst_flex_start:cst_baseline
              :-401431371 <= param?cst_flex_end:cst_stretch}
    function flex_container(opt,_f9_,_f8_,align_items,param)
     {if(opt)var sth=opt[1],inline=sth;else var inline=0;
      if(_f9_)var sth$0=_f9_[1],direction=sth$0;else var direction=4102650;
      if(_f8_)var sth$1=_f8_[1],wrap=sth$1;else var wrap=-397426005;
      var
       _f__=
        175421085 <= direction
         ?744569753 <= direction?_e2_:_e3_
         :4102650 <= direction?_e4_:_e5_,
       direction$0=sanitize_sexp(_f__),
       _f$_=899936909 === wrap?_e6_:970483178 <= wrap?_e7_:_e8_,
       wrap$0=sanitize_sexp(_f$_);
      if(align_items)
       var
        a=align_items[1],
        align_items$0=
         create_raw(cst_align_items,item_alignment_to_string_css(a));
      else
       var align_items$0=empty;
      var
       _ga_=[0,create_raw(cst_flex_wrap,wrap$0),[0,align_items$0,0]],
       _gb_=[0,create_raw(cst_flex_direction,direction$0),_ga_],
       _gc_=inline?168351231:781663065;
      return concat([0,display(_gc_),_gb_])}
    function flex_item(order,opt,_f4_,grow,param)
     {if(opt)var sth=opt[1],basis=sth;else var basis=726666127;
      if(_f4_)var sth$0=_f4_[1],shrink=sth$0;else var shrink=1.;
      function _f5_(i)
       {return create_raw(cst_order,caml_call1(Core_kernel_Int[103],i))}
      var
       _f6_=caml_call2(Core_kernel_Option[39],order,_f5_),
       _f7_=caml_call1(Core_kernel_Option[29],_f6_),
       order$0=caml_call1(Core_kernel_List[27],_f7_),
       basis$0=to_string_css$2(basis),
       flex=
        create_raw
         (cst_flex,caml_call4(Core_kernel[241],_e9_,grow,shrink,basis$0));
      return concat([0,flex,[0,order$0,0]])}
    function align_self(a)
     {var value=item_alignment_to_string_css(a);
      return create_raw(cst_align_self,value)}
    function animation
     (name,
      duration,
      delay,
      direction,
      fill_mode,
      iter_count,
      timing_function,
      param)
     {var m=Core_kernel_Option[39];
      function span_to_string(s)
       {var _f3_=caml_call1(Core_kernel_Time_ns[1][90],s);
        return caml_call2(Core_kernel[241],_e__,_f3_)}
      var
       direction$0=
        caml_call2
         (m,
          direction,
          function(d)
           {var
             _f2_=
              -453122489 === d
               ?_e$_
               :-326048323 <= d
                 ?-72987685 <= d?sexp_of_css_global_values(d):_fa_
                 :-397582078 <= d?_fb_:_fc_,
             value=sanitize_sexp(_f2_);
            return create_raw(cst_animation_direction,value)}),
       fill_mode$0=
        caml_call2
         (m,
          fill_mode,
          function(f)
           {var
             _f1_=
              90990382 === f
               ?_fd_
               :813329168 <= f
                 ?870530776 <= f?_fe_:_ff_
                 :737457313 <= f?_fg_:sexp_of_css_global_values(f),
             value=sanitize_sexp(_f1_);
            return create_raw(cst_animation_fill_mode,value)}),
       _fV_=[0,direction$0,[0,fill_mode$0,0]],
       _fW_=
        [0,
         caml_call2
          (m,
           timing_function,
           function(value)
            {return create_raw(cst_animation_timing_function,value)}),
         _fV_],
       _fX_=
        [0,
         caml_call2
          (m,
           iter_count,
           function(i)
            {return create_raw
                     (cst_animation_iteration_count,
                      caml_call1(Core_kernel_Int[103],i))}),
         _fW_],
       _fY_=
        [0,
         caml_call2
          (m,
           delay,
           function(s)
            {return create_raw(cst_animation_delay,span_to_string(s))}),
         _fX_],
       _fZ_=
        [0,
         [0,create_raw(cst_animation_duration,span_to_string(duration))],
         _fY_],
       _f0_=[0,[0,create_raw(cst_animation_name,name)],_fZ_];
      return concat(caml_call1(Core_kernel_List[121],_f0_))}
    var
     Expect_test_collector$17=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _fh_(param)
     {function t(css)
       {var s=to_string_css$3(css),s2=to_string_css$3(of_string_css_exn(s));
        caml_call1(Core_kernel[29],s);
        return caml_call1(Core_kernel[29],s2)}
      var _fR_=overflow(-67548115);
      t(symbol(flex_item(0,0,0,1.,0),_fR_));
      var _fS_=caml_call4(border,0,0,-696935855,0);
      t(symbol(flex_container(_fj_,_fi_,0,0,0),_fS_));
      t(color([0,912890036,[0,100,100,100,0]]));
      var _fT_=caml_call1(Core_kernel_Percent[67],0.6);
      t
       (color
         ([0,
           802593344,
           [0,100,caml_call1(Core_kernel_Percent[67],0.75),_fT_,0]]));
      t(create$2(cst_content$0,cst$22));
      var
       _fU_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_gen_ml$0),
         677,
         17014,
         17018,
         17024];
      return caml_call1(Expect_test_collector$17[1],_fU_)}
    var
     _fk_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_css_gen_src_css_gen_ml$1),
       678,
       17025,
       17029,
       17442],
     _fn_=
      [0,
       [0,
        _fm_,
        _fl_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_gen_ml$2),
         677,
         17014,
         17018,
         17024],
        _fk_],
       0],
     _fp_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_css_gen_src_css_gen_ml$4),
       662,
       16426,
       16426,
       17443],
     _fq_=
      caml_call1(Expect_test_common_File[4][3],cst_1dc95c75fcf6cb6c36feae5456);
    caml_call9
     (Expect_test_collector$17[3],
      _fq_,
      _fp_,
      cst_css_gen_src_css_gen_ml$3,
      _fo_,
      0,
      _fn_,
      0,
      Inline_test_config,
      _fh_);
    var
     Expect_test_collector$18=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _fr_(param)
     {function p(x){return caml_call1(Core_kernel_Percent[67],x)}
      function c(s){return [0,869834347,s]}
      function t(css)
       {var _fQ_=to_string_css$3(css);return caml_call1(Core_kernel[29],_fQ_)}
      var
       _fE_=
        [0,
         912890036,
         [0,100,50,30,[0,caml_call1(Core_kernel_Percent[67],0.75)]]],
       _fF_=[0,[0,p(1.),_fE_],0],
       _fG_=c(cst_red$0),
       _fH_=[0,[0,p(0.4),_fG_],_fF_],
       _fI_=c(cst_ff0000),
       _fJ_=[0,[0,p(0.2),_fI_],_fH_],
       _fK_=c(cst_black);
      t(background_image([0,-464780630,[0,_fs_,[0,[0,p(0.),_fK_],_fJ_]]]));
      var
       _fL_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_gen_ml$5),
         708,
         17954,
         17958,
         17964];
      caml_call1(Expect_test_collector$18[1],_fL_);
      var _fM_=c(cst_red$1),_fN_=[0,[0,p(1.),_fM_],0],_fO_=c(cst_black$0);
      t(background_image([0,411117168,[0,[0,[0,p(0.),_fO_],_fN_]]]));
      var
       _fP_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_gen_ml$6),
         711,
         18195,
         18199,
         18205];
      return caml_call1(Expect_test_collector$18[1],_fP_)}
    var
     _ft_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_css_gen_src_css_gen_ml$7),
       709,
       17965,
       17969,
       18102],
     _fw_=
      [0,
       [0,
        _fv_,
        _fu_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_gen_ml$8),
         708,
         17954,
         17958,
         17964],
        _ft_],
       0],
     _fx_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_css_gen_src_css_gen_ml$9),
       711,
       18195,
       18206,
       18279],
     _fA_=
      [0,
       [0,
        _fz_,
        _fy_,
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_css_gen_src_css_gen_ml$10),
         711,
         18195,
         18199,
         18205],
        _fx_],
       _fw_],
     _fC_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_css_gen_src_css_gen_ml$12),
       691,
       17448,
       17448,
       18280],
     _fD_=
      caml_call1
       (Expect_test_common_File[4][3],cst_1dc95c75fcf6cb6c36feae5456$0);
    caml_call9
     (Expect_test_collector$18[3],
      _fD_,
      _fC_,
      cst_css_gen_src_css_gen_ml$11,
      _fB_,
      0,
      _fA_,
      0,
      Inline_test_config,
      _fr_);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_css_gen$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Css_gen$0);
    var
     Css_gen$0=
      [0,
       sexp_of_css_global_values,
       css_global_values_of_sexp$0,
       css_global_values_of_sexp,
       compare_css_global_values,
       [0,
        [0,
         t_of_sexp$1,
         sexp_of_t$1,
         bin_size_t$0,
         bin_write_t$0,
         bin_read_t$2,
         bin_read_t$1,
         bin_shape_t$0,
         bin_writer_t$0,
         bin_reader_t$0,
         bin_t$0,
         compare$0,
         create$0],
        [0,
         t_of_sexp$2,
         sexp_of_t$2,
         bin_size_t$1,
         bin_write_t$1,
         bin_read_t$4,
         bin_read_t$3,
         bin_shape_t$1,
         bin_writer_t$1,
         bin_reader_t$1,
         bin_t$1,
         compare$1,
         create$1],
        sexp_of_t$3,
        t_of_sexp$4,
        t_of_sexp$3,
        bin_size_t$2,
        bin_write_t$2,
        bin_read_t$6,
        bin_read_t$5,
        bin_shape_t$2,
        bin_writer_t$2,
        bin_reader_t$2,
        bin_t$2,
        compare$2,
        to_string_css],
       [0,
        sexp_of_t$5,
        t_of_sexp$7,
        t_of_sexp$6,
        compare$3,
        percent100,
        to_string_css$1],
       [0,sexp_of_t$6,t_of_sexp$9,t_of_sexp$8,compare$4,to_string_css$2],
       t_of_sexp$0,
       sexp_of_t$0,
       compare,
       bin_size_t,
       bin_write_t,
       bin_read_t$0,
       bin_read_t,
       bin_shape_t,
       bin_writer_t,
       bin_reader_t,
       bin_t,
       create$2,
       empty,
       _d3_,
       position,
       top,
       bottom,
       left,
       right,
       symbol,
       symbol,
       concat,
       to_string_list,
       to_string_css$3,
       of_string_css_exn,
       box_sizing,
       display,
       visibility,
       overflow,
       overflow_x,
       overflow_y,
       z_index,
       opacity,
       font_size,
       font_family,
       font_style,
       font_weight,
       font_variant,
       font,
       bold,
       color,
       background_color,
       background_image,
       text_align,
       horizontal_align,
       vertical_align,
       white_space,
       float$0,
       width,
       min_width,
       max_width,
       height,
       min_height,
       max_height,
       padding_top,
       padding_bottom,
       padding_left,
       padding_right,
       uniform_padding,
       padding,
       margin_top,
       margin_bottom,
       margin_left,
       margin_right,
       uniform_margin,
       margin,
       border_top,
       border_bottom,
       border_left,
       border_right,
       border,
       border_radius,
       border_collapse,
       border_spacing,
       outline,
       text_decoration,
       flex_container,
       flex_item,
       align_self,
       animation,
       [0,
        [0,
         t_of_sexp$0,
         sexp_of_t$0,
         compare,
         bin_size_t,
         bin_write_t,
         bin_read_t$0,
         bin_read_t,
         bin_shape_t,
         bin_writer_t,
         bin_reader_t,
         bin_t]]];
    caml_register_global(888,Css_gen$0,"Css_gen");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJjc3NfZ2VuLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
