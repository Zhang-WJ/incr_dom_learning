(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_equal=runtime.caml_equal,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_update_dummy=runtime.caml_update_dummy,
     caml_wrap_exception=runtime.caml_wrap_exception;
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
     cst$0=caml_string_of_jsbytes(""),
     cst_fragment=caml_string_of_jsbytes("fragment"),
     cst_host=caml_string_of_jsbytes("host"),
     cst_path=caml_string_of_jsbytes("path"),
     cst_port=caml_string_of_jsbytes("port"),
     cst_query=caml_string_of_jsbytes("query"),
     cst_scheme=caml_string_of_jsbytes("scheme"),
     cst_userinfo=caml_string_of_jsbytes("userinfo"),
     cst=caml_string_of_jsbytes(""),
     cst_Path=caml_string_of_jsbytes("Path"),
     cst_Authority=caml_string_of_jsbytes("Authority"),
     cst_Custom=caml_string_of_jsbytes("Custom"),
     cst_Fragment=caml_string_of_jsbytes("Fragment"),
     cst_Generic=caml_string_of_jsbytes("Generic"),
     cst_Host=caml_string_of_jsbytes("Host"),
     cst_Query=caml_string_of_jsbytes("Query"),
     cst_Query_key=caml_string_of_jsbytes("Query_key"),
     cst_Query_value=caml_string_of_jsbytes("Query_value"),
     cst_Scheme=caml_string_of_jsbytes("Scheme"),
     cst_Userinfo=caml_string_of_jsbytes("Userinfo"),
     cst_Path$0=caml_string_of_jsbytes("Path"),
     cst_Authority$0=caml_string_of_jsbytes("Authority"),
     cst_Custom$0=caml_string_of_jsbytes("Custom"),
     cst_Fragment$0=caml_string_of_jsbytes("Fragment"),
     cst_Generic$0=caml_string_of_jsbytes("Generic"),
     cst_Host$0=caml_string_of_jsbytes("Host"),
     cst_Query$0=caml_string_of_jsbytes("Query"),
     cst_Query_key$0=caml_string_of_jsbytes("Query_key"),
     cst_Query_value$0=caml_string_of_jsbytes("Query_value"),
     cst_Scheme$0=caml_string_of_jsbytes("Scheme"),
     cst_Userinfo$0=caml_string_of_jsbytes("Userinfo"),
     tp_loc=caml_string_of_jsbytes("lib_sexp/uri_sexp.ml.Derived.component"),
     tp_loc$0=caml_string_of_jsbytes("lib_sexp/uri_sexp.ml.Derived.component"),
     tp_loc$1=caml_string_of_jsbytes("lib_sexp/uri_sexp.ml.Derived.t"),
     Uri=global_data.Uri,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Assert_failure=global_data.Assert_failure,
     component_of_sexp=function _O_(_N_){return _O_.fun(_N_)},
     component_of_sexp$0=function _M_(_L_){return _M_.fun(_L_)},
     _s_=[0,caml_string_of_jsbytes("fragment")],
     _r_=[0,caml_string_of_jsbytes("query")],
     _q_=[0,caml_string_of_jsbytes("path")],
     _p_=[0,caml_string_of_jsbytes("port")],
     _o_=[0,caml_string_of_jsbytes("host")],
     _n_=[0,caml_string_of_jsbytes("userinfo")],
     _m_=[0,caml_string_of_jsbytes("scheme")],
     _l_=[0,caml_string_of_jsbytes("lib_sexp/uri_sexp.ml"),22,1],
     _b_=[0,caml_string_of_jsbytes("Path")],
     _c_=[0,caml_string_of_jsbytes("Host")],
     _d_=[0,caml_string_of_jsbytes("Query_value")],
     _e_=[0,caml_string_of_jsbytes("Generic")],
     _a_=[0,caml_string_of_jsbytes("Fragment")],
     _g_=[0,caml_string_of_jsbytes("Userinfo")],
     _h_=[0,caml_string_of_jsbytes("Scheme")],
     _i_=[0,caml_string_of_jsbytes("Query")],
     _j_=[0,caml_string_of_jsbytes("Query_key")],
     _f_=[0,caml_string_of_jsbytes("Authority")],
     _k_=[0,caml_string_of_jsbytes("Custom")];
    caml_update_dummy
     (component_of_sexp,
      function(sexp)
       {if(0 === sexp[0])
         {var atom=sexp[1],switch$0=caml_string_compare(atom,cst_Path);
          if(0 <= switch$0)
           {if(! (0 < switch$0))return 892015045;
            if(! caml_string_notequal(atom,cst_Query))return -250086680;
            if(! caml_string_notequal(atom,cst_Query_key))return -911188600;
            if(! caml_string_notequal(atom,cst_Query_value))return 795008922;
            if(! caml_string_notequal(atom,cst_Scheme))return -178940859;
            if(! caml_string_notequal(atom,cst_Userinfo))return -145160103}
          else
           {if(! caml_string_notequal(atom,cst_Authority))return -715788189;
            if(! caml_string_notequal(atom,cst_Custom))
             return caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc,sexp);
            if(! caml_string_notequal(atom,cst_Fragment))return 127343600;
            if(! caml_string_notequal(atom,cst_Generic))return 61643255;
            if(! caml_string_notequal(atom,cst_Host))return 803994504}
          return caml_call1(Sexplib0_Sexp_conv_error[19],0)}
        var _G_=sexp[1];
        if(_G_)
         {var _H_=_G_[1];
          if(0 === _H_[0])
           {var
             sexp_args=_G_[2],
             atom$0=_H_[1],
             switch$1=caml_string_compare(atom$0,cst_Path$0);
            if(0 <= switch$1)
             {if
               (!
                (0 < switch$1)
                ||
                !
                caml_string_notequal(atom$0,cst_Query$0)
                ||
                !
                caml_string_notequal(atom$0,cst_Query_key$0)
                ||
                !
                caml_string_notequal(atom$0,cst_Query_value$0)
                ||
                !
                caml_string_notequal(atom$0,cst_Scheme$0)
                ||
                !
                caml_string_notequal(atom$0,cst_Userinfo$0))
               return caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc,sexp)}
            else
             {if(! caml_string_notequal(atom$0,cst_Authority$0))
               return caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc,sexp);
              if(! caml_string_notequal(atom$0,cst_Custom$0))
               {if(sexp_args && ! sexp_args[2])
                 {var v0=sexp_args[1],switch$2=0;
                  if(1 === v0[0])
                   {var _I_=v0[1];
                    if(_I_)
                     {var _J_=_I_[2];
                      if(_J_)
                       {var _K_=_J_[2];
                        if(_K_ && ! _K_[2])
                         {var
                           v2=_K_[1],
                           v1=_J_[1],
                           v0$1=_I_[1],
                           v0$2=caml_call1(component_of_sexp$0,v0$1),
                           v1$0=caml_call1(Sexplib0_Sexp_conv[31],v1),
                           v2$0=caml_call1(Sexplib0_Sexp_conv[31],v2),
                           v0$0=[0,v0$2,v1$0,v2$0];
                          switch$2 = 1}}}}
                  if(! switch$2)
                   var
                    v0$0=
                     caml_call3(Sexplib0_Sexp_conv_error[2],tp_loc,3,v0);
                  return [0,-198771759,v0$0]}
                return caml_call3
                        (Sexplib0_Sexp_conv_error[22],tp_loc,atom$0,sexp)}
              if
               (!
                caml_string_notequal(atom$0,cst_Fragment$0)
                ||
                !
                caml_string_notequal(atom$0,cst_Generic$0)
                ||
                !
                caml_string_notequal(atom$0,cst_Host$0))
               return caml_call2(Sexplib0_Sexp_conv_error[21],tp_loc,sexp)}
            return caml_call1(Sexplib0_Sexp_conv_error[19],0)}
          return caml_call2(Sexplib0_Sexp_conv_error[24],tp_loc,sexp)}
        return caml_call2(Sexplib0_Sexp_conv_error[25],tp_loc,sexp)});
    caml_update_dummy
     (component_of_sexp$0,
      function(sexp)
       {try
         {var _E_=caml_call1(component_of_sexp,sexp);return _E_}
        catch(_F_)
         {_F_ = caml_wrap_exception(_F_);
          if(_F_ === Sexplib0_Sexp_conv_error[18])
           return caml_call2(Sexplib0_Sexp_conv_error[20],tp_loc$0,sexp);
          throw _F_}});
    function sexp_of_component(param)
     {if(typeof param === "number")
       return 61643255 <= param
               ?127343600 === param
                 ?_a_
                 :803994504 <= param
                   ?892015045 <= param?_b_:_c_
                   :795008922 <= param?_d_:_e_
               :-715788189 === param
                 ?_f_
                 :-178940859 <= param
                   ?-145160103 <= param?_g_:_h_
                   :-250086680 <= param?_i_:_j_;
      var
       v0=param[2],
       v2=v0[3],
       v1=v0[2],
       v0$0=v0[1],
       v0$1=sexp_of_component(v0$0),
       v1$0=caml_call1(Sexplib0_Sexp_conv[7],v1),
       v2$0=caml_call1(Sexplib0_Sexp_conv[7],v2);
      return [1,[0,_k_,[0,[1,[0,v0$1,[0,v1$0,[0,v2$0,0]]]],0]]]}
    function t_of_sexp(sexp)
     {if(0 === sexp[0])
       var t=caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc$1,sexp);
      else
       {var
         field_sexps=sexp[1],
         scheme_field=[0,0],
         userinfo_field=[0,0],
         host_field=[0,0],
         port_field=[0,0],
         path_field=[0,0],
         query_field=[0,0],
         fragment_field=[0,0],
         duplicates=[0,0],
         extra=[0,0],
         param=field_sexps;
        for(;;)
         {if(param)
           {var _v_=param[1];
            if(1 === _v_[0])
             {var _w_=_v_[1];
              if(_w_)
               {var _x_=_w_[1];
                if(0 === _x_[0])
                 {var _y_=_w_[2],_z_=_x_[1],switch$0=0;
                  if(! _y_ || ! _y_[2])switch$0 = 1;
                  if(switch$0)
                   {var
                     tail=param[2],
                     field_sexp$7=
                      function(_D_)
                       {function field_sexp(param)
                         {if(_D_)
                           {if(_D_[2])throw [0,Assert_failure,_l_];
                            var x=_D_[1];
                            return x}
                          return caml_call2
                                  (Sexplib0_Sexp_conv_error[10],tp_loc$1,sexp)}
                        return field_sexp},
                     field_sexp=field_sexp$7(_y_);
                    if(caml_string_notequal(_z_,cst_fragment))
                     if(caml_string_notequal(_z_,cst_host))
                      if(caml_string_notequal(_z_,cst_path))
                       if(caml_string_notequal(_z_,cst_port))
                        if(caml_string_notequal(_z_,cst_query))
                         if(caml_string_notequal(_z_,cst_scheme))
                          if(caml_string_notequal(_z_,cst_userinfo))
                           {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_z_,extra[1]]}
                          else
                           if(userinfo_field[1])
                            duplicates[1] = [0,_z_,duplicates[1]];
                           else
                            {var
                              field_sexp$0=field_sexp(0),
                              fvalue=
                               caml_call2
                                (Sexplib0_Sexp_conv[41],Sexplib0_Sexp_conv[31],field_sexp$0);
                             userinfo_field[1] = [0,fvalue]}
                         else
                          if(scheme_field[1])
                           duplicates[1] = [0,_z_,duplicates[1]];
                          else
                           {var
                             field_sexp$1=field_sexp(0),
                             fvalue$0=
                              caml_call2
                               (Sexplib0_Sexp_conv[41],Sexplib0_Sexp_conv[31],field_sexp$1);
                            scheme_field[1] = [0,fvalue$0]}
                        else
                         if(query_field[1])
                          duplicates[1] = [0,_z_,duplicates[1]];
                         else
                          {var
                            field_sexp$2=field_sexp(0),
                            _A_=
                             function(sexp)
                              {if(1 === sexp[0])
                                {var _B_=sexp[1];
                                 if(_B_)
                                  {var _C_=_B_[2];
                                   if(_C_ && ! _C_[2])
                                    {var
                                      v1=_C_[1],
                                      v0=_B_[1],
                                      v0$0=caml_call1(Sexplib0_Sexp_conv[31],v0),
                                      v1$0=
                                       caml_call2(Sexplib0_Sexp_conv[44],Sexplib0_Sexp_conv[31],v1);
                                     return [0,v0$0,v1$0]}}}
                               return caml_call3
                                       (Sexplib0_Sexp_conv_error[2],tp_loc$1,2,sexp)},
                            fvalue$1=caml_call2(Sexplib0_Sexp_conv[44],_A_,field_sexp$2);
                           query_field[1] = [0,fvalue$1]}
                       else
                        if(port_field[1])
                         duplicates[1] = [0,_z_,duplicates[1]];
                        else
                         {var
                           field_sexp$3=field_sexp(0),
                           fvalue$2=
                            caml_call2
                             (Sexplib0_Sexp_conv[41],Sexplib0_Sexp_conv[34],field_sexp$3);
                          port_field[1] = [0,fvalue$2]}
                      else
                       if(path_field[1])
                        duplicates[1] = [0,_z_,duplicates[1]];
                       else
                        {var
                          field_sexp$4=field_sexp(0),
                          fvalue$3=caml_call1(Sexplib0_Sexp_conv[31],field_sexp$4);
                         path_field[1] = [0,fvalue$3]}
                     else
                      if(host_field[1])
                       duplicates[1] = [0,_z_,duplicates[1]];
                      else
                       {var
                         field_sexp$5=field_sexp(0),
                         fvalue$4=
                          caml_call2
                           (Sexplib0_Sexp_conv[41],Sexplib0_Sexp_conv[31],field_sexp$5);
                        host_field[1] = [0,fvalue$4]}
                    else
                     if(fragment_field[1])
                      duplicates[1] = [0,_z_,duplicates[1]];
                     else
                      {var
                        field_sexp$6=field_sexp(0),
                        fvalue$5=
                         caml_call2
                          (Sexplib0_Sexp_conv[41],Sexplib0_Sexp_conv[31],field_sexp$6);
                       fragment_field[1] = [0,fvalue$5]}
                    var param=tail;
                    continue}}}}
            caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc$1,_v_)}
          if(duplicates[1])
           var
            t=
             caml_call3
              (Sexplib0_Sexp_conv_error[12],tp_loc$1,duplicates[1],sexp);
          else
           if(extra[1])
            var
             t=
              caml_call3(Sexplib0_Sexp_conv_error[13],tp_loc$1,extra[1],sexp);
           else
            {var
              fragment_value=fragment_field[1],
              query_value=query_field[1],
              path_value=path_field[1],
              port_value=port_field[1],
              host_value=host_field[1],
              userinfo_value=userinfo_field[1],
              scheme_value=scheme_field[1];
             if(fragment_value)var v=fragment_value[1],v$0=v;else var v$0=0;
             if(query_value)var v$1=query_value[1],v$2=v$1;else var v$2=0;
             if(path_value)var v$3=path_value[1],v$4=v$3;else var v$4=cst;
             if(port_value)var v$5=port_value[1],v$6=v$5;else var v$6=0;
             if(host_value)var v$7=host_value[1],v$8=v$7;else var v$8=0;
             if(userinfo_value)
              var v$9=userinfo_value[1],v$10=v$9;
             else
              var v$10=0;
             if(scheme_value)
              var v$11=scheme_value[1],v$12=v$11;
             else
              var v$12=0;
             var t=[0,v$12,v$10,v$8,v$6,v$4,v$2,v$0]}
          break}}
      return caml_call8(Uri[11],t[1],t[2],t[3],t[4],[0,t[5]],[0,t[6]],t[7],0)}
    function sexp_of_t(t)
     {var
       v_fragment=caml_call1(Uri[41],t),
       v_query=caml_call1(Uri[13],t),
       v_path=caml_call2(Uri[26],0,t),
       v_port=caml_call1(Uri[39],t),
       v_host=caml_call1(Uri[36],t),
       v_userinfo=caml_call2(Uri[31],0,t),
       v_scheme=caml_call1(Uri[29],t),
       arg=
        caml_call1
         (caml_call1(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[7]),v_fragment),
       bnds=0;
      if
       (caml_equal
         (caml_call1
           (caml_call1(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[7]),0),
          arg))
       var bnds$0=bnds;
      else
       var bnd$5=[1,[0,_s_,[0,arg,0]]],bnds$0=[0,bnd$5,bnds];
      var _t_=v_query?0:1;
      if(_t_)
       var bnds$1=bnds$0;
      else
       var
        _u_=
         function(el)
          {var
            v1=el[2],
            v0=el[1],
            v0$0=caml_call1(Sexplib0_Sexp_conv[7],v0),
            v1$0=caml_call2(Sexplib0_Sexp_conv[20],Sexplib0_Sexp_conv[7],v1);
           return [1,[0,v0$0,[0,v1$0,0]]]},
        arg$5=caml_call1(caml_call1(Sexplib0_Sexp_conv[20],_u_),v_query),
        bnd$4=[1,[0,_r_,[0,arg$5,0]]],
        bnds$1=[0,bnd$4,bnds$0];
      var arg$0=caml_call1(Sexplib0_Sexp_conv[7],v_path);
      if(caml_equal(caml_call1(Sexplib0_Sexp_conv[7],cst$0),arg$0))
       var bnds$2=bnds$1;
      else
       var bnd$3=[1,[0,_q_,[0,arg$0,0]]],bnds$2=[0,bnd$3,bnds$1];
      var
       arg$1=
        caml_call1
         (caml_call1(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[10]),v_port);
      if
       (caml_equal
         (caml_call1
           (caml_call1(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[10]),0),
          arg$1))
       var bnds$3=bnds$2;
      else
       var bnd$2=[1,[0,_p_,[0,arg$1,0]]],bnds$3=[0,bnd$2,bnds$2];
      var
       arg$2=
        caml_call1
         (caml_call1(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[7]),v_host);
      if
       (caml_equal
         (caml_call1
           (caml_call1(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[7]),0),
          arg$2))
       var bnds$4=bnds$3;
      else
       var bnd$1=[1,[0,_o_,[0,arg$2,0]]],bnds$4=[0,bnd$1,bnds$3];
      var
       arg$3=
        caml_call1
         (caml_call1(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[7]),v_userinfo);
      if
       (caml_equal
         (caml_call1
           (caml_call1(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[7]),0),
          arg$3))
       var bnds$5=bnds$4;
      else
       var bnd$0=[1,[0,_n_,[0,arg$3,0]]],bnds$5=[0,bnd$0,bnds$4];
      var
       arg$4=
        caml_call1
         (caml_call1(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[7]),v_scheme);
      if
       (caml_equal
         (caml_call1
           (caml_call1(Sexplib0_Sexp_conv[17],Sexplib0_Sexp_conv[7]),0),
          arg$4))
       var bnds$6=bnds$5;
      else
       var bnd=[1,[0,_m_,[0,arg$4,0]]],bnds$6=[0,bnd,bnds$5];
      return [1,bnds$6]}
    function compare(a,b){return caml_call2(Uri[2],a,b)}
    function equal(a,b){return caml_call2(Uri[3],a,b)}
    var
     Uri_sexp=
      [0,
       component_of_sexp$0,
       sexp_of_component,
       t_of_sexp,
       sexp_of_t,
       compare,
       equal];
    runtime.caml_register_global(57,Uri_sexp,"Uri_sexp");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ1cmlfc2V4cC5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
