(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_js_from_array=runtime.caml_js_from_array,
     caml_js_object=runtime.caml_js_object,
     caml_jsstring_of_string=runtime.caml_jsstring_of_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_string_of_jsstring=runtime.caml_string_of_jsstring,
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
    function caml_call7(f,a0,a1,a2,a3,a4,a5,a6)
     {return f.length == 7
              ?f(a0,a1,a2,a3,a4,a5,a6)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5,a6])}
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
     cst_Async_js_Ocaml_uri=caml_string_of_jsbytes("Async_js__Ocaml_uri"),
     cst_async_js=caml_string_of_jsbytes("async_js"),
     cst_src_ocaml_uri_ml=caml_string_of_jsbytes("src/ocaml_uri.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_async_js$0=caml_string_of_jsbytes("async_js"),
     cst_async_js$1=caml_string_of_jsbytes("async_js"),
     cst_Async_js_Ocaml_uri$0=caml_string_of_jsbytes("Async_js__Ocaml_uri"),
     cst_Async_js_Ocaml_uri_sexp=
      caml_string_of_jsbytes("Async_js__Ocaml_uri_sexp"),
     cst_async_js$2=caml_string_of_jsbytes("async_js"),
     cst_src_ocaml_uri_sexp_ml=caml_string_of_jsbytes("src/ocaml_uri_sexp.ml"),
     cst$0=caml_string_of_jsbytes(""),
     cst_async_js$3=caml_string_of_jsbytes("async_js"),
     cst_async_js$4=caml_string_of_jsbytes("async_js"),
     cst_Async_js_Ocaml_uri_sexp$0=
      caml_string_of_jsbytes("Async_js__Ocaml_uri_sexp"),
     cst_websocket=caml_string_of_jsbytes("websocket"),
     cst_https=caml_string_of_jsbytes("https:"),
     cst_wss=caml_string_of_jsbytes("wss"),
     cst_ws=caml_string_of_jsbytes("ws"),
     cst_https$0=caml_string_of_jsbytes("https:"),
     cst_RPC_connection_closed_by_c=
      caml_string_of_jsbytes("RPC connection closed by client"),
     cst_BUG_onopen_called_but_read=
      caml_string_of_jsbytes
       ("BUG: onopen called but readyState is CONNECTING"),
     cst_closed=caml_string_of_jsbytes("closed"),
     cst_connection_failed=caml_string_of_jsbytes("connection failed"),
     cst_WebSocket_s_sexp_Close_cod=
      caml_string_of_jsbytes("WebSocket %s (%{sexp:Close_code.t})"),
     cst$2=caml_string_of_jsbytes(" ("),
     cst_WebSocket=caml_string_of_jsbytes("WebSocket "),
     cst_WebSocket_failed_immediate=
      caml_string_of_jsbytes("WebSocket failed immediately (illegal URI?)"),
     cst_close_reason_was_too_long_=
      caml_string_of_jsbytes
       ("close-reason-was-too-long-or-contains-invalid-utf8"),
     cst_Async_js_Rpc=caml_string_of_jsbytes("Async_js__Rpc"),
     cst_async_js$5=caml_string_of_jsbytes("async_js"),
     cst_src_rpc_ml=caml_string_of_jsbytes("src/rpc.ml"),
     cst$1=caml_string_of_jsbytes(""),
     cst_async_js$6=caml_string_of_jsbytes("async_js"),
     cst_src_rpc_ml$0=caml_string_of_jsbytes("src/rpc.ml"),
     cst_to_int_of_int_round_trip=
      caml_string_of_jsbytes(": to_int -> of_int round-trip"),
     cst_async_js$7=caml_string_of_jsbytes("async_js"),
     cst_Async_js_Rpc$0=caml_string_of_jsbytes("Async_js__Rpc"),
     cst_Async_js_Persistent_connec=
      caml_string_of_jsbytes("Async_js__Persistent_connection"),
     cst_async_js$8=caml_string_of_jsbytes("async_js"),
     cst_src_persistent_connection_=
      caml_string_of_jsbytes("src/persistent_connection.ml"),
     cst$3=caml_string_of_jsbytes(""),
     cst_async_js$9=caml_string_of_jsbytes("async_js"),
     cst_async_js$10=caml_string_of_jsbytes("async_js"),
     cst_Async_js_Persistent_connec$0=
      caml_string_of_jsbytes("Async_js__Persistent_connection"),
     cst_No_response_returned_despi=
      caml_string_of_jsbytes
       ("No response returned despite successful request"),
     cst_Request_failed=caml_string_of_jsbytes("Request failed"),
     cst_Timeout=caml_string_of_jsbytes("Timeout"),
     cst_Network_error=caml_string_of_jsbytes("Network error"),
     method_string=caml_string_of_jsbytes("GET"),
     cst$5=caml_string_of_jsbytes("&"),
     cst$6=caml_string_of_jsbytes("?"),
     method_string$0=caml_string_of_jsbytes("POST"),
     cst_Async_js_Http=caml_string_of_jsbytes("Async_js__Http"),
     cst_async_js$11=caml_string_of_jsbytes("async_js"),
     cst_src_http_ml=caml_string_of_jsbytes("src/http.ml"),
     cst$4=caml_string_of_jsbytes(""),
     cst_async_js$12=caml_string_of_jsbytes("async_js"),
     cst_async_js$13=caml_string_of_jsbytes("async_js"),
     cst_Async_js_Http$0=caml_string_of_jsbytes("Async_js__Http"),
     cst_src_debug_ml$13=caml_string_of_jsbytes("src/debug.ml"),
     cst_A_B_A_C=caml_string_of_jsbytes(" ((A B) (A C)) "),
     cst_src_debug_ml$8=caml_string_of_jsbytes("src/debug.ml"),
     cst_src_debug_ml$0=caml_string_of_jsbytes("src/debug.ml"),
     cst_src_debug_ml$1=caml_string_of_jsbytes("src/debug.ml"),
     cst$8=caml_string_of_jsbytes(""),
     cst_Async_js_Debug=caml_string_of_jsbytes("Async_js__Debug"),
     cst_async_js$14=caml_string_of_jsbytes("async_js"),
     cst_src_debug_ml=caml_string_of_jsbytes("src/debug.ml"),
     cst$7=caml_string_of_jsbytes(""),
     cst_async_js$15=caml_string_of_jsbytes("async_js"),
     cst_src_debug_ml$2=caml_string_of_jsbytes("src/debug.ml"),
     cst_src_debug_ml$3=caml_string_of_jsbytes("src/debug.ml"),
     cst_src_debug_ml$4=caml_string_of_jsbytes("src/debug.ml"),
     cst_src_debug_ml$5=caml_string_of_jsbytes("src/debug.ml"),
     cst_src_debug_ml$6=caml_string_of_jsbytes("src/debug.ml"),
     cst_src_debug_ml$7=caml_string_of_jsbytes("src/debug.ml"),
     cst_4d5dd5245b57e1bdb16258be9f=
      caml_string_of_jsbytes("4d5dd5245b57e1bdb16258be9fb35f03"),
     cst_src_debug_ml$9=caml_string_of_jsbytes("src/debug.ml"),
     cst_src_debug_ml$10=caml_string_of_jsbytes("src/debug.ml"),
     cst_src_debug_ml$11=caml_string_of_jsbytes("src/debug.ml"),
     cst_src_debug_ml$12=caml_string_of_jsbytes("src/debug.ml"),
     cst_4d5dd5245b57e1bdb16258be9f$0=
      caml_string_of_jsbytes("4d5dd5245b57e1bdb16258be9fb35f03"),
     cst_src_debug_ml$14=caml_string_of_jsbytes("src/debug.ml"),
     cst_src_debug_ml$15=caml_string_of_jsbytes("src/debug.ml"),
     cst_src_debug_ml$16=caml_string_of_jsbytes("src/debug.ml"),
     cst_src_debug_ml$17=caml_string_of_jsbytes("src/debug.ml"),
     cst_4d5dd5245b57e1bdb16258be9f$1=
      caml_string_of_jsbytes("4d5dd5245b57e1bdb16258be9fb35f03"),
     cst_async_js$16=caml_string_of_jsbytes("async_js"),
     cst_Async_js_Debug$0=caml_string_of_jsbytes("Async_js__Debug"),
     cst_Async_kernel_Monitor_try_w=
      caml_string_of_jsbytes("Async_kernel: Monitor.try_with"),
     cst_Async_kernel_Unhandled_exc=
      caml_string_of_jsbytes("Async_kernel: Unhandled exception"),
     cst_Async_js_Async_js0=caml_string_of_jsbytes("Async_js__Async_js0"),
     cst_async_js$17=caml_string_of_jsbytes("async_js"),
     cst_src_async_js0_ml=caml_string_of_jsbytes("src/async_js0.ml"),
     cst$9=caml_string_of_jsbytes(""),
     cst_async_js$18=caml_string_of_jsbytes("async_js"),
     ready_state_change=caml_string_of_jsbytes("readystatechange"),
     complete=caml_string_of_jsbytes("complete"),
     cst_async_js$19=caml_string_of_jsbytes("async_js"),
     cst_Async_js_Async_js0$0=caml_string_of_jsbytes("Async_js__Async_js0"),
     cst_Async_js=caml_string_of_jsbytes("Async_js"),
     cst_async_js$20=caml_string_of_jsbytes("async_js"),
     cst_src_async_js_ml=caml_string_of_jsbytes("src/async_js.ml"),
     cst$10=caml_string_of_jsbytes(""),
     cst_async_js$21=caml_string_of_jsbytes("async_js"),
     cst_async_js$22=caml_string_of_jsbytes("async_js"),
     cst_Async_js$0=caml_string_of_jsbytes("Async_js"),
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Core_kernel_Or_error=global_data.Core_kernel__Or_error,
     Async_kernel=global_data.Async_kernel,
     Async_rpc_kernel_Transport=global_data.Async_rpc_kernel__Transport,
     Async_rpc_kernel_Pipe_transpor=
      global_data.Async_rpc_kernel__Pipe_transport,
     include=global_data.Async_rpc_kernel__Rpc,
     Core_kernel_Info=global_data.Core_kernel__Info,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Async_kernel_Pipe=global_data.Async_kernel__Pipe,
     Js_of_ocaml_Url=global_data.Js_of_ocaml__Url,
     Core_kernel_String=global_data.Core_kernel__String,
     Core_kernel_Error=global_data.Core_kernel__Error,
     Core_kernel=global_data.Core_kernel,
     Js_of_ocaml_Typed_array=global_data.Js_of_ocaml__Typed_array,
     Js_of_ocaml_Js=global_data.Js_of_ocaml__Js,
     Async_kernel_Ivar=global_data.Async_kernel__Ivar,
     Sexplib0_Sexp=global_data.Sexplib0__Sexp,
     Js_of_ocaml_WebSockets=global_data.Js_of_ocaml__WebSockets,
     Js_of_ocaml_Dom=global_data.Js_of_ocaml__Dom,
     Async_kernel_Deferred=global_data.Async_kernel__Deferred,
     Assert_failure=global_data.Assert_failure,
     Core_kernel_List=global_data.Core_kernel__List,
     Stdlib_list=global_data.Stdlib__list,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Uri=global_data.Uri,
     Uri_sexp=global_data.Uri_sexp,
     Inline_test_config=global_data.Inline_test_config,
     Core_kernel_Host_and_port=global_data.Core_kernel__Host_and_port,
     Persistent_connection_kernel=global_data.Persistent_connection_kernel,
     Async_kernel_Deferred_or_error=
      global_data.Async_kernel__Deferred_or_error,
     Core_kernel_Option=global_data.Core_kernel__Option,
     Core_kernel_Result=global_data.Core_kernel__Result,
     Js_of_ocaml_File=global_data.Js_of_ocaml__File,
     Base_Or_error=global_data.Base__Or_error,
     Js_of_ocaml_XmlHttpRequest=global_data.Js_of_ocaml__XmlHttpRequest,
     Core_kernel_Set=global_data.Core_kernel__Set,
     Core_kernel_Array=global_data.Core_kernel__Array,
     Expect_test_common_File=global_data.Expect_test_common__File,
     Core_kernel_Sexp=global_data.Core_kernel__Sexp,
     Js_of_ocaml_Firebug=global_data.Js_of_ocaml__Firebug,
     Expect_test_config=global_data.Expect_test_config,
     Js_of_ocaml_Dom_html=global_data.Js_of_ocaml__Dom_html,
     Async_kernel_Scheduler=global_data.Async_kernel__Scheduler,
     Async_kernel_Monitor=global_data.Async_kernel__Monitor,
     Base_Exn=global_data.Base__Exn,
     Core_kernel_Time_ns=global_data.Core_kernel__Time_ns,
     Core_kernel_Float=global_data.Core_kernel__Float,
     Core_kernel_Stack=global_data.Core_kernel__Stack,
     Async_kernel_Clock_ns=global_data.Async_kernel__Clock_ns,
     Async_js=[0];
    caml_register_global(309,Async_js,"Async_js__");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_js_Ocaml_uri);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_js);
    caml_call1(Expect_test_collector[4][1],cst_src_ocaml_uri_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$0,cst);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_js_Ocaml_uri$0);
    var Async_js_Ocaml_uri=[0];
    caml_register_global(314,Async_js_Ocaml_uri,"Async_js__Ocaml_uri");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_js_Ocaml_uri_sexp);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_js$2);
    caml_call1(Expect_test_collector[4][1],cst_src_ocaml_uri_sexp_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$3,cst$0);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_js_Ocaml_uri_sexp$0);
    var Async_js_Ocaml_uri_sexp=[0];
    caml_register_global
     (315,Async_js_Ocaml_uri_sexp,"Async_js__Ocaml_uri_sexp");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_js_Rpc);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_js$5);
    caml_call1(Expect_test_collector[4][1],cst_src_rpc_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$6,cst$1);
    var
     to_string=Uri[8],
     make=Uri[11],
     sexp_of_t=Uri_sexp[4],
     compare_close_event_code=Core_kernel[336],
     sexp_of_close_event_code=Core_kernel[340],
     l$0=0,
     acc=0,
     _y_=[0,caml_string_of_jsbytes("uri")],
     _z_=[0,caml_string_of_jsbytes("description")],
     _x_=[0,0],
     _v_=[12,41,0],
     _w_=[0,0],
     _u_=[0,caml_string_of_jsbytes("src/rpc.ml"),99,33],
     _c_=[0,caml_string_of_jsbytes("Normal_closure")],
     _d_=[0,caml_string_of_jsbytes("Going_away")],
     _e_=[0,caml_string_of_jsbytes("Protocol_error")],
     _f_=[0,caml_string_of_jsbytes("Unsupported_data")],
     _g_=[0,caml_string_of_jsbytes("No_status_Received")],
     _h_=[0,caml_string_of_jsbytes("Abnormal_closure")],
     _i_=[0,caml_string_of_jsbytes("Invalid_frame_payload_data")],
     _j_=[0,caml_string_of_jsbytes("Policy_violation")],
     _k_=[0,caml_string_of_jsbytes("Message_too_big")],
     _l_=[0,caml_string_of_jsbytes("Missing_extension")],
     _m_=[0,caml_string_of_jsbytes("Internal_error")],
     _n_=[0,caml_string_of_jsbytes("Service_restart")],
     _o_=[0,caml_string_of_jsbytes("Try_again_later")],
     _p_=[0,caml_string_of_jsbytes("Bad_gateway")],
     _q_=[0,caml_string_of_jsbytes("TLS_handshake")],
     _r_=[0,caml_string_of_jsbytes("Unknown_close_event_code")],
     _s_=[0,caml_string_of_jsbytes("Invalid_close_event_code")],
     _B_=[0,caml_string_of_jsbytes("status_text")],
     _C_=[0,caml_string_of_jsbytes("code")],
     _D_=[0,caml_string_of_jsbytes("status_text")],
     _E_=[0,caml_string_of_jsbytes("code")],
     _ad_=[0,[12,102,[4,0,0,0,0]],caml_string_of_jsbytes("f%d")],
     _ae_=[0,[4,0,0,0,0],caml_string_of_jsbytes("%d")],
     _H_=[0,caml_string_of_jsbytes("field2")],
     _I_=[0,caml_string_of_jsbytes("field1")],
     _J_=[0,caml_string_of_jsbytes("Bar")],
     _K_=[0,caml_string_of_jsbytes("Foo")],
     _G_=[0,caml_string_of_jsbytes("some_name")],
     _L_=
      [0,
       [0,caml_string_of_jsbytes("debug")],
       [0,caml_string_of_jsbytes("other string")]],
     _N_=[1,caml_string_of_jsbytes(' "Foo" ')],
     _O_=[0,caml_string_of_jsbytes("")],
     _R_=
      [1,
       caml_string_of_jsbytes
        (' {"Bar":null,"field1":{"some_name":"debug"},"field2":["other string"]} ')],
     _S_=[0,caml_string_of_jsbytes("")],
     _Y_=[1,caml_string_of_jsbytes(' [{"A":"B"},{"A":"C"}] ')],
     _Z_=[0,caml_string_of_jsbytes("")],
     _$_=[0,caml_string_of_jsbytes("duplicate keys are displayed correctly")],
     _ag_=[1,caml_string_of_jsbytes(" 999 ")],
     _ah_=[0,caml_string_of_jsbytes("")],
     _aj_=[0,caml_string_of_jsbytes("no stack overflow")],
     l=0;
    for(;;)
     {if(l$0)
       {var
         l$1=l$0[2],
         enumerate_010=l$0[1],
         acc$0=[0,[1,enumerate_010],acc],
         l$0=l$1,
         acc=acc$0;
        continue}
      var l$2=l,acc$1=0,_a_=caml_call1(Stdlib_list[9],acc);
      for(;;)
       {if(l$2)
         {var
           l$3=l$2[2],
           enumerate_009=l$2[1],
           acc$2=[0,[0,enumerate_009],acc$1],
           l$2=l$3,
           acc$1=acc$2;
          continue}
        var
         _b_=caml_call1(Stdlib_list[9],acc$1),
         all=
          [0,
           0,
           [0,
            1,
            [0,
             2,
             [0,
              3,
              [0,
               4,
               [0,
                5,
                [0,
                 6,
                 [0,
                  7,
                  [0,
                   8,
                   [0,
                    9,
                    [0,
                     10,
                     [0,
                      11,
                      [0,12,[0,13,[0,14,caml_call2(Stdlib_list[11],_b_,_a_)]]]]]]]]]]]]]]],
         normal_closure=0,
         of_int=
          function(code)
           {var switcher=code - 1000 | 0;
            if(! (15 < switcher >>> 0))
             switch(switcher)
              {case 0:return 0;
               case 1:return 1;
               case 2:return 2;
               case 3:return 3;
               case 4:break;
               case 5:return 4;
               case 6:return 5;
               case 7:return 6;
               case 8:return 7;
               case 9:return 8;
               case 10:return 9;
               case 11:return 10;
               case 12:return 11;
               case 13:return 12;
               case 14:return 13;
               default:return 14}
            if
             (caml_call2(Core_kernel[85],code,3000)
              &&
              caml_call2(Core_kernel[86],code,4999))
             return [0,code];
            return [1,code]},
         to_int=
          function(param)
           {if(typeof param === "number")
             switch(param)
              {case 0:return 1000;
               case 1:return 1001;
               case 2:return 1002;
               case 3:return 1003;
               case 4:return 1005;
               case 5:return 1006;
               case 6:return 1007;
               case 7:return 1008;
               case 8:return 1009;
               case 9:return 1010;
               case 10:return 1011;
               case 11:return 1012;
               case 12:return 1013;
               case 13:return 1014;
               default:return 1015}
            else
             {if(0 === param[0]){var code=param[1];return code}
              var code$0=param[1];
              return code$0}},
         _t_=
          function(param)
           {function _b$_(t)
             {var x_011=of_int(to_int(t));
              if(caml_call2(Ppx_compare_lib[1],x_011,t))
               var match=0;
              else
               {var switch$0=0;
                if(typeof x_011 === "number")
                 switch(x_011)
                  {case 0:
                    var switch$1=0;
                    if(typeof t === "number" && ! t){var match=0;switch$1 = 1}
                    if(! switch$1)var match=-1;
                    break;
                   case 1:
                    var switch$2=0;
                    if(typeof t === "number")
                     if(1 === t)
                      {var match=0;switch$2 = 1}
                     else
                      if(! t){switch$0 = 1;switch$2 = 1}
                    if(! switch$2)var match=-1;
                    break;
                   case 2:
                    var switch$3=0;
                    if(typeof t === "number" && ! (3 <= t))
                     switch(t)
                      {case 2:var match=0;break;
                       case 0:switch$0 = 1;break;
                       default:switch$0 = 2}
                    else
                     switch$3 = 1;
                    if(switch$3)var match=-1;
                    break;
                   case 3:
                    var switch$4=0;
                    if(typeof t === "number")
                     switch(t)
                      {case 3:var match=0;break;
                       case 0:switch$0 = 1;break;
                       case 1:switch$0 = 2;break;
                       case 2:switch$0 = 3;break;
                       default:switch$4 = 1}
                    else
                     switch$4 = 1;
                    if(switch$4)var match=-1;
                    break;
                   case 4:
                    var switch$5=0;
                    if(typeof t === "number")
                     switch(t)
                      {case 4:var match=0;break;
                       case 0:switch$0 = 1;break;
                       case 1:switch$0 = 2;break;
                       case 2:switch$0 = 3;break;
                       case 3:switch$0 = 4;break;
                       default:switch$5 = 1}
                    else
                     switch$5 = 1;
                    if(switch$5)var match=-1;
                    break;
                   case 5:
                    var switch$6=0;
                    if(typeof t === "number")
                     switch(t)
                      {case 5:var match=0;break;
                       case 0:switch$0 = 1;break;
                       case 1:switch$0 = 2;break;
                       case 2:switch$0 = 3;break;
                       case 3:switch$0 = 4;break;
                       case 4:switch$0 = 5;break;
                       default:switch$6 = 1}
                    else
                     switch$6 = 1;
                    if(switch$6)var match=-1;
                    break;
                   case 6:
                    var switch$7=0;
                    if(typeof t === "number")
                     switch(t)
                      {case 6:var match=0;break;
                       case 0:switch$0 = 1;break;
                       case 1:switch$0 = 2;break;
                       case 2:switch$0 = 3;break;
                       case 3:switch$0 = 4;break;
                       case 4:switch$0 = 5;break;
                       case 5:switch$0 = 6;break;
                       default:switch$7 = 1}
                    else
                     switch$7 = 1;
                    if(switch$7)var match=-1;
                    break;
                   case 7:
                    var switch$8=0;
                    if(typeof t === "number")
                     switch(t)
                      {case 7:var match=0;break;
                       case 0:switch$0 = 1;break;
                       case 1:switch$0 = 2;break;
                       case 2:switch$0 = 3;break;
                       case 3:switch$0 = 4;break;
                       case 4:switch$0 = 5;break;
                       case 5:switch$0 = 6;break;
                       case 6:switch$0 = 7;break;
                       default:switch$8 = 1}
                    else
                     switch$8 = 1;
                    if(switch$8)var match=-1;
                    break;
                   case 8:
                    var switch$9=0;
                    if(typeof t === "number")
                     switch(t)
                      {case 8:var match=0;break;
                       case 0:switch$0 = 1;break;
                       case 1:switch$0 = 2;break;
                       case 2:switch$0 = 3;break;
                       case 3:switch$0 = 4;break;
                       case 4:switch$0 = 5;break;
                       case 5:switch$0 = 6;break;
                       case 6:switch$0 = 7;break;
                       case 7:switch$0 = 8;break;
                       default:switch$9 = 1}
                    else
                     switch$9 = 1;
                    if(switch$9)var match=-1;
                    break;
                   case 9:
                    var switch$10=0;
                    if(typeof t === "number")
                     switch(t)
                      {case 9:var match=0;break;
                       case 0:switch$0 = 1;break;
                       case 1:switch$0 = 2;break;
                       case 2:switch$0 = 3;break;
                       case 3:switch$0 = 4;break;
                       case 4:switch$0 = 5;break;
                       case 5:switch$0 = 6;break;
                       case 6:switch$0 = 7;break;
                       case 7:switch$0 = 8;break;
                       case 8:switch$0 = 9;break;
                       default:switch$10 = 1}
                    else
                     switch$10 = 1;
                    if(switch$10)var match=-1;
                    break;
                   case 10:
                    var switch$11=0;
                    if(typeof t === "number")
                     switch(t)
                      {case 10:var match=0;break;
                       case 0:switch$0 = 1;break;
                       case 1:switch$0 = 2;break;
                       case 2:switch$0 = 3;break;
                       case 3:switch$0 = 4;break;
                       case 4:switch$0 = 5;break;
                       case 5:switch$0 = 6;break;
                       case 6:switch$0 = 7;break;
                       case 7:switch$0 = 8;break;
                       case 8:switch$0 = 9;break;
                       case 9:switch$0 = 10;break;
                       default:switch$11 = 1}
                    else
                     switch$11 = 1;
                    if(switch$11)var match=-1;
                    break;
                   case 11:
                    var switch$12=0;
                    if(typeof t === "number")
                     switch(t)
                      {case 11:var match=0;break;
                       case 0:switch$0 = 1;break;
                       case 1:switch$0 = 2;break;
                       case 2:switch$0 = 3;break;
                       case 3:switch$0 = 4;break;
                       case 4:switch$0 = 5;break;
                       case 5:switch$0 = 6;break;
                       case 6:switch$0 = 7;break;
                       case 7:switch$0 = 8;break;
                       case 8:switch$0 = 9;break;
                       case 9:switch$0 = 10;break;
                       case 10:switch$0 = 11;break;
                       default:switch$12 = 1}
                    else
                     switch$12 = 1;
                    if(switch$12)var match=-1;
                    break;
                   case 12:
                    var switch$13=0;
                    if(typeof t === "number")
                     switch(t)
                      {case 12:var match=0;break;
                       case 0:switch$0 = 1;break;
                       case 1:switch$0 = 2;break;
                       case 2:switch$0 = 3;break;
                       case 3:switch$0 = 4;break;
                       case 4:switch$0 = 5;break;
                       case 5:switch$0 = 6;break;
                       case 6:switch$0 = 7;break;
                       case 7:switch$0 = 8;break;
                       case 8:switch$0 = 9;break;
                       case 9:switch$0 = 10;break;
                       case 10:switch$0 = 11;break;
                       case 11:switch$0 = 12;break;
                       default:switch$13 = 1}
                    else
                     switch$13 = 1;
                    if(switch$13)var match=-1;
                    break;
                   case 13:
                    var switch$14=0;
                    if(typeof t === "number")
                     switch(t)
                      {case 13:var match=0;break;
                       case 0:switch$0 = 1;break;
                       case 1:switch$0 = 2;break;
                       case 2:switch$0 = 3;break;
                       case 3:switch$0 = 4;break;
                       case 4:switch$0 = 5;break;
                       case 5:switch$0 = 6;break;
                       case 6:switch$0 = 7;break;
                       case 7:switch$0 = 8;break;
                       case 8:switch$0 = 9;break;
                       case 9:switch$0 = 10;break;
                       case 10:switch$0 = 11;break;
                       case 11:switch$0 = 12;break;
                       case 12:switch$0 = 13;break;
                       default:switch$14 = 1}
                    else
                     switch$14 = 1;
                    if(switch$14)var match=-1;
                    break;
                   default:
                    if(typeof t === "number")
                     switch(t)
                      {case 14:var match=0;break;
                       case 0:switch$0 = 1;break;
                       case 1:switch$0 = 2;break;
                       case 2:switch$0 = 3;break;
                       case 3:switch$0 = 4;break;
                       case 4:switch$0 = 5;break;
                       case 5:switch$0 = 6;break;
                       case 6:switch$0 = 7;break;
                       case 7:switch$0 = 8;break;
                       case 8:switch$0 = 9;break;
                       case 9:switch$0 = 10;break;
                       case 10:switch$0 = 11;break;
                       case 11:switch$0 = 12;break;
                       case 12:switch$0 = 13;break;
                       default:switch$0 = 14}
                    else
                     var match=-1}
                else
                 if(0 === x_011[0])
                  {var _ca_=x_011[1];
                   if(typeof t === "number")
                    switch(t)
                     {case 0:switch$0 = 1;break;
                      case 1:switch$0 = 2;break;
                      case 2:switch$0 = 3;break;
                      case 3:switch$0 = 4;break;
                      case 4:switch$0 = 5;break;
                      case 5:switch$0 = 6;break;
                      case 6:switch$0 = 7;break;
                      case 7:switch$0 = 8;break;
                      case 8:switch$0 = 9;break;
                      case 9:switch$0 = 10;break;
                      case 10:switch$0 = 11;break;
                      case 11:switch$0 = 12;break;
                      case 12:switch$0 = 13;break;
                      case 13:switch$0 = 14;break;
                      default:switch$0 = 15}
                   else
                    if(0 === t[0])
                     var
                      b_006=t[1],
                      match=caml_call2(compare_close_event_code,_ca_,b_006);
                    else
                     var match=-1}
                 else
                  {var _cb_=x_011[1];
                   if(typeof t === "number")
                    switch(t)
                     {case 0:switch$0 = 1;break;
                      case 1:switch$0 = 2;break;
                      case 2:switch$0 = 3;break;
                      case 3:switch$0 = 4;break;
                      case 4:switch$0 = 5;break;
                      case 5:switch$0 = 6;break;
                      case 6:switch$0 = 7;break;
                      case 7:switch$0 = 8;break;
                      case 8:switch$0 = 9;break;
                      case 9:switch$0 = 10;break;
                      case 10:switch$0 = 11;break;
                      case 11:switch$0 = 12;break;
                      case 12:switch$0 = 13;break;
                      case 13:switch$0 = 14;break;
                      default:switch$0 = 15}
                   else
                    if(0 === t[0])
                     var match=1;
                    else
                     var
                      b_008=t[1],
                      match=caml_call2(compare_close_event_code,_cb_,b_008)}
                switch(switch$0)
                 {case 1:var match=1;break;
                  case 2:var match=1;break;
                  case 3:var match=1;break;
                  case 4:var match=1;break;
                  case 5:var match=1;break;
                  case 6:var match=1;break;
                  case 7:var match=1;break;
                  case 8:var match=1;break;
                  case 9:var match=1;break;
                  case 10:var match=1;break;
                  case 11:var match=1;break;
                  case 12:var match=1;break;
                  case 13:var match=1;break;
                  case 14:var match=1;break;
                  case 15:var match=1;break
                  }}
              var _cc_=0 === match?1:0;
              if(_cc_)return 0;
              throw [0,Assert_failure,_u_]}
            return caml_call2(Core_kernel_List[9],all,_b$_)};
        caml_call8
         (Ppx_inline_test_lib_Runtime[5],
          Inline_test_config,
          cst_to_int_of_int_round_trip,
          0,
          cst_src_rpc_ml$0,
          98,
          4,
          134,
          _t_);
        var
         close_websocket=
          function(t3,reason)
           {function close(reason)
             {var
               t2=caml_jsstring_of_string(reason),
               t1=to_int(normal_closure);
              return t3.close(t1,t2)}
            try
             {close(reason)}
            catch(_b__){return close(cst_close_reason_was_too_long_)}
            return 0},
         connect_websocket=
          function(url,from_server,to_server)
           {try
             {var
               _bX_=caml_jsstring_of_string(caml_call2(to_string,0,url)),
               t19=new (Js_of_ocaml_WebSockets[1])(_bX_)}
            catch(exn$0)
             {exn$0 = caml_wrap_exception(exn$0);
              if(exn$0[1] === Js_of_ocaml_Js[35])
               {var
                 exn=exn$0[2],
                 _bU_=caml_string_of_jsstring(exn.message),
                 _bV_=caml_call1(Core_kernel_Or_error[40],_bU_);
                return caml_call1(Async_kernel[19],_bV_)}
              var _bW_=caml_call2(Core_kernel_Or_error[36],0,exn$0);
              return caml_call1(Async_kernel[19],_bW_)}
            var connected_ivar=caml_call1(Async_kernel_Ivar[12],0);
            function cleanup(reason)
             {caml_call2(Async_kernel_Ivar[15],connected_ivar,[1,reason]);
              caml_call1(Async_kernel_Pipe[14],from_server);
              caml_call1(Async_kernel_Pipe[15],to_server);
              return close_websocket
                      (t19,caml_call1(Core_kernel_Error[8],reason))}
            function onclose(close_event)
             {var
               match=caml_call1(Async_kernel_Ivar[17],connected_ivar),
               what_happened=match?cst_closed:cst_connection_failed,
               _b7_=of_int(close_event.code),
               _b8_=
                [0,
                 [11,
                  cst_WebSocket,
                  [2,
                   0,
                   [11,
                    cst$2,
                    [24,
                     _w_,
                     function(param,custom_printf_015)
                      {if(typeof custom_printf_015 === "number")
                        switch(custom_printf_015)
                         {case 0:var _b9_=_c_;break;
                          case 1:var _b9_=_d_;break;
                          case 2:var _b9_=_e_;break;
                          case 3:var _b9_=_f_;break;
                          case 4:var _b9_=_g_;break;
                          case 5:var _b9_=_h_;break;
                          case 6:var _b9_=_i_;break;
                          case 7:var _b9_=_j_;break;
                          case 8:var _b9_=_k_;break;
                          case 9:var _b9_=_l_;break;
                          case 10:var _b9_=_m_;break;
                          case 11:var _b9_=_n_;break;
                          case 12:var _b9_=_o_;break;
                          case 13:var _b9_=_p_;break;
                          default:var _b9_=_q_}
                       else
                        if(0 === custom_printf_015[0])
                         var
                          v0=custom_printf_015[1],
                          v0$0=caml_call1(sexp_of_close_event_code,v0),
                          _b9_=[1,[0,_r_,[0,v0$0,0]]];
                        else
                         var
                          v0$1=custom_printf_015[1],
                          v0$2=caml_call1(sexp_of_close_event_code,v0$1),
                          _b9_=[1,[0,_s_,[0,v0$2,0]]];
                       return caml_call2(Sexplib0_Sexp[14],0,_b9_)},
                     _v_]]]],
                 cst_WebSocket_s_sexp_Close_cod],
               reason=caml_call3(Core_kernel[241],_b8_,what_happened,_b7_);
              cleanup(caml_call1(Core_kernel_Error[11],reason));
              return Js_of_ocaml_Js[8]}
            function onmessage(event)
             {var data=caml_call1(Js_of_ocaml_Typed_array[50][3],event.data);
              caml_call2(Async_kernel_Pipe[32],from_server,data);
              return Js_of_ocaml_Js[8]}
            function connected(param)
             {return caml_call2(Async_kernel_Ivar[15],connected_ivar,_x_)}
            t19.binaryType = "arraybuffer";
            var match=t19.readyState;
            if(1 === match)
             connected(0);
            else
             if(match)
              cleanup
               (caml_call1
                 (Core_kernel_Error[11],cst_WebSocket_failed_immediate));
             else
              {var
                _b4_=
                 function(param){connected(0);return Js_of_ocaml_Js[8]};
               t19.onopen = caml_call1(Js_of_ocaml_Dom[10],_b4_)}
            t19.onmessage = caml_call1(Js_of_ocaml_Dom[10],onmessage);
            t19.onclose = caml_call1(Js_of_ocaml_Dom[10],onclose);
            var
             connected_deferred=
              caml_call1(Async_kernel_Ivar[18],connected_ivar);
            function _bY_(param)
             {if(0 === param[0])
               {var
                 _b5_=
                  function(data)
                   {var match=t19.readyState;
                    if(1 === match)
                     {var t18=caml_call1(Js_of_ocaml_Typed_array[50][1],data);
                      return t19.send(t18)}
                    if(match)return 0;
                    var
                     _b6_=
                      caml_call1
                       (Sexplib0_Sexp_conv[7],cst_BUG_onopen_called_but_read);
                    return caml_call1(Core_kernel[238],_b6_)};
                return caml_call5(Async_kernel_Pipe[50],0,0,0,to_server,_b5_)}
              return caml_call1(Async_kernel[19],0)}
            var _bZ_=caml_call2(Async_kernel[22][2],connected_deferred,_bY_);
            caml_call1(Async_kernel[6],_bZ_);
            function _b0_(param)
             {return cleanup
                      (caml_call1
                        (Core_kernel_Error[11],cst_RPC_connection_closed_by_c))}
            var
             _b1_=[0,caml_call1(Async_kernel_Pipe[17],from_server),0],
             _b2_=[0,caml_call1(Async_kernel_Pipe[17],to_server),_b1_],
             _b3_=caml_call1(Async_kernel_Deferred[24],_b2_),
             cleanup_when_a_pipe_is_closed=
              caml_call2(Async_kernel[22][3],_b3_,_b0_);
            caml_call1(Async_kernel[6],cleanup_when_a_pipe_is_closed);
            return connected_deferred},
         client=
          function(opt,heartbeat_config,description,implementations,param)
           {if(opt)
             var sth=opt[1],uri=sth;
            else
             {var
               scheme=
                caml_call2
                  (Core_kernel_String[111],Js_of_ocaml_Url[10][3],cst_https)
                 ?cst_wss
                 :cst_ws,
               _bK_=Js_of_ocaml_Url[10][2];
              if(_bK_)
               var port=_bK_[1],port$0=port;
              else
               var
                port$0=
                 caml_call2
                   (Core_kernel_String[111],Js_of_ocaml_Url[10][3],cst_https$0)
                  ?Js_of_ocaml_Url[4]
                  :Js_of_ocaml_Url[3];
              var
               host=Js_of_ocaml_Url[10][1],
               uri=caml_call8(make,[0,scheme],0,[0,host],[0,port$0],0,0,0,0)}
            var match=[0,[1,[0,_y_,[0,caml_call1(sexp_of_t,uri),0]]],0];
            if(description)
             var
              v=description[1],
              _bL_=
               [0,[1,[0,_z_,[0,caml_call1(Core_kernel_Info[6],v),0]]],match];
            else
             var _bL_=match;
            var
             res=[0,caml_call1(Sexplib0_Sexp_conv[7],cst_websocket),_bL_],
             switch$0=0;
            if(res && ! res[2]){var h=res[1],_bM_=h;switch$0 = 1}
            if(! switch$0)var _bM_=[1,res];
            var
             description$0=caml_call1(Core_kernel_Info[16],_bM_),
             match$0=caml_call2(Async_kernel_Pipe[7],0,0),
             from_server_w=match$0[2],
             from_server_r=match$0[1],
             match$1=caml_call2(Async_kernel_Pipe[7],0,0),
             to_server_w=match$1[2],
             to_server_r=match$1[1];
            function _bN_(error)
             {if(0 === error[0])
               {var
                 transport=
                  caml_call3
                   (Async_rpc_kernel_Pipe_transpor[2],
                    Async_rpc_kernel_Pipe_transpor[1][2],
                    from_server_r,
                    to_server_w),
                 _bP_=
                  function(param)
                   {if(0 === param[0])
                     {var connection=param[1];
                      return caml_call1(Async_kernel[19],[0,connection])}
                    var exn=param[1];
                    function _bR_(param)
                     {var _bT_=caml_call2(Core_kernel_Or_error[36],0,exn);
                      return caml_call1(Async_kernel[19],_bT_)}
                    var
                     _bS_=
                      caml_call1(Async_rpc_kernel_Transport[5],transport);
                    return caml_call2(Async_kernel[22][2],_bS_,_bR_)},
                 create=
                  function(param)
                   {var implementations=param[2],connection_state=param[1];
                    return caml_call7
                            (include[4][4],
                             [0,implementations],
                             connection_state,
                             0,
                             heartbeat_config,
                             [0,description$0],
                             0,
                             transport)};
                if(implementations)
                 var
                  implementations$0=implementations[1],
                  _bQ_=create(implementations$0);
                else
                 var _bQ_=create(caml_call1(include[4][3][1],0));
                return caml_call2(Async_kernel[22][2],_bQ_,_bP_)}
              return caml_call1(Async_kernel[19],error)}
            var _bO_=connect_websocket(uri,from_server_w,to_server_r);
            return caml_call2(Async_kernel[22][2],_bO_,_bN_)},
         client_exn=
          function(uri,heartbeat_config,description,implementations,param)
           {var
             _bI_=Core_kernel_Or_error[35],
             _bJ_=client(uri,heartbeat_config,description,implementations,0);
            return caml_call2(Async_kernel[21],_bJ_,_bI_)},
         Connection=include[4],
         sexp_of_t$0=Connection[1],
         create=Connection[4],
         contains_magic_prefix=Connection[5],
         description=Connection[6],
         add_heartbeat_callback=Connection[7],
         close=Connection[8],
         close_finished=Connection[9],
         close_reason=Connection[10],
         is_closed=Connection[11],
         bytes_to_write=Connection[12],
         flushed=Connection[13],
         with_close=Connection[14],
         server_with_close=Connection[15];
        caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$7);
        caml_call1(Expect_test_collector[4][2],0);
        caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
        caml_call1(Ppx_module_timer_runtime[5],cst_Async_js_Rpc$0);
        var
         _A_=
          [0,
           sexp_of_t$0,
           create,
           contains_magic_prefix,
           description,
           add_heartbeat_callback,
           close,
           close_finished,
           close_reason,
           is_closed,
           bytes_to_write,
           flushed,
           with_close,
           server_with_close,
           client,
           client_exn],
         Async_js_Rpc=[0,_A_];
        caml_register_global(343,Async_js_Rpc,"Async_js__Rpc");
        caml_call1(Ppx_module_timer_runtime[4],cst_Async_js_Persistent_connec);
        caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_js$8);
        caml_call1(Expect_test_collector[4][1],cst_src_persistent_connection_);
        caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$9,cst$3);
        var
         close$0=function(t){return caml_call3(_A_[6],0,0,t)},
         is_closed$0=function(t){return caml_call1(_A_[9],t)},
         close_finished$0=function(t){return caml_call1(_A_[7],t)},
         Rpc=
          caml_call1
           (Persistent_connection_kernel[1],
            [0,
             [0,Core_kernel_Host_and_port[14],Core_kernel_Host_and_port[24]],
             close$0,
             is_closed$0,
             close_finished$0]);
        caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$10);
        caml_call1(Expect_test_collector[4][2],0);
        caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
        caml_call1
         (Ppx_module_timer_runtime[5],cst_Async_js_Persistent_connec$0);
        var Async_js_Persistent_connection=[0,Rpc];
        caml_register_global
         (346,
          Async_js_Persistent_connection,
          "Async_js__Persistent_connection");
        caml_call1(Ppx_module_timer_runtime[4],cst_Async_js_Http);
        caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_js$11);
        caml_call1(Expect_test_collector[4][1],cst_src_http_ml);
        caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$12,cst$4);
        var
         Response_type=[0],
         Response=[0],
         Post_body=[0],
         Method_with_args=[0],
         request=
          function
           (opt,
            on_progress,
            on_upload_progress,
            url,
            response_type,
            method_with_args)
           {if(opt)var sth=opt[1],headers=sth;else var headers=0;
            if(0 === method_with_args[0])
             var
              args=method_with_args[1],
              _bf_=caml_call1(Js_of_ocaml_Url[6],args),
              _be_=caml_call2(Core_kernel_String[33],url,63),
              _bg_=caml_call1(Core_kernel_Option[45],_be_)?cst$5:cst$6,
              _bh_=caml_call2(Core_kernel[15],_bg_,_bf_),
              method_string$1=method_string,
              url$0=caml_call2(Core_kernel[15],url,_bh_);
            else
             var method_string$1=method_string$0,url$0=url;
            var
             t52=caml_call1(Js_of_ocaml_XmlHttpRequest[1],0),
             t1=caml_jsstring_of_string(url$0),
             t0=caml_jsstring_of_string(method_string$1);
            t52.open(t0,t1,Js_of_ocaml_Js[7]);
            switch(response_type)
             {case 0:t52.responseType = "arraybuffer";break;
              case 1:t52.responseType = "blob";break;
              case 2:t52.responseType = "document";break;
              case 3:t52.responseType = "json";break;
              case 4:t52.responseType = "text";break;
              default:t52.responseType = ""}
            function _bi_(param)
             {var
               value=param[2],
               name=param[1],
               t17=caml_jsstring_of_string(value),
               t16=caml_jsstring_of_string(name);
              return t52.setRequestHeader(t16,t17)}
            caml_call2(Core_kernel_List[9],headers,_bi_);
            var response=caml_call1(Async_kernel_Ivar[12],0);
            function _bj_(param)
             {var _bH_=caml_call1(Core_kernel_Or_error[40],cst_Network_error);
              caml_call2(Async_kernel_Ivar[15],response,_bH_);
              return Js_of_ocaml_Js[7]}
            t52.onerror = caml_call1(Js_of_ocaml_Dom[10],_bj_);
            function _bk_(param)
             {var _bG_=caml_call1(Core_kernel_Or_error[40],cst_Timeout);
              caml_call2(Async_kernel_Ivar[15],response,_bG_);
              return Js_of_ocaml_Js[7]}
            t52.ontimeout = caml_call1(Js_of_ocaml_Dom[10],_bk_);
            t52.onreadystatechange
            =
            runtime.caml_js_wrap_callback
             (function(param)
               {var match=t52.readyState;
                if(4 <= match)
                 {var switch$0=0;
                  if
                   (caml_call2(Core_kernel[85],t52.status,200)
                    &&
                    caml_call2(Core_kernel[89],t52.status,300))
                   {var
                     _bq_=
                      function(content)
                       {function get_header(s)
                         {function _bD_(v){return [0,caml_string_of_jsstring(v)]}
                          var t33=runtime.caml_jsbytes_of_string(s);
                          function _bE_(param){return 0}
                          var _bF_=t52.getResponseHeader(t33);
                          return caml_call3(Js_of_ocaml_Js[5][7],_bF_,_bE_,_bD_)}
                        return [0,[0,t52.status,get_header,content]]},
                     get_text_contents_or_error=
                      function(param)
                       {var _bx_=Core_kernel_Result[19];
                        function _by_(param)
                         {var
                           _bz_=caml_string_of_jsstring(t52.statusText),
                           _bA_=
                            [0,[1,[0,_B_,[0,caml_call1(Core_kernel[455],_bz_),0]]],0],
                           _bB_=
                            [0,
                             [1,
                              [0,
                               [1,[0,_C_,[0,caml_call1(Core_kernel[340],t52.status),0]]],
                               _bA_]],
                             0],
                           _bC_=
                            [1,
                             [0,
                              caml_call1
                               (Sexplib0_Sexp_conv[7],cst_No_response_returned_despi),
                              _bB_]];
                          return caml_call1(Core_kernel[218],_bC_)}
                        return caml_call3
                                (Js_of_ocaml_Js[5][7],t52.responseText,_by_,_bx_)};
                    switch(response_type)
                     {case 0:
                       var
                        _br_=
                         [0,caml_call1(Js_of_ocaml_File[3][5],t52.response)];
                       break;
                      case 1:
                       var
                        _br_=
                         [0,caml_call1(Js_of_ocaml_File[3][2],t52.response)];
                       break;
                      case 2:
                       var
                        _br_=
                         [0,caml_call1(Js_of_ocaml_File[3][1],t52.response)];
                       break;
                      case 3:
                       var
                        _br_=
                         [0,caml_call1(Js_of_ocaml_File[3][3],t52.response)];
                       break;
                      case 4:var _br_=get_text_contents_or_error(0);break;
                      default:
                       var
                        _bs_=get_text_contents_or_error(0),
                        _br_=
                         caml_call2
                          (Core_kernel_Or_error[46],_bs_,caml_string_of_jsstring)}
                    var res=caml_call2(Base_Or_error[24][4][2],_br_,_bq_);
                    switch$0 = 1}
                  if(! switch$0)
                   var
                    _bt_=caml_string_of_jsstring(t52.statusText),
                    _bu_=
                     [0,[1,[0,_D_,[0,caml_call1(Core_kernel[455],_bt_),0]]],0],
                    _bv_=
                     [0,
                      [1,
                       [0,
                        [1,[0,_E_,[0,caml_call1(Core_kernel[340],t52.status),0]]],
                        _bu_]],
                      0],
                    _bw_=
                     [1,
                      [0,
                       caml_call1(Sexplib0_Sexp_conv[7],cst_Request_failed),
                       _bv_]],
                    res=caml_call1(Core_kernel_Or_error[39],_bw_);
                  return caml_call2(Async_kernel_Ivar[15],response,res)}
                return 0});
            function _bl_(on_progress)
             {function _bp_(e)
               {caml_call2(on_progress,e.loaded,e.total);
                return Js_of_ocaml_Js[7]}
              return t52.onprogress = caml_call1(Js_of_ocaml_Dom[10],_bp_)}
            caml_call2(Core_kernel_Option[19],on_progress,_bl_);
            function _bm_(upload)
             {function _bn_(on_upload_progress)
               {function _bo_(e)
                 {caml_call2(on_upload_progress,e.loaded,e.total);
                  return Js_of_ocaml_Js[7]}
                return upload.onprogress
                       =
                       caml_call1(Js_of_ocaml_Dom[10],_bo_)}
              return caml_call2
                      (Core_kernel_Option[19],on_upload_progress,_bn_)}
            caml_call2(Js_of_ocaml_Js[6][6],t52.upload,_bm_);
            if(0 === method_with_args[0])
             t52.send(Js_of_ocaml_Js[1]);
            else
             {var body=method_with_args[1];
              if(body)
               {var body$0=body[1];
                switch(body$0[0])
                 {case 0:var b=body$0[1];t52.send(b);break;
                  case 1:var d=body$0[1];t52.send(d);break;
                  case 2:
                   var
                    s=body$0[1],
                    t57=caml_call1(Js_of_ocaml_Js[2],caml_jsstring_of_string(s));
                   t52.send(t57);
                   break;
                  default:var fd=body$0[1];t52.send(fd)}}
              else
               t52.send(Js_of_ocaml_Js[1])}
            return caml_call1(Async_kernel_Ivar[18],response)},
         get=
          function(opt,url)
           {if(opt)var sth=opt[1],arguments$0=sth;else var arguments$0=0;
            function _bc_(resp){return resp[3]}
            var _bd_=request(0,0,0,url,5,[0,arguments$0]);
            return caml_call2(Async_kernel_Deferred_or_error[14],_bd_,_bc_)},
         post=
          function(body,url)
           {function _ba_(resp){return resp[3]}
            var _bb_=request(0,0,0,url,5,[1,body]);
            return caml_call2(Async_kernel_Deferred_or_error[14],_bb_,_ba_)};
        caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$13);
        caml_call1(Expect_test_collector[4][2],0);
        caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
        caml_call1(Ppx_module_timer_runtime[5],cst_Async_js_Http$0);
        var
         Async_js_Http=
          [0,
           Response_type,
           Post_body,
           Method_with_args,
           Response,
           request,
           get,
           post];
        caml_register_global(353,Async_js_Http,"Async_js__Http");
        caml_call1(Ppx_module_timer_runtime[4],cst_Async_js_Debug);
        caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_js$14);
        caml_call1(Expect_test_collector[4][1],cst_src_debug_ml);
        caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$15,cst$7);
        var
         is_valid_field_name=
          function(seen,name)
           {if(caml_call2(Core_kernel_String[111],name,cst$8))
             var _a__=0;
            else
             {var
               match=runtime.caml_string_get(name,0),
               switcher=match - 48 | 0;
              if(9 < switcher >>> 0)
               var
                _a9_=
                 function(param)
                  {var switch$0=0;
                   if(91 <= param)
                    {if(97 <= param)
                      {if(! (123 <= param))switch$0 = 1}
                     else
                      if(95 === param)switch$0 = 1}
                   else
                    if(58 <= param)
                     {if(65 <= param)switch$0 = 1}
                    else
                     if(48 <= param)switch$0 = 1;
                   return switch$0?1:0},
                _a__=caml_call2(Core_kernel_String[11],name,_a9_);
              else
               var _a__=0}
            var _a$_=_a__?1 - caml_call2(Core_kernel_Set[10],seen,name):_a__;
            return _a$_},
         any_of_sexp=
          function(param)
           {if(0 === param[0])
             {var s=param[1];return caml_jsstring_of_string(s)}
            var _a0_=param[1];
            if(_a0_)
             {var _a1_=_a0_[1];
              if(0 === _a1_[0])
               {var _a2_=_a0_[2];
                if(_a2_ && ! _a2_[2])
                 {var v$0=_a2_[1],name$1=_a1_[1];
                  return caml_js_object([0,[0,name$1,any_of_sexp(v$0)]])}}}
            var seen=Core_kernel_String[126][55],rev_acc=0,list=_a0_;
            for(;;)
             {if(list)
               {var _aW_=list[1];
                if(0 === _aW_[0])
                 {var rest=list[2],name=_aW_[1];
                  if(is_valid_field_name(seen,name))
                   {var
                     rev_acc$0=[0,[0,name,0],rev_acc],
                     seen$0=caml_call2(Core_kernel_Set[11],seen,name),
                     seen=seen$0,
                     rev_acc=rev_acc$0,
                     list=rest;
                    continue}}
                else
                 {var _aX_=_aW_[1];
                  if(_aX_)
                   {var _aY_=_aX_[1];
                    if(0 === _aY_[0])
                     {var _aZ_=_aX_[2];
                      if(_aZ_ && ! _aZ_[2])
                       {var rest$0=list[2],v=_aZ_[1],name$0=_aY_[1];
                        if(is_valid_field_name(seen,name$0))
                         {var
                           rev_acc$1=[0,[0,name$0,[0,v]],rev_acc],
                           seen$1=caml_call2(Core_kernel_Set[11],seen,name$0),
                           seen=seen$1,
                           rev_acc=rev_acc$1,
                           list=rest$0;
                          continue}}}}}
                var match=0}
              else
               var match=[0,caml_call1(Core_kernel_List[34],rev_acc)];
              if(match)
               {var _a3_=match[1];
                if(_a3_)
                 {var
                   _a4_=
                    function(param)
                     {var _a7_=param[2],_a8_=param[1];
                      if(_a7_){var v=_a7_[1];return [0,_a8_,any_of_sexp(v)]}
                      return [0,_a8_,Js_of_ocaml_Js[1]]},
                   _a5_=caml_call2(Core_kernel_List[71],_a3_,_a4_);
                  return caml_js_object
                          (caml_call1(Core_kernel_Array[48],_a5_))}
                return caml_js_from_array([0])}
              var _a6_=caml_call2(Core_kernel_List[71],_a0_,any_of_sexp);
              return caml_js_from_array
                      (caml_call1(Core_kernel_Array[48],_a6_))}},
         log_s=
          function(sexp)
           {var t0=any_of_sexp(sexp);return Js_of_ocaml_Firebug[1].log(t0)},
         Expect_test_collector$0=
          caml_call1(Expect_test_collector[2],Expect_test_config),
         _F_=
          function(param)
           {function sexp_of_t(param)
             {if(param)
               {var
                 v_field2=param[2],
                 v_field1=param[1],
                 arg$1=caml_call2(Core_kernel[438],Core_kernel[455],v_field2),
                 bnds$0=[0,[1,[0,_H_,[0,arg$1,0]]],0],
                 v_some_name=v_field1[1],
                 arg=caml_call1(Core_kernel[455],v_some_name),
                 bnds=[0,[1,[0,_G_,[0,arg,0]]],0],
                 arg$0=[1,bnds],
                 bnds$1=[0,[1,[0,_I_,[0,arg$0,0]]],bnds$0];
                return [1,[0,_J_,bnds$1]]}
              return _K_}
            function to_string(any)
             {return caml_string_of_jsstring
                      (Js_of_ocaml_Js[36].stringify(any))}
            var _aS_=to_string(any_of_sexp(sexp_of_t(0)));
            caml_call1(Core_kernel[29],_aS_);
            var
             _aT_=
              [0,
               caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$0),
               67,
               1972,
               1976,
               1982];
            caml_call1(Expect_test_collector$0[1],_aT_);
            var _aU_=to_string(any_of_sexp(sexp_of_t(_L_)));
            caml_call1(Core_kernel[29],_aU_);
            var
             _aV_=
              [0,
               caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$1),
               73,
               2159,
               2163,
               2169];
            return caml_call1(Expect_test_collector$0[1],_aV_)},
         _M_=
          [0,
           caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$2),
           67,
           1972,
           1983,
           1994],
         _P_=
          [0,
           [0,
            _O_,
            _N_,
            [0,
             caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$3),
             67,
             1972,
             1976,
             1982],
            _M_],
           0],
         _Q_=
          [0,
           caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$4),
           73,
           2159,
           2170,
           2245],
         _T_=
          [0,
           [0,
            _S_,
            _R_,
            [0,
             caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$5),
             73,
             2159,
             2163,
             2169],
            _Q_],
           _P_],
         _U_=
          [0,
           caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$7),
           49,
           1532,
           1532,
           2246],
         _V_=
          caml_call1
           (Expect_test_common_File[4][3],cst_4d5dd5245b57e1bdb16258be9f);
        caml_call9
         (Expect_test_collector$0[3],
          _V_,
          _U_,
          cst_src_debug_ml$6,
          0,
          0,
          _T_,
          0,
          Inline_test_config,
          _F_);
        var
         Expect_test_collector$1=
          caml_call1(Expect_test_collector[2],Expect_test_config),
         _W_=
          function(param)
           {var
             sexp_with_duplicate_keys=
              caml_call1(Core_kernel_Sexp[73],cst_A_B_A_C),
             any=any_of_sexp(sexp_with_duplicate_keys),
             _aQ_=caml_string_of_jsstring(Js_of_ocaml_Js[36].stringify(any));
            caml_call1(Core_kernel[29],_aQ_);
            var
             _aR_=
              [0,
               caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$8),
               82,
               2575,
               2579,
               2585];
            return caml_call1(Expect_test_collector$1[1],_aR_)},
         _X_=
          [0,
           caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$9),
           82,
           2575,
           2586,
           2613],
         ___=
          [0,
           [0,
            _Z_,
            _Y_,
            [0,
             caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$10),
             82,
             2575,
             2579,
             2585],
            _X_],
           0],
         _aa_=
          [0,
           caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$12),
           76,
           2251,
           2251,
           2614],
         _ab_=
          caml_call1
           (Expect_test_common_File[4][3],cst_4d5dd5245b57e1bdb16258be9f$0);
        caml_call9
         (Expect_test_collector$1[3],
          _ab_,
          _aa_,
          cst_src_debug_ml$11,
          _$_,
          0,
          ___,
          0,
          Inline_test_config,
          _W_);
        var
         Expect_test_collector$2=
          caml_call1(Expect_test_collector[2],Expect_test_config),
         _ac_=
          function(param)
           {function _aN_(i){return [0,caml_call2(Core_kernel[241],_ad_,i),i]}
            var a=caml_call2(Core_kernel_Array[37],10000,_aN_);
            function _aO_(param)
             {var
               v1=param[2],
               v0=param[1],
               v0$0=caml_call1(Core_kernel[455],v0),
               v1$0=caml_call1(Core_kernel[340],v1);
              return [1,[0,v0$0,[0,v1$0,0]]]}
            var
             sexp=caml_call1(caml_call1(Core_kernel[272],_aO_),a),
             x=any_of_sexp(sexp);
            caml_call2(Core_kernel[235],_ae_,x.f999);
            var
             _aP_=
              [0,
               caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$13),
               90,
               2844,
               2848,
               2854];
            return caml_call1(Expect_test_collector$2[1],_aP_)},
         _af_=
          [0,
           caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$14),
           90,
           2844,
           2855,
           2864],
         _ai_=
          [0,
           [0,
            _ah_,
            _ag_,
            [0,
             caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$15),
             90,
             2844,
             2848,
             2854],
            _af_],
           0],
         _ak_=
          [0,
           caml_call1(Expect_test_common_File[1][6],cst_src_debug_ml$17),
           85,
           2619,
           2619,
           2865],
         _al_=
          caml_call1
           (Expect_test_common_File[4][3],cst_4d5dd5245b57e1bdb16258be9f$1);
        caml_call9
         (Expect_test_collector$2[3],
          _al_,
          _ak_,
          cst_src_debug_ml$16,
          _aj_,
          0,
          _ai_,
          0,
          Inline_test_config,
          _ac_);
        caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$16);
        caml_call1(Expect_test_collector[4][2],0);
        caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
        caml_call1(Ppx_module_timer_runtime[5],cst_Async_js_Debug$0);
        var Async_js_Debug=[0,log_s,any_of_sexp];
        caml_register_global(360,Async_js_Debug,"Async_js__Debug");
        caml_call1(Ppx_module_timer_runtime[4],cst_Async_js_Async_js0);
        caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_js$17);
        caml_call1(Expect_test_collector[4][1],cst_src_async_js0_ml);
        caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$18,cst$9);
        var
         sleep=
          function(d)
           {var _aM_=caml_call1(Core_kernel_Time_ns[1][80],d);
            return caml_call1(Async_kernel_Clock_ns[4],_aM_)},
         yield$0=
          function(param)
           {var _aL_=caml_call1(Async_kernel_Scheduler[2],0);
            return caml_call1(Async_kernel_Scheduler[64],_aL_)},
         extract_js_error=[0,function(param){return 0}],
         state=[0,0],
         timeouts=caml_call1(Core_kernel_Stack[22],0),
         run_after=
          function(f,ms){caml_call2(Js_of_ocaml_Dom_html[118],f,ms);return 0},
         loop=
          function(param)
           {var
             t=caml_call1(Async_kernel_Scheduler[2],0),
             _aD_=state[1],
             match=caml_call1(Async_kernel_Scheduler[19],t);
            if(! match && 1 !== _aD_)
             {state[1] = 1;
              caml_call1(Async_kernel_Scheduler[13],t);
              if(caml_call1(Async_kernel_Scheduler[39],t))
               var next_wakeup=1;
              else
               {var match$0=caml_call1(Async_kernel_Scheduler[16],t);
                if(match$0)
                 var
                  next=match$0[1],
                  now=caml_call1(Core_kernel_Time_ns[62],0),
                  d=caml_call2(Core_kernel_Time_ns[69],next,now),
                  d_ms$0=caml_call1(Core_kernel_Time_ns[1][89],d),
                  _aJ_=
                   caml_call2(Core_kernel_Float[122],d_ms$0,0.)
                    ?1
                    :[0,next,d_ms$0],
                  _aK_=_aJ_;
                else
                 var _aK_=0;
                var next_wakeup=_aK_}
              var
               _aE_=
                function(param)
                 {var
                   exn=param[1],
                   exn$0=caml_call1(Async_kernel_Monitor[13],exn);
                  if(exn$0[1] === Js_of_ocaml_Js[35])
                   {var err=exn$0[2];return caml_call1(Js_of_ocaml_Js[34],err)}
                  var match=caml_call1(extract_js_error[1],exn$0);
                  if(match)
                   {var
                     err$0=match[1],
                     t0=caml_jsstring_of_string(caml_call1(Base_Exn[9],exn$0));
                    Js_of_ocaml_Firebug[1].error(t0);
                    return caml_call1(Js_of_ocaml_Js[34],err$0)}
                  throw exn$0},
               _aF_=caml_call1(Async_kernel_Scheduler[20],t);
              caml_call2(Core_kernel_Option[19],_aF_,_aE_);
              if(typeof next_wakeup === "number")
               return next_wakeup
                       ?(state[1] = 2,run_after(loop,0.))
                       :(state[1] = 0,0);
              var d_ms=next_wakeup[2],at=next_wakeup[1];
              state[1] = 0;
              var _aG_=caml_call1(Core_kernel_Stack[6],timeouts);
              if(_aG_)
               var _aH_=_aG_;
              else
               var
                _aI_=caml_call1(Core_kernel_Stack[28],timeouts),
                _aH_=caml_call2(Core_kernel_Time_ns[19],at,_aI_);
              return _aH_
                      ?(caml_call2(Core_kernel_Stack[24],timeouts,at),
                        run_after(run_timeout,d_ms))
                      :_aH_}
            return 0},
         run_timeout=
          function(param)
           {caml_call1(Core_kernel_Stack[26],timeouts);return loop(0)},
         run=
          function(param)
           {return state[1]?0:(run_after(loop,0.),state[1] = 2,0)},
         log=
          function(name,exn)
           {var exn$0=caml_call1(Async_kernel_Monitor[13],exn);
            if(exn$0[1] === Js_of_ocaml_Js[35])
             var err=exn$0[2],exn$1=[0,16617,err];
            else
             {var match$0=caml_call1(extract_js_error[1],exn$0);
              if(match$0)
               var err$2=match$0[1],_aC_=[0,566177629,[0,exn$0,err$2]];
              else
               var _aC_=[0,3458171,exn$0];
              var exn$1=_aC_}
            var _aB_=exn$1[1];
            if(3458171 === _aB_)
             {var
               exn$2=exn$1[2],
               t6=caml_jsstring_of_string(caml_call1(Base_Exn[9],exn$2)),
               t5=caml_jsstring_of_string(name);
              return Js_of_ocaml_Firebug[1].error(t5,t6)}
            if(566177629 <= _aB_)
             {var
               match=exn$1[2],
               err$0=match[2],
               exn$3=match[1],
               t9=caml_jsstring_of_string(caml_call1(Base_Exn[9],exn$3)),
               t8=caml_jsstring_of_string(name);
              return Js_of_ocaml_Firebug[1].error(t8,t9,err$0)}
            var err$1=exn$1[2],t2=caml_jsstring_of_string(name);
            return Js_of_ocaml_Firebug[1].error(t2,err$1)},
         initialized_ref=[0,0],
         initialization=
          [246,
           function(_au_)
            {var t=caml_call1(Async_kernel_Scheduler[2],0);
             initialized_ref[1] = 1;
             function _av_(param){return run(0)}
             caml_call2(Async_kernel_Scheduler[46],t,_av_);
             function _aw_(param){return run(0)}
             caml_call2(Async_kernel_Scheduler[47],t,_aw_);
             caml_call2(Async_kernel_Scheduler[45],t,run);
             function _ax_(_aA_)
              {return log(cst_Async_kernel_Monitor_try_w,_aA_)}
             Async_kernel_Monitor[25][1][1] = _ax_;
             function _ay_(_az_)
              {return log(cst_Async_kernel_Unhandled_exc,_az_)}
             caml_call2(Async_kernel_Monitor[9],Async_kernel_Monitor[24],_ay_);
             return run(0)}],
         init=
          function(param){return caml_call1(Core_kernel[222],initialization)},
         initialized=function(param){return initialized_ref[1]},
         set_extract_js_error=function(f){extract_js_error[1] = f;return 0},
         js_string_compare=
          function(s)
           {var compare_using_javascript_tripl=Core_kernel[231];
            return caml_call1
                    (compare_using_javascript_tripl,caml_jsstring_of_string(s))},
         readystatechange_ev=
          caml_call1(Js_of_ocaml_Dom[14][1],ready_state_change),
         add_event=
          function(target,evt,handler)
           {caml_call4
             (Js_of_ocaml_Dom_html[17],target,evt,handler,Js_of_ocaml_Js[8]);
            return 0},
         document_loaded=
          function(param)
           {var _am_=Js_of_ocaml_Dom_html[2].readyState;
            if(caml_call1(js_string_compare(complete),_am_))
             return Async_kernel_Deferred[18];
            var loaded=caml_call1(Async_kernel_Ivar[12],0);
            function handler(evt)
             {var
               _aq_=evt.type,
               _ar_=1 - caml_call1(js_string_compare(ready_state_change),_aq_);
              if(_ar_)
               var _as_=_ar_;
              else
               var
                _at_=Js_of_ocaml_Dom_html[2].readyState,
                _as_=caml_call1(js_string_compare(complete),_at_);
              if(_as_)caml_call2(Async_kernel_Ivar[15],loaded,0);
              return Js_of_ocaml_Js[7]}
            var _an_=caml_call1(Js_of_ocaml_Dom[10],handler);
            add_event
             (Js_of_ocaml_Dom_html[2],Js_of_ocaml_Dom_html[15][50],_an_);
            var _ao_=caml_call1(Js_of_ocaml_Dom[10],handler);
            add_event(Js_of_ocaml_Dom_html[2],readystatechange_ev,_ao_);
            var _ap_=caml_call1(Js_of_ocaml_Dom[10],handler);
            add_event
             (Js_of_ocaml_Dom_html[8],Js_of_ocaml_Dom_html[15][32],_ap_);
            return caml_call1(Async_kernel_Ivar[18],loaded)};
        caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$19);
        caml_call1(Expect_test_collector[4][2],0);
        caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
        caml_call1(Ppx_module_timer_runtime[5],cst_Async_js_Async_js0$0);
        var
         include$0=
          [0,
           sleep,
           yield$0,
           init,
           initialized,
           set_extract_js_error,
           document_loaded];
        caml_register_global(369,include$0,"Async_js__Async_js0");
        caml_call1(Ppx_module_timer_runtime[4],cst_Async_js);
        caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_js$20);
        caml_call1(Expect_test_collector[4][1],cst_src_async_js_ml);
        caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_js$21,cst$10);
        caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_js$22);
        caml_call1(Expect_test_collector[4][2],0);
        caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
        caml_call1(Ppx_module_timer_runtime[5],cst_Async_js$0);
        var
         Async_js$0=
          [0,
           sleep,
           yield$0,
           init,
           initialized,
           set_extract_js_error,
           document_loaded,
           log_s];
        caml_register_global(370,Async_js$0,"Async_js");
        return}}}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJhc3luY19qcy5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
