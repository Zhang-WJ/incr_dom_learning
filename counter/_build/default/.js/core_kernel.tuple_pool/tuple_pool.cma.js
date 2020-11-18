(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_div=runtime.caml_div,
     caml_mul=runtime.caml_mul,
     caml_register_global=runtime.caml_register_global,
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
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    function caml_call7(f,a0,a1,a2,a3,a4,a5,a6)
     {return f.length == 7
              ?f(a0,a1,a2,a3,a4,a5,a6)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6])}
    function caml_call8(f,a0,a1,a2,a3,a4,a5,a6,a7)
     {return f.length == 8
              ?f(a0,a1,a2,a3,a4,a5,a6,a7)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7])}
    function caml_call9(f,a0,a1,a2,a3,a4,a5,a6,a7,a8)
     {return f.length == 9
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8])}
    function caml_call10(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)
     {return f.length == 10
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9])}
    function caml_call11(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)
     {return f.length == 11
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10])}
    function caml_call12(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)
     {return f.length == 12
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)
              :runtime.caml_call_gen
                (f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11])}
    function caml_call13(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)
     {return f.length == 13
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)
              :runtime.caml_call_gen
                (f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12])}
    function caml_call14(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13)
     {return f.length == 14
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13)
              :runtime.caml_call_gen
                (f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13])}
    function caml_call15(f,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14)
     {return f.length == 15
              ?f(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14)
              :runtime.caml_call_gen
                (f,[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Tuple_pool_Import=caml_string_of_jsbytes("Tuple_pool__Import"),
     cst_tuple_pool=caml_string_of_jsbytes("tuple_pool"),
     cst_tuple_pool_src_import_ml=
      caml_string_of_jsbytes("tuple_pool/src/import.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_tuple_pool$0=caml_string_of_jsbytes("tuple_pool"),
     cst_tuple_pool$1=caml_string_of_jsbytes("tuple_pool"),
     cst_Tuple_pool_Import$0=caml_string_of_jsbytes("Tuple_pool__Import"),
     cst_Tuple_pool_Tuple_type_intf=
      caml_string_of_jsbytes("Tuple_pool__Tuple_type_intf"),
     cst_tuple_pool$2=caml_string_of_jsbytes("tuple_pool"),
     cst_tuple_pool_src_tuple_type_=
      caml_string_of_jsbytes("tuple_pool/src/tuple_type_intf.ml"),
     cst$0=caml_string_of_jsbytes(""),
     cst_tuple_pool$3=caml_string_of_jsbytes("tuple_pool"),
     cst_tuple_pool$4=caml_string_of_jsbytes("tuple_pool"),
     cst_Tuple_pool_Tuple_type_intf$0=
      caml_string_of_jsbytes("Tuple_pool__Tuple_type_intf"),
     cst_Tuple_pool_Tuple_type=
      caml_string_of_jsbytes("Tuple_pool__Tuple_type"),
     cst_tuple_pool$5=caml_string_of_jsbytes("tuple_pool"),
     cst_tuple_pool_src_tuple_type_$0=
      caml_string_of_jsbytes("tuple_pool/src/tuple_type.ml"),
     cst$1=caml_string_of_jsbytes(""),
     cst_tuple_pool$6=caml_string_of_jsbytes("tuple_pool"),
     t1=[0,301584533,[0,1]],
     t2=[0,301584533,[0,2]],
     t3=[0,301584533,[0,3]],
     t4=[0,301584533,[0,4]],
     t5=[0,301584533,[0,5]],
     t6=[0,301584533,[0,6]],
     t7=[0,301584533,[0,7]],
     t8=[0,301584533,[0,8]],
     t9=[0,301584533,[0,9]],
     t10=[0,301584533,[0,10]],
     t11=[0,301584533,[0,11]],
     t12=[0,301584533,[0,12]],
     t13=[0,301584533,[0,13]],
     t14=[0,301584533,[0,14]],
     cst_tuple_pool$7=caml_string_of_jsbytes("tuple_pool"),
     cst_Tuple_pool_Tuple_type$0=
      caml_string_of_jsbytes("Tuple_pool__Tuple_type"),
     cst_Tuple_pool_Tuple_pool_intf=
      caml_string_of_jsbytes("Tuple_pool__Tuple_pool_intf"),
     cst_tuple_pool$8=caml_string_of_jsbytes("tuple_pool"),
     cst_tuple_pool_src_tuple_pool_=
      caml_string_of_jsbytes("tuple_pool/src/tuple_pool_intf.ml"),
     cst$2=caml_string_of_jsbytes(""),
     cst_tuple_pool$9=caml_string_of_jsbytes("tuple_pool"),
     cst_tuple_pool$10=caml_string_of_jsbytes("tuple_pool"),
     cst_Tuple_pool_Tuple_pool_intf$0=
      caml_string_of_jsbytes("Tuple_pool__Tuple_pool_intf"),
     cst_attempt_to_use_invalid_poi=
      caml_string_of_jsbytes("attempt to use invalid pointer"),
     cst_is_valid=caml_string_of_jsbytes("is_valid"),
     cst_pointer=caml_string_of_jsbytes("pointer"),
     name$1=
      caml_string_of_jsbytes
       ("tuple_pool/src/tuple_pool.ml.Error_check.Pointer.t"),
     cst_unsafe_set=caml_string_of_jsbytes("unsafe_set"),
     cst_set=caml_string_of_jsbytes("set"),
     cst_unsafe_get=caml_string_of_jsbytes("unsafe_get"),
     cst_get=caml_string_of_jsbytes("get"),
     cst_get_tuple=caml_string_of_jsbytes("get_tuple"),
     cst_new=caml_string_of_jsbytes("new"),
     cst_free=caml_string_of_jsbytes("free"),
     cst_unsafe_free=caml_string_of_jsbytes("unsafe_free"),
     cst_is_full=caml_string_of_jsbytes("is_full"),
     cst_grow=caml_string_of_jsbytes("grow"),
     cst_capacity$0=caml_string_of_jsbytes("capacity"),
     cst_max_capacity=caml_string_of_jsbytes("max_capacity"),
     cst_create=caml_string_of_jsbytes("create"),
     cst_pointer_is_valid=caml_string_of_jsbytes("pointer_is_valid"),
     cst_pointer_of_id_exn=caml_string_of_jsbytes("pointer_of_id_exn"),
     cst_id_of_pointer=caml_string_of_jsbytes("id_of_pointer"),
     cst_Pointer_Id_to_int63=caml_string_of_jsbytes("Pointer.Id.to_int63"),
     cst_Pointer_Id_of_int63=caml_string_of_jsbytes("Pointer.Id.of_int63"),
     cst_Pointer_is_null=caml_string_of_jsbytes("Pointer.is_null"),
     cst_Pointer_phys_equal=caml_string_of_jsbytes("Pointer.phys_equal"),
     cst_Pointer_phys_compare=caml_string_of_jsbytes("Pointer.phys_compare"),
     prefix=caml_string_of_jsbytes("Pool."),
     name$0=
      caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml.Debug.Pointer.t"),
     cst_t=caml_string_of_jsbytes("t"),
     cst_tuple_pool_src_tuple_pool_$10=
      caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml:986:6"),
     cst_t$0=caml_string_of_jsbytes("t"),
     cst_Pool_free_of_invalid_point=
      caml_string_of_jsbytes("Pool.free of invalid pointer"),
     cst_Pool_malloc_of_full_pool=
      caml_string_of_jsbytes("Pool.malloc of full pool"),
     cst_Pool_grow_cannot_grow_pool=
      caml_string_of_jsbytes
       ("Pool.grow cannot grow pool; capacity already at maximum"),
     cst_Pool_create_got_invalid_ca=
      caml_string_of_jsbytes("Pool.create got invalid capacity"),
     cst_Pool_create_got_too_large_=
      caml_string_of_jsbytes("Pool.create got too large capacity"),
     cst_cycle_in_free_list=caml_string_of_jsbytes("cycle in free list"),
     cst_Pool_invariant_failed=caml_string_of_jsbytes("Pool.invariant failed"),
     cst_invalid_header_index=caml_string_of_jsbytes("invalid header index"),
     cst_pointer_not_live=caml_string_of_jsbytes("pointer not live"),
     cst_Pool_pointer_of_id_exn_got=
      caml_string_of_jsbytes("Pool.pointer_of_id_exn got invalid id"),
     cst_should_equal=caml_string_of_jsbytes("should equal"),
     cst_Pointer_of_id_exn_got_stra=
      caml_string_of_jsbytes("Pointer.of_id_exn got strange id"),
     cst_Tuple_id_of_int_got_negati=
      caml_string_of_jsbytes("Tuple_id.of_int got negative int"),
     cst_Pool_grow_got_too_small_ca=
      caml_string_of_jsbytes("Pool.grow got too small capacity"),
     cst_Tuple_pool=caml_string_of_jsbytes("Tuple_pool"),
     cst_tuple_pool$11=caml_string_of_jsbytes("tuple_pool"),
     cst_tuple_pool_src_tuple_pool_$0=
      caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),
     cst$3=caml_string_of_jsbytes(""),
     cst_tuple_pool$12=caml_string_of_jsbytes("tuple_pool"),
     cst_tuple_pool_src_tuple_pool_$1=
      caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),
     cst_t13_max_slot=caml_string_of_jsbytes(": <<t13 = max_slot>>"),
     cst_tuple_pool_src_tuple_pool_$2=
      caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),
     cst_array_index_num_bits_0=
      caml_string_of_jsbytes(": <<array_index_num_bits > 0>>"),
     cst_tuple_pool_src_tuple_pool_$3=
      caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),
     cst_masked_tuple_id_num_bits_0=
      caml_string_of_jsbytes(": <<masked_tuple_id_num_bits > 0>>"),
     cst_tuple_pool_src_tuple_pool_$4=
      caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),
     cst_array_index_num_bits_maske=
      caml_string_of_jsbytes
       (": <<(array_index_num_bits + masked_tuple_id_num_b[...]>>"),
     name=
      caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml.Pool.Pointer.t"),
     cst_tuple_pool_src_tuple_pool_$5=
      caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),
     cst_null_max_slot_0=
      caml_string_of_jsbytes(": <<((null ()) + max_slot) < 0>>"),
     cst_tuple_pool_src_tuple_pool_$6=
      caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),
     cst_invariant_ignore_null=
      caml_string_of_jsbytes(": <<invariant ignore (null ())>>"),
     cst_tuple_pool_src_tuple_pool_$7=
      caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),
     cst_List_iter_Tuple_id_example=
      caml_string_of_jsbytes
       (": <<List.iter Tuple_id.examples   ~f:(fun tuple_i[...]>>"),
     cst_tuple_pool_src_tuple_pool_$8=
      caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),
     cst_List_iter_Tuple_id_example$0=
      caml_string_of_jsbytes
       (": <<List.iter Tuple_id.examples   ~f:(fun id ->  [...]>>"),
     cst_tuple_pool_src_tuple_pool_$9=
      caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),
     cst_for_slots_per_tuple_1_to_m=
      caml_string_of_jsbytes
       (": <<for slots_per_tuple = 1 to max_slot do   asse[...]>>"),
     cst_dummy=caml_string_of_jsbytes("dummy"),
     cst_first_free=caml_string_of_jsbytes("first_free"),
     cst_next_id=caml_string_of_jsbytes("next_id"),
     cst_length=caml_string_of_jsbytes("length"),
     cst_capacity=caml_string_of_jsbytes("capacity"),
     cst_slots_per_tuple=caml_string_of_jsbytes("slots_per_tuple"),
     cst_tuple_pool$13=caml_string_of_jsbytes("tuple_pool"),
     cst_Tuple_pool$0=caml_string_of_jsbytes("Tuple_pool"),
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Core_kernel=global_data.Core_kernel,
     Typerep_lib_Typename=global_data.Typerep_lib__Typename,
     Typerep_lib_Std=global_data.Typerep_lib__Std,
     Typerep_lib_Typerep_obj=global_data.Typerep_lib__Typerep_obj,
     Typerep_lib_Make_typename=global_data.Typerep_lib__Make_typename,
     Core_kernel_Int63=global_data.Core_kernel__Int63,
     Core_kernel_List=global_data.Core_kernel__List,
     Core_kernel_Debug=global_data.Core_kernel__Debug,
     Core_kernel_Result=global_data.Core_kernel__Result,
     Bin_prot_Shape=global_data.Bin_prot__Shape,
     Core_kernel_Uniform_array=global_data.Core_kernel__Uniform_array,
     Assert_failure=global_data.Assert_failure,
     Core_kernel_Array=global_data.Core_kernel__Array,
     Base_Field=global_data.Base__Field,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Base_String=global_data.Base__String,
     Core_kernel_Error=global_data.Core_kernel__Error,
     Stdlib_sys=global_data.Stdlib__sys,
     Core_kernel_Int=global_data.Core_kernel__Int,
     Caml=global_data.Caml,
     Core_kernel_Printf=global_data.Core_kernel__Printf,
     Inline_test_config=global_data.Inline_test_config,
     Tuple_pool=[0];
    caml_register_global(196,Tuple_pool,"Tuple_pool__");
    caml_call1(Ppx_module_timer_runtime[4],cst_Tuple_pool_Import);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_tuple_pool);
    caml_call1(Expect_test_collector[4][1],cst_tuple_pool_src_import_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_tuple_pool$0,cst);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_tuple_pool$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Tuple_pool_Import$0);
    var Tuple_pool_Import=[0];
    caml_register_global(201,Tuple_pool_Import,"Tuple_pool__Import");
    caml_call1(Ppx_module_timer_runtime[4],cst_Tuple_pool_Tuple_type_intf);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_tuple_pool$2);
    caml_call1(Expect_test_collector[4][1],cst_tuple_pool_src_tuple_type_);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_tuple_pool$3,cst$0);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_tuple_pool$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Tuple_pool_Tuple_type_intf$0);
    var Tuple_pool_Tuple_type_intf=[0];
    caml_register_global
     (202,Tuple_pool_Tuple_type_intf,"Tuple_pool__Tuple_type_intf");
    caml_call1(Ppx_module_timer_runtime[4],cst_Tuple_pool_Tuple_type);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_tuple_pool$5);
    caml_call1(Expect_test_collector[4][1],cst_tuple_pool_src_tuple_type_$0);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_tuple_pool$6,cst$1);
    var
     _b_=[0,caml_string_of_jsbytes("Slots")],
     _a_=[0,caml_string_of_jsbytes("slots_per_tuple")],
     _aT_=[0,caml_string_of_jsbytes("_")],
     _aU_=
      [0,
       caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),
       1151,
       38374,
       38401],
     _aR_=[0,caml_string_of_jsbytes("pointer")],
     _aS_=[0,caml_string_of_jsbytes("is_valid")],
     _aQ_=[0,caml_string_of_jsbytes("_")],
     _aP_=[0,caml_string_of_jsbytes("_")],
     _aO_=[0,caml_string_of_jsbytes("_")],
     _aN_=[0,caml_string_of_jsbytes("_")],
     _aM_=[0,caml_string_of_jsbytes("_")],
     _aL_=[0,caml_string_of_jsbytes("_")],
     _aK_=[0,caml_string_of_jsbytes("_")],
     _aJ_=[0,caml_string_of_jsbytes("_")],
     _aI_=[0,caml_string_of_jsbytes("_")],
     _aH_=[0,caml_string_of_jsbytes("capacity")],
     _aG_=[0,caml_string_of_jsbytes("_")],
     _aF_=[0,caml_string_of_jsbytes("_")],
     _aE_=[0,caml_string_of_jsbytes("_")],
     _aD_=[0,caml_string_of_jsbytes("_")],
     _aC_=[0,caml_string_of_jsbytes("_")],
     _aB_=[0,caml_string_of_jsbytes("_")],
     _aA_=[0,caml_string_of_jsbytes("_")],
     _az_=[0,caml_string_of_jsbytes("_")],
     _ay_=[0,caml_string_of_jsbytes("_")],
     _ax_=[0,caml_string_of_jsbytes("_")],
     _aw_=[0,caml_string_of_jsbytes("_")],
     _av_=[0,caml_string_of_jsbytes(" result"),0],
     _at_=[0,caml_string_of_jsbytes("_")],
     _as_=[0,caml_string_of_jsbytes("_")],
     _au_=
      [0,
       caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),
       700,
       23088,
       23102],
     _aq_=[0,caml_string_of_jsbytes("_")],
     _ar_=
      [0,
       caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),
       657,
       21455,
       21475],
     _ap_=
      [0,
       caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),
       625,
       20519,
       20533],
     _an_=[0,caml_string_of_jsbytes("max")],
     _am_=
      [0,
       caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),
       540,
       17886,
       17908],
     _ao_=
      [0,
       caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),
       546,
       18146,
       18160],
     _aa_=[0,caml_string_of_jsbytes("_")],
     _al_=[0,caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),450,56],
     _ak_=[0,caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),453,13],
     _aj_=[0,caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),454,13],
     _ai_=[0,caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),457,13],
     _ah_=[0,caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),458,13],
     _ag_=[0,caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),466,15],
     _af_=[0,caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),468,15],
     _ae_=
      [0,
       caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),
       472,
       15393,
       15426],
     _ac_=[0,caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),479,15],
     _ad_=[0,caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),488,21],
     _ab_=
      [0,
       caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),
       493,
       16347,
       16369],
     _Z_=[0,caml_string_of_jsbytes("_")],
     _$_=
      [0,
       caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),
       433,
       13852,
       13881],
     ___=
      [0,
       caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),
       439,
       14079,
       14093],
     _T_=[0,caml_string_of_jsbytes("dummy")],
     _U_=[0,caml_string_of_jsbytes("first_free")],
     _V_=[0,caml_string_of_jsbytes("next_id")],
     _W_=[0,caml_string_of_jsbytes("length")],
     _X_=[0,caml_string_of_jsbytes("capacity")],
     _Y_=[0,caml_string_of_jsbytes("slots_per_tuple")],
     _G_=[0,caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),329,6],
     _C_=[0,caml_string_of_jsbytes("null")],
     _D_=[0,caml_string_of_jsbytes("Free")],
     _E_=[0,caml_string_of_jsbytes("Used")],
     _B_=[0,caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),307,8],
     _A_=[0,caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),308,8],
     _w_=[0,caml_string_of_jsbytes("_")],
     _x_=
      [0,caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),251,7699,7730],
     _v_=
      [0,caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),255,7827,7843],
     _s_=[0,caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),219,48],
     _p_=
      [0,
       [11,
        caml_string_of_jsbytes("<Pool.Pointer.t: 0x"),
        [4,6,[0,2,8],0,[12,62,0]]],
       caml_string_of_jsbytes("<Pool.Pointer.t: 0x%08x>")],
     _o_=
      [0,caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),145,4420,4447],
     _n_=[0,caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),136,22],
     _f_=[0,caml_string_of_jsbytes("capacity")],
     _g_=[0,caml_string_of_jsbytes("old_capacity")],
     _h_=[0,caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),29,637,653],
     _e_=[0,caml_string_of_jsbytes("")],
     _aW_=[0,caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),104,6],
     _aX_=[0,caml_string_of_jsbytes("tuple_pool/src/tuple_pool.ml"),107,6];
    function sexp_of_t(param)
     {var
       v0=param[2],
       v_slots_per_tuple=v0[1],
       arg=caml_call1(Core_kernel[340],v_slots_per_tuple),
       bnds=[0,[1,[0,_a_,[0,arg,0]]],0];
      return [1,[0,_b_,[0,[1,bnds],0]]]}
    function sexp_of_t$0(of_tuple,of_variant,v){return sexp_of_t(v)}
    function slots_per_tuple(param){var match=param[2],n=match[1];return n}
    function sexp_of_t1(of_a0,v){return sexp_of_t(v)}
    function sexp_of_t2(of_a0,of_a1,v){return sexp_of_t(v)}
    function sexp_of_t3(of_a0,of_a1,of_a2,v){return sexp_of_t(v)}
    function sexp_of_t4(of_a0,of_a1,of_a2,of_a3,v){return sexp_of_t(v)}
    function sexp_of_t5(of_a0,of_a1,of_a2,of_a3,of_a4,v){return sexp_of_t(v)}
    function sexp_of_t6(of_a0,of_a1,of_a2,of_a3,of_a4,of_a5,v)
     {return sexp_of_t(v)}
    function sexp_of_t7(of_a0,of_a1,of_a2,of_a3,of_a4,of_a5,of_a6,v)
     {return sexp_of_t(v)}
    function sexp_of_t8(of_a0,of_a1,of_a2,of_a3,of_a4,of_a5,of_a6,of_a7,v)
     {return sexp_of_t(v)}
    function sexp_of_t9
     (of_a0,of_a1,of_a2,of_a3,of_a4,of_a5,of_a6,of_a7,of_a8,v)
     {return sexp_of_t(v)}
    function sexp_of_t10
     (of_a0,of_a1,of_a2,of_a3,of_a4,of_a5,of_a6,of_a7,of_a8,of_a9,v)
     {return sexp_of_t(v)}
    function sexp_of_t11
     (of_a0,of_a1,of_a2,of_a3,of_a4,of_a5,of_a6,of_a7,of_a8,of_a9,of_a10,v)
     {return sexp_of_t(v)}
    function sexp_of_t12
     (of_a0,
      of_a1,
      of_a2,
      of_a3,
      of_a4,
      of_a5,
      of_a6,
      of_a7,
      of_a8,
      of_a9,
      of_a10,
      of_a11,
      v)
     {return sexp_of_t(v)}
    function sexp_of_t13
     (of_a0,
      of_a1,
      of_a2,
      of_a3,
      of_a4,
      of_a5,
      of_a6,
      of_a7,
      of_a8,
      of_a9,
      of_a10,
      of_a11,
      of_a12,
      v)
     {return sexp_of_t(v)}
    function sexp_of_t14
     (of_a0,
      of_a1,
      of_a2,
      of_a3,
      of_a4,
      of_a5,
      of_a6,
      of_a7,
      of_a8,
      of_a9,
      of_a10,
      of_a11,
      of_a12,
      of_a13,
      v)
     {return sexp_of_t(v)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_tuple_pool$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Tuple_pool_Tuple_type$0);
    var
     _c_=
      [0,
       sexp_of_t$0,
       slots_per_tuple,
       sexp_of_t1,
       sexp_of_t2,
       sexp_of_t3,
       sexp_of_t4,
       sexp_of_t5,
       sexp_of_t6,
       sexp_of_t7,
       sexp_of_t8,
       sexp_of_t9,
       sexp_of_t10,
       sexp_of_t11,
       sexp_of_t12,
       sexp_of_t13,
       sexp_of_t14,
       t1,
       t2,
       t3,
       t4,
       t5,
       t6,
       t7,
       t8,
       t9,
       t10,
       t11,
       t12,
       t13,
       t14],
     Tuple_pool_Tuple_type=[0,_c_];
    caml_register_global(204,Tuple_pool_Tuple_type,"Tuple_pool__Tuple_type");
    caml_call1(Ppx_module_timer_runtime[4],cst_Tuple_pool_Tuple_pool_intf);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_tuple_pool$8);
    caml_call1(Expect_test_collector[4][1],cst_tuple_pool_src_tuple_pool_);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_tuple_pool$9,cst$2);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_tuple_pool$10);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Tuple_pool_Tuple_pool_intf$0);
    var Tuple_pool_Tuple_pool_intf=[0];
    caml_register_global
     (205,Tuple_pool_Tuple_pool_intf,"Tuple_pool__Tuple_pool_intf");
    caml_call1(Ppx_module_timer_runtime[4],cst_Tuple_pool);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_tuple_pool$11);
    caml_call1(Expect_test_collector[4][1],cst_tuple_pool_src_tuple_pool_$0);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_tuple_pool$12,cst$3);
    var
     _d_=Core_kernel_Error[38],
     arch_sixtyfour=caml_call2(Core_kernel[87],Stdlib_sys[9],64),
     num_bits=Core_kernel_Int[62],
     max_value=Caml[18],
     to_string=Core_kernel[19],
     sprintf=Core_kernel_Printf[2];
    function concat(l){return caml_call2(Base_String[50],_e_,l)}
    var max_slot=14;
    function sexp_of_t$1(of_slots,of_a,v)
     {return caml_call1(Core_kernel[340],v)}
    function equal(t1,t2){return caml_call2(Core_kernel[87],t1,t2)}
    var
     t0=1,
     t1$0=2,
     t2$0=3,
     t3$0=4,
     t4$0=5,
     t5$0=6,
     t6$0=7,
     t7$0=8,
     t8$0=9,
     t9$0=10,
     t10$0=11,
     t11$0=12,
     t12$0=13,
     t13$0=14;
    function _i_(param){return caml_call2(Core_kernel[87],t13$0,max_slot)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_t13_max_slot,
      0,
      cst_tuple_pool_src_tuple_pool_$1,
      87,
      4,
      31,
      _i_);
    var
     Slot=
      [0,
       sexp_of_t$1,
       equal,
       t0,
       t1$0,
       t2$0,
       t3$0,
       t4$0,
       t5$0,
       t6$0,
       t7$0,
       t8$0,
       t9$0,
       t10$0,
       t11$0,
       t12$0,
       t13$0];
    if(arch_sixtyfour)
     {if(! caml_call2(Core_kernel[87],num_bits,63))
       throw [0,Assert_failure,_aW_];
      var _j_=30}
    else
     {if
       (!
        caml_call2(Core_kernel[87],num_bits,31)
        &&
        !
        caml_call2(Core_kernel[87],num_bits,32))
       throw [0,Assert_failure,_aX_];
      var _j_=22}
    var masked_tuple_id_num_bits=num_bits - _j_ | 0;
    function _k_(param){return caml_call2(Core_kernel[88],_j_,0)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_array_index_num_bits_0,
      0,
      cst_tuple_pool_src_tuple_pool_$2,
      113,
      2,
      39,
      _k_);
    function _l_(param)
     {return caml_call2(Core_kernel[88],masked_tuple_id_num_bits,0)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_masked_tuple_id_num_bits_0,
      0,
      cst_tuple_pool_src_tuple_pool_$3,
      114,
      2,
      43,
      _l_);
    function _m_(param)
     {return caml_call2
              (Core_kernel[86],_j_ + masked_tuple_id_num_bits | 0,num_bits)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_array_index_num_bits_maske,
      0,
      cst_tuple_pool_src_tuple_pool_$4,
      115,
      2,
      78,
      _m_);
    var max_array_length=1 << _j_,sexp_of_t$2=Core_kernel[340];
    function invariant(t)
     {if(caml_call2(Core_kernel[85],t,0))return 0;
      throw [0,Assert_failure,_n_]}
    var init=0;
    function of_int(i)
     {if(caml_call2(Core_kernel[89],i,0))
       caml_call5(_d_,0,_o_,cst_Tuple_id_of_int_got_negati,i,Core_kernel[340]);
      return i}
    var
     examples=[0,0,[0,1,[0,536870911,[0,max_value,0]]]],
     tuple_id_mask=(1 << masked_tuple_id_num_bits) - 1 | 0,
     Typename_of_t=caml_call1(Typerep_lib_Make_typename[2],[0,name]),
     typename_of_t=Typename_of_t[2];
    function typerep_of_t(of_slots)
     {var name_of_t=caml_call1(Typename_of_t[1],of_slots);
      return [9,[0,name_of_t,[0,Core_kernel[343]]]]}
    function sexp_of_t$3(param,t){return [0,caml_call2(sprintf,_p_,t)]}
    function phys_equal(t1,t2){return t1 === t2?1:0}
    var _q_=Core_kernel[92];
    function null$0(param){return -15}
    function is_null(t){return t === -15?1:0}
    function _r_(param){return caml_call2(Core_kernel[89],-1,0)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[4],
      Inline_test_config,
      cst_null_max_slot_0,
      0,
      cst_tuple_pool_src_tuple_pool_$5,
      209,
      4,
      39,
      _r_);
    function create(header_index,tuple_id)
     {return header_index | (tuple_id & tuple_id_mask) << _j_}
    var header_index_mask=(1 << _j_) - 1 | 0;
    function masked_tuple_id(t){return t >>> _j_ | 0}
    function header_index(t){return t & header_index_mask}
    function invariant$0(param,t)
     {var _da_=1 - (t === -15?1:0);
      if(_da_)
       {var _db_=header_index(t);
        if(caml_call2(Core_kernel[88],_db_,0))return 0;
        throw [0,Assert_failure,_s_]}
      return _da_}
    function _t_(param)
     {var _c__=-15;return invariant$0(function(_c$_){return 0},_c__)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[5],
      Inline_test_config,
      cst_invariant_ignore_null,
      0,
      cst_tuple_pool_src_tuple_pool_$6,
      221,
      4,
      48,
      _t_);
    function _u_(param)
     {function _c7_(tuple_id)
       {var _c8_=create(1,tuple_id);
        return invariant$0(function(_c9_){return 0},_c8_)}
      return caml_call2(Core_kernel_List[9],examples,_c7_)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[5],
      Inline_test_config,
      cst_List_iter_Tuple_id_example,
      0,
      cst_tuple_pool_src_tuple_pool_$7,
      223,
      4,
      135,
      _u_);
    function slot_index(t,slot){return header_index(t) + slot | 0}
    function first_slot_index(t){return slot_index(t,Slot[3])}
    var
     to_int_exn=Core_kernel_Int63[5],
     of_int$0=Core_kernel_Int63[73],
     bin_size_t=Core_kernel_Int63[94],
     bin_write_t=Core_kernel_Int63[95],
     bin_read_t=Core_kernel_Int63[96],
     bin_read_t$0=Core_kernel_Int63[97],
     bin_shape_t=Core_kernel_Int63[98],
     bin_writer_t=Core_kernel_Int63[99],
     bin_reader_t=Core_kernel_Int63[100],
     bin_t=Core_kernel_Int63[101],
     t_of_sexp=Core_kernel_Int63[102],
     sexp_of_t$4=Core_kernel_Int63[103];
    function to_int63(t){return t}
    function of_int63(i){return i}
    var
     _y_=
      [0,
       bin_size_t,
       bin_write_t,
       bin_read_t,
       bin_read_t$0,
       bin_shape_t,
       bin_writer_t,
       bin_reader_t,
       bin_t,
       t_of_sexp,
       sexp_of_t$4,
       to_int63,
       of_int63],
     null$1=0;
    function is_null$0(t){return caml_call2(Core_kernel[87],t,0)}
    function is_free(t){return caml_call2(Core_kernel[88],t,0)}
    function is_used(t){return caml_call2(Core_kernel[89],t,0)}
    function tuple_id(t){return of_int(- (t + 1 | 0) | 0)}
    function _z_(param)
     {function _c6_(id)
       {var t=-1 - id | 0;
        if(is_used(t))
         {var t1=tuple_id(t);
          if(caml_call2(Core_kernel[87],t1,id))return 0;
          throw [0,Assert_failure,_A_]}
        throw [0,Assert_failure,_B_]}
      return caml_call2(Core_kernel_List[9],examples,_c6_)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[5],
      Inline_test_config,
      cst_List_iter_Tuple_id_example$0,
      0,
      cst_tuple_pool_src_tuple_pool_$8,
      304,
      4,
      173,
      _z_);
    var metadata_index=0,start_of_tuples_index=1;
    function max_capacity(slots_per_tuple)
     {return caml_div(max_array_length - 1 | 0,1 + slots_per_tuple | 0)}
    function _F_(param)
     {var slots_per_tuple=1;
      for(;;)
       {var
         _c4_=
          1
          +
          caml_mul(1 + slots_per_tuple | 0,max_capacity(slots_per_tuple))
          |
          0;
        if(caml_call2(Core_kernel[86],_c4_,max_array_length))
         {var _c5_=slots_per_tuple + 1 | 0;
          if(14 !== slots_per_tuple){var slots_per_tuple=_c5_;continue}
          return 0}
        throw [0,Assert_failure,_G_]}}
    caml_call8
     (Ppx_inline_test_lib_Runtime[5],
      Inline_test_config,
      cst_for_slots_per_tuple_1_to_m,
      0,
      cst_tuple_pool_src_tuple_pool_$9,
      327,
      2,
      203,
      _F_);
    function dummy(r){return r[6]}
    function first_free(r){return r[5]}
    function set_first_free(r,v){r[5] = v;return 0}
    function next_id(r){return r[4]}
    function set_next_id(r,v){r[4] = v;return 0}
    function length(r){return r[3]}
    function set_length(r,v){r[3] = v;return 0}
    function capacity(r){return r[2]}
    function slots_per_tuple$0(r){return r[1]}
    function _H_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v]}
    var _I_=0,dummy$0=[0,function(param){return 0},cst_dummy,_I_,dummy,_H_];
    function _J_(r,v){return [0,r[1],r[2],r[3],r[4],v,r[6]]}
    var
     _K_=[0,set_first_free],
     first_free$0=
      [0,function(param){return 0},cst_first_free,_K_,first_free,_J_];
    function _L_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6]]}
    var
     _M_=[0,set_next_id],
     next_id$0=[0,function(param){return 0},cst_next_id,_M_,next_id,_L_];
    function _N_(r,v){return [0,r[1],r[2],v,r[4],r[5],r[6]]}
    var
     _O_=[0,set_length],
     length$0=[0,function(param){return 0},cst_length,_O_,length,_N_];
    function _P_(r,v){return [0,r[1],v,r[3],r[4],r[5],r[6]]}
    var
     _Q_=0,
     capacity$0=[0,function(param){return 0},cst_capacity,_Q_,capacity,_P_];
    function _R_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6]]}
    var
     _S_=0,
     slots_per_tuple$1=
      [0,
       function(param){return 0},
       cst_slots_per_tuple,
       _S_,
       slots_per_tuple$0,
       _R_];
    function iter
     (slots_per_tuple_fun,
      capacity_fun,
      length_fun,
      next_id_fun,
      first_free_fun,
      dummy_fun)
     {caml_call1(slots_per_tuple_fun,slots_per_tuple$1);
      caml_call1(capacity_fun,capacity$0);
      caml_call1(length_fun,length$0);
      caml_call1(next_id_fun,next_id$0);
      caml_call1(first_free_fun,first_free$0);
      return caml_call1(dummy_fun,dummy$0)}
    function array_indices_per_tuple(t){return 1 + t[1] | 0}
    function array_length(t)
     {var _c3_=array_indices_per_tuple(t);return 1 + caml_mul(t[2],_c3_) | 0}
    function tuple_num_to_header_index(t,tuple_num)
     {return 1 + caml_mul(tuple_num,array_indices_per_tuple(t)) | 0}
    function tuple_num_to_first_slot_index(t,tuple_num)
     {return tuple_num_to_header_index(t,tuple_num) + 1 | 0}
    function metadata(t)
     {return caml_call2(Core_kernel_Uniform_array[18],t,metadata_index)}
    function length$1(t){return metadata(t)[3]}
    function sexp_of_t$5(sexp_of_ty,t)
     {var
       param=metadata(t),
       v_capacity=param[2],
       v_slots_per_tuple=param[1],
       v_length=param[3],
       v_next_id=param[4],
       v_first_free=param[5],
       v_dummy=param[6],
       arg=caml_call2(Core_kernel[438],Sexplib0_Sexp_conv[23],v_dummy),
       bnds=[0,[1,[0,_T_,[0,arg,0]]],0],
       arg$0=
        is_null$0(v_first_free)
         ?_C_
         :is_free(v_first_free)
           ?[1,[0,_D_,[0,[0,caml_call1(to_string,v_first_free)],0]]]
           :[1,[0,_E_,[0,[0,caml_call1(to_string,tuple_id(v_first_free))],0]]],
       bnds$0=[0,[1,[0,_U_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(sexp_of_t$2,v_next_id),
       bnds$1=[0,[1,[0,_V_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Core_kernel[340],v_length),
       bnds$2=[0,[1,[0,_W_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call1(Core_kernel[340],v_capacity),
       bnds$3=[0,[1,[0,_X_,[0,arg$3,0]]],bnds$2],
       arg$4=caml_call1(Core_kernel[340],v_slots_per_tuple),
       bnds$4=[0,[1,[0,_Y_,[0,arg$4,0]]],bnds$3];
      return [1,bnds$4]}
    function unsafe_header(t,header_index)
     {return caml_call2(Core_kernel_Uniform_array[18],t,header_index)}
    function unsafe_set_header(t,header_index,header)
     {return caml_call3(Core_kernel_Uniform_array[39],t,header_index,header)}
    function header_index_is_in_bounds(t,header_index)
     {var _c1_=caml_call2(Core_kernel[85],header_index,start_of_tuples_index);
      if(_c1_)
       {var _c2_=caml_call1(Core_kernel_Uniform_array[16],t);
        return caml_call2(Core_kernel[89],header_index,_c2_)}
      return _c1_}
    function unsafe_pointer_is_live(t,pointer)
     {var
       header_index$0=header_index(pointer),
       header=unsafe_header(t,header_index$0),
       _cY_=is_used(header);
      if(_cY_)
       {var
         _cZ_=masked_tuple_id(pointer),
         _c0_=tuple_id(header) & tuple_id_mask;
        return caml_call2(Core_kernel[87],_c0_,_cZ_)}
      return _cY_}
    function pointer_is_valid(t,pointer)
     {var _cX_=header_index_is_in_bounds(t,header_index(pointer));
      return _cX_?unsafe_pointer_is_live(t,pointer):_cX_}
    function id_of_pointer(t,pointer){return caml_call1(of_int$0,pointer)}
    function is_valid_header_index(t,header_index)
     {var
       metadata$0=metadata(t),
       _cV_=header_index_is_in_bounds(t,header_index);
      if(_cV_)
       {var
         _cW_=
          runtime.caml_mod
           (header_index - 1 | 0,array_indices_per_tuple(metadata$0));
        return caml_call2(Core_kernel[87],0,_cW_)}
      return _cV_}
    function pointer_of_id_exn(t$2,id)
     {try
       {try
         {var t=caml_call1(to_int_exn,id);
          if(t === -15)
           var t$0=t;
          else
           {var
             _cS_=of_int(masked_tuple_id(t)),
             should_equal=create(header_index(t),_cS_);
            if(t === should_equal)
             var t$1=t;
            else
             var
              _cT_=function(param){return _w_},
              t$1=
               caml_call5
                (_d_,
                 0,
                 _x_,
                 cst_should_equal,
                 should_equal,
                 function(_cU_){return sexp_of_t$3(_cT_,_cU_)});
            var t$0=t$1}
          var pointer=t$0}
        catch(exn)
         {exn = caml_wrap_exception(exn);
          var
           pointer=
            caml_call5
             (_d_,
              0,
              _v_,
              cst_Pointer_of_id_exn_got_stra,
              [0,id,exn],
              function(param)
               {var
                 v1=param[2],
                 v0=param[1],
                 v0$0=caml_call1(sexp_of_t$4,v0),
                 v1$0=caml_call1(Core_kernel[521],v1);
                return [1,[0,v0$0,[0,v1$0,0]]]})}
        if(1 - (pointer === -15?1:0))
         {var header_index$0=header_index(pointer);
          if(1 - is_valid_header_index(t$2,header_index$0))
           caml_call5
            (_d_,
             0,
             _$_,
             cst_invalid_header_index,
             header_index$0,
             Core_kernel[340]);
          if(1 - unsafe_pointer_is_live(t$2,pointer))
           caml_call1(Core_kernel[3],cst_pointer_not_live)}
        return pointer}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        return caml_call5
                (_d_,
                 0,
                 ___,
                 cst_Pool_pointer_of_id_exn_got,
                 [0,id,t$2,exn],
                 function(param)
                  {var
                    v2=param[3],
                    v1=param[2],
                    v0=param[1],
                    v0$0=caml_call1(_y_[10],v0),
                    v1$0=sexp_of_t$5(function(param){return _Z_},v1),
                    v2$0=caml_call1(Core_kernel[521],v2);
                   return [1,[0,v0$0,[0,v1$0,[0,v2$0,0]]]]})}}
    function invariant$1(invariant_a,t)
     {try
       {var
         t$0=metadata(t),
         check=
          function(f,field)
           {return caml_call1(f,caml_call2(Base_Field[3],field,t$0))},
         _cr_=
          function(param)
           {if(param)
             {var
               dummy=param[1],
               _cK_=t$0[1],
               _cL_=caml_call1(Core_kernel_Uniform_array[16],dummy);
              if(caml_call2(Core_kernel[87],_cL_,_cK_))return 0;
              throw [0,Assert_failure,_ac_]}
            var _cN_=t$0[2] - 1 | 0,_cM_=0;
            if(! (_cN_ < 0))
             {var tuple_num=_cM_;
              for(;;)
               {var
                 header_index=tuple_num_to_header_index(t$0,tuple_num),
                 header=unsafe_header(t,header_index);
                if(is_free(header))
                 {var
                   first_slot=tuple_num_to_first_slot_index(t$0,tuple_num),
                   _cP_=t$0[1] - 1 | 0,
                   _cO_=0;
                  if(! (_cP_ < 0))
                   {var slot=_cO_;
                    for(;;)
                     {if
                       (typeof
                        caml_call2
                         (Core_kernel_Uniform_array[17],t,first_slot + slot | 0)
                        !==
                        "number")
                       throw [0,Assert_failure,_ad_];
                      var _cR_=slot + 1 | 0;
                      if(_cP_ !== slot){var slot=_cR_;continue}
                      break}}}
                var _cQ_=tuple_num + 1 | 0;
                if(_cN_ !== tuple_num){var tuple_num=_cQ_;continue}
                break}}
            return 0},
         _cs_=function(_cJ_){return check(_cr_,_cJ_)},
         _ct_=
          function(first_free)
           {var
             free=caml_call2(Core_kernel_Array[36],t$0[2],0),
             r=[0,first_free];
            for(;;)
             {if(is_null$0(r[1]))return 0;
              var header=r[1];
              if(is_free(header))
               {if(is_valid_header_index(t,header))
                 {var
                   tuple_num=
                    caml_div(header - 1 | 0,array_indices_per_tuple(t$0));
                  if(caml_check_bound(free,tuple_num)[1 + tuple_num])
                   caml_call5
                    (_d_,
                     0,
                     _ae_,
                     cst_cycle_in_free_list,
                     tuple_num,
                     Core_kernel[340]);
                  caml_check_bound(free,tuple_num)[1 + tuple_num] = 1;
                  r[1] = unsafe_header(t,header);
                  continue}
                throw [0,Assert_failure,_af_]}
              throw [0,Assert_failure,_ag_]}},
         _cu_=function(_cI_){return check(_ct_,_cI_)},
         _cv_=function(_cH_){return check(invariant,_cH_)},
         _cw_=
          function(length)
           {if(caml_call2(Core_kernel[85],length,0))
             {if(caml_call2(Core_kernel[86],length,t$0[2]))return 0;
              throw [0,Assert_failure,_ah_]}
            throw [0,Assert_failure,_ai_]},
         _cx_=function(_cG_){return check(_cw_,_cG_)},
         _cy_=
          function(capacity)
           {if(caml_call2(Core_kernel[85],capacity,0))
             {var
               _cE_=array_length(t$0),
               _cF_=caml_call1(Core_kernel_Uniform_array[16],t);
              if(caml_call2(Core_kernel[87],_cF_,_cE_))return 0;
              throw [0,Assert_failure,_aj_]}
            throw [0,Assert_failure,_ak_]},
         _cz_=function(_cD_){return check(_cy_,_cD_)},
         _cA_=
          function(slots_per_tuple)
           {if(caml_call2(Core_kernel[88],slots_per_tuple,0))return 0;
            throw [0,Assert_failure,_al_]},
         _cB_=
          iter
           (function(_cC_){return check(_cA_,_cC_)},_cz_,_cx_,_cv_,_cu_,_cs_);
        return _cB_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        return caml_call5
                (_d_,
                 0,
                 _ab_,
                 cst_Pool_invariant_failed,
                 [0,exn,t],
                 function(param)
                  {var
                    v1=param[2],
                    v0=param[1],
                    v0$0=caml_call1(Core_kernel[521],v0),
                    v1$0=sexp_of_t$5(function(param){return _aa_},v1);
                   return [1,[0,v0$0,[0,v1$0,0]]]})}}
    function capacity$1(t){return metadata(t)[2]}
    function is_full(t)
     {var t$0=metadata(t);return caml_call2(Core_kernel[87],t$0[3],t$0[2])}
    function unsafe_add_to_free_list(t,metadata,header_index)
     {unsafe_set_header(t,header_index,metadata[5]);
      metadata[5] = header_index;
      return 0}
    function set_metadata(t,metadata)
     {return caml_call3
              (Core_kernel_Uniform_array[19],t,metadata_index,metadata)}
    function create_array(metadata)
     {var
       _cq_=array_length(metadata),
       t=caml_call1(Core_kernel_Uniform_array[37],_cq_);
      set_metadata(t,metadata);
      return t}
    function unsafe_init_range(t,metadata,lo,hi)
     {var _cj_=metadata[6];
      if(_cj_)
       {var dummy=_cj_[1],_ck_=hi - 1 | 0;
        if(! (_ck_ < lo))
         {var tuple_num$0=lo;
          for(;;)
           {var
             _cn_=metadata[1],
             _co_=tuple_num_to_first_slot_index(metadata,tuple_num$0);
            caml_call5(Core_kernel_Uniform_array[30],dummy,0,t,_co_,_cn_);
            var _cp_=tuple_num$0 + 1 | 0;
            if(_ck_ !== tuple_num$0){var tuple_num$0=_cp_;continue}
            break}}}
      var _cl_=hi - 1 | 0;
      if(! (_cl_ < lo))
       {var tuple_num=_cl_;
        for(;;)
         {unsafe_add_to_free_list
           (t,metadata,tuple_num_to_header_index(metadata,tuple_num));
          var _cm_=tuple_num - 1 | 0;
          if(lo !== tuple_num){var tuple_num=_cm_;continue}
          break}}
      return 0}
    function create_with_dummy(slots,capacity,dummy)
     {if(caml_call2(Core_kernel[89],capacity,0))
       caml_call5
        (_d_,0,_am_,cst_Pool_create_got_invalid_ca,capacity,Core_kernel[340]);
      var
       slots_per_tuple=caml_call1(_c_[2],slots),
       max_capacity$0=max_capacity(slots_per_tuple);
      if(caml_call2(Core_kernel[88],capacity,max_capacity$0))
       caml_call5
        (_d_,
         0,
         _ao_,
         cst_Pool_create_got_too_large_,
         [0,capacity,[0,5442212,max_capacity$0]],
         function(param)
          {var
            v1=param[2],
            v0=param[1],
            v0$0=caml_call1(Core_kernel[340],v0),
            v0$1=v1[2],
            v1$0=[1,[0,_an_,[0,caml_call1(Core_kernel[340],v0$1),0]]];
           return [1,[0,v0$0,[0,v1$0,0]]]});
      var
       metadata=[0,slots_per_tuple,capacity,0,init,null$1,dummy],
       t=create_array(metadata);
      unsafe_init_range(t,metadata,0,capacity);
      return t}
    function create$0(slots,capacity,dummy)
     {var
       _ci_=caml_call1(_c_[2],slots),
       dummy$0=
        caml_call2(Core_kernel[87],_ci_,1)
         ?caml_call1(Core_kernel_Uniform_array[14],dummy)
         :dummy;
      return create_with_dummy(slots,capacity,[0,dummy$0])}
    function grow(capacity$0,t)
     {var
       match=metadata(t),
       old_capacity=match[2],
       slots_per_tuple=match[1],
       length=match[3],
       next_id=match[4],
       dummy$0=match[6];
      if(capacity$0)
       {var capacity=capacity$0[1];
        if(caml_call2(Core_kernel[86],capacity,old_capacity))
         caml_call5
          (_d_,
           0,
           _h_,
           cst_Pool_grow_got_too_small_ca,
           [0,[0,-1011154630,capacity],[0,138253074,old_capacity]],
           function(param)
            {var
              v1=param[2],
              v0=param[1],
              v0$0=v0[2],
              v0$1=[1,[0,_f_,[0,caml_call1(Core_kernel[340],v0$0),0]]],
              v0$2=v1[2],
              v1$0=[1,[0,_g_,[0,caml_call1(Core_kernel[340],v0$2),0]]];
             return [1,[0,v0$1,[0,v1$0,0]]]});
        var _cd_=capacity}
      else
       var
        _cd_=
         caml_call2(Core_kernel[87],old_capacity,0)?1:old_capacity * 2 | 0;
      var
       _ce_=max_capacity(slots_per_tuple),
       capacity$1=caml_call2(Core_kernel[93],_ce_,_cd_);
      if(caml_call2(Core_kernel[87],capacity$1,old_capacity))
       caml_call5
        (_d_,
         0,
         _ap_,
         cst_Pool_grow_cannot_grow_pool,
         capacity$1,
         Core_kernel[340]);
      var
       metadata$2=[0,slots_per_tuple,capacity$1,length,next_id,null$1,dummy$0],
       t$0=create_array(metadata$2),
       _cf_=caml_mul(old_capacity,array_indices_per_tuple(metadata$2));
      caml_call5
       (Core_kernel_Uniform_array[30],
        t,
        start_of_tuples_index,
        t$0,
        start_of_tuples_index,
        _cf_);
      var metadata$0=metadata(t),_b9_=metadata$0[6];
      if(_b9_)
       {var dummy=_b9_[1],_b$_=metadata$0[2] - 1 | 0,_b__=0;
        if(! (_b$_ < 0))
         {var tuple_num=_b__;
          for(;;)
           {var header_index=tuple_num_to_header_index(metadata$0,tuple_num);
            unsafe_set_header(t,header_index,null$1);
            caml_call5
             (Core_kernel_Uniform_array[30],
              dummy,
              0,
              t,
              header_index + 1 | 0,
              metadata$0[1]);
            var _ca_=tuple_num + 1 | 0;
            if(_b$_ !== tuple_num){var tuple_num=_ca_;continue}
            break}}}
      else
       {var _cb_=caml_call1(Core_kernel_Uniform_array[16],t) - 1 | 0;
        if(! (_cb_ < 1))
         {var i=start_of_tuples_index;
          for(;;)
           {caml_call3(Core_kernel_Uniform_array[20],t,i,0);
            var _cc_=i + 1 | 0;
            if(_cb_ !== i){var i=_cc_;continue}
            break}}}
      var metadata$1=[0,metadata$0[1],0,0,metadata$0[4],null$1,metadata$0[6]];
      set_metadata(t,metadata$1);
      unsafe_init_range(t$0,metadata$2,old_capacity,capacity$1);
      var _cg_=old_capacity - 1 | 0;
      if(! (_cg_ < 0))
       {var tuple_num$0=_cg_;
        for(;;)
         {var
           header_index$0=tuple_num_to_header_index(metadata$2,tuple_num$0),
           header=unsafe_header(t$0,header_index$0);
          if(1 - is_used(header))
           unsafe_add_to_free_list(t$0,metadata$2,header_index$0);
          var _ch_=tuple_num$0 - 1 | 0;
          if(0 !== tuple_num$0){var tuple_num$0=_ch_;continue}
          break}}
      return t$0}
    function malloc(t)
     {var metadata$0=metadata(t),first_free=metadata$0[5];
      if(is_null$0(first_free))
       {var _b6_=function(param){return _aq_};
        caml_call5
         (_d_,
          0,
          _ar_,
          cst_Pool_malloc_of_full_pool,
          t,
          function(_b8_){return sexp_of_t$5(_b6_,_b8_)})}
      metadata$0[5] = unsafe_header(t,first_free);
      metadata$0[3] = metadata$0[3] + 1 | 0;
      var tuple_id=metadata$0[4];
      unsafe_set_header(t,first_free,-1 - tuple_id | 0);
      var
       _b7_=
        arch_sixtyfour
         ?tuple_id + 1 | 0
         :caml_call2(Core_kernel[87],tuple_id,max_value)?0:tuple_id + 1 | 0;
      metadata$0[4] = _b7_;
      return create(first_free,tuple_id)}
    function unsafe_free(t,pointer)
     {var metadata$0=metadata(t);
      metadata$0[3] = metadata$0[3] - 1 | 0;
      unsafe_add_to_free_list(t,metadata$0,header_index(pointer));
      var _b0_=metadata$0[6];
      if(_b0_)
       {var dummy=_b0_[1],_b1_=metadata$0[1],_b2_=first_slot_index(pointer);
        return caml_call5(Core_kernel_Uniform_array[32],dummy,0,t,_b2_,_b1_)}
      var pos=first_slot_index(pointer),_b4_=metadata$0[1] - 1 | 0,_b3_=0;
      if(! (_b4_ < 0))
       {var i=_b3_;
        for(;;)
         {caml_call2(Core_kernel_Uniform_array[41],t,pos + i | 0);
          var _b5_=i + 1 | 0;
          if(_b4_ !== i){var i=_b5_;continue}
          break}}
      return 0}
    function free(t,pointer)
     {if(1 - pointer_is_valid(t,pointer))
       caml_call5
        (_d_,
         0,
         _au_,
         cst_Pool_free_of_invalid_point,
         [0,pointer,t],
         function(param)
          {var
            v1=param[2],
            v0=param[1],
            v0$0=sexp_of_t$3(function(param){return _as_},v0),
            v1$0=sexp_of_t$5(function(param){return _at_},v1);
           return [1,[0,v0$0,[0,v1$0,0]]]});
      return unsafe_free(t,pointer)}
    function new1(t,a0)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      return pointer}
    function new2(t,a0,a1)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      return pointer}
    function new3(t,a0,a1,a2)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      return pointer}
    function new4(t,a0,a1,a2,a3)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      return pointer}
    function new5(t,a0,a1,a2,a3,a4)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 5 | 0,a4);
      return pointer}
    function new6(t,a0,a1,a2,a3,a4,a5)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 5 | 0,a4);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 6 | 0,a5);
      return pointer}
    function new7(t,a0,a1,a2,a3,a4,a5,a6)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 5 | 0,a4);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 6 | 0,a5);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 7 | 0,a6);
      return pointer}
    function new8(t,a0,a1,a2,a3,a4,a5,a6,a7)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 5 | 0,a4);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 6 | 0,a5);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 7 | 0,a6);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 8 | 0,a7);
      return pointer}
    function new9(t,a0,a1,a2,a3,a4,a5,a6,a7,a8)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 5 | 0,a4);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 6 | 0,a5);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 7 | 0,a6);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 8 | 0,a7);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 9 | 0,a8);
      return pointer}
    function new10(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 5 | 0,a4);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 6 | 0,a5);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 7 | 0,a6);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 8 | 0,a7);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 9 | 0,a8);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 10 | 0,a9);
      return pointer}
    function new11(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 5 | 0,a4);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 6 | 0,a5);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 7 | 0,a6);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 8 | 0,a7);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 9 | 0,a8);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 10 | 0,a9);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 11 | 0,a10);
      return pointer}
    function new12(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 5 | 0,a4);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 6 | 0,a5);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 7 | 0,a6);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 8 | 0,a7);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 9 | 0,a8);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 10 | 0,a9);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 11 | 0,a10);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 12 | 0,a11);
      return pointer}
    function new13(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 5 | 0,a4);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 6 | 0,a5);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 7 | 0,a6);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 8 | 0,a7);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 9 | 0,a8);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 10 | 0,a9);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 11 | 0,a10);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 12 | 0,a11);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 13 | 0,a12);
      return pointer}
    function new14(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13)
     {var pointer=malloc(t),offset=header_index(pointer);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 1 | 0,a0);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 2 | 0,a1);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 3 | 0,a2);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 4 | 0,a3);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 5 | 0,a4);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 6 | 0,a5);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 7 | 0,a6);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 8 | 0,a7);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 9 | 0,a8);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 10 | 0,a9);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 11 | 0,a10);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 12 | 0,a11);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 13 | 0,a12);
      caml_call3(Core_kernel_Uniform_array[20],t,offset + 14 | 0,a13);
      return pointer}
    function get(t,p,slot)
     {var _bZ_=slot_index(p,slot);
      return caml_call2(Core_kernel_Uniform_array[17],t,_bZ_)}
    function unsafe_get(t,p,slot)
     {var _bY_=slot_index(p,slot);
      return caml_call2(Core_kernel_Uniform_array[18],t,_bY_)}
    function set(t,p,slot,x)
     {var _bX_=slot_index(p,slot);
      return caml_call3(Core_kernel_Uniform_array[19],t,_bX_,x)}
    function unsafe_set(t,p,slot,x)
     {var _bW_=slot_index(p,slot);
      return caml_call3(Core_kernel_Uniform_array[20],t,_bW_,x)}
    function get_tuple(t,pointer)
     {var metadata$0=metadata(t),len=metadata$0[1];
      if(caml_call2(Core_kernel[87],len,1))return get(t,pointer,Slot[3]);
      var _bV_=first_slot_index(pointer);
      return caml_call3(Core_kernel_Uniform_array[33],t,_bV_,len)}
    function create$1(slots,capacity)
     {return create_with_dummy(slots,capacity,0)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_tuple_pool$13);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Tuple_pool$0);
    function _aV_(Pool)
     {var Slots=Pool[1],Slot=Pool[2];
      function sexp_of_t(of_slots,param)
       {var
         v_is_valid=param[1],
         v_pointer=param[2],
         arg=caml_call2(Pool[3][1],of_slots,v_pointer),
         bnds=[0,[1,[0,_aR_,[0,arg,0]]],0],
         arg$0=caml_call1(Core_kernel[289],v_is_valid),
         bnds$0=[0,[1,[0,_aS_,[0,arg$0,0]]],bnds];
        return [1,bnds$0]}
      var
       Typename_of_t=caml_call1(Typerep_lib_Make_typename[2],[0,name$1]),
       typename_of_t=Typename_of_t[2];
      function typerep_of_t(of_slots)
       {var name_of_t=caml_call1(Typename_of_t[1],of_slots);
        return [9,
                [0,
                 name_of_t,
                 [0,
                  [246,
                   function(_bN_)
                    {var _bO_=1;
                     function _bP_(t){return t[1]}
                     var
                      _bQ_=caml_call2(Typerep_lib_Typename[1],0,0),
                      field0=
                       caml_call1
                        (Typerep_lib_Std[1][8][7],
                         [0,cst_is_valid,Core_kernel[292],0,_bQ_,_bP_,_bO_]),
                      _bR_=0;
                     function _bS_(t){return t[2]}
                     var
                      _bT_=caml_call2(Typerep_lib_Typename[1],0,0),
                      _bU_=
                       [0,
                        cst_pointer,
                        caml_call1(Pool[3][2],of_slots),
                        1,
                        _bT_,
                        _bS_,
                        _bR_],
                      field1=caml_call1(Typerep_lib_Std[1][8][7],_bU_),
                      typename=caml_call1(Typerep_lib_Std[1][1][2],name_of_t),
                      has_double_array_tag=
                       caml_call1
                        (Typerep_lib_Typerep_obj[4],
                         [0,Typerep_lib_Typerep_obj[3],Typerep_lib_Typerep_obj[3]]),
                      fields=[0,[0,field0],[0,field1]];
                     function create(param)
                      {var
                        get=param[1],
                        is_valid=caml_call1(get,field0),
                        pointer=caml_call1(get,field1);
                       return [0,is_valid,pointer]}
                     return [7,
                             caml_call1
                              (Typerep_lib_Std[1][10][7],
                               [0,typename,fields,has_double_array_tag,create])]}]]]]}
      function create(pointer){return [0,1,pointer]}
      function null$0(param){return [0,0,caml_call1(Pool[3][4],0)]}
      function phys_compare(t1,t2){return caml_call2(Pool[3][6],t1[2],t2[2])}
      function phys_equal(t1,t2){return caml_call2(Pool[3][7],t1[2],t2[2])}
      function is_null(t){return caml_call1(Pool[3][5],t[2])}
      function follow(t)
       {if(1 - t[1])
         {var _bL_=function(param){return _aT_};
          caml_call5
           (_d_,
            0,
            _aU_,
            cst_attempt_to_use_invalid_poi,
            t,
            function(_bM_){return sexp_of_t(_bL_,_bM_)})}
        return t[2]}
      function invalidate(t){t[1] = 0;return 0}
      var Id=Pool[3][8],sexp_of_t$0=Pool[4],invariant=Pool[5],length=Pool[12];
      function pointer_is_valid(t,param)
       {var is_valid=param[1],pointer=param[2];
        return is_valid?caml_call2(Pool[6],t,pointer):is_valid}
      function id_of_pointer(t,pointer)
       {return caml_call2(Pool[7],t,pointer[2])}
      function pointer_of_id_exn(t,id)
       {var
         pointer=caml_call2(Pool[8],t,id),
         is_valid=caml_call2(Pool[6],t,pointer);
        return [0,is_valid,pointer]}
      var
       create$0=Pool[9],
       capacity=Pool[11],
       max_capacity=Pool[10],
       grow=Pool[13],
       is_full=Pool[14];
      function get_tuple(t,p)
       {var _bK_=follow(p);return caml_call2(Pool[31],t,_bK_)}
      function get(t,p){var _bJ_=follow(p);return caml_call2(Pool[32],t,_bJ_)}
      function unsafe_get(t,p)
       {var _bI_=follow(p);return caml_call2(Pool[33],t,_bI_)}
      function set(t,p,slot,v)
       {var _bH_=follow(p);return caml_call4(Pool[34],t,_bH_,slot,v)}
      function unsafe_set(t,p,slot,v)
       {var _bG_=follow(p);return caml_call4(Pool[35],t,_bG_,slot,v)}
      function unsafe_free(t,p)
       {var _bF_=follow(p);caml_call2(Pool[16],t,_bF_);return invalidate(p)}
      function free(t,p)
       {var _bE_=follow(p);caml_call2(Pool[15],t,_bE_);return invalidate(p)}
      function new1(t,a0){return create(caml_call2(Pool[17],t,a0))}
      function new2(t,a0,a1){return create(caml_call3(Pool[18],t,a0,a1))}
      function new3(t,a0,a1,a2)
       {return create(caml_call4(Pool[19],t,a0,a1,a2))}
      function new4(t,a0,a1,a2,a3)
       {return create(caml_call5(Pool[20],t,a0,a1,a2,a3))}
      function new5(t,a0,a1,a2,a3,a4)
       {return create(caml_call6(Pool[21],t,a0,a1,a2,a3,a4))}
      function new6(t,a0,a1,a2,a3,a4,a5)
       {return create(caml_call7(Pool[22],t,a0,a1,a2,a3,a4,a5))}
      function new7(t,a0,a1,a2,a3,a4,a5,a6)
       {return create(caml_call8(Pool[23],t,a0,a1,a2,a3,a4,a5,a6))}
      function new8(t,a0,a1,a2,a3,a4,a5,a6,a7)
       {return create(caml_call9(Pool[24],t,a0,a1,a2,a3,a4,a5,a6,a7))}
      function new9(t,a0,a1,a2,a3,a4,a5,a6,a7,a8)
       {return create(caml_call10(Pool[25],t,a0,a1,a2,a3,a4,a5,a6,a7,a8))}
      function new10(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)
       {return create(caml_call11(Pool[26],t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9))}
      function new11(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)
       {return create
                (caml_call12(Pool[27],t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10))}
      function new12(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)
       {return create
                (caml_call13(Pool[28],t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11))}
      function new13(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)
       {return create
                (caml_call14
                  (Pool[29],t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12))}
      function new14(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13)
       {return create
                (caml_call15
                  (Pool[30],t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13))}
      return [0,
              Slots,
              Slot,
              [0,
               sexp_of_t,
               typerep_of_t,
               typename_of_t,
               null$0,
               is_null,
               phys_compare,
               phys_equal,
               Id],
              sexp_of_t$0,
              invariant,
              pointer_is_valid,
              id_of_pointer,
              pointer_of_id_exn,
              create$0,
              max_capacity,
              capacity,
              length,
              grow,
              is_full,
              free,
              unsafe_free,
              new1,
              new2,
              new3,
              new4,
              new5,
              new6,
              new7,
              new8,
              new9,
              new10,
              new11,
              new12,
              new13,
              new14,
              get_tuple,
              get,
              unsafe_get,
              set,
              unsafe_set]}
    var
     Tuple_pool$0=
      [0,
       _c_,
       Slot,
       [0,
        sexp_of_t$3,
        typerep_of_t,
        typename_of_t,
        null$0,
        is_null,
        _q_,
        phys_equal,
        _y_],
       sexp_of_t$5,
       invariant$1,
       pointer_is_valid,
       id_of_pointer,
       pointer_of_id_exn,
       create$0,
       max_capacity,
       capacity$1,
       length$1,
       grow,
       is_full,
       free,
       unsafe_free,
       new1,
       new2,
       new3,
       new4,
       new5,
       new6,
       new7,
       new8,
       new9,
       new10,
       new11,
       new12,
       new13,
       new14,
       get_tuple,
       get,
       unsafe_get,
       set,
       unsafe_set,
       [0,
        _c_,
        Slot,
        [0,
         sexp_of_t$3,
         typerep_of_t,
         typename_of_t,
         null$0,
         is_null,
         _q_,
         phys_equal,
         _y_],
        sexp_of_t$5,
        invariant$1,
        pointer_is_valid,
        id_of_pointer,
        pointer_of_id_exn,
        max_capacity,
        capacity$1,
        length$1,
        grow,
        is_full,
        free,
        unsafe_free,
        new1,
        new2,
        new3,
        new4,
        new5,
        new6,
        new7,
        new8,
        new9,
        new10,
        new11,
        new12,
        new13,
        new14,
        get_tuple,
        get,
        unsafe_get,
        set,
        unsafe_set,
        create$1],
       function(Pool)
        {var check_invariant=[0,1],show_messages=[0,1];
         function debug(name,ts,arg,sexp_of_arg,sexp_of_result,f)
          {if(check_invariant[1])
            {var _by_=function(_bD_){return 0},_bz_=caml_call1(Pool[5],_by_);
             caml_call2(Core_kernel_List[9],ts,_bz_)}
           if(show_messages[1])
            {var _bA_=concat([0,prefix,[0,name,0]]);
             caml_call3(Core_kernel_Debug[2],_bA_,arg,sexp_of_arg)}
           var result_or_exn=caml_call1(Core_kernel_Result[45],f);
           if(show_messages[1])
            {var
              _bB_=
               caml_call2
                (Core_kernel_Result[10],sexp_of_result,Core_kernel[521]),
              _bC_=concat([0,prefix,[0,name,_av_]]);
             caml_call3(Core_kernel_Debug[2],_bC_,result_or_exn,_bB_)}
           return caml_call1(Core_kernel_Result[30],result_or_exn)}
         var
          Slots=Pool[1],
          Slot=Pool[2],
          sexp_of_t=Pool[3][1],
          Typename_of_t=caml_call1(Typerep_lib_Make_typename[2],[0,name$0]),
          typename_of_t=Typename_of_t[2];
         function typerep_of_t(of_slots)
          {var name_of_t=caml_call1(Typename_of_t[1],of_slots);
           return [9,
                   [0,
                    name_of_t,
                    [0,
                     [246,function(_bx_){return caml_call1(Pool[3][2],of_slots)}]]]]}
         function phys_compare(t1,t2)
          {function _bv_(param){return caml_call2(Pool[3][6],t1,t2)}
           var _bw_=Core_kernel[340];
           return debug
                   (cst_Pointer_phys_compare,
                    0,
                    [0,t1,t2],
                    function(param)
                     {var
                       v1=param[2],
                       v0=param[1],
                       v0$0=caml_call2(sexp_of_t,function(param){return _aw_},v0),
                       v1$0=caml_call2(sexp_of_t,function(param){return _ax_},v1);
                      return [1,[0,v0$0,[0,v1$0,0]]]},
                    _bw_,
                    _bv_)}
         function phys_equal(t1,t2)
          {function _bt_(param){return caml_call2(Pool[3][7],t1,t2)}
           var _bu_=Core_kernel[289];
           return debug
                   (cst_Pointer_phys_equal,
                    0,
                    [0,t1,t2],
                    function(param)
                     {var
                       v1=param[2],
                       v0=param[1],
                       v0$0=caml_call2(sexp_of_t,function(param){return _ay_},v0),
                       v1$0=caml_call2(sexp_of_t,function(param){return _az_},v1);
                      return [1,[0,v0$0,[0,v1$0,0]]]},
                    _bu_,
                    _bt_)}
         function is_null(t)
          {function _br_(param){return caml_call1(Pool[3][5],t)}
           var _bs_=Core_kernel[289];
           return debug
                   (cst_Pointer_is_null,
                    0,
                    t,
                    caml_call1(sexp_of_t,function(param){return _aA_}),
                    _bs_,
                    _br_)}
         var
          _aY_=Pool[3][4],
          _aZ_=Pool[3][8][5],
          _a0_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t),0,_aZ_],0],
          _a1_=
           caml_call1(Bin_prot_Shape[4][1],cst_tuple_pool_src_tuple_pool_$10),
          group=caml_call2(Bin_prot_Shape[6],_a1_,_a0_),
          _a2_=caml_call1(Bin_prot_Shape[2][1],cst_t$0),
          bin_shape_t=caml_call1(caml_call2(Bin_prot_Shape[14],group,_a2_),0),
          bin_size_t=Pool[3][8][1],
          bin_write_t=Pool[3][8][2],
          bin_writer_t=[0,bin_size_t,bin_write_t],
          bin_read_t=Pool[3][8][4],
          bin_read_t$0=Pool[3][8][3],
          bin_reader_t=[0,bin_read_t$0,bin_read_t],
          bin_t=[0,bin_shape_t,bin_writer_t,bin_reader_t],
          t_of_sexp=Pool[3][8][9],
          sexp_of_t$0=Pool[3][8][10];
         function of_int63(i)
          {function _bq_(param){return caml_call1(Pool[3][8][12],i)}
           return debug
                   (cst_Pointer_Id_of_int63,
                    0,
                    i,
                    Core_kernel_Int63[103],
                    sexp_of_t$0,
                    _bq_)}
         function to_int63(t)
          {function _bp_(param){return caml_call1(Pool[3][8][11],t)}
           return debug
                   (cst_Pointer_Id_to_int63,
                    0,
                    t,
                    sexp_of_t$0,
                    Core_kernel_Int63[103],
                    _bp_)}
         var sexp_of_t$1=Pool[4],invariant=Pool[5],length=Pool[12];
         function id_of_pointer(t,pointer)
          {function _bo_(param){return caml_call2(Pool[7],t,pointer)}
           return debug
                   (cst_id_of_pointer,
                    [0,t,0],
                    pointer,
                    caml_call1(sexp_of_t,function(param){return _aB_}),
                    sexp_of_t$0,
                    _bo_)}
         function pointer_of_id_exn(t,id)
          {function _bn_(param){return caml_call2(Pool[8],t,id)}
           return debug
                   (cst_pointer_of_id_exn,
                    [0,t,0],
                    id,
                    sexp_of_t$0,
                    caml_call1(sexp_of_t,function(param){return _aC_}),
                    _bn_)}
         function pointer_is_valid(t,pointer)
          {function _bl_(param){return caml_call2(Pool[6],t,pointer)}
           var _bm_=Core_kernel[289];
           return debug
                   (cst_pointer_is_valid,
                    [0,t,0],
                    pointer,
                    caml_call1(sexp_of_t,function(param){return _aD_}),
                    _bm_,
                    _bl_)}
         function create(slots,capacity,dummy)
          {function _bj_(param)
            {return caml_call3(Pool[9],slots,capacity,dummy)}
           var _bk_=caml_call1(sexp_of_t$1,function(param){return _aE_});
           return debug(cst_create,0,capacity,Core_kernel[340],_bk_,_bj_)}
         function max_capacity(slots_per_tuple)
          {function _bi_(param){return caml_call1(Pool[10],slots_per_tuple)}
           return debug
                   (cst_max_capacity,
                    0,
                    slots_per_tuple,
                    Core_kernel[340],
                    Core_kernel[340],
                    _bi_)}
         function capacity(t)
          {function _bg_(param){return caml_call1(Pool[11],t)}
           var _bh_=Core_kernel[340];
           return debug
                   (cst_capacity$0,
                    [0,t,0],
                    t,
                    caml_call1(sexp_of_t$1,function(param){return _aF_}),
                    _bh_,
                    _bg_)}
         function grow(capacity,t)
          {function _be_(param){return caml_call2(Pool[13],capacity,t)}
           var _bf_=caml_call1(sexp_of_t$1,function(param){return _aG_});
           return debug
                   (cst_grow,
                    [0,t,0],
                    [0,-1011154630,capacity],
                    function(param)
                     {var v0=param[2];
                      return [1,
                              [0,
                               _aH_,
                               [0,caml_call2(Core_kernel[438],Core_kernel[340],v0),0]]]},
                    _bf_,
                    _be_)}
         function is_full(t)
          {function _bc_(param){return caml_call1(Pool[14],t)}
           var _bd_=Core_kernel[289];
           return debug
                   (cst_is_full,
                    [0,t,0],
                    t,
                    caml_call1(sexp_of_t$1,function(param){return _aI_}),
                    _bd_,
                    _bc_)}
         function unsafe_free(t,p)
          {function _ba_(param){return caml_call2(Pool[16],t,p)}
           var _bb_=Core_kernel[502];
           return debug
                   (cst_unsafe_free,
                    [0,t,0],
                    p,
                    caml_call1(sexp_of_t,function(param){return _aJ_}),
                    _bb_,
                    _ba_)}
         function free(t,p)
          {function _a__(param){return caml_call2(Pool[15],t,p)}
           var _a$_=Core_kernel[502];
           return debug
                   (cst_free,
                    [0,t,0],
                    p,
                    caml_call1(sexp_of_t,function(param){return _aK_}),
                    _a$_,
                    _a__)}
         function debug_new(t,f)
          {var _a9_=caml_call1(sexp_of_t,function(param){return _aL_});
           return debug(cst_new,[0,t,0],0,Core_kernel[502],_a9_,f)}
         function new1(t,a0)
          {return debug_new
                   (t,function(param){return caml_call2(Pool[17],t,a0)})}
         function new2(t,a0,a1)
          {return debug_new
                   (t,function(param){return caml_call3(Pool[18],t,a0,a1)})}
         function new3(t,a0,a1,a2)
          {return debug_new
                   (t,function(param){return caml_call4(Pool[19],t,a0,a1,a2)})}
         function new4(t,a0,a1,a2,a3)
          {return debug_new
                   (t,
                    function(param){return caml_call5(Pool[20],t,a0,a1,a2,a3)})}
         function new5(t,a0,a1,a2,a3,a4)
          {return debug_new
                   (t,
                    function(param)
                     {return caml_call6(Pool[21],t,a0,a1,a2,a3,a4)})}
         function new6(t,a0,a1,a2,a3,a4,a5)
          {return debug_new
                   (t,
                    function(param)
                     {return caml_call7(Pool[22],t,a0,a1,a2,a3,a4,a5)})}
         function new7(t,a0,a1,a2,a3,a4,a5,a6)
          {return debug_new
                   (t,
                    function(param)
                     {return caml_call8(Pool[23],t,a0,a1,a2,a3,a4,a5,a6)})}
         function new8(t,a0,a1,a2,a3,a4,a5,a6,a7)
          {return debug_new
                   (t,
                    function(param)
                     {return caml_call9(Pool[24],t,a0,a1,a2,a3,a4,a5,a6,a7)})}
         function new9(t,a0,a1,a2,a3,a4,a5,a6,a7,a8)
          {return debug_new
                   (t,
                    function(param)
                     {return caml_call10(Pool[25],t,a0,a1,a2,a3,a4,a5,a6,a7,a8)})}
         function new10(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)
          {return debug_new
                   (t,
                    function(param)
                     {return caml_call11
                              (Pool[26],t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9)})}
         function new11(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)
          {return debug_new
                   (t,
                    function(param)
                     {return caml_call12
                              (Pool[27],t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10)})}
         function new12(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)
          {return debug_new
                   (t,
                    function(param)
                     {return caml_call13
                              (Pool[28],t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11)})}
         function new13(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)
          {return debug_new
                   (t,
                    function(param)
                     {return caml_call14
                              (Pool[29],t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12)})}
         function new14(t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13)
          {return debug_new
                   (t,
                    function(param)
                     {return caml_call15
                              (Pool[30],t,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13)})}
         function get_tuple(t,pointer)
          {function _a7_(param){return caml_call2(Pool[31],t,pointer)}
           function _a8_(param){return _aM_}
           return debug
                   (cst_get_tuple,
                    [0,t,0],
                    pointer,
                    caml_call1(sexp_of_t,function(param){return _aN_}),
                    _a8_,
                    _a7_)}
         function debug_get(name,f,t,pointer)
          {function _a5_(param){return caml_call2(f,t,pointer)}
           function _a6_(param){return _aO_}
           return debug
                   (name,
                    [0,t,0],
                    pointer,
                    caml_call1(sexp_of_t,function(param){return _aP_}),
                    _a6_,
                    _a5_)}
         function get(t,pointer,slot)
          {return caml_call1(debug_get(cst_get,Pool[32],t,pointer),slot)}
         function unsafe_get(t,pointer,slot)
          {return caml_call1
                   (debug_get(cst_unsafe_get,Pool[33],t,pointer),slot)}
         function debug_set(name,f,t,pointer,slot,a)
          {function _a3_(param){return caml_call4(f,t,pointer,slot,a)}
           var _a4_=Core_kernel[502];
           return debug
                   (name,
                    [0,t,0],
                    pointer,
                    caml_call1(sexp_of_t,function(param){return _aQ_}),
                    _a4_,
                    _a3_)}
         function set(t,pointer,slot,a)
          {return debug_set(cst_set,Pool[34],t,pointer,slot,a)}
         function unsafe_set(t,pointer,slot,a)
          {return debug_set(cst_unsafe_set,Pool[35],t,pointer,slot,a)}
         return [0,
                 Slots,
                 Slot,
                 [0,
                  sexp_of_t,
                  typerep_of_t,
                  typename_of_t,
                  _aY_,
                  is_null,
                  phys_compare,
                  phys_equal,
                  [0,
                   bin_size_t,
                   bin_write_t,
                   bin_read_t$0,
                   bin_read_t,
                   bin_shape_t,
                   bin_writer_t,
                   bin_reader_t,
                   bin_t,
                   t_of_sexp,
                   sexp_of_t$0,
                   to_int63,
                   of_int63]],
                 sexp_of_t$1,
                 invariant,
                 pointer_is_valid,
                 id_of_pointer,
                 pointer_of_id_exn,
                 create,
                 max_capacity,
                 capacity,
                 length,
                 grow,
                 is_full,
                 free,
                 unsafe_free,
                 new1,
                 new2,
                 new3,
                 new4,
                 new5,
                 new6,
                 new7,
                 new8,
                 new9,
                 new10,
                 new11,
                 new12,
                 new13,
                 new14,
                 get_tuple,
                 get,
                 unsafe_get,
                 set,
                 unsafe_set,
                 check_invariant,
                 show_messages]},
       _aV_];
    caml_register_global(227,Tuple_pool$0,"Tuple_pool");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ0dXBsZV9wb29sLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
