(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_ba_dim_1=runtime.caml_ba_dim_1,
     caml_ba_uint8_get16=runtime.caml_ba_uint8_get16,
     caml_ba_uint8_get32=runtime.caml_ba_uint8_get32,
     caml_ba_uint8_get64=runtime.caml_ba_uint8_get64,
     caml_ba_uint8_set16=runtime.caml_ba_uint8_set16,
     caml_ba_uint8_set32=runtime.caml_ba_uint8_set32,
     caml_ba_uint8_set64=runtime.caml_ba_uint8_set64,
     caml_bswap16=runtime.caml_bswap16,
     caml_create_bytes=runtime.caml_create_bytes,
     caml_int32_bswap=runtime.caml_int32_bswap,
     caml_int64_bswap=runtime.caml_int64_bswap,
     caml_ml_bytes_length=runtime.caml_ml_bytes_length,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    function caml_call7(f,a0,a1,a2,a3,a4,a5,a6)
     {return f.length == 7
              ?f(a0,a1,a2,a3,a4,a5,a6)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_memcmp_string=caml_string_of_jsbytes("memcmp_string"),
     cst_memcmp_string$0=caml_string_of_jsbytes("memcmp_string"),
     cst_memcmp_string$1=caml_string_of_jsbytes("memcmp_string"),
     cst_memcmp=caml_string_of_jsbytes("memcmp"),
     cst_memcmp$0=caml_string_of_jsbytes("memcmp"),
     cst_memcmp$1=caml_string_of_jsbytes("memcmp"),
     cst_blit_to_bytes=caml_string_of_jsbytes("blit_to_bytes"),
     cst_blit_to_bytes$0=caml_string_of_jsbytes("blit_to_bytes"),
     cst_blit_to_bytes$1=caml_string_of_jsbytes("blit_to_bytes"),
     cst_blit_from_bytes=caml_string_of_jsbytes("blit_from_bytes"),
     cst_blit_from_bytes$0=caml_string_of_jsbytes("blit_from_bytes"),
     cst_blit_from_bytes$1=caml_string_of_jsbytes("blit_from_bytes"),
     cst_blit_from_string=caml_string_of_jsbytes("blit_from_string"),
     cst_blit_from_string$0=caml_string_of_jsbytes("blit_from_string"),
     cst_blit_from_string$1=caml_string_of_jsbytes("blit_from_string"),
     cst_blit=caml_string_of_jsbytes("blit"),
     cst_blit$0=caml_string_of_jsbytes("blit"),
     cst_blit$1=caml_string_of_jsbytes("blit"),
     cst_of_string=caml_string_of_jsbytes("of_string"),
     cst_substring=caml_string_of_jsbytes("substring"),
     cst_copy=caml_string_of_jsbytes("copy"),
     partial=
      [11,
       caml_string_of_jsbytes(", len: "),
       [4,0,0,0,[11,caml_string_of_jsbytes(" }"),0]]],
     partial$0=
      [11,
       caml_string_of_jsbytes(", len: "),
       [4,0,0,0,[11,caml_string_of_jsbytes(" }"),0]]],
     Stdlib_sys=global_data.Stdlib__sys,
     Stdlib_bytes=global_data.Stdlib__bytes,
     Stdlib_printf=global_data.Stdlib__printf,
     Stdlib=global_data.Stdlib,
     Bigarray_compat=global_data.Bigarray_compat,
     _c_=
      [0,
       [11,
        caml_string_of_jsbytes("Bigstringaf."),
        [2,
         0,
         [11,
          caml_string_of_jsbytes(" invalid range: { buf1_len: "),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(", buf1_off: "),
            [4,
             0,
             0,
             0,
             [11,
              caml_string_of_jsbytes(", buf2_len: "),
              [4,
               0,
               0,
               0,
               [11,caml_string_of_jsbytes(", buf2_off: "),[4,0,0,0,partial]]]]]]]]]],
       caml_string_of_jsbytes
        ("Bigstringaf.%s invalid range: { buf1_len: %d, buf1_off: %d, buf2_len: %d, buf2_off: %d, len: %d }")],
     _b_=
      [0,
       [11,
        caml_string_of_jsbytes("Bigstringaf."),
        [2,
         0,
         [11,
          caml_string_of_jsbytes(" invalid range: { src_len: "),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(", src_off: "),
            [4,
             0,
             0,
             0,
             [11,
              caml_string_of_jsbytes(", dst_len: "),
              [4,
               0,
               0,
               0,
               [11,caml_string_of_jsbytes(", dst_off: "),[4,0,0,0,partial$0]]]]]]]]]],
       caml_string_of_jsbytes
        ("Bigstringaf.%s invalid range: { src_len: %d, src_off: %d, dst_len: %d, dst_off: %d, len: %d }")],
     _a_=
      [0,
       [11,
        caml_string_of_jsbytes("Bigstringaf."),
        [2,
         0,
         [11,
          caml_string_of_jsbytes(" invalid range: { buffer_len: "),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(", off: "),
            [4,
             0,
             0,
             0,
             [11,
              caml_string_of_jsbytes(", len: "),
              [4,0,0,0,[11,caml_string_of_jsbytes(" }"),0]]]]]]]]],
       caml_string_of_jsbytes
        ("Bigstringaf.%s invalid range: { buffer_len: %d, off: %d, len: %d }")];
    function create(size)
     {return caml_call3
              (Bigarray_compat[19][1],
               Bigarray_compat[13],
               Bigarray_compat[15],
               size)}
    var empty=create(0);
    function length(t){return caml_ba_dim_1(t)}
    function sub(t,off,len){return runtime.caml_ba_sub(t,off,len)}
    function invalid_bounds(op,buffer_len,off,len)
     {var message=caml_call5(Stdlib_printf[4],_a_,op,buffer_len,off,len);
      throw [0,Stdlib[6],message]}
    function invalid_bounds_blit(op,src_len,src_off,dst_len,dst_off,len)
     {var
       message=
        caml_call7
         (Stdlib_printf[4],_b_,op,src_len,src_off,dst_len,dst_off,len);
      throw [0,Stdlib[6],message]}
    function invalid_bounds_memcmp(op,buf1_len,buf1_off,buf2_len,buf2_off,len)
     {var
       message=
        caml_call7
         (Stdlib_printf[4],_c_,op,buf1_len,buf1_off,buf2_len,buf2_off,len);
      throw [0,Stdlib[6],message]}
    function copy(t,off,len)
     {var buffer_len=caml_ba_dim_1(t),_aR_=len < 0?1:0;
      if(_aR_)
       var _aS_=_aR_;
      else
       var _aT_=off < 0?1:0,_aS_=_aT_ || ((buffer_len - off | 0) < len?1:0);
      if(_aS_)invalid_bounds(cst_copy,buffer_len,off,len);
      var dst=create(len);
      runtime.bigstringaf_blit_to_bigstring(t,off,dst,0,len);
      return dst}
    function substring(t,off,len)
     {var buffer_len=caml_ba_dim_1(t),_aO_=len < 0?1:0;
      if(_aO_)
       var _aP_=_aO_;
      else
       var _aQ_=off < 0?1:0,_aP_=_aQ_ || ((buffer_len - off | 0) < len?1:0);
      if(_aP_)invalid_bounds(cst_substring,buffer_len,off,len);
      var b=caml_create_bytes(len);
      runtime.bigstringaf_blit_to_bytes(t,off,b,0,len);
      return caml_call1(Stdlib_bytes[42],b)}
    function to_string(t)
     {var len=caml_ba_dim_1(t),b=caml_create_bytes(len);
      runtime.bigstringaf_blit_to_bytes(t,0,b,0,len);
      return caml_call1(Stdlib_bytes[42],b)}
    function of_string(off,len,s)
     {var buffer_len=caml_ml_string_length(s),_aL_=len < 0?1:0;
      if(_aL_)
       var _aM_=_aL_;
      else
       var _aN_=off < 0?1:0,_aM_=_aN_ || ((buffer_len - off | 0) < len?1:0);
      if(_aM_)invalid_bounds(cst_of_string,buffer_len,off,len);
      var b=create(len);
      runtime.bigstringaf_blit_from_bytes(s,off,b,0,len);
      return b}
    function blit(src,src_off,dst,dst_off,len)
     {var src_len=caml_ba_dim_1(src),dst_len=caml_ba_dim_1(dst);
      if(len < 0)
       invalid_bounds_blit(cst_blit,src_len,src_off,dst_len,dst_off,len);
      var
       _aH_=src_off < 0?1:0,
       _aI_=_aH_ || ((src_len - src_off | 0) < len?1:0);
      if(_aI_)
       invalid_bounds_blit(cst_blit$0,src_len,src_off,dst_len,dst_off,len);
      var
       _aJ_=dst_off < 0?1:0,
       _aK_=_aJ_ || ((dst_len - dst_off | 0) < len?1:0);
      if(_aK_)
       invalid_bounds_blit(cst_blit$1,src_len,src_off,dst_len,dst_off,len);
      return runtime.bigstringaf_blit_to_bigstring
              (src,src_off,dst,dst_off,len)}
    function blit_from_string(src,src_off,dst,dst_off,len)
     {var src_len=caml_ml_string_length(src),dst_len=caml_ba_dim_1(dst);
      if(len < 0)
       invalid_bounds_blit
        (cst_blit_from_string,src_len,src_off,dst_len,dst_off,len);
      var
       _aD_=src_off < 0?1:0,
       _aE_=_aD_ || ((src_len - src_off | 0) < len?1:0);
      if(_aE_)
       invalid_bounds_blit
        (cst_blit_from_string$0,src_len,src_off,dst_len,dst_off,len);
      var
       _aF_=dst_off < 0?1:0,
       _aG_=_aF_ || ((dst_len - dst_off | 0) < len?1:0);
      if(_aG_)
       invalid_bounds_blit
        (cst_blit_from_string$1,src_len,src_off,dst_len,dst_off,len);
      return runtime.bigstringaf_blit_from_bytes(src,src_off,dst,dst_off,len)}
    function blit_from_bytes(src,src_off,dst,dst_off,len)
     {var src_len=caml_ml_bytes_length(src),dst_len=caml_ba_dim_1(dst);
      if(len < 0)
       invalid_bounds_blit
        (cst_blit_from_bytes,src_len,src_off,dst_len,dst_off,len);
      var
       _az_=src_off < 0?1:0,
       _aA_=_az_ || ((src_len - src_off | 0) < len?1:0);
      if(_aA_)
       invalid_bounds_blit
        (cst_blit_from_bytes$0,src_len,src_off,dst_len,dst_off,len);
      var
       _aB_=dst_off < 0?1:0,
       _aC_=_aB_ || ((dst_len - dst_off | 0) < len?1:0);
      if(_aC_)
       invalid_bounds_blit
        (cst_blit_from_bytes$1,src_len,src_off,dst_len,dst_off,len);
      return runtime.bigstringaf_blit_from_bytes(src,src_off,dst,dst_off,len)}
    function blit_to_bytes(src,src_off,dst,dst_off,len)
     {var src_len=caml_ba_dim_1(src),dst_len=caml_ml_bytes_length(dst);
      if(len < 0)
       invalid_bounds_blit
        (cst_blit_to_bytes,src_len,src_off,dst_len,dst_off,len);
      var
       _av_=src_off < 0?1:0,
       _aw_=_av_ || ((src_len - src_off | 0) < len?1:0);
      if(_aw_)
       invalid_bounds_blit
        (cst_blit_to_bytes$0,src_len,src_off,dst_len,dst_off,len);
      var
       _ax_=dst_off < 0?1:0,
       _ay_=_ax_ || ((dst_len - dst_off | 0) < len?1:0);
      if(_ay_)
       invalid_bounds_blit
        (cst_blit_to_bytes$1,src_len,src_off,dst_len,dst_off,len);
      return runtime.bigstringaf_blit_to_bytes(src,src_off,dst,dst_off,len)}
    function memcmp(buf1,buf1_off,buf2,buf2_off,len)
     {var buf1_len=caml_ba_dim_1(buf1),buf2_len=caml_ba_dim_1(buf2);
      if(len < 0)
       invalid_bounds_memcmp
        (cst_memcmp,buf1_len,buf1_off,buf2_len,buf2_off,len);
      var
       _ar_=buf1_off < 0?1:0,
       _as_=_ar_ || ((buf1_len - buf1_off | 0) < len?1:0);
      if(_as_)
       invalid_bounds_memcmp
        (cst_memcmp$0,buf1_len,buf1_off,buf2_len,buf2_off,len);
      var
       _at_=buf2_off < 0?1:0,
       _au_=_at_ || ((buf2_len - buf2_off | 0) < len?1:0);
      if(_au_)
       invalid_bounds_memcmp
        (cst_memcmp$1,buf1_len,buf1_off,buf2_len,buf2_off,len);
      return runtime.bigstringaf_memcmp_bigstring
              (buf1,buf1_off,buf2,buf2_off,len)}
    function memcmp_string(buf1,buf1_off,buf2,buf2_off,len)
     {var buf1_len=caml_ba_dim_1(buf1),buf2_len=caml_ml_string_length(buf2);
      if(len < 0)
       invalid_bounds_memcmp
        (cst_memcmp_string,buf1_len,buf1_off,buf2_len,buf2_off,len);
      var
       _an_=buf1_off < 0?1:0,
       _ao_=_an_ || ((buf1_len - buf1_off | 0) < len?1:0);
      if(_ao_)
       invalid_bounds_memcmp
        (cst_memcmp_string$0,buf1_len,buf1_off,buf2_len,buf2_off,len);
      var
       _ap_=buf2_off < 0?1:0,
       _aq_=_ap_ || ((buf2_len - buf2_off | 0) < len?1:0);
      if(_aq_)
       invalid_bounds_memcmp
        (cst_memcmp_string$1,buf1_len,buf1_off,buf2_len,buf2_off,len);
      return runtime.bigstringaf_memcmp_string
              (buf1,buf1_off,buf2,buf2_off,len)}
    function caml_bigstring_set_16(bs,off,i)
     {return caml_ba_uint8_set16(bs,off,caml_bswap16(i))}
    function caml_bigstring_set_32(bs,off,i)
     {return caml_ba_uint8_set32(bs,off,caml_int32_bswap(i))}
    function caml_bigstring_set_64(bs,off,i)
     {return caml_ba_uint8_set64(bs,off,caml_int64_bswap(i))}
    function caml_bigstring_get_16(bs,off)
     {return caml_bswap16(caml_ba_uint8_get16(bs,off))}
    function caml_bigstring_get_32(bs,off)
     {return caml_int32_bswap(caml_ba_uint8_get32(bs,off))}
    function caml_bigstring_get_64(bs,off)
     {return caml_int64_bswap(caml_ba_uint8_get64(bs,off))}
    function get_int16_sign_extended(x,off)
     {var _al_=Stdlib_sys[10] - 16 | 0,_am_=Stdlib_sys[10] - 16 | 0;
      return caml_bigstring_get_16(x,off) << _am_ >> _al_}
    if(Stdlib_sys[11])
     var _e_=caml_ba_uint8_set16,_d_=caml_bigstring_set_16;
    else
     var _e_=caml_bigstring_set_16,_d_=caml_ba_uint8_set16;
    if(Stdlib_sys[11])
     var _g_=caml_ba_uint8_set32,_f_=caml_bigstring_set_32;
    else
     var _g_=caml_bigstring_set_32,_f_=caml_ba_uint8_set32;
    if(Stdlib_sys[11])
     var _i_=caml_ba_uint8_set64,_h_=caml_bigstring_set_64;
    else
     var _i_=caml_bigstring_set_64,_h_=caml_ba_uint8_set64;
    if(Stdlib_sys[11])
     var _k_=caml_ba_uint8_get16,_j_=caml_bigstring_get_16;
    else
     var _k_=caml_bigstring_get_16,_j_=caml_ba_uint8_get16;
    function get_int16_sign_extended_noswap(x,off)
     {var _aj_=Stdlib_sys[10] - 16 | 0,_ak_=Stdlib_sys[10] - 16 | 0;
      return caml_ba_uint8_get16(x,off) << _ak_ >> _aj_}
    if(Stdlib_sys[11])
     var
      get_int16_sign_extended_noswap$0=get_int16_sign_extended_noswap,
      _l_=get_int16_sign_extended;
    else
     var
      get_int16_sign_extended_noswap$0=get_int16_sign_extended,
      _l_=get_int16_sign_extended_noswap;
    if(Stdlib_sys[11])
     var _n_=caml_ba_uint8_get32,_m_=caml_bigstring_get_32;
    else
     var _n_=caml_bigstring_get_32,_m_=caml_ba_uint8_get32;
    if(Stdlib_sys[11])
     var get_int64_be=caml_ba_uint8_get64,get_int64_le=caml_bigstring_get_64;
    else
     var get_int64_be=caml_bigstring_get_64,get_int64_le=caml_ba_uint8_get64;
    function caml_bigstring_unsafe_set_16(bs,off,i)
     {return caml_ba_uint8_set16(bs,off,caml_bswap16(i))}
    function caml_bigstring_unsafe_set_32(bs,off,i)
     {return caml_ba_uint8_set32(bs,off,caml_int32_bswap(i))}
    function caml_bigstring_unsafe_set_64(bs,off,i)
     {return caml_ba_uint8_set64(bs,off,caml_int64_bswap(i))}
    function caml_bigstring_unsafe_get_16(bs,off)
     {return caml_bswap16(caml_ba_uint8_get16(bs,off))}
    function caml_bigstring_unsafe_get_32(bs,off)
     {return caml_int32_bswap(caml_ba_uint8_get32(bs,off))}
    function caml_bigstring_unsafe_get_64(bs,off)
     {return caml_int64_bswap(caml_ba_uint8_get64(bs,off))}
    if(Stdlib_sys[11])
     var _p_=caml_ba_uint8_set16,_o_=caml_bigstring_unsafe_set_16;
    else
     var _p_=caml_bigstring_unsafe_set_16,_o_=caml_ba_uint8_set16;
    if(Stdlib_sys[11])
     var _r_=caml_ba_uint8_set32,_q_=caml_bigstring_unsafe_set_32;
    else
     var _r_=caml_bigstring_unsafe_set_32,_q_=caml_ba_uint8_set32;
    if(Stdlib_sys[11])
     var _t_=caml_ba_uint8_set64,_s_=caml_bigstring_unsafe_set_64;
    else
     var _t_=caml_bigstring_unsafe_set_64,_s_=caml_ba_uint8_set64;
    if(Stdlib_sys[11])
     var _v_=caml_ba_uint8_get16,_u_=caml_bigstring_unsafe_get_16;
    else
     var _v_=caml_bigstring_unsafe_get_16,_u_=caml_ba_uint8_get16;
    function unsafe_get_int16_sign_extended(x,off)
     {var _ah_=Stdlib_sys[10] - 16 | 0,_ai_=Stdlib_sys[10] - 16 | 0;
      return _u_(x,off) << _ai_ >> _ah_}
    function unsafe_get_int16_sign_extended$0(x,off)
     {var _af_=Stdlib_sys[10] - 16 | 0,_ag_=Stdlib_sys[10] - 16 | 0;
      return _v_(x,off) << _ag_ >> _af_}
    if(Stdlib_sys[11])
     var _x_=caml_ba_uint8_get32,_w_=caml_bigstring_unsafe_get_32;
    else
     var _x_=caml_bigstring_unsafe_get_32,_w_=caml_ba_uint8_get32;
    if(Stdlib_sys[11])
     var
      unsafe_get_int64_be=caml_ba_uint8_get64,
      unsafe_get_int64_le=caml_bigstring_unsafe_get_64;
    else
     var
      unsafe_get_int64_be=caml_bigstring_unsafe_get_64,
      unsafe_get_int64_le=caml_ba_uint8_get64;
    function _y_(_ae_,_ad_,_ac_,_ab_,_aa_)
     {return runtime.bigstringaf_memcmp_string(_ae_,_ad_,_ac_,_ab_,_aa_)}
    function _z_(_$_,___,_Z_,_Y_,_X_)
     {return runtime.bigstringaf_memcmp_bigstring(_$_,___,_Z_,_Y_,_X_)}
    function _A_(_W_,_V_,_U_,_T_,_S_)
     {return runtime.bigstringaf_blit_to_bytes(_W_,_V_,_U_,_T_,_S_)}
    function _B_(_R_,_Q_,_P_,_O_,_N_)
     {return runtime.bigstringaf_blit_from_bytes(_R_,_Q_,_P_,_O_,_N_)}
    function _C_(_M_,_L_,_K_,_J_,_I_)
     {return runtime.bigstringaf_blit_from_bytes(_M_,_L_,_K_,_J_,_I_)}
    var
     Bigstringaf=
      [0,
       create,
       empty,
       of_string,
       copy,
       sub,
       length,
       substring,
       to_string,
       _j_,
       _l_,
       _d_,
       _m_,
       _f_,
       get_int64_le,
       _h_,
       _k_,
       get_int16_sign_extended_noswap$0,
       _e_,
       _n_,
       _g_,
       get_int64_be,
       _i_,
       blit,
       blit_from_string,
       blit_from_bytes,
       blit_to_bytes,
       memcmp,
       memcmp_string,
       _u_,
       _v_,
       unsafe_get_int16_sign_extended,
       unsafe_get_int16_sign_extended$0,
       _o_,
       _p_,
       _w_,
       _x_,
       _q_,
       _r_,
       unsafe_get_int64_le,
       unsafe_get_int64_be,
       _s_,
       _t_,
       function(_H_,_G_,_F_,_E_,_D_)
        {return runtime.bigstringaf_blit_to_bigstring(_H_,_G_,_F_,_E_,_D_)},
       _C_,
       _B_,
       _A_,
       _z_,
       _y_];
    runtime.caml_register_global(29,Bigstringaf,"Bigstringaf");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJiaWdzdHJpbmdhZi5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
