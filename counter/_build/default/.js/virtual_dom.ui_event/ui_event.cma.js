(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Ui_event_Ui_event_intf=
      caml_string_of_jsbytes("Ui_event__Ui_event_intf"),
     cst_ui_event=caml_string_of_jsbytes("ui_event"),
     cst_ui_event_ui_event_intf_ml=
      caml_string_of_jsbytes("ui_event/ui_event_intf.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_ui_event$0=caml_string_of_jsbytes("ui_event"),
     cst_ui_event$1=caml_string_of_jsbytes("ui_event"),
     cst_Ui_event_Ui_event_intf$0=
      caml_string_of_jsbytes("Ui_event__Ui_event_intf"),
     cst_Unrecognized_variant=caml_string_of_jsbytes("Unrecognized variant"),
     cst_Ui_event_Define_Handler_C=
      caml_string_of_jsbytes("Ui_event.Define(Handler).C"),
     cst_Ui_event=caml_string_of_jsbytes("Ui_event"),
     cst_ui_event$2=caml_string_of_jsbytes("ui_event"),
     cst_ui_event_ui_event_ml=caml_string_of_jsbytes("ui_event/ui_event.ml"),
     cst$0=caml_string_of_jsbytes(""),
     cst_ui_event$3=caml_string_of_jsbytes("ui_event"),
     cst_Ui_event_Ignore=caml_string_of_jsbytes("Ui_event.Ignore"),
     cst_Ui_event_Many=caml_string_of_jsbytes("Ui_event.Many"),
     cst_ui_event$4=caml_string_of_jsbytes("ui_event"),
     cst_Ui_event$0=caml_string_of_jsbytes("Ui_event"),
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Core_kernel_List=global_data.Core_kernel__List,
     Core_kernel_Hashtbl=global_data.Core_kernel__Hashtbl,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Core_kernel=global_data.Core_kernel,
     Core_kernel_Int=global_data.Core_kernel__Int,
     Stdlib_obj=global_data.Stdlib__obj,
     Ui_event=[0];
    caml_register_global(19,Ui_event,"Ui_event__");
    caml_call1(Ppx_module_timer_runtime[4],cst_Ui_event_Ui_event_intf);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_ui_event);
    caml_call1(Expect_test_collector[4][1],cst_ui_event_ui_event_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_ui_event$0,cst);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_ui_event$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Ui_event_Ui_event_intf$0);
    var Ui_event_Ui_event_intf=[0];
    caml_register_global(24,Ui_event_Ui_event_intf,"Ui_event__Ui_event_intf");
    caml_call1(Ppx_module_timer_runtime[4],cst_Ui_event);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_ui_event$2);
    caml_call1(Expect_test_collector[4][1],cst_ui_event_ui_event_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_ui_event$3,cst$0);
    var
     Ignore=[248,cst_Ui_event_Ignore,caml_fresh_oo_id(0)],
     Many=[248,cst_Ui_event_Many,caml_fresh_oo_id(0)],
     handlers=
      caml_call3
       (Core_kernel_Hashtbl[4],
        0,
        [0,8],
        [0,Core_kernel_Int[112],Core_kernel_Int[101],Core_kernel_Int[128]]),
     id=Stdlib_obj[24],
     of_val=Stdlib_obj[22];
    function Define(Handler)
     {var
       C=[248,cst_Ui_event_Define_Handler_C,caml_fresh_oo_id(0)],
       key=caml_call1(id,C);
      function _b_(inp)
       {if(inp[1] === C){var value=inp[2];return caml_call1(Handler[2],value)}
        var _c_=caml_call1(Sexplib0_Sexp_conv[7],cst_Unrecognized_variant);
        return caml_call1(Core_kernel[238],_c_)}
      caml_call3(Core_kernel_Hashtbl[36],handlers,key,_b_);
      function inject(v){return [0,C,v]}
      return [0,C,inject]}
    function handle(t)
     {if(t === Ignore)return 0;
      if(t[1] === Many)
       {var l=t[2];return caml_call2(Core_kernel_List[9],l,handle)}
      var _a_=caml_call1(id,caml_call1(of_val,t));
      return caml_call3(Core_kernel_Hashtbl[53],handlers,_a_,t)}
    var Expert=[0,handle,handlers];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_ui_event$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Ui_event$0);
    var Ui_event$0=[0,Ignore,Many,Define,Expert];
    caml_register_global(31,Ui_event$0,"Ui_event");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ1aV9ldmVudC5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
