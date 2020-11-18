(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Uopt_value_exn=caml_string_of_jsbytes("Uopt.value_exn"),
     cst_Uopt=caml_string_of_jsbytes("Uopt"),
     cst_uopt=caml_string_of_jsbytes("uopt"),
     cst_uopt_src_uopt_ml=caml_string_of_jsbytes("uopt/src/uopt.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_uopt$0=caml_string_of_jsbytes("uopt"),
     none=caml_string_of_jsbytes("Uopt.none"),
     cst_uopt$1=caml_string_of_jsbytes("uopt"),
     cst_Uopt$0=caml_string_of_jsbytes("Uopt"),
     Core_kernel=global_data.Core_kernel,
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime;
    caml_call1(Ppx_module_timer_runtime[4],cst_Uopt);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_uopt);
    caml_call1(Expect_test_collector[4][1],cst_uopt_src_uopt_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_uopt$0,cst);
    var
     _a_=[0,caml_string_of_jsbytes("None")],
     _b_=[0,caml_string_of_jsbytes("Some")];
    function is_none(t){return caml_call2(Core_kernel[231],t,none)}
    function is_some(t){return 1 - is_none(t)}
    function invariant(invariant_a,t)
     {var _c_=is_some(t);return _c_?caml_call1(invariant_a,t):_c_}
    function sexp_of_t(sexp_of_a,t)
     {return is_none(t)?_a_:[1,[0,_b_,[0,caml_call1(sexp_of_a,t),0]]]}
    function some(a){return a}
    function value_exn(t)
     {return is_none(t)?caml_call1(Core_kernel[3],cst_Uopt_value_exn):t}
    function unsafe_value(t){return t}
    function to_option(t){return is_none(t)?0:[0,t]}
    function of_option(param){if(param){var a=param[1];return a}return none}
    var
     Optional_syntax=[0,is_none,unsafe_value],
     Optional_syntax$0=[0,Optional_syntax];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_uopt$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Uopt$0);
    var
     Uopt=
      [0,
       sexp_of_t,
       invariant,
       none,
       some,
       is_none,
       is_some,
       value_exn,
       unsafe_value,
       to_option,
       of_option,
       Optional_syntax$0];
    runtime.caml_register_global(16,Uopt,"Uopt");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ1b3B0LmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
