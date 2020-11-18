(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Weak_pointer=caml_string_of_jsbytes("Weak_pointer"),
     cst_weak_pointer=caml_string_of_jsbytes("weak_pointer"),
     cst_weak_pointer_src_weak_poin=
      caml_string_of_jsbytes("weak_pointer/src/weak_pointer.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_weak_pointer$0=caml_string_of_jsbytes("weak_pointer"),
     cst_weak_pointer$1=caml_string_of_jsbytes("weak_pointer"),
     cst_Weak_pointer$0=caml_string_of_jsbytes("Weak_pointer"),
     Weak_array=global_data.Weak_array,
     Core_kernel_Heap_block=global_data.Core_kernel__Heap_block,
     Core_kernel=global_data.Core_kernel,
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime;
    caml_call1(Ppx_module_timer_runtime[4],cst_Weak_pointer);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_weak_pointer);
    caml_call1(Expect_test_collector[4][1],cst_weak_pointer_src_weak_poin);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_weak_pointer$0,cst);
    function create(param){return caml_call1(Weak_array[2],1)}
    var index=0;
    function get(t){return caml_call2(Weak_array[6],t,index)}
    function sexp_of_t(sexp_of_a,t)
     {var _a_=get(t),_b_=caml_call1(Core_kernel_Heap_block[1],sexp_of_a);
      return caml_call2(Core_kernel[438],_b_,_a_)}
    function is_none(t){return caml_call2(Weak_array[8],t,index)}
    function is_some(t){return caml_call2(Weak_array[7],t,index)}
    function set(t,block){return caml_call3(Weak_array[4],t,index,[0,block])}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_weak_pointer$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Weak_pointer$0);
    var Weak_pointer=[0,sexp_of_t,create,get,is_some,is_none,set];
    runtime.caml_register_global(14,Weak_pointer,"Weak_pointer");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ3ZWFrX3BvaW50ZXIuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlc0NvbnRlbnQiOltdfQ==
