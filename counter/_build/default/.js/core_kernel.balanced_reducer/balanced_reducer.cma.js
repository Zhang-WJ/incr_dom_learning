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
     cst_attempt_to_compute_balance=
      caml_string_of_jsbytes
       ("attempt to compute balanced reducer with unset elements"),
     cst_attempt_to_access_negative=
      caml_string_of_jsbytes
       ("attempt to access negative index in balanced reducer"),
     cst_attempt_to_access_out_of_b=
      caml_string_of_jsbytes
       ("attempt to access out of bounds index in balanced reducer"),
     cst_non_positive_number_of_lea=
      caml_string_of_jsbytes
       ("non-positive number of leaves in balanced reducer"),
     cst_Balanced_reducer=caml_string_of_jsbytes("Balanced_reducer"),
     cst_balanced_reducer=caml_string_of_jsbytes("balanced_reducer"),
     cst_balanced_reducer_src_balan=
      caml_string_of_jsbytes("balanced_reducer/src/balanced_reducer.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_balanced_reducer$0=caml_string_of_jsbytes("balanced_reducer"),
     cst_balanced_reducer$1=caml_string_of_jsbytes("balanced_reducer"),
     cst_Balanced_reducer$0=caml_string_of_jsbytes("Balanced_reducer"),
     Base_Option_array=global_data.Base__Option_array,
     Base=global_data.Base,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Base_Int=global_data.Base__Int,
     Assert_failure=global_data.Assert_failure,
     Base_List=global_data.Base__List,
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime;
    caml_call1(Ppx_module_timer_runtime[4],cst_Balanced_reducer);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_balanced_reducer);
    caml_call1(Expect_test_collector[4][1],cst_balanced_reducer_src_balan);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_balanced_reducer$0,cst);
    var
     _i_=[0,caml_string_of_jsbytes("balanced_reducer")],
     _e_=[0,caml_string_of_jsbytes("index")],
     _f_=[0,caml_string_of_jsbytes("length")],
     _g_=[0,caml_string_of_jsbytes("index")],
     _d_=[0,caml_string_of_jsbytes("_")],
     _c_=[0,caml_string_of_jsbytes("num_leaves")],
     _a_=
      [0,
       caml_string_of_jsbytes("balanced_reducer/src/balanced_reducer.ml"),
       76,
       9],
     _b_=
      [0,
       caml_string_of_jsbytes("balanced_reducer/src/balanced_reducer.ml"),
       78,
       6];
    function left_child_index(parent_index)
     {var _O_=caml_call2(Base[182],parent_index,2);
      return caml_call2(Base[180],_O_,1)}
    function right_child_index(left_child_index)
     {return caml_call2(Base[180],left_child_index,1)}
    function num_branches(t){return caml_call2(Base[181],t[2],1)}
    function index_is_leaf(t,i)
     {var _N_=num_branches(t);return caml_call2(Base[204],i,_N_)}
    function leaf_index(t,i)
     {var
       offset_from_start_of_leaves_in=caml_call2(Base[180],i,t[3]),
       rotated_index=
        caml_call2(Base[199],offset_from_start_of_leaves_in,t[2])
         ?offset_from_start_of_leaves_in
         :caml_call2(Base[181],offset_from_start_of_leaves_in,t[2]),
       _M_=num_branches(t);
      return caml_call2(Base[180],rotated_index,_M_)}
    function sexp_of_t(sexp_of_a,t)
     {function _I_(i)
       {var _L_=leaf_index(t,i);
        return caml_call2(Base_Option_array[8],t[1],_L_)}
      var
       _J_=caml_call2(Base_List[119],t[2],_I_),
       _K_=caml_call1(Base[153],sexp_of_a);
      return caml_call2(Base[140],_K_,_J_)}
    function invariant(invariant_a,t)
     {var
       data=t[1],
       _B_=caml_call1(Base_Option_array[7],data),
       _C_=caml_call2(Base[181],_B_,1),
       _A_=0;
      if(! (_C_ < 0))
       {var i$0=_A_;
        for(;;)
         {var match=caml_call2(Base_Option_array[8],data,i$0);
          if(match){var a=match[1];caml_call1(invariant_a,a)}
          var _H_=i$0 + 1 | 0;
          if(_C_ !== i$0){var i$0=_H_;continue}
          break}}
      var _E_=num_branches(t),_F_=caml_call2(Base[181],_E_,1),_D_=0;
      if(! (_F_ < 0))
       {var i=_D_;
        for(;;)
         {var
           left=left_child_index(i),
           right=right_child_index(left),
           left_is_none=caml_call2(Base_Option_array[10],data,left),
           right_is_none=caml_call2(Base_Option_array[10],data,right);
          if(caml_call2(Base_Option_array[11],data,i))
           {var switch$0=0;
            if(! left_is_none && ! right_is_none)switch$0 = 1;
            if(! switch$0)throw [0,Assert_failure,_a_]}
          else
           if
            (!
             index_is_leaf(t,left)
             &&
             !
             index_is_leaf(t,right)
             &&
             !
             left_is_none
             &&
             !
             right_is_none)
            throw [0,Assert_failure,_b_];
          var _G_=i + 1 | 0;
          if(_F_ !== i){var i=_G_;continue}
          break}}
      return 0}
    function create_exn(opt,param,num_leaves,reduce)
     {if(opt)
       var sth=opt[1],sexp_of_a=sth;
      else
       var sexp_of_a=function(param){return _d_};
      if(caml_call2(Base[199],num_leaves,1))
       {var
         _w_=[0,[1,[0,_c_,[0,caml_call1(Base[120],num_leaves),0]]],0],
         _x_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_non_positive_number_of_lea),
            _w_]];
        caml_call1(Base[222],_x_)}
      var
       num_branches=caml_call2(Base[181],num_leaves,1),
       _y_=caml_call1(Base_Int[94],num_leaves),
       num_leaves_not_in_bottom_level=caml_call2(Base[181],_y_,num_leaves),
       _z_=caml_call2(Base[180],num_branches,num_leaves),
       data=caml_call1(Base_Option_array[4],_z_);
      return [0,
              data,
              num_leaves,
              num_leaves_not_in_bottom_level,
              reduce,
              sexp_of_a]}
    function validate_index(t,i)
     {if(caml_call2(Base[199],i,0))
       {var
         _q_=[0,[1,[0,_e_,[0,caml_call1(Base[120],i),0]]],0],
         _r_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_attempt_to_access_negative),
            _q_]];
        caml_call1(Base[222],_r_)}
      var length=t[2],_s_=caml_call2(Base[204],i,length);
      if(_s_)
       {var
         _t_=[0,[1,[0,_f_,[0,caml_call1(Base[120],length),0]]],0],
         _u_=[0,[1,[0,_g_,[0,caml_call1(Base[120],i),0]]],_t_],
         _v_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_attempt_to_access_out_of_b),
            _u_]];
        return caml_call1(Base[222],_v_)}
      return _s_}
    function set_exn(t,i,a)
     {validate_index(t,i);
      var data=t[1],i$0=[0,leaf_index(t,i)];
      caml_call3(Base_Option_array[17],data,i$0[1],a);
      for(;;)
       {if(caml_call2(Base[201],i$0[1],0))
         {var
           _p_=caml_call2(Base[181],i$0[1],1),
           parent=caml_call2(Base[183],_p_,2);
          if(caml_call2(Base_Option_array[10],data,parent))
           i$0[1] = 0;
          else
           {caml_call2(Base_Option_array[23],data,parent);i$0[1] = parent}
          continue}
        return 0}}
    function get_exn(t,i)
     {validate_index(t,i);
      var _o_=leaf_index(t,i);
      return caml_call2(Base_Option_array[9],t[1],_o_)}
    function _h_(t,i)
     {if(caml_call2(Base_Option_array[11],t[1],i))
       return caml_call2(Base_Option_array[13],t[1],i);
      var
       left=left_child_index(i),
       right=right_child_index(left),
       _j_=caml_call1(Base_Option_array[7],t[1]);
      if(caml_call2(Base[204],left,_j_))
       {var
         sexp_of_a=t[5],
         _k_=[0,[1,[0,_i_,[0,sexp_of_t(sexp_of_a,t),0]]],0],
         _l_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_attempt_to_compute_balance),
            _k_]];
        caml_call1(Base[222],_l_)}
      var _m_=_h_(t,right),_n_=_h_(t,left),a=caml_call2(t[4],_n_,_m_);
      caml_call3(Base_Option_array[22],t[1],i,a);
      return a}
    function compute_exn(t){return _h_(t,0)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_balanced_reducer$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Balanced_reducer$0);
    var
     Balanced_reducer=
      [0,sexp_of_t,invariant,create_exn,set_exn,get_exn,compute_exn];
    runtime.caml_register_global(29,Balanced_reducer,"Balanced_reducer");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJiYWxhbmNlZF9yZWR1Y2VyLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
