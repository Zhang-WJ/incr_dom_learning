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
     cst_Ui_incr=caml_string_of_jsbytes("Ui_incr"),
     cst_ui_incr=caml_string_of_jsbytes("ui_incr"),
     cst_ui_incr_ui_incr_ml=caml_string_of_jsbytes("ui_incr/ui_incr.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_ui_incr$0=caml_string_of_jsbytes("ui_incr"),
     cst_ui_incr$1=caml_string_of_jsbytes("ui_incr"),
     cst_Ui_incr$0=caml_string_of_jsbytes("Ui_incr"),
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Incremental=global_data.Incremental,
     Core_kernel_Time_ns=global_data.Core_kernel__Time_ns,
     Incr_map=global_data.Incr_map,
     Incr_select=global_data.Incr_select;
    caml_call1(Ppx_module_timer_runtime[4],cst_Ui_incr);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_ui_incr);
    caml_call1(Expect_test_collector[4][1],cst_ui_incr_ui_incr_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_ui_incr$0,cst);
    var
     include=caml_call1(Incremental[78],[0]),
     _a_=caml_call1(Core_kernel_Time_ns[62],0),
     clock=caml_call3(include[76][3],0,_a_,0),
     _b_=include[1],
     _c_=include[2],
     _d_=include[3],
     _e_=include[4],
     _f_=include[5],
     _g_=include[6],
     _h_=include[7],
     _i_=include[8],
     _j_=include[9],
     _k_=include[10],
     _l_=include[11],
     _m_=include[12],
     _n_=include[13],
     _o_=include[14],
     _p_=include[15],
     _q_=include[16],
     _r_=include[17],
     _s_=include[18],
     _t_=include[19],
     _u_=include[20],
     _v_=include[21],
     _w_=include[22],
     _x_=include[23],
     _y_=include[24],
     _z_=include[25],
     _A_=include[26],
     _B_=include[27],
     _C_=include[28],
     _D_=include[29],
     _E_=include[30],
     _F_=include[31],
     _G_=include[32],
     _H_=include[33],
     _I_=include[34],
     _J_=include[35],
     _K_=include[36],
     _L_=include[37],
     _M_=include[38],
     _N_=include[39],
     _O_=include[40],
     _P_=include[41],
     _Q_=include[42],
     _R_=include[43],
     _S_=include[44],
     _T_=include[45],
     _U_=include[46],
     _V_=include[47],
     _W_=include[48],
     _X_=include[49],
     _Y_=include[50],
     _Z_=include[51],
     ___=include[52],
     _$_=include[53],
     _aa_=include[54],
     _ab_=include[55],
     _ac_=include[56],
     _ad_=include[57],
     _ae_=include[58],
     _af_=include[59],
     _ag_=include[60],
     _ah_=include[61],
     _ai_=include[62],
     _aj_=include[63],
     _ak_=include[64],
     _al_=include[65],
     _am_=include[66],
     _an_=include[67],
     _ao_=include[68],
     _ap_=include[69],
     _aq_=include[70],
     _ar_=include[71],
     _as_=include[72],
     _at_=include[73],
     _au_=include[74],
     _av_=include[75],
     _aw_=include[76],
     _ax_=include[77],
     Map=caml_call1(Incr_map[19],include),
     Select=
      caml_call1
       (Incr_select[1],
        [0,
         include[2],
         include[3],
         include[4],
         include[5],
         include[6],
         include[7],
         include[8],
         include[9],
         include[10],
         include[11],
         include[12],
         include[13],
         include[14],
         include[15],
         include[16],
         include[17],
         include[18],
         include[19],
         include[20],
         include[21],
         include[22],
         include[23],
         include[24],
         include[25],
         include[26],
         include[27],
         include[28],
         include[29],
         include[30],
         include[31],
         include[32],
         include[33],
         include[34],
         include[35],
         include[36],
         include[37],
         include[38],
         include[39],
         include[40],
         include[41],
         include[42],
         include[43],
         include[44],
         include[45],
         include[46],
         include[47],
         include[48],
         include[49],
         include[50],
         include[51],
         include[52],
         include[53],
         include[54],
         include[55],
         include[56],
         include[57],
         include[58],
         include[59],
         include[60],
         include[61],
         include[62],
         include[63],
         include[64],
         include[65],
         include[66],
         include[67],
         include[68],
         include[69],
         include[70],
         include[71],
         include[72],
         include[73],
         include[74],
         include[75],
         include[76],
         include[77]]);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_ui_incr$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Ui_incr$0);
    var
     Ui_incr=
      [0,
       include,
       clock,
       _b_,
       _c_,
       _d_,
       _e_,
       _f_,
       _g_,
       _h_,
       _i_,
       _j_,
       _k_,
       _l_,
       _m_,
       _n_,
       _o_,
       _p_,
       _q_,
       _r_,
       _s_,
       _t_,
       _u_,
       _v_,
       _w_,
       _x_,
       _y_,
       _z_,
       _A_,
       _B_,
       _C_,
       _D_,
       _E_,
       _F_,
       _G_,
       _H_,
       _I_,
       _J_,
       _K_,
       _L_,
       _M_,
       _N_,
       _O_,
       _P_,
       _Q_,
       _R_,
       _S_,
       _T_,
       _U_,
       _V_,
       _W_,
       _X_,
       _Y_,
       _Z_,
       ___,
       _$_,
       _aa_,
       _ab_,
       _ac_,
       _ad_,
       _ae_,
       _af_,
       _ag_,
       _ah_,
       _ai_,
       _aj_,
       _ak_,
       _al_,
       _am_,
       _an_,
       _ao_,
       _ap_,
       _aq_,
       _ar_,
       _as_,
       _at_,
       _au_,
       _av_,
       _aw_,
       _ax_,
       Map,
       Select];
    runtime.caml_register_global(15,Ui_incr,"Ui_incr");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ1aV9pbmNyLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
