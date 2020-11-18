(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Persistent_connection_kern=
      caml_string_of_jsbytes
       ("Persistent_connection_kernel__Persistent_connection_kernel_intf"),
     cst_persistent_connection_kern=
      caml_string_of_jsbytes("persistent_connection_kernel"),
     cst_persistent_connection_kern$0=
      caml_string_of_jsbytes
       ("persistent_connection_kernel/src/persistent_connection_kernel_intf.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_persistent_connection_kern$1=
      caml_string_of_jsbytes("persistent_connection_kernel"),
     cst_persistent_connection_kern$2=
      caml_string_of_jsbytes("persistent_connection_kernel"),
     cst_Persistent_connection_kern$0=
      caml_string_of_jsbytes
       ("Persistent_connection_kernel__Persistent_connection_kernel_intf"),
     cst_Persistent_connection_clos=
      caml_string_of_jsbytes("Persistent connection closed"),
     cst_Persistent_connection_kern$1=
      caml_string_of_jsbytes("Persistent_connection_kernel"),
     cst_persistent_connection_kern$3=
      caml_string_of_jsbytes("persistent_connection_kernel"),
     cst_persistent_connection_kern$4=
      caml_string_of_jsbytes
       ("persistent_connection_kernel/src/persistent_connection_kernel.ml"),
     cst$0=caml_string_of_jsbytes(""),
     cst_persistent_connection_kern$5=
      caml_string_of_jsbytes("persistent_connection_kernel"),
     cst_persistent_connection_kern$6=
      caml_string_of_jsbytes("persistent_connection_kernel"),
     cst_Persistent_connection_kern$2=
      caml_string_of_jsbytes("Persistent_connection_kernel"),
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Async_kernel=global_data.Async_kernel,
     Async_kernel_Deferred=global_data.Async_kernel__Deferred,
     Async_kernel_Ivar=global_data.Async_kernel__Ivar,
     Core_kernel=global_data.Core_kernel,
     Core_kernel_Time_ns=global_data.Core_kernel__Time_ns,
     Core_kernel_Option=global_data.Core_kernel__Option,
     Base_Random=global_data.Base__Random,
     Async_kernel_Time_source=global_data.Async_kernel__Time_source,
     Core_kernel_Error=global_data.Core_kernel__Error,
     Async_kernel_Monitor=global_data.Async_kernel__Monitor,
     Base_Exn=global_data.Base__Exn,
     Core_kernel_Sexp=global_data.Core_kernel__Sexp,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Core_kernel_Or_error=global_data.Core_kernel__Or_error,
     Persistent_connection_kernel=[0];
    caml_register_global
     (35,Persistent_connection_kernel,"Persistent_connection_kernel__");
    caml_call1(Ppx_module_timer_runtime[4],cst_Persistent_connection_kern);
    caml_call1
     (Ppx_bench_lib_Benchmark_accumu[1][1],cst_persistent_connection_kern);
    caml_call1(Expect_test_collector[4][1],cst_persistent_connection_kern$0);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_persistent_connection_kern$1,cst);
    caml_call1
     (Ppx_inline_test_lib_Runtime[3],cst_persistent_connection_kern$2);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Persistent_connection_kern$0);
    var Persistent_connection_kernel_P=[0];
    caml_register_global
     (40,
      Persistent_connection_kernel_P,
      "Persistent_connection_kernel__Persistent_connection_kernel_intf");
    caml_call1(Ppx_module_timer_runtime[4],cst_Persistent_connection_kern$1);
    caml_call1
     (Ppx_bench_lib_Benchmark_accumu[1][1],cst_persistent_connection_kern$3);
    caml_call1(Expect_test_collector[4][1],cst_persistent_connection_kern$4);
    caml_call2
     (Ppx_inline_test_lib_Runtime[2],cst_persistent_connection_kern$5,cst$0);
    caml_call1
     (Ppx_inline_test_lib_Runtime[3],cst_persistent_connection_kern$6);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Persistent_connection_kern$2);
    var
     _h_=[0,990972795,0],
     _g_=[0,-289386606,0],
     _f_=[0,-289386606,0],
     _a_=[0,caml_string_of_jsbytes("Attempting_to_connect")],
     _b_=[0,caml_string_of_jsbytes("Disconnected")],
     _c_=[0,caml_string_of_jsbytes("Obtained_address")],
     _d_=[0,caml_string_of_jsbytes("Failed_to_connect")],
     _e_=[0,caml_string_of_jsbytes("Connected")],
     Persistent_connection_kernel$0=
      [0,
       function(Conn)
        {var sexp_of_address=Conn[1][1];
         function sexp_of_t(param)
          {if(typeof param === "number")
            return 0 === param?_a_:_b_;
           else
            switch(param[0])
             {case 0:
               var v0=param[1],v0$0=caml_call1(sexp_of_address,v0);
               return [1,[0,_c_,[0,v0$0,0]]];
              case 1:
               var v0$1=param[1],v0$2=caml_call1(Core_kernel_Error[6],v0$1);
               return [1,[0,_d_,[0,v0$2,0]]];
              default:
               var v0$3=param[1],v0$4=caml_call1(Sexplib0_Sexp_conv[23],v0$3);
               return [1,[0,_e_,[0,v0$4,0]]]}}
         function log_level(param)
          {if(typeof param !== "number" && 1 === param[0])return 106380200;
           return 815031438}
         function handle_event(t$0,t)
          {var on_event=t$0[6][2];return caml_call1(on_event,t)}
         function create
          (server_name,opt,retry_delay,_C_,_B_,connect,get_address)
          {if(opt)
            var sth=opt[1],on_event=sth;
           else
            var on_event=function(param){return Async_kernel_Deferred[18]};
           if(_C_)
            var sth$0=_C_[1],random_state=sth$0;
           else
            var random_state=Base_Random[18][1];
           if(_B_)
            var sth$1=_B_[1],time_source=sth$1;
           else
            var time_source=caml_call1(Async_kernel_Time_source[10],0);
           var event_handler=[0,server_name,on_event];
           function retry_delay$0(param)
            {function default_retry_delay(param)
              {return Core_kernel[590]
                       ?caml_call1(Core_kernel_Time_ns[1][80],0.1)
                       :caml_call1(Core_kernel_Time_ns[1][80],10.)}
             var
              retry_delay$0=
               caml_call2
                (Core_kernel_Option[49],retry_delay,default_retry_delay),
              _ao_=caml_call1(retry_delay$0,0),
              span=caml_call1(Core_kernel_Time_ns[1][90],_ao_),
              distance=caml_call2(Base_Random[18][10],random_state,span * 0.3),
              wait=
               caml_call1(Base_Random[18][16],random_state)
                ?span + distance
                :span - distance,
              _ap_=caml_call1(Core_kernel_Time_ns[1][80],wait);
             return caml_call2(Async_kernel_Time_source[27],time_source,_ap_)}
           var
            _D_=caml_call1(Async_kernel_Ivar[12],0),
            _E_=caml_call1(Async_kernel_Ivar[12],0),
            _F_=caml_call1(Async_kernel_Ivar[12],0),
            t=
             [0,
              get_address,
              connect,
              retry_delay$0,
              caml_call1(Async_kernel_Ivar[12],0),
              _F_,
              event_handler,
              _E_,
              _D_];
           function _G_(param)
            {function _I_(param)
              {var
                ready_to_retry_connecting=caml_call1(t[3],0),
                previous_address=[0,0],
                previous_error=[0,0];
               function _L_(maybe_conn)
                {caml_call2(Async_kernel_Ivar[14],t[4],maybe_conn);
                 if(typeof maybe_conn === "number")
                  return caml_call1(Async_kernel[19],_f_);
                 var conn=maybe_conn[2];
                 function _ac_(param)
                  {function _ae_(param)
                    {t[4] = caml_call1(Async_kernel_Ivar[12],0);
                     function _ag_(param)
                      {var _ai_=0;
                       function _aj_(param)
                        {caml_call2(Async_kernel_Ivar[14],t[4],-400989606);
                         return _g_}
                       var
                        _ak_=caml_call1(Async_kernel_Ivar[18],t[7]),
                        _al_=
                         [0,caml_call2(Async_kernel_Deferred[27],_ak_,_aj_),_ai_];
                       function _am_(param){return _h_}
                       var
                        _an_=
                         [0,
                          caml_call2
                           (Async_kernel_Deferred[27],ready_to_retry_connecting,_am_),
                          _al_];
                       return caml_call1(Async_kernel_Deferred[29],_an_)}
                     var _ah_=handle_event(t,1);
                     return caml_call2(Async_kernel[20],_ah_,_ag_)}
                   var _af_=caml_call1(Conn[4],conn);
                   return caml_call2(Async_kernel[20],_af_,_ae_)}
                 var _ad_=handle_event(t,[2,conn]);
                 return caml_call2(Async_kernel[20],_ad_,_ac_)}
               function loop(param)
                {if(caml_call1(Async_kernel_Ivar[17],t[7]))
                  return caml_call1(Async_kernel[19],-400989606);
                 function _P_(connect_result)
                  {caml_call2(Async_kernel_Ivar[14],t[5],connect_result);
                   t[5] = caml_call1(Async_kernel_Ivar[12],0);
                   if(0 === connect_result[0])
                    {var conn=connect_result[1];
                     return caml_call1(Async_kernel[19],[0,17724,conn])}
                   var err=connect_result[1],_V_=previous_error[1];
                   if(_V_)
                    var
                     previous_err=_V_[1],
                     to_sexp=
                      function(e)
                       {var
                         _aa_=caml_call1(Core_kernel_Error[23],e),
                         _ab_=caml_call1(Async_kernel_Monitor[13],_aa_);
                        return caml_call1(Base_Exn[1],_ab_)},
                     _T_=to_sexp(previous_err),
                     _U_=to_sexp(err),
                     same_as_previous_error=
                      caml_call2(Core_kernel_Sexp[36],_U_,_T_);
                   else
                    var same_as_previous_error=0;
                   previous_error[1] = [0,err];
                   function _W_(param)
                    {function _Y_(param){return loop(0)}
                     var
                      _Z_=[0,caml_call1(Async_kernel_Ivar[18],t[7]),0],
                      ___=[0,caml_call1(t[3],0),_Z_],
                      _$_=caml_call1(Async_kernel_Deferred[23],___);
                     return caml_call2(Async_kernel[20],_$_,_Y_)}
                   var
                    _X_=
                     same_as_previous_error
                      ?Async_kernel_Deferred[18]
                      :handle_event(t,[1,err]);
                   return caml_call2(Async_kernel[20],_X_,_W_)}
                 function _M_(param)
                  {if(0 === param[0])
                    {var addr=param[1],_Q_=previous_address[1];
                     if(_Q_)
                      var
                       previous_address$0=_Q_[1],
                       same_as_previous_address=
                        caml_call2(Conn[1][2],addr,previous_address$0);
                     else
                      var same_as_previous_address=0;
                     previous_address[1] = [0,addr];
                     var
                      _R_=function(param){return caml_call1(t[2],addr)},
                      _S_=
                       same_as_previous_address
                        ?Async_kernel_Deferred[18]
                        :handle_event(t,[0,addr]);
                     return caml_call2(Async_kernel[20],_S_,_R_)}
                   var e=param[1];
                   return caml_call1(Async_kernel[19],[1,e])}
                 var
                  _N_=caml_call1(t[1],0),
                  _O_=caml_call2(Async_kernel[20],_N_,_M_);
                 return caml_call2(Async_kernel[22][2],_O_,_P_)}
               var _K_=loop(0);
               return caml_call2(Async_kernel[20],_K_,_L_)}
             var _J_=handle_event(t,0);
             return caml_call2(Async_kernel[20],_J_,_I_)}
           var _H_=caml_call2(Async_kernel_Deferred[31],0,_G_);
           caml_call1(Async_kernel[6],_H_);
           return t}
         function connected(t)
          {function loop(param)
            {var
              d=caml_call1(Async_kernel_Ivar[18],t[4]),
              match=caml_call1(Async_kernel_Deferred[5],d);
             if(match)
              {var _y_=match[1];
               if(typeof _y_ === "number")
                return caml_call1(Async_kernel_Deferred[19],0);
               var conn=_y_[2];
               if(caml_call1(Conn[3],conn))
                {var _z_=caml_call1(Conn[4],conn);
                 return caml_call2(Async_kernel[20],_z_,loop)}
               return caml_call1(Async_kernel[19],conn)}
             function _A_(param)
              {if(typeof param === "number")
                return caml_call1(Async_kernel_Deferred[19],0);
               var conn=param[2];
               return caml_call1(Async_kernel[19],conn)}
             return caml_call2(Async_kernel[20],d,_A_)}
           return loop(0)}
         function current_connection(t)
          {var
            _w_=caml_call1(Async_kernel_Ivar[18],t[4]),
            match=caml_call1(Async_kernel_Deferred[5],_w_);
           if(match)
            {var _x_=match[1];
             if(typeof _x_ !== "number"){var conn=_x_[2];return [0,conn]}}
           return 0}
         function close_finished(t)
          {return caml_call1(Async_kernel_Ivar[18],t[8])}
         function is_closed(t){return caml_call1(Async_kernel_Ivar[17],t[7])}
         function close(t)
          {if(caml_call1(Async_kernel_Ivar[17],t[7]))return close_finished(t);
           caml_call2(Async_kernel_Ivar[14],t[7],0);
           function _s_(conn_opt)
            {function _u_(param)
              {return caml_call2(Async_kernel_Ivar[14],t[8],0)}
             if(typeof conn_opt === "number")
              var _v_=Async_kernel_Deferred[18];
             else
              var conn=conn_opt[2],_v_=caml_call1(Conn[2],conn);
             return caml_call2(Async_kernel[21],_v_,_u_)}
           var _t_=caml_call1(Async_kernel_Ivar[18],t[4]);
           return caml_call2(Async_kernel[20],_t_,_s_)}
         var
          _i_=caml_call1(Sexplib0_Sexp_conv[7],cst_Persistent_connection_clos),
          connected_or_failed_to_connect=
           caml_call1(Core_kernel_Or_error[39],_i_);
         function connected_or_failed_to_connect$0(t)
          {if(is_closed(t))
            return caml_call1(Async_kernel[19],connected_or_failed_to_connect);
           var
            _j_=connected(t),
            match=caml_call1(Async_kernel_Deferred[5],_j_);
           if(match){var x=match[1];return caml_call1(Async_kernel[19],[0,x])}
           var _k_=0;
           function _l_(_r_){return _r_}
           var
            _m_=caml_call1(Async_kernel_Ivar[18],t[5]),
            _n_=[0,caml_call2(Async_kernel[4],_m_,_l_),_k_];
           function _o_(param){return connected_or_failed_to_connect}
           var
            _p_=caml_call1(Async_kernel_Ivar[18],t[7]),
            _q_=[0,caml_call2(Async_kernel[4],_p_,_o_),_n_];
           return caml_call1(Async_kernel_Deferred[29],_q_)}
         return [0,
                 [0,sexp_of_t,log_level],
                 create,
                 connected,
                 connected_or_failed_to_connect$0,
                 current_connection,
                 close,
                 is_closed,
                 close_finished]}];
    caml_register_global
     (56,Persistent_connection_kernel$0,"Persistent_connection_kernel");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJwZXJzaXN0ZW50X2Nvbm5lY3Rpb25fa2VybmVsLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
