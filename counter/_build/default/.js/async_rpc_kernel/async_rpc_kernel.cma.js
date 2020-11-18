(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_fresh_oo_id=runtime.caml_fresh_oo_id,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_register_global=runtime.caml_register_global,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_trampoline=runtime.caml_trampoline,
     caml_trampoline_return=runtime.caml_trampoline_return,
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
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
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
     cst_t=caml_string_of_jsbytes("t"),
     cst_Async_rpc_kernel_Nat0=
      caml_string_of_jsbytes("Async_rpc_kernel__Nat0"),
     cst_async_rpc_kernel=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_nat0_ml=caml_string_of_jsbytes("src/nat0.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_async_rpc_kernel$0=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_899e2f4a_490a_11e6_b68f_bb=
      caml_string_of_jsbytes("899e2f4a-490a-11e6-b68f-bbd62472516c"),
     cst_async_rpc_kernel$1=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_Async_rpc_kernel_Nat0$0=
      caml_string_of_jsbytes("Async_rpc_kernel__Nat0"),
     cst_src_writer_with_length_ml$0=
      caml_string_of_jsbytes("src/writer_with_length.ml"),
     cst_for_len_0_to_Int_pow_2_10_=
      caml_string_of_jsbytes
       (": <<for len = 0 to Int.pow 2 10 do test len done;[...]>>"),
     cst_Async_rpc_kernel_Writer_wi=
      caml_string_of_jsbytes("Async_rpc_kernel__Writer_with_length"),
     cst_async_rpc_kernel$2=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_writer_with_length_ml=
      caml_string_of_jsbytes("src/writer_with_length.ml"),
     cst$0=caml_string_of_jsbytes(""),
     cst_async_rpc_kernel$3=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_writer_with_length_ml$1=
      caml_string_of_jsbytes("src/writer_with_length.ml"),
     cst$1=caml_string_of_jsbytes(""),
     cst_async_rpc_kernel$4=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_Async_rpc_kernel_Writer_wi$0=
      caml_string_of_jsbytes("Async_rpc_kernel__Writer_with_length"),
     cst_name$0=caml_string_of_jsbytes("name"),
     cst_version$0=caml_string_of_jsbytes("version"),
     cst_version$1=caml_string_of_jsbytes("version"),
     cst_name$1=caml_string_of_jsbytes("name"),
     cst_src_description_ml_Stable_=
      caml_string_of_jsbytes("src/description.ml.Stable.V1.t"),
     cst_Async_rpc_kernel_Descripti=
      caml_string_of_jsbytes("Async_rpc_kernel__Description"),
     cst_async_rpc_kernel$5=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_description_ml=caml_string_of_jsbytes("src/description.ml"),
     cst$2=caml_string_of_jsbytes(""),
     cst_async_rpc_kernel$6=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_version=caml_string_of_jsbytes("version"),
     cst_name=caml_string_of_jsbytes("name"),
     cst_t$0=caml_string_of_jsbytes("t"),
     cst_src_description_ml_5_4=
      caml_string_of_jsbytes("src/description.ml:5:4"),
     cst_t$1=caml_string_of_jsbytes("t"),
     tp_loc=caml_string_of_jsbytes("src/description.ml.Stable.V1.t"),
     cst_async_rpc_kernel$7=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_Async_rpc_kernel_Descripti$0=
      caml_string_of_jsbytes("Async_rpc_kernel__Description"),
     cst_src_protocol_ml_Message_ne=
      caml_string_of_jsbytes("src/protocol.ml.Message.needs_length"),
     cst_needs_length$8=caml_string_of_jsbytes("needs_length"),
     err$0=
      [2,
       caml_string_of_jsbytes
        ("src/protocol.ml.Stream_response_data.needs_length")],
     cst_needs_length$6=caml_string_of_jsbytes("needs_length"),
     cst_src_protocol_ml_Stream_ini=
      caml_string_of_jsbytes("src/protocol.ml.Stream_initial_message.t"),
     cst_t$9=caml_string_of_jsbytes("t"),
     err=
      [2,caml_string_of_jsbytes("src/protocol.ml.Stream_query.needs_length")],
     cst_needs_length$4=caml_string_of_jsbytes("needs_length"),
     cst_src_protocol_ml_Response_n=
      caml_string_of_jsbytes("src/protocol.ml.Response.needs_length"),
     cst_needs_length$2=caml_string_of_jsbytes("needs_length"),
     cst_src_protocol_ml_Query_need=
      caml_string_of_jsbytes("src/protocol.ml.Query.needs_length"),
     cst_needs_length$0=caml_string_of_jsbytes("needs_length"),
     cst_t$7=caml_string_of_jsbytes("t"),
     cst_src_protocol_ml$0=caml_string_of_jsbytes("src/protocol.ml"),
     cst_Version$0=caml_string_of_jsbytes("Version"),
     cst_Version$1=caml_string_of_jsbytes("Version"),
     cst_bin_io_exn=caml_string_of_jsbytes("bin_io_exn"),
     cst_Bin_io_exn$0=caml_string_of_jsbytes("Bin_io_exn"),
     cst_Connection_closed=caml_string_of_jsbytes("Connection_closed"),
     cst_Uncaught_exn$0=caml_string_of_jsbytes("Uncaught_exn"),
     cst_Unimplemented_rpc$0=caml_string_of_jsbytes("Unimplemented_rpc"),
     cst_Unknown_query_id$0=caml_string_of_jsbytes("Unknown_query_id"),
     cst_Write_error$0=caml_string_of_jsbytes("Write_error"),
     cst_connection_closed=caml_string_of_jsbytes("connection_closed"),
     cst_uncaught_exn=caml_string_of_jsbytes("uncaught_exn"),
     cst_unimplemented_rpc=caml_string_of_jsbytes("unimplemented_rpc"),
     cst_unknown_query_id=caml_string_of_jsbytes("unknown_query_id"),
     cst_write_error=caml_string_of_jsbytes("write_error"),
     cst_bin_io_exn$0=caml_string_of_jsbytes("bin_io_exn"),
     cst_Bin_io_exn$1=caml_string_of_jsbytes("Bin_io_exn"),
     cst_Connection_closed$0=caml_string_of_jsbytes("Connection_closed"),
     cst_Uncaught_exn$1=caml_string_of_jsbytes("Uncaught_exn"),
     cst_Unimplemented_rpc$1=caml_string_of_jsbytes("Unimplemented_rpc"),
     cst_Unknown_query_id$1=caml_string_of_jsbytes("Unknown_query_id"),
     cst_Write_error$1=caml_string_of_jsbytes("Write_error"),
     cst_connection_closed$0=caml_string_of_jsbytes("connection_closed"),
     cst_uncaught_exn$0=caml_string_of_jsbytes("uncaught_exn"),
     cst_unimplemented_rpc$0=caml_string_of_jsbytes("unimplemented_rpc"),
     cst_unknown_query_id$0=caml_string_of_jsbytes("unknown_query_id"),
     cst_write_error$0=caml_string_of_jsbytes("write_error"),
     cst_src_protocol_ml_Rpc_error_$0=
      caml_string_of_jsbytes("src/protocol.ml.Rpc_error.T.t"),
     cst_src_protocol_ml_Rpc_error_=
      caml_string_of_jsbytes("src/protocol.ml.Rpc_error.T.t"),
     cst_Async_rpc_kernel_Protocol=
      caml_string_of_jsbytes("Async_rpc_kernel__Protocol"),
     cst_async_rpc_kernel$8=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_protocol_ml=caml_string_of_jsbytes("src/protocol.ml"),
     cst$3=caml_string_of_jsbytes(""),
     cst_async_rpc_kernel$9=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_t$2=caml_string_of_jsbytes("t"),
     cst_src_protocol_ml_16_2=caml_string_of_jsbytes("src/protocol.ml:16:2"),
     cst_t$3=caml_string_of_jsbytes("t"),
     cst_Unknown_query_id=caml_string_of_jsbytes("Unknown_query_id"),
     cst_Version=caml_string_of_jsbytes("Version"),
     cst_src_protocol_ml_41_41=caml_string_of_jsbytes("src/protocol.ml:41:41"),
     cst_Unimplemented_rpc=caml_string_of_jsbytes("Unimplemented_rpc"),
     cst_Uncaught_exn=caml_string_of_jsbytes("Uncaught_exn"),
     cst_Write_error=caml_string_of_jsbytes("Write_error"),
     cst_Bin_io_exn=caml_string_of_jsbytes("Bin_io_exn"),
     cst_t$4=caml_string_of_jsbytes("t"),
     cst_src_protocol_ml_36_4=caml_string_of_jsbytes("src/protocol.ml:36:4"),
     cst_t$5=caml_string_of_jsbytes("t"),
     tp_loc$0=caml_string_of_jsbytes("src/protocol.ml.Rpc_error.T.t"),
     cst_src_protocol_ml$1=caml_string_of_jsbytes("src/protocol.ml"),
     cst_src_protocol_ml$2=caml_string_of_jsbytes("src/protocol.ml"),
     cst_src_protocol_ml$3=caml_string_of_jsbytes("src/protocol.ml"),
     cst_src_protocol_ml$4=caml_string_of_jsbytes("src/protocol.ml"),
     cst_b994a02f0f1fc5a7441e1529c5=
      caml_string_of_jsbytes("b994a02f0f1fc5a7441e1529c57785ca"),
     cst_a=caml_string_of_jsbytes("a"),
     cst_src_protocol_ml_56_15=caml_string_of_jsbytes("src/protocol.ml:56:15"),
     cst_a$0=caml_string_of_jsbytes("a"),
     cst_t$6=caml_string_of_jsbytes("t"),
     cst_src_protocol_ml_56_2=caml_string_of_jsbytes("src/protocol.ml:56:2"),
     cst_a$1=caml_string_of_jsbytes("a"),
     cst_src_protocol_ml_66_16=caml_string_of_jsbytes("src/protocol.ml:66:16"),
     cst_data=caml_string_of_jsbytes("data"),
     cst_id=caml_string_of_jsbytes("id"),
     cst_version$2=caml_string_of_jsbytes("version"),
     cst_tag=caml_string_of_jsbytes("tag"),
     cst_a$2=caml_string_of_jsbytes("a"),
     cst_needs_length=caml_string_of_jsbytes("needs_length"),
     cst_src_protocol_ml_62_2=caml_string_of_jsbytes("src/protocol.ml:62:2"),
     cst_a$3=caml_string_of_jsbytes("a"),
     cst_src_protocol_ml_75_13=caml_string_of_jsbytes("src/protocol.ml:75:13"),
     cst_data$0=caml_string_of_jsbytes("data"),
     cst_id$0=caml_string_of_jsbytes("id"),
     cst_a$4=caml_string_of_jsbytes("a"),
     cst_needs_length$1=caml_string_of_jsbytes("needs_length"),
     cst_src_protocol_ml_73_2=caml_string_of_jsbytes("src/protocol.ml:73:2"),
     cst_Abort=caml_string_of_jsbytes("Abort"),
     cst_a$5=caml_string_of_jsbytes("a"),
     cst_src_protocol_ml_82_36=caml_string_of_jsbytes("src/protocol.ml:82:36"),
     cst_Query=caml_string_of_jsbytes("Query"),
     cst_src_protocol_ml_82_25=caml_string_of_jsbytes("src/protocol.ml:82:25"),
     cst_a$6=caml_string_of_jsbytes("a"),
     cst_needs_length$3=caml_string_of_jsbytes("needs_length"),
     cst_src_protocol_ml_82_2=caml_string_of_jsbytes("src/protocol.ml:82:2"),
     cst_error=caml_string_of_jsbytes("error"),
     cst_src_protocol_ml_90_36=caml_string_of_jsbytes("src/protocol.ml:90:36"),
     cst_response=caml_string_of_jsbytes("response"),
     cst_src_protocol_ml_90_25=caml_string_of_jsbytes("src/protocol.ml:90:25"),
     cst_initial=caml_string_of_jsbytes("initial"),
     cst_unused_query_id=caml_string_of_jsbytes("unused_query_id"),
     cst_error$0=caml_string_of_jsbytes("error"),
     cst_response$0=caml_string_of_jsbytes("response"),
     cst_t$8=caml_string_of_jsbytes("t"),
     cst_src_protocol_ml_88_2=caml_string_of_jsbytes("src/protocol.ml:88:2"),
     cst_Eof=caml_string_of_jsbytes("Eof"),
     cst_a$7=caml_string_of_jsbytes("a"),
     cst_src_protocol_ml_96_33=caml_string_of_jsbytes("src/protocol.ml:96:33"),
     cst_Ok=caml_string_of_jsbytes("Ok"),
     cst_src_protocol_ml_96_25=caml_string_of_jsbytes("src/protocol.ml:96:25"),
     cst_a$8=caml_string_of_jsbytes("a"),
     cst_needs_length$5=caml_string_of_jsbytes("needs_length"),
     cst_src_protocol_ml_96_2=caml_string_of_jsbytes("src/protocol.ml:96:2"),
     cst_a$9=caml_string_of_jsbytes("a"),
     cst_src_protocol_ml_105_19=
      caml_string_of_jsbytes("src/protocol.ml:105:19"),
     cst_Response=caml_string_of_jsbytes("Response"),
     cst_a$10=caml_string_of_jsbytes("a"),
     cst_src_protocol_ml_104_19=
      caml_string_of_jsbytes("src/protocol.ml:104:19"),
     cst_Query$0=caml_string_of_jsbytes("Query"),
     cst_a$11=caml_string_of_jsbytes("a"),
     cst_needs_length$7=caml_string_of_jsbytes("needs_length"),
     cst_src_protocol_ml_102_2=caml_string_of_jsbytes("src/protocol.ml:102:2"),
     cst_async_rpc_kernel$10=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_Async_rpc_kernel_Protocol$0=
      caml_string_of_jsbytes("Async_rpc_kernel__Protocol"),
     cst_Async_rpc_kernel_Transport=
      caml_string_of_jsbytes("Async_rpc_kernel__Transport_intf"),
     cst_async_rpc_kernel$11=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_transport_intf_ml=caml_string_of_jsbytes("src/transport_intf.ml"),
     cst$4=caml_string_of_jsbytes(""),
     cst_async_rpc_kernel$12=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_async_rpc_kernel$13=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_Async_rpc_kernel_Transport$0=
      caml_string_of_jsbytes("Async_rpc_kernel__Transport_intf"),
     cst_Async_rpc_kernel_Transport$1=
      caml_string_of_jsbytes("Async_rpc_kernel__Transport"),
     cst_async_rpc_kernel$14=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_transport_ml=caml_string_of_jsbytes("src/transport.ml"),
     cst$5=caml_string_of_jsbytes(""),
     cst_async_rpc_kernel$15=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_async_rpc_kernel$16=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_Async_rpc_kernel_Transport$2=
      caml_string_of_jsbytes("Async_rpc_kernel__Transport"),
     cst_Async_rpc_kernel_Implement=
      caml_string_of_jsbytes("Async_rpc_kernel__Implementation_types"),
     cst_async_rpc_kernel$17=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_implementation_types_m=
      caml_string_of_jsbytes("src/implementation_types.ml"),
     cst$6=caml_string_of_jsbytes(""),
     cst_async_rpc_kernel$18=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_async_rpc_kernel$19=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_Async_rpc_kernel_Implement$0=
      caml_string_of_jsbytes("Async_rpc_kernel__Implementation_types"),
     cst_Async_rpc_kernel_Implement$1=
      caml_string_of_jsbytes("Async_rpc_kernel__Implementation"),
     cst_async_rpc_kernel$20=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_implementation_ml=caml_string_of_jsbytes("src/implementation.ml"),
     cst$7=caml_string_of_jsbytes(""),
     cst_async_rpc_kernel$21=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_async_rpc_kernel$22=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_Async_rpc_kernel_Implement$2=
      caml_string_of_jsbytes("Async_rpc_kernel__Implementation"),
     cst_Async_rpc_kernel_Rpc_error=
      caml_string_of_jsbytes("Async_rpc_kernel__Rpc_error"),
     cst_async_rpc_kernel$23=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_rpc_error_ml=caml_string_of_jsbytes("src/rpc_error.ml"),
     cst$8=caml_string_of_jsbytes(""),
     cst_async_rpc_kernel$24=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_Async_rpc_kernel_Rpc_error$0=
      caml_string_of_jsbytes("Async_rpc_kernel__Rpc_error.Rpc"),
     cst_async_rpc_kernel$25=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_Async_rpc_kernel_Rpc_error$1=
      caml_string_of_jsbytes("Async_rpc_kernel__Rpc_error"),
     cst_Async_rpc_kernel_Rpc_resul=
      caml_string_of_jsbytes("Async_rpc_kernel__Rpc_result"),
     cst_async_rpc_kernel$26=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_rpc_result_ml=caml_string_of_jsbytes("src/rpc_result.ml"),
     cst$9=caml_string_of_jsbytes(""),
     cst_async_rpc_kernel$27=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_a$12=caml_string_of_jsbytes("a"),
     cst_src_rpc_result_ml_4_13=
      caml_string_of_jsbytes("src/rpc_result.ml:4:13"),
     cst_a$13=caml_string_of_jsbytes("a"),
     cst_t$10=caml_string_of_jsbytes("t"),
     cst_src_rpc_result_ml_4_0=caml_string_of_jsbytes("src/rpc_result.ml:4:0"),
     cst_async_rpc_kernel$28=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_Async_rpc_kernel_Rpc_resul$0=
      caml_string_of_jsbytes("Async_rpc_kernel__Rpc_result"),
     cst_Async_rpc_kernel_Util=
      caml_string_of_jsbytes("Async_rpc_kernel__Util"),
     cst_async_rpc_kernel$29=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_util_ml=caml_string_of_jsbytes("src/util.ml"),
     cst$10=caml_string_of_jsbytes(""),
     cst_async_rpc_kernel$30=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_async_rpc_kernel$31=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_Async_rpc_kernel_Util$0=
      caml_string_of_jsbytes("Async_rpc_kernel__Util"),
     cst_server_side_raw_rpc_comput=
      caml_string_of_jsbytes("server-side raw rpc computation"),
     cst_Already_responded=caml_string_of_jsbytes("Already responded"),
     cst_Message_cannot_be_sent=
      caml_string_of_jsbytes("Message cannot be sent"),
     cst_server_side_pipe_rpc_compu=
      caml_string_of_jsbytes("server-side pipe_rpc computation"),
     cst_Expert_implementation_did_=
      caml_string_of_jsbytes("Expert implementation did not reply"),
     cst_server_side_rpc_expert_com=
      caml_string_of_jsbytes("server-side rpc expert computation"),
     cst_server_side_one_way_rpc_me=
      caml_string_of_jsbytes("server-side one-way rpc message un-bin-io'ing"),
     cst_server_side_one_way_rpc_co=
      caml_string_of_jsbytes("server-side one-way rpc computation"),
     cst_server_side_one_way_rpc_ex=
      caml_string_of_jsbytes("server-side one-way rpc expert computation"),
     cst_server_side_rpc_query_un_b=
      caml_string_of_jsbytes("server-side rpc query un-bin-io'ing"),
     cst_server_side_rpc_computatio=
      caml_string_of_jsbytes("server-side rpc computation"),
     cst_server_side_blocking_rpc_c=
      caml_string_of_jsbytes("server-side blocking rpc computation"),
     cst_server_side_pipe_rpc_strea=
      caml_string_of_jsbytes
       ("server-side pipe_rpc stream_query un-bin-io'ing"),
     cst_streaming_rpc_server_side_=
      caml_string_of_jsbytes("streaming_rpc server-side query un-bin-io'ing"),
     cst_attempted_to_start_writer_=
      caml_string_of_jsbytes
       ("attempted to start writer which was already started"),
     v=[0,17724,0],
     cst_Failed_to_send_write_error=
      caml_string_of_jsbytes("Failed to send write error to client"),
     arg=[0,caml_string_of_jsbytes("_")],
     cst_Async_rpc_kernel_Implement$3=
      caml_string_of_jsbytes("Async_rpc_kernel__Implementations"),
     cst_async_rpc_kernel$32=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_implementations_ml=
      caml_string_of_jsbytes("src/implementations.ml"),
     cst$11=caml_string_of_jsbytes(""),
     cst_async_rpc_kernel$33=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_implementations_ml$0=
      caml_string_of_jsbytes("src/implementations.ml"),
     cst_stream_response_constants_=
      caml_string_of_jsbytes(": stream_response_* constants are correct"),
     cst_Async_rpc_kernel_Implement$4=
      caml_string_of_jsbytes
       ("Async_rpc_kernel__Implementations.Duplicate_implementations"),
     cst_async_rpc_kernel$34=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_Async_rpc_kernel_Implement$5=
      caml_string_of_jsbytes("Async_rpc_kernel__Implementations"),
     cst_Rpc_Connection_close=caml_string_of_jsbytes("Rpc.Connection.close"),
     cst_Rpc_Connection_with_close_=
      caml_string_of_jsbytes("Rpc.Connection.with_close finished"),
     cst_RPC_transport_stopped=caml_string_of_jsbytes("RPC transport stopped"),
     cst_created_directly=caml_string_of_jsbytes("<created-directly>"),
     cst_Handshake_timeout=caml_string_of_jsbytes("Handshake timeout"),
     cst_Reader_read_one_message_bi=
      caml_string_of_jsbytes("[Reader.read_one_message_bin_prot] raised"),
     cst_EOF_or_connection_closed=
      caml_string_of_jsbytes("EOF or connection closed"),
     cst_exn_raised_in_RPC_connecti=
      caml_string_of_jsbytes("exn raised in RPC connection "),
     cst_Writer_t=caml_string_of_jsbytes("Writer.t"),
     cst_loop=caml_string_of_jsbytes("loop"),
     cst_No_heartbeats_received_for=
      caml_string_of_jsbytes
       ("No heartbeats received for %{sexp:Time_ns.Span.t}."),
     cst_No_heartbeats_received_for$0=
      caml_string_of_jsbytes("No heartbeats received for "),
     cst_Connection_on_message_resu=
      caml_string_of_jsbytes
       ("Connection.on_message resulted in Connection_closed error. This is weird."),
     msg=caml_string_of_jsbytes("Rpc message handling loop stopped"),
     cst_RPC_connection_got_closed_=
      caml_string_of_jsbytes("RPC connection got closed writer"),
     cst_Message_cannot_be_sent$0=
      caml_string_of_jsbytes("Message cannot be sent"),
     cst_src_connection_ml_Heartbea=
      caml_string_of_jsbytes("src/connection.ml.Heartbeat_config.t"),
     cst_send_every=caml_string_of_jsbytes("send_every"),
     cst_timeout$1=caml_string_of_jsbytes("timeout"),
     cst_send_every$0=caml_string_of_jsbytes("send_every"),
     cst_timeout$2=caml_string_of_jsbytes("timeout"),
     cst_eof=caml_string_of_jsbytes("eof"),
     cst_Eof$0=caml_string_of_jsbytes("Eof"),
     cst_Negotiated_unexpected_vers=
      caml_string_of_jsbytes("Negotiated_unexpected_version"),
     cst_Negotiation_failed=caml_string_of_jsbytes("Negotiation_failed"),
     cst_Reading_header_failed=caml_string_of_jsbytes("Reading_header_failed"),
     cst_Timeout=caml_string_of_jsbytes("Timeout"),
     cst_Transport_closed=caml_string_of_jsbytes("Transport_closed"),
     cst_negotiated_unexpected_vers=
      caml_string_of_jsbytes("negotiated_unexpected_version"),
     cst_negotiation_failed=caml_string_of_jsbytes("negotiation_failed"),
     cst_reading_header_failed=caml_string_of_jsbytes("reading_header_failed"),
     cst_timeout=caml_string_of_jsbytes("timeout"),
     cst_transport_closed=caml_string_of_jsbytes("transport_closed"),
     cst_eof$0=caml_string_of_jsbytes("eof"),
     cst_Eof$1=caml_string_of_jsbytes("Eof"),
     cst_Negotiated_unexpected_vers$0=
      caml_string_of_jsbytes("Negotiated_unexpected_version"),
     cst_Negotiation_failed$0=caml_string_of_jsbytes("Negotiation_failed"),
     cst_Reading_header_failed$0=
      caml_string_of_jsbytes("Reading_header_failed"),
     cst_Timeout$0=caml_string_of_jsbytes("Timeout"),
     cst_Transport_closed$0=caml_string_of_jsbytes("Transport_closed"),
     cst_negotiated_unexpected_vers$0=
      caml_string_of_jsbytes("negotiated_unexpected_version"),
     cst_negotiation_failed$0=caml_string_of_jsbytes("negotiation_failed"),
     cst_reading_header_failed$0=
      caml_string_of_jsbytes("reading_header_failed"),
     cst_timeout$0=caml_string_of_jsbytes("timeout"),
     cst_transport_closed$0=caml_string_of_jsbytes("transport_closed"),
     cst_Async_rpc_kernel_Connectio=
      caml_string_of_jsbytes("Async_rpc_kernel__Connection"),
     cst_async_rpc_kernel$35=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_connection_ml=caml_string_of_jsbytes("src/connection.ml"),
     cst$12=caml_string_of_jsbytes(""),
     cst_async_rpc_kernel$36=caml_string_of_jsbytes("async_rpc_kernel"),
     tp_loc$1=caml_string_of_jsbytes("src/connection.ml.Handshake_error.T.t"),
     cst_Async_rpc_kernel_Connectio$0=
      caml_string_of_jsbytes
       ("Async_rpc_kernel__Connection.Handshake_error.Handshake_error"),
     tp_loc$2=caml_string_of_jsbytes("src/connection.ml.Heartbeat_config.t"),
     cst_send_every$1=caml_string_of_jsbytes("send_every"),
     cst_timeout$3=caml_string_of_jsbytes("timeout"),
     cst_t$11=caml_string_of_jsbytes("t"),
     cst_src_connection_ml_42_2=
      caml_string_of_jsbytes("src/connection.ml:42:2"),
     cst_t$12=caml_string_of_jsbytes("t"),
     cst_async_rpc_kernel$37=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_Async_rpc_kernel_Connectio$1=
      caml_string_of_jsbytes("Async_rpc_kernel__Connection"),
     cst_Async_rpc_kernel_Connectio$2=
      caml_string_of_jsbytes("Async_rpc_kernel__Connection_intf"),
     cst_async_rpc_kernel$38=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_connection_intf_ml=
      caml_string_of_jsbytes("src/connection_intf.ml"),
     cst$13=caml_string_of_jsbytes(""),
     cst_async_rpc_kernel$39=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_async_rpc_kernel$40=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_Async_rpc_kernel_Connectio$3=
      caml_string_of_jsbytes("Async_rpc_kernel__Connection_intf"),
     cst_Rpc_Pipe_rpc_Direct_stream$0=
      caml_string_of_jsbytes
       ("Rpc.Pipe_rpc.Direct_stream_writer.Group.add_exn: cannot add a closed direct stream writer"),
     cst_Rpc_Pipe_rpc_Direct_stream$1=
      caml_string_of_jsbytes
       ("Rpc.Pipe_rpc.Direct_stream_writer.Group.add_exn: trying to add a direct stream writer that is already present in the group"),
     cst_Rpc_Pipe_rpc_Direct_stream$2=
      caml_string_of_jsbytes
       ("Rpc.Pipe_rpc.Direct_stream_writer.Group.add: cannot add a direct stream writer with a different bin_writer"),
     cst_Rpc_Pipe_rpc_Direct_stream=
      caml_string_of_jsbytes
       ("Rpc.Pipe_rpc.Direct_stream_writer.Group.Buffer.create got negative buffer size"),
     cst_client_side_streaming_rpc_=
      caml_string_of_jsbytes
       ("client-side streaming_rpc initial_response un-bin-io'ing"),
     cst_client_side_streaming_rpc_$0=
      caml_string_of_jsbytes
       ("client-side streaming_rpc response un-bin-io'ing"),
     cst_client_side_streaming_rpc_$1=
      caml_string_of_jsbytes
       ("client-side streaming_rpc response un-bin-io'ing"),
     cst_Closed_locally$1=caml_string_of_jsbytes("Closed_locally"),
     cst_Closed_remotely$1=caml_string_of_jsbytes("Closed_remotely"),
     cst_Error$3=caml_string_of_jsbytes("Error"),
     cst_closed_locally$1=caml_string_of_jsbytes("closed_locally"),
     cst_closed_remotely$1=caml_string_of_jsbytes("closed_remotely"),
     cst_error$3=caml_string_of_jsbytes("error"),
     cst_Closed_locally$2=caml_string_of_jsbytes("Closed_locally"),
     cst_Closed_remotely$2=caml_string_of_jsbytes("Closed_remotely"),
     cst_Error$4=caml_string_of_jsbytes("Error"),
     cst_closed_locally$2=caml_string_of_jsbytes("closed_locally"),
     cst_closed_remotely$2=caml_string_of_jsbytes("closed_remotely"),
     cst_error$4=caml_string_of_jsbytes("error"),
     cst_src_rpc_ml_Pipe_close_reas$0=
      caml_string_of_jsbytes("src/rpc.ml.Pipe_close_reason.Stable.V1.t"),
     cst_Closed_locally=caml_string_of_jsbytes("Closed_locally"),
     cst_Closed_remotely=caml_string_of_jsbytes("Closed_remotely"),
     cst_Error$0=caml_string_of_jsbytes("Error"),
     cst_closed_locally=caml_string_of_jsbytes("closed_locally"),
     cst_closed_remotely=caml_string_of_jsbytes("closed_remotely"),
     cst_error$1=caml_string_of_jsbytes("error"),
     cst_Closed_locally$0=caml_string_of_jsbytes("Closed_locally"),
     cst_Closed_remotely$0=caml_string_of_jsbytes("Closed_remotely"),
     cst_Error$1=caml_string_of_jsbytes("Error"),
     cst_closed_locally$0=caml_string_of_jsbytes("closed_locally"),
     cst_closed_remotely$0=caml_string_of_jsbytes("closed_remotely"),
     cst_error$2=caml_string_of_jsbytes("error"),
     cst_src_rpc_ml_Pipe_close_reas=
      caml_string_of_jsbytes("src/rpc.ml.Pipe_close_reason.t"),
     cst_client_side_rpc_response_u=
      caml_string_of_jsbytes("client-side rpc response un-bin-io'ing"),
     cst_Async_rpc_kernel_Rpc=caml_string_of_jsbytes("Async_rpc_kernel__Rpc"),
     cst_async_rpc_kernel$41=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_rpc_ml=caml_string_of_jsbytes("src/rpc.ml"),
     cst$14=caml_string_of_jsbytes(""),
     cst_async_rpc_kernel$42=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_Error=caml_string_of_jsbytes("Error"),
     cst_t$13=caml_string_of_jsbytes("t"),
     cst_src_rpc_ml_272_2=caml_string_of_jsbytes("src/rpc.ml:272:2"),
     cst_t$14=caml_string_of_jsbytes("t"),
     tp_loc$3=caml_string_of_jsbytes("src/rpc.ml.Pipe_close_reason.t"),
     cst_Error$2=caml_string_of_jsbytes("Error"),
     cst_t$15=caml_string_of_jsbytes("t"),
     cst_src_rpc_ml_280_6=caml_string_of_jsbytes("src/rpc.ml:280:6"),
     cst_t$16=caml_string_of_jsbytes("t"),
     tp_loc$4=
      caml_string_of_jsbytes("src/rpc.ml.Pipe_close_reason.Stable.V1.t"),
     cst_Async_rpc_kernel_Rpc_Pipe_=
      caml_string_of_jsbytes("Async_rpc_kernel__Rpc.Pipe_rpc.Pipe_rpc_failed"),
     cst_async_rpc_kernel$43=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_Async_rpc_kernel_Rpc$0=
      caml_string_of_jsbytes("Async_rpc_kernel__Rpc"),
     cst_src_versioned_rpc_ml$15=
      caml_string_of_jsbytes("src/versioned_rpc.ml"),
     cst_Int_Set_equal_Caller_versi$4=
      caml_string_of_jsbytes
       (": <<Int.Set.equal (Caller.versions ()) (Callee.ve[...]>>"),
     cst_src_versioned_rpc_ml$14=
      caml_string_of_jsbytes("src/versioned_rpc.ml"),
     cst_Int_Set_equal_Caller_versi$3=
      caml_string_of_jsbytes
       (": <<Int.Set.equal (Caller.versions ()) (Callee.ve[...]>>"),
     cst_src_versioned_rpc_ml$13=
      caml_string_of_jsbytes("src/versioned_rpc.ml"),
     cst_Int_Set_equal_Caller_versi$2=
      caml_string_of_jsbytes
       (": <<Int.Set.equal (Caller.versions ()) (Callee.ve[...]>>"),
     cst_src_versioned_rpc_ml$12=
      caml_string_of_jsbytes("src/versioned_rpc.ml"),
     cst_Int_Set_equal_Caller_versi$1=
      caml_string_of_jsbytes
       (": <<Int.Set.equal (Caller.versions ()) (Callee.ve[...]>>"),
     cst_src_versioned_rpc_ml$11=
      caml_string_of_jsbytes("src/versioned_rpc.ml"),
     cst_Int_Set_equal_Caller_versi$0=
      caml_string_of_jsbytes
       (": <<Int.Set.equal (Caller.versions ()) (Callee.ve[...]>>"),
     cst_src_versioned_rpc_ml$10=
      caml_string_of_jsbytes("src/versioned_rpc.ml"),
     cst_Int_Set_equal_Caller_versi=
      caml_string_of_jsbytes
       (": <<Int.Set.equal (Caller.versions ()) (Callee.ve[...]>>"),
     cst_Cannot_use_Direct_with_Reg=
      caml_string_of_jsbytes("Cannot use Direct with Register_raw"),
     the_rpc=caml_string_of_jsbytes("the-rpc"),
     not_the_rpc=caml_string_of_jsbytes("other-rpc"),
     cst_src_versioned_rpc_ml$5=caml_string_of_jsbytes("src/versioned_rpc.ml"),
     rpc_name=caml_string_of_jsbytes("the-rpc"),
     cst_src_versioned_rpc_ml$0=caml_string_of_jsbytes("src/versioned_rpc.ml"),
     cst_caller_and_callee_share_no=
      caml_string_of_jsbytes
       ("caller and callee share no common versions for rpc"),
     cst_cannot_use_direct_interfac=
      caml_string_of_jsbytes("cannot use direct interface with Register_raw"),
     cst_Rpc_names_don_t_agree=caml_string_of_jsbytes("Rpc names don't agree"),
     cst_Version_already_exists=
      caml_string_of_jsbytes("Version already exists"),
     cst_unknown_rpc_version=caml_string_of_jsbytes("unknown rpc version"),
     cst_multiple_rpc_registrations=
      caml_string_of_jsbytes("multiple rpc registrations"),
     cst_type_conversion_failure=
      caml_string_of_jsbytes("type conversion failure"),
     cst_Async_rpc_kernel_Versioned=
      caml_string_of_jsbytes("Async_rpc_kernel__Versioned_rpc"),
     cst_async_rpc_kernel$44=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_versioned_rpc_ml=caml_string_of_jsbytes("src/versioned_rpc.ml"),
     cst$15=caml_string_of_jsbytes(""),
     cst_async_rpc_kernel$45=caml_string_of_jsbytes("async_rpc_kernel"),
     name$4=caml_string_of_jsbytes("__Versioned_rpc.Menu"),
     cst_query=caml_string_of_jsbytes("query"),
     cst_src_versioned_rpc_ml_604_6=
      caml_string_of_jsbytes("src/versioned_rpc.ml:604:6"),
     cst_query$0=caml_string_of_jsbytes("query"),
     cst_response$1=caml_string_of_jsbytes("response"),
     cst_src_versioned_rpc_ml_605_6=
      caml_string_of_jsbytes("src/versioned_rpc.ml:605:6"),
     cst_response$2=caml_string_of_jsbytes("response"),
     cst_src_versioned_rpc_ml$1=caml_string_of_jsbytes("src/versioned_rpc.ml"),
     cst_src_versioned_rpc_ml$2=caml_string_of_jsbytes("src/versioned_rpc.ml"),
     cst_src_versioned_rpc_ml$3=caml_string_of_jsbytes("src/versioned_rpc.ml"),
     cst_src_versioned_rpc_ml$4=caml_string_of_jsbytes("src/versioned_rpc.ml"),
     cst_68699430bf14ef784fa8bfb54f=
      caml_string_of_jsbytes("68699430bf14ef784fa8bfb54f592d3b"),
     cst_src_versioned_rpc_ml$6=caml_string_of_jsbytes("src/versioned_rpc.ml"),
     cst_src_versioned_rpc_ml$7=caml_string_of_jsbytes("src/versioned_rpc.ml"),
     cst_src_versioned_rpc_ml$8=caml_string_of_jsbytes("src/versioned_rpc.ml"),
     cst_src_versioned_rpc_ml$9=caml_string_of_jsbytes("src/versioned_rpc.ml"),
     cst_68699430bf14ef784fa8bfb54f$0=
      caml_string_of_jsbytes("68699430bf14ef784fa8bfb54f592d3b"),
     cst_async_rpc_kernel$46=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_Async_rpc_kernel_Versioned$0=
      caml_string_of_jsbytes("Async_rpc_kernel__Versioned_rpc"),
     cst_FOOBAR123$0=caml_string_of_jsbytes("FOOBAR123"),
     cst$18=caml_string_of_jsbytes(""),
     cst_src_pipe_transport_ml_Benc=
      caml_string_of_jsbytes("src/pipe_transport.ml.Bench_reader"),
     cst_src_pipe_transport_ml$9=
      caml_string_of_jsbytes("src/pipe_transport.ml"),
     cst_run_test_write_1_msg_1_chu$0=
      caml_string_of_jsbytes("run_test write_1_msg_1_chunk"),
     cst_write_1_msg_1_chunk=caml_string_of_jsbytes("write_1_msg_1_chunk"),
     cst_src_pipe_transport_ml_Benc$0=
      caml_string_of_jsbytes("src/pipe_transport.ml.Bench_reader"),
     cst_src_pipe_transport_ml$10=
      caml_string_of_jsbytes("src/pipe_transport.ml"),
     cst_let_f_write_write_1_msg_1_=
      caml_string_of_jsbytes
       ("let f write = write_1_msg_1_chunk write; write_1_msg_1_chunk write in\nrun_test f"),
     cst_write_2_msg_1_chunk=caml_string_of_jsbytes("write_2_msg_1_chunk"),
     cst_src_pipe_transport_ml_Benc$1=
      caml_string_of_jsbytes("src/pipe_transport.ml.Bench_reader"),
     cst_src_pipe_transport_ml$11=
      caml_string_of_jsbytes("src/pipe_transport.ml"),
     cst_run_test_write_1_msg_3_chu$0=
      caml_string_of_jsbytes("run_test write_1_msg_3_chunk"),
     cst_write_1_msg_3_chunk=caml_string_of_jsbytes("write_1_msg_3_chunk"),
     cst_src_pipe_transport_ml_Benc$2=
      caml_string_of_jsbytes("src/pipe_transport.ml.Bench_reader"),
     cst_src_pipe_transport_ml$12=
      caml_string_of_jsbytes("src/pipe_transport.ml"),
     cst_run_test_write_2_msg_1_chu$0=
      caml_string_of_jsbytes("run_test write_2_msg_1_chunk"),
     cst_write_2_msg_1_chunk$0=caml_string_of_jsbytes("write_2_msg_1_chunk"),
     cst_src_pipe_transport_ml_Benc$3=
      caml_string_of_jsbytes("src/pipe_transport.ml.Bench_reader"),
     cst_src_pipe_transport_ml$13=
      caml_string_of_jsbytes("src/pipe_transport.ml"),
     cst_run_test_write_2_msg_one_b$0=
      caml_string_of_jsbytes
       ("run_test write_2_msg_one_byte_at_a_time_34_chunk"),
     cst_write_2_msg_one_byte=caml_string_of_jsbytes("write_2_msg_one_byte"),
     cst_src_pipe_transport_ml_Benc$4=
      caml_string_of_jsbytes("src/pipe_transport.ml.Bench_reader"),
     cst_src_pipe_transport_ml$14=
      caml_string_of_jsbytes("src/pipe_transport.ml"),
     cst_let_f_write_write_create_m=
      caml_string_of_jsbytes
       ("let f write =\n  write (create_message ());\n  write_1_msg_3_chunk write;\n  write_2_msg_1_chunk write;\n  write_2_msg_one_byte_at_a_time_34_chunk write;\n  write (create_message ()) in\nrun_test f"),
     cst_multi=caml_string_of_jsbytes("multi"),
     pos$3=caml_string_of_jsbytes("src/pipe_transport.ml:446:19"),
     pos$2=caml_string_of_jsbytes("src/pipe_transport.ml:431:23"),
     cst$17=caml_string_of_jsbytes(""),
     pos$1=caml_string_of_jsbytes("src/pipe_transport.ml:348:19"),
     pos$0=caml_string_of_jsbytes("src/pipe_transport.ml:347:19"),
     pos=caml_string_of_jsbytes("src/pipe_transport.ml:320:21"),
     cst_FOOBAR123=caml_string_of_jsbytes("FOOBAR123"),
     cst_src_pipe_transport_ml$0=
      caml_string_of_jsbytes("src/pipe_transport.ml"),
     cst_run_test_write_1_msg_1_chu=
      caml_string_of_jsbytes
       (": <<run_test write_1_msg_1_chunk (verify 1 1)>>"),
     cst_src_pipe_transport_ml$1=
      caml_string_of_jsbytes("src/pipe_transport.ml"),
     cst_run_test_f_verify_2_1=
      caml_string_of_jsbytes(": <<run_test f (verify 2 1)>>"),
     cst_src_pipe_transport_ml$2=
      caml_string_of_jsbytes("src/pipe_transport.ml"),
     cst_run_test_write_1_msg_3_chu=
      caml_string_of_jsbytes
       (": <<run_test write_1_msg_3_chunk (verify 1 3)>>"),
     cst_src_pipe_transport_ml$3=
      caml_string_of_jsbytes("src/pipe_transport.ml"),
     cst_run_test_write_2_msg_1_chu=
      caml_string_of_jsbytes
       (": <<run_test write_2_msg_1_chunk (verify 2 1)>>"),
     cst_src_pipe_transport_ml$4=
      caml_string_of_jsbytes("src/pipe_transport.ml"),
     cst_run_test_write_2_msg_one_b=
      caml_string_of_jsbytes
       (": <<run_test write_2_msg_one_byte_at_a_time_34_ch[...]>>"),
     cst_src_pipe_transport_ml$5=
      caml_string_of_jsbytes("src/pipe_transport.ml"),
     cst_run_test_f_verify_7_40=
      caml_string_of_jsbytes(": <<run_test f (verify 7 40)>>"),
     cst_src_pipe_transport_ml$6=
      caml_string_of_jsbytes("src/pipe_transport.ml"),
     cst_can_call_read_forever_mult=
      caml_string_of_jsbytes(": can call read_forever multiple times"),
     cst_Async_rpc_kernel_Pipe_tran=
      caml_string_of_jsbytes("Async_rpc_kernel__Pipe_transport"),
     cst_async_rpc_kernel$47=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_pipe_transport_ml=caml_string_of_jsbytes("src/pipe_transport.ml"),
     cst$16=caml_string_of_jsbytes(""),
     cst_async_rpc_kernel$48=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_pipe_transport_ml$7=
      caml_string_of_jsbytes("src/pipe_transport.ml"),
     cst_Test_reader_string=caml_string_of_jsbytes(": Test_reader_string"),
     cst_src_pipe_transport_ml$8=
      caml_string_of_jsbytes("src/pipe_transport.ml"),
     cst_Test_reader_bigstring=
      caml_string_of_jsbytes(": Test_reader_bigstring"),
     cst_src_pipe_transport_ml$15=
      caml_string_of_jsbytes("src/pipe_transport.ml"),
     cst_src_pipe_transport_ml$16=
      caml_string_of_jsbytes("src/pipe_transport.ml"),
     cst$19=caml_string_of_jsbytes(""),
     cst_Test_reader_string$0=caml_string_of_jsbytes("Test_reader_string"),
     cst_src_pipe_transport_ml$17=
      caml_string_of_jsbytes("src/pipe_transport.ml"),
     cst_src_pipe_transport_ml$18=
      caml_string_of_jsbytes("src/pipe_transport.ml"),
     cst$20=caml_string_of_jsbytes(""),
     cst_Test_reader_bigstring$0=
      caml_string_of_jsbytes("Test_reader_bigstring"),
     cst_async_rpc_kernel$49=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_Async_rpc_kernel_Pipe_tran$0=
      caml_string_of_jsbytes("Async_rpc_kernel__Pipe_transport"),
     cst_Async_rpc_kernel_Persisten=
      caml_string_of_jsbytes("Async_rpc_kernel__Persistent_connection"),
     cst_async_rpc_kernel$50=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_persistent_connection_=
      caml_string_of_jsbytes("src/persistent_connection.ml"),
     cst$21=caml_string_of_jsbytes(""),
     cst_async_rpc_kernel$51=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_async_rpc_kernel$52=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_Async_rpc_kernel_Persisten$0=
      caml_string_of_jsbytes("Async_rpc_kernel__Persistent_connection"),
     cst_Async_rpc_kernel=caml_string_of_jsbytes("Async_rpc_kernel"),
     cst_async_rpc_kernel$53=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_src_async_rpc_kernel_ml=
      caml_string_of_jsbytes("src/async_rpc_kernel.ml"),
     cst$22=caml_string_of_jsbytes(""),
     cst_async_rpc_kernel$54=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_async_rpc_kernel$55=caml_string_of_jsbytes("async_rpc_kernel"),
     cst_Async_rpc_kernel$0=caml_string_of_jsbytes("Async_rpc_kernel"),
     Bin_prot_Common=global_data.Bin_prot__Common,
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     Bin_prot_Shape=global_data.Bin_prot__Shape,
     Bin_prot_Type_class=global_data.Bin_prot__Type_class,
     Bin_prot_Size=global_data.Bin_prot__Size,
     Bin_prot_Write=global_data.Bin_prot__Write,
     Bin_prot_Read=global_data.Bin_prot__Read,
     Bin_prot_Nat0=global_data.Bin_prot__Nat0,
     Core_kernel_Int=global_data.Core_kernel__Int,
     Core_kernel_Bytes=global_data.Core_kernel__Bytes,
     Core_kernel_Bigstring=global_data.Core_kernel__Bigstring,
     Core_kernel=global_data.Core_kernel,
     Bin_prot_Utils=global_data.Bin_prot__Utils,
     Inline_test_config=global_data.Inline_test_config,
     Assert_failure=global_data.Assert_failure,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Base_Hash=global_data.Base__Hash,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Core_kernel_Comparable=global_data.Core_kernel__Comparable,
     Core_kernel_Hashable=global_data.Core_kernel__Hashable,
     Core_kernel_Result=global_data.Core_kernel__Result,
     Sexplib_Std=global_data.Sexplib__Std,
     Bin_prot_Std=global_data.Bin_prot__Std,
     Stdlib=global_data.Stdlib,
     Expect_test_common_File=global_data.Expect_test_common__File,
     Core_kernel_Sexp=global_data.Core_kernel__Sexp,
     Core_kernel_String=global_data.Core_kernel__String,
     Core_kernel_Unique_id=global_data.Core_kernel__Unique_id,
     Expect_test_config=global_data.Expect_test_config,
     Async_kernel=global_data.Async_kernel,
     Async_kernel_Pipe=global_data.Async_kernel__Pipe,
     Async_kernel_Ivar=global_data.Async_kernel__Ivar,
     Core_kernel_Queue=global_data.Core_kernel__Queue,
     Async_kernel_Deferred=global_data.Async_kernel__Deferred,
     CamlinternalMod=global_data.CamlinternalMod,
     Core_kernel_Info=global_data.Core_kernel__Info,
     Core_kernel_Sexpable=global_data.Core_kernel__Sexpable,
     Core_kernel_Or_error=global_data.Core_kernel__Or_error,
     Async_kernel_Monitor=global_data.Async_kernel__Monitor,
     Base_Exn=global_data.Base__Exn,
     Core_kernel_Error=global_data.Core_kernel__Error,
     Core_kernel_Hashtbl=global_data.Core_kernel__Hashtbl,
     Core_kernel_Hash_set=global_data.Core_kernel__Hash_set,
     Core_kernel_List=global_data.Core_kernel__List,
     Base_Backtrace=global_data.Base__Backtrace,
     Core_kernel_Option=global_data.Core_kernel__Option,
     Core_kernel_Bag=global_data.Core_kernel__Bag,
     Async_kernel_Scheduler=global_data.Async_kernel__Scheduler,
     Async_kernel_Synchronous_time_=
      global_data.Async_kernel__Synchronous_time_source,
     Core_kernel_Set_once=global_data.Core_kernel__Set_once,
     Async_kernel_Time_source=global_data.Async_kernel__Time_source,
     Core_kernel_Array=global_data.Core_kernel__Array,
     Base_Staged=global_data.Base__Staged,
     Async_kernel_Async_stream=global_data.Async_kernel__Async_stream,
     Core_kernel_Time_ns_alternate_=
      global_data.Core_kernel__Time_ns_alternate_sexp,
     Sexplib0_Sexp=global_data.Sexplib0__Sexp,
     include$3=global_data.Protocol_version_header,
     Core_kernel_Unit=global_data.Core_kernel__Unit,
     Core_kernel_Set=global_data.Core_kernel__Set,
     Async_kernel_Deferred_or_error=
      global_data.Async_kernel__Deferred_or_error,
     Base_List=global_data.Base__List,
     Core_kernel_Memo=global_data.Core_kernel__Memo,
     Core_kernel_Map=global_data.Core_kernel__Map,
     Async_kernel_Deferred_result=global_data.Async_kernel__Deferred_result,
     Base_Monad=global_data.Base__Monad,
     Async_kernel_Async_kernel_sche=
      global_data.Async_kernel__Async_kernel_scheduler,
     Ppx_assert_lib_Runtime=global_data.Ppx_assert_lib__Runtime,
     Core_kernel_Bigbuffer=global_data.Core_kernel__Bigbuffer,
     include$6=global_data.Persistent_connection_kernel,
     Core_kernel_Host_and_port=global_data.Core_kernel__Host_and_port,
     Async_rpc_kernel=[0];
    caml_register_global(725,Async_rpc_kernel,"Async_rpc_kernel__");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_rpc_kernel_Nat0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_rpc_kernel);
    caml_call1(Expect_test_collector[4][1],cst_src_nat0_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$0,cst);
    var
     _a_=caml_call1(Bin_prot_Shape[5][1],cst_899e2f4a_490a_11e6_b68f_bb),
     bin_shape_t=caml_call1(caml_call1(Bin_prot_Shape[16],_a_),0),
     _c_=Bin_prot_Size[11],
     _e_=Bin_prot_Write[7],
     _g_=Bin_prot_Read[7],
     _j_=
      [0,
       [11,caml_string_of_jsbytes("mismatch for length "),[4,0,0,0,0]],
       caml_string_of_jsbytes("mismatch for length %d")],
     _p_=[0,caml_string_of_jsbytes("version")],
     _q_=[0,caml_string_of_jsbytes("name")],
     _o_=[0,caml_string_of_jsbytes("src/description.ml"),5,4],
     _bJ_=[0,caml_string_of_jsbytes("Heartbeat")],
     _bK_=[0,caml_string_of_jsbytes("Query")],
     _bL_=[0,caml_string_of_jsbytes("Response")],
     _bI_=[1,caml_string_of_jsbytes("src/protocol.ml.Message.needs_length")],
     _bj_=[0,caml_string_of_jsbytes("initial")],
     _bk_=[0,caml_string_of_jsbytes("unused_query_id")],
     _aX_=[0,caml_string_of_jsbytes("data")],
     _aY_=[0,caml_string_of_jsbytes("id")],
     _aL_=[0,caml_string_of_jsbytes("data")],
     _aM_=[0,caml_string_of_jsbytes("id")],
     _aN_=[0,caml_string_of_jsbytes("version")],
     _aO_=[0,caml_string_of_jsbytes("tag")],
     _ah_=[0,caml_string_of_jsbytes("Connection_closed")],
     _ai_=[0,caml_string_of_jsbytes("Bin_io_exn")],
     _aj_=[0,caml_string_of_jsbytes("Write_error")],
     _ak_=[0,caml_string_of_jsbytes("Uncaught_exn")],
     _al_=[0,caml_string_of_jsbytes("Version")],
     _am_=[0,caml_string_of_jsbytes("Unimplemented_rpc")],
     _an_=[0,caml_string_of_jsbytes("Unknown_query_id")],
     _ag_=[1,caml_string_of_jsbytes("src/protocol.ml.Rpc_error.T.t")],
     _ab_=[0,caml_string_of_jsbytes("Connection_closed"),0],
     _aq_=[1,caml_string_of_jsbytes(" 8cc766befa2cf565ea147d9fcd5eaaab ")],
     _ar_=[0,caml_string_of_jsbytes("")],
     _at_=[0,caml_string_of_jsbytes("stable")],
     _bC_=[0,caml_string_of_jsbytes("Heartbeat"),0],
     _bO_=[0,caml_string_of_jsbytes("Closed")],
     _bP_=[0,caml_string_of_jsbytes("Sent")],
     _bQ_=[0,caml_string_of_jsbytes("Message_too_big")],
     _bM_=[0,caml_string_of_jsbytes("max_message_size")],
     _bN_=[0,caml_string_of_jsbytes("size")],
     _bS_=[0,caml_string_of_jsbytes("writer")],
     _bT_=[0,caml_string_of_jsbytes("reader")],
     _bR_=
      [0,
       [11,
        caml_string_of_jsbytes("message length ("),
        [4,
         0,
         0,
         0,
         [11,
          caml_string_of_jsbytes(") did not match expected length ("),
          [4,0,0,0,[12,41,0]]]]],
       caml_string_of_jsbytes
        ("message length (%d) did not match expected length (%d)")],
     _bW_=[0,[0,[0,[0,[0,[0]]]],[0,[0]]]],
     _bX_=[0,caml_string_of_jsbytes("src/implementation_types.ml"),80,6],
     _bY_=[0,[0,[0,[0]]]],
     _bZ_=[0,caml_string_of_jsbytes("src/implementation_types.ml"),130,6],
     _b0_=[0,[0,[0,[0]],[0,[0]],[0,[0]]]],
     _b1_=[0,caml_string_of_jsbytes("src/implementation_types.ml"),179,6],
     _b2_=[0,[0]],
     _b3_=[0,caml_string_of_jsbytes("src/implementation_types.ml"),187,6],
     _b4_=[0,[0,[0,[0,[0,[0]]]],[0,[0]]]],
     _b5_=[0,[0,[0,[0]]]],
     _b6_=[0,[0,[0,[0]],[0,[0]],[0,[0]]]],
     _b7_=[0,[0]],
     _b8_=[0,caml_string_of_jsbytes("responded")],
     _b9_=[0,caml_string_of_jsbytes("writer")],
     _b__=[0,caml_string_of_jsbytes("query_id")],
     _cH_=[0,caml_string_of_jsbytes("Connection_closed")],
     _cF_=[0,caml_string_of_jsbytes("src/rpc_error.ml.Rpc")],
     _cG_=[0,caml_string_of_jsbytes("_none_"),0,-1],
     _cR_=[0,caml_string_of_jsbytes("rpc_version")],
     _cS_=[0,caml_string_of_jsbytes("rpc_tag")],
     _cT_=[0,caml_string_of_jsbytes("connection_description")],
     _cU_=[0,caml_string_of_jsbytes("rpc_error")],
     _cP_=[0,caml_string_of_jsbytes("exn")],
     _cQ_=[0,caml_string_of_jsbytes("location")],
     _cV_=
      [0,
       [11,
        caml_string_of_jsbytes("message length ("),
        [4,
         0,
         0,
         0,
         [11,
          caml_string_of_jsbytes(") did not match expected length ("),
          [4,0,0,0,[12,41,0]]]]],
       caml_string_of_jsbytes
        ("message length (%d) did not match expected length (%d)")],
     _dy_=[0,caml_string_of_jsbytes("src/implementations.ml"),840,29378,29420],
     _dw_=[0,caml_string_of_jsbytes("_")],
     _dx_=[0,caml_string_of_jsbytes("src/implementations.ml"),836,29242,29264],
     _du_=
      [0,
       caml_string_of_jsbytes
        ("src/implementations.ml.Duplicate_implementations")],
     _dv_=[0,caml_string_of_jsbytes("_none_"),0,-1],
     _ds_=[0,10],
     _dq_=[0,10],
     _dr_=[0,10],
     _dp_=[0,[0,0]],
     _dn_=[0,[0,0]],
     _do_=[0,[0,0]],
     _dm_=[0,caml_string_of_jsbytes("src/implementations.ml"),673,4],
     _dl_=[0,3456156],
     _dk_=[0,0],
     _dj_=[0,0],
     _di_=[0,0],
     _dd_=[0,3903734],
     _de_=[0,caml_string_of_jsbytes("backtrace")],
     _df_=[0,caml_string_of_jsbytes("exn")],
     _dg_=[0,caml_string_of_jsbytes("location")],
     _dh_=[0,3903734],
     _dc_=[0,3456156],
     _db_=[0,caml_string_of_jsbytes("src/implementations.ml"),214,6],
     _da_=[0,caml_string_of_jsbytes("src/implementations.ml"),215,6],
     _c__=[0,0],
     _c8_=[0,caml_string_of_jsbytes("reason")],
     _c9_=[0,caml_string_of_jsbytes("error")],
     _cZ_=[0,caml_string_of_jsbytes("packed_self")],
     _c0_=[0,caml_string_of_jsbytes("last_dispatched_implementation")],
     _c1_=[0,caml_string_of_jsbytes("connection_close_started")],
     _c2_=[0,caml_string_of_jsbytes("connection_description")],
     _c3_=[0,caml_string_of_jsbytes("connection_state")],
     _c4_=[0,caml_string_of_jsbytes("stopped")],
     _c5_=[0,caml_string_of_jsbytes("open_streaming_responses")],
     _c6_=[0,caml_string_of_jsbytes("writer")],
     _c7_=[0,caml_string_of_jsbytes("implementations")],
     _cW_=[0,caml_string_of_jsbytes("_")],
     _cX_=[0,caml_string_of_jsbytes("Pipe")],
     _cY_=[0,caml_string_of_jsbytes("Direct")],
     _eq_=[0,10],
     _el_=[1,2],
     _em_=[0,0],
     _en_=[1,0],
     _eo_=[1,1],
     _ek_=[0,3903734],
     _ep_=[1,1],
     _ei_=[0,caml_string_of_jsbytes("src/connection.ml"),351,11260,11306],
     _ej_=[0,caml_string_of_jsbytes("RPC connection loop")],
     _eh_=[0,caml_string_of_jsbytes("src/connection.ml"),340,10856,10893],
     _ef_=[12,46,0],
     _eg_=[0,0],
     _ee_=[0,caml_string_of_jsbytes("src/connection.ml"),184,5774,5837],
     _eb_=[1,-1025106484],
     _ea_=[0,0],
     _d__=[0,caml_string_of_jsbytes("_")],
     _d8_=[0,caml_string_of_jsbytes("src/connection.ml"),104,3123,3143],
     _d9_=[0,caml_string_of_jsbytes("connection")],
     _d$_=[0,caml_string_of_jsbytes("reason")],
     _d7_=[1,-1025106484],
     _d5_=[0,caml_string_of_jsbytes("writer")],
     _d6_=[0,caml_string_of_jsbytes("description")],
     _dU_=[0,caml_string_of_jsbytes("heartbeat_event")],
     _dV_=[0,caml_string_of_jsbytes("time_source")],
     _dW_=[0,caml_string_of_jsbytes("implementations_instance")],
     _dX_=[0,caml_string_of_jsbytes("close_finished")],
     _dY_=[0,caml_string_of_jsbytes("close_started")],
     _dZ_=[0,caml_string_of_jsbytes("open_queries")],
     _d0_=[0,caml_string_of_jsbytes("writer")],
     _d1_=[0,caml_string_of_jsbytes("reader")],
     _d2_=[0,caml_string_of_jsbytes("heartbeat_callbacks")],
     _d3_=[0,caml_string_of_jsbytes("heartbeat_config")],
     _d4_=[0,caml_string_of_jsbytes("description")],
     _dO_=[0,caml_string_of_jsbytes("send_every")],
     _dP_=[0,caml_string_of_jsbytes("timeout")],
     _dN_=[0,caml_string_of_jsbytes("src/connection.ml"),42,2],
     _dL_=
      [0,
       caml_string_of_jsbytes
        ("src/connection.ml.Handshake_error.Handshake_error")],
     _dM_=[0,caml_string_of_jsbytes("_none_"),0,-1],
     _dD_=[0,caml_string_of_jsbytes("Eof")],
     _dE_=[0,caml_string_of_jsbytes("Transport_closed")],
     _dF_=[0,caml_string_of_jsbytes("Timeout")],
     _dG_=[0,caml_string_of_jsbytes("Reading_header_failed")],
     _dH_=[0,caml_string_of_jsbytes("Negotiation_failed")],
     _dI_=[0,caml_string_of_jsbytes("Negotiated_unexpected_version")],
     _dC_=[0,1,0],
     _eV_=[0,caml_string_of_jsbytes("src/rpc.ml"),630,19523,19551],
     _eT_=[0,76061764,[0,0]],
     _eU_=[0,76061764,[0,0]],
     _eR_=[1,636790696],
     _eS_=[0,76061764,[0,0]],
     _eO_=[0,caml_string_of_jsbytes("Closed_remotely")],
     _eP_=[0,caml_string_of_jsbytes("Closed_locally")],
     _eQ_=[0,caml_string_of_jsbytes("Error")],
     _eN_=
      [1,caml_string_of_jsbytes("src/rpc.ml.Pipe_close_reason.Stable.V1.t")],
     _eE_=[0,caml_string_of_jsbytes("Closed_remotely")],
     _eF_=[0,caml_string_of_jsbytes("Closed_locally")],
     _eG_=[0,caml_string_of_jsbytes("Error")],
     _eD_=[1,caml_string_of_jsbytes("src/rpc.ml.Pipe_close_reason.t")],
     _ev_=[0,76061764,[0,0]],
     _ew_=[0,76061764,[0,0]],
     _eu_=[0,76061764,[0,0]],
     _es_=[0,0],
     _et_=[1,0],
     _ex_=[0,caml_string_of_jsbytes("Closed_remotely"),0],
     _ey_=[0,caml_string_of_jsbytes("Closed_locally"),0],
     _eH_=[0,caml_string_of_jsbytes("Closed_remotely"),0],
     _eI_=[0,caml_string_of_jsbytes("Closed_locally"),0],
     _fU_=[0,1],
     _fT_=[0,1],
     _fS_=[0,0],
     _fR_=[0,1],
     _fQ_=[0,1],
     _fI_=[0,1,[0,2,[0,3,0]]],
     _fy_=[0,2,0],
     _fz_=[0,1,[0,2,[0,3,0]]],
     _ft_=[0,caml_string_of_jsbytes("callee_menu")],
     _fu_=[0,caml_string_of_jsbytes("callee_versions")],
     _fv_=[0,caml_string_of_jsbytes("caller_versions")],
     _fw_=[0,caml_string_of_jsbytes("rpc_name")],
     _fe_=[0,1],
     _fd_=[0,1],
     _fc_=[0,0],
     _fb_=[0,1],
     _fa_=[0,1],
     _e__=[0,caml_string_of_jsbytes("Rpc")],
     _e$_=[0,caml_string_of_jsbytes("Version")],
     _e2_=[0,caml_string_of_jsbytes("Update")],
     _e5_=[0,caml_string_of_jsbytes("State")],
     _e6_=[0,caml_string_of_jsbytes("Error")],
     _e7_=[0,caml_string_of_jsbytes("Msg")],
     _e8_=[0,caml_string_of_jsbytes("Response")],
     _e9_=[0,caml_string_of_jsbytes("Query")],
     _e3_=[0,caml_string_of_jsbytes("Rpc")],
     _e4_=[0,caml_string_of_jsbytes("Version")],
     _fB_=[1,caml_string_of_jsbytes(" (Ok 2) ")],
     _fC_=[0,caml_string_of_jsbytes("")],
     _fE_=
      [0,
       caml_string_of_jsbytes
        ("highest version number is taken in most_recent_common_version")],
     _fK_=
      [1,
       caml_string_of_jsbytes
        ('\n      (Error\n       ("caller and callee share no common versions for rpc" (rpc_name the-rpc)\n        (caller_versions (1 2 3)) (callee_versions ())\n        (callee_menu ((other-rpc (1 2))))))')],
     _fL_=[0,caml_string_of_jsbytes("")],
     _fN_=
      [0,
       caml_string_of_jsbytes
        ("error from most_recent_common_version looks reasonable")],
     _ge_=[0,caml_string_of_jsbytes("src/pipe_transport.ml"),442,6],
     _gf_=[0,caml_string_of_jsbytes("src/pipe_transport.ml"),439,6],
     _gd_=[0,0],
     _gc_=[0,1],
     _ga_=[0,caml_string_of_jsbytes("monitor")],
     _gb_=[0,caml_string_of_jsbytes("pipe")],
     _f9_=[0,caml_string_of_jsbytes("src/pipe_transport.ml"),111,12],
     _f__=[0,caml_string_of_jsbytes("src/pipe_transport.ml"),104,16],
     _f$_=[1,3456156],
     _f7_=[0,caml_string_of_jsbytes("buffer")],
     _f8_=[0,caml_string_of_jsbytes("pipe")],
     _b_=Bin_prot_Type_class[47],
     _d_=Bin_prot_Type_class[44],
     _f_=Bin_prot_Type_class[45];
    function bin_read_t(buf,pos_ref,vnat0)
     {return caml_call2(Bin_prot_Common[19],cst_t,pos_ref[1])}
    var _h_=Bin_prot_Nat0[1];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_rpc_kernel_Nat0$0);
    var
     Async_rpc_kernel_Nat0=
      [0,_c_,_e_,_g_,bin_read_t,bin_shape_t,_d_,_f_,_b_,_h_];
    caml_register_global(737,Async_rpc_kernel_Nat0,"Async_rpc_kernel__Nat0");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_rpc_kernel_Writer_wi);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_rpc_kernel$2);
    caml_call1(Expect_test_collector[4][1],cst_src_writer_with_length_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$3,cst$0);
    function of_writer(param)
     {var write=param[2],size=param[1];
      function write$0(buf,pos,a)
       {var
         len=caml_call1(_h_,caml_call1(size,a)),
         pos$0=caml_call3(_e_,buf,pos,len);
        return caml_call3(write,buf,pos$0,a)}
      function size$0(a)
       {var len=caml_call1(_h_,caml_call1(size,a));
        return caml_call1(_c_,len) + len | 0}
      return [0,size$0,write$0]}
    function of_type_class(bin_a){return of_writer(bin_a[2])}
    function _i_(param)
     {function test(len)
       {var
         s=caml_call1(Core_kernel_Bytes[42],len),
         bigstring=caml_call3(Bin_prot_Utils[4],0,Core_kernel_Bytes[6],s),
         bigstring_version=
          caml_call3
           (Bin_prot_Utils[4],0,Core_kernel_Bigstring[120][1][6],bigstring),
         writer_with_length=of_writer(Core_kernel_Bytes[6]),
         with_length_version=
          caml_call3(Bin_prot_Utils[4],0,writer_with_length,s),
         _tn_=caml_call3(Core_kernel_Bigstring[13],0,0,with_length_version),
         _to_=
          caml_string_notequal
           (caml_call3(Core_kernel_Bigstring[13],0,0,bigstring_version),_tn_);
        return _to_?caml_call3(Core_kernel[219],_j_,len,0):_to_}
      function _ti_(param)
       {var _tk_=caml_call2(Core_kernel_Int[45],2,10),_tj_=0;
        if(! (_tk_ < 0))
         {var len=_tj_;
          for(;;)
           {test(len);
            var _tm_=len + 1 | 0;
            if(_tk_ !== len){var len=_tm_;continue}
            break}}
        var pow=10;
        for(;;)
         {var x=caml_call2(Core_kernel_Int[45],2,pow);
          test(x - 1 | 0);
          test(x);
          test(x + 1 | 0);
          var _tl_=pow + 1 | 0;
          if(20 !== pow){var pow=_tl_;continue}
          return 0}}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_for_len_0_to_Int_pow_2_10_,
        0,
        cst_src_writer_with_length_ml$0,
        38,
        2,
        189,
        _ti_);
      return 0}
    caml_call8
     (Ppx_inline_test_lib_Runtime[6],
      Inline_test_config,
      cst$1,
      0,
      cst_src_writer_with_length_ml$1,
      19,
      0,
      856,
      _i_);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_rpc_kernel_Writer_wi$0);
    var Async_rpc_kernel_Writer_with_l=[0,of_writer,of_type_class];
    caml_register_global
     (744,
      Async_rpc_kernel_Writer_with_l,
      "Async_rpc_kernel__Writer_with_length");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_rpc_kernel_Descripti);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_rpc_kernel$5);
    caml_call1(Expect_test_collector[4][1],cst_src_description_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$6,cst$2);
    var
     _k_=
      caml_call1
       (Bin_prot_Shape[8],
        [0,
         [0,cst_name,Core_kernel[443]],
         [0,[0,cst_version,Core_kernel[328]],0]]),
     _l_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$0),0,_k_],0],
     _m_=caml_call1(Bin_prot_Shape[4][1],cst_src_description_ml_5_4),
     group=caml_call2(Bin_prot_Shape[6],_m_,_l_),
     _n_=caml_call1(Bin_prot_Shape[2][1],cst_t$1),
     bin_shape_t$0=caml_call1(caml_call2(Bin_prot_Shape[14],group,_n_),0);
    function bin_size_t(param)
     {var
       v2=param[2],
       v1=param[1],
       _tg_=caml_call1(Core_kernel[444],v1),
       size=caml_call2(Bin_prot_Common[23],0,_tg_),
       _th_=caml_call1(Core_kernel[329],v2);
      return caml_call2(Bin_prot_Common[23],size,_th_)}
    function bin_write_t(buf,pos,param)
     {var
       v2=param[2],
       v1=param[1],
       pos$0=caml_call3(Core_kernel[445],buf,pos,v1);
      return caml_call3(Core_kernel[330],buf,pos$0,v2)}
    var bin_writer_t=[0,bin_size_t,bin_write_t];
    function bin_read_t$0(buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],cst_src_description_ml_Stable_,pos_ref[1])}
    function bin_read_t$1(buf,pos_ref)
     {var
       v_name=caml_call2(Core_kernel[447],buf,pos_ref),
       v_version=caml_call2(Core_kernel[332],buf,pos_ref);
      return [0,v_name,v_version]}
    var
     bin_reader_t=[0,bin_read_t$1,bin_read_t$0],
     bin_t=[0,bin_shape_t$0,bin_writer_t,bin_reader_t];
    function compare(a_001,b_002)
     {if(caml_call2(Ppx_compare_lib[1],a_001,b_002))return 0;
      var n=caml_call2(Core_kernel[451],a_001[1],b_002[1]);
      return 0 === n?caml_call2(Core_kernel[336],a_001[2],b_002[2]):n}
    function hash_fold_t(hsv,arg)
     {var hsv$0=caml_call2(Core_kernel[453],hsv,arg[1]);
      return caml_call2(Core_kernel[338],hsv$0,arg[2])}
    function hash(x)
     {var hsv=caml_call2(Base_Hash[11],0,0),_tf_=hash_fold_t(hsv,x);
      return caml_call1(Base_Hash[9],_tf_)}
    function t_of_sexp(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc,sexp);
      var
       field_sexps=sexp[1],
       name_field=[0,0],
       version_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _s9_=param[1];
          if(1 === _s9_[0])
           {var _s__=_s9_[1];
            if(_s__)
             {var _s$_=_s__[1];
              if(0 === _s$_[0])
               {var _ta_=_s__[2],_tb_=_s$_[1],switch$0=0;
                if(! _ta_ || ! _ta_[2])switch$0 = 1;
                if(switch$0)
                 {var
                   tail=param[2],
                   field_sexp$2=
                    function(_te_)
                     {function field_sexp(param)
                       {if(_te_)
                         {if(_te_[2])throw [0,Assert_failure,_o_];
                          var x=_te_[1];
                          return x}
                        return caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,sexp)}
                      return field_sexp},
                   field_sexp=field_sexp$2(_ta_);
                  if(caml_string_notequal(_tb_,cst_name$0))
                   if(caml_string_notequal(_tb_,cst_version$0))
                    {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_tb_,extra[1]]}
                   else
                    if(version_field[1])
                     duplicates[1] = [0,_tb_,duplicates[1]];
                    else
                     {var
                       field_sexp$0=field_sexp(0),
                       fvalue=caml_call1(Core_kernel[341],field_sexp$0);
                      version_field[1] = [0,fvalue]}
                  else
                   if(name_field[1])
                    duplicates[1] = [0,_tb_,duplicates[1]];
                   else
                    {var
                      field_sexp$1=field_sexp(0),
                      fvalue$0=caml_call1(Core_kernel[456],field_sexp$1);
                     name_field[1] = [0,fvalue$0]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc,_s9_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc,duplicates[1],sexp);
        if(extra[1])
         return caml_call3(Sexplib0_Sexp_conv_error[13],tp_loc,extra[1],sexp);
        var _tc_=name_field[1],_td_=version_field[1];
        if(_tc_ && _td_)
         {var version_value=_td_[1],name_value=_tc_[1];
          return [0,name_value,version_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[15],
                 tp_loc,
                 sexp,
                 [0,
                  [0,0 === name_field[1]?1:0,cst_name$1],
                  [0,[0,0 === version_field[1]?1:0,cst_version$1],0]])}}
    function sexp_of_t(param)
     {var
       v_version=param[2],
       v_name=param[1],
       arg=caml_call1(Core_kernel[340],v_version),
       bnds=[0,[1,[0,_p_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[455],v_name),
       bnds$0=[0,[1,[0,_q_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    var
     _r_=caml_call1(Core_kernel_Comparable[8],[0,compare,t_of_sexp,sexp_of_t]),
     _y_=_r_[7],
     _s_=_r_[1],
     _t_=_r_[2],
     _u_=_r_[3],
     _v_=_r_[4],
     _w_=_r_[5],
     _x_=_r_[6],
     _z_=_r_[9],
     _A_=_r_[10],
     _B_=_r_[11],
     _C_=_r_[12],
     _D_=_r_[13],
     _E_=_r_[14],
     _F_=_r_[15],
     _G_=_r_[16],
     _H_=_r_[17],
     _I_=_r_[18],
     _J_=_r_[19],
     _K_=_r_[20],
     _L_=_r_[21],
     _M_=_r_[22],
     include=
      caml_call1
       (Core_kernel_Hashable[3],
        [0,hash_fold_t,t_of_sexp,compare,sexp_of_t,hash]),
     _N_=include[1],
     _O_=include[2],
     _P_=include[3],
     _R_=include[5],
     _S_=include[6],
     _Q_=include[4],
     _T_=include[7];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_rpc_kernel_Descripti$0);
    var
     _U_=
      [0,
       [0,
        compare,
        t_of_sexp,
        sexp_of_t,
        bin_size_t,
        bin_write_t,
        bin_read_t$1,
        bin_read_t$0,
        bin_shape_t$0,
        bin_writer_t,
        bin_reader_t,
        bin_t,
        hash_fold_t,
        hash]],
     Async_rpc_kernel_Description=
      [0,
       bin_size_t,
       bin_write_t,
       bin_read_t$1,
       bin_read_t$0,
       bin_shape_t$0,
       bin_writer_t,
       bin_reader_t,
       bin_t,
       sexp_of_t,
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
       _U_];
    caml_register_global
     (752,Async_rpc_kernel_Description,"Async_rpc_kernel__Description");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_rpc_kernel_Protocol);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_rpc_kernel$8);
    caml_call1(Expect_test_collector[4][1],cst_src_protocol_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$9,cst$3);
    var
     Rpc_tag=
      [0,
       Core_kernel_String[92],
       Core_kernel_String[93],
       Core_kernel_String[94],
       Core_kernel_String[95],
       Core_kernel_String[96],
       Core_kernel_String[97],
       Core_kernel_String[98],
       Core_kernel_String[99],
       Core_kernel_String[100],
       Core_kernel_String[101],
       Core_kernel_String[102],
       Core_kernel_String[103],
       Core_kernel_String[104],
       Core_kernel_String[105],
       Core_kernel_String[106],
       Core_kernel_String[107],
       Core_kernel_String[108],
       Core_kernel_String[109],
       Core_kernel_String[110],
       Core_kernel_String[111],
       Core_kernel_String[112],
       Core_kernel_String[113],
       Core_kernel_String[114],
       Core_kernel_String[115],
       Core_kernel_String[116],
       Core_kernel_String[117],
       Core_kernel_String[118],
       Core_kernel_String[119],
       Core_kernel_String[120],
       Core_kernel_String[121],
       Core_kernel_String[122],
       Core_kernel_String[123],
       Core_kernel_String[124],
       Core_kernel_String[125],
       Core_kernel_String[126],
       Core_kernel_String[127],
       Core_kernel_String[128],
       Core_kernel_String[129],
       Core_kernel_String[130],
       Core_kernel_String[131],
       Core_kernel_String[132]],
     Query_id=caml_call1(Core_kernel_Unique_id[2],[0]),
     _V_=Query_id[5],
     _W_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$2),0,_V_],0],
     _X_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_16_2),
     group$0=caml_call2(Bin_prot_Shape[6],_X_,_W_),
     _Y_=caml_call1(Bin_prot_Shape[2][1],cst_t$3),
     bin_shape_t$1=caml_call1(caml_call2(Bin_prot_Shape[14],group$0,_Y_),0),
     bin_size_t$0=Query_id[1],
     bin_write_t$0=Query_id[2],
     bin_writer_t$0=[0,bin_size_t$0,bin_write_t$0],
     bin_read_t$2=Query_id[4],
     bin_read_t$3=Query_id[3],
     bin_reader_t$0=[0,bin_read_t$3,bin_read_t$2],
     bin_t$0=[0,bin_shape_t$1,bin_writer_t$0,bin_reader_t$0],
     sexp_of_t$0=Query_id[10],
     t=caml_call1(Query_id[45],0),
     Unused_query_id=
      [0,
       bin_size_t$0,
       bin_write_t$0,
       bin_read_t$3,
       bin_read_t$2,
       bin_shape_t$1,
       bin_writer_t$0,
       bin_reader_t$0,
       bin_t$0,
       sexp_of_t$0,
       t],
     _Z_=[0,[0,cst_Unknown_query_id,[0,Query_id[5],0]],0],
     ___=
      [0,
       caml_call2
        (Bin_prot_Shape[10],cst_Version,[0,Core_kernel_Int[140][1][5]]),
       0],
     _$_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_41_41),
     _aa_=[0,caml_call2(Bin_prot_Shape[12],_$_,___),0],
     _ac_=
      caml_call1
       (Bin_prot_Shape[9],
        [0,
         [0,cst_Bin_io_exn,[0,Core_kernel_Sexp[5],0]],
         [0,
          _ab_,
          [0,
           [0,cst_Write_error,[0,Core_kernel_Sexp[5],0]],
           [0,
            [0,cst_Uncaught_exn,[0,Core_kernel_Sexp[5],0]],
            [0,[0,cst_Unimplemented_rpc,[0,Rpc_tag[5],_aa_]],_Z_]]]]]),
     _ad_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$4),0,_ac_],0],
     _ae_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_36_4),
     group$1=caml_call2(Bin_prot_Shape[6],_ae_,_ad_),
     _af_=caml_call1(Bin_prot_Shape[2][1],cst_t$5),
     bin_shape_t$2=caml_call1(caml_call2(Bin_prot_Shape[14],group$1,_af_),0);
    function bin_size_t$1(param)
     {if(typeof param === "number")
       return 1;
      else
       switch(param[0])
        {case 0:
          var v1=param[1],_s3_=caml_call1(Core_kernel_Sexp[1],v1);
          return caml_call2(Bin_prot_Common[23],1,_s3_);
         case 1:
          var v1$0=param[1],_s4_=caml_call1(Core_kernel_Sexp[1],v1$0);
          return caml_call2(Bin_prot_Common[23],1,_s4_);
         case 2:
          var v1$1=param[1],_s5_=caml_call1(Core_kernel_Sexp[1],v1$1);
          return caml_call2(Bin_prot_Common[23],1,_s5_);
         case 3:
          var
           v2=param[2],
           v1$2=param[1],
           _s6_=caml_call1(Rpc_tag[1],v1$2),
           size=caml_call2(Bin_prot_Common[23],1,_s6_),
           args=v2[2],
           size_args=caml_call1(Core_kernel_Int[140][1][1],args),
           _s7_=caml_call2(Bin_prot_Common[23],size_args,4);
          return caml_call2(Bin_prot_Common[23],size,_s7_);
         default:
          var v1$3=param[1],_s8_=caml_call1(Query_id[1],v1$3);
          return caml_call2(Bin_prot_Common[23],1,_s8_)}}
    function bin_write_t$1(buf,pos,param)
     {if(typeof param === "number")
       return caml_call3(Bin_prot_Write[30],buf,pos,1);
      else
       switch(param[0])
        {case 0:
          var v1=param[1],pos$0=caml_call3(Bin_prot_Write[30],buf,pos,0);
          return caml_call3(Core_kernel_Sexp[2],buf,pos$0,v1);
         case 1:
          var v1$0=param[1],pos$1=caml_call3(Bin_prot_Write[30],buf,pos,2);
          return caml_call3(Core_kernel_Sexp[2],buf,pos$1,v1$0);
         case 2:
          var v1$1=param[1],pos$2=caml_call3(Bin_prot_Write[30],buf,pos,3);
          return caml_call3(Core_kernel_Sexp[2],buf,pos$2,v1$1);
         case 3:
          var
           v2=param[2],
           v1$2=param[1],
           pos$3=caml_call3(Bin_prot_Write[30],buf,pos,4),
           pos$4=caml_call3(Rpc_tag[2],buf,pos$3,v1$2),
           args=v2[2],
           pos$5=caml_call3(Bin_prot_Write[29],buf,pos$4,-901574920);
          return caml_call3(Core_kernel_Int[140][1][2],buf,pos$5,args);
         default:
          var v1$3=param[1],pos$6=caml_call3(Bin_prot_Write[30],buf,pos,5);
          return caml_call3(Query_id[2],buf,pos$6,v1$3)}}
    var bin_writer_t$1=[0,bin_size_t$1,bin_write_t$1];
    function bin_read_t$4(buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],cst_src_protocol_ml_Rpc_error_,pos_ref[1])}
    function bin_read_t$5(buf,pos_ref)
     {var match=caml_call2(Bin_prot_Read[29],buf,pos_ref);
      if(5 < match >>> 0)
       return caml_call2(Bin_prot_Common[18],_ag_,pos_ref[1]);
      switch(match)
       {case 0:
         var arg_1=caml_call2(Core_kernel_Sexp[3],buf,pos_ref);
         return [0,arg_1];
        case 1:return 0;
        case 2:
         var arg_1$0=caml_call2(Core_kernel_Sexp[3],buf,pos_ref);
         return [1,arg_1$0];
        case 3:
         var arg_1$1=caml_call2(Core_kernel_Sexp[3],buf,pos_ref);
         return [2,arg_1$1];
        case 4:
         var
          arg_1$2=caml_call2(Rpc_tag[3],buf,pos_ref),
          vint=caml_call2(Bin_prot_Read[28],buf,pos_ref);
         try
          {if(-901574920 !== vint)throw Bin_prot_Common[13];
           var
            arg_1$3=caml_call2(Core_kernel_Int[140][1][3],buf,pos_ref),
            _s1_=[0,-901574920,arg_1$3],
            arg_2=_s1_}
         catch(_s2_)
          {_s2_ = caml_wrap_exception(_s2_);
           if(_s2_ !== Bin_prot_Common[13])throw _s2_;
           var
            arg_2=
             caml_call2
              (Bin_prot_Common[19],
               cst_src_protocol_ml_Rpc_error_$0,
               pos_ref[1])}
         return [3,arg_1$2,arg_2];
        default:
         var arg_1$4=caml_call2(Query_id[3],buf,pos_ref);return [4,arg_1$4]}}
    var
     bin_reader_t$1=[0,bin_read_t$5,bin_read_t$4],
     bin_t$1=[0,bin_shape_t$2,bin_writer_t$1,bin_reader_t$1];
    function t_of_sexp$0(sexp)
     {if(0 === sexp[0])
       {var
         _sL_=sexp[1],
         _sM_=caml_string_compare(_sL_,cst_bin_io_exn),
         switch$0=0;
        if(0 <= _sM_)
         if(0 < _sM_)
          if(caml_string_notequal(_sL_,cst_connection_closed))
           if(caml_string_notequal(_sL_,cst_uncaught_exn))
            if(caml_string_notequal(_sL_,cst_unimplemented_rpc))
             if(caml_string_notequal(_sL_,cst_unknown_query_id))
              {if(! caml_string_notequal(_sL_,cst_write_error))switch$0 = 3}
             else
              switch$0 = 6;
            else
             switch$0 = 5;
           else
            switch$0 = 4;
          else
           switch$0 = 1;
         else
          switch$0 = 2;
        else
         if(caml_string_notequal(_sL_,cst_Bin_io_exn$0))
          if(caml_string_notequal(_sL_,cst_Connection_closed))
           if(caml_string_notequal(_sL_,cst_Uncaught_exn$0))
            if(caml_string_notequal(_sL_,cst_Unimplemented_rpc$0))
             if(caml_string_notequal(_sL_,cst_Unknown_query_id$0))
              {if(! caml_string_notequal(_sL_,cst_Write_error$0))switch$0 = 3}
             else
              switch$0 = 6;
            else
             switch$0 = 5;
           else
            switch$0 = 4;
          else
           switch$0 = 1;
         else
          switch$0 = 2;
        switch(switch$0)
         {case 1:return 0;
          case 2:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,sexp);
          case 3:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,sexp);
          case 4:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,sexp);
          case 5:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,sexp);
          case 6:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$0,sexp)
          }}
      else
       {var _sN_=sexp[1];
        if(! _sN_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$0,sexp);
        var _sO_=_sN_[1];
        if(0 !== _sO_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$0,sexp);
        var
         _sP_=_sO_[1],
         _sQ_=caml_string_compare(_sP_,cst_bin_io_exn$0),
         switch$1=0;
        if(0 <= _sQ_)
         if(0 < _sQ_)
          if(caml_string_notequal(_sP_,cst_connection_closed$0))
           if(caml_string_notequal(_sP_,cst_uncaught_exn$0))
            if(caml_string_notequal(_sP_,cst_unimplemented_rpc$0))
             if(caml_string_notequal(_sP_,cst_unknown_query_id$0))
              {if(! caml_string_notequal(_sP_,cst_write_error$0))switch$1 = 2}
             else
              switch$1 = 5;
            else
             switch$1 = 4;
           else
            switch$1 = 3;
          else
           switch$1 = 6;
         else
          switch$1 = 1;
        else
         if(caml_string_notequal(_sP_,cst_Bin_io_exn$1))
          if(caml_string_notequal(_sP_,cst_Connection_closed$0))
           if(caml_string_notequal(_sP_,cst_Uncaught_exn$1))
            if(caml_string_notequal(_sP_,cst_Unimplemented_rpc$1))
             if(caml_string_notequal(_sP_,cst_Unknown_query_id$1))
              {if(! caml_string_notequal(_sP_,cst_Write_error$1))switch$1 = 2}
             else
              switch$1 = 5;
            else
             switch$1 = 4;
           else
            switch$1 = 3;
          else
           switch$1 = 6;
         else
          switch$1 = 1;
        switch(switch$1)
         {case 1:
           var sexp_args$3=_sN_[2];
           if(sexp_args$3 && ! sexp_args$3[2])
            {var
              v0$7=sexp_args$3[1],
              v0$8=caml_call1(Core_kernel_Sexp[89],v0$7);
             return [0,v0$8]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_sP_,sexp);
          case 2:
           var sexp_args=_sN_[2];
           if(sexp_args && ! sexp_args[2])
            {var v0=sexp_args[1],v0$0=caml_call1(Core_kernel_Sexp[89],v0);
             return [1,v0$0]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_sP_,sexp);
          case 3:
           var sexp_args$2=_sN_[2];
           if(sexp_args$2 && ! sexp_args$2[2])
            {var
              v0$5=sexp_args$2[1],
              v0$6=caml_call1(Core_kernel_Sexp[89],v0$5);
             return [2,v0$6]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_sP_,sexp);
          case 4:
           var sexp_args$1=_sN_[2];
           if(sexp_args$1)
            {var _sR_=sexp_args$1[2];
             if(_sR_ && ! _sR_[2])
              {var
                v1=_sR_[1],
                v0$3=sexp_args$1[1],
                v0$4=caml_call1(Rpc_tag[9],v0$3),
                v1$0=
                 function(sexp)
                   {try
                     {if(0 === sexp[0])
                       var
                        atom=sexp[1],
                        _sS_=
                         caml_string_notequal(atom,cst_Version$0)
                          ?caml_call1(Sexplib0_Sexp_conv_error[19],0)
                          :caml_call2(Sexplib0_Sexp_conv_error[23],tp_loc$0,sexp),
                        _sT_=_sS_;
                      else
                       {var _sU_=sexp[1];
                        if(_sU_)
                         {var _sV_=_sU_[1];
                          if(0 === _sV_[0])
                           {var sexp_args=_sU_[2],atom$0=_sV_[1];
                            if(caml_string_notequal(atom$0,cst_Version$1))
                             var _sW_=caml_call1(Sexplib0_Sexp_conv_error[19],0);
                            else
                             {var switch$0=0;
                              if(sexp_args && ! sexp_args[2])
                               {var
                                 v0=sexp_args[1],
                                 v0$0=caml_call1(Core_kernel_Int[140][1][10],v0),
                                 _sZ_=[0,-901574920,v0$0];
                                switch$0 = 1}
                              if(! switch$0)
                               var
                                _sZ_=
                                 caml_call3
                                  (Sexplib0_Sexp_conv_error[22],tp_loc$0,atom$0,sexp);
                              var _sW_=_sZ_}
                            var _sX_=_sW_}
                          else
                           var
                            _sX_=
                             caml_call2(Sexplib0_Sexp_conv_error[24],tp_loc$0,sexp);
                          var _sY_=_sX_}
                        else
                         var
                          _sY_=
                           caml_call2(Sexplib0_Sexp_conv_error[25],tp_loc$0,sexp);
                        var _sT_=_sY_}
                      return _sT_}
                    catch(_s0_)
                     {_s0_ = caml_wrap_exception(_s0_);
                      if(_s0_ === Sexplib0_Sexp_conv_error[18])
                       return caml_call2
                               (Sexplib0_Sexp_conv_error[20],tp_loc$0,sexp);
                      throw _s0_}}
                  (v1);
               return [3,v0$4,v1$0]}}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_sP_,sexp);
          case 5:
           var sexp_args$0=_sN_[2];
           if(sexp_args$0 && ! sexp_args$0[2])
            {var v0$1=sexp_args$0[1],v0$2=caml_call1(Query_id[9],v0$1);
             return [4,v0$2]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$0,_sP_,sexp);
          case 6:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$0,sexp)
          }}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$0,sexp)}
    function sexp_of_t$1(param)
     {if(typeof param === "number")
       return _ah_;
      else
       switch(param[0])
        {case 0:
          var v0=param[1],v0$0=caml_call1(Core_kernel_Sexp[88],v0);
          return [1,[0,_ai_,[0,v0$0,0]]];
         case 1:
          var v0$1=param[1],v0$2=caml_call1(Core_kernel_Sexp[88],v0$1);
          return [1,[0,_aj_,[0,v0$2,0]]];
         case 2:
          var v0$3=param[1],v0$4=caml_call1(Core_kernel_Sexp[88],v0$3);
          return [1,[0,_ak_,[0,v0$4,0]]];
         case 3:
          var
           v1=param[2],
           v0$5=param[1],
           v0$6=caml_call1(Rpc_tag[10],v0$5),
           v0$7=v1[2],
           v1$0=
            [1,[0,_al_,[0,caml_call1(Core_kernel_Int[140][1][11],v0$7),0]]];
          return [1,[0,_am_,[0,v0$6,[0,v1$0,0]]]];
         default:
          var v0$8=param[1],v0$9=caml_call1(Query_id[10],v0$8);
          return [1,[0,_an_,[0,v0$9,0]]]}}
    function compare$0(a_001,match)
     {if(caml_call2(Ppx_compare_lib[1],a_001,match))return 0;
      var switch$0=0;
      if(typeof a_001 === "number")
       {if(typeof match === "number")return 0;else if(0 !== match[0])return -1}
      else
       switch(a_001[0])
        {case 0:
          var _sF_=a_001[1];
          if(typeof match !== "number" && 0 === match[0])
           {var b_004=match[1];
            return caml_call2(Core_kernel_Sexp[35],_sF_,b_004)}
          return -1;
         case 1:
          var _sG_=a_001[1];
          if(typeof match === "number")
           switch$0 = 1;
          else
           switch(match[0])
            {case 0:break;
             case 1:
              var b_006=match[1];
              return caml_call2(Core_kernel_Sexp[35],_sG_,b_006);
             default:return -1}
          break;
         case 2:
          var _sH_=a_001[1];
          if(typeof match === "number")
           switch$0 = 1;
          else
           switch(match[0])
            {case 0:break;
             case 1:switch$0 = 2;break;
             case 2:
              var b_008=match[1];
              return caml_call2(Core_kernel_Sexp[35],_sH_,b_008);
             default:return -1}
          break;
         case 3:
          var _sI_=a_001[2],_sJ_=a_001[1];
          if(typeof match === "number")
           switch$0 = 1;
          else
           switch(match[0])
            {case 0:break;
             case 1:switch$0 = 2;break;
             case 2:switch$0 = 3;break;
             case 3:
              var
               b_012=match[2],
               b_010=match[1],
               n=caml_call2(Rpc_tag[21],_sJ_,b_010);
              if(0 === n)
               {if(caml_call2(Ppx_compare_lib[1],_sI_,b_012))return 0;
                var right_014=b_012[2],left_013=_sI_[2];
                return caml_call2
                        (Core_kernel_Int[140][1][9],left_013,right_014)}
              return n;
             default:return -1}
          break;
         default:
          var _sK_=a_001[1];
          if(typeof match === "number")
           switch$0 = 1;
          else
           switch(match[0])
            {case 0:break;
             case 1:switch$0 = 2;break;
             case 2:switch$0 = 3;break;
             case 3:return 1;
             default:
              var b_016=match[1];return caml_call2(Query_id[20],_sK_,b_016)}}
      switch(switch$0)
       {case 0:return 1;case 1:return 1;case 2:return 1;default:return 1}}
    var
     Expect_test_collector$0=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _ao_(param)
     {var
       _sC_=caml_call1(Bin_prot_Shape[21],bin_shape_t$2),
       _sD_=caml_call1(Bin_prot_Shape[18][4],_sC_);
      caml_call1(Stdlib[46],_sD_);
      var
       _sE_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_protocol_ml$0),
         47,
         1254,
         1262,
         1268];
      return caml_call1(Expect_test_collector$0[1],_sE_)}
    var
     _ap_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_protocol_ml$1),
       47,
       1254,
       1269,
       1307],
     _as_=
      [0,
       [0,
        _ar_,
        _aq_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_protocol_ml$2),
         47,
         1254,
         1262,
         1268],
        _ap_],
       0],
     _au_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_protocol_ml$4),
       45,
       1185,
       1189,
       1308],
     _av_=
      caml_call1(Expect_test_common_File[4][3],cst_b994a02f0f1fc5a7441e1529c5);
    caml_call9
     (Expect_test_collector$0[3],
      _av_,
      _au_,
      cst_src_protocol_ml$3,
      _at_,
      0,
      _as_,
      0,
      Inline_test_config,
      _ao_);
    var
     include$0=
      caml_call1
       (Core_kernel_Comparable[8],[0,compare$0,t_of_sexp$0,sexp_of_t$1]),
     symbol=include$0[1],
     symbol$0=include$0[2],
     symbol$1=include$0[3],
     symbol$2=include$0[4],
     symbol$3=include$0[5],
     symbol$4=include$0[6],
     equal=include$0[7],
     compare$1=include$0[8],
     min=include$0[9],
     max=include$0[10],
     ascending=include$0[11],
     descending=include$0[12],
     between=include$0[13],
     clamp_exn=include$0[14],
     clamp=include$0[15],
     comparator=include$0[16],
     validate_lbound=include$0[17],
     validate_ubound=include$0[18],
     validate_bound=include$0[19],
     Replace_polymorphic_compare=include$0[20],
     Map=include$0[21],
     Set=include$0[22],
     Rpc_error=
      [0,
       bin_size_t$1,
       bin_write_t$1,
       bin_read_t$5,
       bin_read_t$4,
       bin_shape_t$2,
       bin_writer_t$1,
       bin_reader_t$1,
       bin_t$1,
       t_of_sexp$0,
       sexp_of_t$1,
       symbol,
       symbol$0,
       symbol$1,
       symbol$2,
       symbol$3,
       symbol$4,
       equal,
       compare$1,
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
       Replace_polymorphic_compare,
       Map,
       Set],
     _aw_=Rpc_error[5],
     _ax_=caml_call1(Bin_prot_Shape[3][1],cst_a),
     _ay_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_56_15),
     _az_=caml_call2(Bin_prot_Shape[15],_ay_,_ax_),
     _aA_=caml_call1(caml_call1(Core_kernel_Result[1],_az_),_aw_),
     _aB_=[0,caml_call1(Bin_prot_Shape[3][1],cst_a$0),0],
     _aC_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$6),_aB_,_aA_],0],
     _aD_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_56_2),
     group$2=caml_call2(Bin_prot_Shape[6],_aD_,_aC_);
    function bin_shape_t$3(a)
     {var _sB_=caml_call1(Bin_prot_Shape[2][1],cst_t$7);
      return caml_call1(caml_call2(Bin_prot_Shape[14],group$2,_sB_),[0,a,0])}
    function bin_size_t$2(size_of_a,v)
     {return caml_call3(Core_kernel_Result[2],size_of_a,Rpc_error[1],v)}
    function bin_write_t$2(write_a,buf,pos,v)
     {return caml_call3
              (caml_call2(Core_kernel_Result[3],write_a,Rpc_error[2]),
               buf,
               pos,
               v)}
    function bin_writer_t$2(bin_writer_a)
     {function _sx_(v)
       {var _sy_=bin_writer_a[2];
        return function(_sz_,_sA_){return bin_write_t$2(_sy_,v,_sz_,_sA_)}}
      return [0,function(v){return bin_size_t$2(bin_writer_a[1],v)},_sx_]}
    function bin_read_t$6(of_a,buf,pos_ref,vint)
     {return caml_call3
              (caml_call2(Core_kernel_Result[5],of_a,Rpc_error[3]),
               buf,
               pos_ref,
               vint)}
    function bin_read_t$7(of_a,buf,pos_ref)
     {return caml_call2
              (caml_call2(Core_kernel_Result[4],of_a,Rpc_error[3]),
               buf,
               pos_ref)}
    function bin_reader_t$2(bin_reader_a)
     {function _sw_(buf,pos_ref,vtag)
       {return bin_read_t$6(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$7(bin_reader_a[1],buf,pos_ref)},
              _sw_]}
    function bin_t$2(bin_a)
     {var _su_=bin_reader_t$2(bin_a[3]),_sv_=bin_writer_t$2(bin_a[2]);
      return [0,bin_shape_t$3(bin_a[1]),_sv_,_su_]}
    function sexp_of_t$2(of_a,v)
     {return caml_call3(Core_kernel_Result[10],of_a,Rpc_error[10],v)}
    var
     Rpc_result=
      [0,
       bin_shape_t$3,
       bin_size_t$2,
       bin_write_t$2,
       bin_writer_t$2,
       bin_read_t$6,
       bin_read_t$7,
       bin_reader_t$2,
       bin_t$2,
       sexp_of_t$2],
     _aE_=caml_call1(Bin_prot_Shape[3][1],cst_a$1),
     _aF_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_66_16),
     _aG_=[0,[0,cst_data,caml_call2(Bin_prot_Shape[15],_aF_,_aE_)],0],
     _aH_=
      caml_call1
       (Bin_prot_Shape[8],
        [0,
         [0,cst_tag,Rpc_tag[5]],
         [0,
          [0,cst_version$2,Bin_prot_Std[80]],
          [0,[0,cst_id,Query_id[5]],_aG_]]]),
     _aI_=[0,caml_call1(Bin_prot_Shape[3][1],cst_a$2),0],
     _aJ_=
      [0,[0,caml_call1(Bin_prot_Shape[2][1],cst_needs_length),_aI_,_aH_],0],
     _aK_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_62_2),
     group$3=caml_call2(Bin_prot_Shape[6],_aK_,_aJ_);
    function bin_shape_needs_length(a)
     {var _st_=caml_call1(Bin_prot_Shape[2][1],cst_needs_length$0);
      return caml_call1(caml_call2(Bin_prot_Shape[14],group$3,_st_),[0,a,0])}
    function bin_size_needs_length(size_of_a,param)
     {var
       v4=param[4],
       v3=param[3],
       v2=param[2],
       v1=param[1],
       _sp_=caml_call1(Rpc_tag[1],v1),
       size=caml_call2(Bin_prot_Common[23],0,_sp_),
       _sq_=caml_call1(Bin_prot_Std[6],v2),
       size$0=caml_call2(Bin_prot_Common[23],size,_sq_),
       _sr_=caml_call1(Query_id[1],v3),
       size$1=caml_call2(Bin_prot_Common[23],size$0,_sr_),
       _ss_=caml_call1(size_of_a,v4);
      return caml_call2(Bin_prot_Common[23],size$1,_ss_)}
    function bin_write_needs_length(write_a,buf,pos,param)
     {var
       v4=param[4],
       v3=param[3],
       v2=param[2],
       v1=param[1],
       pos$0=caml_call3(Rpc_tag[2],buf,pos,v1),
       pos$1=caml_call3(Bin_prot_Std[82],buf,pos$0,v2),
       pos$2=caml_call3(Query_id[2],buf,pos$1,v3);
      return caml_call3(write_a,buf,pos$2,v4)}
    function bin_writer_needs_length(bin_writer_a)
     {function _sl_(v)
       {var _sm_=bin_writer_a[2];
        return function(_sn_,_so_)
         {return bin_write_needs_length(_sm_,v,_sn_,_so_)}}
      return [0,
              function(v){return bin_size_needs_length(bin_writer_a[1],v)},
              _sl_]}
    function bin_read_needs_length(of_a,buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],cst_src_protocol_ml_Query_need,pos_ref[1])}
    function bin_read_needs_length$0(of_a,buf,pos_ref)
     {var
       v_tag=caml_call2(Rpc_tag[3],buf,pos_ref),
       v_version=caml_call2(Bin_prot_Std[84],buf,pos_ref),
       v_id=caml_call2(Query_id[3],buf,pos_ref),
       v_data=caml_call2(of_a,buf,pos_ref);
      return [0,v_tag,v_version,v_id,v_data]}
    function bin_reader_needs_length(bin_reader_a)
     {function _sk_(buf,pos_ref,vtag)
       {return bin_read_needs_length(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_needs_length$0(bin_reader_a[1],buf,pos_ref)},
              _sk_]}
    function bin_needs_length(bin_a)
     {var
       _si_=bin_reader_needs_length(bin_a[3]),
       _sj_=bin_writer_needs_length(bin_a[2]);
      return [0,bin_shape_needs_length(bin_a[1]),_sj_,_si_]}
    function sexp_of_needs_length(of_a,param)
     {var
       v_data=param[4],
       v_id=param[3],
       v_version=param[2],
       v_tag=param[1],
       arg=caml_call1(of_a,v_data),
       bnds=[0,[1,[0,_aL_,[0,arg,0]]],0],
       arg$0=caml_call1(Query_id[10],v_id),
       bnds$0=[0,[1,[0,_aM_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Sexplib_Std[15],v_version),
       bnds$1=[0,[1,[0,_aN_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Rpc_tag[10],v_tag),
       bnds$2=[0,[1,[0,_aO_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function bin_read_t$8(of_a,buf,pos_ref,vint)
     {return bin_read_needs_length(of_a,buf,pos_ref,vint)}
    function bin_read_t$9(of_a,buf,pos_ref)
     {return bin_read_needs_length$0(of_a,buf,pos_ref)}
    function bin_reader_t$3(bin_reader_a)
     {function _sh_(buf,pos_ref,vtag)
       {return bin_read_t$8(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$9(bin_reader_a[1],buf,pos_ref)},
              _sh_]}
    var
     Query=
      [0,
       bin_shape_needs_length,
       bin_size_needs_length,
       bin_write_needs_length,
       bin_writer_needs_length,
       bin_read_needs_length,
       bin_read_needs_length$0,
       bin_reader_needs_length,
       bin_needs_length,
       sexp_of_needs_length,
       bin_read_t$8,
       bin_read_t$9,
       bin_reader_t$3],
     _aP_=caml_call1(Bin_prot_Shape[3][1],cst_a$3),
     _aQ_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_75_13),
     _aR_=caml_call2(Bin_prot_Shape[15],_aQ_,_aP_),
     _aS_=[0,[0,cst_data$0,caml_call1(Rpc_result[1],_aR_)],0],
     _aT_=caml_call1(Bin_prot_Shape[8],[0,[0,cst_id$0,Query_id[5]],_aS_]),
     _aU_=[0,caml_call1(Bin_prot_Shape[3][1],cst_a$4),0],
     _aV_=
      [0,[0,caml_call1(Bin_prot_Shape[2][1],cst_needs_length$1),_aU_,_aT_],0],
     _aW_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_73_2),
     group$4=caml_call2(Bin_prot_Shape[6],_aW_,_aV_);
    function bin_shape_needs_length$0(a)
     {var _sg_=caml_call1(Bin_prot_Shape[2][1],cst_needs_length$2);
      return caml_call1(caml_call2(Bin_prot_Shape[14],group$4,_sg_),[0,a,0])}
    function bin_size_needs_length$0(size_of_a,param)
     {var
       v2=param[2],
       v1=param[1],
       _se_=caml_call1(Query_id[1],v1),
       size=caml_call2(Bin_prot_Common[23],0,_se_),
       _sf_=caml_call2(Rpc_result[2],size_of_a,v2);
      return caml_call2(Bin_prot_Common[23],size,_sf_)}
    function bin_write_needs_length$0(write_a,buf,pos,param)
     {var v2=param[2],v1=param[1],pos$0=caml_call3(Query_id[2],buf,pos,v1);
      return caml_call3(caml_call1(Rpc_result[3],write_a),buf,pos$0,v2)}
    function bin_writer_needs_length$0(bin_writer_a)
     {function _sa_(v)
       {var _sb_=bin_writer_a[2];
        return function(_sc_,_sd_)
         {return bin_write_needs_length$0(_sb_,v,_sc_,_sd_)}}
      return [0,
              function(v){return bin_size_needs_length$0(bin_writer_a[1],v)},
              _sa_]}
    function bin_read_needs_length$1(of_a,buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],cst_src_protocol_ml_Response_n,pos_ref[1])}
    function bin_read_needs_length$2(of_a,buf,pos_ref)
     {var
       v_id=caml_call2(Query_id[3],buf,pos_ref),
       v_data=caml_call2(caml_call1(Rpc_result[6],of_a),buf,pos_ref);
      return [0,v_id,v_data]}
    function bin_reader_needs_length$0(bin_reader_a)
     {function _r$_(buf,pos_ref,vtag)
       {return bin_read_needs_length$1(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_needs_length$2(bin_reader_a[1],buf,pos_ref)},
              _r$_]}
    function bin_needs_length$0(bin_a)
     {var
       _r9_=bin_reader_needs_length$0(bin_a[3]),
       _r__=bin_writer_needs_length$0(bin_a[2]);
      return [0,bin_shape_needs_length$0(bin_a[1]),_r__,_r9_]}
    function sexp_of_needs_length$0(of_a,param)
     {var
       v_data=param[2],
       v_id=param[1],
       arg=caml_call2(Rpc_result[9],of_a,v_data),
       bnds=[0,[1,[0,_aX_,[0,arg,0]]],0],
       arg$0=caml_call1(Query_id[10],v_id),
       bnds$0=[0,[1,[0,_aY_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function bin_read_t$10(of_a,buf,pos_ref,vint)
     {return bin_read_needs_length$1(of_a,buf,pos_ref,vint)}
    function bin_read_t$11(of_a,buf,pos_ref)
     {return bin_read_needs_length$2(of_a,buf,pos_ref)}
    function bin_reader_t$4(bin_reader_a)
     {function _r8_(buf,pos_ref,vtag)
       {return bin_read_t$10(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$11(bin_reader_a[1],buf,pos_ref)},
              _r8_]}
    var
     Response=
      [0,
       bin_shape_needs_length$0,
       bin_size_needs_length$0,
       bin_write_needs_length$0,
       bin_writer_needs_length$0,
       bin_read_needs_length$1,
       bin_read_needs_length$2,
       bin_reader_needs_length$0,
       bin_needs_length$0,
       sexp_of_needs_length$0,
       bin_read_t$10,
       bin_read_t$11,
       bin_reader_t$4],
     _aZ_=[0,caml_call2(Bin_prot_Shape[10],cst_Abort,0),0],
     _a0_=caml_call1(Bin_prot_Shape[3][1],cst_a$5),
     _a1_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_82_36),
     _a2_=[0,caml_call2(Bin_prot_Shape[15],_a1_,_a0_)],
     _a3_=[0,caml_call2(Bin_prot_Shape[10],cst_Query,_a2_),_aZ_],
     _a4_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_82_25),
     _a5_=caml_call2(Bin_prot_Shape[12],_a4_,_a3_),
     _a6_=[0,caml_call1(Bin_prot_Shape[3][1],cst_a$6),0],
     _a7_=
      [0,[0,caml_call1(Bin_prot_Shape[2][1],cst_needs_length$3),_a6_,_a5_],0],
     _a8_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_82_2),
     group$5=caml_call2(Bin_prot_Shape[6],_a8_,_a7_);
    function bin_shape_needs_length$1(a)
     {var _r7_=caml_call1(Bin_prot_Shape[2][1],cst_needs_length$4);
      return caml_call1(caml_call2(Bin_prot_Shape[14],group$5,_r7_),[0,a,0])}
    function bin_size_needs_length$1(size_of_a,param)
     {if(typeof param !== "number" && -250086680 === param[1])
       {var args=param[2],size_args=caml_call1(size_of_a,args);
        return caml_call2(Bin_prot_Common[23],size_args,4)}
      return 4}
    function bin_write_needs_length$1(write_a,buf,pos,param)
     {if(typeof param === "number")
       return caml_call3(Bin_prot_Write[29],buf,pos,774323088);
      var
       args=param[2],
       pos$0=caml_call3(Bin_prot_Write[29],buf,pos,-250086680);
      return caml_call3(write_a,buf,pos$0,args)}
    function bin_writer_needs_length$1(bin_writer_a)
     {function _r3_(v)
       {var _r4_=bin_writer_a[2];
        return function(_r5_,_r6_)
         {return bin_write_needs_length$1(_r4_,v,_r5_,_r6_)}}
      return [0,
              function(v){return bin_size_needs_length$1(bin_writer_a[1],v)},
              _r3_]}
    function bin_read_needs_length$3(of_a,buf,pos_ref,vint)
     {if(-250086680 === vint)
       {var arg_1=caml_call2(of_a,buf,pos_ref);return [0,-250086680,arg_1]}
      if(774323088 === vint)return 774323088;
      throw Bin_prot_Common[13]}
    function bin_read_needs_length$4(of_a,buf,pos_ref)
     {var vint=caml_call2(Bin_prot_Read[28],buf,pos_ref);
      try
       {var
         _rY_=
          function(_r0_,_r1_,_r2_)
            {return bin_read_needs_length$3(of_a,_r0_,_r1_,_r2_)}
           (buf,pos_ref,vint);
        return _rY_}
      catch(_rZ_)
       {_rZ_ = caml_wrap_exception(_rZ_);
        if(_rZ_ === Bin_prot_Common[13])
         return caml_call2(Bin_prot_Common[18],err,pos_ref[1]);
        throw _rZ_}}
    function bin_reader_needs_length$1(bin_reader_a)
     {function _rX_(buf,pos_ref,vtag)
       {return bin_read_needs_length$3(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_needs_length$4(bin_reader_a[1],buf,pos_ref)},
              _rX_]}
    function bin_needs_length$1(bin_a)
     {var
       _rV_=bin_reader_needs_length$1(bin_a[3]),
       _rW_=bin_writer_needs_length$1(bin_a[2]);
      return [0,bin_shape_needs_length$1(bin_a[1]),_rW_,_rV_]}
    function bin_read_t$12(of_a,buf,pos_ref,vint)
     {return bin_read_needs_length$3(of_a,buf,pos_ref,vint)}
    function bin_read_t$13(of_a,buf,pos_ref)
     {return bin_read_needs_length$4(of_a,buf,pos_ref)}
    function bin_reader_t$5(bin_reader_a)
     {function _rU_(buf,pos_ref,vtag)
       {return bin_read_t$12(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$13(bin_reader_a[1],buf,pos_ref)},
              _rU_]}
    function bin_read_nat0_t(buf,pos_ref,vint)
     {return bin_read_needs_length$3(_g_,buf,pos_ref,vint)}
    function bin_read_nat0_t$0(buf,pos_ref)
     {return bin_read_needs_length$4(_g_,buf,pos_ref)}
    var bin_reader_nat0_t=[0,bin_read_nat0_t$0,bin_read_nat0_t];
    function bin_size_nat0_t(v){return bin_size_needs_length$1(_c_,v)}
    function bin_write_nat0_t(buf,pos,v)
     {return bin_write_needs_length$1(_e_,buf,pos,v)}
    var
     bin_writer_nat0_t=[0,bin_size_nat0_t,bin_write_nat0_t],
     Stream_query=
      [0,
       bin_shape_needs_length$1,
       bin_size_needs_length$1,
       bin_write_needs_length$1,
       bin_writer_needs_length$1,
       bin_read_needs_length$3,
       bin_read_needs_length$4,
       bin_reader_needs_length$1,
       bin_needs_length$1,
       bin_read_t$12,
       bin_read_t$13,
       bin_reader_t$5,
       bin_read_nat0_t,
       bin_read_nat0_t$0,
       bin_reader_nat0_t,
       bin_size_nat0_t,
       bin_write_nat0_t,
       bin_writer_nat0_t],
     _a9_=caml_call1(Bin_prot_Shape[3][1],cst_error),
     _a__=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_90_36),
     _a$_=caml_call2(Bin_prot_Shape[15],_a__,_a9_),
     _ba_=caml_call1(Bin_prot_Shape[3][1],cst_response),
     _bb_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_90_25),
     _bc_=caml_call2(Bin_prot_Shape[15],_bb_,_ba_),
     _bd_=
      [0,
       [0,cst_initial,caml_call1(caml_call1(Core_kernel_Result[1],_bc_),_a$_)],
       0],
     _be_=
      caml_call1
       (Bin_prot_Shape[8],[0,[0,cst_unused_query_id,Unused_query_id[5]],_bd_]),
     _bf_=[0,caml_call1(Bin_prot_Shape[3][1],cst_error$0),0],
     _bg_=[0,caml_call1(Bin_prot_Shape[3][1],cst_response$0),_bf_],
     _bh_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$8),_bg_,_be_],0],
     _bi_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_88_2),
     group$6=caml_call2(Bin_prot_Shape[6],_bi_,_bh_);
    function bin_shape_t$4(response,error)
     {var _rT_=caml_call1(Bin_prot_Shape[2][1],cst_t$9);
      return caml_call1
              (caml_call2(Bin_prot_Shape[14],group$6,_rT_),
               [0,response,[0,error,0]])}
    function bin_size_t$3(size_of_response,size_of_error,param)
     {var
       v2=param[2],
       v1=param[1],
       _rR_=caml_call1(Unused_query_id[1],v1),
       size=caml_call2(Bin_prot_Common[23],0,_rR_),
       _rS_=
        caml_call3(Core_kernel_Result[2],size_of_response,size_of_error,v2);
      return caml_call2(Bin_prot_Common[23],size,_rS_)}
    function bin_write_t$3(write_response,write_error,buf,pos,param)
     {var
       v2=param[2],
       v1=param[1],
       pos$0=caml_call3(Unused_query_id[2],buf,pos,v1);
      return caml_call3
              (caml_call2(Core_kernel_Result[3],write_response,write_error),
               buf,
               pos$0,
               v2)}
    function bin_writer_t$3(bin_writer_response,bin_writer_error)
     {function _rM_(v)
       {var _rN_=bin_writer_error[2],_rO_=bin_writer_response[2];
        return function(_rP_,_rQ_)
         {return bin_write_t$3(_rO_,_rN_,v,_rP_,_rQ_)}}
      return [0,
              function(v)
               {return bin_size_t$3
                        (bin_writer_response[1],bin_writer_error[1],v)},
              _rM_]}
    function bin_read_t$14(of_response,of_error,buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],cst_src_protocol_ml_Stream_ini,pos_ref[1])}
    function bin_read_t$15(of_response,of_error,buf,pos_ref)
     {var
       v_unused_query_id=caml_call2(Unused_query_id[3],buf,pos_ref),
       v_initial=
        caml_call2
         (caml_call2(Core_kernel_Result[4],of_response,of_error),buf,pos_ref);
      return [0,v_unused_query_id,v_initial]}
    function bin_reader_t$6(bin_reader_response,bin_reader_error)
     {function _rL_(buf,pos_ref,vtag)
       {return bin_read_t$14
                (bin_reader_response[1],bin_reader_error[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$15
                        (bin_reader_response[1],bin_reader_error[1],buf,pos_ref)},
              _rL_]}
    function bin_t$3(bin_response,bin_error)
     {var
       _rJ_=bin_reader_t$6(bin_response[3],bin_error[3]),
       _rK_=bin_writer_t$3(bin_response[2],bin_error[2]);
      return [0,bin_shape_t$4(bin_response[1],bin_error[1]),_rK_,_rJ_]}
    function sexp_of_t$3(of_response,of_error,param)
     {var
       v_initial=param[2],
       v_unused_query_id=param[1],
       arg=caml_call3(Core_kernel_Result[10],of_response,of_error,v_initial),
       bnds=[0,[1,[0,_bj_,[0,arg,0]]],0],
       arg$0=caml_call1(Unused_query_id[9],v_unused_query_id),
       bnds$0=[0,[1,[0,_bk_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    var
     Stream_initial_message=
      [0,
       bin_shape_t$4,
       bin_size_t$3,
       bin_write_t$3,
       bin_writer_t$3,
       bin_read_t$14,
       bin_read_t$15,
       bin_reader_t$6,
       bin_t$3,
       sexp_of_t$3],
     _bl_=[0,caml_call2(Bin_prot_Shape[10],cst_Eof,0),0],
     _bm_=caml_call1(Bin_prot_Shape[3][1],cst_a$7),
     _bn_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_96_33),
     _bo_=[0,caml_call2(Bin_prot_Shape[15],_bn_,_bm_)],
     _bp_=[0,caml_call2(Bin_prot_Shape[10],cst_Ok,_bo_),_bl_],
     _bq_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_96_25),
     _br_=caml_call2(Bin_prot_Shape[12],_bq_,_bp_),
     _bs_=[0,caml_call1(Bin_prot_Shape[3][1],cst_a$8),0],
     _bt_=
      [0,[0,caml_call1(Bin_prot_Shape[2][1],cst_needs_length$5),_bs_,_br_],0],
     _bu_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_96_2),
     group$7=caml_call2(Bin_prot_Shape[6],_bu_,_bt_);
    function bin_shape_needs_length$2(a)
     {var _rI_=caml_call1(Bin_prot_Shape[2][1],cst_needs_length$6);
      return caml_call1(caml_call2(Bin_prot_Shape[14],group$7,_rI_),[0,a,0])}
    function bin_size_needs_length$2(size_of_a,param)
     {if(typeof param !== "number" && 17724 === param[1])
       {var args=param[2],size_args=caml_call1(size_of_a,args);
        return caml_call2(Bin_prot_Common[23],size_args,4)}
      return 4}
    function bin_write_needs_length$2(write_a,buf,pos,param)
     {if(typeof param === "number")
       return caml_call3(Bin_prot_Write[29],buf,pos,3456156);
      var args=param[2],pos$0=caml_call3(Bin_prot_Write[29],buf,pos,17724);
      return caml_call3(write_a,buf,pos$0,args)}
    function bin_writer_needs_length$2(bin_writer_a)
     {function _rE_(v)
       {var _rF_=bin_writer_a[2];
        return function(_rG_,_rH_)
         {return bin_write_needs_length$2(_rF_,v,_rG_,_rH_)}}
      return [0,
              function(v){return bin_size_needs_length$2(bin_writer_a[1],v)},
              _rE_]}
    function bin_read_needs_length$5(of_a,buf,pos_ref,vint)
     {if(17724 === vint)
       {var arg_1=caml_call2(of_a,buf,pos_ref);return [0,17724,arg_1]}
      if(3456156 === vint)return 3456156;
      throw Bin_prot_Common[13]}
    function bin_read_needs_length$6(of_a,buf,pos_ref)
     {var vint=caml_call2(Bin_prot_Read[28],buf,pos_ref);
      try
       {var
         _rz_=
          function(_rB_,_rC_,_rD_)
            {return bin_read_needs_length$5(of_a,_rB_,_rC_,_rD_)}
           (buf,pos_ref,vint);
        return _rz_}
      catch(_rA_)
       {_rA_ = caml_wrap_exception(_rA_);
        if(_rA_ === Bin_prot_Common[13])
         return caml_call2(Bin_prot_Common[18],err$0,pos_ref[1]);
        throw _rA_}}
    function bin_reader_needs_length$2(bin_reader_a)
     {function _ry_(buf,pos_ref,vtag)
       {return bin_read_needs_length$5(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_needs_length$6(bin_reader_a[1],buf,pos_ref)},
              _ry_]}
    function bin_needs_length$2(bin_a)
     {var
       _rw_=bin_reader_needs_length$2(bin_a[3]),
       _rx_=bin_writer_needs_length$2(bin_a[2]);
      return [0,bin_shape_needs_length$2(bin_a[1]),_rx_,_rw_]}
    function bin_read_t$16(of_a,buf,pos_ref,vint)
     {return bin_read_needs_length$5(of_a,buf,pos_ref,vint)}
    function bin_read_t$17(of_a,buf,pos_ref)
     {return bin_read_needs_length$6(of_a,buf,pos_ref)}
    function bin_reader_t$7(bin_reader_a)
     {function _rv_(buf,pos_ref,vtag)
       {return bin_read_t$16(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$17(bin_reader_a[1],buf,pos_ref)},
              _rv_]}
    function bin_read_nat0_t$1(buf,pos_ref,vint)
     {return bin_read_needs_length$5(_g_,buf,pos_ref,vint)}
    function bin_read_nat0_t$2(buf,pos_ref)
     {return bin_read_needs_length$6(_g_,buf,pos_ref)}
    var bin_reader_nat0_t$0=[0,bin_read_nat0_t$2,bin_read_nat0_t$1];
    function bin_size_nat0_t$0(v){return bin_size_needs_length$2(_c_,v)}
    function bin_write_nat0_t$0(buf,pos,v)
     {return bin_write_needs_length$2(_e_,buf,pos,v)}
    var
     bin_writer_nat0_t$0=[0,bin_size_nat0_t$0,bin_write_nat0_t$0],
     Stream_response_data=
      [0,
       bin_shape_needs_length$2,
       bin_size_needs_length$2,
       bin_write_needs_length$2,
       bin_writer_needs_length$2,
       bin_read_needs_length$5,
       bin_read_needs_length$6,
       bin_reader_needs_length$2,
       bin_needs_length$2,
       bin_read_t$16,
       bin_read_t$17,
       bin_reader_t$7,
       bin_read_nat0_t$1,
       bin_read_nat0_t$2,
       bin_reader_nat0_t$0,
       bin_size_nat0_t$0,
       bin_write_nat0_t$0,
       bin_writer_nat0_t$0],
     _bv_=caml_call1(Bin_prot_Shape[3][1],cst_a$9),
     _bw_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_105_19),
     _bx_=caml_call2(Bin_prot_Shape[15],_bw_,_bv_),
     _by_=[0,[0,cst_Response,[0,caml_call1(Response[1],_bx_),0]],0],
     _bz_=caml_call1(Bin_prot_Shape[3][1],cst_a$10),
     _bA_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_104_19),
     _bB_=caml_call2(Bin_prot_Shape[15],_bA_,_bz_),
     _bD_=[0,_bC_,[0,[0,cst_Query$0,[0,caml_call1(Query[1],_bB_),0]],_by_]],
     _bE_=caml_call1(Bin_prot_Shape[9],_bD_),
     _bF_=[0,caml_call1(Bin_prot_Shape[3][1],cst_a$11),0],
     _bG_=
      [0,[0,caml_call1(Bin_prot_Shape[2][1],cst_needs_length$7),_bF_,_bE_],0],
     _bH_=caml_call1(Bin_prot_Shape[4][1],cst_src_protocol_ml_102_2),
     group$8=caml_call2(Bin_prot_Shape[6],_bH_,_bG_);
    function bin_shape_needs_length$3(a)
     {var _ru_=caml_call1(Bin_prot_Shape[2][1],cst_needs_length$8);
      return caml_call1(caml_call2(Bin_prot_Shape[14],group$8,_ru_),[0,a,0])}
    function bin_size_needs_length$3(size_of_a,param)
     {if(typeof param === "number")
       return 1;
      else
       {if(0 === param[0])
         {var v1=param[1],_rs_=caml_call2(Query[2],size_of_a,v1);
          return caml_call2(Bin_prot_Common[23],1,_rs_)}
        var v1$0=param[1],_rt_=caml_call2(Response[2],size_of_a,v1$0);
        return caml_call2(Bin_prot_Common[23],1,_rt_)}}
    function bin_write_needs_length$3(write_a,buf,pos,param)
     {if(typeof param === "number")
       return caml_call3(Bin_prot_Write[30],buf,pos,0);
      else
       {if(0 === param[0])
         {var v1=param[1],pos$0=caml_call3(Bin_prot_Write[30],buf,pos,1);
          return caml_call3(caml_call1(Query[3],write_a),buf,pos$0,v1)}
        var v1$0=param[1],pos$1=caml_call3(Bin_prot_Write[30],buf,pos,2);
        return caml_call3(caml_call1(Response[3],write_a),buf,pos$1,v1$0)}}
    function bin_writer_needs_length$3(bin_writer_a)
     {function _ro_(v)
       {var _rp_=bin_writer_a[2];
        return function(_rq_,_rr_)
         {return bin_write_needs_length$3(_rp_,v,_rq_,_rr_)}}
      return [0,
              function(v){return bin_size_needs_length$3(bin_writer_a[1],v)},
              _ro_]}
    function bin_read_needs_length$7(of_a,buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],cst_src_protocol_ml_Message_ne,pos_ref[1])}
    function bin_read_needs_length$8(of_a,buf,pos_ref)
     {var match=caml_call2(Bin_prot_Read[29],buf,pos_ref);
      if(2 < match >>> 0)
       return caml_call2(Bin_prot_Common[18],_bI_,pos_ref[1]);
      switch(match)
       {case 0:return 0;
        case 1:
         var arg_1=caml_call2(caml_call1(Query[6],of_a),buf,pos_ref);
         return [0,arg_1];
        default:
         var arg_1$0=caml_call2(caml_call1(Response[6],of_a),buf,pos_ref);
         return [1,arg_1$0]}}
    function bin_reader_needs_length$3(bin_reader_a)
     {function _rn_(buf,pos_ref,vtag)
       {return bin_read_needs_length$7(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_needs_length$8(bin_reader_a[1],buf,pos_ref)},
              _rn_]}
    function bin_needs_length$3(bin_a)
     {var
       _rl_=bin_reader_needs_length$3(bin_a[3]),
       _rm_=bin_writer_needs_length$3(bin_a[2]);
      return [0,bin_shape_needs_length$3(bin_a[1]),_rm_,_rl_]}
    function sexp_of_t$4(of_a,param)
     {if(typeof param === "number")
       return _bJ_;
      else
       {if(0 === param[0])
         {var v0=param[1],v0$0=caml_call2(Query[9],of_a,v0);
          return [1,[0,_bK_,[0,v0$0,0]]]}
        var v0$1=param[1],v0$2=caml_call2(Response[9],of_a,v0$1);
        return [1,[0,_bL_,[0,v0$2,0]]]}}
    function bin_read_t$18(of_a,buf,pos_ref,vint)
     {return bin_read_needs_length$7(of_a,buf,pos_ref,vint)}
    function bin_read_t$19(of_a,buf,pos_ref)
     {return bin_read_needs_length$8(of_a,buf,pos_ref)}
    function bin_reader_t$8(bin_reader_a)
     {function _rk_(buf,pos_ref,vtag)
       {return bin_read_t$18(bin_reader_a[1],buf,pos_ref,vtag)}
      return [0,
              function(buf,pos_ref)
               {return bin_read_t$19(bin_reader_a[1],buf,pos_ref)},
              _rk_]}
    function bin_read_nat0_t$3(buf,pos_ref,vint)
     {return bin_read_needs_length$7(_g_,buf,pos_ref,vint)}
    function bin_read_nat0_t$4(buf,pos_ref)
     {return bin_read_needs_length$8(_g_,buf,pos_ref)}
    var bin_reader_nat0_t$1=[0,bin_read_nat0_t$4,bin_read_nat0_t$3];
    function bin_size_nat0_t$1(v){return bin_size_needs_length$3(_c_,v)}
    function bin_write_nat0_t$1(buf,pos,v)
     {return bin_write_needs_length$3(_e_,buf,pos,v)}
    var
     bin_writer_nat0_t$1=[0,bin_size_nat0_t$1,bin_write_nat0_t$1],
     Message=
      [0,
       bin_shape_needs_length$3,
       bin_size_needs_length$3,
       bin_write_needs_length$3,
       bin_writer_needs_length$3,
       bin_read_needs_length$7,
       bin_read_needs_length$8,
       bin_reader_needs_length$3,
       bin_needs_length$3,
       sexp_of_t$4,
       bin_read_t$18,
       bin_read_t$19,
       bin_reader_t$8,
       sexp_of_t$4,
       bin_read_nat0_t$3,
       bin_read_nat0_t$4,
       bin_reader_nat0_t$1,
       bin_size_nat0_t$1,
       bin_write_nat0_t$1,
       bin_writer_nat0_t$1];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$10);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_rpc_kernel_Protocol$0);
    var
     Async_rpc_kernel_Protocol=
      [0,
       Rpc_tag,
       Query_id,
       Unused_query_id,
       Rpc_error,
       Rpc_result,
       Query,
       Response,
       Stream_query,
       Stream_initial_message,
       Stream_response_data,
       Message];
    caml_register_global
     (762,Async_rpc_kernel_Protocol,"Async_rpc_kernel__Protocol");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_rpc_kernel_Transport);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_rpc_kernel$11);
    caml_call1(Expect_test_collector[4][1],cst_src_transport_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$12,cst$4);
    var Handler_result=[0];
    function sexp_of_message_too_big(param)
     {var
       v_max_message_size=param[2],
       v_size=param[1],
       arg=caml_call1(Core_kernel[340],v_max_message_size),
       bnds=[0,[1,[0,_bM_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[340],v_size),
       bnds$0=[0,[1,[0,_bN_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function sexp_of_t$5(of_a,param)
     {if(typeof param === "number")
       return _bO_;
      else
       {if(0 === param[0])
         {var v0=param[1],v0$0=caml_call1(of_a,v0);
          return [1,[0,_bP_,[0,v0$0,0]]]}
        var v0$1=param[1],v0$2=sexp_of_message_too_big(v0$1);
        return [1,[0,_bQ_,[0,v0$2,0]]]}}
    var Send_result=[0,sexp_of_message_too_big,sexp_of_t$5];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$13);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_rpc_kernel_Transport$0);
    var Async_rpc_kernel_Transport_int=[0,Handler_result,Send_result];
    caml_register_global
     (763,Async_rpc_kernel_Transport_int,"Async_rpc_kernel__Transport_intf");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_rpc_kernel_Transport$1);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_rpc_kernel$14);
    caml_call1(Expect_test_collector[4][1],cst_src_transport_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$15,cst$5);
    var length=8;
    function unsafe_get_payload_length(buf,pos)
     {return caml_call2(Core_kernel_Bigstring[78],buf,pos)}
    function unsafe_set_payload_length(buf,pos,payload_len)
     {return caml_call3(Core_kernel_Bigstring[82],buf,pos,payload_len)}
    var Header=[0,length,unsafe_get_payload_length,unsafe_set_payload_length];
    function pack(m,t){return [0,m,t]}
    function sexp_of_t$6(param)
     {var t=param[2],M=param[1];return caml_call1(M[1],t)}
    function close(param){var t=param[2],M=param[1];return caml_call1(M[2],t)}
    function is_closed(param)
     {var t=param[2],M=param[1];return caml_call1(M[3],t)}
    function read_forever(param,on_message,on_end_of_batch)
     {var t=param[2],M=param[1];
      return caml_call3(M[4],t,on_message,on_end_of_batch)}
    function read_one_message_bin_prot(t,bin_reader)
     {function _ri_(_rj_){return 0}
      return read_forever
              (t,
               function(buf,pos,len)
                {var pos_ref=[0,pos],x=caml_call2(bin_reader[1],buf,pos_ref);
                 return caml_call2(Core_kernel[90],pos_ref[1],pos + len | 0)
                         ?caml_call4
                           (Core_kernel[219],_bR_,pos_ref[1] - pos | 0,len,0)
                         :[0,x]},
               _ri_)}
    function pack$0(M,t){return [0,[0,M,t,caml_call1(M[6],t)]]}
    function sexp_of_t$7(param)
     {var match=param[1],t=match[2],M=match[1];return caml_call1(M[1],t)}
    function close$0(param)
     {var match=param[1],t=match[2],M=match[1];return caml_call1(M[2],t)}
    function is_closed$0(param)
     {var match=param[1],t=match[2],M=match[1];return caml_call1(M[3],t)}
    function monitor(param)
     {var match=param[1],t=match[2],M=match[1];return caml_call1(M[4],t)}
    function bytes_to_write(param)
     {var match=param[1],t=match[2],M=match[1];return caml_call1(M[5],t)}
    function flushed(param)
     {var match=param[1],t=match[2],M=match[1];return caml_call1(M[7],t)}
    function ready_to_write(param)
     {var match=param[1],t=match[2],M=match[1];return caml_call1(M[8],t)}
    function send_bin_prot(param,bin_writer,x)
     {var match=param[1],t=match[2],M=match[1];
      return caml_call3(M[9],t,bin_writer,x)}
    function send_bin_prot_and_bigstring(param,bin_writer,x,buf,pos,len)
     {var match=param[1],t=match[2],M=match[1];
      return caml_call6(M[10],t,bin_writer,x,buf,pos,len)}
    function send_bin_prot_and_bigstring_no(param,bin_writer,x,buf,pos,len)
     {var match=param[1],t=match[2],M=match[1];
      return caml_call6(M[11],t,bin_writer,x,buf,pos,len)}
    function stopped(param)
     {var match=param[1],stopped=match[3];return stopped}
    function can_send(param)
     {var
       match=param[1],
       stopped=match[3],
       t=match[2],
       M=match[1],
       _rg_=caml_call1(M[3],t),
       _rh_=_rg_ || caml_call1(Async_kernel_Deferred[7],stopped);
      return 1 - _rh_}
    function transfer(t,opt,pipe,f)
     {if(opt)
       var sth=opt[1],max_num_values_per_read=sth;
      else
       var max_num_values_per_read=1000;
      function _q7_(param)
       {function _re_(param){return 17724}
        var _rf_=flushed(t);
        return caml_call2(Async_kernel[21],_rf_,_re_)}
      var consumer=caml_call2(Async_kernel_Pipe[22],pipe,_q7_);
      function _q8_(ivar)
       {function iter(param)
         {var _ra_=can_send(t);
          if(_ra_)
           {var
             match=
              caml_call3
               (Async_kernel_Pipe[36],
                [0,consumer],
                [0,max_num_values_per_read],
                pipe);
            if(typeof match === "number")
             {if(3456156 <= match)
               return caml_call2(Async_kernel_Ivar[14],ivar,0);
              var
               _rb_=function(param){return iter(0)},
               _rc_=caml_call1(Async_kernel_Pipe[41],pipe);
              return caml_call2(Async_kernel[16],_rc_,_rb_)}
            var q=match[2];
            caml_call2(Core_kernel_Queue[15],q,f);
            caml_call1(Async_kernel_Pipe[21][1],consumer);
            var _rd_=ready_to_write(t);
            return caml_call2(Async_kernel[16],_rd_,iter)}
          return _ra_}
        return iter(0)}
      var end_of_pipe=caml_call1(Async_kernel_Deferred[3],_q8_);
      function _q9_(param){return caml_call1(Async_kernel_Pipe[15],pipe)}
      var
       _q__=[0,end_of_pipe,[0,stopped(t),0]],
       _q$_=caml_call1(Async_kernel_Deferred[23],_q__);
      return caml_call2(Async_kernel[21],_q$_,_q9_)}
    function sexp_of_t$8(param)
     {var
       v_writer=param[2],
       v_reader=param[1],
       arg=sexp_of_t$7(v_writer),
       bnds=[0,[1,[0,_bS_,[0,arg,0]]],0],
       arg$0=sexp_of_t$6(v_reader),
       bnds$0=[0,[1,[0,_bT_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function close$1(t)
     {function _q5_(param){return close(t[1])}
      var _q6_=close$0(t[2]);
      return caml_call2(Async_kernel[20],_q6_,_q5_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$16);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_rpc_kernel_Transport$2);
    var
     _bU_=
      [0,
       sexp_of_t$7,
       close$0,
       is_closed$0,
       monitor,
       bytes_to_write,
       stopped,
       flushed,
       ready_to_write,
       send_bin_prot,
       send_bin_prot_and_bigstring,
       send_bin_prot_and_bigstring_no,
       pack$0,
       can_send,
       transfer],
     _bV_=
      [0,
       sexp_of_t$6,
       close,
       is_closed,
       read_forever,
       pack,
       read_one_message_bin_prot],
     Async_rpc_kernel_Transport=[0,Header,_bV_,_bU_,sexp_of_t$8,close$1];
    caml_register_global
     (769,Async_rpc_kernel_Transport,"Async_rpc_kernel__Transport");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_rpc_kernel_Implement);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_rpc_kernel$17);
    caml_call1(Expect_test_collector[4][1],cst_src_implementation_types_m);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$18,cst$6);
    var
     Direct_stream_writer_id=caml_call1(Core_kernel_Unique_id[2],[0]),
     Implementation=caml_call2(CamlinternalMod[1],_bX_,_bW_),
     Implementations=caml_call2(CamlinternalMod[1],_bZ_,_bY_),
     Direct_stream_writer=caml_call2(CamlinternalMod[1],_b1_,_b0_),
     Cached_stream_writer=caml_call2(CamlinternalMod[1],_b3_,_b2_);
    caml_call3(CamlinternalMod[2],_b4_,Implementation,Implementation);
    caml_call3(CamlinternalMod[2],_b5_,Implementations,Implementations);
    caml_call3
     (CamlinternalMod[2],_b6_,Direct_stream_writer,Direct_stream_writer);
    caml_call3
     (CamlinternalMod[2],_b7_,Cached_stream_writer,Cached_stream_writer);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$19);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_rpc_kernel_Implement$0);
    var
     Async_rpc_kernel_Implementatio=
      [0,
       Direct_stream_writer_id,
       Implementation,
       Implementations,
       Direct_stream_writer,
       Cached_stream_writer];
    caml_register_global
     (771,
      Async_rpc_kernel_Implementatio,
      "Async_rpc_kernel__Implementation_types");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_rpc_kernel_Implement$1);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_rpc_kernel$20);
    caml_call1(Expect_test_collector[4][1],cst_src_implementation_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$21,cst$7);
    function sexp_of_t$9(param)
     {var
       v_writer=param[2],
       v_query_id=param[1],
       v_responded=param[3],
       arg=caml_call1(Core_kernel[289],v_responded),
       bnds=[0,[1,[0,_b8_,[0,arg,0]]],0],
       arg$0=caml_call1(_bU_[1],v_writer),
       bnds$0=[0,[1,[0,_b9_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Query_id[10],v_query_id),
       bnds$1=[0,[1,[0,_b__,[0,arg$1,0]]],bnds$0];
      return [1,bnds$1]}
    function create(query_id,writer){return [0,query_id,writer,0]}
    var Responder=[0,sexp_of_t$9,create],Expert=[0,Responder];
    function lift(t,f)
     {switch(t[0])
       {case 0:
         var impl=t[2],bin_msg=t[1];
         return [0,
                 bin_msg,
                 function(state,str)
                  {return caml_call2(impl,caml_call1(f,state),str)}];
        case 1:
         var impl$0=t[1];
         return [1,
                 function(state,buf,pos,len)
                  {return caml_call4(impl$0,caml_call1(f,state),buf,pos,len)}];
        case 2:
         var result_mode=t[4],impl$1=t[3],bin_response=t[2],bin_query=t[1];
         return [2,
                 bin_query,
                 bin_response,
                 function(state,q)
                  {return caml_call2(impl$1,caml_call1(f,state),q)},
                 result_mode];
        case 3:
         var result_mode$0=t[2],impl$2=t[1];
         return [3,
                 function(state,resp,buf,pos,len)
                  {return caml_call5
                           (impl$2,caml_call1(f,state),resp,buf,pos,len)},
                 result_mode$0];
        default:
         var impl$3=t[4],bin_u=t[3],bin_i=t[2],bin_q=t[1];
         if(0 === impl$3[0])
          var
           impl$4=impl$3[1],
           impl$5=
            [0,
             function(state,q)
              {return caml_call2(impl$4,caml_call1(f,state),q)}];
         else
          var
           impl$6=impl$3[1],
           impl$5=
            [1,
             function(state,q,w)
              {return caml_call3(impl$6,caml_call1(f,state),q,w)}];
         return [4,bin_q,bin_i,bin_u,impl$5]}}
    var F=[0,lift];
    function description(t)
     {var _q4_=t[2];return [0,caml_call1(Rpc_tag[12],t[1]),_q4_]}
    function lift$0(init,f)
     {var _q3_=caml_call2(F[1],init[3],f);return [0,init[1],init[2],_q3_]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$22);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_rpc_kernel_Implement$2);
    var Async_rpc_kernel_Implementatio$0=[0,Expert,F,description,lift$0];
    caml_register_global
     (772,Async_rpc_kernel_Implementatio$0,"Async_rpc_kernel__Implementation");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_rpc_kernel_Rpc_error);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_rpc_kernel$23);
    caml_call1(Expect_test_collector[4][1],cst_src_rpc_error_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$24,cst$8);
    var
     _cd_=Rpc_error[5],
     _ci_=Rpc_error[10],
     _b$_=Rpc_error[1],
     _ca_=Rpc_error[2],
     _cb_=Rpc_error[3],
     _cc_=Rpc_error[4],
     _ce_=Rpc_error[6],
     _cf_=Rpc_error[7],
     _cg_=Rpc_error[8],
     _ch_=Rpc_error[9],
     _cj_=Rpc_error[11],
     _ck_=Rpc_error[12],
     _cl_=Rpc_error[13],
     _cm_=Rpc_error[14],
     _cn_=Rpc_error[15],
     _co_=Rpc_error[16],
     _cp_=Rpc_error[17],
     _cq_=Rpc_error[18],
     _cr_=Rpc_error[19],
     _cs_=Rpc_error[20],
     _ct_=Rpc_error[21],
     _cu_=Rpc_error[22],
     _cv_=Rpc_error[23],
     _cw_=Rpc_error[24],
     _cx_=Rpc_error[25],
     _cy_=Rpc_error[26],
     _cz_=Rpc_error[27],
     _cA_=Rpc_error[28],
     _cB_=Rpc_error[29],
     include$1=
      caml_call1(Core_kernel_Sexpable[1],[0,Rpc_error[9],Rpc_error[10]]),
     _cC_=include$1[1],
     _cD_=include$1[2],
     Rpc=[248,cst_Async_rpc_kernel_Rpc_error$0,caml_fresh_oo_id(0)];
    function _cE_(param)
     {if(param[1] === Rpc)
       {var
         v1=param[3],
         v0=param[2],
         v0$0=caml_call1(_ci_,v0),
         v1$0=caml_call1(Core_kernel_Info[6],v1);
        return [1,[0,_cF_,[0,v0$0,[0,v1$0,0]]]]}
      throw [0,Assert_failure,_cG_]}
    caml_call3(Sexplib0_Sexp_conv[51][2],0,Rpc,_cE_);
    function raise(t,connection_description)
     {throw [0,Rpc,t,connection_description]}
    function sexp_of_t$10(t,get_connection_close_reason)
     {if(typeof t === "number")
       {var _q2_=caml_call1(get_connection_close_reason,0);
        return [1,[0,_cH_,[0,caml_call1(Core_kernel_Sexp[88],_q2_),0]]]}
      return caml_call1(_ci_,t)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$25);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_rpc_kernel_Rpc_error$1);
    var
     Async_rpc_kernel_Rpc_error=
      [0,
       _b$_,
       _ca_,
       _cb_,
       _cc_,
       _cd_,
       _ce_,
       _cf_,
       _cg_,
       _ch_,
       _cj_,
       _ck_,
       _cl_,
       _cm_,
       _cn_,
       _co_,
       _cp_,
       _cq_,
       _cr_,
       _cs_,
       _ct_,
       _cu_,
       _cv_,
       _cw_,
       _cx_,
       _cy_,
       _cz_,
       _cA_,
       _cB_,
       sexp_of_t$10,
       _cC_,
       _cD_,
       Rpc,
       raise];
    caml_register_global
     (775,Async_rpc_kernel_Rpc_error,"Async_rpc_kernel__Rpc_error");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_rpc_kernel_Rpc_resul);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_rpc_kernel$26);
    caml_call1(Expect_test_collector[4][1],cst_src_rpc_result_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$27,cst$9);
    var
     _cI_=caml_call1(Bin_prot_Shape[3][1],cst_a$12),
     _cJ_=caml_call1(Bin_prot_Shape[4][1],cst_src_rpc_result_ml_4_13),
     _cK_=caml_call2(Bin_prot_Shape[15],_cJ_,_cI_),
     _cL_=caml_call1(caml_call1(Core_kernel_Result[1],_cK_),_cd_),
     _cM_=[0,caml_call1(Bin_prot_Shape[3][1],cst_a$13),0],
     _cN_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$10),_cM_,_cL_],0],
     _cO_=caml_call1(Bin_prot_Shape[4][1],cst_src_rpc_result_ml_4_0);
    caml_call2(Bin_prot_Shape[6],_cO_,_cN_);
    function sexp_of_located_error(param)
     {var
       v_exn=param[2],
       v_location=param[1],
       arg=caml_call1(Base_Exn[1],v_exn),
       bnds=[0,[1,[0,_cP_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[455],v_location),
       bnds$0=[0,[1,[0,_cQ_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function uncaught_exn(location,exn)
     {return [1,[2,sexp_of_located_error([0,location,exn])]]}
    function bin_io_exn(location,exn)
     {return [1,[0,sexp_of_located_error([0,location,exn])]]}
    function try_with(run,location,f)
     {var x=caml_call7(Async_kernel_Monitor[16],0,0,0,0,run,0,f);
      function join(param)
       {if(0 === param[0]){var x=param[1];return x}
        var exn=param[1];
        return uncaught_exn(location,exn)}
      var match=caml_call1(Async_kernel_Deferred[5],x);
      if(match)
       {var x$0=match[1],_q1_=join(x$0);
        return caml_call1(Async_kernel[19],_q1_)}
      return caml_call2(Async_kernel[21],x,join)}
    function or_error
     (rpc_tag,
      rpc_version,
      connection_description,
      connection_close_started,
      param)
     {if(0 === param[0]){var x=param[1];return [0,x]}
      var
       rpc_error=param[1],
       rpc_error$0=
        sexp_of_t$10
         (rpc_error,
          function(param)
           {var
             close_reason=
              caml_call1(Async_kernel_Deferred[5],connection_close_started);
            return caml_call2
                    (Core_kernel[438],Core_kernel_Info[6],close_reason)}),
       _qX_=[0,[1,[0,_cR_,[0,caml_call1(Core_kernel[340],rpc_version),0]]],0],
       _qY_=[0,[1,[0,_cS_,[0,caml_call1(Rpc_tag[10],rpc_tag),0]]],_qX_],
       _qZ_=
        [0,
         [1,
          [0,
           _cT_,
           [0,caml_call1(Core_kernel_Info[6],connection_description),0]]],
         _qY_],
       _q0_=
        [1,
         [0,
          [1,[0,_cU_,[0,caml_call1(Core_kernel_Sexp[88],rpc_error$0),0]]],
          _qZ_]];
      return caml_call1(Core_kernel_Or_error[39],_q0_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$28);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_rpc_kernel_Rpc_resul$0);
    var
     Async_rpc_kernel_Rpc_result=
      [0,uncaught_exn,bin_io_exn,try_with,or_error];
    caml_register_global
     (779,Async_rpc_kernel_Rpc_result,"Async_rpc_kernel__Rpc_result");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_rpc_kernel_Util);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_rpc_kernel$29);
    caml_call1(Expect_test_collector[4][1],cst_src_util_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$30,cst$10);
    function bin_read_from_bigstring
     (bin_reader_t,add_len,buf,pos_ref,len,location)
     {try
       {var init_pos=pos_ref[1],data=caml_call2(bin_reader_t[1],buf,pos_ref);
        if(add_len)
         var add_len$0=add_len[1],add_len$1=caml_call1(add_len$0,data);
        else
         var add_len$1=0;
        if
         (caml_call2
           (Core_kernel[90],(pos_ref[1] - init_pos | 0) + add_len$1 | 0,len))
         caml_call4(Core_kernel[219],_cV_,pos_ref[1] - init_pos | 0,len,0);
        var _qW_=[0,data];
        return _qW_}
      catch(e){e = caml_wrap_exception(e);return bin_io_exn(location,e)}}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$31);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_rpc_kernel_Util$0);
    var Async_rpc_kernel_Util=[0,bin_read_from_bigstring];
    caml_register_global(780,Async_rpc_kernel_Util,"Async_rpc_kernel__Util");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_rpc_kernel_Implement$3);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_rpc_kernel$32);
    caml_call1(Expect_test_collector[4][1],cst_src_implementations_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$33,cst$11);
    var symbol$5=Core_kernel_Result[15];
    function defer_result(err)
     {if(0 === err[0])
       {var d=err[1],match=caml_call1(Async_kernel_Deferred[5],d);
        if(match)
         {var d$0=match[1];return caml_call1(Async_kernel[19],[0,d$0])}
        var _qV_=function(x){return [0,x]};
        return caml_call2(Async_kernel[21],d,_qV_)}
      return caml_call1(Async_kernel[19],err)}
    function symbol_map(d,f)
     {var match=caml_call1(Async_kernel_Deferred[5],d);
      if(match)
       {var x=match[1],_qU_=caml_call1(f,x);
        return caml_call1(Async_kernel[19],_qU_)}
      return caml_call2(Async_kernel[21],d,f)}
    function descriptions(t){return caml_call1(Core_kernel_Hashtbl[63],t[1])}
    function sexp_of_streaming_response(param)
     {if(0 === param[0])
       {var
         v0=param[1],
         _qT_=function(param){return _cW_},
         v0$0=caml_call2(Async_kernel_Pipe[4][1],_qT_,v0);
        return [1,[0,_cX_,[0,v0$0,0]]]}
      var v0$1=param[1],v0$2=caml_call1(Sexplib0_Sexp_conv[23],v0$1);
      return [1,[0,_cY_,[0,v0$2,0]]]}
    function sexp_of_t$11(param)
     {var
       t=param[1],
       v_open_streaming_responses=t[3],
       v_writer=t[2],
       v_implementations=t[1],
       v_stopped=t[4],
       v_connection_close_started=t[7],
       v_connection_description=t[6],
       v_last_dispatched_implementati=t[8],
       v_packed_self=t[9],
       arg$1=caml_call1(Sexplib0_Sexp_conv[23],v_packed_self),
       bnds=[0,[1,[0,_cZ_,[0,arg$1,0]]],0];
      function _qS_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=sexp_of_t(v0),
         v1$0=caml_call1(Sexplib0_Sexp_conv[23],v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      var
       arg$2=caml_call2(Core_kernel[438],_qS_,v_last_dispatched_implementati),
       bnds$0=[0,[1,[0,_c0_,[0,arg$2,0]]],bnds],
       arg$3=
        caml_call2
         (Async_kernel_Deferred[1],
          Core_kernel_Info[6],
          v_connection_close_started),
       bnds$1=[0,[1,[0,_c1_,[0,arg$3,0]]],bnds$0],
       arg$4=caml_call1(Core_kernel_Info[6],v_connection_description),
       bnds$2=[0,[1,[0,_c2_,[0,arg$4,0]]],bnds$1],
       bnds$3=[0,[1,[0,_c3_,[0,arg,0]]],bnds$2],
       arg$5=caml_call1(Core_kernel[289],v_stopped),
       bnds$4=[0,[1,[0,_c4_,[0,arg$5,0]]],bnds$3],
       arg$0=
        caml_call3
         (Core_kernel_Hashtbl[3],
          Query_id[10],
          sexp_of_streaming_response,
          v_open_streaming_responses),
       bnds$5=[0,[1,[0,_c5_,[0,arg$0,0]]],bnds$4],
       arg$6=caml_call1(_bU_[1],v_writer),
       bnds$6=[0,[1,[0,_c6_,[0,arg$6,0]]],bnds$5],
       arg$7=caml_call1(Sexplib0_Sexp_conv[23],v_implementations),
       bnds$7=[0,[1,[0,_c7_,[0,arg$7,0]]],bnds$6];
      return [1,bnds$7]}
    function handle_send_result(t,id,result)
     {if(typeof result === "number")
       return 0;
      else
       {if(0 === result[0])return 0;
        var
         sexp=caml_call1(caml_call1(Send_result[2],Core_kernel[502]),result),
         data=[1,[0,id,[1,[1,sexp]]]],
         r=caml_call3(_bU_[9],t[2],Message[19],data);
        if(typeof r !== "number" && 1 === r[0])
         {var
           _qP_=
            [0,
             [1,[0,_c8_,[0,caml_call2(Send_result[2],Core_kernel[502],r),0]]],
             0],
           _qQ_=
            [0,
             [1,
              [0,
               [1,[0,_c9_,[0,caml_call1(Core_kernel_Sexp[88],sexp),0]]],
               _qP_]],
             0],
           _qR_=
            [1,
             [0,
              caml_call1(Sexplib0_Sexp_conv[7],cst_Failed_to_send_write_error),
              _qQ_]];
          return caml_call1(Core_kernel[238],_qR_)}
        return 0}}
    function write_message(t,id,bin_writer,x)
     {var _qO_=1 - t[4];
      return _qO_
              ?handle_send_result(t,id,caml_call3(_bU_[9],t[2],bin_writer,x))
              :_qO_}
    function write_response(t,id,bin_writer_data,data)
     {var
       _qN_=of_writer(bin_writer_data),
       bin_writer=caml_call1(Message[4],_qN_);
      return write_message(t,id,bin_writer,[1,[0,id,data]])}
    function bin_write_void(buf,pos,param){return pos}
    var buf=caml_call2(Core_kernel_Bigstring[110],0,32);
    function create$0(id,bin_writer)
     {var
       v=[1,[0,id,_c__]],
       len=caml_call3(caml_call1(Message[3],bin_write_void),buf,0,v),
       header_prefix=caml_call3(Core_kernel_Bigstring[25][4],buf,0,len);
      return [0,header_prefix,caml_call1(_h_,0),bin_writer]}
    var stream_response_data_header_as=35449;
    function _c$_(param)
     {var
       len=
        caml_call3(caml_call1(Stream_response_data[3],bin_write_void),buf,0,v);
      if(len === 4)
       {if
         (runtime.caml_equal
           (caml_call2(Core_kernel_Bigstring[96],buf,0),
            stream_response_data_header_as))
         return 0;
        throw [0,Assert_failure,_da_]}
      throw [0,Assert_failure,_db_]}
    caml_call8
     (Ppx_inline_test_lib_Runtime[5],
      Inline_test_config,
      cst_stream_response_constants_,
      0,
      cst_src_implementations_ml$0,
      209,
      4,
      369,
      _c$_);
    function bin_write_string_no_length(buf,pos,str)
     {var str_len=caml_ml_string_length(str);
      caml_call1(Bin_prot_Common[3],pos);
      var next=pos + str_len | 0;
      caml_call2(Bin_prot_Common[5],buf,next);
      runtime.bin_prot_blit_string_buf_stub(0,str,pos,buf,str_len);
      return next}
    function bin_size_nat0_header(param)
     {var
       header_prefix=param[1],
       data_len=param[2],
       stream_response_data_nat0_len=4 + caml_call1(_c_,data_len) | 0,
       stream_response_data_len=stream_response_data_nat0_len + data_len | 0;
      return (caml_ml_string_length(header_prefix)
              +
              caml_call1(_c_,caml_call1(_h_,stream_response_data_len))
              |
              0)
             +
             stream_response_data_nat0_len
             |
             0}
    function bin_write_nat0_header(buf,pos,param)
     {var
       header_prefix=param[1],
       data_len=param[2],
       pos$0=bin_write_string_no_length(buf,pos,header_prefix),
       stream_response_data_len=
        (4 + caml_call1(_c_,data_len) | 0)
        +
        data_len
        |
        0,
       pos$1=
        caml_call3(_e_,buf,pos$0,caml_call1(_h_,stream_response_data_len)),
       next=pos$1 + 4 | 0;
      caml_call2(Bin_prot_Common[5],buf,next);
      caml_call3
       (Core_kernel_Bigstring[98],buf,pos$1,stream_response_data_header_as);
      return caml_call3(_e_,buf,next,data_len)}
    var bin_writer=[0,bin_size_nat0_header,bin_write_nat0_header];
    function bin_size_message(param)
     {var t=param[1],_qM_=t[2];return bin_size_nat0_header(t) + _qM_ | 0}
    function bin_write_message(buf,pos,param)
     {var data=param[2],t=param[1],pos$0=bin_write_nat0_header(buf,pos,t);
      return caml_call3(t[3][2],buf,pos$0,data)}
    var bin_writer_message=[0,bin_size_message,bin_write_message];
    function bin_size_message_as_string(param)
     {var t=param[1],_qL_=t[2];return bin_size_nat0_header(t) + _qL_ | 0}
    function bin_write_message_as_string(buf,pos,param)
     {var str=param[2],t=param[1],pos$0=bin_write_nat0_header(buf,pos,t);
      return bin_write_string_no_length(buf,pos$0,str)}
    var
     bin_writer_message_as_string=
      [0,bin_size_message_as_string,bin_write_message_as_string];
    function write(t,param,id,data)
     {var instance=param[1];
      t[2] = caml_call1(_h_,caml_call1(t[3][1],data));
      return write_message(instance,id,bin_writer_message,[0,t,data])}
    function is_closed$1(t){return caml_call1(Async_kernel_Ivar[17],t[3])}
    function closed(t){return caml_call1(Async_kernel_Ivar[18],t[3])}
    function flushed$0(t)
     {var match=t[4],instance=match[1];return caml_call1(_bU_[7],instance[2])}
    function bin_writer$0(t){return t[6][3]}
    function write_eof(param)
     {var query_id=param[5],match=param[4],instance=match[1];
      return write_response(instance,query_id,Stream_response_data[17],_dc_)}
    function write_message$0(param,x)
     {var stream_writer=param[6],query_id=param[5],instance=param[4];
      return write(stream_writer,instance,query_id,x)}
    function close_without_removing_from_in(t)
     {var _qJ_=1 - caml_call1(Async_kernel_Ivar[17],t[3]);
      if(_qJ_)
       {caml_call2(Async_kernel_Ivar[14],t[3],0);
        var groups=t[7];
        if(1 - caml_call1(Core_kernel_Bag[6],groups))
         {var
           _qK_=
            function(param)
             {var match=caml_call1(Core_kernel_Bag[28],groups);
              if(match)
               {var
                 match$0=match[1],
                 element_in_group=match$0[2],
                 group=match$0[1];
                caml_call2(Core_kernel_Bag[26],group[1],element_in_group);
                caml_call2(Core_kernel_Hashtbl[31],group[2],t[1]);
                return 1}
              return 0};
          caml_call1(Async_kernel_Scheduler[67][2],_qK_)}
        return t[2]?0:write_eof(t)}
      return _qJ_}
    function close$2(t)
     {var query_id=t[5],match=t[4],instance=match[1];
      close_without_removing_from_in(t);
      return caml_call2(Core_kernel_Hashtbl[31],instance[3],query_id)}
    function write_without_pushback(t,x)
     {if(caml_call1(Async_kernel_Ivar[17],t[3]))return -1025106484;
      var _qI_=t[2];
      if(_qI_)
       {var q=_qI_[1];caml_call2(Core_kernel_Queue[40],q,[0,x])}
      else
       write_message$0(t,x);
      return 17724}
    function write$0(t,x)
     {var match=t[4],instance=match[1],match$0=write_without_pushback(t,x);
      return 17724 <= match$0
              ?[0,933108739,caml_call1(_bU_[7],instance[2])]
              :-1025106484}
    function write_without_pushback$0(t,buf,pos,len)
     {if(caml_call1(Async_kernel_Ivar[17],t[3]))return -1025106484;
      var _qG_=t[2];
      if(_qG_)
       {var
         q=_qG_[1],
         _qH_=[1,caml_call3(Core_kernel_Bigstring[25][4],buf,pos,len)];
        caml_call2(Core_kernel_Queue[40],q,_qH_)}
      else
       {var
         stream_writer=t[6],
         query_id=t[5],
         instance$0=t[4],
         instance=instance$0[1];
        stream_writer[2] = caml_call1(_h_,len);
        if(1 - instance[4])
         handle_send_result
          (instance,
           query_id,
           caml_call6
            (_bU_[10],instance[2],bin_writer,stream_writer,buf,pos,len))}
      return 17724}
    function write$1(t,buf,pos,len)
     {var
       match=t[4],
       instance=match[1],
       match$0=write_without_pushback$0(t,buf,pos,len);
      return 17724 <= match$0
              ?[0,933108739,caml_call1(_bU_[7],instance[2])]
              :-1025106484}
    function apply_implementation
     (t,implementation,query,read_buffer,read_buffer_pos_ref)
     {var id=query[3];
      switch(implementation[0])
       {case 0:
         var
          f=implementation[2],
          bin_query_reader=implementation[1],
          query_contents=
           bin_read_from_bigstring
            (bin_query_reader,
             0,
             read_buffer,
             read_buffer_pos_ref,
             query[4],
             cst_server_side_one_way_rpc_me);
         if(0 === query_contents[0])
          {var q=query_contents[1];
           try
            {caml_call2(f,t[5],q);var _p3_=0;return _p3_}
           catch(exn)
            {exn = caml_wrap_exception(exn);
             return [0,uncaught_exn(cst_server_side_one_way_rpc_co,exn)]}}
         return [0,query_contents];
        case 1:
         var f$0=implementation[1];
         try
          {var len=query[4];
           caml_call4(f$0,t[5],read_buffer,read_buffer_pos_ref[1],len);
           read_buffer_pos_ref[1] = read_buffer_pos_ref[1] + len | 0;
           var _p4_=0;
           return _p4_}
         catch(exn)
          {exn = caml_wrap_exception(exn);
           return [0,uncaught_exn(cst_server_side_one_way_rpc_ex,exn)]}
        case 2:
         var
          result_mode=implementation[4],
          f$1=implementation[3],
          bin_response_writer=implementation[2],
          bin_query_reader$0=implementation[1],
          query_contents$0=
           bin_read_from_bigstring
            (bin_query_reader$0,
             0,
             read_buffer,
             read_buffer_pos_ref,
             query[4],
             cst_server_side_rpc_query_un_b);
         if(result_mode)
          {var
            data=
             try_with
              (_dd_,
               cst_server_side_rpc_computatio,
               function(param)
                {return defer_result
                         (caml_call2(symbol$5,query_contents$0,caml_call1(f$1,t[5])))}),
            match=caml_call1(Async_kernel_Deferred[5],data);
           if(match)
            {var data$0=match[1];
             write_response(t,id,bin_response_writer,data$0)}
           else
            {var
              _p5_=
               function(_qq_)
                {return write_response(t,id,bin_response_writer,_qq_)};
             caml_call2(Async_kernel[16],data,_p5_)}}
         else
          {try
            {var
              _p8_=caml_call2(symbol$5,query_contents$0,caml_call1(f$1,t[5])),
              data$1=_p8_}
           catch(exn)
            {exn = caml_wrap_exception(exn);
             var
              backtrace=caml_call1(Base_Backtrace[6][4],0),
              _p6_=
               [0,
                [1,[0,_de_,[0,caml_call1(Base_Backtrace[1],backtrace),0]]],
                0],
              _p7_=
               [0,[1,[0,_df_,[0,caml_call1(Core_kernel[521],exn),0]]],_p6_],
              sexp=
               [1,
                [0,
                 [1,
                  [0,
                   _dg_,
                   [0,
                    caml_call1
                     (Sexplib0_Sexp_conv[7],cst_server_side_blocking_rpc_c),
                    0]]],
                 _p7_]],
              data$1=[1,[2,sexp]]}
           write_response(t,id,bin_response_writer,data$1)}
         return 0;
        case 3:
         var
          result_mode$0=implementation[2],
          f$2=implementation[1],
          responder=caml_call2(Expert[1][2],query[3],t[2]),
          _p9_=
           function(param)
            {var
              len=query[4],
              result=
               caml_call5
                (f$2,t[5],responder,read_buffer,read_buffer_pos_ref[1],len);
             return result_mode$0
                     ?result
                     :caml_call1(Async_kernel_Deferred[12],result)},
          d=caml_call7(Async_kernel_Monitor[16],0,0,0,0,_dh_,0,_p9_),
          handle_exn=
           function(exn)
            {var result=uncaught_exn(cst_server_side_rpc_expert_com,exn);
             return responder[3]
                     ?result
                     :(write_response(t,id,Core_kernel[493],result),_di_)},
          check_responded=
           function(param)
            {return responder[3]
                     ?_dj_
                     :handle_exn([0,Stdlib[7],cst_Expert_implementation_did_])},
          d$0=
           symbol_map
            (d,
             function(param)
              {if(0 === param[0])
                {var result=param[1];
                 if(result)
                  var d=result[1],d$0=d;
                 else
                  var d$0=Async_kernel_Deferred[18];
                 if(caml_call1(Async_kernel_Deferred[7],d$0))
                  return check_responded(0);
                 var
                  _qn_=
                   function(param)
                    {var
                      _qo_=check_responded(0),
                      _qp_=or_error(query[1],query[2],t[6],t[7],_qo_);
                     return caml_call1(Core_kernel[230],_qp_)};
                 caml_call2(Async_kernel[12],d$0,_qn_);
                 return _dk_}
               var exn=param[1];
               return handle_exn(exn)}),
          match$0=caml_call1(Async_kernel_Deferred[5],d$0);
         if(match$0)
          {var result=match$0[1];return 0 === result[0]?0:[0,result]}
         var
          _p__=
           function(r)
            {var _qm_=or_error(query[1],query[2],t[6],t[7],r);
             return caml_call1(Core_kernel[230],_qm_)};
         return [1,caml_call2(Async_kernel[21],d$0,_p__)];
        default:
         var
          impl=implementation[4],
          bin_update_writer=implementation[3],
          bin_init_writer=implementation[2],
          bin_query_reader$1=implementation[1],
          _p$_=query[4],
          _qa_=
           [0,
            function(param)
             {if(typeof param === "number")return 0;
              var len=param[2];
              return len}],
          stream_query=
           bin_read_from_bigstring
            (Stream_query[14],
             _qa_,
             read_buffer,
             read_buffer_pos_ref,
             _p$_,
             cst_server_side_pipe_rpc_strea);
         if(0 === stream_query[0])
          {var _qb_=stream_query[1];
           if(typeof _qb_ === "number")
            {var
              _qc_=
               function(param)
                {if(0 === param[0])
                  {var pipe=param[1];
                   return caml_call1(Async_kernel_Pipe[15],pipe)}
                 var w=param[1];
                 return close$2(w)},
              _qd_=caml_call2(Core_kernel_Hashtbl[52],t[3],query[3]);
             caml_call2(Core_kernel_Option[19],_qd_,_qc_)}
           else
            {var
              len$0=_qb_[2],
              data$2=
               bin_read_from_bigstring
                (bin_query_reader$1,
                 0,
                 read_buffer,
                 read_buffer_pos_ref,
                 len$0,
                 cst_streaming_rpc_server_side_),
              stream_writer=create$0(id,bin_update_writer);
             if(0 === impl[0])
              var f$3=impl[1],impl_with_state=[0,892411982,f$3];
             else
              {var
                f$6=impl[1],
                _qi_=caml_call1(Core_kernel_Bag[22],0),
                _qj_=t[9],
                _qk_=caml_call1(Async_kernel_Ivar[12],0),
                _ql_=[0,caml_call2(Core_kernel_Queue[60],0,0)],
                writer$0=
                 [0,
                  caml_call1(Direct_stream_writer_id[45],0),
                  _ql_,
                  _qk_,
                  _qj_,
                  id,
                  stream_writer,
                  _qi_];
               caml_call3(Core_kernel_Hashtbl[34],t[3],query[3],[1,writer$0]);
               var impl_with_state=[0,-251740343,[0,f$6,writer$0]]}
             var
              run_impl=
               function(impl,split_ok,handle_ok)
                {function _qD_(param)
                  {if(0 === param[0])
                    {var _qF_=param[1];
                     if(0 === _qF_[0])
                      {var
                        ok=_qF_[1],
                        match=caml_call1(split_ok,ok),
                        rest=match[2],
                        initial=match[1];
                       write_response(t,id,bin_init_writer,[0,initial]);
                       return caml_call1(handle_ok,rest)}
                     var err=_qF_[1];
                     caml_call2(Core_kernel_Hashtbl[31],t[3],id);
                     return write_response(t,id,bin_init_writer,[0,err])}
                   var err$0=param[1];
                   caml_call2(Core_kernel_Hashtbl[31],t[3],id);
                   return write_response(t,id,bin_init_writer,[1,err$0])}
                 var
                  _qE_=
                   try_with
                    (0,
                     cst_server_side_pipe_rpc_compu,
                     function(param)
                      {return defer_result(caml_call2(symbol$5,data$2,impl))});
                 return caml_call2(Async_kernel[16],_qE_,_qD_)};
             if(892411982 <= impl_with_state[1])
              {var
                f$4=impl_with_state[2],
                _qe_=
                 function(pipe_r)
                  {caml_call3(Core_kernel_Hashtbl[34],t[3],id,[0,pipe_r]);
                   var _qs_=t[9];
                   function _qt_(_qz_)
                    {return write(stream_writer,_qs_,id,_qz_)}
                   var _qu_=caml_call4(_bU_[14],t[2],0,pipe_r,_qt_);
                   caml_call1(Async_kernel[6],_qu_);
                   function _qv_(param)
                    {function _qx_(param)
                      {write_response(t,id,Stream_response_data[17],_dl_);
                       return caml_call2(Core_kernel_Hashtbl[31],t[3],id)}
                     var _qy_=caml_call1(Async_kernel_Pipe[19],pipe_r);
                     return caml_call2(Async_kernel[16],_qy_,_qx_)}
                   var _qw_=caml_call1(Async_kernel_Pipe[17],pipe_r);
                   return caml_call2(Async_kernel[16],_qw_,_qv_)},
                _qf_=function(_qr_){return _qr_};
               run_impl
                (function(data){return caml_call2(f$4,t[5],data)},_qf_,_qe_)}
             else
              {var
                match$1=impl_with_state[2],
                writer=match$1[2],
                f$5=match$1[1],
                _qg_=
                 function(param)
                  {var _qA_=writer[2];
                   if(_qA_)
                    {var q=_qA_[1];
                     writer[2] = 0;
                     var
                      _qB_=
                       function(param)
                        {if(0 === param[0])
                          {var x=param[1];return write_message$0(writer,x)}
                         var
                          x$0=param[1],
                          stream_writer=writer[6],
                          query_id=writer[5],
                          instance$0=writer[4],
                          instance=instance$0[1];
                         stream_writer[2]
                         =
                         caml_call1(_h_,caml_ml_string_length(x$0));
                         return write_message
                                 (instance,
                                  query_id,
                                  bin_writer_message_as_string,
                                  [0,stream_writer,x$0])};
                     caml_call2(Core_kernel_Queue[15],q,_qB_);
                     var _qC_=caml_call1(Async_kernel_Ivar[17],writer[3]);
                     return _qC_?write_eof(writer):_qC_}
                   return caml_call1
                           (Core_kernel[3],cst_attempted_to_start_writer_)},
                _qh_=function(x){return [0,x,0]};
               run_impl
                (function(data){return caml_call3(f$5,t[5],data,writer)},
                 _qh_,
                 _qg_)}}}
         return 0}}
    function flush(param)
     {var t=param[1];
      if(t[4])throw [0,Assert_failure,_dm_];
      function _p1_(param,data,acc)
       {if(0 === data[0])
         {var pipe=data[1],_p2_=caml_call1(Async_kernel_Pipe[19],pipe);
          return [0,caml_call1(Async_kernel_Deferred[15],_p2_),acc]}
        return acc}
      var producers_flushed=caml_call3(Core_kernel_Hashtbl[18],t[3],0,_p1_);
      return caml_call1(Async_kernel_Deferred[22],producers_flushed)}
    function stop(param)
     {var t=param[1];
      t[4] = 1;
      function _p0_(param)
       {if(0 === param[0])return 0;
        var writer=param[1];
        return close_without_removing_from_in(writer)}
      caml_call2(Core_kernel_Hashtbl[20],t[3],_p0_);
      return caml_call1(Core_kernel_Hashtbl[16],t[3])}
    function handle_query(param,query,read_buffer,read_buffer_pos_ref)
     {var t=param[1];
      if(! t[4] && ! caml_call1(_bU_[3],t[2]))
       {var
         match$0=t[1],
         on_unknown_rpc=match$0[2],
         implementations=match$0[1],
         _pW_=query[2],
         description=[0,caml_call1(Rpc_tag[12],query[1]),_pW_],
         _pX_=t[8];
        if(_pX_)
         {var match$1=_pX_[1],implementation=match$1[2],last_desc=match$1[1];
          if(caml_call2(_y_,last_desc,description))
           return apply_implementation
                   (t,implementation,query,read_buffer,read_buffer_pos_ref)}
        var
         match$2=
          caml_call2(Core_kernel_Hashtbl[52],implementations,description);
        if(match$2)
         {var implementation$0=match$2[1];
          t[8] = [0,[0,description,implementation$0]];
          return apply_implementation
                  (t,implementation$0,query,read_buffer,read_buffer_pos_ref)}
        if
         (typeof on_unknown_rpc
          !==
          "number"
          &&
          !
          (747848894 <= on_unknown_rpc[1]))
         {var
           impl=on_unknown_rpc[2],
           len=query[4],
           id=query[3],
           version=query[2],
           tag=query[1],
           responder=caml_call2(Expert[1][2],id,t[2]),
           _pY_=read_buffer_pos_ref[1],
           _pZ_=caml_call1(Rpc_tag[12],tag),
           d=caml_call7(impl,t[5],_pZ_,version,responder,read_buffer,_pY_,len);
          return caml_call1(Async_kernel_Deferred[7],d)?0:[1,d]}
        var error=[3,query[1],[0,-901574920,query[2]]];
        write_response(t,query[3],Message[19],[1,error]);
        if(typeof on_unknown_rpc === "number")
         return -146189108 === on_unknown_rpc
                 ?raise(error,t[6])
                 :192584839 <= on_unknown_rpc?0:_dn_;
        var
         f=on_unknown_rpc[2],
         _pU_=query[2],
         _pV_=caml_call1(Rpc_tag[12],query[1]),
         match=caml_call3(f,t[5],_pV_,_pU_);
        return 192584839 <= match?0:_do_}
      return _dp_}
    function create$1(i_s,on_unknown_rpc)
     {var
       implementations=caml_call3(_R_[4],0,_dq_,0),
       dups=caml_call3(_S_[2],0,_dr_,0);
      function _pS_(i)
       {var
         _pT_=i[2],
         description=[0,caml_call1(Rpc_tag[12],i[1]),_pT_],
         match=
          caml_call3(Core_kernel_Hashtbl[35],implementations,description,i[3]);
        return 17724 <= match
                ?0
                :caml_call2(Core_kernel_Hash_set[22],dups,description)}
      caml_call2(Core_kernel_List[9],i_s,_pS_);
      return caml_call1(Core_kernel_Hash_set[5],dups)
              ?[0,[0,implementations,on_unknown_rpc]]
              :[1,[0,-965860371,caml_call1(Core_kernel_Hash_set[16],dups)]]}
    function instantiate
     (t,
      connection_description,
      connection_close_started,
      connection_state,
      writer)
     {var unpacked=[];
      runtime.caml_update_dummy
       (unpacked,
        [0,
         t,
         writer,
         caml_call3(Core_kernel_Hashtbl[84][13],0,_ds_,0),
         0,
         connection_state,
         connection_description,
         connection_close_started,
         0,
         [0,unpacked]]);
      return unpacked[9]}
    var
     Duplicate_implementations=
      [248,cst_Async_rpc_kernel_Implement$4,caml_fresh_oo_id(0)];
    function _dt_(param)
     {if(param[1] === Duplicate_implementations)
       {var v0=param[2],v0$0=caml_call2(Core_kernel[405],sexp_of_t,v0);
        return [1,[0,_du_,[0,v0$0,0]]]}
      throw [0,Assert_failure,_dv_]}
    caml_call3(Sexplib0_Sexp_conv[51][2],0,Duplicate_implementations,_dt_);
    function create_exn(implementations,on_unknown_rpc)
     {var match=create$1(implementations,on_unknown_rpc);
      if(0 === match[0]){var x=match[1];return x}
      var match$0=match[1],dups=match$0[2];
      throw [0,Duplicate_implementations,dups]}
    function null$0(param){return create_exn(0,-146189108)}
    function add_exn(t,implementation)
     {var
       _pR_=implementation[2],
       desc=[0,caml_call1(Rpc_tag[12],implementation[1]),_pR_],
       implementations=caml_call1(Core_kernel_Hashtbl[17],t[1]),
       match=
        caml_call3
         (Core_kernel_Hashtbl[35],implementations,desc,implementation[3]);
      if(17724 <= match)return [0,implementations,t[2]];
      throw [0,Duplicate_implementations,[0,desc,0]]}
    function add(t,implementation)
     {function _pQ_(param){return add_exn(t,implementation)}
      return caml_call2(Core_kernel_Or_error[32],0,_pQ_)}
    function lift$1(param,f)
     {var on_unknown_rpc=param[2],implementations=param[1],_pM_=F[1];
      function _pN_(_pP_){return caml_call2(_pM_,_pP_,f)}
      var
       implementations$0=
        caml_call2(Core_kernel_Hashtbl[39],implementations,_pN_);
      if(typeof on_unknown_rpc === "number")
       var on_unknown_rpc$0=on_unknown_rpc;
      else
       {if(747848894 <= on_unknown_rpc[1])
         var
          call=on_unknown_rpc[2],
          _pO_=
           [0,
            747848894,
            function(state){return caml_call1(call,caml_call1(f,state))}];
        else
         var
          expert=on_unknown_rpc[2],
          _pO_=
           [0,
            -116756726,
            function(state){return caml_call1(expert,caml_call1(f,state))}];
        var on_unknown_rpc$0=_pO_}
      return [0,implementations$0,on_unknown_rpc$0]}
    function cannot_send(r)
     {function _pK_(param){return _dw_}
      var _pL_=caml_call1(Send_result[2],_pK_);
      return caml_call5
              (Core_kernel[221],0,_dx_,cst_Message_cannot_be_sent,r,_pL_)}
    function mark_responded(t)
     {if(t[3])
       caml_call5
        (Core_kernel[221],0,_dy_,cst_Already_responded,t,Expert[1][1]);
      t[3] = 1;
      return 0}
    function schedule(t,buf,pos,len)
     {mark_responded(t);
      var
       _pJ_=[0,caml_call1(_h_,len)],
       header=[1,[0,t[1],_pJ_]],
       r=caml_call6(_bU_[11],t[2],Message[19],header,buf,pos,len);
      if(typeof r === "number")
       return 179911373;
      else
       {if(0 === r[0]){var d=r[1];return [0,933108739,d]}
        return cannot_send(r)}}
    function handle_send_result$0(r)
     {if(typeof r !== "number" && 1 === r[0])return cannot_send(r);return 0}
    function write_bigstring(t,buf,pos,len)
     {mark_responded(t);
      var _pI_=[0,caml_call1(_h_,len)],header=[1,[0,t[1],_pI_]];
      return handle_send_result$0
              (caml_call6(_bU_[10],t[2],Message[19],header,buf,pos,len))}
    function write_error(t,error)
     {mark_responded(t);
      var
       data=
        uncaught_exn
         (cst_server_side_raw_rpc_comput,
          caml_call1(Core_kernel_Error[23],error));
      return handle_send_result$0
              (caml_call3(_bU_[9],t[2],Message[19],[1,[0,t[1],data]]))}
    function write_bin_prot(t,bin_writer_a,a)
     {mark_responded(t);
      var
       _pF_=[1,[0,t[1],[0,a]]],
       _pG_=of_writer(bin_writer_a),
       _pH_=caml_call1(Message[4],_pG_);
      return handle_send_result$0(caml_call3(_bU_[9],t[2],_pH_,_pF_))}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$34);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_rpc_kernel_Implement$5);
    var
     _dz_=
      [0,[0,schedule,write_bigstring,write_bin_prot,write_error],create_exn],
     _dA_=[0,sexp_of_t$11,handle_query,flush,stop],
     include$2=
      [0,
       close$2,
       closed,
       is_closed$1,
       write$0,
       write_without_pushback,
       flushed$0,
       bin_writer$0,
       [0,write$1,write_without_pushback$0]],
     Async_rpc_kernel_Implementatio$1=
      [0,
       create$1,
       null$0,
       lift$1,
       include$2,
       _dA_,
       instantiate,
       create_exn,
       add,
       add_exn,
       descriptions,
       _dz_];
    caml_register_global
     (789,
      Async_rpc_kernel_Implementatio$1,
      "Async_rpc_kernel__Implementations");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_rpc_kernel_Connectio);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_rpc_kernel$35);
    caml_call1(Expect_test_collector[4][1],cst_src_connection_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$36,cst$12);
    var
     _dB_=include$3[8],
     negotiate=caml_call1(include$3[12],1),
     v1=caml_call2(include$3[11],2,_dC_);
    function t_of_sexp$1(sexp)
     {if(0 === sexp[0])
       {var _pz_=sexp[1],_pA_=caml_string_compare(_pz_,cst_eof),switch$0=0;
        if(0 <= _pA_)
         if(0 < _pA_)
          if(caml_string_notequal(_pz_,cst_negotiated_unexpected_vers))
           if(caml_string_notequal(_pz_,cst_negotiation_failed))
            if(caml_string_notequal(_pz_,cst_reading_header_failed))
             if(caml_string_notequal(_pz_,cst_timeout))
              {if(! caml_string_notequal(_pz_,cst_transport_closed))
                switch$0 = 2}
             else
              switch$0 = 3;
            else
             switch$0 = 4;
           else
            switch$0 = 5;
          else
           switch$0 = 6;
         else
          switch$0 = 1;
        else
         if(caml_string_notequal(_pz_,cst_Eof$0))
          if(caml_string_notequal(_pz_,cst_Negotiated_unexpected_vers))
           if(caml_string_notequal(_pz_,cst_Negotiation_failed))
            if(caml_string_notequal(_pz_,cst_Reading_header_failed))
             if(caml_string_notequal(_pz_,cst_Timeout))
              {if(! caml_string_notequal(_pz_,cst_Transport_closed))
                switch$0 = 2}
             else
              switch$0 = 3;
            else
             switch$0 = 4;
           else
            switch$0 = 5;
          else
           switch$0 = 6;
         else
          switch$0 = 1;
        switch(switch$0)
         {case 1:return 0;
          case 2:return 1;
          case 3:return 2;
          case 4:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$1,sexp);
          case 5:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$1,sexp);
          case 6:return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$1,sexp)
          }}
      else
       {var _pB_=sexp[1];
        if(! _pB_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$1,sexp);
        var _pC_=_pB_[1];
        if(0 !== _pC_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$1,sexp);
        var _pD_=_pC_[1],_pE_=caml_string_compare(_pD_,cst_eof$0),switch$1=0;
        if(0 <= _pE_)
         if(0 < _pE_)
          if(caml_string_notequal(_pD_,cst_negotiated_unexpected_vers$0))
           if(caml_string_notequal(_pD_,cst_negotiation_failed$0))
            if(caml_string_notequal(_pD_,cst_reading_header_failed$0))
             if(caml_string_notequal(_pD_,cst_timeout$0))
              {if(! caml_string_notequal(_pD_,cst_transport_closed$0))
                switch$1 = 5}
             else
              switch$1 = 6;
            else
             switch$1 = 1;
           else
            switch$1 = 2;
          else
           switch$1 = 3;
         else
          switch$1 = 4;
        else
         if(caml_string_notequal(_pD_,cst_Eof$1))
          if(caml_string_notequal(_pD_,cst_Negotiated_unexpected_vers$0))
           if(caml_string_notequal(_pD_,cst_Negotiation_failed$0))
            if(caml_string_notequal(_pD_,cst_Reading_header_failed$0))
             if(caml_string_notequal(_pD_,cst_Timeout$0))
              {if(! caml_string_notequal(_pD_,cst_Transport_closed$0))
                switch$1 = 5}
             else
              switch$1 = 6;
            else
             switch$1 = 1;
           else
            switch$1 = 2;
          else
           switch$1 = 3;
         else
          switch$1 = 4;
        switch(switch$1)
         {case 1:
           var sexp_args=_pB_[2];
           if(sexp_args && ! sexp_args[2])
            {var v0=sexp_args[1],v0$0=caml_call1(Core_kernel_Error[5],v0);
             return [0,v0$0]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$1,_pD_,sexp);
          case 2:
           var sexp_args$0=_pB_[2];
           if(sexp_args$0 && ! sexp_args$0[2])
            {var
              v0$1=sexp_args$0[1],
              v0$2=caml_call1(Core_kernel_Error[5],v0$1);
             return [1,v0$2]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$1,_pD_,sexp);
          case 3:
           var sexp_args$1=_pB_[2];
           if(sexp_args$1 && ! sexp_args$1[2])
            {var v0$3=sexp_args$1[1],v0$4=caml_call1(Core_kernel[341],v0$3);
             return [2,v0$4]}
           return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$1,_pD_,sexp);
          case 4:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$1,sexp);
          case 5:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$1,sexp);
          case 6:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$1,sexp)
          }}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$1,sexp)}
    function sexp_of_t$12(param)
     {if(typeof param === "number")
       switch(param)
        {case 0:return _dD_;case 1:return _dE_;default:return _dF_}
      else
       switch(param[0])
        {case 0:
          var v0=param[1],v0$0=caml_call1(Core_kernel_Error[6],v0);
          return [1,[0,_dG_,[0,v0$0,0]]];
         case 1:
          var v0$1=param[1],v0$2=caml_call1(Core_kernel_Error[6],v0$1);
          return [1,[0,_dH_,[0,v0$2,0]]];
         default:
          var v0$3=param[1],v0$4=caml_call1(Core_kernel[340],v0$3);
          return [1,[0,_dI_,[0,v0$4,0]]]}}
    var T=[0,t_of_sexp$1,sexp_of_t$12],_dJ_=T[2];
    caml_call1(Core_kernel_Sexpable[1],T);
    var
     Handshake_error=
      [248,cst_Async_rpc_kernel_Connectio$0,caml_fresh_oo_id(0)];
    function _dK_(param)
     {if(param[1] === Handshake_error)
       {var
         v0=param[2],
         v1=v0[2],
         v0$0=v0[1],
         v0$1=caml_call1(_dJ_,v0$0),
         v1$0=caml_call1(Core_kernel_Info[6],v1),
         v0$2=[1,[0,v0$1,[0,v1$0,0]]];
        return [1,[0,_dL_,[0,v0$2,0]]]}
      throw [0,Assert_failure,_dM_]}
    caml_call3(Sexplib0_Sexp_conv[51][2],0,Handshake_error,_dK_);
    function t_of_sexp$2(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc$2,sexp);
      var
       field_sexps=sexp[1],
       timeout_field=[0,0],
       send_every_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _pr_=param[1];
          if(1 === _pr_[0])
           {var _ps_=_pr_[1];
            if(_ps_)
             {var _pt_=_ps_[1];
              if(0 === _pt_[0])
               {var _pu_=_ps_[2],_pv_=_pt_[1],switch$0=0;
                if(! _pu_ || ! _pu_[2])switch$0 = 1;
                if(switch$0)
                 {var
                   tail=param[2],
                   field_sexp$2=
                    function(_py_)
                     {function field_sexp(param)
                       {if(_py_)
                         {if(_py_[2])throw [0,Assert_failure,_dN_];
                          var x=_py_[1];
                          return x}
                        return caml_call2
                                (Sexplib0_Sexp_conv_error[10],tp_loc$2,sexp)}
                      return field_sexp},
                   field_sexp=field_sexp$2(_pu_);
                  if(caml_string_notequal(_pv_,cst_send_every))
                   if(caml_string_notequal(_pv_,cst_timeout$1))
                    {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_pv_,extra[1]]}
                   else
                    if(timeout_field[1])
                     duplicates[1] = [0,_pv_,duplicates[1]];
                    else
                     {var
                       field_sexp$0=field_sexp(0),
                       fvalue=
                        caml_call1
                         (Core_kernel_Time_ns_alternate_[1][9],field_sexp$0);
                      timeout_field[1] = [0,fvalue]}
                  else
                   if(send_every_field[1])
                    duplicates[1] = [0,_pv_,duplicates[1]];
                   else
                    {var
                      field_sexp$1=field_sexp(0),
                      fvalue$0=
                       caml_call1
                        (Core_kernel_Time_ns_alternate_[1][9],field_sexp$1);
                     send_every_field[1] = [0,fvalue$0]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc$2,_pr_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc$2,duplicates[1],sexp);
        if(extra[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[13],tp_loc$2,extra[1],sexp);
        var _pw_=timeout_field[1],_px_=send_every_field[1];
        if(_pw_ && _px_)
         {var send_every_value=_px_[1],timeout_value=_pw_[1];
          return [0,timeout_value,send_every_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[15],
                 tp_loc$2,
                 sexp,
                 [0,
                  [0,0 === timeout_field[1]?1:0,cst_timeout$2],
                  [0,[0,0 === send_every_field[1]?1:0,cst_send_every$0],0]])}}
    function sexp_of_t$13(param)
     {var
       v_send_every=param[2],
       v_timeout=param[1],
       arg=caml_call1(Core_kernel_Time_ns_alternate_[1][10],v_send_every),
       bnds=[0,[1,[0,_dO_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel_Time_ns_alternate_[1][10],v_timeout),
       bnds$0=[0,[1,[0,_dP_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    var
     _dQ_=
      caml_call1
       (Bin_prot_Shape[8],
        [0,
         [0,cst_timeout$3,Core_kernel_Time_ns_alternate_[1][5]],
         [0,[0,cst_send_every$1,Core_kernel_Time_ns_alternate_[1][5]],0]]),
     _dR_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$11),0,_dQ_],0],
     _dS_=caml_call1(Bin_prot_Shape[4][1],cst_src_connection_ml_42_2),
     group$9=caml_call2(Bin_prot_Shape[6],_dS_,_dR_),
     _dT_=caml_call1(Bin_prot_Shape[2][1],cst_t$12),
     bin_shape_t$5=caml_call1(caml_call2(Bin_prot_Shape[14],group$9,_dT_),0);
    function bin_size_t$4(param)
     {var
       v2=param[2],
       v1=param[1],
       _pp_=caml_call1(Core_kernel_Time_ns_alternate_[1][1],v1),
       size=caml_call2(Bin_prot_Common[23],0,_pp_),
       _pq_=caml_call1(Core_kernel_Time_ns_alternate_[1][1],v2);
      return caml_call2(Bin_prot_Common[23],size,_pq_)}
    function bin_write_t$4(buf,pos,param)
     {var
       v2=param[2],
       v1=param[1],
       pos$0=caml_call3(Core_kernel_Time_ns_alternate_[1][2],buf,pos,v1);
      return caml_call3(Core_kernel_Time_ns_alternate_[1][2],buf,pos$0,v2)}
    var bin_writer_t$4=[0,bin_size_t$4,bin_write_t$4];
    function bin_read_t$20(buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],cst_src_connection_ml_Heartbea,pos_ref[1])}
    function bin_read_t$21(buf,pos_ref)
     {var
       v_timeout=caml_call2(Core_kernel_Time_ns_alternate_[1][3],buf,pos_ref),
       v_send_every=
        caml_call2(Core_kernel_Time_ns_alternate_[1][3],buf,pos_ref);
      return [0,v_timeout,v_send_every]}
    var
     bin_reader_t$9=[0,bin_read_t$21,bin_read_t$20],
     bin_t$4=[0,bin_shape_t$5,bin_writer_t$4,bin_reader_t$9];
    function send_every(r){return r[2]}
    function timeout(r){return r[1]}
    function create$2(opt,_po_,param)
     {if(opt)
       var sth=opt[1],timeout=sth;
      else
       var timeout=caml_call1(Core_kernel_Time_ns_alternate_[1][80],30.);
      if(_po_)
       var sth$0=_po_[1],send_every=sth$0;
      else
       var send_every=caml_call1(Core_kernel_Time_ns_alternate_[1][80],10.);
      return [0,timeout,send_every]}
    function sexp_of_t$14(param)
     {var
       v_heartbeat_config=param[2],
       v_description=param[1],
       v_heartbeat_callbacks=param[3],
       v_heartbeat_event=param[11],
       v_time_source=param[10],
       v_implementations_instance=param[9],
       v_close_finished=param[8],
       v_close_started=param[7],
       v_open_queries=param[6],
       v_writer=param[5],
       v_reader=param[4],
       arg=
        caml_call2
         (Core_kernel_Set_once[1],
          Async_kernel_Synchronous_time_[22][1],
          v_heartbeat_event),
       bnds=[0,[1,[0,_dU_,[0,arg,0]]],0],
       arg$0=caml_call1(Async_kernel_Synchronous_time_[4],v_time_source),
       bnds$0=[0,[1,[0,_dV_,[0,arg$0,0]]],bnds],
       arg$1=
        caml_call2(Core_kernel_Set_once[1],_dA_[1],v_implementations_instance),
       bnds$1=[0,[1,[0,_dW_,[0,arg$1,0]]],bnds$0],
       arg$2=
        caml_call2(Async_kernel_Ivar[9],Core_kernel[502],v_close_finished),
       bnds$2=[0,[1,[0,_dX_,[0,arg$2,0]]],bnds$1],
       arg$3=
        caml_call2(Async_kernel_Ivar[9],Core_kernel_Info[6],v_close_started),
       bnds$3=[0,[1,[0,_dY_,[0,arg$3,0]]],bnds$2],
       arg$4=
        caml_call3
         (Core_kernel_Hashtbl[3],
          Query_id[10],
          Sexplib0_Sexp_conv[23],
          v_open_queries),
       bnds$4=[0,[1,[0,_dZ_,[0,arg$4,0]]],bnds$3],
       arg$5=caml_call1(_bU_[1],v_writer),
       bnds$5=[0,[1,[0,_d0_,[0,arg$5,0]]],bnds$4],
       arg$6=caml_call1(_bV_[1],v_reader),
       bnds$6=[0,[1,[0,_d1_,[0,arg$6,0]]],bnds$5];
      function _pl_(f)
       {function _pm_(_pn_){return 0}
        return caml_call1(Sexplib0_Sexp_conv[24],_pm_)}
      var
       arg$7=caml_call2(Core_kernel[272],_pl_,v_heartbeat_callbacks),
       bnds$7=[0,[1,[0,_d2_,[0,arg$7,0]]],bnds$6],
       arg$8=sexp_of_t$13(v_heartbeat_config),
       bnds$8=[0,[1,[0,_d3_,[0,arg$8,0]]],bnds$7],
       arg$9=caml_call1(Core_kernel_Info[6],v_description),
       bnds$9=[0,[1,[0,_d4_,[0,arg$9,0]]],bnds$8];
      return [1,bnds$9]}
    function sexp_of_t_hum_writer(t)
     {var _pk_=[0,[1,[0,_d5_,[0,caml_call1(_bU_[1],t[5]),0]]],0];
      return [1,
              [0,[1,[0,_d6_,[0,caml_call1(Core_kernel_Info[6],t[1]),0]]],_pk_]]}
    function description$0(t){return t[1]}
    function is_closed$2(t){return caml_call1(Async_kernel_Ivar[17],t[7])}
    function writer(t)
     {if(! is_closed$2(t) && caml_call1(_bU_[13],t[5]))return [0,t[5]];
      return _d7_}
    function bytes_to_write$0(t){return caml_call1(_bU_[5],t[5])}
    function flushed$1(t){return caml_call1(_bU_[7],t[5])}
    function handle_send_result$1(t,r)
     {if(typeof r === "number")
       return caml_call5
               (Core_kernel[221],
                0,
                _d8_,
                cst_RPC_connection_got_closed_,
                t,
                sexp_of_t_hum_writer);
      else
       {if(0 === r[0]){var x=r[1];return x}
        var
         _pe_=0,
         _pf_=[0,[1,[0,_d9_,[0,sexp_of_t_hum_writer(t),0]]],0],
         _pg_=0,
         _ph_=function(param){return _d__},
         _pi_=
          [0,
           [1,
            [0,[1,[0,_d$_,[0,caml_call2(Send_result[2],_ph_,r),_pg_]]],_pf_]],
           _pe_],
         _pj_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Message_cannot_be_sent$0),
            _pi_]];
        return caml_call1(Core_kernel[238],_pj_)}}
    function dispatch(t,response_handler,bin_writer_query,query)
     {var r=writer(t);
      if(0 === r[0])
       {var
         writer$0=r[1],
         _pb_=
          function(response_handler)
           {return caml_call3
                    (Core_kernel_Hashtbl[34],t[6],query[3],response_handler)};
        caml_call2(Core_kernel_Option[19],response_handler,_pb_);
        var _pc_=of_writer(bin_writer_query),_pd_=caml_call1(Message[4],_pc_);
        handle_send_result$1(t,caml_call3(_bU_[9],writer$0,_pd_,[0,query]));
        return _ea_}
      return r}
    function make_dispatch_bigstring
     (do_send,t,tag,version,buf,pos,len,response_handler)
     {var match=writer(t);
      if(0 === match[0])
       {var
         writer$0=match[1],
         id=caml_call1(Query_id[45],0),
         header=[0,[0,tag,version,id,caml_call1(_h_,len)]],
         _pa_=
          function(response_handler)
           {return caml_call3
                    (Core_kernel_Hashtbl[34],t[6],id,response_handler)};
        caml_call2(Core_kernel_Option[19],response_handler,_pa_);
        var
         result=
          handle_send_result$1
           (t,caml_call6(do_send,writer$0,Message[19],header,buf,pos,len));
        return [0,result]}
      return _eb_}
    var _ec_=_bU_[10];
    function dispatch_bigstring(_o5_,_o6_,_o7_,_o8_,_o9_,_o__,_o$_)
     {return make_dispatch_bigstring(_ec_,_o5_,_o6_,_o7_,_o8_,_o9_,_o__,_o$_)}
    var _ed_=_bU_[11];
    function schedule_dispatch_bigstring(_oY_,_oZ_,_o0_,_o1_,_o2_,_o3_,_o4_)
     {return make_dispatch_bigstring(_ed_,_oY_,_oZ_,_o0_,_o1_,_o2_,_o3_,_o4_)}
    function close_reason(t,on_close)
     {var reason=caml_call1(Async_kernel_Ivar[18],t[7]);
      if(890972481 <= on_close)return reason;
      function _oW_(param){return reason}
      var _oX_=caml_call1(Async_kernel_Ivar[18],t[8]);
      return caml_call2(Async_kernel[20],_oX_,_oW_)}
    function close_finished(t){return caml_call1(Async_kernel_Ivar[18],t[8])}
    function add_heartbeat_callback(t,f)
     {t[3] = caml_call2(Core_kernel_Array[39],[0,f],t[3]);return 0}
    function close$3(opt,reason,t)
     {if(opt)
       var sth=opt[1],streaming_responses_flush_time=sth;
      else
       var
        streaming_responses_flush_time=
         caml_call1(Core_kernel_Time_ns_alternate_[1][81],5);
      if(1 - is_closed$2(t))
       {var
         _oJ_=
          function(event)
           {var
             match=
              caml_call2(Async_kernel_Synchronous_time_[22][8],t[10],event);
            if(1 === match)
             {var
               _oV_=
                function(param)
                 {return caml_call2
                          (Async_kernel_Synchronous_time_[22][9],t[10],event)};
              return caml_call3
                      (Async_kernel_Synchronous_time_[19],
                       t[10],
                       Core_kernel_Time_ns_alternate_[1][74],
                       _oV_)}
            return 0},
         _oK_=caml_call1(Core_kernel_Set_once[7],t[11]);
        caml_call2(Core_kernel_Option[19],_oK_,_oJ_);
        caml_call2(Async_kernel_Ivar[14],t[7],reason);
        var
         _oL_=
          function(param)
           {function _oR_(param)
             {function _oT_(param)
               {return caml_call2(Async_kernel_Ivar[14],t[8],0)}
              var _oU_=caml_call1(_bV_[2],t[4]);
              return caml_call2(Async_kernel[16],_oU_,_oT_)}
            var _oS_=caml_call1(_bU_[2],t[5]);
            return caml_call2(Async_kernel[16],_oS_,_oR_)},
         match=caml_call1(Core_kernel_Set_once[7],t[9]);
        if(match)
         {var instance=match[1],flushed=caml_call1(_dA_[3],instance);
          if(caml_call1(Async_kernel_Deferred[7],flushed))
           {caml_call1(_dA_[4],instance);var flushed$0=flushed}
          else
           var
            _oM_=function(param){return caml_call1(_dA_[4],instance)},
            _oN_=caml_call1(Async_kernel_Time_source[36],t[10]),
            _oO_=
             [0,
              caml_call2
               (Async_kernel_Time_source[27],
                _oN_,
                streaming_responses_flush_time),
              0],
            _oP_=[0,flushed,[0,caml_call1(_bU_[6],t[5]),_oO_]],
            _oQ_=caml_call1(Async_kernel_Deferred[24],_oP_),
            flushed$0=caml_call2(Async_kernel[21],_oQ_,_oM_);
          var flushed$1=flushed$0}
        else
         var flushed$1=Async_kernel_Deferred[18];
        caml_call2(Async_kernel[16],flushed$1,_oL_)}
      return close_finished(t)}
    function heartbeat_now(t,last_heartbeat)
     {var
       _oE_=caml_call1(Async_kernel_Synchronous_time_[14],t[10]),
       since_last_heartbeat=
        caml_call2(Core_kernel_Time_ns_alternate_[69],_oE_,last_heartbeat);
      if
       (caml_call2
         (Core_kernel_Time_ns_alternate_[1][17],since_last_heartbeat,t[2][1]))
       {var
         reason=
          function(param)
           {var
             _oG_=t[2][1],
             _oH_=
              [0,
               [11,
                cst_No_heartbeats_received_for$0,
                [24,
                 _eg_,
                 function(param,custom_printf_001)
                  {var
                    _oI_=
                     caml_call1
                      (Core_kernel_Time_ns_alternate_[1][10],custom_printf_001);
                   return caml_call2(Sexplib0_Sexp[14],0,_oI_)},
                 _ef_]],
               cst_No_heartbeats_received_for];
            return caml_call2(Core_kernel[241],_oH_,_oG_)},
         _oF_=close$3(0,caml_call1(Core_kernel_Info[13],reason),t);
        return caml_call1(Async_kernel[6],_oF_)}
      var match=writer(t);
      if(0 === match[0])
       {var writer$0=match[1];
        return handle_send_result$1
                (t,caml_call3(_bU_[9],writer$0,Message[19],0))}
      return 0}
    var
     default_handshake_timeout=
      caml_call1(Core_kernel_Time_ns_alternate_[1][80],30.);
    function cleanup(t,reason,exn)
     {var _oA_=close$3(0,reason,t);
      caml_call1(Async_kernel[6],_oA_);
      var _oB_=1 - caml_call1(Core_kernel_Hashtbl[29],t[6]);
      if(_oB_)
       {if(exn[1] === Rpc)
         var error=exn[2],error$0=error;
        else
         var error$0=[2,caml_call1(Base_Exn[1],exn)];
        var
         dummy_buffer=caml_call2(Core_kernel_Bigstring[110],0,1),
         dummy_ref=[0,0],
         _oC_=
          function(query_id,response_handler)
           {caml_call3
             (response_handler,
              [0,query_id,[1,error$0]],
              dummy_buffer,
              dummy_ref);
            return 0};
        caml_call2(Core_kernel_Hashtbl[21],t[6],_oC_);
        caml_call1(Core_kernel_Hashtbl[16],t[6]);
        var _oD_=runtime.bigstring_destroy_stub(dummy_buffer)}
      else
       var _oD_=_oB_;
      return _oD_}
    var contains_magic_prefix=caml_call1(include$3[13],2);
    function create$3
     (implementations,connection_state,opt,_nQ_,_nP_,_nO_,param)
     {var writer$1=param[2],reader=param[1];
      if(opt)
       var sth=opt[1],handshake_timeout=sth;
      else
       var handshake_timeout=default_handshake_timeout;
      if(_nQ_)
       var sth$0=_nQ_[1],heartbeat_config=sth$0;
      else
       var heartbeat_config=create$2(0,0,0);
      if(_nP_)
       var sth$1=_nP_[1],description=sth$1;
      else
       var description=caml_call1(Core_kernel_Info[11],cst_created_directly);
      if(_nO_)
       var sth$2=_nO_[1],time_source=sth$2;
      else
       var time_source=caml_call1(Async_kernel_Synchronous_time_[24],0);
      if(implementations)
       var s=implementations[1],implementations$0=s;
      else
       var implementations$0=null$0(0);
      var
       _nR_=caml_call1(Core_kernel_Set_once[3],0),
       _nS_=caml_call1(Core_kernel_Set_once[3],0),
       _nT_=caml_call1(Async_kernel_Ivar[12],0),
       _nU_=caml_call1(Async_kernel_Ivar[12],0),
       t=
        [0,
         description,
         heartbeat_config,
         [0],
         reader,
         writer$1,
         caml_call3(Core_kernel_Hashtbl[84][13],0,_eq_,0),
         _nU_,
         _nT_,
         _nS_,
         time_source,
         _nR_];
      function _nV_(param)
       {var
         _oz_=
          close$3
           (0,caml_call1(Core_kernel_Info[11],cst_RPC_transport_stopped),t);
        return caml_call1(Async_kernel[6],_oz_)}
      var _nW_=caml_call1(_bU_[6],writer$1);
      caml_call2(Async_kernel[12],_nW_,_nV_);
      function _nX_(param)
       {if(0 === param[0])
         {var
           _n4_=t[5],
           _n5_=caml_call1(connection_state,t),
           _n6_=caml_call1(Async_kernel_Ivar[18],t[7]),
           instance=instantiate(implementations$0,t[1],_n6_,_n5_,_n4_);
          caml_call3(Core_kernel_Set_once[5],t[9],_ei_,instance);
          var
           monitor=caml_call4(Async_kernel_Monitor[3],0,0,_ej_,0),
           reason=
            function(name,exn)
             {var
               _ox_=
                caml_call2
                 (Core_kernel[15],cst_exn_raised_in_RPC_connecti,name),
               _oy_=caml_call2(Core_kernel_Info[22],0,exn);
              return [0,exn,caml_call2(Core_kernel_Info[18],_oy_,_ox_)]},
           _n7_=
            function(param)
             {var reason=param[2],exn=param[1];return cleanup(t,reason,exn)},
           _n8_=0,
           _n9_=function(_ow_){return reason(cst_Writer_t,_ow_)},
           _n__=caml_call1(_bU_[4],t[5]),
           _n$_=caml_call1(Async_kernel_Monitor[11],_n__),
           _oa_=[0,caml_call2(Async_kernel_Async_stream[25],_n$_,_n9_),_n8_],
           _ob_=function(_ov_){return reason(cst_loop,_ov_)},
           _oc_=caml_call1(Async_kernel_Monitor[11],monitor),
           _od_=[0,caml_call2(Async_kernel_Async_stream[25],_oc_,_ob_),_oa_],
           _oe_=caml_call1(Async_kernel_Async_stream[5],_od_),
           _of_=caml_call1(Async_kernel_Async_stream[31],_oe_);
          caml_call2(Async_kernel_Async_stream[18],_of_,_n7_);
          var
           _og_=
            function(param)
             {var
               last_heartbeat=
                [0,caml_call1(Async_kernel_Synchronous_time_[14],t[10])];
              heartbeat_now(t,last_heartbeat[1]);
              function _oi_(param){return heartbeat_now(t,last_heartbeat[1])}
              var
               heartbeat_from_now_on=
                caml_call3
                 (Async_kernel_Synchronous_time_[22][6],t[10],t[2][2],_oi_);
              caml_call3
               (Core_kernel_Set_once[5],t[11],_eh_,heartbeat_from_now_on);
              function _oj_(param)
               {if(0 === param[0])
                 {var reason=param[1];return cleanup(t,reason,[0,Rpc,0,t[1]])}
                var _ou_=[0,Rpc,0,t[1]];
                return cleanup
                        (t,
                         caml_call1
                          (Core_kernel_Info[11],cst_EOF_or_connection_closed),
                         _ou_)}
              function _ok_(param)
               {last_heartbeat[1]
                =
                caml_call1(Async_kernel_Synchronous_time_[14],t[10]);
                function _ot_(f){return caml_call1(f,0)}
                return caml_call2(Core_kernel_Array[20],t[3],_ot_)}
              function f(buf,pos,param)
               {var
                 read_buffer_pos_ref=[0,pos],
                 msg$0=caml_call2(Message[15],buf,read_buffer_pos_ref);
                if(typeof msg$0 === "number")
                 var res=0;
                else
                 if(0 === msg$0[0])
                  var
                   query=msg$0[1],
                   instance=caml_call2(Core_kernel_Set_once[8],t[9],_ee_),
                   res=
                    caml_call4(_dA_[2],instance,query,buf,read_buffer_pos_ref);
                 else
                  {var
                    response=msg$0[1],
                    match=caml_call2(Core_kernel_Hashtbl[52],t[6],response[1]);
                   if(match)
                    {var
                      response_handler=match[1],
                      match$0=
                       caml_call3
                        (response_handler,response,buf,read_buffer_pos_ref);
                     if(typeof match$0 === "number")
                      var _oo_=0;
                     else
                      {var _on_=match$0[1];
                       if(-286555464 === _on_)
                        {var wait=match$0[2];
                         caml_call2(Core_kernel_Hashtbl[31],t[6],response[1]);
                         var _oo_=[1,wait]}
                       else
                        if(76061764 <= _on_)
                         {var removal_circumstances=match$0[2];
                          caml_call2(Core_kernel_Hashtbl[31],t[6],response[1]);
                          if(0 === removal_circumstances[0])
                           var _oo_=0;
                          else
                           {var e=removal_circumstances[1],switch$0=0;
                            if(typeof e === "number" || ! (3 === e[0]))
                             switch$0 = 1;
                            else
                             var _oo_=0;
                            if(switch$0)var _oo_=[0,[1,e]]}}
                        else
                         var wait$0=match$0[2],_oo_=[1,wait$0]}}
                   else
                    var _oo_=[0,[1,[4,response[1]]]];
                   var res=_oo_}
                if(typeof res === "number")
                 return 0;
                else
                 {if(0 === res[0])
                   {var result=res[1];
                    if(0 === result[0])
                     var reason=caml_call1(Core_kernel_Info[11],msg);
                    else
                     var
                      e$0=result[1],
                      _oq_=
                       function(param)
                        {return caml_call1
                                 (Sexplib0_Sexp_conv[7],cst_Connection_on_message_resu)},
                      _or_=function(_os_){return sexp_of_t$10(_os_,_oq_)},
                      reason=caml_call5(Core_kernel_Info[15],0,0,msg,e$0,_or_);
                    var _op_=close$3(0,reason,t);
                    caml_call1(Async_kernel[6],_op_);
                    return [0,reason]}
                  return res}}
              var
               _oh_=caml_call1(Base_Staged[1],f),
               _ol_=caml_call1(Base_Staged[2],_oh_),
               _om_=caml_call3(_bV_[4],t[4],_ol_,_ok_);
              return caml_call2(Async_kernel[16],_om_,_oj_)};
          caml_call3(Async_kernel[14],[0,monitor],0,_og_);
          return [0,t]}
        var error=param[1];
        return [1,[0,Handshake_error,[0,error,description]]]}
      var match=writer(t);
      if(0 === match[0])
       {var writer$0=match[1];
        handle_send_result$1(t,caml_call3(_bU_[9],writer$0,_dB_[2],v1));
        var
         _nK_=function(param){return caml_call2(_bV_[6],t[4],_dB_[3])},
         result=caml_call7(Async_kernel_Monitor[16],0,0,0,0,_ek_,0,_nK_),
         _nL_=
          function(param)
           {if(typeof param === "number")
             {var
               _nZ_=
                close$3
                 (0,caml_call1(Core_kernel_Info[11],cst_Handshake_timeout),t);
              caml_call1(Async_kernel[6],_nZ_);
              return _el_}
            var _n0_=param[2];
            if(0 === _n0_[0])
             {var _n1_=_n0_[1];
              if(0 === _n1_[0])
               {var peer=_n1_[1],match=caml_call2(negotiate,v1,peer);
                if(0 === match[0])
                 {var _n2_=match[1];return 1 === _n2_?_em_:[1,[2,_n2_]]}
                var e=match[1];
                return [1,[1,e]]}
              return 3456156 <= _n1_[1]?_en_:_eo_}
            var
             exn=_n0_[1],
             reason=
              caml_call1(Core_kernel_Info[11],cst_Reader_read_one_message_bi),
             _n3_=close$3(0,reason,t);
            caml_call1(Async_kernel[6],_n3_);
            return [1,[0,caml_call2(Core_kernel_Error[22],0,exn)]]},
         _nM_=caml_call1(Async_kernel_Time_source[36],t[10]),
         _nN_=
          caml_call3
           (Async_kernel_Time_source[28],_nM_,handshake_timeout,result),
         _nY_=caml_call2(Async_kernel[21],_nN_,_nL_)}
      else
       var _nY_=caml_call1(Async_kernel[19],_ep_);
      return caml_call2(Async_kernel[21],_nY_,_nX_)}
    function with_close
     (implementations,
      handshake_timeout,
      heartbeat_config,
      connection_state,
      transport,
      dispatch_queries,
      on_handshake_error)
     {if(typeof on_handshake_error === "number")
       var handle_handshake_error=function(_nJ_){throw _nJ_};
      else
       var f=on_handshake_error[2],handle_handshake_error=f;
      function _nz_(t)
       {if(0 === t[0])
         {var
           t$0=t[1],
           _nB_=
            function(param)
             {return close$3
                      (0,
                       caml_call1
                        (Core_kernel_Info[11],cst_Rpc_Connection_with_close_),
                       t$0)},
           _nC_=
            function(param)
             {function _nF_(result)
               {function _nH_(param){return result}
                var
                 _nI_=
                  implementations
                   ?close_finished(t$0)
                   :Async_kernel_Deferred[18];
                return caml_call2(Async_kernel[21],_nI_,_nH_)}
              var _nG_=caml_call1(dispatch_queries,t$0);
              return caml_call2(Async_kernel[20],_nG_,_nF_)};
          return caml_call7(Async_kernel_Monitor[23],0,0,0,0,0,_nC_,_nB_)}
        var e=t[1];
        function _nD_(param){return caml_call1(handle_handshake_error,e)}
        var _nE_=close$1(transport);
        return caml_call2(Async_kernel[20],_nE_,_nD_)}
      var
       _nA_=
        create$3
         (implementations,
          connection_state,
          handshake_timeout,
          heartbeat_config,
          0,
          0,
          transport);
      return caml_call2(Async_kernel[20],_nA_,_nz_)}
    function server_with_close
     (handshake_timeout,
      heartbeat_config,
      transport,
      implementations,
      connection_state,
      on_handshake_error)
     {if(typeof on_handshake_error === "number")
       var
        on_handshake_error$0=
         -146189108 <= on_handshake_error
          ?-146189108
          :[0,747848894,function(param){return Async_kernel_Deferred[18]}];
      else
       var f=on_handshake_error[2],on_handshake_error$0=[0,747848894,f];
      return with_close
              ([0,implementations],
               handshake_timeout,
               heartbeat_config,
               connection_state,
               transport,
               function(param){return Async_kernel_Deferred[18]},
               on_handshake_error$0)}
    function close$4(streaming_responses_flush_time,opt,t)
     {if(opt)
       var sth=opt[1],reason=sth;
      else
       var reason=caml_call1(Core_kernel_Info[11],cst_Rpc_Connection_close);
      return close$3(streaming_responses_flush_time,reason,t)}
    function null$1(param)
     {var _ny_=null$0(0);return [0,function(param){return 0},_ny_]}
    var Client_implementations=[0,null$1];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$37);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_rpc_kernel_Connectio$1);
    var
     _er_=
      [0,
       t_of_sexp$2,
       sexp_of_t$13,
       bin_size_t$4,
       bin_write_t$4,
       bin_read_t$21,
       bin_read_t$20,
       bin_shape_t$5,
       bin_writer_t$4,
       bin_reader_t$9,
       bin_t$4,
       create$2,
       timeout,
       send_every],
     Async_rpc_kernel_Connection=
      [0,
       sexp_of_t$14,
       _er_,
       Client_implementations,
       create$3,
       contains_magic_prefix,
       description$0,
       add_heartbeat_callback,
       close$4,
       close_finished,
       close_reason,
       is_closed$2,
       bytes_to_write$0,
       flushed$1,
       with_close,
       server_with_close,
       dispatch,
       dispatch_bigstring,
       schedule_dispatch_bigstring,
       default_handshake_timeout];
    caml_register_global
     (800,Async_rpc_kernel_Connection,"Async_rpc_kernel__Connection");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_rpc_kernel_Connectio$2);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_rpc_kernel$38);
    caml_call1(Expect_test_collector[4][1],cst_src_connection_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$39,cst$13);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$40);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_rpc_kernel_Connectio$3);
    var Async_rpc_kernel_Connection_in=[0];
    caml_register_global
     (801,Async_rpc_kernel_Connection_in,"Async_rpc_kernel__Connection_intf");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_rpc_kernel_Rpc);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_rpc_kernel$41);
    caml_call1(Expect_test_collector[4][1],cst_src_rpc_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$42,cst$14);
    var symbol$6=Core_kernel_Result[14],symbol$7=Core_kernel_Result[15];
    function dispatch_raw
     (conn,tag,version,bin_writer_query,query,query_id,response_handler)
     {var
       query$0=[0,tag,version,query_id,query],
       match=dispatch(conn,response_handler,bin_writer_query,query$0);
      return 0 === match[0]?_es_:_et_}
    function dispatch_raw$0
     (conn,tag,version,bin_writer_query,query,query_id,f)
     {var
       response_ivar=caml_call1(Async_kernel_Ivar[12],0),
       e=
        dispatch_raw
         (conn,
          tag,
          version,
          bin_writer_query,
          query,
          query_id,
          [0,caml_call1(f,response_ivar)]);
      if(0 !== e[0])caml_call2(Async_kernel_Ivar[14],response_ivar,e);
      return caml_call1(Async_kernel_Ivar[18],response_ivar)}
    function create$4(name,version,bin_query,bin_response)
     {return [0,caml_call1(Rpc_tag[11],name),version,bin_query,bin_response]}
    function name(t){return caml_call1(Rpc_tag[12],t[1])}
    function version(t){return t[2]}
    function description$1(t){var _nx_=t[2];return [0,name(t),_nx_]}
    function bin_query(t){return t[3]}
    function bin_response(t){return t[4]}
    function implement(t,f){return [0,t[1],t[2],[2,t[3][3],t[4][2],f,1]]}
    function implement$0(t,f){return [0,t[1],t[2],[2,t[3][3],t[4][2],f,0]]}
    function dispatch$0(t,conn,query)
     {function response_handler(ivar,response,read_buffer,read_buffer_pos_ref)
       {function _nw_(len)
         {return bin_read_from_bigstring
                  (t[4][3],
                   0,
                   read_buffer,
                   read_buffer_pos_ref,
                   len,
                   cst_client_side_rpc_response_u)}
        var response$0=caml_call2(symbol$6,response[2],_nw_);
        caml_call2(Async_kernel_Ivar[14],ivar,response$0);
        return _eu_}
      var query_id=caml_call1(Query_id[45],0);
      return dispatch_raw$0
              (conn,t[1],t[2],t[3][2],query,query_id,response_handler)}
    function rpc_result_to_or_error(t,conn,result)
     {var _nv_=close_reason(conn,890972481);
      return or_error(t[1],t[2],conn[1],_nv_,result)}
    function dispatch$1(t,conn,query)
     {function _nt_(result){return rpc_result_to_or_error(t,conn,result)}
      var _nu_=dispatch$0(t,conn,query);
      return caml_call2(Async_kernel[21],_nu_,_nt_)}
    function dispatch_exn(t,conn,query)
     {var _nr_=Core_kernel_Or_error[35],_ns_=dispatch$1(t,conn,query);
      return caml_call2(Async_kernel[21],_ns_,_nr_)}
    function make_dispatch
     (do_dispatch,
      conn,
      rpc_tag,
      version,
      buf,
      pos,
      len,
      handle_response,
      handle_error)
     {function response_handler(response,read_buffer,read_buffer_pos_ref)
       {var _nn_=response[2];
        if(0 === _nn_[0])
         {var
           len=_nn_[1],
           d=
            caml_call3(handle_response,read_buffer,read_buffer_pos_ref[1],len);
          read_buffer_pos_ref[1] = read_buffer_pos_ref[1] + len | 0;
          return caml_call1(Async_kernel_Deferred[7],d)?_ev_:[0,-286555464,d]}
        var
         e=_nn_[1],
         _no_=
          sexp_of_t$10
           (e,
            function(param)
             {var
               _np_=close_reason(conn,890972481),
               _nq_=caml_call1(Async_kernel_Deferred[5],_np_);
              return caml_call2(Core_kernel[438],Core_kernel_Info[6],_nq_)});
        caml_call1(handle_error,caml_call1(Core_kernel_Error[5],_no_));
        return _ew_}
      return caml_call7
              (do_dispatch,
               conn,
               caml_call1(Rpc_tag[11],rpc_tag),
               version,
               buf,
               pos,
               len,
               [0,response_handler])}
    function dispatch$2
     (conn,rpc_tag,version,buf,pos,len,handle_response,handle_error)
     {var
       match=
        make_dispatch
         (dispatch_bigstring,
          conn,
          rpc_tag,
          version,
          buf,
          pos,
          len,
          handle_response,
          handle_error);
      return 0 === match[0]?17724:179911373}
    function schedule_dispatch
     (conn,rpc_tag,version,buf,pos,len,handle_response,handle_error)
     {var
       match=
        make_dispatch
         (schedule_dispatch_bigstring,
          conn,
          rpc_tag,
          version,
          buf,
          pos,
          len,
          handle_response,
          handle_error);
      if(0 === match[0]){var d=match[1];return [0,933108739,d]}
      return 179911373}
    function implement$1(t,f){return [0,t[1],t[2],[3,f,1]]}
    function implement$2(t,f){return [0,t[1],t[2],[3,f,0]]}
    function implement_for_tag_and_version(rpc_tag,version,f)
     {return [0,caml_call1(Rpc_tag[11],rpc_tag),version,[3,f,1]]}
    function implement_for_tag_and_version$0(rpc_tag,version,f)
     {return [0,caml_call1(Rpc_tag[11],rpc_tag),version,[3,f,0]]}
    function bin_msg(r){return r[3]}
    function version$0(r){return r[2]}
    function name$0(t){return caml_call1(Rpc_tag[12],t[1])}
    function create$5(name,version,bin_msg)
     {return [0,caml_call1(Rpc_tag[11],name),version,bin_msg]}
    function description$2(t){var _nm_=t[2];return [0,name$0(t),_nm_]}
    function implement$3(t,f){return [0,t[1],t[2],[0,t[3][3],f]]}
    function dispatch$3(t,conn,query)
     {var query_id=caml_call1(Query_id[45],0);
      return dispatch_raw(conn,t[1],t[2],t[3][2],query,query_id,0)}
    function rpc_result_to_or_error$0(t,conn,result)
     {var _nl_=close_reason(conn,890972481);
      return or_error(t[1],t[2],conn[1],_nl_,result)}
    function dispatch$4(t,conn,query)
     {var result=dispatch$3(t,conn,query);
      return rpc_result_to_or_error$0(t,conn,result)}
    function dispatch_exn$0(t,conn,query)
     {var _nk_=dispatch$4(t,conn,query);
      return caml_call1(Core_kernel_Or_error[35],_nk_)}
    function implement$4(t,f){return [0,t[1],t[2],[1,f]]}
    function dispatch$5(param,conn,buf,pos,len)
     {var
       version=param[2],
       tag=param[1],
       match=dispatch_bigstring(conn,tag,version,buf,pos,len,0);
      return 0 === match[0]?17724:179911373}
    function schedule_dispatch$0(param,conn,buf,pos,len)
     {var
       version=param[2],
       tag=param[1],
       match=schedule_dispatch_bigstring(conn,tag,version,buf,pos,len,0);
      if(0 === match[0]){var flushed=match[1];return [0,933108739,flushed]}
      return 179911373}
    var
     Expert$0=[0,implement$4,dispatch$5,schedule_dispatch$0],
     _ez_=
      caml_call1
       (Bin_prot_Shape[9],
        [0,_ey_,[0,_ex_,[0,[0,cst_Error,[0,Core_kernel_Error[33],0]],0]]]),
     _eA_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$13),0,_ez_],0],
     _eB_=caml_call1(Bin_prot_Shape[4][1],cst_src_rpc_ml_272_2),
     group$10=caml_call2(Bin_prot_Shape[6],_eB_,_eA_),
     _eC_=caml_call1(Bin_prot_Shape[2][1],cst_t$14),
     bin_shape_t$6=caml_call1(caml_call2(Bin_prot_Shape[14],group$10,_eC_),0);
    function bin_size_t$5(param)
     {if(typeof param === "number")return 1;
      var v1=param[1],_nj_=caml_call1(Core_kernel_Error[29],v1);
      return caml_call2(Bin_prot_Common[23],1,_nj_)}
    function bin_write_t$5(buf,pos,param)
     {if(typeof param === "number")
       return param
               ?caml_call3(Bin_prot_Write[30],buf,pos,1)
               :caml_call3(Bin_prot_Write[30],buf,pos,0);
      var v1=param[1],pos$0=caml_call3(Bin_prot_Write[30],buf,pos,2);
      return caml_call3(Core_kernel_Error[30],buf,pos$0,v1)}
    var bin_writer_t$5=[0,bin_size_t$5,bin_write_t$5];
    function bin_read_t$22(buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],cst_src_rpc_ml_Pipe_close_reas,pos_ref[1])}
    function bin_read_t$23(buf,pos_ref)
     {var match=caml_call2(Bin_prot_Read[29],buf,pos_ref);
      if(2 < match >>> 0)
       return caml_call2(Bin_prot_Common[18],_eD_,pos_ref[1]);
      switch(match)
       {case 0:return 0;
        case 1:return 1;
        default:
         var arg_1=caml_call2(Core_kernel_Error[31],buf,pos_ref);
         return [0,arg_1]}}
    var
     bin_reader_t$10=[0,bin_read_t$23,bin_read_t$22],
     bin_t$5=[0,bin_shape_t$6,bin_writer_t$5,bin_reader_t$10];
    function compare$2(a_001,match)
     {if(caml_call2(Ppx_compare_lib[1],a_001,match))return 0;
      if(typeof a_001 === "number")
       {if(! a_001)
         {if(typeof match === "number" && ! match)return 0;return -1}
        if(typeof match !== "number")return -1;
        if(match)return 0}
      else
       {var _ni_=a_001[1];
        if(typeof match !== "number")
         {var b_004=match[1];
          return caml_call2(Core_kernel_Error[1],_ni_,b_004)}
        if(match)return 1}
      return 1}
    function t_of_sexp$3(sexp)
     {if(0 === sexp[0])
       {var _ne_=sexp[1],switch$0=0;
        if(caml_string_notequal(_ne_,cst_Closed_locally))
         {var switch$1=0;
          if(caml_string_notequal(_ne_,cst_Closed_remotely))
           {var switch$2=0;
            if(caml_string_notequal(_ne_,cst_Error$0))
             if(caml_string_notequal(_ne_,cst_closed_locally))
              if(caml_string_notequal(_ne_,cst_closed_remotely))
               {if(caml_string_notequal(_ne_,cst_error$1))
                 {switch$0 = 1;switch$1 = 1;switch$2 = 1}}
              else
               switch$2 = 1;
             else
              {switch$1 = 1;switch$2 = 1}
            if(! switch$2)
             return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$3,sexp)}
          if(! switch$1)return 1}
        if(! switch$0)return 0}
      else
       {var _nf_=sexp[1];
        if(! _nf_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$3,sexp);
        var _ng_=_nf_[1];
        if(0 !== _ng_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$3,sexp);
        var _nh_=_ng_[1],switch$3=0;
        if(caml_string_notequal(_nh_,cst_Closed_locally$0))
         {var switch$4=0;
          if(caml_string_notequal(_nh_,cst_Closed_remotely$0))
           {var switch$5=0;
            if(caml_string_notequal(_nh_,cst_Error$1))
             if(caml_string_notequal(_nh_,cst_closed_locally$0))
              if(caml_string_notequal(_nh_,cst_closed_remotely$0))
               {if(caml_string_notequal(_nh_,cst_error$2))
                 {switch$3 = 1;switch$4 = 1;switch$5 = 1}}
              else
               switch$5 = 1;
             else
              {switch$4 = 1;switch$5 = 1}
            if(! switch$5)
             {var sexp_args=_nf_[2];
              if(sexp_args && ! sexp_args[2])
               {var v0=sexp_args[1],v0$0=caml_call1(Core_kernel_Error[5],v0);
                return [0,v0$0]}
              return caml_call3
                      (Sexplib0_Sexp_conv_error[4],tp_loc$3,_nh_,sexp)}}
          if(! switch$4)
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$3,sexp)}
        if(! switch$3)
         return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$3,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$3,sexp)}
    function sexp_of_t$15(param)
     {if(typeof param === "number")return param?_eE_:_eF_;
      var v0=param[1],v0$0=caml_call1(Core_kernel_Error[6],v0);
      return [1,[0,_eG_,[0,v0$0,0]]]}
    var
     _eJ_=
      caml_call1
       (Bin_prot_Shape[9],
        [0,
         _eI_,
         [0,_eH_,[0,[0,cst_Error$2,[0,Core_kernel_Error[37][2][7],0]],0]]]),
     _eK_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_t$15),0,_eJ_],0],
     _eL_=caml_call1(Bin_prot_Shape[4][1],cst_src_rpc_ml_280_6),
     group$11=caml_call2(Bin_prot_Shape[6],_eL_,_eK_),
     _eM_=caml_call1(Bin_prot_Shape[2][1],cst_t$16),
     bin_shape_t$7=caml_call1(caml_call2(Bin_prot_Shape[14],group$11,_eM_),0);
    function bin_size_t$6(param)
     {if(typeof param === "number")return 1;
      var v1=param[1],_nd_=caml_call1(Core_kernel_Error[37][2][3],v1);
      return caml_call2(Bin_prot_Common[23],1,_nd_)}
    function bin_write_t$6(buf,pos,param)
     {if(typeof param === "number")
       return param
               ?caml_call3(Bin_prot_Write[30],buf,pos,1)
               :caml_call3(Bin_prot_Write[30],buf,pos,0);
      var v1=param[1],pos$0=caml_call3(Bin_prot_Write[30],buf,pos,2);
      return caml_call3(Core_kernel_Error[37][2][4],buf,pos$0,v1)}
    var bin_writer_t$6=[0,bin_size_t$6,bin_write_t$6];
    function bin_read_t$24(buf,pos_ref,vint)
     {return caml_call2
              (Bin_prot_Common[19],
               cst_src_rpc_ml_Pipe_close_reas$0,
               pos_ref[1])}
    function bin_read_t$25(buf,pos_ref)
     {var match=caml_call2(Bin_prot_Read[29],buf,pos_ref);
      if(2 < match >>> 0)
       return caml_call2(Bin_prot_Common[18],_eN_,pos_ref[1]);
      switch(match)
       {case 0:return 0;
        case 1:return 1;
        default:
         var arg_1=caml_call2(Core_kernel_Error[37][2][5],buf,pos_ref);
         return [0,arg_1]}}
    var
     bin_reader_t$11=[0,bin_read_t$25,bin_read_t$24],
     bin_t$6=[0,bin_shape_t$7,bin_writer_t$6,bin_reader_t$11];
    function compare$3(a_005,match)
     {if(caml_call2(Ppx_compare_lib[1],a_005,match))return 0;
      if(typeof a_005 === "number")
       {if(! a_005)
         {if(typeof match === "number" && ! match)return 0;return -1}
        if(typeof match !== "number")return -1;
        if(match)return 0}
      else
       {var _nc_=a_005[1];
        if(typeof match !== "number")
         {var b_008=match[1];
          return caml_call2(Core_kernel_Error[37][2][11],_nc_,b_008)}
        if(match)return 1}
      return 1}
    function t_of_sexp$4(sexp)
     {if(0 === sexp[0])
       {var _m__=sexp[1],switch$0=0;
        if(caml_string_notequal(_m__,cst_Closed_locally$1))
         {var switch$1=0;
          if(caml_string_notequal(_m__,cst_Closed_remotely$1))
           {var switch$2=0;
            if(caml_string_notequal(_m__,cst_Error$3))
             if(caml_string_notequal(_m__,cst_closed_locally$1))
              if(caml_string_notequal(_m__,cst_closed_remotely$1))
               {if(caml_string_notequal(_m__,cst_error$3))
                 {switch$0 = 1;switch$1 = 1;switch$2 = 1}}
              else
               switch$2 = 1;
             else
              {switch$1 = 1;switch$2 = 1}
            if(! switch$2)
             return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$4,sexp)}
          if(! switch$1)return 1}
        if(! switch$0)return 0}
      else
       {var _m$_=sexp[1];
        if(! _m$_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$4,sexp);
        var _na_=_m$_[1];
        if(0 !== _na_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$4,sexp);
        var _nb_=_na_[1],switch$3=0;
        if(caml_string_notequal(_nb_,cst_Closed_locally$2))
         {var switch$4=0;
          if(caml_string_notequal(_nb_,cst_Closed_remotely$2))
           {var switch$5=0;
            if(caml_string_notequal(_nb_,cst_Error$4))
             if(caml_string_notequal(_nb_,cst_closed_locally$2))
              if(caml_string_notequal(_nb_,cst_closed_remotely$2))
               {if(caml_string_notequal(_nb_,cst_error$4))
                 {switch$3 = 1;switch$4 = 1;switch$5 = 1}}
              else
               switch$5 = 1;
             else
              {switch$4 = 1;switch$5 = 1}
            if(! switch$5)
             {var sexp_args=_m$_[2];
              if(sexp_args && ! sexp_args[2])
               {var
                 v0=sexp_args[1],
                 v0$0=caml_call1(Core_kernel_Error[37][2][12],v0);
                return [0,v0$0]}
              return caml_call3
                      (Sexplib0_Sexp_conv_error[4],tp_loc$4,_nb_,sexp)}}
          if(! switch$4)
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$4,sexp)}
        if(! switch$3)
         return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$4,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$4,sexp)}
    function sexp_of_t$16(param)
     {if(typeof param === "number")return param?_eO_:_eP_;
      var v0=param[1],v0$0=caml_call1(Core_kernel_Error[37][2][13],v0);
      return [1,[0,_eQ_,[0,v0$0,0]]]}
    function create$6
     (client_pushes_back,
      name,
      version,
      bin_query,
      bin_initial_response,
      bin_update_response,
      bin_error,
      param)
     {var client_pushes_back$0=client_pushes_back?1:0;
      return [0,
              caml_call1(Rpc_tag[11],name),
              version,
              bin_query,
              bin_initial_response,
              bin_update_response,
              bin_error,
              client_pushes_back$0]}
    function make_initial_message(x){return [0,Unused_query_id[10],x]}
    function implement_gen(t,impl)
     {var
       bin_init_writer=
        caml_call2(Stream_initial_message[4],t[4][2],t[6][2]);
      return [0,t[1],t[2],[4,t[3][3],bin_init_writer,t[5][2],impl]]}
    function implement$5(t,f)
     {function f$0(c,query)
       {function _m8_(param)
         {if(0 === param[0])
           {var match=param[1],pipe=match[2],initial=match[1];
            return [0,[0,make_initial_message([0,initial]),pipe]]}
          var err=param[1];
          return [1,make_initial_message([1,err])]}
        var _m9_=caml_call2(f,c,query);
        return caml_call2(Async_kernel[21],_m9_,_m8_)}
      return implement_gen(t,[0,f$0])}
    function abort(t,conn,id)
     {var query=[0,t[1],t[2],id,774323088];
      dispatch(conn,0,Stream_query[17],query);
      return 0}
    var Pipe_message=[0],Pipe_response=[0];
    function id(t){return t[1]}
    function close_reason$0(t){return t[2]}
    function read_error(get_connection_close_reason,handler,err)
     {var
       _m7_=sexp_of_t$10(err,get_connection_close_reason),
       core_err=caml_call1(Core_kernel_Error[5],_m7_);
      caml_call1(handler,[1,[0,106380200,core_err]]);
      return [0,76061764,[1,err]]}
    function dispatch_gen(t,conn,query,make_update_handler)
     {var
       _mQ_=of_type_class(t[3]),
       bin_writer_query=caml_call1(Stream_query[4],_mQ_),
       query$0=[0,-250086680,query],
       query_id=caml_call1(Query_id[45],0),
       _mR_=close_reason(conn,890972481),
       _mS_=conn[1],
       _mT_=t[2],
       _mU_=t[1];
      function _mV_(_m6_){return or_error(_mU_,_mT_,_mS_,_mR_,_m6_)}
      function _mW_(ivar)
       {var initial_state=[0,t,query_id,make_update_handler,ivar,conn];
        function get_connection_close_reason(param)
         {var
           _m4_=close_reason(conn,890972481),
           _m5_=caml_call1(Async_kernel_Deferred[5],_m4_);
          return caml_call2(Core_kernel[438],Core_kernel_Info[6],_m5_)}
        var state=[0,[0,initial_state]];
        return function(response,read_buffer,read_buffer_pos_ref)
         {var _mY_=state[1];
          if(0 === _mY_[0])
           {var
             initial_handler=_mY_[1],
             error=
              function(err)
               {caml_call2(Async_kernel_Ivar[14],initial_handler[4],[1,err]);
                return _eT_},
             _mZ_=response[2];
            if(0 === _mZ_[0])
             {var
               len=_mZ_[1],
               initial=
                bin_read_from_bigstring
                 (caml_call2
                   (Stream_initial_message[7],
                    initial_handler[1][4][3],
                    initial_handler[1][6][3]),
                  0,
                  read_buffer,
                  read_buffer_pos_ref,
                  len,
                  cst_client_side_streaming_rpc_);
              if(0 === initial[0])
               {var initial_msg=initial[1],_m0_=initial_msg[2];
                if(0 === _m0_[0])
                 {var
                   initial$0=_m0_[1],
                   match=caml_call1(initial_handler[3],0),
                   handler=match[2],
                   extra=match[1];
                  caml_call2
                   (Async_kernel_Ivar[14],
                    initial_handler[4],
                    [0,[0,[0,initial_handler[2],initial$0,extra]]]);
                  state[1] = [1,initial_handler[1][5][3],handler];
                  return -955854715}
                var err=_m0_[1];
                caml_call2
                 (Async_kernel_Ivar[14],initial_handler[4],[0,[1,err]]);
                return _eU_}
              var err$0=initial[1];
              return error(err$0)}
            var err$1=_mZ_[1];
            return error(err$1)}
          var handler$0=_mY_[2],bin_reader_update=_mY_[1],_m1_=response[2];
          if(0 === _m1_[0])
           {var
             len$0=_m1_[1],
             _m2_=
              [0,
               function(param)
                {if(typeof param === "number")return 0;
                 var len=param[2];
                 return len}],
             data=
              bin_read_from_bigstring
               (Stream_response_data[14],
                _m2_,
                read_buffer,
                read_buffer_pos_ref,
                len$0,
                cst_client_side_streaming_rpc_$0);
            if(0 === data[0])
             {var _m3_=data[1];
              if(typeof _m3_ === "number")
               {caml_call1(handler$0,_eR_);return _eS_}
              var
               len$1=_m3_[2],
               data$0=
                bin_read_from_bigstring
                 (bin_reader_update,
                  0,
                  read_buffer,
                  read_buffer_pos_ref,
                  len$1,
                  cst_client_side_streaming_rpc_$1);
              if(0 === data$0[0])
               {var data$1=data$0[1],match$0=caml_call1(handler$0,[0,data$1]);
                if(match$0){var d=match$0[1];return [0,-822977931,d]}
                return -955854715}
              var err$2=data$0[1];
              return read_error(get_connection_close_reason,handler$0,err$2)}
            var err$3=data[1];
            return read_error(get_connection_close_reason,handler$0,err$3)}
          var err$4=_m1_[1];
          return read_error(get_connection_close_reason,handler$0,err$4)}}
      var
       _mX_=
        dispatch_raw$0(conn,t[1],t[2],bin_writer_query,query$0,query_id,_mW_);
      return caml_call2(Async_kernel[21],_mX_,_mV_)}
    function dispatch$6(t,conn,query)
     {function _mE_(e)
       {if(0 === e[0])
         {var _mL_=e[1];
          if(0 === _mL_[0])
           {var
             _mM_=_mL_[1],
             match=_mM_[3],
             close_reason=match[2],
             pipe_r=match[1],
             init=_mM_[2],
             id=_mM_[1],
             _mN_=
              function(param)
               {var _mP_=1 - caml_call1(Async_kernel_Ivar[17],close_reason);
                return _mP_
                        ?(abort(t,conn,id),
                          caml_call2(Async_kernel_Ivar[15],close_reason,0))
                        :_mP_},
             _mO_=caml_call1(Async_kernel_Pipe[17],pipe_r);
            caml_call2(Async_kernel[12],_mO_,_mN_);
            var
             pipe_metadata=
              [0,id,caml_call1(Async_kernel_Ivar[18],close_reason)];
            return [0,[0,[0,pipe_metadata,init,pipe_r]]]}}
        return e}
      var
       _mF_=
        dispatch_gen
         (t,
          conn,
          query,
          function(param)
           {var
             match=caml_call2(Async_kernel_Pipe[7],0,0),
             pipe_w=match[2],
             pipe_r=match[1];
            caml_call2(Async_kernel_Pipe[77],pipe_w,100);
            var close_reason=caml_call1(Async_kernel_Ivar[12],0);
            function f(param)
             {if(0 === param[0])
               {var data=param[1];
                if(caml_call1(Async_kernel_Pipe[16],pipe_w))return 0;
                caml_call2(Async_kernel_Pipe[27],pipe_w,data);
                if(t[7])
                 {var
                   _mG_=caml_call1(Async_kernel_Pipe[76],pipe_w),
                   _mH_=caml_call1(Async_kernel_Pipe[23],pipe_w);
                  if(caml_call2(Core_kernel[85],_mH_,_mG_))
                   {var
                     _mI_=function(param){return 0},
                     _mJ_=caml_call1(Async_kernel_Pipe[20],pipe_w);
                    return [0,caml_call2(Async_kernel[21],_mJ_,_mI_)]}}
                return 0}
              var reason=param[1];
              if(typeof reason === "number")
               var _mK_=1;
              else
               var err=reason[2],_mK_=[0,err];
              caml_call2(Async_kernel_Ivar[15],close_reason,_mK_);
              caml_call1(Async_kernel_Pipe[14],pipe_w);
              return 0}
            return [0,[0,pipe_r,close_reason],f]});
      return caml_call2(Async_kernel[21],_mF_,_mE_)}
    function create$7
     (client_pushes_back,name,version,bin_query,bin_response,bin_error,param)
     {return create$6
              (client_pushes_back,
               name,
               version,
               bin_query,
               Core_kernel_Unit[13],
               bin_response,
               bin_error,
               0)}
    function bin_query$0(t){return t[3]}
    function bin_response$0(t){return t[5]}
    function bin_error(t){return t[6]}
    function client_pushes_back(t){return t[7]}
    function implement$6(t,f)
     {return implement$5
              (t,
               function(a,query)
                {function _mC_(x)
                  {return caml_call2(symbol$7,x,function(x){return [0,0,x]})}
                 var _mD_=caml_call2(f,a,query);
                 return caml_call2(Async_kernel[21],_mD_,_mC_)})}
    var
     close$5=include$2[1],
     closed$0=include$2[2],
     is_closed$3=include$2[3],
     write$2=include$2[4],
     write_without_pushback$1=include$2[5],
     flushed$2=include$2[6],
     bin_writer$1=include$2[7],
     Expert$1=include$2[8];
    function create$8(opt,param)
     {if(opt)var sth=opt[1],initial_size=sth;else var initial_size=4096;
      if(caml_call2(Core_kernel[89],initial_size,0))
       caml_call5
        (Core_kernel[221],
         0,
         _eV_,
         cst_Rpc_Pipe_rpc_Direct_stream,
         initial_size,
         Core_kernel_Int[101]);
      return [0,caml_call2(Core_kernel_Bigstring[110],0,initial_size)]}
    var Buffer=[0,create$8];
    function create$9(buffer,param)
     {if(buffer)
       var b=buffer[1],buffer$0=b;
      else
       var buffer$0=caml_call2(Buffer[1],0,0);
      var _mB_=caml_call3(Direct_stream_writer_id[38][4],0,0,0);
      return [0,caml_call1(Core_kernel_Bag[22],0),_mB_,buffer$0]}
    function length$0(t){return caml_call1(Core_kernel_Bag[5],t[1])}
    function add_exn$0(t,writer)
     {if(caml_call1(is_closed$3,writer))
       caml_call1(Core_kernel[3],cst_Rpc_Pipe_rpc_Direct_stream$0);
      if(caml_call2(Core_kernel_Hashtbl[30],t[2],writer[1]))
       caml_call1(Core_kernel[3],cst_Rpc_Pipe_rpc_Direct_stream$1);
      var match=caml_call1(Core_kernel_Bag[27],t[1]);
      if(match)
       {var
         one=match[1],
         one$0=caml_call1(Core_kernel_Bag[1][3],one),
         _mz_=caml_call1(bin_writer$1,writer),
         _mA_=caml_call1(bin_writer$1,one$0);
        if(1 - caml_call2(Core_kernel[231],_mA_,_mz_))
         caml_call1(Core_kernel[3],cst_Rpc_Pipe_rpc_Direct_stream$2)}
      var
       writer_element_in_group=caml_call2(Core_kernel_Bag[23],t[1],writer),
       group_element_in_writer=
        caml_call2
         (Core_kernel_Bag[23],writer[7],[0,t,writer_element_in_group]);
      return caml_call3
              (Core_kernel_Hashtbl[36],
               t[2],
               writer[1],
               [0,writer_element_in_group,group_element_in_writer])}
    function remove(t,writer)
     {var match=caml_call2(Core_kernel_Hashtbl[60],t[2],writer[1]);
      if(match)
       {var
         match$0=match[1],
         group_element_in_writer=match$0[2],
         writer_element_in_group=match$0[1];
        caml_call2(Core_kernel_Bag[26],t[1],writer_element_in_group);
        return caml_call2
                (Core_kernel_Bag[26],writer[7],group_element_in_writer)}
      return 0}
    function to_list(t){return caml_call1(Core_kernel_Bag[17],t[1])}
    function flushed_or_closed(t)
     {function _mu_(t)
       {var
         _mx_=[0,caml_call1(closed$0,t),0],
         _my_=[0,caml_call1(flushed$2,t),_mx_];
        return caml_call1(Async_kernel_Deferred[24],_my_)}
      var _mv_=to_list(t),_mw_=caml_call2(Core_kernel_List[71],_mv_,_mu_);
      return caml_call1(Async_kernel_Deferred[22],_mw_)}
    function flushed$3(t){return flushed_or_closed(t)}
    function write_without_pushback$2(t,buf,pos,len)
     {function _mt_(direct_stream_writer)
       {caml_call4(Expert$1[2],direct_stream_writer,buf,pos,len);return 0}
      return caml_call2(Core_kernel_Bag[7],t[1],_mt_)}
    function write$3(t,buf,pos,len)
     {write_without_pushback$2(t,buf,pos,len);return flushed_or_closed(t)}
    function write_without_pushback$3(t,x)
     {var match=caml_call1(Core_kernel_Bag[27],t[1]);
      if(match)
       {var
         one=match[1],
         one$0=caml_call1(Core_kernel_Bag[1][3],one),
         match$0=caml_call1(bin_writer$1,one$0),
         write=match$0[2],
         size=match$0[1],
         buffer=t[3][1];
        try
         {var len$1=caml_call3(write,buffer,0,x)}
        catch(_ms_)
         {var len=caml_call1(size,x);
          runtime.bigstring_destroy_stub(buffer);
          var
           _mr_=caml_call1(Core_kernel_Int[67],len),
           buffer$0=caml_call2(Core_kernel_Bigstring[110],0,_mr_);
          t[3][1] = buffer$0;
          var len$0=caml_call3(write,buffer$0,0,x);
          return write_without_pushback$2(t,buffer$0,0,len$0)}
        return write_without_pushback$2(t,buffer,0,len$1)}
      return 0}
    function write$4(t,x)
     {write_without_pushback$3(t,x);return flushed_or_closed(t)}
    function implement_direct(t,f$0)
     {function f(c,query,writer)
       {function _mp_(x)
         {return 0 === x[0]
                  ?[0,make_initial_message(x)]
                  :[1,make_initial_message(x)]}
        var _mq_=caml_call3(f$0,c,query,writer);
        return caml_call2(Async_kernel[21],_mq_,_mp_)}
      return implement_gen(t,[1,f])}
    function dispatch$7(t,conn,query)
     {function _mn_(response)
       {return caml_call2
                (symbol$7,
                 response,
                 function(x)
                  {return caml_call2
                           (symbol$7,
                            x,
                            function(param)
                             {var pipe_r=param[3],metadata=param[1];
                              return [0,pipe_r,metadata]})})}
      var _mo_=dispatch$6(t,conn,query);
      return caml_call2(Async_kernel[21],_mo_,_mn_)}
    var
     Pipe_rpc_failed=
      [248,cst_Async_rpc_kernel_Rpc_Pipe_,caml_fresh_oo_id(0)];
    function dispatch_exn$1(t,conn,query)
     {function _mk_(result)
       {if(0 === result[0])
         {var _mm_=result[1];
          if(0 === _mm_[0]){var pipe_and_id=_mm_[1];return pipe_and_id}
          throw Pipe_rpc_failed}
        var rpc_error=result[1];
        throw caml_call1(Core_kernel_Error[23],rpc_error)}
      var _ml_=dispatch$7(t,conn,query);
      return caml_call2(Async_kernel[21],_ml_,_mk_)}
    function dispatch_iter(t,conn,query,f)
     {function _mi_(response)
       {return caml_call2
                (symbol$7,
                 response,
                 function(x)
                  {return caml_call2
                           (symbol$7,x,function(param){var id=param[1];return id})})}
      function _mf_(e)
       {if(0 === e[0])
         {var _mj_=e[1];
          if(0 === _mj_[0])
           {var match=_mj_[1],init=match[2],id=match[1];
            return [0,[0,[0,id,init]]]}}
        return e}
      var
       _mg_=dispatch_gen(t,conn,query,function(param){return [0,0,f]}),
       _mh_=caml_call2(Async_kernel[21],_mg_,_mf_);
      return caml_call2(Async_kernel[21],_mh_,_mi_)}
    function name$1(t){return caml_call1(Rpc_tag[12],t[1])}
    function version$1(t){return t[2]}
    function description$3(t){var _me_=t[2];return [0,name$1(t),_me_]}
    function create$10
     (client_pushes_back,
      name,
      version,
      bin_query,
      bin_state,
      bin_update,
      bin_error,
      param)
     {return create$6
              (client_pushes_back,
               name,
               version,
               bin_query,
               bin_state,
               bin_update,
               bin_error,
               0)}
    function bin_query$1(t){return t[3]}
    function bin_state(t){return t[4]}
    function bin_update(t){return t[5]}
    function bin_error$0(t){return t[6]}
    function dispatch$8(t,conn,query)
     {function _mc_(response)
       {return caml_call2
                (symbol$7,
                 response,
                 function(x)
                  {return caml_call2
                           (symbol$7,
                            x,
                            function(param)
                             {var update_r=param[3],state=param[2],metadata=param[1];
                              return [0,state,update_r,metadata]})})}
      var _md_=dispatch$6(t,conn,query);
      return caml_call2(Async_kernel[21],_md_,_mc_)}
    function client_pushes_back$0(t){return t[7]}
    function name$2(t){return caml_call1(Rpc_tag[12],t[1])}
    function version$2(t){return t[2]}
    function description$4(t){var _mb_=t[2];return [0,name$2(t),_mb_]}
    function description$5(param)
     {switch(param[0])
       {case 0:var rpc=param[1];return description$1(rpc);
        case 1:var rpc$0=param[1];return description$3(rpc$0);
        case 2:var rpc$1=param[1];return description$4(rpc$1);
        default:var rpc$2=param[1];return description$2(rpc$2)}}
    var Any=[0,description$5];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$43);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_rpc_kernel_Rpc$0);
    var
     _eW_=
      [0,
       create$5,
       name$0,
       version$0,
       description$2,
       bin_msg,
       implement$3,
       dispatch$3,
       rpc_result_to_or_error$0,
       dispatch$4,
       dispatch_exn$0,
       Expert$0],
     _eX_=
      [0,
       [0],
       [0,id],
       create$10,
       bin_query$1,
       bin_state,
       bin_update,
       bin_error$0,
       implement$5,
       dispatch$8,
       abort,
       close_reason$0,
       client_pushes_back$0,
       name$2,
       version$2,
       description$4],
     _eY_=
      [0,
       [0],
       [0,id],
       create$7,
       bin_query$0,
       bin_response$0,
       bin_error,
       implement$6,
       [0,
        write$2,
        write_without_pushback$1,
        close$5,
        closed$0,
        flushed$2,
        is_closed$3,
        Expert$1,
        [0,
         Buffer,
         create$9,
         flushed_or_closed,
         flushed$3,
         add_exn$0,
         remove,
         write$4,
         write_without_pushback$3,
         to_list,
         length$0,
         [0,write$3,write_without_pushback$2]]],
       implement_direct,
       dispatch$7,
       dispatch_exn$1,
       Pipe_message,
       Pipe_response,
       dispatch_iter,
       abort,
       close_reason$0,
       client_pushes_back,
       name$1,
       version$1,
       description$3],
     _eZ_=
      [0,
       create$4,
       name,
       version,
       description$1,
       bin_query,
       bin_response,
       implement,
       implement$0,
       dispatch$0,
       rpc_result_to_or_error,
       dispatch$1,
       dispatch_exn,
       [0,
        _dz_[1],
        schedule_dispatch,
        dispatch$2,
        implement$1,
        implement$2,
        implement_for_tag_and_version,
        implement_for_tag_and_version$0]],
     _e0_=
      [0,
       sexp_of_t$14,
       _er_,
       Client_implementations,
       create$3,
       contains_magic_prefix,
       description$0,
       add_heartbeat_callback,
       close$4,
       close_finished,
       close_reason,
       is_closed$2,
       bytes_to_write$0,
       flushed$1,
       with_close,
       server_with_close],
     _e1_=[0,description,lift$0],
     Async_rpc_kernel_Rpc=
      [0,
       [0,_N_,_O_,_P_,sexp_of_t,_U_],
       _e1_,
       [0,
        null$0,
        lift$1,
        create$1,
        create_exn,
        add,
        add_exn,
        descriptions,
        [0,[0],_dz_[2]]],
       _e0_,
       _eZ_,
       [0,
        bin_size_t$5,
        bin_write_t$5,
        bin_read_t$23,
        bin_read_t$22,
        bin_shape_t$6,
        bin_writer_t$5,
        bin_reader_t$10,
        bin_t$5,
        compare$2,
        t_of_sexp$3,
        sexp_of_t$15,
        [0,
         [0,
          bin_size_t$6,
          bin_write_t$6,
          bin_read_t$25,
          bin_read_t$24,
          bin_shape_t$7,
          bin_writer_t$6,
          bin_reader_t$11,
          bin_t$6,
          compare$3,
          t_of_sexp$4,
          sexp_of_t$16]]],
       _eY_,
       _eX_,
       _eW_,
       Any,
       [0,
        [0,create$4,description$1,bin_query,bin_response],
        [0,create$7,description$3,bin_query$0,bin_response$0,bin_error],
        [0,
         create$10,
         description$4,
         bin_query$1,
         bin_state,
         bin_update,
         bin_error$0],
        [0,create$5,description$2,bin_msg]]];
    caml_register_global(803,Async_rpc_kernel_Rpc,"Async_rpc_kernel__Rpc");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_rpc_kernel_Versioned);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_rpc_kernel$44);
    caml_call1(Expect_test_collector[4][1],cst_src_versioned_rpc_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$45,cst$15);
    function write$5(param,input)
     {var writer=param[2],convert=param[1],_ma_=caml_call1(convert,input);
      return caml_call2(_eY_[8][1],writer,_ma_)}
    function write_without_pushback$4(param,input)
     {var writer=param[2],convert=param[1],_l$_=caml_call1(convert,input);
      return caml_call2(_eY_[8][2],writer,_l$_)}
    function close$6(param)
     {var writer=param[2];return caml_call1(_eY_[8][3],writer)}
    function is_closed$4(param)
     {var writer=param[2];return caml_call1(_eY_[8][6],writer)}
    function closed$1(param)
     {var writer=param[2];return caml_call1(_eY_[8][4],writer)}
    function failed_conversion(x)
     {function _l9_(param)
       {var
         v3=param[4],
         v2=param[3],
         v1=param[2],
         v0=param[1],
         _l__=
          3854881 <= v0
           ?389604849 <= v0
             ?999946793 <= v0?_e2_:_e5_
             :106380200 <= v0?_e6_:_e7_
           :-71406943 <= v0?_e8_:_e9_,
         v0$0=v1[2],
         v1$0=[1,[0,_e3_,[0,caml_call1(Core_kernel[455],v0$0),0]]],
         v0$1=v2[2],
         v2$0=[1,[0,_e4_,[0,caml_call1(Core_kernel[340],v0$1),0]]],
         v3$0=caml_call1(Core_kernel[521],v3);
        return [1,[0,_l__,[0,v1$0,[0,v2$0,[0,v3$0,0]]]]]}
      return caml_call5
              (Core_kernel_Error[15],0,0,cst_type_conversion_failure,x,_l9_)}
    function multiple_registrations(x)
     {function _l8_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=v0[2],
         v0$1=[1,[0,_e__,[0,caml_call1(Core_kernel[455],v0$0),0]]],
         v0$2=v1[2],
         v1$0=[1,[0,_e$_,[0,caml_call1(Core_kernel[340],v0$2),0]]];
        return [1,[0,v0$1,[0,v1$0,0]]]}
      return caml_call5
              (Core_kernel_Error[15],
               0,
               0,
               cst_multiple_rpc_registrations,
               x,
               _l8_)}
    function name$3(r){return r[1]}
    function create$11(name){return [0,name,Core_kernel_Int[125][4]]}
    function add$0(param,rpc,adapter)
     {var adapters=param[2],name=param[1],_l4_=caml_call1(_eZ_[2],rpc);
      if(caml_call2(Core_kernel_String[110],name,_l4_))
       {var
         _l5_=
          function(param)
           {var
             v1=param[2],
             v0=param[1],
             v0$0=caml_call1(Core_kernel[455],v0),
             v1$0=caml_call1(Core_kernel[455],v1);
            return [1,[0,v0$0,[0,v1$0,0]]]},
         _l6_=[0,name,caml_call1(_eZ_[2],rpc)];
        return caml_call4
                (Core_kernel_Or_error[38],
                 0,
                 cst_Rpc_names_don_t_agree,
                 _l6_,
                 _l5_)}
      var
       version=caml_call1(_eZ_[3],rpc),
       match=caml_call2(Core_kernel_Map[37],adapters,version);
      if(match)
       {var
         _l7_=
          function(param)
           {var
             v1=param[2],
             v0=param[1],
             v0$0=caml_call1(Core_kernel[455],v0),
             v1$0=caml_call1(Core_kernel[340],v1);
            return [1,[0,v0$0,[0,v1$0,0]]]};
        return caml_call4
                (Core_kernel_Or_error[38],
                 0,
                 cst_Version_already_exists,
                 [0,name,version],
                 _l7_)}
      var adapters$0=caml_call3(Core_kernel_Map[31],adapters,version,adapter);
      return [0,[0,name,adapters$0]]}
    function add_rpc_version(t,old_rpc,upgrade,downgrade)
     {function adapt(fn)
       {function adapted(state,old_query)
         {function _l2_(result){return caml_call1(downgrade,result)}
          var _l3_=caml_call2(fn,state,caml_call1(upgrade,old_query));
          return caml_call2(Async_kernel[21],_l3_,_l2_)}
        return caml_call2(_eZ_[7],old_rpc,adapted)}
      return add$0(t,old_rpc,[0,adapt])}
    function add_rpc_version_with_failure
     (t,old_rpc,upgrade_or_error,downgrade_or_error)
     {function adapt(fn)
       {function _lT_(state,old_query)
         {function _lU_(param)
           {if(0 === param[0]){var value=param[1];return [0,value]}
            var error=param[1];
            return [1,caml_call1(Core_kernel_Error[8],error)]}
          function _lV_(query)
           {function _lZ_(response)
             {var _l1_=caml_call1(downgrade_or_error,response);
              return caml_call1(Async_kernel[19],_l1_)}
            var _l0_=caml_call2(fn,state,query);
            return caml_call2(Async_kernel_Deferred_result[4][1],_l0_,_lZ_)}
          var
           _lW_=caml_call1(upgrade_or_error,old_query),
           _lX_=caml_call1(Async_kernel[19],_lW_),
           _lY_=caml_call2(Async_kernel_Deferred_result[4][1],_lX_,_lV_);
          return caml_call2(Async_kernel[21],_lY_,_lU_)}
        return caml_call2(_eZ_[7],old_rpc,_lT_)}
      return add$0(t,old_rpc,[0,adapt])}
    function add_version(t,version,bin_query,bin_response,upgrade,downgrade)
     {var rpc=caml_call4(_eZ_[1],t[1],version,bin_query,bin_response);
      return add_rpc_version(t,rpc,upgrade,downgrade)}
    function add_version_with_failure
     (t,version,bin_query,bin_response,upgrade,downgrade)
     {var rpc=caml_call4(_eZ_[1],t[1],version,bin_query,bin_response);
      return add_rpc_version_with_failure(t,rpc,upgrade,downgrade)}
    function implement$7(t,fn)
     {function _lR_(param){var adapt=param[1];return caml_call1(adapt,fn)}
      var _lS_=caml_call1(Core_kernel_Map[68],t[2]);
      return caml_call2(Core_kernel_List[71],_lS_,_lR_)}
    function Make(_lA_)
     {var _lB_=_lA_[1],registry=caml_call3(Core_kernel_Int[130][4],0,_fa_,0);
      function implement_multi(log_not_previously_seen_versio,f)
       {if(log_not_previously_seen_versio)
         var
          f$0=log_not_previously_seen_versio[1],
          _lN_=caml_call1(f$0,_lB_),
          log_version=caml_call3(Core_kernel_Memo[1],0,0,_lN_);
        else
         var log_version=function(_lQ_){return 0};
        function _lO_(param)
         {var i=param[1];return caml_call2(i[1],log_version,f)}
        var _lP_=caml_call1(Core_kernel_Hashtbl[64],registry);
        return caml_call2(Core_kernel_List[71],_lP_,_lO_)}
      function rpcs(param)
       {function _lL_(param){var rpc=param[2];return rpc}
        var _lM_=caml_call1(Core_kernel_Hashtbl[64],registry);
        return caml_call2(Core_kernel_List[71],_lM_,_lL_)}
      function versions(param)
       {var _lK_=caml_call1(Core_kernel_Hashtbl[63],registry);
        return caml_call1(Core_kernel_Int[126][58],_lK_)}
      function Register(Version_i)
       {var
         rpc=
          caml_call4(_eZ_[1],_lB_,Version_i[17],Version_i[8],Version_i[16]);
        function implement(log_version,f)
         {function _lD_(s,q)
           {caml_call1(log_version,Version_i[17]);
            function _lE_(param){return caml_call1(Version_i[18],q)}
            var match=caml_call1(Core_kernel_Result[45],_lE_);
            if(0 === match[0])
             {var
               q$0=match[1],
               _lF_=
                function(r)
                 {function _lI_(param){return caml_call1(Version_i[19],r)}
                  var match=caml_call1(Core_kernel_Result[45],_lI_);
                  if(0 === match[0]){var r$0=match[1];return r$0}
                  var
                   exn=match[1],
                   _lJ_=
                    failed_conversion
                     ([0,
                       -71406943,
                       [0,4102853,_lB_],
                       [0,-901574920,Version_i[17]],
                       exn]);
                  return caml_call1(Core_kernel_Error[25],_lJ_)},
               _lG_=caml_call3(f,s,Version_i[17],q$0);
              return caml_call2(Async_kernel[21],_lG_,_lF_)}
            var
             exn=match[1],
             _lH_=
              failed_conversion
               ([0,
                 -250086680,
                 [0,4102853,_lB_],
                 [0,-901574920,Version_i[17]],
                 exn]);
            return caml_call1(Core_kernel_Error[25],_lH_)}
          return caml_call2(_eZ_[7],rpc,_lD_)}
        var match=caml_call2(Core_kernel_Hashtbl[52],registry,Version_i[17]);
        if(match)
         {var
           _lC_=
            multiple_registrations
             ([0,[0,4102853,_lB_],[0,-901574920,Version_i[17]]]);
          caml_call1(Core_kernel_Error[25],_lC_)}
        else
         caml_call3
          (Core_kernel_Hashtbl[34],
           registry,
           Version_i[17],
           [0,[0,implement],[0,rpc]]);
        return [0,rpc]}
      return [0,_lB_,registry,implement_multi,rpcs,versions,Register]}
    function Make$0(_k8_)
     {var _k9_=_k8_[1],registry=caml_call3(Core_kernel_Int[130][4],0,_fb_,0);
      function implement_multi_gen(log_not_previously_seen_versio,impl)
       {if(log_not_previously_seen_versio)
         var
          f=log_not_previously_seen_versio[1],
          _lw_=caml_call1(f,_k9_),
          log_version=caml_call3(Core_kernel_Memo[1],0,0,_lw_);
        else
         var log_version=function(_lz_){return 0};
        function _lx_(param)
         {var i=param[1];return caml_call2(i[1],log_version,impl)}
        var _ly_=caml_call1(Core_kernel_Hashtbl[64],registry);
        return caml_call2(Core_kernel_List[71],_ly_,_lx_)}
      function implement_multi(log_not_previously_seen_versio,f)
       {return implement_multi_gen(log_not_previously_seen_versio,[0,f])}
      function implement_direct_multi(log_not_previously_seen_versio,f)
       {return implement_multi_gen(log_not_previously_seen_versio,[1,f])}
      function rpcs(param)
       {function _lu_(param){var rpc=param[2];return rpc}
        var _lv_=caml_call1(Core_kernel_Hashtbl[64],registry);
        return caml_call2(Core_kernel_List[71],_lv_,_lu_)}
      function versions(param)
       {var _lt_=caml_call1(Core_kernel_Int[130][63],registry);
        return caml_call1(Core_kernel_Int[126][58],_lt_)}
      function Make_shared(Version_i,Convert)
       {var
         _k__=Version_i[24],
         _k$_=Version_i[16],
         _la_=Version_i[8],
         _lb_=Version_i[25],
         _lc_=caml_call2(Core_kernel_Option[54],Version_i[28],0),
         rpc=caml_call7(_eY_[3],_lc_,_k9_,_lb_,_la_,_k$_,_k__,0);
        function wrapped_model_of_query(q)
         {try
           {var q$0=caml_call1(Version_i[26],q);return q$0}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            var
             _ls_=
              failed_conversion
               ([0,
                 -71406943,
                 [0,4102853,_k9_],
                 [0,-901574920,Version_i[25]],
                 exn]);
            return caml_call1(Core_kernel_Error[25],_ls_)}}
        function wrapped_error_of_model(error)
         {try
           {var error$0=caml_call1(Version_i[27],error)}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            var
             _lr_=
              failed_conversion
               ([0,
                 106380200,
                 [0,4102853,_k9_],
                 [0,-901574920,Version_i[25]],
                 exn]);
            return caml_call1(Core_kernel_Error[25],_lr_)}
          return [1,error$0]}
        function implement(log_version,impl)
         {if(0 === impl[0])
           {var
             f=impl[1],
             _le_=
              function(s,q)
               {caml_call1(log_version,Version_i[25]);
                function _lj_(param)
                 {if(0 === param[0])
                   {var
                     pipe=param[1],
                     _lm_=
                      function(exn)
                       {var
                         _lq_=
                          failed_conversion
                           ([0,
                             -71406943,
                             [0,4102853,_k9_],
                             [0,-901574920,Version_i[25]],
                             exn]);
                        return caml_call1(Core_kernel_Error[25],_lq_)},
                     _ln_=
                      function(param)
                       {var _lp_=[0,caml_call1(Convert[2],pipe)];
                        return caml_call1(Async_kernel[19],_lp_)};
                    return caml_call5(Async_kernel_Monitor[19],0,0,0,_ln_,_lm_)}
                  var error=param[1],_lo_=wrapped_error_of_model(error);
                  return caml_call1(Async_kernel[19],_lo_)}
                var
                 _lk_=wrapped_model_of_query(q),
                 _ll_=caml_call3(f,s,Version_i[25],_lk_);
                return caml_call2(Async_kernel[20],_ll_,_lj_)};
            return caml_call2(_eY_[7],rpc,_le_)}
          var
           f$0=impl[1],
           convert_elt=caml_call1(Core_kernel_Or_error[35],Convert[1]);
          function _lf_(s,q,dsw)
           {var writer=[0,convert_elt,dsw];
            function _lg_(param)
             {if(0 === param[0])return _fc_;
              var error=param[1];
              return wrapped_error_of_model(error)}
            var
             _lh_=wrapped_model_of_query(q),
             _li_=caml_call4(f$0,s,Version_i[25],_lh_,writer);
            return caml_call2(Async_kernel[21],_li_,_lg_)}
          return caml_call2(_eY_[9],rpc,_lf_)}
        var match=caml_call2(Core_kernel_Hashtbl[52],registry,Version_i[25]);
        if(match)
         {var
           _ld_=
            multiple_registrations
             ([0,[0,4102853,_k9_],[0,-901574920,Version_i[25]]]);
          caml_call1(Core_kernel_Error[25],_ld_)}
        else
         caml_call3
          (Core_kernel_Hashtbl[34],
           registry,
           Version_i[25],
           [0,[0,implement],[1,rpc]]);
        return [0,rpc,wrapped_model_of_query,wrapped_error_of_model,implement]}
      function Register_raw(Version_i)
       {var
         convert_elt=
          caml_call1(Core_kernel_Or_error[40],cst_cannot_use_direct_interfac),
         convert_pipe=Version_i[29];
        return Make_shared
                ([0,
                  Version_i[1],
                  Version_i[2],
                  Version_i[3],
                  Version_i[4],
                  Version_i[5],
                  Version_i[6],
                  Version_i[7],
                  Version_i[8],
                  Version_i[9],
                  Version_i[10],
                  Version_i[11],
                  Version_i[12],
                  Version_i[13],
                  Version_i[14],
                  Version_i[15],
                  Version_i[16],
                  Version_i[17],
                  Version_i[18],
                  Version_i[19],
                  Version_i[20],
                  Version_i[21],
                  Version_i[22],
                  Version_i[23],
                  Version_i[24],
                  Version_i[25],
                  Version_i[26],
                  Version_i[27],
                  Version_i[28]],
                 [0,convert_elt,convert_pipe])}
      function Register(Version_i)
       {var convert_elt=[0,Version_i[29]];
        function convert_pipe(pipe)
         {return caml_call2(Async_kernel_Pipe[55],pipe,Version_i[29])}
        return Make_shared
                ([0,
                  Version_i[1],
                  Version_i[2],
                  Version_i[3],
                  Version_i[4],
                  Version_i[5],
                  Version_i[6],
                  Version_i[7],
                  Version_i[8],
                  Version_i[9],
                  Version_i[10],
                  Version_i[11],
                  Version_i[12],
                  Version_i[13],
                  Version_i[14],
                  Version_i[15],
                  Version_i[16],
                  Version_i[17],
                  Version_i[18],
                  Version_i[19],
                  Version_i[20],
                  Version_i[21],
                  Version_i[22],
                  Version_i[23],
                  Version_i[24],
                  Version_i[25],
                  Version_i[26],
                  Version_i[27],
                  Version_i[28]],
                 [0,convert_elt,convert_pipe])}
      return [0,
              _k9_,
              registry,
              implement_multi_gen,
              implement_multi,
              implement_direct_multi,
              rpcs,
              versions,
              Make_shared,
              Register_raw,
              Register]}
    function Make$1(_kG_)
     {var _kH_=_kG_[1],registry=caml_call3(Core_kernel_Int[130][4],0,_fd_,0);
      function implement_multi(log_not_previously_seen_versio,f)
       {if(log_not_previously_seen_versio)
         var
          f$0=log_not_previously_seen_versio[1],
          _k4_=caml_call1(f$0,_kH_),
          log_version=caml_call3(Core_kernel_Memo[1],0,0,_k4_);
        else
         var log_version=function(_k7_){return 0};
        function _k5_(param)
         {var i=param[1];return caml_call2(i[1],log_version,f)}
        var _k6_=caml_call1(Core_kernel_Hashtbl[64],registry);
        return caml_call2(Core_kernel_List[71],_k6_,_k5_)}
      function rpcs(param)
       {function _k2_(param){var rpc=param[2];return rpc}
        var _k3_=caml_call1(Core_kernel_Hashtbl[64],registry);
        return caml_call2(Core_kernel_List[71],_k3_,_k2_)}
      function versions(param)
       {var _k1_=caml_call1(Core_kernel_Int[130][63],registry);
        return caml_call1(Core_kernel_Int[126][58],_k1_)}
      function Register_raw(Version_i)
       {var
         _kJ_=Version_i[32],
         _kK_=Version_i[24],
         _kL_=Version_i[16],
         _kM_=Version_i[8],
         _kN_=Version_i[33],
         _kO_=caml_call2(Core_kernel_Option[54],Version_i[37],0),
         rpc=caml_call8(_eX_[3],_kO_,_kH_,_kN_,_kM_,_kL_,_kK_,_kJ_,0);
        function implement(log_version,f)
         {function _kQ_(s,q)
           {caml_call1(log_version,Version_i[33]);
            try
             {var q$0=caml_call1(Version_i[34],q)}
            catch(exn)
             {exn = caml_wrap_exception(exn);
              var
               _kR_=
                failed_conversion
                 ([0,
                   -71406943,
                   [0,4102853,_kH_],
                   [0,-901574920,Version_i[33]],
                   exn]);
              return caml_call1(Core_kernel_Error[25],_kR_)}
            function _kS_(param)
             {if(0 === param[0])
               {var match=param[1],pipe=match[2],model_state=match[1];
                try
                 {var
                   state$0=caml_call1(Version_i[35],model_state),
                   state=state$0}
                catch(exn)
                 {exn = caml_wrap_exception(exn);
                  var
                   _kU_=
                    failed_conversion
                     ([0,
                       389604849,
                       [0,4102853,_kH_],
                       [0,-901574920,Version_i[33]],
                       exn]),
                   state=caml_call1(Core_kernel_Error[25],_kU_)}
                var
                 _kV_=
                  function(exn)
                   {var
                     _k0_=
                      failed_conversion
                       ([0,
                         999946793,
                         [0,4102853,_kH_],
                         [0,-901574920,Version_i[33]],
                         exn]);
                    return caml_call1(Core_kernel_Error[25],_k0_)},
                 _kW_=
                  function(param)
                   {var
                     _kZ_=
                      [0,[0,state,caml_call2(Version_i[38],model_state,pipe)]];
                    return caml_call1(Async_kernel[19],_kZ_)};
                return caml_call5(Async_kernel_Monitor[19],0,0,0,_kW_,_kV_)}
              var error=param[1];
              try
               {var switch$0=0,error$0=caml_call1(Version_i[36],error);
                switch$0 = 1}
              catch(exn)
               {exn = caml_wrap_exception(exn);
                var
                 _kX_=
                  failed_conversion
                   ([0,
                     106380200,
                     [0,4102853,_kH_],
                     [0,-901574920,Version_i[33]],
                     exn]),
                 _kY_=caml_call1(Core_kernel_Error[25],_kX_)}
              if(switch$0)var _kY_=[1,error$0];
              return caml_call1(Async_kernel[19],_kY_)}
            var _kT_=caml_call3(f,s,Version_i[33],q$0);
            return caml_call2(Async_kernel[20],_kT_,_kS_)}
          return caml_call2(_eX_[8],rpc,_kQ_)}
        var match=caml_call2(Core_kernel_Hashtbl[52],registry,Version_i[33]);
        if(match)
         {var
           _kP_=
            multiple_registrations
             ([0,[0,4102853,_kH_],[0,-901574920,Version_i[33]]]);
          caml_call1(Core_kernel_Error[25],_kP_)}
        else
         caml_call3
          (Core_kernel_Hashtbl[34],
           registry,
           Version_i[33],
           [0,[0,implement],[2,rpc]]);
        return [0,rpc]}
      function Register(Version_i)
       {var
         bin_shape_query=Version_i[1],
         bin_size_query=Version_i[2],
         bin_write_query=Version_i[3],
         bin_writer_query=Version_i[4],
         bin_read_query=Version_i[5],
         bin_read_query$0=Version_i[6],
         bin_reader_query=Version_i[7],
         bin_query=Version_i[8],
         bin_shape_state=Version_i[9],
         bin_size_state=Version_i[10],
         bin_write_state=Version_i[11],
         bin_writer_state=Version_i[12],
         bin_read_state=Version_i[13],
         bin_read_state$0=Version_i[14],
         bin_reader_state=Version_i[15],
         bin_state=Version_i[16],
         bin_shape_update=Version_i[17],
         bin_size_update=Version_i[18],
         bin_write_update=Version_i[19],
         bin_writer_update=Version_i[20],
         bin_read_update=Version_i[21],
         bin_read_update$0=Version_i[22],
         bin_reader_update=Version_i[23],
         bin_update=Version_i[24],
         bin_shape_error=Version_i[25],
         bin_size_error=Version_i[26],
         bin_write_error=Version_i[27],
         bin_writer_error=Version_i[28],
         bin_read_error=Version_i[29],
         bin_read_error$0=Version_i[30],
         bin_reader_error=Version_i[31],
         bin_error=Version_i[32],
         version=Version_i[33],
         model_of_query=Version_i[34],
         state_of_model=Version_i[35],
         error_of_model=Version_i[36],
         client_pushes_back=Version_i[37],
         _kI_=Version_i[38];
        function update_of_model(state,pipe)
         {return caml_call2(Async_kernel_Pipe[55],pipe,_kI_)}
        var
         include=
          Register_raw
           ([0,
             bin_shape_query,
             bin_size_query,
             bin_write_query,
             bin_writer_query,
             bin_read_query,
             bin_read_query$0,
             bin_reader_query,
             bin_query,
             bin_shape_state,
             bin_size_state,
             bin_write_state,
             bin_writer_state,
             bin_read_state,
             bin_read_state$0,
             bin_reader_state,
             bin_state,
             bin_shape_update,
             bin_size_update,
             bin_write_update,
             bin_writer_update,
             bin_read_update,
             bin_read_update$0,
             bin_reader_update,
             bin_update,
             bin_shape_error,
             bin_size_error,
             bin_write_error,
             bin_writer_error,
             bin_read_error,
             bin_read_error$0,
             bin_reader_error,
             bin_error,
             version,
             model_of_query,
             state_of_model,
             error_of_model,
             client_pushes_back,
             update_of_model]),
         rpc=include[1];
        return [0,rpc]}
      return [0,
              _kH_,
              registry,
              implement_multi,
              rpcs,
              versions,
              Register_raw,
              Register]}
    function Make$2(_kt_)
     {var _ku_=_kt_[1],registry=caml_call3(Core_kernel_Int[130][4],0,_fe_,0);
      function implement_multi(log_not_previously_seen_versio,f)
       {if(log_not_previously_seen_versio)
         var
          f$0=log_not_previously_seen_versio[1],
          _kC_=caml_call1(f$0,_ku_),
          log_version=caml_call3(Core_kernel_Memo[1],0,0,_kC_);
        else
         var log_version=function(_kF_){return 0};
        function _kD_(param)
         {var i=param[1];return caml_call2(i[1],log_version,f)}
        var _kE_=caml_call1(Core_kernel_Hashtbl[64],registry);
        return caml_call2(Core_kernel_List[71],_kE_,_kD_)}
      function rpcs(param)
       {function _kA_(param){var rpc=param[2];return rpc}
        var _kB_=caml_call1(Core_kernel_Hashtbl[64],registry);
        return caml_call2(Core_kernel_List[71],_kB_,_kA_)}
      function versions(param)
       {var _kz_=caml_call1(Core_kernel_Hashtbl[63],registry);
        return caml_call1(Core_kernel_Int[126][58],_kz_)}
      function Register(Version_i)
       {var rpc=caml_call3(_eW_[1],_ku_,Version_i[9],Version_i[8]);
        function implement(log_version,f)
         {function _kw_(s,q)
           {caml_call1(log_version,Version_i[9]);
            function _kx_(param){return caml_call1(Version_i[10],q)}
            var match=caml_call1(Core_kernel_Result[45],_kx_);
            if(0 === match[0])
             {var q$0=match[1];return caml_call3(f,s,Version_i[9],q$0)}
            var
             exn=match[1],
             _ky_=
              failed_conversion
               ([0,3854881,[0,4102853,_ku_],[0,-901574920,Version_i[9]],exn]);
            return caml_call1(Core_kernel_Error[25],_ky_)}
          return caml_call2(_eW_[6],rpc,_kw_)}
        var match=caml_call2(Core_kernel_Hashtbl[52],registry,Version_i[9]);
        if(match)
         {var
           _kv_=
            multiple_registrations
             ([0,[0,4102853,_ku_],[0,-901574920,Version_i[9]]]);
          caml_call1(Core_kernel_Error[25],_kv_)}
        else
         caml_call3
          (Core_kernel_Hashtbl[34],
           registry,
           Version_i[9],
           [0,[0,implement],[3,rpc]]);
        return [0,rpc]}
      return [0,_ku_,registry,implement_multi,rpcs,versions,Register]}
    var
     Model=[0,name$4],
     include$4=Make(Model),
     _ff_=include$4[3],
     _fg_=include$4[6],
     _fh_=Model[1],
     _fi_=Core_kernel[490],
     _fj_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_query),0,_fi_],0],
     _fk_=caml_call1(Bin_prot_Shape[4][1],cst_src_versioned_rpc_ml_604_6),
     group$12=caml_call2(Bin_prot_Shape[6],_fk_,_fj_),
     _fl_=caml_call1(Bin_prot_Shape[2][1],cst_query$0),
     bin_shape_query=
      caml_call1(caml_call2(Bin_prot_Shape[14],group$12,_fl_),0),
     bin_size_query=Core_kernel[491],
     bin_write_query=Core_kernel[492],
     bin_writer_query=[0,bin_size_query,bin_write_query],
     bin_read_query=Core_kernel[495],
     bin_read_query$0=Core_kernel[494],
     bin_reader_query=[0,bin_read_query$0,bin_read_query],
     bin_query$2=[0,bin_shape_query,bin_writer_query,bin_reader_query],
     _fm_=
      caml_call1
       (Bin_prot_Shape[7],[0,Core_kernel[443],[0,Core_kernel[328],0]]),
     _fn_=caml_call1(Core_kernel[394],_fm_),
     _fo_=[0,[0,caml_call1(Bin_prot_Shape[2][1],cst_response$1),0,_fn_],0],
     _fp_=caml_call1(Bin_prot_Shape[4][1],cst_src_versioned_rpc_ml_605_6),
     group$13=caml_call2(Bin_prot_Shape[6],_fp_,_fo_),
     _fq_=caml_call1(Bin_prot_Shape[2][1],cst_response$2),
     bin_shape_response=
      caml_call1(caml_call2(Bin_prot_Shape[14],group$13,_fq_),0),
     version$3=1;
    function bin_size_response(v)
     {function _kq_(param)
       {var
         v2=param[2],
         v1=param[1],
         _kr_=caml_call1(Core_kernel[444],v1),
         size=caml_call2(Bin_prot_Common[23],0,_kr_),
         _ks_=caml_call1(Core_kernel[329],v2);
        return caml_call2(Bin_prot_Common[23],size,_ks_)}
      return caml_call2(Core_kernel[395],_kq_,v)}
    function bin_write_response(buf,pos,v)
     {function _kp_(buf,pos,param)
       {var
         v2=param[2],
         v1=param[1],
         pos$0=caml_call3(Core_kernel[445],buf,pos,v1);
        return caml_call3(Core_kernel[330],buf,pos$0,v2)}
      return caml_call3(caml_call1(Core_kernel[396],_kp_),buf,pos,v)}
    var bin_writer_response=[0,bin_size_response,bin_write_response];
    function bin_read_response(buf,pos_ref,vint)
     {function _ko_(buf,pos_ref)
       {var
         v1=caml_call2(Core_kernel[447],buf,pos_ref),
         v2=caml_call2(Core_kernel[332],buf,pos_ref);
        return [0,v1,v2]}
      return caml_call3(caml_call1(Core_kernel[399],_ko_),buf,pos_ref,vint)}
    function bin_read_response$0(buf,pos_ref)
     {function _kn_(buf,pos_ref)
       {var
         v1=caml_call2(Core_kernel[447],buf,pos_ref),
         v2=caml_call2(Core_kernel[332],buf,pos_ref);
        return [0,v1,v2]}
      return caml_call2(caml_call1(Core_kernel[398],_kn_),buf,pos_ref)}
    var
     bin_reader_response=[0,bin_read_response$0,bin_read_response],
     bin_response$1=
      [0,bin_shape_response,bin_writer_response,bin_reader_response];
    function model_of_query(q){return q}
    var _fr_=Core_kernel_List[71];
    function _fs_(param)
     {var version=param[2],name=param[1];return [0,name,version]}
    function response_of_model(_km_){return caml_call2(_fr_,_km_,_fs_)}
    var
     include$5=
      caml_call1
       (_fg_,
        [0,
         bin_shape_query,
         bin_size_query,
         bin_write_query,
         bin_writer_query,
         bin_read_query$0,
         bin_read_query,
         bin_reader_query,
         bin_query$2,
         bin_shape_response,
         bin_size_response,
         bin_write_response,
         bin_writer_response,
         bin_read_response$0,
         bin_read_response,
         bin_reader_response,
         bin_response$1,
         version$3,
         model_of_query,
         response_of_model]),
     rpc=include$5[1];
    function add$1(impls)
     {var
       menu=caml_call2(Core_kernel_List[71],impls,_e1_[1]),
       menu_impls=
        caml_call2
         (_ff_,
          0,
          function(param,_kl_,_kk_){return caml_call1(Async_kernel[19],menu)});
      return caml_call2(Core_kernel[142],impls,menu_impls)}
    function supported_rpcs(t)
     {function _kg_(param)
       {var versions=param[2],name=param[1];
        function _ki_(version){return [0,name,version]}
        var _kj_=caml_call1(Core_kernel_Int[126][15],versions);
        return caml_call2(Base_List[25][2],_kj_,_ki_)}
      var _kh_=caml_call1(Core_kernel_String[130][74],t);
      return caml_call2(Base_List[25][1],_kh_,_kg_)}
    function supported_versions(t,rpc_name)
     {var
       _ke_=Core_kernel_Int[126][55],
       _kf_=caml_call2(Core_kernel_Hashtbl[52],t,rpc_name);
      return caml_call2(Core_kernel_Option[49],_kf_,_ke_)}
    function of_entries(entries)
     {var
       _kc_=Core_kernel_Int[126][58],
       _kd_=caml_call3(Core_kernel_String[130][9],0,0,entries);
      return caml_call2(Core_kernel_Hashtbl[39],_kd_,_kc_)}
    function request(conn)
     {function _ka_(result)
       {return caml_call2(Core_kernel_Result[36],result,of_entries)}
      var _kb_=caml_call3(_eZ_[11],rpc,conn,0);
      return caml_call2(Async_kernel[21],_kb_,_ka_)}
    function create$12(descriptions)
     {function _j$_(param)
       {var version=param[2],name=param[1];return [0,name,version]}
      return of_entries(caml_call2(Core_kernel_List[71],descriptions,_j$_))}
    function menu(r){return r[2]}
    function connection(r){return r[1]}
    function create$13(connection)
     {function _j9_(menu){return [0,connection,menu]}
      var _j__=request(connection);
      return caml_call2(Async_kernel_Deferred_or_error[11][2],_j__,_j9_)}
    function create_directly(connection,menu){return [0,connection,menu]}
    function most_recent_common_version
     (rpc_name,caller_versions,callee_versions,callee_menu)
     {var
       _j3_=caml_call2(Core_kernel_Set[15],callee_versions,caller_versions),
       match=caml_call1(Core_kernel_Set[58],_j3_);
      if(match){var version=match[1];return [0,version]}
      var
       _j4_=
        [0,
         [1,
          [0,
           _ft_,
           [0,
            caml_call2
             (Core_kernel_String[130][1],Core_kernel_Int[126][75],callee_menu),
            0]]],
         0],
       _j5_=
        [0,
         [1,
          [0,_fu_,[0,caml_call1(Core_kernel_Int[126][75],callee_versions),0]]],
         _j4_],
       _j6_=
        [0,
         [1,
          [0,_fv_,[0,caml_call1(Core_kernel_Int[126][75],caller_versions),0]]],
         _j5_],
       _j7_=[0,[1,[0,_fw_,[0,caml_call1(Core_kernel[455],rpc_name),0]]],_j6_],
       _j8_=
        [1,
         [0,
          caml_call1(Sexplib0_Sexp_conv[7],cst_caller_and_callee_share_no),
          _j7_]];
      return caml_call1(Core_kernel[218],_j8_)}
    var
     Expect_test_collector$1=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _fx_(param)
     {var
       menu=of_entries([0,[0,rpc_name,2],0]),
       _j0_=caml_call1(Core_kernel_Int[126][58],_fy_),
       result=
        most_recent_common_version
         (rpc_name,caml_call1(Core_kernel_Int[126][58],_fz_),_j0_,menu),
       _j1_=caml_call2(Core_kernel_Or_error[13],Core_kernel[340],result);
      caml_call2(Core_kernel[233],0,_j1_);
      var
       _j2_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_versioned_rpc_ml$0),
         691,
         22294,
         22300,
         22306];
      return caml_call1(Expect_test_collector$1[1],_j2_)}
    var
     _fA_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_versioned_rpc_ml$1),
       691,
       22294,
       22307,
       22319],
     _fD_=
      [0,
       [0,
        _fC_,
        _fB_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_versioned_rpc_ml$2),
         691,
         22294,
         22300,
         22306],
        _fA_],
       0],
     _fF_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_versioned_rpc_ml$4),
       680,
       21886,
       21888,
       22320],
     _fG_=
      caml_call1(Expect_test_common_File[4][3],cst_68699430bf14ef784fa8bfb54f);
    caml_call9
     (Expect_test_collector$1[3],
      _fG_,
      _fF_,
      cst_src_versioned_rpc_ml$3,
      _fE_,
      0,
      _fD_,
      0,
      Inline_test_config,
      _fx_);
    var
     Expect_test_collector$2=
      caml_call1(Expect_test_collector[2],Expect_test_config);
    function _fH_(param)
     {var
       menu=of_entries([0,[0,not_the_rpc,1],[0,[0,not_the_rpc,2],0]]),
       _jX_=supported_versions(menu,the_rpc),
       result=
        most_recent_common_version
         (the_rpc,caml_call1(Core_kernel_Int[126][58],_fI_),_jX_,menu),
       _jY_=caml_call2(Core_kernel_Or_error[13],Core_kernel[340],result);
      caml_call2(Core_kernel[233],0,_jY_);
      var
       _jZ_=
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_versioned_rpc_ml$5),
         706,
         22821,
         22827,
         22833];
      return caml_call1(Expect_test_collector$2[1],_jZ_)}
    var
     _fJ_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_versioned_rpc_ml$6),
       706,
       22821,
       22834,
       23030],
     _fM_=
      [0,
       [0,
        _fL_,
        _fK_,
        [0,
         caml_call1(Expect_test_common_File[1][6],cst_src_versioned_rpc_ml$7),
         706,
         22821,
         22827,
         22833],
        _fJ_],
       0],
     _fO_=
      [0,
       caml_call1(Expect_test_common_File[1][6],cst_src_versioned_rpc_ml$9),
       694,
       22327,
       22329,
       23031],
     _fP_=
      caml_call1
       (Expect_test_common_File[4][3],cst_68699430bf14ef784fa8bfb54f$0);
    caml_call9
     (Expect_test_collector$2[3],
      _fP_,
      _fO_,
      cst_src_versioned_rpc_ml$8,
      _fN_,
      0,
      _fM_,
      0,
      Inline_test_config,
      _fH_);
    function Make$3(M)
     {function with_specific_version
       (version,connection,name,query,dispatcher,registry)
       {var match=caml_call2(Core_kernel_Hashtbl[52],registry,version);
        if(match)
         {var match$0=match[1],dispatch=match$0[1];
          return caml_call3(dispatcher,dispatch,connection,query)}
        var x=[0,name,version];
        function _jV_(param)
         {var
           v1=param[2],
           v0=param[1],
           v0$0=caml_call1(Core_kernel[455],v0),
           v1$0=caml_call1(Core_kernel[340],v1);
          return [1,[0,v0$0,[0,v1$0,0]]]}
        var
         _jW_=
          [1,
           caml_call5
            (Core_kernel_Error[15],0,0,cst_unknown_rpc_version,x,_jV_)];
        return caml_call1(M[5],_jW_)}
      function with_version_menu
       (param,query,name,versions,registry,dispatcher)
       {var
         menu=param[2],
         connection=param[1],
         callee_versions=supported_versions(menu,name),
         caller_versions=caml_call1(versions,0),
         match=
          most_recent_common_version
           (name,caller_versions,callee_versions,menu);
        if(0 === match[0])
         {var version=match[1];
          return with_specific_version
                  (version,connection,name,query,dispatcher,registry)}
        var e=match[1];
        return caml_call1(M[5],[1,e])}
      return [0,with_specific_version,with_version_menu]}
    var
     Async=
      Make$3
       ([0,
         Async_kernel_Deferred[8],
         Async_kernel_Deferred[9],
         Async_kernel_Deferred[10],
         Async_kernel_Deferred[11],
         Async_kernel_Deferred[12],
         Async_kernel_Deferred[13],
         Async_kernel_Deferred[14],
         Async_kernel_Deferred[15],
         Async_kernel_Deferred[21],
         Async_kernel_Deferred[22],
         Async_kernel_Deferred[16]]),
     Direct=Make$3(Base_Monad[5]);
    function Make$4(_jG_)
     {var _jH_=_jG_[1],registry=caml_call3(Core_kernel_Int[130][4],0,_fQ_,0);
      function rpcs(param)
       {function _jT_(param){var rpc=param[2];return rpc}
        var _jU_=caml_call1(Core_kernel_Hashtbl[64],registry);
        return caml_call2(Core_kernel_List[71],_jU_,_jT_)}
      function versions(param)
       {var _jS_=caml_call1(Core_kernel_Int[130][63],registry);
        return caml_call1(Core_kernel_Int[126][58],_jS_)}
      function dispatch_multi(conn_with_menu,query)
       {function _jQ_(_jR_){return _jR_}
        return caml_call6
                (Async[2],conn_with_menu,query,_jH_,versions,registry,_jQ_)}
      function Register(Version_i)
       {var
         rpc=
          caml_call4(_eZ_[1],_jH_,Version_i[17],Version_i[8],Version_i[16]);
        function dispatch(conn,mq)
         {function _jK_(param){return caml_call1(Version_i[18],mq)}
          var match=caml_call1(Core_kernel_Result[45],_jK_);
          if(0 === match[0])
           {var
             q=match[1],
             _jL_=
              function(result)
               {function _jO_(r)
                 {function _jP_(param){return caml_call2(Version_i[19],mq,r)}
                  var match=caml_call1(Core_kernel_Result[45],_jP_);
                  if(0 === match[0]){var r$0=match[1];return [0,r$0]}
                  var exn=match[1];
                  return [1,
                          failed_conversion
                           ([0,
                             -71406943,
                             [0,4102853,_jH_],
                             [0,-901574920,Version_i[17]],
                             exn])]}
                return caml_call2(Core_kernel_Result[18],result,_jO_)},
             _jM_=caml_call3(_eZ_[11],rpc,conn,q);
            return caml_call2(Async_kernel[21],_jM_,_jL_)}
          var
           exn=match[1],
           _jN_=
            [1,
             failed_conversion
              ([0,
                -250086680,
                [0,4102853,_jH_],
                [0,-901574920,Version_i[17]],
                exn])];
          return caml_call1(Async_kernel[19],_jN_)}
        var match=caml_call2(Core_kernel_Hashtbl[52],registry,Version_i[17]);
        if(match)
         {var
           _jJ_=
            multiple_registrations
             ([0,[0,4102853,_jH_],[0,-901574920,Version_i[17]]]);
          caml_call1(Core_kernel_Error[25],_jJ_)}
        else
         caml_call3
          (Core_kernel_Hashtbl[34],
           registry,
           Version_i[17],
           [0,dispatch,[0,rpc]]);
        return [0,rpc]}
      function Register$0(Version_i)
       {var
         bin_shape_query=Version_i[1],
         bin_size_query=Version_i[2],
         bin_write_query=Version_i[3],
         bin_writer_query=Version_i[4],
         bin_read_query=Version_i[5],
         bin_read_query$0=Version_i[6],
         bin_reader_query=Version_i[7],
         bin_query=Version_i[8],
         bin_shape_response=Version_i[9],
         bin_size_response=Version_i[10],
         bin_write_response=Version_i[11],
         bin_writer_response=Version_i[12],
         bin_read_response=Version_i[13],
         bin_read_response$0=Version_i[14],
         bin_reader_response=Version_i[15],
         bin_response=Version_i[16],
         version=Version_i[17],
         query_of_model=Version_i[18],
         _jI_=Version_i[19];
        function model_of_response(param,r){return caml_call1(_jI_,r)}
        return Register
                ([0,
                  bin_shape_query,
                  bin_size_query,
                  bin_write_query,
                  bin_writer_query,
                  bin_read_query,
                  bin_read_query$0,
                  bin_reader_query,
                  bin_query,
                  bin_shape_response,
                  bin_size_response,
                  bin_write_response,
                  bin_writer_response,
                  bin_read_response,
                  bin_read_response$0,
                  bin_reader_response,
                  bin_response,
                  version,
                  query_of_model,
                  model_of_response])}
      return [0,
              _jH_,
              registry,
              rpcs,
              versions,
              dispatch_multi,
              Register,
              Register$0]}
    function Make$5(_je_)
     {var _jf_=_je_[1],registry=caml_call3(Core_kernel_Int[130][4],0,_fR_,0);
      function rpcs(param)
       {function _jE_(param){var rpc=param[2];return rpc}
        var _jF_=caml_call1(Core_kernel_Hashtbl[64],registry);
        return caml_call2(Core_kernel_List[71],_jF_,_jE_)}
      function versions(param)
       {var _jD_=caml_call1(Core_kernel_Int[130][63],registry);
        return caml_call1(Core_kernel_Int[126][58],_jD_)}
      function dispatch_iter_multi(conn_with_menu,query,f)
       {function _jC_(param,conn,query)
         {var dispatch_iter=param[3];
          return caml_call3(dispatch_iter,conn,query,f)}
        return caml_call6
                (Async[2],conn_with_menu,query,_jf_,versions,registry,_jC_)}
      function dispatch_multi(conn_with_menu,query)
       {function _jB_(param,conn,query)
         {var dispatch=param[2];return caml_call2(dispatch,conn,query)}
        return caml_call6
                (Async[2],conn_with_menu,query,_jf_,versions,registry,_jB_)}
      function abort_multi(conn_with_menu,id)
       {function _jA_(param,conn,id)
         {var abort=param[1];caml_call2(abort,conn,id);return _fS_}
        return caml_call6
                (Direct[2],conn_with_menu,id,_jf_,versions,registry,_jA_)}
      function Make_shared(Version_i,Convert)
       {var
         _jh_=Version_i[24],
         _ji_=Version_i[16],
         _jj_=Version_i[8],
         _jk_=Version_i[25],
         _jl_=caml_call2(Core_kernel_Option[54],Version_i[28],0),
         rpc=caml_call7(_eY_[3],_jl_,_jf_,_jk_,_jj_,_ji_,_jh_,0);
        function wrapped_query_of_model(q)
         {try
           {var q$0=caml_call1(Version_i[26],q)}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            var
             _jz_=
              [1,
               failed_conversion
                ([0,
                  -250086680,
                  [0,4102853,_jf_],
                  [0,-901574920,Version_i[25]],
                  exn])];
            return caml_call1(Async_kernel[19],_jz_)}
          return caml_call1(Async_kernel[19],[0,q$0])}
        function convert_result(result,convert_ok)
         {if(0 === result[0])
           {var _jy_=result[1];
            if(0 === _jy_[0])
             {var ok=_jy_[1];return [0,[0,caml_call1(convert_ok,ok)]]}
            var e=_jy_[1];
            try
             {var e$0=caml_call1(Version_i[27],e)}
            catch(exn)
             {exn = caml_wrap_exception(exn);
              return [1,
                      failed_conversion
                       ([0,
                         106380200,
                         [0,4102853,_jf_],
                         [0,-901574920,Version_i[25]],
                         exn])]}
            return [0,[1,e$0]]}
          return result}
        function dispatch(conn,q)
         {function _ju_(q)
           {function _jw_(result)
             {return convert_result
                      (result,
                       function(param)
                        {var id=param[2],pipe=param[1];
                         return [0,caml_call1(Convert[2],pipe),id]})}
            var _jx_=caml_call3(_eY_[10],rpc,conn,q);
            return caml_call2(Async_kernel[21],_jx_,_jw_)}
          var _jv_=wrapped_query_of_model(q);
          return caml_call2(Async_kernel[17],_jv_,_ju_)}
        function dispatch_iter(conn,q,f)
         {var convert_elt=caml_call1(Core_kernel_Or_error[35],Convert[1]);
          function _jn_(q)
           {function _jp_(result)
             {return convert_result(result,function(_jt_){return _jt_})}
            function _jq_(message)
             {if(0 === message[0])
               var u=message[1],_js_=[0,caml_call1(convert_elt,u)];
              else
               var _js_=message;
              return caml_call1(f,_js_)}
            var _jr_=caml_call4(_eY_[14],rpc,conn,q,_jq_);
            return caml_call2(Async_kernel[21],_jr_,_jp_)}
          var _jo_=wrapped_query_of_model(q);
          return caml_call2(Async_kernel[17],_jo_,_jn_)}
        function abort(conn,id){return caml_call3(_eY_[15],rpc,conn,id)}
        var match=caml_call2(Core_kernel_Hashtbl[52],registry,Version_i[25]);
        if(match)
         {var
           _jm_=
            multiple_registrations
             ([0,[0,4102853,_jf_],[0,-901574920,Version_i[25]]]);
          caml_call1(Core_kernel_Error[25],_jm_)}
        else
         caml_call3
          (Core_kernel_Hashtbl[34],
           registry,
           Version_i[25],
           [0,[0,abort,dispatch,dispatch_iter],[1,rpc]]);
        return [0,
                rpc,
                wrapped_query_of_model,
                convert_result,
                dispatch,
                dispatch_iter,
                abort]}
      function Register_raw(Version_i)
       {var
         convert_elt=
          caml_call1(Core_kernel_Or_error[40],cst_Cannot_use_Direct_with_Reg),
         convert_pipe=Version_i[29];
        return Make_shared
                ([0,
                  Version_i[1],
                  Version_i[2],
                  Version_i[3],
                  Version_i[4],
                  Version_i[5],
                  Version_i[6],
                  Version_i[7],
                  Version_i[8],
                  Version_i[9],
                  Version_i[10],
                  Version_i[11],
                  Version_i[12],
                  Version_i[13],
                  Version_i[14],
                  Version_i[15],
                  Version_i[16],
                  Version_i[17],
                  Version_i[18],
                  Version_i[19],
                  Version_i[20],
                  Version_i[21],
                  Version_i[22],
                  Version_i[23],
                  Version_i[24],
                  Version_i[25],
                  Version_i[26],
                  Version_i[27],
                  Version_i[28]],
                 [0,convert_elt,convert_pipe])}
      function Register(Version_i)
       {var convert_elt=[0,Version_i[29]];
        function convert_pipe(rs)
         {function _jg_(r)
           {try
             {var r$0=caml_call1(Version_i[29],r)}
            catch(exn)
             {exn = caml_wrap_exception(exn);
              return [1,
                      failed_conversion
                       ([0,
                         -71406943,
                         [0,4102853,_jf_],
                         [0,-901574920,Version_i[25]],
                         exn])]}
            return [0,r$0]}
          return caml_call2(Async_kernel_Pipe[55],rs,_jg_)}
        return Make_shared
                ([0,
                  Version_i[1],
                  Version_i[2],
                  Version_i[3],
                  Version_i[4],
                  Version_i[5],
                  Version_i[6],
                  Version_i[7],
                  Version_i[8],
                  Version_i[9],
                  Version_i[10],
                  Version_i[11],
                  Version_i[12],
                  Version_i[13],
                  Version_i[14],
                  Version_i[15],
                  Version_i[16],
                  Version_i[17],
                  Version_i[18],
                  Version_i[19],
                  Version_i[20],
                  Version_i[21],
                  Version_i[22],
                  Version_i[23],
                  Version_i[24],
                  Version_i[25],
                  Version_i[26],
                  Version_i[27],
                  Version_i[28]],
                 [0,convert_elt,convert_pipe])}
      return [0,
              _jf_,
              registry,
              rpcs,
              versions,
              dispatch_iter_multi,
              dispatch_multi,
              abort_multi,
              Make_shared,
              Register_raw,
              Register]}
    function Make$6(_iX_)
     {var _iY_=_iX_[1],registry=caml_call3(Core_kernel_Int[130][4],0,_fT_,0);
      function rpcs(param)
       {function _jc_(param){var rpc=param[2];return rpc}
        var _jd_=caml_call1(Core_kernel_Hashtbl[64],registry);
        return caml_call2(Core_kernel_List[71],_jd_,_jc_)}
      function versions(param)
       {var _jb_=caml_call1(Core_kernel_Int[130][63],registry);
        return caml_call1(Core_kernel_Int[126][58],_jb_)}
      function dispatch_multi(conn_with_menu,query)
       {function _i$_(_ja_){return _ja_}
        return caml_call6
                (Async[2],conn_with_menu,query,_iY_,versions,registry,_i$_)}
      function Register_raw(Version_i)
       {var
         _i0_=Version_i[32],
         _i1_=Version_i[24],
         _i2_=Version_i[16],
         _i3_=Version_i[8],
         _i4_=Version_i[33],
         _i5_=caml_call2(Core_kernel_Option[54],Version_i[37],0),
         rpc=caml_call8(_eX_[3],_i5_,_iY_,_i4_,_i3_,_i2_,_i1_,_i0_,0);
        function dispatch(conn,q)
         {try
           {var q$0=caml_call1(Version_i[34],q)}
          catch(exn)
           {exn = caml_wrap_exception(exn);
            var
             _i7_=
              [1,
               failed_conversion
                ([0,
                  -250086680,
                  [0,4102853,_iY_],
                  [0,-901574920,Version_i[33]],
                  exn])];
            return caml_call1(Async_kernel[19],_i7_)}
          function _i8_(result)
           {if(0 === result[0])
             {var _i__=result[1];
              if(0 === _i__[0])
               {var match=_i__[1],id=match[3],pipe=match[2],state=match[1];
                try
                 {var state$0=caml_call1(Version_i[35],state)}
                catch(exn)
                 {exn = caml_wrap_exception(exn);
                  return [1,
                          failed_conversion
                           ([0,
                             389604849,
                             [0,4102853,_iY_],
                             [0,-901574920,Version_i[33]],
                             exn])]}
                return [0,[0,[0,state$0,caml_call1(Version_i[38],pipe),id]]]}
              var e=_i__[1];
              try
               {var e$0=caml_call1(Version_i[36],e)}
              catch(exn)
               {exn = caml_wrap_exception(exn);
                return [1,
                        failed_conversion
                         ([0,
                           106380200,
                           [0,4102853,_iY_],
                           [0,-901574920,Version_i[33]],
                           exn])]}
              return [0,[1,e$0]]}
            var exn=result[1];
            return [1,exn]}
          var _i9_=caml_call3(_eX_[9],rpc,conn,q$0);
          return caml_call2(Async_kernel[21],_i9_,_i8_)}
        var match=caml_call2(Core_kernel_Hashtbl[52],registry,Version_i[33]);
        if(match)
         {var
           _i6_=
            multiple_registrations
             ([0,[0,4102853,_iY_],[0,-901574920,Version_i[33]]]);
          caml_call1(Core_kernel_Error[25],_i6_)}
        else
         caml_call3
          (Core_kernel_Hashtbl[34],
           registry,
           Version_i[33],
           [0,dispatch,[2,rpc]]);
        return [0,rpc]}
      function Register(Version_i)
       {var
         bin_shape_query=Version_i[1],
         bin_size_query=Version_i[2],
         bin_write_query=Version_i[3],
         bin_writer_query=Version_i[4],
         bin_read_query=Version_i[5],
         bin_read_query$0=Version_i[6],
         bin_reader_query=Version_i[7],
         bin_query=Version_i[8],
         bin_shape_state=Version_i[9],
         bin_size_state=Version_i[10],
         bin_write_state=Version_i[11],
         bin_writer_state=Version_i[12],
         bin_read_state=Version_i[13],
         bin_read_state$0=Version_i[14],
         bin_reader_state=Version_i[15],
         bin_state=Version_i[16],
         bin_shape_update=Version_i[17],
         bin_size_update=Version_i[18],
         bin_write_update=Version_i[19],
         bin_writer_update=Version_i[20],
         bin_read_update=Version_i[21],
         bin_read_update$0=Version_i[22],
         bin_reader_update=Version_i[23],
         bin_update=Version_i[24],
         bin_shape_error=Version_i[25],
         bin_size_error=Version_i[26],
         bin_write_error=Version_i[27],
         bin_writer_error=Version_i[28],
         bin_read_error=Version_i[29],
         bin_read_error$0=Version_i[30],
         bin_reader_error=Version_i[31],
         bin_error=Version_i[32],
         version=Version_i[33],
         query_of_model=Version_i[34],
         model_of_state=Version_i[35],
         model_of_error=Version_i[36],
         client_pushes_back=Version_i[37];
        function model_of_update(rs)
         {function _iZ_(r)
           {try
             {var r$0=caml_call1(Version_i[38],r)}
            catch(exn)
             {exn = caml_wrap_exception(exn);
              return [1,
                      failed_conversion
                       ([0,999946793,[0,4102853,_iY_],[0,-901574920,version],exn])]}
            return [0,r$0]}
          return caml_call2(Async_kernel_Pipe[55],rs,_iZ_)}
        var
         include=
          Register_raw
           ([0,
             bin_shape_query,
             bin_size_query,
             bin_write_query,
             bin_writer_query,
             bin_read_query,
             bin_read_query$0,
             bin_reader_query,
             bin_query,
             bin_shape_state,
             bin_size_state,
             bin_write_state,
             bin_writer_state,
             bin_read_state,
             bin_read_state$0,
             bin_reader_state,
             bin_state,
             bin_shape_update,
             bin_size_update,
             bin_write_update,
             bin_writer_update,
             bin_read_update,
             bin_read_update$0,
             bin_reader_update,
             bin_update,
             bin_shape_error,
             bin_size_error,
             bin_write_error,
             bin_writer_error,
             bin_read_error,
             bin_read_error$0,
             bin_reader_error,
             bin_error,
             version,
             query_of_model,
             model_of_state,
             model_of_error,
             client_pushes_back,
             model_of_update]),
         rpc=include[1];
        return [0,rpc]}
      return [0,
              _iY_,
              registry,
              rpcs,
              versions,
              dispatch_multi,
              Register_raw,
              Register]}
    function Make$7(_iO_)
     {var _iP_=_iO_[1],registry=caml_call3(Core_kernel_Int[130][4],0,_fU_,0);
      function rpcs(param)
       {function _iV_(param){var rpc=param[2];return rpc}
        var _iW_=caml_call1(Core_kernel_Hashtbl[64],registry);
        return caml_call2(Core_kernel_List[71],_iW_,_iV_)}
      function versions(param)
       {var _iU_=caml_call1(Core_kernel_Int[130][63],registry);
        return caml_call1(Core_kernel_Int[126][58],_iU_)}
      function dispatch_multi(conn_with_menu,msg)
       {function _iS_(_iT_){return _iT_}
        return caml_call6
                (Direct[2],conn_with_menu,msg,_iP_,versions,registry,_iS_)}
      function Register(Version_i)
       {var rpc=caml_call3(_eW_[1],_iP_,Version_i[9],Version_i[8]);
        function dispatch(conn,q)
         {function _iR_(param){return caml_call1(Version_i[10],q)}
          var match=caml_call1(Core_kernel_Result[45],_iR_);
          if(0 === match[0])
           {var q$0=match[1];return caml_call3(_eW_[9],rpc,conn,q$0)}
          var exn=match[1];
          return [1,
                  failed_conversion
                   ([0,
                     3854881,
                     [0,4102853,_iP_],
                     [0,-901574920,Version_i[9]],
                     exn])]}
        var match=caml_call2(Core_kernel_Hashtbl[52],registry,Version_i[9]);
        if(match)
         {var
           _iQ_=
            multiple_registrations
             ([0,[0,4102853,_iP_],[0,-901574920,Version_i[9]]]);
          caml_call1(Core_kernel_Error[25],_iQ_)}
        else
         caml_call3
          (Core_kernel_Hashtbl[34],registry,Version_i[9],[0,dispatch,[3,rpc]]);
        return [0,rpc]}
      return [0,_iP_,registry,rpcs,versions,dispatch_multi,Register]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$46);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_rpc_kernel_Versioned$0);
    var
     _fV_=
      [0,
       function(Model)
        {var name=Model[1],Caller=Make$7([0,name]),Callee=Make$2([0,name]);
         function _iH_(param)
          {var _iM_=caml_call1(Callee[5],0),_iN_=caml_call1(Caller[4],0);
           return caml_call2(Core_kernel_Int[126][26],_iN_,_iM_)}
         caml_call8
          (Ppx_inline_test_lib_Runtime[4],
           Inline_test_config,
           cst_Int_Set_equal_Caller_versi$3,
           0,
           cst_src_versioned_rpc_ml$14,
           1511,
           6,
           74,
           _iH_);
         function Register(Version)
          {var
            version=Version[1],
            bin_shape_msg=Version[2],
            bin_size_msg=Version[3],
            bin_write_msg=Version[4],
            bin_writer_msg=Version[5],
            bin_read_msg=Version[6],
            bin_read_msg$0=Version[7],
            bin_reader_msg=Version[8],
            bin_msg=Version[9],
            callee_model_of_msg=Version[11];
           caml_call1
            (Callee[6],
             [0,
              bin_shape_msg,
              bin_size_msg,
              bin_write_msg,
              bin_writer_msg,
              bin_read_msg,
              bin_read_msg$0,
              bin_reader_msg,
              bin_msg,
              version,
              callee_model_of_msg]);
           var
            version$0=Version[1],
            bin_shape_msg$0=Version[2],
            bin_size_msg$0=Version[3],
            bin_write_msg$0=Version[4],
            bin_writer_msg$0=Version[5],
            bin_read_msg$1=Version[6],
            bin_read_msg$2=Version[7],
            bin_reader_msg$0=Version[8],
            bin_msg$0=Version[9],
            msg_of_caller_model=Version[10],
            include=
             caml_call1
              (Caller[6],
               [0,
                bin_shape_msg$0,
                bin_size_msg$0,
                bin_write_msg$0,
                bin_writer_msg$0,
                bin_read_msg$1,
                bin_read_msg$2,
                bin_reader_msg$0,
                bin_msg$0,
                version$0,
                msg_of_caller_model]),
            _iI_=include[1];
           function _iJ_(param)
            {var _iK_=caml_call1(Callee[5],0),_iL_=caml_call1(Caller[4],0);
             return caml_call2(Core_kernel_Int[126][26],_iL_,_iK_)}
           caml_call8
            (Ppx_inline_test_lib_Runtime[4],
             Inline_test_config,
             cst_Int_Set_equal_Caller_versi$4,
             0,
             cst_src_versioned_rpc_ml$15,
             1528,
             8,
             76,
             _iJ_);
           return [0,_iI_]}
         var dispatch_multi=Caller[5],implement_multi=Callee[3];
         function versions(param){return caml_call1(Caller[4],0)}
         function rpcs(param){return caml_call1(Caller[3],0)}
         return [0,Register,dispatch_multi,implement_multi,rpcs,versions,name]}],
     _fW_=
      [0,
       function(Model)
        {var name=Model[1],Caller=Make$6([0,name]),Callee=Make$1([0,name]);
         function _iE_(param)
          {var _iF_=caml_call1(Callee[5],0),_iG_=caml_call1(Caller[4],0);
           return caml_call2(Core_kernel_Int[126][26],_iG_,_iF_)}
         caml_call8
          (Ppx_inline_test_lib_Runtime[4],
           Inline_test_config,
           cst_Int_Set_equal_Caller_versi$2,
           0,
           cst_src_versioned_rpc_ml$13,
           1407,
           6,
           74,
           _iE_);
         function Register_raw(Version_i)
          {var
            version=Version_i[1],
            bin_shape_query=Version_i[2],
            bin_size_query=Version_i[3],
            bin_write_query=Version_i[4],
            bin_writer_query=Version_i[5],
            bin_read_query=Version_i[6],
            bin_read_query$0=Version_i[7],
            bin_reader_query=Version_i[8],
            bin_query=Version_i[9],
            bin_shape_state=Version_i[10],
            bin_size_state=Version_i[11],
            bin_write_state=Version_i[12],
            bin_writer_state=Version_i[13],
            bin_read_state=Version_i[14],
            bin_read_state$0=Version_i[15],
            bin_reader_state=Version_i[16],
            bin_state=Version_i[17],
            bin_shape_update=Version_i[18],
            bin_size_update=Version_i[19],
            bin_write_update=Version_i[20],
            bin_writer_update=Version_i[21],
            bin_read_update=Version_i[22],
            bin_read_update$0=Version_i[23],
            bin_reader_update=Version_i[24],
            bin_update=Version_i[25],
            bin_shape_error=Version_i[26],
            bin_size_error=Version_i[27],
            bin_write_error=Version_i[28],
            bin_writer_error=Version_i[29],
            bin_read_error=Version_i[30],
            bin_read_error$0=Version_i[31],
            bin_reader_error=Version_i[32],
            bin_error=Version_i[33],
            callee_model_of_query=Version_i[35],
            state_of_callee_model=Version_i[37],
            error_of_callee_model=Version_i[39],
            client_pushes_back=Version_i[40],
            update_of_callee_model=Version_i[42];
           caml_call1
            (Callee[6],
             [0,
              bin_shape_query,
              bin_size_query,
              bin_write_query,
              bin_writer_query,
              bin_read_query,
              bin_read_query$0,
              bin_reader_query,
              bin_query,
              bin_shape_state,
              bin_size_state,
              bin_write_state,
              bin_writer_state,
              bin_read_state,
              bin_read_state$0,
              bin_reader_state,
              bin_state,
              bin_shape_update,
              bin_size_update,
              bin_write_update,
              bin_writer_update,
              bin_read_update,
              bin_read_update$0,
              bin_reader_update,
              bin_update,
              bin_shape_error,
              bin_size_error,
              bin_write_error,
              bin_writer_error,
              bin_read_error,
              bin_read_error$0,
              bin_reader_error,
              bin_error,
              version,
              callee_model_of_query,
              state_of_callee_model,
              error_of_callee_model,
              client_pushes_back,
              update_of_callee_model]);
           var
            version$0=Version_i[1],
            bin_shape_query$0=Version_i[2],
            bin_size_query$0=Version_i[3],
            bin_write_query$0=Version_i[4],
            bin_writer_query$0=Version_i[5],
            bin_read_query$1=Version_i[6],
            bin_read_query$2=Version_i[7],
            bin_reader_query$0=Version_i[8],
            bin_query$0=Version_i[9],
            bin_shape_state$0=Version_i[10],
            bin_size_state$0=Version_i[11],
            bin_write_state$0=Version_i[12],
            bin_writer_state$0=Version_i[13],
            bin_read_state$1=Version_i[14],
            bin_read_state$2=Version_i[15],
            bin_reader_state$0=Version_i[16],
            bin_state$0=Version_i[17],
            bin_shape_update$0=Version_i[18],
            bin_size_update$0=Version_i[19],
            bin_write_update$0=Version_i[20],
            bin_writer_update$0=Version_i[21],
            bin_read_update$1=Version_i[22],
            bin_read_update$2=Version_i[23],
            bin_reader_update$0=Version_i[24],
            bin_update$0=Version_i[25],
            bin_shape_error$0=Version_i[26],
            bin_size_error$0=Version_i[27],
            bin_write_error$0=Version_i[28],
            bin_writer_error$0=Version_i[29],
            bin_read_error$1=Version_i[30],
            bin_read_error$2=Version_i[31],
            bin_reader_error$0=Version_i[32],
            bin_error$0=Version_i[33],
            query_of_caller_model=Version_i[34],
            caller_model_of_state=Version_i[36],
            caller_model_of_error=Version_i[38],
            client_pushes_back$0=Version_i[40],
            caller_model_of_update=Version_i[41],
            include=
             caml_call1
              (Caller[6],
               [0,
                bin_shape_query$0,
                bin_size_query$0,
                bin_write_query$0,
                bin_writer_query$0,
                bin_read_query$1,
                bin_read_query$2,
                bin_reader_query$0,
                bin_query$0,
                bin_shape_state$0,
                bin_size_state$0,
                bin_write_state$0,
                bin_writer_state$0,
                bin_read_state$1,
                bin_read_state$2,
                bin_reader_state$0,
                bin_state$0,
                bin_shape_update$0,
                bin_size_update$0,
                bin_write_update$0,
                bin_writer_update$0,
                bin_read_update$1,
                bin_read_update$2,
                bin_reader_update$0,
                bin_update$0,
                bin_shape_error$0,
                bin_size_error$0,
                bin_write_error$0,
                bin_writer_error$0,
                bin_read_error$1,
                bin_read_error$2,
                bin_reader_error$0,
                bin_error$0,
                version$0,
                query_of_caller_model,
                caller_model_of_state,
                caller_model_of_error,
                client_pushes_back$0,
                caller_model_of_update]),
            rpc=include[1];
           return [0,rpc]}
         function Register(Version_i)
          {var
            version=Version_i[1],
            bin_shape_query=Version_i[2],
            bin_size_query=Version_i[3],
            bin_write_query=Version_i[4],
            bin_writer_query=Version_i[5],
            bin_read_query=Version_i[6],
            bin_read_query$0=Version_i[7],
            bin_reader_query=Version_i[8],
            bin_query=Version_i[9],
            bin_shape_state=Version_i[10],
            bin_size_state=Version_i[11],
            bin_write_state=Version_i[12],
            bin_writer_state=Version_i[13],
            bin_read_state=Version_i[14],
            bin_read_state$0=Version_i[15],
            bin_reader_state=Version_i[16],
            bin_state=Version_i[17],
            bin_shape_update=Version_i[18],
            bin_size_update=Version_i[19],
            bin_write_update=Version_i[20],
            bin_writer_update=Version_i[21],
            bin_read_update=Version_i[22],
            bin_read_update$0=Version_i[23],
            bin_reader_update=Version_i[24],
            bin_update=Version_i[25],
            bin_shape_error=Version_i[26],
            bin_size_error=Version_i[27],
            bin_write_error=Version_i[28],
            bin_writer_error=Version_i[29],
            bin_read_error=Version_i[30],
            bin_read_error$0=Version_i[31],
            bin_reader_error=Version_i[32],
            bin_error=Version_i[33],
            callee_model_of_query=Version_i[35],
            state_of_callee_model=Version_i[37],
            error_of_callee_model=Version_i[39],
            client_pushes_back=Version_i[40],
            update_of_callee_model=Version_i[41];
           caml_call1
            (Callee[7],
             [0,
              bin_shape_query,
              bin_size_query,
              bin_write_query,
              bin_writer_query,
              bin_read_query,
              bin_read_query$0,
              bin_reader_query,
              bin_query,
              bin_shape_state,
              bin_size_state,
              bin_write_state,
              bin_writer_state,
              bin_read_state,
              bin_read_state$0,
              bin_reader_state,
              bin_state,
              bin_shape_update,
              bin_size_update,
              bin_write_update,
              bin_writer_update,
              bin_read_update,
              bin_read_update$0,
              bin_reader_update,
              bin_update,
              bin_shape_error,
              bin_size_error,
              bin_write_error,
              bin_writer_error,
              bin_read_error,
              bin_read_error$0,
              bin_reader_error,
              bin_error,
              version,
              callee_model_of_query,
              state_of_callee_model,
              error_of_callee_model,
              client_pushes_back,
              update_of_callee_model]);
           var
            version$0=Version_i[1],
            bin_shape_query$0=Version_i[2],
            bin_size_query$0=Version_i[3],
            bin_write_query$0=Version_i[4],
            bin_writer_query$0=Version_i[5],
            bin_read_query$1=Version_i[6],
            bin_read_query$2=Version_i[7],
            bin_reader_query$0=Version_i[8],
            bin_query$0=Version_i[9],
            bin_shape_state$0=Version_i[10],
            bin_size_state$0=Version_i[11],
            bin_write_state$0=Version_i[12],
            bin_writer_state$0=Version_i[13],
            bin_read_state$1=Version_i[14],
            bin_read_state$2=Version_i[15],
            bin_reader_state$0=Version_i[16],
            bin_state$0=Version_i[17],
            bin_shape_update$0=Version_i[18],
            bin_size_update$0=Version_i[19],
            bin_write_update$0=Version_i[20],
            bin_writer_update$0=Version_i[21],
            bin_read_update$1=Version_i[22],
            bin_read_update$2=Version_i[23],
            bin_reader_update$0=Version_i[24],
            bin_update$0=Version_i[25],
            bin_shape_error$0=Version_i[26],
            bin_size_error$0=Version_i[27],
            bin_write_error$0=Version_i[28],
            bin_writer_error$0=Version_i[29],
            bin_read_error$1=Version_i[30],
            bin_read_error$2=Version_i[31],
            bin_reader_error$0=Version_i[32],
            bin_error$0=Version_i[33],
            query_of_caller_model=Version_i[34],
            caller_model_of_state=Version_i[36],
            caller_model_of_error=Version_i[38],
            client_pushes_back$0=Version_i[40],
            caller_model_of_update=Version_i[42],
            include=
             caml_call1
              (Caller[7],
               [0,
                bin_shape_query$0,
                bin_size_query$0,
                bin_write_query$0,
                bin_writer_query$0,
                bin_read_query$1,
                bin_read_query$2,
                bin_reader_query$0,
                bin_query$0,
                bin_shape_state$0,
                bin_size_state$0,
                bin_write_state$0,
                bin_writer_state$0,
                bin_read_state$1,
                bin_read_state$2,
                bin_reader_state$0,
                bin_state$0,
                bin_shape_update$0,
                bin_size_update$0,
                bin_write_update$0,
                bin_writer_update$0,
                bin_read_update$1,
                bin_read_update$2,
                bin_reader_update$0,
                bin_update$0,
                bin_shape_error$0,
                bin_size_error$0,
                bin_write_error$0,
                bin_writer_error$0,
                bin_read_error$1,
                bin_read_error$2,
                bin_reader_error$0,
                bin_error$0,
                version$0,
                query_of_caller_model,
                caller_model_of_state,
                caller_model_of_error,
                client_pushes_back$0,
                caller_model_of_update]),
            rpc=include[1];
           return [0,rpc]}
         var dispatch_multi=Caller[5],implement_multi=Callee[3];
         function versions(param){return caml_call1(Caller[4],0)}
         function rpcs(param){return caml_call1(Caller[3],0)}
         return [0,
                 Register,
                 Register_raw,
                 dispatch_multi,
                 implement_multi,
                 rpcs,
                 versions,
                 name]}],
     _fX_=
      [0,
       function(Model)
        {var name=Model[1],Caller=Make$5([0,name]),Callee=Make$0([0,name]);
         function _iA_(param)
          {var _iC_=caml_call1(Callee[7],0),_iD_=caml_call1(Caller[4],0);
           return caml_call2(Core_kernel_Int[126][26],_iD_,_iC_)}
         caml_call8
          (Ppx_inline_test_lib_Runtime[4],
           Inline_test_config,
           cst_Int_Set_equal_Caller_versi$1,
           0,
           cst_src_versioned_rpc_ml$12,
           1294,
           6,
           74,
           _iA_);
         var
          dispatch_multi=Caller[6],
          dispatch_iter_multi=Caller[5],
          abort_multi=Caller[7],
          implement_multi=Callee[4],
          implement_direct_multi=Callee[5];
         function versions(param){return caml_call1(Caller[4],0)}
         function rpcs(param){return caml_call1(Caller[3],0)}
         function _iB_(Version_i)
          {var
            version=Version_i[1],
            bin_shape_query=Version_i[2],
            bin_size_query=Version_i[3],
            bin_write_query=Version_i[4],
            bin_writer_query=Version_i[5],
            bin_read_query=Version_i[6],
            bin_read_query$0=Version_i[7],
            bin_reader_query=Version_i[8],
            bin_query=Version_i[9],
            bin_shape_response=Version_i[10],
            bin_size_response=Version_i[11],
            bin_write_response=Version_i[12],
            bin_writer_response=Version_i[13],
            bin_read_response=Version_i[14],
            bin_read_response$0=Version_i[15],
            bin_reader_response=Version_i[16],
            bin_response=Version_i[17],
            bin_shape_error=Version_i[18],
            bin_size_error=Version_i[19],
            bin_write_error=Version_i[20],
            bin_writer_error=Version_i[21],
            bin_read_error=Version_i[22],
            bin_read_error$0=Version_i[23],
            bin_reader_error=Version_i[24],
            bin_error=Version_i[25],
            callee_model_of_query=Version_i[27],
            error_of_callee_model=Version_i[28],
            client_pushes_back=Version_i[30],
            response_of_callee_model=Version_i[31];
           caml_call1
            (Callee[9],
             [0,
              bin_shape_query,
              bin_size_query,
              bin_write_query,
              bin_writer_query,
              bin_read_query,
              bin_read_query$0,
              bin_reader_query,
              bin_query,
              bin_shape_response,
              bin_size_response,
              bin_write_response,
              bin_writer_response,
              bin_read_response,
              bin_read_response$0,
              bin_reader_response,
              bin_response,
              bin_shape_error,
              bin_size_error,
              bin_write_error,
              bin_writer_error,
              bin_read_error,
              bin_read_error$0,
              bin_reader_error,
              bin_error,
              version,
              callee_model_of_query,
              error_of_callee_model,
              client_pushes_back,
              response_of_callee_model]);
           var
            version$0=Version_i[1],
            bin_shape_query$0=Version_i[2],
            bin_size_query$0=Version_i[3],
            bin_write_query$0=Version_i[4],
            bin_writer_query$0=Version_i[5],
            bin_read_query$1=Version_i[6],
            bin_read_query$2=Version_i[7],
            bin_reader_query$0=Version_i[8],
            bin_query$0=Version_i[9],
            bin_shape_response$0=Version_i[10],
            bin_size_response$0=Version_i[11],
            bin_write_response$0=Version_i[12],
            bin_writer_response$0=Version_i[13],
            bin_read_response$1=Version_i[14],
            bin_read_response$2=Version_i[15],
            bin_reader_response$0=Version_i[16],
            bin_response$0=Version_i[17],
            bin_shape_error$0=Version_i[18],
            bin_size_error$0=Version_i[19],
            bin_write_error$0=Version_i[20],
            bin_writer_error$0=Version_i[21],
            bin_read_error$1=Version_i[22],
            bin_read_error$2=Version_i[23],
            bin_reader_error$0=Version_i[24],
            bin_error$0=Version_i[25],
            query_of_caller_model=Version_i[26],
            caller_model_of_error=Version_i[29],
            client_pushes_back$0=Version_i[30],
            caller_model_of_response=Version_i[32],
            include=
             caml_call1
              (Caller[9],
               [0,
                bin_shape_query$0,
                bin_size_query$0,
                bin_write_query$0,
                bin_writer_query$0,
                bin_read_query$1,
                bin_read_query$2,
                bin_reader_query$0,
                bin_query$0,
                bin_shape_response$0,
                bin_size_response$0,
                bin_write_response$0,
                bin_writer_response$0,
                bin_read_response$1,
                bin_read_response$2,
                bin_reader_response$0,
                bin_response$0,
                bin_shape_error$0,
                bin_size_error$0,
                bin_write_error$0,
                bin_writer_error$0,
                bin_read_error$1,
                bin_read_error$2,
                bin_reader_error$0,
                bin_error$0,
                version$0,
                query_of_caller_model,
                caller_model_of_error,
                client_pushes_back$0,
                caller_model_of_response]),
            rpc=include[1];
           return [0,rpc]}
         return [0,
                 function(Version_i)
                  {var
                    version=Version_i[1],
                    bin_shape_query=Version_i[2],
                    bin_size_query=Version_i[3],
                    bin_write_query=Version_i[4],
                    bin_writer_query=Version_i[5],
                    bin_read_query=Version_i[6],
                    bin_read_query$0=Version_i[7],
                    bin_reader_query=Version_i[8],
                    bin_query=Version_i[9],
                    bin_shape_response=Version_i[10],
                    bin_size_response=Version_i[11],
                    bin_write_response=Version_i[12],
                    bin_writer_response=Version_i[13],
                    bin_read_response=Version_i[14],
                    bin_read_response$0=Version_i[15],
                    bin_reader_response=Version_i[16],
                    bin_response=Version_i[17],
                    bin_shape_error=Version_i[18],
                    bin_size_error=Version_i[19],
                    bin_write_error=Version_i[20],
                    bin_writer_error=Version_i[21],
                    bin_read_error=Version_i[22],
                    bin_read_error$0=Version_i[23],
                    bin_reader_error=Version_i[24],
                    bin_error=Version_i[25],
                    callee_model_of_query=Version_i[27],
                    error_of_callee_model=Version_i[28],
                    client_pushes_back=Version_i[30],
                    response_of_callee_model=Version_i[31];
                   caml_call1
                    (Callee[10],
                     [0,
                      bin_shape_query,
                      bin_size_query,
                      bin_write_query,
                      bin_writer_query,
                      bin_read_query,
                      bin_read_query$0,
                      bin_reader_query,
                      bin_query,
                      bin_shape_response,
                      bin_size_response,
                      bin_write_response,
                      bin_writer_response,
                      bin_read_response,
                      bin_read_response$0,
                      bin_reader_response,
                      bin_response,
                      bin_shape_error,
                      bin_size_error,
                      bin_write_error,
                      bin_writer_error,
                      bin_read_error,
                      bin_read_error$0,
                      bin_reader_error,
                      bin_error,
                      version,
                      callee_model_of_query,
                      error_of_callee_model,
                      client_pushes_back,
                      response_of_callee_model]);
                   var
                    version$0=Version_i[1],
                    bin_shape_query$0=Version_i[2],
                    bin_size_query$0=Version_i[3],
                    bin_write_query$0=Version_i[4],
                    bin_writer_query$0=Version_i[5],
                    bin_read_query$1=Version_i[6],
                    bin_read_query$2=Version_i[7],
                    bin_reader_query$0=Version_i[8],
                    bin_query$0=Version_i[9],
                    bin_shape_response$0=Version_i[10],
                    bin_size_response$0=Version_i[11],
                    bin_write_response$0=Version_i[12],
                    bin_writer_response$0=Version_i[13],
                    bin_read_response$1=Version_i[14],
                    bin_read_response$2=Version_i[15],
                    bin_reader_response$0=Version_i[16],
                    bin_response$0=Version_i[17],
                    bin_shape_error$0=Version_i[18],
                    bin_size_error$0=Version_i[19],
                    bin_write_error$0=Version_i[20],
                    bin_writer_error$0=Version_i[21],
                    bin_read_error$1=Version_i[22],
                    bin_read_error$2=Version_i[23],
                    bin_reader_error$0=Version_i[24],
                    bin_error$0=Version_i[25],
                    query_of_caller_model=Version_i[26],
                    caller_model_of_error=Version_i[29],
                    client_pushes_back$0=Version_i[30],
                    caller_model_of_response=Version_i[32],
                    include=
                     caml_call1
                      (Caller[10],
                       [0,
                        bin_shape_query$0,
                        bin_size_query$0,
                        bin_write_query$0,
                        bin_writer_query$0,
                        bin_read_query$1,
                        bin_read_query$2,
                        bin_reader_query$0,
                        bin_query$0,
                        bin_shape_response$0,
                        bin_size_response$0,
                        bin_write_response$0,
                        bin_writer_response$0,
                        bin_read_response$1,
                        bin_read_response$2,
                        bin_reader_response$0,
                        bin_response$0,
                        bin_shape_error$0,
                        bin_size_error$0,
                        bin_write_error$0,
                        bin_writer_error$0,
                        bin_read_error$1,
                        bin_read_error$2,
                        bin_reader_error$0,
                        bin_error$0,
                        version$0,
                        query_of_caller_model,
                        caller_model_of_error,
                        client_pushes_back$0,
                        caller_model_of_response]),
                    rpc=include[1];
                   return [0,rpc]},
                 _iB_,
                 dispatch_multi,
                 dispatch_iter_multi,
                 abort_multi,
                 implement_multi,
                 implement_direct_multi,
                 rpcs,
                 versions,
                 name]}],
     _fY_=
      [0,
       [0,
        function(Model)
         {var name=Model[1],Caller=Make$4([0,name]),Callee=Make([0,name]);
          function _it_(param)
           {var _iy_=caml_call1(Callee[5],0),_iz_=caml_call1(Caller[4],0);
            return caml_call2(Core_kernel_Int[126][26],_iz_,_iy_)}
          caml_call8
           (Ppx_inline_test_lib_Runtime[4],
            Inline_test_config,
            cst_Int_Set_equal_Caller_versi,
            0,
            cst_src_versioned_rpc_ml$10,
            1196,
            6,
            74,
            _it_);
          function Register(Version)
           {var
             version=Version[1],
             bin_shape_query=Version[2],
             bin_size_query=Version[3],
             bin_write_query=Version[4],
             bin_writer_query=Version[5],
             bin_read_query=Version[6],
             bin_read_query$0=Version[7],
             bin_reader_query=Version[8],
             bin_query=Version[9],
             bin_shape_response=Version[10],
             bin_size_response=Version[11],
             bin_write_response=Version[12],
             bin_writer_response=Version[13],
             bin_read_response=Version[14],
             bin_read_response$0=Version[15],
             bin_reader_response=Version[16],
             bin_response=Version[17],
             callee_model_of_query=Version[19],
             response_of_callee_model=Version[20];
            caml_call1
             (Callee[6],
              [0,
               bin_shape_query,
               bin_size_query,
               bin_write_query,
               bin_writer_query,
               bin_read_query,
               bin_read_query$0,
               bin_reader_query,
               bin_query,
               bin_shape_response,
               bin_size_response,
               bin_write_response,
               bin_writer_response,
               bin_read_response,
               bin_read_response$0,
               bin_reader_response,
               bin_response,
               version,
               callee_model_of_query,
               response_of_callee_model]);
            var
             version$0=Version[1],
             bin_shape_query$0=Version[2],
             bin_size_query$0=Version[3],
             bin_write_query$0=Version[4],
             bin_writer_query$0=Version[5],
             bin_read_query$1=Version[6],
             bin_read_query$2=Version[7],
             bin_reader_query$0=Version[8],
             bin_query$0=Version[9],
             bin_shape_response$0=Version[10],
             bin_size_response$0=Version[11],
             bin_write_response$0=Version[12],
             bin_writer_response$0=Version[13],
             bin_read_response$1=Version[14],
             bin_read_response$2=Version[15],
             bin_reader_response$0=Version[16],
             bin_response$0=Version[17],
             query_of_caller_model=Version[18],
             caller_model_of_response=Version[21],
             include=
              caml_call1
               (Caller[7],
                [0,
                 bin_shape_query$0,
                 bin_size_query$0,
                 bin_write_query$0,
                 bin_writer_query$0,
                 bin_read_query$1,
                 bin_read_query$2,
                 bin_reader_query$0,
                 bin_query$0,
                 bin_shape_response$0,
                 bin_size_response$0,
                 bin_write_response$0,
                 bin_writer_response$0,
                 bin_read_response$1,
                 bin_read_response$2,
                 bin_reader_response$0,
                 bin_response$0,
                 version$0,
                 query_of_caller_model,
                 caller_model_of_response]),
             _iu_=include[1];
            function _iv_(param)
             {var _iw_=caml_call1(Callee[5],0),_ix_=caml_call1(Caller[4],0);
              return caml_call2(Core_kernel_Int[126][26],_ix_,_iw_)}
            caml_call8
             (Ppx_inline_test_lib_Runtime[4],
              Inline_test_config,
              cst_Int_Set_equal_Caller_versi$0,
              0,
              cst_src_versioned_rpc_ml$11,
              1218,
              8,
              76,
              _iv_);
            return [0,_iu_]}
          var dispatch_multi=Caller[5],implement_multi=Callee[3];
          function versions(param){return caml_call1(Caller[4],0)}
          function rpcs(param){return caml_call1(Caller[3],0)}
          return [0,
                  Register,
                  dispatch_multi,
                  implement_multi,
                  rpcs,
                  versions,
                  name]}],
       _fX_,
       _fW_,
       _fV_],
     _fZ_=
      [0,
       function(_il_)
        {var
          _im_=Make$2(_il_),
          _in_=_im_[1],
          _io_=_im_[5],
          _ip_=_im_[4],
          _iq_=_im_[3],
          _ir_=_im_[6];
         return [0,
                 function(_is_)
                  {return caml_call1
                           (_ir_,
                            [0,
                             _is_[2],
                             _is_[3],
                             _is_[4],
                             _is_[5],
                             _is_[6],
                             _is_[7],
                             _is_[8],
                             _is_[9],
                             _is_[1],
                             _is_[10]])},
                 _iq_,
                 _ip_,
                 _io_,
                 _in_]}],
     _f0_=
      [0,
       function(_ij_)
        {var _ik_=Make$1(_ij_);
         return [0,_ik_[7],_ik_[6],_ik_[3],_ik_[4],_ik_[5],_ik_[1]]}],
     _f1_=
      [0,
       function(_h9_)
        {var
          _h__=Make$0(_h9_),
          _h$_=_h__[1],
          _ia_=_h__[7],
          _ib_=_h__[6],
          _ic_=_h__[5],
          _id_=_h__[4],
          _ie_=_h__[9];
         function _if_(_ii_){return [0,caml_call1(_ie_,_ii_)[1]]}
         var _ig_=_h__[10];
         return [0,
                 function(_ih_){return [0,caml_call1(_ig_,_ih_)[1]]},
                 _if_,
                 _id_,
                 _ic_,
                 _ib_,
                 _ia_,
                 _h$_]}],
     _f2_=
      [0,
       [0,
        [0,
         create$11,
         name$3,
         add_version,
         add_version_with_failure,
         add_rpc_version,
         add_rpc_version_with_failure,
         implement$7],
        function(_h1_)
         {var
           _h2_=Make(_h1_),
           _h3_=_h2_[1],
           _h4_=_h2_[5],
           _h5_=_h2_[4],
           _h6_=_h2_[3],
           _h7_=_h2_[6];
          return [0,
                  function(_h8_)
                   {return caml_call1
                            (_h7_,
                             [0,
                              _h8_[2],
                              _h8_[3],
                              _h8_[4],
                              _h8_[5],
                              _h8_[6],
                              _h8_[7],
                              _h8_[8],
                              _h8_[9],
                              _h8_[10],
                              _h8_[11],
                              _h8_[12],
                              _h8_[13],
                              _h8_[14],
                              _h8_[15],
                              _h8_[16],
                              _h8_[17],
                              _h8_[1],
                              _h8_[18],
                              _h8_[19]])},
                  _h6_,
                  _h5_,
                  _h4_,
                  _h3_]}],
       _f1_,
       _f0_,
       _fZ_],
     _f3_=
      [0,
       function(_hT_)
        {var
          _hU_=Make$7(_hT_),
          _hV_=_hU_[1],
          _hW_=_hU_[4],
          _hX_=_hU_[3],
          _hY_=_hU_[5],
          _hZ_=_hU_[6];
         return [0,
                 function(_h0_)
                  {return caml_call1
                           (_hZ_,
                            [0,
                             _h0_[2],
                             _h0_[3],
                             _h0_[4],
                             _h0_[5],
                             _h0_[6],
                             _h0_[7],
                             _h0_[8],
                             _h0_[9],
                             _h0_[1],
                             _h0_[10]])},
                 _hY_,
                 _hX_,
                 _hW_,
                 _hV_]}],
     _f4_=
      [0,
       function(_hR_)
        {var _hS_=Make$6(_hR_);
         return [0,_hS_[7],_hS_[6],_hS_[5],_hS_[3],_hS_[4],_hS_[1]]}],
     _f5_=
      [0,
       function(_hE_)
        {var
          _hF_=Make$5(_hE_),
          _hG_=_hF_[1],
          _hH_=_hF_[4],
          _hI_=_hF_[3],
          _hJ_=_hF_[7],
          _hK_=_hF_[5],
          _hL_=_hF_[6],
          _hM_=_hF_[9];
         function _hN_(_hQ_){return [0,caml_call1(_hM_,_hQ_)[1]]}
         var _hO_=_hF_[10];
         return [0,
                 function(_hP_){return [0,caml_call1(_hO_,_hP_)[1]]},
                 _hN_,
                 _hL_,
                 _hK_,
                 _hJ_,
                 _hI_,
                 _hH_,
                 _hG_]}],
     _f6_=[0,create$13,create_directly,connection,menu],
     Async_rpc_kernel_Versioned_rpc=
      [0,
       [0,add$1,_ff_,request,supported_rpcs,supported_versions,create$12,_fh_],
       _f6_,
       [0,write$5,write_without_pushback$4,close$6,closed$1,is_closed$4],
       [0,
        [0,
         function(_ht_)
          {var
            _hu_=Make$4(_ht_),
            _hv_=_hu_[1],
            _hw_=_hu_[4],
            _hx_=_hu_[3],
            _hy_=_hu_[5],
            _hz_=_hu_[6];
           function _hA_(_hD_)
            {return caml_call1
                     (_hz_,
                      [0,
                       _hD_[2],
                       _hD_[3],
                       _hD_[4],
                       _hD_[5],
                       _hD_[6],
                       _hD_[7],
                       _hD_[8],
                       _hD_[9],
                       _hD_[10],
                       _hD_[11],
                       _hD_[12],
                       _hD_[13],
                       _hD_[14],
                       _hD_[15],
                       _hD_[16],
                       _hD_[17],
                       _hD_[1],
                       _hD_[18],
                       _hD_[19]])}
           var _hB_=_hu_[7];
           return [0,
                   function(_hC_)
                    {return caml_call1
                             (_hB_,
                              [0,
                               _hC_[2],
                               _hC_[3],
                               _hC_[4],
                               _hC_[5],
                               _hC_[6],
                               _hC_[7],
                               _hC_[8],
                               _hC_[9],
                               _hC_[10],
                               _hC_[11],
                               _hC_[12],
                               _hC_[13],
                               _hC_[14],
                               _hC_[15],
                               _hC_[16],
                               _hC_[17],
                               _hC_[1],
                               _hC_[18],
                               _hC_[19]])},
                   _hA_,
                   _hy_,
                   _hx_,
                   _hw_,
                   _hv_]}],
        _f5_,
        _f4_,
        _f3_],
       _f2_,
       _fY_];
    caml_register_global
     (811,Async_rpc_kernel_Versioned_rpc,"Async_rpc_kernel__Versioned_rpc");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_rpc_kernel_Pipe_tran);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_rpc_kernel$47);
    caml_call1(Expect_test_collector[4][1],cst_src_pipe_transport_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$48,cst$16);
    function pipe_read(t,f)
     {function _hr_(param)
       {if(3456156 <= param)return caml_call1(f,3456156);
        var res=caml_call3(Async_kernel_Pipe[36],0,0,t);
        if(typeof res === "number" && ! (3456156 <= res))
         return pipe_read(t,f);
        return caml_call1(f,res)}
      var _hs_=caml_call1(Async_kernel_Pipe[41],t);
      return caml_call2(Async_kernel[20],_hs_,_hr_)}
    function create$14(pipe)
     {return [0,pipe,caml_call1(Core_kernel_Bigbuffer[2],Header[1])]}
    function Pipe_reader(Data)
     {function sexp_of_t(v)
       {var
         v_buffer=v[2],
         v_pipe=v[1],
         _hq_=Data[1],
         arg=caml_call1(Core_kernel_Bigbuffer[1],v_buffer),
         bnds=[0,[1,[0,_f7_,[0,arg,0]]],0],
         arg$0=caml_call2(Async_kernel_Pipe[4][1],_hq_,v_pipe),
         bnds$0=[0,[1,[0,_f8_,[0,arg$0,0]]],bnds];
        return [1,bnds$0]}
      function close(t)
       {caml_call1(Async_kernel_Pipe[15],t[1]);
        return Async_kernel_Deferred[18]}
      function is_closed(t){return caml_call1(Async_kernel_Pipe[16],t[1])}
      function read_forever(t,on_message,on_end_of_batch)
       {var buffer=t[2];
        function set_buffer(pos,length,data)
         {if(caml_call2(Core_kernel_Int[123][3],length,0))
           return caml_call1(Core_kernel_Bigbuffer[13],buffer);
          var data$0=caml_call3(Core_kernel_Bigstring[22],data,pos,length);
          caml_call1(Core_kernel_Bigbuffer[13],buffer);
          return caml_call2(Core_kernel_Bigbuffer[23],buffer,data$0)}
        function process_queue$0(counter,need,queue)
         {for(;;)
           {var match=caml_call1(Core_kernel_Queue[42],queue);
            if(match)
             {var
               data=match[1],
               buff_len=caml_call1(Core_kernel_Bigbuffer[12],buffer),
               data_len=caml_call1(Data[2],data);
              if
               (caml_call2(Core_kernel_Int[123][3],buff_len,0)
                &&
                caml_call2(Core_kernel_Int[123][1],data_len,need))
               {var _hm_=caml_call1(Data[4],data),_hn_=0;
                if(counter < 50)
                 {var counter$0=counter + 1 | 0;
                  return process_data$0(counter$0,_hn_,_hm_,data_len,queue)}
                return caml_trampoline_return
                        (process_data$0,[0,_hn_,_hm_,data_len,queue])}
              caml_call2(Data[3],buffer,data);
              var _ho_=caml_call1(Core_kernel_Bigbuffer[12],buffer);
              if(caml_call2(Core_kernel_Int[123][1],_ho_,need))
               {var
                 data$0=caml_call1(Core_kernel_Bigbuffer[22],buffer),
                 length=caml_call1(Core_kernel_Bigbuffer[12],buffer),
                 _hp_=0;
                if(counter < 50)
                 {var counter$1=counter + 1 | 0;
                  return process_data$0(counter$1,_hp_,data$0,length,queue)}
                return caml_trampoline_return
                        (process_data$0,[0,_hp_,data$0,length,queue])}
              continue}
            return caml_call1(Async_kernel[19],[1,need])}}
        function process_data$0(counter,pos,data,length,queue)
         {if(caml_call2(Core_kernel_Int[123][1],length,Header[1]))
           {var
             payload_len=caml_call2(Header[2],data,pos),
             total_len=Header[1] + payload_len | 0;
            if(caml_call2(Core_kernel_Int[123][1],length,total_len))
             {var
               continue_or_wait=
                caml_call3(on_message,data,pos + Header[1] | 0,payload_len);
              if
               (typeof continue_or_wait
                !==
                "number"
                &&
                0
                ===
                continue_or_wait[0])
               {var
                 x=continue_or_wait[1],
                 pos$0=pos + total_len | 0,
                 length$0=length - total_len | 0;
                set_buffer(pos$0,length$0,data);
                var
                 _hk_=
                  function(data){return caml_call2(Data[3],buffer,data)};
                caml_call2(Core_kernel_Queue[15],queue,_hk_);
                return caml_call1(Async_kernel[19],[0,x])}
              var
               _hi_=
                function(param)
                 {var
                   pos$0=pos + total_len | 0,
                   length$0=length - total_len | 0;
                  if(caml_call2(Core_kernel_Int[123][1],length$0,0))
                   return caml_call2(Core_kernel_Int[123][4],length$0,0)
                           ?process_data(pos$0,data,length$0,queue)
                           :set_buffer_and_process_queue(Header[1],pos$0,0,queue,data);
                  throw [0,Assert_failure,_f9_]};
              if(typeof continue_or_wait === "number")
               var _hj_=Async_kernel_Deferred[18];
              else
               {if(0 === continue_or_wait[0])throw [0,Assert_failure,_f__];
                var d=continue_or_wait[1],_hj_=d}
              return caml_call2(Async_kernel[20],_hj_,_hi_)}
            if(counter < 50)
             {var counter$0=counter + 1 | 0;
              return set_buffer_and_process_queue$0
                      (counter$0,total_len,pos,length,queue,data)}
            return caml_trampoline_return
                    (set_buffer_and_process_queue$0,
                     [0,total_len,pos,length,queue,data])}
          var _hl_=Header[1];
          if(counter < 50)
           {var counter$1=counter + 1 | 0;
            return set_buffer_and_process_queue$0
                    (counter$1,_hl_,pos,length,queue,data)}
          return caml_trampoline_return
                  (set_buffer_and_process_queue$0,
                   [0,_hl_,pos,length,queue,data])}
        function set_buffer_and_process_queue$0
         (counter,need,pos,length,queue,data)
         {set_buffer(pos,length,data);
          if(counter < 50)
           {var counter$0=counter + 1 | 0;
            return process_queue$0(counter$0,need,queue)}
          return caml_trampoline_return(process_queue$0,[0,need,queue])}
        function process_queue(need,queue)
         {return caml_trampoline(process_queue$0(0,need,queue))}
        function process_data(pos,data,length,queue)
         {return caml_trampoline(process_data$0(0,pos,data,length,queue))}
        function set_buffer_and_process_queue(need,pos,length,queue,data)
         {return caml_trampoline
                  (set_buffer_and_process_queue$0
                    (0,need,pos,length,queue,data))}
        function wait_for_read(need)
         {function _hg_(param)
           {if(typeof param === "number")
             return caml_call1(Async_kernel[19],_f$_);
            var queue=param[2],_hh_=process_queue(need,queue);
            return caml_call2(Async_kernel[20],_hh_,end_of_batch_and_continue)}
          return pipe_read(t[1],_hg_)}
        function end_of_batch_and_continue(next)
         {caml_call1(on_end_of_batch,0);
          if(0 === next[0])
           {var result=next[1];return caml_call1(Async_kernel[19],[0,result])}
          var need=next[1];
          return wait_for_read(need)}
        var
         need=Header[1],
         length=caml_call1(Core_kernel_Bigbuffer[12],buffer);
        if(caml_call2(Core_kernel_Int[109],length,need))
         return wait_for_read(need);
        var
         data=caml_call1(Core_kernel_Bigbuffer[22],buffer),
         _hf_=
          process_data(0,data,length,caml_call2(Core_kernel_Queue[60],0,0));
        return caml_call2(Async_kernel[20],_hf_,end_of_batch_and_continue)}
      var of_bigstring=Data[5],For_testing=[0,of_bigstring];
      return [0,sexp_of_t,close,is_closed,read_forever,For_testing]}
    function Pipe_writer(Data)
     {function sexp_of_t(v)
       {var
         v_monitor=v[2],
         v_pipe=v[1],
         _he_=Data[1],
         arg=caml_call1(Async_kernel_Monitor[1],v_monitor),
         bnds=[0,[1,[0,_ga_,[0,arg,0]]],0],
         arg$0=caml_call2(Async_kernel_Pipe[3][1],_he_,v_pipe),
         bnds$0=[0,[1,[0,_gb_,[0,arg$0,0]]],bnds];
        return [1,bnds$0]}
      function close(t)
       {caml_call1(Async_kernel_Pipe[14],t[1]);
        return Async_kernel_Deferred[18]}
      function is_closed(t){return caml_call1(Async_kernel_Pipe[16],t[1])}
      function monitor(t){return t[2]}
      function bytes_to_write(param){return 0}
      function stopped(t){return caml_call1(Async_kernel_Pipe[17],t[1])}
      function flushed(param){return Async_kernel_Deferred[18]}
      function sent_result(x){return [0,x]}
      function check_closed(t,f)
       {return caml_call1(Async_kernel_Pipe[16],t[1])?0:caml_call1(f,0)}
      function send_bin_prot(t,writer,x)
       {return check_closed
                (t,
                 function(param)
                  {var
                    buf=caml_call3(Bin_prot_Utils[4],_gc_,writer,x),
                    _hd_=caml_call1(Data[5],buf);
                   caml_call2(Async_kernel_Pipe[27],t[1],_hd_);
                   return [0,0]})}
      function send_bin_prot_and_bigstring(t,writer,x,buf,pos,payload_size)
       {return check_closed
                (t,
                 function(param)
                  {var
                    data_size=caml_call1(writer[1],x),
                    data=
                     caml_call2
                      (Core_kernel_Bigstring[110],
                       0,
                       (data_size + Header[1] | 0) + payload_size | 0);
                   caml_call3(Header[3],data,0,data_size + payload_size | 0);
                   var dst_pos=caml_call3(writer[2],data,Header[1],x);
                   caml_call5
                    (Core_kernel_Bigstring[19],
                     buf,
                     pos,
                     data,
                     dst_pos,
                     payload_size);
                   var _hc_=caml_call1(Data[5],data);
                   caml_call2(Async_kernel_Pipe[27],t[1],_hc_);
                   return [0,0]})}
      function send_bin_prot_and_bigstring_no(t,writer,x,buf,pos,len)
       {var r=send_bin_prot_and_bigstring(t,writer,x,buf,pos,len);
        if(typeof r !== "number" && 0 === r[0])
         return [0,Async_kernel_Deferred[18]];
        return r}
      return [0,
              sexp_of_t,
              close,
              is_closed,
              monitor,
              bytes_to_write,
              stopped,
              flushed,
              flushed,
              sent_result,
              check_closed,
              send_bin_prot,
              send_bin_prot_and_bigstring,
              send_bin_prot_and_bigstring_no]}
    var
     sexp_of_t$17=Core_kernel_Bigstring[3],
     length$1=Core_kernel_Bigstring[18],
     add_to_bigbuffer=Core_kernel_Bigbuffer[23];
    function to_bigstring(x){return x}
    function of_bigstring(x){return x}
    var
     Bigstring_data=
      [0,sexp_of_t$17,length$1,add_to_bigbuffer,to_bigstring,of_bigstring],
     sexp_of_t$18=Core_kernel_String[101],
     length$2=caml_ml_string_length,
     add_to_bigbuffer$0=Core_kernel_Bigbuffer[16];
    function to_bigstring$0(x)
     {return caml_call3(Core_kernel_Bigstring[11],0,0,x)}
    function of_bigstring$0(x)
     {return caml_call3(Core_kernel_Bigstring[13],0,0,x)}
    var
     String_data=
      [0,
       sexp_of_t$18,
       length$2,
       add_to_bigbuffer$0,
       to_bigstring$0,
       of_bigstring$0],
     Bigstring_pipe_reader=Pipe_reader(Bigstring_data),
     Bigstring_pipe_writer=Pipe_writer(Bigstring_data),
     String_pipe_reader=Pipe_reader(String_data),
     String_pipe_writer=Pipe_writer(String_data),
     Kind=[0,0,1];
    function create$15(kind,reader$0,writer$0)
     {var
       writer=[0,writer$0,caml_call4(Async_kernel_Monitor[3],0,0,0,0)],
       _ha_=
        kind
         ?caml_call2
           (_bU_[12],
            [0,
             Bigstring_pipe_writer[1],
             Bigstring_pipe_writer[2],
             Bigstring_pipe_writer[3],
             Bigstring_pipe_writer[4],
             Bigstring_pipe_writer[5],
             Bigstring_pipe_writer[6],
             Bigstring_pipe_writer[7],
             Bigstring_pipe_writer[8],
             Bigstring_pipe_writer[11],
             Bigstring_pipe_writer[12],
             Bigstring_pipe_writer[13]],
            writer)
         :caml_call2
           (_bU_[12],
            [0,
             String_pipe_writer[1],
             String_pipe_writer[2],
             String_pipe_writer[3],
             String_pipe_writer[4],
             String_pipe_writer[5],
             String_pipe_writer[6],
             String_pipe_writer[7],
             String_pipe_writer[8],
             String_pipe_writer[11],
             String_pipe_writer[12],
             String_pipe_writer[13]],
            writer),
       reader=create$14(reader$0),
       _hb_=
        kind
         ?caml_call2
           (_bV_[5],
            [0,
             Bigstring_pipe_reader[1],
             Bigstring_pipe_reader[2],
             Bigstring_pipe_reader[3],
             Bigstring_pipe_reader[4]],
            reader)
         :caml_call2
           (_bV_[5],
            [0,
             String_pipe_reader[1],
             String_pipe_reader[2],
             String_pipe_reader[3],
             String_pipe_reader[4]],
            reader);
      return [0,_hb_,_ha_]}
    function Test_reader(Transport_reader)
     {var expect=caml_call3(Core_kernel_Bigstring[11],0,0,cst_FOOBAR123);
      function create_message_buf(message)
       {var
         message_len=caml_call1(Core_kernel_Bigstring[18],message),
         buf=
          caml_call2(Core_kernel_Bigstring[110],0,Header[1] + message_len | 0);
        caml_call3(Header[3],buf,0,message_len);
        caml_call5
         (Core_kernel_Bigstring[19],message,0,buf,Header[1],message_len);
        return buf}
      function create_message(param){return create_message_buf(expect)}
      function on_message(opt,on_message_count,buffer,pos$0,len)
       {if(opt)var sth=opt[1],message=sth;else var message=expect;
        on_message_count[1] = on_message_count[1] + 1 | 0;
        var
         got=caml_call3(Core_kernel_Bigstring[22],buffer,pos$0,len),
         sexpifier=Core_kernel_Bigstring[3],
         equal=0,
         message$0=0,
         here=0;
        function comparator(a_001,b_002)
         {return caml_call2(Core_kernel_Bigstring[1],a_001,b_002)}
        caml_call8
         (Ppx_assert_lib_Runtime[3],
          pos,
          sexpifier,
          comparator,
          here,
          message$0,
          equal,
          message,
          got);
        return 0}
      function on_end_of_batch(on_end_of_batch_count,param)
       {on_end_of_batch_count[1]++;return 0}
      function wait(param)
       {return caml_call1(Async_kernel_Async_kernel_sche[33][1],0)}
      function run_test(run,verify)
       {var
         match=caml_call2(Async_kernel_Pipe[7],0,0),
         writer=match[2],
         reader=match[1],
         reader$0=create$14(reader),
         on_message_count=[0,0],
         on_end_of_batch_count=[0,0],
         _g6_=0;
        function on_message$0(_g9_,_g__,_g$_)
         {return on_message(_g6_,on_message_count,_g9_,_g__,_g$_)}
        function on_end_of_batch$0(_g8_)
         {return on_end_of_batch(on_end_of_batch_count,_g8_)}
        caml_call3
         (Transport_reader[5],reader$0,on_message$0,on_end_of_batch$0);
        wait(0);
        caml_call1
         (run,
          function(x)
           {var _g7_=caml_call1(Transport_reader[1][1],x);
            return caml_call2(Async_kernel_Pipe[27],writer,_g7_)});
        wait(0);
        return caml_call2(verify,on_message_count,on_end_of_batch_count)}
      function verify
       (on_message_count,on_end_of_batch_count,message_count,expect)
       {var
         sexpifier=Core_kernel[340],
         _g4_=on_message_count[1],
         equal=0,
         message=0,
         here=0;
        function comparator(a_003,b_004)
         {return caml_call2(Core_kernel[336],a_003,b_004)}
        caml_call8
         (Ppx_assert_lib_Runtime[3],
          pos$0,
          sexpifier,
          comparator,
          here,
          message,
          equal,
          message_count,
          _g4_);
        var
         sexpifier$0=Core_kernel[340],
         _g5_=on_end_of_batch_count[1],
         equal$0=0,
         message$0=0,
         here$0=0;
        function comparator$0(a_005,b_006)
         {return caml_call2(Core_kernel[336],a_005,b_006)}
        return caml_call8
                (Ppx_assert_lib_Runtime[3],
                 pos$1,
                 sexpifier$0,
                 comparator$0,
                 here$0,
                 message$0,
                 equal$0,
                 expect,
                 _g5_)}
      function write_1_msg_1_chunk(write)
       {return caml_call1(write,create_message(0))}
      function write_1_msg_3_chunk(write)
       {var
         buf=
          create_message_buf(caml_call3(Core_kernel_Bigstring[11],0,0,cst$17)),
         _g3_=caml_call1(Core_kernel_Bigstring[18],expect);
        caml_call3(Header[3],buf,0,_g3_);
        caml_call1(write,buf);
        wait(0);
        var
         msg_len=caml_call1(Core_kernel_Bigstring[18],expect),
         split_at=msg_len / 2 | 0,
         part1=caml_call3(Core_kernel_Bigstring[22],expect,0,split_at),
         part2=
          caml_call3
           (Core_kernel_Bigstring[22],expect,split_at,msg_len - split_at | 0);
        caml_call1(write,part1);
        wait(0);
        return caml_call1(write,part2)}
      function write_2_msg_1_chunk(write)
       {var
         one_msg=create_message_buf(expect),
         two_msg=
          caml_call2(Core_kernel_Bigstring[15],0,[0,one_msg,[0,one_msg,0]]);
        return caml_call1(write,two_msg)}
      function write_2_msg_one_byte_at_a_time(write)
       {var
         one_msg=create_message_buf(expect),
         two_msg=
          caml_call2(Core_kernel_Bigstring[15],0,[0,one_msg,[0,one_msg,0]]),
         _g1_=caml_call1(Core_kernel_Bigstring[18],two_msg) - 1 | 0,
         _g0_=0;
        if(! (_g1_ < 0))
         {var i=_g0_;
          for(;;)
           {caml_call1
             (write,caml_call3(Core_kernel_Bigstring[22],two_msg,i,1));
            wait(0);
            var _g2_=i + 1 | 0;
            if(_g1_ !== i){var i=_g2_;continue}
            break}}
        return 0}
      function _gA_(param)
       {return run_test
                (write_1_msg_1_chunk,
                 function(_gY_)
                  {return function(_gZ_){return verify(_gY_,_gZ_,1,1)}})}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_run_test_write_1_msg_1_chu,
        0,
        cst_src_pipe_transport_ml$0,
        385,
        2,
        61,
        _gA_);
      function _gB_(param)
       {function f(write)
         {write_1_msg_1_chunk(write);return write_1_msg_1_chunk(write)}
        return run_test
                (f,
                 function(_gW_)
                  {return function(_gX_){return verify(_gW_,_gX_,2,1)}})}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_run_test_f_verify_2_1,
        0,
        cst_src_pipe_transport_ml$1,
        387,
        2,
        137,
        _gB_);
      function _gC_(param)
       {return run_test
                (write_1_msg_3_chunk,
                 function(_gU_)
                  {return function(_gV_){return verify(_gU_,_gV_,1,3)}})}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_run_test_write_1_msg_3_chu,
        0,
        cst_src_pipe_transport_ml$2,
        394,
        2,
        65,
        _gC_);
      function _gD_(param)
       {return run_test
                (write_2_msg_1_chunk,
                 function(_gS_)
                  {return function(_gT_){return verify(_gS_,_gT_,2,1)}})}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_run_test_write_2_msg_1_chu,
        0,
        cst_src_pipe_transport_ml$3,
        397,
        2,
        65,
        _gD_);
      function _gE_(param)
       {return run_test
                (write_2_msg_one_byte_at_a_time,
                 function(_gQ_)
                  {return function(_gR_){return verify(_gQ_,_gR_,2,34)}})}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_run_test_write_2_msg_one_b,
        0,
        cst_src_pipe_transport_ml$4,
        400,
        2,
        86,
        _gE_);
      function _gF_(param)
       {function f(write)
         {caml_call1(write,create_message(0));
          wait(0);
          write_1_msg_3_chunk(write);
          wait(0);
          write_2_msg_1_chunk(write);
          wait(0);
          write_2_msg_one_byte_at_a_time(write);
          wait(0);
          return caml_call1(write,create_message(0))}
        return run_test
                (f,
                 function(_gO_)
                  {return function(_gP_){return verify(_gO_,_gP_,7,40)}})}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_run_test_f_verify_7_40,
        0,
        cst_src_pipe_transport_ml$5,
        403,
        2,
        322,
        _gF_);
      function _gG_(param)
       {var
         match=caml_call2(Async_kernel_Pipe[7],0,0),
         writer=match[2],
         reader=match[1],
         reader$0=create$14(reader);
        function on_end_of_batch(param){return 0}
        function write(x)
         {var _gN_=caml_call1(Transport_reader[1][1],x);
          return caml_call2(Async_kernel_Pipe[27],writer,_gN_)}
        var num=[0,0];
        function stop_after_on_message(buffer,pos,len)
         {num[1]++;
          var
           got=caml_call3(Core_kernel_Bigstring[22],buffer,pos,len),
           sexpifier=Core_kernel_Bigstring[3],
           equal=0,
           message=0,
           here=0;
          function comparator(a_007,b_008)
           {return caml_call2(Core_kernel_Bigstring[1],a_007,b_008)}
          caml_call8
           (Ppx_assert_lib_Runtime[3],
            pos$2,
            sexpifier,
            comparator,
            here,
            message,
            equal,
            expect,
            got);
          return _gd_}
        write_2_msg_1_chunk(write);
        caml_call1(Async_kernel_Pipe[14],writer);
        function _gH_(x)
         {if(caml_call1(Core_kernel_Result[27],x))
           {var
             _gL_=
              function(x)
               {if(caml_call1(Core_kernel_Result[27],x))
                 return Async_kernel_Deferred[18];
                throw [0,Assert_failure,_ge_]},
             _gM_=
              caml_call3
               (Transport_reader[5],
                reader$0,
                stop_after_on_message,
                on_end_of_batch);
            return caml_call2(Async_kernel[20],_gM_,_gL_)}
          throw [0,Assert_failure,_gf_]}
        var
         _gI_=
          caml_call3
           (Transport_reader[5],
            reader$0,
            stop_after_on_message,
            on_end_of_batch),
         _gJ_=caml_call2(Async_kernel[20],_gI_,_gH_);
        caml_call1(Async_kernel[6],_gJ_);
        wait(0);
        var
         sexpifier=Core_kernel_Int[101],
         _gK_=num[1],
         expect$0=2,
         equal=0,
         message=0,
         here=0;
        function comparator(a_009,b_010)
         {return caml_call2(Core_kernel_Int[112],a_009,b_010)}
        return caml_call8
                (Ppx_assert_lib_Runtime[3],
                 pos$3,
                 sexpifier,
                 comparator,
                 here,
                 message,
                 equal,
                 expect$0,
                 _gK_)}
      caml_call8
       (Ppx_inline_test_lib_Runtime[5],
        Inline_test_config,
        cst_can_call_read_forever_mult,
        0,
        cst_src_pipe_transport_ml$6,
        422,
        2,
        936,
        _gG_);
      return [0,
              expect,
              create_message_buf,
              create_message,
              on_message,
              on_end_of_batch,
              wait,
              run_test,
              verify,
              write_1_msg_1_chunk,
              write_1_msg_3_chunk,
              write_2_msg_1_chunk,
              write_2_msg_one_byte_at_a_time]}
    function _gg_(param)
     {Test_reader
       ([0,
         String_pipe_reader[5],
         String_pipe_reader[1],
         String_pipe_reader[2],
         String_pipe_reader[3],
         String_pipe_reader[4]]);
      return 0}
    caml_call8
     (Ppx_inline_test_lib_Runtime[6],
      Inline_test_config,
      cst_Test_reader_string,
      0,
      cst_src_pipe_transport_ml$7,
      451,
      0,
      81,
      _gg_);
    function _gh_(param)
     {Test_reader
       ([0,
         Bigstring_pipe_reader[5],
         Bigstring_pipe_reader[1],
         Bigstring_pipe_reader[2],
         Bigstring_pipe_reader[3],
         Bigstring_pipe_reader[4]]);
      return 0}
    caml_call8
     (Ppx_inline_test_lib_Runtime[6],
      Inline_test_config,
      cst_Test_reader_bigstring,
      0,
      cst_src_pipe_transport_ml$8,
      453,
      0,
      84,
      _gh_);
    function Bench_reader(Transport_reader)
     {var
       default_message=
        caml_call3(Core_kernel_Bigstring[11],0,0,cst_FOOBAR123$0);
      function create_message_buf(message)
       {var
         message_len=caml_call1(Core_kernel_Bigstring[18],message),
         buf=
          caml_call2(Core_kernel_Bigstring[110],0,Header[1] + message_len | 0);
        caml_call3(Header[3],buf,0,message_len);
        caml_call5
         (Core_kernel_Bigstring[19],message,0,buf,Header[1],message_len);
        return buf}
      function create_message(param)
       {return create_message_buf(default_message)}
      var
       one_message=create_message(0),
       two_messages=
        caml_call2
         (Core_kernel_Bigstring[15],0,[0,one_message,[0,one_message,0]]),
       msg_len=caml_call1(Core_kernel_Bigstring[18],one_message),
       split_at=msg_len / 2 | 0,
       one_message_p1=
        caml_call3(Core_kernel_Bigstring[22],one_message,0,split_at),
       one_message_p2=
        caml_call3
         (Core_kernel_Bigstring[22],
          one_message,
          split_at,
          msg_len - split_at | 0);
      function on_message(buffer,param,_gz_){return 0}
      function on_end_of_batch(param){return 0}
      function wait(param)
       {return caml_call1(Async_kernel_Async_kernel_sche[33][1],0)}
      function run_test(run)
       {var
         match=caml_call2(Async_kernel_Pipe[7],0,0),
         writer=match[2],
         reader=match[1],
         reader$0=create$14(reader);
        caml_call3(Transport_reader[5],reader$0,on_message,on_end_of_batch);
        wait(0);
        var for$0=0;
        for(;;)
         {caml_call1
           (run,
            function(x)
             {var _gy_=caml_call1(Transport_reader[1][1],x);
              return caml_call2(Async_kernel_Pipe[27],writer,_gy_)});
          var _gx_=for$0 + 1 | 0;
          if(100 !== for$0){var for$0=_gx_;continue}
          return wait(0)}}
      function write_1_msg_1_chunk(write)
       {return caml_call1(write,one_message)}
      var
       buf=
        create_message_buf(caml_call3(Core_kernel_Bigstring[11],0,0,cst$18));
      function write_1_msg_3_chunk(write)
       {var _gw_=caml_call1(Core_kernel_Bigstring[18],one_message);
        caml_call3(Header[3],buf,0,_gw_);
        caml_call1(write,buf);
        caml_call1(write,one_message_p1);
        return caml_call1(write,one_message_p2)}
      function write_2_msg_1_chunk(write)
       {return caml_call1(write,two_messages)}
      function write_2_msg_one_byte_at_a_time(write)
       {var
         _gu_=caml_call1(Core_kernel_Bigstring[18],two_messages) - 1 | 0,
         _gt_=0;
        if(! (_gu_ < 0))
         {var i=_gt_;
          for(;;)
           {caml_call1
             (write,caml_call3(Core_kernel_Bigstring[22],two_messages,i,1));
            var _gv_=i + 1 | 0;
            if(_gu_ !== i){var i=_gv_;continue}
            break}}
        return 0}
      if(Ppx_bench_lib_Benchmark_accumu[3])
       {var f=function(param,_gs_){return run_test(write_1_msg_1_chunk)};
        caml_call8
         (Ppx_bench_lib_Benchmark_accumu[5],
          cst_write_1_msg_1_chunk,
          cst_run_test_write_1_msg_1_chu$0,
          cst_src_pipe_transport_ml$9,
          cst_src_pipe_transport_ml_Benc,
          525,
          2,
          64,
          [0,f])}
      if(Ppx_bench_lib_Benchmark_accumu[3])
       {var
         f$0=
          function(param,_gr_)
           {function f(write)
             {write_1_msg_1_chunk(write);return write_1_msg_1_chunk(write)}
            return run_test(f)};
        caml_call8
         (Ppx_bench_lib_Benchmark_accumu[5],
          cst_write_2_msg_1_chunk,
          cst_let_f_write_write_1_msg_1_,
          cst_src_pipe_transport_ml$10,
          cst_src_pipe_transport_ml_Benc$0,
          527,
          2,
          140,
          [0,f$0])}
      if(Ppx_bench_lib_Benchmark_accumu[3])
       {var f$1=function(param,_gq_){return run_test(write_1_msg_3_chunk)};
        caml_call8
         (Ppx_bench_lib_Benchmark_accumu[5],
          cst_write_1_msg_3_chunk,
          cst_run_test_write_1_msg_3_chu$0,
          cst_src_pipe_transport_ml$11,
          cst_src_pipe_transport_ml_Benc$1,
          534,
          2,
          68,
          [0,f$1])}
      if(Ppx_bench_lib_Benchmark_accumu[3])
       {var f$2=function(param,_gp_){return run_test(write_2_msg_1_chunk)};
        caml_call8
         (Ppx_bench_lib_Benchmark_accumu[5],
          cst_write_2_msg_1_chunk$0,
          cst_run_test_write_2_msg_1_chu$0,
          cst_src_pipe_transport_ml$12,
          cst_src_pipe_transport_ml_Benc$2,
          537,
          2,
          68,
          [0,f$2])}
      if(Ppx_bench_lib_Benchmark_accumu[3])
       {var
         f$3=
          function(param,_go_)
           {return run_test(write_2_msg_one_byte_at_a_time)};
        caml_call8
         (Ppx_bench_lib_Benchmark_accumu[5],
          cst_write_2_msg_one_byte,
          cst_run_test_write_2_msg_one_b$0,
          cst_src_pipe_transport_ml$13,
          cst_src_pipe_transport_ml_Benc$3,
          540,
          2,
          89,
          [0,f$3])}
      if(Ppx_bench_lib_Benchmark_accumu[3])
       {var
         f$4=
          function(param,_gn_)
           {function f(write)
             {caml_call1(write,create_message(0));
              write_1_msg_3_chunk(write);
              write_2_msg_1_chunk(write);
              write_2_msg_one_byte_at_a_time(write);
              return caml_call1(write,create_message(0))}
            return run_test(f)};
        caml_call8
         (Ppx_bench_lib_Benchmark_accumu[5],
          cst_multi,
          cst_let_f_write_write_create_m,
          cst_src_pipe_transport_ml$14,
          cst_src_pipe_transport_ml_Benc$4,
          543,
          2,
          246,
          [0,f$4])}
      return [0,
              default_message,
              create_message_buf,
              create_message,
              one_message,
              two_messages,
              one_message_p1,
              one_message_p2,
              on_message,
              on_end_of_batch,
              wait,
              run_test,
              write_1_msg_1_chunk,
              buf,
              write_1_msg_3_chunk,
              write_2_msg_1_chunk,
              write_2_msg_one_byte_at_a_time]}
    if(Ppx_bench_lib_Benchmark_accumu[3])
     {var
       _gi_=
        function(param)
         {Bench_reader
           ([0,
             String_pipe_reader[5],
             String_pipe_reader[1],
             String_pipe_reader[2],
             String_pipe_reader[3],
             String_pipe_reader[4]]);
          return 0};
      caml_call8
       (Ppx_bench_lib_Benchmark_accumu[6],
        cst_Test_reader_string$0,
        cst$19,
        cst_src_pipe_transport_ml$16,
        cst_src_pipe_transport_ml$15,
        554,
        0,
        83,
        _gi_)}
    if(Ppx_bench_lib_Benchmark_accumu[3])
     {var
       _gj_=
        function(param)
         {Bench_reader
           ([0,
             Bigstring_pipe_reader[5],
             Bigstring_pipe_reader[1],
             Bigstring_pipe_reader[2],
             Bigstring_pipe_reader[3],
             Bigstring_pipe_reader[4]]);
          return 0};
      caml_call8
       (Ppx_bench_lib_Benchmark_accumu[6],
        cst_Test_reader_bigstring$0,
        cst$20,
        cst_src_pipe_transport_ml$18,
        cst_src_pipe_transport_ml$17,
        556,
        0,
        86,
        _gj_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$49);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_rpc_kernel_Pipe_tran$0);
    var Async_rpc_kernel_Pipe_transpor=[0,Kind,create$15];
    caml_register_global
     (815,Async_rpc_kernel_Pipe_transpor,"Async_rpc_kernel__Pipe_transport");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_rpc_kernel_Persisten);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_rpc_kernel$50);
    caml_call1(Expect_test_collector[4][1],cst_src_persistent_connection_);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$51,cst$21);
    var Make$8=include$6[1],rpc_connection=_f6_[3];
    function close$7(t)
     {var _gm_=caml_call1(rpc_connection,t);
      return caml_call3(_e0_[8],0,0,_gm_)}
    function is_closed$5(t)
     {var _gl_=caml_call1(rpc_connection,t);return caml_call1(_e0_[11],_gl_)}
    function close_finished$0(t)
     {var _gk_=caml_call1(rpc_connection,t);return caml_call1(_e0_[9],_gk_)}
    var
     Versioned_rpc=
      caml_call1
       (Make$8,
        [0,
         [0,Core_kernel_Host_and_port[14],Core_kernel_Host_and_port[24]],
         close$7,
         is_closed$5,
         close_finished$0]);
    function close$8(t){return caml_call3(_e0_[8],0,0,t)}
    function is_closed$6(t){return caml_call1(_e0_[11],t)}
    function close_finished$1(t){return caml_call1(_e0_[9],t)}
    var
     Rpc$0=
      caml_call1
       (Make$8,
        [0,
         [0,Core_kernel_Host_and_port[14],Core_kernel_Host_and_port[24]],
         close$8,
         is_closed$6,
         close_finished$1]);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$52);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_rpc_kernel_Persisten$0);
    var Async_rpc_kernel_Persistent_co=[0,Rpc$0,Versioned_rpc];
    caml_register_global
     (818,
      Async_rpc_kernel_Persistent_co,
      "Async_rpc_kernel__Persistent_connection");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_rpc_kernel);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_rpc_kernel$53);
    caml_call1(Expect_test_collector[4][1],cst_src_async_rpc_kernel_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_rpc_kernel$54,cst$22);
    var
     Async_rpc_kernel_stable=[0],
     Async_rpc_kernel_private=[0,default_handshake_timeout];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_rpc_kernel$55);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_rpc_kernel$0);
    var
     Async_rpc_kernel$0=
      [0,Async_rpc_kernel_stable,Async_rpc_kernel_private];
    caml_register_global(819,Async_rpc_kernel$0,"Async_rpc_kernel");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJhc3luY19ycGNfa2VybmVsLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
