(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_register_global=runtime.caml_register_global,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Expect_test_collector_File$0=
      caml_string_of_jsbytes
       ("Expect_test_collector.File.Digest.of_string, unexpected length"),
     cst_Expect_test_collector_File$1=
      caml_string_of_jsbytes("Expect_test_collector.File.Digest.of_string"),
     cst_Expect_test_collector_File=
      caml_string_of_jsbytes("Expect_test_collector.File.Location.compare"),
     cst_end_pos=caml_string_of_jsbytes("end_pos"),
     cst_filename=caml_string_of_jsbytes("filename"),
     cst_line_number=caml_string_of_jsbytes("line_number"),
     cst_line_start=caml_string_of_jsbytes("line_start"),
     cst_start_pos=caml_string_of_jsbytes("start_pos"),
     cst_end_pos$0=caml_string_of_jsbytes("end_pos"),
     cst_start_pos$0=caml_string_of_jsbytes("start_pos"),
     cst_line_start$0=caml_string_of_jsbytes("line_start"),
     cst_line_number$0=caml_string_of_jsbytes("line_number"),
     cst_filename$0=caml_string_of_jsbytes("filename"),
     tp_loc=caml_string_of_jsbytes("file.ml.Location.T.t"),
     Base=global_data.Base,
     Base_Ppx_compare_lib=global_data.Base__Ppx_compare_lib,
     Assert_failure=global_data.Assert_failure,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Stdlib_filename=global_data.Stdlib__filename,
     Base_String=global_data.Base__String,
     Base_Comparable=global_data.Base__Comparable,
     Expect_test_common=[0];
    caml_register_global(28,Expect_test_common,"Expect_test_common__");
    var Expect_test_common_Import=[0];
    caml_register_global
     (29,Expect_test_common_Import,"Expect_test_common__Import");
    var
     hash_fold_t=Base_String[20],
     t_of_sexp=Base_String[21],
     sexp_of_t=Base_String[22],
     of_string=Base_String[23],
     to_string=Base_String[24],
     symbol=Base_String[25],
     symbol$0=Base_String[26],
     symbol$1=Base_String[27],
     symbol$2=Base_String[28],
     symbol$3=Base_String[29],
     symbol$4=Base_String[30],
     compare=Base_String[31],
     min=Base_String[32],
     max=Base_String[33],
     ascending=Base_String[34],
     descending=Base_String[35],
     between=Base_String[36],
     clamp_exn=Base_String[37],
     clamp=Base_String[38],
     comparator=Base_String[39],
     validate_lbound=Base_String[40],
     validate_ubound=Base_String[41],
     validate_bound=Base_String[42],
     pp=Base_String[43],
     equal=Base_String[108],
     _b_=[0,caml_string_of_jsbytes("end_pos")],
     _c_=[0,caml_string_of_jsbytes("start_pos")],
     _d_=[0,caml_string_of_jsbytes("line_start")],
     _e_=[0,caml_string_of_jsbytes("line_number")],
     _f_=[0,caml_string_of_jsbytes("filename")],
     _a_=[0,caml_string_of_jsbytes("common/file.ml"),74,22],
     _l_=[0,caml_string_of_jsbytes("body_location")],
     _m_=[0,caml_string_of_jsbytes("extid_location")],
     _n_=[0,caml_string_of_jsbytes("body")],
     _o_=[0,caml_string_of_jsbytes("tag")],
     _h_=[0,caml_string_of_jsbytes("Output")],
     _i_=[0,caml_string_of_jsbytes("Unreachable")],
     _j_=[0,caml_string_of_jsbytes("Exact")],
     _k_=[0,caml_string_of_jsbytes("Pretty")];
    function relative_to(dir,t)
     {return caml_call1(Stdlib_filename[5],t)
              ?caml_call2(Stdlib_filename[4],dir,t)
              :t}
    var
     Name=
      [0,
       relative_to,
       hash_fold_t,
       function(_O_){return runtime.Base_hash_string(_O_)},
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
       pp];
    try
     {var switch$0=0,v=runtime.caml_sys_getcwd(0);switch$0 = 1}
    catch(exn)
     {exn = caml_wrap_exception(exn);var dir_or_error=[0,3458171,exn]}
    if(switch$0)var dir_or_error=[0,17724,v];
    function initial_dir(param)
     {if(3458171 <= dir_or_error[1]){var exn=dir_or_error[2];throw exn}
      var v=dir_or_error[2];
      return v}
    function t_of_sexp$0(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc,sexp);
      var
       field_sexps=sexp[1],
       filename_field=[0,0],
       line_number_field=[0,0],
       line_start_field=[0,0],
       start_pos_field=[0,0],
       end_pos_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _D_=param[1];
          if(1 === _D_[0])
           {var _E_=_D_[1];
            if(_E_)
             {var _F_=_E_[1];
              if(0 === _F_[0])
               {var _G_=_E_[2],_H_=_F_[1],switch$0=0;
                if(! _G_ || ! _G_[2])switch$0 = 1;
                if(switch$0)
                 {var
                   tail=param[2],
                   field_sexp$5=
                    function(_N_)
                     {function field_sexp(param)
                       {if(_N_)
                         {if(_N_[2])throw [0,Assert_failure,_a_];
                          var x=_N_[1];
                          return x}
                        return caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,sexp)}
                      return field_sexp},
                   field_sexp=field_sexp$5(_G_);
                  if(caml_string_notequal(_H_,cst_end_pos))
                   if(caml_string_notequal(_H_,cst_filename))
                    if(caml_string_notequal(_H_,cst_line_number))
                     if(caml_string_notequal(_H_,cst_line_start))
                      if(caml_string_notequal(_H_,cst_start_pos))
                       {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_H_,extra[1]]}
                      else
                       if(start_pos_field[1])
                        duplicates[1] = [0,_H_,duplicates[1]];
                       else
                        {var
                          field_sexp$0=field_sexp(0),
                          fvalue=caml_call1(Base[119],field_sexp$0);
                         start_pos_field[1] = [0,fvalue]}
                     else
                      if(line_start_field[1])
                       duplicates[1] = [0,_H_,duplicates[1]];
                      else
                       {var
                         field_sexp$1=field_sexp(0),
                         fvalue$0=caml_call1(Base[119],field_sexp$1);
                        line_start_field[1] = [0,fvalue$0]}
                    else
                     if(line_number_field[1])
                      duplicates[1] = [0,_H_,duplicates[1]];
                     else
                      {var
                        field_sexp$2=field_sexp(0),
                        fvalue$1=caml_call1(Base[119],field_sexp$2);
                       line_number_field[1] = [0,fvalue$1]}
                   else
                    if(filename_field[1])
                     duplicates[1] = [0,_H_,duplicates[1]];
                    else
                     {var
                       field_sexp$3=field_sexp(0),
                       fvalue$2=caml_call1(Name[4],field_sexp$3);
                      filename_field[1] = [0,fvalue$2]}
                  else
                   if(end_pos_field[1])
                    duplicates[1] = [0,_H_,duplicates[1]];
                   else
                    {var
                      field_sexp$4=field_sexp(0),
                      fvalue$3=caml_call1(Base[119],field_sexp$4);
                     end_pos_field[1] = [0,fvalue$3]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,_D_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc,duplicates[1],sexp);
        if(extra[1])
         return caml_call3(Sexplib0_Sexp_conv_error[13],tp_loc,extra[1],sexp);
        var
         _I_=filename_field[1],
         _J_=line_number_field[1],
         _K_=line_start_field[1],
         _L_=start_pos_field[1],
         _M_=end_pos_field[1];
        if(_I_ && _J_ && _K_ && _L_ && _M_)
         {var
           end_pos_value=_M_[1],
           start_pos_value=_L_[1],
           line_start_value=_K_[1],
           line_number_value=_J_[1],
           filename_value=_I_[1];
          return [0,
                  filename_value,
                  line_number_value,
                  line_start_value,
                  start_pos_value,
                  end_pos_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[15],
                 tp_loc,
                 sexp,
                 [0,
                  [0,0 === filename_field[1]?1:0,cst_filename$0],
                  [0,
                   [0,0 === line_number_field[1]?1:0,cst_line_number$0],
                   [0,
                    [0,0 === line_start_field[1]?1:0,cst_line_start$0],
                    [0,
                     [0,0 === start_pos_field[1]?1:0,cst_start_pos$0],
                     [0,[0,0 === end_pos_field[1]?1:0,cst_end_pos$0],0]]]]])}}
    function sexp_of_t$0(param)
     {var
       v_end_pos=param[5],
       v_start_pos=param[4],
       v_line_start=param[3],
       v_line_number=param[2],
       v_filename=param[1],
       arg=caml_call1(Base[120],v_end_pos),
       bnds=[0,[1,[0,_b_,[0,arg,0]]],0],
       arg$0=caml_call1(Base[120],v_start_pos),
       bnds$0=[0,[1,[0,_c_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Base[120],v_line_start),
       bnds$1=[0,[1,[0,_d_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Base[120],v_line_number),
       bnds$2=[0,[1,[0,_e_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call1(Name[5],v_filename),
       bnds$3=[0,[1,[0,_f_,[0,arg$3,0]]],bnds$2];
      return [1,bnds$3]}
    function compare$0(a,b)
     {if(caml_call2(Name[14],a[1],b[1]))
       {if(caml_call2(Base_Ppx_compare_lib[1],a,b))return 0;
        var n=caml_call2(Name[15],a[1],b[1]);
        if(0 === n)
         {var n$0=caml_call2(Base[115],a[2],b[2]);
          if(0 === n$0)
           {var n$1=caml_call2(Base[115],a[3],b[3]);
            if(0 === n$1)
             {var n$2=caml_call2(Base[115],a[4],b[4]);
              return 0 === n$2?caml_call2(Base[115],a[5],b[5]):n$2}
            return n$1}
          return n$0}
        return n}
      return caml_call1(Base[221],cst_Expect_test_collector_File)}
    var
     include=caml_call1(Base_Comparable[10],[0,compare$0,sexp_of_t$0]),
     symbol$5=include[1],
     symbol$6=include[2],
     symbol$7=include[3],
     symbol$8=include[4],
     symbol$9=include[5],
     symbol$10=include[6],
     equal$0=include[7],
     compare$1=include[8],
     min$0=include[9],
     max$0=include[10],
     ascending$0=include[11],
     descending$0=include[12],
     between$0=include[13],
     clamp_exn$0=include[14],
     clamp$0=include[15],
     comparator$0=include[16],
     validate_lbound$0=include[17],
     validate_ubound$0=include[18],
     validate_bound$0=include[19];
    function beginning_of_file(filename){return [0,filename,1,0,0,0]}
    var sexp_of_t$1=Base[165],compare$2=Base[160];
    function to_string$0(t){return t}
    function of_string$0(s)
     {var expected_length=32;
      if(caml_call2(Base[201],runtime.caml_ml_string_length(s),32))
       caml_call1(Base[221],cst_Expect_test_collector_File$0);
      var _B_=caml_call2(Base[181],expected_length,1),_A_=0;
      if(! (_B_ < 0))
       {var i=_A_;
        for(;;)
         {var match=runtime.caml_string_get(s,i),switch$0=0;
          if(58 <= match)
           {if(! (5 < (match - 97 | 0) >>> 0))switch$0 = 1}
          else
           if(48 <= match)switch$0 = 1;
          if(! switch$0)
           caml_call1(Base[221],cst_Expect_test_collector_File$1);
          var _C_=i + 1 | 0;
          if(_B_ !== i){var i=_C_;continue}
          break}}
      return s}
    var
     _g_=
      [0,
       t_of_sexp$0,
       sexp_of_t$0,
       beginning_of_file,
       symbol$5,
       symbol$6,
       symbol$7,
       symbol$8,
       symbol$9,
       symbol$10,
       equal$0,
       compare$1,
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
       validate_bound$0],
     Expect_test_common_File=
      [0,
       Name,
       initial_dir,
       _g_,
       [0,sexp_of_t$1,compare$2,of_string$0,to_string$0]];
    caml_register_global
     (38,Expect_test_common_File,"Expect_test_common__File");
    function sexp_of_t$2(of_a,param)
     {if(typeof param === "number")
       return 0 === param?_h_:_i_;
      else
       {if(0 === param[0])
         {var v0=param[1],v0$0=caml_call1(Sexplib0_Sexp_conv[7],v0);
          return [1,[0,_j_,[0,v0$0,0]]]}
        var v0$1=param[1],v0$2=caml_call1(of_a,v0$1);
        return [1,[0,_k_,[0,v0$2,0]]]}}
    function compare$3(cmp_a,a_001,match)
     {if(caml_call2(Base_Ppx_compare_lib[1],a_001,match))return 0;
      var switch$0=0;
      if(typeof a_001 === "number")
       {if(0 === a_001)
         {var switch$1=0;
          if(typeof match === "number")
           {if(0 === match)return 0}
          else
           if(0 === match[0])switch$1 = 1;
          if(! switch$1)return -1}
        else
         if(typeof match === "number")
          {if(1 === match)return 0;switch$0 = 1}
         else
          if(1 === match[0])return 1}
      else
       {if(0 === a_001[0])
         {var _y_=a_001[1];
          if(typeof match !== "number" && 0 === match[0])
           {var b_004=match[1];
            return caml_call2(Base_Ppx_compare_lib[4][8],_y_,b_004)}
          return -1}
        var _z_=a_001[1];
        if(typeof match === "number")
         {if(0 !== match)return -1;switch$0 = 1}
        else
         if(0 !== match[0])
          {var b_006=match[1];return caml_call2(cmp_a,_z_,b_006)}}
      return switch$0?1:1}
    function equal$1(cmp_a,a_007,match)
     {if(caml_call2(Base_Ppx_compare_lib[1],a_007,match))return 1;
      var switch$0=0;
      if(typeof a_007 === "number")
       {if(0 === a_007)
         {var switch$1=0;
          if(typeof match === "number")
           {if(0 === match)return 1}
          else
           if(0 === match[0])switch$1 = 1;
          if(! switch$1)return 0}
        else
         if(typeof match === "number")
          {if(1 === match)return 1;switch$0 = 1}
         else
          if(1 === match[0])return 0}
      else
       {if(0 === a_007[0])
         {var _w_=a_007[1];
          if(typeof match !== "number" && 0 === match[0])
           {var b_010=match[1];
            return caml_call2(Base_Ppx_compare_lib[4][21],_w_,b_010)}
          return 0}
        var _x_=a_007[1];
        if(typeof match === "number")
         {if(0 !== match)return 0;switch$0 = 1}
        else
         if(0 !== match[0])
          {var b_012=match[1];return caml_call2(cmp_a,_x_,b_012)}}
      return switch$0?0:0}
    function map_pretty(t,f)
     {if(typeof t !== "number" && 1 === t[0])
       {var x=t[1];return [1,caml_call1(f,x)]}
      return t}
    var Body=[0,sexp_of_t$2,compare$3,equal$1,map_pretty];
    function sexp_of_t$3(of_a,param)
     {var
       v_body_location=param[4],
       v_extid_location=param[3],
       v_body=param[2],
       v_tag=param[1],
       arg=caml_call1(_g_[2],v_body_location),
       bnds=[0,[1,[0,_l_,[0,arg,0]]],0],
       arg$0=caml_call1(_g_[2],v_extid_location),
       bnds$0=[0,[1,[0,_m_,[0,arg$0,0]]],bnds],
       arg$1=caml_call2(Body[1],of_a,v_body),
       bnds$1=[0,[1,[0,_n_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call2(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[7],v_tag),
       bnds$2=[0,[1,[0,_o_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function compare$4(cmp_a,a_013,b_014)
     {if(caml_call2(Base_Ppx_compare_lib[1],a_013,b_014))return 0;
      var
       n=
        caml_call3
         (Base_Ppx_compare_lib[4][12],
          Base_Ppx_compare_lib[4][8],
          a_013[1],
          b_014[1]);
      if(0 === n)
       {var n$0=caml_call3(Body[2],cmp_a,a_013[2],b_014[2]);
        if(0 === n$0)
         {var n$1=caml_call2(_g_[11],a_013[3],b_014[3]);
          return 0 === n$1?caml_call2(_g_[11],a_013[4],b_014[4]):n$1}
        return n$0}
      return n}
    function equal$2(cmp_a,a_019,b_020)
     {if(caml_call2(Base_Ppx_compare_lib[1],a_019,b_020))return 1;
      var
       _s_=
        caml_call3
         (Base_Ppx_compare_lib[4][25],
          Base_Ppx_compare_lib[4][21],
          a_019[1],
          b_020[1]);
      if(_s_)
       {var _t_=caml_call3(Body[3],cmp_a,a_019[2],b_020[2]);
        if(_t_)
         {var _u_=caml_call2(_g_[10],a_019[3],b_020[3]);
          if(_u_)return caml_call2(_g_[10],a_019[4],b_020[4]);
          var _v_=_u_}
        else
         var _v_=_t_}
      else
       var _v_=_s_;
      return _v_}
    function sexp_of_t$4(v){return sexp_of_t$3(Sexplib0_Sexp_conv[7],v)}
    function compare$5(a_025,b_026)
     {return compare$4(Base_Ppx_compare_lib[4][8],a_025,b_026)}
    var Raw=[0,sexp_of_t$4,compare$5];
    function map_pretty$0(init,f)
     {var _p_=init[4],_q_=init[3],_r_=caml_call2(Body[4],init[2],f);
      return [0,init[1],_r_,_q_,_p_]}
    var
     Expect_test_common_Expectation=
      [0,Body,sexp_of_t$3,compare$4,equal$2,Raw,map_pretty$0];
    caml_register_global
     (39,Expect_test_common_Expectation,"Expect_test_common__Expectation");
    var Std=[0],Expect_test_common$0=[0,Std];
    caml_register_global(40,Expect_test_common$0,"Expect_test_common");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJleHBlY3RfdGVzdF9jb21tb24uY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbImVxdWFsIl0sInNvdXJjZXMiOlsiL1VzZXJzL3poYW5nd2VpanVuLy5vcGFtLzQuMTEuMS9saWIvb2NhbWwvc3RyaW5nLm1saSJdLCJtYXBwaW5ncyI6Ijs7STs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWtYQUE7Ozs7Ozs7Ozs7Ozs7Ozs7TTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQUFBQTs7Ozs7Ozs7Ozs7Ozs7O00iLCJzb3VyY2VzQ29udGVudCI6WyIoKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9DYW1sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICBYYXZpZXIgTGVyb3ksIHByb2pldCBDcmlzdGFsLCBJTlJJQSBSb2NxdWVuY291cnQgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgIENvcHlyaWdodCAxOTk2IEluc3RpdHV0IE5hdGlvbmFsIGRlIFJlY2hlcmNoZSBlbiBJbmZvcm1hdGlxdWUgZXQgICAgICopXG4oKiAgICAgZW4gQXV0b21hdGlxdWUuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKiAgIEFsbCByaWdodHMgcmVzZXJ2ZWQuICBUaGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mICAgICopXG4oKiAgIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAyLjEsIHdpdGggdGhlICAgICAgICAgICopXG4oKiAgIHNwZWNpYWwgZXhjZXB0aW9uIG9uIGxpbmtpbmcgZGVzY3JpYmVkIGluIHRoZSBmaWxlIExJQ0VOU0UuICAgICAgICAgICopXG4oKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICopXG4oKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiopXG5cbigqKiBTdHJpbmcgb3BlcmF0aW9ucy5cblxuICBBIHN0cmluZyBpcyBhbiBpbW11dGFibGUgZGF0YSBzdHJ1Y3R1cmUgdGhhdCBjb250YWlucyBhXG4gIGZpeGVkLWxlbmd0aCBzZXF1ZW5jZSBvZiAoc2luZ2xlLWJ5dGUpIGNoYXJhY3RlcnMuIEVhY2ggY2hhcmFjdGVyXG4gIGNhbiBiZSBhY2Nlc3NlZCBpbiBjb25zdGFudCB0aW1lIHRocm91Z2ggaXRzIGluZGV4LlxuXG4gIEdpdmVuIGEgc3RyaW5nIFtzXSBvZiBsZW5ndGggW2xdLCB3ZSBjYW4gYWNjZXNzIGVhY2ggb2YgdGhlIFtsXVxuICBjaGFyYWN0ZXJzIG9mIFtzXSB2aWEgaXRzIGluZGV4IGluIHRoZSBzZXF1ZW5jZS4gSW5kZXhlcyBzdGFydCBhdFxuICBbMF0sIGFuZCB3ZSB3aWxsIGNhbGwgYW4gaW5kZXggdmFsaWQgaW4gW3NdIGlmIGl0IGZhbGxzIHdpdGhpbiB0aGVcbiAgcmFuZ2UgW1swLi4ubC0xXV0gKGluY2x1c2l2ZSkuIEEgcG9zaXRpb24gaXMgdGhlIHBvaW50IGJldHdlZW4gdHdvXG4gIGNoYXJhY3RlcnMgb3IgYXQgdGhlIGJlZ2lubmluZyBvciBlbmQgb2YgdGhlIHN0cmluZy4gIFdlIGNhbGwgYVxuICBwb3NpdGlvbiB2YWxpZCBpbiBbc10gaWYgaXQgZmFsbHMgd2l0aGluIHRoZSByYW5nZSBbWzAuLi5sXV1cbiAgKGluY2x1c2l2ZSkuIE5vdGUgdGhhdCB0aGUgY2hhcmFjdGVyIGF0IGluZGV4IFtuXSBpcyBiZXR3ZWVuXG4gIHBvc2l0aW9ucyBbbl0gYW5kIFtuKzFdLlxuXG4gIFR3byBwYXJhbWV0ZXJzIFtzdGFydF0gYW5kIFtsZW5dIGFyZSBzYWlkIHRvIGRlc2lnbmF0ZSBhIHZhbGlkXG4gIHN1YnN0cmluZyBvZiBbc10gaWYgW2xlbiA+PSAwXSBhbmQgW3N0YXJ0XSBhbmQgW3N0YXJ0K2xlbl0gYXJlXG4gIHZhbGlkIHBvc2l0aW9ucyBpbiBbc10uXG5cbiAgTm90ZTogT0NhbWwgc3RyaW5ncyB1c2VkIHRvIGJlIG1vZGlmaWFibGUgaW4gcGxhY2UsIGZvciBpbnN0YW5jZSB2aWFcbiAgdGhlIHshU3RyaW5nLnNldH0gYW5kIHshU3RyaW5nLmJsaXR9IGZ1bmN0aW9ucyBkZXNjcmliZWQgYmVsb3cuIFRoaXNcbiAgdXNhZ2UgaXMgb25seSBwb3NzaWJsZSB3aGVuIHRoZSBjb21waWxlciBpcyBwdXQgaW4gXCJ1bnNhZmUtc3RyaW5nXCJcbiAgbW9kZSBieSBnaXZpbmcgdGhlIFstdW5zYWZlLXN0cmluZ10gY29tbWFuZC1saW5lIG9wdGlvbi4gVGhpc1xuICBjb21wYXRpYmlsaXR5IG1vZGUgbWFrZXMgdGhlIHR5cGVzIFtzdHJpbmddIGFuZCBbYnl0ZXNdIChzZWUgbW9kdWxlXG4gIHshQnl0ZXN9KSBpbnRlcmNoYW5nZWFibGUgc28gdGhhdCBmdW5jdGlvbnMgZXhwZWN0aW5nIGJ5dGUgc2VxdWVuY2VzXG4gIGNhbiBhbHNvIGFjY2VwdCBzdHJpbmdzIGFzIGFyZ3VtZW50cyBhbmQgbW9kaWZ5IHRoZW0uXG5cbiAgVGhlIGRpc3RpbmN0aW9uIGJldHdlZW4gW2J5dGVzXSBhbmQgW3N0cmluZ10gd2FzIGludHJvZHVjZWQgaW4gT0NhbWxcbiAgNC4wMiwgYW5kIHRoZSBcInVuc2FmZS1zdHJpbmdcIiBjb21wYXRpYmlsaXR5IG1vZGUgd2FzIHRoZSBkZWZhdWx0XG4gIHVudGlsIE9DYW1sIDQuMDUuIFN0YXJ0aW5nIHdpdGggNC4wNiwgdGhlIGNvbXBhdGliaWxpdHkgbW9kZSBpc1xuICBvcHQtaW47IHdlIGludGVuZCB0byByZW1vdmUgdGhlIG9wdGlvbiBpbiB0aGUgZnV0dXJlLlxuKilcblxuZXh0ZXJuYWwgbGVuZ3RoIDogc3RyaW5nIC0+IGludCA9IFwiJXN0cmluZ19sZW5ndGhcIlxuKCoqIFJldHVybiB0aGUgbGVuZ3RoIChudW1iZXIgb2YgY2hhcmFjdGVycykgb2YgdGhlIGdpdmVuIHN0cmluZy4gKilcblxuZXh0ZXJuYWwgZ2V0IDogc3RyaW5nIC0+IGludCAtPiBjaGFyID0gXCIlc3RyaW5nX3NhZmVfZ2V0XCJcbigqKiBbU3RyaW5nLmdldCBzIG5dIHJldHVybnMgdGhlIGNoYXJhY3RlciBhdCBpbmRleCBbbl0gaW4gc3RyaW5nIFtzXS5cbiAgIFlvdSBjYW4gYWxzbyB3cml0ZSBbcy5bbl1dIGluc3RlYWQgb2YgW1N0cmluZy5nZXQgcyBuXS5cbiAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtuXSBub3QgYSB2YWxpZCBpbmRleCBpbiBbc10uICopXG5cblxuZXh0ZXJuYWwgc2V0IDogYnl0ZXMgLT4gaW50IC0+IGNoYXIgLT4gdW5pdCA9IFwiJXN0cmluZ19zYWZlX3NldFwiXG4gIFtAQG9jYW1sLmRlcHJlY2F0ZWQgXCJVc2UgQnl0ZXMuc2V0IGluc3RlYWQuXCJdXG4oKiogW1N0cmluZy5zZXQgcyBuIGNdIG1vZGlmaWVzIGJ5dGUgc2VxdWVuY2UgW3NdIGluIHBsYWNlLFxuICAgcmVwbGFjaW5nIHRoZSBieXRlIGF0IGluZGV4IFtuXSB3aXRoIFtjXS5cbiAgIFlvdSBjYW4gYWxzbyB3cml0ZSBbcy5bbl0gPC0gY10gaW5zdGVhZCBvZiBbU3RyaW5nLnNldCBzIG4gY10uXG4gICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbbl0gaXMgbm90IGEgdmFsaWQgaW5kZXggaW4gW3NdLlxuXG4gICBAZGVwcmVjYXRlZCBUaGlzIGlzIGEgZGVwcmVjYXRlZCBhbGlhcyBvZiB7IUJ5dGVzLnNldH0uWyBdICopXG5cbmV4dGVybmFsIGNyZWF0ZSA6IGludCAtPiBieXRlcyA9IFwiY2FtbF9jcmVhdGVfc3RyaW5nXCJcbiAgW0BAb2NhbWwuZGVwcmVjYXRlZCBcIlVzZSBCeXRlcy5jcmVhdGUgaW5zdGVhZC5cIl1cbigqKiBbU3RyaW5nLmNyZWF0ZSBuXSByZXR1cm5zIGEgZnJlc2ggYnl0ZSBzZXF1ZW5jZSBvZiBsZW5ndGggW25dLlxuICAgVGhlIHNlcXVlbmNlIGlzIHVuaW5pdGlhbGl6ZWQgYW5kIGNvbnRhaW5zIGFyYml0cmFyeSBieXRlcy5cbiAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtuIDwgMF0gb3IgW24gPiBdeyFTeXMubWF4X3N0cmluZ19sZW5ndGh9LlxuXG4gICBAZGVwcmVjYXRlZCBUaGlzIGlzIGEgZGVwcmVjYXRlZCBhbGlhcyBvZiB7IUJ5dGVzLmNyZWF0ZX0uWyBdICopXG5cbnZhbCBtYWtlIDogaW50IC0+IGNoYXIgLT4gc3RyaW5nXG4oKiogW1N0cmluZy5tYWtlIG4gY10gcmV0dXJucyBhIGZyZXNoIHN0cmluZyBvZiBsZW5ndGggW25dLFxuICAgZmlsbGVkIHdpdGggdGhlIGNoYXJhY3RlciBbY10uXG4gICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbbiA8IDBdIG9yIFtuID4gXXshU3lzLm1heF9zdHJpbmdfbGVuZ3RofS4gKilcblxudmFsIGluaXQgOiBpbnQgLT4gKGludCAtPiBjaGFyKSAtPiBzdHJpbmdcbigqKiBbU3RyaW5nLmluaXQgbiBmXSByZXR1cm5zIGEgc3RyaW5nIG9mIGxlbmd0aCBbbl0sIHdpdGggY2hhcmFjdGVyXG4gICAgW2ldIGluaXRpYWxpemVkIHRvIHRoZSByZXN1bHQgb2YgW2YgaV0gKGNhbGxlZCBpbiBpbmNyZWFzaW5nXG4gICAgaW5kZXggb3JkZXIpLlxuXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW24gPCAwXSBvciBbbiA+IF17IVN5cy5tYXhfc3RyaW5nX2xlbmd0aH0uXG4gICAgQHNpbmNlIDQuMDIuMFxuKilcblxudmFsIGNvcHkgOiBzdHJpbmcgLT4gc3RyaW5nIFtAQG9jYW1sLmRlcHJlY2F0ZWRdXG4oKiogUmV0dXJuIGEgY29weSBvZiB0aGUgZ2l2ZW4gc3RyaW5nLlxuXG4gICAgQGRlcHJlY2F0ZWQgQmVjYXVzZSBzdHJpbmdzIGFyZSBpbW11dGFibGUsIGl0IGRvZXNuJ3QgbWFrZSBtdWNoXG4gICAgc2Vuc2UgdG8gbWFrZSBpZGVudGljYWwgY29waWVzIG9mIHRoZW0uICopXG5cbnZhbCBzdWIgOiBzdHJpbmcgLT4gaW50IC0+IGludCAtPiBzdHJpbmdcbigqKiBbU3RyaW5nLnN1YiBzIHN0YXJ0IGxlbl0gcmV0dXJucyBhIGZyZXNoIHN0cmluZyBvZiBsZW5ndGggW2xlbl0sXG4gICBjb250YWluaW5nIHRoZSBzdWJzdHJpbmcgb2YgW3NdIHRoYXQgc3RhcnRzIGF0IHBvc2l0aW9uIFtzdGFydF0gYW5kXG4gICBoYXMgbGVuZ3RoIFtsZW5dLlxuICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW3N0YXJ0XSBhbmQgW2xlbl0gZG8gbm90XG4gICBkZXNpZ25hdGUgYSB2YWxpZCBzdWJzdHJpbmcgb2YgW3NdLiAqKVxuXG52YWwgZmlsbCA6IGJ5dGVzIC0+IGludCAtPiBpbnQgLT4gY2hhciAtPiB1bml0XG4gIFtAQG9jYW1sLmRlcHJlY2F0ZWQgXCJVc2UgQnl0ZXMuZmlsbCBpbnN0ZWFkLlwiXVxuKCoqIFtTdHJpbmcuZmlsbCBzIHN0YXJ0IGxlbiBjXSBtb2RpZmllcyBieXRlIHNlcXVlbmNlIFtzXSBpbiBwbGFjZSxcbiAgIHJlcGxhY2luZyBbbGVuXSBieXRlcyB3aXRoIFtjXSwgc3RhcnRpbmcgYXQgW3N0YXJ0XS5cbiAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtzdGFydF0gYW5kIFtsZW5dIGRvIG5vdFxuICAgZGVzaWduYXRlIGEgdmFsaWQgcmFuZ2Ugb2YgW3NdLlxuXG4gICBAZGVwcmVjYXRlZCBUaGlzIGlzIGEgZGVwcmVjYXRlZCBhbGlhcyBvZiB7IUJ5dGVzLmZpbGx9LlsgXSAqKVxuXG52YWwgYmxpdCA6IHN0cmluZyAtPiBpbnQgLT4gYnl0ZXMgLT4gaW50IC0+IGludCAtPiB1bml0XG4oKiogU2FtZSBhcyB7IUJ5dGVzLmJsaXRfc3RyaW5nfS4gKilcblxudmFsIGNvbmNhdCA6IHN0cmluZyAtPiBzdHJpbmcgbGlzdCAtPiBzdHJpbmdcbigqKiBbU3RyaW5nLmNvbmNhdCBzZXAgc2xdIGNvbmNhdGVuYXRlcyB0aGUgbGlzdCBvZiBzdHJpbmdzIFtzbF0sXG4gICAgaW5zZXJ0aW5nIHRoZSBzZXBhcmF0b3Igc3RyaW5nIFtzZXBdIGJldHdlZW4gZWFjaC5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiB0aGUgcmVzdWx0IGlzIGxvbmdlciB0aGFuXG4gICAgeyFTeXMubWF4X3N0cmluZ19sZW5ndGh9IGJ5dGVzLiAqKVxuXG52YWwgaXRlciA6IChjaGFyIC0+IHVuaXQpIC0+IHN0cmluZyAtPiB1bml0XG4oKiogW1N0cmluZy5pdGVyIGYgc10gYXBwbGllcyBmdW5jdGlvbiBbZl0gaW4gdHVybiB0byBhbGxcbiAgIHRoZSBjaGFyYWN0ZXJzIG9mIFtzXS4gIEl0IGlzIGVxdWl2YWxlbnQgdG9cbiAgIFtmIHMuWzBdOyBmIHMuWzFdOyAuLi47IGYgcy5bU3RyaW5nLmxlbmd0aCBzIC0gMV07ICgpXS4gKilcblxudmFsIGl0ZXJpIDogKGludCAtPiBjaGFyIC0+IHVuaXQpIC0+IHN0cmluZyAtPiB1bml0XG4oKiogU2FtZSBhcyB7IVN0cmluZy5pdGVyfSwgYnV0IHRoZVxuICAgZnVuY3Rpb24gaXMgYXBwbGllZCB0byB0aGUgaW5kZXggb2YgdGhlIGVsZW1lbnQgYXMgZmlyc3QgYXJndW1lbnRcbiAgIChjb3VudGluZyBmcm9tIDApLCBhbmQgdGhlIGNoYXJhY3RlciBpdHNlbGYgYXMgc2Vjb25kIGFyZ3VtZW50LlxuICAgQHNpbmNlIDQuMDAuMCAqKVxuXG52YWwgbWFwIDogKGNoYXIgLT4gY2hhcikgLT4gc3RyaW5nIC0+IHN0cmluZ1xuKCoqIFtTdHJpbmcubWFwIGYgc10gYXBwbGllcyBmdW5jdGlvbiBbZl0gaW4gdHVybiB0byBhbGwgdGhlXG4gICAgY2hhcmFjdGVycyBvZiBbc10gKGluIGluY3JlYXNpbmcgaW5kZXggb3JkZXIpIGFuZCBzdG9yZXMgdGhlXG4gICAgcmVzdWx0cyBpbiBhIG5ldyBzdHJpbmcgdGhhdCBpcyByZXR1cm5lZC5cbiAgICBAc2luY2UgNC4wMC4wICopXG5cbnZhbCBtYXBpIDogKGludCAtPiBjaGFyIC0+IGNoYXIpIC0+IHN0cmluZyAtPiBzdHJpbmdcbigqKiBbU3RyaW5nLm1hcGkgZiBzXSBjYWxscyBbZl0gd2l0aCBlYWNoIGNoYXJhY3RlciBvZiBbc10gYW5kIGl0c1xuICAgIGluZGV4IChpbiBpbmNyZWFzaW5nIGluZGV4IG9yZGVyKSBhbmQgc3RvcmVzIHRoZSByZXN1bHRzIGluIGEgbmV3XG4gICAgc3RyaW5nIHRoYXQgaXMgcmV0dXJuZWQuXG4gICAgQHNpbmNlIDQuMDIuMCAqKVxuXG52YWwgdHJpbSA6IHN0cmluZyAtPiBzdHJpbmdcbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBhcmd1bWVudCwgd2l0aG91dCBsZWFkaW5nIGFuZCB0cmFpbGluZ1xuICAgd2hpdGVzcGFjZS4gIFRoZSBjaGFyYWN0ZXJzIHJlZ2FyZGVkIGFzIHdoaXRlc3BhY2UgYXJlOiBbJyAnXSxcbiAgIFsnXFwwMTInXSwgWydcXG4nXSwgWydcXHInXSwgYW5kIFsnXFx0J10uICBJZiB0aGVyZSBpcyBuZWl0aGVyIGxlYWRpbmcgbm9yXG4gICB0cmFpbGluZyB3aGl0ZXNwYWNlIGNoYXJhY3RlciBpbiB0aGUgYXJndW1lbnQsIHJldHVybiB0aGUgb3JpZ2luYWxcbiAgIHN0cmluZyBpdHNlbGYsIG5vdCBhIGNvcHkuXG4gICBAc2luY2UgNC4wMC4wICopXG5cbnZhbCBlc2NhcGVkIDogc3RyaW5nIC0+IHN0cmluZ1xuKCoqIFJldHVybiBhIGNvcHkgb2YgdGhlIGFyZ3VtZW50LCB3aXRoIHNwZWNpYWwgY2hhcmFjdGVyc1xuICAgIHJlcHJlc2VudGVkIGJ5IGVzY2FwZSBzZXF1ZW5jZXMsIGZvbGxvd2luZyB0aGUgbGV4aWNhbFxuICAgIGNvbnZlbnRpb25zIG9mIE9DYW1sLlxuICAgIEFsbCBjaGFyYWN0ZXJzIG91dHNpZGUgdGhlIEFTQ0lJIHByaW50YWJsZSByYW5nZSAoMzIuLjEyNikgYXJlXG4gICAgZXNjYXBlZCwgYXMgd2VsbCBhcyBiYWNrc2xhc2ggYW5kIGRvdWJsZS1xdW90ZS5cblxuICAgIElmIHRoZXJlIGlzIG5vIHNwZWNpYWwgY2hhcmFjdGVyIGluIHRoZSBhcmd1bWVudCB0aGF0IG5lZWRzXG4gICAgZXNjYXBpbmcsIHJldHVybiB0aGUgb3JpZ2luYWwgc3RyaW5nIGl0c2VsZiwgbm90IGEgY29weS5cbiAgICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiB0aGUgcmVzdWx0IGlzIGxvbmdlciB0aGFuXG4gICAgeyFTeXMubWF4X3N0cmluZ19sZW5ndGh9IGJ5dGVzLlxuXG4gICAgVGhlIGZ1bmN0aW9uIHshU2NhbmYudW5lc2NhcGVkfSBpcyBhIGxlZnQgaW52ZXJzZSBvZiBbZXNjYXBlZF0sXG4gICAgaS5lLiBbU2NhbmYudW5lc2NhcGVkIChlc2NhcGVkIHMpID0gc10gZm9yIGFueSBzdHJpbmcgW3NdICh1bmxlc3NcbiAgICBbZXNjYXBlIHNdIGZhaWxzKS4gKilcblxudmFsIGluZGV4IDogc3RyaW5nIC0+IGNoYXIgLT4gaW50XG4oKiogW1N0cmluZy5pbmRleCBzIGNdIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdFxuICAgb2NjdXJyZW5jZSBvZiBjaGFyYWN0ZXIgW2NdIGluIHN0cmluZyBbc10uXG4gICBAcmFpc2UgTm90X2ZvdW5kIGlmIFtjXSBkb2VzIG5vdCBvY2N1ciBpbiBbc10uICopXG5cbnZhbCBpbmRleF9vcHQ6IHN0cmluZyAtPiBjaGFyIC0+IGludCBvcHRpb25cbigqKiBbU3RyaW5nLmluZGV4X29wdCBzIGNdIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdFxuICAgIG9jY3VycmVuY2Ugb2YgY2hhcmFjdGVyIFtjXSBpbiBzdHJpbmcgW3NdLCBvclxuICAgIFtOb25lXSBpZiBbY10gZG9lcyBub3Qgb2NjdXIgaW4gW3NdLlxuICAgIEBzaW5jZSA0LjA1ICopXG5cbnZhbCByaW5kZXggOiBzdHJpbmcgLT4gY2hhciAtPiBpbnRcbigqKiBbU3RyaW5nLnJpbmRleCBzIGNdIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBsYXN0XG4gICBvY2N1cnJlbmNlIG9mIGNoYXJhY3RlciBbY10gaW4gc3RyaW5nIFtzXS5cbiAgIEByYWlzZSBOb3RfZm91bmQgaWYgW2NdIGRvZXMgbm90IG9jY3VyIGluIFtzXS4gKilcblxudmFsIHJpbmRleF9vcHQ6IHN0cmluZyAtPiBjaGFyIC0+IGludCBvcHRpb25cbigqKiBbU3RyaW5nLnJpbmRleF9vcHQgcyBjXSByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBvY2N1cnJlbmNlXG4gICAgb2YgY2hhcmFjdGVyIFtjXSBpbiBzdHJpbmcgW3NdLCBvciBbTm9uZV0gaWYgW2NdIGRvZXMgbm90IG9jY3VyIGluXG4gICAgW3NdLlxuICAgIEBzaW5jZSA0LjA1ICopXG5cbnZhbCBpbmRleF9mcm9tIDogc3RyaW5nIC0+IGludCAtPiBjaGFyIC0+IGludFxuKCoqIFtTdHJpbmcuaW5kZXhfZnJvbSBzIGkgY10gcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlXG4gICBmaXJzdCBvY2N1cnJlbmNlIG9mIGNoYXJhY3RlciBbY10gaW4gc3RyaW5nIFtzXSBhZnRlciBwb3NpdGlvbiBbaV0uXG4gICBbU3RyaW5nLmluZGV4IHMgY10gaXMgZXF1aXZhbGVudCB0byBbU3RyaW5nLmluZGV4X2Zyb20gcyAwIGNdLlxuICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW2ldIGlzIG5vdCBhIHZhbGlkIHBvc2l0aW9uIGluIFtzXS5cbiAgIEByYWlzZSBOb3RfZm91bmQgaWYgW2NdIGRvZXMgbm90IG9jY3VyIGluIFtzXSBhZnRlciBwb3NpdGlvbiBbaV0uICopXG5cbnZhbCBpbmRleF9mcm9tX29wdDogc3RyaW5nIC0+IGludCAtPiBjaGFyIC0+IGludCBvcHRpb25cbigqKiBbU3RyaW5nLmluZGV4X2Zyb21fb3B0IHMgaSBjXSByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGVcbiAgICBmaXJzdCBvY2N1cnJlbmNlIG9mIGNoYXJhY3RlciBbY10gaW4gc3RyaW5nIFtzXSBhZnRlciBwb3NpdGlvbiBbaV1cbiAgICBvciBbTm9uZV0gaWYgW2NdIGRvZXMgbm90IG9jY3VyIGluIFtzXSBhZnRlciBwb3NpdGlvbiBbaV0uXG5cbiAgICBbU3RyaW5nLmluZGV4X29wdCBzIGNdIGlzIGVxdWl2YWxlbnQgdG8gW1N0cmluZy5pbmRleF9mcm9tX29wdCBzIDAgY10uXG4gICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW2ldIGlzIG5vdCBhIHZhbGlkIHBvc2l0aW9uIGluIFtzXS5cblxuICAgIEBzaW5jZSA0LjA1XG4qKVxuXG52YWwgcmluZGV4X2Zyb20gOiBzdHJpbmcgLT4gaW50IC0+IGNoYXIgLT4gaW50XG4oKiogW1N0cmluZy5yaW5kZXhfZnJvbSBzIGkgY10gcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlXG4gICBsYXN0IG9jY3VycmVuY2Ugb2YgY2hhcmFjdGVyIFtjXSBpbiBzdHJpbmcgW3NdIGJlZm9yZSBwb3NpdGlvbiBbaSsxXS5cbiAgIFtTdHJpbmcucmluZGV4IHMgY10gaXMgZXF1aXZhbGVudCB0b1xuICAgW1N0cmluZy5yaW5kZXhfZnJvbSBzIChTdHJpbmcubGVuZ3RoIHMgLSAxKSBjXS5cbiAgIEByYWlzZSBJbnZhbGlkX2FyZ3VtZW50IGlmIFtpKzFdIGlzIG5vdCBhIHZhbGlkIHBvc2l0aW9uIGluIFtzXS5cbiAgIEByYWlzZSBOb3RfZm91bmQgaWYgW2NdIGRvZXMgbm90IG9jY3VyIGluIFtzXSBiZWZvcmUgcG9zaXRpb24gW2krMV0uICopXG5cbnZhbCByaW5kZXhfZnJvbV9vcHQ6IHN0cmluZyAtPiBpbnQgLT4gY2hhciAtPiBpbnQgb3B0aW9uXG4oKiogW1N0cmluZy5yaW5kZXhfZnJvbV9vcHQgcyBpIGNdIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZVxuICAgbGFzdCBvY2N1cnJlbmNlIG9mIGNoYXJhY3RlciBbY10gaW4gc3RyaW5nIFtzXSBiZWZvcmUgcG9zaXRpb24gW2krMV1cbiAgIG9yIFtOb25lXSBpZiBbY10gZG9lcyBub3Qgb2NjdXIgaW4gW3NdIGJlZm9yZSBwb3NpdGlvbiBbaSsxXS5cblxuICAgW1N0cmluZy5yaW5kZXhfb3B0IHMgY10gaXMgZXF1aXZhbGVudCB0b1xuICAgW1N0cmluZy5yaW5kZXhfZnJvbV9vcHQgcyAoU3RyaW5nLmxlbmd0aCBzIC0gMSkgY10uXG4gICBAcmFpc2UgSW52YWxpZF9hcmd1bWVudCBpZiBbaSsxXSBpcyBub3QgYSB2YWxpZCBwb3NpdGlvbiBpbiBbc10uXG5cbiAgICBAc2luY2UgNC4wNVxuKilcblxudmFsIGNvbnRhaW5zIDogc3RyaW5nIC0+IGNoYXIgLT4gYm9vbFxuKCoqIFtTdHJpbmcuY29udGFpbnMgcyBjXSB0ZXN0cyBpZiBjaGFyYWN0ZXIgW2NdXG4gICBhcHBlYXJzIGluIHRoZSBzdHJpbmcgW3NdLiAqKVxuXG52YWwgY29udGFpbnNfZnJvbSA6IHN0cmluZyAtPiBpbnQgLT4gY2hhciAtPiBib29sXG4oKiogW1N0cmluZy5jb250YWluc19mcm9tIHMgc3RhcnQgY10gdGVzdHMgaWYgY2hhcmFjdGVyIFtjXVxuICAgYXBwZWFycyBpbiBbc10gYWZ0ZXIgcG9zaXRpb24gW3N0YXJ0XS5cbiAgIFtTdHJpbmcuY29udGFpbnMgcyBjXSBpcyBlcXVpdmFsZW50IHRvXG4gICBbU3RyaW5nLmNvbnRhaW5zX2Zyb20gcyAwIGNdLlxuICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW3N0YXJ0XSBpcyBub3QgYSB2YWxpZCBwb3NpdGlvbiBpbiBbc10uICopXG5cbnZhbCByY29udGFpbnNfZnJvbSA6IHN0cmluZyAtPiBpbnQgLT4gY2hhciAtPiBib29sXG4oKiogW1N0cmluZy5yY29udGFpbnNfZnJvbSBzIHN0b3AgY10gdGVzdHMgaWYgY2hhcmFjdGVyIFtjXVxuICAgYXBwZWFycyBpbiBbc10gYmVmb3JlIHBvc2l0aW9uIFtzdG9wKzFdLlxuICAgQHJhaXNlIEludmFsaWRfYXJndW1lbnQgaWYgW3N0b3AgPCAwXSBvciBbc3RvcCsxXSBpcyBub3QgYSB2YWxpZFxuICAgcG9zaXRpb24gaW4gW3NdLiAqKVxuXG52YWwgdXBwZXJjYXNlIDogc3RyaW5nIC0+IHN0cmluZ1xuICBbQEBvY2FtbC5kZXByZWNhdGVkIFwiVXNlIFN0cmluZy51cHBlcmNhc2VfYXNjaWkgaW5zdGVhZC5cIl1cbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBhcmd1bWVudCwgd2l0aCBhbGwgbG93ZXJjYXNlIGxldHRlcnNcbiAgIHRyYW5zbGF0ZWQgdG8gdXBwZXJjYXNlLCBpbmNsdWRpbmcgYWNjZW50ZWQgbGV0dGVycyBvZiB0aGUgSVNPXG4gICBMYXRpbi0xICg4ODU5LTEpIGNoYXJhY3RlciBzZXQuXG4gICBAZGVwcmVjYXRlZCBGdW5jdGlvbnMgb3BlcmF0aW5nIG9uIExhdGluLTEgY2hhcmFjdGVyIHNldCBhcmUgZGVwcmVjYXRlZC4gKilcblxudmFsIGxvd2VyY2FzZSA6IHN0cmluZyAtPiBzdHJpbmdcbiAgW0BAb2NhbWwuZGVwcmVjYXRlZCBcIlVzZSBTdHJpbmcubG93ZXJjYXNlX2FzY2lpIGluc3RlYWQuXCJdXG4oKiogUmV0dXJuIGEgY29weSBvZiB0aGUgYXJndW1lbnQsIHdpdGggYWxsIHVwcGVyY2FzZSBsZXR0ZXJzXG4gICB0cmFuc2xhdGVkIHRvIGxvd2VyY2FzZSwgaW5jbHVkaW5nIGFjY2VudGVkIGxldHRlcnMgb2YgdGhlIElTT1xuICAgTGF0aW4tMSAoODg1OS0xKSBjaGFyYWN0ZXIgc2V0LlxuICAgQGRlcHJlY2F0ZWQgRnVuY3Rpb25zIG9wZXJhdGluZyBvbiBMYXRpbi0xIGNoYXJhY3RlciBzZXQgYXJlIGRlcHJlY2F0ZWQuICopXG5cbnZhbCBjYXBpdGFsaXplIDogc3RyaW5nIC0+IHN0cmluZ1xuICBbQEBvY2FtbC5kZXByZWNhdGVkIFwiVXNlIFN0cmluZy5jYXBpdGFsaXplX2FzY2lpIGluc3RlYWQuXCJdXG4oKiogUmV0dXJuIGEgY29weSBvZiB0aGUgYXJndW1lbnQsIHdpdGggdGhlIGZpcnN0IGNoYXJhY3RlciBzZXQgdG8gdXBwZXJjYXNlLFxuICAgdXNpbmcgdGhlIElTTyBMYXRpbi0xICg4ODU5LTEpIGNoYXJhY3RlciBzZXQuLlxuICAgQGRlcHJlY2F0ZWQgRnVuY3Rpb25zIG9wZXJhdGluZyBvbiBMYXRpbi0xIGNoYXJhY3RlciBzZXQgYXJlIGRlcHJlY2F0ZWQuICopXG5cbnZhbCB1bmNhcGl0YWxpemUgOiBzdHJpbmcgLT4gc3RyaW5nXG4gIFtAQG9jYW1sLmRlcHJlY2F0ZWQgXCJVc2UgU3RyaW5nLnVuY2FwaXRhbGl6ZV9hc2NpaSBpbnN0ZWFkLlwiXVxuKCoqIFJldHVybiBhIGNvcHkgb2YgdGhlIGFyZ3VtZW50LCB3aXRoIHRoZSBmaXJzdCBjaGFyYWN0ZXIgc2V0IHRvIGxvd2VyY2FzZSxcbiAgIHVzaW5nIHRoZSBJU08gTGF0aW4tMSAoODg1OS0xKSBjaGFyYWN0ZXIgc2V0Li5cbiAgIEBkZXByZWNhdGVkIEZ1bmN0aW9ucyBvcGVyYXRpbmcgb24gTGF0aW4tMSBjaGFyYWN0ZXIgc2V0IGFyZSBkZXByZWNhdGVkLiAqKVxuXG52YWwgdXBwZXJjYXNlX2FzY2lpIDogc3RyaW5nIC0+IHN0cmluZ1xuKCoqIFJldHVybiBhIGNvcHkgb2YgdGhlIGFyZ3VtZW50LCB3aXRoIGFsbCBsb3dlcmNhc2UgbGV0dGVyc1xuICAgdHJhbnNsYXRlZCB0byB1cHBlcmNhc2UsIHVzaW5nIHRoZSBVUy1BU0NJSSBjaGFyYWN0ZXIgc2V0LlxuICAgQHNpbmNlIDQuMDMuMCAqKVxuXG52YWwgbG93ZXJjYXNlX2FzY2lpIDogc3RyaW5nIC0+IHN0cmluZ1xuKCoqIFJldHVybiBhIGNvcHkgb2YgdGhlIGFyZ3VtZW50LCB3aXRoIGFsbCB1cHBlcmNhc2UgbGV0dGVyc1xuICAgdHJhbnNsYXRlZCB0byBsb3dlcmNhc2UsIHVzaW5nIHRoZSBVUy1BU0NJSSBjaGFyYWN0ZXIgc2V0LlxuICAgQHNpbmNlIDQuMDMuMCAqKVxuXG52YWwgY2FwaXRhbGl6ZV9hc2NpaSA6IHN0cmluZyAtPiBzdHJpbmdcbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBhcmd1bWVudCwgd2l0aCB0aGUgZmlyc3QgY2hhcmFjdGVyIHNldCB0byB1cHBlcmNhc2UsXG4gICB1c2luZyB0aGUgVVMtQVNDSUkgY2hhcmFjdGVyIHNldC5cbiAgIEBzaW5jZSA0LjAzLjAgKilcblxudmFsIHVuY2FwaXRhbGl6ZV9hc2NpaSA6IHN0cmluZyAtPiBzdHJpbmdcbigqKiBSZXR1cm4gYSBjb3B5IG9mIHRoZSBhcmd1bWVudCwgd2l0aCB0aGUgZmlyc3QgY2hhcmFjdGVyIHNldCB0byBsb3dlcmNhc2UsXG4gICB1c2luZyB0aGUgVVMtQVNDSUkgY2hhcmFjdGVyIHNldC5cbiAgIEBzaW5jZSA0LjAzLjAgKilcblxudHlwZSB0ID0gc3RyaW5nXG4oKiogQW4gYWxpYXMgZm9yIHRoZSB0eXBlIG9mIHN0cmluZ3MuICopXG5cbnZhbCBjb21wYXJlOiB0IC0+IHQgLT4gaW50XG4oKiogVGhlIGNvbXBhcmlzb24gZnVuY3Rpb24gZm9yIHN0cmluZ3MsIHdpdGggdGhlIHNhbWUgc3BlY2lmaWNhdGlvbiBhc1xuICAgIHshU3RkbGliLmNvbXBhcmV9LiAgQWxvbmcgd2l0aCB0aGUgdHlwZSBbdF0sIHRoaXMgZnVuY3Rpb24gW2NvbXBhcmVdXG4gICAgYWxsb3dzIHRoZSBtb2R1bGUgW1N0cmluZ10gdG8gYmUgcGFzc2VkIGFzIGFyZ3VtZW50IHRvIHRoZSBmdW5jdG9yc1xuICAgIHshU2V0Lk1ha2V9IGFuZCB7IU1hcC5NYWtlfS4gKilcblxudmFsIGVxdWFsOiB0IC0+IHQgLT4gYm9vbFxuKCoqIFRoZSBlcXVhbCBmdW5jdGlvbiBmb3Igc3RyaW5ncy5cbiAgICBAc2luY2UgNC4wMy4wICopXG5cbnZhbCBzcGxpdF9vbl9jaGFyOiBjaGFyIC0+IHN0cmluZyAtPiBzdHJpbmcgbGlzdFxuKCoqIFtTdHJpbmcuc3BsaXRfb25fY2hhciBzZXAgc10gcmV0dXJucyB0aGUgbGlzdCBvZiBhbGwgKHBvc3NpYmx5IGVtcHR5KVxuICAgIHN1YnN0cmluZ3Mgb2YgW3NdIHRoYXQgYXJlIGRlbGltaXRlZCBieSB0aGUgW3NlcF0gY2hhcmFjdGVyLlxuXG4gICAgVGhlIGZ1bmN0aW9uJ3Mgb3V0cHV0IGlzIHNwZWNpZmllZCBieSB0aGUgZm9sbG93aW5nIGludmFyaWFudHM6XG5cbiAgICAtIFRoZSBsaXN0IGlzIG5vdCBlbXB0eS5cbiAgICAtIENvbmNhdGVuYXRpbmcgaXRzIGVsZW1lbnRzIHVzaW5nIFtzZXBdIGFzIGEgc2VwYXJhdG9yIHJldHVybnMgYVxuICAgICAgc3RyaW5nIGVxdWFsIHRvIHRoZSBpbnB1dCAoW1N0cmluZy5jb25jYXQgKFN0cmluZy5tYWtlIDEgc2VwKVxuICAgICAgKFN0cmluZy5zcGxpdF9vbl9jaGFyIHNlcCBzKSA9IHNdKS5cbiAgICAtIE5vIHN0cmluZyBpbiB0aGUgcmVzdWx0IGNvbnRhaW5zIHRoZSBbc2VwXSBjaGFyYWN0ZXIuXG5cbiAgICBAc2luY2UgNC4wNC4wXG4qKVxuXG4oKiogezEgSXRlcmF0b3JzfSAqKVxuXG52YWwgdG9fc2VxIDogdCAtPiBjaGFyIFNlcS50XG4oKiogSXRlcmF0ZSBvbiB0aGUgc3RyaW5nLCBpbiBpbmNyZWFzaW5nIGluZGV4IG9yZGVyLiBNb2RpZmljYXRpb25zIG9mIHRoZVxuICAgIHN0cmluZyBkdXJpbmcgaXRlcmF0aW9uIHdpbGwgYmUgcmVmbGVjdGVkIGluIHRoZSBpdGVyYXRvci5cbiAgICBAc2luY2UgNC4wNyAqKVxuXG52YWwgdG9fc2VxaSA6IHQgLT4gKGludCAqIGNoYXIpIFNlcS50XG4oKiogSXRlcmF0ZSBvbiB0aGUgc3RyaW5nLCBpbiBpbmNyZWFzaW5nIG9yZGVyLCB5aWVsZGluZyBpbmRpY2VzIGFsb25nIGNoYXJzXG4gICAgQHNpbmNlIDQuMDcgKilcblxudmFsIG9mX3NlcSA6IGNoYXIgU2VxLnQgLT4gdFxuKCoqIENyZWF0ZSBhIHN0cmluZyBmcm9tIHRoZSBnZW5lcmF0b3JcbiAgICBAc2luY2UgNC4wNyAqKVxuXG4oKiovKiopXG5cbigqIFRoZSBmb2xsb3dpbmcgaXMgZm9yIHN5c3RlbSB1c2Ugb25seS4gRG8gbm90IGNhbGwgZGlyZWN0bHkuICopXG5cbmV4dGVybmFsIHVuc2FmZV9nZXQgOiBzdHJpbmcgLT4gaW50IC0+IGNoYXIgPSBcIiVzdHJpbmdfdW5zYWZlX2dldFwiXG5leHRlcm5hbCB1bnNhZmVfc2V0IDogYnl0ZXMgLT4gaW50IC0+IGNoYXIgLT4gdW5pdCA9IFwiJXN0cmluZ191bnNhZmVfc2V0XCJcbiAgW0BAb2NhbWwuZGVwcmVjYXRlZF1cbmV4dGVybmFsIHVuc2FmZV9ibGl0IDpcbiAgc3RyaW5nIC0+IGludCAtPiBieXRlcyAtPiBpbnQgLT4gaW50IC0+IHVuaXRcbiAgPSBcImNhbWxfYmxpdF9zdHJpbmdcIiBbQEBub2FsbG9jXVxuZXh0ZXJuYWwgdW5zYWZlX2ZpbGwgOlxuICBieXRlcyAtPiBpbnQgLT4gaW50IC0+IGNoYXIgLT4gdW5pdCA9IFwiY2FtbF9maWxsX3N0cmluZ1wiIFtAQG5vYWxsb2NdXG4gIFtAQG9jYW1sLmRlcHJlY2F0ZWRdXG4iXX0=
