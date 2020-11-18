(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_int_of_string=runtime.caml_int_of_string,
     caml_make_vect=runtime.caml_make_vect,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_string_equal=runtime.caml_string_equal,
     caml_string_get=runtime.caml_string_get,
     caml_string_notequal=runtime.caml_string_notequal,
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
    var
     global_data=runtime.caml_get_global_data(),
     cst$48=caml_string_of_jsbytes(""),
     cst$46=caml_string_of_jsbytes(""),
     cst$41=caml_string_of_jsbytes(""),
     cst$42=caml_string_of_jsbytes(":"),
     cst$43=caml_string_of_jsbytes(""),
     cst$44=caml_string_of_jsbytes(":"),
     cst$45=caml_string_of_jsbytes("::"),
     cst_too_many_parts_in_IPv6_add=
      caml_string_of_jsbytes("too many parts in IPv6 address"),
     cst$40=caml_string_of_jsbytes(""),
     cst$38=caml_string_of_jsbytes("."),
     cst$39=caml_string_of_jsbytes("."),
     cst_invalid_octect=caml_string_of_jsbytes("invalid octect"),
     cst$37=caml_string_of_jsbytes(""),
     cst$36=caml_string_of_jsbytes(""),
     cst$35=caml_string_of_jsbytes(""),
     cst$33=caml_string_of_jsbytes(""),
     cst$34=caml_string_of_jsbytes("/"),
     cst$32=caml_string_of_jsbytes(""),
     cst$31=caml_string_of_jsbytes(","),
     cst$29=caml_string_of_jsbytes("/"),
     cst$30=caml_string_of_jsbytes("/"),
     cst$28=caml_string_of_jsbytes(""),
     cst$26=caml_string_of_jsbytes(""),
     cst$27=caml_string_of_jsbytes(""),
     cst$25=caml_string_of_jsbytes(""),
     cst_localhost$0=caml_string_of_jsbytes("localhost"),
     cst$21=caml_string_of_jsbytes("//"),
     cst$22=caml_string_of_jsbytes("/"),
     cst$23=caml_string_of_jsbytes(":"),
     cst$24=caml_string_of_jsbytes("./"),
     cst$19=caml_string_of_jsbytes("/"),
     cst$20=caml_string_of_jsbytes("/"),
     cst$18=caml_string_of_jsbytes(","),
     cst$17=caml_string_of_jsbytes("&"),
     cst$16=caml_string_of_jsbytes("/"),
     cst$13=caml_string_of_jsbytes("/"),
     cst$14=caml_string_of_jsbytes("/"),
     cst$15=caml_string_of_jsbytes("/"),
     cst$12=caml_string_of_jsbytes("/"),
     cst$11=caml_string_of_jsbytes(""),
     cst=caml_string_of_jsbytes("."),
     cst$0=caml_string_of_jsbytes(".."),
     cst$1=caml_string_of_jsbytes("/"),
     cst$5=caml_string_of_jsbytes("."),
     cst$6=caml_string_of_jsbytes(".."),
     cst$7=caml_string_of_jsbytes("/"),
     cst$8=caml_string_of_jsbytes("/"),
     cst$9=caml_string_of_jsbytes("/"),
     cst$10=caml_string_of_jsbytes("/"),
     cst$2=caml_string_of_jsbytes(".."),
     e=caml_string_of_jsbytes("/"),
     cst$3=caml_string_of_jsbytes("/"),
     cst$4=caml_string_of_jsbytes("/"),
     cst_int_of_hex_char=caml_string_of_jsbytes("int_of_hex_char"),
     cst_int_of_hex_char$0=caml_string_of_jsbytes("int_of_hex_char"),
     cst_file=caml_string_of_jsbytes("file"),
     cst_http=caml_string_of_jsbytes("http"),
     cst_https=caml_string_of_jsbytes("https"),
     cst_urn=caml_string_of_jsbytes("urn"),
     cst_localhost=caml_string_of_jsbytes("localhost"),
     subd=caml_string_of_jsbytes("!$&'()*+,;="),
     always_safe=
      caml_string_of_jsbytes
       ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.-~"),
     cst$47=caml_string_of_jsbytes(""),
     cst$49=caml_string_of_jsbytes("//"),
     Stdlib_buffer=global_data.Stdlib__buffer,
     Angstrom=global_data.Angstrom,
     Stdlib_string=global_data.Stdlib__string,
     Stdlib=global_data.Stdlib,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_format=global_data.Stdlib__format,
     Stdlib_printf=global_data.Stdlib__printf,
     Stringext=global_data.Stringext,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Stdlib_lazy=global_data.Stdlib__lazy,
     Stdlib_bytes=global_data.Stdlib__bytes,
     Stdlib_array=global_data.Stdlib__array,
     Stdlib_char=global_data.Stdlib__char,
     _G_=[0,0,0],
     _F_=[0,caml_string_of_jsbytes(""),0],
     _o_=
      [0,
       [11,caml_string_of_jsbytes("/?"),[2,0,0]],
       caml_string_of_jsbytes("/?%s")],
     _n_=[0,[2,0,[12,63,[2,0,0]]],caml_string_of_jsbytes("%s?%s")],
     _m_=[0,caml_string_of_jsbytes("")],
     _l_=[0,0],
     _g_=[0,caml_string_of_jsbytes(""),0],
     _h_=[0,caml_string_of_jsbytes(""),0],
     _i_=[0,2],
     _j_=[0,[0,caml_string_of_jsbytes(""),0],0],
     _d_=[0,2],
     _e_=[0,caml_string_of_jsbytes(""),0],
     _c_=[0,[12,37,[4,8,[0,2,2],0,0]],caml_string_of_jsbytes("%%%02X")],
     _b_=[0,caml_string_of_jsbytes("")],
     _a_=[0,caml_string_of_jsbytes("/"),0],
     _aj_=[0,0,0,0];
    function iter_concat(fn,sep,buf,param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var _d4_=param$0[1];
          if(param$0[2])
           {var rest=param$0[2];
            caml_call2(fn,buf,_d4_);
            caml_call2(Stdlib_buffer[14],buf,sep);
            var param$0=rest;
            continue}
          return caml_call2(fn,buf,_d4_)}
        return 0}}
    function compare_opt(c,t$0,t)
     {if(t$0)
       {var _d3_=t$0[1];if(t){var b=t[1];return caml_call2(c,_d3_,b)}return 1}
      return t?-1:0}
    function compare_list(f,t$0,t)
     {var t$2=t$0,t$1=t;
      for(;;)
       {if(t$2)
         {var _d1_=t$2[2],_d2_=t$2[1];
          if(t$1)
           {var ys=t$1[2],y=t$1[1],c=caml_call2(f,_d2_,y);
            if(0 === c){var t$2=_d1_,t$1=ys;continue}
            return c}
          return 1}
        return t$1?-1:0}}
    function sub_delims(a)
     {var i=0;
      for(;;)
       {var c=caml_string_get(subd,i);
        caml_check_bound(a,c)[1 + c] = 1;
        var _d0_=i + 1 | 0;
        if(10 !== i){var i=_d0_;continue}
        return a}}
    var a=caml_make_vect(256,0),i=0;
    for(;;)
     {var c=caml_string_get(always_safe,i);
      caml_check_bound(a,c)[1 + c] = 1;
      var _aK_=i + 1 | 0;
      if(65 !== i){var i=_aK_;continue}
      var pchar=sub_delims(caml_call1(Stdlib_array[8],a));
      caml_check_bound(pchar,58)[59] = 1;
      caml_check_bound(pchar,64)[65] = 1;
      var safe_chars_for_scheme=caml_call1(Stdlib_array[8],a);
      caml_check_bound(safe_chars_for_scheme,43)[44] = 1;
      var safe_chars_for_path=sub_delims(caml_call1(Stdlib_array[8],pchar));
      caml_check_bound(safe_chars_for_path,47)[48] = 0;
      var safe_chars_for_fragment=caml_call1(Stdlib_array[8],pchar);
      caml_check_bound(safe_chars_for_fragment,47)[48] = 1;
      caml_check_bound(safe_chars_for_fragment,63)[64] = 1;
      caml_check_bound(safe_chars_for_fragment,38)[39] = 0;
      caml_check_bound(safe_chars_for_fragment,59)[60] = 0;
      caml_check_bound(safe_chars_for_fragment,43)[44] = 0;
      var
       safe_chars_for_query_key=
        caml_call1(Stdlib_array[8],safe_chars_for_fragment);
      caml_check_bound(safe_chars_for_query_key,61)[62] = 0;
      var
       safe_chars_for_query_value=
        caml_call1(Stdlib_array[8],safe_chars_for_fragment);
      caml_check_bound(safe_chars_for_query_value,44)[45] = 0;
      var a$0=caml_call1(Stdlib_array[8],a);
      caml_check_bound(a$0,58)[59] = 0;
      var
       safe_chars_for_component=
        function(param)
         {if(typeof param === "number")
           if(-145160102 <= param)
            {if(127343601 <= param)
              {if(795008922 === param)return safe_chars_for_query_value;
               if(892015045 === param)return safe_chars_for_path}
             else
              if(61643255 !== param && 127343600 <= param)
               return safe_chars_for_fragment}
           else
            if(-250086679 <= param)
             {if(-178940859 === param)return safe_chars_for_scheme;
              if(-145160103 <= param)return a$0}
            else
             {if(-911188600 === param)return safe_chars_for_query_key;
              if(-250086680 <= param)return safe_chars_for_fragment}
          else
           if(-198771759 === param[1])
            {var
              match=param[2],
              unsafe=match[3],
              safe=match[2],
              component=match[1],
              safe_chars=safe_chars_for_component(component),
              _dV_=caml_ml_string_length(safe) - 1 | 0,
              _dU_=0;
             if(! (_dV_ < 0))
              {var i$0=_dU_;
               for(;;)
                {var c$0=caml_string_get(safe,i$0);
                 caml_check_bound(safe_chars,c$0)[1 + c$0] = 1;
                 var _dZ_=i$0 + 1 | 0;
                 if(_dV_ !== i$0){var i$0=_dZ_;continue}
                 break}}
             var _dX_=caml_ml_string_length(unsafe) - 1 | 0,_dW_=0;
             if(! (_dX_ < 0))
              {var i=_dW_;
               for(;;)
                {var c=caml_string_get(unsafe,i);
                 caml_check_bound(safe_chars,c)[1 + c] = 0;
                 var _dY_=i + 1 | 0;
                 if(_dX_ !== i){var i=_dY_;continue}
                 break}}
             return safe_chars}
          return a},
       normalize_host=function(hso){return hso},
       canonicalize_port=function(port){return port},
       canonicalize_path=function(path){return path},
       Generic=
        [0,
         safe_chars_for_component,
         normalize_host,
         canonicalize_port,
         canonicalize_path],
       safe_chars_for_component$0=Generic[1],
       normalize_host$0=
        function(param)
         {if(param)
           {var hs=param[1];return [0,caml_call1(Stdlib_string[30],hs)]}
          return 0},
       canonicalize_port$0=
        function(param)
         {if(param){var _dT_=param[1];return 80 === _dT_?0:[0,_dT_]}return 0},
       canonicalize_path$0=function(x){return x?x:_a_},
       Http=
        [0,
         safe_chars_for_component$0,
         normalize_host$0,
         canonicalize_port$0,
         canonicalize_path$0],
       safe_chars_for_component$1=Http[1],
       normalize_host$1=Http[2],
       canonicalize_path$1=Http[4],
       canonicalize_port$1=
        function(param)
         {if(param){var _dS_=param[1];return 443 === _dS_?0:[0,_dS_]}return 0},
       Https=
        [0,
         safe_chars_for_component$1,
         normalize_host$1,
         canonicalize_port$1,
         canonicalize_path$1],
       safe_chars_for_component$2=Generic[1],
       canonicalize_port$2=Generic[3],
       canonicalize_path$2=Generic[4],
       normalize_host$2=
        function(param)
         {if(param)
           {var hs=param[1],hs$0=caml_call1(Stdlib_string[30],hs);
            return caml_string_equal(hs$0,cst_localhost)?_b_:[0,hs$0]}
          return 0},
       File=
        [0,
         safe_chars_for_component$2,
         normalize_host$2,
         canonicalize_port$2,
         canonicalize_path$2],
       safe_chars_for_component$3=Generic[1],
       normalize_host$3=Generic[2],
       canonicalize_port$3=Generic[3],
       canonicalize_path$3=Generic[4],
       Urn=
        [0,
         safe_chars_for_component$3,
         normalize_host$3,
         canonicalize_port$3,
         canonicalize_path$3],
       module_of_scheme=
        function(param)
         {if(param)
           {var s=param[1],match=caml_call1(Stdlib_string[30],s);
            return caml_string_notequal(match,cst_file)
                    ?caml_string_notequal(match,cst_http)
                      ?caml_string_notequal(match,cst_https)
                        ?caml_string_notequal(match,cst_urn)?Generic:Urn
                        :Https
                      :Http
                    :File}
          return Generic},
       encode=
        function(scheme,opt,b)
         {if(opt)var sth=opt[1],component=sth;else var component=892015045;
          var
           Scheme=module_of_scheme(scheme),
           safe_chars=caml_call1(Scheme[1],component),
           len=caml_ml_string_length(b),
           buf=caml_call1(Stdlib_buffer[1],len),
           start=0,
           cur=0;
          for(;;)
           {if(len <= cur)
             {caml_call4(Stdlib_buffer[16],buf,b,start,cur - start | 0);
              return caml_call1(Stdlib_buffer[2],buf)}
            var c=caml_string_get(b,cur);
            if(caml_check_bound(safe_chars,c)[1 + c])
             {var cur$0=cur + 1 | 0,cur=cur$0;continue}
            if(start < cur)
             caml_call4(Stdlib_buffer[16],buf,b,start,cur - start | 0);
            var _dR_=caml_call2(Stdlib_printf[4],_c_,c);
            caml_call2(Stdlib_buffer[14],buf,_dR_);
            var cur$1=cur + 1 | 0,start$0=cur + 1 | 0,start=start$0,cur=cur$1;
            continue}},
       int_of_hex_char=
        function(c)
         {var c$0=caml_call1(Stdlib_char[6],c) - 48 | 0;
          if(9 < c$0)
           {if(16 < c$0 && ! (23 <= c$0))return c$0 - 7 | 0;
            return caml_call1(Stdlib[2],cst_int_of_hex_char)}
          return 0 <= c$0?c$0:caml_call1(Stdlib[2],cst_int_of_hex_char$0)},
       decode=
        function(b)
         {var
           len=caml_ml_string_length(b),
           buf=caml_call1(Stdlib_buffer[1],len);
          function scan(start,cur)
           {var start$0=start,cur$0=cur;
            for(;;)
             {if(len <= cur$0)
               return caml_call4
                       (Stdlib_buffer[16],buf,b,start$0,cur$0 - start$0 | 0);
              if(37 === caml_string_get(b,cur$0))
               {caml_call4
                 (Stdlib_buffer[16],buf,b,start$0,cur$0 - start$0 | 0);
                var cur$1=cur$0 + 1 | 0;
                if(len <= cur$1)return caml_call2(Stdlib_buffer[10],buf,37);
                try
                 {var highbits=int_of_hex_char(caml_string_get(b,cur$1))}
                catch(_dQ_)
                 {caml_call2(Stdlib_buffer[10],buf,37);
                  var start$0=cur$1,cur$0=cur$1;
                  continue}
                var cur$2=cur$1 + 1 | 0;
                if(len <= cur$2)
                 {caml_call2(Stdlib_buffer[10],buf,37);
                  var _dM_=caml_string_get(b,cur$2 - 1 | 0);
                  return caml_call2(Stdlib_buffer[10],buf,_dM_)}
                try
                 {var
                   switch$0=0,
                   lowbits=int_of_hex_char(caml_string_get(b,cur$2));
                  switch$0 = 1}
                catch(_dP_)
                 {caml_call2(Stdlib_buffer[10],buf,37);
                  var _dN_=caml_string_get(b,cur$2 - 1 | 0);
                  caml_call2(Stdlib_buffer[10],buf,_dN_);
                  var cur$3=cur$2}
                if(switch$0)
                 {var
                   _dO_=
                    caml_call1(Stdlib_char[1],(highbits << 4) + lowbits | 0);
                  caml_call2(Stdlib_buffer[10],buf,_dO_);
                  var cur$3=cur$2 + 1 | 0}
                var start$0=cur$3,cur$0=cur$3;
                continue}
              var cur$4=cur$0 + 1 | 0,cur$0=cur$4;
              continue}}
          scan(0,0);
          return caml_call1(Stdlib_buffer[2],buf)},
       pct_encode=
        function(scheme,opt,s)
         {if(opt)var sth=opt[1],component=sth;else var component=892015045;
          return encode(scheme,[0,component],s)},
       pct_encoder=
        function(opt,_dL_,_dK_,_dJ_,_dI_,_dH_,_dG_,param)
         {if(opt)var sth=opt[1],scheme=sth;else var scheme=-178940859;
          if(_dL_)
           var sth$0=_dL_[1],userinfo=sth$0;
          else
           var userinfo=-145160103;
          if(_dK_)var sth$1=_dK_[1],host=sth$1;else var host=803994504;
          if(_dJ_)var sth$2=_dJ_[1],path=sth$2;else var path=892015045;
          if(_dI_)
           var sth$3=_dI_[1],query_key=sth$3;
          else
           var query_key=-911188600;
          if(_dH_)
           var sth$4=_dH_[1],query_value=sth$4;
          else
           var query_value=795008922;
          if(_dG_)
           var sth$5=_dG_[1],fragment=sth$5;
          else
           var fragment=127343600;
          return [0,scheme,userinfo,host,path,query_key,query_value,fragment]},
       pct_decode=function(s){return decode(s)},
       compare=
        function(param,_dF_)
         {var
           p=_dF_[2],
           u=_dF_[1],
           p$0=param[2],
           u$0=param[1],
           c=caml_call2(Stdlib_string[33],u$0,u);
          return 0 === c?compare_opt(Stdlib_string[33],p$0,p):c},
       userinfo_of_encoded=
        function(us)
         {var match=caml_call3(Stringext[3],_d_,us,58);
          if(match)
           {var _dC_=match[2],_dD_=match[1];
            if(_dC_)
             {var p=_dC_[1],_dE_=[0,pct_decode(p)];
              return [0,pct_decode(_dD_),_dE_]}
            return [0,pct_decode(_dD_),0]}
          return _e_},
       encoded_of_userinfo=
        function(scheme,component)
         {return function(param)
           {var po=param[2],u=param[1];
            if(po)var p=po[1],_dz_=caml_ml_string_length(p);else var _dz_=0;
            var
             len=(1 + caml_ml_string_length(u) | 0) + _dz_ | 0,
             buf=caml_call1(Stdlib_buffer[1],len),
             _dA_=pct_encode(scheme,[0,component],u);
            caml_call2(Stdlib_buffer[14],buf,_dA_);
            if(po)
             {var p$0=po[1];
              caml_call2(Stdlib_buffer[10],buf,58);
              var _dB_=pct_encode(scheme,[0,component],p$0);
              caml_call2(Stdlib_buffer[14],buf,_dB_)}
            return caml_call1(Stdlib_buffer[2],buf)}},
       _f_=Stdlib_string[33],
       path_of_encoded=
        function(ps)
         {var tokl=caml_call2(Stringext[4],ps,47);
          return caml_call2(Stdlib_list[17],pct_decode,tokl)},
       remove_dot_segments=
        function(p)
         {var
           param$1=caml_call1(Stdlib_list[9],p),
           ascension=0,
           outp=0,
           param$2=param$1;
          for(;;)
           {var switch$0=0;
            if(param$2)
             {var _dv_=param$2[1],switch$1=0;
              if(caml_string_notequal(_dv_,cst))
               {var switch$2=0;
                if(caml_string_notequal(_dv_,cst$0))
                 if(caml_string_notequal(_dv_,cst$1))
                  {switch$1 = 1;switch$2 = 1}
                 else
                  {var _dx_=param$2[2];
                   if(_dx_)
                    {var _dy_=_dx_[1];
                     if(caml_string_notequal(_dy_,cst$5))
                      if(caml_string_notequal(_dy_,cst$6))
                       {if(! caml_string_notequal(_dy_,cst$7))
                         {var r$0=_dx_[2];
                          if(0 < ascension)
                           {var
                             param$4=[0,cst$8,r$0],
                             ascension$1=ascension - 1 | 0,
                             ascension=ascension$1,
                             param$2=param$4;
                            continue}}
                        var r=_dx_[2];
                        if(0 < ascension)
                         {var
                           ascension$0=ascension - 1 | 0,
                           ascension=ascension$0,
                           param$2=r;
                          continue}
                        switch$1 = 1;
                        switch$2 = 1}
                      else
                       var param$5=_dx_[2];
                     else
                      {var param$6=_dx_[2];switch$2 = 1}}
                   else
                    {switch$0 = 1;switch$1 = 1;switch$2 = 1}}
                else
                 var param$5=param$2[2];
                if(! switch$2)
                 {var
                   ascension$2=ascension + 1 | 0,
                   ascension=ascension$2,
                   param$2=param$5;
                  continue}}
              else
               var param$6=param$2[2];
              if(! switch$1){var param$2=param$6;continue}}
            else
             switch$0 = 1;
            if
             (switch$0
              &&
              0
              <
              caml_call1(Stdlib_list[1],p)
              &&
              caml_string_equal(caml_call1(Stdlib_list[5],p),cst$9))
             return [0,cst$10,outp];
            if(param$2)
             {var
               param$3=param$2[2],
               s=param$2[1],
               outp$0=[0,s,outp],
               ascension=0,
               outp=outp$0,
               param$2=param$3;
              continue}
            if(0 < ascension)
             {var
               lst=
                caml_call1(Stdlib_array[11],caml_make_vect(ascension,cst$2));
              if(lst)
               {var t=lst[2],h=lst[1],acc$1=[0,h,0],acc=acc$1,param=t;
                for(;;)
                 {if(param)
                   {var
                     param$0=param[2],
                     x=param[1],
                     acc$0=[0,x,[0,e,acc]],
                     acc=acc$0,
                     param=param$0;
                    continue}
                  var _dw_=acc;
                  break}}
              else
               var _dw_=0;
              return caml_call2(Stdlib_list[12],[0,cst$3,_dw_],outp)}
            if
             (0
              <
              caml_call1(Stdlib_list[1],outp)
              &&
              caml_string_equal(caml_call1(Stdlib_list[5],outp),cst$4))
             return caml_call1(Stdlib_list[6],outp);
            return outp}},
       encoded_of_path=
        function(scheme,component)
         {return function(p)
           {var _ds_=0;
            function _dt_(c,tok){return caml_ml_string_length(tok) + c | 0}
            var
             len=caml_call3(Stdlib_list[23],_dt_,_ds_,p),
             buf=caml_call1(Stdlib_buffer[1],len);
            iter_concat
             (function(buf,seg)
               {if(caml_string_notequal(seg,cst$12))
                 {var _du_=pct_encode(scheme,[0,component],seg);
                  return caml_call2(Stdlib_buffer[14],buf,_du_)}
                return caml_call2(Stdlib_buffer[10],buf,47)},
              cst$11,
              buf,
              p);
            return caml_call1(Stdlib_buffer[2],buf)}},
       find=
        function(q,k)
         {try
           {var _dq_=[0,caml_call2(Stdlib_list[43],k,q)];return _dq_}
          catch(_dr_)
           {_dr_ = caml_wrap_exception(_dr_);
            if(_dr_ === Stdlib[8])return 0;
            throw _dr_}},
       query_of_encoded=
        function(qs)
         {var els=caml_call3(Stringext[3],0,qs,38);
          function plus_to_space(s)
           {var
             s$0=caml_call1(Stdlib_bytes[43],s),
             _do_=runtime.caml_ml_bytes_length(s$0) - 1 | 0,
             _dn_=0;
            if(! (_do_ < 0))
             {var i=_dn_;
              for(;;)
               {if(43 === runtime.caml_bytes_get(s$0,i))
                 runtime.caml_bytes_set(s$0,i,32);
                var _dp_=i + 1 | 0;
                if(_do_ !== i){var i=_dp_;continue}
                break}}
            return caml_call1(Stdlib_bytes[42],s$0)}
          if(els)
           {var
             _dj_=function(el){return caml_call3(Stringext[3],_i_,el,61)},
             param$1=caml_call2(Stdlib_list[19],_dj_,els),
             acc=0,
             param=param$1;
            for(;;)
             {if(param)
               {var _df_=param[1];
                if(_df_)
                 {var _dg_=_df_[2],_dh_=_df_[1];
                  if(_dg_)
                   {var
                     tl=param[2],
                     v=_dg_[1],
                     _di_=plus_to_space(v),
                     l=caml_call3(Stringext[3],0,_di_,44),
                     l$0=l || _g_,
                     n=[0,plus_to_space(_dh_),l$0],
                     acc$0=[0,n,acc],
                     acc=acc$0,
                     param=tl;
                    continue}
                  var
                   tl$0=param[2],
                   n$0=[0,plus_to_space(_dh_),0],
                   acc$1=[0,n$0,acc],
                   acc=acc$1,
                   param=tl$0;
                  continue}
                var
                 param$0=param[2],
                 acc$2=[0,_h_,acc],
                 acc=acc$2,
                 param=param$0;
                continue}
              var _dk_=acc;
              break}}
          else
           var _dk_=_j_;
          function _dl_(param)
           {var
             v=param[2],
             k=param[1],
             _dm_=caml_call2(Stdlib_list[17],pct_decode,v);
            return [0,pct_decode(k),_dm_]}
          return caml_call2(Stdlib_list[17],_dl_,_dk_)},
       encoded_of_query=
        function(scheme,opt,l)
         {if(opt)
           var sth=opt[1],pct_encoder$0=sth;
          else
           var pct_encoder$0=pct_encoder(0,0,0,0,0,0,0,0);
          var _c__=-1;
          function _c$_(a,param)
           {var v=param[2],k=param[1],_dd_=0;
            function _de_(a,s)
             {return (a + caml_ml_string_length(s) | 0) + 1 | 0}
            return ((a + caml_ml_string_length(k) | 0)
                    +
                    caml_call3(Stdlib_list[23],_de_,_dd_,v)
                    |
                    0)
                   +
                   2
                   |
                   0}
          var
           len=caml_call3(Stdlib_list[23],_c$_,_c__,l),
           buf=caml_call1(Stdlib_buffer[1],len);
          iter_concat
           (function(buf,param)
             {var
               v=param[2],
               k=param[1],
               _da_=pct_encode(scheme,[0,pct_encoder$0[5]],k);
              caml_call2(Stdlib_buffer[14],buf,_da_);
              var _db_=0 !== v?1:0;
              return _db_
                      ?(caml_call2(Stdlib_buffer[10],buf,61),
                        iter_concat
                         (function(buf,s)
                           {var _dc_=pct_encode(scheme,[0,pct_encoder$0[6]],s);
                            return caml_call2(Stdlib_buffer[14],buf,_dc_)},
                          cst$18,
                          buf,
                          v))
                      :_db_},
            cst$17,
            buf,
            l);
          return caml_call1(Stdlib_buffer[2],buf)},
       of_raw=
        function(qs)
         {function _c9_(param){return query_of_encoded(qs)}
          var lazy_query=caml_call1(Stdlib_lazy[3],_c9_);
          return [1,[0,qs],lazy_query]},
       kv=
        function(param)
         {if(0 === param[0])
           var kv=param[1];
          else
           var
            _c6_=param[2],
            _c7_=caml_obj_tag(_c6_),
            _c8_=
             250 === _c7_
              ?_c6_[1]
              :246 === _c7_?caml_call1(CamlinternalLazy[2],_c6_):_c6_,
            kv=_c8_;
          return kv},
       encoded_of_query$0=
        function(scheme)
         {return function(_c4_,_c5_)
           {return encoded_of_query(scheme,_c4_,_c5_)}},
       empty=[0,0,0,0,0,0,[1,0,caml_call1(Stdlib_lazy[4],0)],0],
       _k_=Stdlib_string[33],
       compare_decoded_opt=
        function(_c2_,_c3_){return compare_opt(_k_,_c2_,_c3_)},
       compare$0=
        function(t$0,t)
         {var c=compare_decoded_opt(t$0[3],t[3]);
          if(0 === c)
           {var c$0=compare_decoded_opt(t$0[1],t[1]);
            if(0 === c$0)
             {var
               _cX_=t[4],
               _cY_=t$0[4],
               c$1=
                compare_opt
                 (function(p$0,p){return p$0 < p?-1:p < p$0?1:0},_cY_,_cX_);
              if(0 === c$1)
               {var c$2=compare_opt(compare,t$0[2],t[2]);
                if(0 === c$2)
                 {var c$4=compare_list(_f_,t$0[5],t[5]);
                  if(0 === c$4)
                   {var _cZ_=t[6],_c0_=t$0[6],switch$0=0;
                    if(0 === _c0_[0])
                     {var _cP_=_c0_[1];
                      if(0 === _cZ_[0])
                       var kvl$0=_cZ_[1],kvl=_cP_;
                      else
                       var
                        _cQ_=_cZ_[2],
                        _cR_=caml_obj_tag(_cQ_),
                        _cS_=
                         250 === _cR_
                          ?_cQ_[1]
                          :246 === _cR_?caml_call1(CamlinternalLazy[2],_cQ_):_cQ_,
                        kvl$0=_cS_,
                        kvl=_cP_}
                    else
                     {var _cT_=_c0_[2],_cU_=_c0_[1];
                      if(0 === _cZ_[0])
                       var
                        _cV_=caml_obj_tag(_cT_),
                        _cW_=
                         250 === _cV_
                          ?_cT_[1]
                          :246 === _cV_?caml_call1(CamlinternalLazy[2],_cT_):_cT_,
                        kvl$0=_cZ_[1],
                        kvl=_cW_;
                      else
                       {var
                         raw=_cZ_[1],
                         c$3=compare_opt(Stdlib_string[33],_cU_,raw);
                        switch$0 = 1}}
                    if(! switch$0)
                     var
                      c$3=
                       compare_list
                        (function(param,_c1_)
                          {var
                            vl=_c1_[2],
                            k=_c1_[1],
                            vl$0=param[2],
                            k$0=param[1],
                            c=caml_call2(Stdlib_string[33],k$0,k);
                           return 0 === c?compare_list(Stdlib_string[33],vl$0,vl):c},
                         kvl,
                         kvl$0);
                    return 0 === c$3?compare_decoded_opt(t$0[7],t[7]):c$3}
                  return c$4}
                return c$2}
              return c$1}
            return c$0}
          return c},
       equal=function(t$0,t){return 0 === compare$0(t$0,t)?1:0},
       uncast_opt=
        function(param){if(param){var h=param[1];return [0,h]}return 0},
       normalize=
        function(schem,init)
         {var
           Scheme=module_of_scheme(uncast_opt(schem)),
           _cF_=init[7],
           _cG_=init[6],
           _cH_=init[5],
           _cI_=init[4],
           _cJ_=uncast_opt(init[3]),
           param=caml_call1(Scheme[2],_cJ_);
          if(param)var h=param[1],_cK_=[0,h];else var _cK_=0;
          var _cM_=init[1],_cL_=init[2],_cN_=Stdlib_string[30];
          if(_cM_)var x=_cM_[1],_cO_=[0,caml_call1(_cN_,x)];else var _cO_=0;
          return [0,_cO_,_cL_,_cK_,_cI_,_cH_,_cG_,_cF_]},
       make=
        function(scheme,userinfo,host,port,path,query,fragment,param)
         {function decode(param)
           {if(param){var x=param[1];return [0,x]}return 0}
          var switch$0=0;
          if(! host)
           {var switch$1=0;
            if(! port && ! userinfo)switch$1 = 1;
            if(! switch$1){var host$0=_m_;switch$0 = 1}}
          if(! switch$0)var host$0=host;
          if(userinfo)
           var u=userinfo[1],userinfo$0=[0,userinfo_of_encoded(u)];
          else
           var userinfo$0=0;
          if(path)
           {var p=path[1],match=path_of_encoded(p),switch$2=0;
            if(host$0 && match && caml_string_notequal(match[1],cst$19))
             {var _cD_=[0,cst$20,match];switch$2 = 1}
            if(! switch$2)var _cD_=match;
            var path$0=_cD_}
          else
           var path$0=0;
          if(query)var p$0=query[1],query$0=[0,p$0];else var query$0=_l_;
          var scheme$0=decode(scheme),_cE_=decode(fragment);
          return normalize
                  (scheme$0,
                   [0,
                    scheme$0,
                    userinfo$0,
                    decode(host$0),
                    port,
                    path$0,
                    query$0,
                    _cE_])},
       to_string=
        function(opt,uri)
         {if(opt)
           var sth=opt[1],pct_encoder$0=sth;
          else
           var pct_encoder$0=pct_encoder(0,0,0,0,0,0,0,0);
          var _cf_=uri[1];
          if(_cf_)var s=_cf_[1],scheme=[0,s];else var scheme=0;
          var buf=caml_call1(Stdlib_buffer[1],128);
          function add_pct_string(opt,x)
           {if(opt)var sth=opt[1],component=sth;else var component=892015045;
            var _cC_=encode(scheme,[0,component],x);
            return caml_call2(Stdlib_buffer[14],buf,_cC_)}
          var _cg_=uri[1];
          if(_cg_)
           {var x=_cg_[1];
            add_pct_string([0,pct_encoder$0[1]],x);
            caml_call2(Stdlib_buffer[10],buf,58)}
          var switch$0=0,_ch_=uri[3],_ci_=uri[4];
          if(! uri[2] && ! _ch_ && ! _ci_){var _cj_=0;switch$0 = 1}
          if(! switch$0)var _cj_=1;
          if(_cj_)caml_call2(Stdlib_buffer[14],buf,cst$21);
          var _ck_=uri[2];
          if(_ck_)
           {var
             userinfo=_ck_[1],
             _cl_=
              caml_call1
               (encoded_of_userinfo(scheme,pct_encoder$0[2]),userinfo);
            caml_call2(Stdlib_buffer[14],buf,_cl_);
            caml_call2(Stdlib_buffer[10],buf,64)}
          var _cm_=uri[3];
          if(_cm_){var host=_cm_[1];add_pct_string([0,pct_encoder$0[3]],host)}
          var _cn_=uri[4];
          if(_cn_)
           {var port=_cn_[1];
            caml_call2(Stdlib_buffer[10],buf,58);
            var _co_=caml_call1(Stdlib[33],port);
            caml_call2(Stdlib_buffer[14],buf,_co_)}
          var _cp_=uri[5];
          if(_cp_)
           {var _cq_=_cp_[1];
            if(caml_string_notequal(_cq_,cst$22))
             {if(uri[3])
               caml_call2(Stdlib_buffer[10],buf,47);
              else
               {var match=caml_call3(Stringext[12],0,_cq_,cst$23);
                if(match && ! scheme)caml_call2(Stdlib_buffer[14],buf,cst$24)}
              var
               _cr_=uri[5],
               _cs_=caml_call1(encoded_of_path(scheme,pct_encoder$0[4]),_cr_);
              caml_call2(Stdlib_buffer[14],buf,_cs_)}
            else
             {var
               _cA_=uri[5],
               _cB_=caml_call1(encoded_of_path(scheme,pct_encoder$0[4]),_cA_);
              caml_call2(Stdlib_buffer[14],buf,_cB_)}}
          var _ct_=uri[6],switch$1=0;
          if(0 === _ct_[0])
           {var _cu_=_ct_[1];if(_cu_){var q=_cu_;switch$1 = 1}}
          else
           if(_ct_[1])
            {var
              _cx_=_ct_[2],
              _cy_=caml_obj_tag(_cx_),
              _cz_=
               250 === _cy_
                ?_cx_[1]
                :246 === _cy_?caml_call1(CamlinternalLazy[2],_cx_):_cx_,
              q=_cz_;
             switch$1 = 1}
          if(switch$1)
           {caml_call2(Stdlib_buffer[10],buf,63);
            var _cv_=encoded_of_query(scheme,[0,pct_encoder$0],q);
            caml_call2(Stdlib_buffer[14],buf,_cv_)}
          var _cw_=uri[7];
          if(_cw_)
           {var f=_cw_[1];
            caml_call2(Stdlib_buffer[10],buf,35);
            add_pct_string([0,pct_encoder$0[7]],f)}
          return caml_call1(Stdlib_buffer[2],buf)},
       get_decoded_opt=
        function(param){if(param){var x=param[1];return [0,x]}return 0},
       scheme=function(uri){return get_decoded_opt(uri[1])},
       with_scheme=
        function(uri,param)
         {if(param)
           {var scheme=param[1];
            return [0,[0,scheme],uri[2],uri[3],uri[4],uri[5],uri[6],uri[7]]}
          return [0,0,uri[2],uri[3],uri[4],uri[5],uri[6],uri[7]]},
       host=function(uri){return get_decoded_opt(uri[3])},
       with_host=
        function(uri,param)
         {if(param)
           {var host=param[1];
            return [0,uri[1],uri[2],[0,host],uri[4],uri[5],uri[6],uri[7]]}
          return [0,uri[1],uri[2],0,uri[4],uri[5],uri[6],uri[7]]},
       host_with_default=
        function(opt,uri)
         {if(opt)
           var sth=opt[1],default$0=sth;
          else
           var default$0=cst_localhost$0;
          var match=host(uri);
          if(match){var h=match[1];return h}
          return default$0},
       userinfo=
        function(opt,uri)
         {if(opt)
           var sth=opt[1],pct_encoder$0=sth;
          else
           var pct_encoder$0=pct_encoder(0,0,0,0,0,0,0,0);
          var _cc_=uri[2];
          if(_cc_)
           {var userinfo=_cc_[1],_cd_=uri[1];
            if(_cd_)
             var
              s=_cd_[1],
              _ce_=
               caml_call1
                (encoded_of_userinfo([0,s],pct_encoder$0[2]),userinfo);
            else
             var
              _ce_=
               caml_call1(encoded_of_userinfo(0,pct_encoder$0[2]),userinfo);
            return [0,_ce_]}
          return 0},
       with_userinfo=
        function(uri,userinfo)
         {if(userinfo)
           var u=userinfo[1],userinfo$0=[0,userinfo_of_encoded(u)];
          else
           var userinfo$0=0;
          var match=host(uri);
          return match
                  ?[0,uri[1],userinfo$0,uri[3],uri[4],uri[5],uri[6],uri[7]]
                  :[0,
                    uri[1],
                    userinfo$0,
                    [0,cst$25],
                    uri[4],
                    uri[5],
                    uri[6],
                    uri[7]]},
       user=
        function(uri)
         {var _cb_=uri[2];
          if(_cb_){var match=_cb_[1],user=match[1];return [0,user]}
          return 0},
       password=
        function(uri)
         {var _b$_=uri[2];
          if(_b$_)
           {var _ca_=_b$_[1][2];if(_ca_){var pass=_ca_[1];return [0,pass]}}
          return 0},
       with_password=
        function(uri,password)
         {function result(userinfo)
           {var match=host(uri);
            return match
                    ?[0,uri[1],userinfo,uri[3],uri[4],uri[5],uri[6],uri[7]]
                    :[0,uri[1],userinfo,[0,cst$26],uri[4],uri[5],uri[6],uri[7]]}
          var _b__=uri[2];
          if(_b__)
           {var match=_b__[1],user=match[1];
            return result([0,[0,user,password]])}
          return password?result([0,[0,cst$27,password]]):uri},
       port=function(uri){return uri[4]},
       with_port=
        function(uri,port)
         {var match=host(uri);
          return match
                  ?[0,uri[1],uri[2],uri[3],port,uri[5],uri[6],uri[7]]
                  :port
                    ?[0,uri[1],uri[2],[0,cst$28],port,uri[5],uri[6],uri[7]]
                    :[0,uri[1],uri[2],0,0,uri[5],uri[6],uri[7]]},
       path=
        function(opt,uri)
         {if(opt)
           var sth=opt[1],pct_encoder$0=sth;
          else
           var pct_encoder$0=pct_encoder(0,0,0,0,0,0,0,0);
          var _b6_=uri[1];
          if(_b6_)
           var
            s=_b6_[1],
            _b7_=uri[5],
            _b8_=caml_call1(encoded_of_path([0,s],pct_encoder$0[4]),_b7_);
          else
           var
            _b9_=uri[5],
            _b8_=caml_call1(encoded_of_path(0,pct_encoder$0[4]),_b9_);
          return _b8_},
       with_path=
        function(uri,path)
         {var match=path_of_encoded(path);
          if(host(uri) && match && caml_string_notequal(match[1],cst$29))
           return [0,
                   uri[1],
                   uri[2],
                   uri[3],
                   uri[4],
                   [0,cst$30,match],
                   uri[6],
                   uri[7]];
          return [0,uri[1],uri[2],uri[3],uri[4],match,uri[6],uri[7]]},
       fragment=function(uri){return get_decoded_opt(uri[7])},
       with_fragment=
        function(uri,param)
         {if(param)
           {var frag=param[1];
            return [0,uri[1],uri[2],uri[3],uri[4],uri[5],uri[6],[0,frag]]}
          return [0,uri[1],uri[2],uri[3],uri[4],uri[5],uri[6],0]},
       query=function(uri){return kv(uri[6])},
       verbatim_query=
        function(opt,uri)
         {if(opt)
           var sth=opt[1],pct_encoder$0=sth;
          else
           var pct_encoder$0=pct_encoder(0,0,0,0,0,0,0,0);
          var _b4_=uri[6];
          if(0 === _b4_[0])
           {var _b5_=_b4_[1];
            return _b5_
                    ?[0,encoded_of_query(scheme(uri),[0,pct_encoder$0],_b5_)]
                    :0}
          var qs=_b4_[1];
          return qs},
       get_query_param=function(uri,k){return find(kv(uri[6]),k)},
       get_query_param$0=
        function(uri,k)
         {var match=get_query_param(uri,k);
          if(match)
           {var v=match[1];return [0,caml_call2(Stdlib_string[7],cst$31,v)]}
          return 0},
       with_query=
        function(uri,query)
         {return [0,uri[1],uri[2],uri[3],uri[4],uri[5],[0,query],uri[7]]},
       q_s=
        function(q)
         {function _b3_(param){var v=param[2],k=param[1];return [0,k,[0,v,0]]}
          return caml_call2(Stdlib_list[17],_b3_,q)},
       with_query$0=function(uri,query){return with_query(uri,q_s(query))},
       add_query_param=
        function(init,p)
         {var _b1_=init[7],_b2_=[0,[0,p,kv(init[6])]];
          return [0,init[1],init[2],init[3],init[4],init[5],_b2_,_b1_]},
       add_query_param$0=
        function(init,param)
         {var
           v=param[2],
           k=param[1],
           _bZ_=init[7],
           _b0_=[0,[0,[0,k,[0,v,0]],kv(init[6])]];
          return [0,init[1],init[2],init[3],init[4],init[5],_b0_,_bZ_]},
       add_query_params=
        function(init,ps)
         {var
           _bW_=init[7],
           _bX_=kv(init[6]),
           _bY_=[0,caml_call2(Stdlib[37],ps,_bX_)];
          return [0,init[1],init[2],init[3],init[4],init[5],_bY_,_bW_]},
       add_query_params$0=
        function(init,ps)
         {var
           _bS_=init[7],
           _bT_=kv(init[6]),
           _bU_=q_s(ps),
           _bV_=[0,caml_call2(Stdlib[37],_bU_,_bT_)];
          return [0,init[1],init[2],init[3],init[4],init[5],_bV_,_bS_]},
       remove_query_param=
        function(init,k)
         {var _bO_=init[7],_bP_=kv(init[6]);
          function _bQ_(param)
           {var k$0=param[1];return caml_string_notequal(k,k$0)}
          var _bR_=[0,caml_call2(Stdlib_list[39],_bQ_,_bP_)];
          return [0,init[1],init[2],init[3],init[4],init[5],_bR_,_bO_]},
       with_uri=
        function(scheme,userinfo,host,port,path,query,fragment,uri)
         {function with_path_opt(u,o)
           {if(o){var p=o[1];return with_path(u,p)}return with_path(u,cst$32)}
          function with_query_opt(u,o)
           {if(o){var q=o[1];return with_query(u,q)}return with_query(u,0)}
          function with$0(f,o,u)
           {if(o){var x=o[1];return caml_call2(f,u,x)}return u}
          return with$0
                  (with_fragment,
                   fragment,
                   with$0
                    (with_query_opt,
                     query,
                     with$0
                      (with_path_opt,
                       path,
                       with$0
                        (with_port,
                         port,
                         with$0
                          (with_host,
                           host,
                           with$0
                            (with_userinfo,userinfo,with$0(with_scheme,scheme,uri)))))))},
       path_and_query=
        function(uri)
         {var match=path(0,uri),match$0=query(uri);
          if(caml_string_notequal(match,cst$33))
           {if(match$0)
             {var
               scheme=uncast_opt(uri[1]),
               _bM_=caml_call2(encoded_of_query$0(scheme),0,match$0);
              return caml_call3(Stdlib_printf[4],_n_,match,_bM_)}
            return match}
          if(match$0)
           {var
             scheme$0=uncast_opt(uri[1]),
             _bN_=caml_call2(encoded_of_query$0(scheme$0),0,match$0);
            return caml_call2(Stdlib_printf[4],_o_,_bN_)}
          return cst$34},
       resolve=
        function(schem,base,uri)
         {var match$0=scheme(base);
          if(match$0)
           var scheme$0=match$0[1],scheme$1=scheme$0;
          else
           var scheme$1=schem;
          var
           schem$0=[0,scheme$1],
           match$1=scheme(uri),
           match$2=userinfo(0,uri),
           match$3=host(uri);
          if(match$1)
           var
            _bt_=uri[7],
            _bu_=uri[6],
            _bv_=remove_dot_segments(uri[5]),
            _bw_=[0,uri[1],uri[2],uri[3],uri[4],_bv_,_bu_,_bt_];
          else
           {var switch$0=0;
            if(match$2 || match$3)
             switch$0 = 1;
            else
             {var
               init=[0,base[1],base[2],base[3],base[4],uri[5],uri[6],uri[7]],
               path_str=path(0,init);
              if(caml_string_equal(path_str,cst$35))
               var
                _bA_=init[7],
                _bB_=init[6][1]?init[6]:base[6],
                _bC_=[0,init[1],init[2],init[3],init[4],base[5],_bB_,_bA_];
              else
               if(47 === caml_string_get(path_str,0))
                var
                 _bD_=init[7],
                 _bE_=init[6],
                 _bF_=remove_dot_segments(init[5]),
                 _bC_=[0,init[1],init[2],init[3],init[4],_bF_,_bE_,_bD_];
               else
                {var
                  _bI_=init[5],
                  _bG_=init[7],
                  _bH_=init[6],
                  _bJ_=base[3],
                  match=caml_call1(Stdlib_list[9],base[5]),
                  switch$1=0;
                 if(_bJ_ && ! match)
                  var _bK_=[0,cst$16,_bI_];
                 else
                  switch$1 = 1;
                 if(switch$1)
                  {var switch$2=0;
                   if(match)
                    {var switch$3=0;
                     if(caml_string_notequal(match[1],cst$13))
                      {var _bs_=match[2];
                       if(_bs_ && ! caml_string_notequal(_bs_[1],cst$14))
                        var rbpath=_bs_[2];
                       else
                        switch$3 = 1}
                     else
                      var rbpath=match[2];
                     if(! switch$3)
                      {var
                        _bK_=
                         caml_call2(Stdlib_list[12],[0,cst$15,rbpath],_bI_);
                       switch$2 = 1}}
                   if(! switch$2)var _bK_=_bI_}
                 var
                  _bL_=remove_dot_segments(_bK_),
                  _bC_=[0,init[1],init[2],init[3],init[4],_bL_,_bH_,_bG_]}
              var _bw_=_bC_}
            if(switch$0)
             var
              _bx_=uri[7],
              _by_=uri[6],
              _bz_=remove_dot_segments(uri[5]),
              _bw_=[0,base[1],uri[2],uri[3],uri[4],_bz_,_by_,_bx_]}
          return normalize(schem$0,_bw_)},
       canonicalize=
        function(uri)
         {var
           init=resolve(cst$36,empty,uri),
           Scheme=module_of_scheme(uncast_opt(init[1])),
           _bo_=init[7],
           _bp_=init[6],
           _bq_=caml_call1(Scheme[4],init[5]),
           _br_=caml_call1(Scheme[3],init[4]);
          return [0,init[1],init[2],init[3],_br_,_bq_,_bp_,_bo_]},
       pp=
        function(ppf,uri)
         {var _bn_=to_string(0,uri);
          return caml_call2(Stdlib_format[13],ppf,_bn_)},
       pp_hum=
        function(ppf,uri)
         {var _bm_=to_string(0,uri);
          return caml_call2(Stdlib_format[13],ppf,_bm_)},
       string_of_char=caml_call1(Stdlib_string[1],1),
       string_of_char_list=
        function(chars)
         {var _bl_=caml_call2(Stdlib_list[17],string_of_char,chars);
          return caml_call2(Stdlib_string[7],cst$37,_bl_)},
       _p_=caml_call1(Angstrom[50],0),
       _q_=caml_call1(Angstrom[4],58),
       _r_=
        function(c)
         {var _bh_=58 !== c?1:0;
          if(_bh_)
           {var _bi_=47 !== c?1:0;
            if(_bi_)
             var _bj_=63 !== c?1:0,_bk_=_bj_?35 !== c?1:0:_bj_;
            else
             var _bk_=_bi_}
          else
           var _bk_=_bh_;
          return _bk_},
       _s_=caml_call1(Angstrom[13],_r_),
       _t_=caml_call2(Angstrom[58],_s_,_q_),
       _u_=function(s){return [0,decode(s)]},
       _v_=caml_call2(Angstrom[59],_u_,_t_),
       scheme$0=caml_call2(Angstrom[46],_v_,_p_),
       is_digit=
        function(param)
         {var switcher=param - 48 | 0;return 9 < switcher >>> 0?0:1},
       _w_=
        function(param)
         {var _bg_=param - 48 | 0,switch$0=0;
          if(22 < _bg_ >>> 0)
           {if(! (5 < (_bg_ - 49 | 0) >>> 0))switch$0 = 1}
          else
           if(6 < (_bg_ - 10 | 0) >>> 0)switch$0 = 1;
          return switch$0?1:0},
       hex_digit=caml_call1(Angstrom[7],_w_),
       _x_=caml_call1(Angstrom[38],hex_digit),
       hexadecimal=caml_call2(Angstrom[59],string_of_char_list,_x_),
       c_dot=caml_call1(Angstrom[4],46),
       c_at=caml_call1(Angstrom[4],64),
       c_colon=caml_call1(Angstrom[4],58),
       _y_=
        function(num)
         {return 256 <= caml_int_of_string(num)
                  ?caml_call1(Angstrom[51],cst_invalid_octect)
                  :caml_call1(Angstrom[50],num)},
       _z_=
        function(param)
         {var switcher=param - 48 | 0;return 9 < switcher >>> 0?0:1},
       _A_=caml_call1(Angstrom[14],_z_),
       dec_octet=caml_call2(Angstrom[52],_A_,_y_),
       _B_=caml_call2(Angstrom[58],dec_octet,c_dot),
       _C_=caml_call2(Angstrom[37],3,_B_),
       _D_=
        function(three,one)
         {var
           _be_=caml_call2(Stdlib[28],cst$38,one),
           _bf_=caml_call2(Stdlib_string[7],cst$39,three);
          return caml_call2(Stdlib[28],_bf_,_be_)},
       ipv4_address=caml_call3(Angstrom[60],_D_,_C_,dec_octet),
       _E_=
        function(f)
         {var
           _a__=caml_call1(Angstrom[50],0),
           _a$_=caml_call2(Angstrom[57],c_colon,f),
           _ba_=caml_call2(Angstrom[46],_a$_,_a__);
          function _bb_(x,y){return [0,x,y]}
          var
           _bc_=caml_call3(Angstrom[60],_bb_,hexadecimal,_ba_),
           _bd_=caml_call1(Angstrom[36],[0,ipv4_address,0]);
          return caml_call2(Angstrom[46],_bd_,_bc_)},
       after_double_colon=caml_call1(Angstrom[45],_E_),
       double_colon=
        function(count)
         {var _a7_=caml_call1(Angstrom[50],_F_);
          function _a8_(rest)
           {var
             filler_length=
              (8 - count | 0) - caml_call1(Stdlib_list[1],rest) | 0;
            return 0 < filler_length
                    ?caml_call1(Angstrom[50],[0,cst$40,rest])
                    :caml_call1(Angstrom[51],cst_too_many_parts_in_IPv6_add)}
          var _a9_=caml_call2(Angstrom[52],after_double_colon,_a8_);
          return caml_call2(Angstrom[46],_a9_,_a7_)},
       part=
        function(n)
         {if(6 === n)
           {var
             _a4_=hex_part(6),
             _a5_=caml_call1(Angstrom[36],[0,ipv4_address,0]);
            return caml_call2(Angstrom[46],_a5_,_a4_)}
          if(7 === n)
           {var _a6_=function(x){return [0,x,0]};
            return caml_call2(Angstrom[59],_a6_,hexadecimal)}
          return hex_part(n)},
       hex_part=
        function(n)
         {var
           _aY_=part(n + 1 | 0),
           _aZ_=double_colon(n + 1 | 0),
           _a0_=caml_call2(Angstrom[57],c_colon,_aZ_),
           _a1_=caml_call2(Angstrom[46],_a0_,_aY_),
           _a2_=caml_call2(Angstrom[57],c_colon,_a1_);
          function _a3_(x,y){return [0,x,y]}
          return caml_call3(Angstrom[60],_a3_,hexadecimal,_a2_)},
       split_with=
        function(f,xs)
         {if(xs)
           {var ys=xs[2],y=xs[1];
            if(caml_call1(f,y))
             {var match=split_with(f,ys),ts=match[2],zs=match[1];
              return [0,[0,y,zs],ts]}
            return [0,0,xs]}
          return _G_},
       format_addr=
        function(segments)
         {var
           match=
            split_with
             (function(segment){return caml_string_notequal(segment,cst$41)},
              segments),
           after_double_colon=match[2],
           before_double_colon=match[1],
           before=caml_call2(Stdlib_string[7],cst$42,before_double_colon),
           switch$0=0;
          if
           (after_double_colon
            &&
            !
            caml_string_notequal(after_double_colon[1],cst$43))
           {var
             xs=after_double_colon[2],
             _aW_=caml_call2(Stdlib_string[7],cst$44,xs),
             _aX_=caml_call2(Stdlib[28],cst$45,_aW_),
             res=caml_call2(Stdlib[28],before,_aX_);
            switch$0 = 1}
          if(! switch$0)var res=before;
          return res},
       _H_=part(0),
       _I_=double_colon(0),
       _J_=caml_call2(Angstrom[57],c_colon,c_colon),
       _K_=caml_call2(Angstrom[57],_J_,_I_),
       _L_=caml_call2(Angstrom[46],_K_,_H_),
       ipv6=caml_call2(Angstrom[59],format_addr,_L_),
       _M_=caml_call1(Angstrom[4],93),
       _N_=caml_call1(Angstrom[4],91),
       _O_=
        function(lb,ip,rb)
         {var
           _aU_=[0,ip,[0,caml_call1(string_of_char,rb),0]],
           _aV_=[0,caml_call1(string_of_char,lb),_aU_];
          return caml_call2(Stdlib_string[7],cst$46,_aV_)},
       ipv6_address=caml_call4(Angstrom[61],_O_,_N_,ipv6,_M_),
       _P_=caml_call2(Angstrom[37],2,hex_digit),
       _Q_=caml_call1(Angstrom[4],37),
       _R_=function(pct,digits){return string_of_char_list([0,pct,digits])},
       pct_encoded=caml_call3(Angstrom[60],_R_,_Q_,_P_),
       _S_=
        function(param)
         {var _aS_=param - 59 | 0,switch$0=0;
          if(2 < _aS_ >>> 0)
           {var _aT_=_aS_ + 26 | 0;
            if(! (11 < _aT_ >>> 0))
             switch(_aT_){case 1:case 2:case 4:break;default:switch$0 = 1}}
          else
           if(1 !== _aS_)switch$0 = 1;
          return switch$0?1:0},
       sub_delims$0=caml_call1(Angstrom[7],_S_),
       _T_=
        function(param)
         {var switch$0=0;
          if(91 <= param)
           {var _aQ_=param - 95 | 0;
            if(27 < _aQ_ >>> 0)
             {if(31 === _aQ_)switch$0 = 1}
            else
             if(1 !== _aQ_)switch$0 = 1}
          else
           {var _aR_=param - 45 | 0;
            if(12 < _aR_ >>> 0)
             {if(20 <= _aR_)switch$0 = 1}
            else
             if(2 !== _aR_)switch$0 = 1}
          return switch$0?1:0},
       unreserved=caml_call1(Angstrom[7],_T_),
       _U_=
        [0,
         pct_encoded,
         [0,caml_call2(Angstrom[56],string_of_char,sub_delims$0),0]],
       _V_=[0,caml_call2(Angstrom[56],string_of_char,unreserved),_U_],
       _W_=caml_call2(Angstrom[47],0,_V_),
       _X_=caml_call1(Angstrom[38],_W_),
       _Y_=caml_call1(Stdlib_string[7],cst$47),
       reg_name=caml_call2(Angstrom[59],_Y_,_X_),
       _Z_=
        caml_call2
         (Angstrom[47],0,[0,reg_name,[0,ipv4_address,[0,ipv6_address,0]]]),
       ___=function(s){return decode(s)},
       host$0=caml_call2(Angstrom[59],___,_Z_),
       _$_=caml_call1(Angstrom[50],0),
       _aa_=[0,caml_call2(Angstrom[56],string_of_char,c_colon),0],
       _ab_=
        [0,
         pct_encoded,
         [0,caml_call2(Angstrom[56],string_of_char,sub_delims$0),_aa_]],
       _ac_=[0,caml_call2(Angstrom[56],string_of_char,unreserved),_ab_],
       _ad_=caml_call2(Angstrom[47],0,_ac_),
       _ae_=caml_call1(Angstrom[38],_ad_),
       _af_=caml_call2(Angstrom[58],_ae_,c_at),
       _ag_=
        function(x)
         {var s=caml_call2(Stdlib_string[7],cst$48,x);
          return [0,userinfo_of_encoded(s)]},
       _ah_=caml_call2(Angstrom[59],_ag_,_af_),
       userinfo$0=caml_call2(Angstrom[46],_ah_,_$_),
       _ai_=
        function(param)
         {if(param && 58 === param[1])
           {var
             _aL_=
              function(port)
               {var decoded=decode(port);
                try
                 {var _aO_=[0,caml_int_of_string(decoded)];return _aO_}
                catch(_aP_){return 0}},
             _aM_=caml_call1(Angstrom[13],is_digit),
             _aN_=caml_call2(Angstrom[57],c_colon,_aM_);
            return caml_call2(Angstrom[54],_aN_,_aL_)}
          return caml_call1(Angstrom[50],0)},
       port$0=caml_call2(Angstrom[52],Angstrom[1],_ai_),
       _ak_=caml_call1(Angstrom[50],_aj_),
       _al_=function(userinfo,host,port){return [0,userinfo,[0,host],port]},
       _am_=caml_call4(Angstrom[61],_al_,userinfo$0,host$0,port$0),
       _an_=caml_call1(Angstrom[8],cst$49),
       _ao_=caml_call2(Angstrom[57],_an_,_am_),
       authority=caml_call2(Angstrom[46],_ao_,_ak_),
       _ap_=function(param){if(35 !== param && 63 !== param)return 1;return 0},
       _aq_=caml_call1(Angstrom[13],_ap_),
       path$0=caml_call2(Angstrom[59],path_of_encoded,_aq_),
       _ar_=[1,0,caml_call1(Stdlib_lazy[4],0)],
       _as_=caml_call1(Angstrom[50],_ar_),
       _at_=function(param){return 35 === param?1:0},
       _au_=caml_call1(Angstrom[15],_at_),
       _av_=caml_call1(Angstrom[4],63),
       _aw_=caml_call2(Angstrom[57],_av_,_au_),
       _ax_=caml_call2(Angstrom[59],of_raw,_aw_),
       query$0=caml_call2(Angstrom[46],_ax_,_as_),
       _ay_=caml_call1(Angstrom[50],0),
       _az_=function(param){return 1},
       _aA_=caml_call1(Angstrom[13],_az_),
       _aB_=caml_call1(Angstrom[4],35),
       _aC_=caml_call2(Angstrom[57],_aB_,_aA_),
       _aD_=function(s){return [0,decode(s)]},
       _aE_=caml_call2(Angstrom[59],_aD_,_aC_),
       fragment$0=caml_call2(Angstrom[46],_aE_,_ay_),
       _aF_=
        function(scheme,param,path,query,fragment)
         {var port=param[3],host=param[2],userinfo=param[1];
          return normalize
                  (scheme,[0,scheme,userinfo,host,port,path,query,fragment])},
       _aG_=caml_call5(Angstrom[62],_aF_,scheme$0,authority,path$0,query$0),
       uri_reference=caml_call2(Angstrom[55],_aG_,fragment$0),
       _aH_=
        function(s)
         {var match=caml_call3(Angstrom[74],1,uri_reference,s);
          if(0 === match[0]){var t=match[1];return t}
          return empty},
       _aI_=function(param){return 10 === param?0:1},
       _aJ_=caml_call1(Angstrom[13],_aI_),
       uri_reference$0=caml_call2(Angstrom[54],_aJ_,_aH_),
       of_string=
        function(s)
         {var match=caml_call3(Angstrom[74],0,uri_reference$0,s);
          if(0 === match[0]){var t=match[1];return t}
          return empty},
       Uri=
        [0,
         empty,
         compare$0,
         equal,
         pct_encode,
         pct_encoder,
         pct_decode,
         of_string,
         to_string,
         resolve,
         canonicalize,
         make,
         with_uri,
         query,
         verbatim_query,
         encoded_of_query$0,
         query_of_encoded,
         with_query,
         with_query$0,
         get_query_param,
         get_query_param$0,
         add_query_param,
         add_query_param$0,
         add_query_params,
         add_query_params$0,
         remove_query_param,
         path,
         path_and_query,
         with_path,
         scheme,
         with_scheme,
         userinfo,
         with_userinfo,
         user,
         password,
         with_password,
         host,
         with_host,
         host_with_default,
         port,
         with_port,
         fragment,
         with_fragment,
         pp,
         pp_hum,
         [0,ipv6,uri_reference$0]];
      runtime.caml_register_global(94,Uri,"Uri");
      return}}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ1cmkuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlc0NvbnRlbnQiOltdfQ==
