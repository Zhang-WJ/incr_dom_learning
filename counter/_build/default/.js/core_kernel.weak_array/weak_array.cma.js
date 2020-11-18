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
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Weak_array=caml_string_of_jsbytes("Weak_array"),
     cst_weak_array=caml_string_of_jsbytes("weak_array"),
     cst_weak_array_src_weak_array_=
      caml_string_of_jsbytes("weak_array/src/weak_array.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_weak_array$0=caml_string_of_jsbytes("weak_array"),
     cst_weak_array$1=caml_string_of_jsbytes("weak_array"),
     cst_Weak_array$0=caml_string_of_jsbytes("Weak_array"),
     Stdlib_weak=global_data.Stdlib__weak,
     Core_kernel_Heap_block=global_data.Core_kernel__Heap_block,
     Core_kernel=global_data.Core_kernel,
     Core_kernel_Array=global_data.Core_kernel__Array,
     Core_kernel_Option=global_data.Core_kernel__Option,
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime;
    caml_call1(Ppx_module_timer_runtime[4],cst_Weak_array);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_weak_array);
    caml_call1(Expect_test_collector[4][1],cst_weak_array_src_weak_array_);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_weak_array$0,cst);
    function create(len){return caml_call1(Stdlib_weak[1],len)}
    function length(t){return caml_call1(Stdlib_weak[2],t)}
    var _a_=Stdlib_weak[3];
    function set_exn(t,i,x)
     {return caml_call3
              (_a_,
               t,
               i,
               caml_call2(Core_kernel_Option[39],x,Core_kernel_Heap_block[3]))}
    var _b_=Stdlib_weak[4];
    function is_some(t,i){return caml_call2(Stdlib_weak[6],t,i)}
    function is_none(t,i){return 1 - is_some(t,i)}
    function sexp_of_t(sexp_of_a,t)
     {function _i_(i){return caml_call2(_b_,t,i)}
      var
       _j_=length(t),
       _k_=caml_call2(Core_kernel_Array[37],_j_,_i_),
       _l_=caml_call1(Core_kernel_Heap_block[1],sexp_of_a),
       _m_=caml_call1(Core_kernel[438],_l_);
      return caml_call1(caml_call1(Core_kernel[272],_m_),_k_)}
    function iter(t,f)
     {var _g_=length(t) - 1 | 0,_f_=0;
      if(! (_g_ < 0))
       {var i=_f_;
        for(;;)
         {var match=caml_call2(_b_,t,i);
          if(match)
           {var v=match[1];
            caml_call1(f,caml_call1(Core_kernel_Heap_block[4],v))}
          var _h_=i + 1 | 0;
          if(_g_ !== i){var i=_h_;continue}
          break}}
      return 0}
    function iteri(t,f)
     {var _d_=length(t) - 1 | 0,_c_=0;
      if(! (_d_ < 0))
       {var i=_c_;
        for(;;)
         {var match=caml_call2(_b_,t,i);
          if(match)
           {var v=match[1];
            caml_call2(f,i,caml_call1(Core_kernel_Heap_block[4],v))}
          var _e_=i + 1 | 0;
          if(_d_ !== i){var i=_e_;continue}
          break}}
      return 0}
    function blit(src,src_pos,dst,dst_pos,len)
     {return caml_call5(Stdlib_weak[8],src,src_pos,dst,dst_pos,len)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_weak_array$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Weak_array$0);
    var
     Weak_array=
      [0,
       sexp_of_t,
       create,
       length,
       _a_,
       set_exn,
       _b_,
       is_some,
       is_none,
       iter,
       iteri,
       blit];
    runtime.caml_register_global(16,Weak_array,"Weak_array");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ3ZWFrX2FycmF5LmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
