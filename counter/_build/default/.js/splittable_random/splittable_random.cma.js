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
    var
     global_data=runtime.caml_get_global_data(),
     int64$0=runtime.caml_int64_create_lo_mi_hi(1,0,0),
     cst_float_bounds_are_not_finit=
      caml_string_of_jsbytes("float: bounds are not finite numbers"),
     cst_float_bounds_are_crossed=
      caml_string_of_jsbytes("float: bounds are crossed"),
     cst_int64_crossed_bounds=caml_string_of_jsbytes("int64: crossed bounds"),
     cst_splittable_random=caml_string_of_jsbytes("splittable_random"),
     golden_gamma=runtime.caml_int64_create_lo_mi_hi(4881429,7977343,40503),
     cst_src_splittable_random_ml=
      caml_string_of_jsbytes("src/splittable_random.ml"),
     cst_src_splittable_random_ml$0=
      caml_string_of_jsbytes("src/splittable_random.ml"),
     cst_let_int64_1L_in_fun_unit_f=
      caml_string_of_jsbytes
       ("let int64 = 1L in fun () -> unit_float_from_int64 int64"),
     cst_unit_float_from_int64=caml_string_of_jsbytes("unit_float_from_int64"),
     Base_Int=global_data.Base__Int,
     Assert_failure=global_data.Assert_failure,
     Base=global_data.Base,
     Base_Float=global_data.Base__Float,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Base_Int64=global_data.Base__Int64,
     Base_Int63=global_data.Base__Int63,
     Base_Error=global_data.Base__Error,
     Base_Random=global_data.Base__Random,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Base_Int32=global_data.Base__Int32,
     Base_Nativeint=global_data.Base__Nativeint;
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_splittable_random);
    var
     popcount=Base_Int64[77],
     _o_=[0,caml_string_of_jsbytes("src/splittable_random.ml"),289,6],
     _k_=[0,caml_string_of_jsbytes("hi")],
     _l_=[0,caml_string_of_jsbytes("lo")],
     _m_=[0,caml_string_of_jsbytes("hi")],
     _n_=[0,caml_string_of_jsbytes("lo")],
     _h_=[0,caml_string_of_jsbytes("hi")],
     _i_=[0,caml_string_of_jsbytes("lo")],
     _j_=runtime.caml_int64_create_lo_mi_hi(0,0,0),
     _f_=runtime.caml_int64_create_lo_mi_hi(1,0,0),
     _g_=runtime.caml_int64_create_lo_mi_hi(11184810,11184810,43690),
     _d_=runtime.caml_int64_create_lo_mi_hi(15001017,4680988,48984),
     _e_=runtime.caml_int64_create_lo_mi_hi(3215851,4832019,38096),
     _b_=runtime.caml_int64_create_lo_mi_hi(5606605,11524077,65361),
     _c_=runtime.caml_int64_create_lo_mi_hi(8776787,12189210,50382),
     _a_=runtime.caml_int64_create_lo_mi_hi(1,0,0);
    function of_int(seed)
     {return [0,caml_call1(Base_Int64[102],seed),golden_gamma]}
    function copy(param)
     {var seed=param[1],odd_gamma=param[2];return [0,seed,odd_gamma]}
    function mix_bits(z,n)
     {var _ad_=caml_call2(Base_Int64[101][25],z,n);
      return caml_call2(Base_Int64[101][21],z,_ad_)}
    function mix64(z)
     {var
       _ab_=mix_bits(z,33),
       z$0=caml_call2(Base_Int64[101][3],_ab_,_b_),
       _ac_=mix_bits(z$0,33),
       z$1=caml_call2(Base_Int64[101][3],_ac_,_c_);
      return mix_bits(z$1,33)}
    function next_seed(t)
     {var next=caml_call2(Base_Int64[101][1],t[1],t[2]);
      t[1] = next;
      return next}
    function of_seed_and_gamma(seed,gamma)
     {var
       seed$0=mix64(seed),
       _Z_=mix_bits(gamma,30),
       z=caml_call2(Base_Int64[101][3],_Z_,_d_),
       ___=mix_bits(z,27),
       z$0=caml_call2(Base_Int64[101][3],___,_e_),
       _$_=mix_bits(z$0,31),
       z$1=caml_call2(Base_Int64[101][20],_$_,_f_),
       _aa_=caml_call2(Base_Int64[101][25],z$1,1),
       n=caml_call1(popcount,caml_call2(Base_Int64[101][21],z$1,_aa_)),
       odd_gamma=
        caml_call2(Base_Int[16],n,24)
         ?caml_call2(Base_Int64[101][21],z$1,_g_)
         :z$1;
      return [0,seed$0,odd_gamma]}
    function random_int64(random_state)
     {return caml_call3
              (Base_Random[18][14],random_state,Base_Int64[91],Base_Int64[90])}
    function create(random_state)
     {var seed=random_int64(random_state),gamma=random_int64(random_state);
      return of_seed_and_gamma(seed,gamma)}
    function split(t)
     {var seed=next_seed(t),gamma=next_seed(t);
      return of_seed_and_gamma(seed,gamma)}
    function next_int64(t){return mix64(next_seed(t))}
    function perturb(t,salt)
     {var
       _Y_=mix64(caml_call1(Base_Int64[102],salt)),
       next=caml_call2(Base_Int64[101][1],t[1],_Y_);
      t[1] = next;
      return 0}
    function bool(state)
     {var x=next_int64(state),_X_=caml_call2(Base_Int64[101][20],x,_a_);
      return caml_call2(Base_Int64[101][9],_X_,x)}
    function int64(state,lo,hi)
     {if(caml_call2(Base_Int64[101][10],lo,hi))
       {var
         _R_=[0,[1,[0,_h_,[0,caml_call1(Base[134],hi),0]]],0],
         _S_=[0,[1,[0,_i_,[0,caml_call1(Base[134],lo),0]]],_R_],
         _T_=
          [1,
           [0,caml_call1(Sexplib0_Sexp_conv[7],cst_int64_crossed_bounds),_S_]];
        caml_call1(Base_Error[27],_T_)}
      var maximum=caml_call2(Base_Int64[101][2],hi,lo);
      if(caml_call2(Base_Int64[101][9],maximum,Base_Int64[90]))
       {var
         _U_=Base_Int64[90],
         _V_=next_int64(state),
         _W_=caml_call2(Base_Int64[101][19],_V_,_U_);
        return caml_call2(Base_Int64[101][1],_W_,lo)}
      if(caml_call2(Base_Int64[101][7],maximum,_j_))
       for(;;)
        {var
          _O_=Base_Int64[90],
          _P_=next_int64(state),
          draw$0=caml_call2(Base_Int64[101][19],_P_,_O_),
          _Q_=caml_call1(Base_Int64[70],maximum),
          remainder=caml_call2(Base_Int64[56],draw$0,_Q_),
          _M_=caml_call2(Base_Int64[101][2],Base_Int64[90],maximum),
          _N_=caml_call2(Base_Int64[101][2],draw$0,remainder);
         if(caml_call2(Base_Int64[101][8],_N_,_M_))
          return caml_call2(Base_Int64[101][1],remainder,lo);
         continue}
      for(;;)
       {var draw=next_int64(state);
        if
         (caml_call2(Base_Int64[101][8],lo,draw)
          &&
          caml_call2(Base_Int64[101][8],draw,hi))
         return draw;
        continue}}
    function int$0(state,lo,hi)
     {var
       lo$0=caml_call1(Base_Int64[102],lo),
       hi$0=caml_call1(Base_Int64[102],hi),
       _L_=int64(state,lo$0,hi$0);
      return caml_call1(Base_Int64[109],_L_)}
    function int32(state,lo,hi)
     {var
       lo$0=caml_call1(Base_Int64[104],lo),
       hi$0=caml_call1(Base_Int64[104],hi),
       _K_=int64(state,lo$0,hi$0);
      return caml_call1(Base_Int64[110],_K_)}
    function nativeint(state,lo,hi)
     {var
       lo$0=caml_call1(Base_Int64[106],lo),
       hi$0=caml_call1(Base_Int64[106],hi),
       _J_=int64(state,lo$0,hi$0);
      return caml_call1(Base_Int64[111],_J_)}
    function int63(state,lo,hi)
     {var
       lo$0=caml_call1(Base_Int63[85],lo),
       hi$0=caml_call1(Base_Int63[85],hi),
       _I_=int64(state,lo$0,hi$0);
      return caml_call1(Base_Int63[111],_I_)}
    var double_ulp=caml_call2(Base[215],2.,-53.);
    function unit_float_from_int64(int64)
     {var
       _G_=caml_call2(Base_Int64[101][25],int64,11),
       _H_=caml_call1(Base_Int64[3],_G_);
      return caml_call2(Base[213],_H_,double_ulp)}
    function unit_float(state)
     {return unit_float_from_int64(next_int64(state))}
    function float$0(state,lo$1,hi$0)
     {var
       _y_=caml_call1(Base_Float[117],lo$1),
       _z_=_y_?caml_call1(Base_Float[117],hi$0):_y_;
      if(1 - _z_)
       {var
         _A_=[0,[1,[0,_k_,[0,caml_call1(Base[113],hi$0),0]]],0],
         _B_=[0,[1,[0,_l_,[0,caml_call1(Base[113],lo$1),0]]],_A_],
         _C_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_float_bounds_are_not_finit),
            _B_]];
        caml_call1(Base[222],_C_)}
      if(caml_call2(Base_Float[12],lo$1,hi$0))
       {var
         _D_=[0,[1,[0,_m_,[0,caml_call1(Base[113],hi$0),0]]],0],
         _E_=[0,[1,[0,_n_,[0,caml_call1(Base[113],lo$1),0]]],_D_],
         _F_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_float_bounds_are_crossed),
            _E_]];
        caml_call1(Base[222],_F_)}
      var lo=lo$1,hi=hi$0;
      for(;;)
       {var range=caml_call2(Base[212],hi,lo);
        if(caml_call1(Base_Float[117],range))
         {var _v_=unit_float(state),_w_=caml_call2(Base[213],_v_,range);
          return caml_call2(Base[211],lo,_w_)}
        var _x_=caml_call2(Base[211],hi,lo),lo$0=caml_call2(Base[214],_x_,2.);
        if(bool(state)){var hi=lo$0;continue}
        var lo=lo$0;
        continue}}
    if(Ppx_bench_lib_Benchmark_accumu[3])
     {var
       f=
        function(param)
         {return function(param){return unit_float_from_int64(int64$0)}};
      caml_call8
       (Ppx_bench_lib_Benchmark_accumu[5],
        cst_unit_float_from_int64,
        cst_let_int64_1L_in_fun_unit_f,
        cst_src_splittable_random_ml$0,
        cst_src_splittable_random_ml,
        278,
        0,
        99,
        [0,f])}
    function Make(M)
     {function bits_to_represent(t)
       {if(caml_call2(M[12],t,M[44]))
         {var t$0=[0,t],n=[0,0];
          for(;;)
           {if(caml_call2(M[15],t$0[1],M[44]))
             {t$0[1] = caml_call2(M[79],t$0[1],1);
              caml_call1(Base_Int[81],n);
              continue}
            return n[1]}}
        throw [0,Assert_failure,_o_]}
      function log_uniform(state,lo,hi)
       {var
         min_bits=bits_to_represent(lo),
         max_bits=bits_to_represent(hi),
         n=int$0(state,min_bits,max_bits),
         _q_=caml_call2(M[78],M[45],n),
         _r_=caml_call1(M[71],_q_),
         _s_=caml_call2(M[20],hi,_r_);
        if(caml_call2(Base_Int[18],n,0))
         var _t_=M[44];
        else
         var _p_=caml_call1(Base_Int[71],n),_t_=caml_call2(M[78],M[45],_p_);
        var _u_=caml_call2(M[21],lo,_t_);
        return caml_call3(M[102],state,_u_,_s_)}
      return [0,log_uniform]}
    var
     t_sexp_grammar=Base_Int[1],
     of_float=Base_Int[2],
     to_float=Base_Int[3],
     of_int_exn=Base_Int[4],
     to_int_exn=Base_Int[5],
     hash_fold_t=Base_Int[6],
     hash=Base_Int[7],
     t_of_sexp=Base_Int[8],
     sexp_of_t=Base_Int[9],
     of_string=Base_Int[10],
     to_string=Base_Int[11],
     symbol=Base_Int[12],
     symbol$0=Base_Int[13],
     symbol$1=Base_Int[14],
     symbol$2=Base_Int[15],
     symbol$3=Base_Int[16],
     symbol$4=Base_Int[17],
     equal=Base_Int[18],
     compare=Base_Int[19],
     min=Base_Int[20],
     max=Base_Int[21],
     ascending=Base_Int[22],
     descending=Base_Int[23],
     between=Base_Int[24],
     clamp_exn=Base_Int[25],
     clamp=Base_Int[26],
     comparator=Base_Int[27],
     validate_lbound=Base_Int[28],
     validate_ubound=Base_Int[29],
     validate_bound=Base_Int[30],
     pp=Base_Int[31],
     validate_positive=Base_Int[32],
     validate_non_negative=Base_Int[33],
     validate_negative=Base_Int[34],
     validate_non_positive=Base_Int[35],
     is_positive=Base_Int[36],
     is_non_negative=Base_Int[37],
     is_negative=Base_Int[38],
     is_non_positive=Base_Int[39],
     sign=Base_Int[40],
     invariant=Base_Int[41],
     Hex=Base_Int[42],
     to_string_hum=Base_Int[43],
     zero=Base_Int[44],
     one=Base_Int[45],
     minus_one=Base_Int[46],
     symbol$5=Base_Int[47],
     symbol$6=Base_Int[48],
     symbol$7=Base_Int[49],
     symbol$8=Base_Int[50],
     neg=Base_Int[51],
     symbol$9=Base_Int[52],
     symbol$10=Base_Int[53],
     symbol$11=Base_Int[54],
     symbol$12=Base_Int[55],
     rem=Base_Int[56],
     symbol$13=Base_Int[57],
     land=Base_Int[58],
     lor=Base_Int[59],
     lxor=Base_Int[60],
     lnot=Base_Int[61],
     lsl=Base_Int[62],
     asr=Base_Int[63],
     round=Base_Int[64],
     round_towards_zero=Base_Int[65],
     round_down=Base_Int[66],
     round_up=Base_Int[67],
     round_nearest=Base_Int[68],
     abs=Base_Int[69],
     succ=Base_Int[70],
     pred=Base_Int[71],
     pow=Base_Int[72],
     bit_and=Base_Int[73],
     bit_or=Base_Int[74],
     bit_xor=Base_Int[75],
     bit_not=Base_Int[76],
     popcount$0=Base_Int[77],
     shift_left=Base_Int[78],
     shift_right=Base_Int[79],
     decr=Base_Int[80],
     incr=Base_Int[81],
     of_int32_exn=Base_Int[82],
     to_int32_exn=Base_Int[83],
     of_int64_exn=Base_Int[84],
     to_int64=Base_Int[85],
     of_nativeint_exn=Base_Int[86],
     to_nativeint_exn=Base_Int[87],
     of_float_unchecked=Base_Int[88],
     num_bits=Base_Int[89],
     max_value=Base_Int[90],
     min_value=Base_Int[91],
     lsr=Base_Int[92],
     shift_right_logical=Base_Int[93],
     ceil_pow2=Base_Int[94],
     floor_pow2=Base_Int[95],
     ceil_log2=Base_Int[96],
     floor_log2=Base_Int[97],
     is_pow2=Base_Int[98],
     clz=Base_Int[99],
     ctz=Base_Int[100],
     O=Base_Int[101],
     For_int=
      Make
       ([0,
         t_sexp_grammar,
         of_float,
         to_float,
         of_int_exn,
         to_int_exn,
         hash_fold_t,
         hash,
         t_of_sexp,
         sexp_of_t,
         of_string,
         to_string,
         symbol,
         symbol$0,
         symbol$1,
         symbol$2,
         symbol$3,
         symbol$4,
         equal,
         compare,
         min,
         max,
         ascending,
         descending,
         between,
         clamp_exn,
         clamp,
         comparator,
         validate_lbound,
         validate_ubound,
         validate_bound,
         pp,
         validate_positive,
         validate_non_negative,
         validate_negative,
         validate_non_positive,
         is_positive,
         is_non_negative,
         is_negative,
         is_non_positive,
         sign,
         invariant,
         Hex,
         to_string_hum,
         zero,
         one,
         minus_one,
         symbol$5,
         symbol$6,
         symbol$7,
         symbol$8,
         neg,
         symbol$9,
         symbol$10,
         symbol$11,
         symbol$12,
         rem,
         symbol$13,
         land,
         lor,
         lxor,
         lnot,
         lsl,
         asr,
         round,
         round_towards_zero,
         round_down,
         round_up,
         round_nearest,
         abs,
         succ,
         pred,
         pow,
         bit_and,
         bit_or,
         bit_xor,
         bit_not,
         popcount$0,
         shift_left,
         shift_right,
         decr,
         incr,
         of_int32_exn,
         to_int32_exn,
         of_int64_exn,
         to_int64,
         of_nativeint_exn,
         to_nativeint_exn,
         of_float_unchecked,
         num_bits,
         max_value,
         min_value,
         lsr,
         shift_right_logical,
         ceil_pow2,
         floor_pow2,
         ceil_log2,
         floor_log2,
         is_pow2,
         clz,
         ctz,
         O,
         int$0]),
     t_sexp_grammar$0=Base_Int32[1],
     of_float$0=Base_Int32[2],
     to_float$0=Base_Int32[3],
     of_int_exn$0=Base_Int32[4],
     to_int_exn$0=Base_Int32[5],
     hash_fold_t$0=Base_Int32[6],
     hash$0=Base_Int32[7],
     t_of_sexp$0=Base_Int32[8],
     sexp_of_t$0=Base_Int32[9],
     of_string$0=Base_Int32[10],
     to_string$0=Base_Int32[11],
     symbol$14=Base_Int32[12],
     symbol$15=Base_Int32[13],
     symbol$16=Base_Int32[14],
     symbol$17=Base_Int32[15],
     symbol$18=Base_Int32[16],
     symbol$19=Base_Int32[17],
     equal$0=Base_Int32[18],
     compare$0=Base_Int32[19],
     min$0=Base_Int32[20],
     max$0=Base_Int32[21],
     ascending$0=Base_Int32[22],
     descending$0=Base_Int32[23],
     between$0=Base_Int32[24],
     clamp_exn$0=Base_Int32[25],
     clamp$0=Base_Int32[26],
     comparator$0=Base_Int32[27],
     validate_lbound$0=Base_Int32[28],
     validate_ubound$0=Base_Int32[29],
     validate_bound$0=Base_Int32[30],
     pp$0=Base_Int32[31],
     validate_positive$0=Base_Int32[32],
     validate_non_negative$0=Base_Int32[33],
     validate_negative$0=Base_Int32[34],
     validate_non_positive$0=Base_Int32[35],
     is_positive$0=Base_Int32[36],
     is_non_negative$0=Base_Int32[37],
     is_negative$0=Base_Int32[38],
     is_non_positive$0=Base_Int32[39],
     sign$0=Base_Int32[40],
     invariant$0=Base_Int32[41],
     Hex$0=Base_Int32[42],
     to_string_hum$0=Base_Int32[43],
     zero$0=Base_Int32[44],
     one$0=Base_Int32[45],
     minus_one$0=Base_Int32[46],
     symbol$20=Base_Int32[47],
     symbol$21=Base_Int32[48],
     symbol$22=Base_Int32[49],
     symbol$23=Base_Int32[50],
     neg$0=Base_Int32[51],
     symbol$24=Base_Int32[52],
     symbol$25=Base_Int32[53],
     symbol$26=Base_Int32[54],
     symbol$27=Base_Int32[55],
     rem$0=Base_Int32[56],
     symbol$28=Base_Int32[57],
     land$0=Base_Int32[58],
     lor$0=Base_Int32[59],
     lxor$0=Base_Int32[60],
     lnot$0=Base_Int32[61],
     lsl$0=Base_Int32[62],
     asr$0=Base_Int32[63],
     round$0=Base_Int32[64],
     round_towards_zero$0=Base_Int32[65],
     round_down$0=Base_Int32[66],
     round_up$0=Base_Int32[67],
     round_nearest$0=Base_Int32[68],
     abs$0=Base_Int32[69],
     succ$0=Base_Int32[70],
     pred$0=Base_Int32[71],
     pow$0=Base_Int32[72],
     bit_and$0=Base_Int32[73],
     bit_or$0=Base_Int32[74],
     bit_xor$0=Base_Int32[75],
     bit_not$0=Base_Int32[76],
     popcount$1=Base_Int32[77],
     shift_left$0=Base_Int32[78],
     shift_right$0=Base_Int32[79],
     decr$0=Base_Int32[80],
     incr$0=Base_Int32[81],
     of_int32_exn$0=Base_Int32[82],
     to_int32_exn$0=Base_Int32[83],
     of_int64_exn$0=Base_Int32[84],
     to_int64$0=Base_Int32[85],
     of_nativeint_exn$0=Base_Int32[86],
     to_nativeint_exn$0=Base_Int32[87],
     of_float_unchecked$0=Base_Int32[88],
     num_bits$0=Base_Int32[89],
     max_value$0=Base_Int32[90],
     min_value$0=Base_Int32[91],
     lsr$0=Base_Int32[92],
     shift_right_logical$0=Base_Int32[93],
     ceil_pow2$0=Base_Int32[94],
     floor_pow2$0=Base_Int32[95],
     ceil_log2$0=Base_Int32[96],
     floor_log2$0=Base_Int32[97],
     is_pow2$0=Base_Int32[98],
     clz$0=Base_Int32[99],
     ctz$0=Base_Int32[100],
     O$0=Base_Int32[101],
     For_int32=
      Make
       ([0,
         t_sexp_grammar$0,
         of_float$0,
         to_float$0,
         of_int_exn$0,
         to_int_exn$0,
         hash_fold_t$0,
         hash$0,
         t_of_sexp$0,
         sexp_of_t$0,
         of_string$0,
         to_string$0,
         symbol$14,
         symbol$15,
         symbol$16,
         symbol$17,
         symbol$18,
         symbol$19,
         equal$0,
         compare$0,
         min$0,
         max$0,
         ascending$0,
         descending$0,
         between$0,
         clamp_exn$0,
         clamp$0,
         comparator$0,
         validate_lbound$0,
         validate_ubound$0,
         validate_bound$0,
         pp$0,
         validate_positive$0,
         validate_non_negative$0,
         validate_negative$0,
         validate_non_positive$0,
         is_positive$0,
         is_non_negative$0,
         is_negative$0,
         is_non_positive$0,
         sign$0,
         invariant$0,
         Hex$0,
         to_string_hum$0,
         zero$0,
         one$0,
         minus_one$0,
         symbol$20,
         symbol$21,
         symbol$22,
         symbol$23,
         neg$0,
         symbol$24,
         symbol$25,
         symbol$26,
         symbol$27,
         rem$0,
         symbol$28,
         land$0,
         lor$0,
         lxor$0,
         lnot$0,
         lsl$0,
         asr$0,
         round$0,
         round_towards_zero$0,
         round_down$0,
         round_up$0,
         round_nearest$0,
         abs$0,
         succ$0,
         pred$0,
         pow$0,
         bit_and$0,
         bit_or$0,
         bit_xor$0,
         bit_not$0,
         popcount$1,
         shift_left$0,
         shift_right$0,
         decr$0,
         incr$0,
         of_int32_exn$0,
         to_int32_exn$0,
         of_int64_exn$0,
         to_int64$0,
         of_nativeint_exn$0,
         to_nativeint_exn$0,
         of_float_unchecked$0,
         num_bits$0,
         max_value$0,
         min_value$0,
         lsr$0,
         shift_right_logical$0,
         ceil_pow2$0,
         floor_pow2$0,
         ceil_log2$0,
         floor_log2$0,
         is_pow2$0,
         clz$0,
         ctz$0,
         O$0,
         int32]),
     t_sexp_grammar$1=Base_Int63[1],
     of_float$1=Base_Int63[2],
     to_float$1=Base_Int63[3],
     of_int_exn$1=Base_Int63[4],
     to_int_exn$1=Base_Int63[5],
     hash_fold_t$1=Base_Int63[6],
     hash$1=Base_Int63[7],
     t_of_sexp$1=Base_Int63[8],
     sexp_of_t$1=Base_Int63[9],
     of_string$1=Base_Int63[10],
     to_string$1=Base_Int63[11],
     symbol$29=Base_Int63[12],
     symbol$30=Base_Int63[13],
     symbol$31=Base_Int63[14],
     symbol$32=Base_Int63[15],
     symbol$33=Base_Int63[16],
     symbol$34=Base_Int63[17],
     equal$1=Base_Int63[18],
     compare$1=Base_Int63[19],
     min$1=Base_Int63[20],
     max$1=Base_Int63[21],
     ascending$1=Base_Int63[22],
     descending$1=Base_Int63[23],
     between$1=Base_Int63[24],
     clamp_exn$1=Base_Int63[25],
     clamp$1=Base_Int63[26],
     comparator$1=Base_Int63[27],
     validate_lbound$1=Base_Int63[28],
     validate_ubound$1=Base_Int63[29],
     validate_bound$1=Base_Int63[30],
     pp$1=Base_Int63[31],
     validate_positive$1=Base_Int63[32],
     validate_non_negative$1=Base_Int63[33],
     validate_negative$1=Base_Int63[34],
     validate_non_positive$1=Base_Int63[35],
     is_positive$1=Base_Int63[36],
     is_non_negative$1=Base_Int63[37],
     is_negative$1=Base_Int63[38],
     is_non_positive$1=Base_Int63[39],
     sign$1=Base_Int63[40],
     invariant$1=Base_Int63[41],
     Hex$1=Base_Int63[42],
     to_string_hum$1=Base_Int63[43],
     zero$1=Base_Int63[44],
     one$1=Base_Int63[45],
     minus_one$1=Base_Int63[46],
     symbol$35=Base_Int63[47],
     symbol$36=Base_Int63[48],
     symbol$37=Base_Int63[49],
     symbol$38=Base_Int63[50],
     neg$1=Base_Int63[51],
     symbol$39=Base_Int63[52],
     symbol$40=Base_Int63[53],
     symbol$41=Base_Int63[54],
     symbol$42=Base_Int63[55],
     rem$1=Base_Int63[56],
     symbol$43=Base_Int63[57],
     land$1=Base_Int63[58],
     lor$1=Base_Int63[59],
     lxor$1=Base_Int63[60],
     lnot$1=Base_Int63[61],
     lsl$1=Base_Int63[62],
     asr$1=Base_Int63[63],
     round$1=Base_Int63[64],
     round_towards_zero$1=Base_Int63[65],
     round_down$1=Base_Int63[66],
     round_up$1=Base_Int63[67],
     round_nearest$1=Base_Int63[68],
     abs$1=Base_Int63[69],
     succ$1=Base_Int63[70],
     pred$1=Base_Int63[71],
     pow$1=Base_Int63[72],
     bit_and$1=Base_Int63[73],
     bit_or$1=Base_Int63[74],
     bit_xor$1=Base_Int63[75],
     bit_not$1=Base_Int63[76],
     popcount$2=Base_Int63[77],
     shift_left$1=Base_Int63[78],
     shift_right$1=Base_Int63[79],
     decr$1=Base_Int63[80],
     incr$1=Base_Int63[81],
     of_int32_exn$1=Base_Int63[82],
     to_int32_exn$1=Base_Int63[83],
     of_int64_exn$1=Base_Int63[84],
     to_int64$1=Base_Int63[85],
     of_nativeint_exn$1=Base_Int63[86],
     to_nativeint_exn$1=Base_Int63[87],
     of_float_unchecked$1=Base_Int63[88],
     num_bits$1=Base_Int63[89],
     max_value$1=Base_Int63[90],
     min_value$1=Base_Int63[91],
     lsr$1=Base_Int63[92],
     shift_right_logical$1=Base_Int63[93],
     ceil_pow2$1=Base_Int63[94],
     floor_pow2$1=Base_Int63[95],
     ceil_log2$1=Base_Int63[96],
     is_pow2$1=Base_Int63[97],
     clz$1=Base_Int63[98],
     ctz$1=Base_Int63[99],
     O$1=Base_Int63[100],
     floor_log2$1=Base_Int63[119],
     For_int63=
      Make
       ([0,
         t_sexp_grammar$1,
         of_float$1,
         to_float$1,
         of_int_exn$1,
         to_int_exn$1,
         hash_fold_t$1,
         hash$1,
         t_of_sexp$1,
         sexp_of_t$1,
         of_string$1,
         to_string$1,
         symbol$29,
         symbol$30,
         symbol$31,
         symbol$32,
         symbol$33,
         symbol$34,
         equal$1,
         compare$1,
         min$1,
         max$1,
         ascending$1,
         descending$1,
         between$1,
         clamp_exn$1,
         clamp$1,
         comparator$1,
         validate_lbound$1,
         validate_ubound$1,
         validate_bound$1,
         pp$1,
         validate_positive$1,
         validate_non_negative$1,
         validate_negative$1,
         validate_non_positive$1,
         is_positive$1,
         is_non_negative$1,
         is_negative$1,
         is_non_positive$1,
         sign$1,
         invariant$1,
         Hex$1,
         to_string_hum$1,
         zero$1,
         one$1,
         minus_one$1,
         symbol$35,
         symbol$36,
         symbol$37,
         symbol$38,
         neg$1,
         symbol$39,
         symbol$40,
         symbol$41,
         symbol$42,
         rem$1,
         symbol$43,
         land$1,
         lor$1,
         lxor$1,
         lnot$1,
         lsl$1,
         asr$1,
         round$1,
         round_towards_zero$1,
         round_down$1,
         round_up$1,
         round_nearest$1,
         abs$1,
         succ$1,
         pred$1,
         pow$1,
         bit_and$1,
         bit_or$1,
         bit_xor$1,
         bit_not$1,
         popcount$2,
         shift_left$1,
         shift_right$1,
         decr$1,
         incr$1,
         of_int32_exn$1,
         to_int32_exn$1,
         of_int64_exn$1,
         to_int64$1,
         of_nativeint_exn$1,
         to_nativeint_exn$1,
         of_float_unchecked$1,
         num_bits$1,
         max_value$1,
         min_value$1,
         lsr$1,
         shift_right_logical$1,
         ceil_pow2$1,
         floor_pow2$1,
         ceil_log2$1,
         floor_log2$1,
         is_pow2$1,
         clz$1,
         ctz$1,
         O$1,
         int63]),
     t_sexp_grammar$2=Base_Int64[1],
     of_float$2=Base_Int64[2],
     to_float$2=Base_Int64[3],
     of_int_exn$2=Base_Int64[4],
     to_int_exn$2=Base_Int64[5],
     hash_fold_t$2=Base_Int64[6],
     hash$2=Base_Int64[7],
     t_of_sexp$2=Base_Int64[8],
     sexp_of_t$2=Base_Int64[9],
     of_string$2=Base_Int64[10],
     to_string$2=Base_Int64[11],
     symbol$44=Base_Int64[12],
     symbol$45=Base_Int64[13],
     symbol$46=Base_Int64[14],
     symbol$47=Base_Int64[15],
     symbol$48=Base_Int64[16],
     symbol$49=Base_Int64[17],
     equal$2=Base_Int64[18],
     compare$2=Base_Int64[19],
     min$2=Base_Int64[20],
     max$2=Base_Int64[21],
     ascending$2=Base_Int64[22],
     descending$2=Base_Int64[23],
     between$2=Base_Int64[24],
     clamp_exn$2=Base_Int64[25],
     clamp$2=Base_Int64[26],
     comparator$2=Base_Int64[27],
     validate_lbound$2=Base_Int64[28],
     validate_ubound$2=Base_Int64[29],
     validate_bound$2=Base_Int64[30],
     pp$2=Base_Int64[31],
     validate_positive$2=Base_Int64[32],
     validate_non_negative$2=Base_Int64[33],
     validate_negative$2=Base_Int64[34],
     validate_non_positive$2=Base_Int64[35],
     is_positive$2=Base_Int64[36],
     is_non_negative$2=Base_Int64[37],
     is_negative$2=Base_Int64[38],
     is_non_positive$2=Base_Int64[39],
     sign$2=Base_Int64[40],
     invariant$2=Base_Int64[41],
     Hex$2=Base_Int64[42],
     to_string_hum$2=Base_Int64[43],
     zero$2=Base_Int64[44],
     one$2=Base_Int64[45],
     minus_one$2=Base_Int64[46],
     symbol$50=Base_Int64[47],
     symbol$51=Base_Int64[48],
     symbol$52=Base_Int64[49],
     symbol$53=Base_Int64[50],
     neg$2=Base_Int64[51],
     symbol$54=Base_Int64[52],
     symbol$55=Base_Int64[53],
     symbol$56=Base_Int64[54],
     symbol$57=Base_Int64[55],
     rem$2=Base_Int64[56],
     symbol$58=Base_Int64[57],
     land$2=Base_Int64[58],
     lor$2=Base_Int64[59],
     lxor$2=Base_Int64[60],
     lnot$2=Base_Int64[61],
     lsl$2=Base_Int64[62],
     asr$2=Base_Int64[63],
     round$2=Base_Int64[64],
     round_towards_zero$2=Base_Int64[65],
     round_down$2=Base_Int64[66],
     round_up$2=Base_Int64[67],
     round_nearest$2=Base_Int64[68],
     abs$2=Base_Int64[69],
     succ$2=Base_Int64[70],
     pred$2=Base_Int64[71],
     pow$2=Base_Int64[72],
     bit_and$2=Base_Int64[73],
     bit_or$2=Base_Int64[74],
     bit_xor$2=Base_Int64[75],
     bit_not$2=Base_Int64[76],
     popcount$3=Base_Int64[77],
     shift_left$2=Base_Int64[78],
     shift_right$2=Base_Int64[79],
     decr$2=Base_Int64[80],
     incr$2=Base_Int64[81],
     of_int32_exn$2=Base_Int64[82],
     to_int32_exn$2=Base_Int64[83],
     of_int64_exn$2=Base_Int64[84],
     to_int64$2=Base_Int64[85],
     of_nativeint_exn$2=Base_Int64[86],
     to_nativeint_exn$2=Base_Int64[87],
     of_float_unchecked$2=Base_Int64[88],
     num_bits$2=Base_Int64[89],
     max_value$2=Base_Int64[90],
     min_value$2=Base_Int64[91],
     lsr$2=Base_Int64[92],
     shift_right_logical$2=Base_Int64[93],
     ceil_pow2$2=Base_Int64[94],
     floor_pow2$2=Base_Int64[95],
     ceil_log2$2=Base_Int64[96],
     floor_log2$2=Base_Int64[97],
     is_pow2$2=Base_Int64[98],
     clz$2=Base_Int64[99],
     ctz$2=Base_Int64[100],
     O$2=Base_Int64[101],
     For_int64=
      Make
       ([0,
         t_sexp_grammar$2,
         of_float$2,
         to_float$2,
         of_int_exn$2,
         to_int_exn$2,
         hash_fold_t$2,
         hash$2,
         t_of_sexp$2,
         sexp_of_t$2,
         of_string$2,
         to_string$2,
         symbol$44,
         symbol$45,
         symbol$46,
         symbol$47,
         symbol$48,
         symbol$49,
         equal$2,
         compare$2,
         min$2,
         max$2,
         ascending$2,
         descending$2,
         between$2,
         clamp_exn$2,
         clamp$2,
         comparator$2,
         validate_lbound$2,
         validate_ubound$2,
         validate_bound$2,
         pp$2,
         validate_positive$2,
         validate_non_negative$2,
         validate_negative$2,
         validate_non_positive$2,
         is_positive$2,
         is_non_negative$2,
         is_negative$2,
         is_non_positive$2,
         sign$2,
         invariant$2,
         Hex$2,
         to_string_hum$2,
         zero$2,
         one$2,
         minus_one$2,
         symbol$50,
         symbol$51,
         symbol$52,
         symbol$53,
         neg$2,
         symbol$54,
         symbol$55,
         symbol$56,
         symbol$57,
         rem$2,
         symbol$58,
         land$2,
         lor$2,
         lxor$2,
         lnot$2,
         lsl$2,
         asr$2,
         round$2,
         round_towards_zero$2,
         round_down$2,
         round_up$2,
         round_nearest$2,
         abs$2,
         succ$2,
         pred$2,
         pow$2,
         bit_and$2,
         bit_or$2,
         bit_xor$2,
         bit_not$2,
         popcount$3,
         shift_left$2,
         shift_right$2,
         decr$2,
         incr$2,
         of_int32_exn$2,
         to_int32_exn$2,
         of_int64_exn$2,
         to_int64$2,
         of_nativeint_exn$2,
         to_nativeint_exn$2,
         of_float_unchecked$2,
         num_bits$2,
         max_value$2,
         min_value$2,
         lsr$2,
         shift_right_logical$2,
         ceil_pow2$2,
         floor_pow2$2,
         ceil_log2$2,
         floor_log2$2,
         is_pow2$2,
         clz$2,
         ctz$2,
         O$2,
         int64]),
     t_sexp_grammar$3=Base_Nativeint[1],
     of_float$3=Base_Nativeint[2],
     to_float$3=Base_Nativeint[3],
     of_int_exn$3=Base_Nativeint[4],
     to_int_exn$3=Base_Nativeint[5],
     hash_fold_t$3=Base_Nativeint[6],
     hash$3=Base_Nativeint[7],
     t_of_sexp$3=Base_Nativeint[8],
     sexp_of_t$3=Base_Nativeint[9],
     of_string$3=Base_Nativeint[10],
     to_string$3=Base_Nativeint[11],
     symbol$59=Base_Nativeint[12],
     symbol$60=Base_Nativeint[13],
     symbol$61=Base_Nativeint[14],
     symbol$62=Base_Nativeint[15],
     symbol$63=Base_Nativeint[16],
     symbol$64=Base_Nativeint[17],
     equal$3=Base_Nativeint[18],
     compare$3=Base_Nativeint[19],
     min$3=Base_Nativeint[20],
     max$3=Base_Nativeint[21],
     ascending$3=Base_Nativeint[22],
     descending$3=Base_Nativeint[23],
     between$3=Base_Nativeint[24],
     clamp_exn$3=Base_Nativeint[25],
     clamp$3=Base_Nativeint[26],
     comparator$3=Base_Nativeint[27],
     validate_lbound$3=Base_Nativeint[28],
     validate_ubound$3=Base_Nativeint[29],
     validate_bound$3=Base_Nativeint[30],
     pp$3=Base_Nativeint[31],
     validate_positive$3=Base_Nativeint[32],
     validate_non_negative$3=Base_Nativeint[33],
     validate_negative$3=Base_Nativeint[34],
     validate_non_positive$3=Base_Nativeint[35],
     is_positive$3=Base_Nativeint[36],
     is_non_negative$3=Base_Nativeint[37],
     is_negative$3=Base_Nativeint[38],
     is_non_positive$3=Base_Nativeint[39],
     sign$3=Base_Nativeint[40],
     invariant$3=Base_Nativeint[41],
     Hex$3=Base_Nativeint[42],
     to_string_hum$3=Base_Nativeint[43],
     zero$3=Base_Nativeint[44],
     one$3=Base_Nativeint[45],
     minus_one$3=Base_Nativeint[46],
     symbol$65=Base_Nativeint[47],
     symbol$66=Base_Nativeint[48],
     symbol$67=Base_Nativeint[49],
     symbol$68=Base_Nativeint[50],
     neg$3=Base_Nativeint[51],
     symbol$69=Base_Nativeint[52],
     symbol$70=Base_Nativeint[53],
     symbol$71=Base_Nativeint[54],
     symbol$72=Base_Nativeint[55],
     rem$3=Base_Nativeint[56],
     symbol$73=Base_Nativeint[57],
     land$3=Base_Nativeint[58],
     lor$3=Base_Nativeint[59],
     lxor$3=Base_Nativeint[60],
     lnot$3=Base_Nativeint[61],
     lsl$3=Base_Nativeint[62],
     asr$3=Base_Nativeint[63],
     round$3=Base_Nativeint[64],
     round_towards_zero$3=Base_Nativeint[65],
     round_down$3=Base_Nativeint[66],
     round_up$3=Base_Nativeint[67],
     round_nearest$3=Base_Nativeint[68],
     abs$3=Base_Nativeint[69],
     succ$3=Base_Nativeint[70],
     pred$3=Base_Nativeint[71],
     pow$3=Base_Nativeint[72],
     bit_and$3=Base_Nativeint[73],
     bit_or$3=Base_Nativeint[74],
     bit_xor$3=Base_Nativeint[75],
     bit_not$3=Base_Nativeint[76],
     popcount$4=Base_Nativeint[77],
     shift_left$3=Base_Nativeint[78],
     shift_right$3=Base_Nativeint[79],
     decr$3=Base_Nativeint[80],
     incr$3=Base_Nativeint[81],
     of_int32_exn$3=Base_Nativeint[82],
     to_int32_exn$3=Base_Nativeint[83],
     of_int64_exn$3=Base_Nativeint[84],
     to_int64$3=Base_Nativeint[85],
     of_nativeint_exn$3=Base_Nativeint[86],
     to_nativeint_exn$3=Base_Nativeint[87],
     of_float_unchecked$3=Base_Nativeint[88],
     num_bits$3=Base_Nativeint[89],
     max_value$3=Base_Nativeint[90],
     min_value$3=Base_Nativeint[91],
     lsr$3=Base_Nativeint[92],
     shift_right_logical$3=Base_Nativeint[93],
     ceil_pow2$3=Base_Nativeint[94],
     floor_pow2$3=Base_Nativeint[95],
     ceil_log2$3=Base_Nativeint[96],
     floor_log2$3=Base_Nativeint[97],
     is_pow2$3=Base_Nativeint[98],
     clz$3=Base_Nativeint[99],
     ctz$3=Base_Nativeint[100],
     O$3=Base_Nativeint[101],
     For_nativeint=
      Make
       ([0,
         t_sexp_grammar$3,
         of_float$3,
         to_float$3,
         of_int_exn$3,
         to_int_exn$3,
         hash_fold_t$3,
         hash$3,
         t_of_sexp$3,
         sexp_of_t$3,
         of_string$3,
         to_string$3,
         symbol$59,
         symbol$60,
         symbol$61,
         symbol$62,
         symbol$63,
         symbol$64,
         equal$3,
         compare$3,
         min$3,
         max$3,
         ascending$3,
         descending$3,
         between$3,
         clamp_exn$3,
         clamp$3,
         comparator$3,
         validate_lbound$3,
         validate_ubound$3,
         validate_bound$3,
         pp$3,
         validate_positive$3,
         validate_non_negative$3,
         validate_negative$3,
         validate_non_positive$3,
         is_positive$3,
         is_non_negative$3,
         is_negative$3,
         is_non_positive$3,
         sign$3,
         invariant$3,
         Hex$3,
         to_string_hum$3,
         zero$3,
         one$3,
         minus_one$3,
         symbol$65,
         symbol$66,
         symbol$67,
         symbol$68,
         neg$3,
         symbol$69,
         symbol$70,
         symbol$71,
         symbol$72,
         rem$3,
         symbol$73,
         land$3,
         lor$3,
         lxor$3,
         lnot$3,
         lsl$3,
         asr$3,
         round$3,
         round_towards_zero$3,
         round_down$3,
         round_up$3,
         round_nearest$3,
         abs$3,
         succ$3,
         pred$3,
         pow$3,
         bit_and$3,
         bit_or$3,
         bit_xor$3,
         bit_not$3,
         popcount$4,
         shift_left$3,
         shift_right$3,
         decr$3,
         incr$3,
         of_int32_exn$3,
         to_int32_exn$3,
         of_int64_exn$3,
         to_int64$3,
         of_nativeint_exn$3,
         to_nativeint_exn$3,
         of_float_unchecked$3,
         num_bits$3,
         max_value$3,
         min_value$3,
         lsr$3,
         shift_right_logical$3,
         ceil_pow2$3,
         floor_pow2$3,
         ceil_log2$3,
         floor_log2$3,
         is_pow2$3,
         clz$3,
         ctz$3,
         O$3,
         nativeint]),
     int$1=For_int[1],
     int32$0=For_int32[1],
     int63$0=For_int63[1],
     int64$1=For_int64[1],
     nativeint$0=For_nativeint[1];
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    var
     Splittable_random=
      [0,
       [0,create,of_int,perturb,copy,split],
       bool,
       int$0,
       int32,
       int63,
       int64,
       nativeint,
       float$0,
       unit_float,
       [0,int$1,int32$0,int63$0,int64$1,nativeint$0]];
    runtime.caml_register_global(40,Splittable_random,"Splittable_random");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJzcGxpdHRhYmxlX3JhbmRvbS5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
