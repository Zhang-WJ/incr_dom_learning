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
     cst_sexp_hidden_in_test_src_se$9=
      caml_string_of_jsbytes("sexp_hidden_in_test/src/sexp_hidden_in_test.ml"),
     cst_sexp_hidden_in_test_src_se$4=
      caml_string_of_jsbytes("sexp_hidden_in_test/src/sexp_hidden_in_test.ml"),
     cst_sexp_hidden_in_test_src_se$5=
      caml_string_of_jsbytes("sexp_hidden_in_test/src/sexp_hidden_in_test.ml"),
     cst_sexp_hidden_in_test_src_se$6=
      caml_string_of_jsbytes("sexp_hidden_in_test/src/sexp_hidden_in_test.ml"),
     cst_sexp_hidden_in_test_src_se$7=
      caml_string_of_jsbytes("sexp_hidden_in_test/src/sexp_hidden_in_test.ml"),
     cst_sexp_hidden_in_test_src_se$8=
      caml_string_of_jsbytes("sexp_hidden_in_test/src/sexp_hidden_in_test.ml"),
     cst_d95af6ef6a0b4cc75644c3eda3=
      caml_string_of_jsbytes("d95af6ef6a0b4cc75644c3eda335022f"),
     cst_sexp_hidden_in_test_src_se$10=
      caml_string_of_jsbytes("sexp_hidden_in_test/src/sexp_hidden_in_test.ml"),
     cst_sexp_hidden_in_test_src_se$11=
      caml_string_of_jsbytes("sexp_hidden_in_test/src/sexp_hidden_in_test.ml"),
     cst_sexp_hidden_in_test_src_se$12=
      caml_string_of_jsbytes("sexp_hidden_in_test/src/sexp_hidden_in_test.ml"),
     cst_sexp_hidden_in_test_src_se$13=
      caml_string_of_jsbytes("sexp_hidden_in_test/src/sexp_hidden_in_test.ml"),
     cst_d95af6ef6a0b4cc75644c3eda3$0=
      caml_string_of_jsbytes("d95af6ef6a0b4cc75644c3eda335022f"),
     cst_t$2=caml_string_of_jsbytes("t"),
     cst_t$0=caml_string_of_jsbytes("t"),
     cst_a=caml_string_of_jsbytes("a"),
     cst_sexp_hidden_in_test_src_se$0=
      caml_string_of_jsbytes
       ("sexp_hidden_in_test/src/sexp_hidden_in_test.ml:7:14"),
     cst_a$0=caml_string_of_jsbytes("a"),
     cst_t=caml_string_of_jsbytes("t"),
     cst_sexp_hidden_in_test_src_se$1=
      caml_string_of_jsbytes
       ("sexp_hidden_in_test/src/sexp_hidden_in_test.ml:7:2"),
     cst_a$1=caml_string_of_jsbytes("a"),
     cst_sexp_hidden_in_test_src_se$2=
      caml_string_of_jsbytes
       ("sexp_hidden_in_test/src/sexp_hidden_in_test.ml:14:23"),
     cst_a$2=caml_string_of_jsbytes("a"),
     cst_t$1=caml_string_of_jsbytes("t"),
     cst_sexp_hidden_in_test_src_se$3=
      caml_string_of_jsbytes
       ("sexp_hidden_in_test/src/sexp_hidden_in_test.ml:14:4"),
     cst_Sexp_hidden_in_test=caml_string_of_jsbytes("Sexp_hidden_in_test"),
     cst_sexp_hidden_in_test=caml_string_of_jsbytes("sexp_hidden_in_test"),
     cst_sexp_hidden_in_test_src_se=
      caml_string_of_jsbytes("sexp_hidden_in_test/src/sexp_hidden_in_test.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_sexp_hidden_in_test$0=caml_string_of_jsbytes("sexp_hidden_in_test"),
     cst_sexp_hidden_in_test_src_se$14=
      caml_string_of_jsbytes("sexp_hidden_in_test/src/sexp_hidden_in_test.ml"),
     cst$0=caml_string_of_jsbytes(""),
     cst_sexp_hidden_in_test$1=caml_string_of_jsbytes("sexp_hidden_in_test"),
     cst_Sexp_hidden_in_test$0=caml_string_of_jsbytes("Sexp_hidden_in_test"),
     Core_kernel=global_data.Core_kernel,
     Expect_test_common_File=global_data.Expect_test_common__File,
     Expect_test_config=global_data.Expect_test_config,
     Expect_test_collector=global_data.Expect_test_collector,
     Inline_test_config=global_data.Inline_test_config,
     Bin_prot_Shape=global_data.Bin_prot__Shape,
     Bin_prot_Common=global_data.Bin_prot__Common,
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime;
    caml_call1(Ppx_module_timer_runtime[4],cst_Sexp_hidden_in_test);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_sexp_hidden_in_test);
    caml_call1(Expect_test_collector[4][1],cst_sexp_hidden_in_test_src_se);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_sexp_hidden_in_test$0,cst);
    var
     _d_=[1,caml_string_of_jsbytes(" <hidden_in_test> ")],
     _e_=[0,caml_string_of_jsbytes("")],
     _f_=[0,caml_string_of_jsbytes("Turned on")],
     _g_=[1,caml_string_of_jsbytes(" 1024 ")],
     _h_=[0,caml_string_of_jsbytes("")],
     _i_=[0,caml_string_of_jsbytes("Turned off")],
     _b_=[0,caml_string_of_jsbytes("<hidden_in_test>")],
     _a_=
      [5,
       caml_string_of_jsbytes
        ("sexp_hidden_in_test/src/sexp_hidden_in_test.ml.Make.t")];
    function Make(M)
     {var
       _I_=caml_call1(Bin_prot_Shape[3][1],cst_a),
       _J_=caml_call1(Bin_prot_Shape[4][1],cst_sexp_hidden_in_test_src_se$0),
       _K_=caml_call2(Bin_prot_Shape[15],_J_,_I_),
       _L_=[0,caml_call1(Bin_prot_Shape[3][1],cst_a$0),0],
       _M_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t),_L_,_K_],0],
       _N_=caml_call1(Bin_prot_Shape[4][1],cst_sexp_hidden_in_test_src_se$1),
       group=caml_call2(Bin_prot_Shape[6],_N_,_M_);
      function bin_shape_t(a)
       {var _ae_=caml_call1(Bin_prot_Shape[2][1],cst_t$0);
        return caml_call1(caml_call2(Bin_prot_Shape[14],group,_ae_),[0,a,0])}
      function bin_size_t(size_of_a){return size_of_a}
      function bin_write_t(write_a){return write_a}
      function bin_writer_t(bin_writer_a)
       {function _ad_(v){return caml_call1(bin_writer_a[2],v)}
        return [0,function(v){return caml_call1(bin_writer_a[1],v)},_ad_]}
      function bin_read_t(of_a,buf,pos_ref,vint)
       {return caml_call2(Bin_prot_Common[18],_a_,pos_ref[1])}
      function bin_read_t$0(of_a){return of_a}
      function bin_reader_t(bin_reader_a)
       {function _ac_(buf,pos_ref,vtag)
         {return bin_read_t(bin_reader_a[1],buf,pos_ref,vtag)}
        return [0,
                function(buf,pos_ref)
                 {return caml_call2(bin_reader_a[1],buf,pos_ref)},
                _ac_]}
      function bin_t(bin_a)
       {var _aa_=bin_reader_t(bin_a[3]),_ab_=bin_writer_t(bin_a[2]);
        return [0,bin_shape_t(bin_a[1]),_ab_,_aa_]}
      function compare(cmp_a,a_001,b_002)
       {return caml_call2(cmp_a,a_001,b_002)}
      function t_of_sexp(of_a,t){return caml_call1(of_a,t)}
      function sexp_of_t(sexp_of_a,a){return M[1]?_b_:caml_call1(sexp_of_a,a)}
      var
       _O_=caml_call1(Bin_prot_Shape[3][1],cst_a$1),
       _P_=caml_call1(Bin_prot_Shape[4][1],cst_sexp_hidden_in_test_src_se$2),
       _Q_=bin_shape_t(caml_call2(Bin_prot_Shape[15],_P_,_O_)),
       _R_=[0,caml_call1(Bin_prot_Shape[3][1],cst_a$2),0],
       _S_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$1),_R_,_Q_],0],
       _T_=caml_call1(Bin_prot_Shape[4][1],cst_sexp_hidden_in_test_src_se$3),
       group$0=caml_call2(Bin_prot_Shape[6],_T_,_S_);
      function bin_shape_t$0(a)
       {var _$_=caml_call1(Bin_prot_Shape[2][1],cst_t$2);
        return caml_call1(caml_call2(Bin_prot_Shape[14],group$0,_$_),[0,a,0])}
      function bin_size_t$0(size_of_a,v){return caml_call1(size_of_a,v)}
      function bin_write_t$0(write_a,buf,pos,v)
       {return caml_call3(write_a,buf,pos,v)}
      function bin_writer_t$0(bin_writer_a)
       {function _X_(v)
         {var _Y_=bin_writer_a[2];
          return function(_Z_,___){return bin_write_t$0(_Y_,v,_Z_,___)}}
        return [0,function(v){return bin_size_t$0(bin_writer_a[1],v)},_X_]}
      function bin_read_t$1(of_a,buf,pos_ref,vint)
       {return bin_read_t(of_a,buf,pos_ref,vint)}
      function bin_read_t$2(of_a,buf,pos_ref)
       {return caml_call2(of_a,buf,pos_ref)}
      function bin_reader_t$0(bin_reader_a)
       {function _W_(buf,pos_ref,vtag)
         {return bin_read_t$1(bin_reader_a[1],buf,pos_ref,vtag)}
        return [0,
                function(buf,pos_ref)
                 {return bin_read_t$2(bin_reader_a[1],buf,pos_ref)},
                _W_]}
      function bin_t$0(bin_a)
       {var _U_=bin_reader_t$0(bin_a[3]),_V_=bin_writer_t$0(bin_a[2]);
        return [0,bin_shape_t$0(bin_a[1]),_V_,_U_]}
      function compare$0(cmp_a,a_003,b_004)
       {return compare
                (function(a_005,b_006){return caml_call2(cmp_a,a_005,b_006)},
                 a_003,
                 b_004)}
      var
       With_non_roundtripping_in_test=
        [0,
         bin_shape_t$0,
         bin_size_t$0,
         bin_write_t$0,
         bin_writer_t$0,
         bin_read_t$1,
         bin_read_t$2,
         bin_reader_t$0,
         bin_t$0,
         compare$0,
         t_of_sexp,
         sexp_of_t];
      return [0,
              bin_shape_t,
              bin_size_t,
              bin_write_t,
              bin_writer_t,
              bin_read_t,
              bin_read_t$0,
              bin_reader_t,
              bin_t,
              compare,
              t_of_sexp,
              sexp_of_t,
              With_non_roundtripping_in_test]}
    function _c_(param)
     {var
       Sexp_hidden_in_test_turned_off=Make([0,0]),
       Sexp_hidden_in_test_turned_on=Make([0,1]),
       Expect_test_collector$0=
        caml_call1(Expect_test_collector[2],Expect_test_config);
      function _u_(param)
       {var
         _G_=
          caml_call2(Sexp_hidden_in_test_turned_on[11],Core_kernel[340],1024);
        caml_call2(Core_kernel[233],0,_G_);
        var
         _H_=
          [0,
           caml_call1
            (Expect_test_common_File[1][6],cst_sexp_hidden_in_test_src_se$4),
           38,
           956,
           964,
           970];
        return caml_call1(Expect_test_collector$0[1],_H_)}
      var
       _v_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_sexp_hidden_in_test_src_se$5),
         38,
         956,
         971,
         993],
       _w_=
        [0,
         [0,
          _e_,
          _d_,
          [0,
           caml_call1
            (Expect_test_common_File[1][6],cst_sexp_hidden_in_test_src_se$6),
           38,
           956,
           964,
           970],
          _v_],
         0],
       _x_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_sexp_hidden_in_test_src_se$8),
         36,
         878,
         882,
         994],
       _y_=
        caml_call1
         (Expect_test_common_File[4][3],cst_d95af6ef6a0b4cc75644c3eda3);
      caml_call9
       (Expect_test_collector$0[3],
        _y_,
        _x_,
        cst_sexp_hidden_in_test_src_se$7,
        _f_,
        0,
        _w_,
        0,
        Inline_test_config,
        _u_);
      var
       Expect_test_collector$1=
        caml_call1(Expect_test_collector[2],Expect_test_config);
      function _z_(param)
       {var
         _E_=
          caml_call2(Sexp_hidden_in_test_turned_off[11],Core_kernel[340],1024);
        caml_call2(Core_kernel[233],0,_E_);
        var
         _F_=
          [0,
           caml_call1
            (Expect_test_common_File[1][6],cst_sexp_hidden_in_test_src_se$9),
           43,
           1085,
           1093,
           1099];
        return caml_call1(Expect_test_collector$1[1],_F_)}
      var
       _A_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_sexp_hidden_in_test_src_se$10),
         43,
         1085,
         1100,
         1110],
       _B_=
        [0,
         [0,
          _h_,
          _g_,
          [0,
           caml_call1
            (Expect_test_common_File[1][6],cst_sexp_hidden_in_test_src_se$11),
           43,
           1085,
           1093,
           1099],
          _A_],
         0],
       _C_=
        [0,
         caml_call1
          (Expect_test_common_File[1][6],cst_sexp_hidden_in_test_src_se$13),
         41,
         1003,
         1007,
         1111],
       _D_=
        caml_call1
         (Expect_test_common_File[4][3],cst_d95af6ef6a0b4cc75644c3eda3$0);
      caml_call9
       (Expect_test_collector$1[3],
        _D_,
        _C_,
        cst_sexp_hidden_in_test_src_se$12,
        _i_,
        0,
        _B_,
        0,
        Inline_test_config,
        _z_);
      return 0}
    caml_call8
     (Ppx_inline_test_lib_Runtime[6],
      Inline_test_config,
      cst$0,
      0,
      cst_sexp_hidden_in_test_src_se$14,
      18,
      0,
      741,
      _c_);
    var
     am_running_test=Core_kernel[590],
     include=Make([0,am_running_test]),
     _t_=include[12],
     _j_=include[1],
     _k_=include[2],
     _l_=include[3],
     _m_=include[4],
     _n_=include[5],
     _o_=include[6],
     _p_=include[7],
     _q_=include[8],
     _r_=include[9],
     _s_=include[11];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_sexp_hidden_in_test$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Sexp_hidden_in_test$0);
    var
     Sexp_hidden_in_test=
      [0,
       _j_,
       _k_,
       _l_,
       _o_,
       _n_,
       _m_,
       _p_,
       _q_,
       _r_,
       _s_,
       [0,
        _t_[1],
        _t_[2],
        _t_[3],
        _t_[6],
        _t_[5],
        _t_[4],
        _t_[7],
        _t_[8],
        _t_[9],
        _t_[10],
        _t_[11]]];
    runtime.caml_register_global(52,Sexp_hidden_in_test,"Sexp_hidden_in_test");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJzZXhwX2hpZGRlbl9pbl90ZXN0LmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
