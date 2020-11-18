(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_ba_get_1=runtime.caml_ba_get_1,
     caml_int32_float_of_bits=runtime.caml_int32_float_of_bits,
     caml_int64_float_of_bits=runtime.caml_int64_float_of_bits,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_obj_tag=runtime.caml_obj_tag,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_update_dummy=runtime.caml_update_dummy;
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
     cst=caml_string_of_jsbytes(": "),
     cst$0=caml_string_of_jsbytes(" > "),
     cst_prompt_input_shrunk=caml_string_of_jsbytes("prompt: input shrunk!"),
     cst_count_while1$0=caml_string_of_jsbytes("count_while1"),
     cst_count_while1=caml_string_of_jsbytes("count_while1"),
     cst_LE_int64=caml_string_of_jsbytes("LE.int64"),
     cst_LE_int32=caml_string_of_jsbytes("LE.int32"),
     cst_LE_int16=caml_string_of_jsbytes("LE.int16"),
     cst_BE_int64=caml_string_of_jsbytes("BE.int64"),
     cst_BE_int32=caml_string_of_jsbytes("BE.int32"),
     cst_BE_int16=caml_string_of_jsbytes("BE.int16"),
     cst_consumed_parser_committed=
      caml_string_of_jsbytes("consumed: parser committed"),
     cst_count_n_0=caml_string_of_jsbytes("count: n < 0"),
     cst_no_more_choices=caml_string_of_jsbytes("no more choices"),
     cst_take_bigstring_n_0=caml_string_of_jsbytes("take_bigstring: n < 0"),
     cst_take_n_0=caml_string_of_jsbytes("take: n < 0"),
     cst_skip=caml_string_of_jsbytes("skip"),
     cst_advance=caml_string_of_jsbytes("advance"),
     cst_end_of_input=caml_string_of_jsbytes("end_of_input"),
     cst_not_enough_input=caml_string_of_jsbytes("not enough input"),
     cst_not_enough_input$0=caml_string_of_jsbytes("not enough input"),
     cst_parse_invalid_argument_ini=
      caml_string_of_jsbytes
       ("parse: invalid argument, initial_buffer_size < 1"),
     cst_end_of_line=caml_string_of_jsbytes("end_of_line"),
     cst$1=caml_string_of_jsbytes("\r\n"),
     Stdlib=global_data.Stdlib,
     Stdlib_string=global_data.Stdlib__string,
     Bigstringaf=global_data.Bigstringaf,
     Assert_failure=global_data.Assert_failure,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Stdlib_int64=global_data.Stdlib__int64,
     Stdlib_int32=global_data.Stdlib__int32,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_char=global_data.Stdlib__char,
     Stdlib_printf=global_data.Stdlib__printf,
     Stdlib_sys=global_data.Stdlib__sys,
     Angstrom=[0];
    caml_register_global(42,Angstrom,"Angstrom__");
    var Angstrom_More=[0];
    caml_register_global(43,Angstrom_More,"Angstrom__More");
    var
     _a_=[1,caml_string_of_jsbytes("incomplete input")],
     _c_=[0,caml_string_of_jsbytes("lib/input.ml"),59,2],
     _b_=[0,caml_string_of_jsbytes("lib/input.ml"),60,2],
     _k_=[0,caml_string_of_jsbytes("lib/buffering.ml"),79,2],
     _j_=[0,caml_string_of_jsbytes("lib/buffering.ml"),64,2],
     _i_=[0,caml_string_of_jsbytes("lib/buffering.ml"),53,2],
     _h_=[0,caml_string_of_jsbytes("lib/buffering.ml"),54,2],
     _g_=[0,caml_string_of_jsbytes("lib/buffering.ml"),46,2],
     _f_=[0,caml_string_of_jsbytes("lib/buffering.ml"),47,2],
     _e_=[0,caml_string_of_jsbytes("lib/buffering.ml"),7,2],
     _d_=[0,caml_string_of_jsbytes("lib/buffering.ml"),8,2],
     _r_=[1,caml_string_of_jsbytes("string")],
     _q_=
      [0,
       [11,caml_string_of_jsbytes("int8 "),[4,0,0,0,0]],
       caml_string_of_jsbytes("int8 %d")],
     _p_=
      [0,
       [11,caml_string_of_jsbytes("not char "),[1,0]],
       caml_string_of_jsbytes("not char %C")],
     _o_=
      [0,
       [11,caml_string_of_jsbytes("char "),[1,0]],
       caml_string_of_jsbytes("char %C")],
     _n_=
      [0,
       [11,caml_string_of_jsbytes("satisfy: "),[1,0]],
       caml_string_of_jsbytes("satisfy: %C")],
     _m_=
      [0,
       [11,caml_string_of_jsbytes("satisfy: "),[1,0]],
       caml_string_of_jsbytes("satisfy: %C")],
     _l_=[1,caml_string_of_jsbytes("incomplete input")];
    function state_to_option(x)
     {switch(x[0])
       {case 0:return 0;case 1:var v=x[2];return [0,v];default:return 0}}
    function fail_to_string(marks,err)
     {var
       _al_=caml_call2(Stdlib[28],cst,err),
       _am_=caml_call2(Stdlib_string[7],cst$0,marks);
      return caml_call2(Stdlib[28],_am_,_al_)}
    function state_to_result(x)
     {switch(x[0])
       {case 0:return _a_;
        case 1:var v=x[2];return [0,v];
        default:var err=x[3],marks=x[2];return [1,fail_to_string(marks,err)]}}
    var include=[0,state_to_option,fail_to_string,state_to_result];
    caml_register_global(46,include,"Angstrom__Exported_state");
    function create(buffer,off,len,committed_bytes)
     {return [0,committed_bytes,committed_bytes,off,len,buffer]}
    function length(t){return t[2] + t[4] | 0}
    function client_committed_bytes(t){return t[2]}
    function parser_committed_bytes(t){return t[1]}
    function bytes_for_client_to_commit(t){return t[1] - t[2] | 0}
    function parser_uncommitted_bytes(t)
     {var _ak_=bytes_for_client_to_commit(t);return t[4] - _ak_ | 0}
    function invariant(t)
     {var _ah_=length(t),_ai_=parser_uncommitted_bytes(t);
      if((t[1] + _ai_ | 0) === _ah_)
       {var _aj_=bytes_for_client_to_commit(t);
        if((t[1] - t[2] | 0) === _aj_)return 0;
        throw [0,Assert_failure,_b_]}
      throw [0,Assert_failure,_c_]}
    function offset_in_buffer(t,pos){return (t[3] + pos | 0) - t[2] | 0}
    function apply(t,pos,len,f)
     {var off=offset_in_buffer(t,pos);return caml_call3(f,t[5],off,len)}
    function unsafe_get_char(t,pos)
     {var off=offset_in_buffer(t,pos);return caml_ba_get_1(t[5],off)}
    function unsafe_get_int16_le(t,pos)
     {var off=offset_in_buffer(t,pos);
      return caml_call2(Bigstringaf[29],t[5],off)}
    function unsafe_get_int32_le(t,pos)
     {var off=offset_in_buffer(t,pos);
      return caml_call2(Bigstringaf[35],t[5],off)}
    function unsafe_get_int64_le(t,pos)
     {var off=offset_in_buffer(t,pos);
      return caml_call2(Bigstringaf[39],t[5],off)}
    function unsafe_get_int16_be(t,pos)
     {var off=offset_in_buffer(t,pos);
      return caml_call2(Bigstringaf[30],t[5],off)}
    function unsafe_get_int32_be(t,pos)
     {var off=offset_in_buffer(t,pos);
      return caml_call2(Bigstringaf[36],t[5],off)}
    function unsafe_get_int64_be(t,pos)
     {var off=offset_in_buffer(t,pos);
      return caml_call2(Bigstringaf[40],t[5],off)}
    function count_while(t,pos,f)
     {var
       buffer=t[5],
       off=offset_in_buffer(t,pos),
       i=[0,off],
       limit=t[3] + t[4] | 0;
      for(;;)
       {if(i[1] < limit && caml_call1(f,caml_ba_get_1(buffer,i[1])))
         {i[1]++;continue}
        return i[1] - off | 0}}
    function commit(t,pos){t[1] = pos;return 0}
    var
     Angstrom_Input=
      [0,
       create,
       length,
       client_committed_bytes,
       parser_committed_bytes,
       parser_uncommitted_bytes,
       bytes_for_client_to_commit,
       unsafe_get_char,
       unsafe_get_int16_le,
       unsafe_get_int32_le,
       unsafe_get_int64_le,
       unsafe_get_int16_be,
       unsafe_get_int32_be,
       unsafe_get_int64_be,
       count_while,
       apply,
       commit,
       invariant];
    caml_register_global(49,Angstrom_Input,"Angstrom__Input");
    var State=[0];
    function fail_k(input,pos,param,marks,msg)
     {return [3,pos - input[2] | 0,marks,msg]}
    function succeed_k(input,pos,param,v){return [2,pos - input[2] | 0,v]}
    function to_exported_state(param)
     {var param$0=param;
      for(;;)
       switch(param$0[0])
        {case 0:
          var match=param$0[1],continue$0=match[2],committed=match[1];
          return [0,
                  [0,
                   committed,
                   function(bs,off,len,more)
                    {return to_exported_state
                             (caml_call4(continue$0,bs,off,len,more))}]];
         case 1:
          var
           x=param$0[1],
           _ag_=caml_obj_tag(x),
           param$1=
            250 === _ag_?x[1]:246 === _ag_?caml_call1(CamlinternalLazy[2],x):x,
           param$0=param$1;
          continue;
         case 2:var x$0=param$0[2],i=param$0[1];return [1,i,x$0];
         default:
          var s=param$0[3],sl=param$0[2],i$0=param$0[1];return [2,i$0,sl,s]}}
    function parse(p)
     {var input=[0,0,0,0,0,Bigstringaf[2]];
      return to_exported_state(caml_call5(p[1],input,0,1,fail_k,succeed_k))}
    function parse_bigstring(p,input)
     {var input$0=[0,0,0,0,caml_call1(Bigstringaf[6],input),input];
      return state_to_result
              (to_exported_state
                (caml_call5(p[1],input$0,0,0,fail_k,succeed_k)))}
    function return$0(v)
     {return [0,
              function(input,pos,more,fail,succ)
               {return caml_call4(succ,input,pos,more,v)}]}
    function fail(msg)
     {return [0,
              function(input,pos,more,fail,succ)
               {return caml_call5(fail,input,pos,more,0,msg)}]}
    function symbol_bind(p,f)
     {return [0,
              function(input,pos,more,fail,succ)
               {function succ$0(input,pos,more,v)
                 {return caml_call5
                          (caml_call1(f,v)[1],input,pos,more,fail,succ)}
                return caml_call5(p[1],input,pos,more,fail,succ$0)}]}
    function symbol_map(p,f)
     {return [0,
              function(input,pos,more,fail,succ)
               {function succ$0(input,pos,more,v)
                 {return caml_call4(succ,input,pos,more,caml_call1(f,v))}
                return caml_call5(p[1],input,pos,more,fail,succ$0)}]}
    function symbol(f,m){return symbol_map(m,f)}
    function symbol$0(f,m)
     {return [0,
              function(input,pos,more,fail,succ)
               {function succ0(input0,pos0,more0,f)
                 {function succ1(input1,pos1,more1,m)
                   {return caml_call4(succ,input1,pos1,more1,caml_call1(f,m))}
                  return caml_call5(m[1],input0,pos0,more0,fail,succ1)}
                return caml_call5(f[1],input,pos,more,fail,succ0)}]}
    function lift(f,m){return symbol(f,m)}
    function lift2(f,m1,m2)
     {return [0,
              function(input,pos,more,fail,succ)
               {function succ1(input1,pos1,more1,m1)
                 {function succ2(input2,pos2,more2,m2)
                   {return caml_call4
                            (succ,input2,pos2,more2,caml_call2(f,m1,m2))}
                  return caml_call5(m2[1],input1,pos1,more1,fail,succ2)}
                return caml_call5(m1[1],input,pos,more,fail,succ1)}]}
    function lift3(f,m1,m2,m3)
     {return [0,
              function(input,pos,more,fail,succ)
               {function succ1(input1,pos1,more1,m1)
                 {function succ2(input2,pos2,more2,m2)
                   {function succ3(input3,pos3,more3,m3)
                     {return caml_call4
                              (succ,input3,pos3,more3,caml_call3(f,m1,m2,m3))}
                    return caml_call5(m3[1],input2,pos2,more2,fail,succ3)}
                  return caml_call5(m2[1],input1,pos1,more1,fail,succ2)}
                return caml_call5(m1[1],input,pos,more,fail,succ1)}]}
    function lift4(f,m1,m2,m3,m4)
     {return [0,
              function(input,pos,more,fail,succ)
               {function succ1(input1,pos1,more1,m1)
                 {function succ2(input2,pos2,more2,m2)
                   {function succ3(input3,pos3,more3,m3)
                     {function succ4(input4,pos4,more4,m4)
                       {return caml_call4
                                (succ,input4,pos4,more4,caml_call4(f,m1,m2,m3,m4))}
                      return caml_call5(m4[1],input3,pos3,more3,fail,succ4)}
                    return caml_call5(m3[1],input2,pos2,more2,fail,succ3)}
                  return caml_call5(m2[1],input1,pos1,more1,fail,succ2)}
                return caml_call5(m1[1],input,pos,more,fail,succ1)}]}
    function symbol$1(a,b)
     {return [0,
              function(input,pos,more,fail,succ)
               {function succ$0(input,pos,more,param)
                 {return caml_call5(b[1],input,pos,more,fail,succ)}
                return caml_call5(a[1],input,pos,more,fail,succ$0)}]}
    function symbol$2(a,b)
     {return [0,
              function(input,pos,more,fail,succ)
               {function succ0(input0,pos0,more0,x)
                 {function succ1(input1,pos1,more1,param)
                   {return caml_call4(succ,input1,pos1,more1,x)}
                  return caml_call5(b[1],input0,pos0,more0,fail,succ1)}
                return caml_call5(a[1],input,pos,more,fail,succ0)}]}
    var
     Monad=
      [0,
       return$0,
       fail,
       symbol_bind,
       symbol_map,
       symbol,
       symbol$0,
       lift,
       lift2,
       lift3,
       lift4,
       symbol$1,
       symbol$2];
    function symbol$3(p,mark)
     {return [0,
              function(input,pos,more,fail,succ)
               {function fail$0(input,pos,more,marks,msg)
                 {return caml_call5(fail,input,pos,more,[0,mark,marks],msg)}
                return caml_call5(p[1],input,pos,more,fail$0,succ)}]}
    function symbol$4(p,q)
     {return [0,
              function(input,pos,more,fail,succ)
               {function fail$0(input,pos$0,more$0,marks,msg)
                 {return pos < input[1]
                          ?caml_call5(fail,input,pos$0,more,marks,msg)
                          :caml_call5(q[1],input,pos,more$0,fail,succ)}
                return caml_call5(p[1],input,pos,more,fail$0,succ)}]}
    var
     include$0=[0,symbol$3,symbol$4],
     return$1=Monad[1],
     fail$0=Monad[2],
     symbol_bind$0=Monad[3];
    function symbol_map$0(m,f)
     {return caml_call2
              (symbol_bind$0,
               m,
               function(x){return caml_call1(return$1,caml_call1(f,x))})}
    function symbol$5(f,m){return symbol_map$0(m,f)}
    function symbol$6(f,m)
     {return caml_call2(symbol_bind$0,f,function(f){return symbol_map$0(m,f)})}
    function lift2$0(f,m1,m2){return symbol$6(symbol$5(f,m1),m2)}
    function lift3$0(f,m1,m2,m3)
     {return symbol$6(symbol$6(symbol$5(f,m1),m2),m3)}
    function lift4$0(f,m1,m2,m3,m4)
     {return symbol$6(symbol$6(symbol$6(symbol$5(f,m1),m2),m3),m4)}
    function symbol$7(a,b)
     {return caml_call2(symbol_bind$0,a,function(param){return b})}
    function symbol$8(a,b)
     {return caml_call2
              (symbol_bind$0,
               a,
               function(x){return symbol_map$0(b,function(param){return x})})}
    var
     Monad_use_for_debugging=
      [0,
       return$1,
       fail$0,
       symbol_bind$0,
       symbol_map$0,
       symbol$5,
       symbol$6,
       symbol_map$0,
       lift2$0,
       lift3$0,
       lift4$0,
       symbol$7,
       symbol$8],
     Angstrom_Parser=
      [0,
       State,
       fail_k,
       succeed_k,
       to_exported_state,
       parse,
       parse_bigstring,
       Monad,
       include$0,
       Monad_use_for_debugging];
    caml_register_global(51,Angstrom_Parser,"Angstrom__Parser");
    function of_bigstring(off,len,buf)
     {if(0 <= off)
       {if((len - off | 0) <= caml_call1(Bigstringaf[6],buf))
         return [0,buf,off,len];
        throw [0,Assert_failure,_d_]}
      throw [0,Assert_failure,_e_]}
    function create$0(len)
     {return of_bigstring(0,0,caml_call1(Bigstringaf[1],len))}
    function writable_space(t)
     {var _af_=t[3];return caml_call1(Bigstringaf[6],t[1]) - _af_ | 0}
    function ensure(t,to_copy)
     {var
       _ad_=t[2] + t[3] | 0,
       _ae_=(caml_call1(Bigstringaf[6],t[1]) - _ad_ | 0) < to_copy?1:0;
      if(_ae_)
       {if(to_copy <= writable_space(t))
         {caml_call5(Bigstringaf[43],t[1],t[2],t[1],0,t[3]);t[2] = 0;return 0}
        var
         old_len=caml_call1(Bigstringaf[6],t[1]),
         new_len=[0,old_len],
         space=writable_space(t);
        for(;;)
         {if(((space + new_len[1] | 0) - old_len | 0) < to_copy)
           {new_len[1] = (3 * new_len[1] | 0) / 2 | 0;continue}
          var new_buf=caml_call1(Bigstringaf[1],new_len[1]);
          caml_call5(Bigstringaf[43],t[1],t[2],new_buf,0,t[3]);
          t[1] = new_buf;
          t[2] = 0;
          return 0}}
      return _ae_}
    function write_pos(t){return t[2] + t[3] | 0}
    function feed_string(t,off,len,str)
     {if(0 <= off)
       {if((len - off | 0) <= caml_ml_string_length(str))
         {ensure(t,len);
          var _ac_=write_pos(t);
          caml_call5(Bigstringaf[44],str,off,t[1],_ac_,len);
          t[3] = t[3] + len | 0;
          return 0}
        throw [0,Assert_failure,_f_]}
      throw [0,Assert_failure,_g_]}
    function feed_bigstring(t,off,len,b)
     {if(0 <= off)
       {if((len - off | 0) <= caml_call1(Bigstringaf[6],b))
         {ensure(t,len);
          var _ab_=write_pos(t);
          caml_call5(Bigstringaf[43],b,off,t[1],_ab_,len);
          t[3] = t[3] + len | 0;
          return 0}
        throw [0,Assert_failure,_h_]}
      throw [0,Assert_failure,_i_]}
    function feed_input(t,param)
     {if(608227697 <= param[1])
       {var b=param[2];
        return feed_bigstring(t,0,caml_call1(Bigstringaf[6],b),b)}
      var s=param[2];
      return feed_string(t,0,caml_ml_string_length(s),s)}
    function shift(t,n)
     {if(n <= t[3]){t[2] = t[2] + n | 0;t[3] = t[3] - n | 0;return 0}
      throw [0,Assert_failure,_j_]}
    function for_reading(param)
     {var buf=param[1],off=param[2],len=param[3];
      return caml_call3(Bigstringaf[5],buf,off,len)}
    function unconsumed(opt,param)
     {var buf=param[1],off=param[2],len=param[3];
      if(opt)var sth=opt[1],shift=sth;else var shift=0;
      if(shift <= len)return [0,buf,off + shift | 0,len - shift | 0];
      throw [0,Assert_failure,_k_]}
    function of_unconsumed(param)
     {var len=param[3],off=param[2],buf=param[1];return [0,buf,off,len]}
    var
     Angstrom_Buffering=
      [0,
       create$0,
       of_bigstring,
       feed_string,
       feed_bigstring,
       feed_input,
       shift,
       for_reading,
       unconsumed,
       of_unconsumed];
    caml_register_global(52,Angstrom_Buffering,"Angstrom__Buffering");
    var
     return$2=Monad[1],
     fail$1=Monad[2],
     symbol_bind$1=Monad[3],
     symbol_map$1=Monad[4],
     symbol$9=Monad[5],
     symbol$10=Monad[6],
     lift$0=Monad[7],
     lift2$1=Monad[8],
     lift3$1=Monad[9],
     lift4$1=Monad[10],
     symbol$11=Monad[11],
     symbol$12=Monad[12],
     symbol$13=include$0[1],
     symbol$14=include$0[2];
    function from_unbuffered_state(f,buffering,param)
     {switch(param[0])
       {case 0:var p=param[1];return [0,caml_call1(f,p)];
        case 1:
         var
          v=param[2],
          consumed=param[1],
          unconsumed$0=unconsumed([0,consumed],buffering);
         return [1,unconsumed$0,v];
        default:
         var
          msg=param[3],
          marks=param[2],
          consumed$0=param[1],
          unconsumed$1=unconsumed([0,consumed$0],buffering);
         return [2,unconsumed$1,marks,msg]}}
    function parse$0(opt,p)
     {if(opt)
       var sth=opt[1],initial_buffer_size=sth;
      else
       var initial_buffer_size=4096;
      if(initial_buffer_size < 1)
       caml_call1(Stdlib[2],cst_parse_invalid_argument_ini);
      var buffering=create$0(initial_buffer_size);
      function f(p,input)
       {shift(buffering,p[1]);
        var
         more=typeof input === "number"?0:(feed_input(buffering,input),1),
         for_reading$0=for_reading(buffering),
         _aa_=caml_call1(Bigstringaf[6],for_reading$0);
        return from_unbuffered_state
                (f,buffering,caml_call4(p[2],for_reading$0,0,_aa_,more))}
      return from_unbuffered_state(f,buffering,parse(p))}
    function feed(state,input)
     {switch(state[0])
       {case 0:var k=state[1];return caml_call1(k,input);
        case 1:
         var v=state[2],unconsumed$0=state[1];
         if(typeof input === "number")return state;
         var buffering=of_unconsumed(unconsumed$0);
         feed_input(buffering,input);
         return [1,unconsumed(0,buffering),v];
        default:
         var msg=state[3],marks=state[2],unconsumed$1=state[1];
         if(typeof input === "number")return state;
         var buffering$0=of_unconsumed(unconsumed$1);
         feed_input(buffering$0,input);
         return [2,unconsumed(0,buffering$0),marks,msg]}}
    function state_to_option$0(param)
     {switch(param[0])
       {case 0:return 0;case 1:var v=param[2];return [0,v];default:return 0}}
    function state_to_result$0(param)
     {switch(param[0])
       {case 0:return _l_;
        case 1:var v=param[2];return [0,v];
        default:
         var msg=param[3],marks=param[2];return [1,fail_to_string(marks,msg)]}}
    function state_to_unconsumed(param)
     {if(0 === param[0])return 0;
      var unconsumed=param[1];
      return [0,unconsumed]}
    function prompt(input,pos,fail,succ)
     {var
       parser_uncommitted_bytes$0=parser_uncommitted_bytes(input),
       parser_committed_bytes=input[1];
      function continue$0(input,off,len,more)
       {if(len < parser_uncommitted_bytes$0)
         caml_call1(Stdlib[2],cst_prompt_input_shrunk);
        var
         input$0=
          [0,parser_committed_bytes,parser_committed_bytes,off,len,input];
        return len === parser_uncommitted_bytes$0
                ?more
                  ?prompt(input$0,pos,fail,succ)
                  :caml_call3(fail,input$0,pos,0)
                :caml_call3(succ,input$0,pos,more)}
      return [0,[0,bytes_for_client_to_commit(input),continue$0]]}
    var
     demand_input=
      [0,
       function(input,pos,more,fail,succ)
        {if(more)
          {var
            succ$0=
             function(input,pos,more)
              {return caml_call4(succ,input,pos,more,0)},
            fail$0=
             function(input,pos,more)
              {return caml_call5(fail,input,pos,more,0,cst_not_enough_input)};
           return prompt(input,pos,fail$0,succ$0)}
         return caml_call5(fail,input,pos,more,0,cst_not_enough_input$0)}];
    function ensure_suspended(n,input,pos,more,fail,succ)
     {var go=[];
      caml_update_dummy
       (go,
        [0,
         function(input,pos,more,fail,succ)
          {return (pos + n | 0) <= length(input)
                   ?caml_call4(succ,input,pos,more,0)
                   :caml_call5
                     (caml_call2(symbol$11,demand_input,go)[1],
                      input,
                      pos,
                      more,
                      fail,
                      succ)}]);
      return caml_call5
              (caml_call2(symbol$11,demand_input,go)[1],
               input,
               pos,
               more,
               fail,
               succ)}
    function unsafe_apply(len,f)
     {return [0,
              function(input,pos,more,fail,succ)
               {return caml_call4
                        (succ,input,pos + len | 0,more,apply(input,pos,len,f))}]}
    function ensure$0(n,p)
     {return [0,
              function(input,pos,more,fail,succ)
               {if((pos + n | 0) <= length(input))
                 return caml_call5(p[1],input,pos,more,fail,succ);
                function succ$0(input,pos,more,param)
                 {return caml_call5(p[1],input,pos,more,fail,succ)}
                return ensure_suspended(n,input,pos,more,fail,succ$0)}]}
    var
     at_end_of_input=
      [0,
       function(input,pos,more,param,succ)
        {if(pos < length(input))return caml_call4(succ,input,pos,more,0);
         if(more)
          {var
            succ$0=
             function(input,pos,more)
              {return caml_call4(succ,input,pos,more,0)},
            fail=
             function(input,pos,more)
              {return caml_call4(succ,input,pos,more,1)};
           return prompt(input,pos,fail,succ$0)}
         return caml_call4(succ,input,pos,more,1)}],
     end_of_input=
      caml_call2
       (symbol_bind$1,
        at_end_of_input,
        function(param)
         {return param
                  ?caml_call1(return$2,0)
                  :caml_call1(fail$1,cst_end_of_input)});
    function advance(n)
     {if(0 <= n)
       {var
         p=
          [0,
           function(input,pos,more,fail,succ)
            {return caml_call4(succ,input,pos + n | 0,more,0)}];
        return ensure$0(n,p)}
      return caml_call1(fail$1,cst_advance)}
    var
     pos=
      [0,
       function(input,pos,more,fail,succ)
        {return caml_call4(succ,input,pos,more,pos)}],
     available=
      [0,
       function(input,pos,more,fail,succ)
        {return caml_call4(succ,input,pos,more,length(input) - pos | 0)}],
     commit$0=
      [0,
       function(input,pos,more,fail,succ)
        {commit(input,pos);return caml_call4(succ,input,pos,more,0)}];
    function unsafe_lookahead(p)
     {return [0,
              function(input,pos,more,fail,succ)
               {function succ$0(input,param,more,v)
                 {return caml_call4(succ,input,pos,more,v)}
                return caml_call5(p[1],input,pos,more,fail,succ$0)}]}
    var
     peek_char=
      [0,
       function(input,pos,more,fail,succ)
        {if(pos < length(input))
          return caml_call4
                  (succ,input,pos,more,[0,unsafe_get_char(input,pos)]);
         if(0 === more)return caml_call4(succ,input,pos,more,0);
         function succ$0(input,pos,more)
          {return caml_call4
                   (succ,input,pos,more,[0,unsafe_get_char(input,pos)])}
         function fail$0(input,pos,more)
          {return caml_call4(succ,input,pos,more,0)}
         return prompt(input,pos,fail$0,succ$0)}],
     peek_char_fail=[];
    caml_update_dummy
     (peek_char_fail,
      [0,
       function(input,pos,more,fail,succ)
        {if(pos < length(input))
          return caml_call4(succ,input,pos,more,unsafe_get_char(input,pos));
         function succ$0(input,pos,more,param)
          {return caml_call5(peek_char_fail[1],input,pos,more,fail,succ)}
         return ensure_suspended(1,input,pos,more,fail,succ$0)}]);
    function satisfy(f)
     {return [0,
              function(input,pos,more,fail,succ)
               {if(pos < length(input))
                 {var c=unsafe_get_char(input,pos);
                  if(caml_call1(f,c))
                   return caml_call4(succ,input,pos + 1 | 0,more,c);
                  var ___=caml_call4(fail,input,pos,more,0);
                  return caml_call3(Stdlib_printf[10],___,_m_,c)}
                function succ$0(input,pos,more,param)
                 {var c=unsafe_get_char(input,pos);
                  if(caml_call1(f,c))
                   return caml_call4(succ,input,pos + 1 | 0,more,c);
                  var _$_=caml_call4(fail,input,pos,more,0);
                  return caml_call3(Stdlib_printf[10],_$_,_n_,c)}
                return ensure_suspended(1,input,pos,more,fail,succ$0)}]}
    function char$0(c)
     {var
       p=
        [0,
         function(input,pos,more,fail,succ)
          {return unsafe_get_char(input,pos) === c
                   ?caml_call4(succ,input,pos + 1 | 0,more,c)
                   :caml_call5
                     (fail,input,pos,more,0,caml_call2(Stdlib_printf[4],_o_,c))}];
      return ensure$0(1,p)}
    function not_char(c)
     {var
       p=
        [0,
         function(input,pos,more,fail,succ)
          {var c$0=unsafe_get_char(input,pos);
           return c !== c$0
                   ?caml_call4(succ,input,pos + 1 | 0,more,c$0)
                   :caml_call5
                     (fail,input,pos,more,0,caml_call2(Stdlib_printf[4],_p_,c))}];
      return ensure$0(1,p)}
    var
     p=
      [0,
       function(input,pos,more,fail,succ)
        {return caml_call4
                 (succ,input,pos + 1 | 0,more,unsafe_get_char(input,pos))}],
     any_char=ensure$0(1,p);
    function int8(i)
     {var
       p=
        [0,
         function(input,pos,more,fail,succ)
          {var c=unsafe_get_char(input,pos);
           return c === (i & 255)
                   ?caml_call4(succ,input,pos + 1 | 0,more,c)
                   :caml_call5
                     (fail,input,pos,more,0,caml_call2(Stdlib_printf[4],_q_,i))}];
      return ensure$0(1,p)}
    var
     p$0=
      [0,
       function(input,pos,more,fail,succ)
        {var c=unsafe_get_char(input,pos);
         return caml_call4(succ,input,pos + 1 | 0,more,c)}],
     any_uint8=ensure$0(1,p$0),
     s=Stdlib_sys[10] - 8 | 0,
     p$1=
      [0,
       function(input,pos,more,fail,succ)
        {var c=unsafe_get_char(input,pos);
         return caml_call4(succ,input,pos + 1 | 0,more,c << s >> s)}],
     any_int8=ensure$0(1,p$1);
    function skip(f)
     {var
       p=
        [0,
         function(input,pos,more,fail,succ)
          {return caml_call1(f,unsafe_get_char(input,pos))
                   ?caml_call4(succ,input,pos + 1 | 0,more,0)
                   :caml_call5(fail,input,pos,more,0,cst_skip)}];
      return ensure$0(1,p)}
    function count_while$0(init,f,with_buffer)
     {return [0,
              function(input,pos,more,fail,succ)
               {var
                 len=count_while(input,pos + init | 0,f),
                 input_len=length(input),
                 init$0=init + len | 0;
                if(! ((pos + init$0 | 0) < input_len) && 0 !== more)
                 {var
                   succ$0=
                    function(input,pos,more)
                     {return caml_call5
                              (count_while$0(init$0,f,with_buffer)[1],
                               input,
                               pos,
                               more,
                               fail,
                               succ)},
                   fail$0=
                    function(input,pos,more)
                     {return caml_call4
                              (succ,
                               input,
                               pos + init$0 | 0,
                               more,
                               apply(input,pos,init$0,with_buffer))};
                  return prompt(input,pos,fail$0,succ$0)}
                return caml_call4
                        (succ,
                         input,
                         pos + init$0 | 0,
                         more,
                         apply(input,pos,init$0,with_buffer))}]}
    function count_while1(f,with_buffer)
     {return [0,
              function(input,pos,more,fail,succ)
               {var len=count_while(input,pos,f),input_len=length(input);
                if(1 <= len)
                 {if(! ((pos + len | 0) < input_len) && 0 !== more)
                   {var
                     succ$0=
                      function(input,pos,more)
                       {return caml_call5
                                (count_while$0(len,f,with_buffer)[1],
                                 input,
                                 pos,
                                 more,
                                 fail,
                                 succ)},
                     fail$0=
                      function(input,pos,more)
                       {return caml_call4
                                (succ,
                                 input,
                                 pos + len | 0,
                                 more,
                                 apply(input,pos,len,with_buffer))};
                    return prompt(input,pos,fail$0,succ$0)}
                  return caml_call4
                          (succ,
                           input,
                           pos + len | 0,
                           more,
                           apply(input,pos,len,with_buffer))}
                if(! (pos < input_len) && 0 !== more)
                 {var
                   succ$1=
                    function(input,pos,more)
                     {return caml_call5
                              (count_while1(f,with_buffer)[1],input,pos,more,fail,succ)},
                   fail$1=
                    function(input,pos,more)
                     {return caml_call5(fail,input,pos,more,0,cst_count_while1$0)};
                  return prompt(input,pos,fail$1,succ$1)}
                return caml_call5(fail,input,pos,more,0,cst_count_while1)}]}
    function string(f,s)
     {var len=caml_ml_string_length(s);
      function f$0(buffer,off,len)
       {var i=[0,0];
        for(;;)
         {if(i[1] < len)
           {var
             _Y_=caml_call1(f,runtime.caml_string_unsafe_get(s,i[1])),
             _Z_=caml_call1(f,caml_ba_get_1(buffer,off + i[1] | 0));
            if(caml_call2(Stdlib_char[8],_Z_,_Y_)){i[1]++;continue}}
          return len === i[1]
                  ?[0,caml_call3(Bigstringaf[7],buffer,off,len)]
                  :_r_}}
      return ensure$0
              (len,
               [0,
                function(input,pos,more,fail,succ)
                 {var match=apply(input,pos,len,f$0);
                  if(0 === match[0])
                   {var x=match[1];
                    return caml_call4(succ,input,pos + len | 0,more,x)}
                  var e=match[1];
                  return caml_call5(fail,input,pos,more,0,e)}])}
    function string$0(s){return string(function(x){return x},s)}
    function string_ci(s){return string(Stdlib_char[5],s)}
    function skip_while(f)
     {return count_while$0(0,f,function(param,_X_,_W_){return 0})}
    function take(n)
     {if(0 <= n)
       {var n$0=caml_call2(Stdlib[17],n,0);
        return ensure$0(n$0,unsafe_apply(n$0,Bigstringaf[7]))}
      return caml_call1(fail$1,cst_take_n_0)}
    function take_bigstring(n)
     {if(0 <= n)
       {var n$0=caml_call2(Stdlib[17],n,0);
        return ensure$0(n$0,unsafe_apply(n$0,Bigstringaf[4]))}
      return caml_call1(fail$1,cst_take_bigstring_n_0)}
    function take_bigstring_while(f){return count_while$0(0,f,Bigstringaf[4])}
    function take_bigstring_while1(f){return count_while1(f,Bigstringaf[4])}
    function take_bigstring_till(f)
     {return take_bigstring_while(function(c){return 1 - caml_call1(f,c)})}
    function peek_string(n){return unsafe_lookahead(take(n))}
    function take_while(f){return count_while$0(0,f,Bigstringaf[7])}
    function take_while1(f){return count_while1(f,Bigstringaf[7])}
    function take_till(f)
     {return take_while(function(c){return 1 - caml_call1(f,c)})}
    function choice(opt,ps)
     {if(opt)
       var sth=opt[1],failure_msg=sth;
      else
       var failure_msg=cst_no_more_choices;
      var _V_=caml_call1(fail$1,failure_msg);
      return caml_call3(Stdlib_list[24],symbol$14,ps,_V_)}
    function fix_direct(f)
     {var p=[],r=[];
      caml_update_dummy(p,[246,function(_U_){return caml_call1(f,r)}]);
      caml_update_dummy
       (r,
        [0,
         function(buf,pos,more,fail,succ)
          {var
            _S_=caml_obj_tag(p),
            _T_=
             250 === _S_?p[1]:246 === _S_?caml_call1(CamlinternalLazy[2],p):p;
           return caml_call5(_T_[1],buf,pos,more,fail,succ)}]);
      return r}
    function fix_lazy(f)
     {var steps=[0,20],p=[],r=[],max_steps=20;
      caml_update_dummy(p,[246,function(_R_){return caml_call1(f,r)}]);
      caml_update_dummy
       (r,
        [0,
         function(buf,pos,more,fail,succ)
          {steps[1] += -1;
           if(0 <= steps[1])
            {var
              _M_=caml_obj_tag(p),
              _N_=
               250 === _M_
                ?p[1]
                :246 === _M_?caml_call1(CamlinternalLazy[2],p):p;
             return caml_call5(_N_[1],buf,pos,more,fail,succ)}
           steps[1] = max_steps;
           return [1,
                   [246,
                    function(_O_)
                     {var
                       _P_=caml_obj_tag(p),
                       _Q_=
                        250 === _P_
                         ?p[1]
                         :246 === _P_?caml_call1(CamlinternalLazy[2],p):p;
                      return caml_call5(_Q_[1],buf,pos,more,fail,succ)}]]}]);
      return r}
    var
     _s_=Stdlib_sys[5],
     fix_direct$0=typeof _s_ === "number"?_s_?fix_direct:fix_direct:fix_lazy;
    function option(x,p)
     {return caml_call2(symbol$14,p,caml_call1(return$2,x))}
    function cons(x,xs){return [0,x,xs]}
    function list(ps)
     {if(ps)
       {var ps$0=ps[2],p=ps[1];return caml_call3(lift2$1,cons,p,list(ps$0))}
      return caml_call1(return$2,0)}
    function count(n,p)
     {if(0 <= n)
       {var
         loop=
          function(n)
           {return 0 === n
                    ?caml_call1(return$2,0)
                    :caml_call3(lift2$1,cons,p,loop(n - 1 | 0))};
        return loop(n)}
      return caml_call1(fail$1,cst_count_n_0)}
    function many(p)
     {return fix_direct$0
              (function(m)
                {var _L_=caml_call1(return$2,0);
                 return caml_call2(symbol$14,caml_call3(lift2$1,cons,p,m),_L_)})}
    function many1(p){return caml_call3(lift2$1,cons,p,many(p))}
    function many_till(p,t)
     {return fix_direct$0
              (function(m)
                {var _K_=caml_call3(lift2$1,cons,p,m);
                 return caml_call2
                         (symbol$14,
                          caml_call2(symbol$11,t,caml_call1(return$2,0)),
                          _K_)})}
    function sep_by1(s,p)
     {return fix_direct$0
              (function(m)
                {var _J_=caml_call1(return$2,0);
                 return caml_call3
                         (lift2$1,
                          cons,
                          p,
                          caml_call2(symbol$14,caml_call2(symbol$11,s,m),_J_))})}
    function sep_by(s,p)
     {var _H_=caml_call1(return$2,0),_I_=caml_call1(return$2,0);
      return caml_call2
              (symbol$14,
               caml_call3
                (lift2$1,
                 cons,
                 p,
                 caml_call2
                  (symbol$14,caml_call2(symbol$11,s,sep_by1(s,p)),_I_)),
               _H_)}
    function skip_many(p)
     {return fix_direct$0
              (function(m)
                {var _G_=caml_call1(return$2,0);
                 return caml_call2(symbol$14,caml_call2(symbol$11,p,m),_G_)})}
    function skip_many1(p){return caml_call2(symbol$11,p,skip_many(p))}
    var
     _t_=caml_call1(return$2,0),
     _u_=caml_call2(symbol$11,string$0(cst$1),_t_),
     _v_=caml_call1(return$2,0),
     end_of_line=
      caml_call2
       (symbol$13,
        caml_call2(symbol$14,caml_call2(symbol$11,char$0(10),_v_),_u_),
        cst_end_of_line);
    function scan(state,f,with_buffer)
     {return [0,
              function(input,pos,more,fail,succ)
               {var state$0=[0,state];
                function _F_(x){return [0,x,state$0[1]]}
                var
                 parser=
                  caml_call2
                   (symbol_map$1,
                    count_while$0
                     (0,
                      function(c)
                       {var match=caml_call2(f,state$0[1],c);
                        if(match){var state=match[1];state$0[1] = state;return 1}
                        return 0},
                      with_buffer),
                    _F_);
                return caml_call5(parser[1],input,pos,more,fail,succ)}]}
    function scan$0(state,f){return scan(state,f,Bigstringaf[7])}
    function scan_state(state,f)
     {function _C_(param){var state=param[2];return state}
      return caml_call2
              (symbol_map$1,
               scan(state,f,function(param,_E_,_D_){return 0}),
               _C_)}
    function scan_string(state,f)
     {function _A_(_B_){return _B_[1]}
      return caml_call2(symbol_map$1,scan$0(state,f),_A_)}
    function consume_with(p,f)
     {return [0,
              function(input,start,more,fail,succ)
               {var parser_committed_bytes=input[1];
                function succ$0(input,pos,more,param)
                 {if(parser_committed_bytes !== input[1])
                   return caml_call5
                           (fail,input,pos,more,0,cst_consumed_parser_committed);
                  var len=pos - start | 0,consumed=apply(input,start,len,f);
                  return caml_call4(succ,input,pos,more,consumed)}
                return caml_call5(p[1],input,start,more,fail,succ$0)}]}
    function consumed(p){return consume_with(p,Bigstringaf[7])}
    function consumed_bigstring(p){return consume_with(p,Bigstringaf[4])}
    function and(a,b)
     {return caml_call3(lift2$1,function(a,b){return [0,a,b]},a,b)}
    function map(t,f){return caml_call2(symbol_map$1,t,f)}
    function bind(t,f){return caml_call2(symbol_bind$1,t,f)}
    function map2(a,b,f){return caml_call3(lift2$1,f,a,b)}
    function map3(a,b,c,f){return caml_call4(lift3$1,f,a,b,c)}
    function map4(a,b,c,d,f){return caml_call5(lift4$1,f,a,b,c,d)}
    var
     Let_syntax=[0,return$2,map,bind,and,map2,map3,map4],
     Let_syntax$0=[0,return$2,symbol_map$1,symbol_bind$1,Let_syntax];
    function int16(n)
     {var
       bytes=2,
       p=
        [0,
         function(input,pos,more,fail,succ)
          {return unsafe_get_int16_be(input,pos) === (n & 65535)
                   ?caml_call4(succ,input,pos + 2 | 0,more,0)
                   :caml_call5(fail,input,pos,more,0,cst_BE_int16)}];
      return ensure$0(bytes,p)}
    function int32(n)
     {var
       bytes=4,
       p=
        [0,
         function(input,pos,more,fail,succ)
          {var _z_=unsafe_get_int32_be(input,pos);
           return caml_call2(Stdlib_int32[17],_z_,n)
                   ?caml_call4(succ,input,pos + 4 | 0,more,0)
                   :caml_call5(fail,input,pos,more,0,cst_BE_int32)}];
      return ensure$0(bytes,p)}
    function int64(n)
     {var
       bytes=8,
       p=
        [0,
         function(input,pos,more,fail,succ)
          {var _y_=unsafe_get_int64_be(input,pos);
           return caml_call2(Stdlib_int64[17],_y_,n)
                   ?caml_call4(succ,input,pos + 8 | 0,more,0)
                   :caml_call5(fail,input,pos,more,0,cst_BE_int64)}];
      return ensure$0(bytes,p)}
    var
     any_uint16=
      ensure$0
       (2,
        unsafe_apply
         (2,function(bs,off,param){return caml_call2(Bigstringaf[30],bs,off)})),
     any_int16=
      ensure$0
       (2,
        unsafe_apply
         (2,function(bs,off,param){return caml_call2(Bigstringaf[32],bs,off)})),
     any_int32=
      ensure$0
       (4,
        unsafe_apply
         (4,function(bs,off,param){return caml_call2(Bigstringaf[36],bs,off)})),
     any_int64=
      ensure$0
       (8,
        unsafe_apply
         (8,function(bs,off,param){return caml_call2(Bigstringaf[40],bs,off)})),
     any_float=
      ensure$0
       (4,
        unsafe_apply
         (4,
          function(bs,off,param)
           {return caml_int32_float_of_bits
                    (caml_call2(Bigstringaf[36],bs,off))})),
     any_double=
      ensure$0
       (8,
        unsafe_apply
         (8,
          function(bs,off,param)
           {return caml_int64_float_of_bits
                    (caml_call2(Bigstringaf[40],bs,off))}));
    function int16$0(n)
     {var
       bytes=2,
       p=
        [0,
         function(input,pos,more,fail,succ)
          {return unsafe_get_int16_le(input,pos) === (n & 65535)
                   ?caml_call4(succ,input,pos + 2 | 0,more,0)
                   :caml_call5(fail,input,pos,more,0,cst_LE_int16)}];
      return ensure$0(bytes,p)}
    function int32$0(n)
     {var
       bytes=4,
       p=
        [0,
         function(input,pos,more,fail,succ)
          {var _x_=unsafe_get_int32_le(input,pos);
           return caml_call2(Stdlib_int32[17],_x_,n)
                   ?caml_call4(succ,input,pos + 4 | 0,more,0)
                   :caml_call5(fail,input,pos,more,0,cst_LE_int32)}];
      return ensure$0(bytes,p)}
    function int64$0(n)
     {var
       bytes=8,
       p=
        [0,
         function(input,pos,more,fail,succ)
          {var _w_=unsafe_get_int64_le(input,pos);
           return caml_call2(Stdlib_int64[17],_w_,n)
                   ?caml_call4(succ,input,pos + 8 | 0,more,0)
                   :caml_call5(fail,input,pos,more,0,cst_LE_int64)}];
      return ensure$0(bytes,p)}
    var
     any_uint16$0=
      ensure$0
       (2,
        unsafe_apply
         (2,function(bs,off,param){return caml_call2(Bigstringaf[29],bs,off)})),
     any_int16$0=
      ensure$0
       (2,
        unsafe_apply
         (2,function(bs,off,param){return caml_call2(Bigstringaf[31],bs,off)})),
     any_int32$0=
      ensure$0
       (4,
        unsafe_apply
         (4,function(bs,off,param){return caml_call2(Bigstringaf[35],bs,off)})),
     any_int64$0=
      ensure$0
       (8,
        unsafe_apply
         (8,function(bs,off,param){return caml_call2(Bigstringaf[39],bs,off)})),
     any_float$0=
      ensure$0
       (4,
        unsafe_apply
         (4,
          function(bs,off,param)
           {return caml_int32_float_of_bits
                    (caml_call2(Bigstringaf[35],bs,off))})),
     any_double$0=
      ensure$0
       (8,
        unsafe_apply
         (8,
          function(bs,off,param)
           {return caml_int64_float_of_bits
                    (caml_call2(Bigstringaf[39],bs,off))}));
    function take$0(n,f)
     {var n$0=caml_call2(Stdlib[17],n,0);
      return ensure$0(n$0,unsafe_apply(n$0,f))}
    function peek(n,f){return unsafe_lookahead(take$0(n,f))}
    function take_while$0(check,f){return count_while$0(0,check,f)}
    function take_while1$0(check,f){return count_while1(check,f)}
    function take_till$0(check,f)
     {return take_while$0(function(c){return 1 - caml_call1(check,c)},f)}
    var Consume=[0];
    function parse_bigstring$0(consume,p,bs)
     {var p$0=consume?caml_call2(symbol$12,p,end_of_input):p;
      return parse_bigstring(p$0,bs)}
    function parse_string(consume,p,s)
     {var len=caml_ml_string_length(s),bs=caml_call1(Bigstringaf[1],len);
      caml_call5(Bigstringaf[44],s,0,bs,0,len);
      return parse_bigstring$0(consume,p,bs)}
    var
     Angstrom$0=
      [0,
       peek_char,
       peek_char_fail,
       peek_string,
       char$0,
       not_char,
       any_char,
       satisfy,
       string$0,
       string_ci,
       skip,
       skip_while,
       take,
       take_while,
       take_while1,
       take_till,
       consumed,
       take_bigstring,
       take_bigstring_while,
       take_bigstring_while1,
       take_bigstring_till,
       consumed_bigstring,
       advance,
       end_of_line,
       at_end_of_input,
       end_of_input,
       scan$0,
       scan_state,
       scan_string,
       int8,
       any_uint8,
       any_int8,
       [0,
        int16,
        int32,
        int64,
        any_int16,
        any_int32,
        any_int64,
        any_uint16,
        any_float,
        any_double],
       [0,
        int16$0,
        int32$0,
        int64$0,
        any_int16$0,
        any_int32$0,
        any_int64$0,
        any_uint16$0,
        any_float$0,
        any_double$0],
       option,
       and,
       list,
       count,
       many,
       many1,
       many_till,
       sep_by,
       sep_by1,
       skip_many,
       skip_many1,
       fix_direct$0,
       symbol$14,
       choice,
       symbol$13,
       commit$0,
       return$2,
       fail$1,
       symbol_bind$1,
       bind,
       symbol_map$1,
       symbol$10,
       symbol$9,
       symbol$11,
       symbol$12,
       lift$0,
       lift2$1,
       lift3$1,
       lift4$1,
       map,
       map2,
       map3,
       map4,
       Let_syntax$0,
       symbol_map$1,
       symbol_bind$1,
       and,
       [0,take$0,take_while$0,take_while1$0,take_till$0,peek],
       Consume,
       parse_bigstring$0,
       parse_string,
       [0,
        parse$0,
        feed,
        state_to_option$0,
        state_to_result$0,
        state_to_unconsumed],
       [0,parse,state_to_option,state_to_result],
       pos,
       available];
    caml_register_global(59,Angstrom$0,"Angstrom");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJhbmdzdHJvbS5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
