(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_int_compare=runtime.caml_int_compare,
     caml_list_of_js_array=runtime.caml_list_of_js_array,
     caml_register_global=runtime.caml_register_global,
     caml_string_compare=runtime.caml_string_compare,
     caml_string_notequal=runtime.caml_string_notequal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_trampoline=runtime.caml_trampoline,
     caml_trampoline_return=runtime.caml_trampoline_return,
     caml_update_dummy=runtime.caml_update_dummy,
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
    function caml_call28
     (f,
      a0,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      a10,
      a11,
      a12,
      a13,
      a14,
      a15,
      a16,
      a17,
      a18,
      a19,
      a20,
      a21,
      a22,
      a23,
      a24,
      a25,
      a26,
      a27)
     {return f.length == 28
              ?f
                (a0,
                 a1,
                 a2,
                 a3,
                 a4,
                 a5,
                 a6,
                 a7,
                 a8,
                 a9,
                 a10,
                 a11,
                 a12,
                 a13,
                 a14,
                 a15,
                 a16,
                 a17,
                 a18,
                 a19,
                 a20,
                 a21,
                 a22,
                 a23,
                 a24,
                 a25,
                 a26,
                 a27)
              :runtime.caml_call_gen
                (f,
                 [a0,
                  a1,
                  a2,
                  a3,
                  a4,
                  a5,
                  a6,
                  a7,
                  a8,
                  a9,
                  a10,
                  a11,
                  a12,
                  a13,
                  a14,
                  a15,
                  a16,
                  a17,
                  a18,
                  a19,
                  a20,
                  a21,
                  a22,
                  a23,
                  a24,
                  a25,
                  a26,
                  a27])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Async_kernel_Time_ns=caml_string_of_jsbytes("Async_kernel__Time_ns"),
     cst_async_kernel=caml_string_of_jsbytes("async_kernel"),
     cst_src_time_ns_ml=caml_string_of_jsbytes("src/time_ns.ml"),
     cst=caml_string_of_jsbytes(""),
     cst_async_kernel$0=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$1=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Time_ns$0=
      caml_string_of_jsbytes("Async_kernel__Time_ns"),
     cst_Here_is_an_explanation_of_=
      caml_string_of_jsbytes("\n\nHere is an explanation of each field.\n"),
     cst_environment_variable_affec=
      caml_string_of_jsbytes
       (" environment variable affects Async\nin various ways.  Its value should be a sexp of the following form,\nwhere all fields are optional:\n\n"),
     cst_The=caml_string_of_jsbytes("The "),
     cst$2=caml_string_of_jsbytes(")"),
     cst_default$1=caml_string_of_jsbytes(" (default "),
     cst$3=caml_string_of_jsbytes("\n"),
     cst_min=caml_string_of_jsbytes("min "),
     cst$1=caml_string_of_jsbytes("    "),
     cst_A_list_of_tags_specifying_=
      caml_string_of_jsbytes
       ("\n  A list of tags specifying which Async functions should print debug\n  messages to stderr.  Each tag identifies a group of related Async\n  functions.  The tag [all] means to print debug messages for all\n  functions.  Allowed values are:\n\n"),
     cst_This_determines_what_OS_su=
      caml_string_of_jsbytes
       ("\n  This determines what OS subsystem Async uses to watch file descriptors for being ready.\n  The default is to use [epoll] if timerfd's are supported and if not, use [select].\n\n  Allowed values are:"),
     level_bits=[0,14,[0,15,[0,9,[0,6,0]]]],
     level_bits$0=[0,10,[0,10,[0,9,0]]],
     cst_max_num_open_file_descrs$0=
      caml_string_of_jsbytes("max_num_open_file_descrs"),
     cst_abort_after_thread_pool_st$0=
      caml_string_of_jsbytes("abort_after_thread_pool_stuck_for"),
     cst_check_invariants$0=caml_string_of_jsbytes("check_invariants"),
     cst_detect_invalid_access_from$0=
      caml_string_of_jsbytes("detect_invalid_access_from_thread"),
     cst_dump_core_on_job_delay$0=
      caml_string_of_jsbytes("dump_core_on_job_delay"),
     cst_epoll_max_ready_events$0=
      caml_string_of_jsbytes("epoll_max_ready_events"),
     cst_file_descr_watcher$2=caml_string_of_jsbytes("file_descr_watcher"),
     cst_max_inter_cycle_timeout$0=
      caml_string_of_jsbytes("max_inter_cycle_timeout"),
     cst_max_num_jobs_per_priority_$0=
      caml_string_of_jsbytes("max_num_jobs_per_priority_per_cycle"),
     cst_max_num_threads$0=caml_string_of_jsbytes("max_num_threads"),
     cst_min_inter_cycle_timeout$0=
      caml_string_of_jsbytes("min_inter_cycle_timeout"),
     cst_print_debug_messages_for$0=
      caml_string_of_jsbytes("print_debug_messages_for"),
     cst_record_backtraces$0=caml_string_of_jsbytes("record_backtraces"),
     cst_report_thread_pool_stuck_f$0=
      caml_string_of_jsbytes("report_thread_pool_stuck_for"),
     cst_thread_pool_cpu_affinity$0=
      caml_string_of_jsbytes("thread_pool_cpu_affinity"),
     cst_timing_wheel_config$0=caml_string_of_jsbytes("timing_wheel_config"),
     cst_Epoll=caml_string_of_jsbytes("Epoll"),
     cst_Epoll_if_timerfd=caml_string_of_jsbytes("Epoll_if_timerfd"),
     cst_Select=caml_string_of_jsbytes("Select"),
     cst_epoll=caml_string_of_jsbytes("epoll"),
     cst_epoll_if_timerfd=caml_string_of_jsbytes("epoll_if_timerfd"),
     cst_select=caml_string_of_jsbytes("select"),
     cst_Epoll$0=caml_string_of_jsbytes("Epoll"),
     cst_Epoll_if_timerfd$0=caml_string_of_jsbytes("Epoll_if_timerfd"),
     cst_Select$0=caml_string_of_jsbytes("Select"),
     cst_epoll$0=caml_string_of_jsbytes("epoll"),
     cst_epoll_if_timerfd$0=caml_string_of_jsbytes("epoll_if_timerfd"),
     cst_select$0=caml_string_of_jsbytes("select"),
     cst_all=caml_string_of_jsbytes("all"),
     cst_Monitor_send_exn=caml_string_of_jsbytes("Monitor_send_exn"),
     cst_All=caml_string_of_jsbytes("All"),
     cst_Clock=caml_string_of_jsbytes("Clock"),
     cst_Fd=caml_string_of_jsbytes("Fd"),
     cst_File_descr_watcher=caml_string_of_jsbytes("File_descr_watcher"),
     cst_Finalizers=caml_string_of_jsbytes("Finalizers"),
     cst_Interruptor=caml_string_of_jsbytes("Interruptor"),
     cst_Monitor=caml_string_of_jsbytes("Monitor"),
     cst_Parallel=caml_string_of_jsbytes("Parallel"),
     cst_Reader=caml_string_of_jsbytes("Reader"),
     cst_Scheduler=caml_string_of_jsbytes("Scheduler"),
     cst_Shutdown=caml_string_of_jsbytes("Shutdown"),
     cst_Thread_pool=caml_string_of_jsbytes("Thread_pool"),
     cst_Thread_safe=caml_string_of_jsbytes("Thread_safe"),
     cst_Writer=caml_string_of_jsbytes("Writer"),
     cst_parallel=caml_string_of_jsbytes("parallel"),
     cst_clock=caml_string_of_jsbytes("clock"),
     cst_fd=caml_string_of_jsbytes("fd"),
     cst_file_descr_watcher=caml_string_of_jsbytes("file_descr_watcher"),
     cst_finalizers=caml_string_of_jsbytes("finalizers"),
     cst_interruptor=caml_string_of_jsbytes("interruptor"),
     cst_monitor=caml_string_of_jsbytes("monitor"),
     cst_monitor_send_exn=caml_string_of_jsbytes("monitor_send_exn"),
     cst_reader=caml_string_of_jsbytes("reader"),
     cst_scheduler=caml_string_of_jsbytes("scheduler"),
     cst_shutdown=caml_string_of_jsbytes("shutdown"),
     cst_thread_pool=caml_string_of_jsbytes("thread_pool"),
     cst_thread_safe=caml_string_of_jsbytes("thread_safe"),
     cst_writer=caml_string_of_jsbytes("writer"),
     cst_all$0=caml_string_of_jsbytes("all"),
     cst_Monitor_send_exn$0=caml_string_of_jsbytes("Monitor_send_exn"),
     cst_All$0=caml_string_of_jsbytes("All"),
     cst_Clock$0=caml_string_of_jsbytes("Clock"),
     cst_Fd$0=caml_string_of_jsbytes("Fd"),
     cst_File_descr_watcher$0=caml_string_of_jsbytes("File_descr_watcher"),
     cst_Finalizers$0=caml_string_of_jsbytes("Finalizers"),
     cst_Interruptor$0=caml_string_of_jsbytes("Interruptor"),
     cst_Monitor$0=caml_string_of_jsbytes("Monitor"),
     cst_Parallel$0=caml_string_of_jsbytes("Parallel"),
     cst_Reader$0=caml_string_of_jsbytes("Reader"),
     cst_Scheduler$0=caml_string_of_jsbytes("Scheduler"),
     cst_Shutdown$0=caml_string_of_jsbytes("Shutdown"),
     cst_Thread_pool$0=caml_string_of_jsbytes("Thread_pool"),
     cst_Thread_safe$0=caml_string_of_jsbytes("Thread_safe"),
     cst_Writer$0=caml_string_of_jsbytes("Writer"),
     cst_parallel$0=caml_string_of_jsbytes("parallel"),
     cst_clock$0=caml_string_of_jsbytes("clock"),
     cst_fd$0=caml_string_of_jsbytes("fd"),
     cst_file_descr_watcher$0=caml_string_of_jsbytes("file_descr_watcher"),
     cst_finalizers$0=caml_string_of_jsbytes("finalizers"),
     cst_interruptor$0=caml_string_of_jsbytes("interruptor"),
     cst_monitor$0=caml_string_of_jsbytes("monitor"),
     cst_monitor_send_exn$0=caml_string_of_jsbytes("monitor_send_exn"),
     cst_reader$0=caml_string_of_jsbytes("reader"),
     cst_scheduler$0=caml_string_of_jsbytes("scheduler"),
     cst_shutdown$0=caml_string_of_jsbytes("shutdown"),
     cst_thread_pool$0=caml_string_of_jsbytes("thread_pool"),
     cst_thread_safe$0=caml_string_of_jsbytes("thread_safe"),
     cst_writer$0=caml_string_of_jsbytes("writer"),
     cst_Do_not_watch=caml_string_of_jsbytes("Do_not_watch"),
     cst_Watch=caml_string_of_jsbytes("Watch"),
     cst_do_not_watch=caml_string_of_jsbytes("do_not_watch"),
     cst_watch=caml_string_of_jsbytes("watch"),
     cst_Do_not_watch$0=caml_string_of_jsbytes("Do_not_watch"),
     cst_Watch$0=caml_string_of_jsbytes("Watch"),
     cst_do_not_watch$0=caml_string_of_jsbytes("do_not_watch"),
     cst_watch$0=caml_string_of_jsbytes("watch"),
     cst_dump_if_delayed_by=caml_string_of_jsbytes("dump_if_delayed_by"),
     cst_how_to_dump=caml_string_of_jsbytes("how_to_dump"),
     cst_how_to_dump$0=caml_string_of_jsbytes("how_to_dump"),
     cst_dump_if_delayed_by$0=caml_string_of_jsbytes("dump_if_delayed_by"),
     cst_Call_abort=caml_string_of_jsbytes("Call_abort"),
     cst_Call_gcore=caml_string_of_jsbytes("Call_gcore"),
     cst_Default=caml_string_of_jsbytes("Default"),
     cst_call_abort=caml_string_of_jsbytes("call_abort"),
     cst_call_gcore=caml_string_of_jsbytes("call_gcore"),
     cst_default=caml_string_of_jsbytes("default"),
     cst_Call_abort$0=caml_string_of_jsbytes("Call_abort"),
     cst_Call_gcore$0=caml_string_of_jsbytes("Call_gcore"),
     cst_Default$0=caml_string_of_jsbytes("Default"),
     cst_call_abort$0=caml_string_of_jsbytes("call_abort"),
     cst_call_gcore$0=caml_string_of_jsbytes("call_gcore"),
     cst_default$0=caml_string_of_jsbytes("default"),
     cst_Async_kernel_Async_kernel_=
      caml_string_of_jsbytes("Async_kernel__Async_kernel_config"),
     cst_async_kernel$2=caml_string_of_jsbytes("async_kernel"),
     cst_src_async_kernel_config_ml=
      caml_string_of_jsbytes("src/async_kernel_config.ml"),
     cst$0=caml_string_of_jsbytes(""),
     cst_async_kernel$3=caml_string_of_jsbytes("async_kernel"),
     here=[0,caml_string_of_jsbytes("src/async_kernel_config.ml"),13,267,282],
     here$0=
      [0,caml_string_of_jsbytes("src/async_kernel_config.ml"),20,421,436],
     here$1=
      [0,caml_string_of_jsbytes("src/async_kernel_config.ml"),27,588,603],
     here$2=
      [0,caml_string_of_jsbytes("src/async_kernel_config.ml"),35,766,783],
     here$3=
      [0,caml_string_of_jsbytes("src/async_kernel_config.ml"),46,986,1001],
     here$4=
      [0,caml_string_of_jsbytes("src/async_kernel_config.ml"),53,1143,1158],
     tp_loc=
      caml_string_of_jsbytes
       ("src/async_kernel_config.ml.Dump_core_on_job_delay.How_to_dump.t"),
     tp_loc$0=
      caml_string_of_jsbytes
       ("src/async_kernel_config.ml.Dump_core_on_job_delay.watch"),
     tp_loc$1=
      caml_string_of_jsbytes
       ("src/async_kernel_config.ml.Dump_core_on_job_delay.t"),
     tp_loc$2=
      caml_string_of_jsbytes("src/async_kernel_config.ml.Debug_tag.T.t"),
     list=caml_list_of_js_array([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),
     tp_loc$3=
      caml_string_of_jsbytes
       ("src/async_kernel_config.ml.File_descr_watcher.T.t"),
     list$0=[0,0,[0,1,[0,2,0]]],
     cst_timing_wheel_config=caml_string_of_jsbytes("timing_wheel_config"),
     cst_thread_pool_cpu_affinity=
      caml_string_of_jsbytes("thread_pool_cpu_affinity"),
     cst_report_thread_pool_stuck_f=
      caml_string_of_jsbytes("report_thread_pool_stuck_for"),
     cst_record_backtraces=caml_string_of_jsbytes("record_backtraces"),
     cst_print_debug_messages_for=
      caml_string_of_jsbytes("print_debug_messages_for"),
     cst_min_inter_cycle_timeout=
      caml_string_of_jsbytes("min_inter_cycle_timeout"),
     cst_max_num_jobs_per_priority_=
      caml_string_of_jsbytes("max_num_jobs_per_priority_per_cycle"),
     cst_max_num_threads=caml_string_of_jsbytes("max_num_threads"),
     cst_max_num_open_file_descrs=
      caml_string_of_jsbytes("max_num_open_file_descrs"),
     cst_max_inter_cycle_timeout=
      caml_string_of_jsbytes("max_inter_cycle_timeout"),
     cst_file_descr_watcher$1=caml_string_of_jsbytes("file_descr_watcher"),
     cst_epoll_max_ready_events=
      caml_string_of_jsbytes("epoll_max_ready_events"),
     cst_dump_core_on_job_delay=
      caml_string_of_jsbytes("dump_core_on_job_delay"),
     cst_detect_invalid_access_from=
      caml_string_of_jsbytes("detect_invalid_access_from_thread"),
     cst_check_invariants=caml_string_of_jsbytes("check_invariants"),
     cst_abort_after_thread_pool_st=
      caml_string_of_jsbytes("abort_after_thread_pool_stuck_for"),
     tp_loc$4=caml_string_of_jsbytes("src/async_kernel_config.ml.t"),
     empty=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
     environment_variable=caml_string_of_jsbytes("ASYNC_CONFIG"),
     cst$4=caml_string_of_jsbytes(""),
     cst_async_kernel$4=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Async_kernel_$0=
      caml_string_of_jsbytes("Async_kernel__Async_kernel_config"),
     cst_Async_kernel_Debug=caml_string_of_jsbytes("Async_kernel__Debug"),
     cst_async_kernel$5=caml_string_of_jsbytes("async_kernel"),
     cst_src_debug_ml=caml_string_of_jsbytes("src/debug.ml"),
     cst$5=caml_string_of_jsbytes(""),
     cst_async_kernel$6=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$7=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Debug$0=caml_string_of_jsbytes("Async_kernel__Debug"),
     cst_Async_kernel_Import=caml_string_of_jsbytes("Async_kernel__Import"),
     cst_async_kernel$8=caml_string_of_jsbytes("async_kernel"),
     cst_src_import_ml=caml_string_of_jsbytes("src/import.ml"),
     cst$6=caml_string_of_jsbytes(""),
     cst_async_kernel$9=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$10=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Import$0=caml_string_of_jsbytes("Async_kernel__Import"),
     cst_Async_kernel_Priority=
      caml_string_of_jsbytes("Async_kernel__Priority"),
     cst_async_kernel$11=caml_string_of_jsbytes("async_kernel"),
     cst_src_priority_ml=caml_string_of_jsbytes("src/priority.ml"),
     cst$7=caml_string_of_jsbytes(""),
     cst_async_kernel$12=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$13=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Priority$0=
      caml_string_of_jsbytes("Async_kernel__Priority"),
     cst_Async_kernel_Types=caml_string_of_jsbytes("Async_kernel__Types"),
     cst_async_kernel$14=caml_string_of_jsbytes("async_kernel"),
     cst_src_types_ml=caml_string_of_jsbytes("src/types.ml"),
     cst$8=caml_string_of_jsbytes(""),
     cst_async_kernel$15=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$16=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Types$0=caml_string_of_jsbytes("Async_kernel__Types"),
     cst_id$0=caml_string_of_jsbytes("id"),
     cst_created_monitor=caml_string_of_jsbytes("created monitor"),
     cst_Async_kernel_Monitor0=
      caml_string_of_jsbytes("Async_kernel__Monitor0"),
     cst_async_kernel$17=caml_string_of_jsbytes("async_kernel"),
     cst_src_monitor0_ml=caml_string_of_jsbytes("src/monitor0.ml"),
     cst$9=caml_string_of_jsbytes(""),
     cst_async_kernel$18=caml_string_of_jsbytes("async_kernel"),
     names=
      [0,
       caml_string_of_jsbytes("name"),
       [0,
        caml_string_of_jsbytes("here"),
        [0,
         caml_string_of_jsbytes("id"),
         [0,
          caml_string_of_jsbytes("parent"),
          [0,
           caml_string_of_jsbytes("next_error"),
           [0,
            caml_string_of_jsbytes("handlers_for_all_errors"),
            [0,
             caml_string_of_jsbytes("tails_for_all_errors"),
             [0,
              caml_string_of_jsbytes("has_seen_error"),
              [0,caml_string_of_jsbytes("is_detached"),0]]]]]]]]],
     cst_is_detached=caml_string_of_jsbytes("is_detached"),
     cst_has_seen_error=caml_string_of_jsbytes("has_seen_error"),
     cst_tails_for_all_errors=caml_string_of_jsbytes("tails_for_all_errors"),
     cst_handlers_for_all_errors=
      caml_string_of_jsbytes("handlers_for_all_errors"),
     cst_next_error=caml_string_of_jsbytes("next_error"),
     cst_parent=caml_string_of_jsbytes("parent"),
     cst_id=caml_string_of_jsbytes("id"),
     cst_here=caml_string_of_jsbytes("here"),
     cst_name=caml_string_of_jsbytes("name"),
     cst_async_kernel$19=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Monitor0$0=
      caml_string_of_jsbytes("Async_kernel__Monitor0"),
     cst_Async_kernel_Execution_con=
      caml_string_of_jsbytes("Async_kernel__Execution_context"),
     cst_async_kernel$20=caml_string_of_jsbytes("async_kernel"),
     cst_src_execution_context_ml=
      caml_string_of_jsbytes("src/execution_context.ml"),
     cst$10=caml_string_of_jsbytes(""),
     cst_async_kernel$21=caml_string_of_jsbytes("async_kernel"),
     names$0=
      [0,
       caml_string_of_jsbytes("monitor"),
       [0,
        caml_string_of_jsbytes("priority"),
        [0,
         caml_string_of_jsbytes("local_storage"),
         [0,caml_string_of_jsbytes("backtrace_history"),0]]]],
     cst_backtrace_history=caml_string_of_jsbytes("backtrace_history"),
     cst_local_storage=caml_string_of_jsbytes("local_storage"),
     cst_priority=caml_string_of_jsbytes("priority"),
     cst_monitor$1=caml_string_of_jsbytes("monitor"),
     cst_async_kernel$22=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Execution_con$0=
      caml_string_of_jsbytes("Async_kernel__Execution_context"),
     cst_Async_kernel_External_job=
      caml_string_of_jsbytes("Async_kernel__External_job"),
     cst_async_kernel$23=caml_string_of_jsbytes("async_kernel"),
     cst_src_external_job_ml=caml_string_of_jsbytes("src/external_job.ml"),
     cst$11=caml_string_of_jsbytes(""),
     cst_async_kernel$24=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$25=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_External_job$0=
      caml_string_of_jsbytes("Async_kernel__External_job"),
     cst_Async_kernel_Job_pool=
      caml_string_of_jsbytes("Async_kernel__Job_pool"),
     cst_async_kernel$26=caml_string_of_jsbytes("async_kernel"),
     cst_src_job_pool_ml=caml_string_of_jsbytes("src/job_pool.ml"),
     cst$12=caml_string_of_jsbytes(""),
     cst_async_kernel$27=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$28=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Job_pool$0=
      caml_string_of_jsbytes("Async_kernel__Job_pool"),
     cst_Async_kernel_Job=caml_string_of_jsbytes("Async_kernel__Job"),
     cst_async_kernel$29=caml_string_of_jsbytes("async_kernel"),
     cst_src_job_ml=caml_string_of_jsbytes("src/job.ml"),
     cst$13=caml_string_of_jsbytes(""),
     cst_async_kernel$30=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$31=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Job$0=caml_string_of_jsbytes("Async_kernel__Job"),
     cst_Async_kernel_Job_or_event=
      caml_string_of_jsbytes("Async_kernel__Job_or_event"),
     cst_async_kernel$32=caml_string_of_jsbytes("async_kernel"),
     cst_src_job_or_event_ml=caml_string_of_jsbytes("src/job_or_event.ml"),
     cst$14=caml_string_of_jsbytes(""),
     cst_async_kernel$33=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$34=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Job_or_event$0=
      caml_string_of_jsbytes("Async_kernel__Job_or_event"),
     cst_Async_kernel_Job_or_event_=
      caml_string_of_jsbytes("Async_kernel__Job_or_event_intf"),
     cst_async_kernel$35=caml_string_of_jsbytes("async_kernel"),
     cst_src_job_or_event_intf_ml=
      caml_string_of_jsbytes("src/job_or_event_intf.ml"),
     cst$15=caml_string_of_jsbytes(""),
     cst_async_kernel$36=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$37=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Job_or_event_$0=
      caml_string_of_jsbytes("Async_kernel__Job_or_event_intf"),
     cst_Async_kernel_Scheduler0=
      caml_string_of_jsbytes("Async_kernel__Scheduler0"),
     cst_async_kernel$38=caml_string_of_jsbytes("async_kernel"),
     cst_src_scheduler0_ml=caml_string_of_jsbytes("src/scheduler0.ml"),
     cst$16=caml_string_of_jsbytes(""),
     cst_async_kernel$39=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$40=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Scheduler0$0=
      caml_string_of_jsbytes("Async_kernel__Scheduler0"),
     cst_Jobs_set_jobs_left_this_cy=
      caml_string_of_jsbytes
       ("Jobs.set_jobs_left_this_cycle got negative number"),
     cst_Async_kernel_Job_queue=
      caml_string_of_jsbytes("Async_kernel__Job_queue"),
     cst_async_kernel$41=caml_string_of_jsbytes("async_kernel"),
     cst_src_job_queue_ml=caml_string_of_jsbytes("src/job_queue.ml"),
     cst$17=caml_string_of_jsbytes(""),
     cst_async_kernel$42=caml_string_of_jsbytes("async_kernel"),
     cst_length=caml_string_of_jsbytes("length"),
     cst_front=caml_string_of_jsbytes("front"),
     cst_mask=caml_string_of_jsbytes("mask"),
     cst_jobs=caml_string_of_jsbytes("jobs"),
     cst_jobs_left_this_cycle=caml_string_of_jsbytes("jobs_left_this_cycle"),
     cst_num_jobs_run=caml_string_of_jsbytes("num_jobs_run"),
     cst_async_kernel$43=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Job_queue$0=
      caml_string_of_jsbytes("Async_kernel__Job_queue"),
     cst_cannot_call_advance_by_ala=
      caml_string_of_jsbytes("cannot call [advance_by_alarms] from callback"),
     cst_Synchronous_time_source_Ev=
      caml_string_of_jsbytes
       ("[Synchronous_time_source.Event.Option.value_exn None]"),
     cst_cannot_schedule_an_event_w=
      caml_string_of_jsbytes("cannot schedule an event with status"),
     cst_Synchronous_time_source_ab=
      caml_string_of_jsbytes
       ("[Synchronous_time_source.abort_exn] cannot abort event"),
     cst_interval_span_smaller_than=
      caml_string_of_jsbytes("interval span smaller than alarm precision"),
     pos$1=caml_string_of_jsbytes("src/synchronous_time_source0.ml:264:32"),
     pos$0=caml_string_of_jsbytes("src/synchronous_time_source0.ml:263:32"),
     cst_wall_clock=caml_string_of_jsbytes("wall_clock"),
     cst_Job_t=caml_string_of_jsbytes("<Job.t>"),
     cst_bug_set_status_transition_=
      caml_string_of_jsbytes("bug -- set_status transition not allowed"),
     cst_src_synchronous_time_sourc$0=
      caml_string_of_jsbytes("src/synchronous_time_source0.ml:153:12"),
     pos=caml_string_of_jsbytes("src/synchronous_time_source0.ml:125:30"),
     cst_none=caml_string_of_jsbytes("none"),
     cst_Y_m_dT_H_M_S_z=caml_string_of_jsbytes("%Y-%m-%dT%H:%M:%S%z"),
     cst_Async_kernel_Synchronous_t=
      caml_string_of_jsbytes("Async_kernel__Synchronous_time_source0"),
     cst_async_kernel$44=caml_string_of_jsbytes("async_kernel"),
     cst_src_synchronous_time_sourc=
      caml_string_of_jsbytes("src/synchronous_time_source0.ml"),
     cst$18=caml_string_of_jsbytes(""),
     cst_async_kernel$45=caml_string_of_jsbytes("async_kernel"),
     names$1=
      [0,
       caml_string_of_jsbytes("alarm"),
       [0,
        caml_string_of_jsbytes("at"),
        [0,
         caml_string_of_jsbytes("callback"),
         [0,
          caml_string_of_jsbytes("execution_context"),
          [0,
           caml_string_of_jsbytes("interval"),
           [0,
            caml_string_of_jsbytes("next_fired"),
            [0,caml_string_of_jsbytes("status"),0]]]]]]],
     cst_status=caml_string_of_jsbytes("status"),
     cst_next_fired=caml_string_of_jsbytes("next_fired"),
     cst_interval=caml_string_of_jsbytes("interval"),
     cst_execution_context=caml_string_of_jsbytes("execution_context"),
     cst_callback=caml_string_of_jsbytes("callback"),
     cst_at=caml_string_of_jsbytes("at"),
     cst_alarm=caml_string_of_jsbytes("alarm"),
     names$2=
      [0,
       caml_string_of_jsbytes("id"),
       [0,
        caml_string_of_jsbytes("advance_errors"),
        [0,
         caml_string_of_jsbytes("am_advancing"),
         [0,
          caml_string_of_jsbytes("events"),
          [0,
           caml_string_of_jsbytes("fired_events"),
           [0,
            caml_string_of_jsbytes("most_recently_fired"),
            [0,
             caml_string_of_jsbytes("handle_fired"),
             [0,
              caml_string_of_jsbytes("is_wall_clock"),
              [0,caml_string_of_jsbytes("scheduler"),0]]]]]]]]],
     cst_scheduler$1=caml_string_of_jsbytes("scheduler"),
     cst_is_wall_clock=caml_string_of_jsbytes("is_wall_clock"),
     cst_handle_fired=caml_string_of_jsbytes("handle_fired"),
     cst_most_recently_fired=caml_string_of_jsbytes("most_recently_fired"),
     cst_fired_events=caml_string_of_jsbytes("fired_events"),
     cst_events=caml_string_of_jsbytes("events"),
     cst_am_advancing=caml_string_of_jsbytes("am_advancing"),
     cst_advance_errors=caml_string_of_jsbytes("advance_errors"),
     cst_id$1=caml_string_of_jsbytes("id"),
     cst_async_kernel$46=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Synchronous_t$0=
      caml_string_of_jsbytes("Async_kernel__Synchronous_time_source0"),
     cst_got_uncaught_exn=caml_string_of_jsbytes("got_uncaught_exn"),
     cst_Scheduler_invariant_failed=
      caml_string_of_jsbytes("Scheduler.invariant failed"),
     cst_unhandled_exception=caml_string_of_jsbytes("unhandled exception"),
     cst_Async_kernel_Scheduler1=
      caml_string_of_jsbytes("Async_kernel__Scheduler1"),
     cst_async_kernel$47=caml_string_of_jsbytes("async_kernel"),
     cst_src_scheduler1_ml=caml_string_of_jsbytes("src/scheduler1.ml"),
     cst$19=caml_string_of_jsbytes(""),
     cst_async_kernel$48=caml_string_of_jsbytes("async_kernel"),
     names$3=
      [0,
       caml_string_of_jsbytes("execution_context"),
       [0,caml_string_of_jsbytes("exec"),0]],
     cst_exec=caml_string_of_jsbytes("exec"),
     cst_execution_context$0=caml_string_of_jsbytes("execution_context"),
     names$4=
      caml_list_of_js_array
       ([caml_string_of_jsbytes("check_access"),
         caml_string_of_jsbytes("job_pool"),
         caml_string_of_jsbytes("normal_priority_jobs"),
         caml_string_of_jsbytes("low_priority_jobs"),
         caml_string_of_jsbytes("very_low_priority_workers"),
         caml_string_of_jsbytes("main_execution_context"),
         caml_string_of_jsbytes("current_execution_context"),
         caml_string_of_jsbytes("uncaught_exn"),
         caml_string_of_jsbytes("cycle_count"),
         caml_string_of_jsbytes("cycle_start"),
         caml_string_of_jsbytes("in_cycle"),
         caml_string_of_jsbytes("run_every_cycle_start"),
         caml_string_of_jsbytes("run_every_cycle_end"),
         caml_string_of_jsbytes("last_cycle_time"),
         caml_string_of_jsbytes("last_cycle_num_jobs"),
         caml_string_of_jsbytes("total_cycle_time"),
         caml_string_of_jsbytes("time_source"),
         caml_string_of_jsbytes("external_jobs"),
         caml_string_of_jsbytes("thread_safe_external_job_hook"),
         caml_string_of_jsbytes("job_queued_hook"),
         caml_string_of_jsbytes("event_added_hook"),
         caml_string_of_jsbytes("yield"),
         caml_string_of_jsbytes("yield_until_no_jobs_remain"),
         caml_string_of_jsbytes("check_invariants"),
         caml_string_of_jsbytes("max_num_jobs_per_priority_per_cycle"),
         caml_string_of_jsbytes("record_backtraces"),
         caml_string_of_jsbytes("on_start_of_cycle"),
         caml_string_of_jsbytes("on_end_of_cycle")]),
     cst_on_end_of_cycle=caml_string_of_jsbytes("on_end_of_cycle"),
     cst_on_start_of_cycle=caml_string_of_jsbytes("on_start_of_cycle"),
     cst_record_backtraces$1=caml_string_of_jsbytes("record_backtraces"),
     cst_max_num_jobs_per_priority_$1=
      caml_string_of_jsbytes("max_num_jobs_per_priority_per_cycle"),
     cst_check_invariants$1=caml_string_of_jsbytes("check_invariants"),
     cst_yield_until_no_jobs_remain=
      caml_string_of_jsbytes("yield_until_no_jobs_remain"),
     cst_yield=caml_string_of_jsbytes("yield"),
     cst_event_added_hook=caml_string_of_jsbytes("event_added_hook"),
     cst_job_queued_hook=caml_string_of_jsbytes("job_queued_hook"),
     cst_thread_safe_external_job_h=
      caml_string_of_jsbytes("thread_safe_external_job_hook"),
     cst_external_jobs=caml_string_of_jsbytes("external_jobs"),
     cst_time_source=caml_string_of_jsbytes("time_source"),
     cst_total_cycle_time=caml_string_of_jsbytes("total_cycle_time"),
     cst_last_cycle_num_jobs=caml_string_of_jsbytes("last_cycle_num_jobs"),
     cst_last_cycle_time=caml_string_of_jsbytes("last_cycle_time"),
     cst_run_every_cycle_end=caml_string_of_jsbytes("run_every_cycle_end"),
     cst_run_every_cycle_start=caml_string_of_jsbytes("run_every_cycle_start"),
     cst_in_cycle=caml_string_of_jsbytes("in_cycle"),
     cst_cycle_start=caml_string_of_jsbytes("cycle_start"),
     cst_cycle_count=caml_string_of_jsbytes("cycle_count"),
     cst_uncaught_exn=caml_string_of_jsbytes("uncaught_exn"),
     cst_current_execution_context=
      caml_string_of_jsbytes("current_execution_context"),
     cst_main_execution_context=
      caml_string_of_jsbytes("main_execution_context"),
     cst_very_low_priority_workers=
      caml_string_of_jsbytes("very_low_priority_workers"),
     cst_low_priority_jobs=caml_string_of_jsbytes("low_priority_jobs"),
     cst_normal_priority_jobs=caml_string_of_jsbytes("normal_priority_jobs"),
     cst_job_pool=caml_string_of_jsbytes("job_pool"),
     cst_check_access=caml_string_of_jsbytes("check_access"),
     cst_Async_cannot_create_its_ra=
      caml_string_of_jsbytes("Async cannot create its raw scheduler"),
     cst_async_kernel$49=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Scheduler1$0=
      caml_string_of_jsbytes("Async_kernel__Scheduler1"),
     cst_Ivar_fill_of_full_ivar=
      caml_string_of_jsbytes("Ivar.fill of full ivar"),
     cst_Ivar_value_exn_called_on_e=
      caml_string_of_jsbytes("Ivar.value_exn called on empty ivar"),
     cst_Async_kernel_Ivar0=caml_string_of_jsbytes("Async_kernel__Ivar0"),
     cst_async_kernel$50=caml_string_of_jsbytes("async_kernel"),
     cst_src_ivar0_ml=caml_string_of_jsbytes("src/ivar0.ml"),
     cst$20=caml_string_of_jsbytes(""),
     cst_async_kernel$51=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$52=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Ivar0$0=caml_string_of_jsbytes("Async_kernel__Ivar0"),
     cst_Deferred_value_exn_called_=
      caml_string_of_jsbytes
       ("Deferred.value_exn called on undetermined deferred"),
     cst_Async_kernel_Deferred0=
      caml_string_of_jsbytes("Async_kernel__Deferred0"),
     cst_async_kernel$53=caml_string_of_jsbytes("async_kernel"),
     cst_src_deferred0_ml=caml_string_of_jsbytes("src/deferred0.ml"),
     cst$21=caml_string_of_jsbytes(""),
     cst_async_kernel$54=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$55=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Deferred0$0=
      caml_string_of_jsbytes("Async_kernel__Deferred0"),
     cst_Async_kernel_Ivar=caml_string_of_jsbytes("Async_kernel__Ivar"),
     cst_async_kernel$56=caml_string_of_jsbytes("async_kernel"),
     cst_src_ivar_ml=caml_string_of_jsbytes("src/ivar.ml"),
     cst$22=caml_string_of_jsbytes(""),
     cst_async_kernel$57=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$58=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Ivar$0=caml_string_of_jsbytes("Async_kernel__Ivar"),
     cst_Async_kernel_Monad_sequenc=
      caml_string_of_jsbytes("Async_kernel__Monad_sequence"),
     cst_async_kernel$59=caml_string_of_jsbytes("async_kernel"),
     cst_src_monad_sequence_ml=caml_string_of_jsbytes("src/monad_sequence.ml"),
     cst$23=caml_string_of_jsbytes(""),
     cst_async_kernel$60=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$61=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Monad_sequenc$0=
      caml_string_of_jsbytes("Async_kernel__Monad_sequence"),
     cst_Async_kernel_Deferred1=
      caml_string_of_jsbytes("Async_kernel__Deferred1"),
     cst_async_kernel$62=caml_string_of_jsbytes("async_kernel"),
     cst_src_deferred1_ml=caml_string_of_jsbytes("src/deferred1.ml"),
     cst$24=caml_string_of_jsbytes(""),
     cst_async_kernel$63=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$64=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Deferred1$0=
      caml_string_of_jsbytes("Async_kernel__Deferred1"),
     cst_Async_kernel_Deferred_std=
      caml_string_of_jsbytes("Async_kernel__Deferred_std"),
     cst_async_kernel$65=caml_string_of_jsbytes("async_kernel"),
     cst_src_deferred_std_ml=caml_string_of_jsbytes("src/deferred_std.ml"),
     cst$25=caml_string_of_jsbytes(""),
     cst_async_kernel$66=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$67=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Deferred_std$0=
      caml_string_of_jsbytes("Async_kernel__Deferred_std"),
     cst_attempt_to_fill_full_ivar=
      caml_string_of_jsbytes("attempt to fill full ivar"),
     cst_Async_kernel_Ivar_filler=
      caml_string_of_jsbytes("Async_kernel__Ivar_filler"),
     cst_async_kernel$68=caml_string_of_jsbytes("async_kernel"),
     cst_src_ivar_filler_ml=caml_string_of_jsbytes("src/ivar_filler.ml"),
     cst$26=caml_string_of_jsbytes(""),
     cst_async_kernel$69=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$70=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Ivar_filler$0=
      caml_string_of_jsbytes("Async_kernel__Ivar_filler"),
     cst_stream_is_closed=caml_string_of_jsbytes("stream is closed"),
     cst_open_tail=caml_string_of_jsbytes("<open tail>"),
     cst_closed_tail=caml_string_of_jsbytes("<closed tail>"),
     cst_Async_kernel_Tail=caml_string_of_jsbytes("Async_kernel__Tail"),
     cst_async_kernel$71=caml_string_of_jsbytes("async_kernel"),
     cst_src_tail_ml=caml_string_of_jsbytes("src/tail.ml"),
     cst$27=caml_string_of_jsbytes(""),
     cst_async_kernel$72=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$73=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Tail$0=caml_string_of_jsbytes("Async_kernel__Tail"),
     cst_Monitor_catch_got_unexpect=
      caml_string_of_jsbytes("Monitor.catch got unexpected empty stream"),
     cst_Async_finally=caml_string_of_jsbytes("Async finally"),
     cst_Monitor_protect=caml_string_of_jsbytes("Monitor.protect"),
     cst_try_with_join_or_error=
      caml_string_of_jsbytes("try_with_join_or_error"),
     cst_try_with_or_error=caml_string_of_jsbytes("try_with_or_error"),
     cst$30=caml_string_of_jsbytes(""),
     cst_failed_to_set_Monitor_Expe=
      caml_string_of_jsbytes
       ("failed to set [Monitor.Expert.try_with_log_exn]"),
     cst_Monitor_send_exn_found_lis=
      caml_string_of_jsbytes("Monitor.send_exn found listening monitor"),
     cst_Monitor_send_exn$1=caml_string_of_jsbytes("Monitor.send_exn"),
     cst_monitor_ml_Error=caml_string_of_jsbytes("monitor.ml.Error"),
     cst$29=caml_string_of_jsbytes(""),
     cst_Async_kernel_Monitor=caml_string_of_jsbytes("Async_kernel__Monitor"),
     cst_async_kernel$74=caml_string_of_jsbytes("async_kernel"),
     cst_src_monitor_ml=caml_string_of_jsbytes("src/monitor.ml"),
     cst$28=caml_string_of_jsbytes(""),
     cst_async_kernel$75=caml_string_of_jsbytes("async_kernel"),
     job_queue=caml_string_of_jsbytes('Called from file "job_queue.ml"'),
     deferred0=caml_string_of_jsbytes('Called from file "deferred0.ml"'),
     deferred1=caml_string_of_jsbytes('Called from file "deferred1.ml"'),
     monitor$2=caml_string_of_jsbytes('Called from file "monitor.ml"'),
     import0=caml_string_of_jsbytes('Raised at file "import0.ml"'),
     error=caml_string_of_jsbytes('Called from file "error.ml"'),
     cst_Async_kernel_Monitor_Error=
      caml_string_of_jsbytes("Async_kernel__Monitor.Error_"),
     cst_async_kernel$76=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Monitor$0=
      caml_string_of_jsbytes("Async_kernel__Monitor"),
     cst_Stream_first_of_empty_stre=
      caml_string_of_jsbytes("Stream.first of empty stream"),
     cst_Async_kernel_Async_stream=
      caml_string_of_jsbytes("Async_kernel__Async_stream"),
     cst_async_kernel$77=caml_string_of_jsbytes("async_kernel"),
     cst_src_async_stream_ml=caml_string_of_jsbytes("src/async_stream.ml"),
     cst$31=caml_string_of_jsbytes(""),
     cst_async_kernel$78=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$79=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Async_stream$0=
      caml_string_of_jsbytes("Async_kernel__Async_stream"),
     cst_Async_kernel_Synchronous_t$1=
      caml_string_of_jsbytes("Async_kernel__Synchronous_time_source"),
     cst_async_kernel$80=caml_string_of_jsbytes("async_kernel"),
     cst_src_synchronous_time_sourc$1=
      caml_string_of_jsbytes("src/synchronous_time_source.ml"),
     cst$32=caml_string_of_jsbytes(""),
     cst_async_kernel$81=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$82=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Synchronous_t$2=
      caml_string_of_jsbytes("Async_kernel__Synchronous_time_source"),
     cst_Async_kernel_Time_source_i=
      caml_string_of_jsbytes("Async_kernel__Time_source_intf"),
     cst_async_kernel$83=caml_string_of_jsbytes("async_kernel"),
     cst_src_time_source_intf_ml=
      caml_string_of_jsbytes("src/time_source_intf.ml"),
     cst$33=caml_string_of_jsbytes(""),
     cst_async_kernel$84=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$85=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Time_source_i$0=
      caml_string_of_jsbytes("Async_kernel__Time_source_intf"),
     cst_Async_kernel_Bvar=caml_string_of_jsbytes("Async_kernel__Bvar"),
     cst_async_kernel$86=caml_string_of_jsbytes("async_kernel"),
     cst_src_bvar_ml=caml_string_of_jsbytes("src/bvar.ml"),
     cst$34=caml_string_of_jsbytes(""),
     cst_async_kernel$87=caml_string_of_jsbytes("async_kernel"),
     cst_ivar=caml_string_of_jsbytes("ivar"),
     cst_has_any_waiters=caml_string_of_jsbytes("has_any_waiters"),
     cst_async_kernel$88=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Bvar$0=caml_string_of_jsbytes("Async_kernel__Bvar"),
     cst_Time_source_with_timeout_b$0=
      caml_string_of_jsbytes
       ("Time_source.with_timeout bug: should only abort once"),
     cst_Time_source_with_timeout_b=
      caml_string_of_jsbytes
       ("Time_source.with_timeout bug: both completed and timed out"),
     cst_Time_source_every_got_nonp=
      caml_string_of_jsbytes("Time_source.every got nonpositive span"),
     cst_Time_source_Event_run_at=
      caml_string_of_jsbytes("Time_source.Event.run_at"),
     cst_Time_source_Event_reschedu=
      caml_string_of_jsbytes("Time_source.Event.reschedule_at"),
     cst_Clock_Event_abort_exn_fail=
      caml_string_of_jsbytes
       ("Clock.Event.abort_exn failed to abort event that previously aborted"),
     cst_Clock_Event_abort_exn_fail$0=
      caml_string_of_jsbytes
       ("Clock.Event.abort_exn failed to abort event that previously happened"),
     cst_Time_source_Event_abort=
      caml_string_of_jsbytes("Time_source.Event.abort"),
     pos$2=caml_string_of_jsbytes("src/time_source.ml:249:30"),
     cst_wall_clock$0=caml_string_of_jsbytes("<wall_clock>"),
     cst_Async_kernel_Time_source=
      caml_string_of_jsbytes("Async_kernel__Time_source"),
     cst_async_kernel$89=caml_string_of_jsbytes("async_kernel"),
     cst_src_time_source_ml=caml_string_of_jsbytes("src/time_source.ml"),
     cst$35=caml_string_of_jsbytes(""),
     cst_async_kernel$90=caml_string_of_jsbytes("async_kernel"),
     cst_scheduled_at=caml_string_of_jsbytes("scheduled_at"),
     cst_num_fires_to_skip=caml_string_of_jsbytes("num_fires_to_skip"),
     cst_fired=caml_string_of_jsbytes("fired"),
     cst_alarm$0=caml_string_of_jsbytes("alarm"),
     cst_async_kernel$91=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Time_source$0=
      caml_string_of_jsbytes("Async_kernel__Time_source"),
     cst_Stack_or_counter_pop_exn_o=
      caml_string_of_jsbytes("[Stack_or_counter.pop_exn] of empty stack"),
     cst_Stack_or_counter_create_co=
      caml_string_of_jsbytes
       ("[Stack_or_counter.create_counter] got negative length"),
     cst_Async_kernel_Stack_or_coun=
      caml_string_of_jsbytes("Async_kernel__Stack_or_counter"),
     cst_async_kernel$92=caml_string_of_jsbytes("async_kernel"),
     cst_src_stack_or_counter_ml=
      caml_string_of_jsbytes("src/stack_or_counter.ml"),
     cst$36=caml_string_of_jsbytes(""),
     cst_async_kernel$93=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$94=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Stack_or_coun$0=
      caml_string_of_jsbytes("Async_kernel__Stack_or_counter"),
     cst_enqueue_exclusive_was_call=
      caml_string_of_jsbytes
       ("[enqueue_exclusive] was called with a very large value of [max_concurrent_jobs]. This doesn't work."),
     cst_throttle_aborted_job=caml_string_of_jsbytes("throttle aborted job"),
     cst_Throttle_create_requires_p=
      caml_string_of_jsbytes
       ("Throttle.create requires positive max_concurrent_jobs, but got"),
     cst_Throttle_invariant_failed=
      caml_string_of_jsbytes("Throttle.invariant failed"),
     cst_Async_kernel_Throttle=
      caml_string_of_jsbytes("Async_kernel__Throttle"),
     cst_async_kernel$95=caml_string_of_jsbytes("async_kernel"),
     cst_src_throttle_ml=caml_string_of_jsbytes("src/throttle.ml"),
     cst$37=caml_string_of_jsbytes(""),
     cst_async_kernel$96=caml_string_of_jsbytes("async_kernel"),
     cst_cleaned=caml_string_of_jsbytes("cleaned"),
     cst_num_resources_not_cleaned=
      caml_string_of_jsbytes("num_resources_not_cleaned"),
     cst_cleans=caml_string_of_jsbytes("cleans"),
     cst_is_dead=caml_string_of_jsbytes("is_dead"),
     cst_capacity_available=caml_string_of_jsbytes("capacity_available"),
     cst_num_jobs_running=caml_string_of_jsbytes("num_jobs_running"),
     cst_jobs_waiting_to_start=caml_string_of_jsbytes("jobs_waiting_to_start"),
     cst_job_resources_not_in_use=
      caml_string_of_jsbytes("job_resources_not_in_use"),
     cst_max_concurrent_jobs=caml_string_of_jsbytes("max_concurrent_jobs"),
     cst_continue_on_error=caml_string_of_jsbytes("continue_on_error"),
     cst_async_kernel$97=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Throttle$0=
      caml_string_of_jsbytes("Async_kernel__Throttle"),
     cst_Scheduler_yield_every_got_=
      caml_string_of_jsbytes("Scheduler.yield_every got nonpositive count"),
     cst_reset_in_forked_process=
      caml_string_of_jsbytes("reset_in_forked_process"),
     cst_Async_scheduler_is_unusabl=
      caml_string_of_jsbytes
       ("Async scheduler is unusable due to [make_async_unusable]"),
     cst_run_cycles_until_no_jobs_r=
      caml_string_of_jsbytes("run_cycles_until_no_jobs_remain starting"),
     cst_run_cycles_until_no_jobs_r$0=
      caml_string_of_jsbytes
       ("run_cycles_until_no_jobs_remain cannot proceed -- scheduler is dead"),
     cst_run_cycles_until_no_jobs_r$1=
      caml_string_of_jsbytes("run_cycles_until_no_jobs_remain finished"),
     cst_run_cycle_starting=caml_string_of_jsbytes("run_cycle starting"),
     cst_run_cycle_finished=caml_string_of_jsbytes("run_cycle finished"),
     cst_enqueueing_finalizer_using=
      caml_string_of_jsbytes("enqueueing finalizer (using 'last' semantic)"),
     cst_adding_finalizer_using_las=
      caml_string_of_jsbytes("adding finalizer (using 'last' semantic)"),
     cst_enqueueing_finalizer=caml_string_of_jsbytes("enqueueing finalizer"),
     cst_adding_finalizer=caml_string_of_jsbytes("adding finalizer"),
     cst_Async_kernel_Scheduler=
      caml_string_of_jsbytes("Async_kernel__Scheduler"),
     cst_async_kernel$98=caml_string_of_jsbytes("async_kernel"),
     cst_src_scheduler_ml=caml_string_of_jsbytes("src/scheduler.ml"),
     cst$38=caml_string_of_jsbytes(""),
     cst_async_kernel$99=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$100=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Scheduler$0=
      caml_string_of_jsbytes("Async_kernel__Scheduler"),
     cst_Async_kernel_Async_kernel_$1=
      caml_string_of_jsbytes("Async_kernel__Async_kernel_scheduler"),
     cst_async_kernel$101=caml_string_of_jsbytes("async_kernel"),
     cst_src_async_kernel_scheduler=
      caml_string_of_jsbytes("src/async_kernel_scheduler.ml"),
     cst$39=caml_string_of_jsbytes(""),
     cst_async_kernel$102=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$103=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Async_kernel_$2=
      caml_string_of_jsbytes("Async_kernel__Async_kernel_scheduler"),
     cst_Async_kernel_Clock_intf=
      caml_string_of_jsbytes("Async_kernel__Clock_intf"),
     cst_async_kernel$104=caml_string_of_jsbytes("async_kernel"),
     cst_src_clock_intf_ml=caml_string_of_jsbytes("src/clock_intf.ml"),
     cst$40=caml_string_of_jsbytes(""),
     cst_async_kernel$105=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$106=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Clock_intf$0=
      caml_string_of_jsbytes("Async_kernel__Clock_intf"),
     cst_Async_kernel_Clock_ns=
      caml_string_of_jsbytes("Async_kernel__Clock_ns"),
     cst_async_kernel$107=caml_string_of_jsbytes("async_kernel"),
     cst_src_clock_ns_ml=caml_string_of_jsbytes("src/clock_ns.ml"),
     cst$41=caml_string_of_jsbytes(""),
     cst_async_kernel$108=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$109=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Clock_ns$0=
      caml_string_of_jsbytes("Async_kernel__Clock_ns"),
     cst_Async_kernel_Deferred_arra=
      caml_string_of_jsbytes("Async_kernel__Deferred_array"),
     cst_async_kernel$110=caml_string_of_jsbytes("async_kernel"),
     cst_src_deferred_array_ml=caml_string_of_jsbytes("src/deferred_array.ml"),
     cst$42=caml_string_of_jsbytes(""),
     cst_async_kernel$111=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$112=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Deferred_arra$0=
      caml_string_of_jsbytes("Async_kernel__Deferred_array"),
     cst_Async_kernel_Deferred_list=
      caml_string_of_jsbytes("Async_kernel__Deferred_list"),
     cst_async_kernel$113=caml_string_of_jsbytes("async_kernel"),
     cst_src_deferred_list_ml=caml_string_of_jsbytes("src/deferred_list.ml"),
     cst$43=caml_string_of_jsbytes(""),
     cst_async_kernel$114=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$115=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Deferred_list$0=
      caml_string_of_jsbytes("Async_kernel__Deferred_list"),
     cst_Async_kernel_Deferred_map=
      caml_string_of_jsbytes("Async_kernel__Deferred_map"),
     cst_async_kernel$116=caml_string_of_jsbytes("async_kernel"),
     cst_src_deferred_map_ml=caml_string_of_jsbytes("src/deferred_map.ml"),
     cst$44=caml_string_of_jsbytes(""),
     cst_async_kernel$117=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$118=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Deferred_map$0=
      caml_string_of_jsbytes("Async_kernel__Deferred_map"),
     cst_caught_exception_in_memoiz=
      caml_string_of_jsbytes("caught exception in memoized function"),
     cst_Async_kernel_Deferred_memo=
      caml_string_of_jsbytes("Async_kernel__Deferred_memo"),
     cst_async_kernel$119=caml_string_of_jsbytes("async_kernel"),
     cst_src_deferred_memo_ml=caml_string_of_jsbytes("src/deferred_memo.ml"),
     cst$45=caml_string_of_jsbytes(""),
     cst_async_kernel$120=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$121=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Deferred_memo$0=
      caml_string_of_jsbytes("Async_kernel__Deferred_memo"),
     cst_Async_kernel_Deferred_opti=
      caml_string_of_jsbytes("Async_kernel__Deferred_option"),
     cst_async_kernel$122=caml_string_of_jsbytes("async_kernel"),
     cst_src_deferred_option_ml=
      caml_string_of_jsbytes("src/deferred_option.ml"),
     cst$46=caml_string_of_jsbytes(""),
     cst_async_kernel$123=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$124=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Deferred_opti$0=
      caml_string_of_jsbytes("Async_kernel__Deferred_option"),
     cst_Async_kernel_Deferred_resu=
      caml_string_of_jsbytes("Async_kernel__Deferred_result"),
     cst_async_kernel$125=caml_string_of_jsbytes("async_kernel"),
     cst_src_deferred_result_ml=
      caml_string_of_jsbytes("src/deferred_result.ml"),
     cst$47=caml_string_of_jsbytes(""),
     cst_async_kernel$126=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$127=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Deferred_resu$0=
      caml_string_of_jsbytes("Async_kernel__Deferred_result"),
     cst_Async_kernel_Deferred_or_e=
      caml_string_of_jsbytes("Async_kernel__Deferred_or_error"),
     cst_async_kernel$128=caml_string_of_jsbytes("async_kernel"),
     cst_src_deferred_or_error_ml=
      caml_string_of_jsbytes("src/deferred_or_error.ml"),
     cst$48=caml_string_of_jsbytes(""),
     cst_async_kernel$129=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$130=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Deferred_or_e$0=
      caml_string_of_jsbytes("Async_kernel__Deferred_or_error"),
     cst_Async_kernel_Deferred_queu=
      caml_string_of_jsbytes("Async_kernel__Deferred_queue"),
     cst_async_kernel$131=caml_string_of_jsbytes("async_kernel"),
     cst_src_deferred_queue_ml=caml_string_of_jsbytes("src/deferred_queue.ml"),
     cst$49=caml_string_of_jsbytes(""),
     cst_async_kernel$132=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$133=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Deferred_queu$0=
      caml_string_of_jsbytes("Async_kernel__Deferred_queue"),
     cst_Async_kernel_Deferred_sequ=
      caml_string_of_jsbytes("Async_kernel__Deferred_sequence"),
     cst_async_kernel$134=caml_string_of_jsbytes("async_kernel"),
     cst_src_deferred_sequence_ml=
      caml_string_of_jsbytes("src/deferred_sequence.ml"),
     cst$50=caml_string_of_jsbytes(""),
     cst_async_kernel$135=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$136=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Deferred_sequ$0=
      caml_string_of_jsbytes("Async_kernel__Deferred_sequence"),
     cst_Async_kernel_Deferred=
      caml_string_of_jsbytes("Async_kernel__Deferred"),
     cst_async_kernel$137=caml_string_of_jsbytes("async_kernel"),
     cst_src_deferred_ml=caml_string_of_jsbytes("src/deferred.ml"),
     cst$51=caml_string_of_jsbytes(""),
     cst_async_kernel$138=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$139=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Deferred$0=
      caml_string_of_jsbytes("Async_kernel__Deferred"),
     cst_Async_kernel_Require_expli=
      caml_string_of_jsbytes("Async_kernel__Require_explicit_time_source"),
     cst_async_kernel$140=caml_string_of_jsbytes("async_kernel"),
     cst_src_require_explicit_time_=
      caml_string_of_jsbytes("src/require_explicit_time_source.ml"),
     cst$52=caml_string_of_jsbytes(""),
     cst_async_kernel$141=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$142=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Require_expli$0=
      caml_string_of_jsbytes("Async_kernel__Require_explicit_time_source"),
     cst_Pipe_interleave=caml_string_of_jsbytes("Pipe.interleave"),
     cst_iter_without_pushback_got_=
      caml_string_of_jsbytes
       ("iter_without_pushback got non-positive max_iterations_per_job"),
     cst_read_exactly=caml_string_of_jsbytes("read_exactly"),
     cst_Pipe_read_exactly_got_num_=
      caml_string_of_jsbytes("Pipe.read_exactly got num_values <= 0"),
     cst_Pipe_read_choice_single_co=
      caml_string_of_jsbytes
       ("Pipe.read_choice_single_consumer_exn: choice was enabled but pipe is empty; this is likely due to a race condition with one or more other consumers"),
     cst_values_available=caml_string_of_jsbytes("values_available"),
     cst_read$0=caml_string_of_jsbytes("read"),
     cst_read=caml_string_of_jsbytes("read'"),
     cst_max_queue_length_0=caml_string_of_jsbytes("max_queue_length <= 0"),
     cst_read_now=caml_string_of_jsbytes("read_now"),
     cst_Attempt_to_use_consumer_wi=
      caml_string_of_jsbytes("Attempt to use consumer with wrong pipe"),
     cst_write=caml_string_of_jsbytes("write"),
     cst_write_to_closed_pipe=caml_string_of_jsbytes("write to closed pipe"),
     cst_negative_size_budget=caml_string_of_jsbytes("negative size_budget"),
     cst_close_read=caml_string_of_jsbytes("close_read"),
     cst_close=caml_string_of_jsbytes("close"),
     cst_Pipe_invariant_failed=caml_string_of_jsbytes("Pipe.invariant failed"),
     cst_Pipe_Blocked_read_invarian=
      caml_string_of_jsbytes("Pipe.Blocked_read.invariant failed"),
     cst_Pipe_Consumer_invariant_fa=
      caml_string_of_jsbytes("Pipe.Consumer.invariant failed"),
     cst_Async_kernel_Pipe=caml_string_of_jsbytes("Async_kernel__Pipe"),
     cst_async_kernel$143=caml_string_of_jsbytes("async_kernel"),
     cst_src_pipe_ml=caml_string_of_jsbytes("src/pipe.ml"),
     cst$53=caml_string_of_jsbytes(""),
     cst_async_kernel$144=caml_string_of_jsbytes("async_kernel"),
     cst_downstream_flushed=caml_string_of_jsbytes("downstream_flushed"),
     cst_values_read=caml_string_of_jsbytes("values_read"),
     cst_pipe_id=caml_string_of_jsbytes("pipe_id"),
     cst_consumer=caml_string_of_jsbytes("consumer"),
     cst_wants=caml_string_of_jsbytes("wants"),
     cst_upstream_flusheds=caml_string_of_jsbytes("upstream_flusheds"),
     cst_consumers=caml_string_of_jsbytes("consumers"),
     cst_read_closed=caml_string_of_jsbytes("read_closed"),
     cst_closed=caml_string_of_jsbytes("closed"),
     cst_blocked_reads=caml_string_of_jsbytes("blocked_reads"),
     cst_blocked_flushes=caml_string_of_jsbytes("blocked_flushes"),
     cst_num_values_read=caml_string_of_jsbytes("num_values_read"),
     cst_pushback=caml_string_of_jsbytes("pushback"),
     cst_size_budget=caml_string_of_jsbytes("size_budget"),
     cst_buffer=caml_string_of_jsbytes("buffer"),
     cst_info=caml_string_of_jsbytes("info"),
     cst_id$2=caml_string_of_jsbytes("id"),
     cst_async_kernel$145=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Pipe$0=caml_string_of_jsbytes("Async_kernel__Pipe"),
     cst_Mvar_take_exn_called_on_em=
      caml_string_of_jsbytes("Mvar.take_exn called on empty mvar"),
     cst_Mvar_peek_exn_called_on_em=
      caml_string_of_jsbytes("Mvar.peek_exn called on empty mvar"),
     pos$3=caml_string_of_jsbytes("src/mvar.ml:23:26"),
     cst_Async_kernel_Mvar=caml_string_of_jsbytes("Async_kernel__Mvar"),
     cst_async_kernel$146=caml_string_of_jsbytes("async_kernel"),
     cst_src_mvar_ml=caml_string_of_jsbytes("src/mvar.ml"),
     cst$54=caml_string_of_jsbytes(""),
     cst_async_kernel$147=caml_string_of_jsbytes("async_kernel"),
     cst_value_available=caml_string_of_jsbytes("value_available"),
     cst_taken=caml_string_of_jsbytes("taken"),
     cst_current_value=caml_string_of_jsbytes("current_value"),
     cst_async_kernel$148=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Mvar$0=caml_string_of_jsbytes("Async_kernel__Mvar"),
     cst_Async_kernel_Lazy_deferred=
      caml_string_of_jsbytes("Async_kernel__Lazy_deferred"),
     cst_async_kernel$149=caml_string_of_jsbytes("async_kernel"),
     cst_src_lazy_deferred_ml=caml_string_of_jsbytes("src/lazy_deferred.ml"),
     cst$55=caml_string_of_jsbytes(""),
     cst_async_kernel$150=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$151=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Lazy_deferred$0=
      caml_string_of_jsbytes("Async_kernel__Lazy_deferred"),
     cst_Async_kernel_Async_conditi=
      caml_string_of_jsbytes("Async_kernel__Async_condition"),
     cst_async_kernel$152=caml_string_of_jsbytes("async_kernel"),
     cst_src_async_condition_ml=
      caml_string_of_jsbytes("src/async_condition.ml"),
     cst$56=caml_string_of_jsbytes(""),
     cst_async_kernel$153=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$154=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Async_conditi$0=
      caml_string_of_jsbytes("Async_kernel__Async_condition"),
     cst_Async_kernel_Async_gc=
      caml_string_of_jsbytes("Async_kernel__Async_gc"),
     cst_async_kernel$155=caml_string_of_jsbytes("async_kernel"),
     cst_src_async_gc_ml=caml_string_of_jsbytes("src/async_gc.ml"),
     cst$57=caml_string_of_jsbytes(""),
     cst_async_kernel$156=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$157=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Async_gc$0=
      caml_string_of_jsbytes("Async_kernel__Async_gc"),
     cst_Async_kernel_Async_invaria=
      caml_string_of_jsbytes("Async_kernel__Async_invariant_intf"),
     cst_async_kernel$158=caml_string_of_jsbytes("async_kernel"),
     cst_src_async_invariant_intf_m=
      caml_string_of_jsbytes("src/async_invariant_intf.ml"),
     cst$58=caml_string_of_jsbytes(""),
     cst_async_kernel$159=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$160=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Async_invaria$0=
      caml_string_of_jsbytes("Async_kernel__Async_invariant_intf"),
     cst_problem_with_field=caml_string_of_jsbytes("problem with field"),
     cst_invariant_failed=caml_string_of_jsbytes("invariant failed"),
     cst_Async_kernel_Async_invaria$1=
      caml_string_of_jsbytes("Async_kernel__Async_invariant"),
     cst_async_kernel$161=caml_string_of_jsbytes("async_kernel"),
     cst_src_async_invariant_ml=
      caml_string_of_jsbytes("src/async_invariant.ml"),
     cst$59=caml_string_of_jsbytes(""),
     cst_async_kernel$162=caml_string_of_jsbytes("async_kernel"),
     cst_async_kernel$163=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel_Async_invaria$2=
      caml_string_of_jsbytes("Async_kernel__Async_invariant"),
     pos$4=caml_string_of_jsbytes("src/async_kernel.ml:93:17"),
     cst_Async_kernel=caml_string_of_jsbytes("Async_kernel"),
     cst_async_kernel$164=caml_string_of_jsbytes("async_kernel"),
     cst_src_async_kernel_ml=caml_string_of_jsbytes("src/async_kernel.ml"),
     cst$60=caml_string_of_jsbytes(""),
     cst_async_kernel$165=caml_string_of_jsbytes("async_kernel"),
     cst_src_async_kernel_ml$0=caml_string_of_jsbytes("src/async_kernel.ml"),
     cst_return_does_not_allocate=
      caml_string_of_jsbytes(": [return ()] does not allocate"),
     cst_async_kernel$166=caml_string_of_jsbytes("async_kernel"),
     cst_Async_kernel$0=caml_string_of_jsbytes("Async_kernel"),
     Ppx_module_timer_runtime=global_data.Ppx_module_timer_runtime,
     Ppx_bench_lib_Benchmark_accumu=
      global_data.Ppx_bench_lib__Benchmark_accumulator,
     Expect_test_collector=global_data.Expect_test_collector,
     Ppx_inline_test_lib_Runtime=global_data.Ppx_inline_test_lib__Runtime,
     include=global_data.Core_kernel__Time_ns_alternate_sexp,
     Base_Field=global_data.Base__Field,
     Core_kernel_Option=global_data.Core_kernel__Option,
     Core_kernel_List=global_data.Core_kernel__List,
     Core_kernel_Sexp=global_data.Core_kernel__Sexp,
     Core_kernel=global_data.Core_kernel,
     Core_kernel_String=global_data.Core_kernel__String,
     Core_kernel_Int=global_data.Core_kernel__Int,
     Timing_wheel=global_data.Timing_wheel,
     Thread_pool_cpu_affinity=global_data.Thread_pool_cpu_affinity,
     Assert_failure=global_data.Assert_failure,
     Sexplib0_Sexp_conv_error=global_data.Sexplib0__Sexp_conv_error,
     Sexplib0_Sexp_conv=global_data.Sexplib0__Sexp_conv,
     Core_kernel_Validated=global_data.Core_kernel__Validated,
     Core_kernel_Sexpable=global_data.Core_kernel__Sexpable,
     Base_Word_size=global_data.Base__Word_size,
     Core_kernel_Result=global_data.Core_kernel__Result,
     Core_kernel_Error=global_data.Core_kernel__Error,
     Core_kernel_Debug=global_data.Core_kernel__Debug,
     CamlinternalMod=global_data.CamlinternalMod,
     Core_kernel_Unique_id=global_data.Core_kernel__Unique_id,
     Core_kernel_Info=global_data.Core_kernel__Info,
     Core_kernel_Bag=global_data.Core_kernel__Bag,
     Core_kernel_Source_code_positi=
      global_data.Core_kernel__Source_code_position,
     Base_Backtrace=global_data.Base__Backtrace,
     Core_kernel_Univ_map=global_data.Core_kernel__Univ_map,
     Tuple_pool=global_data.Tuple_pool,
     Stdlib_obj=global_data.Stdlib__obj,
     Core_kernel_Uniform_array=global_data.Core_kernel__Uniform_array,
     Thread_safe_queue=global_data.Thread_safe_queue,
     include$9=global_data.Base__Invariant,
     Core_kernel_Or_error=global_data.Core_kernel__Or_error,
     Ppx_assert_lib_Runtime=global_data.Ppx_assert_lib__Runtime,
     Base_Exn=global_data.Base__Exn,
     Core_kernel_Deque=global_data.Core_kernel__Deque,
     Core_kernel_Binable=global_data.Core_kernel__Binable,
     Base_Monad=global_data.Base__Monad,
     Sexplib_Conv=global_data.Sexplib__Conv,
     Base_Stack=global_data.Base__Stack,
     Base=global_data.Base,
     Core_kernel_Queue=global_data.Core_kernel__Queue,
     Core_kernel_Heap_block=global_data.Core_kernel__Heap_block,
     Stdlib_gc=global_data.Stdlib__gc,
     Stdlib=global_data.Stdlib,
     include$24=global_data.Core_kernel__Gc,
     Base_Staged=global_data.Base__Staged,
     Core_kernel_Array=global_data.Core_kernel__Array,
     Core_kernel_Map=global_data.Core_kernel__Map,
     Core_kernel_Memo=global_data.Core_kernel__Memo,
     Core_kernel_Printf=global_data.Core_kernel__Printf,
     Base_Applicative=global_data.Base__Applicative,
     Core_kernel_Sequence=global_data.Core_kernel__Sequence,
     Core_kernel_Date=global_data.Core_kernel__Date,
     Core_kernel_Time_float=global_data.Core_kernel__Time_float,
     Pairing_heap=global_data.Pairing_heap,
     Core_kernel_Bool=global_data.Core_kernel__Bool,
     Core_kernel_Hashtbl=global_data.Core_kernel__Hashtbl,
     Sexp_hidden_in_test=global_data.Sexp_hidden_in_test,
     Ppx_compare_lib=global_data.Ppx_compare_lib,
     Moption=global_data.Moption,
     Core_kernel_Unit=global_data.Core_kernel__Unit,
     Inline_test_config=global_data.Inline_test_config,
     Async_kernel=[0];
    caml_register_global(1281,Async_kernel,"Async_kernel__");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Time_ns);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel);
    caml_call1(Expect_test_collector[4][1],cst_src_time_ns_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$0,cst);
    var
     _a_=include[1],
     _b_=include[2],
     _c_=include[3],
     _d_=include[4],
     _e_=include[5],
     _f_=include[6],
     _g_=include[7],
     _h_=include[8],
     _i_=include[9],
     _j_=include[10],
     _k_=include[11],
     _l_=include[12],
     _m_=include[13],
     _n_=include[14],
     _o_=include[15],
     _p_=include[16],
     _q_=include[17],
     _r_=include[18],
     _s_=include[19],
     _t_=include[20],
     _u_=include[21],
     _v_=include[22],
     _w_=include[23],
     _x_=include[24],
     _y_=include[25],
     _z_=include[26],
     _A_=include[27],
     _B_=include[28],
     _C_=include[29],
     _D_=include[30],
     _E_=include[31],
     _F_=include[32],
     _G_=include[33],
     _H_=include[34],
     _I_=include[35],
     _J_=include[36],
     _K_=include[37],
     _L_=include[38],
     _M_=include[39],
     _N_=include[40],
     _O_=include[41],
     _P_=include[42],
     _Q_=include[43],
     _R_=include[44],
     _S_=include[45],
     _T_=include[46],
     _U_=include[47],
     _V_=include[48],
     _W_=include[49],
     _X_=include[50],
     _Y_=include[51],
     _Z_=include[52],
     ___=include[53],
     _$_=include[54],
     _aa_=include[55],
     _ab_=include[56],
     _ac_=include[57],
     _ad_=include[58],
     _ae_=include[59],
     _af_=include[60],
     _ag_=include[61],
     _ah_=include[62],
     _ai_=include[63],
     _aj_=include[64],
     _ak_=include[65],
     _al_=include[66],
     _am_=include[67],
     _an_=include[68],
     _ao_=include[69],
     _ap_=include[70],
     _aq_=include[71],
     _ar_=include[72],
     _as_=include[73],
     _at_=include[74],
     _au_=include[75],
     _av_=include[76],
     _aw_=include[77],
     _ax_=include[78],
     _ay_=include[79],
     _az_=include[80],
     _aA_=include[81],
     _aB_=include[82],
     _aC_=include[83],
     _aD_=include[84],
     _aE_=include[85],
     _aF_=include[86],
     _aG_=include[87],
     _aH_=include[88],
     _aI_=include[89],
     _cE_=[0,caml_string_of_jsbytes("<no task id>")],
     _cA_=[0,[2,0,[10,0]],caml_string_of_jsbytes("%s%!")],
     _cr_=[0,caml_string_of_jsbytes(" [ulimit -n -H]"),0],
     _cm_=[0,caml_string_of_jsbytes("\n"),0],
     _ch_=
      [0,
       caml_string_of_jsbytes
        ("\n  This is used to adjust the time/space tradeoff in the timing wheel\n  used to implement Async's clock.  Time is split into intervals of\n  size [alarm_precision], and alarms with times in the same interval\n  fire in the same cycle.  Level [i] in the timing wheel has an\n  array of size [2^b], where [b] is the [i]'th entry in [level_bits].\n"),
       0],
     _ci_=
      [0,
       caml_string_of_jsbytes
        ("\n   Whether and how threads in the thread pool should be affinitized to CPUs.\n"),
       0],
     _cj_=
      [0,
       caml_string_of_jsbytes
        ("\n  By default, Async will print a message to stderr every second if\n  the thread pool is stuck for longer than this.\n"),
       0],
     _ck_=
      [0,
       caml_string_of_jsbytes
        ("\n  If true, this will cause Async to keep in the execution context the\n  history of stack backtraces (obtained via [Backtrace.get]) that led\n  to the current job.  If an Async job has an unhandled exception,\n  this backtrace history will be recorded in the exception.  In\n  particular the history will appear in an unhandled exception that\n  reaches the main monitor.  This can have a substantial performance\n  impact, both in running time and space usage.\n"),
       0],
     _cl_=
      [0,
       caml_string_of_jsbytes
        ("\n  Turning on debug messages will substantially slow down most programs.\n"),
       0],
     _cn_=
      [0,
       caml_string_of_jsbytes
        ("\n  The minimum timeout the scheduler will pass to the OS when it checks\n  for I/O between cycles.  This is zero by default.  Setting it to a\n  nonzero value is used to increase thread fairness between the scheduler\n  and other threads.  A plausible setting is 1us.  This is also\n  configurable in OCaml via [Scheduler.set_min_inter_cycle_timeout].\n"),
       0],
     _co_=
      [0,
       caml_string_of_jsbytes
        ("\n  The maximum number of jobs that will be done at each priority within\n  each Async cycle.  This limits how many jobs the scheduler will run\n  before pausing to check for I/O.\n"),
       0],
     _cp_=
      [0,
       caml_string_of_jsbytes
        ("\n  The maximum number of threads that Async will create to do blocking\n  system calls and handle calls to [In_thread.run].\n"),
       0],
     _cq_=
      [0,
       caml_string_of_jsbytes
        ("\n  The maximum number of open file descriptors allowed at any one time."),
       0],
     _cs_=
      [0,
       caml_string_of_jsbytes
        ("\n  The maximum amount of time the scheduler will pause between cycles\n  when it has no jobs and is going to wait for I/O.  In principle one\n  doesn't need this, and we could use an infinite timeout.  We instead\n  use a small timeout (by default), to be more robust to bugs that\n  could prevent Async from waking up and servicing events.  For\n  example, as of 2013-01, the OCaml runtime has a bug that causes it\n  to not necessarily run an OCaml signal handler in a timely manner.\n  This in turn can cause a simple Async program that is waiting on a\n  signal to hang, when in fact it should handle the signal.\n\n  We use 50ms as the default timeout, because it is infrequent enough\n  to have a negligible performance impact, and frequent enough that\n  the latency would typically be not noticeable.  Also, 50ms is what\n  the OCaml ticker thread uses.\n"),
       0],
     _ct_=[0,caml_string_of_jsbytes(".\n"),0],
     _cu_=[0,caml_string_of_jsbytes(", ")],
     _cv_=
      [0,
       caml_string_of_jsbytes
        ("\n  The maximum number of ready events that Async's call to [Epoll.wait]\n  will handle.\n"),
       0],
     _cw_=
      [0,
       caml_string_of_jsbytes
        ("\n  Can be set to [Do_not_watch] or:\n\n    (Watch ((dump_if_delayed_by SPAN) (how_to_dump HOW)))\n\n  If set to [Watch], then on program start this will start a regular\n  Async job that increments a counter, and a C thread that will\n  detect if that job is delayed by [dump_if_delayed_by], and if so,\n  will core dump the program.  If available, [/usr/bin/gcore] is\n  used by default to dump the core, which should allow the program\n  to continue running.  Otherwise, [abort] will be called from C,\n  which will kill the program while causing a core dump.  One can\n  force [abort] or [gcore] via [how_to_dump], which should be one of:\n  [Call_abort], [Call_gcore], or [Default].\n"),
       0],
     _cx_=
      [0,
       caml_string_of_jsbytes
        ("\n  If true, causes Async routines to check if they are being accessed\n  from some thread other than the thread currently holding the Async\n  lock, which is not allowed and can lead to very confusing behavior.\n"),
       0],
     _cy_=
      [0,
       caml_string_of_jsbytes
        ("\n  If true, causes Async to regularly check invariants of its internal\n  data structures.  This can substantially slow down your program.\n"),
       0],
     _cz_=
      [0,
       caml_string_of_jsbytes
        ("\n  By default, Async will send an exception to the toplevel monitor\n  if it detects that the thread pool is stuck for longer than this.\n"),
       0],
     _bJ_=[0,caml_string_of_jsbytes("timing_wheel_config")],
     _bK_=[0,caml_string_of_jsbytes("thread_pool_cpu_affinity")],
     _bL_=[0,caml_string_of_jsbytes("report_thread_pool_stuck_for")],
     _bM_=[0,caml_string_of_jsbytes("record_backtraces")],
     _bN_=[0,caml_string_of_jsbytes("print_debug_messages_for")],
     _bO_=[0,caml_string_of_jsbytes("min_inter_cycle_timeout")],
     _bP_=[0,caml_string_of_jsbytes("max_num_jobs_per_priority_per_cycle")],
     _bQ_=[0,caml_string_of_jsbytes("max_num_threads")],
     _bR_=[0,caml_string_of_jsbytes("max_num_open_file_descrs")],
     _bS_=[0,caml_string_of_jsbytes("max_inter_cycle_timeout")],
     _bT_=[0,caml_string_of_jsbytes("file_descr_watcher")],
     _bU_=[0,caml_string_of_jsbytes("epoll_max_ready_events")],
     _bV_=[0,caml_string_of_jsbytes("dump_core_on_job_delay")],
     _bW_=[0,caml_string_of_jsbytes("detect_invalid_access_from_thread")],
     _bX_=[0,caml_string_of_jsbytes("check_invariants")],
     _bY_=[0,caml_string_of_jsbytes("abort_after_thread_pool_stuck_for")],
     _bI_=[0,caml_string_of_jsbytes("src/async_kernel_config.ml"),139,0],
     _a$_=[0,caml_string_of_jsbytes("Epoll_if_timerfd")],
     _ba_=[0,caml_string_of_jsbytes("Epoll")],
     _bb_=[0,caml_string_of_jsbytes("Select")],
     _aW_=[0,caml_string_of_jsbytes("All")],
     _aX_=[0,caml_string_of_jsbytes("Clock")],
     _aY_=[0,caml_string_of_jsbytes("Fd")],
     _aZ_=[0,caml_string_of_jsbytes("File_descr_watcher")],
     _a0_=[0,caml_string_of_jsbytes("Finalizers")],
     _a1_=[0,caml_string_of_jsbytes("Interruptor")],
     _a2_=[0,caml_string_of_jsbytes("Monitor")],
     _a3_=[0,caml_string_of_jsbytes("Monitor_send_exn")],
     _a4_=[0,caml_string_of_jsbytes("Parallel")],
     _a5_=[0,caml_string_of_jsbytes("Reader")],
     _a6_=[0,caml_string_of_jsbytes("Scheduler")],
     _a7_=[0,caml_string_of_jsbytes("Shutdown")],
     _a8_=[0,caml_string_of_jsbytes("Thread_pool")],
     _a9_=[0,caml_string_of_jsbytes("Thread_safe")],
     _a__=[0,caml_string_of_jsbytes("Writer")],
     _aU_=[0,caml_string_of_jsbytes("Watch")],
     _aV_=[0,caml_string_of_jsbytes("Do_not_watch")],
     _aS_=[0,caml_string_of_jsbytes("how_to_dump")],
     _aT_=[0,caml_string_of_jsbytes("dump_if_delayed_by")],
     _aR_=[0,caml_string_of_jsbytes("src/async_kernel_config.ml"),66,2],
     _aO_=[0,caml_string_of_jsbytes("Default")],
     _aP_=[0,caml_string_of_jsbytes("Call_abort")],
     _aQ_=[0,caml_string_of_jsbytes("Call_gcore")],
     _bZ_=[0,0],
     _b1_=[0,0],
     _b2_=[0,0],
     _b9_=[0,0],
     _b$_=[0,0],
     _ca_=[0,0],
     _cb_=[0,0],
     _cd_=[0,0,[0,1,[0,2,0]]],
     _cg_=[0,[0,2,[0,10,0]]],
     _nL_=
      [0,
       [11,
        caml_string_of_jsbytes("invalid value for "),
        [2,0,[11,caml_string_of_jsbytes(" environment variable"),0]]],
       caml_string_of_jsbytes("invalid value for %s environment variable")],
     _nQ_=
      [0,
       [2,0,[11,caml_string_of_jsbytes("\n\n"),0]],
       caml_string_of_jsbytes("%s\n\n")],
     _cT_=[0,[2,0,[12,10,[10,0]]],caml_string_of_jsbytes("%s\n%!")],
     _cU_=[0,[2,0,[12,10,[10,0]]],caml_string_of_jsbytes("%s\n%!")],
     _cV_=[0,caml_string_of_jsbytes("Low")],
     _cW_=[0,caml_string_of_jsbytes("Normal")],
     _cX_=[0,[0]],
     _cY_=[0,caml_string_of_jsbytes("src/types.ml"),37,2],
     _cZ_=[0,[0]],
     _c0_=[0,caml_string_of_jsbytes("src/types.ml"),42,2],
     _c1_=[0,[0,[0,[0]]]],
     _c2_=[0,caml_string_of_jsbytes("src/types.ml"),51,2],
     _c3_=[0,[0]],
     _c4_=[0,caml_string_of_jsbytes("src/types.ml"),56,2],
     _c5_=[0,[0]],
     _c6_=[0,caml_string_of_jsbytes("src/types.ml"),66,2],
     _c7_=[0,[0]],
     _c8_=[0,caml_string_of_jsbytes("src/types.ml"),81,2],
     _c9_=[0,[0]],
     _c__=[0,caml_string_of_jsbytes("src/types.ml"),86,2],
     _c$_=[0,[0]],
     _da_=[0,caml_string_of_jsbytes("src/types.ml"),95,2],
     _db_=[0,[0]],
     _dc_=[0,[0]],
     _dd_=[0,[0,[0,[0]]]],
     _de_=[0,[0]],
     _df_=[0,[0]],
     _dg_=[0,[0]],
     _dh_=[0,[0]],
     _di_=[0,[0]],
     _dj_=[0,[0,[0,[0]]]],
     _dk_=[0,caml_string_of_jsbytes("src/types.ml"),144,2],
     _dl_=[0,[0]],
     _dm_=[0,caml_string_of_jsbytes("src/types.ml"),149,2],
     _dn_=[0,[0]],
     _do_=[0,caml_string_of_jsbytes("src/types.ml"),155,2],
     _dp_=[0,[0]],
     _dq_=[0,caml_string_of_jsbytes("src/types.ml"),160,2],
     _dr_=[0,[0]],
     _ds_=[0,caml_string_of_jsbytes("src/types.ml"),165,2],
     _dt_=[0,[0]],
     _du_=[0,caml_string_of_jsbytes("src/types.ml"),177,2],
     _dv_=[0,[0]],
     _dw_=[0,caml_string_of_jsbytes("src/types.ml"),187,2],
     _dx_=[0,[0]],
     _dy_=[0,caml_string_of_jsbytes("src/types.ml"),222,2],
     _dz_=[0,[0]],
     _dA_=[0,caml_string_of_jsbytes("src/types.ml"),239,2],
     _dB_=[0,[0,[0,[0]]]],
     _dC_=[0,caml_string_of_jsbytes("src/types.ml"),253,2],
     _dD_=[0,[0,[0,[0]]]],
     _dE_=[0,[0]],
     _dF_=[0,[0]],
     _dG_=[0,[0]],
     _dH_=[0,[0]],
     _dI_=[0,[0]],
     _dJ_=[0,[0]],
     _dK_=[0,[0]],
     _dL_=[0,[0]],
     _dM_=[0,[0,[0,[0]]]],
     _d5_=[0,caml_string_of_jsbytes("is_detached")],
     _d6_=[0,caml_string_of_jsbytes("has_seen_error")],
     _d7_=[0,caml_string_of_jsbytes("id")],
     _d8_=[0,caml_string_of_jsbytes("here")],
     _d9_=[0,caml_string_of_jsbytes("name")],
     _d__=[0,caml_string_of_jsbytes("main")],
     _eh_=[0,caml_string_of_jsbytes("backtrace_history")],
     _ei_=[0,caml_string_of_jsbytes("local_storage")],
     _ej_=[0,caml_string_of_jsbytes("priority")],
     _ek_=[0,caml_string_of_jsbytes("monitor")],
     _el_=[0,caml_string_of_jsbytes("<job>")],
     _em_=[0,0],
     _en_=[0,1],
     _eR_=[0,0],
     _eP_=[0,caml_string_of_jsbytes("t")],
     _eQ_=[0,caml_string_of_jsbytes("n")],
     _eN_=[0,caml_string_of_jsbytes("src/job_queue.ml"),39,48],
     _eM_=[0,caml_string_of_jsbytes("src/job_queue.ml"),41,44],
     _eL_=[0,caml_string_of_jsbytes("src/job_queue.ml"),51,11],
     _eK_=[0,caml_string_of_jsbytes("src/job_queue.ml"),52,11],
     _eJ_=[0,caml_string_of_jsbytes("src/job_queue.ml"),55,11],
     _eI_=[0,caml_string_of_jsbytes("src/job_queue.ml"),56,11],
     _eH_=[0,caml_string_of_jsbytes("src/job_queue.ml"),59,11],
     _eG_=[0,caml_string_of_jsbytes("src/job_queue.ml"),60,11],
     _eO_=[0,caml_string_of_jsbytes("src/job_queue.ml"),36,1348,1370],
     _eA_=[0,caml_string_of_jsbytes("length")],
     _eB_=[0,caml_string_of_jsbytes("front")],
     _eC_=[0,caml_string_of_jsbytes("mask")],
     _eD_=[0,caml_string_of_jsbytes("jobs")],
     _eE_=[0,caml_string_of_jsbytes("jobs_left_this_cycle")],
     _eF_=[0,caml_string_of_jsbytes("num_jobs_run")],
     _f4_=[0,0],
     _f3_=[0,caml_string_of_jsbytes("src/synchronous_time_source0.ml"),559,45],
     _f2_=[0,caml_string_of_jsbytes("src/synchronous_time_source0.ml"),508,6],
     _f1_=[0,caml_string_of_jsbytes("src/synchronous_time_source0.ml"),500,6],
     _fX_=[0,caml_string_of_jsbytes("Ok")],
     _fY_=[0,caml_string_of_jsbytes("Currently_happening")],
     _fZ_=[0,caml_string_of_jsbytes("Recently_aborted")],
     _f0_=[0,caml_string_of_jsbytes("Recently_fired")],
     _fW_=[0,0],
     _fV_=[0,caml_string_of_jsbytes("reason")],
     _fS_=[0,caml_string_of_jsbytes("Ok")],
     _fT_=[0,caml_string_of_jsbytes("Currently_happening")],
     _fU_=[0,caml_string_of_jsbytes("Previously_unscheduled")],
     _fQ_=[0,caml_string_of_jsbytes("alarm_precision")],
     _fR_=[0,caml_string_of_jsbytes("span")],
     _fO_=[0,caml_string_of_jsbytes("_")],
     _fN_=[0,caml_string_of_jsbytes("src/synchronous_time_source0.ml"),262,17],
     _fM_=[0,caml_string_of_jsbytes("src/synchronous_time_source0.ml"),269,15],
     _fL_=[0,caml_string_of_jsbytes("src/synchronous_time_source0.ml"),271,42],
     _fK_=[0,caml_string_of_jsbytes("src/synchronous_time_source0.ml"),279,18],
     _fP_=
      [0,
       caml_string_of_jsbytes("src/synchronous_time_source0.ml"),
       246,
       8424,
       8448],
     _fH_=[0,caml_string_of_jsbytes("now")],
     _fI_=[0,caml_string_of_jsbytes("events")],
     _fJ_=[0,caml_string_of_jsbytes("now")],
     _fm_=[0,caml_string_of_jsbytes("event")],
     _fn_=[0,caml_string_of_jsbytes("to_")],
     _fo_=[0,caml_string_of_jsbytes("from")],
     _fk_=[0,caml_string_of_jsbytes("src/synchronous_time_source0.ml"),141,58],
     _fl_=
      [0,
       caml_string_of_jsbytes("src/synchronous_time_source0.ml"),
       120,
       3983,
       4009],
     _fh_=[0,caml_string_of_jsbytes("interval")],
     _fi_=[0,caml_string_of_jsbytes("at")],
     _fj_=[0,caml_string_of_jsbytes("status")],
     _ff_=[0,caml_string_of_jsbytes("src/synchronous_time_source0.ml"),91,30],
     _eV_=[0,caml_string_of_jsbytes("Aborted")],
     _eW_=[0,caml_string_of_jsbytes("Fired")],
     _eX_=[0,caml_string_of_jsbytes("Happening")],
     _eY_=[0,caml_string_of_jsbytes("Scheduled")],
     _eZ_=[0,caml_string_of_jsbytes("Unscheduled")],
     _eT_=[0,13,[0,6,[0,6,[0,5,0]]]],
     _hD_=[0,0],
     _hE_=[0,0],
     _hB_=[0,caml_string_of_jsbytes("src/scheduler1.ml"),151,40],
     _hA_=[0,caml_string_of_jsbytes("src/scheduler1.ml"),152,46],
     _hz_=[0,caml_string_of_jsbytes("src/scheduler1.ml"),160,43],
     _hy_=[0,caml_string_of_jsbytes("src/scheduler1.ml"),164,14],
     _hw_=[0,caml_string_of_jsbytes("t")],
     _hx_=[0,caml_string_of_jsbytes("exn")],
     _g6_=[0,caml_string_of_jsbytes("on_end_of_cycle")],
     _g7_=[0,caml_string_of_jsbytes("on_start_of_cycle")],
     _g8_=[0,caml_string_of_jsbytes("record_backtraces")],
     _g9_=[0,caml_string_of_jsbytes("max_num_jobs_per_priority_per_cycle")],
     _g__=[0,caml_string_of_jsbytes("check_invariants")],
     _g$_=[0,caml_string_of_jsbytes("yield_until_no_jobs_remain")],
     _ha_=[0,caml_string_of_jsbytes("yield")],
     _hb_=[0,caml_string_of_jsbytes("event_added_hook")],
     _hc_=[0,caml_string_of_jsbytes("job_queued_hook")],
     _hd_=[0,caml_string_of_jsbytes("thread_safe_external_job_hook")],
     _he_=[0,caml_string_of_jsbytes("external_jobs")],
     _hf_=[0,caml_string_of_jsbytes("time_source")],
     _hg_=[0,caml_string_of_jsbytes("total_cycle_time")],
     _hh_=[0,caml_string_of_jsbytes("last_cycle_num_jobs")],
     _hi_=[0,caml_string_of_jsbytes("last_cycle_time")],
     _hj_=[0,caml_string_of_jsbytes("run_every_cycle_end")],
     _hk_=[0,caml_string_of_jsbytes("run_every_cycle_start")],
     _hl_=[0,caml_string_of_jsbytes("in_cycle")],
     _hm_=[0,caml_string_of_jsbytes("cycle_start")],
     _hn_=[0,caml_string_of_jsbytes("cycle_count")],
     _ho_=[0,caml_string_of_jsbytes("uncaught_exn")],
     _hp_=[0,caml_string_of_jsbytes("current_execution_context")],
     _hq_=[0,caml_string_of_jsbytes("main_execution_context")],
     _hr_=[0,caml_string_of_jsbytes("very_low_priority_workers")],
     _hs_=[0,caml_string_of_jsbytes("low_priority_jobs")],
     _ht_=[0,caml_string_of_jsbytes("normal_priority_jobs")],
     _hu_=[0,caml_string_of_jsbytes("job_pool")],
     _hv_=[0,caml_string_of_jsbytes("check_access")],
     _gb_=[0,caml_string_of_jsbytes("src/scheduler1.ml"),51,1652,1676],
     _f$_=[0,caml_string_of_jsbytes("exec")],
     _ga_=[0,caml_string_of_jsbytes("execution_context")],
     _f5_=[0,caml_string_of_jsbytes("Not_finished")],
     _f6_=[0,caml_string_of_jsbytes("Finished")],
     _hV_=[0,caml_string_of_jsbytes("src/ivar0.ml"),450,21],
     _hW_=[0,caml_string_of_jsbytes("src/ivar0.ml"),446,35],
     _hU_=[0,caml_string_of_jsbytes("src/ivar0.ml"),383,15],
     _hT_=[0,caml_string_of_jsbytes("src/ivar0.ml"),362,15],
     _hS_=[0,caml_string_of_jsbytes("src/ivar0.ml"),340,15],
     _hR_=[0,caml_string_of_jsbytes("src/ivar0.ml"),321,15],
     _hO_=[0,caml_string_of_jsbytes("_")],
     _hP_=[0,caml_string_of_jsbytes("t")],
     _hQ_=[0,caml_string_of_jsbytes("src/ivar0.ml"),306,15],
     _hN_=[0,caml_string_of_jsbytes("src/ivar0.ml"),296,15],
     _hM_=[0,caml_string_of_jsbytes("src/ivar0.ml"),285,15],
     _hL_=[0,caml_string_of_jsbytes("src/ivar0.ml"),277,15],
     _hJ_=[0,caml_string_of_jsbytes("Full")],
     _hK_=[0,caml_string_of_jsbytes("src/ivar0.ml"),269,15],
     _hI_=[0,caml_string_of_jsbytes("Empty")],
     _hH_=[0,caml_string_of_jsbytes("src/ivar0.ml"),258,15],
     _hG_=[0,caml_string_of_jsbytes("execution_context")],
     _hF_=[0,caml_string_of_jsbytes("src/ivar0.ml"),118,6],
     _h6_=[0,caml_string_of_jsbytes("Parallel")],
     _h7_=[0,caml_string_of_jsbytes("Sequential")],
     _h8_=[0,caml_string_of_jsbytes("Max_concurrent_jobs")],
     _h$_=[0,caml_string_of_jsbytes("src/deferred1.ml"),123,10],
     _ij_=[0,caml_string_of_jsbytes("_")],
     _ii_=[0,caml_string_of_jsbytes("src/ivar_filler.ml"),15,20],
     _ik_=[0,caml_string_of_jsbytes("src/ivar_filler.ml"),12,161,183],
     _ig_=[0,caml_string_of_jsbytes("Empty")],
     _ih_=[0,caml_string_of_jsbytes("Full")],
     _il_=[0,caml_string_of_jsbytes("...")],
     _iC_=[0,caml_string_of_jsbytes("finally_exn")],
     _iD_=[0,caml_string_of_jsbytes("exn")],
     _iE_=[0,0],
     _iF_=[0,caml_string_of_jsbytes("finally")],
     _iA_=[0,3804260],
     _iB_=[0,3903734],
     _iz_=[0,caml_string_of_jsbytes("src/monitor.ml"),419,17],
     _iy_=[0,caml_string_of_jsbytes("exn")],
     _iw_=[0,3553398],
     _ix_=[1,0],
     _iv_=[0,caml_string_of_jsbytes("src/monitor.ml"),191,6],
     _ip_=
      [0,
       [11,
        caml_string_of_jsbytes("file "),
        [3,
         0,
         [11,
          caml_string_of_jsbytes(", line "),
          [4,
           0,
           0,
           0,
           [11,
            caml_string_of_jsbytes(", characters "),
            [4,0,0,0,[12,45,[4,0,0,0,0]]]]]]]],
       caml_string_of_jsbytes("file %S, line %d, characters %d-%d")],
     _iq_=
      [0,
       [11,
        caml_string_of_jsbytes("Caught by monitor "),
        [2,0,[11,caml_string_of_jsbytes(" at "),[2,0,0]]]],
       caml_string_of_jsbytes("Caught by monitor %s at %s")],
     _is_=
      [0,
       [11,caml_string_of_jsbytes("Caught by monitor at "),[2,0,0]],
       caml_string_of_jsbytes("Caught by monitor at %s")],
     _it_=
      [0,
       [11,caml_string_of_jsbytes("Caught by monitor "),[2,0,0]],
       caml_string_of_jsbytes("Caught by monitor %s")],
     _ir_=[0,caml_string_of_jsbytes("backtrace_history")],
     _io_=[0,caml_string_of_jsbytes("src/monitor.ml"),56,23],
     _im_=[0,caml_string_of_jsbytes("src/monitor.ml"),20,44],
     _in_=[0,caml_string_of_jsbytes("src/monitor.ml"),13,233,255],
     _iJ_=[0,-146189108],
     _iI_=[0,caml_string_of_jsbytes("src/async_stream.ml"),179,18],
     _iV_=[0,caml_string_of_jsbytes("has_any_waiters")],
     _iT_=[0,caml_string_of_jsbytes("_")],
     _iS_=[0,caml_string_of_jsbytes("src/bvar.ml"),19,47],
     _iR_=[0,caml_string_of_jsbytes("src/bvar.ml"),23,11],
     _iU_=[0,caml_string_of_jsbytes("src/bvar.ml"),14,294,316],
     _iP_=[0,caml_string_of_jsbytes("ivar")],
     _iQ_=[0,caml_string_of_jsbytes("has_any_waiters")],
     _jB_=[0,1],
     _jA_=[0,caml_string_of_jsbytes("span")],
     _jy_=[0,-146189108],
     _jz_=[0,3903734],
     _jx_=[0,caml_string_of_jsbytes("_")],
     _jw_=[0,caml_string_of_jsbytes("_")],
     _jt_=[0,caml_string_of_jsbytes("Ok")],
     _ju_=[0,caml_string_of_jsbytes("Previously_aborted")],
     _jv_=[0,caml_string_of_jsbytes("Previously_happened")],
     _js_=[0,caml_string_of_jsbytes("_")],
     _jr_=[0,caml_string_of_jsbytes("_")],
     _jo_=[0,caml_string_of_jsbytes("Ok")],
     _jp_=[0,caml_string_of_jsbytes("Previously_aborted")],
     _jq_=[0,caml_string_of_jsbytes("Previously_happened")],
     _jl_=[0,caml_string_of_jsbytes("Aborted")],
     _jm_=[0,caml_string_of_jsbytes("Happened")],
     _jn_=[0,caml_string_of_jsbytes("Scheduled_at")],
     _jj_=[0,caml_string_of_jsbytes("_")],
     _ji_=[0,caml_string_of_jsbytes("_")],
     _jg_=[0,caml_string_of_jsbytes("src/time_source.ml"),233,18],
     _jh_=[0,caml_string_of_jsbytes("src/time_source.ml"),235,18],
     _jf_=[0,caml_string_of_jsbytes("src/time_source.ml"),244,43],
     _jk_=[0,caml_string_of_jsbytes("src/time_source.ml"),226,7613,7637],
     _i$_=[0,caml_string_of_jsbytes("time_source")],
     _ja_=[0,caml_string_of_jsbytes("scheduled_at")],
     _jb_=[0,caml_string_of_jsbytes("num_fires_to_skip")],
     _jc_=[0,caml_string_of_jsbytes("fired")],
     _jd_=[0,caml_string_of_jsbytes("fire")],
     _je_=[0,caml_string_of_jsbytes("alarm")],
     _i1_=[0,caml_string_of_jsbytes("Aborted")],
     _i2_=[0,caml_string_of_jsbytes("Happened")],
     _i0_=[0,caml_string_of_jsbytes("src/time_source.ml"),183,5],
     _iX_=[0,caml_string_of_jsbytes("_")],
     _iY_=[0,caml_string_of_jsbytes("events")],
     _iZ_=[0,caml_string_of_jsbytes("is_wall_clock")],
     _jF_=[0,caml_string_of_jsbytes("length")],
     _jC_=[0,caml_string_of_jsbytes("Stack")],
     _jD_=[0,caml_string_of_jsbytes("length")],
     _jE_=[0,caml_string_of_jsbytes("Counter")],
     _kx_=[0,caml_string_of_jsbytes("src/throttle.ml"),167,2],
     _kz_=[0,caml_string_of_jsbytes("src/throttle.ml"),168,2],
     _ky_=[0,caml_string_of_jsbytes("src/throttle.ml"),169,2],
     _kB_=[0,caml_string_of_jsbytes("src/throttle.ml"),273,2],
     _kA_=[0,caml_string_of_jsbytes("max_concurrent_jobs")],
     _kj_=[0,caml_string_of_jsbytes("_")],
     _kw_=[0,caml_string_of_jsbytes("src/throttle.ml"),98,43],
     _kv_=[0,caml_string_of_jsbytes("src/throttle.ml"),102,11],
     _ku_=[0,caml_string_of_jsbytes("src/throttle.ml"),107,29],
     _kt_=[0,caml_string_of_jsbytes("src/throttle.ml"),110,11],
     _ks_=[0,caml_string_of_jsbytes("src/throttle.ml"),111,11],
     _kr_=[0,caml_string_of_jsbytes("src/throttle.ml"),113,16],
     _kq_=[0,caml_string_of_jsbytes("src/throttle.ml"),117,26],
     _kp_=[0,caml_string_of_jsbytes("src/throttle.ml"),122,11],
     _ko_=[0,caml_string_of_jsbytes("src/throttle.ml"),123,11],
     _kn_=[0,caml_string_of_jsbytes("src/throttle.ml"),124,69],
     _km_=[0,caml_string_of_jsbytes("src/throttle.ml"),127,40],
     _kk_=[0,caml_string_of_jsbytes("t")],
     _kl_=[0,caml_string_of_jsbytes("exn")],
     _j$_=[0,caml_string_of_jsbytes("cleaned")],
     _ka_=[0,caml_string_of_jsbytes("num_resources_not_cleaned")],
     _kb_=[0,caml_string_of_jsbytes("cleans")],
     _kc_=[0,caml_string_of_jsbytes("is_dead")],
     _kd_=[0,caml_string_of_jsbytes("capacity_available")],
     _ke_=[0,caml_string_of_jsbytes("num_jobs_running")],
     _kf_=[0,caml_string_of_jsbytes("jobs_waiting_to_start")],
     _kg_=[0,caml_string_of_jsbytes("job_resources_not_in_use")],
     _kh_=[0,caml_string_of_jsbytes("max_concurrent_jobs")],
     _ki_=[0,caml_string_of_jsbytes("continue_on_error")],
     _jQ_=[0,caml_string_of_jsbytes("src/throttle.ml"),52,18],
     _jN_=[0,caml_string_of_jsbytes("Abort")],
     _jO_=[0,caml_string_of_jsbytes("Start")],
     _jK_=[0,caml_string_of_jsbytes("Ok")],
     _jL_=[0,caml_string_of_jsbytes("Raised")],
     _jJ_=[0,caml_string_of_jsbytes("Aborted")],
     _jM_=[0,caml_string_of_jsbytes("outcome")],
     _jP_=[0,caml_string_of_jsbytes("start")],
     _jG_=[0,caml_string_of_jsbytes("Aborted")],
     _jH_=[0,caml_string_of_jsbytes("Ok")],
     _jI_=[0,caml_string_of_jsbytes("Raised")],
     _kM_=[0,caml_string_of_jsbytes("src/scheduler.ml"),280,4],
     _kN_=[0,1],
     _kL_=[0,caml_string_of_jsbytes("n")],
     _kK_=[0,caml_string_of_jsbytes("scheduler")],
     _kT_=[0,0],
     _kS_=[0,0],
     _kV_=[0,0],
     _kU_=[0,0],
     _kX_=[0,3903734],
     _kW_=[0,3903734],
     _le_=[0,0],
     _ld_=[0,0],
     _lg_=[0,0],
     _lf_=[0,0],
     _nd_=[0,caml_string_of_jsbytes("Mapped")],
     _nc_=[0,caml_string_of_jsbytes("src/pipe.ml"),926,4],
     _nb_=[0,caml_string_of_jsbytes("max_iterations_per_job")],
     _m__=[0,caml_string_of_jsbytes("When_value_read")],
     _m$_=[0,caml_string_of_jsbytes("When_value_processed")],
     _na_=[0,caml_string_of_jsbytes("Consumer")],
     _m9_=[0,caml_string_of_jsbytes("src/pipe.ml"),655,6],
     _m8_=[0,caml_string_of_jsbytes("num_values")],
     _m7_=[0,caml_string_of_jsbytes("here")],
     _m6_=[0,caml_string_of_jsbytes("src/pipe.ml"),609,4],
     _m5_=[0,caml_string_of_jsbytes("max_queue_length")],
     _m4_=[0,caml_string_of_jsbytes("src/pipe.ml"),560,4],
     _m3_=[0,caml_string_of_jsbytes("_")],
     _m2_=[0,caml_string_of_jsbytes("_")],
     _mZ_=[0,caml_string_of_jsbytes("_")],
     _m0_=[0,caml_string_of_jsbytes("pipe")],
     _m1_=[0,caml_string_of_jsbytes("consumer")],
     _mX_=[0,caml_string_of_jsbytes("_")],
     _mW_=[0,caml_string_of_jsbytes("_")],
     _mV_=[0,caml_string_of_jsbytes("_")],
     _mU_=[0,caml_string_of_jsbytes("_")],
     _mY_=[0,caml_string_of_jsbytes("pipe")],
     _mT_=[0,caml_string_of_jsbytes("size_budget")],
     _mS_=[0,caml_string_of_jsbytes("src/pipe.ml"),451,2],
     _mR_=[0,caml_string_of_jsbytes("src/pipe.ml"),442,2],
     _mQ_=[0,caml_string_of_jsbytes("_")],
     _mP_=[0,caml_string_of_jsbytes("_")],
     _mO_=[0,caml_string_of_jsbytes("_")],
     _mN_=[0,caml_string_of_jsbytes("_")],
     _mM_=[0,caml_string_of_jsbytes("src/pipe.ml"),308,2],
     _mL_=[0,caml_string_of_jsbytes("src/pipe.ml"),301,2],
     _mz_=[0,caml_string_of_jsbytes("_")],
     _my_=[0,caml_string_of_jsbytes("_")],
     _mK_=[0,caml_string_of_jsbytes("src/pipe.ml"),259,46],
     _mJ_=[0,caml_string_of_jsbytes("src/pipe.ml"),262,11],
     _mG_=[0,caml_string_of_jsbytes("src/pipe.ml"),270,13],
     _mI_=[0,caml_string_of_jsbytes("src/pipe.ml"),271,11],
     _mH_=[0,caml_string_of_jsbytes("src/pipe.ml"),277,30],
     _mD_=[0,caml_string_of_jsbytes("src/pipe.ml"),285,13],
     _mF_=[0,caml_string_of_jsbytes("src/pipe.ml"),282,36],
     _mE_=[0,caml_string_of_jsbytes("src/pipe.ml"),287,31],
     _mC_=[0,caml_string_of_jsbytes("src/pipe.ml"),294,13],
     _mA_=[0,caml_string_of_jsbytes("pipe")],
     _mB_=[0,caml_string_of_jsbytes("exn")],
     _mm_=[0,caml_string_of_jsbytes("upstream_flusheds")],
     _mn_=[0,caml_string_of_jsbytes("consumers")],
     _mo_=[0,caml_string_of_jsbytes("read_closed")],
     _mp_=[0,caml_string_of_jsbytes("closed")],
     _mq_=[0,caml_string_of_jsbytes("blocked_reads")],
     _mr_=[0,caml_string_of_jsbytes("blocked_flushes")],
     _ms_=[0,caml_string_of_jsbytes("num_values_read")],
     _mt_=[0,caml_string_of_jsbytes("pushback")],
     _mu_=[0,caml_string_of_jsbytes("size_budget")],
     _mv_=[0,caml_string_of_jsbytes("buffer")],
     _mw_=[0,caml_string_of_jsbytes("info")],
     _mx_=[0,caml_string_of_jsbytes("id")],
     _lW_=[0,caml_string_of_jsbytes("Ok")],
     _lX_=[0,caml_string_of_jsbytes("Reader_closed")],
     _lY_=[0,caml_string_of_jsbytes("ready")],
     _lZ_=[0,caml_string_of_jsbytes("fill_when_num_values_read")],
     _lS_=[0,caml_string_of_jsbytes("_")],
     _lV_=[0,caml_string_of_jsbytes("src/pipe.ml"),141,33],
     _lT_=[0,caml_string_of_jsbytes("pipe")],
     _lU_=[0,caml_string_of_jsbytes("exn")],
     _lQ_=[0,caml_string_of_jsbytes("consumer")],
     _lR_=[0,caml_string_of_jsbytes("wants")],
     _lJ_=[0,caml_string_of_jsbytes("Eof")],
     _lK_=[0,caml_string_of_jsbytes("Ok")],
     _lG_=[0,caml_string_of_jsbytes("Eof")],
     _lH_=[0,caml_string_of_jsbytes("Ok")],
     _lD_=[0,caml_string_of_jsbytes("Eof")],
     _lE_=[0,caml_string_of_jsbytes("Ok")],
     _lF_=[0,caml_string_of_jsbytes("Zero")],
     _lI_=[0,caml_string_of_jsbytes("One")],
     _lL_=[0,caml_string_of_jsbytes("At_most")],
     _lC_=[0,caml_string_of_jsbytes("src/pipe.ml"),79,54],
     _lA_=[0,caml_string_of_jsbytes("pipe")],
     _lB_=[0,caml_string_of_jsbytes("exn")],
     _lv_=[0,caml_string_of_jsbytes("downstream_flushed")],
     _lw_=[0,caml_string_of_jsbytes("Have_been_sent_downstream")],
     _lz_=[0,caml_string_of_jsbytes("Have_not_been_sent_downstream")],
     _lx_=[0,caml_string_of_jsbytes("values_read")],
     _ly_=[0,caml_string_of_jsbytes("pipe_id")],
     _ln_=[0,caml_string_of_jsbytes("Ok")],
     _lo_=[0,caml_string_of_jsbytes("Reader_closed")],
     _np_=[0,caml_string_of_jsbytes("src/mvar.ml"),60,2],
     _nn_=[0,caml_string_of_jsbytes("_")],
     _no_=[0,caml_string_of_jsbytes("src/mvar.ml"),16,364,386],
     _nk_=[0,caml_string_of_jsbytes("value_available")],
     _nl_=[0,caml_string_of_jsbytes("taken")],
     _nm_=[0,caml_string_of_jsbytes("current_value")],
     _nB_=[0,caml_string_of_jsbytes("waits")],
     _nG_=[0,caml_string_of_jsbytes("exn")],
     _nH_=[0,caml_string_of_jsbytes("field")],
     _nI_=[0,1],
     _nE_=[0,caml_string_of_jsbytes("exn")],
     _nF_=[0,1];
    function after(t,span)
     {var result=caml_call2(_ai_,t,span);
      if(caml_call2(_a_[17],span,_a_[74]) && caml_call2(_s_,result,t))
       return _ae_;
      return result}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$1);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Time_ns$0);
    var
     include$0=
      [0,
       _a_,
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
       _ay_,
       _az_,
       _aA_,
       _aB_,
       _aC_,
       _aD_,
       _aE_,
       _aF_,
       _aG_,
       _aH_,
       _aI_,
       after];
    caml_register_global(1287,include$0,"Async_kernel__Time_ns");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Async_kernel_);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$2);
    caml_call1(Expect_test_collector[4][1],cst_src_async_kernel_config_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$3,cst$0);
    var
     sec=_a_[80],
     concat=Core_kernel_String[26],
     t_of_sexp=Core_kernel_Int[100],
     sexp_of_t=Core_kernel_Int[101],
     validate=Core_kernel_Int[6],
     Epoll_max_ready_events=
      caml_call1
       (Core_kernel_Validated[2],[0,t_of_sexp,sexp_of_t,here,validate]),
     t_of_sexp$0=_a_[9],
     sexp_of_t$0=_a_[10],
     validate$0=_a_[37],
     Max_inter_cycle_timeout=
      caml_call1
       (Core_kernel_Validated[2],
        [0,t_of_sexp$0,sexp_of_t$0,here$0,validate$0]),
     t_of_sexp$1=_a_[9],
     sexp_of_t$1=_a_[10],
     validate$1=_a_[37],
     Min_inter_cycle_timeout=
      caml_call1
       (Core_kernel_Validated[2],
        [0,t_of_sexp$1,sexp_of_t$1,here$1,validate$1]),
     t_of_sexp$2=Core_kernel_Int[100],
     sexp_of_t$2=Core_kernel_Int[101],
     validate$2=Core_kernel_Int[6],
     include$1=
      caml_call1
       (Core_kernel_Validated[2],
        [0,t_of_sexp$2,sexp_of_t$2,here$2,validate$2]),
     _aJ_=include$1[1],
     _aK_=include$1[2],
     _aM_=include$1[4],
     _aN_=include$1[5],
     _aL_=include$1[3],
     default$0=caml_call1(_aM_,65536);
    function equal(t1,t2){return t1 === t2?1:0}
    var
     t_of_sexp$3=Core_kernel_Int[100],
     sexp_of_t$3=Core_kernel_Int[101],
     validate$3=Core_kernel_Int[6],
     Max_num_threads=
      caml_call1
       (Core_kernel_Validated[2],
        [0,t_of_sexp$3,sexp_of_t$3,here$3,validate$3]),
     t_of_sexp$4=Core_kernel_Int[100],
     sexp_of_t$4=Core_kernel_Int[101],
     validate$4=Core_kernel_Int[6],
     Max_num_jobs_per_priority_per_=
      caml_call1
       (Core_kernel_Validated[2],
        [0,t_of_sexp$4,sexp_of_t$4,here$4,validate$4]);
    function t_of_sexp$5(sexp)
     {if(0 === sexp[0])
       {var _NI_=sexp[1],switch$0=0;
        if(caml_string_notequal(_NI_,cst_Call_abort))
         {var switch$1=0;
          if(caml_string_notequal(_NI_,cst_Call_gcore))
           {var switch$2=0;
            if(caml_string_notequal(_NI_,cst_Default))
             if(caml_string_notequal(_NI_,cst_call_abort))
              if(caml_string_notequal(_NI_,cst_call_gcore))
               {if(caml_string_notequal(_NI_,cst_default))
                 {switch$0 = 1;switch$1 = 1;switch$2 = 1}}
              else
               switch$2 = 1;
             else
              {switch$1 = 1;switch$2 = 1}
            if(! switch$2)return 0}
          if(! switch$1)return 2}
        if(! switch$0)return 1}
      else
       {var _NJ_=sexp[1];
        if(! _NJ_)return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc,sexp);
        var _NK_=_NJ_[1];
        if(0 !== _NK_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc,sexp);
        var _NL_=_NK_[1],switch$3=0;
        if(caml_string_notequal(_NL_,cst_Call_abort$0))
         {var switch$4=0;
          if(caml_string_notequal(_NL_,cst_Call_gcore$0))
           {var switch$5=0;
            if(caml_string_notequal(_NL_,cst_Default$0))
             if(caml_string_notequal(_NL_,cst_call_abort$0))
              if(caml_string_notequal(_NL_,cst_call_gcore$0))
               {if(caml_string_notequal(_NL_,cst_default$0))
                 {switch$3 = 1;switch$4 = 1;switch$5 = 1}}
              else
               switch$5 = 1;
             else
              {switch$4 = 1;switch$5 = 1}
            if(! switch$5)
             return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp)}
          if(! switch$4)
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp)}
        if(! switch$3)
         return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc,sexp)}
    function sexp_of_t$5(param)
     {switch(param){case 0:return _aO_;case 1:return _aP_;default:return _aQ_}}
    var How_to_dump=[0,t_of_sexp$5,sexp_of_t$5];
    function watch_of_sexp(sexp)
     {if(0 === sexp[0])
       return caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc$0,sexp);
      var
       field_sexps=sexp[1],
       dump_if_delayed_by_field=[0,0],
       how_to_dump_field=[0,0],
       duplicates=[0,0],
       extra=[0,0],
       param=field_sexps;
      for(;;)
       {if(param)
         {var _NA_=param[1];
          if(1 === _NA_[0])
           {var _NB_=_NA_[1];
            if(_NB_)
             {var _NC_=_NB_[1];
              if(0 === _NC_[0])
               {var _ND_=_NB_[2],_NE_=_NC_[1],switch$0=0;
                if(! _ND_ || ! _ND_[2])switch$0 = 1;
                if(switch$0)
                 {var
                   tail=param[2],
                   field_sexp$2=
                    function(_NH_)
                     {function field_sexp(param)
                       {if(_NH_)
                         {if(_NH_[2])throw [0,Assert_failure,_aR_];
                          var x=_NH_[1];
                          return x}
                        return caml_call2
                                (Sexplib0_Sexp_conv_error[10],tp_loc$0,sexp)}
                      return field_sexp},
                   field_sexp=field_sexp$2(_ND_);
                  if(caml_string_notequal(_NE_,cst_dump_if_delayed_by))
                   if(caml_string_notequal(_NE_,cst_how_to_dump))
                    {if(Sexplib0_Sexp_conv[26][1])extra[1] = [0,_NE_,extra[1]]}
                   else
                    if(how_to_dump_field[1])
                     duplicates[1] = [0,_NE_,duplicates[1]];
                    else
                     {var
                       field_sexp$0=field_sexp(0),
                       fvalue=caml_call1(How_to_dump[1],field_sexp$0);
                      how_to_dump_field[1] = [0,fvalue]}
                  else
                   if(dump_if_delayed_by_field[1])
                    duplicates[1] = [0,_NE_,duplicates[1]];
                   else
                    {var
                      field_sexp$1=field_sexp(0),
                      fvalue$0=caml_call1(_a_[9],field_sexp$1);
                     dump_if_delayed_by_field[1] = [0,fvalue$0]}
                  var param=tail;
                  continue}}}}
          caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc$0,_NA_)}
        if(duplicates[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[12],tp_loc$0,duplicates[1],sexp);
        if(extra[1])
         return caml_call3
                 (Sexplib0_Sexp_conv_error[13],tp_loc$0,extra[1],sexp);
        var _NF_=dump_if_delayed_by_field[1],_NG_=how_to_dump_field[1];
        if(_NF_ && _NG_)
         {var how_to_dump_value=_NG_[1],dump_if_delayed_by_value=_NF_[1];
          return [0,dump_if_delayed_by_value,how_to_dump_value]}
        return caml_call3
                (Sexplib0_Sexp_conv_error[15],
                 tp_loc$0,
                 sexp,
                 [0,
                  [0,
                   0 === dump_if_delayed_by_field[1]?1:0,
                   cst_dump_if_delayed_by$0],
                  [0,[0,0 === how_to_dump_field[1]?1:0,cst_how_to_dump$0],0]])}}
    function sexp_of_watch(param)
     {var
       v_how_to_dump=param[2],
       v_dump_if_delayed_by=param[1],
       arg=caml_call1(How_to_dump[2],v_how_to_dump),
       bnds=[0,[1,[0,_aS_,[0,arg,0]]],0],
       arg$0=caml_call1(_a_[10],v_dump_if_delayed_by),
       bnds$0=[0,[1,[0,_aT_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function t_of_sexp$6(sexp)
     {if(0 === sexp[0])
       {var _Nw_=sexp[1],switch$0=0;
        if(caml_string_notequal(_Nw_,cst_Do_not_watch))
         {var switch$1=0;
          if(caml_string_notequal(_Nw_,cst_Watch))
           if(caml_string_notequal(_Nw_,cst_do_not_watch))
            {if(caml_string_notequal(_Nw_,cst_watch))
              {switch$0 = 1;switch$1 = 1}}
           else
            switch$1 = 1;
          if(! switch$1)
           return caml_call2(Sexplib0_Sexp_conv_error[5],tp_loc$1,sexp)}
        if(! switch$0)return 0}
      else
       {var _Nx_=sexp[1];
        if(! _Nx_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$1,sexp);
        var _Ny_=_Nx_[1];
        if(0 !== _Ny_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$1,sexp);
        var _Nz_=_Ny_[1],switch$2=0;
        if(caml_string_notequal(_Nz_,cst_Do_not_watch$0))
         {var switch$3=0;
          if(caml_string_notequal(_Nz_,cst_Watch$0))
           if(caml_string_notequal(_Nz_,cst_do_not_watch$0))
            {if(caml_string_notequal(_Nz_,cst_watch$0))
              {switch$2 = 1;switch$3 = 1}}
           else
            switch$3 = 1;
          if(! switch$3)
           {var sexp_args=_Nx_[2];
            if(sexp_args && ! sexp_args[2])
             {var v0=sexp_args[1],v0$0=watch_of_sexp(v0);return [0,v0$0]}
            return caml_call3(Sexplib0_Sexp_conv_error[4],tp_loc$1,_Nz_,sexp)}}
        if(! switch$2)
         return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$1,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$1,sexp)}
    function sexp_of_t$6(param)
     {if(param)
       {var v0=param[1],v0$0=sexp_of_watch(v0);return [1,[0,_aU_,[0,v0$0,0]]]}
      return _aV_}
    function t_of_sexp$7(sexp)
     {if(0 === sexp[0])
       {var _Nm_=sexp[1],_Nn_=caml_string_compare(_Nm_,cst_all),switch$0=0;
        if(0 <= _Nn_)
         if(0 < _Nn_)
          {var _No_=caml_string_compare(_Nm_,cst_parallel);
           if(0 <= _No_)
            if(0 < _No_)
             if(caml_string_notequal(_Nm_,cst_reader))
              if(caml_string_notequal(_Nm_,cst_scheduler))
               if(caml_string_notequal(_Nm_,cst_shutdown))
                if(caml_string_notequal(_Nm_,cst_thread_pool))
                 if(caml_string_notequal(_Nm_,cst_thread_safe))
                  {if(! caml_string_notequal(_Nm_,cst_writer))switch$0 = 15}
                 else
                  switch$0 = 14;
                else
                 switch$0 = 13;
               else
                switch$0 = 12;
              else
               switch$0 = 11;
             else
              switch$0 = 10;
            else
             switch$0 = 9;
           else
            if(caml_string_notequal(_Nm_,cst_clock))
             if(caml_string_notequal(_Nm_,cst_fd))
              if(caml_string_notequal(_Nm_,cst_file_descr_watcher))
               if(caml_string_notequal(_Nm_,cst_finalizers))
                if(caml_string_notequal(_Nm_,cst_interruptor))
                 if(caml_string_notequal(_Nm_,cst_monitor))
                  {if(! caml_string_notequal(_Nm_,cst_monitor_send_exn))
                    switch$0 = 8}
                 else
                  switch$0 = 7;
                else
                 switch$0 = 6;
               else
                switch$0 = 5;
              else
               switch$0 = 4;
             else
              switch$0 = 3;
            else
             switch$0 = 2}
         else
          switch$0 = 1;
        else
         {var _Np_=caml_string_compare(_Nm_,cst_Monitor_send_exn);
          if(0 <= _Np_)
           if(0 < _Np_)
            if(caml_string_notequal(_Nm_,cst_Parallel))
             if(caml_string_notequal(_Nm_,cst_Reader))
              if(caml_string_notequal(_Nm_,cst_Scheduler))
               if(caml_string_notequal(_Nm_,cst_Shutdown))
                if(caml_string_notequal(_Nm_,cst_Thread_pool))
                 if(caml_string_notequal(_Nm_,cst_Thread_safe))
                  {if(! caml_string_notequal(_Nm_,cst_Writer))switch$0 = 15}
                 else
                  switch$0 = 14;
                else
                 switch$0 = 13;
               else
                switch$0 = 12;
              else
               switch$0 = 11;
             else
              switch$0 = 10;
            else
             switch$0 = 9;
           else
            switch$0 = 8;
          else
           if(caml_string_notequal(_Nm_,cst_All))
            if(caml_string_notequal(_Nm_,cst_Clock))
             if(caml_string_notequal(_Nm_,cst_Fd))
              if(caml_string_notequal(_Nm_,cst_File_descr_watcher))
               if(caml_string_notequal(_Nm_,cst_Finalizers))
                if(caml_string_notequal(_Nm_,cst_Interruptor))
                 {if(! caml_string_notequal(_Nm_,cst_Monitor))switch$0 = 7}
                else
                 switch$0 = 6;
               else
                switch$0 = 5;
              else
               switch$0 = 4;
             else
              switch$0 = 3;
            else
             switch$0 = 2;
           else
            switch$0 = 1}
        switch(switch$0)
         {case 1:return 0;
          case 2:return 1;
          case 3:return 2;
          case 4:return 3;
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
          case 15:return 14
          }}
      else
       {var _Nq_=sexp[1];
        if(! _Nq_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$2,sexp);
        var _Nr_=_Nq_[1];
        if(0 !== _Nr_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$2,sexp);
        var _Ns_=_Nr_[1],_Nt_=caml_string_compare(_Ns_,cst_all$0),switch$1=0;
        if(0 <= _Nt_)
         if(0 < _Nt_)
          {var _Nu_=caml_string_compare(_Ns_,cst_parallel$0);
           if(0 <= _Nu_)
            if(0 < _Nu_)
             if(caml_string_notequal(_Ns_,cst_reader$0))
              if(caml_string_notequal(_Ns_,cst_scheduler$0))
               if(caml_string_notequal(_Ns_,cst_shutdown$0))
                if(caml_string_notequal(_Ns_,cst_thread_pool$0))
                 if(caml_string_notequal(_Ns_,cst_thread_safe$0))
                  {if(! caml_string_notequal(_Ns_,cst_writer$0))switch$1 = 15}
                 else
                  switch$1 = 14;
                else
                 switch$1 = 13;
               else
                switch$1 = 12;
              else
               switch$1 = 11;
             else
              switch$1 = 10;
            else
             switch$1 = 9;
           else
            if(caml_string_notequal(_Ns_,cst_clock$0))
             if(caml_string_notequal(_Ns_,cst_fd$0))
              if(caml_string_notequal(_Ns_,cst_file_descr_watcher$0))
               if(caml_string_notequal(_Ns_,cst_finalizers$0))
                if(caml_string_notequal(_Ns_,cst_interruptor$0))
                 if(caml_string_notequal(_Ns_,cst_monitor$0))
                  {if(! caml_string_notequal(_Ns_,cst_monitor_send_exn$0))
                    switch$1 = 8}
                 else
                  switch$1 = 7;
                else
                 switch$1 = 6;
               else
                switch$1 = 5;
              else
               switch$1 = 4;
             else
              switch$1 = 3;
            else
             switch$1 = 2}
         else
          switch$1 = 1;
        else
         {var _Nv_=caml_string_compare(_Ns_,cst_Monitor_send_exn$0);
          if(0 <= _Nv_)
           if(0 < _Nv_)
            if(caml_string_notequal(_Ns_,cst_Parallel$0))
             if(caml_string_notequal(_Ns_,cst_Reader$0))
              if(caml_string_notequal(_Ns_,cst_Scheduler$0))
               if(caml_string_notequal(_Ns_,cst_Shutdown$0))
                if(caml_string_notequal(_Ns_,cst_Thread_pool$0))
                 if(caml_string_notequal(_Ns_,cst_Thread_safe$0))
                  {if(! caml_string_notequal(_Ns_,cst_Writer$0))switch$1 = 15}
                 else
                  switch$1 = 14;
                else
                 switch$1 = 13;
               else
                switch$1 = 12;
              else
               switch$1 = 11;
             else
              switch$1 = 10;
            else
             switch$1 = 9;
           else
            switch$1 = 8;
          else
           if(caml_string_notequal(_Ns_,cst_All$0))
            if(caml_string_notequal(_Ns_,cst_Clock$0))
             if(caml_string_notequal(_Ns_,cst_Fd$0))
              if(caml_string_notequal(_Ns_,cst_File_descr_watcher$0))
               if(caml_string_notequal(_Ns_,cst_Finalizers$0))
                if(caml_string_notequal(_Ns_,cst_Interruptor$0))
                 {if(! caml_string_notequal(_Ns_,cst_Monitor$0))switch$1 = 7}
                else
                 switch$1 = 6;
               else
                switch$1 = 5;
              else
               switch$1 = 4;
             else
              switch$1 = 3;
            else
             switch$1 = 2;
           else
            switch$1 = 1}
        switch(switch$1)
         {case 1:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 2:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 3:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 4:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 5:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 6:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 7:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 8:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 9:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 10:
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 11:
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 12:
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 13:
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 14:
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp);
          case 15:return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$2,sexp)
          }}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$2,sexp)}
    function sexp_of_t$7(param)
     {switch(param)
       {case 0:return _aW_;
        case 1:return _aX_;
        case 2:return _aY_;
        case 3:return _aZ_;
        case 4:return _a0_;
        case 5:return _a1_;
        case 6:return _a2_;
        case 7:return _a3_;
        case 8:return _a4_;
        case 9:return _a5_;
        case 10:return _a6_;
        case 11:return _a7_;
        case 12:return _a8_;
        case 13:return _a9_;
        default:return _a__}}
    function equal$0(x_003,x_004)
     {var match=caml_int_compare(x_003,x_004);return 0 === match?1:0}
    var
     include$2=caml_call1(Core_kernel_Sexpable[1],[0,t_of_sexp$7,sexp_of_t$7]),
     to_string=include$2[2];
    function t_of_sexp$8(sexp)
     {if(0 === sexp[0])
       {var _Ni_=sexp[1],switch$0=0;
        if(caml_string_notequal(_Ni_,cst_Epoll))
         {var switch$1=0;
          if(caml_string_notequal(_Ni_,cst_Epoll_if_timerfd))
           {var switch$2=0;
            if(caml_string_notequal(_Ni_,cst_Select))
             if(caml_string_notequal(_Ni_,cst_epoll))
              if(caml_string_notequal(_Ni_,cst_epoll_if_timerfd))
               {if(caml_string_notequal(_Ni_,cst_select))
                 {switch$0 = 1;switch$1 = 1;switch$2 = 1}}
              else
               switch$2 = 1;
             else
              {switch$1 = 1;switch$2 = 1}
            if(! switch$2)return 2}
          if(! switch$1)return 0}
        if(! switch$0)return 1}
      else
       {var _Nj_=sexp[1];
        if(! _Nj_)
         return caml_call2(Sexplib0_Sexp_conv_error[7],tp_loc$3,sexp);
        var _Nk_=_Nj_[1];
        if(0 !== _Nk_[0])
         return caml_call2(Sexplib0_Sexp_conv_error[6],tp_loc$3,sexp);
        var _Nl_=_Nk_[1],switch$3=0;
        if(caml_string_notequal(_Nl_,cst_Epoll$0))
         {var switch$4=0;
          if(caml_string_notequal(_Nl_,cst_Epoll_if_timerfd$0))
           {var switch$5=0;
            if(caml_string_notequal(_Nl_,cst_Select$0))
             if(caml_string_notequal(_Nl_,cst_epoll$0))
              if(caml_string_notequal(_Nl_,cst_epoll_if_timerfd$0))
               {if(caml_string_notequal(_Nl_,cst_select$0))
                 {switch$3 = 1;switch$4 = 1;switch$5 = 1}}
              else
               switch$5 = 1;
             else
              {switch$4 = 1;switch$5 = 1}
            if(! switch$5)
             return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$3,sexp)}
          if(! switch$4)
           return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$3,sexp)}
        if(! switch$3)
         return caml_call2(Sexplib0_Sexp_conv_error[3],tp_loc$3,sexp)}
      return caml_call2(Sexplib0_Sexp_conv_error[8],tp_loc$3,sexp)}
    function sexp_of_t$8(param)
     {switch(param){case 0:return _a$_;case 1:return _ba_;default:return _bb_}}
    var
     T=[0,t_of_sexp$8,sexp_of_t$8],
     t_of_sexp$9=T[1],
     sexp_of_t$9=T[2],
     include$3=caml_call1(Core_kernel_Sexpable[1],T),
     to_string$0=include$3[2];
    function timing_wheel_config(r){return r[16]}
    function thread_pool_cpu_affinity(r){return r[15]}
    function report_thread_pool_stuck_for(r){return r[14]}
    function record_backtraces(r){return r[13]}
    function print_debug_messages_for(r){return r[12]}
    function min_inter_cycle_timeout(r){return r[11]}
    function max_num_jobs_per_priority_per_(r){return r[10]}
    function max_num_threads(r){return r[9]}
    function max_num_open_file_descrs(r){return r[8]}
    function max_inter_cycle_timeout(r){return r[7]}
    function file_descr_watcher(r){return r[6]}
    function epoll_max_ready_events(r){return r[5]}
    function dump_core_on_job_delay(r){return r[4]}
    function detect_invalid_access_from_thr(r){return r[3]}
    function check_invariants(r){return r[2]}
    function abort_after_thread_pool_stuck_(r){return r[1]}
    function _bc_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              v]}
    var
     _bd_=0,
     timing_wheel_config$0=
      [0,
       function(param){return 0},
       cst_timing_wheel_config,
       _bd_,
       timing_wheel_config,
       _bc_];
    function _be_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              v,
              r[16]]}
    var
     _bf_=0,
     thread_pool_cpu_affinity$0=
      [0,
       function(param){return 0},
       cst_thread_pool_cpu_affinity,
       _bf_,
       thread_pool_cpu_affinity,
       _be_];
    function _bg_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              v,
              r[15],
              r[16]]}
    var
     _bh_=0,
     report_thread_pool_stuck_for$0=
      [0,
       function(param){return 0},
       cst_report_thread_pool_stuck_f,
       _bh_,
       report_thread_pool_stuck_for,
       _bg_];
    function _bi_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              v,
              r[14],
              r[15],
              r[16]]}
    var
     _bj_=0,
     record_backtraces$0=
      [0,
       function(param){return 0},
       cst_record_backtraces,
       _bj_,
       record_backtraces,
       _bi_];
    function _bk_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              v,
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bl_=0,
     print_debug_messages_for$0=
      [0,
       function(param){return 0},
       cst_print_debug_messages_for,
       _bl_,
       print_debug_messages_for,
       _bk_];
    function _bm_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              v,
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bn_=0,
     min_inter_cycle_timeout$0=
      [0,
       function(param){return 0},
       cst_min_inter_cycle_timeout,
       _bn_,
       min_inter_cycle_timeout,
       _bm_];
    function _bo_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              v,
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bp_=0,
     max_num_jobs_per_priority_per_$0=
      [0,
       function(param){return 0},
       cst_max_num_jobs_per_priority_,
       _bp_,
       max_num_jobs_per_priority_per_,
       _bo_];
    function _bq_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              v,
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _br_=0,
     max_num_threads$0=
      [0,
       function(param){return 0},
       cst_max_num_threads,
       _br_,
       max_num_threads,
       _bq_];
    function _bs_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              v,
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bt_=0,
     max_num_open_file_descrs$0=
      [0,
       function(param){return 0},
       cst_max_num_open_file_descrs,
       _bt_,
       max_num_open_file_descrs,
       _bs_];
    function _bu_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              v,
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bv_=0,
     max_inter_cycle_timeout$0=
      [0,
       function(param){return 0},
       cst_max_inter_cycle_timeout,
       _bv_,
       max_inter_cycle_timeout,
       _bu_];
    function _bw_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              v,
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bx_=0,
     file_descr_watcher$0=
      [0,
       function(param){return 0},
       cst_file_descr_watcher$1,
       _bx_,
       file_descr_watcher,
       _bw_];
    function _by_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              v,
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bz_=0,
     epoll_max_ready_events$0=
      [0,
       function(param){return 0},
       cst_epoll_max_ready_events,
       _bz_,
       epoll_max_ready_events,
       _by_];
    function _bA_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              v,
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bB_=0,
     dump_core_on_job_delay$0=
      [0,
       function(param){return 0},
       cst_dump_core_on_job_delay,
       _bB_,
       dump_core_on_job_delay,
       _bA_];
    function _bC_(r,v)
     {return [0,
              r[1],
              r[2],
              v,
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bD_=0,
     detect_invalid_access_from_thr$0=
      [0,
       function(param){return 0},
       cst_detect_invalid_access_from,
       _bD_,
       detect_invalid_access_from_thr,
       _bC_];
    function _bE_(r,v)
     {return [0,
              r[1],
              v,
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bF_=0,
     check_invariants$0=
      [0,
       function(param){return 0},
       cst_check_invariants,
       _bF_,
       check_invariants,
       _bE_];
    function _bG_(r,v)
     {return [0,
              v,
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16]]}
    var
     _bH_=0,
     abort_after_thread_pool_stuck_$0=
      [0,
       function(param){return 0},
       cst_abort_after_thread_pool_st,
       _bH_,
       abort_after_thread_pool_stuck_,
       _bG_];
    function sexp_of_t$10(param)
     {var
       v_timing_wheel_config=param[16],
       v_thread_pool_cpu_affinity=param[15],
       v_report_thread_pool_stuck_for=param[14],
       v_record_backtraces=param[13],
       v_print_debug_messages_for=param[12],
       v_min_inter_cycle_timeout=param[11],
       v_max_num_jobs_per_priority_pe=param[10],
       v_max_num_threads=param[9],
       v_max_num_open_file_descrs=param[8],
       v_max_inter_cycle_timeout=param[7],
       v_file_descr_watcher=param[6],
       v_epoll_max_ready_events=param[5],
       v_dump_core_on_job_delay=param[4],
       v_detect_invalid_access_from_t=param[3],
       v_check_invariants=param[2],
       v_abort_after_thread_pool_stuc=param[1],
       bnds=0;
      if(v_timing_wheel_config)
       var
        v=v_timing_wheel_config[1],
        arg=caml_call1(Timing_wheel[8][2],v),
        bnd=[1,[0,_bJ_,[0,arg,0]]],
        bnds$0=[0,bnd,bnds];
      else
       var bnds$0=bnds;
      if(v_thread_pool_cpu_affinity)
       var
        v$0=v_thread_pool_cpu_affinity[1],
        arg$0=caml_call1(Thread_pool_cpu_affinity[3],v$0),
        bnd$0=[1,[0,_bK_,[0,arg$0,0]]],
        bnds$1=[0,bnd$0,bnds$0];
      else
       var bnds$1=bnds$0;
      if(v_report_thread_pool_stuck_for)
       var
        v$1=v_report_thread_pool_stuck_for[1],
        arg$1=caml_call1(_a_[10],v$1),
        bnd$1=[1,[0,_bL_,[0,arg$1,0]]],
        bnds$2=[0,bnd$1,bnds$1];
      else
       var bnds$2=bnds$1;
      if(v_record_backtraces)
       var
        v$2=v_record_backtraces[1],
        arg$2=caml_call1(Core_kernel[289],v$2),
        bnd$2=[1,[0,_bM_,[0,arg$2,0]]],
        bnds$3=[0,bnd$2,bnds$2];
      else
       var bnds$3=bnds$2;
      if(v_print_debug_messages_for)
       var
        v$3=v_print_debug_messages_for[1],
        arg$3=caml_call2(Core_kernel[405],sexp_of_t$7,v$3),
        bnd$3=[1,[0,_bN_,[0,arg$3,0]]],
        bnds$4=[0,bnd$3,bnds$3];
      else
       var bnds$4=bnds$3;
      if(v_min_inter_cycle_timeout)
       var
        v$4=v_min_inter_cycle_timeout[1],
        arg$4=caml_call1(Min_inter_cycle_timeout[2],v$4),
        bnd$4=[1,[0,_bO_,[0,arg$4,0]]],
        bnds$5=[0,bnd$4,bnds$4];
      else
       var bnds$5=bnds$4;
      if(v_max_num_jobs_per_priority_pe)
       var
        v$5=v_max_num_jobs_per_priority_pe[1],
        arg$5=caml_call1(Max_num_jobs_per_priority_per_[2],v$5),
        bnd$5=[1,[0,_bP_,[0,arg$5,0]]],
        bnds$6=[0,bnd$5,bnds$5];
      else
       var bnds$6=bnds$5;
      if(v_max_num_threads)
       var
        v$6=v_max_num_threads[1],
        arg$6=caml_call1(Max_num_threads[2],v$6),
        bnd$6=[1,[0,_bQ_,[0,arg$6,0]]],
        bnds$7=[0,bnd$6,bnds$6];
      else
       var bnds$7=bnds$6;
      if(v_max_num_open_file_descrs)
       var
        v$7=v_max_num_open_file_descrs[1],
        arg$7=caml_call1(_aK_,v$7),
        bnd$7=[1,[0,_bR_,[0,arg$7,0]]],
        bnds$8=[0,bnd$7,bnds$7];
      else
       var bnds$8=bnds$7;
      if(v_max_inter_cycle_timeout)
       var
        v$8=v_max_inter_cycle_timeout[1],
        arg$8=caml_call1(Max_inter_cycle_timeout[2],v$8),
        bnd$8=[1,[0,_bS_,[0,arg$8,0]]],
        bnds$9=[0,bnd$8,bnds$8];
      else
       var bnds$9=bnds$8;
      if(v_file_descr_watcher)
       var
        v$9=v_file_descr_watcher[1],
        arg$9=caml_call1(sexp_of_t$9,v$9),
        bnd$9=[1,[0,_bT_,[0,arg$9,0]]],
        bnds$10=[0,bnd$9,bnds$9];
      else
       var bnds$10=bnds$9;
      if(v_epoll_max_ready_events)
       var
        v$10=v_epoll_max_ready_events[1],
        arg$10=caml_call1(Epoll_max_ready_events[2],v$10),
        bnd$10=[1,[0,_bU_,[0,arg$10,0]]],
        bnds$11=[0,bnd$10,bnds$10];
      else
       var bnds$11=bnds$10;
      if(v_dump_core_on_job_delay)
       var
        v$11=v_dump_core_on_job_delay[1],
        arg$11=sexp_of_t$6(v$11),
        bnd$11=[1,[0,_bV_,[0,arg$11,0]]],
        bnds$12=[0,bnd$11,bnds$11];
      else
       var bnds$12=bnds$11;
      if(v_detect_invalid_access_from_t)
       var
        v$12=v_detect_invalid_access_from_t[1],
        arg$12=caml_call1(Core_kernel[289],v$12),
        bnd$12=[1,[0,_bW_,[0,arg$12,0]]],
        bnds$13=[0,bnd$12,bnds$12];
      else
       var bnds$13=bnds$12;
      if(v_check_invariants)
       var
        v$13=v_check_invariants[1],
        arg$13=caml_call1(Core_kernel[289],v$13),
        bnd$13=[1,[0,_bX_,[0,arg$13,0]]],
        bnds$14=[0,bnd$13,bnds$13];
      else
       var bnds$14=bnds$13;
      if(v_abort_after_thread_pool_stuc)
       var
        v$14=v_abort_after_thread_pool_stuc[1],
        arg$14=caml_call1(_a_[10],v$14),
        bnd$14=[1,[0,_bY_,[0,arg$14,0]]],
        bnds$15=[0,bnd$14,bnds$14];
      else
       var bnds$15=bnds$14;
      return [1,bnds$15]}
    function default_timing_wheel_config_fo(word_size)
     {if(word_size)
       var
        level_bits$1=level_bits,
        alarm_precision=caml_call2(Timing_wheel[1][13],Timing_wheel[1][10],3);
      else
       var level_bits$1=level_bits$0,alarm_precision=Timing_wheel[1][10];
      var _Nh_=[0,caml_call2(Timing_wheel[7][5],0,level_bits$1)];
      return caml_call4(Timing_wheel[8][4],0,_Nh_,alarm_precision,0)}
    var
     default_timing_wheel_config=
      default_timing_wheel_config_fo(Base_Word_size[3]),
     _b0_=[0,caml_call1(sec,1.)],
     _b3_=caml_call1(sec,0.),
     _b4_=[0,caml_call1(Min_inter_cycle_timeout[4],_b3_)],
     _b5_=[0,caml_call1(Max_num_jobs_per_priority_per_[4],500)],
     _b6_=[0,caml_call1(Max_num_threads[4],50)],
     _b7_=caml_call1(sec,0.05),
     _b8_=[0,caml_call1(Max_inter_cycle_timeout[4],_b7_)],
     _b__=[0,caml_call1(Epoll_max_ready_events[4],256)],
     default$1=
      [0,
       [0,caml_call1(sec,60.)],
       _cb_,
       _ca_,
       _b$_,
       _b__,
       _b9_,
       _b8_,
       [0,default$0],
       _b6_,
       _b5_,
       _b4_,
       _b2_,
       _b1_,
       _b0_,
       _bZ_,
       [0,default_timing_wheel_config]],
     _cc_=default$1[16],
     _ce_=caml_call1(Core_kernel_Int[126][58],_cd_),
     _cf_=[0,[0,caml_call1(Thread_pool_cpu_affinity[1][4],_ce_)]],
     example=
      [0,
       default$1[1],
       default$1[2],
       default$1[3],
       default$1[4],
       default$1[5],
       default$1[6],
       default$1[7],
       default$1[8],
       default$1[9],
       default$1[10],
       default$1[11],
       _cg_,
       default$1[13],
       default$1[14],
       _cf_,
       _cc_];
    function usage(param)
     {var _M__=0;
      function field(to_sexp,description,ac,field)
       {var
         _Nf_=caml_call2(Base_Field[3],field,default$1),
         _Ng_=
          caml_call1(to_sexp,caml_call4(Core_kernel_Option[50],0,0,0,_Nf_));
        return [0,[0,caml_call1(Base_Field[2],field),_Ng_,description],ac]}
      var
       _MR_=Timing_wheel[8][2],
       _MS_=Thread_pool_cpu_affinity[3],
       _MT_=_a_[10],
       _MU_=Core_kernel[289];
      function _MV_(d)
       {return caml_call2(concat,0,[0,cst$1,[0,caml_call1(to_string,d),_cm_]])}
      var
       _MW_=
        [0,
         cst_A_list_of_tags_specifying_,
         [0,
          caml_call2(concat,0,caml_call2(Core_kernel_List[71],list,_MV_)),
          _cl_]],
       _MX_=caml_call1(Core_kernel[405],sexp_of_t$7),
       _MY_=Min_inter_cycle_timeout[2],
       _MZ_=Max_num_jobs_per_priority_per_[2],
       _M0_=Max_num_threads[2];
      function _M1_(default$0)
       {var
         _Nd_=caml_call1(_aN_,default$0),
         _Ne_=
          caml_call2
           (concat,
            0,
            [0,cst_min,[0,caml_call2(Core_kernel_Int[16],0,_Nd_),_cr_]]);
        return caml_call1(Core_kernel[455],_Ne_)}
      var
       _M2_=Max_inter_cycle_timeout[2],
       _M3_=
        [0,
         cst_This_determines_what_OS_su,
         [0,
          caml_call2
           (concat,_cu_,caml_call2(Core_kernel_List[71],list$0,to_string$0)),
          _ct_]],
       _M4_=Epoll_max_ready_events[2],
       _M5_=Core_kernel[289],
       _M6_=Core_kernel[289],
       fields=
        field
         (_MR_,
          _ch_,
          field
           (_MS_,
            _ci_,
            field
             (_MT_,
              _cj_,
              field
               (_MU_,
                _ck_,
                field
                 (_MX_,
                  _MW_,
                  field
                   (_MY_,
                    _cn_,
                    field
                     (_MZ_,
                      _co_,
                      field
                       (_M0_,
                        _cp_,
                        field
                         (_M1_,
                          _cq_,
                          field
                           (_M2_,
                            _cs_,
                            field
                             (sexp_of_t$9,
                              _M3_,
                              field
                               (_M4_,
                                _cv_,
                                field
                                 (sexp_of_t$6,
                                  _cw_,
                                  field
                                   (_M5_,
                                    _cx_,
                                    field
                                     (_M6_,
                                      _cy_,
                                      field(_a_[10],_cz_,0,abort_after_thread_pool_stuck_$0),
                                      check_invariants$0),
                                    detect_invalid_access_from_thr$0),
                                  dump_core_on_job_delay$0),
                                epoll_max_ready_events$0),
                              file_descr_watcher$0),
                            max_inter_cycle_timeout$0),
                          max_num_open_file_descrs$0),
                        max_num_threads$0),
                      max_num_jobs_per_priority_per_$0),
                    min_inter_cycle_timeout$0),
                  print_debug_messages_for$0),
                record_backtraces$0),
              report_thread_pool_stuck_for$0),
            thread_pool_cpu_affinity$0),
          timing_wheel_config$0);
      function _M7_(param)
       {var description=param[3],default$0=param[2],name=param[1];
        return caml_call2
                (concat,
                 0,
                 [0,
                  cst$3,
                  [0,
                   name,
                   [0,
                    cst_default$1,
                    [0,
                     caml_call1(Core_kernel_Sexp[81],default$0),
                     [0,cst$2,description]]]]])}
      function _M8_(param,_Nc_)
       {var name2=_Nc_[1],name1=param[1];
        return caml_call2(Core_kernel_String[112],name1,name2)}
      var
       _M9_=caml_call2(Core_kernel_List[58],fields,_M8_),
       _M$_=
        [0,
         cst_Here_is_an_explanation_of_,
         [0,
          caml_call2(concat,0,caml_call2(Core_kernel_List[71],_M9_,_M7_)),
          _M__]],
       _Na_=sexp_of_t$10(example),
       _Nb_=
        caml_call2
         (concat,
          0,
          [0,
           cst_The,
           [0,
            environment_variable,
            [0,
             cst_environment_variable_affec,
             [0,caml_call2(Core_kernel_Sexp[79],0,_Na_),_M$_]]]]);
      caml_call2(Core_kernel[216],_cA_,_Nb_);
      return caml_call1(Core_kernel[80],1)}
    function _cB_(param){return runtime.caml_sys_getenv(environment_variable)}
    var match=caml_call1(Core_kernel_Option[57],_cB_);
    if(match)
     {var _cC_=match[1];
      if(caml_string_notequal(_cC_,cst$4))
       {var
         _cD_=
          function(param$0)
           {var sexp=caml_call1(Core_kernel_Sexp[73],_cC_);
            if(0 === sexp[0])
             return caml_call2(Sexplib0_Sexp_conv_error[16],tp_loc$4,sexp);
            var
             field_sexps=sexp[1],
             abort_after_thread_pool_stuck_=[0,0],
             check_invariants_field=[0,0],
             detect_invalid_access_from_thr=[0,0],
             dump_core_on_job_delay_field=[0,0],
             epoll_max_ready_events_field=[0,0],
             file_descr_watcher_field=[0,0],
             max_inter_cycle_timeout_field=[0,0],
             max_num_open_file_descrs_field=[0,0],
             max_num_threads_field=[0,0],
             max_num_jobs_per_priority_per_=[0,0],
             min_inter_cycle_timeout_field=[0,0],
             print_debug_messages_for_field=[0,0],
             record_backtraces_field=[0,0],
             report_thread_pool_stuck_for_f=[0,0],
             thread_pool_cpu_affinity_field=[0,0],
             timing_wheel_config_field=[0,0],
             duplicates=[0,0],
             extra=[0,0],
             param=field_sexps;
            for(;;)
             {if(param)
               {var _ML_=param[1];
                if(1 === _ML_[0])
                 {var _MM_=_ML_[1];
                  if(_MM_)
                   {var _MN_=_MM_[1];
                    if(0 === _MN_[0])
                     {var _MO_=_MM_[2],_MP_=_MN_[1],switch$1=0;
                      if(! _MO_ || ! _MO_[2])switch$1 = 1;
                      if(switch$1)
                       {var
                         tail=param[2],
                         field_sexp$16=
                          function(_MQ_)
                           {function field_sexp(param)
                             {if(_MQ_)
                               {if(_MQ_[2])throw [0,Assert_failure,_bI_];
                                var x=_MQ_[1];
                                return x}
                              return caml_call2
                                      (Sexplib0_Sexp_conv_error[10],tp_loc$4,sexp)}
                            return field_sexp},
                         field_sexp=field_sexp$16(_MO_),
                         switch$0=
                          caml_string_compare(_MP_,cst_max_num_open_file_descrs$0),
                         switch$2=0;
                        if(0 <= switch$0)
                         if(0 < switch$0)
                          if(caml_string_notequal(_MP_,cst_max_num_threads$0))
                           if(caml_string_notequal(_MP_,cst_min_inter_cycle_timeout$0))
                            if
                             (caml_string_notequal(_MP_,cst_print_debug_messages_for$0))
                             if(caml_string_notequal(_MP_,cst_record_backtraces$0))
                              if
                               (caml_string_notequal(_MP_,cst_report_thread_pool_stuck_f$0))
                               if
                                (caml_string_notequal(_MP_,cst_thread_pool_cpu_affinity$0))
                                if(caml_string_notequal(_MP_,cst_timing_wheel_config$0))
                                 switch$2 = 1;
                                else
                                 if(timing_wheel_config_field[1])
                                  duplicates[1] = [0,_MP_,duplicates[1]];
                                 else
                                  {var
                                    field_sexp$0=field_sexp(0),
                                    fvalue=caml_call1(Timing_wheel[8][1],field_sexp$0);
                                   timing_wheel_config_field[1] = [0,fvalue]}
                               else
                                if(thread_pool_cpu_affinity_field[1])
                                 duplicates[1] = [0,_MP_,duplicates[1]];
                                else
                                 {var
                                   field_sexp$1=field_sexp(0),
                                   fvalue$0=
                                    caml_call1(Thread_pool_cpu_affinity[2],field_sexp$1);
                                  thread_pool_cpu_affinity_field[1] = [0,fvalue$0]}
                              else
                               if(report_thread_pool_stuck_for_f[1])
                                duplicates[1] = [0,_MP_,duplicates[1]];
                               else
                                {var
                                  field_sexp$2=field_sexp(0),
                                  fvalue$1=caml_call1(_a_[9],field_sexp$2);
                                 report_thread_pool_stuck_for_f[1] = [0,fvalue$1]}
                             else
                              if(record_backtraces_field[1])
                               duplicates[1] = [0,_MP_,duplicates[1]];
                              else
                               {var
                                 field_sexp$3=field_sexp(0),
                                 fvalue$2=caml_call1(Core_kernel[290],field_sexp$3);
                                record_backtraces_field[1] = [0,fvalue$2]}
                            else
                             if(print_debug_messages_for_field[1])
                              duplicates[1] = [0,_MP_,duplicates[1]];
                             else
                              {var
                                field_sexp$4=field_sexp(0),
                                fvalue$3=
                                 caml_call2(Core_kernel[406],t_of_sexp$7,field_sexp$4);
                               print_debug_messages_for_field[1] = [0,fvalue$3]}
                           else
                            if(min_inter_cycle_timeout_field[1])
                             duplicates[1] = [0,_MP_,duplicates[1]];
                            else
                             {var
                               field_sexp$5=field_sexp(0),
                               fvalue$4=caml_call1(Min_inter_cycle_timeout[1],field_sexp$5);
                              min_inter_cycle_timeout_field[1] = [0,fvalue$4]}
                          else
                           if(max_num_threads_field[1])
                            duplicates[1] = [0,_MP_,duplicates[1]];
                           else
                            {var
                              field_sexp$6=field_sexp(0),
                              fvalue$5=caml_call1(Max_num_threads[1],field_sexp$6);
                             max_num_threads_field[1] = [0,fvalue$5]}
                         else
                          if(max_num_open_file_descrs_field[1])
                           duplicates[1] = [0,_MP_,duplicates[1]];
                          else
                           {var
                             field_sexp$7=field_sexp(0),
                             fvalue$6=caml_call1(_aJ_,field_sexp$7);
                            max_num_open_file_descrs_field[1] = [0,fvalue$6]}
                        else
                         if
                          (caml_string_notequal(_MP_,cst_abort_after_thread_pool_st$0))
                          if(caml_string_notequal(_MP_,cst_check_invariants$0))
                           if
                            (caml_string_notequal(_MP_,cst_detect_invalid_access_from$0))
                            if(caml_string_notequal(_MP_,cst_dump_core_on_job_delay$0))
                             if(caml_string_notequal(_MP_,cst_epoll_max_ready_events$0))
                              if(caml_string_notequal(_MP_,cst_file_descr_watcher$2))
                               if(caml_string_notequal(_MP_,cst_max_inter_cycle_timeout$0))
                                if
                                 (caml_string_notequal(_MP_,cst_max_num_jobs_per_priority_$0))
                                 switch$2 = 1;
                                else
                                 if(max_num_jobs_per_priority_per_[1])
                                  duplicates[1] = [0,_MP_,duplicates[1]];
                                 else
                                  {var
                                    field_sexp$8=field_sexp(0),
                                    fvalue$7=
                                     caml_call1(Max_num_jobs_per_priority_per_[1],field_sexp$8);
                                   max_num_jobs_per_priority_per_[1] = [0,fvalue$7]}
                               else
                                if(max_inter_cycle_timeout_field[1])
                                 duplicates[1] = [0,_MP_,duplicates[1]];
                                else
                                 {var
                                   field_sexp$9=field_sexp(0),
                                   fvalue$8=caml_call1(Max_inter_cycle_timeout[1],field_sexp$9);
                                  max_inter_cycle_timeout_field[1] = [0,fvalue$8]}
                              else
                               if(file_descr_watcher_field[1])
                                duplicates[1] = [0,_MP_,duplicates[1]];
                               else
                                {var
                                  field_sexp$10=field_sexp(0),
                                  fvalue$9=caml_call1(t_of_sexp$9,field_sexp$10);
                                 file_descr_watcher_field[1] = [0,fvalue$9]}
                             else
                              if(epoll_max_ready_events_field[1])
                               duplicates[1] = [0,_MP_,duplicates[1]];
                              else
                               {var
                                 field_sexp$11=field_sexp(0),
                                 fvalue$10=
                                  caml_call1(Epoll_max_ready_events[1],field_sexp$11);
                                epoll_max_ready_events_field[1] = [0,fvalue$10]}
                            else
                             if(dump_core_on_job_delay_field[1])
                              duplicates[1] = [0,_MP_,duplicates[1]];
                             else
                              {var
                                field_sexp$12=field_sexp(0),
                                fvalue$11=t_of_sexp$6(field_sexp$12);
                               dump_core_on_job_delay_field[1] = [0,fvalue$11]}
                           else
                            if(detect_invalid_access_from_thr[1])
                             duplicates[1] = [0,_MP_,duplicates[1]];
                            else
                             {var
                               field_sexp$13=field_sexp(0),
                               fvalue$12=caml_call1(Core_kernel[290],field_sexp$13);
                              detect_invalid_access_from_thr[1] = [0,fvalue$12]}
                          else
                           if(check_invariants_field[1])
                            duplicates[1] = [0,_MP_,duplicates[1]];
                           else
                            {var
                              field_sexp$14=field_sexp(0),
                              fvalue$13=caml_call1(Core_kernel[290],field_sexp$14);
                             check_invariants_field[1] = [0,fvalue$13]}
                         else
                          if(abort_after_thread_pool_stuck_[1])
                           duplicates[1] = [0,_MP_,duplicates[1]];
                          else
                           {var
                             field_sexp$15=field_sexp(0),
                             fvalue$14=caml_call1(_a_[9],field_sexp$15);
                            abort_after_thread_pool_stuck_[1] = [0,fvalue$14]}
                        if(switch$2 && Sexplib0_Sexp_conv[26][1])
                         extra[1] = [0,_MP_,extra[1]];
                        var param=tail;
                        continue}}}}
                caml_call2(Sexplib0_Sexp_conv_error[10],tp_loc$4,_ML_)}
              if(duplicates[1])
               return caml_call3
                       (Sexplib0_Sexp_conv_error[12],tp_loc$4,duplicates[1],sexp);
              if(extra[1])
               return caml_call3
                       (Sexplib0_Sexp_conv_error[13],tp_loc$4,extra[1],sexp);
              var
               timing_wheel_config_value=timing_wheel_config_field[1],
               thread_pool_cpu_affinity_value=
                thread_pool_cpu_affinity_field[1],
               report_thread_pool_stuck_for_v=
                report_thread_pool_stuck_for_f[1],
               record_backtraces_value=record_backtraces_field[1],
               print_debug_messages_for_value=
                print_debug_messages_for_field[1],
               min_inter_cycle_timeout_value=min_inter_cycle_timeout_field[1],
               max_num_jobs_per_priority_per_$0=
                max_num_jobs_per_priority_per_[1],
               max_num_threads_value=max_num_threads_field[1],
               max_num_open_file_descrs_value=
                max_num_open_file_descrs_field[1],
               max_inter_cycle_timeout_value=max_inter_cycle_timeout_field[1],
               file_descr_watcher_value=file_descr_watcher_field[1],
               epoll_max_ready_events_value=epoll_max_ready_events_field[1],
               dump_core_on_job_delay_value=dump_core_on_job_delay_field[1],
               detect_invalid_access_from_thr$0=
                detect_invalid_access_from_thr[1],
               check_invariants_value=check_invariants_field[1],
               abort_after_thread_pool_stuck_$0=
                abort_after_thread_pool_stuck_[1];
              return [0,
                      abort_after_thread_pool_stuck_$0,
                      check_invariants_value,
                      detect_invalid_access_from_thr$0,
                      dump_core_on_job_delay_value,
                      epoll_max_ready_events_value,
                      file_descr_watcher_value,
                      max_inter_cycle_timeout_value,
                      max_num_open_file_descrs_value,
                      max_num_threads_value,
                      max_num_jobs_per_priority_per_$0,
                      min_inter_cycle_timeout_value,
                      print_debug_messages_for_value,
                      record_backtraces_value,
                      report_thread_pool_stuck_for_v,
                      thread_pool_cpu_affinity_value,
                      timing_wheel_config_value]}},
         match$0=caml_call1(Core_kernel_Result[45],_cD_);
        if(0 === match$0[0])
         var t=match$0[1],t$0=t;
        else
         {var
           exn$0=match$0[1],
           _nK_=Core_kernel[521],
           _nM_=caml_call2(Core_kernel[241],_nL_,environment_variable),
           _nN_=caml_call5(Core_kernel_Error[15],0,0,_nM_,exn$0,_nK_),
           _nO_=caml_call1(Core_kernel_Error[6],_nN_),
           _nP_=caml_call2(Core_kernel_Sexp[79],0,_nO_);
          caml_call2(Core_kernel[216],_nQ_,_nP_);
          var t$0=usage(0)}
        var t$1=t$0}
      else
       var t$1=usage(0);
      var t$2=t$1}
    else
     var t$2=empty;
    function print_debug_messages_for$1(tag)
     {var _MK_=t$2[12];
      if(_MK_)
       {var l=_MK_[1];return caml_call3(Core_kernel_List[6],l,tag,equal$0)}
      return 0}
    var all=print_debug_messages_for$1(0);
    function debug(tag){return all?all:print_debug_messages_for$1(tag)}
    var
     clock=debug(1),
     fd=debug(2),
     file_descr_watcher$1=debug(3),
     finalizers=debug(4),
     interruptor=debug(5),
     monitor=debug(6),
     monitor_send_exn=debug(7),
     parallel=debug(8),
     reader=debug(9),
     scheduler=debug(10),
     shutdown=debug(11),
     thread_pool=debug(12),
     thread_safe=debug(13),
     writer=debug(14);
    function symbol(field)
     {var
       _MH_=caml_call2(Base_Field[3],field,default$1),
       _MI_=caml_call4(Core_kernel_Option[50],0,0,0,_MH_),
       _MJ_=caml_call2(Base_Field[3],field,t$2);
      return caml_call2(Core_kernel_Option[49],_MJ_,_MI_)}
    var
     abort_after_thread_pool_stuck_$1=symbol(abort_after_thread_pool_stuck_$0),
     check_invariants$1=symbol(check_invariants$0),
     detect_invalid_access_from_thr$1=symbol(detect_invalid_access_from_thr$0),
     epoll_max_ready_events$1=symbol(epoll_max_ready_events$0),
     thread_pool_cpu_affinity$1=symbol(thread_pool_cpu_affinity$0),
     file_descr_watcher$2=symbol(file_descr_watcher$0),
     max_inter_cycle_timeout$1=symbol(max_inter_cycle_timeout$0),
     max_num_open_file_descrs$1=symbol(max_num_open_file_descrs$0),
     max_num_threads$1=symbol(max_num_threads$0),
     max_num_jobs_per_priority_per_$1=symbol(max_num_jobs_per_priority_per_$0),
     min_inter_cycle_timeout$1=symbol(min_inter_cycle_timeout$0),
     record_backtraces$1=symbol(record_backtraces$0),
     report_thread_pool_stuck_for$1=symbol(report_thread_pool_stuck_for$0),
     timing_wheel_config$1=symbol(timing_wheel_config$0),
     dump_core_on_job_delay$1=symbol(dump_core_on_job_delay$0),
     t$3=
      [0,
       [0,abort_after_thread_pool_stuck_$1],
       [0,check_invariants$1],
       [0,detect_invalid_access_from_thr$1],
       [0,dump_core_on_job_delay$1],
       [0,epoll_max_ready_events$1],
       [0,file_descr_watcher$2],
       [0,max_inter_cycle_timeout$1],
       [0,max_num_open_file_descrs$1],
       [0,max_num_threads$1],
       [0,max_num_jobs_per_priority_per_$1],
       [0,min_inter_cycle_timeout$1],
       t$2[12],
       [0,record_backtraces$1],
       [0,report_thread_pool_stuck_for$1],
       [0,thread_pool_cpu_affinity$1],
       [0,timing_wheel_config$1]],
     task_id=[0,function(param){return _cE_}];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$4);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Async_kernel_$0);
    var
     include$4=
      [0,
       clock,
       fd,
       file_descr_watcher$1,
       finalizers,
       interruptor,
       monitor,
       monitor_send_exn,
       parallel,
       reader,
       scheduler,
       shutdown,
       thread_pool,
       thread_safe,
       writer],
     Async_kernel_Async_kernel_conf=
      [0,
       Epoll_max_ready_events,
       Max_inter_cycle_timeout,
       Min_inter_cycle_timeout,
       Max_num_threads,
       Max_num_jobs_per_priority_per_,
       [0,_aJ_,_aK_,_aL_,_aM_,_aN_,equal,default$0],
       [0,How_to_dump,sexp_of_watch,watch_of_sexp,t_of_sexp$6,sexp_of_t$6],
       [0,sexp_of_t$7],
       [0,sexp_of_t$9],
       sexp_of_t$10,
       t$3,
       environment_variable,
       include$4,
       abort_after_thread_pool_stuck_$1,
       check_invariants$1,
       detect_invalid_access_from_thr$1,
       dump_core_on_job_delay$1,
       thread_pool_cpu_affinity$1,
       epoll_max_ready_events$1,
       file_descr_watcher$2,
       max_inter_cycle_timeout$1,
       max_num_jobs_per_priority_per_$1,
       max_num_open_file_descrs$1,
       max_num_threads$1,
       min_inter_cycle_timeout$1,
       record_backtraces$1,
       report_thread_pool_stuck_for$1,
       timing_wheel_config$1,
       default_timing_wheel_config_fo,
       task_id];
    caml_register_global
     (1305,Async_kernel_Async_kernel_conf,"Async_kernel__Async_kernel_config");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Debug);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$5);
    caml_call1(Expect_test_collector[4][1],cst_src_debug_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$6,cst$5);
    var
     _cF_=include$4[1],
     _cI_=include$4[4],
     _cK_=include$4[6],
     _cL_=include$4[7],
     _cO_=include$4[10],
     _cG_=include$4[2],
     _cH_=include$4[3],
     _cJ_=include$4[5],
     _cM_=include$4[8],
     _cN_=include$4[9],
     _cP_=include$4[11],
     _cQ_=include$4[12],
     _cR_=include$4[13],
     _cS_=include$4[14];
    function log(v2,v3,sexp_of_a)
     {var
       v1=caml_call1(_ah_,0),
       v0=caml_call1(task_id[1],0),
       v0$0=caml_call1(Core_kernel_Sexp[88],v0),
       v1$0=caml_call1(_aI_,v1),
       v2$0=caml_call1(Core_kernel[455],v2),
       v3$0=caml_call1(sexp_of_a,v3),
       _MG_=
        caml_call2
         (Core_kernel_Sexp[79],0,[1,[0,v0$0,[0,v1$0,[0,v2$0,[0,v3$0,0]]]]]);
      return caml_call2(Core_kernel[216],_cT_,_MG_)}
    function log_string(message){return log(message,0,Core_kernel[502])}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$7);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Debug$0);
    var
     Async_kernel_Debug=
      [0,
       _cF_,
       _cG_,
       _cH_,
       _cI_,
       _cJ_,
       _cK_,
       _cL_,
       _cM_,
       _cN_,
       _cO_,
       _cP_,
       _cQ_,
       _cR_,
       _cS_,
       log,
       log_string];
    caml_register_global(1306,Async_kernel_Debug,"Async_kernel__Debug");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Import);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$8);
    caml_call1(Expect_test_collector[4][1],cst_src_import_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$9,cst$6);
    var
     include$5=Core_kernel_Int[123],
     symbol$0=include$5[1],
     symbol$1=include$5[2],
     symbol$2=include$5[3],
     symbol$3=include$5[4],
     symbol$4=include$5[5],
     symbol$5=include$5[6],
     equal$1=include$5[7],
     compare=include$5[8],
     min=include$5[9],
     max=include$5[10],
     concat$0=Core_kernel_String[26],
     eprint=Core_kernel_Debug[1],
     eprint_s=Core_kernel_Debug[3],
     eprints=Core_kernel_Debug[2];
    function print_s(sexp)
     {var _MF_=caml_call2(Core_kernel_Sexp[79],0,sexp);
      return caml_call2(Core_kernel[235],_cU_,_MF_)}
    var sec$0=_a_[80],Thread=[0],Unix=[0];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$10);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Import$0);
    var
     Async_kernel_Import=
      [0,
       symbol$0,
       symbol$1,
       symbol$2,
       symbol$3,
       symbol$4,
       symbol$5,
       equal$1,
       compare,
       min,
       max,
       concat$0,
       eprint,
       eprint_s,
       eprints,
       print_s,
       sec$0,
       Thread,
       Unix];
    caml_register_global(1308,Async_kernel_Import,"Async_kernel__Import");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Priority);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$11);
    caml_call1(Expect_test_collector[4][1],cst_src_priority_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$12,cst$7);
    function sexp_of_t$11(param){return param?_cV_:_cW_}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$13);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Priority$0);
    var Async_kernel_Priority=[0,sexp_of_t$11,0,1];
    caml_register_global(1309,Async_kernel_Priority,"Async_kernel__Priority");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Types);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$14);
    caml_call1(Expect_test_collector[4][1],cst_src_types_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$15,cst$8);
    var
     Cell=caml_call2(CamlinternalMod[1],_cY_,_cX_),
     Handler=caml_call2(CamlinternalMod[1],_c0_,_cZ_),
     Ivar=caml_call2(CamlinternalMod[1],_c2_,_c1_),
     Deferred=caml_call2(CamlinternalMod[1],_c4_,_c3_),
     Execution_context=caml_call2(CamlinternalMod[1],_c6_,_c5_),
     Monitor=caml_call2(CamlinternalMod[1],_c8_,_c7_),
     Tail=caml_call2(CamlinternalMod[1],_c__,_c9_),
     Stream=caml_call2(CamlinternalMod[1],_da_,_c$_);
    caml_call3(CamlinternalMod[2],_db_,Cell,Cell);
    caml_call3(CamlinternalMod[2],_dc_,Handler,Handler);
    caml_call3(CamlinternalMod[2],_dd_,Ivar,Ivar);
    caml_call3(CamlinternalMod[2],_de_,Deferred,Deferred);
    caml_call3(CamlinternalMod[2],_df_,Execution_context,Execution_context);
    caml_call3(CamlinternalMod[2],_dg_,Monitor,Monitor);
    caml_call3(CamlinternalMod[2],_dh_,Tail,Tail);
    caml_call3(CamlinternalMod[2],_di_,Stream,Stream);
    var normal=0;
    function to_repr(t){return t}
    function of_repr(t){return t}
    var
     Bvar=[0,of_repr,to_repr],
     Event=caml_call2(CamlinternalMod[1],_dk_,_dj_),
     External_job=caml_call2(CamlinternalMod[1],_dm_,_dl_),
     Job=caml_call2(CamlinternalMod[1],_do_,_dn_),
     Job_or_event=caml_call2(CamlinternalMod[1],_dq_,_dp_),
     Job_pool=caml_call2(CamlinternalMod[1],_ds_,_dr_),
     Job_queue=caml_call2(CamlinternalMod[1],_du_,_dt_),
     Jobs=caml_call2(CamlinternalMod[1],_dw_,_dv_),
     Scheduler=caml_call2(CamlinternalMod[1],_dy_,_dx_),
     Time_source=caml_call2(CamlinternalMod[1],_dA_,_dz_),
     Very_low_priority_worker=caml_call2(CamlinternalMod[1],_dC_,_dB_),
     Time_source_id=caml_call1(Core_kernel_Unique_id[2],[0]);
    caml_call3(CamlinternalMod[2],_dD_,Event,Event);
    caml_call3(CamlinternalMod[2],_dE_,External_job,External_job);
    caml_call3(CamlinternalMod[2],_dF_,Job,Job);
    caml_call3(CamlinternalMod[2],_dG_,Job_or_event,Job_or_event);
    caml_call3(CamlinternalMod[2],_dH_,Job_pool,Job_pool);
    caml_call3(CamlinternalMod[2],_dI_,Job_queue,Job_queue);
    caml_call3(CamlinternalMod[2],_dJ_,Jobs,Jobs);
    caml_call3(CamlinternalMod[2],_dK_,Scheduler,Scheduler);
    caml_call3(CamlinternalMod[2],_dL_,Time_source,Time_source);
    caml_call3
     (CamlinternalMod[2],
      _dM_,
      Very_low_priority_worker,
      Very_low_priority_worker);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$16);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Types$0);
    var
     Async_kernel_Types=
      [0,
       Cell,
       Handler,
       Ivar,
       Deferred,
       Execution_context,
       Monitor,
       Tail,
       Stream,
       Bvar,
       Event,
       External_job,
       Job,
       Job_or_event,
       Job_pool,
       Job_queue,
       Jobs,
       Scheduler,
       Time_source_id,
       Time_source,
       Very_low_priority_worker];
    caml_register_global(1312,Async_kernel_Types,"Async_kernel__Types");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Monitor0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$17);
    caml_call1(Expect_test_collector[4][1],cst_src_monitor0_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$18,cst$9);
    function is_detached(r){return r[9]}
    function set_is_detached(r,v){r[9] = v;return 0}
    function has_seen_error(r){return r[8]}
    function set_has_seen_error(r,v){r[8] = v;return 0}
    function tails_for_all_errors(r){return r[7]}
    function set_tails_for_all_errors(r,v){r[7] = v;return 0}
    function handlers_for_all_errors(r){return r[6]}
    function set_handlers_for_all_errors(r,v){r[6] = v;return 0}
    function next_error(r){return r[5]}
    function set_next_error(r,v){r[5] = v;return 0}
    function parent(r){return r[4]}
    function id(r){return r[3]}
    function here$5(r){return r[2]}
    function name(r){return r[1]}
    function _dN_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],v]}
    var
     _dO_=[0,set_is_detached],
     is_detached$0=
      [0,function(param){return 0},cst_is_detached,_dO_,is_detached,_dN_];
    function _dP_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],v,r[9]]}
    var
     _dQ_=[0,set_has_seen_error],
     has_seen_error$0=
      [0,
       function(param){return 0},
       cst_has_seen_error,
       _dQ_,
       has_seen_error,
       _dP_];
    function _dR_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],v,r[8],r[9]]}
    var
     _dS_=[0,set_tails_for_all_errors],
     tails_for_all_errors$0=
      [0,
       function(param){return 0},
       cst_tails_for_all_errors,
       _dS_,
       tails_for_all_errors,
       _dR_];
    function _dT_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v,r[7],r[8],r[9]]}
    var
     _dU_=[0,set_handlers_for_all_errors],
     handlers_for_all_errors$0=
      [0,
       function(param){return 0},
       cst_handlers_for_all_errors,
       _dU_,
       handlers_for_all_errors,
       _dT_];
    function _dV_(r,v){return [0,r[1],r[2],r[3],r[4],v,r[6],r[7],r[8],r[9]]}
    var
     _dW_=[0,set_next_error],
     next_error$0=
      [0,function(param){return 0},cst_next_error,_dW_,next_error,_dV_];
    function _dX_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6],r[7],r[8],r[9]]}
    var
     _dY_=0,
     parent$0=[0,function(param){return 0},cst_parent,_dY_,parent,_dX_];
    function _dZ_(r,v){return [0,r[1],r[2],v,r[4],r[5],r[6],r[7],r[8],r[9]]}
    var _d0_=0,id$0=[0,function(param){return 0},cst_id,_d0_,id,_dZ_];
    function _d1_(r,v){return [0,r[1],v,r[3],r[4],r[5],r[6],r[7],r[8],r[9]]}
    var _d2_=0,here$6=[0,function(param){return 0},cst_here,_d2_,here$5,_d1_];
    function _d3_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9]]}
    var _d4_=0,name$0=[0,function(param){return 0},cst_name,_d4_,name,_d3_];
    function make_creator
     (name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun,
      compile_acc)
     {var
       match=caml_call2(name_fun,name$0,compile_acc),
       compile_acc$0=match[2],
       name_gen=match[1],
       match$0=caml_call2(here_fun,here$6,compile_acc$0),
       compile_acc$1=match$0[2],
       here_gen=match$0[1],
       match$1=caml_call2(id_fun,id$0,compile_acc$1),
       compile_acc$2=match$1[2],
       id_gen=match$1[1],
       match$2=caml_call2(parent_fun,parent$0,compile_acc$2),
       compile_acc$3=match$2[2],
       parent_gen=match$2[1],
       match$3=caml_call2(next_error_fun,next_error$0,compile_acc$3),
       compile_acc$4=match$3[2],
       next_error_gen=match$3[1],
       match$4=
        caml_call2
         (handlers_for_all_errors_fun,handlers_for_all_errors$0,compile_acc$4),
       compile_acc$5=match$4[2],
       handlers_for_all_errors_gen=match$4[1],
       match$5=
        caml_call2
         (tails_for_all_errors_fun,tails_for_all_errors$0,compile_acc$5),
       compile_acc$6=match$5[2],
       tails_for_all_errors_gen=match$5[1],
       match$6=caml_call2(has_seen_error_fun,has_seen_error$0,compile_acc$6),
       compile_acc$7=match$6[2],
       has_seen_error_gen=match$6[1],
       match$7=caml_call2(is_detached_fun,is_detached$0,compile_acc$7),
       compile_acc$8=match$7[2],
       is_detached_gen=match$7[1];
      return [0,
              function(acc)
               {var
                 name=caml_call1(name_gen,acc),
                 here=caml_call1(here_gen,acc),
                 id=caml_call1(id_gen,acc),
                 parent=caml_call1(parent_gen,acc),
                 next_error=caml_call1(next_error_gen,acc),
                 handlers_for_all_errors=
                  caml_call1(handlers_for_all_errors_gen,acc),
                 tails_for_all_errors=caml_call1(tails_for_all_errors_gen,acc),
                 has_seen_error=caml_call1(has_seen_error_gen,acc),
                 is_detached=caml_call1(is_detached_gen,acc);
                return [0,
                        name,
                        here,
                        id,
                        parent,
                        next_error,
                        handlers_for_all_errors,
                        tails_for_all_errors,
                        has_seen_error,
                        is_detached]},
              compile_acc$8]}
    function create
     (name,
      here,
      id,
      parent,
      next_error,
      handlers_for_all_errors,
      tails_for_all_errors,
      has_seen_error,
      is_detached)
     {return [0,
              name,
              here,
              id,
              parent,
              next_error,
              handlers_for_all_errors,
              tails_for_all_errors,
              has_seen_error,
              is_detached]}
    function map
     (name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {var
       _Mx_=caml_call1(is_detached_fun,is_detached$0),
       _My_=caml_call1(has_seen_error_fun,has_seen_error$0),
       _Mz_=caml_call1(tails_for_all_errors_fun,tails_for_all_errors$0),
       _MA_=caml_call1(handlers_for_all_errors_fun,handlers_for_all_errors$0),
       _MB_=caml_call1(next_error_fun,next_error$0),
       _MC_=caml_call1(parent_fun,parent$0),
       _MD_=caml_call1(id_fun,id$0),
       _ME_=caml_call1(here_fun,here$6);
      return [0,
              caml_call1(name_fun,name$0),
              _ME_,
              _MD_,
              _MC_,
              _MB_,
              _MA_,
              _Mz_,
              _My_,
              _Mx_]}
    function iter
     (name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {caml_call1(name_fun,name$0);
      caml_call1(here_fun,here$6);
      caml_call1(id_fun,id$0);
      caml_call1(parent_fun,parent$0);
      caml_call1(next_error_fun,next_error$0);
      caml_call1(handlers_for_all_errors_fun,handlers_for_all_errors$0);
      caml_call1(tails_for_all_errors_fun,tails_for_all_errors$0);
      caml_call1(has_seen_error_fun,has_seen_error$0);
      return caml_call1(is_detached_fun,is_detached$0)}
    function fold
     (init,
      name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {return caml_call2
              (is_detached_fun,
               caml_call2
                (has_seen_error_fun,
                 caml_call2
                  (tails_for_all_errors_fun,
                   caml_call2
                    (handlers_for_all_errors_fun,
                     caml_call2
                      (next_error_fun,
                       caml_call2
                        (parent_fun,
                         caml_call2
                          (id_fun,
                           caml_call2(here_fun,caml_call2(name_fun,init,name$0),here$6),
                           id$0),
                         parent$0),
                       next_error$0),
                     handlers_for_all_errors$0),
                   tails_for_all_errors$0),
                 has_seen_error$0),
               is_detached$0)}
    function map_poly(record)
     {var
       _Mp_=[0,caml_call1(record[1],is_detached$0),0],
       _Mq_=[0,caml_call1(record[1],has_seen_error$0),_Mp_],
       _Mr_=[0,caml_call1(record[1],tails_for_all_errors$0),_Mq_],
       _Ms_=[0,caml_call1(record[1],handlers_for_all_errors$0),_Mr_],
       _Mt_=[0,caml_call1(record[1],next_error$0),_Ms_],
       _Mu_=[0,caml_call1(record[1],parent$0),_Mt_],
       _Mv_=[0,caml_call1(record[1],id$0),_Mu_],
       _Mw_=[0,caml_call1(record[1],here$6),_Mv_];
      return [0,caml_call1(record[1],name$0),_Mw_]}
    function for_all
     (name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {var
       _Mh_=caml_call1(name_fun,name$0),
       _Mi_=_Mh_?caml_call1(here_fun,here$6):_Mh_,
       _Mj_=_Mi_?caml_call1(id_fun,id$0):_Mi_,
       _Mk_=_Mj_?caml_call1(parent_fun,parent$0):_Mj_,
       _Ml_=_Mk_?caml_call1(next_error_fun,next_error$0):_Mk_,
       _Mm_=
        _Ml_
         ?caml_call1(handlers_for_all_errors_fun,handlers_for_all_errors$0)
         :_Ml_,
       _Mn_=
        _Mm_?caml_call1(tails_for_all_errors_fun,tails_for_all_errors$0):_Mm_,
       _Mo_=_Mn_?caml_call1(has_seen_error_fun,has_seen_error$0):_Mn_;
      return _Mo_?caml_call1(is_detached_fun,is_detached$0):_Mo_}
    function exists
     (name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {var
       _Mg_=caml_call1(name_fun,name$0),
       _L$_=_Mg_ || caml_call1(here_fun,here$6),
       _Ma_=_L$_ || caml_call1(id_fun,id$0),
       _Mb_=_Ma_ || caml_call1(parent_fun,parent$0),
       _Mc_=_Mb_ || caml_call1(next_error_fun,next_error$0),
       _Md_=
        _Mc_
        ||
        caml_call1(handlers_for_all_errors_fun,handlers_for_all_errors$0),
       _Me_=
        _Md_
        ||
        caml_call1(tails_for_all_errors_fun,tails_for_all_errors$0),
       _Mf_=_Me_ || caml_call1(has_seen_error_fun,has_seen_error$0);
      return _Mf_?_Mf_:caml_call1(is_detached_fun,is_detached$0)}
    function to_list
     (name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {var
       _L3_=[0,caml_call1(is_detached_fun,is_detached$0),0],
       _L4_=[0,caml_call1(has_seen_error_fun,has_seen_error$0),_L3_],
       _L5_=
        [0,caml_call1(tails_for_all_errors_fun,tails_for_all_errors$0),_L4_],
       _L6_=
        [0,
         caml_call1(handlers_for_all_errors_fun,handlers_for_all_errors$0),
         _L5_],
       _L7_=[0,caml_call1(next_error_fun,next_error$0),_L6_],
       _L8_=[0,caml_call1(parent_fun,parent$0),_L7_],
       _L9_=[0,caml_call1(id_fun,id$0),_L8_],
       _L__=[0,caml_call1(here_fun,here$6),_L9_];
      return [0,caml_call1(name_fun,name$0),_L__]}
    function iter$0
     (record,
      name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {caml_call3(name_fun,name$0,record,record[1]);
      caml_call3(here_fun,here$6,record,record[2]);
      caml_call3(id_fun,id$0,record,record[3]);
      caml_call3(parent_fun,parent$0,record,record[4]);
      caml_call3(next_error_fun,next_error$0,record,record[5]);
      caml_call3
       (handlers_for_all_errors_fun,
        handlers_for_all_errors$0,
        record,
        record[6]);
      caml_call3
       (tails_for_all_errors_fun,tails_for_all_errors$0,record,record[7]);
      caml_call3(has_seen_error_fun,has_seen_error$0,record,record[8]);
      return caml_call3(is_detached_fun,is_detached$0,record,record[9])}
    function fold$0
     (record,
      init,
      name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {var
       _LV_=record[9],
       _LW_=record[8],
       _LX_=record[7],
       _LY_=record[6],
       _LZ_=record[5],
       _L0_=record[4],
       _L1_=record[3],
       _L2_=record[2];
      return caml_call4
              (is_detached_fun,
               caml_call4
                (has_seen_error_fun,
                 caml_call4
                  (tails_for_all_errors_fun,
                   caml_call4
                    (handlers_for_all_errors_fun,
                     caml_call4
                      (next_error_fun,
                       caml_call4
                        (parent_fun,
                         caml_call4
                          (id_fun,
                           caml_call4
                            (here_fun,
                             caml_call4(name_fun,init,name$0,record,record[1]),
                             here$6,
                             record,
                             _L2_),
                           id$0,
                           record,
                           _L1_),
                         parent$0,
                         record,
                         _L0_),
                       next_error$0,
                       record,
                       _LZ_),
                     handlers_for_all_errors$0,
                     record,
                     _LY_),
                   tails_for_all_errors$0,
                   record,
                   _LX_),
                 has_seen_error$0,
                 record,
                 _LW_),
               is_detached$0,
               record,
               _LV_)}
    function for_all$0
     (record,
      name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {var
       _LN_=caml_call3(name_fun,name$0,record,record[1]),
       _LO_=_LN_?caml_call3(here_fun,here$6,record,record[2]):_LN_,
       _LP_=_LO_?caml_call3(id_fun,id$0,record,record[3]):_LO_,
       _LQ_=_LP_?caml_call3(parent_fun,parent$0,record,record[4]):_LP_,
       _LR_=_LQ_?caml_call3(next_error_fun,next_error$0,record,record[5]):_LQ_,
       _LS_=
        _LR_
         ?caml_call3
           (handlers_for_all_errors_fun,
            handlers_for_all_errors$0,
            record,
            record[6])
         :_LR_,
       _LT_=
        _LS_
         ?caml_call3
           (tails_for_all_errors_fun,tails_for_all_errors$0,record,record[7])
         :_LS_,
       _LU_=
        _LT_
         ?caml_call3(has_seen_error_fun,has_seen_error$0,record,record[8])
         :_LT_;
      return _LU_
              ?caml_call3(is_detached_fun,is_detached$0,record,record[9])
              :_LU_}
    function exists$0
     (record,
      name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {var
       _LM_=caml_call3(name_fun,name$0,record,record[1]),
       _LF_=_LM_ || caml_call3(here_fun,here$6,record,record[2]),
       _LG_=_LF_ || caml_call3(id_fun,id$0,record,record[3]),
       _LH_=_LG_ || caml_call3(parent_fun,parent$0,record,record[4]),
       _LI_=_LH_ || caml_call3(next_error_fun,next_error$0,record,record[5]),
       _LJ_=
        _LI_
        ||
        caml_call3
         (handlers_for_all_errors_fun,
          handlers_for_all_errors$0,
          record,
          record[6]),
       _LK_=
        _LJ_
        ||
        caml_call3
         (tails_for_all_errors_fun,tails_for_all_errors$0,record,record[7]),
       _LL_=
        _LK_
        ||
        caml_call3(has_seen_error_fun,has_seen_error$0,record,record[8]);
      return _LL_
              ?_LL_
              :caml_call3(is_detached_fun,is_detached$0,record,record[9])}
    function to_list$0
     (record,
      name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {var
       _Lx_=[0,caml_call3(is_detached_fun,is_detached$0,record,record[9]),0],
       _Ly_=
        [0,
         caml_call3(has_seen_error_fun,has_seen_error$0,record,record[8]),
         _Lx_],
       _Lz_=
        [0,
         caml_call3
          (tails_for_all_errors_fun,tails_for_all_errors$0,record,record[7]),
         _Ly_],
       _LA_=
        [0,
         caml_call3
          (handlers_for_all_errors_fun,
           handlers_for_all_errors$0,
           record,
           record[6]),
         _Lz_],
       _LB_=[0,caml_call3(next_error_fun,next_error$0,record,record[5]),_LA_],
       _LC_=[0,caml_call3(parent_fun,parent$0,record,record[4]),_LB_],
       _LD_=[0,caml_call3(id_fun,id$0,record,record[3]),_LC_],
       _LE_=[0,caml_call3(here_fun,here$6,record,record[2]),_LD_];
      return [0,caml_call3(name_fun,name$0,record,record[1]),_LE_]}
    function map$0
     (record,
      name_fun,
      here_fun,
      id_fun,
      parent_fun,
      next_error_fun,
      handlers_for_all_errors_fun,
      tails_for_all_errors_fun,
      has_seen_error_fun,
      is_detached_fun)
     {var
       _Lp_=caml_call3(is_detached_fun,is_detached$0,record,record[9]),
       _Lq_=caml_call3(has_seen_error_fun,has_seen_error$0,record,record[8]),
       _Lr_=
        caml_call3
         (tails_for_all_errors_fun,tails_for_all_errors$0,record,record[7]),
       _Ls_=
        caml_call3
         (handlers_for_all_errors_fun,
          handlers_for_all_errors$0,
          record,
          record[6]),
       _Lt_=caml_call3(next_error_fun,next_error$0,record,record[5]),
       _Lu_=caml_call3(parent_fun,parent$0,record,record[4]),
       _Lv_=caml_call3(id_fun,id$0,record,record[3]),
       _Lw_=caml_call3(here_fun,here$6,record,record[2]);
      return [0,
              caml_call3(name_fun,name$0,record,record[1]),
              _Lw_,
              _Lv_,
              _Lu_,
              _Lt_,
              _Ls_,
              _Lr_,
              _Lq_,
              _Lp_]}
    function set_all_mutable_fields
     (record,
      next_error,
      handlers_for_all_errors,
      tails_for_all_errors,
      has_seen_error,
      is_detached)
     {var record$0=caml_call1(Base_Field[1][1],record);
      record$0[5] = next_error;
      record$0[6] = handlers_for_all_errors;
      record$0[7] = tails_for_all_errors;
      record$0[8] = has_seen_error;
      record$0[9] = is_detached;
      return 0}
    var
     Direct=
      [0,
       iter$0,
       fold$0,
       for_all$0,
       exists$0,
       to_list$0,
       map$0,
       set_all_mutable_fields],
     Fields=
      [0,
       names,
       is_detached$0,
       has_seen_error$0,
       tails_for_all_errors$0,
       handlers_for_all_errors$0,
       next_error$0,
       parent$0,
       id$0,
       here$6,
       name$0,
       make_creator,
       create,
       map,
       iter,
       fold,
       map_poly,
       for_all,
       exists,
       to_list,
       Direct];
    function sexp_of_one(param)
     {var
       v_is_detached=param[5],
       v_has_seen_error=param[4],
       v_id=param[3],
       v_here=param[2],
       v_name=param[1],
       arg=caml_call1(Core_kernel[289],v_is_detached),
       bnds=[0,[1,[0,_d5_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[289],v_has_seen_error),
       bnds$0=[0,[1,[0,_d6_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Core_kernel[340],v_id),
       bnds$1=[0,[1,[0,_d7_,[0,arg$1,0]]],bnds$0],
       arg$2=
        caml_call2(Core_kernel[438],Core_kernel_Source_code_positi[1],v_here),
       bnds$2=[0,[1,[0,_d8_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call1(Core_kernel_Info[6],v_name),
       bnds$3=[0,[1,[0,_d9_,[0,arg$3,0]]],bnds$2];
      return [1,bnds$3]}
    function sexp_of_t$12(v)
     {return caml_call2(Core_kernel[405],sexp_of_one,v)}
    var Pretty=[0,sexp_of_one,sexp_of_t$12];
    function loop(param)
     {var
       parent=param[4],
       id=param[3],
       here=param[2],
       name=param[1],
       has_seen_error=param[8],
       is_detached=param[9];
      return function(ac)
       {var ac$0=[0,[0,name,here,id,has_seen_error,is_detached],ac];
        if(parent){var t=parent[1];return caml_call1(loop(t),ac$0)}
        return caml_call1(Core_kernel_List[34],ac$0)}}
    function to_pretty(t){return caml_call1(loop(t),0)}
    function sexp_of_t$13(t)
     {var _Lo_=to_pretty(t);return caml_call1(Pretty[2],_Lo_)}
    var r=[0,0];
    function next_id(param){r[1]++;return r[1]}
    function create_with_parent(here,info,match,parent)
     {var id=next_id(0);
      if(info)
       {var _Lm_=info[1];
        if(match)
         var s=match[1],_Ln_=caml_call2(Core_kernel_Info[18],_Lm_,s);
        else
         var _Ln_=_Lm_;
        var name=_Ln_}
      else
       if(match)
        var s$0=match[1],name=caml_call1(Core_kernel_Info[11],s$0);
       else
        var
         name=
          caml_call5(Core_kernel_Info[15],0,0,cst_id$0,id,Core_kernel[340]);
      var
       t=
        [0,name,here,id,parent,[0,0],caml_call1(Core_kernel_Bag[22],0),0,0,0];
      if(_cK_)log(cst_created_monitor,t,sexp_of_t$13);
      return t}
    var main=create_with_parent(0,0,_d__,0);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$19);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Monitor0$0);
    var
     include$6=
      [0,
       _cK_,
       is_detached,
       set_is_detached,
       has_seen_error,
       set_has_seen_error,
       tails_for_all_errors,
       set_tails_for_all_errors,
       handlers_for_all_errors,
       set_handlers_for_all_errors,
       next_error,
       set_next_error,
       parent,
       id,
       here$5,
       name,
       Fields,
       Pretty,
       to_pretty,
       sexp_of_t$13,
       next_id,
       create_with_parent,
       main];
    caml_register_global(1316,include$6,"Async_kernel__Monitor0");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Execution_con);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$20);
    caml_call1(Expect_test_collector[4][1],cst_src_execution_context_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$21,cst$10);
    function backtrace_history(r){return r[4]}
    function local_storage(r){return r[3]}
    function priority(r){return r[2]}
    function monitor$0(r){return r[1]}
    function _d$_(r,v){return [0,r[1],r[2],r[3],v]}
    var
     _ea_=0,
     backtrace_history$0=
      [0,
       function(param){return 0},
       cst_backtrace_history,
       _ea_,
       backtrace_history,
       _d$_];
    function _eb_(r,v){return [0,r[1],r[2],v,r[4]]}
    var
     _ec_=0,
     local_storage$0=
      [0,function(param){return 0},cst_local_storage,_ec_,local_storage,_eb_];
    function _ed_(r,v){return [0,r[1],v,r[3],r[4]]}
    var
     _ee_=0,
     priority$0=[0,function(param){return 0},cst_priority,_ee_,priority,_ed_];
    function _ef_(r,v){return [0,v,r[2],r[3],r[4]]}
    var
     _eg_=0,
     monitor$1=[0,function(param){return 0},cst_monitor$1,_eg_,monitor$0,_ef_];
    function make_creator$0
     (monitor_fun,
      priority_fun,
      local_storage_fun,
      backtrace_history_fun,
      compile_acc)
     {var
       match=caml_call2(monitor_fun,monitor$1,compile_acc),
       compile_acc$0=match[2],
       monitor_gen=match[1],
       match$0=caml_call2(priority_fun,priority$0,compile_acc$0),
       compile_acc$1=match$0[2],
       priority_gen=match$0[1],
       match$1=caml_call2(local_storage_fun,local_storage$0,compile_acc$1),
       compile_acc$2=match$1[2],
       local_storage_gen=match$1[1],
       match$2=
        caml_call2(backtrace_history_fun,backtrace_history$0,compile_acc$2),
       compile_acc$3=match$2[2],
       backtrace_history_gen=match$2[1];
      return [0,
              function(acc)
               {var
                 monitor=caml_call1(monitor_gen,acc),
                 priority=caml_call1(priority_gen,acc),
                 local_storage=caml_call1(local_storage_gen,acc),
                 backtrace_history=caml_call1(backtrace_history_gen,acc);
                return [0,monitor,priority,local_storage,backtrace_history]},
              compile_acc$3]}
    function create$0(monitor,priority,local_storage,backtrace_history)
     {return [0,monitor,priority,local_storage,backtrace_history]}
    function map$1
     (monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {var
       _Lj_=caml_call1(backtrace_history_fun,backtrace_history$0),
       _Lk_=caml_call1(local_storage_fun,local_storage$0),
       _Ll_=caml_call1(priority_fun,priority$0);
      return [0,caml_call1(monitor_fun,monitor$1),_Ll_,_Lk_,_Lj_]}
    function iter$1
     (monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {caml_call1(monitor_fun,monitor$1);
      caml_call1(priority_fun,priority$0);
      caml_call1(local_storage_fun,local_storage$0);
      return caml_call1(backtrace_history_fun,backtrace_history$0)}
    function fold$1
     (init,monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {return caml_call2
              (backtrace_history_fun,
               caml_call2
                (local_storage_fun,
                 caml_call2
                  (priority_fun,
                   caml_call2(monitor_fun,init,monitor$1),
                   priority$0),
                 local_storage$0),
               backtrace_history$0)}
    function map_poly$0(record)
     {var
       _Lg_=[0,caml_call1(record[1],backtrace_history$0),0],
       _Lh_=[0,caml_call1(record[1],local_storage$0),_Lg_],
       _Li_=[0,caml_call1(record[1],priority$0),_Lh_];
      return [0,caml_call1(record[1],monitor$1),_Li_]}
    function for_all$1
     (monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {var
       _Ld_=caml_call1(monitor_fun,monitor$1),
       _Le_=_Ld_?caml_call1(priority_fun,priority$0):_Ld_,
       _Lf_=_Le_?caml_call1(local_storage_fun,local_storage$0):_Le_;
      return _Lf_?caml_call1(backtrace_history_fun,backtrace_history$0):_Lf_}
    function exists$1
     (monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {var
       _Lc_=caml_call1(monitor_fun,monitor$1),
       _La_=_Lc_ || caml_call1(priority_fun,priority$0),
       _Lb_=_La_ || caml_call1(local_storage_fun,local_storage$0);
      return _Lb_?_Lb_:caml_call1(backtrace_history_fun,backtrace_history$0)}
    function to_list$1
     (monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {var
       _K9_=[0,caml_call1(backtrace_history_fun,backtrace_history$0),0],
       _K__=[0,caml_call1(local_storage_fun,local_storage$0),_K9_],
       _K$_=[0,caml_call1(priority_fun,priority$0),_K__];
      return [0,caml_call1(monitor_fun,monitor$1),_K$_]}
    function iter$2
     (record,monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {caml_call3(monitor_fun,monitor$1,record,record[1]);
      caml_call3(priority_fun,priority$0,record,record[2]);
      caml_call3(local_storage_fun,local_storage$0,record,record[3]);
      return caml_call3
              (backtrace_history_fun,backtrace_history$0,record,record[4])}
    function fold$2
     (record,
      init,
      monitor_fun,
      priority_fun,
      local_storage_fun,
      backtrace_history_fun)
     {var _K6_=record[4],_K7_=record[3],_K8_=record[2];
      return caml_call4
              (backtrace_history_fun,
               caml_call4
                (local_storage_fun,
                 caml_call4
                  (priority_fun,
                   caml_call4(monitor_fun,init,monitor$1,record,record[1]),
                   priority$0,
                   record,
                   _K8_),
                 local_storage$0,
                 record,
                 _K7_),
               backtrace_history$0,
               record,
               _K6_)}
    function for_all$2
     (record,monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {var
       _K3_=caml_call3(monitor_fun,monitor$1,record,record[1]),
       _K4_=_K3_?caml_call3(priority_fun,priority$0,record,record[2]):_K3_,
       _K5_=
        _K4_
         ?caml_call3(local_storage_fun,local_storage$0,record,record[3])
         :_K4_;
      return _K5_
              ?caml_call3
                (backtrace_history_fun,backtrace_history$0,record,record[4])
              :_K5_}
    function exists$2
     (record,monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {var
       _K2_=caml_call3(monitor_fun,monitor$1,record,record[1]),
       _K0_=_K2_ || caml_call3(priority_fun,priority$0,record,record[2]),
       _K1_=
        _K0_
        ||
        caml_call3(local_storage_fun,local_storage$0,record,record[3]);
      return _K1_
              ?_K1_
              :caml_call3
                (backtrace_history_fun,backtrace_history$0,record,record[4])}
    function to_list$2
     (record,monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {var
       _KX_=
        [0,
         caml_call3
          (backtrace_history_fun,backtrace_history$0,record,record[4]),
         0],
       _KY_=
        [0,
         caml_call3(local_storage_fun,local_storage$0,record,record[3]),
         _KX_],
       _KZ_=[0,caml_call3(priority_fun,priority$0,record,record[2]),_KY_];
      return [0,caml_call3(monitor_fun,monitor$1,record,record[1]),_KZ_]}
    function map$2
     (record,monitor_fun,priority_fun,local_storage_fun,backtrace_history_fun)
     {var
       _KU_=
        caml_call3(backtrace_history_fun,backtrace_history$0,record,record[4]),
       _KV_=caml_call3(local_storage_fun,local_storage$0,record,record[3]),
       _KW_=caml_call3(priority_fun,priority$0,record,record[2]);
      return [0,
              caml_call3(monitor_fun,monitor$1,record,record[1]),
              _KW_,
              _KV_,
              _KU_]}
    function set_all_mutable_fields$0(record)
     {caml_call1(Base_Field[1][1],record);return 0}
    var
     Direct$0=
      [0,
       iter$2,
       fold$2,
       for_all$2,
       exists$2,
       to_list$2,
       map$2,
       set_all_mutable_fields$0];
    function sexp_of_t$14(param)
     {var
       v_backtrace_history=param[4],
       v_local_storage=param[3],
       v_priority=param[2],
       v_monitor=param[1],
       arg=caml_call2(Core_kernel[405],Base_Backtrace[1],v_backtrace_history),
       bnds=[0,[1,[0,_eh_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel_Univ_map[2],v_local_storage),
       bnds$0=[0,[1,[0,_ei_,[0,arg$0,0]]],bnds],
       arg$1=sexp_of_t$11(v_priority),
       bnds$1=[0,[1,[0,_ej_,[0,arg$1,0]]],bnds$0],
       arg$2=sexp_of_t$13(v_monitor),
       bnds$2=[0,[1,[0,_ek_,[0,arg$2,0]]],bnds$1];
      return [1,bnds$2]}
    function f(param){return 0}
    var dummy_e=[0,main,normal,Core_kernel_Univ_map[4],0];
    function create_like(monitor,priority,local_storage,t)
     {var
       monitor$0=caml_call2(Core_kernel_Option[49],monitor,t[1]),
       _KS_=t[4],
       _KT_=caml_call2(Core_kernel_Option[49],local_storage,t[3]);
      return [0,
              monitor$0,
              caml_call2(Core_kernel_Option[49],priority,t[2]),
              _KT_,
              _KS_]}
    function find_local(t,key)
     {return caml_call2(Core_kernel_Univ_map[9],t[3],key)}
    function with_local(init,key,data)
     {var _KP_=init[4];
      function _KQ_(param){return data}
      var _KR_=caml_call3(Core_kernel_Univ_map[13],init[3],key,_KQ_);
      return [0,init[1],init[2],_KR_,_KP_]}
    function record_backtrace(init)
     {var _KN_=init[4],_KO_=[0,caml_call2(Base_Backtrace[2],0,0),_KN_];
      return [0,init[1],init[2],init[3],_KO_]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$22);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Execution_con$0);
    var
     Async_kernel_Execution_context=
      [0,
       backtrace_history,
       local_storage,
       priority,
       monitor$0,
       [0,
        names$0,
        backtrace_history$0,
        local_storage$0,
        priority$0,
        monitor$1,
        fold$1,
        make_creator$0,
        create$0,
        map$1,
        iter$1,
        for_all$1,
        exists$1,
        to_list$1,
        map_poly$0,
        Direct$0],
       sexp_of_t$14,
       f,
       dummy_e,
       create_like,
       find_local,
       with_local,
       record_backtrace];
    caml_register_global
     (1319,Async_kernel_Execution_context,"Async_kernel__Execution_context");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_External_job);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$23);
    caml_call1(Expect_test_collector[4][1],cst_src_external_job_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$24,cst$11);
    function sexp_of_t$15(param){return _el_}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$25);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_External_job$0);
    var Async_kernel_External_job=[0,sexp_of_t$15];
    caml_register_global
     (1320,Async_kernel_External_job,"Async_kernel__External_job");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Job_pool);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$26);
    caml_call1(Expect_test_collector[4][1],cst_src_job_pool_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$27,cst$12);
    function dummy_f(_KM_){return 0}
    var dummy_a=0;
    function sexp_of_slots(v)
     {var _KI_=Sexplib0_Sexp_conv[23];
      function _KJ_(f)
       {function _KK_(_KL_){return 0}
        return caml_call1(Sexplib0_Sexp_conv[24],_KK_)}
      return caml_call4(Tuple_pool[1][5],sexp_of_t$14,_KJ_,_KI_,v)}
    function sexp_of_t$16(v){return caml_call2(Tuple_pool[4],sexp_of_slots,v)}
    function invariant(t)
     {function _KG_(_KH_){return 0}return caml_call2(Tuple_pool[5],_KG_,t)}
    function create$1(param)
     {return caml_call3
              (Tuple_pool[9],Tuple_pool[1][19],1,[0,dummy_e,dummy_f,dummy_a])}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$28);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Job_pool$0);
    var
     Async_kernel_Job_pool=
      [0,sexp_of_slots,sexp_of_t$16,invariant,create$1];
    caml_register_global(1322,Async_kernel_Job_pool,"Async_kernel__Job_pool");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Job);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$29);
    caml_call1(Expect_test_collector[4][1],cst_src_job_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$30,cst$13);
    function sexp_of_t$17(v)
     {return caml_call2(Tuple_pool[3][1],sexp_of_slots,v)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$31);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Job$0);
    var Async_kernel_Job=[0,sexp_of_t$17];
    caml_register_global(1323,Async_kernel_Job,"Async_kernel__Job");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Job_or_event);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$32);
    caml_call1(Expect_test_collector[4][1],cst_src_job_or_event_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$33,cst$14);
    function of_event(event){return event}
    function of_job(job){return job}
    function is_event(t){return caml_call1(Stdlib_obj[1],t)}
    function is_job(t){return typeof t === "number"?1:0}
    function kind(t){return is_event(t)?_em_:_en_}
    function project(param,job_or_event){return job_or_event}
    var Match=[0,kind,project];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$34);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Job_or_event$0);
    var include$7=[0,of_event,of_job,is_event,is_job,Match];
    caml_register_global(1325,include$7,"Async_kernel__Job_or_event");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Job_or_event_);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$35);
    caml_call1(Expect_test_collector[4][1],cst_src_job_or_event_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$36,cst$15);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$37);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Job_or_event_$0);
    var Async_kernel_Job_or_event_intf=[0];
    caml_register_global
     (1326,Async_kernel_Job_or_event_intf,"Async_kernel__Job_or_event_intf");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Scheduler0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$38);
    caml_call1(Expect_test_collector[4][1],cst_src_scheduler0_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$39,cst$16);
    function events(t){return t[17][4]}
    function set_execution_context(t,execution_context)
     {var
       _KE_=1 - caml_call2(Core_kernel[231],t[7],execution_context),
       _KF_=_KE_?(t[7] = execution_context,0):_KE_;
      return _KF_}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$40);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Scheduler0$0);
    var include$8=[0,events,set_execution_context];
    caml_register_global(1327,include$8,"Async_kernel__Scheduler0");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Job_queue);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$41);
    caml_call1(Expect_test_collector[4][1],cst_src_job_queue_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$42,cst$17);
    function dummy_f$0(_KD_){return 0}
    var dummy_a$0=0;
    function length(r){return r[6]}
    function set_length(r,v){r[6] = v;return 0}
    function front(r){return r[5]}
    function set_front(r,v){r[5] = v;return 0}
    function mask(r){return r[4]}
    function set_mask(r,v){r[4] = v;return 0}
    function jobs(r){return r[3]}
    function set_jobs(r,v){r[3] = v;return 0}
    function jobs_left_this_cycle(r){return r[2]}
    function set_jobs_left_this_cycle(r,v){r[2] = v;return 0}
    function num_jobs_run(r){return r[1]}
    function set_num_jobs_run(r,v){r[1] = v;return 0}
    function _eo_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v]}
    var
     _ep_=[0,set_length],
     length$0=[0,function(param){return 0},cst_length,_ep_,length,_eo_];
    function _eq_(r,v){return [0,r[1],r[2],r[3],r[4],v,r[6]]}
    var
     _er_=[0,set_front],
     front$0=[0,function(param){return 0},cst_front,_er_,front,_eq_];
    function _es_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6]]}
    var
     _et_=[0,set_mask],
     mask$0=[0,function(param){return 0},cst_mask,_et_,mask,_es_];
    function _eu_(r,v){return [0,r[1],r[2],v,r[4],r[5],r[6]]}
    var
     _ev_=[0,set_jobs],
     jobs$0=[0,function(param){return 0},cst_jobs,_ev_,jobs,_eu_];
    function _ew_(r,v){return [0,r[1],v,r[3],r[4],r[5],r[6]]}
    var
     _ex_=[0,set_jobs_left_this_cycle],
     jobs_left_this_cycle$0=
      [0,
       function(param){return 0},
       cst_jobs_left_this_cycle,
       _ex_,
       jobs_left_this_cycle,
       _ew_];
    function _ey_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6]]}
    var
     _ez_=[0,set_num_jobs_run],
     num_jobs_run$0=
      [0,function(param){return 0},cst_num_jobs_run,_ez_,num_jobs_run,_ey_];
    function sexp_of_t$18(param)
     {var
       v_num_jobs_run=param[1],
       v_jobs_left_this_cycle=param[2],
       v_jobs=param[3],
       v_mask=param[4],
       v_front=param[5],
       v_length=param[6],
       arg=caml_call1(Core_kernel[340],v_length),
       bnds=[0,[1,[0,_eA_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[340],v_front),
       bnds$0=[0,[1,[0,_eB_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Core_kernel[340],v_mask),
       bnds$1=[0,[1,[0,_eC_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Sexplib0_Sexp_conv[23],v_jobs),
       bnds$2=[0,[1,[0,_eD_,[0,arg$2,0]]],bnds$1],
       arg$3=caml_call1(Core_kernel[340],v_jobs_left_this_cycle),
       bnds$3=[0,[1,[0,_eE_,[0,arg$3,0]]],bnds$2],
       arg$4=caml_call1(Core_kernel[340],v_num_jobs_run),
       bnds$4=[0,[1,[0,_eF_,[0,arg$4,0]]],bnds$3];
      return [1,bnds$4]}
    function offset(t,i){return ((t[5] + i | 0) & t[4]) * 3 | 0}
    function capacity(t){return t[4] + 1 | 0}
    function invariant$0(t)
     {function _Ky_(param)
       {function check(f){return caml_call2(include$9[2],t,f)}
        var
         length_fun=
          check
           (function(length)
             {if(caml_call2(symbol$0,length,0))
               {if(caml_call2(symbol$1,length,capacity(t)))return 0;
                throw [0,Assert_failure,_eG_]}
              throw [0,Assert_failure,_eH_]}),
         front_fun=
          check
           (function(front)
             {if(caml_call2(symbol$0,front,0))
               {if(caml_call2(symbol$4,front,capacity(t)))return 0;
                throw [0,Assert_failure,_eI_]}
              throw [0,Assert_failure,_eJ_]}),
         mask_fun=
          check
           (function(mask)
             {var capacity=mask + 1 | 0;
              if(caml_call1(Core_kernel_Int[71],capacity))
               {if
                 (caml_call2
                   (symbol$2,
                    capacity * 3 | 0,
                    caml_call1(Core_kernel_Uniform_array[16],t[3])))
                 return 0;
                throw [0,Assert_failure,_eK_]}
              throw [0,Assert_failure,_eL_]}),
         jobs_fun=
          check
           (function(jobs)
             {var _KA_=t[6] - 1 | 0,_Kz_=0;
              if(! (_KA_ < 0))
               {var i=_Kz_;
                for(;;)
                 {var _KB_=offset(t,i);
                  caml_call2(Core_kernel_Uniform_array[17],jobs,_KB_);
                  var _KC_=i + 1 | 0;
                  if(_KA_ !== i){var i=_KC_;continue}
                  break}}
              return 0}),
         jobs_left_this_cycle_fun=
          check
           (function(jobs_left_this_cycle)
             {if(caml_call2(symbol$0,jobs_left_this_cycle,0))return 0;
              throw [0,Assert_failure,_eM_]}),
         num_jobs_run_fun=
          check
           (function(num_jobs_run)
             {if(caml_call2(symbol$0,num_jobs_run,0))return 0;
              throw [0,Assert_failure,_eN_]});
        caml_call1(num_jobs_run_fun,num_jobs_run$0);
        caml_call1(jobs_left_this_cycle_fun,jobs_left_this_cycle$0);
        caml_call1(jobs_fun,jobs$0);
        caml_call1(mask_fun,mask$0);
        caml_call1(front_fun,front$0);
        return caml_call1(length_fun,length$0)}
      return caml_call4(include$9[1],_eO_,t,sexp_of_t$18,_Ky_)}
    function create_array(capacity)
     {return caml_call1(Core_kernel_Uniform_array[37],capacity * 3 | 0)}
    function create$2(param){return [0,0,0,create_array(1),0,0,0]}
    function clear(t){t[5] = 0;t[6] = 0;t[2] = 0;return 0}
    function set(t,i,execution_context,f,a)
     {var offset$0=offset(t,i);
      caml_call3
       (Core_kernel_Uniform_array[20],t[3],offset$0,execution_context);
      caml_call3(Core_kernel_Uniform_array[20],t[3],offset$0 + 1 | 0,f);
      return caml_call3(Core_kernel_Uniform_array[20],t[3],offset$0 + 2 | 0,a)}
    function enqueue(t,execution_context,f,a)
     {var _Kx_=capacity(t);
      if(caml_call2(symbol$2,t[6],_Kx_))
       {var
         old_capacity=capacity(t),
         new_capacity=old_capacity * 2 | 0,
         old_jobs=t[3],
         old_front=t[5],
         len1=
          caml_call2(Core_kernel_Int[113],t[6],old_capacity - old_front | 0)
          *
          3
          |
          0,
         len2=(t[6] * 3 | 0) - len1 | 0,
         new_jobs=create_array(new_capacity);
        caml_call5
         (Core_kernel_Uniform_array[30],
          old_jobs,
          old_front * 3 | 0,
          new_jobs,
          0,
          len1);
        caml_call5
         (Core_kernel_Uniform_array[30],old_jobs,0,new_jobs,len1,len2);
        t[4] = new_capacity - 1 | 0;
        t[3] = new_jobs;
        t[5] = 0}
      set(t,t[6],execution_context,f,a);
      t[6] = t[6] + 1 | 0;
      return 0}
    function set_jobs_left_this_cycle$0(t,n)
     {if(caml_call2(symbol$4,n,0))
       {var
         _Ku_=[0,[1,[0,_eP_,[0,sexp_of_t$18(t),0]]],0],
         _Kv_=[0,[1,[0,_eQ_,[0,caml_call1(Core_kernel[340],n),0]]],_Ku_],
         _Kw_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Jobs_set_jobs_left_this_cy),
            _Kv_]];
        caml_call1(Core_kernel[238],_Kw_)}
      t[2] = n;
      return 0}
    function can_run_a_job(t)
     {var _Kt_=caml_call2(symbol$3,t[6],0);
      return _Kt_?caml_call2(symbol$3,t[2],0):_Kt_}
    function run_job(t,scheduler,execution_context,f,a)
     {t[1] = t[1] + 1 | 0;
      set_execution_context(scheduler,execution_context);
      return caml_call1(f,a)}
    function run_external_jobs(t,scheduler)
     {var external_jobs=scheduler[18];
      for(;;)
       {if
         (caml_call2
           (symbol$3,caml_call1(Thread_safe_queue[4],external_jobs),0))
         {var
           match=caml_call1(Thread_safe_queue[6],external_jobs),
           a=match[3],
           f=match[2],
           execution_context=match[1];
          run_job(t,scheduler,execution_context,f,a);
          continue}
        return 0}}
    function run_jobs(t,scheduler)
     {try
       {run_external_jobs(t,scheduler);
        for(;;)
         {if(can_run_a_job(t))
           {var
             this_job=offset(t,0),
             execution_context=
              caml_call2(Core_kernel_Uniform_array[18],t[3],this_job),
             f=caml_call2(Core_kernel_Uniform_array[18],t[3],this_job + 1 | 0),
             a=caml_call2(Core_kernel_Uniform_array[18],t[3],this_job + 2 | 0);
            set(t,0,dummy_e,dummy_f$0,dummy_a$0);
            t[5] = (t[5] + 1 | 0) & t[4];
            t[6] = t[6] - 1 | 0;
            t[2] = t[2] - 1 | 0;
            run_job(t,scheduler,execution_context,f,a);
            run_external_jobs(t,scheduler);
            continue}
          return _eR_}}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        var backtrace=caml_call1(Base_Backtrace[6][4],0);
        return [1,[0,exn,backtrace]]}}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$43);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Job_queue$0);
    var
     Async_kernel_Job_queue=
      [0,
       sexp_of_t$18,
       invariant$0,
       create$2,
       enqueue,
       clear,
       set_jobs_left_this_cycle$0,
       can_run_a_job,
       length,
       run_jobs,
       num_jobs_run];
    caml_register_global
     (1331,Async_kernel_Job_queue,"Async_kernel__Job_queue");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Synchronous_t);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$44);
    caml_call1(Expect_test_collector[4][1],cst_src_synchronous_time_sourc);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$45,cst$18);
    function sexp_of_t$19(t)
     {var
       _Kr_=caml_call1(_aq_,t),
       _Ks_=
        runtime.core_kernel_time_ns_format
         (caml_call1(_a_[90],_Kr_),cst_Y_m_dT_H_M_S_z);
      return caml_call1(Core_kernel[455],_Ks_)}
    var
     Time_ns=
      [0,
       _a_,
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
       _ay_,
       _az_,
       _aA_,
       _aB_,
       _aC_,
       _aD_,
       _aE_,
       _aF_,
       _aG_,
       _aH_,
       after,
       sexp_of_t$19],
     include$10=Timing_wheel[5],
     sexp_of_t$20=include$10[1],
     null$0=include$10[2],
     at=include$10[3],
     interval_num=include$10[4],
     value=include$10[5];
    function is_null(t)
     {var _Kq_=caml_call1(null$0,0);
      return caml_call2(Core_kernel[231],t,_Kq_)}
    var
     Alarm=[0,sexp_of_t$20,null$0,at,interval_num,value,is_null],
     _eS_=caml_call2(Timing_wheel[1][13],Timing_wheel[1][10],3),
     _eU_=[0,caml_call2(Timing_wheel[7][5],0,_eT_)],
     default_timing_wheel_config$0=
      caml_call4(Timing_wheel[8][4],0,_eU_,_eS_,0),
     compare$0=caml_int_compare;
    function sexp_of_t$21(param)
     {switch(param)
       {case 0:return _eV_;
        case 1:return _eW_;
        case 2:return _eX_;
        case 3:return _eY_;
        default:return _eZ_}}
    function transition_is_allowed(from,to)
     {var switch$0=0;
      switch(from)
       {case 0:if(! (4 <= to))switch$0 = 1;break;
        case 1:if(1 === to || 3 <= to)switch$0 = 1;break;
        case 2:if(! (3 <= to))switch$0 = 1;break;
        case 3:if(1 !== to && ! (4 <= to))switch$0 = 1;break;
        default:if(1 !== to && 3 !== to)switch$0 = 1}
      return switch$0?0:1}
    var Status=[0,compare$0,sexp_of_t$21,transition_is_allowed];
    function status(r){return r[7]}
    function set_status(r,v){r[7] = v;return 0}
    function next_fired(r){return r[6]}
    function set_next_fired(r,v){r[6] = v;return 0}
    function interval(r){return r[5]}
    function set_interval(r,v){r[5] = v;return 0}
    function execution_context(r){return r[4]}
    function callback(r){return r[3]}
    function at$0(r){return r[2]}
    function set_at(r,v){r[2] = v;return 0}
    function alarm(r){return r[1]}
    function set_alarm(r,v){r[1] = v;return 0}
    function _e0_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],v]}
    var
     _e1_=[0,set_status],
     status$0=[0,function(param){return 0},cst_status,_e1_,status,_e0_];
    function _e2_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v,r[7]]}
    var
     _e3_=[0,set_next_fired],
     next_fired$0=
      [0,function(param){return 0},cst_next_fired,_e3_,next_fired,_e2_];
    function _e4_(r,v){return [0,r[1],r[2],r[3],r[4],v,r[6],r[7]]}
    var
     _e5_=[0,set_interval],
     interval$0=[0,function(param){return 0},cst_interval,_e5_,interval,_e4_];
    function _e6_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6],r[7]]}
    var
     _e7_=0,
     execution_context$0=
      [0,
       function(param){return 0},
       cst_execution_context,
       _e7_,
       execution_context,
       _e6_];
    function _e8_(r,v){return [0,r[1],r[2],v,r[4],r[5],r[6],r[7]]}
    var
     _e9_=0,
     callback$0=[0,function(param){return 0},cst_callback,_e9_,callback,_e8_];
    function _e__(r,v){return [0,r[1],v,r[3],r[4],r[5],r[6],r[7]]}
    var
     _e$_=[0,set_at],
     at$1=[0,function(param){return 0},cst_at,_e$_,at$0,_e__];
    function _fa_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6],r[7]]}
    var
     _fb_=[0,set_alarm],
     alarm$0=[0,function(param){return 0},cst_alarm,_fb_,alarm,_fa_];
    function make_creator$1
     (alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun,
      compile_acc)
     {var
       match=caml_call2(alarm_fun,alarm$0,compile_acc),
       compile_acc$0=match[2],
       alarm_gen=match[1],
       match$0=caml_call2(at_fun,at$1,compile_acc$0),
       compile_acc$1=match$0[2],
       at_gen=match$0[1],
       match$1=caml_call2(callback_fun,callback$0,compile_acc$1),
       compile_acc$2=match$1[2],
       callback_gen=match$1[1],
       match$2=
        caml_call2(execution_context_fun,execution_context$0,compile_acc$2),
       compile_acc$3=match$2[2],
       execution_context_gen=match$2[1],
       match$3=caml_call2(interval_fun,interval$0,compile_acc$3),
       compile_acc$4=match$3[2],
       interval_gen=match$3[1],
       match$4=caml_call2(next_fired_fun,next_fired$0,compile_acc$4),
       compile_acc$5=match$4[2],
       next_fired_gen=match$4[1],
       match$5=caml_call2(status_fun,status$0,compile_acc$5),
       compile_acc$6=match$5[2],
       status_gen=match$5[1];
      return [0,
              function(acc)
               {var
                 alarm=caml_call1(alarm_gen,acc),
                 at=caml_call1(at_gen,acc),
                 callback=caml_call1(callback_gen,acc),
                 execution_context=caml_call1(execution_context_gen,acc),
                 interval=caml_call1(interval_gen,acc),
                 next_fired=caml_call1(next_fired_gen,acc),
                 status=caml_call1(status_gen,acc);
                return [0,
                        alarm,
                        at,
                        callback,
                        execution_context,
                        interval,
                        next_fired,
                        status]},
              compile_acc$6]}
    function create$3
     (alarm,at,callback,execution_context,interval,next_fired,status)
     {return [0,
              alarm,
              at,
              callback,
              execution_context,
              interval,
              next_fired,
              status]}
    function map$3
     (alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {var
       _Kk_=caml_call1(status_fun,status$0),
       _Kl_=caml_call1(next_fired_fun,next_fired$0),
       _Km_=caml_call1(interval_fun,interval$0),
       _Kn_=caml_call1(execution_context_fun,execution_context$0),
       _Ko_=caml_call1(callback_fun,callback$0),
       _Kp_=caml_call1(at_fun,at$1);
      return [0,caml_call1(alarm_fun,alarm$0),_Kp_,_Ko_,_Kn_,_Km_,_Kl_,_Kk_]}
    function iter$3
     (alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {caml_call1(alarm_fun,alarm$0);
      caml_call1(at_fun,at$1);
      caml_call1(callback_fun,callback$0);
      caml_call1(execution_context_fun,execution_context$0);
      caml_call1(interval_fun,interval$0);
      caml_call1(next_fired_fun,next_fired$0);
      return caml_call1(status_fun,status$0)}
    function fold$3
     (init,
      alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {return caml_call2
              (status_fun,
               caml_call2
                (next_fired_fun,
                 caml_call2
                  (interval_fun,
                   caml_call2
                    (execution_context_fun,
                     caml_call2
                      (callback_fun,
                       caml_call2(at_fun,caml_call2(alarm_fun,init,alarm$0),at$1),
                       callback$0),
                     execution_context$0),
                   interval$0),
                 next_fired$0),
               status$0)}
    function map_poly$1(record)
     {var
       _Ke_=[0,caml_call1(record[1],status$0),0],
       _Kf_=[0,caml_call1(record[1],next_fired$0),_Ke_],
       _Kg_=[0,caml_call1(record[1],interval$0),_Kf_],
       _Kh_=[0,caml_call1(record[1],execution_context$0),_Kg_],
       _Ki_=[0,caml_call1(record[1],callback$0),_Kh_],
       _Kj_=[0,caml_call1(record[1],at$1),_Ki_];
      return [0,caml_call1(record[1],alarm$0),_Kj_]}
    function for_all$3
     (alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {var
       _J__=caml_call1(alarm_fun,alarm$0),
       _J$_=_J__?caml_call1(at_fun,at$1):_J__,
       _Ka_=_J$_?caml_call1(callback_fun,callback$0):_J$_,
       _Kb_=_Ka_?caml_call1(execution_context_fun,execution_context$0):_Ka_,
       _Kc_=_Kb_?caml_call1(interval_fun,interval$0):_Kb_,
       _Kd_=_Kc_?caml_call1(next_fired_fun,next_fired$0):_Kc_;
      return _Kd_?caml_call1(status_fun,status$0):_Kd_}
    function exists$3
     (alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {var
       _J9_=caml_call1(alarm_fun,alarm$0),
       _J4_=_J9_ || caml_call1(at_fun,at$1),
       _J5_=_J4_ || caml_call1(callback_fun,callback$0),
       _J6_=_J5_ || caml_call1(execution_context_fun,execution_context$0),
       _J7_=_J6_ || caml_call1(interval_fun,interval$0),
       _J8_=_J7_ || caml_call1(next_fired_fun,next_fired$0);
      return _J8_?_J8_:caml_call1(status_fun,status$0)}
    function to_list$3
     (alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {var
       _JY_=[0,caml_call1(status_fun,status$0),0],
       _JZ_=[0,caml_call1(next_fired_fun,next_fired$0),_JY_],
       _J0_=[0,caml_call1(interval_fun,interval$0),_JZ_],
       _J1_=[0,caml_call1(execution_context_fun,execution_context$0),_J0_],
       _J2_=[0,caml_call1(callback_fun,callback$0),_J1_],
       _J3_=[0,caml_call1(at_fun,at$1),_J2_];
      return [0,caml_call1(alarm_fun,alarm$0),_J3_]}
    function iter$4
     (record,
      alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {caml_call3(alarm_fun,alarm$0,record,record[1]);
      caml_call3(at_fun,at$1,record,record[2]);
      caml_call3(callback_fun,callback$0,record,record[3]);
      caml_call3(execution_context_fun,execution_context$0,record,record[4]);
      caml_call3(interval_fun,interval$0,record,record[5]);
      caml_call3(next_fired_fun,next_fired$0,record,record[6]);
      return caml_call3(status_fun,status$0,record,record[7])}
    function fold$4
     (record,
      init,
      alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {var
       _JS_=record[7],
       _JT_=record[6],
       _JU_=record[5],
       _JV_=record[4],
       _JW_=record[3],
       _JX_=record[2];
      return caml_call4
              (status_fun,
               caml_call4
                (next_fired_fun,
                 caml_call4
                  (interval_fun,
                   caml_call4
                    (execution_context_fun,
                     caml_call4
                      (callback_fun,
                       caml_call4
                        (at_fun,
                         caml_call4(alarm_fun,init,alarm$0,record,record[1]),
                         at$1,
                         record,
                         _JX_),
                       callback$0,
                       record,
                       _JW_),
                     execution_context$0,
                     record,
                     _JV_),
                   interval$0,
                   record,
                   _JU_),
                 next_fired$0,
                 record,
                 _JT_),
               status$0,
               record,
               _JS_)}
    function for_all$4
     (record,
      alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {var
       _JM_=caml_call3(alarm_fun,alarm$0,record,record[1]),
       _JN_=_JM_?caml_call3(at_fun,at$1,record,record[2]):_JM_,
       _JO_=_JN_?caml_call3(callback_fun,callback$0,record,record[3]):_JN_,
       _JP_=
        _JO_
         ?caml_call3
           (execution_context_fun,execution_context$0,record,record[4])
         :_JO_,
       _JQ_=_JP_?caml_call3(interval_fun,interval$0,record,record[5]):_JP_,
       _JR_=_JQ_?caml_call3(next_fired_fun,next_fired$0,record,record[6]):_JQ_;
      return _JR_?caml_call3(status_fun,status$0,record,record[7]):_JR_}
    function exists$4
     (record,
      alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {var
       _JL_=caml_call3(alarm_fun,alarm$0,record,record[1]),
       _JG_=_JL_ || caml_call3(at_fun,at$1,record,record[2]),
       _JH_=_JG_ || caml_call3(callback_fun,callback$0,record,record[3]),
       _JI_=
        _JH_
        ||
        caml_call3(execution_context_fun,execution_context$0,record,record[4]),
       _JJ_=_JI_ || caml_call3(interval_fun,interval$0,record,record[5]),
       _JK_=_JJ_ || caml_call3(next_fired_fun,next_fired$0,record,record[6]);
      return _JK_?_JK_:caml_call3(status_fun,status$0,record,record[7])}
    function to_list$4
     (record,
      alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {var
       _JA_=[0,caml_call3(status_fun,status$0,record,record[7]),0],
       _JB_=[0,caml_call3(next_fired_fun,next_fired$0,record,record[6]),_JA_],
       _JC_=[0,caml_call3(interval_fun,interval$0,record,record[5]),_JB_],
       _JD_=
        [0,
         caml_call3
          (execution_context_fun,execution_context$0,record,record[4]),
         _JC_],
       _JE_=[0,caml_call3(callback_fun,callback$0,record,record[3]),_JD_],
       _JF_=[0,caml_call3(at_fun,at$1,record,record[2]),_JE_];
      return [0,caml_call3(alarm_fun,alarm$0,record,record[1]),_JF_]}
    function map$4
     (record,
      alarm_fun,
      at_fun,
      callback_fun,
      execution_context_fun,
      interval_fun,
      next_fired_fun,
      status_fun)
     {var
       _Ju_=caml_call3(status_fun,status$0,record,record[7]),
       _Jv_=caml_call3(next_fired_fun,next_fired$0,record,record[6]),
       _Jw_=caml_call3(interval_fun,interval$0,record,record[5]),
       _Jx_=
        caml_call3(execution_context_fun,execution_context$0,record,record[4]),
       _Jy_=caml_call3(callback_fun,callback$0,record,record[3]),
       _Jz_=caml_call3(at_fun,at$1,record,record[2]);
      return [0,
              caml_call3(alarm_fun,alarm$0,record,record[1]),
              _Jz_,
              _Jy_,
              _Jx_,
              _Jw_,
              _Jv_,
              _Ju_]}
    function set_all_mutable_fields$1
     (record,alarm,at,interval,next_fired,status)
     {var record$0=caml_call1(Base_Field[1][1],record);
      record$0[1] = alarm;
      record$0[2] = at;
      record$0[5] = interval;
      record$0[6] = next_fired;
      record$0[7] = status;
      return 0}
    var
     Direct$1=
      [0,
       iter$4,
       fold$4,
       for_all$4,
       exists$4,
       to_list$4,
       map$4,
       set_all_mutable_fields$1],
     Fields$0=
      [0,
       names$1,
       status$0,
       next_fired$0,
       interval$0,
       execution_context$0,
       callback$0,
       at$1,
       alarm$0,
       make_creator$1,
       create$3,
       map$3,
       iter$3,
       fold$3,
       map_poly$1,
       for_all$3,
       exists$3,
       to_list$3,
       Direct$1],
     none=[],
     _fc_=4,
     _fd_=0;
    function _fe_(param){throw [0,Assert_failure,_ff_]}
    var _fg_=Time_ns[58];
    caml_update_dummy
     (none,[0,caml_call1(Alarm[2],0),_fg_,_fe_,dummy_e,_fd_,none,_fc_]);
    function is_none(t){return caml_call2(Core_kernel[231],t,none)}
    function is_some(t){return 1 - is_none(t)}
    function sexp_of_t$22(t)
     {var at=t[2],interval=t[5],status=t[7];
      if(is_none(t))return caml_call1(Sexplib0_Sexp_conv[7],cst_none);
      var
       _Js_=
        [0,
         [1,
          [0,_fh_,[0,caml_call2(Core_kernel[438],Time_ns[1][10],interval),0]]],
         0],
       _Jt_=[0,[1,[0,_fi_,[0,caml_call1(Time_ns[90],at),0]]],_Js_];
      return [1,[0,[1,[0,_fj_,[0,caml_call1(Status[2],status),0]]],_Jt_]]}
    function invariant$1(t)
     {function _Jc_(param)
       {function check(f){return caml_call2(include$9[2],t,f)}
        function _Jd_(_Jr_){return 0}
        var
         _Je_=
          check
           (function(next_fired)
             {var _Jp_=is_some(next_fired);
              if(_Jp_)
               {if(2 <= t[7])throw [0,Assert_failure,_fk_];var _Jq_=0}
              else
               var _Jq_=_Jp_;
              return _Jq_});
        function _Jf_(_Jo_){return 0}
        function _Jg_(_Jn_){return 0}
        function _Jh_(_Jm_){return 0}
        function _Ji_(_Jl_){return 0}
        var
         _Jj_=
          check
           (function(alarm)
             {var
               got=caml_call1(Alarm[6],alarm),
               _Jk_=3 === t[7]?0:1,
               sexpifier=Core_kernel[289],
               equal=0,
               message=0,
               here=0;
              function comparator(a_003,b_004)
               {return caml_call2(Core_kernel[285],a_003,b_004)}
              return caml_call8
                      (Ppx_assert_lib_Runtime[3],
                       pos,
                       sexpifier,
                       comparator,
                       here,
                       message,
                       equal,
                       _Jk_,
                       got)});
        return caml_call7(Fields$0[12],_Jj_,_Ji_,_Jh_,_Jg_,_Jf_,_Je_,_Jd_)}
      return caml_call4(include$9[1],_fl_,t,sexp_of_t$22,_Jc_)}
    function compare_at(t1,t2){return caml_call2(Time_ns[22],t1[2],t2[2])}
    function set_status$0(t,to)
     {var from=t[7];
      if(1 - caml_call2(Status[3],from,to))
       {var
         _I9_=[0,[1,[0,_fm_,[0,sexp_of_t$22(t),0]]],0],
         _I__=[0,[1,[0,_fn_,[0,caml_call1(Status[2],to),0]]],_I9_],
         _I$_=[0,[1,[0,_fo_,[0,caml_call1(Status[2],from),0]]],_I__],
         _Ja_=
          [0,
           caml_call1(Sexplib0_Sexp_conv[7],cst_bug_set_status_transition_),
           _I$_],
         _Jb_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_src_synchronous_time_sourc$0),
            _Ja_]];
        caml_call1(Core_kernel[238],_Jb_)}
      t[7] = to;
      return 0}
    var
     Event$0=
      [0,
       Status,
       status,
       next_fired,
       set_next_fired,
       interval,
       set_interval,
       execution_context,
       callback,
       at$0,
       set_at,
       alarm,
       set_alarm,
       Fields$0,
       none,
       is_none,
       is_some,
       sexp_of_t$22,
       invariant$1,
       compare_at,
       set_status$0];
    function sexp_of_t$23(t)
     {var
       match=caml_call1(Match[1],t),
       k=match[1],
       match$0=caml_call2(Match[2],k,t);
      return k
              ?caml_call1(Sexplib0_Sexp_conv[7],cst_Job_t)
              :caml_call1(Event$0[17],match$0)}
    var Job_or_event$0=[0,of_event,of_job,is_event,is_job,Match,sexp_of_t$23];
    function scheduler$0(r){return r[9]}
    function is_wall_clock(r){return r[8]}
    function handle_fired(r){return r[7]}
    function most_recently_fired(r){return r[6]}
    function set_most_recently_fired(r,v){r[6] = v;return 0}
    function fired_events(r){return r[5]}
    function set_fired_events(r,v){r[5] = v;return 0}
    function events$0(r){return r[4]}
    function am_advancing(r){return r[3]}
    function set_am_advancing(r,v){r[3] = v;return 0}
    function advance_errors(r){return r[2]}
    function set_advance_errors(r,v){r[2] = v;return 0}
    function id$1(r){return r[1]}
    function _fp_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],v]}
    var
     _fq_=0,
     scheduler$1=
      [0,function(param){return 0},cst_scheduler$1,_fq_,scheduler$0,_fp_];
    function _fr_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],v,r[9]]}
    var
     _fs_=0,
     is_wall_clock$0=
      [0,function(param){return 0},cst_is_wall_clock,_fs_,is_wall_clock,_fr_];
    function _ft_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],r[6],v,r[8],r[9]]}
    var
     _fu_=0,
     handle_fired$0=
      [0,function(param){return 0},cst_handle_fired,_fu_,handle_fired,_ft_];
    function _fv_(r,v){return [0,r[1],r[2],r[3],r[4],r[5],v,r[7],r[8],r[9]]}
    var
     _fw_=[0,set_most_recently_fired],
     most_recently_fired$0=
      [0,
       function(param){return 0},
       cst_most_recently_fired,
       _fw_,
       most_recently_fired,
       _fv_];
    function _fx_(r,v){return [0,r[1],r[2],r[3],r[4],v,r[6],r[7],r[8],r[9]]}
    var
     _fy_=[0,set_fired_events],
     fired_events$0=
      [0,function(param){return 0},cst_fired_events,_fy_,fired_events,_fx_];
    function _fz_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6],r[7],r[8],r[9]]}
    var
     _fA_=0,
     events$1=[0,function(param){return 0},cst_events,_fA_,events$0,_fz_];
    function _fB_(r,v){return [0,r[1],r[2],v,r[4],r[5],r[6],r[7],r[8],r[9]]}
    var
     _fC_=[0,set_am_advancing],
     am_advancing$0=
      [0,function(param){return 0},cst_am_advancing,_fC_,am_advancing,_fB_];
    function _fD_(r,v){return [0,r[1],v,r[3],r[4],r[5],r[6],r[7],r[8],r[9]]}
    var
     _fE_=[0,set_advance_errors],
     advance_errors$0=
      [0,
       function(param){return 0},
       cst_advance_errors,
       _fE_,
       advance_errors,
       _fD_];
    function _fF_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9]]}
    var _fG_=0,id$2=[0,function(param){return 0},cst_id$1,_fG_,id$1,_fF_];
    function make_creator$2
     (id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun,
      compile_acc)
     {var
       match=caml_call2(id_fun,id$2,compile_acc),
       compile_acc$0=match[2],
       id_gen=match[1],
       match$0=caml_call2(advance_errors_fun,advance_errors$0,compile_acc$0),
       compile_acc$1=match$0[2],
       advance_errors_gen=match$0[1],
       match$1=caml_call2(am_advancing_fun,am_advancing$0,compile_acc$1),
       compile_acc$2=match$1[2],
       am_advancing_gen=match$1[1],
       match$2=caml_call2(events_fun,events$1,compile_acc$2),
       compile_acc$3=match$2[2],
       events_gen=match$2[1],
       match$3=caml_call2(fired_events_fun,fired_events$0,compile_acc$3),
       compile_acc$4=match$3[2],
       fired_events_gen=match$3[1],
       match$4=
        caml_call2
         (most_recently_fired_fun,most_recently_fired$0,compile_acc$4),
       compile_acc$5=match$4[2],
       most_recently_fired_gen=match$4[1],
       match$5=caml_call2(handle_fired_fun,handle_fired$0,compile_acc$5),
       compile_acc$6=match$5[2],
       handle_fired_gen=match$5[1],
       match$6=caml_call2(is_wall_clock_fun,is_wall_clock$0,compile_acc$6),
       compile_acc$7=match$6[2],
       is_wall_clock_gen=match$6[1],
       match$7=caml_call2(scheduler_fun,scheduler$1,compile_acc$7),
       compile_acc$8=match$7[2],
       scheduler_gen=match$7[1];
      return [0,
              function(acc)
               {var
                 id=caml_call1(id_gen,acc),
                 advance_errors=caml_call1(advance_errors_gen,acc),
                 am_advancing=caml_call1(am_advancing_gen,acc),
                 events=caml_call1(events_gen,acc),
                 fired_events=caml_call1(fired_events_gen,acc),
                 most_recently_fired=caml_call1(most_recently_fired_gen,acc),
                 handle_fired=caml_call1(handle_fired_gen,acc),
                 is_wall_clock=caml_call1(is_wall_clock_gen,acc),
                 scheduler=caml_call1(scheduler_gen,acc);
                return [0,
                        id,
                        advance_errors,
                        am_advancing,
                        events,
                        fired_events,
                        most_recently_fired,
                        handle_fired,
                        is_wall_clock,
                        scheduler]},
              compile_acc$8]}
    function create$4
     (id,
      advance_errors,
      am_advancing,
      events,
      fired_events,
      most_recently_fired,
      handle_fired,
      is_wall_clock,
      scheduler)
     {return [0,
              id,
              advance_errors,
              am_advancing,
              events,
              fired_events,
              most_recently_fired,
              handle_fired,
              is_wall_clock,
              scheduler]}
    function map$5
     (id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {var
       _I1_=caml_call1(scheduler_fun,scheduler$1),
       _I2_=caml_call1(is_wall_clock_fun,is_wall_clock$0),
       _I3_=caml_call1(handle_fired_fun,handle_fired$0),
       _I4_=caml_call1(most_recently_fired_fun,most_recently_fired$0),
       _I5_=caml_call1(fired_events_fun,fired_events$0),
       _I6_=caml_call1(events_fun,events$1),
       _I7_=caml_call1(am_advancing_fun,am_advancing$0),
       _I8_=caml_call1(advance_errors_fun,advance_errors$0);
      return [0,
              caml_call1(id_fun,id$2),
              _I8_,
              _I7_,
              _I6_,
              _I5_,
              _I4_,
              _I3_,
              _I2_,
              _I1_]}
    function iter$5
     (id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {caml_call1(id_fun,id$2);
      caml_call1(advance_errors_fun,advance_errors$0);
      caml_call1(am_advancing_fun,am_advancing$0);
      caml_call1(events_fun,events$1);
      caml_call1(fired_events_fun,fired_events$0);
      caml_call1(most_recently_fired_fun,most_recently_fired$0);
      caml_call1(handle_fired_fun,handle_fired$0);
      caml_call1(is_wall_clock_fun,is_wall_clock$0);
      return caml_call1(scheduler_fun,scheduler$1)}
    function fold$5
     (init,
      id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {return caml_call2
              (scheduler_fun,
               caml_call2
                (is_wall_clock_fun,
                 caml_call2
                  (handle_fired_fun,
                   caml_call2
                    (most_recently_fired_fun,
                     caml_call2
                      (fired_events_fun,
                       caml_call2
                        (events_fun,
                         caml_call2
                          (am_advancing_fun,
                           caml_call2
                            (advance_errors_fun,
                             caml_call2(id_fun,init,id$2),
                             advance_errors$0),
                           am_advancing$0),
                         events$1),
                       fired_events$0),
                     most_recently_fired$0),
                   handle_fired$0),
                 is_wall_clock$0),
               scheduler$1)}
    function map_poly$2(record)
     {var
       _IT_=[0,caml_call1(record[1],scheduler$1),0],
       _IU_=[0,caml_call1(record[1],is_wall_clock$0),_IT_],
       _IV_=[0,caml_call1(record[1],handle_fired$0),_IU_],
       _IW_=[0,caml_call1(record[1],most_recently_fired$0),_IV_],
       _IX_=[0,caml_call1(record[1],fired_events$0),_IW_],
       _IY_=[0,caml_call1(record[1],events$1),_IX_],
       _IZ_=[0,caml_call1(record[1],am_advancing$0),_IY_],
       _I0_=[0,caml_call1(record[1],advance_errors$0),_IZ_];
      return [0,caml_call1(record[1],id$2),_I0_]}
    function for_all$5
     (id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {var
       _IL_=caml_call1(id_fun,id$2),
       _IM_=_IL_?caml_call1(advance_errors_fun,advance_errors$0):_IL_,
       _IN_=_IM_?caml_call1(am_advancing_fun,am_advancing$0):_IM_,
       _IO_=_IN_?caml_call1(events_fun,events$1):_IN_,
       _IP_=_IO_?caml_call1(fired_events_fun,fired_events$0):_IO_,
       _IQ_=
        _IP_?caml_call1(most_recently_fired_fun,most_recently_fired$0):_IP_,
       _IR_=_IQ_?caml_call1(handle_fired_fun,handle_fired$0):_IQ_,
       _IS_=_IR_?caml_call1(is_wall_clock_fun,is_wall_clock$0):_IR_;
      return _IS_?caml_call1(scheduler_fun,scheduler$1):_IS_}
    function exists$5
     (id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {var
       _IK_=caml_call1(id_fun,id$2),
       _ID_=_IK_ || caml_call1(advance_errors_fun,advance_errors$0),
       _IE_=_ID_ || caml_call1(am_advancing_fun,am_advancing$0),
       _IF_=_IE_ || caml_call1(events_fun,events$1),
       _IG_=_IF_ || caml_call1(fired_events_fun,fired_events$0),
       _IH_=_IG_ || caml_call1(most_recently_fired_fun,most_recently_fired$0),
       _II_=_IH_ || caml_call1(handle_fired_fun,handle_fired$0),
       _IJ_=_II_ || caml_call1(is_wall_clock_fun,is_wall_clock$0);
      return _IJ_?_IJ_:caml_call1(scheduler_fun,scheduler$1)}
    function to_list$5
     (id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {var
       _Iv_=[0,caml_call1(scheduler_fun,scheduler$1),0],
       _Iw_=[0,caml_call1(is_wall_clock_fun,is_wall_clock$0),_Iv_],
       _Ix_=[0,caml_call1(handle_fired_fun,handle_fired$0),_Iw_],
       _Iy_=[0,caml_call1(most_recently_fired_fun,most_recently_fired$0),_Ix_],
       _Iz_=[0,caml_call1(fired_events_fun,fired_events$0),_Iy_],
       _IA_=[0,caml_call1(events_fun,events$1),_Iz_],
       _IB_=[0,caml_call1(am_advancing_fun,am_advancing$0),_IA_],
       _IC_=[0,caml_call1(advance_errors_fun,advance_errors$0),_IB_];
      return [0,caml_call1(id_fun,id$2),_IC_]}
    function iter$6
     (record,
      id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {caml_call3(id_fun,id$2,record,record[1]);
      caml_call3(advance_errors_fun,advance_errors$0,record,record[2]);
      caml_call3(am_advancing_fun,am_advancing$0,record,record[3]);
      caml_call3(events_fun,events$1,record,record[4]);
      caml_call3(fired_events_fun,fired_events$0,record,record[5]);
      caml_call3
       (most_recently_fired_fun,most_recently_fired$0,record,record[6]);
      caml_call3(handle_fired_fun,handle_fired$0,record,record[7]);
      caml_call3(is_wall_clock_fun,is_wall_clock$0,record,record[8]);
      return caml_call3(scheduler_fun,scheduler$1,record,record[9])}
    function fold$6
     (record,
      init,
      id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {var
       _In_=record[9],
       _Io_=record[8],
       _Ip_=record[7],
       _Iq_=record[6],
       _Ir_=record[5],
       _Is_=record[4],
       _It_=record[3],
       _Iu_=record[2];
      return caml_call4
              (scheduler_fun,
               caml_call4
                (is_wall_clock_fun,
                 caml_call4
                  (handle_fired_fun,
                   caml_call4
                    (most_recently_fired_fun,
                     caml_call4
                      (fired_events_fun,
                       caml_call4
                        (events_fun,
                         caml_call4
                          (am_advancing_fun,
                           caml_call4
                            (advance_errors_fun,
                             caml_call4(id_fun,init,id$2,record,record[1]),
                             advance_errors$0,
                             record,
                             _Iu_),
                           am_advancing$0,
                           record,
                           _It_),
                         events$1,
                         record,
                         _Is_),
                       fired_events$0,
                       record,
                       _Ir_),
                     most_recently_fired$0,
                     record,
                     _Iq_),
                   handle_fired$0,
                   record,
                   _Ip_),
                 is_wall_clock$0,
                 record,
                 _Io_),
               scheduler$1,
               record,
               _In_)}
    function for_all$6
     (record,
      id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {var
       _If_=caml_call3(id_fun,id$2,record,record[1]),
       _Ig_=
        _If_
         ?caml_call3(advance_errors_fun,advance_errors$0,record,record[2])
         :_If_,
       _Ih_=
        _Ig_?caml_call3(am_advancing_fun,am_advancing$0,record,record[3]):_Ig_,
       _Ii_=_Ih_?caml_call3(events_fun,events$1,record,record[4]):_Ih_,
       _Ij_=
        _Ii_?caml_call3(fired_events_fun,fired_events$0,record,record[5]):_Ii_,
       _Ik_=
        _Ij_
         ?caml_call3
           (most_recently_fired_fun,most_recently_fired$0,record,record[6])
         :_Ij_,
       _Il_=
        _Ik_?caml_call3(handle_fired_fun,handle_fired$0,record,record[7]):_Ik_,
       _Im_=
        _Il_
         ?caml_call3(is_wall_clock_fun,is_wall_clock$0,record,record[8])
         :_Il_;
      return _Im_?caml_call3(scheduler_fun,scheduler$1,record,record[9]):_Im_}
    function exists$6
     (record,
      id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {var
       _Ie_=caml_call3(id_fun,id$2,record,record[1]),
       _H9_=
        _Ie_
        ||
        caml_call3(advance_errors_fun,advance_errors$0,record,record[2]),
       _H__=
        _H9_
        ||
        caml_call3(am_advancing_fun,am_advancing$0,record,record[3]),
       _H$_=_H__ || caml_call3(events_fun,events$1,record,record[4]),
       _Ia_=
        _H$_
        ||
        caml_call3(fired_events_fun,fired_events$0,record,record[5]),
       _Ib_=
        _Ia_
        ||
        caml_call3
         (most_recently_fired_fun,most_recently_fired$0,record,record[6]),
       _Ic_=
        _Ib_
        ||
        caml_call3(handle_fired_fun,handle_fired$0,record,record[7]),
       _Id_=
        _Ic_
        ||
        caml_call3(is_wall_clock_fun,is_wall_clock$0,record,record[8]);
      return _Id_?_Id_:caml_call3(scheduler_fun,scheduler$1,record,record[9])}
    function to_list$6
     (record,
      id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {var
       _H1_=[0,caml_call3(scheduler_fun,scheduler$1,record,record[9]),0],
       _H2_=
        [0,
         caml_call3(is_wall_clock_fun,is_wall_clock$0,record,record[8]),
         _H1_],
       _H3_=
        [0,caml_call3(handle_fired_fun,handle_fired$0,record,record[7]),_H2_],
       _H4_=
        [0,
         caml_call3
          (most_recently_fired_fun,most_recently_fired$0,record,record[6]),
         _H3_],
       _H5_=
        [0,caml_call3(fired_events_fun,fired_events$0,record,record[5]),_H4_],
       _H6_=[0,caml_call3(events_fun,events$1,record,record[4]),_H5_],
       _H7_=
        [0,caml_call3(am_advancing_fun,am_advancing$0,record,record[3]),_H6_],
       _H8_=
        [0,
         caml_call3(advance_errors_fun,advance_errors$0,record,record[2]),
         _H7_];
      return [0,caml_call3(id_fun,id$2,record,record[1]),_H8_]}
    function map$6
     (record,
      id_fun,
      advance_errors_fun,
      am_advancing_fun,
      events_fun,
      fired_events_fun,
      most_recently_fired_fun,
      handle_fired_fun,
      is_wall_clock_fun,
      scheduler_fun)
     {var
       _HT_=caml_call3(scheduler_fun,scheduler$1,record,record[9]),
       _HU_=caml_call3(is_wall_clock_fun,is_wall_clock$0,record,record[8]),
       _HV_=caml_call3(handle_fired_fun,handle_fired$0,record,record[7]),
       _HW_=
        caml_call3
         (most_recently_fired_fun,most_recently_fired$0,record,record[6]),
       _HX_=caml_call3(fired_events_fun,fired_events$0,record,record[5]),
       _HY_=caml_call3(events_fun,events$1,record,record[4]),
       _HZ_=caml_call3(am_advancing_fun,am_advancing$0,record,record[3]),
       _H0_=caml_call3(advance_errors_fun,advance_errors$0,record,record[2]);
      return [0,
              caml_call3(id_fun,id$2,record,record[1]),
              _H0_,
              _HZ_,
              _HY_,
              _HX_,
              _HW_,
              _HV_,
              _HU_,
              _HT_]}
    function set_all_mutable_fields$2
     (record,advance_errors,am_advancing,fired_events,most_recently_fired)
     {var record$0=caml_call1(Base_Field[1][1],record);
      record$0[2] = advance_errors;
      record$0[3] = am_advancing;
      record$0[5] = fired_events;
      record$0[6] = most_recently_fired;
      return 0}
    var
     Direct$2=
      [0,
       iter$6,
       fold$6,
       for_all$6,
       exists$6,
       to_list$6,
       map$6,
       set_all_mutable_fields$2],
     Fields$1=
      [0,
       names$2,
       scheduler$1,
       is_wall_clock$0,
       handle_fired$0,
       most_recently_fired$0,
       fired_events$0,
       events$1,
       am_advancing$0,
       advance_errors$0,
       id$2,
       make_creator$2,
       create$4,
       map$5,
       iter$5,
       fold$5,
       map_poly$2,
       for_all$5,
       exists$5,
       to_list$5,
       Direct$2];
    function sexp_of_t$24(param,_HI_)
     {var
       events=_HI_[4],
       is_wall_clock=_HI_[8],
       now=caml_call1(Timing_wheel[11],events);
      if(is_wall_clock)
       {var _HJ_=[0,[1,[0,_fH_,[0,caml_call1(Time_ns[90],now),0]]],0];
        return [1,[0,caml_call1(Sexplib0_Sexp_conv[7],cst_wall_clock),_HJ_]]}
      var all_events=[0,0];
      function _HK_(alarm)
       {var _HR_=all_events[1],_HS_=caml_call2(Alarm[5],events,alarm);
        all_events[1] = [0,[0,caml_call2(Alarm[3],events,alarm),_HS_],_HR_];
        return 0}
      caml_call2(Timing_wheel[15],events,_HK_);
      function _HL_(_HQ_){return _HQ_[2]}
      function _HM_(param,_HP_)
       {var at2=_HP_[1],at1=param[1];return caml_call2(Time_ns[22],at1,at2)}
      var
       _HN_=caml_call2(Core_kernel_List[58],all_events[1],_HM_),
       events$0=caml_call2(Core_kernel_List[71],_HN_,_HL_),
       _HO_=
        [0,
         [1,
          [0,
           _fI_,
           [0,caml_call2(Core_kernel[405],Job_or_event$0[6],events$0),0]]],
         0];
      return [1,[0,[1,[0,_fJ_,[0,caml_call1(Time_ns[90],now),0]]],_HO_]]}
    function timing_wheel_now(t){return caml_call1(Timing_wheel[11],t[4])}
    function is_in_fired_events(t,event)
     {function _HH_(r)
       {var current=[0,t[5]];
        for(;;)
         {if(caml_call1(Event$0[16],current[1]))
           {if(caml_call2(Core_kernel[231],current[1],event))caml_call1(r,1);
            current[1] = current[1][6];
            continue}
          return 0}}
      return caml_call1(Core_kernel[244],_HH_)}
    function invariant_with_jobs(job_invariant,t)
     {function _Hh_(param)
       {function check(f){return caml_call2(include$9[2],t,f)}
        function _Hl_(_HG_){return 0}
        function _Hm_(_HF_){return 0}
        function _Hn_(_HE_){return 0}
        var
         _Ho_=
          check
           (function(most_recently_fired)
             {var _HD_=caml_call1(Event$0[16],t[6]);
              if(_HD_)
               {if(is_in_fired_events(t,most_recently_fired))return 0;
                throw [0,Assert_failure,_fK_]}
              return _HD_}),
         _Hp_=
          check
           (function(fired_events)
             {var current=[0,fired_events];
              for(;;)
               {if(caml_call1(Event$0[16],current[1]))
                 {var _HC_=timing_wheel_now(t);
                  if(caml_call2(Time_ns[16],current[1][2],_HC_))
                   {var next=current[1][6];
                    if
                     (caml_call1(Event$0[16],next)
                      &&
                      !
                      caml_call2(Time_ns[16],current[1][2],next[2]))
                     throw [0,Assert_failure,_fL_];
                    current[1] = next;
                    continue}
                  throw [0,Assert_failure,_fM_]}
                return 0}}),
         _Hq_=
          check
           (function(events)
             {function _Hx_(_HB_){return 0}
              caml_call2(Timing_wheel[6],_Hx_,events);
              function _Hy_(alarm)
               {var
                 job_or_event=caml_call2(Alarm[5],events,alarm),
                 match=caml_call1(Job_or_event$0[5][1],job_or_event),
                 k=match[1],
                 event=caml_call2(Job_or_event$0[5][2],k,job_or_event);
                if(k)return caml_call1(job_invariant,event);
                if(caml_call2(Core_kernel[231],alarm,event[1]))
                 {var
                   _Hz_=event[2],
                   expect=caml_call2(Alarm[3],events,alarm),
                   sexpifier=Time_ns[90],
                   equal=0,
                   message=0,
                   here=0,
                   comparator=
                    function(a_005,b_006)
                     {return caml_call2(Time_ns[22],a_005,b_006)};
                  caml_call8
                   (Ppx_assert_lib_Runtime[3],
                    pos$0,
                    sexpifier,
                    comparator,
                    here,
                    message,
                    equal,
                    expect,
                    _Hz_);
                  var
                   sexpifier$0=Event$0[1][2],
                   _HA_=event[7],
                   expect$0=3,
                   equal$0=0,
                   message$0=0,
                   here$0=0,
                   comparator$0=
                    function(a_007,b_008)
                     {return caml_call2(Event$0[1][1],a_007,b_008)};
                  return caml_call8
                          (Ppx_assert_lib_Runtime[3],
                           pos$1,
                           sexpifier$0,
                           comparator$0,
                           here$0,
                           message$0,
                           equal$0,
                           expect$0,
                           _HA_)}
                throw [0,Assert_failure,_fN_]}
              return caml_call2(Timing_wheel[15],events,_Hy_)});
        function _Hr_(_Hw_){return 0}
        function _Hs_(_Hv_){return 0}
        function _Ht_(_Hu_){return 0}
        return caml_call9
                (Fields$1[14],_Ht_,_Hs_,_Hr_,_Hq_,_Hp_,_Ho_,_Hn_,_Hm_,_Hl_)}
      function _Hi_(param){return _fO_}
      function _Hj_(_Hk_){return sexp_of_t$24(_Hi_,_Hk_)}
      return caml_call4(include$9[1],_fP_,t,_Hj_,_Hh_)}
    function invariant$2(t)
     {return invariant_with_jobs(function(param){return 0},t)}
    var
     include$11=
      [0,
       Event$0,
       Job_or_event$0,
       scheduler$0,
       is_wall_clock,
       handle_fired,
       most_recently_fired,
       set_most_recently_fired,
       fired_events,
       set_fired_events,
       events$0,
       am_advancing,
       set_am_advancing,
       advance_errors,
       set_advance_errors,
       id$1,
       Fields$1,
       sexp_of_t$24,
       timing_wheel_now,
       is_in_fired_events,
       invariant_with_jobs,
       invariant$2];
    function sexp_of_t$25(v)
     {return caml_call2(include$11[17],Core_kernel[156],v)}
    var invariant$3=include$11[21],invariant_with_jobs$0=include$11[20];
    function sexp_of_t$26(v)
     {return caml_call2(include$11[17],Core_kernel[187],v)}
    var Read_write=[0,sexp_of_t$26,invariant$3,invariant_with_jobs$0];
    function id$3(t){return t[1]}
    function is_wall_clock$1(t){return t[8]}
    function length$1(t){return caml_call1(Timing_wheel[14],t[4])}
    function max_allowed_alarm_time(t)
     {return caml_call1(Timing_wheel[22],t[4])}
    function read_only(t){return t}
    function fire(t,event)
     {caml_call2(include$11[1][20],event,1);
      event[1] = caml_call1(Alarm[2],0);
      var
       prev=[0,include$11[1][14]],
       current=[0,t[5]],
       _Hf_=caml_call1(include$11[1][16],t[6]),
       _Hg_=_Hf_?caml_call2(Time_ns[15],event[2],t[6][2]):_Hf_;
      if(_Hg_){prev[1] = t[6];current[1] = prev[1][6]}
      for(;;)
       {if
         (caml_call1(include$11[1][16],current[1])
          &&
          caml_call2(Time_ns[16],current[1][2],event[2]))
         {prev[1] = current[1];current[1] = current[1][6];continue}
        event[6] = current[1];
        t[6] = event;
        return caml_call1(include$11[1][15],prev[1])
                ?(t[5] = event,0)
                :(prev[1][6] = event,0)}}
    function alarm_precision(t){return caml_call1(Timing_wheel[10],t[4])}
    function next_alarm_fires_at(t){return caml_call1(Timing_wheel[36],t[4])}
    function now(t)
     {return t[8]?caml_call1(Time_ns[62],0):caml_call1(include$11[18],t)}
    var timing_wheel_now$0=include$11[18];
    function schedule(t,event)
     {caml_call2(include$11[1][20],event,3);
      var _He_=caml_call1(include$11[2][1],event);
      event[1] = caml_call3(Timing_wheel[25],t[4],event[2],_He_);
      return 0}
    var
     include$12=include$11[1],
     Status$0=include$12[1],
     status$1=include$12[2],
     next_fired$1=include$12[3],
     set_next_fired$0=include$12[4],
     interval$1=include$12[5],
     set_interval$0=include$12[6],
     execution_context$1=include$12[7],
     callback$1=include$12[8],
     set_at$0=include$12[10],
     alarm$1=include$12[11],
     set_alarm$0=include$12[12],
     Fields$2=include$12[13],
     none$0=include$12[14],
     is_none$0=include$12[15],
     is_some$0=include$12[16],
     sexp_of_t$27=include$12[17],
     invariant$4=include$12[18],
     compare_at$0=include$12[19],
     set_status$1=include$12[20];
    function create_internal(t,at,interval,callback)
     {var _Hd_=t[9][7];
      return [0,caml_call1(Alarm[2],0),at,callback,_Hd_,interval,none$0,4]}
    function add(t,event)
     {var _Hc_=caml_call1(timing_wheel_now$0,t);
      return caml_call2(Time_ns[16],event[2],_Hc_)
              ?fire(t,event)
              :schedule(t,event)}
    function create_and_add(t,at,interval,callback)
     {var event=create_internal(t,at,interval,callback);
      add(t,event);
      return event}
    function at$2(t,at,callback){return create_and_add(t,at,0,callback)}
    function after$0(t,span,callback)
     {var _Hb_=now(t);
      return create_and_add(t,caml_call2(Time_ns[89],_Hb_,span),0,callback)}
    function require_span_at_least_alarm_pr(t,span)
     {var
       alarm_precision$0=alarm_precision(t),
       _G9_=caml_call2(Time_ns[1][18],span,alarm_precision$0);
      if(_G9_)
       {var
         _G__=
          [0,
           [1,[0,_fQ_,[0,caml_call1(Time_ns[1][10],alarm_precision$0),0]]],
           0],
         _G$_=[0,[1,[0,_fR_,[0,caml_call1(Time_ns[1][10],span),0]]],_G__],
         _Ha_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_interval_span_smaller_than),
            _G$_]];
        return caml_call1(Core_kernel[238],_Ha_)}
      return _G9_}
    function at_intervals(t,span,callback)
     {require_span_at_least_alarm_pr(t,span);
      return create_and_add(t,now(t),[0,span],callback)}
    function sexp_of_t$28(param)
     {switch(param){case 0:return _fS_;case 1:return _fT_;default:return _fU_}}
    var Abort_result=[0,sexp_of_t$28];
    function abort(t,event)
     {switch(event[7])
       {case 0:return 2;
        case 1:caml_call2(include$11[1][20],event,0);return 0;
        case 2:
         return caml_call1(Core_kernel_Option[44],event[5])?1:(event[5] = 0,0);
        case 3:
         caml_call2(include$11[1][20],event,4);
         caml_call2(Timing_wheel[28],t[4],event[1]);
         event[1] = caml_call1(Alarm[2],0);
         return 0;
        default:return 2}}
    function abort_if_possible(t,event){abort(t,event);return 0}
    function abort_exn(t,event)
     {var reason=abort(t,event);
      if(reason)
       {var
         _G7_=[0,[1,[0,_fV_,[0,caml_call1(Abort_result[1],reason),0]]],0],
         _G8_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Synchronous_time_source_ab),
            _G7_]];
        return caml_call1(Core_kernel[238],_G8_)}
      return 0}
    function create$5(t,callback)
     {return create_internal(t,Time_ns[55],0,callback)}
    function schedule_at_internal(t,event,at,interval)
     {var _G4_=event[7];
      if(4 <= _G4_)
       {event[2] = at;event[5] = interval;add(t,event);return _fW_}
      var
       _G5_=[0,caml_call1(include$11[1][1][2],_G4_),0],
       _G6_=
        [1,
         [0,
          caml_call1(Sexplib0_Sexp_conv[7],cst_cannot_schedule_an_event_w),
          _G5_]];
      return caml_call1(Core_kernel_Or_error[39],_G6_)}
    function schedule_at(t,event,at)
     {return schedule_at_internal(t,event,at,0)}
    function schedule_after(t,event,span)
     {var _G3_=now(t);
      return schedule_at(t,event,caml_call2(Time_ns[89],_G3_,span))}
    function schedule_at_intervals(t,event,span)
     {require_span_at_least_alarm_pr(t,span);
      return schedule_at_internal(t,event,now(t),[0,span])}
    function sexp_of_t$29(param)
     {switch(param)
       {case 0:return _fX_;
        case 1:return _fY_;
        case 2:return _fZ_;
        default:return _f0_}}
    var Reschedule_result=[0,sexp_of_t$29];
    function reschedule_at(t,event,at)
     {switch(event[7])
       {case 0:return 2;
        case 1:return 3;
        case 2:return 1;
        case 3:
         event[2] = at;
         var _G2_=caml_call1(timing_wheel_now$0,t);
         if(caml_call2(Time_ns[18],at,_G2_))
          caml_call3(Timing_wheel[29],t[4],event[1],at);
         else
          {caml_call2(Timing_wheel[28],t[4],event[1]);fire(t,event)}
         return 0;
        default:event[2] = at;event[5] = 0;add(t,event);return 0}}
    function reschedule_after(t,event,span)
     {var _G1_=now(t);
      return reschedule_at(t,event,caml_call2(Time_ns[89],_G1_,span))}
    function some(value)
     {if(caml_call1(is_some$0,value))return value;
      throw [0,Assert_failure,_f1_]}
    function some_is_representable(value)
     {if(caml_call1(is_some$0,value))return 1;throw [0,Assert_failure,_f2_]}
    function unchecked_value(_G0_){return _G0_}
    function value$0(t,default$0){return caml_call1(is_none$0,t)?default$0:t}
    function value_exn(t)
     {if(caml_call1(is_none$0,t))
       {var
         _GZ_=
          caml_call1(Sexplib0_Sexp_conv[7],cst_Synchronous_time_source_Ev);
        caml_call1(Core_kernel[238],_GZ_)}
      return t}
    function to_option(t){return caml_call1(is_none$0,t)?0:[0,t]}
    function of_option(param)
     {if(param){var t=param[1];return some(t)}return none$0}
    function sexp_of_t$30(t)
     {var _GY_=to_option(t);
      return caml_call1(caml_call1(Core_kernel[438],sexp_of_t$27),_GY_)}
    function unsafe_value(_GX_){return _GX_}
    var
     Optional_syntax=[0,is_none$0,unsafe_value],
     Optional_syntax$0=[0,Optional_syntax],
     Option=
      [0,
       is_none$0,
       is_some$0,
       some,
       some_is_representable,
       none$0,
       unchecked_value,
       value$0,
       value_exn,
       to_option,
       of_option,
       sexp_of_t$30,
       Optional_syntax$0],
     Event$1=
      [0,
       Status$0,
       status$1,
       next_fired$1,
       set_next_fired$0,
       interval$1,
       set_interval$0,
       execution_context$1,
       callback$1,
       set_at$0,
       alarm$1,
       set_alarm$0,
       Fields$2,
       none$0,
       is_none$0,
       is_some$0,
       sexp_of_t$27,
       invariant$4,
       compare_at$0,
       set_status$1,
       create_internal,
       add,
       create_and_add,
       at$2,
       after$0,
       require_span_at_least_alarm_pr,
       at_intervals,
       Abort_result,
       abort,
       abort_if_possible,
       abort_exn,
       create$5,
       schedule_at_internal,
       schedule_at,
       schedule_after,
       schedule_at_intervals,
       Reschedule_result,
       reschedule_at,
       reschedule_after,
       Option];
    function run_after(t,span,callback)
     {caml_call3(Event$1[24],t,span,callback);return 0}
    function run_at(t,at,callback)
     {caml_call3(Event$1[23],t,at,callback);return 0}
    function run_at_intervals(t,span,callback)
     {caml_call3(Event$1[26],t,span,callback);return 0}
    function run_fired_events(t,send_exn)
     {var current_execution_context=t[9][7];
      for(;;)
       {if(caml_call1(Event$1[15],t[5]))
         {var event=t[5];
          if(caml_call2(Core_kernel[231],event,t[6]))t[6] = Event$1[13];
          t[5] = event[6];
          event[6] = Event$1[13];
          var _GT_=event[7];
          if(1 === _GT_)
           {caml_call2(Event$1[19],event,2);
            set_execution_context(t[9],event[4]);
            try
             {var switch$0=0;caml_call1(event[3],0);switch$0 = 1}
            catch(exn$0)
             {exn$0 = caml_wrap_exception(exn$0);
              if(send_exn)
               {var
                 send_exn$0=send_exn[1],
                 backtrace=caml_call2(Base_Backtrace[2],0,0);
                caml_call3
                 (send_exn$0,event[4][1],[0,[0,936718974,backtrace]],exn$0)}
              else
               {var _GU_=t[2];
                t[2] = [0,caml_call2(Core_kernel_Error[22],0,exn$0),_GU_]}
              caml_call2(Event$1[19],event,4);
              var exn=exn$0}
            if(switch$0)
             {var _GV_=event[5];
              if(_GV_)
               {var interval=_GV_[1],_GW_=caml_call1(timing_wheel_now$0,t);
                event[2] = caml_call5(Time_ns[77],0,event[2],_GW_,interval,0);
                schedule(t,event)}
              else
               caml_call2(Event$1[19],event,4)}}
          else
           {if(_GT_)throw [0,Assert_failure,_f3_];
            caml_call2(Event$1[19],event,4)}
          continue}
        return set_execution_context(t[9],current_execution_context)}}
    function advance_clock(t,to,send_exn)
     {caml_call3(Timing_wheel[20],t[4],to,t[7]);
      return run_fired_events(t,send_exn)}
    function fire_past_alarms(t,send_exn)
     {caml_call2(Timing_wheel[21],t[4],t[7]);
      return run_fired_events(t,send_exn)}
    function advance_internal(t,to,send_exn)
     {advance_clock(t,to,send_exn);return fire_past_alarms(t,send_exn)}
    function prepare_to_advance(t,send_exn)
     {if(t[3])
       {var
         _GS_=
          caml_call1(Sexplib0_Sexp_conv[7],cst_cannot_call_advance_by_ala);
        caml_call1(Core_kernel[238],_GS_)}
      t[3] = 1;
      if(t[2])t[2] = 0;
      return run_fired_events(t,send_exn)}
    function finish_advancing(t)
     {t[3] = 0;
      var _GR_=t[2];
      return _GR_?(t[2] = 0,[1,caml_call2(Core_kernel_Error[21],0,_GR_)]):_f4_}
    function advance_by_alarms(t,to)
     {prepare_to_advance(t,0);
      var continue$0=[0,1],send_exn=0;
      for(;;)
       {if(continue$0[1])
         {if(caml_call1(Timing_wheel[13],t[4])){continue$0[1] = 0;continue}
          var next_alarm_fires_at=caml_call1(Timing_wheel[37],t[4]);
          if(caml_call2(Time_ns[15],next_alarm_fires_at,to))
           continue$0[1] = 0;
          else
           advance_internal(t,caml_call1(Timing_wheel[35],t[4]),send_exn);
          continue}
        advance_internal(t,to,send_exn);
        return finish_advancing(t)}}
    function advance_directly(t,to)
     {prepare_to_advance(t,0);
      advance_internal(t,to,0);
      return finish_advancing(t)}
    function max_alarm_time_in_min_timing_w(t)
     {return caml_call1(Timing_wheel[34],t[4])}
    function has_events_to_run(t){return caml_call1(Event$1[15],t[5])}
    var Expert=[0,max_alarm_time_in_min_timing_w,has_events_to_run];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$46);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Synchronous_t$0);
    var
     include$13=
      [0,
       Time_ns,
       Alarm,
       default_timing_wheel_config$0,
       include$11,
       sexp_of_t$25,
       invariant$3,
       invariant_with_jobs$0,
       Read_write,
       id$3,
       is_wall_clock$1,
       length$1,
       max_allowed_alarm_time,
       read_only,
       fire,
       alarm_precision,
       next_alarm_fires_at,
       now,
       timing_wheel_now$0,
       schedule,
       Event$1,
       run_after,
       run_at,
       run_at_intervals,
       run_fired_events,
       advance_clock,
       fire_past_alarms,
       advance_internal,
       prepare_to_advance,
       finish_advancing,
       advance_by_alarms,
       advance_directly,
       Expert];
    caml_register_global
     (1334,include$13,"Async_kernel__Synchronous_time_source0");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Scheduler1);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$47);
    caml_call1(Expect_test_collector[4][1],cst_src_scheduler1_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$48,cst$19);
    function create_with_cell(cell){return [0,cell]}
    function create$6(param){return [0,0]}
    function create_full(a){return [0,[2,a]]}
    var Ivar$0=[0,create_with_cell,create$6,create_full];
    function create$7(param)
     {var _GQ_=[0,0,caml_call1(Ivar$0[2],0)];return caml_call1(Bvar[1],_GQ_)}
    var Bvar$0=[0,create$7];
    function sexp_of_t$31(param){return param?_f5_:_f6_}
    var Exec_result=[0,sexp_of_t$31];
    function exec(r){return r[2]}
    function execution_context$2(r){return r[1]}
    function _f7_(r,v){return [0,r[1],v]}
    var _f8_=0,exec$0=[0,function(param){return 0},cst_exec,_f8_,exec,_f7_];
    function _f9_(r,v){return [0,v,r[2]]}
    var
     _f__=0,
     execution_context$3=
      [0,
       function(param){return 0},
       cst_execution_context$0,
       _f__,
       execution_context$2,
       _f9_];
    function make_creator$3(execution_context_fun,exec_fun,compile_acc)
     {var
       match=caml_call2(execution_context_fun,execution_context$3,compile_acc),
       compile_acc$0=match[2],
       execution_context_gen=match[1],
       match$0=caml_call2(exec_fun,exec$0,compile_acc$0),
       compile_acc$1=match$0[2],
       exec_gen=match$0[1];
      return [0,
              function(acc)
               {var
                 execution_context=caml_call1(execution_context_gen,acc),
                 exec=caml_call1(exec_gen,acc);
                return [0,execution_context,exec]},
              compile_acc$1]}
    function create$8(execution_context,exec)
     {return [0,execution_context,exec]}
    function map$7(execution_context_fun,exec_fun)
     {var _GP_=caml_call1(exec_fun,exec$0);
      return [0,caml_call1(execution_context_fun,execution_context$3),_GP_]}
    function iter$7(execution_context_fun,exec_fun)
     {caml_call1(execution_context_fun,execution_context$3);
      return caml_call1(exec_fun,exec$0)}
    function fold$7(init,execution_context_fun,exec_fun)
     {return caml_call2
              (exec_fun,
               caml_call2(execution_context_fun,init,execution_context$3),
               exec$0)}
    function map_poly$3(record)
     {var _GO_=[0,caml_call1(record[1],exec$0),0];
      return [0,caml_call1(record[1],execution_context$3),_GO_]}
    function for_all$7(execution_context_fun,exec_fun)
     {var _GN_=caml_call1(execution_context_fun,execution_context$3);
      return _GN_?caml_call1(exec_fun,exec$0):_GN_}
    function exists$7(execution_context_fun,exec_fun)
     {var _GM_=caml_call1(execution_context_fun,execution_context$3);
      return _GM_?_GM_:caml_call1(exec_fun,exec$0)}
    function to_list$7(execution_context_fun,exec_fun)
     {var _GL_=[0,caml_call1(exec_fun,exec$0),0];
      return [0,caml_call1(execution_context_fun,execution_context$3),_GL_]}
    function iter$8(record,execution_context_fun,exec_fun)
     {caml_call3(execution_context_fun,execution_context$3,record,record[1]);
      return caml_call3(exec_fun,exec$0,record,record[2])}
    function fold$8(record,init,execution_context_fun,exec_fun)
     {var _GK_=record[2];
      return caml_call4
              (exec_fun,
               caml_call4
                (execution_context_fun,
                 init,
                 execution_context$3,
                 record,
                 record[1]),
               exec$0,
               record,
               _GK_)}
    function for_all$8(record,execution_context_fun,exec_fun)
     {var
       _GJ_=
        caml_call3(execution_context_fun,execution_context$3,record,record[1]);
      return _GJ_?caml_call3(exec_fun,exec$0,record,record[2]):_GJ_}
    function exists$8(record,execution_context_fun,exec_fun)
     {var
       _GI_=
        caml_call3(execution_context_fun,execution_context$3,record,record[1]);
      return _GI_?_GI_:caml_call3(exec_fun,exec$0,record,record[2])}
    function to_list$8(record,execution_context_fun,exec_fun)
     {var _GH_=[0,caml_call3(exec_fun,exec$0,record,record[2]),0];
      return [0,
              caml_call3
               (execution_context_fun,execution_context$3,record,record[1]),
              _GH_]}
    function map$8(record,execution_context_fun,exec_fun)
     {var _GG_=caml_call3(exec_fun,exec$0,record,record[2]);
      return [0,
              caml_call3
               (execution_context_fun,execution_context$3,record,record[1]),
              _GG_]}
    function set_all_mutable_fields$3(record)
     {caml_call1(Base_Field[1][1],record);return 0}
    var
     Direct$3=
      [0,
       iter$8,
       fold$8,
       for_all$8,
       exists$8,
       to_list$8,
       map$8,
       set_all_mutable_fields$3],
     Fields$3=
      [0,
       names$3,
       exec$0,
       execution_context$3,
       make_creator$3,
       create$8,
       map$7,
       iter$7,
       fold$7,
       map_poly$3,
       for_all$7,
       exists$7,
       to_list$7,
       Direct$3];
    function sexp_of_t$32(param)
     {var v_execution_context=param[1],bnds=0;
      function _GE_(_GF_){return 0}
      var
       arg=caml_call1(Sexplib0_Sexp_conv[24],_GE_),
       bnds$0=[0,[1,[0,_f$_,[0,arg,0]]],bnds],
       arg$0=sexp_of_t$14(v_execution_context),
       bnds$1=[0,[1,[0,_ga_,[0,arg$0,0]]],bnds$0];
      return [1,bnds$1]}
    function invariant$5(t)
     {function _GA_(param)
       {function _GC_(_GD_){return 0}
        var _GB_=caml_call2(include$9[2],t,f);
        return caml_call2(Fields$3[7],_GB_,_GC_)}
      return caml_call4(include$9[1],_gb_,t,sexp_of_t$32,_GA_)}
    var
     Very_low_priority_worker$0=
      [0,
       Exec_result,
       exec,
       execution_context$2,
       Fields$3,
       sexp_of_t$32,
       invariant$5];
    function on_end_of_cycle(r){return r[28]}
    function set_on_end_of_cycle(r,v){r[28] = v;return 0}
    function on_start_of_cycle(r){return r[27]}
    function set_on_start_of_cycle(r,v){r[27] = v;return 0}
    function record_backtraces$2(r){return r[26]}
    function set_record_backtraces(r,v){r[26] = v;return 0}
    function max_num_jobs_per_priority_per_$2(r){return r[25]}
    function set_max_num_jobs_per_priority_(r,v){r[25] = v;return 0}
    function check_invariants$2(r){return r[24]}
    function set_check_invariants(r,v){r[24] = v;return 0}
    function yield_until_no_jobs_remain(r){return r[23]}
    function set_yield_until_no_jobs_remain(r,v){r[23] = v;return 0}
    function yield$0(r){return r[22]}
    function set_yield(r,v){r[22] = v;return 0}
    function event_added_hook(r){return r[21]}
    function set_event_added_hook(r,v){r[21] = v;return 0}
    function job_queued_hook(r){return r[20]}
    function set_job_queued_hook(r,v){r[20] = v;return 0}
    function thread_safe_external_job_hook(r){return r[19]}
    function set_thread_safe_external_job_h(r,v){r[19] = v;return 0}
    function external_jobs(r){return r[18]}
    function time_source(r){return r[17]}
    function set_time_source(r,v){r[17] = v;return 0}
    function total_cycle_time(r){return r[16]}
    function set_total_cycle_time(r,v){r[16] = v;return 0}
    function last_cycle_num_jobs(r){return r[15]}
    function set_last_cycle_num_jobs(r,v){r[15] = v;return 0}
    function last_cycle_time(r){return r[14]}
    function set_last_cycle_time(r,v){r[14] = v;return 0}
    function run_every_cycle_end(r){return r[13]}
    function set_run_every_cycle_end(r,v){r[13] = v;return 0}
    function run_every_cycle_start(r){return r[12]}
    function set_run_every_cycle_start(r,v){r[12] = v;return 0}
    function in_cycle(r){return r[11]}
    function set_in_cycle(r,v){r[11] = v;return 0}
    function cycle_start(r){return r[10]}
    function set_cycle_start(r,v){r[10] = v;return 0}
    function cycle_count(r){return r[9]}
    function set_cycle_count(r,v){r[9] = v;return 0}
    function uncaught_exn_unwrapped(r){return r[8]}
    function set_uncaught_exn(r,v){r[8] = v;return 0}
    function current_execution_context(r){return r[7]}
    function set_current_execution_context(r,v){r[7] = v;return 0}
    function main_execution_context(r){return r[6]}
    function set_main_execution_context(r,v){r[6] = v;return 0}
    function very_low_priority_workers(r){return r[5]}
    function low_priority_jobs(r){return r[4]}
    function normal_priority_jobs(r){return r[3]}
    function job_pool(r){return r[2]}
    function set_job_pool(r,v){r[2] = v;return 0}
    function check_access(r){return r[1]}
    function set_check_access(r,v){r[1] = v;return 0}
    function _gc_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              v]}
    var
     _gd_=[0,set_on_end_of_cycle],
     on_end_of_cycle$0=
      [0,
       function(param){return 0},
       cst_on_end_of_cycle,
       _gd_,
       on_end_of_cycle,
       _gc_];
    function _ge_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              v,
              r[28]]}
    var
     _gf_=[0,set_on_start_of_cycle],
     on_start_of_cycle$0=
      [0,
       function(param){return 0},
       cst_on_start_of_cycle,
       _gf_,
       on_start_of_cycle,
       _ge_];
    function _gg_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              v,
              r[27],
              r[28]]}
    var
     _gh_=[0,set_record_backtraces],
     record_backtraces$3=
      [0,
       function(param){return 0},
       cst_record_backtraces$1,
       _gh_,
       record_backtraces$2,
       _gg_];
    function _gi_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              v,
              r[26],
              r[27],
              r[28]]}
    var
     _gj_=[0,set_max_num_jobs_per_priority_],
     max_num_jobs_per_priority_per_$3=
      [0,
       function(param){return 0},
       cst_max_num_jobs_per_priority_$1,
       _gj_,
       max_num_jobs_per_priority_per_$2,
       _gi_];
    function _gk_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              v,
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _gl_=[0,set_check_invariants],
     check_invariants$3=
      [0,
       function(param){return 0},
       cst_check_invariants$1,
       _gl_,
       check_invariants$2,
       _gk_];
    function _gm_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              v,
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _gn_=[0,set_yield_until_no_jobs_remain],
     yield_until_no_jobs_remain$0=
      [0,
       function(param){return 0},
       cst_yield_until_no_jobs_remain,
       _gn_,
       yield_until_no_jobs_remain,
       _gm_];
    function _go_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              v,
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _gp_=[0,set_yield],
     yield$1=[0,function(param){return 0},cst_yield,_gp_,yield$0,_go_];
    function _gq_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              v,
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _gr_=[0,set_event_added_hook],
     event_added_hook$0=
      [0,
       function(param){return 0},
       cst_event_added_hook,
       _gr_,
       event_added_hook,
       _gq_];
    function _gs_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              v,
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _gt_=[0,set_job_queued_hook],
     job_queued_hook$0=
      [0,
       function(param){return 0},
       cst_job_queued_hook,
       _gt_,
       job_queued_hook,
       _gs_];
    function _gu_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              v,
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _gv_=[0,set_thread_safe_external_job_h],
     thread_safe_external_job_hook$0=
      [0,
       function(param){return 0},
       cst_thread_safe_external_job_h,
       _gv_,
       thread_safe_external_job_hook,
       _gu_];
    function _gw_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              v,
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _gx_=0,
     external_jobs$0=
      [0,function(param){return 0},cst_external_jobs,_gx_,external_jobs,_gw_];
    function _gy_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              v,
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _gz_=[0,set_time_source],
     time_source$0=
      [0,function(param){return 0},cst_time_source,_gz_,time_source,_gy_];
    function _gA_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              v,
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _gB_=[0,set_total_cycle_time],
     total_cycle_time$0=
      [0,
       function(param){return 0},
       cst_total_cycle_time,
       _gB_,
       total_cycle_time,
       _gA_];
    function _gC_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              v,
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _gD_=[0,set_last_cycle_num_jobs],
     last_cycle_num_jobs$0=
      [0,
       function(param){return 0},
       cst_last_cycle_num_jobs,
       _gD_,
       last_cycle_num_jobs,
       _gC_];
    function _gE_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              v,
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _gF_=[0,set_last_cycle_time],
     last_cycle_time$0=
      [0,
       function(param){return 0},
       cst_last_cycle_time,
       _gF_,
       last_cycle_time,
       _gE_];
    function _gG_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              v,
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _gH_=[0,set_run_every_cycle_end],
     run_every_cycle_end$0=
      [0,
       function(param){return 0},
       cst_run_every_cycle_end,
       _gH_,
       run_every_cycle_end,
       _gG_];
    function _gI_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              v,
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _gJ_=[0,set_run_every_cycle_start],
     run_every_cycle_start$0=
      [0,
       function(param){return 0},
       cst_run_every_cycle_start,
       _gJ_,
       run_every_cycle_start,
       _gI_];
    function _gK_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              v,
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _gL_=[0,set_in_cycle],
     in_cycle$0=[0,function(param){return 0},cst_in_cycle,_gL_,in_cycle,_gK_];
    function _gM_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              v,
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _gN_=[0,set_cycle_start],
     cycle_start$0=
      [0,function(param){return 0},cst_cycle_start,_gN_,cycle_start,_gM_];
    function _gO_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              v,
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _gP_=[0,set_cycle_count],
     cycle_count$0=
      [0,function(param){return 0},cst_cycle_count,_gP_,cycle_count,_gO_];
    function _gQ_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              v,
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _gR_=[0,set_uncaught_exn],
     uncaught_exn=
      [0,
       function(param){return 0},
       cst_uncaught_exn,
       _gR_,
       uncaught_exn_unwrapped,
       _gQ_];
    function _gS_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              v,
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _gT_=[0,set_current_execution_context],
     current_execution_context$0=
      [0,
       function(param){return 0},
       cst_current_execution_context,
       _gT_,
       current_execution_context,
       _gS_];
    function _gU_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              v,
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _gV_=[0,set_main_execution_context],
     main_execution_context$0=
      [0,
       function(param){return 0},
       cst_main_execution_context,
       _gV_,
       main_execution_context,
       _gU_];
    function _gW_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              r[4],
              v,
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _gX_=0,
     very_low_priority_workers$0=
      [0,
       function(param){return 0},
       cst_very_low_priority_workers,
       _gX_,
       very_low_priority_workers,
       _gW_];
    function _gY_(r,v)
     {return [0,
              r[1],
              r[2],
              r[3],
              v,
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _gZ_=0,
     low_priority_jobs$0=
      [0,
       function(param){return 0},
       cst_low_priority_jobs,
       _gZ_,
       low_priority_jobs,
       _gY_];
    function _g0_(r,v)
     {return [0,
              r[1],
              r[2],
              v,
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _g1_=0,
     normal_priority_jobs$0=
      [0,
       function(param){return 0},
       cst_normal_priority_jobs,
       _g1_,
       normal_priority_jobs,
       _g0_];
    function _g2_(r,v)
     {return [0,
              r[1],
              v,
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _g3_=[0,set_job_pool],
     job_pool$0=[0,function(param){return 0},cst_job_pool,_g3_,job_pool,_g2_];
    function _g4_(r,v)
     {return [0,
              v,
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15],
              r[16],
              r[17],
              r[18],
              r[19],
              r[20],
              r[21],
              r[22],
              r[23],
              r[24],
              r[25],
              r[26],
              r[27],
              r[28]]}
    var
     _g5_=[0,set_check_access],
     check_access$0=
      [0,function(param){return 0},cst_check_access,_g5_,check_access,_g4_];
    function make_creator$4
     (check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      run_every_cycle_end_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun,
      compile_acc)
     {var
       match=caml_call2(check_access_fun,check_access$0,compile_acc),
       compile_acc$0=match[2],
       check_access_gen=match[1],
       match$0=caml_call2(job_pool_fun,job_pool$0,compile_acc$0),
       compile_acc$1=match$0[2],
       job_pool_gen=match$0[1],
       match$1=
        caml_call2
         (normal_priority_jobs_fun,normal_priority_jobs$0,compile_acc$1),
       compile_acc$2=match$1[2],
       normal_priority_jobs_gen=match$1[1],
       match$2=
        caml_call2(low_priority_jobs_fun,low_priority_jobs$0,compile_acc$2),
       compile_acc$3=match$2[2],
       low_priority_jobs_gen=match$2[1],
       match$3=
        caml_call2
         (very_low_priority_workers_fun,
          very_low_priority_workers$0,
          compile_acc$3),
       compile_acc$4=match$3[2],
       very_low_priority_workers_gen=match$3[1],
       match$4=
        caml_call2
         (main_execution_context_fun,main_execution_context$0,compile_acc$4),
       compile_acc$5=match$4[2],
       main_execution_context_gen=match$4[1],
       match$5=
        caml_call2
         (current_execution_context_fun,
          current_execution_context$0,
          compile_acc$5),
       compile_acc$6=match$5[2],
       current_execution_context_gen=match$5[1],
       match$6=caml_call2(uncaught_exn_fun,uncaught_exn,compile_acc$6),
       compile_acc$7=match$6[2],
       uncaught_exn_gen=match$6[1],
       match$7=caml_call2(cycle_count_fun,cycle_count$0,compile_acc$7),
       compile_acc$8=match$7[2],
       cycle_count_gen=match$7[1],
       match$8=caml_call2(cycle_start_fun,cycle_start$0,compile_acc$8),
       compile_acc$9=match$8[2],
       cycle_start_gen=match$8[1],
       match$9=caml_call2(in_cycle_fun,in_cycle$0,compile_acc$9),
       compile_acc$10=match$9[2],
       in_cycle_gen=match$9[1],
       match$10=
        caml_call2
         (run_every_cycle_start_fun,run_every_cycle_start$0,compile_acc$10),
       compile_acc$11=match$10[2],
       run_every_cycle_start_gen=match$10[1],
       match$11=
        caml_call2
         (run_every_cycle_end_fun,run_every_cycle_end$0,compile_acc$11),
       compile_acc$12=match$11[2],
       run_every_cycle_end_gen=match$11[1],
       match$12=
        caml_call2(last_cycle_time_fun,last_cycle_time$0,compile_acc$12),
       compile_acc$13=match$12[2],
       last_cycle_time_gen=match$12[1],
       match$13=
        caml_call2
         (last_cycle_num_jobs_fun,last_cycle_num_jobs$0,compile_acc$13),
       compile_acc$14=match$13[2],
       last_cycle_num_jobs_gen=match$13[1],
       match$14=
        caml_call2(total_cycle_time_fun,total_cycle_time$0,compile_acc$14),
       compile_acc$15=match$14[2],
       total_cycle_time_gen=match$14[1],
       match$15=caml_call2(time_source_fun,time_source$0,compile_acc$15),
       compile_acc$16=match$15[2],
       time_source_gen=match$15[1],
       match$16=caml_call2(external_jobs_fun,external_jobs$0,compile_acc$16),
       compile_acc$17=match$16[2],
       external_jobs_gen=match$16[1],
       match$17=
        caml_call2
         (thread_safe_external_job_hook_,
          thread_safe_external_job_hook$0,
          compile_acc$17),
       compile_acc$18=match$17[2],
       thread_safe_external_job_hook_$0=match$17[1],
       match$18=
        caml_call2(job_queued_hook_fun,job_queued_hook$0,compile_acc$18),
       compile_acc$19=match$18[2],
       job_queued_hook_gen=match$18[1],
       match$19=
        caml_call2(event_added_hook_fun,event_added_hook$0,compile_acc$19),
       compile_acc$20=match$19[2],
       event_added_hook_gen=match$19[1],
       match$20=caml_call2(yield_fun,yield$1,compile_acc$20),
       compile_acc$21=match$20[2],
       yield_gen=match$20[1],
       match$21=
        caml_call2
         (yield_until_no_jobs_remain_fun,
          yield_until_no_jobs_remain$0,
          compile_acc$21),
       compile_acc$22=match$21[2],
       yield_until_no_jobs_remain_gen=match$21[1],
       match$22=
        caml_call2(check_invariants_fun,check_invariants$3,compile_acc$22),
       compile_acc$23=match$22[2],
       check_invariants_gen=match$22[1],
       match$23=
        caml_call2
         (max_num_jobs_per_priority_per_,
          max_num_jobs_per_priority_per_$3,
          compile_acc$23),
       compile_acc$24=match$23[2],
       max_num_jobs_per_priority_per_$0=match$23[1],
       match$24=
        caml_call2(record_backtraces_fun,record_backtraces$3,compile_acc$24),
       compile_acc$25=match$24[2],
       record_backtraces_gen=match$24[1],
       match$25=
        caml_call2(on_start_of_cycle_fun,on_start_of_cycle$0,compile_acc$25),
       compile_acc$26=match$25[2],
       on_start_of_cycle_gen=match$25[1],
       match$26=
        caml_call2(on_end_of_cycle_fun,on_end_of_cycle$0,compile_acc$26),
       compile_acc$27=match$26[2],
       on_end_of_cycle_gen=match$26[1];
      return [0,
              function(acc)
               {var
                 check_access=caml_call1(check_access_gen,acc),
                 job_pool=caml_call1(job_pool_gen,acc),
                 normal_priority_jobs=caml_call1(normal_priority_jobs_gen,acc),
                 low_priority_jobs=caml_call1(low_priority_jobs_gen,acc),
                 very_low_priority_workers=
                  caml_call1(very_low_priority_workers_gen,acc),
                 main_execution_context=
                  caml_call1(main_execution_context_gen,acc),
                 current_execution_context=
                  caml_call1(current_execution_context_gen,acc),
                 uncaught_exn=caml_call1(uncaught_exn_gen,acc),
                 cycle_count=caml_call1(cycle_count_gen,acc),
                 cycle_start=caml_call1(cycle_start_gen,acc),
                 in_cycle=caml_call1(in_cycle_gen,acc),
                 run_every_cycle_start=
                  caml_call1(run_every_cycle_start_gen,acc),
                 run_every_cycle_end=caml_call1(run_every_cycle_end_gen,acc),
                 last_cycle_time=caml_call1(last_cycle_time_gen,acc),
                 last_cycle_num_jobs=caml_call1(last_cycle_num_jobs_gen,acc),
                 total_cycle_time=caml_call1(total_cycle_time_gen,acc),
                 time_source=caml_call1(time_source_gen,acc),
                 external_jobs=caml_call1(external_jobs_gen,acc),
                 thread_safe_external_job_hook=
                  caml_call1(thread_safe_external_job_hook_$0,acc),
                 job_queued_hook=caml_call1(job_queued_hook_gen,acc),
                 event_added_hook=caml_call1(event_added_hook_gen,acc),
                 yield$0=caml_call1(yield_gen,acc),
                 yield_until_no_jobs_remain=
                  caml_call1(yield_until_no_jobs_remain_gen,acc),
                 check_invariants=caml_call1(check_invariants_gen,acc),
                 max_num_jobs_per_priority_per_=
                  caml_call1(max_num_jobs_per_priority_per_$0,acc),
                 record_backtraces=caml_call1(record_backtraces_gen,acc),
                 on_start_of_cycle=caml_call1(on_start_of_cycle_gen,acc),
                 on_end_of_cycle=caml_call1(on_end_of_cycle_gen,acc);
                return [0,
                        check_access,
                        job_pool,
                        normal_priority_jobs,
                        low_priority_jobs,
                        very_low_priority_workers,
                        main_execution_context,
                        current_execution_context,
                        uncaught_exn,
                        cycle_count,
                        cycle_start,
                        in_cycle,
                        run_every_cycle_start,
                        run_every_cycle_end,
                        last_cycle_time,
                        last_cycle_num_jobs,
                        total_cycle_time,
                        time_source,
                        external_jobs,
                        thread_safe_external_job_hook,
                        job_queued_hook,
                        event_added_hook,
                        yield$0,
                        yield_until_no_jobs_remain,
                        check_invariants,
                        max_num_jobs_per_priority_per_,
                        record_backtraces,
                        on_start_of_cycle,
                        on_end_of_cycle]},
              compile_acc$27]}
    function create$9
     (check_access,
      job_pool,
      normal_priority_jobs,
      low_priority_jobs,
      very_low_priority_workers,
      main_execution_context,
      current_execution_context,
      uncaught_exn,
      cycle_count,
      cycle_start,
      in_cycle,
      run_every_cycle_start,
      run_every_cycle_end,
      last_cycle_time,
      last_cycle_num_jobs,
      total_cycle_time,
      time_source,
      external_jobs,
      thread_safe_external_job_hook,
      job_queued_hook,
      event_added_hook,
      yield$0,
      yield_until_no_jobs_remain,
      check_invariants,
      max_num_jobs_per_priority_per_,
      record_backtraces,
      on_start_of_cycle,
      on_end_of_cycle)
     {return [0,
              check_access,
              job_pool,
              normal_priority_jobs,
              low_priority_jobs,
              very_low_priority_workers,
              main_execution_context,
              current_execution_context,
              uncaught_exn,
              cycle_count,
              cycle_start,
              in_cycle,
              run_every_cycle_start,
              run_every_cycle_end,
              last_cycle_time,
              last_cycle_num_jobs,
              total_cycle_time,
              time_source,
              external_jobs,
              thread_safe_external_job_hook,
              job_queued_hook,
              event_added_hook,
              yield$0,
              yield_until_no_jobs_remain,
              check_invariants,
              max_num_jobs_per_priority_per_,
              record_backtraces,
              on_start_of_cycle,
              on_end_of_cycle]}
    function map$9
     (check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      run_every_cycle_end_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {var
       _F$_=caml_call1(on_end_of_cycle_fun,on_end_of_cycle$0),
       _Ga_=caml_call1(on_start_of_cycle_fun,on_start_of_cycle$0),
       _Gb_=caml_call1(record_backtraces_fun,record_backtraces$3),
       _Gc_=
        caml_call1
         (max_num_jobs_per_priority_per_,max_num_jobs_per_priority_per_$3),
       _Gd_=caml_call1(check_invariants_fun,check_invariants$3),
       _Ge_=
        caml_call1
         (yield_until_no_jobs_remain_fun,yield_until_no_jobs_remain$0),
       _Gf_=caml_call1(yield_fun,yield$1),
       _Gg_=caml_call1(event_added_hook_fun,event_added_hook$0),
       _Gh_=caml_call1(job_queued_hook_fun,job_queued_hook$0),
       _Gi_=
        caml_call1
         (thread_safe_external_job_hook_,thread_safe_external_job_hook$0),
       _Gj_=caml_call1(external_jobs_fun,external_jobs$0),
       _Gk_=caml_call1(time_source_fun,time_source$0),
       _Gl_=caml_call1(total_cycle_time_fun,total_cycle_time$0),
       _Gm_=caml_call1(last_cycle_num_jobs_fun,last_cycle_num_jobs$0),
       _Gn_=caml_call1(last_cycle_time_fun,last_cycle_time$0),
       _Go_=caml_call1(run_every_cycle_end_fun,run_every_cycle_end$0),
       _Gp_=caml_call1(run_every_cycle_start_fun,run_every_cycle_start$0),
       _Gq_=caml_call1(in_cycle_fun,in_cycle$0),
       _Gr_=caml_call1(cycle_start_fun,cycle_start$0),
       _Gs_=caml_call1(cycle_count_fun,cycle_count$0),
       _Gt_=caml_call1(uncaught_exn_fun,uncaught_exn),
       _Gu_=
        caml_call1(current_execution_context_fun,current_execution_context$0),
       _Gv_=caml_call1(main_execution_context_fun,main_execution_context$0),
       _Gw_=
        caml_call1(very_low_priority_workers_fun,very_low_priority_workers$0),
       _Gx_=caml_call1(low_priority_jobs_fun,low_priority_jobs$0),
       _Gy_=caml_call1(normal_priority_jobs_fun,normal_priority_jobs$0),
       _Gz_=caml_call1(job_pool_fun,job_pool$0);
      return [0,
              caml_call1(check_access_fun,check_access$0),
              _Gz_,
              _Gy_,
              _Gx_,
              _Gw_,
              _Gv_,
              _Gu_,
              _Gt_,
              _Gs_,
              _Gr_,
              _Gq_,
              _Gp_,
              _Go_,
              _Gn_,
              _Gm_,
              _Gl_,
              _Gk_,
              _Gj_,
              _Gi_,
              _Gh_,
              _Gg_,
              _Gf_,
              _Ge_,
              _Gd_,
              _Gc_,
              _Gb_,
              _Ga_,
              _F$_]}
    function iter$9
     (check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      run_every_cycle_end_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {caml_call1(check_access_fun,check_access$0);
      caml_call1(job_pool_fun,job_pool$0);
      caml_call1(normal_priority_jobs_fun,normal_priority_jobs$0);
      caml_call1(low_priority_jobs_fun,low_priority_jobs$0);
      caml_call1(very_low_priority_workers_fun,very_low_priority_workers$0);
      caml_call1(main_execution_context_fun,main_execution_context$0);
      caml_call1(current_execution_context_fun,current_execution_context$0);
      caml_call1(uncaught_exn_fun,uncaught_exn);
      caml_call1(cycle_count_fun,cycle_count$0);
      caml_call1(cycle_start_fun,cycle_start$0);
      caml_call1(in_cycle_fun,in_cycle$0);
      caml_call1(run_every_cycle_start_fun,run_every_cycle_start$0);
      caml_call1(run_every_cycle_end_fun,run_every_cycle_end$0);
      caml_call1(last_cycle_time_fun,last_cycle_time$0);
      caml_call1(last_cycle_num_jobs_fun,last_cycle_num_jobs$0);
      caml_call1(total_cycle_time_fun,total_cycle_time$0);
      caml_call1(time_source_fun,time_source$0);
      caml_call1(external_jobs_fun,external_jobs$0);
      caml_call1
       (thread_safe_external_job_hook_,thread_safe_external_job_hook$0);
      caml_call1(job_queued_hook_fun,job_queued_hook$0);
      caml_call1(event_added_hook_fun,event_added_hook$0);
      caml_call1(yield_fun,yield$1);
      caml_call1(yield_until_no_jobs_remain_fun,yield_until_no_jobs_remain$0);
      caml_call1(check_invariants_fun,check_invariants$3);
      caml_call1
       (max_num_jobs_per_priority_per_,max_num_jobs_per_priority_per_$3);
      caml_call1(record_backtraces_fun,record_backtraces$3);
      caml_call1(on_start_of_cycle_fun,on_start_of_cycle$0);
      return caml_call1(on_end_of_cycle_fun,on_end_of_cycle$0)}
    function fold$9
     (init,
      check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      run_every_cycle_end_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {return caml_call2
              (on_end_of_cycle_fun,
               caml_call2
                (on_start_of_cycle_fun,
                 caml_call2
                  (record_backtraces_fun,
                   caml_call2
                    (max_num_jobs_per_priority_per_,
                     caml_call2
                      (check_invariants_fun,
                       caml_call2
                        (yield_until_no_jobs_remain_fun,
                         caml_call2
                          (yield_fun,
                           caml_call2
                            (event_added_hook_fun,
                             caml_call2
                              (job_queued_hook_fun,
                               caml_call2
                                (thread_safe_external_job_hook_,
                                 caml_call2
                                  (external_jobs_fun,
                                   caml_call2
                                    (time_source_fun,
                                     caml_call2
                                      (total_cycle_time_fun,
                                       caml_call2
                                        (last_cycle_num_jobs_fun,
                                         caml_call2
                                          (last_cycle_time_fun,
                                           caml_call2
                                            (run_every_cycle_end_fun,
                                             caml_call2
                                              (run_every_cycle_start_fun,
                                               caml_call2
                                                (in_cycle_fun,
                                                 caml_call2
                                                  (cycle_start_fun,
                                                   caml_call2
                                                    (cycle_count_fun,
                                                     caml_call2
                                                      (uncaught_exn_fun,
                                                       caml_call2
                                                        (current_execution_context_fun,
                                                         caml_call2
                                                          (main_execution_context_fun,
                                                           caml_call2
                                                            (very_low_priority_workers_fun,
                                                             caml_call2
                                                              (low_priority_jobs_fun,
                                                               caml_call2
                                                                (normal_priority_jobs_fun,
                                                                 caml_call2
                                                                  (job_pool_fun,
                                                                   caml_call2(check_access_fun,init,check_access$0),
                                                                   job_pool$0),
                                                                 normal_priority_jobs$0),
                                                               low_priority_jobs$0),
                                                             very_low_priority_workers$0),
                                                           main_execution_context$0),
                                                         current_execution_context$0),
                                                       uncaught_exn),
                                                     cycle_count$0),
                                                   cycle_start$0),
                                                 in_cycle$0),
                                               run_every_cycle_start$0),
                                             run_every_cycle_end$0),
                                           last_cycle_time$0),
                                         last_cycle_num_jobs$0),
                                       total_cycle_time$0),
                                     time_source$0),
                                   external_jobs$0),
                                 thread_safe_external_job_hook$0),
                               job_queued_hook$0),
                             event_added_hook$0),
                           yield$1),
                         yield_until_no_jobs_remain$0),
                       check_invariants$3),
                     max_num_jobs_per_priority_per_$3),
                   record_backtraces$3),
                 on_start_of_cycle$0),
               on_end_of_cycle$0)}
    function map_poly$4(record)
     {var
       _FK_=[0,caml_call1(record[1],on_end_of_cycle$0),0],
       _FL_=[0,caml_call1(record[1],on_start_of_cycle$0),_FK_],
       _FM_=[0,caml_call1(record[1],record_backtraces$3),_FL_],
       _FN_=[0,caml_call1(record[1],max_num_jobs_per_priority_per_$3),_FM_],
       _FO_=[0,caml_call1(record[1],check_invariants$3),_FN_],
       _FP_=[0,caml_call1(record[1],yield_until_no_jobs_remain$0),_FO_],
       _FQ_=[0,caml_call1(record[1],yield$1),_FP_],
       _FR_=[0,caml_call1(record[1],event_added_hook$0),_FQ_],
       _FS_=[0,caml_call1(record[1],job_queued_hook$0),_FR_],
       _FT_=[0,caml_call1(record[1],thread_safe_external_job_hook$0),_FS_],
       _FU_=[0,caml_call1(record[1],external_jobs$0),_FT_],
       _FV_=[0,caml_call1(record[1],time_source$0),_FU_],
       _FW_=[0,caml_call1(record[1],total_cycle_time$0),_FV_],
       _FX_=[0,caml_call1(record[1],last_cycle_num_jobs$0),_FW_],
       _FY_=[0,caml_call1(record[1],last_cycle_time$0),_FX_],
       _FZ_=[0,caml_call1(record[1],run_every_cycle_end$0),_FY_],
       _F0_=[0,caml_call1(record[1],run_every_cycle_start$0),_FZ_],
       _F1_=[0,caml_call1(record[1],in_cycle$0),_F0_],
       _F2_=[0,caml_call1(record[1],cycle_start$0),_F1_],
       _F3_=[0,caml_call1(record[1],cycle_count$0),_F2_],
       _F4_=[0,caml_call1(record[1],uncaught_exn),_F3_],
       _F5_=[0,caml_call1(record[1],current_execution_context$0),_F4_],
       _F6_=[0,caml_call1(record[1],main_execution_context$0),_F5_],
       _F7_=[0,caml_call1(record[1],very_low_priority_workers$0),_F6_],
       _F8_=[0,caml_call1(record[1],low_priority_jobs$0),_F7_],
       _F9_=[0,caml_call1(record[1],normal_priority_jobs$0),_F8_],
       _F__=[0,caml_call1(record[1],job_pool$0),_F9_];
      return [0,caml_call1(record[1],check_access$0),_F__]}
    function for_all$9
     (check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      run_every_cycle_end_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {var
       _Fj_=caml_call1(check_access_fun,check_access$0),
       _Fk_=_Fj_?caml_call1(job_pool_fun,job_pool$0):_Fj_,
       _Fl_=
        _Fk_?caml_call1(normal_priority_jobs_fun,normal_priority_jobs$0):_Fk_,
       _Fm_=_Fl_?caml_call1(low_priority_jobs_fun,low_priority_jobs$0):_Fl_,
       _Fn_=
        _Fm_
         ?caml_call1
           (very_low_priority_workers_fun,very_low_priority_workers$0)
         :_Fm_,
       _Fo_=
        _Fn_
         ?caml_call1(main_execution_context_fun,main_execution_context$0)
         :_Fn_,
       _Fp_=
        _Fo_
         ?caml_call1
           (current_execution_context_fun,current_execution_context$0)
         :_Fo_,
       _Fq_=_Fp_?caml_call1(uncaught_exn_fun,uncaught_exn):_Fp_,
       _Fr_=_Fq_?caml_call1(cycle_count_fun,cycle_count$0):_Fq_,
       _Fs_=_Fr_?caml_call1(cycle_start_fun,cycle_start$0):_Fr_,
       _Ft_=_Fs_?caml_call1(in_cycle_fun,in_cycle$0):_Fs_,
       _Fu_=
        _Ft_
         ?caml_call1(run_every_cycle_start_fun,run_every_cycle_start$0)
         :_Ft_,
       _Fv_=
        _Fu_?caml_call1(run_every_cycle_end_fun,run_every_cycle_end$0):_Fu_,
       _Fw_=_Fv_?caml_call1(last_cycle_time_fun,last_cycle_time$0):_Fv_,
       _Fx_=
        _Fw_?caml_call1(last_cycle_num_jobs_fun,last_cycle_num_jobs$0):_Fw_,
       _Fy_=_Fx_?caml_call1(total_cycle_time_fun,total_cycle_time$0):_Fx_,
       _Fz_=_Fy_?caml_call1(time_source_fun,time_source$0):_Fy_,
       _FA_=_Fz_?caml_call1(external_jobs_fun,external_jobs$0):_Fz_,
       _FB_=
        _FA_
         ?caml_call1
           (thread_safe_external_job_hook_,thread_safe_external_job_hook$0)
         :_FA_,
       _FC_=_FB_?caml_call1(job_queued_hook_fun,job_queued_hook$0):_FB_,
       _FD_=_FC_?caml_call1(event_added_hook_fun,event_added_hook$0):_FC_,
       _FE_=_FD_?caml_call1(yield_fun,yield$1):_FD_,
       _FF_=
        _FE_
         ?caml_call1
           (yield_until_no_jobs_remain_fun,yield_until_no_jobs_remain$0)
         :_FE_,
       _FG_=_FF_?caml_call1(check_invariants_fun,check_invariants$3):_FF_,
       _FH_=
        _FG_
         ?caml_call1
           (max_num_jobs_per_priority_per_,max_num_jobs_per_priority_per_$3)
         :_FG_,
       _FI_=_FH_?caml_call1(record_backtraces_fun,record_backtraces$3):_FH_,
       _FJ_=_FI_?caml_call1(on_start_of_cycle_fun,on_start_of_cycle$0):_FI_;
      return _FJ_?caml_call1(on_end_of_cycle_fun,on_end_of_cycle$0):_FJ_}
    function exists$9
     (check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      run_every_cycle_end_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {var
       _Fi_=caml_call1(check_access_fun,check_access$0),
       _EU_=_Fi_ || caml_call1(job_pool_fun,job_pool$0),
       _EV_=
        _EU_
        ||
        caml_call1(normal_priority_jobs_fun,normal_priority_jobs$0),
       _EW_=_EV_ || caml_call1(low_priority_jobs_fun,low_priority_jobs$0),
       _EX_=
        _EW_
        ||
        caml_call1(very_low_priority_workers_fun,very_low_priority_workers$0),
       _EY_=
        _EX_
        ||
        caml_call1(main_execution_context_fun,main_execution_context$0),
       _EZ_=
        _EY_
        ||
        caml_call1(current_execution_context_fun,current_execution_context$0),
       _E0_=_EZ_ || caml_call1(uncaught_exn_fun,uncaught_exn),
       _E1_=_E0_ || caml_call1(cycle_count_fun,cycle_count$0),
       _E2_=_E1_ || caml_call1(cycle_start_fun,cycle_start$0),
       _E3_=_E2_ || caml_call1(in_cycle_fun,in_cycle$0),
       _E4_=
        _E3_
        ||
        caml_call1(run_every_cycle_start_fun,run_every_cycle_start$0),
       _E5_=_E4_ || caml_call1(run_every_cycle_end_fun,run_every_cycle_end$0),
       _E6_=_E5_ || caml_call1(last_cycle_time_fun,last_cycle_time$0),
       _E7_=_E6_ || caml_call1(last_cycle_num_jobs_fun,last_cycle_num_jobs$0),
       _E8_=_E7_ || caml_call1(total_cycle_time_fun,total_cycle_time$0),
       _E9_=_E8_ || caml_call1(time_source_fun,time_source$0),
       _E__=_E9_ || caml_call1(external_jobs_fun,external_jobs$0),
       _E$_=
        _E__
        ||
        caml_call1
         (thread_safe_external_job_hook_,thread_safe_external_job_hook$0),
       _Fa_=_E$_ || caml_call1(job_queued_hook_fun,job_queued_hook$0),
       _Fb_=_Fa_ || caml_call1(event_added_hook_fun,event_added_hook$0),
       _Fc_=_Fb_ || caml_call1(yield_fun,yield$1),
       _Fd_=
        _Fc_
        ||
        caml_call1
         (yield_until_no_jobs_remain_fun,yield_until_no_jobs_remain$0),
       _Fe_=_Fd_ || caml_call1(check_invariants_fun,check_invariants$3),
       _Ff_=
        _Fe_
        ||
        caml_call1
         (max_num_jobs_per_priority_per_,max_num_jobs_per_priority_per_$3),
       _Fg_=_Ff_ || caml_call1(record_backtraces_fun,record_backtraces$3),
       _Fh_=_Fg_ || caml_call1(on_start_of_cycle_fun,on_start_of_cycle$0);
      return _Fh_?_Fh_:caml_call1(on_end_of_cycle_fun,on_end_of_cycle$0)}
    function to_list$9
     (check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      run_every_cycle_end_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {var
       _Et_=[0,caml_call1(on_end_of_cycle_fun,on_end_of_cycle$0),0],
       _Eu_=[0,caml_call1(on_start_of_cycle_fun,on_start_of_cycle$0),_Et_],
       _Ev_=[0,caml_call1(record_backtraces_fun,record_backtraces$3),_Eu_],
       _Ew_=
        [0,
         caml_call1
          (max_num_jobs_per_priority_per_,max_num_jobs_per_priority_per_$3),
         _Ev_],
       _Ex_=[0,caml_call1(check_invariants_fun,check_invariants$3),_Ew_],
       _Ey_=
        [0,
         caml_call1
          (yield_until_no_jobs_remain_fun,yield_until_no_jobs_remain$0),
         _Ex_],
       _Ez_=[0,caml_call1(yield_fun,yield$1),_Ey_],
       _EA_=[0,caml_call1(event_added_hook_fun,event_added_hook$0),_Ez_],
       _EB_=[0,caml_call1(job_queued_hook_fun,job_queued_hook$0),_EA_],
       _EC_=
        [0,
         caml_call1
          (thread_safe_external_job_hook_,thread_safe_external_job_hook$0),
         _EB_],
       _ED_=[0,caml_call1(external_jobs_fun,external_jobs$0),_EC_],
       _EE_=[0,caml_call1(time_source_fun,time_source$0),_ED_],
       _EF_=[0,caml_call1(total_cycle_time_fun,total_cycle_time$0),_EE_],
       _EG_=[0,caml_call1(last_cycle_num_jobs_fun,last_cycle_num_jobs$0),_EF_],
       _EH_=[0,caml_call1(last_cycle_time_fun,last_cycle_time$0),_EG_],
       _EI_=[0,caml_call1(run_every_cycle_end_fun,run_every_cycle_end$0),_EH_],
       _EJ_=
        [0,caml_call1(run_every_cycle_start_fun,run_every_cycle_start$0),_EI_],
       _EK_=[0,caml_call1(in_cycle_fun,in_cycle$0),_EJ_],
       _EL_=[0,caml_call1(cycle_start_fun,cycle_start$0),_EK_],
       _EM_=[0,caml_call1(cycle_count_fun,cycle_count$0),_EL_],
       _EN_=[0,caml_call1(uncaught_exn_fun,uncaught_exn),_EM_],
       _EO_=
        [0,
         caml_call1(current_execution_context_fun,current_execution_context$0),
         _EN_],
       _EP_=
        [0,
         caml_call1(main_execution_context_fun,main_execution_context$0),
         _EO_],
       _EQ_=
        [0,
         caml_call1(very_low_priority_workers_fun,very_low_priority_workers$0),
         _EP_],
       _ER_=[0,caml_call1(low_priority_jobs_fun,low_priority_jobs$0),_EQ_],
       _ES_=
        [0,caml_call1(normal_priority_jobs_fun,normal_priority_jobs$0),_ER_],
       _ET_=[0,caml_call1(job_pool_fun,job_pool$0),_ES_];
      return [0,caml_call1(check_access_fun,check_access$0),_ET_]}
    function iter$10
     (record,
      check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      run_every_cycle_end_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {caml_call3(check_access_fun,check_access$0,record,record[1]);
      caml_call3(job_pool_fun,job_pool$0,record,record[2]);
      caml_call3
       (normal_priority_jobs_fun,normal_priority_jobs$0,record,record[3]);
      caml_call3(low_priority_jobs_fun,low_priority_jobs$0,record,record[4]);
      caml_call3
       (very_low_priority_workers_fun,
        very_low_priority_workers$0,
        record,
        record[5]);
      caml_call3
       (main_execution_context_fun,main_execution_context$0,record,record[6]);
      caml_call3
       (current_execution_context_fun,
        current_execution_context$0,
        record,
        record[7]);
      caml_call3(uncaught_exn_fun,uncaught_exn,record,record[8]);
      caml_call3(cycle_count_fun,cycle_count$0,record,record[9]);
      caml_call3(cycle_start_fun,cycle_start$0,record,record[10]);
      caml_call3(in_cycle_fun,in_cycle$0,record,record[11]);
      caml_call3
       (run_every_cycle_start_fun,run_every_cycle_start$0,record,record[12]);
      caml_call3
       (run_every_cycle_end_fun,run_every_cycle_end$0,record,record[13]);
      caml_call3(last_cycle_time_fun,last_cycle_time$0,record,record[14]);
      caml_call3
       (last_cycle_num_jobs_fun,last_cycle_num_jobs$0,record,record[15]);
      caml_call3(total_cycle_time_fun,total_cycle_time$0,record,record[16]);
      caml_call3(time_source_fun,time_source$0,record,record[17]);
      caml_call3(external_jobs_fun,external_jobs$0,record,record[18]);
      caml_call3
       (thread_safe_external_job_hook_,
        thread_safe_external_job_hook$0,
        record,
        record[19]);
      caml_call3(job_queued_hook_fun,job_queued_hook$0,record,record[20]);
      caml_call3(event_added_hook_fun,event_added_hook$0,record,record[21]);
      caml_call3(yield_fun,yield$1,record,record[22]);
      caml_call3
       (yield_until_no_jobs_remain_fun,
        yield_until_no_jobs_remain$0,
        record,
        record[23]);
      caml_call3(check_invariants_fun,check_invariants$3,record,record[24]);
      caml_call3
       (max_num_jobs_per_priority_per_,
        max_num_jobs_per_priority_per_$3,
        record,
        record[25]);
      caml_call3(record_backtraces_fun,record_backtraces$3,record,record[26]);
      caml_call3(on_start_of_cycle_fun,on_start_of_cycle$0,record,record[27]);
      return caml_call3
              (on_end_of_cycle_fun,on_end_of_cycle$0,record,record[28])}
    function fold$10
     (record,
      init,
      check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      run_every_cycle_end_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {var
       _D4_=record[28],
       _D5_=record[27],
       _D6_=record[26],
       _D7_=record[25],
       _D8_=record[24],
       _D9_=record[23],
       _D__=record[22],
       _D$_=record[21],
       _Ea_=record[20],
       _Eb_=record[19],
       _Ec_=record[18],
       _Ed_=record[17],
       _Ee_=record[16],
       _Ef_=record[15],
       _Eg_=record[14],
       _Eh_=record[13],
       _Ei_=record[12],
       _Ej_=record[11],
       _Ek_=record[10],
       _El_=record[9],
       _Em_=record[8],
       _En_=record[7],
       _Eo_=record[6],
       _Ep_=record[5],
       _Eq_=record[4],
       _Er_=record[3],
       _Es_=record[2];
      return caml_call4
              (on_end_of_cycle_fun,
               caml_call4
                (on_start_of_cycle_fun,
                 caml_call4
                  (record_backtraces_fun,
                   caml_call4
                    (max_num_jobs_per_priority_per_,
                     caml_call4
                      (check_invariants_fun,
                       caml_call4
                        (yield_until_no_jobs_remain_fun,
                         caml_call4
                          (yield_fun,
                           caml_call4
                            (event_added_hook_fun,
                             caml_call4
                              (job_queued_hook_fun,
                               caml_call4
                                (thread_safe_external_job_hook_,
                                 caml_call4
                                  (external_jobs_fun,
                                   caml_call4
                                    (time_source_fun,
                                     caml_call4
                                      (total_cycle_time_fun,
                                       caml_call4
                                        (last_cycle_num_jobs_fun,
                                         caml_call4
                                          (last_cycle_time_fun,
                                           caml_call4
                                            (run_every_cycle_end_fun,
                                             caml_call4
                                              (run_every_cycle_start_fun,
                                               caml_call4
                                                (in_cycle_fun,
                                                 caml_call4
                                                  (cycle_start_fun,
                                                   caml_call4
                                                    (cycle_count_fun,
                                                     caml_call4
                                                      (uncaught_exn_fun,
                                                       caml_call4
                                                        (current_execution_context_fun,
                                                         caml_call4
                                                          (main_execution_context_fun,
                                                           caml_call4
                                                            (very_low_priority_workers_fun,
                                                             caml_call4
                                                              (low_priority_jobs_fun,
                                                               caml_call4
                                                                (normal_priority_jobs_fun,
                                                                 caml_call4
                                                                  (job_pool_fun,
                                                                   caml_call4
                                                                    (check_access_fun,init,check_access$0,record,record[1]),
                                                                   job_pool$0,
                                                                   record,
                                                                   _Es_),
                                                                 normal_priority_jobs$0,
                                                                 record,
                                                                 _Er_),
                                                               low_priority_jobs$0,
                                                               record,
                                                               _Eq_),
                                                             very_low_priority_workers$0,
                                                             record,
                                                             _Ep_),
                                                           main_execution_context$0,
                                                           record,
                                                           _Eo_),
                                                         current_execution_context$0,
                                                         record,
                                                         _En_),
                                                       uncaught_exn,
                                                       record,
                                                       _Em_),
                                                     cycle_count$0,
                                                     record,
                                                     _El_),
                                                   cycle_start$0,
                                                   record,
                                                   _Ek_),
                                                 in_cycle$0,
                                                 record,
                                                 _Ej_),
                                               run_every_cycle_start$0,
                                               record,
                                               _Ei_),
                                             run_every_cycle_end$0,
                                             record,
                                             _Eh_),
                                           last_cycle_time$0,
                                           record,
                                           _Eg_),
                                         last_cycle_num_jobs$0,
                                         record,
                                         _Ef_),
                                       total_cycle_time$0,
                                       record,
                                       _Ee_),
                                     time_source$0,
                                     record,
                                     _Ed_),
                                   external_jobs$0,
                                   record,
                                   _Ec_),
                                 thread_safe_external_job_hook$0,
                                 record,
                                 _Eb_),
                               job_queued_hook$0,
                               record,
                               _Ea_),
                             event_added_hook$0,
                             record,
                             _D$_),
                           yield$1,
                           record,
                           _D__),
                         yield_until_no_jobs_remain$0,
                         record,
                         _D9_),
                       check_invariants$3,
                       record,
                       _D8_),
                     max_num_jobs_per_priority_per_$3,
                     record,
                     _D7_),
                   record_backtraces$3,
                   record,
                   _D6_),
                 on_start_of_cycle$0,
                 record,
                 _D5_),
               on_end_of_cycle$0,
               record,
               _D4_)}
    function for_all$10
     (record,
      check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      run_every_cycle_end_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {var
       _DD_=caml_call3(check_access_fun,check_access$0,record,record[1]),
       _DE_=_DD_?caml_call3(job_pool_fun,job_pool$0,record,record[2]):_DD_,
       _DF_=
        _DE_
         ?caml_call3
           (normal_priority_jobs_fun,normal_priority_jobs$0,record,record[3])
         :_DE_,
       _DG_=
        _DF_
         ?caml_call3
           (low_priority_jobs_fun,low_priority_jobs$0,record,record[4])
         :_DF_,
       _DH_=
        _DG_
         ?caml_call3
           (very_low_priority_workers_fun,
            very_low_priority_workers$0,
            record,
            record[5])
         :_DG_,
       _DI_=
        _DH_
         ?caml_call3
           (main_execution_context_fun,
            main_execution_context$0,
            record,
            record[6])
         :_DH_,
       _DJ_=
        _DI_
         ?caml_call3
           (current_execution_context_fun,
            current_execution_context$0,
            record,
            record[7])
         :_DI_,
       _DK_=
        _DJ_?caml_call3(uncaught_exn_fun,uncaught_exn,record,record[8]):_DJ_,
       _DL_=
        _DK_?caml_call3(cycle_count_fun,cycle_count$0,record,record[9]):_DK_,
       _DM_=
        _DL_?caml_call3(cycle_start_fun,cycle_start$0,record,record[10]):_DL_,
       _DN_=_DM_?caml_call3(in_cycle_fun,in_cycle$0,record,record[11]):_DM_,
       _DO_=
        _DN_
         ?caml_call3
           (run_every_cycle_start_fun,
            run_every_cycle_start$0,
            record,
            record[12])
         :_DN_,
       _DP_=
        _DO_
         ?caml_call3
           (run_every_cycle_end_fun,run_every_cycle_end$0,record,record[13])
         :_DO_,
       _DQ_=
        _DP_
         ?caml_call3(last_cycle_time_fun,last_cycle_time$0,record,record[14])
         :_DP_,
       _DR_=
        _DQ_
         ?caml_call3
           (last_cycle_num_jobs_fun,last_cycle_num_jobs$0,record,record[15])
         :_DQ_,
       _DS_=
        _DR_
         ?caml_call3
           (total_cycle_time_fun,total_cycle_time$0,record,record[16])
         :_DR_,
       _DT_=
        _DS_?caml_call3(time_source_fun,time_source$0,record,record[17]):_DS_,
       _DU_=
        _DT_
         ?caml_call3(external_jobs_fun,external_jobs$0,record,record[18])
         :_DT_,
       _DV_=
        _DU_
         ?caml_call3
           (thread_safe_external_job_hook_,
            thread_safe_external_job_hook$0,
            record,
            record[19])
         :_DU_,
       _DW_=
        _DV_
         ?caml_call3(job_queued_hook_fun,job_queued_hook$0,record,record[20])
         :_DV_,
       _DX_=
        _DW_
         ?caml_call3
           (event_added_hook_fun,event_added_hook$0,record,record[21])
         :_DW_,
       _DY_=_DX_?caml_call3(yield_fun,yield$1,record,record[22]):_DX_,
       _DZ_=
        _DY_
         ?caml_call3
           (yield_until_no_jobs_remain_fun,
            yield_until_no_jobs_remain$0,
            record,
            record[23])
         :_DY_,
       _D0_=
        _DZ_
         ?caml_call3
           (check_invariants_fun,check_invariants$3,record,record[24])
         :_DZ_,
       _D1_=
        _D0_
         ?caml_call3
           (max_num_jobs_per_priority_per_,
            max_num_jobs_per_priority_per_$3,
            record,
            record[25])
         :_D0_,
       _D2_=
        _D1_
         ?caml_call3
           (record_backtraces_fun,record_backtraces$3,record,record[26])
         :_D1_,
       _D3_=
        _D2_
         ?caml_call3
           (on_start_of_cycle_fun,on_start_of_cycle$0,record,record[27])
         :_D2_;
      return _D3_
              ?caml_call3
                (on_end_of_cycle_fun,on_end_of_cycle$0,record,record[28])
              :_D3_}
    function exists$10
     (record,
      check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      run_every_cycle_end_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {var
       _DC_=caml_call3(check_access_fun,check_access$0,record,record[1]),
       _Dc_=_DC_ || caml_call3(job_pool_fun,job_pool$0,record,record[2]),
       _Dd_=
        _Dc_
        ||
        caml_call3
         (normal_priority_jobs_fun,normal_priority_jobs$0,record,record[3]),
       _De_=
        _Dd_
        ||
        caml_call3(low_priority_jobs_fun,low_priority_jobs$0,record,record[4]),
       _Df_=
        _De_
        ||
        caml_call3
         (very_low_priority_workers_fun,
          very_low_priority_workers$0,
          record,
          record[5]),
       _Dg_=
        _Df_
        ||
        caml_call3
         (main_execution_context_fun,
          main_execution_context$0,
          record,
          record[6]),
       _Dh_=
        _Dg_
        ||
        caml_call3
         (current_execution_context_fun,
          current_execution_context$0,
          record,
          record[7]),
       _Di_=_Dh_ || caml_call3(uncaught_exn_fun,uncaught_exn,record,record[8]),
       _Dj_=_Di_ || caml_call3(cycle_count_fun,cycle_count$0,record,record[9]),
       _Dk_=
        _Dj_
        ||
        caml_call3(cycle_start_fun,cycle_start$0,record,record[10]),
       _Dl_=_Dk_ || caml_call3(in_cycle_fun,in_cycle$0,record,record[11]),
       _Dm_=
        _Dl_
        ||
        caml_call3
         (run_every_cycle_start_fun,run_every_cycle_start$0,record,record[12]),
       _Dn_=
        _Dm_
        ||
        caml_call3
         (run_every_cycle_end_fun,run_every_cycle_end$0,record,record[13]),
       _Do_=
        _Dn_
        ||
        caml_call3(last_cycle_time_fun,last_cycle_time$0,record,record[14]),
       _Dp_=
        _Do_
        ||
        caml_call3
         (last_cycle_num_jobs_fun,last_cycle_num_jobs$0,record,record[15]),
       _Dq_=
        _Dp_
        ||
        caml_call3(total_cycle_time_fun,total_cycle_time$0,record,record[16]),
       _Dr_=
        _Dq_
        ||
        caml_call3(time_source_fun,time_source$0,record,record[17]),
       _Ds_=
        _Dr_
        ||
        caml_call3(external_jobs_fun,external_jobs$0,record,record[18]),
       _Dt_=
        _Ds_
        ||
        caml_call3
         (thread_safe_external_job_hook_,
          thread_safe_external_job_hook$0,
          record,
          record[19]),
       _Du_=
        _Dt_
        ||
        caml_call3(job_queued_hook_fun,job_queued_hook$0,record,record[20]),
       _Dv_=
        _Du_
        ||
        caml_call3(event_added_hook_fun,event_added_hook$0,record,record[21]),
       _Dw_=_Dv_ || caml_call3(yield_fun,yield$1,record,record[22]),
       _Dx_=
        _Dw_
        ||
        caml_call3
         (yield_until_no_jobs_remain_fun,
          yield_until_no_jobs_remain$0,
          record,
          record[23]),
       _Dy_=
        _Dx_
        ||
        caml_call3(check_invariants_fun,check_invariants$3,record,record[24]),
       _Dz_=
        _Dy_
        ||
        caml_call3
         (max_num_jobs_per_priority_per_,
          max_num_jobs_per_priority_per_$3,
          record,
          record[25]),
       _DA_=
        _Dz_
        ||
        caml_call3
         (record_backtraces_fun,record_backtraces$3,record,record[26]),
       _DB_=
        _DA_
        ||
        caml_call3
         (on_start_of_cycle_fun,on_start_of_cycle$0,record,record[27]);
      return _DB_
              ?_DB_
              :caml_call3
                (on_end_of_cycle_fun,on_end_of_cycle$0,record,record[28])}
    function to_list$10
     (record,
      check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      run_every_cycle_end_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {var
       _CN_=
        [0,
         caml_call3(on_end_of_cycle_fun,on_end_of_cycle$0,record,record[28]),
         0],
       _CO_=
        [0,
         caml_call3
          (on_start_of_cycle_fun,on_start_of_cycle$0,record,record[27]),
         _CN_],
       _CP_=
        [0,
         caml_call3
          (record_backtraces_fun,record_backtraces$3,record,record[26]),
         _CO_],
       _CQ_=
        [0,
         caml_call3
          (max_num_jobs_per_priority_per_,
           max_num_jobs_per_priority_per_$3,
           record,
           record[25]),
         _CP_],
       _CR_=
        [0,
         caml_call3(check_invariants_fun,check_invariants$3,record,record[24]),
         _CQ_],
       _CS_=
        [0,
         caml_call3
          (yield_until_no_jobs_remain_fun,
           yield_until_no_jobs_remain$0,
           record,
           record[23]),
         _CR_],
       _CT_=[0,caml_call3(yield_fun,yield$1,record,record[22]),_CS_],
       _CU_=
        [0,
         caml_call3(event_added_hook_fun,event_added_hook$0,record,record[21]),
         _CT_],
       _CV_=
        [0,
         caml_call3(job_queued_hook_fun,job_queued_hook$0,record,record[20]),
         _CU_],
       _CW_=
        [0,
         caml_call3
          (thread_safe_external_job_hook_,
           thread_safe_external_job_hook$0,
           record,
           record[19]),
         _CV_],
       _CX_=
        [0,
         caml_call3(external_jobs_fun,external_jobs$0,record,record[18]),
         _CW_],
       _CY_=
        [0,caml_call3(time_source_fun,time_source$0,record,record[17]),_CX_],
       _CZ_=
        [0,
         caml_call3(total_cycle_time_fun,total_cycle_time$0,record,record[16]),
         _CY_],
       _C0_=
        [0,
         caml_call3
          (last_cycle_num_jobs_fun,last_cycle_num_jobs$0,record,record[15]),
         _CZ_],
       _C1_=
        [0,
         caml_call3(last_cycle_time_fun,last_cycle_time$0,record,record[14]),
         _C0_],
       _C2_=
        [0,
         caml_call3
          (run_every_cycle_end_fun,run_every_cycle_end$0,record,record[13]),
         _C1_],
       _C3_=
        [0,
         caml_call3
          (run_every_cycle_start_fun,
           run_every_cycle_start$0,
           record,
           record[12]),
         _C2_],
       _C4_=[0,caml_call3(in_cycle_fun,in_cycle$0,record,record[11]),_C3_],
       _C5_=
        [0,caml_call3(cycle_start_fun,cycle_start$0,record,record[10]),_C4_],
       _C6_=
        [0,caml_call3(cycle_count_fun,cycle_count$0,record,record[9]),_C5_],
       _C7_=
        [0,caml_call3(uncaught_exn_fun,uncaught_exn,record,record[8]),_C6_],
       _C8_=
        [0,
         caml_call3
          (current_execution_context_fun,
           current_execution_context$0,
           record,
           record[7]),
         _C7_],
       _C9_=
        [0,
         caml_call3
          (main_execution_context_fun,
           main_execution_context$0,
           record,
           record[6]),
         _C8_],
       _C__=
        [0,
         caml_call3
          (very_low_priority_workers_fun,
           very_low_priority_workers$0,
           record,
           record[5]),
         _C9_],
       _C$_=
        [0,
         caml_call3
          (low_priority_jobs_fun,low_priority_jobs$0,record,record[4]),
         _C__],
       _Da_=
        [0,
         caml_call3
          (normal_priority_jobs_fun,normal_priority_jobs$0,record,record[3]),
         _C$_],
       _Db_=[0,caml_call3(job_pool_fun,job_pool$0,record,record[2]),_Da_];
      return [0,
              caml_call3(check_access_fun,check_access$0,record,record[1]),
              _Db_]}
    function map$10
     (record,
      check_access_fun,
      job_pool_fun,
      normal_priority_jobs_fun,
      low_priority_jobs_fun,
      very_low_priority_workers_fun,
      main_execution_context_fun,
      current_execution_context_fun,
      uncaught_exn_fun,
      cycle_count_fun,
      cycle_start_fun,
      in_cycle_fun,
      run_every_cycle_start_fun,
      run_every_cycle_end_fun,
      last_cycle_time_fun,
      last_cycle_num_jobs_fun,
      total_cycle_time_fun,
      time_source_fun,
      external_jobs_fun,
      thread_safe_external_job_hook_,
      job_queued_hook_fun,
      event_added_hook_fun,
      yield_fun,
      yield_until_no_jobs_remain_fun,
      check_invariants_fun,
      max_num_jobs_per_priority_per_,
      record_backtraces_fun,
      on_start_of_cycle_fun,
      on_end_of_cycle_fun)
     {var
       _Cm_=
        caml_call3(on_end_of_cycle_fun,on_end_of_cycle$0,record,record[28]),
       _Cn_=
        caml_call3
         (on_start_of_cycle_fun,on_start_of_cycle$0,record,record[27]),
       _Co_=
        caml_call3
         (record_backtraces_fun,record_backtraces$3,record,record[26]),
       _Cp_=
        caml_call3
         (max_num_jobs_per_priority_per_,
          max_num_jobs_per_priority_per_$3,
          record,
          record[25]),
       _Cq_=
        caml_call3(check_invariants_fun,check_invariants$3,record,record[24]),
       _Cr_=
        caml_call3
         (yield_until_no_jobs_remain_fun,
          yield_until_no_jobs_remain$0,
          record,
          record[23]),
       _Cs_=caml_call3(yield_fun,yield$1,record,record[22]),
       _Ct_=
        caml_call3(event_added_hook_fun,event_added_hook$0,record,record[21]),
       _Cu_=
        caml_call3(job_queued_hook_fun,job_queued_hook$0,record,record[20]),
       _Cv_=
        caml_call3
         (thread_safe_external_job_hook_,
          thread_safe_external_job_hook$0,
          record,
          record[19]),
       _Cw_=caml_call3(external_jobs_fun,external_jobs$0,record,record[18]),
       _Cx_=caml_call3(time_source_fun,time_source$0,record,record[17]),
       _Cy_=
        caml_call3(total_cycle_time_fun,total_cycle_time$0,record,record[16]),
       _Cz_=
        caml_call3
         (last_cycle_num_jobs_fun,last_cycle_num_jobs$0,record,record[15]),
       _CA_=
        caml_call3(last_cycle_time_fun,last_cycle_time$0,record,record[14]),
       _CB_=
        caml_call3
         (run_every_cycle_end_fun,run_every_cycle_end$0,record,record[13]),
       _CC_=
        caml_call3
         (run_every_cycle_start_fun,run_every_cycle_start$0,record,record[12]),
       _CD_=caml_call3(in_cycle_fun,in_cycle$0,record,record[11]),
       _CE_=caml_call3(cycle_start_fun,cycle_start$0,record,record[10]),
       _CF_=caml_call3(cycle_count_fun,cycle_count$0,record,record[9]),
       _CG_=caml_call3(uncaught_exn_fun,uncaught_exn,record,record[8]),
       _CH_=
        caml_call3
         (current_execution_context_fun,
          current_execution_context$0,
          record,
          record[7]),
       _CI_=
        caml_call3
         (main_execution_context_fun,
          main_execution_context$0,
          record,
          record[6]),
       _CJ_=
        caml_call3
         (very_low_priority_workers_fun,
          very_low_priority_workers$0,
          record,
          record[5]),
       _CK_=
        caml_call3(low_priority_jobs_fun,low_priority_jobs$0,record,record[4]),
       _CL_=
        caml_call3
         (normal_priority_jobs_fun,normal_priority_jobs$0,record,record[3]),
       _CM_=caml_call3(job_pool_fun,job_pool$0,record,record[2]);
      return [0,
              caml_call3(check_access_fun,check_access$0,record,record[1]),
              _CM_,
              _CL_,
              _CK_,
              _CJ_,
              _CI_,
              _CH_,
              _CG_,
              _CF_,
              _CE_,
              _CD_,
              _CC_,
              _CB_,
              _CA_,
              _Cz_,
              _Cy_,
              _Cx_,
              _Cw_,
              _Cv_,
              _Cu_,
              _Ct_,
              _Cs_,
              _Cr_,
              _Cq_,
              _Cp_,
              _Co_,
              _Cn_,
              _Cm_]}
    function set_all_mutable_fields$4
     (record,
      check_access,
      job_pool,
      main_execution_context,
      current_execution_context,
      uncaught_exn,
      cycle_count,
      cycle_start,
      in_cycle,
      run_every_cycle_start,
      run_every_cycle_end,
      last_cycle_time,
      last_cycle_num_jobs,
      total_cycle_time,
      time_source,
      thread_safe_external_job_hook,
      job_queued_hook,
      event_added_hook,
      yield$0,
      yield_until_no_jobs_remain,
      check_invariants,
      max_num_jobs_per_priority_per_,
      record_backtraces,
      on_start_of_cycle,
      on_end_of_cycle)
     {var record$0=caml_call1(Base_Field[1][1],record);
      record$0[1] = check_access;
      record$0[2] = job_pool;
      record$0[6] = main_execution_context;
      record$0[7] = current_execution_context;
      record$0[8] = uncaught_exn;
      record$0[9] = cycle_count;
      record$0[10] = cycle_start;
      record$0[11] = in_cycle;
      record$0[12] = run_every_cycle_start;
      record$0[13] = run_every_cycle_end;
      record$0[14] = last_cycle_time;
      record$0[15] = last_cycle_num_jobs;
      record$0[16] = total_cycle_time;
      record$0[17] = time_source;
      record$0[19] = thread_safe_external_job_hook;
      record$0[20] = job_queued_hook;
      record$0[21] = event_added_hook;
      record$0[22] = yield$0;
      record$0[23] = yield_until_no_jobs_remain;
      record$0[24] = check_invariants;
      record$0[25] = max_num_jobs_per_priority_per_;
      record$0[26] = record_backtraces;
      record$0[27] = on_start_of_cycle;
      record$0[28] = on_end_of_cycle;
      return 0}
    var
     Direct$4=
      [0,
       iter$10,
       fold$10,
       for_all$10,
       exists$10,
       to_list$10,
       map$10,
       set_all_mutable_fields$4],
     Fields$4=
      [0,
       names$4,
       on_end_of_cycle$0,
       on_start_of_cycle$0,
       record_backtraces$3,
       max_num_jobs_per_priority_per_$3,
       check_invariants$3,
       yield_until_no_jobs_remain$0,
       yield$1,
       event_added_hook$0,
       job_queued_hook$0,
       thread_safe_external_job_hook$0,
       external_jobs$0,
       time_source$0,
       total_cycle_time$0,
       last_cycle_num_jobs$0,
       last_cycle_time$0,
       run_every_cycle_end$0,
       run_every_cycle_start$0,
       in_cycle$0,
       cycle_start$0,
       cycle_count$0,
       uncaught_exn,
       current_execution_context$0,
       main_execution_context$0,
       very_low_priority_workers$0,
       low_priority_jobs$0,
       normal_priority_jobs$0,
       job_pool$0,
       check_access$0,
       make_creator$4,
       create$9,
       map$9,
       iter$9,
       fold$9,
       map_poly$4,
       for_all$9,
       exists$9,
       to_list$9,
       Direct$4];
    function sexp_of_t$33(param)
     {var
       v_check_access=param[1],
       v_job_pool=param[2],
       v_very_low_priority_workers=param[5],
       v_low_priority_jobs=param[4],
       v_normal_priority_jobs=param[3],
       v_main_execution_context=param[6],
       v_current_execution_context=param[7],
       v_uncaught_exn=param[8],
       v_cycle_count=param[9],
       v_cycle_start=param[10],
       v_in_cycle=param[11],
       v_run_every_cycle_start=param[12],
       v_run_every_cycle_end=param[13],
       v_last_cycle_time=param[14],
       v_last_cycle_num_jobs=param[15],
       v_total_cycle_time=param[16],
       v_time_source=param[17],
       v_external_jobs=param[18],
       v_job_queued_hook=param[20],
       v_event_added_hook=param[21],
       v_yield=param[22],
       v_yield_until_no_jobs_remain=param[23],
       v_check_invariants=param[24],
       v_max_num_jobs_per_priority_pe=param[25],
       v_record_backtraces=param[26],
       bnds=0;
      function _B2_(_Cl_){return 0}
      var
       arg=caml_call1(Sexplib0_Sexp_conv[24],_B2_),
       bnds$0=[0,[1,[0,_g6_,[0,arg,0]]],bnds];
      function _B3_(_Ck_){return 0}
      var
       arg$0=caml_call1(Sexplib0_Sexp_conv[24],_B3_),
       bnds$1=[0,[1,[0,_g7_,[0,arg$0,0]]],bnds$0],
       arg$1=caml_call1(Core_kernel[289],v_record_backtraces),
       bnds$2=[0,[1,[0,_g8_,[0,arg$1,0]]],bnds$1],
       arg$2=
        caml_call1
         (Max_num_jobs_per_priority_per_[2],v_max_num_jobs_per_priority_pe),
       bnds$3=[0,[1,[0,_g9_,[0,arg$2,0]]],bnds$2],
       arg$3=caml_call1(Core_kernel[289],v_check_invariants),
       bnds$4=[0,[1,[0,_g__,[0,arg$3,0]]],bnds$3],
       arg$4=caml_call1(Sexplib0_Sexp_conv[23],v_yield_until_no_jobs_remain),
       bnds$5=[0,[1,[0,_g$_,[0,arg$4,0]]],bnds$4],
       arg$5=caml_call1(Sexplib0_Sexp_conv[23],v_yield),
       bnds$6=[0,[1,[0,_ha_,[0,arg$5,0]]],bnds$5];
      function _B4_(f)
       {function _Ci_(_Cj_){return 0}
        return caml_call1(Sexplib0_Sexp_conv[24],_Ci_)}
      var
       arg$6=caml_call2(Core_kernel[438],_B4_,v_event_added_hook),
       bnds$7=[0,[1,[0,_hb_,[0,arg$6,0]]],bnds$6];
      function _B5_(f)
       {function _Cg_(_Ch_){return 0}
        return caml_call1(Sexplib0_Sexp_conv[24],_Cg_)}
      var
       arg$7=caml_call2(Core_kernel[438],_B5_,v_job_queued_hook),
       bnds$8=[0,[1,[0,_hc_,[0,arg$7,0]]],bnds$7];
      function _B6_(_Cf_){return 0}
      var
       arg$8=caml_call1(Sexplib0_Sexp_conv[24],_B6_),
       bnds$9=[0,[1,[0,_hd_,[0,arg$8,0]]],bnds$8],
       arg$9=caml_call2(Thread_safe_queue[1],sexp_of_t$15,v_external_jobs),
       bnds$10=[0,[1,[0,_he_,[0,arg$9,0]]],bnds$9],
       arg$10=caml_call2(include$11[17],Core_kernel[187],v_time_source),
       bnds$11=[0,[1,[0,_hf_,[0,arg$10,0]]],bnds$10],
       arg$11=caml_call1(_a_[10],v_total_cycle_time),
       bnds$12=[0,[1,[0,_hg_,[0,arg$11,0]]],bnds$11],
       arg$12=caml_call1(Core_kernel[340],v_last_cycle_num_jobs),
       bnds$13=[0,[1,[0,_hh_,[0,arg$12,0]]],bnds$12],
       arg$13=caml_call1(_a_[10],v_last_cycle_time),
       bnds$14=[0,[1,[0,_hi_,[0,arg$13,0]]],bnds$13];
      function _B7_(f)
       {function _Cd_(_Ce_){return 0}
        return caml_call1(Sexplib0_Sexp_conv[24],_Cd_)}
      var
       arg$14=caml_call2(Core_kernel[405],_B7_,v_run_every_cycle_end),
       bnds$15=[0,[1,[0,_hj_,[0,arg$14,0]]],bnds$14];
      function _B8_(f)
       {function _Cb_(_Cc_){return 0}
        return caml_call1(Sexplib0_Sexp_conv[24],_Cb_)}
      var
       arg$15=caml_call2(Core_kernel[405],_B8_,v_run_every_cycle_start),
       bnds$16=[0,[1,[0,_hk_,[0,arg$15,0]]],bnds$15],
       arg$16=caml_call1(Core_kernel[289],v_in_cycle),
       bnds$17=[0,[1,[0,_hl_,[0,arg$16,0]]],bnds$16],
       arg$17=caml_call1(_aI_,v_cycle_start),
       bnds$18=[0,[1,[0,_hm_,[0,arg$17,0]]],bnds$17],
       arg$18=caml_call1(Core_kernel[340],v_cycle_count),
       bnds$19=[0,[1,[0,_hn_,[0,arg$18,0]]],bnds$18];
      function _B9_(param)
       {var
         v1=param[2],
         v0=param[1],
         v0$0=caml_call1(Base_Exn[1],v0),
         v1$0=caml_call1(Core_kernel_Sexp[88],v1);
        return [1,[0,v0$0,[0,v1$0,0]]]}
      var
       arg$19=caml_call2(Core_kernel[438],_B9_,v_uncaught_exn),
       bnds$20=[0,[1,[0,_ho_,[0,arg$19,0]]],bnds$19],
       arg$20=sexp_of_t$14(v_current_execution_context),
       bnds$21=[0,[1,[0,_hp_,[0,arg$20,0]]],bnds$20],
       arg$21=sexp_of_t$14(v_main_execution_context),
       bnds$22=[0,[1,[0,_hq_,[0,arg$21,0]]],bnds$21],
       arg$22=
        caml_call2
         (Core_kernel_Deque[10],
          Very_low_priority_worker$0[5],
          v_very_low_priority_workers),
       bnds$23=[0,[1,[0,_hr_,[0,arg$22,0]]],bnds$22],
       arg$23=sexp_of_t$18(v_low_priority_jobs),
       bnds$24=[0,[1,[0,_hs_,[0,arg$23,0]]],bnds$23],
       arg$24=sexp_of_t$18(v_normal_priority_jobs),
       bnds$25=[0,[1,[0,_ht_,[0,arg$24,0]]],bnds$24],
       arg$25=sexp_of_t$16(v_job_pool),
       bnds$26=[0,[1,[0,_hu_,[0,arg$25,0]]],bnds$25];
      function _B__(f)
       {function _B$_(_Ca_){return 0}
        return caml_call1(Sexplib0_Sexp_conv[24],_B$_)}
      var
       arg$26=caml_call2(Core_kernel[438],_B__,v_check_access),
       bnds$27=[0,[1,[0,_hv_,[0,arg$26,0]]],bnds$26];
      return [1,bnds$27]}
    function uncaught_exn$0(t)
     {var _B0_=t[8];
      if(_B0_)
       {var
         match=_B0_[1],
         sexp=match[2],
         exn=match[1],
         _B1_=
          function(param)
           {var
             v1=param[2],
             v0=param[1],
             v0$0=caml_call1(Base_Exn[1],v0),
             v1$0=caml_call1(Core_kernel_Sexp[88],v1);
            return [1,[0,v0$0,[0,v1$0,0]]]};
        return [0,
                caml_call5
                 (Core_kernel_Error[15],
                  0,
                  0,
                  cst_unhandled_exception,
                  [0,exn,sexp],
                  _B1_)]}
      return 0}
    function num_pending_jobs(t){return t[3][6] + t[4][6] | 0}
    function num_jobs_run$1(t){return t[3][1] + t[4][1] | 0}
    function last_cycle_num_jobs$1(t){return t[15]}
    function invariant$6(t)
     {try
       {var
         check=
          function(f,field)
           {return caml_call1(f,caml_call2(Base_Field[3],field,t))},
         _A0_=function(_BZ_){return 0},
         _A1_=function(_BY_){return 0},
         _A2_=function(_BX_){return 0},
         _A3_=function(_BW_){return 0},
         _A4_=function(_BV_){return 0},
         _A5_=function(_BU_){return 0},
         _A6_=function(_BT_){return 0},
         _A7_=function(_BS_){return 0},
         _A8_=function(_BR_){return 0},
         _A9_=function(_BQ_){return 0},
         _A__=function(_BP_){return 0},
         _A$_=
          function(job)
           {if(caml_call2(Tuple_pool[6],t[2],job))return 0;
            throw [0,Assert_failure,_hy_]},
         _Ba_=caml_call1(Read_write[3],_A$_),
         _Bb_=function(_BO_){return check(_Ba_,_BO_)},
         _Bc_=function(_BN_){return 0},
         _Bd_=
          function(last_cycle_num_jobs)
           {if(caml_call2(symbol$0,last_cycle_num_jobs,0))return 0;
            throw [0,Assert_failure,_hz_]},
         _Be_=function(_BM_){return check(_Bd_,_BM_)},
         _Bf_=function(_BL_){return 0},
         _Bg_=function(_BK_){return 0},
         _Bh_=function(_BJ_){return 0},
         _Bi_=function(_BI_){return 0},
         _Bj_=function(_BH_){return 0},
         _Bk_=
          function(cycle_count)
           {if(caml_call2(symbol$0,cycle_count,0))return 0;
            throw [0,Assert_failure,_hA_]},
         _Bl_=function(_BG_){return check(_Bk_,_BG_)},
         _Bm_=
          function(uncaught_exn)
           {var _BF_=caml_call1(Core_kernel[228],uncaught_exn);
            if(_BF_)
             {if(caml_call2(symbol$2,num_pending_jobs(t),0))return 0;
              throw [0,Assert_failure,_hB_]}
            return _BF_},
         _Bn_=function(_BE_){return check(_Bm_,_BE_)},
         _Bo_=function(_BD_){return check(f,_BD_)},
         _Bp_=function(_BC_){return check(f,_BC_)},
         _Bq_=
          function(q)
           {return caml_call2
                    (Core_kernel_Deque[16],q,Very_low_priority_worker$0[6])},
         _Br_=function(_BB_){return check(_Bq_,_BB_)},
         _Bs_=function(_BA_){return check(invariant$0,_BA_)},
         _Bt_=function(_Bz_){return check(invariant$0,_Bz_)},
         _Bu_=function(_By_){return check(invariant,_By_)},
         _Bv_=function(_Bx_){return 0},
         _Bw_=
          caml_call28
           (Fields$4[33],
            _Bv_,
            _Bu_,
            _Bt_,
            _Bs_,
            _Br_,
            _Bp_,
            _Bo_,
            _Bn_,
            _Bl_,
            _Bj_,
            _Bi_,
            _Bh_,
            _Bg_,
            _Bf_,
            _Be_,
            _Bc_,
            _Bb_,
            _A__,
            _A9_,
            _A8_,
            _A7_,
            _A6_,
            _A5_,
            _A4_,
            _A3_,
            _A2_,
            _A1_,
            _A0_);
        return _Bw_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        var
         _AX_=[0,[1,[0,_hw_,[0,sexp_of_t$33(t),0]]],0],
         _AY_=[0,[1,[0,_hx_,[0,caml_call1(Core_kernel[521],exn),0]]],_AX_],
         _AZ_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Scheduler_invariant_failed),
            _AY_]];
        return caml_call1(Core_kernel[238],_AZ_)}}
    function free_job(t,job){return caml_call2(Tuple_pool[15],t[2],job)}
    function enqueue$0(t,execution_context,f,a)
     {var _AU_=caml_call1(Core_kernel[227],t[8]);
      if(_AU_)
       {var priority=execution_context[2],job_queue=priority?t[4]:t[3];
        enqueue(job_queue,execution_context,f,a);
        var _AV_=t[20];
        if(_AV_){var f$0=_AV_[1];return caml_call1(f$0,priority)}
        var _AW_=0}
      else
       var _AW_=_AU_;
      return _AW_}
    function enqueue_job(t,job,free_job)
     {var
       job_pool=t[2],
       _AS_=caml_call3(Tuple_pool[32],job_pool,job,Tuple_pool[2][5]),
       _AT_=caml_call3(Tuple_pool[32],job_pool,job,Tuple_pool[2][4]);
      enqueue$0
       (t,caml_call3(Tuple_pool[32],job_pool,job,Tuple_pool[2][3]),_AT_,_AS_);
      return free_job?caml_call2(Tuple_pool[15],t[2],job):free_job}
    function handle_fired$1(time_source,job_or_event)
     {var
       match=caml_call1(include$11[2][5][1],job_or_event),
       k=match[1],
       match$0=caml_call2(include$11[2][5][2],k,job_or_event);
      return k?enqueue_job(time_source[9],match$0,1):fire(time_source,match$0)}
    function create$10(param)
     {var
       now=caml_call1(_ah_,0),
       t=[],
       time_source=[],
       events=caml_call2(Timing_wheel[9],timing_wheel_config$1,now);
      function _Ay_(_AR_){return _AR_}
      function _Az_(_AQ_){return _AQ_}
      var
       _AA_=caml_call1(Bvar$0[1],0),
       _AB_=caml_call1(Bvar$0[1],0),
       _AC_=0,
       _AD_=0;
      function _AE_(_AP_){return 0}
      var
       _AF_=caml_call1(Thread_safe_queue[3],0),
       _AG_=caml_call1(sec$0,0.),
       _AH_=caml_call1(sec$0,0.),
       _AI_=caml_call3(Core_kernel_Deque[30],0,0,0),
       _AJ_=create$2(0),
       _AK_=create$2(0);
      caml_update_dummy
       (t,
        [0,
         0,
         create$1(0),
         _AK_,
         _AJ_,
         _AI_,
         dummy_e,
         dummy_e,
         0,
         0,
         now,
         0,
         0,
         0,
         _AH_,
         0,
         _AG_,
         time_source,
         _AF_,
         _AE_,
         _AD_,
         _AC_,
         _AB_,
         _AA_,
         check_invariants$1,
         max_num_jobs_per_priority_per_$1,
         record_backtraces$1,
         _Az_,
         _Ay_]);
      var _AL_=1;
      function _AM_(alarm)
       {return handle_fired$1
                (time_source,caml_call2(Timing_wheel[5][5],events,alarm))}
      var _AN_=Event$1[13],_AO_=Event$1[13];
      caml_update_dummy
       (time_source,
        [0,caml_call1(Time_source_id[45],0),0,0,events,_AO_,_AN_,_AM_,_AL_,t]);
      return t}
    function is_dead(t){return caml_call1(Core_kernel[228],t[8])}
    function set_check_access$0(t,f){t[1] = f;return 0}
    var match$1=caml_call1(Core_kernel_Result[45],create$10);
    if(0 === match$1[0])
     var t$4=match$1[1],_hC_=[0,t$4];
    else
     {var exn=match$1[1];
      log(cst_Async_cannot_create_its_ra,exn,Core_kernel[521]);
      var _hC_=caml_call1(Core_kernel[80],1)}
    function check_access$1(t)
     {var _Ax_=t[1];if(_Ax_){var f=_Ax_[1];return caml_call1(f,0)}return 0}
    function t$5(param){var t=_hC_[1];check_access$1(t);return t}
    function current_execution_context$1(t)
     {return t[26]?record_backtrace(t[7]):t[7]}
    function with_execution_context(t,tmp_context,f)
     {var old_context=current_execution_context$1(t);
      set_execution_context(t,tmp_context);
      function _Aw_(param){return set_execution_context(t,old_context)}
      return caml_call2(Core_kernel[236],f,_Aw_)}
    function create_job(t,execution_context,f,a)
     {if(caml_call1(Tuple_pool[14],t[2]))
       t[2] = caml_call2(Tuple_pool[13],0,t[2]);
      return caml_call4(Tuple_pool[19],t[2],execution_context,f,a)}
    function got_uncaught_exn(t,exn,sexp)
     {if(_cO_)
       log
        (cst_got_uncaught_exn,
         [0,exn,sexp],
         function(param)
          {var
            v1=param[2],
            v0=param[1],
            v0$0=caml_call1(Base_Exn[1],v0),
            v1$0=caml_call1(Core_kernel_Sexp[88],v1);
           return [1,[0,v0$0,[0,v1$0,0]]]});
      caml_call2(Core_kernel_List[9],[0,t[3],[0,t[4],0]],clear);
      t[8] = [0,[0,exn,sexp]];
      return 0}
    function start_cycle(t,max_num_jobs_per_priority)
     {var
       n=
        caml_call1
         (Max_num_jobs_per_priority_per_[5],max_num_jobs_per_priority);
      set_jobs_left_this_cycle$0(t[3],n);
      return set_jobs_left_this_cycle$0(t[4],n)}
    function run_jobs$0(t)
     {for(;;)
       {var e=run_jobs(t[3],t);
        if(0 === e[0])
         {var e$0=run_jobs(t[4],t);
          if(0 === e$0[0])
           {if(! can_run_a_job(t[3]) && ! can_run_a_job(t[4]))return _hD_;
            continue}
          return e$0}
        return e}}
    function stabilize(t)
     {start_cycle
       (t,caml_call1(Max_num_jobs_per_priority_per_[4],Core_kernel_Int[63]));
      var match=run_jobs$0(t);
      if(0 === match[0])return _hE_;
      var match$0=match[1],exn=match$0[1];
      return [1,exn]}
    function create$11(opt,now,param)
     {if(opt)
       var sth=opt[1],timing_wheel_config=sth;
      else
       var timing_wheel_config=timing_wheel_config$1;
      var
       t=t$5(0),
       events=caml_call2(Timing_wheel[9],timing_wheel_config,now),
       time_source=[],
       _As_=0;
      function _At_(alarm)
       {return handle_fired$1
                (time_source,caml_call2(Timing_wheel[5][5],events,alarm))}
      var _Au_=Event$1[13],_Av_=Event$1[13];
      caml_update_dummy
       (time_source,
        [0,caml_call1(Time_source_id[45],0),0,0,events,_Av_,_Au_,_At_,_As_,t]);
      return time_source}
    function wall_clock(param){return t$5(0)[17]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$49);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Scheduler1$0);
    var
     Async_kernel_Scheduler1=
      [0,
       events,
       set_execution_context,
       _cO_,
       Ivar$0,
       Bvar$0,
       Very_low_priority_worker$0,
       on_end_of_cycle,
       set_on_end_of_cycle,
       on_start_of_cycle,
       set_on_start_of_cycle,
       record_backtraces$2,
       set_record_backtraces,
       max_num_jobs_per_priority_per_$2,
       set_max_num_jobs_per_priority_,
       check_invariants$2,
       set_check_invariants,
       yield_until_no_jobs_remain,
       set_yield_until_no_jobs_remain,
       yield$0,
       set_yield,
       event_added_hook,
       set_event_added_hook,
       job_queued_hook,
       set_job_queued_hook,
       thread_safe_external_job_hook,
       set_thread_safe_external_job_h,
       external_jobs,
       time_source,
       set_time_source,
       total_cycle_time,
       set_total_cycle_time,
       set_last_cycle_num_jobs,
       last_cycle_time,
       set_last_cycle_time,
       run_every_cycle_end,
       set_run_every_cycle_end,
       run_every_cycle_start,
       set_run_every_cycle_start,
       in_cycle,
       set_in_cycle,
       cycle_start,
       set_cycle_start,
       cycle_count,
       set_cycle_count,
       set_uncaught_exn,
       set_current_execution_context,
       main_execution_context,
       set_main_execution_context,
       very_low_priority_workers,
       low_priority_jobs,
       normal_priority_jobs,
       job_pool,
       set_job_pool,
       Fields$4,
       sexp_of_t$33,
       uncaught_exn_unwrapped,
       uncaught_exn$0,
       num_pending_jobs,
       num_jobs_run$1,
       last_cycle_num_jobs$1,
       invariant$6,
       free_job,
       enqueue$0,
       enqueue_job,
       handle_fired$1,
       create$10,
       is_dead,
       set_check_access$0,
       _hC_,
       check_access$1,
       t$5,
       current_execution_context$1,
       with_execution_context,
       create_job,
       got_uncaught_exn,
       start_cycle,
       run_jobs$0,
       stabilize,
       create$11,
       wall_clock];
    caml_register_global
     (1337,Async_kernel_Scheduler1,"Async_kernel__Scheduler1");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Ivar0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$50);
    caml_call1(Expect_test_collector[4][1],cst_src_ivar0_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$51,cst$20);
    function set_prev(param,x){param[3] = x;return 0}
    function set_next(param,x){param[4] = x;return 0}
    function create$12(run,execution_context)
     {var t=[0,run,execution_context,0,0];
      set_prev(t,t);
      set_next(t,t);
      return t}
    function create2(run1,execution_context1,run2,execution_context2)
     {var
       t1=[0,run1,execution_context1,0,0],
       t2=[0,run2,execution_context2,t1,t1];
      set_prev(t1,t2);
      set_next(t1,t2);
      return t1}
    function length$2(t)
     {var n=[0,1],r=[0,t[4]];
      for(;;)
       {if(caml_call2(Core_kernel[231],r[1],t))return n[1];
        n[1]++;
        r[1] = r[1][4];
        continue}}
    function enqueue$1(t,scheduler,v){return enqueue$0(scheduler,t[2],t[1],v)}
    function schedule_jobs(t,v)
     {var scheduler=t$5(0);
      enqueue$1(t,scheduler,v);
      var r=[0,t[4]];
      for(;;)
       {if(caml_call2(Core_kernel[231],r[1],t))return 0;
        enqueue$1(r[1],scheduler,v);
        r[1] = r[1][4];
        continue}}
    function add$0(t,run,execution_context)
     {var result=[0,run,execution_context,t[3],t];
      set_next(t[3],result);
      set_prev(t,result);
      return result}
    function of_list(l)
     {if(l)
       {var
         l$0=l[2],
         match=l[1],
         execution_context=match[2],
         run=match[1],
         prev=create$12(run,execution_context),
         prev$0=prev,
         l$1=l$0;
        for(;;)
         {if(l$1)
           {var
             l$2=l$1[2],
             match$0=l$1[1],
             execution_context$0=match$0[2],
             run$0=match$0[1],
             t=[0,run$0,execution_context$0,prev$0,prev];
            set_next(prev$0,t);
            var prev$0=t,l$1=l$2;
            continue}
          set_prev(prev,prev$0);
          return [0,prev]}}
      return 0}
    function to_list$11(first)
     {var t=first[3],acc=0;
      for(;;)
       {var acc$0=[0,[0,t[1],t[2]],acc];
        if(caml_call2(Core_kernel[231],t,first))return acc$0;
        var t$0=t[3],t=t$0,acc=acc$0;
        continue}}
    function sexp_of_t$34(param,t)
     {var execution_context=t[2];
      return [1,[0,_hG_,[0,sexp_of_t$14(execution_context),0]]]}
    function cell_of_handler(x){return x}
    function equal$2(t$0,t){return caml_call2(Core_kernel[231],t$0,t)}
    function indir(t){return [0,[3,t]]}
    var
     create_with_cell$0=Ivar$0[1],
     create$13=Ivar$0[2],
     create_full$0=Ivar$0[3];
    function squash(t$3)
     {var _Aq_=t$3[1];
      if(typeof _Aq_ !== "number" && 3 === _Aq_[0])
       {var t$4=_Aq_[1],_Ar_=t$4[1];
        if(typeof _Ar_ !== "number" && 3 === _Ar_[0])
         {var t$5=_Ar_[1],indir=_Ar_,t=t$5;
          for(;;)
           {var _Ao_=t[1];
            if(typeof _Ao_ !== "number" && 3 === _Ao_[0])
             {var t$0=_Ao_[1],indir=_Ao_,t=t$0;continue}
            var t$1=t$3;
            for(;;)
             {var _Ap_=t$1[1];
              if(typeof _Ap_ !== "number" && 3 === _Ap_[0])
               {var t$2=_Ap_[1];t$1[1] = indir;var t$1=t$2;continue}
              return t$1}}}
        return t$4}
      return t$3}
    function invariant$7(a_invariant,t)
     {var t$0=squash(t),_An_=t$0[1];
      if(typeof _An_ === "number")
       return 0;
      else
       switch(_An_[0])
        {case 0:
          var r=[0,_An_[4]];
          for(;;)
           {if(caml_call2(Core_kernel[231],r[1],_An_))return 0;
            var t1=r[1];
            if(caml_call2(Core_kernel[231],t1[4][3],t1))
             {r[1] = r[1][4];continue}
            throw [0,Assert_failure,_hF_]}
         case 1:return 0;
         case 2:var a=_An_[1];return caml_call1(a_invariant,a);
         default:throw [0,Assert_failure,_hH_]}}
    function sexp_of_t$35(sexp_of_a,t)
     {var t$0=squash(t),_Am_=t$0[1];
      if(typeof _Am_ !== "number")
       switch(_Am_[0])
        {case 2:
          var a=_Am_[1];return [1,[0,_hJ_,[0,caml_call1(sexp_of_a,a),0]]];
         case 3:throw [0,Assert_failure,_hK_]
         }
      return _hI_}
    function peek(t)
     {var t$0=squash(t),_Al_=t$0[1];
      if(typeof _Al_ !== "number")
       switch(_Al_[0])
        {case 2:var a=_Al_[1];return [0,a];
         case 3:throw [0,Assert_failure,_hL_]
         }
      return 0}
    function value$1(t,if_empty_then_failwith)
     {var t$0=squash(t),_Ak_=t$0[1];
      if(typeof _Ak_ !== "number")
       switch(_Ak_[0])
        {case 2:var a=_Ak_[1];return a;case 3:throw [0,Assert_failure,_hM_]}
      return caml_call1(Core_kernel[3],if_empty_then_failwith)}
    function value_exn$0(t){return value$1(t,cst_Ivar_value_exn_called_on_e)}
    function is_empty(t)
     {var t$0=squash(t),_Aj_=t$0[1];
      if(typeof _Aj_ !== "number")
       switch(_Aj_[0]){case 2:return 0;case 3:throw [0,Assert_failure,_hN_]}
      return 1}
    function is_full(t){return 1 - is_empty(t)}
    function fill(t,v)
     {var t$0=squash(t),_Ae_=t$0[1];
      if(typeof _Ae_ === "number")
       {t$0[1] = [2,v];return 0}
      else
       switch(_Ae_[0])
        {case 0:t$0[1] = [2,v];return schedule_jobs(_Ae_,v);
         case 1:
          var execution_context=_Ae_[2],run=_Ae_[1];
          t$0[1] = [2,v];
          return enqueue$0(t$5(0),execution_context,run,v);
         case 2:
          var
           _Af_=0,
           _Ag_=0,
           _Ah_=
            [0,
             [1,
              [0,_hP_,[0,sexp_of_t$35(function(param){return _hO_},t$0),_Ag_]]],
             _Af_],
           _Ai_=
            [1,
             [0,
              caml_call1(Sexplib0_Sexp_conv[7],cst_Ivar_fill_of_full_ivar),
              _Ah_]];
          return caml_call1(Core_kernel[238],_Ai_);
         default:throw [0,Assert_failure,_hQ_]}}
    function remove_handler(t,handler)
     {function x(_Ad_){return 0}
      handler[1] = x;
      var t$0=squash(t),_Ac_=t$0[1];
      if(typeof _Ac_ !== "number")
       switch(_Ac_[0])
        {case 0:
          if(caml_call2(Core_kernel[231],handler,handler[4]))
           {t$0[1] = 0;return 0}
          if(caml_call2(Core_kernel[231],handler,_Ac_))t$0[1] = handler[4];
          set_prev(handler[4],handler[3]);
          set_next(handler[3],handler[4]);
          set_prev(handler,handler);
          return set_next(handler,handler);
         case 2:return 0;
         case 3:throw [0,Assert_failure,_hR_]
         }
      return 0}
    function add_handler(t,run,execution_context)
     {var t$0=squash(t),_Ab_=t$0[1];
      if(typeof _Ab_ === "number")
       {var handler=create$12(run,execution_context);
        t$0[1] = handler;
        return handler}
      else
       switch(_Ab_[0])
        {case 0:return add$0(_Ab_,run,execution_context);
         case 1:
          var
           execution_context$0=_Ab_[2],
           run$0=_Ab_[1],
           handler$0=create2(run,execution_context,run$0,execution_context$0);
          t$0[1] = handler$0;
          return handler$0;
         case 2:
          var
           v=_Ab_[1],
           handler$1=create$12(run,execution_context),
           run$1=function(v){return caml_call1(handler$1[1],v)};
          enqueue$0(t$5(0),execution_context,run$1,v);
          return handler$1;
         default:throw [0,Assert_failure,_hS_]}}
    function has_handlers(t)
     {var t$0=squash(t),_Aa_=t$0[1];
      if(typeof _Aa_ !== "number")
       switch(_Aa_[0])
        {case 3:throw [0,Assert_failure,_hT_];case 2:break;default:return 1}
      return 0}
    function upon(t,run)
     {return add_handler(t,run,current_execution_context$1(t$5(0)))}
    function upon$0(t,run)
     {var
       scheduler=t$5(0),
       execution_context=current_execution_context$1(scheduler),
       t$0=squash(t),
       _z$_=t$0[1];
      if(typeof _z$_ === "number")
       {t$0[1] = [1,run,execution_context];return 0}
      else
       switch(_z$_[0])
        {case 0:add$0(_z$_,run,execution_context);return 0;
         case 1:
          var execution_context$0=_z$_[2],run$0=_z$_[1];
          t$0[1] = create2(run,execution_context,run$0,execution_context$0);
          return 0;
         case 2:
          var v=_z$_[1];return enqueue$0(scheduler,execution_context,run,v);
         default:throw [0,Assert_failure,_hU_]}}
    function connect(bind_result,bind_rhs)
     {var _z7_=1 - caml_call2(Core_kernel[231],bind_result,bind_rhs);
      if(_z7_)
       {var
         bind_result$0=squash(bind_result),
         indir=[3,bind_result$0],
         ivar=bind_rhs;
        for(;;)
         {var cell=ivar[1],switch$0=0;
          if(typeof cell !== "number")
           switch(cell[0])
            {case 2:switch$0 = 1;break;
             case 3:
              var ivar$0=cell[1];ivar[1] = indir;var ivar=ivar$0;continue
             }
          if
           (! switch$0 && 1 - caml_call2(Core_kernel[231],ivar,bind_result$0))
           ivar[1] = indir;
          var _z8_=bind_result$0[1],switch$1=0;
          if(typeof _z8_ !== "number")
           switch(_z8_[0])
            {case 0:
              if(typeof cell === "number")
               switch$1 = 1;
              else
               switch(cell[0])
                {case 0:
                  var last1=_z8_[3],last2=cell[3];
                  set_next(last1,cell);
                  set_next(last2,_z8_);
                  set_prev(_z8_,last2);
                  return set_prev(cell,last1);
                 case 1:
                  var execution_context2=cell[2],run2=cell[1];
                  add$0(_z8_,run2,execution_context2);
                  return 0;
                 case 2:
                  var v=cell[1];
                  bind_result$0[1] = cell;
                  return schedule_jobs(_z8_,v)
                 }
              break;
             case 1:
              var _z9_=_z8_[2],_z__=_z8_[1];
              if(typeof cell === "number")
               switch$1 = 1;
              else
               switch(cell[0])
                {case 0:
                  var handler1=add$0(cell,_z__,_z9_);
                  bind_result$0[1] = handler1;
                  return 0;
                 case 1:
                  var
                   execution_context2$0=cell[2],
                   run2$0=cell[1],
                   handler1$0=create2(_z__,_z9_,run2$0,execution_context2$0);
                  bind_result$0[1] = handler1$0;
                  return 0;
                 case 2:
                  var v$0=cell[1];
                  bind_result$0[1] = cell;
                  return enqueue$0(t$5(0),_z9_,_z__,v$0)
                 }
              break;
             case 2:break;
             default:switch$1 = 2}
          var switch$2=0;
          switch(switch$1)
           {case 0:
             var switch$3=0;
             if(typeof cell !== "number" && 3 === cell[0])
              {switch$2 = 1;switch$3 = 1}
             if(! switch$3 && typeof _z8_ !== "number")
              throw [0,Assert_failure,_hV_];
             break;
            case 1:break;
            default:switch$2 = 1}
          if(switch$2)throw [0,Assert_failure,_hW_];
          return typeof cell === "number"?0:(bind_result$0[1] = cell,0)}}
      return _z7_}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$52);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Ivar0$0);
    var
     _hX_=[0,sexp_of_t$34,length$2,of_list,to_list$11],
     include$14=
      [0,
       sexp_of_t$35,
       invariant$7,
       create$13,
       create_full$0,
       create_with_cell$0,
       peek,
       value_exn$0,
       value$1,
       is_empty,
       is_full,
       equal$2,
       connect,
       fill,
       _hX_,
       cell_of_handler,
       add_handler,
       remove_handler,
       has_handlers,
       upon$0,
       upon,
       indir,
       squash];
    caml_register_global(1338,include$14,"Async_kernel__Ivar0");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Deferred0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$53);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred0_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$54,cst$21);
    function of_ivar(ivar){return ivar}
    function invariant$8(invariant_a,t){return invariant$7(invariant_a,t)}
    function sexp_of_t$36(sexp_of_a,t){return sexp_of_t$35(sexp_of_a,t)}
    function peek$0(t){return peek(t)}
    function return$0(a){return caml_call1(create_full$0,a)}
    function is_determined(t){return is_full(t)}
    function value_exn$1(t){return value$1(t,cst_Deferred_value_exn_called_)}
    function upon$1(t,f){return upon$0(t,f)}
    function create$14(f)
     {var result=caml_call1(create$13,0);caml_call1(f,result);return result}
    function bind(t,f)
     {var bind_result=caml_call1(create$13,0);
      upon$1(t,function(a){return connect(bind_result,caml_call1(f,a))});
      return bind_result}
    function add_handler$0(t,f,execution_context)
     {return add_handler(t,f,execution_context)}
    function remove_handler$0(t,h){return remove_handler(t,h)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$55);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Deferred0$0);
    var
     Handler$0=[0,_hX_[1]],
     include$15=
      [0,
       sexp_of_t$36,
       invariant$8,
       of_ivar,
       create$14,
       peek$0,
       value_exn$1,
       is_determined,
       return$0,
       upon$1,
       bind,
       Handler$0,
       add_handler$0,
       remove_handler$0];
    caml_register_global(1339,include$15,"Async_kernel__Deferred0");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Ivar);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$56);
    caml_call1(Expect_test_collector[4][1],cst_src_ivar_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$57,cst$22);
    function fill_if_empty(t,v)
     {var _z6_=is_empty(t);return _z6_?fill(t,v):_z6_}
    function to_binable(t){return peek(t)}
    function of_binable(param)
     {if(param){var a=param[1];return caml_call1(create_full$0,a)}
      return caml_call1(create$13,0)}
    var
     include$16=
      caml_call1
       (caml_call1
         (Core_kernel_Binable[7],
          [0,
           Core_kernel_Option[1],
           Core_kernel_Option[2],
           Core_kernel_Option[3],
           Core_kernel_Option[4],
           Core_kernel_Option[5]]),
        [0,to_binable,of_binable]),
     _hY_=include$16[1],
     _hZ_=include$16[2],
     _h0_=include$16[3],
     _h1_=include$16[4],
     _h2_=include$16[5],
     _h3_=include$16[6],
     _h4_=include$16[7],
     _h5_=include$16[8];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$58);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Ivar$0);
    var
     Async_kernel_Ivar=
      [0,
       _hY_,
       _hZ_,
       _h0_,
       _h1_,
       _h2_,
       _h3_,
       _h4_,
       _h5_,
       sexp_of_t$35,
       invariant$7,
       equal$2,
       create$13,
       create_full$0,
       fill,
       fill_if_empty,
       is_empty,
       is_full,
       of_ivar,
       peek,
       value_exn$0,
       has_handlers];
    caml_register_global(1341,Async_kernel_Ivar,"Async_kernel__Ivar");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Monad_sequenc);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$59);
    caml_call1(Expect_test_collector[4][1],cst_src_monad_sequence_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$60,cst$23);
    function sexp_of_how(param)
     {if(typeof param === "number")return -676829465 <= param?_h6_:_h7_;
      var v0=param[2];
      return [1,[0,_h8_,[0,caml_call1(Core_kernel[340],v0),0]]]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$61);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Monad_sequenc$0);
    var Async_kernel_Monad_sequence=[0,sexp_of_how];
    caml_register_global
     (1342,Async_kernel_Monad_sequence,"Async_kernel__Monad_sequence");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Deferred1);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$62);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred1_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$63,cst$24);
    function never(param){return caml_call1(create$13,0)}
    var
     map$11=
      [0,
       -198771759,
       function(t,f)
        {var result=caml_call1(create$13,0);
         upon$1(t,function(a){return fill(result,caml_call1(f,a))});
         return result}],
     include$17=caml_call1(Base_Monad[1],[0,bind,return$0,map$11]),
     _h9_=include$17[1],
     _h__=include$17[2],
     Monad_infix=include$17[3],
     bind$0=include$17[4],
     map$12=include$17[6],
     join=include$17[7],
     ignore_m=include$17[8],
     include$18=include$17[11],
     symbol_bind=include$18[2],
     symbol_map=include$18[3],
     include$19=include$17[11][4],
     bind$1=include$19[2],
     map$13=include$19[3],
     both=include$19[4],
     Open_on_rhs=include$19[5],
     Let_syntax=[0,bind$1,map$13,both,Open_on_rhs,return$0],
     Let_syntax$0=[0,symbol_bind,symbol_map,return$0,Let_syntax],
     unit=caml_call1(Let_syntax$0[3],0);
    function both$0(t1,t2)
     {return create$14
              (function(result)
                {return upon$1
                         (t1,
                          function(a1)
                           {return upon$1
                                    (t2,function(a2){return fill(result,[0,a1,a2])})})})}
    var
     symbol_bind$0=Monad_infix[1],
     symbol_map$0=Monad_infix[2],
     Infix=[0,symbol_bind$0,symbol_map$0,upon$1,both$0];
    function don_t_wait_for(param){return 0}
    function map$14(param,f2)
     {var f1=param[2],t=param[1];
      return [0,t,function(x){return caml_call1(f2,caml_call1(f1,x))}]}
    var Choice=[0,map$14];
    function process(param)
     {var param$0=param;
      for(;;)
       {if(param$0)
         {var rest=param$0[3],handler=param$0[2],t=param$0[1];
          remove_handler$0(t,handler);
          var param$0=rest;
          continue}
        return 0}}
    var Unregister=[0,process];
    function choice(t,f){return [0,t,f]}
    function enabled(choices)
     {var result=caml_call1(create$13,0),unregisters=[0,0];
      function ready(param)
       {var _z3_=is_empty(result);
        return _z3_
                ?(caml_call1(Unregister[1],unregisters[1]),
                  fill
                   (result,
                    function(param)
                     {function _z4_(ac,param)
                       {var f=param[2],t=param[1],match=peek$0(t);
                        if(match){var v=match[1];return [0,caml_call1(f,v),ac]}
                        return ac}
                      var _z5_=caml_call3(Core_kernel_List[10],choices,0,_z4_);
                      return caml_call1(Core_kernel_List[34],_z5_)}))
                :_z3_}
      var execution_context=current_execution_context$1(t$5(0));
      function _z2_(acc,param)
       {var t=param[1];
        return [0,t,add_handler$0(t,ready,execution_context),acc]}
      unregisters[1] = caml_call3(Core_kernel_List[10],choices,0,_z2_);
      return result}
    function choose_result(choices)
     {var choices$0=choices;
      for(;;)
       {if(choices$0)
         {var
           choices$1=choices$0[2],
           match=choices$0[1],
           f=match[2],
           t=match[1],
           match$0=peek$0(t);
          if(match$0){var v=match$0[1];return caml_call1(f,v)}
          var choices$0=choices$1;
          continue}
        throw [0,Assert_failure,_h$_]}}
    function choose(choices)
     {var result=caml_call1(create$13,0),unregisters=[0,0];
      function ready(param)
       {var _z1_=is_empty(result);
        return _z1_
                ?(caml_call1(Unregister[1],unregisters[1]),
                  fill(result,choose_result(choices)))
                :_z1_}
      var execution_context=current_execution_context$1(t$5(0));
      function _z0_(acc,param)
       {var t=param[1];
        return [0,t,add_handler$0(t,ready,execution_context),acc]}
      unregisters[1] = caml_call3(Core_kernel_List[10],choices,0,_z0_);
      return result}
    function any_f(ts,f)
     {function _zZ_(t){return [0,t,f]}
      return choose(caml_call2(Core_kernel_List[71],ts,_zZ_))}
    function any(ts){return any_f(ts,function(_zY_){return _zY_})}
    function any_unit(ts){return any_f(ts,function(_zX_){return 0})}
    function for$0(start,to,do$0)
     {function loop(i)
       {if(caml_call2(Core_kernel[88],i,to))
         return caml_call1(Let_syntax$0[3],0);
        function _zV_(param){return loop(i + 1 | 0)}
        var _zW_=caml_call1(do$0,i);
        return caml_call2(Let_syntax$0[4][1],_zW_,_zV_)}
      return loop(start)}
    function repeat_until_finished(state,f)
     {return create$14
              (function(finished)
                {function loop(state)
                  {function _zT_(param)
                    {if(990972795 <= param[1])
                      {var state=param[2];return loop(state)}
                     var result=param[2];
                     return fill(finished,result)}
                   var _zU_=caml_call1(f,state);
                   return caml_call2(Infix[3],_zU_,_zT_)}
                 return loop(state)})}
    function forever(state,f)
     {var
       _zP_=Core_kernel[144],
       _zQ_=
        repeat_until_finished
         (state,
          function(state)
           {function _zR_(state){return [0,990972795,state]}
            var _zS_=caml_call1(f,state);
            return caml_call2(Let_syntax$0[4][2],_zS_,_zR_)});
      return caml_call2(Infix[3],_zQ_,_zP_)}
    function fold$11(t,init,f)
     {return create$14
              (function(result)
                {function loop(t,b)
                  {if(t)
                    {var
                      xs=t[2],
                      x=t[1],
                      _zN_=function(b){return loop(xs,b)},
                      _zO_=caml_call2(f,b,x);
                     return caml_call2(Infix[3],_zO_,_zN_)}
                   return fill(result,b)}
                 return loop(t,init)})}
    function seqmap(t,f)
     {var
       _zJ_=Core_kernel_List[34],
       _zK_=
        fold$11
         (t,
          0,
          function(bs,a)
           {function _zL_(b){return [0,b,bs]}
            var _zM_=caml_call1(f,a);
            return caml_call2(Infix[2],_zM_,_zL_)});
      return caml_call2(Infix[2],_zK_,_zJ_)}
    function all$0(ds){return seqmap(ds,function(_zI_){return _zI_})}
    function all_unit(ds){return fold$11(ds,0,function(param,d){return d})}
    function ok(x)
     {function _zH_(x){return [0,x]}return caml_call2(Infix[2],x,_zH_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$64);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Deferred1$0);
    var
     include$20=
      [0,
       sexp_of_t$36,
       invariant$8,
       of_ivar,
       create$14,
       peek$0,
       value_exn$1,
       is_determined,
       upon$1,
       Handler$0,
       add_handler$0,
       remove_handler$0,
       never,
       include$17,
       _h9_,
       _h__,
       Monad_infix,
       bind$0,
       map$12,
       join,
       ignore_m,
       return$0,
       Let_syntax$0,
       unit,
       both$0,
       Infix,
       don_t_wait_for,
       Choice,
       Unregister,
       choice,
       enabled,
       choose_result,
       choose,
       any_f,
       any,
       any_unit,
       for$0,
       repeat_until_finished,
       forever,
       sexp_of_how,
       fold$11,
       seqmap,
       all$0,
       all_unit,
       ok];
    caml_register_global(1344,include$20,"Async_kernel__Deferred1");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Deferred_std);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$65);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_std_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$66,cst$25);
    var
     _ia_=Infix[3],
     _ic_=Let_syntax$0[1],
     _id_=Let_syntax$0[2],
     _ie_=Let_syntax$0[3],
     _if_=Let_syntax$0[4],
     _ib_=Infix[4];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$67);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Deferred_std$0);
    var
     Async_kernel_Deferred_std=
      [0,
       _ia_,
       _ib_,
       _ic_,
       _id_,
       _if_,
       choice,
       choose,
       don_t_wait_for,
       never,
       _ie_,
       upon$1];
    caml_register_global
     (1345,Async_kernel_Deferred_std,"Async_kernel__Deferred_std");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Ivar_filler);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$68);
    caml_call1(Expect_test_collector[4][1],cst_src_ivar_filler_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$69,cst$26);
    function sexp_of_t$37(of_a,v)
     {function _zG_(param)
       {if(param)
         {var v0=param[1],v0$0=sexp_of_t$35(of_a,v0);
          return [1,[0,_ig_,[0,v0$0,0]]]}
        return _ih_}
      return caml_call2(Core_kernel[485],_zG_,v)}
    function invariant$9(param,t)
     {function _zB_(param)
       {var _zF_=t[1];
        if(_zF_)
         {var ivar=_zF_[1];
          if(is_empty(ivar))return 0;
          throw [0,Assert_failure,_ii_]}
        return 0}
      function _zC_(param){return _ij_}
      function _zD_(_zE_){return sexp_of_t$37(_zC_,_zE_)}
      return caml_call4(include$9[1],_ik_,t,_zD_,_zB_)}
    function create$15(param)
     {var ivar=caml_call1(create$13,0),t=[0,[0,ivar]];return [0,t,ivar]}
    function is_empty$0(t){return t[1]?1:0}
    function fill$0(t,a)
     {var _zz_=t[1];
      if(_zz_){var i=_zz_[1];t[1] = 0;return fill(i,a)}
      var
       _zA_=
        caml_call1(Sexplib0_Sexp_conv[7],cst_attempt_to_fill_full_ivar);
      return caml_call1(Core_kernel[238],_zA_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$70);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Ivar_filler$0);
    var
     Async_kernel_Ivar_filler=
      [0,sexp_of_t$37,invariant$9,create$15,is_empty$0,fill$0];
    caml_register_global
     (1346,Async_kernel_Ivar_filler,"Async_kernel__Ivar_filler");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Tail);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$71);
    caml_call1(Expect_test_collector[4][1],cst_src_tail_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$72,cst$27);
    function sexp_of_t$38(sexp_of_a,d)
     {var d$0=d,ac=0;
      for(;;)
       {var match=peek$0(d$0);
        if(match)
         {var _zy_=match[1];
          if(_zy_)
           {var
             t=_zy_[2],
             a=_zy_[1],
             ac$0=[0,caml_call1(sexp_of_a,a),ac],
             d$0=t,
             ac=ac$0;
            continue}
          return [1,caml_call1(Core_kernel_List[34],ac)]}
        return [1,caml_call1(Core_kernel_List[34],[0,_il_,ac])]}}
    function next(t){return t}
    var include$21=[0,sexp_of_t$38,next];
    function sexp_of_t$39(param,t)
     {var _zx_=is_empty(t[1])?cst_open_tail:cst_closed_tail;return [0,_zx_]}
    function create$16(param){return [0,caml_call1(create$13,0)]}
    function collect(t){return t[1]}
    function is_closed(t){return is_full(t[1])}
    function fill_exn(t,v)
     {if(is_closed(t))
       {var _zw_=caml_call1(Sexplib0_Sexp_conv[7],cst_stream_is_closed);
        return caml_call1(Core_kernel[238],_zw_)}
      return fill(t[1],v)}
    function close_exn(t){return fill_exn(t,0)}
    function close_if_open(t)
     {var _zv_=1 - is_closed(t);return _zv_?fill(t[1],0):_zv_}
    function extend(t,v)
     {var next=caml_call1(create$13,0);
      fill_exn(t,[0,v,next]);
      t[1] = next;
      return 0}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$73);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Tail$0);
    var
     Async_kernel_Tail=
      [0,
       sexp_of_t$39,
       create$16,
       extend,
       close_exn,
       close_if_open,
       is_closed,
       include$21,
       collect];
    caml_register_global(1347,Async_kernel_Tail,"Async_kernel__Tail");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Monitor);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$74);
    caml_call1(Expect_test_collector[4][1],cst_src_monitor_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$75,cst$28);
    function invariant$10(t)
     {function _zd_(param)
       {function _zf_(_zu_){return 0}
        function _zg_(_zt_){return 0}
        function _zh_(_zs_){return 0}
        function _zi_(_zr_){return 0}
        function f(next_error)
         {if(is_empty(next_error))return 0;throw [0,Assert_failure,_im_]}
        var _ze_=caml_call2(include$9[2],t,f);
        function _zj_(_zq_){return 0}
        function _zk_(_zp_){return 0}
        function _zl_(_zo_){return 0}
        function _zm_(_zn_){return 0}
        return caml_call9
                (Fields[14],_zm_,_zl_,_zk_,_zj_,_ze_,_zi_,_zh_,_zg_,_zf_)}
      return caml_call4(include$9[1],_in_,t,sexp_of_t$13,_zd_)}
    function current_execution_context$2(param)
     {return current_execution_context$1(t$5(0))}
    function current(param){return current_execution_context$2(0)[1]}
    function depth(t)
     {var t$0=t,n=0;
      for(;;)
       {var _zc_=t$0[4];
        if(_zc_){var t$1=_zc_[1],n$0=n + 1 | 0,t$0=t$1,n=n$0;continue}
        return n}}
    function detach(t){t[9] = 1;return 0}
    function detach_and_iter_errors(t,f)
     {detach(t);
      var
       scheduler=t$5(0),
       execution_context=current_execution_context$1(scheduler),
       handler_state_ref=[0,0];
      function run_f(exn)
       {var _za_=handler_state_ref[1];
        if(typeof _za_ === "number")
         {if(_za_)return 0;throw [0,Assert_failure,_io_]}
        var bag_elt=_za_[1];
        try
         {var _zb_=caml_call1(f,exn);return _zb_}
        catch(inner_exn)
         {inner_exn = caml_wrap_exception(inner_exn);
          handler_state_ref[1] = 1;
          caml_call2(Core_kernel_Bag[26],t[6],bag_elt);
          throw inner_exn}}
      handler_state_ref[1]
      =
      [0,caml_call2(Core_kernel_Bag[23],t[6],[0,execution_context,run_f])];
      return 0}
    function detach_and_get_error_stream(t)
     {detach(t);var tail=create$16(0);t[7] = [0,tail,t[7]];return tail[1]}
    function get_next_error(t){return t[5]}
    function detach_and_get_next_error(t){detach(t);return t[5]}
    function create$17(here,info,name,param)
     {var parent=current(0);
      return create_with_parent(here,info,name,[0,parent])}
    var
     Error=
      [248,cst_Async_kernel_Monitor_Error,runtime.caml_fresh_oo_id(0)];
    function _iu_(param)
     {if(param[1] === Error)
       {var
         t=param[2],
         monitor=t[4],
         backtrace_history=t[3],
         backtrace=t[2],
         exn=t[1],
         s=caml_call1(Core_kernel_Info[8],monitor[1]),
         name=caml_string_notequal(s,cst$29)?[0,s]:0,
         _y4_=monitor[2];
        if(_y4_)
         var
          here=_y4_[1],
          column=here[4] - here[3] | 0,
          pos=
           [0,caml_call5(Core_kernel[241],_ip_,here[1],here[2],column,column)];
        else
         var pos=0;
        if(pos)
         {var _y5_=pos[1];
          if(name)
           var
            name$0=name[1],
            _y6_=[0,caml_call3(Core_kernel[241],_iq_,name$0,_y5_),0];
          else
           var _y6_=[0,caml_call2(Core_kernel[241],_is_,_y5_),0];
          var monitor$0=_y6_}
        else
         if(name)
          var
           name$1=name[1],
           monitor$0=[0,caml_call2(Core_kernel[241],_it_,name$1),0];
         else
          var monitor$0=0;
        if(backtrace)
         var
          backtrace$0=backtrace[1],
          backtrace$1=caml_call1(Base_Backtrace[4],backtrace$0);
        else
         var backtrace$1=0;
        var switch$0=0;
        if(backtrace$1)
         {var rest=backtrace$1[2],t1=backtrace$1[1];
          if(caml_call2(Core_kernel_String[51],t1,import0))
           {var switch$1=0;
            if(rest)
             {var rest$0=rest[2],t2=rest[1];
              if(caml_call2(Core_kernel_String[51],t2,error))
               {var switch$2=0;
                if(rest$0)
                 {var rest$1=rest$0[2],t3=rest$0[1];
                  if(caml_call2(Core_kernel_String[51],t3,error))
                   {var rest$2=rest$1;switch$2 = 1}}
                if(! switch$2)var rest$2=rest$0;
                var rest$3=rest$2;
                switch$1 = 1}}
            if(! switch$1)var rest$3=rest;
            var traces=rest$3;
            switch$0 = 1}}
        if(! switch$0)var traces=backtrace$1;
        var match=caml_call1(Core_kernel_List[34],traces),switch$3=0;
        if(match)
         {var rest$4=match[2],t1$0=match[1];
          if(caml_call2(Core_kernel_String[51],t1$0,job_queue))
           {var switch$4=0;
            if(rest$4)
             {var rest$5=rest$4[2],t2$0=rest$4[1];
              if(caml_call2(Core_kernel_String[51],t2$0,job_queue))
               {var switch$5=0;
                if(rest$5)
                 {var rest$6=rest$5[2],t2$1=rest$5[1],switch$6=0;
                  if
                   (!
                    caml_call2(Core_kernel_String[51],t2$1,deferred0)
                    &&
                    !
                    caml_call2(Core_kernel_String[51],t2$1,deferred1)
                    &&
                    !
                    caml_call2(Core_kernel_String[51],t2$1,monitor$2))
                   switch$6 = 1;
                  if(! switch$6)
                   {var _y7_=caml_call1(Core_kernel_List[34],rest$6);
                    switch$4 = 1;
                    switch$5 = 1}}
                if(! switch$5)
                 {var _y7_=caml_call1(Core_kernel_List[34],rest$5);
                  switch$4 = 1}}}
            if(! switch$4)var _y7_=caml_call1(Core_kernel_List[34],rest$4)}
          else
           switch$3 = 1}
        else
         switch$3 = 1;
        if(switch$3)var _y7_=traces;
        var
         backtrace$2=caml_call2(Core_kernel[142],_y7_,monitor$0),
         list_if_not_empty=function(l){return l?[0,l]:0},
         match$0=list_if_not_empty(backtrace$2),
         _y8_=list_if_not_empty(backtrace_history),
         match$1=0;
        if(_y8_)
         var
          v=_y8_[1],
          _y9_=
           [0,
            [1,
             [0,_ir_,[0,caml_call2(Core_kernel[405],Base_Backtrace[1],v),0]]],
            match$1];
        else
         var _y9_=match$1;
        if(match$0)
         var
          v$0=match$0[1],
          _y__=[0,caml_call2(Core_kernel[405],Core_kernel[455],v$0),_y9_];
        else
         var _y__=_y9_;
        var sexp=[1,[0,caml_call1(Core_kernel[521],exn),_y__]];
        if(0 === sexp[0])var _y$_=[0,sexp,0];else var l=sexp[1],_y$_=l;
        return [1,
                [0,
                 caml_call1(Sexplib0_Sexp_conv[7],cst_monitor_ml_Error),
                 _y$_]]}
      throw [0,Assert_failure,_iv_]}
    caml_call3(Sexplib_Conv[51][2],0,Error,_iu_);
    function extract_exn(exn)
     {if(exn[1] === Error){var error=exn[2];return error[1]}return exn}
    function send_exn(t,backtrace,exn)
     {if(exn[1] === Error)
       var exn$0=exn;
      else
       {if(backtrace)
         {var _y2_=backtrace[1];
          if(typeof _y2_ === "number")
           var _y3_=[0,caml_call1(Base_Backtrace[6][4],0)];
          else
           var b=_y2_[2],_y3_=[0,b];
          var backtrace$0=_y3_}
        else
         var backtrace$0=0;
        var
         backtrace_history=current_execution_context$2(0)[4],
         exn$0=[0,Error,[0,exn,backtrace$0,backtrace_history,t]]}
      if(_cL_)
       log
        (cst_Monitor_send_exn$1,
         [0,t,exn$0],
         function(param)
          {var
            v1=param[2],
            v0=param[1],
            v0$0=sexp_of_t$13(v0),
            v1$0=caml_call1(Core_kernel[521],v1);
           return [1,[0,v0$0,[0,v1$0,0]]]});
      t[8] = 1;
      var scheduler=t$5(0),t$0=t;
      for(;;)
       {fill(t$0[5],exn$0);
        t$0[5] = caml_call1(create$13,0);
        if(t$0[9])
         {if(_cL_)
           log
            (cst_Monitor_send_exn_found_lis,
             [0,t$0,exn$0],
             function(param)
              {var
                v1=param[2],
                v0=param[1],
                v0$0=sexp_of_t$13(v0),
                v1$0=caml_call1(Core_kernel[521],v1);
               return [1,[0,v0$0,[0,v1$0,0]]]});
          var
           _yY_=
            function(param)
             {var f=param[2],execution_context=param[1];
              return enqueue$0(scheduler,execution_context,f,exn$0)};
          caml_call2(Core_kernel_Bag[7],t$0[6],_yY_);
          var _yZ_=function(tail){return extend(tail,exn$0)};
          return caml_call2(Core_kernel_List[9],t$0[7],_yZ_)}
        var _y0_=t$0[4];
        if(_y0_){var t$1=_y0_[1],t$0=t$1;continue}
        var _y1_=caml_call1(task_id[1],0);
        return got_uncaught_exn(t$5(0),exn$0,_y1_)}}
    function within_context(context,f)
     {function _yX_(param)
       {var match=caml_call1(Core_kernel_Result[45],f);
        if(0 === match[0]){var x=match[1];return [0,x]}
        var exn=match[1];
        send_exn(context[1],_iw_,exn);
        return _ix_}
      return with_execution_context(t$5(0),context,_yX_)}
    function within_gen(monitor,priority,f)
     {var
       tmp_context=
        create_like(monitor,priority,0,current_execution_context$2(0));
      return within_context(tmp_context,f)}
    function within(monitor,priority,f)
     {var match=within_gen(monitor,priority,f);
      if(0 === match[0]){var d=match[1];return d}
      return never(0)}
    function within_v(monitor,priority,f)
     {var match=within_gen(monitor,priority,f);
      if(0 === match[0]){var x=match[1];return [0,x]}
      return 0}
    function within$0(monitor,priority,f)
     {var match=within_gen(monitor,priority,f);return 0 === match[0]?0:0}
    function schedule_with_data(monitor,priority,work,x)
     {var scheduler=t$5(0);
      return enqueue$0
              (scheduler,
               create_like
                (monitor,priority,0,current_execution_context$1(scheduler)),
               work,
               x)}
    function schedule$0(monitor,priority,work)
     {return schedule_with_data(monitor,priority,work,0)}
    function upon_work_fill_i(param)
     {var i=param[2],work=param[1];
      function _yW_(a){return fill(i,a)}
      return upon$1(caml_call1(work,0),_yW_)}
    function schedule$1(monitor,priority,work)
     {var i=caml_call1(create$13,0);
      schedule_with_data(monitor,priority,upon_work_fill_i,[0,work,i]);
      return i}
    function preserve_execution_context(f)
     {var
       scheduler=t$5(0),
       execution_context=current_execution_context$1(scheduler);
      function _yV_(a){return enqueue$0(scheduler,execution_context,f,a)}
      return caml_call1(Core_kernel[242],_yV_)}
    function preserve_execution_context$0(f)
     {var
       scheduler=t$5(0),
       execution_context=current_execution_context$1(scheduler);
      function call_and_fill(param)
       {var i=param[3],a=param[2],f=param[1];
        function _yU_(r){return fill(i,r)}
        return upon$1(caml_call1(f,a),_yU_)}
      function _yT_(a)
       {return create$14
                (function(i)
                  {return enqueue$0
                           (scheduler,execution_context,call_and_fill,[0,f,a,i])})}
      return caml_call1(Core_kernel[242],_yT_)}
    function stream_iter(stream,f)
     {function loop(stream)
       {function _yS_(param)
         {if(param)
           {var stream=param[2],v=param[1];
            loop(stream);
            return caml_call1(f,v)}
          return 0}
        return caml_call2(_ia_,caml_call1(include$21[2],stream),_yS_)}
      return loop(stream)}
    function create$18(here,info,name,run,f)
     {var
       monitor=create_with_parent(here,info,name,0),
       exns=detach_and_get_error_stream(monitor),
       ok=523273847 <= run?schedule$1([0,monitor],0,f):within([0,monitor],0,f);
      return [0,ok,exns]}
    function fill_result_and_handle_backgro
     (result_filler,result,exns,handle_exns_after_result)
     {var _yR_=is_empty$0(result_filler);
      return _yR_
              ?(fill$0(result_filler,result),
                caml_call1(handle_exns_after_result,exns))
              :_yR_}
    var
     try_with_log_exn=
      [0,
       function(exn)
        {var
          _yP_=[0,[1,[0,_iy_,[0,caml_call1(Base_Exn[1],exn),0]]],0],
          _yQ_=
           [1,
            [0,
             caml_call1(Sexplib0_Sexp_conv[7],cst_failed_to_set_Monitor_Expe),
             _yP_]];
         return caml_call1(Core_kernel[238],_yQ_)}],
     Expert$0=[0,try_with_log_exn];
    function try_with(here,info,opt,_yN_,_yM_,_yL_,f$0)
     {if(opt)var sth=opt[1],name=sth;else var name=cst$30;
      if(_yN_)
       var sth$0=_yN_[1],do_extract_exn=sth$0;
      else
       var do_extract_exn=0;
      if(_yM_)var sth$1=_yM_[1],run=sth$1;else var run=523273847;
      if(_yL_)var sth$2=_yL_[1],rest=sth$2;else var rest=3804260;
      var
       match=create$18(here,info,[0,name],run,f$0),
       exns=match[2],
       ok=match[1];
      if(typeof rest === "number")
       if(3804260 <= rest)
        var handle_exn=Expert$0[1][1];
       else
        var
         parent=current(0),
         handle_exn=function(exn){return send_exn(parent,0,exn)};
      else
       var
        f=rest[2],
        parent$0=current(0),
        handle_exn=
         function(exn)
          {return within$0
                   ([0,parent$0],0,function(param){return caml_call1(f,exn)})};
      function handle_exns_after_result(exns)
       {return stream_iter(exns,handle_exn)}
      return within
              ([0,main],
               0,
               function(param)
                {if(is_determined(ok))
                  {handle_exns_after_result(exns);
                   return caml_call1(_ie_,[0,value_exn$1(ok)])}
                 var
                  match=create$15(0),
                  result=match[2],
                  result_filler=match[1];
                 upon$1
                  (ok,
                   function(res)
                    {return fill_result_and_handle_backgro
                             (result_filler,[0,res],exns,handle_exns_after_result)});
                 function _yO_(param)
                  {if(param)
                    {var
                      exns=param[2],
                      exn=param[1],
                      exn$0=do_extract_exn?extract_exn(exn):exn;
                     return fill_result_and_handle_backgro
                             (result_filler,[1,exn$0],exns,handle_exns_after_result)}
                   throw [0,Assert_failure,_iz_]}
                 upon$1(caml_call1(include$21[2],exns),_yO_);
                 return result})}
    function try_with_or_error(here,info,opt,extract_exn,f)
     {if(opt)var sth=opt[1],name=sth;else var name=cst_try_with_or_error;
      var arg=Core_kernel_Or_error[37];
      function _yK_(eta){return caml_call2(arg,0,eta)}
      return caml_call2
              (_id_,try_with(here,info,[0,name],extract_exn,_iB_,_iA_,f),_yK_)}
    function try_with_join_or_error(here,info,opt,extract_exn,f)
     {if(opt)var sth=opt[1],name=sth;else var name=cst_try_with_join_or_error;
      var _yJ_=Core_kernel_Or_error[26];
      return caml_call2
              (_id_,try_with_or_error(here,info,[0,name],extract_exn,f),_yJ_)}
    function protect(here,info,opt,extract_exn,run,f,finally$0)
     {if(opt)var sth=opt[1],name=sth;else var name=cst_Monitor_protect;
      function _yA_(r)
       {function _yC_(match)
         {if(0 === r[0])
           {var _yE_=r[1];if(0 === match[0])return _yE_;var e=match[1]}
          else
           {var _yF_=r[1];
            if(0 !== match[0])
             {var
               finally_exn=match[1],
               _yG_=
                [0,
                 [1,[0,_iC_,[0,caml_call1(Core_kernel[521],finally_exn),0]]],
                 0],
               _yH_=
                [0,[1,[0,_iD_,[0,caml_call1(Core_kernel[521],_yF_),0]]],_yG_],
               _yI_=
                [1,
                 [0,caml_call1(Sexplib0_Sexp_conv[7],cst_Async_finally),_yH_]];
              return caml_call1(Core_kernel[238],_yI_)}
            var e=_yF_}
          throw e}
        var _yD_=try_with(here,info,_iF_,_iE_,0,0,finally$0);
        return caml_call2(_if_[2],_yD_,_yC_)}
      var _yB_=try_with(here,info,[0,name],extract_exn,run,0,f);
      return caml_call2(_if_[1],_yB_,_yA_)}
    function handle_errors(here,info,name,f,handler)
     {var match=create$18(here,info,name,3903734,f),exns=match[2],ok=match[1];
      stream_iter(exns,handler);
      return ok}
    function catch_stream(here,info,name,f)
     {var
       match=
        create$18
         (here,
          info,
          name,
          3903734,
          function(param){caml_call1(f,0);return caml_call1(_ie_,0)}),
       exns=match[2];
      return exns}
    function catch$0(here,info,name,f)
     {function _yw_(param)
       {if(param){var x=param[1];return x}
        var
         _yz_=
          caml_call1(Sexplib0_Sexp_conv[7],cst_Monitor_catch_got_unexpect);
        return caml_call1(Core_kernel[238],_yz_)}
      var
       _yx_=catch_stream(here,info,name,f),
       _yy_=caml_call1(include$21[2],_yx_);
      return caml_call2(_if_[2],_yy_,_yw_)}
    function catch_error(here,info,name,f)
     {var arg=Core_kernel_Error[22];
      function _yv_(eta){return caml_call2(arg,0,eta)}
      return caml_call2(_id_,catch$0(here,info,name,f),_yv_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$76);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Monitor$0);
    var
     include$22=
      [0,
       within,
       within$0,
       within_v,
       schedule$1,
       schedule$0,
       within_context,
       preserve_execution_context,
       preserve_execution_context$0],
     Async_kernel_Monitor=
      [0,
       sexp_of_t$13,
       invariant$10,
       create$17,
       name,
       parent,
       depth,
       current,
       detach,
       detach_and_iter_errors,
       detach_and_get_next_error,
       detach_and_get_error_stream,
       get_next_error,
       extract_exn,
       has_seen_error,
       send_exn,
       try_with,
       try_with_or_error,
       try_with_join_or_error,
       handle_errors,
       catch_stream,
       catch$0,
       catch_error,
       protect,
       main,
       Expert$0,
       include$22];
    caml_register_global(1349,Async_kernel_Monitor,"Async_kernel__Monitor");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Async_stream);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$77);
    caml_call1(Expect_test_collector[4][1],cst_src_async_stream_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$78,cst$31);
    var _iH_=include$21[2],_iG_=include$21[1];
    function first_exn(t)
     {function _ys_(param)
       {if(param){var x=param[1];return x}
        var
         _yu_=
          caml_call1(Sexplib0_Sexp_conv[7],cst_Stream_first_of_empty_stre);
        return caml_call1(Core_kernel[238],_yu_)}
      var _yt_=caml_call1(_iH_,t);
      return caml_call2(_if_[2],_yt_,_ys_)}
    function fold$12(t,init,f)
     {return create$14
              (function(result)
                {function loop(t,b)
                  {function _yp_(param)
                    {if(param)
                      {var
                        t=param[2],
                        v=param[1],
                        _yq_=function(_yr_){return loop(t,_yr_)};
                       return upon$1(caml_call2(f,b,v),_yq_)}
                     return fill(result,b)}
                   return upon$1(caml_call1(_iH_,t),_yp_)}
                 return loop(t,init)})}
    function fold$13(t,init,f)
     {return create$14
              (function(result)
                {function loop$0(counter,t,b)
                  {var match=peek$0(caml_call1(_iH_,t));
                   if(match)
                    {var next=match[1];
                     if(counter < 50)
                      {var counter$0=counter + 1 | 0;
                       return loop_next$0(counter$0,next,b)}
                     return caml_trampoline_return(loop_next$0,[0,next,b])}
                   function _yo_(next){return loop_next(next,b)}
                   return upon$1(caml_call1(_iH_,t),_yo_)}
                 function loop_next$0(counter,next,b)
                  {if(next)
                    {var t=next[2],v=next[1],_yn_=caml_call2(f,b,v);
                     if(counter < 50)
                      {var counter$0=counter + 1 | 0;
                       return loop$0(counter$0,t,_yn_)}
                     return caml_trampoline_return(loop$0,[0,t,_yn_])}
                   return fill(result,b)}
                 function loop(t,b){return caml_trampoline(loop$0(0,t,b))}
                 function loop_next(next,b)
                  {return caml_trampoline(loop_next$0(0,next,b))}
                 return loop(t,init)})}
    function length$3(t)
     {return fold$13(t,0,function(n,param){return n + 1 | 0})}
    function iter$11(t,f)
     {return fold$12(t,0,function(param,v){return caml_call1(f,v)})}
    function closed(t)
     {var match=peek$0(caml_call1(_iH_,t));
      if(match && ! match[1])return caml_call1(_ie_,0);
      return iter$11(t,function(param){return caml_call1(_ie_,0)})}
    function iter$12(t,f)
     {iter$11(t,function(a){caml_call1(f,a);return caml_call1(_ie_,0)});
      return 0}
    function create$19(f)
     {var tail=create$16(0),t=tail[1];caml_call1(f,tail);return t}
    function unfold(b,f)
     {return create$19
              (function(tail)
                {function loop(b)
                  {function _ym_(param)
                    {if(param)
                      {var match=param[1],b=match[2],a=match[1];
                       extend(tail,a);
                       return loop(b)}
                     return close_exn(tail)}
                   return upon$1(caml_call1(f,b),_ym_)}
                 return loop(b)})}
    function of_list$0(l)
     {return create$19
              (function(tail)
                {function _yl_(x){return extend(tail,x)}
                 caml_call2(Core_kernel_List[9],l,_yl_);
                 return close_exn(tail)})}
    function to_list$12(s)
     {var _yk_=Core_kernel_List[34];
      return caml_call2
              (_id_,
               fold$12(s,0,function(b,a){return caml_call1(_ie_,[0,a,b])}),
               _yk_)}
    function copy_to_tail(t,tail)
     {return iter$11(t,function(a){return caml_call1(_ie_,extend(tail,a))})}
    function append(t1,t2)
     {return create$19
              (function(tail)
                {function _yi_(param)
                  {function _yj_(param){return close_exn(tail)}
                   return upon$1(copy_to_tail(t2,tail),_yj_)}
                 return upon$1(copy_to_tail(t1,tail),_yi_)})}
    function concat$1(t)
     {return create$19
              (function(tail)
                {function _yh_(param){return close_exn(tail)}
                 return upon$1
                         (iter$11(t,function(t){return copy_to_tail(t,tail)}),_yh_)})}
    function filter_deprecated(t,f)
     {return create$19
              (function(tail)
                {function _ye_(param){return close_exn(tail)}
                 return upon$1
                         (iter$11
                           (t,
                            function(a)
                             {function _yf_(param){return param?extend(tail,a):0}
                              var _yg_=caml_call1(_ie_,caml_call1(f,a));
                              return caml_call2(_if_[2],_yg_,_yf_)}),
                          _ye_)})}
    function filter_map_deprecated(t,f)
     {return create$19
              (function(tail)
                {function _yb_(param){return close_exn(tail)}
                 return upon$1
                         (iter$11
                           (t,
                            function(a)
                             {function _yc_(param)
                               {if(param){var v=param[1];return extend(tail,v)}return 0}
                              var _yd_=caml_call1(_ie_,caml_call1(f,a));
                              return caml_call2(_if_[2],_yd_,_yc_)}),
                          _yb_)})}
    function map$15(t,f)
     {return create$19
              (function(tail)
                {function _x__(param){return close_exn(tail)}
                 return upon$1
                         (iter$11
                           (t,
                            function(v)
                             {function _x$_(_ya_){return extend(tail,_ya_)}
                              return caml_call2(_id_,caml_call1(f,v),_x$_)}),
                          _x__)})}
    function map$16(t,f)
     {return map$15(t,function(a){return caml_call1(_ie_,caml_call1(f,a))})}
    function first_n(s,n)
     {return create$19
              (function(tail)
                {function loop(s,n)
                  {if(caml_call2(Core_kernel[87],n,0))return close_exn(tail);
                   function _x9_(param)
                    {if(param)
                      {var t=param[2],x=param[1];
                       extend(tail,x);
                       return loop(t,n - 1 | 0)}
                     return close_exn(tail)}
                   return upon$1(caml_call1(_iH_,s),_x9_)}
                 return loop(s,n)})}
    function available_now(t)
     {var t$0=t,ac=0;
      for(;;)
       {var match=peek$0(caml_call1(_iH_,t$0));
        if(match)
         {var _x8_=match[1];
          if(_x8_)
           {var t$1=_x8_[2],x=_x8_[1],ac$0=[0,x,ac],t$0=t$1,ac=ac$0;continue}}
        return [0,caml_call1(Core_kernel_List[34],ac),t$0]}}
    function split(opt,_x3_,t)
     {if(opt)var sth=opt[1],stop=sth;else var stop=never(0);
      if(_x3_)
       var sth$0=_x3_[1],f=sth$0;
      else
       var f=function(param){return 192584839};
      var reason_for_stopping=caml_call1(create$13,0),prefix=create$16(0);
      function finish(v){close_exn(prefix);return fill(reason_for_stopping,v)}
      function loop(t)
       {function _x4_(param)
         {if(typeof param === "number")return finish([0,280164845,t]);
          var o=param[2];
          if(o)
           {var t$0=o[2],a=o[1],match=caml_call1(f,a);
            if(typeof match === "number"){extend(prefix,a);return loop(t$0)}
            var b=match[2];
            return finish([0,398750242,[0,b,t$0]])}
          return finish(1144100)}
        var _x5_=0;
        function _x6_(o){return [0,870035731,o]}
        var _x7_=[0,[0,caml_call1(_iH_,t),_x6_],_x5_];
        return caml_call2
                (_ia_,
                 choose([0,[0,stop,function(param){return 280164845}],_x7_]),
                 _x4_)}
      loop(t);
      return [0,prefix[1],reason_for_stopping]}
    function find(t,f)
     {var
       match=
        split
         (0,
          [0,function(a){return caml_call1(f,a)?[0,398750242,a]:192584839}],
          t),
       found=match[2];
      function _x2_(x)
       {if(typeof x !== "number" && ! (398750242 <= x[1]))
         throw [0,Assert_failure,_iI_];
        return x}
      return caml_call2(_if_[2],found,_x2_)}
    function ungroup(t)
     {return create$19
              (function(tail)
                {function _x0_(param){return close_exn(tail)}
                 return upon$1
                         (iter$11
                           (t,
                            function(l)
                             {function _x1_(x){return extend(tail,x)}
                              caml_call2(Core_kernel_List[9],l,_x1_);
                              return caml_call1(_ie_,0)}),
                          _x0_)})}
    function interleave(ts)
     {return create$19
              (function(tail)
                {var num_open=[0,1];
                 function close(param)
                  {num_open[1] = num_open[1] - 1 | 0;
                   var _xZ_=caml_call2(Core_kernel[87],num_open[1],0);
                   return _xZ_?close_exn(tail):_xZ_}
                 var
                  outer_closed=
                   iter$11
                    (ts,
                     function(t)
                      {num_open[1] = num_open[1] + 1 | 0;
                       upon$1(copy_to_tail(t,tail),close);
                       return caml_call1(_ie_,0)});
                 return upon$1(outer_closed,close)})}
    function take_until(t,d)
     {return create$19
              (function(tail)
                {function loop(t)
                  {function _xU_(param)
                    {if(typeof param !== "number")
                      {var _xY_=param[2];
                       if(_xY_)
                        {var t=_xY_[2],x=_xY_[1];extend(tail,x);return loop(t)}}
                     return close_exn(tail)}
                   var _xV_=0;
                   function _xW_(z){return [0,870035731,z]}
                   var _xX_=[0,[0,caml_call1(_iH_,t),_xW_],_xV_];
                   return upon$1
                           (choose([0,[0,d,function(param){return 926227490}],_xX_]),
                            _xU_)}
                 return loop(t)})}
    function iter_durably(t,f)
     {return create$14
              (function(result)
                {function loop(t)
                  {function _xS_(param)
                    {if(param)
                      {var
                        t=param[2],
                        x=param[1],
                        _xT_=
                         function(z)
                          {loop(t);
                           if(0 === z[0])return 0;
                           var e=z[1];
                           return send_exn(current(0),0,e)};
                       return caml_call2
                               (_ia_,
                                try_with
                                 (0,0,0,0,0,_iJ_,function(param){return caml_call1(f,x)}),
                                _xT_)}
                     return fill(result,0)}
                   return caml_call2(_ia_,caml_call1(_iH_,t),_xS_)}
                 return loop(t)})}
    function iter_durably_report_end(t,f)
     {return create$14
              (function(result)
                {function loop(t)
                  {function _xR_(param)
                    {if(param)
                      {var t=param[2],x=param[1];loop(t);return caml_call1(f,x)}
                     return fill(result,0)}
                   return caml_call2(_ia_,caml_call1(_iH_,t),_xR_)}
                 return loop(t)})}
    function iter_durably$0(t,f){iter_durably_report_end(t,f);return 0}
    function of_fun(f)
     {return unfold
              (0,
               function(param)
                {function _xP_(a){return [0,[0,a,0]]}
                 var _xQ_=caml_call1(f,0);
                 return caml_call2(_if_[2],_xQ_,_xP_)})}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$79);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Async_stream$0);
    var
     Async_kernel_Async_stream=
      [0,
       _iG_,
       create$19,
       _iH_,
       first_exn,
       of_list$0,
       to_list$12,
       of_fun,
       copy_to_tail,
       append,
       concat$1,
       available_now,
       filter_deprecated,
       filter_map_deprecated,
       fold$12,
       fold$13,
       iter$11,
       closed,
       iter$12,
       take_until,
       iter_durably,
       iter_durably$0,
       iter_durably_report_end,
       length$3,
       map$15,
       map$16,
       first_n,
       unfold,
       split,
       find,
       ungroup,
       interleave];
    caml_register_global
     (1350,Async_kernel_Async_stream,"Async_kernel__Async_stream");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Synchronous_t$1);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$80);
    caml_call1(Expect_test_collector[4][1],cst_src_synchronous_time_sourc$1);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$81,cst$32);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$82);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Synchronous_t$2);
    var
     _iK_=Event$1[39],
     Async_kernel_Synchronous_time_=
      [0,
       [0,include$11[17]],
       Read_write,
       Time_source_id,
       sexp_of_t$25,
       invariant_with_jobs$0,
       invariant$3,
       id$3,
       length$1,
       read_only,
       create$11,
       alarm_precision,
       next_alarm_fires_at,
       is_wall_clock$1,
       now,
       timing_wheel_now$0,
       advance_by_alarms,
       advance_directly,
       run_at,
       run_after,
       run_at_intervals,
       max_allowed_alarm_time,
       [0,
        Event$1[16],
        Event$1[17],
        [0,
         _iK_[11],
         _iK_[5],
         _iK_[3],
         _iK_[4],
         _iK_[1],
         _iK_[2],
         _iK_[7],
         _iK_[8],
         _iK_[6],
         _iK_[9],
         _iK_[10],
         _iK_[12]],
        Event$1[23],
        Event$1[24],
        Event$1[26],
        Event$1[27],
        Event$1[28],
        Event$1[30],
        Event$1[29],
        Event$1[31],
        Event$1[33],
        Event$1[34],
        Event$1[35],
        Event$1[36],
        Event$1[37],
        Event$1[38]],
       default_timing_wheel_config$0,
       wall_clock,
       Expert];
    caml_register_global
     (1351,
      Async_kernel_Synchronous_time_,
      "Async_kernel__Synchronous_time_source");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Time_source_i);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$83);
    caml_call1(Expect_test_collector[4][1],cst_src_time_source_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$84,cst$33);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$85);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Time_source_i$0);
    var Async_kernel_Time_source_intf=[0];
    caml_register_global
     (1352,Async_kernel_Time_source_intf,"Async_kernel__Time_source_intf");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Bvar);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$86);
    caml_call1(Expect_test_collector[4][1],cst_src_bvar_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$87,cst$34);
    function ivar(r){return r[2]}
    function set_ivar(r,v){r[2] = v;return 0}
    function has_any_waiters(r){return r[1]}
    function set_has_any_waiters(r,v){r[1] = v;return 0}
    function _iL_(r,v){return [0,r[1],v]}
    var
     _iM_=[0,set_ivar],
     ivar$0=[0,function(param){return 0},cst_ivar,_iM_,ivar,_iL_];
    function _iN_(r,v){return [0,v,r[2]]}
    var
     _iO_=[0,set_has_any_waiters],
     has_any_waiters$0=
      [0,
       function(param){return 0},
       cst_has_any_waiters,
       _iO_,
       has_any_waiters,
       _iN_];
    function invariant$11(invariant_a,param,t)
     {var repr=caml_call1(Bvar[2],t);
      function _xM_(param)
       {function check(f){return caml_call2(include$9[2],repr,f)}
        var
         ivar_fun=
          check
           (function(ivar)
             {invariant$7(invariant_a,ivar);
              if(is_empty(ivar))return 0;
              throw [0,Assert_failure,_iR_]}),
         has_any_waiters_fun=
          check
           (function(has_any_waiters)
             {var _xO_=has_handlers(repr[2]);
              if(_xO_)
               {if(has_any_waiters)return 0;throw [0,Assert_failure,_iS_]}
              return _xO_});
        caml_call1(has_any_waiters_fun,has_any_waiters$0);
        return caml_call1(ivar_fun,ivar$0)}
      function of_a(param){return _iT_}
      function _xN_(param)
       {var
         v_has_any_waiters=param[1],
         v_ivar=param[2],
         arg=sexp_of_t$35(of_a,v_ivar),
         bnds=[0,[1,[0,_iP_,[0,arg,0]]],0],
         arg$0=caml_call1(Core_kernel[289],v_has_any_waiters),
         bnds$0=[0,[1,[0,_iQ_,[0,arg$0,0]]],bnds];
        return [1,bnds$0]}
      return caml_call4(include$9[1],_iU_,repr,_xN_,_xM_)}
    function sexp_of_t$40(param,_xL_,t)
     {var match=caml_call1(Bvar[2],t),has_any_waiters=match[1];
      return [1,[0,_iV_,[0,caml_call1(Core_kernel[289],has_any_waiters),0]]]}
    var _iW_=Bvar$0[1];
    function broadcast(t,a)
     {var
       repr=caml_call1(Bvar[2],t),
       _xJ_=repr[1],
       _xK_=
        _xJ_
         ?(repr[1] = 0,fill(repr[2],a),repr[2] = caml_call1(create$13,0),0)
         :_xJ_;
      return _xK_}
    function wait(t)
     {var repr=caml_call1(Bvar[2],t);repr[1] = 1;return repr[2]}
    function has_any_waiters$1(t)
     {var repr=caml_call1(Bvar[2],t);return repr[1]}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$88);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Bvar$0);
    var
     Async_kernel_Bvar=
      [0,sexp_of_t$40,invariant$11,_iW_,wait,broadcast,has_any_waiters$1];
    caml_register_global(1353,Async_kernel_Bvar,"Async_kernel__Bvar");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Time_source);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$89);
    caml_call1(Expect_test_collector[4][1],cst_src_time_source_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$90,cst$35);
    var
     Job_or_event$1=include$11[2],
     invariant_with_jobs$1=include$11[20],
     invariant$12=include$11[21];
    function sexp_of_t$41(param,_xE_)
     {var events=_xE_[4],is_wall_clock=_xE_[8];
      if(is_wall_clock)
       return caml_call1(Sexplib0_Sexp_conv[7],cst_wall_clock$0);
      var _xF_=0,_xG_=0;
      function _xH_(param){return _iX_}
      var
       _xI_=
        [0,[1,[0,_iY_,[0,caml_call2(Timing_wheel[2],_xH_,events),_xG_]]],_xF_];
      return [1,
              [0,
               [1,[0,_iZ_,[0,caml_call1(Core_kernel[289],is_wall_clock),0]]],
               _xI_]]}
    function sexp_of_t$42(v){return sexp_of_t$41(Core_kernel[187],v)}
    var Read_write$0=[0,sexp_of_t$42,invariant$12,invariant_with_jobs$1];
    function sexp_of_t$43(v){return sexp_of_t$41(Core_kernel[156],v)}
    function read_only$0(t){return t}
    function alarm_precision$0(t){return caml_call1(Timing_wheel[10],t[4])}
    function next_alarm_fires_at$0(t)
     {return caml_call1(Timing_wheel[36],t[4])}
    function timing_wheel_now$1(t){return caml_call1(Timing_wheel[11],t[4])}
    function id$4(t){return t[1]}
    function now$0(t){return t[8]?caml_call1(_ah_,0):timing_wheel_now$1(t)}
    var send_exn$0=[0,send_exn];
    function advance(t,to){return advance_clock(t,to,send_exn$0)}
    function advance_by(t,by){return advance(t,after(now$0(t),by))}
    function fire_past_alarms$0(t){return fire_past_alarms(t,send_exn$0)}
    function advance_by_alarms$0(wait_for,t,to)
     {function run_queued_alarms(param)
       {if(wait_for){var f=wait_for[1];return caml_call1(f,0)}
        return wait(t[9][22])}
      function finish(param)
       {advance(t,to);fire_past_alarms$0(t);return run_queued_alarms(0)}
      function walk_alarms(param)
       {for(;;)
         {var match=next_alarm_fires_at$0(t);
          if(match)
           {var next_alarm_fires_at=match[1];
            if(caml_call2(_o_,next_alarm_fires_at,to))return finish(0);
            advance(t,next_alarm_fires_at);
            var queued_alarms_ran=run_queued_alarms(0);
            if(is_determined(queued_alarms_ran))continue;
            var _xD_=function(param){return walk_alarms(0)};
            return caml_call2(_if_[1],queued_alarms_ran,_xD_)}
          return finish(0)}}
      function _xB_(param){return walk_alarms(0)}
      var _xC_=run_queued_alarms(0);
      return caml_call2(_if_[1],_xC_,_xB_)}
    function advance_by_alarms_by(wait_for,t,by)
     {return advance_by_alarms$0(wait_for,t,after(now$0(t),by))}
    function span_to_time(t,span){return after(now$0(t),span)}
    function run_at_internal(t,time,f$0,a)
     {var execution_context=current_execution_context$1(t[9]);
      if(caml_call2(_r_,time,caml_call1(Timing_wheel[11],t[4])))
       {var
         _xy_=create_job(t[9],execution_context,f$0,a),
         _xz_=caml_call1(Job_or_event$1[2],_xy_),
         alarm=caml_call3(Timing_wheel[25],t[4],time,_xz_),
         _xA_=t[9][21];
        if(_xA_){var f=_xA_[1];caml_call1(f,time)}
        return alarm}
      enqueue$0(t[9],execution_context,f$0,a);
      return caml_call1(Timing_wheel[5][2],0)}
    function run_at$0(t,time,f,a){run_at_internal(t,time,f,a);return 0}
    function run_after$0(t,span,f,a)
     {return run_at$0(t,span_to_time(t,span),f,a)}
    function fill$1(result){return fill(result,0)}
    function at$3(t,time)
     {if(caml_call2(_p_,time,caml_call1(Timing_wheel[11],t[4])))
       return caml_call1(_ie_,0);
      var result=caml_call1(create$13,0);
      run_at_internal(t,time,fill$1,result);
      return result}
    function after$1(t,span){return at$3(t,span_to_time(t,span))}
    function remove_alarm(t,alarm)
     {var
       job_or_event=caml_call2(Timing_wheel[5][5],t[4],alarm),
       match=caml_call1(Job_or_event$1[5][1],job_or_event),
       k=match[1],
       match$0=caml_call2(Job_or_event$1[5][2],k,job_or_event);
      if(k)
       {free_job(t[9],match$0);return caml_call2(Timing_wheel[28],t[4],alarm)}
      throw [0,Assert_failure,_i0_]}
    function sexp_of_t$44(of_a,of_h,param)
     {if(0 === param[0])
       {var v0=param[1],v0$0=caml_call1(of_a,v0);
        return [1,[0,_i1_,[0,v0$0,0]]]}
      var v0$1=param[1],v0$2=caml_call1(of_h,v0$1);
      return [1,[0,_i2_,[0,v0$2,0]]]}
    var Fired=[0,sexp_of_t$44];
    function scheduled_at(r){return r[5]}
    function set_scheduled_at(r,v){r[5] = v;return 0}
    function num_fires_to_skip(r){return r[4]}
    function set_num_fires_to_skip(r,v){r[4] = v;return 0}
    function fired(r){return r[3]}
    function alarm$2(r){return r[1]}
    function set_alarm$1(r,v){r[1] = v;return 0}
    function _i3_(r,v){return [0,r[1],r[2],r[3],r[4],v,r[6]]}
    var
     _i4_=[0,set_scheduled_at],
     scheduled_at$0=
      [0,function(param){return 0},cst_scheduled_at,_i4_,scheduled_at,_i3_];
    function _i5_(r,v){return [0,r[1],r[2],r[3],v,r[5],r[6]]}
    var
     _i6_=[0,set_num_fires_to_skip],
     num_fires_to_skip$0=
      [0,
       function(param){return 0},
       cst_num_fires_to_skip,
       _i6_,
       num_fires_to_skip,
       _i5_];
    function _i7_(r,v){return [0,r[1],r[2],v,r[4],r[5],r[6]]}
    var
     _i8_=0,
     fired$0=[0,function(param){return 0},cst_fired,_i8_,fired,_i7_];
    function _i9_(r,v){return [0,v,r[2],r[3],r[4],r[5],r[6]]}
    var
     _i__=[0,set_alarm$1],
     alarm$3=[0,function(param){return 0},cst_alarm$0,_i__,alarm$2,_i9_];
    function sexp_of_t$45(of_a,of_h,param)
     {var
       v_alarm=param[1],
       v_fired=param[3],
       v_num_fires_to_skip=param[4],
       v_scheduled_at=param[5],
       v_time_source=param[6],
       arg=sexp_of_t$25(v_time_source),
       bnds=[0,[1,[0,_i$_,[0,arg,0]]],0],
       arg$0=caml_call1(_aI_,v_scheduled_at),
       bnds$0=[0,[1,[0,_ja_,[0,arg$0,0]]],bnds],
       arg$1=caml_call1(Core_kernel[340],v_num_fires_to_skip),
       bnds$1=[0,[1,[0,_jb_,[0,arg$1,0]]],bnds$0],
       arg$2=sexp_of_t$35(caml_call2(Fired[1],of_a,of_h),v_fired),
       bnds$2=[0,[1,[0,_jc_,[0,arg$2,0]]],bnds$1];
      function _xw_(_xx_){return 0}
      var
       arg$3=caml_call1(Sexplib0_Sexp_conv[24],_xw_),
       bnds$3=[0,[1,[0,_jd_,[0,arg$3,0]]],bnds$2],
       arg$4=caml_call2(Timing_wheel[5][1],Job_or_event$1[6],v_alarm),
       bnds$4=[0,[1,[0,_je_,[0,arg$4,0]]],bnds$3];
      return [1,bnds$4]}
    function sexp_of_t_unit(v)
     {return sexp_of_t$45(Core_kernel[502],Core_kernel[502],v)}
    function fired$1(t){return t[3]}
    function invariant$13(invariant_a,invariant_h,t)
     {function _xn_(param)
       {var events=t[6][4];
        function check(f){return caml_call2(include$9[2],t,f)}
        var
         scheduled_at_fun=
          check
           (function(got)
             {var _xv_=caml_call2(Timing_wheel[27],events,t[1]);
              if(_xv_)
               {var
                 expect=caml_call2(Timing_wheel[5][3],events,t[1]),
                 equal=0,
                 message=0,
                 here=0,
                 comparator=
                  function(a_001,b_002){return caml_call2(_v_,a_001,b_002)};
                return caml_call8
                        (Ppx_assert_lib_Runtime[3],
                         pos$2,
                         _aI_,
                         comparator,
                         here,
                         message,
                         equal,
                         expect,
                         got)}
              return _xv_}),
         num_fires_to_skip_fun=
          check
           (function(num_fires_to_skip)
             {if(caml_call2(symbol$0,num_fires_to_skip,0))return 0;
              throw [0,Assert_failure,_jf_]}),
         fired_fun=
          check
           (function(fired)
             {var match=peek$0(fired);
              if(match)
               {var _xu_=match[1];
                if(0 === _xu_[0])
                 {var a=_xu_[1];return caml_call1(invariant_a,a)}
                var h=_xu_[1];
                return caml_call1(invariant_h,h)}
              return 0}),
         alarm_fun=
          check
           (function(alarm)
             {if(is_full(t[3]))
               {if(caml_call2(Timing_wheel[27],events,alarm))
                 throw [0,Assert_failure,_jg_];
                return 0}
              var _xs_=caml_call2(Timing_wheel[27],events,alarm);
              if(_xs_)
               {var _xt_=caml_call2(Timing_wheel[5][5],events,alarm);
                if(caml_call1(Job_or_event$1[4],_xt_))return 0;
                throw [0,Assert_failure,_jh_]}
              return _xs_});
        caml_call1(alarm_fun,alarm$3);
        caml_call1(fired_fun,fired$0);
        caml_call1(num_fires_to_skip_fun,num_fires_to_skip$0);
        caml_call1(scheduled_at_fun,scheduled_at$0);
        return 0}
      function _xo_(param){return _ji_}
      function _xp_(param){return _jj_}
      function _xq_(_xr_){return sexp_of_t$45(_xp_,_xo_,_xr_)}
      return caml_call4(include$9[1],_jk_,t,_xq_,_xn_)}
    function sexp_of_t$46(of_a,of_h,param)
     {switch(param[0])
       {case 0:
         var v0=param[1],v0$0=caml_call1(of_a,v0);
         return [1,[0,_jl_,[0,v0$0,0]]];
        case 1:
         var v0$1=param[1],v0$2=caml_call1(of_h,v0$1);
         return [1,[0,_jm_,[0,v0$2,0]]];
        default:
         var v0$3=param[1],v0$4=caml_call1(_aI_,v0$3);
         return [1,[0,_jn_,[0,v0$4,0]]]}}
    var Status$1=[0,sexp_of_t$46];
    function status$2(t)
     {var match=peek$0(t[3]);
      if(match)
       {var _xm_=match[1];
        if(0 === _xm_[0]){var a=_xm_[1];return [0,a]}
        var h=_xm_[1];
        return [1,h]}
      return [2,t[5]]}
    function sexp_of_t$47(of_a,of_h,param)
     {if(typeof param === "number")
       return _jo_;
      else
       {if(0 === param[0])
         {var v0=param[1],v0$0=caml_call1(of_a,v0);
          return [1,[0,_jp_,[0,v0$0,0]]]}
        var v0$1=param[1],v0$2=caml_call1(of_h,v0$1);
        return [1,[0,_jq_,[0,v0$2,0]]]}}
    var Abort_result$0=[0,sexp_of_t$47];
    function abort$0(t,a)
     {if(_cF_)
       {var
         _xg_=function(param){return _jr_},
         _xh_=function(param){return _js_};
        log
         (cst_Time_source_Event_abort,
          t,
          function(_xl_){return sexp_of_t$45(_xh_,_xg_,_xl_)})}
      var match=peek$0(t[3]);
      if(match)
       {var _xi_=match[1];
        if(0 === _xi_[0]){var a$0=_xi_[1];return [0,a$0]}
        var h=_xi_[1];
        return [1,h]}
      fill(t[3],[0,a]);
      var _xj_=t[1],_xk_=t[6];
      if(caml_call2(Timing_wheel[27],_xk_[4],_xj_))remove_alarm(_xk_,_xj_);
      return 0}
    function abort_exn$0(t,a)
     {var match=abort$0(t,a);
      if(typeof match === "number")
       return 0;
      else
       {if(0 === match[0])
         {var
           _xe_=
            caml_call1(Sexplib0_Sexp_conv[7],cst_Clock_Event_abort_exn_fail);
          return caml_call1(Core_kernel[238],_xe_)}
        var
         _xf_=
          caml_call1(Sexplib0_Sexp_conv[7],cst_Clock_Event_abort_exn_fail$0);
        return caml_call1(Core_kernel[238],_xf_)}}
    function abort_if_possible$0(t,a){abort$0(t,a);return 0}
    function schedule$2(t){t[1] = run_at_internal(t[6],t[5],t[2],0);return 0}
    function sexp_of_t$48(of_a,of_h,param)
     {if(typeof param === "number")
       return _jt_;
      else
       {if(0 === param[0])
         {var v0=param[1],v0$0=caml_call1(of_a,v0);
          return [1,[0,_ju_,[0,v0$0,0]]]}
        var v0$1=param[1],v0$2=caml_call1(of_h,v0$1);
        return [1,[0,_jv_,[0,v0$2,0]]]}}
    var Reschedule_result$0=[0,sexp_of_t$48];
    function reschedule_at$0(t,at)
     {if(_cF_)
       log
        (cst_Time_source_Event_reschedu,
         [0,t,at],
         function(param)
          {var v1=param[2],v0=param[1];
           function _xd_(param){return _jw_}
           var
            v0$0=sexp_of_t$45(function(param){return _jx_},_xd_,v0),
            v1$0=caml_call1(_aI_,v1);
           return [1,[0,v0$0,[0,v1$0,0]]]});
      var match=peek$0(t[3]);
      if(match)
       {var _xc_=match[1];
        if(0 === _xc_[0]){var a=_xc_[1];return [0,a]}
        var h=_xc_[1];
        return [1,h]}
      var
       events=t[6][4],
       is_in_timing_wheel=caml_call2(Timing_wheel[27],events,t[1]),
       am_trying_to_reschedule_in_the=
        caml_call2(_r_,at,caml_call1(Timing_wheel[11],events));
      t[5] = at;
      if(am_trying_to_reschedule_in_the)
       if(is_in_timing_wheel)
        caml_call3(Timing_wheel[29],events,t[1],at);
       else
        {t[4] = t[4] + 1 | 0;schedule$2(t)}
      else
       if(is_in_timing_wheel)
        {caml_call1(t[6][7],t[1]);caml_call2(Timing_wheel[28],events,t[1])}
      return 0}
    function reschedule_after$0(t,span)
     {return reschedule_at$0(t,span_to_time(t[6],span))}
    function run_at$1(time_source,scheduled_at,f,z)
     {if(_cF_)log(cst_Time_source_Event_run_at,scheduled_at,_aI_);
      var _w7_=0,_w8_=caml_call1(create$13,0);
      function _w9_(_xb_){return 0}
      var
       t=
        [0,
         caml_call1(Timing_wheel[5][2],0),
         _w9_,
         _w8_,
         _w7_,
         scheduled_at,
         time_source];
      function fire(param)
       {var _w__=is_empty(t[3]);
        if(_w__)
         {if(caml_call2(symbol$3,t[4],0)){t[4] = t[4] - 1 | 0;return 0}
          var result=caml_call1(f,z),_w$_=is_empty(t[3]);
          if(_w$_)return fill(t[3],[1,result]);
          var _xa_=_w$_}
        else
         var _xa_=_w__;
        return _xa_}
      t[2] = fire;
      schedule$2(t);
      return t}
    function at$4(time_source,time)
     {var _w5_=0;
      return run_at$1(time_source,time,function(_w6_){return 0},_w5_)}
    function run_after$1(time_source,span,f,a)
     {return run_at$1(time_source,span_to_time(time_source,span),f,a)}
    function after$2(time_source,span)
     {return at$4(time_source,span_to_time(time_source,span))}
    function at_times(opt,t,next_time)
     {if(opt)var sth=opt[1],stop=sth;else var stop=never(0);
      var tail=create$16(0);
      function loop(param)
       {function _w1_(param)
         {return 936767357 <= param?(extend(tail,0),loop(0)):close_exn(tail)}
        var _w2_=0;
        function _w3_(param){return 936767357}
        var _w4_=[0,[0,at$3(t,caml_call1(next_time,0)),_w3_],_w2_];
        return upon$1
                (choose([0,[0,stop,function(param){return 926227490}],_w4_]),
                 _w1_)}
      loop(0);
      return tail[1]}
    function at_varying_intervals(stop,t,compute_span)
     {return at_times
              (stop,
               t,
               function(param)
                {var _w0_=caml_call1(compute_span,0);
                 return after(now$0(t),_w0_)})}
    function at_intervals$0(start,stop,t,interval)
     {if(start)var x=start[1],start$0=x;else var start$0=now$0(t);
      return at_times
              (stop,
               t,
               function(param)
                {return caml_call5(_aw_,0,start$0,now$0(t),interval,0)})}
    var immediately=0;
    function run_repeatedly(opt,stop,_wW_,_wV_,t,f,continue$0)
     {if(opt)var sth=opt[1],start=sth;else var start=caml_call1(_ie_,0);
      if(_wW_)
       var sth$0=_wW_[1],continue_on_error=sth$0;
      else
       var continue_on_error=1;
      if(_wV_)
       var sth$1=_wV_[1],finished=sth$1;
      else
       var finished=caml_call1(create$13,0);
      return upon$1
              (start,
               function(param)
                {var alarm=[0,caml_call1(Timing_wheel[5][2],0)];
                 if(stop)
                  {var stop$0=stop[1];
                   upon$1
                    (stop$0,
                     function(param)
                      {var _wZ_=caml_call2(Timing_wheel[27],t[4],alarm[1]);
                       return _wZ_
                               ?(remove_alarm(t,alarm[1]),fill_if_empty(finished,0))
                               :_wZ_});
                   var stop$1=stop$0}
                 else
                  var stop$1=never(0);
                 function continue_f(param)
                  {if(is_determined(stop$1))return fill_if_empty(finished,0);
                   var _wX_=0;
                   if(typeof continue$0 === "number")
                    var _wY_=caml_call1(Timing_wheel[11],t[4]);
                   else
                    if(0 === continue$0[0])
                     var span=continue$0[1],_wY_=span_to_time(t,span);
                    else
                     var
                      interval=continue$0[2],
                      base=continue$0[1],
                      _wY_=caml_call5(_aw_,0,base,now$0(t),interval,0);
                   alarm[1] = run_at_internal(t,_wY_,run_f,_wX_);
                   return 0}
                 function run_f(param)
                  {if(is_determined(stop$1))return fill_if_empty(finished,0);
                   if(continue_on_error)
                    return upon$1
                            (try_with(0,0,0,0,_jz_,_jy_,f),continue_try_with);
                   var d=caml_call1(f,0);
                   return is_determined(d)?continue_f(0):upon$1(d,continue_f)}
                 function continue_try_with(or_error)
                  {if(0 !== or_error[0])
                    {var error=or_error[1];send_exn(current(0),0,error)}
                   return continue_f(0)}
                 return run_f(0)})}
    function every(start,stop,continue_on_error,finished,t,span,f)
     {if(caml_call2(_a_[15],span,_a_[74]))
       {var
         _wT_=[0,[1,[0,_jA_,[0,caml_call1(_a_[10],span),0]]],0],
         _wU_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Time_source_every_got_nonp),
            _wT_]];
        caml_call1(Core_kernel[238],_wU_)}
      return run_repeatedly
              (start,stop,continue_on_error,finished,t,f,[0,span])}
    function every$0(start,stop,continue_on_error,t,span,f)
     {return every
              (start,
               stop,
               continue_on_error,
               0,
               t,
               span,
               function(param){caml_call1(f,0);return caml_call1(_ie_,0)})}
    function run_at_intervals$0(start,stop,continue_on_error,t,interval,f)
     {var now=now$0(t);
      if(start)
       var
        start$0=start[1],
        start$1=[0,at$3(t,caml_call5(_aw_,_jB_,start$0,now,interval,0))],
        base=start$0;
      else
       var start$1=0,base=now;
      return run_repeatedly
              (start$1,stop,continue_on_error,0,t,f,[1,base,interval])}
    function run_at_intervals$1(start,stop,continue_on_error,t,interval,f)
     {return run_at_intervals$0
              (start,
               stop,
               continue_on_error,
               t,
               interval,
               function(param){caml_call1(f,0);return caml_call1(_ie_,0)})}
    function with_timeout(t,span,d)
     {var timeout=after$2(t,span),_wO_=0;
      function _wP_(param)
       {if(0 === param[0])
         {var
           _wS_=
            caml_call1(Sexplib0_Sexp_conv[7],cst_Time_source_with_timeout_b);
          return caml_call1(Core_kernel[238],_wS_)}
        return 642269825}
      var _wQ_=[0,[0,timeout[3],_wP_],_wO_];
      return choose
              ([0,
                [0,
                 d,
                 function(v)
                  {var match=abort$0(timeout,0),switch$0=0;
                   if(typeof match !== "number" && 0 === match[0])
                    {var
                      _wR_=
                       caml_call1
                        (Sexplib0_Sexp_conv[7],cst_Time_source_with_timeout_b$0);
                     caml_call1(Core_kernel[238],_wR_);
                     switch$0 = 1}
                   return [0,1025039613,v]}],
                _wQ_])}
    function of_synchronous(t){return t}
    function to_synchronous(t){return t}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$91);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Time_source$0);
    var
     include$23=
      [0,
       sexp_of_t$45,
       sexp_of_t_unit,
       invariant$13,
       scheduled_at,
       Status$1,
       status$2,
       run_at$1,
       run_after$1,
       Abort_result$0,
       abort$0,
       abort_exn$0,
       abort_if_possible$0,
       Fired,
       fired$1,
       Reschedule_result$0,
       reschedule_at$0,
       reschedule_after$0,
       at$4,
       after$2],
     Async_kernel_Time_source=
      [0,
       [0,sexp_of_t$41],
       Read_write$0,
       Time_source_id,
       sexp_of_t$43,
       id$4,
       invariant$12,
       invariant_with_jobs$1,
       read_only$0,
       create$11,
       wall_clock,
       alarm_precision$0,
       next_alarm_fires_at$0,
       now$0,
       timing_wheel_now$1,
       advance,
       advance,
       advance_by,
       advance_by,
       fire_past_alarms$0,
       advance_by_alarms$0,
       advance_by_alarms_by,
       [0,immediately],
       run_repeatedly,
       run_at$0,
       run_after$0,
       at$3,
       after$1,
       with_timeout,
       include$23,
       at_varying_intervals,
       at_intervals$0,
       every,
       every$0,
       run_at_intervals$0,
       run_at_intervals$1,
       of_synchronous,
       to_synchronous];
    caml_register_global
     (1354,Async_kernel_Time_source,"Async_kernel__Time_source");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Stack_or_coun);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$92);
    caml_call1(Expect_test_collector[4][1],cst_src_stack_or_counter_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$93,cst$36);
    function sexp_of_t$49(of_v_x_001,param)
     {if(0 === param[0])
       {var v0=param[1],v0$0=caml_call2(Base_Stack[2],of_v_x_001,v0);
        return [1,[0,_jC_,[0,v0$0,0]]]}
      var
       v_length=param[1],
       arg=caml_call1(Base[120],v_length),
       bnds=[0,[1,[0,_jD_,[0,arg,0]]],0];
      return [1,[0,_jE_,bnds]]}
    function of_list$1(list){return [0,caml_call1(Base_Stack[21],list)]}
    function create_counter(length)
     {if(caml_call2(Base[199],length,0))
       {var
         _wM_=[0,[1,[0,_jF_,[0,caml_call1(Base[120],length),0]]],0],
         _wN_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Stack_or_counter_create_co),
            _wM_]];
        caml_call1(Base[222],_wN_)}
      return [1,length]}
    function length$4(t)
     {if(0 === t[0]){var s=t[1];return caml_call1(Base_Stack[5],s)}
      return t[1]}
    function clear$0(t)
     {if(0 === t[0]){var s=t[1];return caml_call1(Base_Stack[29],s)}
      t[1] = 0;
      return 0}
    function push(r,a)
     {if(0 === r[0]){var s=r[1];return caml_call2(Base_Stack[24],s,a)}
      r[1] = caml_call2(Base[180],r[1],1);
      return 0}
    function pop_exn(r)
     {if(0 === r[0]){var s=r[1];return caml_call1(Base_Stack[26],s)}
      if(caml_call2(Base[202],r[1],0))
       {var
         _wL_=
          caml_call1(Sexplib0_Sexp_conv[7],cst_Stack_or_counter_pop_exn_o);
        caml_call1(Base[222],_wL_)}
      r[1] = caml_call2(Base[181],r[1],1);
      return 0}
    function iter$13(t,f)
     {if(0 === t[0]){var s=t[1];return caml_call2(Base_Stack[7],s,f)}
      var _wJ_=t[1],_wI_=1;
      if(! (_wJ_ < 1))
       {var for$0=_wI_;
        for(;;)
         {caml_call1(f,0);
          var _wK_=for$0 + 1 | 0;
          if(_wJ_ !== for$0){var for$0=_wK_;continue}
          break}}
      return 0}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$94);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Stack_or_coun$0);
    var
     Async_kernel_Stack_or_counter=
      [0,
       sexp_of_t$49,
       clear$0,
       create_counter,
       iter$13,
       length$4,
       of_list$1,
       pop_exn,
       push];
    caml_register_global
     (1357,Async_kernel_Stack_or_counter,"Async_kernel__Stack_or_counter");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Throttle);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$95);
    caml_call1(Expect_test_collector[4][1],cst_src_throttle_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$96,cst$37);
    function sexp_of_outcome(of_a,param)
     {if(typeof param === "number")return _jG_;
      if(17724 <= param[1])
       {var v0=param[2];return [1,[0,_jH_,[0,caml_call1(of_a,v0),0]]]}
      var v0$0=param[2];
      return [1,[0,_jI_,[0,caml_call1(Core_kernel[521],v0$0),0]]]}
    function abort$1(t){return fill(t[1],774323088)}
    function cleaned(r){return r[10]}
    function num_resources_not_cleaned(r){return r[9]}
    function set_num_resources_not_cleaned(r,v){r[9] = v;return 0}
    function cleans(r){return r[8]}
    function set_cleans(r,v){r[8] = v;return 0}
    function is_dead$0(r){return r[7]}
    function set_is_dead(r,v){r[7] = v;return 0}
    function capacity_available(r){return r[6]}
    function set_capacity_available(r,v){r[6] = v;return 0}
    function num_jobs_running(r){return r[5]}
    function set_num_jobs_running(r,v){r[5] = v;return 0}
    function jobs_waiting_to_start(r){return r[4]}
    function job_resources_not_in_use(r){return r[3]}
    function max_concurrent_jobs(r){return r[2]}
    function continue_on_error(r){return r[1]}
    function _jR_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],v]}
    var
     _jS_=0,
     cleaned$0=[0,function(param){return 0},cst_cleaned,_jS_,cleaned,_jR_];
    function _jT_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],v,r[10]]}
    var
     _jU_=[0,set_num_resources_not_cleaned],
     num_resources_not_cleaned$0=
      [0,
       function(param){return 0},
       cst_num_resources_not_cleaned,
       _jU_,
       num_resources_not_cleaned,
       _jT_];
    function _jV_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],v,r[9],r[10]]}
    var
     _jW_=[0,set_cleans],
     cleans$0=[0,function(param){return 0},cst_cleans,_jW_,cleans,_jV_];
    function _jX_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],v,r[8],r[9],r[10]]}
    var
     _jY_=[0,set_is_dead],
     is_dead$1=[0,function(param){return 0},cst_is_dead,_jY_,is_dead$0,_jX_];
    function _jZ_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],v,r[7],r[8],r[9],r[10]]}
    var
     _j0_=[0,set_capacity_available],
     capacity_available$0=
      [0,
       function(param){return 0},
       cst_capacity_available,
       _j0_,
       capacity_available,
       _jZ_];
    function _j1_(r,v)
     {return [0,r[1],r[2],r[3],r[4],v,r[6],r[7],r[8],r[9],r[10]]}
    var
     _j2_=[0,set_num_jobs_running],
     num_jobs_running$0=
      [0,
       function(param){return 0},
       cst_num_jobs_running,
       _j2_,
       num_jobs_running,
       _j1_];
    function _j3_(r,v)
     {return [0,r[1],r[2],r[3],v,r[5],r[6],r[7],r[8],r[9],r[10]]}
    var
     _j4_=0,
     jobs_waiting_to_start$0=
      [0,
       function(param){return 0},
       cst_jobs_waiting_to_start,
       _j4_,
       jobs_waiting_to_start,
       _j3_];
    function _j5_(r,v)
     {return [0,r[1],r[2],v,r[4],r[5],r[6],r[7],r[8],r[9],r[10]]}
    var
     _j6_=0,
     job_resources_not_in_use$0=
      [0,
       function(param){return 0},
       cst_job_resources_not_in_use,
       _j6_,
       job_resources_not_in_use,
       _j5_];
    function _j7_(r,v)
     {return [0,r[1],v,r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10]]}
    var
     _j8_=0,
     max_concurrent_jobs$0=
      [0,
       function(param){return 0},
       cst_max_concurrent_jobs,
       _j8_,
       max_concurrent_jobs,
       _j7_];
    function _j9_(r,v)
     {return [0,v,r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10]]}
    var
     _j__=0,
     continue_on_error$0=
      [0,
       function(param){return 0},
       cst_continue_on_error,
       _j__,
       continue_on_error,
       _j9_];
    function iter$14
     (continue_on_error_fun,
      max_concurrent_jobs_fun,
      job_resources_not_in_use_fun,
      jobs_waiting_to_start_fun,
      num_jobs_running_fun,
      capacity_available_fun,
      is_dead_fun,
      cleans_fun,
      num_resources_not_cleaned_fun,
      cleaned_fun)
     {caml_call1(continue_on_error_fun,continue_on_error$0);
      caml_call1(max_concurrent_jobs_fun,max_concurrent_jobs$0);
      caml_call1(job_resources_not_in_use_fun,job_resources_not_in_use$0);
      caml_call1(jobs_waiting_to_start_fun,jobs_waiting_to_start$0);
      caml_call1(num_jobs_running_fun,num_jobs_running$0);
      caml_call1(capacity_available_fun,capacity_available$0);
      caml_call1(is_dead_fun,is_dead$1);
      caml_call1(cleans_fun,cleans$0);
      caml_call1(num_resources_not_cleaned_fun,num_resources_not_cleaned$0);
      return caml_call1(cleaned_fun,cleaned$0)}
    function sexp_of_t$50(of_a,param)
     {var
       v_jobs_waiting_to_start=param[4],
       v_job_resources_not_in_use=param[3],
       v_max_concurrent_jobs=param[2],
       v_continue_on_error=param[1],
       v_num_jobs_running=param[5],
       v_capacity_available=param[6],
       v_is_dead=param[7],
       v_cleans=param[8],
       v_num_resources_not_cleaned=param[9],
       v_cleaned=param[10],
       arg=sexp_of_t$35(Core_kernel[502],v_cleaned),
       bnds=[0,[1,[0,_j$_,[0,arg,0]]],0],
       arg$0=caml_call1(Core_kernel[340],v_num_resources_not_cleaned),
       bnds$0=[0,[1,[0,_ka_,[0,arg$0,0]]],bnds];
      function _wB_(f)
       {function _wG_(_wH_){return 0}
        return caml_call1(Sexplib0_Sexp_conv[24],_wG_)}
      var
       arg$1=caml_call2(Core_kernel[405],_wB_,v_cleans),
       bnds$1=[0,[1,[0,_kb_,[0,arg$1,0]]],bnds$0],
       arg$2=caml_call1(Core_kernel[289],v_is_dead),
       bnds$2=[0,[1,[0,_kc_,[0,arg$2,0]]],bnds$1],
       _wC_=Core_kernel[502];
      function _wD_(_wF_){return sexp_of_t$35(_wC_,_wF_)}
      var
       arg$3=caml_call2(Core_kernel[438],_wD_,v_capacity_available),
       bnds$3=[0,[1,[0,_kd_,[0,arg$3,0]]],bnds$2],
       arg$4=caml_call1(Core_kernel[340],v_num_jobs_running),
       bnds$4=[0,[1,[0,_ke_,[0,arg$4,0]]],bnds$3];
      function _wE_(param)
       {var
         v_outcome=param[2],
         v_start=param[1],
         bnds=0,
         arg=
          sexp_of_t$36
           (function(param)
             {return -216426513 === param?_jJ_:17724 <= param?_jK_:_jL_},
            v_outcome),
         bnds$0=[0,[1,[0,_jM_,[0,arg,0]]],bnds],
         arg$0=
          sexp_of_t$35
           (function(param)
             {if(typeof param === "number")return _jN_;
              var v0=param[2];
              return [1,[0,_jO_,[0,caml_call1(of_a,v0),0]]]},
            v_start),
         bnds$1=[0,[1,[0,_jP_,[0,arg$0,0]]],bnds$0];
        return [1,bnds$1]}
      var
       arg$5=caml_call2(Core_kernel_Queue[11],_wE_,v_jobs_waiting_to_start),
       bnds$5=[0,[1,[0,_kf_,[0,arg$5,0]]],bnds$4],
       arg$6=sexp_of_t$49(of_a,v_job_resources_not_in_use),
       bnds$6=[0,[1,[0,_kg_,[0,arg$6,0]]],bnds$5],
       arg$7=caml_call1(Core_kernel[340],v_max_concurrent_jobs),
       bnds$7=[0,[1,[0,_kh_,[0,arg$7,0]]],bnds$6],
       arg$8=caml_call1(Core_kernel[289],v_continue_on_error),
       bnds$8=[0,[1,[0,_ki_,[0,arg$8,0]]],bnds$7];
      return [1,bnds$8]}
    function invariant$14(invariant_a,t)
     {try
       {var
         check=
          function(f,field)
           {return caml_call1(f,caml_call2(Base_Field[3],field,t))},
         _v7_=
          function(cleaned)
           {var _wA_=is_full(cleaned);
            if(_wA_)
             {if(caml_call2(symbol$2,t[9],0))return 0;
              throw [0,Assert_failure,_km_]}
            return _wA_},
         _v8_=function(_wz_){return check(_v7_,_wz_)},
         _v9_=
          function(num_resources_not_cleaned)
           {if(caml_call2(symbol$0,num_resources_not_cleaned,0))
             {if(caml_call2(symbol$1,num_resources_not_cleaned,t[2]))
               {var _wy_=caml_call2(symbol$4,num_resources_not_cleaned,t[2]);
                if(_wy_){if(t[7])return 0;throw [0,Assert_failure,_kn_]}
                return _wy_}
              throw [0,Assert_failure,_ko_]}
            throw [0,Assert_failure,_kp_]},
         _v__=function(_wx_){return check(_v9_,_wx_)},
         _v$_=function(_ww_){return 0},
         _wa_=function(_wv_){return 0},
         _wb_=
          function(param)
           {if(param)
             {var ivar=param[1];
              if(is_empty(ivar))return 0;
              throw [0,Assert_failure,_kq_]}
            return 0},
         _wc_=function(_wu_){return check(_wb_,_wu_)},
         _wd_=
          function(num_jobs_running)
           {if(caml_call2(symbol$0,num_jobs_running,0))
             {if(caml_call2(symbol$1,num_jobs_running,t[2]))
               {var _wt_=caml_call2(symbol$4,num_jobs_running,t[2]);
                if(_wt_)
                 {if(caml_call1(Core_kernel_Queue[14],t[4]))return 0;
                  throw [0,Assert_failure,_kr_]}
                return _wt_}
              throw [0,Assert_failure,_ks_]}
            throw [0,Assert_failure,_kt_]},
         _we_=function(_ws_){return check(_wd_,_ws_)},
         _wf_=
          function(jobs_waiting_to_start)
           {var _wr_=t[7];
            if(_wr_)
             {if(caml_call1(Core_kernel_Queue[14],jobs_waiting_to_start))
               return 0;
              throw [0,Assert_failure,_ku_]}
            return _wr_},
         _wg_=function(_wq_){return check(_wf_,_wq_)},
         _wh_=
          function(job_resources_not_in_use)
           {iter$13(job_resources_not_in_use,invariant_a);
            var _wp_=t[7]?0:t[2] - t[5] | 0;
            if(caml_call2(symbol$2,length$4(job_resources_not_in_use),_wp_))
             return 0;
            throw [0,Assert_failure,_kv_]},
         _wi_=function(_wo_){return check(_wh_,_wo_)},
         _wj_=
          function(max_concurrent_jobs)
           {if(caml_call2(symbol$3,max_concurrent_jobs,0))return 0;
            throw [0,Assert_failure,_kw_]},
         _wk_=function(_wn_){return check(_wj_,_wn_)},
         _wl_=
          iter$14
           (function(_wm_){return 0},
            _wk_,
            _wi_,
            _wg_,
            _we_,
            _wc_,
            _wa_,
            _v$_,
            _v__,
            _v8_);
        return _wl_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        var
         _v2_=0,
         _v3_=0,
         _v4_=
          [0,
           [1,[0,_kk_,[0,sexp_of_t$50(function(param){return _kj_},t),_v3_]]],
           _v2_],
         _v5_=[0,[1,[0,_kl_,[0,caml_call1(Core_kernel[521],exn),0]]],_v4_],
         _v6_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Throttle_invariant_failed),
            _v5_]];
        return caml_call1(Core_kernel[238],_v6_)}}
    function sexp_of_t$51(of_a,of_kind,v){return sexp_of_t$50(of_a,v)}
    function invariant$15(invariant_a,param,t)
     {return invariant$14(invariant_a,t)}
    var T2=[0,sexp_of_t$51,invariant$15];
    function num_jobs_waiting_to_start(t)
     {return caml_call1(Core_kernel_Queue[13],t[4])}
    function clean_resource(t,a)
     {function _vZ_(param)
       {t[9] = t[9] - 1 | 0;
        var _v1_=caml_call2(symbol$2,t[9],0);
        return _v1_?fill(t[10],0):_v1_}
      function _v0_(f){return caml_call1(f,a)}
      return caml_call2
              (_ia_,all_unit(caml_call2(Core_kernel_List[71],t[8],_v0_)),_vZ_)}
    function kill(t)
     {var _vX_=1 - t[7];
      if(_vX_)
       {t[7] = 1;
        caml_call2(Core_kernel_Queue[15],t[4],abort$1);
        caml_call1(Core_kernel_Queue[46],t[4]);
        var _vY_=function(a){return clean_resource(t,a)};
        iter$13(t[3],_vY_);
        return clear$0(t[3])}
      return _vX_}
    function at_kill(t,f)
     {var
       _vW_=caml_call1(include$22[8],f),
       f$0=caml_call1(Core_kernel[243],_vW_);
      t[8] = [0,f$0,t[8]];
      return 0}
    function cleaned$1(t){return t[10]}
    function start_job(t)
     {if(t[7])throw [0,Assert_failure,_kx_];
      if(caml_call2(symbol$4,t[5],t[2]))
       {if(caml_call1(Core_kernel_Queue[14],t[4]))
         throw [0,Assert_failure,_ky_];
        var t$0=caml_call1(Core_kernel_Queue[43],t[4]);
        t[5] = t[5] + 1 | 0;
        var
         a=pop_exn(t[3]),
         _vU_=
          function(res)
           {t[5] = t[5] - 1 | 0;
            if(! (17724 <= res) && 1 - t[1])kill(t);
            if(t[7])return clean_resource(t,a);
            push(t[3],a);
            if(caml_call1(Core_kernel_Queue[14],t[4]))
             {var _vV_=t[6];
              if(_vV_){var ivar=_vV_[1];fill(ivar,0);t[6] = 0;return 0}
              return 0}
            return start_job(t)};
        fill(t$0[1],[0,389604418,a]);
        var
         _vT_=
          function(x)
           {if(-216426513 === x)throw [0,Assert_failure,_jQ_];return x};
        return caml_call2(_ia_,caml_call2(_if_[2],t$0[2],_vT_),_vU_)}
      throw [0,Assert_failure,_kz_]}
    function create_internal$0(continue_on_error,job_resources)
     {var
       max_concurrent_jobs=length$4(job_resources),
       _vS_=caml_call1(create$13,0);
      return [0,
              continue_on_error,
              max_concurrent_jobs,
              job_resources,
              caml_call2(Core_kernel_Queue[60],0,0),
              0,
              0,
              0,
              0,
              max_concurrent_jobs,
              _vS_]}
    function create_with(continue_on_error,job_resources)
     {return create_internal$0(continue_on_error,of_list$1(job_resources))}
    function create$20(opt,a)
     {if(opt)
       var sth=opt[1],continue_on_error=sth;
      else
       var continue_on_error=0;
      return create_with(continue_on_error,[0,a,0])}
    var Sequencer=[0,sexp_of_t$50,create$20];
    function create$21(continue_on_error,max_concurrent_jobs)
     {if(caml_call2(symbol$1,max_concurrent_jobs,0))
       {var
         _vQ_=
          [0,
           [1,[0,_kA_,[0,caml_call1(Core_kernel[340],max_concurrent_jobs),0]]],
           0],
         _vR_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Throttle_create_requires_p),
            _vQ_]];
        caml_call1(Core_kernel[238],_vR_)}
      return create_internal$0
              (continue_on_error,create_counter(max_concurrent_jobs))}
    function enqueue$2(t,f)
     {var start=caml_call1(create$13,0);
      function _vM_(param)
       {if(typeof param === "number")return caml_call1(_ie_,-216426513);
        var a=param[2];
        function _vO_(param)
         {if(0 === param[0]){var a=param[1];return [0,17724,a]}
          var exn=param[1];
          return [0,-387916264,exn]}
        var
         _vP_=
          try_with(0,0,0,0,0,0,function(param){return caml_call1(f,a)});
        return caml_call2(_if_[2],_vP_,_vO_)}
      var result=caml_call2(_if_[1],start,_vM_);
      function _vN_(param)
       {return typeof param === "number"
                ?-216426513
                :17724 <= param[1]?17724:-387916264}
      var
       outcome=caml_call2(_if_[2],result,_vN_),
       internal_job=[0,start,outcome];
      if(t[7])
       abort$1(internal_job);
      else
       {caml_call2(Core_kernel_Queue[40],t[4],internal_job);
        if(caml_call2(symbol$4,t[5],t[2]))start_job(t)}
      return result}
    function handle_enqueue_result(result)
     {if(typeof result === "number")
       {var _vL_=caml_call1(Sexplib0_Sexp_conv[7],cst_throttle_aborted_job);
        return caml_call1(Core_kernel[238],_vL_)}
      if(17724 <= result[1]){var a=result[2];return a}
      var exn=result[2];
      throw exn}
    function enqueue$3(t,f)
     {return caml_call2(_id_,enqueue$2(t,f),handle_enqueue_result)}
    function enqueue_exclusive(t,f)
     {var n=t[2];
      if(caml_call2(Core_kernel_Int[105],n,1000000))
       {var
         _vF_=
          caml_call1(Sexplib0_Sexp_conv[7],cst_enqueue_exclusive_was_call);
        caml_call1(Core_kernel[238],_vF_)}
      var done=caml_call1(create$13,0);
      if(caml_call2(symbol$3,n,0))
       {var f_placeholder=function(slot){return done},_vH_=n - 1 | 0,_vG_=1;
        if(! (_vH_ < 1))
         {var for$0=_vG_;
          for(;;)
           {enqueue$3(t,f_placeholder);
            var _vK_=for$0 + 1 | 0;
            if(_vH_ !== for$0){var for$0=_vK_;continue}
            break}}
        var
         _vI_=
          function(result){fill(done,0);return handle_enqueue_result(result)},
         _vJ_=enqueue$2(t,function(slot){return caml_call1(f,0)});
        return caml_call2(_if_[2],_vJ_,_vI_)}
      throw [0,Assert_failure,_kB_]}
    function monad_sequence_how(opt,f)
     {if(opt)var sth=opt[1],how=sth;else var how=-686623969;
      var switch$0=0;
      if(typeof how === "number" && -676829465 <= how){var f$0=f;switch$0 = 1}
      if(! switch$0)
       {if(typeof how === "number")
         var max_concurrent_jobs=1;
        else
         var
          max_concurrent_jobs$0=how[2],
          max_concurrent_jobs=max_concurrent_jobs$0;
        var
         t=create$21(0,max_concurrent_jobs),
         f$0=
          function(a)
           {return enqueue$3(t,function(param){return caml_call1(f,a)})}}
      return caml_call1(Core_kernel[242],f$0)}
    function monad_sequence_how2(opt,f)
     {if(opt)var sth=opt[1],how=sth;else var how=-686623969;
      var switch$0=0;
      if(typeof how === "number" && -676829465 <= how){var f$0=f;switch$0 = 1}
      if(! switch$0)
       {if(typeof how === "number")
         var max_concurrent_jobs=1;
        else
         var
          max_concurrent_jobs$0=how[2],
          max_concurrent_jobs=max_concurrent_jobs$0;
        var
         t=create$21(0,max_concurrent_jobs),
         f$0=
          function(a1,a2)
           {return enqueue$3(t,function(param){return caml_call2(f,a1,a2)})}}
      return caml_call1(Core_kernel[242],f$0)}
    function prior_jobs_done(t)
     {return create$14
              (function(all_dummy_jobs_running)
                {var dummy_jobs_running=[0,0],_vD_=t[2],_vC_=1;
                 if(! (_vD_ < 1))
                  {var for$0=_vC_;
                   for(;;)
                    {enqueue$3
                      (t,
                       function(param)
                        {dummy_jobs_running[1]++;
                         if(caml_call2(symbol$2,dummy_jobs_running[1],t[2]))
                          fill(all_dummy_jobs_running,0);
                         return all_dummy_jobs_running});
                     var _vE_=for$0 + 1 | 0;
                     if(_vD_ !== for$0){var for$0=_vE_;continue}
                     break}}
                 return 0})}
    function capacity_available$1(t)
     {if(caml_call2(symbol$4,t[5],t[2]))return caml_call1(_ie_,0);
      var _vB_=t[6];
      if(_vB_){var ivar=_vB_[1];return ivar}
      return create$14(function(ivar){t[6] = [0,ivar];return 0})}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$97);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Throttle$0);
    var
     Async_kernel_Throttle=
      [0,
       T2,
       sexp_of_t$50,
       invariant$14,
       create$21,
       create_with,
       sexp_of_outcome,
       enqueue$2,
       enqueue$3,
       enqueue_exclusive,
       monad_sequence_how,
       monad_sequence_how2,
       prior_jobs_done,
       max_concurrent_jobs,
       num_jobs_running,
       num_jobs_waiting_to_start,
       capacity_available$1,
       kill,
       is_dead$0,
       at_kill,
       cleaned$1,
       Sequencer];
    caml_register_global(1359,Async_kernel_Throttle,"Async_kernel__Throttle");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Scheduler);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$98);
    caml_call1(Expect_test_collector[4][1],cst_src_scheduler_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$99,cst$38);
    var
     _kC_=include$22[1],
     _kD_=include$22[2],
     _kE_=include$22[3],
     _kF_=include$22[4],
     _kG_=include$22[5],
     _kH_=include$22[6],
     _kI_=include$22[7],
     _kJ_=include$22[8];
    function find_local$0(key)
     {return find_local(current_execution_context$1(t$5(0)),key)}
    function with_local$0(key,value,f)
     {var
       t=t$5(0),
       execution_context=with_local(current_execution_context$1(t),key,value);
      return with_execution_context(t,execution_context,f)}
    var main_execution_context$1=t$5(0)[6];
    function can_run_a_job$0(t)
     {var _vA_=caml_call2(symbol$3,num_pending_jobs(t),0);
      return _vA_?_vA_:has_any_waiters$1(t[22])}
    function has_upcoming_event(t)
     {var _vz_=events(t);return 1 - caml_call1(Timing_wheel[13],_vz_)}
    function next_upcoming_event(t)
     {var _vy_=events(t);return caml_call1(Timing_wheel[36],_vy_)}
    function next_upcoming_event_exn(t)
     {var _vx_=events(t);return caml_call1(Timing_wheel[37],_vx_)}
    function event_precision(t)
     {var _vw_=events(t);return caml_call1(Timing_wheel[10],_vw_)}
    function cycle_start$1(t){return t[10]}
    function run_every_cycle_start$1(t,f){t[12] = [0,f,t[12]];return 0}
    function run_every_cycle_end$1(t,f){t[13] = [0,f,t[13]];return 0}
    function map_cycle_times(t,f)
     {return create$19
              (function(tail)
                {return run_every_cycle_start$1
                         (t,function(param){return extend(tail,caml_call1(f,t[14]))})})}
    function long_cycles(t,at_least)
     {return create$19
              (function(tail)
                {return run_every_cycle_start$1
                         (t,
                          function(param)
                           {var _vv_=caml_call2(_a_[14],t[14],at_least);
                            return _vv_?extend(tail,t[14]):_vv_})})}
    function cycle_num_jobs(t)
     {return create$19
              (function(tail)
                {return run_every_cycle_start$1
                         (t,function(param){return extend(tail,t[15])})})}
    function cycle_count$1(t){return t[9]}
    function set_max_num_jobs_per_priority_$0(t,int$0)
     {t[25] = caml_call1(Max_num_jobs_per_priority_per_[4],int$0);return 0}
    function max_num_jobs_per_priority_per_$4(t)
     {return caml_call1(Max_num_jobs_per_priority_per_[5],t[25])}
    function set_thread_safe_external_job_h$0(t,f){t[19] = f;return 0}
    function thread_safe_enqueue_external_j(t,execution_context,f,a)
     {caml_call2(Thread_safe_queue[5],t[18],[0,execution_context,f,a]);
      return caml_call1(t[19],0)}
    function set_event_added_hook$0(t,f){t[21] = [0,f];return 0}
    function set_job_queued_hook$0(t,f){t[20] = [0,f];return 0}
    function create_alarm(t,f)
     {var execution_context=current_execution_context$1(t);
      function _vu_(param)
       {return thread_safe_enqueue_external_j(t,execution_context,f,0)}
      return caml_call1(include$24[10][6][2],_vu_)}
    function add_finalizer(t,heap_block,f)
     {var execution_context=current_execution_context$1(t);
      function finalizer(heap_block)
       {if(_cI_)log_string(cst_enqueueing_finalizer);
        return thread_safe_enqueue_external_j
                (t,execution_context,f,heap_block)}
      if(_cI_)log_string(cst_adding_finalizer);
      try
       {var _vs_=caml_call2(Stdlib_gc[3],finalizer,heap_block);return _vs_}
      catch(_vt_)
       {_vt_ = caml_wrap_exception(_vt_);
        if(_vt_[1] === Stdlib[6])return 0;
        throw _vt_}}
    function add_finalizer_exn(t,x,f)
     {function _vr_(heap_block)
       {return caml_call1(f,caml_call1(Core_kernel_Heap_block[4],heap_block))}
      return add_finalizer(t,caml_call1(Core_kernel_Heap_block[3],x),_vr_)}
    function add_finalizer_last(t,heap_block,f)
     {var execution_context=current_execution_context$1(t);
      function finalizer(param)
       {if(_cI_)log_string(cst_enqueueing_finalizer_using);
        return thread_safe_enqueue_external_j(t,execution_context,f,0)}
      if(_cI_)log_string(cst_adding_finalizer_using_las);
      try
       {var _vp_=caml_call2(Stdlib_gc[4],finalizer,heap_block);return _vp_}
      catch(_vq_)
       {_vq_ = caml_wrap_exception(_vq_);
        if(_vq_[1] === Stdlib[6])return 0;
        throw _vq_}}
    function add_finalizer_last_exn(t,x,f)
     {return add_finalizer_last(t,caml_call1(Core_kernel_Heap_block[3],x),f)}
    function force_current_cycle_to_end(t)
     {return set_jobs_left_this_cycle$0(t[3],0)}
    var send_exn$1=[0,send_exn];
    function advance_clock$0(t,now)
     {return advance_internal(t[17],now,send_exn$1)}
    function run_cycle(t)
     {if(_cO_)log(cst_run_cycle_starting,t,sexp_of_t$33);
      caml_call1(t[27],0);
      var now=caml_call1(_ah_,0);
      t[9] = t[9] + 1 | 0;
      t[10] = now;
      t[11] = 1;
      broadcast(t[22],0);
      var num_jobs_run_at_start_of_cycle=num_jobs_run$1(t);
      function _vh_(f){return caml_call1(f,0)}
      caml_call2(Core_kernel_List[9],t[12],_vh_);
      advance_clock$0(t,now);
      start_cycle(t,t[25]);
      for(;;)
       {var match=run_jobs$0(t);
        if(0 === match[0])
         {var _vi_=t[10],cycle_time=caml_call2(_ao_,caml_call1(_ah_,0),_vi_);
          t[14] = cycle_time;
          t[15] = num_jobs_run$1(t) - num_jobs_run_at_start_of_cycle | 0;
          t[16] = caml_call2(_a_[96],t[16],cycle_time);
          var
           _vj_=has_any_waiters$1(t[23]),
           _vk_=_vj_?caml_call2(symbol$2,num_pending_jobs(t),0):_vj_;
          if(_vk_)broadcast(t[23],0);
          var _vl_=function(f){return caml_call1(f,0)};
          caml_call2(Core_kernel_List[9],t[13],_vl_);
          t[11] = 0;
          caml_call1(t[28],0);
          if(_cO_)
           {var
             _vm_=
              function(param)
               {var
                 v1=param[2],
                 v0=param[1],
                 v0$0=caml_call2(Core_kernel[438],Core_kernel_Error[6],v0),
                 v1$0=caml_call1(Core_kernel[289],v1);
                return [1,[0,v0$0,[0,v1$0,0]]]},
             _vn_=next_upcoming_event(t),
             _vo_=caml_call1(Core_kernel[228],_vn_);
            return log(cst_run_cycle_finished,[0,uncaught_exn$0(t),_vo_],_vm_)}
          return _cO_}
        var match$0=match[1],backtrace=match$0[2],exn=match$0[1];
        send_exn(current(0),[0,[0,936718974,backtrace]],exn);
        continue}}
    function run_cycles_until_no_jobs_remai(param)
     {if(_cO_)log_string(cst_run_cycles_until_no_jobs_r);
      var t=t$5(0);
      if(is_dead(t))
       {var
         _vd_=[0,[1,[0,_kK_,[0,sexp_of_t$33(t),0]]],0],
         _ve_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_run_cycles_until_no_jobs_r$0),
            _vd_]];
        caml_call1(Core_kernel[238],_ve_)}
      for(;;)
       {run_cycle(t);
        advance_clock$0(t,caml_call1(_ah_,0));
        if(can_run_a_job$0(t))continue;
        set_execution_context(t,t[6]);
        if(_cO_)log_string(cst_run_cycles_until_no_jobs_r$1);
        var _vf_=Core_kernel_Error[25],_vg_=uncaught_exn$0(t);
        return caml_call2(Core_kernel_Option[19],_vg_,_vf_)}}
    function make_async_unusable(param)
     {var t=_hC_[1];
      t[1]
      =
      [0,
       function(param)
        {var
          _vc_=
           caml_call1(Sexplib0_Sexp_conv[7],cst_Async_scheduler_is_unusabl);
         return caml_call1(Core_kernel[238],_vc_)}];
      return 0}
    function reset_in_forked_process(param)
     {if(_cO_)log_string(cst_reset_in_forked_process);
      _hC_[1] = create$10(0);
      return 0}
    function check_invariants$4(t){return t[24]}
    function set_check_invariants$0(t,b){t[24] = b;return 0}
    function set_record_backtraces$0(t,b){t[26] = b;return 0}
    function set_on_start_of_cycle$0(t,f){t[27] = f;return 0}
    function set_on_end_of_cycle$0(t,f){t[28] = f;return 0}
    function yield$2(t){return wait(t[22])}
    function yield_until_no_jobs_remain$1(opt,t)
     {if(opt)
       var sth=opt[1],may_return_immediately=sth;
      else
       var may_return_immediately=0;
      if(may_return_immediately && caml_call2(symbol$2,num_pending_jobs(t),0))
       return caml_call1(_ie_,0);
      return wait(t[23])}
    function yield_every(n)
     {if(caml_call2(symbol$1,n,0))
       {var
         _u__=[0,[1,[0,_kL_,[0,caml_call1(Core_kernel[340],n),0]]],0],
         _u$_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Scheduler_yield_every_got_),
            _u__]];
        return caml_call1(Core_kernel[238],_u$_)}
      if(caml_call2(symbol$2,n,1))
       {var _va_=function(t){return yield$2(t)};
        return caml_call1(Core_kernel[242],_va_)}
      var count_until_yield=[0,n];
      function _vb_(t)
       {count_until_yield[1] += -1;
        return caml_call2(symbol$3,count_until_yield[1],0)
                ?caml_call1(_ie_,0)
                :(count_until_yield[1] = n,yield$2(t))}
      return caml_call1(Core_kernel[242],_vb_)}
    function total_cycle_time$1(t)
     {if(t[11])
       {var
         _u9_=t[10],
         this_cycle_time=caml_call2(_ao_,caml_call1(_ah_,0),_u9_);
        return caml_call2(_a_[96],t[16],this_cycle_time)}
      return t[16]}
    function run_workers$0(counter,t,num_execs_before_yielding)
     {if(caml_call2(symbol$2,num_execs_before_yielding,0))
       return yield_then_run(t);
      var _u8_=1 - caml_call1(Core_kernel_Deque[15],t[5]);
      if(_u8_)
       {var worker=caml_call1(Core_kernel_Deque[60],t[5]);
        set_execution_context(t,worker[1]);
        if(counter < 50)
         {var counter$0=counter + 1 | 0;
          return run_worker(counter$0,t,worker,num_execs_before_yielding)}
        return caml_trampoline_return
                (run_worker,[0,t,worker,num_execs_before_yielding])}
      return _u8_}
    function run_worker(counter,t,worker,num_execs_before_yielding)
     {var num_execs_before_yielding$0=num_execs_before_yielding;
      for(;;)
       {if(caml_call2(Core_kernel[231],t[7],worker[1]))
         {if(caml_call2(symbol$2,num_execs_before_yielding$0,0))
           {caml_call2(Core_kernel_Deque[51],t[5],worker);
            return yield_then_run(t)}
          var num_execs_before_yielding$1=num_execs_before_yielding$0 - 1 | 0;
          try
           {var val=caml_call1(worker[2],0)}
          catch(exn$0)
           {exn$0 = caml_wrap_exception(exn$0);
            var bt=caml_call1(Base_Backtrace[6][4],0);
            send_exn(current(0),[0,[0,936718974,bt]],exn$0);
            if(counter < 50)
             {var counter$0=counter + 1 | 0;
              return run_workers$0(counter$0,t,num_execs_before_yielding$1)}
            return caml_trampoline_return
                    (run_workers$0,[0,t,num_execs_before_yielding$1]);
            var exn=exn$0}
          if(val)
           {var num_execs_before_yielding$0=num_execs_before_yielding$1;
            continue}
          if(counter < 50)
           {var counter$1=counter + 1 | 0;
            return run_workers$0(counter$1,t,num_execs_before_yielding$1)}
          return caml_trampoline_return
                  (run_workers$0,[0,t,num_execs_before_yielding$1])}
        throw [0,Assert_failure,_kM_]}}
    function run(t){return run_workers(t,1000)}
    function run_workers(t,num_execs_before_yielding)
     {return caml_trampoline(run_workers$0(0,t,num_execs_before_yielding))}
    function yield_then_run(t)
     {var _u6_=1 - caml_call1(Core_kernel_Deque[15],t[5]);
      if(_u6_)
       {var _u7_=function(param){return run(t)};
        return upon$1(yield$2(t),_u7_)}
      return _u6_}
    function enqueue$4(f)
     {var
       t=t$5(0),
       queue=t[5],
       running=1 - caml_call1(Core_kernel_Deque[15],queue),
       execution_context=create_like(0,_kN_,0,current_execution_context$1(t));
      caml_call2(Core_kernel_Deque[52],queue,[0,execution_context,f]);
      var _u5_=1 - running;
      return _u5_?enqueue$0(t,execution_context,run,t):_u5_}
    var For_bench=[0,advance_clock$0];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$100);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Scheduler$0);
    var
     include$25=
      [0,
       sexp_of_t$33,
       t$5,
       invariant$6,
       current_execution_context$1,
       with_execution_context,
       set_execution_context,
       enqueue$0,
       create_job,
       enqueue_job,
       free_job,
       main_execution_context$1,
       cycle_start$1,
       run_cycle,
       run_cycles_until_no_jobs_remai,
       has_upcoming_event,
       next_upcoming_event,
       next_upcoming_event_exn,
       event_precision,
       uncaught_exn$0,
       uncaught_exn_unwrapped,
       num_pending_jobs,
       num_jobs_run$1,
       last_cycle_num_jobs$1,
       map_cycle_times,
       cycle_num_jobs,
       cycle_count$1,
       total_cycle_time$1,
       max_num_jobs_per_priority_per_$4,
       set_max_num_jobs_per_priority_$0,
       set_check_access$0,
       check_access$1,
       check_invariants$4,
       set_check_invariants$0,
       set_record_backtraces$0,
       run_every_cycle_start$1,
       run_every_cycle_end$1,
       last_cycle_time,
       long_cycles,
       can_run_a_job$0,
       create_alarm,
       add_finalizer,
       add_finalizer_exn,
       add_finalizer_last,
       add_finalizer_last_exn,
       set_thread_safe_external_job_h$0,
       set_job_queued_hook$0,
       set_event_added_hook$0,
       set_on_start_of_cycle$0,
       set_on_end_of_cycle$0,
       thread_safe_enqueue_external_j,
       force_current_cycle_to_end,
       _kC_,
       _kD_,
       _kE_,
       _kF_,
       _kG_,
       _kI_,
       _kJ_,
       _kH_,
       find_local$0,
       with_local$0,
       make_async_unusable,
       reset_in_forked_process,
       yield$2,
       yield_every,
       yield_until_no_jobs_remain$1,
       [0,Very_low_priority_worker$0[1],enqueue$4],
       For_bench];
    caml_register_global(1364,include$25,"Async_kernel__Scheduler");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Async_kernel_$1);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$101);
    caml_call1(Expect_test_collector[4][1],cst_src_async_kernel_scheduler);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$102,cst$39);
    function enqueue_job$0(execution_context,f,a)
     {return enqueue$0(t$5(0),execution_context,f,a)}
    function thread_safe_enqueue_job(execution_context,f,a)
     {return thread_safe_enqueue_external_j(t$5(0),execution_context,f,a)}
    function current_execution_context$3(param)
     {return current_execution_context$1(t$5(0))}
    function cycle_count$2(param){return t$5(0)[9]}
    function cycle_start_ns(param){return t$5(0)[10]}
    function cycle_start$2(param){return caml_call1(_aB_,cycle_start_ns(0))}
    function cycle_times_ns(param)
     {function _u3_(_u4_){return _u4_}return map_cycle_times(t$5(0),_u3_)}
    function cycle_times(param)
     {var _u2_=_a_[133];return map_cycle_times(t$5(0),_u2_)}
    function total_cycle_time$2(param){return total_cycle_time$1(t$5(0))}
    function last_cycle_time$1(param){return t$5(0)[14]}
    function long_cycles$0(at_least){return long_cycles(t$5(0),at_least)}
    function event_precision_ns(param){return event_precision(t$5(0))}
    function event_precision$0(param)
     {var _u1_=event_precision_ns(0);return caml_call1(_a_[133],_u1_)}
    function set_max_num_jobs_per_priority_$1(i)
     {return set_max_num_jobs_per_priority_$0(t$5(0),i)}
    function max_num_jobs_per_priority_per_$5(param)
     {return max_num_jobs_per_priority_per_$4(t$5(0))}
    function set_record_backtraces$1(bool)
     {return set_record_backtraces$0(t$5(0),bool)}
    function force_current_cycle_to_end$0(param)
     {return force_current_cycle_to_end(t$5(0))}
    function yield$3(param){return yield$2(t$5(0))}
    function yield_until_no_jobs_remain$2(may_return_immediately,param)
     {return yield_until_no_jobs_remain$1(may_return_immediately,t$5(0))}
    function yield_every$0(n)
     {var
       _uZ_=yield_every(n),
       yield_every$0=caml_call1(Base_Staged[2],_uZ_),
       t=t$5(0);
      function _u0_(param){return caml_call1(yield_every$0,t)}
      return caml_call1(Core_kernel[242],_u0_)}
    function num_jobs_run$2(param){return num_jobs_run$1(t$5(0))}
    function num_pending_jobs$0(param){return num_pending_jobs(t$5(0))}
    function set_on_start_of_cycle$1(f)
     {return set_on_start_of_cycle$0(t$5(0),f)}
    function set_on_end_of_cycle$1(f){return set_on_end_of_cycle$0(t$5(0),f)}
    function last_cycle_num_jobs$2(param){return t$5(0)[15]}
    function run_every_cycle_start$2(f)
     {return run_every_cycle_start$1(t$5(0),f)}
    function run_every_cycle_end$2(f){return run_every_cycle_end$1(t$5(0),f)}
    var
     Expert$1=
      [0,
       run_cycles_until_no_jobs_remai,
       set_on_start_of_cycle$1,
       set_on_end_of_cycle$1,
       last_cycle_num_jobs$2,
       run_every_cycle_start$2,
       run_every_cycle_end$2];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$103);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Async_kernel_$2);
    var
     Async_kernel_Async_kernel_sche=
      [0,
       current_execution_context$3,
       _kH_,
       _kC_,
       _kD_,
       _kE_,
       with_local$0,
       find_local$0,
       _kF_,
       _kG_,
       enqueue_job$0,
       thread_safe_enqueue_job,
       _kI_,
       _kJ_,
       cycle_start$2,
       cycle_start_ns,
       cycle_times,
       cycle_times_ns,
       last_cycle_time$1,
       long_cycles$0,
       cycle_count$2,
       total_cycle_time$2,
       event_precision$0,
       event_precision_ns,
       force_current_cycle_to_end$0,
       set_max_num_jobs_per_priority_$1,
       max_num_jobs_per_priority_per_$5,
       set_record_backtraces$1,
       yield$3,
       yield_until_no_jobs_remain$2,
       yield_every$0,
       num_jobs_run$2,
       num_pending_jobs$0,
       Expert$1];
    caml_register_global
     (1366,
      Async_kernel_Async_kernel_sche,
      "Async_kernel__Async_kernel_scheduler");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Clock_intf);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$104);
    caml_call1(Expect_test_collector[4][1],cst_src_clock_intf_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$105,cst$40);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$106);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Clock_intf$0);
    var Async_kernel_Clock_intf=[0];
    caml_register_global
     (1367,Async_kernel_Clock_intf,"Async_kernel__Clock_intf");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Clock_ns);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$107);
    caml_call1(Expect_test_collector[4][1],cst_src_clock_ns_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$108,cst$41);
    function time_source$1(param){return t$5(0)[17]}
    function after$3(span){return after$1(time_source$1(0),span)}
    function at$5(time){return at$3(time_source$1(0),time)}
    function at_varying_intervals$0(stop,compute_span)
     {return at_varying_intervals(stop,time_source$1(0),compute_span)}
    function at_intervals$1(start,stop,interval)
     {return at_intervals$0(start,stop,time_source$1(0),interval)}
    function every$1(start,stop,continue_on_error,finished,span,f)
     {return every
              (start,stop,continue_on_error,finished,time_source$1(0),span,f)}
    function every$2(start,stop,continue_on_error,span,f)
     {return every$0(start,stop,continue_on_error,time_source$1(0),span,f)}
    function run_after$2(span,f,a)
     {return run_after$0(time_source$1(0),span,f,a)}
    function run_at$2(time,f,a){return run_at$0(time_source$1(0),time,f,a)}
    function run_at_intervals$2(start,stop,continue_on_error,interval,f)
     {return run_at_intervals$1
              (start,stop,continue_on_error,time_source$1(0),interval,f)}
    function run_at_intervals$3(start,stop,continue_on_error,interval,f)
     {return run_at_intervals$0
              (start,stop,continue_on_error,time_source$1(0),interval,f)}
    function with_timeout$0(span,d)
     {return with_timeout(time_source$1(0),span,d)}
    var
     sexp_of_t$52=include$23[1],
     sexp_of_t_unit$0=include$23[2],
     invariant$16=include$23[3],
     scheduled_at$1=include$23[4],
     Status$2=include$23[5],
     status$3=include$23[6],
     abort$2=include$23[10],
     abort_exn$1=include$23[11],
     abort_if_possible$1=include$23[12],
     fired$2=include$23[14],
     reschedule_at$1=include$23[16],
     reschedule_after$1=include$23[17],
     _kO_=include$23[7],
     _kP_=include$23[8],
     _kQ_=include$23[18],
     _kR_=include$23[19];
    function after$4(span){return caml_call2(_kR_,time_source$1(0),span)}
    function run_after$3(span,f,a)
     {return caml_call4(_kP_,time_source$1(0),span,f,a)}
    function at$6(time){return caml_call2(_kQ_,time_source$1(0),time)}
    function run_at$3(time,f,z)
     {return caml_call4(_kO_,time_source$1(0),time,f,z)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$109);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Clock_ns$0);
    var
     Async_kernel_Clock_ns=
      [0,
       run_at$2,
       run_after$2,
       at$5,
       after$3,
       with_timeout$0,
       [0,
        sexp_of_t$52,
        sexp_of_t_unit$0,
        invariant$16,
        scheduled_at$1,
        Status$2,
        status$3,
        run_at$3,
        run_after$3,
        abort$2,
        abort_exn$1,
        abort_if_possible$1,
        fired$2,
        reschedule_at$1,
        reschedule_after$1,
        at$6,
        after$4],
       at_varying_intervals$0,
       at_intervals$1,
       every$1,
       every$2,
       run_at_intervals$3,
       run_at_intervals$2];
    caml_register_global(1368,Async_kernel_Clock_ns,"Async_kernel__Clock_ns");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Deferred_arra);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$110);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_array_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$111,cst$42);
    function foldi(t,init,f)
     {return create$14
              (function(result)
                {function loop(i,b)
                  {var _uX_=caml_call1(Core_kernel_Array[18],t);
                   if(caml_call2(Core_kernel[87],i,_uX_))return fill(result,b);
                   function _uY_(b){return loop(i + 1 | 0,b)}
                   return caml_call2
                           (_ia_,caml_call3(f,i,b,caml_check_bound(t,i)[1 + i]),_uY_)}
                 return loop(0,init)})}
    function fold$14(t,init,f)
     {return foldi(t,init,function(param,a,x){return caml_call2(f,a,x)})}
    function seqmapi(t,f)
     {function _uT_(bs)
       {var _uW_=caml_call1(Core_kernel_List[34],bs);
        return caml_call1(Core_kernel_Array[48],_uW_)}
      var
       _uU_=
        foldi
         (t,
          0,
          function(i,bs,a)
           {function _uV_(b){return [0,b,bs]}
            return caml_call2(_id_,caml_call2(f,i,a),_uV_)});
      return caml_call2(_if_[2],_uU_,_uT_)}
    function all$1(ds){return seqmapi(ds,function(param,x){return x})}
    function all_unit$0(ds)
     {return caml_call1(ignore_m,fold$14(ds,0,function(param,d){return d}))}
    function iteri(opt,t,f)
     {if(opt)var sth=opt[1],how=sth;else var how=-686623969;
      if(typeof how === "number" && ! (-676829465 <= how))
       return foldi(t,0,function(i,param,x){return caml_call2(f,i,x)});
      var
       _uR_=monad_sequence_how2([0,how],f),
       _uS_=caml_call1(Core_kernel[243],_uR_);
      return all_unit$0(caml_call2(Core_kernel_Array[55],t,_uS_))}
    function mapi(opt,t,f)
     {if(opt)var sth=opt[1],how=sth;else var how=-686623969;
      if(typeof how === "number" && ! (-676829465 <= how))return seqmapi(t,f);
      var
       _uP_=monad_sequence_how2([0,how],f),
       _uQ_=caml_call1(Core_kernel[243],_uP_);
      return all$1(caml_call2(Core_kernel_Array[55],t,_uQ_))}
    function filteri(how,t,f)
     {function _uL_(bools)
       {function _uN_(ac,x,b){return b?[0,x,ac]:ac}
        var _uO_=caml_call4(Core_kernel_Array[77],t,bools,0,_uN_);
        return caml_call1(Core_kernel_Array[84],_uO_)}
      var _uM_=mapi(how,t,f);
      return caml_call2(_if_[2],_uM_,_uL_)}
    function filter_mapi(how,t,f)
     {var _uK_=Core_kernel_Array[69];
      return caml_call2(_id_,mapi(how,t,f),_uK_)}
    function concat_mapi(how,t,f)
     {function _uH_(t)
       {var _uJ_=caml_call1(Core_kernel_Array[30],t);
        return caml_call1(Core_kernel_Array[40],_uJ_)}
      var _uI_=mapi(how,t,f);
      return caml_call2(_if_[2],_uI_,_uH_)}
    function find_mapi(t,f)
     {function aux(i)
       {var _uE_=caml_call1(Core_kernel_Array[18],t);
        if(caml_call2(Core_kernel[87],i,_uE_))return caml_call1(_ie_,0);
        function _uF_(some){return some?caml_call1(_ie_,some):aux(i + 1 | 0)}
        var _uG_=caml_call2(f,i,caml_check_bound(t,i)[1 + i]);
        return caml_call2(_if_[1],_uG_,_uF_)}
      return aux(0)}
    function findi(t,f)
     {return find_mapi
              (t,
               function(i,elt)
                {function _uC_(b){return b?[0,[0,i,elt]]:0}
                 var _uD_=caml_call2(f,i,elt);
                 return caml_call2(_if_[2],_uD_,_uC_)})}
    function find$0(t,f)
     {return find_mapi
              (t,
               function(param,elt)
                {function _uA_(b){return b?[0,elt]:0}
                 var _uB_=caml_call1(f,elt);
                 return caml_call2(_if_[2],_uB_,_uA_)})}
    function existsi(t,f)
     {function _uw_(param){return param?1:0}
      var
       _ux_=
        find_mapi
         (t,
          function(i,elt)
           {function _uy_(b){return b?_kS_:0}
            var _uz_=caml_call2(f,i,elt);
            return caml_call2(_if_[2],_uz_,_uy_)});
      return caml_call2(_if_[2],_ux_,_uw_)}
    function for_alli(t,f)
     {function _us_(param){return param?0:1}
      var
       _ut_=
        find_mapi
         (t,
          function(i,elt)
           {function _uu_(b){return b?0:_kT_}
            var _uv_=caml_call2(f,i,elt);
            return caml_call2(_if_[2],_uv_,_uu_)});
      return caml_call2(_if_[2],_ut_,_us_)}
    function iter$15(how,t,f)
     {return iteri(how,t,function(param,a){return caml_call1(f,a)})}
    function map$17(how,t,f)
     {return mapi(how,t,function(param,a){return caml_call1(f,a)})}
    function filter_map(how,t,f)
     {return filter_mapi(how,t,function(param,a){return caml_call1(f,a)})}
    function filter(how,t,f)
     {return filteri(how,t,function(param,a){return caml_call1(f,a)})}
    function concat_map(how,t,f)
     {return concat_mapi(how,t,function(param,a){return caml_call1(f,a)})}
    function find_map(t,f)
     {return find_mapi(t,function(param,a){return caml_call1(f,a)})}
    function exists$11(t,f)
     {return existsi(t,function(param,a){return caml_call1(f,a)})}
    function for_all$11(t,f)
     {return for_alli(t,function(param,a){return caml_call1(f,a)})}
    function init(how,n,f)
     {function _uq_(_ur_){return _ur_}
      return map$17(how,caml_call2(Core_kernel_Array[37],n,_uq_),f)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$112);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Deferred_arra$0);
    var
     Async_kernel_Deferred_array=
      [0,
       foldi,
       fold$14,
       find$0,
       findi,
       find_map,
       find_mapi,
       exists$11,
       existsi,
       for_all$11,
       for_alli,
       all$1,
       all_unit$0,
       init,
       iter$15,
       iteri,
       map$17,
       mapi,
       filter,
       filteri,
       filter_map,
       filter_mapi,
       concat_map,
       concat_mapi];
    caml_register_global
     (1370,Async_kernel_Deferred_array,"Async_kernel__Deferred_array");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Deferred_list);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$113);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_list_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$114,cst$43);
    function foldi$0(t,init,f)
     {return create$14
              (function(result)
                {function loop(t,i,b)
                  {if(t)
                    {var
                      xs=t[2],
                      x=t[1],
                      _up_=function(b){return loop(xs,i + 1 | 0,b)};
                     return caml_call2(_ia_,caml_call3(f,i,b,x),_up_)}
                   return fill(result,b)}
                 return loop(t,0,init)})}
    function fold$15(t,init,f)
     {return foldi$0(t,init,function(param,a,x){return caml_call2(f,a,x)})}
    function seqmapi$0(t,f)
     {var _um_=Core_kernel_List[34];
      return caml_call2
              (_id_,
               foldi$0
                (t,
                 0,
                 function(i,bs,a)
                  {function _un_(b){return [0,b,bs]}
                   var _uo_=caml_call2(f,i,a);
                   return caml_call2(_if_[2],_uo_,_un_)}),
               _um_)}
    function all$2(ds){return seqmapi$0(ds,function(param,x){return x})}
    function all_unit$1(ds)
     {return caml_call1(ignore_m,fold$15(ds,0,function(param,d){return d}))}
    function iteri$0(opt,t,f)
     {if(opt)var sth=opt[1],how=sth;else var how=-686623969;
      if(typeof how === "number" && ! (-676829465 <= how))
       return foldi$0(t,0,function(i,param,x){return caml_call2(f,i,x)});
      var
       _uk_=monad_sequence_how2([0,how],f),
       _ul_=caml_call1(Core_kernel[243],_uk_);
      return all_unit$1(caml_call2(Core_kernel_List[91],t,_ul_))}
    function mapi$0(opt,t,f)
     {if(opt)var sth=opt[1],how=sth;else var how=-686623969;
      if(typeof how === "number" && ! (-676829465 <= how))
       return seqmapi$0(t,f);
      var
       _ui_=monad_sequence_how2([0,how],f),
       _uj_=caml_call1(Core_kernel[243],_ui_);
      return all$2(caml_call2(Core_kernel_List[91],t,_uj_))}
    function filteri$0(how,t,f)
     {function _ue_(bools)
       {function _ug_(ac,x,b){return b?[0,x,ac]:ac}
        var _uh_=caml_call4(Core_kernel_List[42],t,bools,0,_ug_);
        return caml_call1(Core_kernel_List[34],_uh_)}
      var _uf_=mapi$0(how,t,f);
      return caml_call2(_if_[2],_uf_,_ue_)}
    function filter_mapi$0(how,t,f)
     {var _ud_=Core_kernel_List[121];
      return caml_call2(_id_,mapi$0(how,t,f),_ud_)}
    function concat_mapi$0(how,t,f)
     {var _uc_=Core_kernel_List[130];
      return caml_call2(_id_,mapi$0(how,t,f),_uc_)}
    function find_mapi$0(t,f)
     {function find_mapi(t,f,i)
       {if(t)
         {var
           tl=t[2],
           hd=t[1],
           _ua_=
            function(some)
             {return some?caml_call1(_ie_,some):find_mapi(tl,f,i + 1 | 0)},
           _ub_=caml_call2(f,i,hd);
          return caml_call2(_if_[1],_ub_,_ua_)}
        return caml_call1(_ie_,0)}
      return find_mapi(t,f,0)}
    function findi$0(t,f)
     {return find_mapi$0
              (t,
               function(i,elt)
                {function _t__(b){return b?[0,[0,i,elt]]:0}
                 var _t$_=caml_call2(f,i,elt);
                 return caml_call2(_if_[2],_t$_,_t__)})}
    function find$1(t,f)
     {return find_mapi$0
              (t,
               function(param,elt)
                {function _t8_(b){return b?[0,elt]:0}
                 var _t9_=caml_call1(f,elt);
                 return caml_call2(_if_[2],_t9_,_t8_)})}
    function existsi$0(t,f)
     {function _t4_(param){return param?1:0}
      var
       _t5_=
        find_mapi$0
         (t,
          function(i,elt)
           {function _t6_(b){return b?_kU_:0}
            var _t7_=caml_call2(f,i,elt);
            return caml_call2(_if_[2],_t7_,_t6_)});
      return caml_call2(_if_[2],_t5_,_t4_)}
    function for_alli$0(t,f)
     {function _t0_(param){return param?0:1}
      var
       _t1_=
        find_mapi$0
         (t,
          function(i,elt)
           {function _t2_(b){return b?0:_kV_}
            var _t3_=caml_call2(f,i,elt);
            return caml_call2(_if_[2],_t3_,_t2_)});
      return caml_call2(_if_[2],_t1_,_t0_)}
    function iter$16(how,t,f)
     {return iteri$0(how,t,function(param,a){return caml_call1(f,a)})}
    function map$18(how,t,f)
     {return mapi$0(how,t,function(param,a){return caml_call1(f,a)})}
    function filter$0(how,t,f)
     {return filteri$0(how,t,function(param,a){return caml_call1(f,a)})}
    function filter_map$0(how,t,f)
     {return filter_mapi$0(how,t,function(param,a){return caml_call1(f,a)})}
    function concat_map$0(how,t,f)
     {return concat_mapi$0(how,t,function(param,a){return caml_call1(f,a)})}
    function find_map$0(t,f)
     {return find_mapi$0(t,function(param,a){return caml_call1(f,a)})}
    function exists$12(t,f)
     {return existsi$0(t,function(param,a){return caml_call1(f,a)})}
    function for_all$12(t,f)
     {return for_alli$0(t,function(param,a){return caml_call1(f,a)})}
    function init$0(how,n,f)
     {function _tY_(_tZ_){return _tZ_}
      return map$18(how,caml_call2(Core_kernel_List[116],n,_tY_),f)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$115);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Deferred_list$0);
    var
     Async_kernel_Deferred_list=
      [0,
       foldi$0,
       fold$15,
       find$1,
       findi$0,
       find_map$0,
       find_mapi$0,
       exists$12,
       existsi$0,
       for_all$12,
       for_alli$0,
       all$2,
       all_unit$1,
       init$0,
       iter$16,
       iteri$0,
       map$18,
       mapi$0,
       filter$0,
       filteri$0,
       filter_map$0,
       filter_mapi$0,
       concat_map$0,
       concat_mapi$0];
    caml_register_global
     (1371,Async_kernel_Deferred_list,"Async_kernel__Deferred_list");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Deferred_map);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$116);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_map_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$117,cst$44);
    function change(t,k,f)
     {function _tV_(opt)
       {function _tX_(param){return opt}
        return caml_call3(Core_kernel_Map[35],t,k,_tX_)}
      var _tW_=caml_call1(f,caml_call2(Core_kernel_Map[37],t,k));
      return caml_call2(_if_[2],_tW_,_tV_)}
    function update(t,k,f)
     {function _tT_(data){return caml_call3(Core_kernel_Map[31],t,k,data)}
      var _tU_=caml_call1(f,caml_call2(Core_kernel_Map[37],t,k));
      return caml_call2(_if_[2],_tU_,_tT_)}
    function iter_keys(how,t,f)
     {return iter$16(how,caml_call1(Core_kernel_Map[67],t),f)}
    function iter$17(how,t,f)
     {return iter$16(how,caml_call1(Core_kernel_Map[68],t),f)}
    function iteri$1(how,t,f)
     {function _tS_(param)
       {var data=param[2],key=param[1];return caml_call2(f,key,data)}
      return iter$16(how,caml_call2(Core_kernel_Map[69],0,t),_tS_)}
    function fold$16(t,init,f)
     {function _tR_(key,data,alist){return [0,[0,key,data],alist]}
      var
       alist_in_increasing_key_order=
        caml_call3(Core_kernel_Map[52],t,0,_tR_);
      return fold$15
              (alist_in_increasing_key_order,
               init,
               function(ac,param)
                {var data=param[2],key=param[1];
                 return caml_call3(f,key,data,ac)})}
    function fold_right(t,init,f)
     {function _tQ_(key,data,alist){return [0,[0,key,data],alist]}
      var
       alist_in_decreasing_key_order=
        caml_call3(Core_kernel_Map[51],t,0,_tQ_);
      return fold$15
              (alist_in_decreasing_key_order,
               init,
               function(ac,param)
                {var data=param[2],key=param[1];
                 return caml_call3(f,key,data,ac)})}
    function result(r){return r[3]}
    function filter_mapi$1(how,t,f)
     {var jobs=[0,0];
      function _tK_(key,data)
       {var job=[0,key,data,0];jobs[1] = [0,job,jobs[1]];return job}
      var job_map=caml_call2(Core_kernel_Map[50],t,_tK_);
      function _tL_(param)
       {return caml_call2(Core_kernel_Map[57],job_map,result)}
      function _tM_(job)
       {var data=job[2],key=job[1];
        function _tO_(x){job[3] = x;return 0}
        var _tP_=caml_call2(f,key,data);
        return caml_call2(_if_[2],_tP_,_tO_)}
      var _tN_=iter$16(how,jobs[1],_tM_);
      return caml_call2(_if_[2],_tN_,_tL_)}
    function filter_map$1(how,t,f)
     {return filter_mapi$1
              (how,t,function(param,data){return caml_call1(f,data)})}
    function filter_keys(how,t,f)
     {return filter_mapi$1
              (how,
               t,
               function(key,data)
                {function _tI_(b){return b?[0,data]:0}
                 var _tJ_=caml_call1(f,key);
                 return caml_call2(_if_[2],_tJ_,_tI_)})}
    function filter$1(how,t,f)
     {return filter_mapi$1
              (how,
               t,
               function(param,data)
                {function _tG_(b){return b?[0,data]:0}
                 var _tH_=caml_call1(f,data);
                 return caml_call2(_if_[2],_tH_,_tG_)})}
    function filteri$1(how,t,f)
     {return filter_mapi$1
              (how,
               t,
               function(key,data)
                {function _tE_(b){return b?[0,data]:0}
                 var _tF_=caml_call2(f,key,data);
                 return caml_call2(_if_[2],_tF_,_tE_)})}
    function mapi$1(how,t,f)
     {return filter_mapi$1
              (how,
               t,
               function(key,data)
                {function _tC_(z){return [0,z]}
                 var _tD_=caml_call2(f,key,data);
                 return caml_call2(_if_[2],_tD_,_tC_)})}
    function map$19(how,t,f)
     {return mapi$1(how,t,function(param,data){return caml_call1(f,data)})}
    function merge(how,t1,t2,f)
     {function _tA_(thunk){return caml_call1(thunk,0)}
      function _tB_(key,z)
       {return [0,function(param){return caml_call2(f,key,z)}]}
      return filter_map$1(how,caml_call3(Core_kernel_Map[72],t1,t2,_tB_),_tA_)}
    function all$3(t){return map$19(0,t,function(_tz_){return _tz_})}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$118);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Deferred_map$0);
    var
     Async_kernel_Deferred_map=
      [0,
       change,
       update,
       iter_keys,
       iter$17,
       iteri$1,
       map$19,
       mapi$1,
       fold$16,
       fold_right,
       filter_keys,
       filter$1,
       filteri$1,
       filter_map$1,
       filter_mapi$1,
       merge,
       all$3];
    caml_register_global
     (1373,Async_kernel_Deferred_map,"Async_kernel__Deferred_map");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Deferred_memo);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$119);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_memo_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$120,cst$45);
    function reraise(param)
     {if(0 === param[0]){var x=param[1];return x}
      var exn=param[1];
      return caml_call2(Base_Exn[7],exn,cst_caught_exception_in_memoiz)}
    function general(hashable,f)
     {function _tx_(a)
       {return try_with
                (0,0,0,0,_kW_,0,function(param){return caml_call1(f,a)})}
      var f$0=caml_call3(Core_kernel_Memo[1],[0,hashable[4]],0,_tx_);
      function _ty_(a){return caml_call2(_id_,caml_call1(f$0,a),reraise)}
      return caml_call1(Base_Staged[1],_ty_)}
    function unit$0(f)
     {function _tv_(param){return try_with(0,0,0,0,_kX_,0,f)}
      var f$0=caml_call1(Core_kernel_Memo[2],_tv_);
      function _tw_(param){return caml_call2(_id_,caml_call1(f$0,0),reraise)}
      return caml_call1(Base_Staged[1],_tw_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$121);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Deferred_memo$0);
    var Async_kernel_Deferred_memo=[0,general,unit$0];
    caml_register_global
     (1375,Async_kernel_Deferred_memo,"Async_kernel__Deferred_memo");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Deferred_opti);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$122);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_option_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$123,cst$46);
    function return$1(a){return return$0([0,a])}
    function bind$2(t,f)
     {return caml_call2
              (bind$0,
               t,
               function(param)
                {if(param){var a=param[1];return caml_call1(f,a)}
                 return return$0(0)})}
    var
     map$20=
      [0,
       -198771759,
       function(t,f)
        {return caml_call2
                 (map$12,
                  t,
                  function(r){return caml_call2(Core_kernel_Option[39],r,f)})}],
     include$26=caml_call1(Base_Monad[1],[0,bind$2,return$1,map$20]),
     _kY_=include$26[1],
     _kZ_=include$26[2],
     _k0_=include$26[3],
     _k1_=include$26[4],
     _k2_=include$26[5],
     _k3_=include$26[6],
     _k4_=include$26[7],
     _k5_=include$26[8],
     _k6_=include$26[9],
     _k7_=include$26[10],
     _k8_=include$26[11];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$124);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Deferred_opti$0);
    var
     Async_kernel_Deferred_option=
      [0,_kY_,_kZ_,_k0_,_k1_,_k2_,_k3_,_k4_,_k5_,_k6_,_k7_,_k8_];
    caml_register_global
     (1376,Async_kernel_Deferred_option,"Async_kernel__Deferred_option");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Deferred_resu);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$125);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_result_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$126,cst$47);
    function combine(t1,t2,ok,err)
     {function _tt_(param)
       {var t2=param[2],t1=param[1];
        return caml_call4(Core_kernel_Result[38],t1,t2,ok,err)}
      var _tu_=caml_call2(_if_[3],t1,t2);
      return caml_call2(_if_[2],_tu_,_tt_)}
    function return$2(a){return return$0([0,a])}
    function bind$3(t,f)
     {return caml_call2
              (bind$0,
               t,
               function(error)
                {if(0 === error[0]){var a=error[1];return caml_call1(f,a)}
                 return return$0(error)})}
    var
     map$21=
      [0,
       -198771759,
       function(t,f)
        {return caml_call2
                 (map$12,
                  t,
                  function(r){return caml_call2(Core_kernel_Result[36],r,f)})}],
     include$27=caml_call1(Base_Monad[2],[0,bind$3,map$21,return$2]),
     symbol_bind$1=include$27[1],
     _k9_=include$27[2],
     Monad_infix$0=include$27[4],
     bind$4=include$27[5],
     return$3=include$27[6],
     _k$_=include$27[7],
     join$0=include$27[8],
     ignore_m$0=include$27[9],
     _k__=include$27[3],
     _la_=include$27[10],
     _lb_=include$27[11];
    function fail(x){return return$0([1,x])}
    function failf(format)
     {return caml_call2(Core_kernel_Printf[4],fail,format)}
    function map_error(t,f)
     {return caml_call2
              (map$12,
               t,
               function(r){return caml_call2(Core_kernel_Result[37],r,f)})}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$127);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Deferred_resu$0);
    var
     Async_kernel_Deferred_result=
      [0,
       symbol_bind$1,
       _k9_,
       _k__,
       Monad_infix$0,
       bind$4,
       return$3,
       _k$_,
       join$0,
       ignore_m$0,
       _la_,
       _lb_,
       fail,
       failf,
       map_error,
       combine];
    caml_register_global
     (1378,Async_kernel_Deferred_result,"Async_kernel__Deferred_result");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Deferred_or_e);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$128);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_or_error_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$129,cst$48);
    function apply(f,x)
     {function _ts_(e1,e2)
       {return caml_call2(Core_kernel_Error[21],0,[0,e1,[0,e2,0]])}
      return combine(f,x,function(f,x){return caml_call1(f,x)},_ts_)}
    var
     map$22=[0,-198771759,_k$_],
     include$28=caml_call1(Base_Applicative[5],[0,return$3,apply,map$22]),
     return$4=include$28[1],
     map$23=include$28[2],
     both$1=include$28[3],
     symbol$6=include$28[4],
     symbol$7=include$28[5],
     symbol$8=include$28[6],
     apply$0=include$28[8],
     map2=include$28[9],
     map3=include$28[10],
     all$4=include$28[11],
     all_unit$2=include$28[12],
     Applicative_infix=include$28[13],
     symbol_bind$2=Monad_infix$0[1],
     symbol_map$1=Monad_infix$0[2],
     Open_on_rhs$0=[0],
     _lc_=include$28[7];
    function fail$0(error)
     {return return$0(caml_call1(Core_kernel_Result[25],error))}
    function ok_exn(t){return caml_call2(map$12,t,Core_kernel_Or_error[35])}
    function of_exn(exn)
     {return return$0(caml_call2(Core_kernel_Or_error[36],0,exn))}
    function of_exn_result(t)
     {var arg=Core_kernel_Or_error[37];
      return caml_call2(map$12,t,function(eta){return caml_call2(arg,0,eta)})}
    function error$0(msg,v,sexp_of)
     {return return$0(caml_call4(Core_kernel_Or_error[38],0,msg,v,sexp_of))}
    function error_s(sexp)
     {return return$0(caml_call1(Core_kernel_Or_error[39],sexp))}
    function error_string(msg)
     {return return$0(caml_call1(Core_kernel_Or_error[40],msg))}
    function errorf(format)
     {return caml_call2(Core_kernel[229],error_string,format)}
    function tag(t,tag)
     {var _tq_=Core_kernel_Or_error[42];
      return caml_call2
              (map$12,t,function(_tr_){return caml_call2(_tq_,_tr_,tag)})}
    function tag_s(t,tag)
     {var _to_=Core_kernel_Or_error[43];
      return caml_call2
              (map$12,t,function(_tp_){return caml_call2(_to_,_tp_,tag)})}
    function tag_arg(t,message,a,sexp_of_a)
     {return caml_call2
              (map$12,
               t,
               function(t)
                {return caml_call4
                         (Core_kernel_Or_error[44],t,message,a,sexp_of_a)})}
    function unimplemented(msg)
     {return return$0(caml_call1(Core_kernel_Or_error[45],msg))}
    function combine_errors(l)
     {var _tn_=Core_kernel_Or_error[49];
      return caml_call2(map$12,all$0(l),_tn_)}
    function combine_errors_unit(l)
     {var _tm_=Core_kernel_Or_error[50];
      return caml_call2(map$12,all$0(l),_tm_)}
    function filter_ok_at_least_one(l)
     {var _tl_=Core_kernel_Or_error[51];
      return caml_call2(map$12,all$0(l),_tl_)}
    function find_map_ok(l,f)
     {return repeat_until_finished
              ([0,l,0],
               function(param)
                {var errors=param[2],l=param[1];
                 if(l)
                  {var
                    tl=l[2],
                    hd=l[1],
                    _tj_=
                     function(param)
                      {if(0 === param[0])
                        {var result=param[1];return [0,-289386606,[0,result]]}
                       var current_error=param[1];
                       return [0,990972795,[0,tl,[0,current_error,errors]]]};
                   return caml_call2(map$12,caml_call1(f,hd),_tj_)}
                 var
                  _tk_=caml_call1(Core_kernel_List[34],errors),
                  errors$0=caml_call2(Core_kernel_Error[21],0,_tk_);
                 return return$0([0,-289386606,[1,errors$0]])})}
    var ok_unit=caml_call1(return$4,0);
    function try_with$0(extract_exn,run,here,name,f)
     {function _ti_(ok)
       {if(0 === ok[0])return ok;
        var exn=ok[1];
        return [1,caml_call2(Core_kernel_Error[22],0,exn)]}
      return caml_call2(map$12,try_with(here,0,name,extract_exn,run,0,f),_ti_)}
    function try_with_join(extract_exn,run,here,name,f)
     {var _th_=Core_kernel_Or_error[26];
      return caml_call2(map$12,try_with$0(extract_exn,run,here,name,f),_th_)}
    function foldi$1(list,acc,f)
     {function loop(i,acc,param)
       {if(param)
         {var
           tl=param[2],
           hd=param[1],
           _tg_=function(acc){return loop(i + 1 | 0,acc,tl)};
          return caml_call2(bind$4,caml_call3(f,i,acc,hd),_tg_)}
        return caml_call1(return$4,acc)}
      return loop(0,acc,list)}
    function fold$17(t,init,f)
     {return foldi$1(t,init,function(param,a,x){return caml_call2(f,a,x)})}
    function iteri$2(opt,t,f)
     {if(opt)var sth=opt[1],how=sth;else var how=-686623969;
      if(typeof how === "number" && ! (-676829465 <= how))
       return foldi$1(t,0,function(i,param,x){return caml_call2(f,i,x)});
      var
       _te_=monad_sequence_how2([0,how],f),
       _tf_=caml_call1(Core_kernel[243],_te_);
      return caml_call1(all_unit$2,caml_call2(Core_kernel_List[91],t,_tf_))}
    function mapi$2(opt,t,f)
     {if(opt)var sth=opt[1],how=sth;else var how=-686623969;
      if(typeof how === "number" && ! (-676829465 <= how))
       {var _ta_=Core_kernel_List[34];
        return caml_call2
                (symbol_map$1,
                 foldi$1
                  (t,
                   0,
                   function(i,bs,a)
                    {function _td_(b){return [0,b,bs]}
                     return caml_call2(map$23,caml_call2(f,i,a),_td_)}),
                 _ta_)}
      var
       _tb_=monad_sequence_how2([0,how],f),
       _tc_=caml_call1(Core_kernel[243],_tb_);
      return caml_call1(all$4,caml_call2(Core_kernel_List[91],t,_tc_))}
    function filter_mapi$2(how,t,f)
     {var _s$_=Core_kernel_List[121];
      return caml_call2(symbol_map$1,mapi$2(how,t,f),_s$_)}
    function concat_mapi$1(how,t,f)
     {var _s__=Core_kernel_List[130];
      return caml_call2(symbol_map$1,mapi$2(how,t,f),_s__)}
    function filteri$2(how,t,f)
     {return filter_mapi$2
              (how,
               t,
               function(i,x)
                {function _s9_(b){return b?[0,x]:0}
                 return caml_call2(map$23,caml_call2(f,i,x),_s9_)})}
    function find_mapi$1(t,f)
     {function find_mapi(t,f,i)
       {if(t)
         {var
           tl=t[2],
           hd=t[1],
           _s8_=
            function(some)
             {return some?caml_call1(return$4,some):find_mapi(tl,f,i + 1 | 0)};
          return caml_call2(bind$4,caml_call2(f,i,hd),_s8_)}
        return caml_call1(return$4,0)}
      return find_mapi(t,f,0)}
    function findi$1(t,f)
     {return find_mapi$1
              (t,
               function(i,elt)
                {function _s7_(b){return b?[0,[0,i,elt]]:0}
                 return caml_call2(map$23,caml_call2(f,i,elt),_s7_)})}
    function find$2(t,f)
     {return find_mapi$1
              (t,
               function(param,elt)
                {function _s6_(b){return b?[0,elt]:0}
                 return caml_call2(map$23,caml_call1(f,elt),_s6_)})}
    function existsi$1(t,f)
     {function _s4_(param){return param?1:0}
      return caml_call2
              (map$23,
               find_mapi$1
                (t,
                 function(i,elt)
                  {function _s5_(b){return b?_ld_:0}
                   return caml_call2(map$23,caml_call2(f,i,elt),_s5_)}),
               _s4_)}
    function for_alli$1(t,f)
     {function _s2_(param){return param?0:1}
      return caml_call2
              (map$23,
               find_mapi$1
                (t,
                 function(i,elt)
                  {function _s3_(b){return b?0:_le_}
                   return caml_call2(map$23,caml_call2(f,i,elt),_s3_)}),
               _s2_)}
    function iter$18(how,t,f)
     {return iteri$2(how,t,function(param,a){return caml_call1(f,a)})}
    function map$24(how,t,f)
     {return mapi$2(how,t,function(param,a){return caml_call1(f,a)})}
    function filter$2(how,t,f)
     {return filteri$2(how,t,function(param,a){return caml_call1(f,a)})}
    function filter_map$2(how,t,f)
     {return filter_mapi$2(how,t,function(param,a){return caml_call1(f,a)})}
    function concat_map$1(how,t,f)
     {return concat_mapi$1(how,t,function(param,a){return caml_call1(f,a)})}
    function find_map$1(t,f)
     {return find_mapi$1(t,function(param,a){return caml_call1(f,a)})}
    function exists$13(t,f)
     {return existsi$1(t,function(param,a){return caml_call1(f,a)})}
    function for_all$13(t,f)
     {return for_alli$1(t,function(param,a){return caml_call1(f,a)})}
    function init$1(how,n,f)
     {function _s0_(_s1_){return _s1_}
      return map$24(how,caml_call2(Core_kernel_List[116],n,_s0_),f)}
    function repeat_until_finished$0(state,f)
     {function _sZ_(param)
       {if(990972795 <= param[1])
         {var state=param[2];return repeat_until_finished$0(state,f)}
        var state$0=param[2];
        return caml_call1(return$4,state$0)}
      return caml_call2(bind$4,caml_call1(f,state),_sZ_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$130);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Deferred_or_e$0);
    var
     Async_kernel_Deferred_or_error=
      [0,
       both$1,
       symbol$6,
       symbol$7,
       symbol$8,
       apply$0,
       map2,
       map3,
       Applicative_infix,
       symbol_bind$1,
       _lc_,
       Monad_infix$0,
       bind$4,
       return$4,
       map$23,
       join$0,
       ignore_m$0,
       all$4,
       all_unit$2,
       [0,
        return$4,
        symbol_bind$2,
        symbol_map$1,
        [0,return$4,bind$4,map$23,both$1,Open_on_rhs$0]],
       fail$0,
       ok_exn,
       of_exn,
       of_exn_result,
       error$0,
       error_s,
       error_string,
       errorf,
       tag,
       tag_s,
       tag_arg,
       unimplemented,
       combine_errors,
       combine_errors_unit,
       filter_ok_at_least_one,
       find_map_ok,
       ok_unit,
       try_with$0,
       try_with_join,
       [0,
        foldi$1,
        fold$17,
        find$2,
        findi$1,
        find_map$1,
        find_mapi$1,
        exists$13,
        existsi$1,
        for_all$13,
        for_alli$1,
        all$4,
        all_unit$2,
        init$1,
        iter$18,
        iteri$2,
        map$24,
        mapi$2,
        filter$2,
        filteri$2,
        filter_map$2,
        filter_mapi$2,
        concat_map$1,
        concat_mapi$1],
       repeat_until_finished$0];
    caml_register_global
     (1380,Async_kernel_Deferred_or_error,"Async_kernel__Deferred_or_error");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Deferred_queu);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$131);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_queue_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$132,cst$49);
    function foldi$2(t,init,f)
     {return foldi$0(caml_call1(Core_kernel_Queue[25],t),init,f)}
    function fold$18(t,init,f)
     {return fold$15(caml_call1(Core_kernel_Queue[25],t),init,f)}
    function all$5(t)
     {var _sY_=Core_kernel_Queue[37];
      return caml_call2(_id_,all$2(caml_call1(Core_kernel_Queue[25],t)),_sY_)}
    function all_unit$3(t)
     {return all_unit$1(caml_call1(Core_kernel_Queue[25],t))}
    function iter$19(how,t,f)
     {return iter$16(how,caml_call1(Core_kernel_Queue[25],t),f)}
    function iteri$3(how,t,f)
     {return iteri$0(how,caml_call1(Core_kernel_Queue[25],t),f)}
    function map$25(how,t,f)
     {var _sX_=Core_kernel_Queue[37];
      return caml_call2
              (_id_,map$18(how,caml_call1(Core_kernel_Queue[25],t),f),_sX_)}
    function mapi$3(how,t,f)
     {var _sW_=Core_kernel_Queue[37];
      return caml_call2
              (_id_,mapi$0(how,caml_call1(Core_kernel_Queue[25],t),f),_sW_)}
    function init$2(how,n,f)
     {var _sV_=Core_kernel_Queue[37];
      return caml_call2(_id_,init$0(how,n,f),_sV_)}
    function filter$3(how,t,f)
     {var _sU_=Core_kernel_Queue[37];
      return caml_call2
              (_id_,filter$0(how,caml_call1(Core_kernel_Queue[25],t),f),_sU_)}
    function filteri$3(how,t,f)
     {var _sT_=Core_kernel_Queue[37];
      return caml_call2
              (_id_,filteri$0(how,caml_call1(Core_kernel_Queue[25],t),f),_sT_)}
    function filter_map$3(how,t,f)
     {var _sS_=Core_kernel_Queue[37];
      return caml_call2
              (_id_,
               filter_map$0(how,caml_call1(Core_kernel_Queue[25],t),f),
               _sS_)}
    function filter_mapi$3(how,t,f)
     {var _sR_=Core_kernel_Queue[37];
      return caml_call2
              (_id_,
               filter_mapi$0(how,caml_call1(Core_kernel_Queue[25],t),f),
               _sR_)}
    function concat_map$2(how,t,f)
     {var _sO_=Core_kernel_Queue[37];
      function _sP_(x)
       {var _sQ_=Core_kernel_Queue[25];
        return caml_call2(_id_,caml_call1(f,x),_sQ_)}
      return caml_call2
              (_id_,
               concat_map$0(how,caml_call1(Core_kernel_Queue[25],t),_sP_),
               _sO_)}
    function concat_mapi$2(how,t,f)
     {var _sL_=Core_kernel_Queue[37];
      function _sM_(i,x)
       {var _sN_=Core_kernel_Queue[25];
        return caml_call2(_id_,caml_call2(f,i,x),_sN_)}
      return caml_call2
              (_id_,
               concat_mapi$0(how,caml_call1(Core_kernel_Queue[25],t),_sM_),
               _sL_)}
    function find_map$2(t,f)
     {return find_map$0(caml_call1(Core_kernel_Queue[25],t),f)}
    function find_mapi$2(t,f)
     {return find_mapi$0(caml_call1(Core_kernel_Queue[25],t),f)}
    function find$3(t,f){return find$1(caml_call1(Core_kernel_Queue[25],t),f)}
    function findi$2(t,f)
     {return findi$0(caml_call1(Core_kernel_Queue[25],t),f)}
    function for_all$14(t,f)
     {return for_all$12(caml_call1(Core_kernel_Queue[25],t),f)}
    function for_alli$2(t,f)
     {return for_alli$0(caml_call1(Core_kernel_Queue[25],t),f)}
    function exists$14(t,f)
     {return exists$12(caml_call1(Core_kernel_Queue[25],t),f)}
    function existsi$2(t,f)
     {return existsi$0(caml_call1(Core_kernel_Queue[25],t),f)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$133);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Deferred_queu$0);
    var
     Async_kernel_Deferred_queue=
      [0,
       foldi$2,
       fold$18,
       find$3,
       findi$2,
       find_map$2,
       find_mapi$2,
       exists$14,
       existsi$2,
       for_all$14,
       for_alli$2,
       all$5,
       all_unit$3,
       init$2,
       iter$19,
       iteri$3,
       map$25,
       mapi$3,
       filter$3,
       filteri$3,
       filter_map$3,
       filter_mapi$3,
       concat_map$2,
       concat_mapi$2];
    caml_register_global
     (1381,Async_kernel_Deferred_queue,"Async_kernel__Deferred_queue");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Deferred_sequ);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$134);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_sequence_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$135,cst$50);
    function fold_mapi(opt,t,init,mapi_f,fold_f)
     {if(opt)var sth=opt[1],how=sth;else var how=-686623969;
      if(typeof how === "number")
       {if(-676829465 <= how)
         {var c$1=caml_call1(_ie_,init),i=0,t$0=t,c=c$1;
          for(;;)
           {var match=caml_call1(Core_kernel_Sequence[47],t$0);
            if(match)
             {var
               match$0=match[1],
               t$1=match$0[2],
               a=match$0[1],
               _sB_=
                function(c)
                  {return function(b)
                    {function _sK_(c){return caml_call2(fold_f,c,b)}
                     return caml_call2(_if_[2],c,_sK_)}}
                 (c),
               _sC_=caml_call2(mapi_f,i,a),
               c$0=caml_call2(_if_[1],_sC_,_sB_),
               i$0=i + 1 | 0,
               i=i$0,
               t$0=t$1,
               c=c$0;
              continue}
            return c}}
        var
         loop=
          function(i,t,c)
           {var match=caml_call1(Core_kernel_Sequence[47],t);
            if(match)
             {var
               match$0=match[1],
               t$0=match$0[2],
               a=match$0[1],
               _sI_=
                function(b){return loop(i + 1 | 0,t$0,caml_call2(fold_f,c,b))},
               _sJ_=caml_call2(mapi_f,i,a);
              return caml_call2(_if_[1],_sJ_,_sI_)}
            return caml_call1(_ie_,c)};
        return loop(0,t,init)}
      var
       max_concurrent_jobs=how[2],
       throttle=create$21(0,max_concurrent_jobs);
      function loop$0(i,t,c)
       {function _sD_(param)
         {var match=caml_call1(Core_kernel_Sequence[47],t);
          if(match)
           {var
             match$0=match[1],
             t$0=match$0[2],
             a=match$0[1],
             _sF_=
              function(b)
               {function _sH_(c){return caml_call2(fold_f,c,b)}
                return caml_call2(_if_[2],c,_sH_)},
             _sG_=
              enqueue$3
               (throttle,function(param){return caml_call2(mapi_f,i,a)});
            return loop$0(i + 1 | 0,t$0,caml_call2(_if_[1],_sG_,_sF_))}
          return c}
        var _sE_=capacity_available$1(throttle);
        return caml_call2(_if_[1],_sE_,_sD_)}
      return loop$0(0,t,caml_call1(_ie_,init))}
    function foldi$3(t,init,f)
     {function _sx_(param){var b=param[2];return caml_call1(_ie_,b)}
      function _sy_(param,a,k)
       {var b=param[2],i=param[1];
        function _sz_(b){return caml_call1(k,[0,i + 1 | 0,b])}
        var _sA_=caml_call3(f,i,b,a);
        return caml_call2(_if_[1],_sA_,_sz_)}
      return caml_call4(Core_kernel_Sequence[103],t,[0,0,init],_sy_,_sx_)}
    function fold$19(t,init,f)
     {function _sw_(b,a,k){return caml_call2(_ic_,caml_call2(f,b,a),k)}
      return caml_call4(Core_kernel_Sequence[103],t,init,_sw_,_ie_)}
    function all$6(t)
     {function _ss_(res)
       {var _sv_=caml_call1(Core_kernel_List[34],res);
        return caml_call1(Core_kernel_Sequence[107],_sv_)}
      var
       _st_=
        fold$19
         (t,
          0,
          function(accum,d)
           {function _su_(a){return [0,a,accum]}
            return caml_call2(_if_[2],d,_su_)});
      return caml_call2(_if_[2],_st_,_ss_)}
    function all_unit$4(t){return fold$19(t,0,function(param,v){return v})}
    function find_mapi$3(t,f)
     {function find_mapi(t,f,i)
       {var match=caml_call1(Core_kernel_Sequence[47],t);
        if(match)
         {var
           match$0=match[1],
           rest=match$0[2],
           v=match$0[1],
           _sq_=
            function(some)
             {return some?caml_call1(_ie_,some):find_mapi(rest,f,i + 1 | 0)},
           _sr_=caml_call2(f,i,v);
          return caml_call2(_if_[1],_sr_,_sq_)}
        return caml_call1(_ie_,0)}
      return find_mapi(t,f,0)}
    function findi$3(t,f)
     {return find_mapi$3
              (t,
               function(i,elt)
                {function _so_(b){return b?[0,[0,i,elt]]:0}
                 var _sp_=caml_call2(f,i,elt);
                 return caml_call2(_if_[2],_sp_,_so_)})}
    function find$4(t,f)
     {return find_mapi$3
              (t,
               function(param,elt)
                {function _sm_(b){return b?[0,elt]:0}
                 var _sn_=caml_call1(f,elt);
                 return caml_call2(_if_[2],_sn_,_sm_)})}
    function existsi$3(t,f)
     {function _si_(param){return param?1:0}
      var
       _sj_=
        find_mapi$3
         (t,
          function(i,elt)
           {function _sk_(b){return b?_lf_:0}
            var _sl_=caml_call2(f,i,elt);
            return caml_call2(_if_[2],_sl_,_sk_)});
      return caml_call2(_if_[2],_sj_,_si_)}
    function for_alli$3(t,f)
     {function _se_(param){return param?0:1}
      var
       _sf_=
        find_mapi$3
         (t,
          function(i,elt)
           {function _sg_(b){return b?0:_lg_}
            var _sh_=caml_call2(f,i,elt);
            return caml_call2(_if_[2],_sh_,_sg_)});
      return caml_call2(_if_[2],_sf_,_se_)}
    function iteri$4(how,t,f)
     {return fold_mapi(how,t,0,f,function(param,_sd_){return 0})}
    function mapi$4(how,t,f)
     {function _r$_(bs)
       {var _sc_=caml_call1(Core_kernel_List[34],bs);
        return caml_call1(Core_kernel_Sequence[107],_sc_)}
      function _sa_(bs,b){return [0,b,bs]}
      var
       _sb_=
        fold_mapi(how,t,0,function(i,a){return caml_call2(f,i,a)},_sa_);
      return caml_call2(_if_[2],_sb_,_r$_)}
    function filter_mapi$4(how,t,f)
     {function _r7_(bs)
       {var _r__=caml_call1(Core_kernel_List[34],bs);
        return caml_call1(Core_kernel_Sequence[107],_r__)}
      function _r8_(bs,maybe_v)
       {if(maybe_v){var b=maybe_v[1];return [0,b,bs]}return bs}
      var
       _r9_=
        fold_mapi(how,t,0,function(i,a){return caml_call2(f,i,a)},_r8_);
      return caml_call2(_if_[2],_r9_,_r7_)}
    function concat_mapi$3(how,t,f)
     {var _r6_=Core_kernel_Sequence[68];
      return caml_call2(_id_,mapi$4(how,t,f),_r6_)}
    function filteri$4(how,t,f)
     {return filter_mapi$4
              (how,
               t,
               function(i,a)
                {function _r4_(param){return param?[0,a]:0}
                 var _r5_=caml_call2(f,i,a);
                 return caml_call2(_if_[2],_r5_,_r4_)})}
    function iter$20(how,t,f)
     {return iteri$4(how,t,function(param,a){return caml_call1(f,a)})}
    function map$26(how,t,f)
     {return mapi$4(how,t,function(param,a){return caml_call1(f,a)})}
    function filter$4(how,t,f)
     {return filteri$4(how,t,function(param,a){return caml_call1(f,a)})}
    function filter_map$4(how,t,f)
     {return filter_mapi$4(how,t,function(param,a){return caml_call1(f,a)})}
    function concat_map$3(how,t,f)
     {return concat_mapi$3(how,t,function(param,a){return caml_call1(f,a)})}
    function find_map$3(t,f)
     {return find_mapi$3(t,function(param,a){return caml_call1(f,a)})}
    function exists$15(t,f)
     {return existsi$3(t,function(param,a){return caml_call1(f,a)})}
    function for_all$15(t,f)
     {return for_alli$3(t,function(param,a){return caml_call1(f,a)})}
    function init$3(how,n,f)
     {function _r2_(_r3_){return _r3_}
      return map$26(how,caml_call2(Core_kernel_Sequence[81],n,_r2_),f)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$136);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Deferred_sequ$0);
    var
     Async_kernel_Deferred_sequence=
      [0,
       foldi$3,
       fold$19,
       find$4,
       findi$3,
       find_map$3,
       find_mapi$3,
       exists$15,
       existsi$3,
       for_all$15,
       for_alli$3,
       all$6,
       all_unit$4,
       init$3,
       iter$20,
       iteri$4,
       map$26,
       mapi$4,
       filter$4,
       filteri$4,
       filter_map$4,
       filter_mapi$4,
       concat_map$3,
       concat_mapi$3];
    caml_register_global
     (1383,Async_kernel_Deferred_sequence,"Async_kernel__Deferred_sequence");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Deferred);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$137);
    caml_call1(Expect_test_collector[4][1],cst_src_deferred_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$138,cst$51);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$139);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Deferred$0);
    var
     _lh_=[0,Infix[1],Infix[2],Infix[3]],
     _li_=Let_syntax$0[4],
     include$29=
      [0,
       Let_syntax$0[3],
       Let_syntax$0[1],
       Let_syntax$0[2],
       [0,_li_[5],_li_[1],_li_[2],_li_[3],_li_[4]]],
     Async_kernel_Deferred=
      [0,
       sexp_of_t$36,
       invariant$8,
       create$14,
       upon$1,
       peek$0,
       value_exn$1,
       is_determined,
       _h9_,
       _h__,
       Monad_infix,
       bind$0,
       return$0,
       map$12,
       join,
       ignore_m,
       include$29,
       _lh_,
       unit,
       never,
       both$0,
       all$0,
       all_unit,
       any,
       any_unit,
       don_t_wait_for,
       Choice,
       choice,
       enabled,
       choose,
       for$0,
       repeat_until_finished,
       forever,
       ok];
    caml_register_global(1384,Async_kernel_Deferred,"Async_kernel__Deferred");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Require_expli);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$140);
    caml_call1(Expect_test_collector[4][1],cst_src_require_explicit_time_);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$141,cst$52);
    var
     _lj_=Async_kernel_Clock_ns[4],
     _lk_=Async_kernel_Clock_ns[3],
     _ll_=Async_kernel_Clock_ns[10],
     _lm_=Async_kernel_Clock_ns[5];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$142);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Require_expli$0);
    var
     Async_kernel_Require_explicit_=
      [0,
       Async_kernel_Clock_ns,
       [0,
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
        _ay_,
        _az_,
        _aA_,
        _aB_,
        _aC_,
        _aD_,
        _aE_,
        _aH_,
        _aI_,
        after,
        _ah_],
       [0,
        Core_kernel_Time_float[1],
        Core_kernel_Time_float[2],
        Core_kernel_Time_float[3],
        Core_kernel_Time_float[4],
        Core_kernel_Time_float[5],
        Core_kernel_Time_float[6],
        Core_kernel_Time_float[7],
        Core_kernel_Time_float[8],
        Core_kernel_Time_float[9],
        Core_kernel_Time_float[10],
        Core_kernel_Time_float[11],
        Core_kernel_Time_float[12],
        Core_kernel_Time_float[16],
        Core_kernel_Time_float[17],
        Core_kernel_Time_float[18],
        Core_kernel_Time_float[19],
        Core_kernel_Time_float[20],
        Core_kernel_Time_float[21],
        Core_kernel_Time_float[22],
        Core_kernel_Time_float[23],
        Core_kernel_Time_float[24],
        Core_kernel_Time_float[25],
        Core_kernel_Time_float[26],
        Core_kernel_Time_float[27],
        Core_kernel_Time_float[28],
        Core_kernel_Time_float[29],
        Core_kernel_Time_float[30],
        Core_kernel_Time_float[31],
        Core_kernel_Time_float[32],
        Core_kernel_Time_float[33],
        Core_kernel_Time_float[34],
        Core_kernel_Time_float[35],
        Core_kernel_Time_float[36],
        Core_kernel_Time_float[37],
        Core_kernel_Time_float[38],
        Core_kernel_Time_float[39],
        Core_kernel_Time_float[40],
        Core_kernel_Time_float[41],
        Core_kernel_Time_float[42],
        Core_kernel_Time_float[43],
        Core_kernel_Time_float[44],
        Core_kernel_Time_float[45],
        Core_kernel_Time_float[47],
        Core_kernel_Time_float[48],
        Core_kernel_Time_float[51],
        Core_kernel_Time_float[52],
        Core_kernel_Time_float[53],
        Core_kernel_Time_float[54],
        Core_kernel_Time_float[55],
        Core_kernel_Time_float[56],
        Core_kernel_Time_float[57],
        Core_kernel_Time_float[58],
        Core_kernel_Time_float[59],
        Core_kernel_Time_float[60],
        Core_kernel_Time_float[61],
        Core_kernel_Time_float[62],
        Core_kernel_Time_float[63],
        Core_kernel_Time_float[64],
        Core_kernel_Time_float[65],
        Core_kernel_Time_float[66],
        Core_kernel_Time_float[67],
        Core_kernel_Time_float[68],
        Core_kernel_Time_float[69],
        Core_kernel_Time_float[70],
        Core_kernel_Time_float[71],
        Core_kernel_Time_float[72],
        Core_kernel_Time_float[73],
        Core_kernel_Time_float[74],
        Core_kernel_Time_float[75],
        Core_kernel_Time_float[76],
        Core_kernel_Time_float[77],
        Core_kernel_Time_float[78],
        Core_kernel_Time_float[79],
        Core_kernel_Time_float[80],
        Core_kernel_Time_float[81],
        Core_kernel_Time_float[82],
        Core_kernel_Time_float[83],
        Core_kernel_Time_float[84],
        Core_kernel_Time_float[49]],
       [0,
        current_execution_context$3,
        _kH_,
        _kC_,
        _kD_,
        _kE_,
        with_local$0,
        find_local$0,
        _kF_,
        _kG_,
        enqueue_job$0,
        thread_safe_enqueue_job,
        _kI_,
        _kJ_,
        cycle_times,
        cycle_times_ns,
        last_cycle_time$1,
        long_cycles$0,
        cycle_count$2,
        total_cycle_time$2,
        event_precision$0,
        event_precision_ns,
        force_current_cycle_to_end$0,
        set_max_num_jobs_per_priority_$1,
        max_num_jobs_per_priority_per_$5,
        set_record_backtraces$1,
        yield$3,
        yield_until_no_jobs_remain$2,
        yield_every$0,
        num_jobs_run$2,
        num_pending_jobs$0,
        cycle_start$2,
        cycle_start_ns],
       [0,
        Core_kernel_Date[1],
        Core_kernel_Date[2],
        Core_kernel_Date[3],
        Core_kernel_Date[4],
        Core_kernel_Date[5],
        Core_kernel_Date[6],
        Core_kernel_Date[7],
        Core_kernel_Date[8],
        Core_kernel_Date[9],
        Core_kernel_Date[10],
        Core_kernel_Date[11],
        Core_kernel_Date[12],
        Core_kernel_Date[13],
        Core_kernel_Date[14],
        Core_kernel_Date[15],
        Core_kernel_Date[19],
        Core_kernel_Date[20],
        Core_kernel_Date[21],
        Core_kernel_Date[22],
        Core_kernel_Date[23],
        Core_kernel_Date[24],
        Core_kernel_Date[25],
        Core_kernel_Date[26],
        Core_kernel_Date[27],
        Core_kernel_Date[28],
        Core_kernel_Date[29],
        Core_kernel_Date[30],
        Core_kernel_Date[31],
        Core_kernel_Date[32],
        Core_kernel_Date[33],
        Core_kernel_Date[34],
        Core_kernel_Date[35],
        Core_kernel_Date[36],
        Core_kernel_Date[37],
        Core_kernel_Date[38],
        Core_kernel_Date[40],
        Core_kernel_Date[43],
        Core_kernel_Date[44],
        Core_kernel_Date[45],
        Core_kernel_Date[46],
        Core_kernel_Date[47],
        Core_kernel_Date[48],
        Core_kernel_Date[49],
        Core_kernel_Date[50],
        Core_kernel_Date[51],
        Core_kernel_Date[52],
        Core_kernel_Date[53],
        Core_kernel_Date[54],
        Core_kernel_Date[55],
        Core_kernel_Date[56],
        Core_kernel_Date[57],
        Core_kernel_Date[58],
        Core_kernel_Date[59],
        Core_kernel_Date[60],
        Core_kernel_Date[61],
        Core_kernel_Date[62],
        Core_kernel_Date[63],
        Core_kernel_Date[64],
        Core_kernel_Date[65],
        Core_kernel_Date[66],
        Core_kernel_Date[67],
        Core_kernel_Date[68],
        Core_kernel_Date[69],
        Core_kernel_Date[70],
        Core_kernel_Date[71],
        Core_kernel_Date[72],
        Core_kernel_Date[73],
        Core_kernel_Date[74],
        Core_kernel_Date[75],
        Core_kernel_Date[76],
        Core_kernel_Date[77],
        Core_kernel_Date[78],
        Core_kernel_Date[79],
        Core_kernel_Date[80],
        Core_kernel_Date[81],
        Core_kernel_Date[82],
        Core_kernel_Date[83],
        Core_kernel_Date[84],
        Core_kernel_Date[85],
        Core_kernel_Date[91],
        Core_kernel_Date[92]],
       _lk_,
       _lj_,
       _ll_,
       _lm_];
    caml_register_global
     (1387,
      Async_kernel_Require_explicit_,
      "Async_kernel__Require_explicit_time_source");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Pipe);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$143);
    caml_call1(Expect_test_collector[4][1],cst_src_pipe_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$144,cst$53);
    var show_debug_messages=[0,0],check_invariant=[0,0];
    function sexp_of_t$53(param){return 17724 <= param?_ln_:_lo_}
    function equal$3(x_003,x_004)
     {if(caml_call2(Ppx_compare_lib[1],x_003,x_004))
       var match=0;
      else
       {var switch$0=0;
        if(17724 <= x_003)
         if(17724 === x_004)var match=0;else switch$0 = 1;
        else
         if(-402004920 === x_004)var match=0;else switch$0 = 1;
        if(switch$0)var match=caml_int_compare(x_003,x_004)}
      return 0 === match?1:0}
    function combine$0(l)
     {function _r0_(l)
       {var match=caml_call3(Core_kernel_List[6],l,-402004920,equal$3);
        return match?-402004920:17724}
      var _r1_=all$0(l);
      return caml_call2(_if_[2],_r1_,_r0_)}
    function downstream_flushed(r){return r[3]}
    function values_read(r){return r[2]}
    function set_values_read(r,v){r[2] = v;return 0}
    function pipe_id(r){return r[1]}
    function _lp_(r,v){return [0,r[1],r[2],v]}
    var
     _lq_=0,
     downstream_flushed$0=
      [0,
       function(param){return 0},
       cst_downstream_flushed,
       _lq_,
       downstream_flushed,
       _lp_];
    function _lr_(r,v){return [0,r[1],v,r[3]]}
    var
     _ls_=[0,set_values_read],
     values_read$0=
      [0,function(param){return 0},cst_values_read,_ls_,values_read,_lr_];
    function _lt_(r,v){return [0,v,r[2],r[3]]}
    var
     _lu_=0,
     pipe_id$0=[0,function(param){return 0},cst_pipe_id,_lu_,pipe_id,_lt_];
    function iter$21(pipe_id_fun,values_read_fun,downstream_flushed_fun)
     {caml_call1(pipe_id_fun,pipe_id$0);
      caml_call1(values_read_fun,values_read$0);
      return caml_call1(downstream_flushed_fun,downstream_flushed$0)}
    function sexp_of_t$54(param)
     {var v_pipe_id=param[1],v_values_read=param[2],bnds=0;
      function _rY_(_rZ_){return 0}
      var
       arg=caml_call1(Sexplib0_Sexp_conv[24],_rY_),
       bnds$0=[0,[1,[0,_lv_,[0,arg,0]]],bnds];
      if(typeof v_values_read === "number")
       var arg$0=_lw_;
      else
       var
        v0=v_values_read[2],
        arg$0=[1,[0,_lz_,[0,sexp_of_t$35(Core_kernel[502],v0),0]]];
      var
       bnds$1=[0,[1,[0,_lx_,[0,arg$0,0]]],bnds$0],
       arg$1=caml_call1(Core_kernel[340],v_pipe_id),
       bnds$2=[0,[1,[0,_ly_,[0,arg$1,0]]],bnds$1];
      return [1,bnds$2]}
    function invariant$17(t)
     {try
       {var
         _rT_=function(_rX_){return 0},
         _rU_=
          function(field)
           {var param=caml_call2(Base_Field[3],field,t);
            if(typeof param === "number")return 0;
            var ivar=param[2];
            if(is_empty(ivar))return 0;
            throw [0,Assert_failure,_lC_]},
         _rV_=iter$21(function(_rW_){return 0},_rU_,_rT_);
        return _rV_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        var
         _rQ_=[0,[1,[0,_lA_,[0,sexp_of_t$54(t),0]]],0],
         _rR_=[0,[1,[0,_lB_,[0,caml_call1(Core_kernel[521],exn),0]]],_rQ_],
         _rS_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Pipe_Consumer_invariant_fa),
            _rR_]];
        return caml_call1(Core_kernel[238],_rS_)}}
    function start(t)
     {return typeof t[2] === "number"
              ?(t[2] = [0,-122467239,caml_call1(create$13,0)],0)
              :0}
    function values_sent_downstream(t)
     {var _rP_=t[2];
      if(typeof _rP_ === "number")return 0;
      var ivar=_rP_[2];
      fill(ivar,0);
      t[2] = -758792467;
      return 0}
    function values_sent_downstream_and_flu(t)
     {var _rN_=t[2];
      if(typeof _rN_ === "number")return caml_call1(t[3],0);
      var when_sent_downstream=_rN_[2];
      function _rO_(param){return caml_call1(t[3],0)}
      return caml_call2(_if_[1],when_sent_downstream,_rO_)}
    function consumer(r){return r[2]}
    function wants(r){return r[1]}
    function _lM_(r,v){return [0,r[1],v]}
    var
     _lN_=0,
     consumer$0=[0,function(param){return 0},cst_consumer,_lN_,consumer,_lM_];
    function _lO_(r,v){return [0,v,r[2]]}
    var
     _lP_=0,
     wants$0=[0,function(param){return 0},cst_wants,_lP_,wants,_lO_];
    function iter$22(wants_fun,consumer_fun)
     {caml_call1(wants_fun,wants$0);
      return caml_call1(consumer_fun,consumer$0)}
    function sexp_of_t$55(of_a,param)
     {var
       v_consumer=param[2],
       v_wants=param[1],
       arg=caml_call2(Core_kernel[438],sexp_of_t$54,v_consumer),
       bnds=[0,[1,[0,_lQ_,[0,arg,0]]],0];
      switch(v_wants[0])
       {case 0:
         var
          v0=v_wants[1],
          v0$0=
           sexp_of_t$35(function(param){return 3456156 <= param?_lD_:_lE_},v0),
          arg$0=[1,[0,_lF_,[0,v0$0,0]]];
         break;
        case 1:
         var
          v0$1=v_wants[1],
          v0$2=
           sexp_of_t$35
            (function(param)
              {if(typeof param === "number")return _lG_;
               var v0=param[2];
               return [1,[0,_lH_,[0,caml_call1(of_a,v0),0]]]},
             v0$1),
          arg$0=[1,[0,_lI_,[0,v0$2,0]]];
         break;
        default:
         var
          v1=v_wants[2],
          v0$3=v_wants[1],
          v0$4=caml_call1(Core_kernel[340],v0$3),
          v1$0=
           sexp_of_t$35
            (function(param)
              {if(typeof param === "number")return _lJ_;
               var v0=param[2];
               return [1,
                       [0,_lK_,[0,caml_call2(Core_kernel_Queue[11],of_a,v0),0]]]},
             v1),
          arg$0=[1,[0,_lL_,[0,v0$4,[0,v1$0,0]]]]}
      var bnds$0=[0,[1,[0,_lR_,[0,arg$0,0]]],bnds];
      return [1,bnds$0]}
    function invariant$18(t)
     {try
       {var
         check=
          function(f,field)
           {return caml_call1(f,caml_call2(Base_Field[3],field,t))},
         _rH_=
          function(param)
           {if(param){var consumer=param[1];return invariant$17(consumer)}
            return 0},
         _rI_=function(_rM_){return check(_rH_,_rM_)},
         _rJ_=
          function(param)
           {if(2 === param[0])
             {var i=param[1];
              if(caml_call2(symbol$3,i,0))return 0;
              throw [0,Assert_failure,_lV_]}
            return 0},
         _rK_=iter$22(function(_rL_){return check(_rJ_,_rL_)},_rI_);
        return _rK_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        var
         _rC_=0,
         _rD_=0,
         _rE_=
          [0,
           [1,[0,_lT_,[0,sexp_of_t$55(function(param){return _lS_},t),_rD_]]],
           _rC_],
         _rF_=[0,[1,[0,_lU_,[0,caml_call1(Core_kernel[521],exn),0]]],_rE_],
         _rG_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Pipe_Blocked_read_invarian),
            _rF_]];
        return caml_call1(Core_kernel[238],_rG_)}}
    function fill_with_eof(t)
     {var _rB_=t[1];
      switch(_rB_[0])
       {case 0:var i=_rB_[1];return fill(i,3456156);
        case 1:var i$0=_rB_[1];return fill(i$0,3456156);
        default:var i$1=_rB_[2];return fill(i$1,3456156)}}
    function fill_when_num_values_read(r){return r[1]}
    function sexp_of_t$56(param)
     {var
       v_ready=param[2],
       v_fill_when_num_values_read=param[1],
       bnds=0,
       arg=
        sexp_of_t$35(function(param){return 17724 <= param?_lW_:_lX_},v_ready),
       bnds$0=[0,[1,[0,_lY_,[0,arg,0]]],bnds],
       arg$0=caml_call1(Core_kernel[340],v_fill_when_num_values_read),
       bnds$1=[0,[1,[0,_lZ_,[0,arg$0,0]]],bnds$0];
      return [1,bnds$1]}
    function fill$2(t,v){return fill(t[2],v)}
    function upstream_flusheds(r){return r[12]}
    function consumers(r){return r[11]}
    function set_consumers(r,v){r[11] = v;return 0}
    function read_closed(r){return r[10]}
    function closed$0(r){return r[9]}
    function blocked_reads(r){return r[8]}
    function blocked_flushes(r){return r[7]}
    function num_values_read(r){return r[6]}
    function set_num_values_read(r,v){r[6] = v;return 0}
    function pushback(r){return r[5]}
    function set_pushback(r,v){r[5] = v;return 0}
    function size_budget(r){return r[4]}
    function set_size_budget(r,v){r[4] = v;return 0}
    function buffer(r){return r[3]}
    function set_buffer(r,v){r[3] = v;return 0}
    function info(r){return r[2]}
    function set_info(r,v){r[2] = v;return 0}
    function id$5(r){return r[1]}
    function _l0_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],v]}
    var
     _l1_=0,
     upstream_flusheds$0=
      [0,
       function(param){return 0},
       cst_upstream_flusheds,
       _l1_,
       upstream_flusheds,
       _l0_];
    function _l2_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],v,r[12]]}
    var
     _l3_=[0,set_consumers],
     consumers$0=
      [0,function(param){return 0},cst_consumers,_l3_,consumers,_l2_];
    function _l4_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],v,r[11],r[12]]}
    var
     _l5_=0,
     read_closed$0=
      [0,function(param){return 0},cst_read_closed,_l5_,read_closed,_l4_];
    function _l6_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],v,r[10],r[11],r[12]]}
    var
     _l7_=0,
     closed$1=[0,function(param){return 0},cst_closed,_l7_,closed$0,_l6_];
    function _l8_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],r[7],v,r[9],r[10],r[11],r[12]]}
    var
     _l9_=0,
     blocked_reads$0=
      [0,function(param){return 0},cst_blocked_reads,_l9_,blocked_reads,_l8_];
    function _l__(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],r[6],v,r[8],r[9],r[10],r[11],r[12]]}
    var
     _l$_=0,
     blocked_flushes$0=
      [0,
       function(param){return 0},
       cst_blocked_flushes,
       _l$_,
       blocked_flushes,
       _l__];
    function _ma_(r,v)
     {return [0,r[1],r[2],r[3],r[4],r[5],v,r[7],r[8],r[9],r[10],r[11],r[12]]}
    var
     _mb_=[0,set_num_values_read],
     num_values_read$0=
      [0,
       function(param){return 0},
       cst_num_values_read,
       _mb_,
       num_values_read,
       _ma_];
    function _mc_(r,v)
     {return [0,r[1],r[2],r[3],r[4],v,r[6],r[7],r[8],r[9],r[10],r[11],r[12]]}
    var
     _md_=[0,set_pushback],
     pushback$0=[0,function(param){return 0},cst_pushback,_md_,pushback,_mc_];
    function _me_(r,v)
     {return [0,r[1],r[2],r[3],v,r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12]]}
    var
     _mf_=[0,set_size_budget],
     size_budget$0=
      [0,function(param){return 0},cst_size_budget,_mf_,size_budget,_me_];
    function _mg_(r,v)
     {return [0,r[1],r[2],v,r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12]]}
    var
     _mh_=[0,set_buffer],
     buffer$0=[0,function(param){return 0},cst_buffer,_mh_,buffer,_mg_];
    function _mi_(r,v)
     {return [0,r[1],v,r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12]]}
    var
     _mj_=[0,set_info],
     info$0=[0,function(param){return 0},cst_info,_mj_,info,_mi_];
    function _mk_(r,v)
     {return [0,v,r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12]]}
    var _ml_=0,id$6=[0,function(param){return 0},cst_id$2,_ml_,id$5,_mk_];
    function iter$23
     (id_fun,
      info_fun,
      buffer_fun,
      size_budget_fun,
      pushback_fun,
      num_values_read_fun,
      blocked_flushes_fun,
      blocked_reads_fun,
      closed_fun,
      read_closed_fun,
      consumers_fun,
      upstream_flusheds_fun)
     {caml_call1(id_fun,id$6);
      caml_call1(info_fun,info$0);
      caml_call1(buffer_fun,buffer$0);
      caml_call1(size_budget_fun,size_budget$0);
      caml_call1(pushback_fun,pushback$0);
      caml_call1(num_values_read_fun,num_values_read$0);
      caml_call1(blocked_flushes_fun,blocked_flushes$0);
      caml_call1(blocked_reads_fun,blocked_reads$0);
      caml_call1(closed_fun,closed$1);
      caml_call1(read_closed_fun,read_closed$0);
      caml_call1(consumers_fun,consumers$0);
      return caml_call1(upstream_flusheds_fun,upstream_flusheds$0)}
    function sexp_of_pipe(of_a,of_phantom,param)
     {var
       v_id=param[1],
       v_info=param[2],
       v_buffer=param[3],
       v_size_budget=param[4],
       v_pushback=param[5],
       v_num_values_read=param[6],
       v_read_closed=param[10],
       v_closed=param[9],
       v_blocked_reads=param[8],
       v_blocked_flushes=param[7],
       v_consumers=param[11],
       v_upstream_flusheds=param[12],
       bnds=0;
      function _rw_(f)
       {function _rz_(_rA_){return 0}
        return caml_call1(Sexplib0_Sexp_conv[24],_rz_)}
      var
       arg=caml_call2(Core_kernel_Bag[3],_rw_,v_upstream_flusheds),
       bnds$0=[0,[1,[0,_mm_,[0,arg,0]]],bnds],
       arg$0=caml_call2(Core_kernel[405],sexp_of_t$54,v_consumers),
       bnds$1=[0,[1,[0,_mn_,[0,arg$0,0]]],bnds$0],
       arg$1=sexp_of_t$35(Core_kernel[502],v_read_closed),
       bnds$2=[0,[1,[0,_mo_,[0,arg$1,0]]],bnds$1],
       arg$2=sexp_of_t$35(Core_kernel[502],v_closed),
       bnds$3=[0,[1,[0,_mp_,[0,arg$2,0]]],bnds$2];
      function _rx_(_ry_){return sexp_of_t$55(of_a,_ry_)}
      var
       arg$3=caml_call2(Core_kernel_Queue[11],_rx_,v_blocked_reads),
       bnds$4=[0,[1,[0,_mq_,[0,arg$3,0]]],bnds$3],
       arg$4=caml_call2(Core_kernel_Queue[11],sexp_of_t$56,v_blocked_flushes),
       bnds$5=[0,[1,[0,_mr_,[0,arg$4,0]]],bnds$4],
       arg$5=caml_call1(Core_kernel[340],v_num_values_read),
       bnds$6=[0,[1,[0,_ms_,[0,arg$5,0]]],bnds$5],
       arg$6=sexp_of_t$35(Core_kernel[502],v_pushback),
       bnds$7=[0,[1,[0,_mt_,[0,arg$6,0]]],bnds$6],
       arg$7=caml_call1(Core_kernel[340],v_size_budget),
       bnds$8=[0,[1,[0,_mu_,[0,arg$7,0]]],bnds$7],
       arg$8=caml_call2(Core_kernel_Queue[11],of_a,v_buffer),
       bnds$9=[0,[1,[0,_mv_,[0,arg$8,0]]],bnds$8];
      if(v_info)
       var
        v=v_info[1],
        arg$9=caml_call1(Core_kernel_Sexp[88],v),
        bnd=[1,[0,_mw_,[0,arg$9,0]]],
        bnds$10=[0,bnd,bnds$9];
      else
       var bnds$10=bnds$9;
      var
       arg$10=caml_call2(Sexp_hidden_in_test[10],Core_kernel[340],v_id),
       bnds$11=[0,[1,[0,_mx_,[0,arg$10,0]]],bnds$10];
      return [1,bnds$11]}
    function hash(t){return caml_call1(Core_kernel_Hashtbl[1],t[1])}
    function equal$4(t1,t2){return caml_call2(Core_kernel[231],t1,t2)}
    function compare$1(t1,t2)
     {return caml_call2(Core_kernel_Int[112],t1[1],t2[1])}
    function is_closed$0(t){return is_full(t[9])}
    function is_read_closed(t){return is_full(t[10])}
    function closed$2(t){return t[9]}
    function pushback$1(t){return t[5]}
    function length$5(t){return caml_call1(Core_kernel_Queue[13],t[3])}
    function is_empty$1(t){return caml_call2(symbol$2,length$5(t),0)}
    function invariant$19(t)
     {try
       {var
         check=
          function(f,field)
           {return caml_call1(f,caml_call2(Base_Field[3],field,t))},
         _qR_=function(_rv_){return 0},
         _qS_=
          function(l)
           {function _ru_(consumer)
             {invariant$17(consumer);
              if(caml_call2(symbol$2,consumer[1],t[1]))return 0;
              throw [0,Assert_failure,_mC_]}
            return caml_call2(Core_kernel_List[9],l,_ru_)},
         _qT_=function(_rt_){return check(_qS_,_rt_)},
         _qU_=function(_rs_){return 0},
         _qV_=function(_rr_){return 0},
         _qW_=
          function(blocked_reads)
           {if
             (1
              -
              is_empty$1(t)
              &&
              !
              caml_call1(Core_kernel_Queue[14],blocked_reads))
             throw [0,Assert_failure,_mF_];
            function _rn_(read)
             {invariant$18(read);
              var _rp_=read[1];
              switch(_rp_[0])
               {case 0:var i=_rp_[1],_rq_=is_empty(i);break;
                case 1:var i$0=_rp_[1],_rq_=is_empty(i$0);break;
                default:var i$1=_rp_[2],_rq_=is_empty(i$1)}
              if(_rq_)return 0;
              throw [0,Assert_failure,_mD_]}
            caml_call2(Core_kernel_Queue[15],blocked_reads,_rn_);
            var _ro_=is_closed$0(t);
            if(_ro_)
             {if(caml_call1(Core_kernel_Queue[14],blocked_reads))return 0;
              throw [0,Assert_failure,_mE_]}
            return _ro_},
         _qX_=function(_rm_){return check(_qW_,_rm_)},
         _qY_=
          function(blocked_flushes)
           {function _rh_(f)
             {if(caml_call2(symbol$3,f[1],t[6]))return 0;
              throw [0,Assert_failure,_mG_]}
            caml_call2(Core_kernel_Queue[15],blocked_flushes,_rh_);
            var
             _ri_=Core_kernel_Int[112],
             _rj_=caml_call1(Core_kernel_Queue[25],blocked_flushes),
             _rk_=
              caml_call2(Core_kernel_List[71],_rj_,fill_when_num_values_read);
            if(caml_call2(Core_kernel_List[137],_rk_,_ri_))
             {var _rl_=is_empty$1(t);
              if(_rl_)
               {if(caml_call1(Core_kernel_Queue[14],blocked_flushes))return 0;
                throw [0,Assert_failure,_mH_]}
              return _rl_}
            throw [0,Assert_failure,_mI_]},
         _qZ_=function(_rg_){return check(_qY_,_rg_)},
         _q0_=function(_rf_){return 0},
         _q1_=
          function(pushback)
           {var
             _rb_=t[4],
             _rc_=caml_call2(symbol$1,length$5(t),_rb_),
             _rd_=_rc_ || is_closed$0(t),
             _re_=is_full(pushback);
            if(caml_call2(Core_kernel_Bool[27],_re_,_rd_))return 0;
            throw [0,Assert_failure,_mJ_]},
         _q2_=function(_ra_){return check(_q1_,_ra_)},
         _q3_=
          function(size_budget)
           {if(caml_call2(symbol$0,size_budget,0))return 0;
            throw [0,Assert_failure,_mK_]},
         _q4_=function(_q$_){return check(_q3_,_q$_)},
         _q5_=function(_q__){return 0},
         _q6_=function(_q9_){return 0},
         _q7_=
          iter$23
           (function(_q8_){return 0},
            _q6_,
            _q5_,
            _q4_,
            _q2_,
            _q0_,
            _qZ_,
            _qX_,
            _qV_,
            _qU_,
            _qT_,
            _qR_);
        return _q7_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        var
         _qL_=0,
         _qM_=0,
         _qN_=function(param){return _my_},
         _qO_=
          [0,
           [1,
            [0,
             _mA_,
             [0,sexp_of_pipe(function(param){return _mz_},_qN_,t),_qM_]]],
           _qL_],
         _qP_=[0,[1,[0,_mB_,[0,caml_call1(Core_kernel[521],exn),0]]],_qO_],
         _qQ_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Pipe_invariant_failed),
            _qP_]];
        return caml_call1(Core_kernel[238],_qQ_)}}
    function sexp_of_phantom(v){throw [0,Assert_failure,_mL_]}
    function sexp_of_t$57(of_a,v){return sexp_of_pipe(of_a,sexp_of_phantom,v)}
    function sexp_of_phantom$0(v){throw [0,Assert_failure,_mM_]}
    function sexp_of_t$58(of_a,v)
     {return sexp_of_pipe(of_a,sexp_of_phantom$0,v)}
    var id_ref=[0,0];
    function create_internal$1(info,initial_buffer)
     {id_ref[1]++;
      var
       _qF_=caml_call1(Core_kernel_Bag[22],0),
       _qG_=caml_call1(create$13,0),
       _qH_=caml_call1(create$13,0),
       _qI_=caml_call2(Core_kernel_Queue[60],0,0),
       _qJ_=caml_call2(Core_kernel_Queue[60],0,0),
       _qK_=caml_call1(create$13,0),
       t=[0,id_ref[1],info,initial_buffer,0,_qK_,0,_qJ_,_qI_,_qH_,_qG_,0,_qF_];
      return t}
    function create$22(info,param)
     {var t=create_internal$1(info,caml_call2(Core_kernel_Queue[60],0,0));
      fill(t[5],0);
      if(check_invariant[1])invariant$19(t);
      return [0,t,t]}
    function update_pushback(t)
     {var _qC_=t[4];
      if(! caml_call2(symbol$1,length$5(t),_qC_) && ! is_closed$0(t))
       {var
         _qD_=is_full(t[5]),
         _qE_=_qD_?(t[5] = caml_call1(create$13,0),0):_qD_;
        return _qE_}
      return fill_if_empty(t[5],0)}
    function close(t)
     {if(show_debug_messages[1])
       {var
         _qy_=function(param){return _mN_},
         _qz_=function(param){return _mO_};
        caml_call3
         (eprints,
          cst_close,
          t,
          function(_qB_){return sexp_of_pipe(_qz_,_qy_,_qB_)})}
      if(check_invariant[1])invariant$19(t);
      var _qA_=1 - is_closed$0(t);
      if(_qA_)
       {fill(t[9],0);
        if(is_empty$1(t))
         {caml_call2(Core_kernel_Queue[15],t[8],fill_with_eof);
          caml_call1(Core_kernel_Queue[46],t[8])}
        return update_pushback(t)}
      return _qA_}
    function close_read(t)
     {if(show_debug_messages[1])
       {var
         _qt_=function(param){return _mP_},
         _qu_=function(param){return _mQ_};
        caml_call3
         (eprints,
          cst_close_read,
          t,
          function(_qx_){return sexp_of_pipe(_qu_,_qt_,_qx_)})}
      if(check_invariant[1])invariant$19(t);
      var _qv_=1 - is_read_closed(t);
      if(_qv_)
       {fill(t[10],0);
        var _qw_=function(flush){return fill$2(flush,-402004920)};
        caml_call2(Core_kernel_Queue[15],t[7],_qw_);
        caml_call1(Core_kernel_Queue[46],t[7]);
        caml_call1(Core_kernel_Queue[46],t[3]);
        update_pushback(t);
        return close(t)}
      return _qv_}
    function create_reader_not_close_on_exc(f)
     {var match=create$22(0,0),w=match[2],r=match[1];
      function _qs_(param){return close(w)}
      upon$1(caml_call1(f,w),_qs_);
      return r}
    function create_reader(close_on_exception,f)
     {if(close_on_exception)
       {var
         match=create$22(0,0),
         w=match[2],
         r=match[1],
         _qr_=function(param){close(w);return caml_call1(_ie_,0)};
        protect(0,0,0,0,0,function(param){return caml_call1(f,w)},_qr_);
        return r}
      return create_reader_not_close_on_exc(f)}
    function create_writer(f)
     {var match=create$22(0,0),w=match[2],r=match[1];
      function _qq_(param){close_read(r);return caml_call1(_ie_,0)}
      protect(0,0,0,0,0,function(param){return caml_call1(f,r)},_qq_);
      return w}
    function values_were_read(t,consumer)
     {caml_call2(Core_kernel_Option[19],consumer,start);
      for(;;)
       {var match=caml_call1(Core_kernel_Queue[44],t[7]);
        if(match)
         {var flush=match[1],_qo_=caml_call2(symbol$0,t[6],flush[1]);
          if(_qo_)
           {caml_call1(Core_kernel_Queue[43],t[7]);
            if(consumer)
             {var
               consumer$0=consumer[1],
               _qp_=
                function(flush)
                  {return function(flush_result)
                    {return fill$2(flush,flush_result)}}
                 (flush);
              upon$1(values_sent_downstream_and_flu(consumer$0),_qp_)}
            else
             fill$2(flush,17724);
            continue}
          return _qo_}
        return 0}}
    function consume_one(t,consumer)
     {if(caml_call2(symbol$0,length$5(t),1))
       {var result=caml_call1(Core_kernel_Queue[43],t[3]);
        t[6] = t[6] + 1 | 0;
        values_were_read(t,consumer);
        update_pushback(t);
        return result}
      throw [0,Assert_failure,_mR_]}
    function consume(t,max_queue_length,consumer)
     {if(caml_call2(symbol$0,max_queue_length,0))
       {if(caml_call2(symbol$0,max_queue_length,length$5(t)))
         {var result=t[3];
          t[3] = caml_call2(Core_kernel_Queue[60],0,0);
          var _qn_=caml_call1(Core_kernel_Queue[13],result);
          t[6] = t[6] + _qn_ | 0;
          values_were_read(t,consumer);
          update_pushback(t);
          return result}
        t[6] = t[6] + max_queue_length | 0;
        values_were_read(t,consumer);
        var result$0=caml_call2(Core_kernel_Queue[60],[0,max_queue_length],0);
        caml_call4(Core_kernel_Queue[63],t[3],result$0,[0,max_queue_length],0);
        update_pushback(t);
        return result$0}
      throw [0,Assert_failure,_mS_]}
    function set_size_budget$0(t,size_budget)
     {if(caml_call2(symbol$4,size_budget,0))
       {var
         _ql_=
          [0,[1,[0,_mT_,[0,caml_call1(Core_kernel[340],size_budget),0]]],0],
         _qm_=
          [1,
           [0,caml_call1(Sexplib0_Sexp_conv[7],cst_negative_size_budget),_ql_]];
        caml_call1(Core_kernel[238],_qm_)}
      t[4] = size_budget;
      return update_pushback(t)}
    function start_write(t)
     {if(show_debug_messages[1])
       {var
         _qc_=function(param){return _mU_},
         _qd_=function(param){return _mV_};
        caml_call3
         (eprints,
          cst_write,
          t,
          function(_qk_){return sexp_of_pipe(_qd_,_qc_,_qk_)})}
      if(check_invariant[1])invariant$19(t);
      var _qe_=is_closed$0(t);
      if(_qe_)
       {var
         _qf_=0,
         _qg_=0,
         _qh_=function(param){return _mW_},
         _qi_=
          [0,
           [1,
            [0,
             _mY_,
             [0,sexp_of_pipe(function(param){return _mX_},_qh_,t),_qg_]]],
           _qf_],
         _qj_=
          [1,
           [0,caml_call1(Sexplib0_Sexp_conv[7],cst_write_to_closed_pipe),_qi_]];
        return caml_call1(Core_kernel[238],_qj_)}
      return _qe_}
    function finish_write(t)
     {for(;;)
       {if(! caml_call1(Core_kernel_Queue[14],t[8]) && ! is_empty$1(t))
         {var
           blocked_read=caml_call1(Core_kernel_Queue[43],t[8]),
           consumer=blocked_read[2],
           _qb_=blocked_read[1];
          switch(_qb_[0])
           {case 0:var ivar=_qb_[1];fill(ivar,17724);break;
            case 1:
             var ivar$0=_qb_[1];
             fill(ivar$0,[0,17724,consume_one(t,consumer)]);
             break;
            default:
             var ivar$1=_qb_[2],max_queue_length=_qb_[1];
             fill(ivar$1,[0,17724,consume(t,max_queue_length,consumer)])}
          continue}
        return update_pushback(t)}}
    function transfer_in_without_pushback(t,from)
     {start_write(t);
      caml_call4(Core_kernel_Queue[63],from,t[3],0,0);
      return finish_write(t)}
    function transfer_in(t,from)
     {transfer_in_without_pushback(t,from);return t[5]}
    function write(t,q){return transfer_in(t,q)}
    function write_without_pushback(t,value)
     {start_write(t);
      caml_call2(Core_kernel_Queue[40],t[3],value);
      return finish_write(t)}
    function write$0(t,value){write_without_pushback(t,value);return t[5]}
    function write_when_ready(t,f)
     {function _qa_(param)
       {return is_closed$0(t)
                ?-1025106484
                :[0,
                  17724,
                  caml_call1
                   (f,function(x){return write_without_pushback(t,x)})]}
      return caml_call2(_if_[2],t[5],_qa_)}
    function write_if_open(t,x)
     {return is_closed$0(t)?caml_call1(_ie_,0):write$0(t,x)}
    function write_without_pushback_if_open(t,x)
     {var _p$_=1 - is_closed$0(t);
      return _p$_?write_without_pushback(t,x):_p$_}
    function ensure_consumer_matches(consumer,t)
     {if(consumer)
       {var
         consumer$0=consumer[1],
         _p5_=caml_call2(symbol$5,t[1],consumer$0[1]);
        if(_p5_)
         {var
           _p6_=0,
           _p7_=0,
           _p8_=
            [0,
             [1,
              [0,_m0_,[0,sexp_of_t$57(function(param){return _mZ_},t),_p7_]]],
             _p6_],
           _p9_=[0,[1,[0,_m1_,[0,sexp_of_t$54(consumer$0),0]]],_p8_],
           _p__=
            [1,
             [0,
              caml_call1(Sexplib0_Sexp_conv[7],cst_Attempt_to_use_consumer_wi),
              _p9_]];
          return caml_call1(Core_kernel[238],_p__)}
        return _p5_}
      return 0}
    function start_read(consumer,t,label)
     {if(show_debug_messages[1])
       {var
         _p2_=function(param){return _m2_},
         _p3_=function(param){return _m3_};
        caml_call3
         (eprints,label,t,function(_p4_){return sexp_of_pipe(_p3_,_p2_,_p4_)})}
      if(check_invariant[1])invariant$19(t);
      return ensure_consumer_matches(consumer,t)}
    function gen_read_now(consumer,t,consume)
     {start_read(consumer,t,cst_read_now);
      if(is_empty$1(t))return is_closed$0(t)?3456156:-445537353;
      if(caml_call1(Core_kernel_Queue[14],t[8]))
       return [0,17724,caml_call2(consume,t,consumer)];
      throw [0,Assert_failure,_m4_]}
    function get_max_queue_length(max_queue_length)
     {if(max_queue_length)
       {var max_queue_length$0=max_queue_length[1];
        if(caml_call2(symbol$1,max_queue_length$0,0))
         {var
           _p0_=
            [0,
             [1,
              [0,_m5_,[0,caml_call1(Core_kernel[340],max_queue_length$0),0]]],
             0],
           _p1_=
            [1,
             [0,caml_call1(Sexplib0_Sexp_conv[7],cst_max_queue_length_0),_p0_]];
          caml_call1(Core_kernel[238],_p1_)}
        return max_queue_length$0}
      return Core_kernel_Int[63]}
    function read_now(consumer,max_queue_length,t)
     {var max_queue_length$0=get_max_queue_length(max_queue_length);
      return gen_read_now
              (consumer,
               t,
               function(t,consumer)
                {return consume(t,max_queue_length$0,consumer)})}
    function read_now$0(consumer,t)
     {return gen_read_now(consumer,t,consume_one)}
    function peek$1(t){return caml_call1(Core_kernel_Queue[44],t[3])}
    function clear$1(t){read_now(0,0,t);return 0}
    function read(consumer,max_queue_length,t)
     {var max_queue_length$0=get_max_queue_length(max_queue_length);
      start_read(consumer,t,cst_read);
      var r=read_now(consumer,[0,max_queue_length$0],t);
      if(typeof r === "number" && ! (3456156 <= r))
       return create$14
               (function(ivar)
                 {return caml_call2
                          (Core_kernel_Queue[40],
                           t[8],
                           [0,[2,max_queue_length$0,ivar],consumer])});
      return caml_call1(_ie_,r)}
    function read$0(consumer,t)
     {start_read(consumer,t,cst_read$0);
      if(is_empty$1(t))
       return is_closed$0(t)
               ?caml_call1(_ie_,3456156)
               :create$14
                 (function(ivar)
                   {return caml_call2
                            (Core_kernel_Queue[40],t[8],[0,[1,ivar],consumer])});
      if(caml_call1(Core_kernel_Queue[14],t[8]))
       return caml_call1(_ie_,[0,17724,consume_one(t,consumer)]);
      throw [0,Assert_failure,_m6_]}
    function values_available(t)
     {start_read(0,t,cst_values_available);
      if(is_empty$1(t))
       {if(is_closed$0(t))return caml_call1(_ie_,3456156);
        var match=caml_call1(Core_kernel_Queue[61],t[8]);
        if(match)
         {var _pY_=match[1],_pZ_=_pY_[1];
          if(0 === _pZ_[0] && ! _pY_[2]){var ivar=_pZ_[1];return ivar}}
        return create$14
                (function(ivar)
                  {return caml_call2
                           (Core_kernel_Queue[40],t[8],[0,[0,ivar],0])})}
      return caml_call1(_ie_,17724)}
    function read_choice(t)
     {function _pX_(param){return read_now$0(0,t)}
      return [0,values_available(t),_pX_]}
    function read_choice_single_consumer_ex(t,here)
     {function _pT_(x)
       {if(typeof x === "number" && ! (3456156 <= x))
         {var
           _pV_=
            [0,
             [1,
              [0,
               _m7_,
               [0,caml_call1(Core_kernel_Source_code_positi[1],here),0]]],
             0],
           _pW_=
            [1,
             [0,
              caml_call1(Sexplib0_Sexp_conv[7],cst_Pipe_read_choice_single_co),
              _pV_]];
          return caml_call1(Core_kernel[238],_pW_)}
        return x}
      var _pU_=read_choice(t);
      return caml_call2(Choice[1],_pU_,_pT_)}
    function read_exactly(consumer,t,num_values)
     {start_read(consumer,t,cst_read_exactly);
      if(caml_call2(symbol$1,num_values,0))
       {var
         _pP_=[0,[1,[0,_m8_,[0,caml_call1(Core_kernel[340],num_values),0]]],0],
         _pQ_=
          [1,
           [0,
            caml_call1(Sexplib0_Sexp_conv[7],cst_Pipe_read_exactly_got_num_),
            _pP_]];
        caml_call1(Core_kernel[238],_pQ_)}
      return create$14
              (function(finish)
                {var result=caml_call2(Core_kernel_Queue[60],0,0);
                 function loop(param)
                  {var already_read=caml_call1(Core_kernel_Queue[13],result);
                   if(caml_call2(symbol$1,already_read,num_values))
                    {if(caml_call2(symbol$2,already_read,num_values))
                      return fill(finish,[0,-876407060,result]);
                     var
                      _pR_=
                       function(param)
                        {if(typeof param === "number")
                          {var
                            _pS_=
                             caml_call2(symbol$2,already_read,0)
                              ?3456156
                              :[0,287952037,result];
                           return fill(finish,_pS_)}
                         var q=param[2];
                         caml_call4(Core_kernel_Queue[63],q,result,0,0);
                         return loop(0)};
                     return caml_call2
                             (_ia_,
                              read(consumer,[0,num_values - already_read | 0],t),
                              _pR_)}
                   throw [0,Assert_failure,_m9_]}
                 return loop(0)})}
    function downstream_flushed$1(t)
     {return is_empty$1(t)
              ?caml_call1(Core_kernel_List[8],t[11])
                ?caml_call1(_ie_,17724)
                :combine$0
                  (caml_call2
                    (Core_kernel_List[71],t[11],values_sent_downstream_and_flu))
              :create$14
                (function(ready)
                  {var _pO_=length$5(t);
                   return caml_call2
                           (Core_kernel_Queue[40],t[7],[0,t[6] + _pO_ | 0,ready])})}
    function upstream_flushed(t)
     {if(caml_call1(Core_kernel_Bag[6],t[12]))return downstream_flushed$1(t);
      function _pM_(f){return caml_call1(f,0)}
      var _pN_=caml_call1(Core_kernel_Bag[17],t[12]);
      return combine$0(caml_call2(Core_kernel_List[71],_pN_,_pM_))}
    function add_consumer(t,downstream_flushed)
     {var consumer=[0,t[1],-758792467,downstream_flushed];
      t[11] = [0,consumer,t[11]];
      return consumer}
    function consumer$1(param){var t=param[1];return t[2]}
    function create$23(upstream,downstream)
     {function upstream_flushed$0(param){return upstream_flushed(upstream)}
      var
       _pL_=
        caml_call2(Core_kernel_Bag[23],downstream[12],upstream_flushed$0);
      return [0,
              [0,
               downstream,
               add_consumer
                (upstream,
                 function(param){return downstream_flushed$1(downstream)}),
               _pL_]]}
    function sexp_of_t$59(param)
     {if(typeof param === "number")return param?_m__:_m$_;
      var v0=param[1],v0$0=sexp_of_t$54(v0);
      return [1,[0,_na_,[0,v0$0,0]]]}
    var Flushed=[0,sexp_of_t$59];
    function fold_gen(read_now,opt,t,init,f)
     {if(opt)var sth=opt[1],flushed=sth;else var flushed=1;
      if(typeof flushed === "number")
       var
        consumer=
         flushed
          ?0
          :[0,add_consumer(t,function(param){return caml_call1(_ie_,17724)})];
      else
       var consumer$0=flushed[1],consumer=[0,consumer$0];
      if(check_invariant[1])invariant$19(t);
      ensure_consumer_matches(consumer,t);
      return create$14
              (function(finished)
                {function _pJ_(param)
                  {function loop(b)
                    {var match=caml_call2(read_now,consumer,t);
                     if(typeof match === "number")
                      {if(3456156 <= match)return fill(finished,b);
                       var _pK_=function(param){return loop(b)};
                       return caml_call2(_ia_,values_available(t),_pK_)}
                     var v=match[2];
                     return caml_call3(f,b,v,continue$0)}
                   function continue$0(b)
                    {caml_call2
                      (Core_kernel_Option[19],consumer,values_sent_downstream);
                     return loop(b)}
                   return loop(init)}
                 return caml_call2(_ia_,caml_call1(_ie_,0),_pJ_)})}
    function fold$20(flushed,max_queue_length,t,init,f)
     {function _pG_(b,q,loop){return caml_call2(_ia_,caml_call2(f,b,q),loop)}
      return fold_gen
              (function(_pH_)
                {return function(_pI_)
                  {return read_now(_pH_,max_queue_length,_pI_)}},
               flushed,
               t,
               init,
               _pG_)}
    function fold$21(flushed,t,init,f)
     {return fold_gen
              (read_now$0,
               flushed,
               t,
               init,
               function(b,a,loop)
                {return caml_call2(_ia_,caml_call2(f,b,a),loop)})}
    function fold_without_pushback(consumer,t,init,f)
     {function _pE_(b,a,loop){return caml_call1(loop,caml_call2(f,b,a))}
      if(consumer)var c=consumer[1],_pF_=[0,[0,c]];else var _pF_=0;
      return fold_gen(read_now$0,_pF_,t,init,_pE_)}
    function with_error_to_current_monitor(opt,f,a)
     {if(opt)
       var sth=opt[1],continue_on_error=sth;
      else
       var continue_on_error=0;
      if(continue_on_error)
       {var
         _pB_=
          function(param)
           {if(0 === param[0])return 0;
            var exn=param[1],_pD_=extract_exn(exn);
            return send_exn(current(0),0,_pD_)},
         _pC_=try_with(0,0,0,0,0,0,function(param){return caml_call1(f,a)});
        return caml_call2(_if_[2],_pC_,_pB_)}
      return caml_call1(f,a)}
    function iter$24(continue_on_error,flushed,max_queue_length,t,f)
     {return fold$20
              (flushed,
               max_queue_length,
               t,
               0,
               function(param,q)
                {return with_error_to_current_monitor(continue_on_error,f,q)})}
    function iter$25(continue_on_error,flushed,t,f)
     {return fold_gen
              (read_now$0,
               flushed,
               t,
               0,
               function(param,a,loop)
                {function _pA_(param){return caml_call1(loop,0)}
                 return caml_call2
                         (_ia_,
                          with_error_to_current_monitor(continue_on_error,f,a),
                          _pA_)})}
    function iter_without_pushback(consumer,opt,max_iterations_per_job,t,f)
     {if(opt)
       var sth=opt[1],continue_on_error=sth;
      else
       var continue_on_error=0;
      ensure_consumer_matches(consumer,t);
      if(max_iterations_per_job)
       {var max_iterations_per_job$0=max_iterations_per_job[1];
        if(caml_call2(symbol$1,max_iterations_per_job$0,0))
         {var
           _pu_=
            [0,
             [1,
              [0,
               _nb_,
               [0,caml_call1(Core_kernel[340],max_iterations_per_job$0),0]]],
             0],
           _pv_=
            [1,
             [0,
              caml_call1(Sexplib0_Sexp_conv[7],cst_iter_without_pushback_got_),
              _pu_]];
          caml_call1(Core_kernel[238],_pv_)}
        var max_iterations_per_job$1=max_iterations_per_job$0}
      else
       var max_iterations_per_job$1=Core_kernel_Int[63];
      var
       f$0=
        continue_on_error
         ?function(a)
           {try
             {var _pz_=caml_call1(f,a);return _pz_}
            catch(exn)
             {exn = caml_wrap_exception(exn);
              return send_exn(current(0),0,exn)}}
         :f;
      return create$14
              (function(finished)
                {function _pw_(param)
                  {function start(param)
                    {var remaining=max_iterations_per_job$1;
                     for(;;)
                      {if(caml_call2(symbol$2,remaining,0))
                        {var _px_=function(param){return start(0)};
                         return caml_call2(_ia_,caml_call1(_ie_,0),_px_)}
                       var match=read_now$0(consumer,t);
                       if(typeof match === "number")
                        {if(3456156 <= match)return fill(finished,0);
                         var _py_=function(param){return start(0)};
                         return caml_call2(_ia_,values_available(t),_py_)}
                       var a=match[2];
                       caml_call1(f$0,a);
                       var remaining$0=remaining - 1 | 0,remaining=remaining$0;
                       continue}}
                   return start(0)}
                 return caml_call2(_ia_,caml_call1(_ie_,0),_pw_)})}
    function drain(t)
     {return iter$24(0,0,0,t,function(param){return caml_call1(_ie_,0)})}
    function drain_and_count(t)
     {return fold$20
              (0,
               0,
               t,
               0,
               function(sum,q)
                {return caml_call1
                         (_ie_,sum + caml_call1(Core_kernel_Queue[13],q) | 0)})}
    function read_all(input)
     {var result=caml_call2(Core_kernel_Queue[60],0,0);
      function _ps_(param){return result}
      var
       _pt_=
        iter$24
         (0,
          0,
          0,
          input,
          function(q)
           {caml_call4(Core_kernel_Queue[63],q,result,0,0);
            return caml_call1(_ie_,0)});
      return caml_call2(_if_[2],_pt_,_ps_)}
    function to_list$13(r)
     {var _pr_=Core_kernel_Queue[25];return caml_call2(_id_,read_all(r),_pr_)}
    function to_stream_deprecated(t)
     {return create$19
              (function(tail)
                {function _pq_(param){return close_exn(tail)}
                 return caml_call2
                         (_ia_,
                          iter_without_pushback
                           (0,0,0,t,function(x){return extend(tail,x)}),
                          _pq_)})}
    function of_stream_deprecated(s)
     {var
       match=create$22(0,0),
       w=match[2],
       r=match[1],
       q=caml_call2(Core_kernel_Queue[60],0,0);
      function transfer(param)
       {var _pp_=1 - caml_call1(Core_kernel_Queue[14],q);
        return _pp_?(write(w,q),0):_pp_}
      function loop$0(counter,s)
       {if(is_closed$0(w))throw [0,Assert_failure,_nc_];
        var next_deferred=caml_call1(_iH_,s),match=peek$0(next_deferred);
        if(match)
         {var next=match[1];
          if(counter < 50)
           {var counter$0=counter + 1 | 0;return loop_next$0(counter$0,next)}
          return caml_trampoline_return(loop_next$0,[0,next])}
        transfer(0);
        return upon$1(next_deferred,check_closed_loop_next)}
      function loop_next$0(counter,param)
       {if(param)
         {var s=param[2],x=param[1];
          caml_call2(Core_kernel_Queue[40],q,x);
          if(counter < 50)
           {var counter$0=counter + 1 | 0;return loop$0(counter$0,s)}
          return caml_trampoline_return(loop$0,[0,s])}
        transfer(0);
        return close(w)}
      function loop(s){return caml_trampoline(loop$0(0,s))}
      function loop_next(param){return caml_trampoline(loop_next$0(0,param))}
      function check_closed_loop_next(next)
       {var _po_=1 - is_closed$0(w);return _po_?loop_next(next):_po_}
      loop(s);
      return r}
    function transfer_gen(read_now,write,input,output,f)
     {if(check_invariant[1]){invariant$19(input);invariant$19(output)}
      var param=create$23(input,output),consumer=consumer$1(param);
      function unlink(param$0)
       {var t=param[1];return caml_call2(Core_kernel_Bag[26],t[1][12],t[3])}
      return create$14
              (function(result)
                {function _pg_(param)
                  {function output_closed(param)
                    {close_read(input);unlink(0);return fill(result,0)}
                   function loop(param)
                    {if(is_closed$0(output))return output_closed(0);
                     var match=caml_call2(read_now,[0,consumer],input);
                     if(typeof match === "number")
                      {if(3456156 <= match){unlink(0);return fill(result,0)}
                       var
                        _ph_=function(param){return loop(0)},
                        _pi_=0,
                        _pj_=function(_pn_){return 0},
                        _pk_=[0,[0,output[9],_pj_],_pi_],
                        _pl_=function(_pm_){return 0};
                       return caml_call2
                               (_ia_,
                                choose([0,[0,values_available(input),_pl_],_pk_]),
                                _ph_)}
                     var x=match[2];
                     return caml_call2(f,x,continue$0)}
                   function continue$0(y)
                    {if(is_closed$0(output))return output_closed(0);
                     var pushback=caml_call2(write,output,y);
                     values_sent_downstream(consumer);
                     return caml_call2
                             (_ia_,pushback,function(param){return loop(0)})}
                   return loop(0)}
                 return caml_call2(_ia_,caml_call1(_ie_,0),_pg_)})}
    function transfer(max_queue_length,input,output,f)
     {function _pd_(q,k){return caml_call2(_ia_,caml_call1(f,q),k)}
      return transfer_gen
              (function(_pe_)
                {return function(_pf_)
                  {return read_now(_pe_,max_queue_length,_pf_)}},
               write,
               input,
               output,
               _pd_)}
    function transfer$0(input,output,f)
     {return transfer_gen
              (read_now$0,
               write$0,
               input,
               output,
               function(a,k){return caml_call1(k,caml_call1(f,a))})}
    function transfer_id(max_queue_length,input,output)
     {function _pa_(q,k){return caml_call1(k,q)}
      return transfer_gen
              (function(_pb_)
                {return function(_pc_)
                  {return read_now(_pb_,max_queue_length,_pc_)}},
               write,
               input,
               output,
               _pa_)}
    function map_gen(read,write,input,f)
     {function _o__(info)
       {return [1,[0,_nd_,[0,caml_call1(Core_kernel_Sexp[88],info),0]]]}
      var
       info=caml_call2(Core_kernel_Option[39],input[2],_o__),
       match=create$22(info,0),
       output=match[2],
       result=match[1];
      function _o$_(param){return close(output)}
      upon$1(transfer_gen(read,write,input,output,f),_o$_);
      return result}
    function map$27(max_queue_length,input,f)
     {function _o7_(q,k){return caml_call2(_ia_,caml_call1(f,q),k)}
      return map_gen
              (function(_o8_)
                {return function(_o9_)
                  {return read_now(_o8_,max_queue_length,_o9_)}},
               write,
               input,
               _o7_)}
    function map$28(input,f)
     {return map_gen
              (read_now$0,
               write$0,
               input,
               function(a,k){return caml_call1(k,caml_call1(f,a))})}
    function filter_map$5(max_queue_length,input,f)
     {return map$27
              (max_queue_length,input,function(q){return filter_map$3(0,q,f)})}
    function filter_map$6(max_queue_length,input,f)
     {function _o3_(q,k)
       {function _o6_(x){return is_read_closed(input)?0:caml_call1(f,x)}
        return caml_call1(k,caml_call2(Core_kernel_Queue[52],q,_o6_))}
      return map_gen
              (function(_o4_)
                {return function(_o5_)
                  {return read_now(_o4_,max_queue_length,_o5_)}},
               write,
               input,
               _o3_)}
    function folding_filter_map(max_queue_length,input,init,f)
     {var accum=[0,init];
      return filter_map$5
              (max_queue_length,
               input,
               function(x)
                {function _o1_(param)
                  {var x=param[2],a=param[1];accum[1] = a;return x}
                 var _o2_=caml_call2(f,accum[1],x);
                 return caml_call2(_if_[2],_o2_,_o1_)})}
    function folding_filter_map$0(max_queue_length,input,init,f)
     {var accum=[0,init];
      return filter_map$6
              (max_queue_length,
               input,
               function(x)
                {var match=caml_call2(f,accum[1],x),x$0=match[2],a=match[1];
                 accum[1] = a;
                 return x$0})}
    function folding_map(max_queue_length,input,init,f)
     {return folding_filter_map$0
              (max_queue_length,
               input,
               init,
               function(accum,a)
                {var match=caml_call2(f,accum,a),b=match[2],accum$0=match[1];
                 return [0,accum$0,[0,b]]})}
    function filter$5(input,f)
     {return filter_map$6(0,input,function(x){return caml_call1(f,x)?[0,x]:0})}
    function of_list$2(l)
     {var t=create_internal$1(0,caml_call1(Core_kernel_Queue[37],l));
      fill(t[9],0);
      update_pushback(t);
      return t}
    function empty$0(param){return of_list$2(0)}
    function singleton(x)
     {var match=create$22(0,0),writer=match[2],reader=match[1];
      write_without_pushback(writer,x);
      close(writer);
      return reader}
    function unfold$0(s,f)
     {function symbol(d,f)
       {var match=peek$0(d);
        if(match){var x=match[1];return caml_call1(f,x)}
        return caml_call2(_ic_,d,f)}
      return create_reader
              (0,
               function(writer)
                {function loop(s)
                  {function _oZ_(param)
                    {if(param)
                      {var match=param[1],s=match[2],a=match[1];
                       if(is_closed$0(writer))return caml_call1(_ie_,0);
                       var _o0_=function(param){return loop(s)};
                       return symbol(write$0(writer,a),_o0_)}
                     return caml_call1(_ie_,0)}
                   return symbol(caml_call1(f,s),_oZ_)}
                 return loop(s)})}
    function of_sequence(sequence)
     {return create_reader
              (0,
               function(writer)
                {function loop(sequence$1)
                  {if
                    (!
                     is_closed$0(writer)
                     &&
                     !
                     caml_call1(Core_kernel_Sequence[16],sequence$1))
                    {start_write(writer);
                     var
                      _oX_=length$5(writer),
                      i$1=(1 + writer[4] | 0) - _oX_ | 0,
                      sequence=sequence$1,
                      i=i$1;
                     for(;;)
                      {if(! caml_call2(symbol$1,i,0))
                        {var match=caml_call1(Core_kernel_Sequence[47],sequence);
                         if(match)
                          {var match$0=match[1],sequence$0=match$0[2],a=match$0[1];
                           caml_call2(Core_kernel_Queue[40],writer[3],a);
                           var i$0=i - 1 | 0,sequence=sequence$0,i=i$0;
                           continue}}
                       finish_write(writer);
                       var _oY_=function(param){return loop(sequence)};
                       return caml_call2(_if_[1],writer[5],_oY_)}}
                   return caml_call1(_ie_,0)}
                 return loop(sequence)})}
    function to_sequence(t)
     {function _oW_(param)
       {var match=read_now$0(0,t);
        if(typeof match === "number")
         return 3456156 <= match?0:[0,[0,[1,values_available(t)],0]];
        var a=match[2];
        return [0,[0,[0,a],0]]}
      return caml_call2(Core_kernel_Sequence[49],0,_oW_)}
    function interleave_pipe(inputs)
     {var
       match=
        create$22([0,caml_call1(Sexplib0_Sexp_conv[7],cst_Pipe_interleave)],0),
       output_writer=match[2],
       output=match[1],
       num_pipes_remaining=[0,1];
      function decr_num_pipes_remaining(param)
       {num_pipes_remaining[1] += -1;
        var _oV_=caml_call2(symbol$2,num_pipes_remaining[1],0);
        return _oV_?close(output_writer):_oV_}
      function _oR_(param){return decr_num_pipes_remaining(0)}
      var
       _oS_=
        iter_without_pushback
         (0,
          0,
          0,
          inputs,
          function(input)
           {num_pipes_remaining[1]++;
            function _oT_(param){return decr_num_pipes_remaining(0)}
            var _oU_=transfer_id(0,input,output_writer);
            caml_call2(_if_[2],_oU_,_oT_);
            return 0});
      caml_call2(_if_[2],_oS_,_oR_);
      return output}
    function interleave$0(inputs)
     {if(check_invariant[1])
       caml_call2(Core_kernel_List[9],inputs,invariant$19);
      return interleave_pipe(of_list$2(inputs))}
    function merge$0(inputs,compare)
     {if(inputs)
       {if(inputs[2])
         {var
           match=create$22(0,0),
           w=match[2],
           r=match[1],
           _oH_=
            function(param)
             {return caml_call2(Core_kernel_List[9],inputs,close_read)};
          upon$1(w[9],_oH_);
          var
           _oI_=0,
           _oJ_=
            function(param,_oQ_)
             {var a2=_oQ_[1],a1=param[1];return caml_call2(compare,a1,a2)},
           heap=caml_call3(Pairing_heap[20],0,_oJ_,_oI_),
           handle_read=
            function(input,eof_or_ok)
             {if(typeof eof_or_ok === "number")return 0;
              var v=eof_or_ok[2];
              return caml_call2(Pairing_heap[25],heap,[0,v,input])},
           pop_heap_and_loop=
            function(param)
             {for(;;)
               {var match=caml_call1(Pairing_heap[27],heap);
                if(match)
                 {var
                   match$0=match[1],
                   input=match$0[2],
                   v=match$0[1],
                   _oM_=1 - is_closed$0(w);
                  if(_oM_)
                   {write_without_pushback(w,v);
                    if(caml_call2(symbol$2,caml_call1(Pairing_heap[3],heap),0))
                     {var _oN_=function(param){return close(w)};
                      return upon$1(transfer_id(0,input,w),_oN_)}
                    var x=read_now$0(0,input);
                    if(typeof x === "number" && ! (3456156 <= x))
                     {var
                       _oO_=
                        function(param)
                         {function _oP_(x)
                           {handle_read(input,x);return pop_heap_and_loop(0)}
                          return caml_call2(_ia_,read$0(0,input),_oP_)};
                      return caml_call2(_ia_,w[5],_oO_)}
                    handle_read(input,x);
                    continue}
                  return _oM_}
                return close(w)}},
           initial_push=
            iter$16
             (0,
              inputs,
              function(input)
               {function _oK_(x){return handle_read(input,x)}
                var _oL_=read$0(0,input);
                return caml_call2(_if_[2],_oL_,_oK_)});
          upon$1(initial_push,pop_heap_and_loop);
          return r}
        var input=inputs[1];
        return input}
      return empty$0(0)}
    function concat_pipe(inputs)
     {var
       r=
        create_reader_not_close_on_exc
         (function(w)
           {var link=create$23(inputs,w),consumer=consumer$1(link);
            return iter$25
                    (0,
                     [0,[0,consumer]],
                     inputs,
                     function(input){return transfer_id(0,input,w)})});
      function _oG_(param){return close(inputs)}
      upon$1(r[9],_oG_);
      return r}
    function concat$2(inputs)
     {return create_reader_not_close_on_exc
              (function(w)
                {return iter$16
                         (0,inputs,function(input){return transfer_id(0,input,w)})})}
    function fork(t,pushback_uses)
     {var
       match=create$22(0,0),
       writer0=match[2],
       reader0=match[1],
       match$0=create$22(0,0),
       writer1=match$0[2],
       reader1=match$0[1],
       some_reader_was_closed=[0,0],
       consumer=
        add_consumer
         (t,
          function(param)
           {var some_reader_was_closed$0=some_reader_was_closed[1];
            function _oD_(param)
             {return 17724 <= param
                      ?some_reader_was_closed$0?-402004920:17724
                      :-402004920}
            var
             _oE_=[0,downstream_flushed$1(writer1),0],
             _oF_=combine$0([0,downstream_flushed$1(writer0),_oE_]);
            return caml_call2(_if_[2],_oF_,_oD_)}),
       still_open=[0,writer0,[0,writer1,0]];
      function filter_open(still_open)
       {if(caml_call2(Core_kernel_List[13],still_open,is_closed$0))
         {some_reader_was_closed[1] = 1;
          var
           _oC_=function(w){return 1 - is_closed$0(w)},
           still_open$0=caml_call2(Core_kernel_List[50],still_open,_oC_);
          if(caml_call1(Core_kernel_List[8],still_open$0))close(t);
          return still_open$0}
        return still_open}
      function _ow_(still_open)
       {caml_call2(Core_kernel_List[9],still_open,close);
        return caml_call1(_ie_,0)}
      var
       _ox_=
        fold$20
         ([0,[0,consumer]],
          0,
          t,
          still_open,
          function(still_open,queue)
           {var still_open$0=filter_open(still_open);
            if(caml_call1(Core_kernel_List[8],still_open$0))
             return caml_call1(_ie_,0);
            function _oy_(param)
             {var still_open=filter_open(still_open$0);
              function _oA_(w)
               {start_write(w);
                function _oB_(x)
                 {return caml_call2(Core_kernel_Queue[40],w[3],x)}
                caml_call2(Core_kernel_Queue[15],queue,_oB_);
                return finish_write(w)}
              caml_call2(Core_kernel_List[9],still_open,_oA_);
              return still_open}
            var
             _oz_=
              -648027566 <= pushback_uses
               ?any(caml_call2(Core_kernel_List[71],still_open$0,pushback$1))
               :all_unit
                 (caml_call2(Core_kernel_List[71],still_open$0,pushback$1));
            return caml_call2(_if_[2],_oz_,_oy_)});
      caml_call2(_if_[1],_ox_,_ow_);
      return [0,reader0,reader1]}
    function set_info$0(t,info){return set_info(t,[0,info])}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$145);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Pipe$0);
    var
     Async_kernel_Pipe=
      [0,
       sexp_of_pipe,
       sexp_of_pipe,
       [0,sexp_of_t$58,invariant$19],
       [0,sexp_of_t$57,invariant$19],
       create_reader,
       create_writer,
       create$22,
       empty$0,
       of_list$2,
       singleton,
       unfold$0,
       of_sequence,
       to_sequence,
       close,
       close_read,
       is_closed$0,
       closed$2,
       [0,sexp_of_t$53],
       upstream_flushed,
       downstream_flushed$1,
       [0,values_sent_downstream],
       add_consumer,
       length$5,
       is_empty$1,
       pushback$1,
       write$0,
       write_without_pushback,
       transfer_in,
       transfer_in_without_pushback,
       write_when_ready,
       write_if_open,
       write_without_pushback_if_open,
       read,
       read$0,
       read_exactly,
       read_now,
       read_now$0,
       peek$1,
       clear$1,
       read_all,
       values_available,
       read_choice,
       read_choice_single_consumer_ex,
       Flushed,
       fold$20,
       fold$21,
       fold_without_pushback,
       iter$24,
       iter$25,
       iter_without_pushback,
       transfer,
       transfer$0,
       transfer_id,
       map$27,
       map$28,
       folding_map,
       filter_map$5,
       filter_map$6,
       folding_filter_map,
       folding_filter_map$0,
       filter$5,
       interleave$0,
       interleave_pipe,
       merge$0,
       concat$2,
       concat_pipe,
       fork,
       to_stream_deprecated,
       of_stream_deprecated,
       drain,
       drain_and_count,
       to_list$13,
       hash,
       equal$4,
       compare$1,
       size_budget,
       set_size_budget$0,
       show_debug_messages,
       check_invariant,
       set_info$0];
    caml_register_global(1393,Async_kernel_Pipe,"Async_kernel__Pipe");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Mvar);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$146);
    caml_call1(Expect_test_collector[4][1],cst_src_mvar_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$147,cst$54);
    function value_available(r){return r[3]}
    function set_value_available(r,v){r[3] = v;return 0}
    function taken(r){return r[2]}
    function current_value(r){return r[1]}
    function _ne_(r,v){return [0,r[1],r[2],v]}
    var
     _nf_=[0,set_value_available],
     value_available$0=
      [0,
       function(param){return 0},
       cst_value_available,
       _nf_,
       value_available,
       _ne_];
    function _ng_(r,v){return [0,r[1],v,r[3]]}
    var
     _nh_=0,
     taken$0=[0,function(param){return 0},cst_taken,_nh_,taken,_ng_];
    function _ni_(r,v){return [0,v,r[2],r[3]]}
    var
     _nj_=0,
     current_value$0=
      [0,function(param){return 0},cst_current_value,_nj_,current_value,_ni_];
    function value_available$1(t){return t[3]}
    function is_empty$2(t){return caml_call1(Moption[5],t[1])}
    function invariant$20(invariant_a,param,t)
     {function _oq_(param)
       {function check(f){return caml_call2(include$9[2],t,f)}
        var
         value_available_fun=
          check
           (function(value_available)
             {var
               got=is_full(value_available),
               expect=caml_call1(Moption[6],t[1]),
               sexpifier=Core_kernel[289],
               equal=0,
               message=0,
               here=0;
              function comparator(a_001,b_002)
               {return caml_call2(Core_kernel[285],a_001,b_002)}
              return caml_call8
                      (Ppx_assert_lib_Runtime[3],
                       pos$3,
                       sexpifier,
                       comparator,
                       here,
                       message,
                       equal,
                       expect,
                       got)});
        function _os_(_ov_){return 0}
        var
         _ot_=Core_kernel_Unit[5],
         taken_fun=check(function(_ou_){return invariant$11(_ot_,_os_,_ou_)}),
         current_value_fun=check(caml_call1(Moption[2],invariant_a));
        caml_call1(current_value_fun,current_value$0);
        caml_call1(taken_fun,taken$0);
        return caml_call1(value_available_fun,value_available$0)}
      function of_a(param){return _nn_}
      function _or_(param)
       {var
         v_taken=param[2],
         v_current_value=param[1],
         v_value_available=param[3],
         arg=sexp_of_t$35(Core_kernel[502],v_value_available),
         bnds=[0,[1,[0,_nk_,[0,arg,0]]],0],
         arg$0=sexp_of_t$40(Core_kernel[502],Core_kernel[187],v_taken),
         bnds$0=[0,[1,[0,_nl_,[0,arg$0,0]]],bnds],
         arg$1=caml_call2(Moption[1],of_a,v_current_value),
         bnds$1=[0,[1,[0,_nm_,[0,arg$1,0]]],bnds$0];
        return [1,bnds$1]}
      return caml_call4(include$9[1],_no_,t,_or_,_oq_)}
    function peek$2(t){return caml_call1(Moption[7],t[1])}
    function peek_exn(t)
     {if(is_empty$2(t))
       {var
         _op_=
          caml_call1(Sexplib0_Sexp_conv[7],cst_Mvar_peek_exn_called_on_em);
        caml_call1(Core_kernel[238],_op_)}
      return caml_call1(Moption[8],t[1])}
    function sexp_of_t$60(sexp_of_a,param,t)
     {var _oo_=peek$2(t);return caml_call2(Core_kernel[438],sexp_of_a,_oo_)}
    function sexp_of_t$61(of_a,v)
     {return sexp_of_t$60(of_a,Core_kernel[187],v)}
    function invariant$21(invariant_a,t)
     {return invariant$20(invariant_a,function(_on_){return 0},t)}
    var Read_write$1=[0,sexp_of_t$61,invariant$21];
    function sexp_of_t$62(of_a,v)
     {return sexp_of_t$60(of_a,Core_kernel[156],v)}
    function invariant$22(invariant_a,t)
     {return invariant$20(invariant_a,function(_om_){return 0},t)}
    var Read_only=[0,sexp_of_t$62,invariant$22];
    function read_only$1(t){return t}
    function write_only(t){return t}
    function create$24(param)
     {var _ok_=caml_call1(create$13,0),_ol_=caml_call1(_iW_,0);
      return [0,caml_call1(Moption[4],0),_ol_,_ok_]}
    function take_nonempty(t)
     {if(is_empty$2(t))throw [0,Assert_failure,_np_];
      var r=caml_call1(Moption[8],t[1]);
      caml_call1(Moption[11],t[1]);
      broadcast(t[2],0);
      t[3] = caml_call1(create$13,0);
      return r}
    function take_now_exn(t)
     {if(is_empty$2(t))
       {var
         _oj_=
          caml_call1(Sexplib0_Sexp_conv[7],cst_Mvar_take_exn_called_on_em);
        caml_call1(Core_kernel[238],_oj_)}
      return take_nonempty(t)}
    function take_now(t){return is_empty$2(t)?0:[0,take_nonempty(t)]}
    function take(t)
     {if(is_empty$2(t))
       {var _oi_=function(param){return take(t)};
        return caml_call2(_if_[1],t[3],_oi_)}
      return caml_call1(_ie_,take_nonempty(t))}
    function set$0(t,v)
     {caml_call2(Moption[12],t[1],v);return fill_if_empty(t[3],0)}
    function update$0(t,f){return set$0(t,caml_call1(f,peek$2(t)))}
    function update_exn(t,f){return set$0(t,caml_call1(f,peek_exn(t)))}
    function taken$1(t){return wait(t[2])}
    function put(t,v)
     {if(is_empty$2(t)){set$0(t,v);return caml_call1(_ie_,0)}
      function _og_(param){return put(t,v)}
      var _oh_=taken$1(t);
      return caml_call2(_if_[1],_oh_,_og_)}
    function pipe_when_ready(t)
     {var match=create$22(0,0),w=match[2],r=match[1];
      function loop(param)
       {function _od_(param)
         {if(is_closed$0(w))return caml_call1(_ie_,0);
          var match=take_now(t);
          if(match)
           {var
             x=match[1],
             _oe_=function(param){return loop(0)},
             _of_=write$0(w,x);
            return caml_call2(_if_[1],_of_,_oe_)}
          return loop(0)}
        return caml_call2(_if_[1],t[3],_od_)}
      loop(0);
      return r}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$148);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Mvar$0);
    var
     Async_kernel_Mvar=
      [0,
       sexp_of_t$60,
       Read_write$1,
       Read_only,
       create$24,
       is_empty$2,
       put,
       set$0,
       update$0,
       update_exn,
       read_only$1,
       write_only,
       value_available$1,
       take,
       take_now,
       take_now_exn,
       taken$1,
       peek$2,
       peek_exn,
       pipe_when_ready];
    caml_register_global(1396,Async_kernel_Mvar,"Async_kernel__Mvar");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Lazy_deferred);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$149);
    caml_call1(Expect_test_collector[4][1],cst_src_lazy_deferred_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$150,cst$55);
    function create$25(f)
     {var start=caml_call1(create$13,0);
      function _oc_(param){return try_with_or_error(0,0,0,0,f)}
      return [0,start,caml_call2(_if_[1],start,_oc_)]}
    function wait$0(t){return t[2]}
    function wait_exn(t){return caml_call2(_id_,t[2],Core_kernel[230])}
    function force(t){fill_if_empty(t[1],0);return t[2]}
    function force_exn(t)
     {var _ob_=Core_kernel[230];return caml_call2(_id_,force(t),_ob_)}
    function return$5(a)
     {return create$25(function(param){return caml_call1(_ie_,a)})}
    function bind$5(t,f)
     {return create$25
              (function(param)
                {function _n$_(a){return force_exn(caml_call1(f,a))}
                 var _oa_=force_exn(t);
                 return caml_call2(_if_[1],_oa_,_n$_)})}
    var
     map$29=
      [0,
       -198771759,
       function(t,f)
        {return create$25
                 (function(param){return caml_call2(_id_,force_exn(t),f)})}],
     include$30=caml_call1(Base_Monad[1],[0,bind$5,return$5,map$29]),
     _nt_=include$30[4],
     _nq_=include$30[1],
     _nr_=include$30[2],
     _ns_=include$30[3],
     _nu_=include$30[5],
     _nv_=include$30[6],
     _nw_=include$30[7],
     _nx_=include$30[8],
     _ny_=include$30[9],
     _nz_=include$30[10],
     _nA_=include$30[11];
    function bind$6(t,f)
     {return caml_call2
              (_nt_,
               t,
               function(a)
                {return create$25(function(param){return caml_call1(f,a)})})}
    function is_forced(t){return is_full(t[1])}
    function is_determined$0(t){return is_determined(t[2])}
    function peek$3(t){return peek$0(t[2])}
    function peek_exn$0(t)
     {var _n9_=Core_kernel[230],_n__=peek$3(t);
      return caml_call2(Core_kernel_Option[39],_n__,_n9_)}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$151);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Lazy_deferred$0);
    var
     Async_kernel_Lazy_deferred=
      [0,
       create$25,
       force,
       force_exn,
       wait$0,
       wait_exn,
       _nq_,
       _nr_,
       _ns_,
       _nt_,
       _nu_,
       _nv_,
       _nw_,
       _nx_,
       _ny_,
       _nz_,
       _nA_,
       bind$6,
       peek$3,
       peek_exn$0,
       is_determined$0,
       is_forced];
    caml_register_global
     (1397,Async_kernel_Lazy_deferred,"Async_kernel__Lazy_deferred");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Async_conditi);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$152);
    caml_call1(Expect_test_collector[4][1],cst_src_async_condition_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$153,cst$56);
    function sexp_of_t$63(of_a,param)
     {var v_waits=param[1],bnds=0;
      function _n7_(_n8_){return sexp_of_t$35(of_a,_n8_)}
      var
       arg=caml_call2(Core_kernel_Queue[11],_n7_,v_waits),
       bnds$0=[0,[1,[0,_nB_,[0,arg,0]]],bnds];
      return [1,bnds$0]}
    function create$26(param)
     {return [0,caml_call2(Core_kernel_Queue[60],0,0)]}
    function wait$1(t)
     {return create$14
              (function(ivar)
                {return caml_call2(Core_kernel_Queue[40],t[1],ivar)})}
    function signal(t,a)
     {function _n5_(ivar){return fill(ivar,a)}
      var _n6_=caml_call1(Core_kernel_Queue[42],t[1]);
      return caml_call2(Core_kernel_Option[19],_n6_,_n5_)}
    function broadcast$0(t,a)
     {function _n4_(ivar){return fill(ivar,a)}
      caml_call2(Core_kernel_Queue[15],t[1],_n4_);
      return caml_call1(Core_kernel_Queue[46],t[1])}
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$154);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Async_conditi$0);
    var
     Async_kernel_Async_condition=
      [0,sexp_of_t$63,create$26,signal,broadcast$0,wait$1];
    caml_register_global
     (1398,Async_kernel_Async_condition,"Async_kernel__Async_condition");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Async_gc);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$155);
    caml_call1(Expect_test_collector[4][1],cst_src_async_gc_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$156,cst$57);
    var
     Stat=include$24[1],
     Control=include$24[2],
     print_stat=include$24[3],
     allocated_bytes=include$24[4],
     keep_alive=include$24[5],
     Allocation_policy=include$24[6],
     tune=include$24[7],
     disable_compaction=include$24[8],
     For_testing=include$24[9],
     Stable=include$24[11];
    function add_finalizer$0(heap_block,f)
     {return add_finalizer(t$5(0),heap_block,f)}
    function add_finalizer_exn$0(heap_block,f)
     {return add_finalizer_exn(t$5(0),heap_block,f)}
    function add_finalizer_last$0(heap_block,f)
     {return add_finalizer_last(t$5(0),heap_block,f)}
    function add_finalizer_last_exn$0(heap_block,f)
     {return add_finalizer_last_exn(t$5(0),heap_block,f)}
    var sexp_of_t$64=include$24[10][6][1];
    function create$27(f){return create_alarm(t$5(0),f)}
    var
     delete$0=include$24[10][6][3],
     Alarm$0=[0,sexp_of_t$64,create$27,delete$0];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$157);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Async_gc$0);
    var
     Async_kernel_Async_gc=
      [0,
       Stat,
       Control,
       print_stat,
       allocated_bytes,
       keep_alive,
       Allocation_policy,
       tune,
       disable_compaction,
       For_testing,
       Stable,
       add_finalizer$0,
       add_finalizer_exn$0,
       add_finalizer_last$0,
       add_finalizer_last_exn$0,
       Alarm$0];
    caml_register_global(1399,Async_kernel_Async_gc,"Async_kernel__Async_gc");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Async_invaria);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$158);
    caml_call1(Expect_test_collector[4][1],cst_src_async_invariant_intf_m);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$159,cst$58);
    var Async=[0];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$160);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Async_invaria$0);
    var Async_kernel_Async_invariant_i=[0,Async];
    caml_register_global
     (1400,
      Async_kernel_Async_invariant_i,
      "Async_kernel__Async_invariant_intf");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel_Async_invaria$1);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$161);
    caml_call1(Expect_test_collector[4][1],cst_src_async_invariant_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$162,cst$59);
    var _nC_=include$9[1],_nD_=include$9[2];
    function invariant$23(here,t,sexp_of_t,f)
     {function _nY_(param)
       {if(0 === param[0])return 0;
        var
         exn=param[1],
         _n0_=[0,caml_call1(sexp_of_t,t),0],
         _n1_=[0,[1,[0,_nE_,[0,caml_call1(Core_kernel[521],exn),0]]],_n0_],
         _n2_=[0,caml_call1(Core_kernel_Source_code_positi[1],here),_n1_],
         _n3_=
          [1,[0,caml_call1(Sexplib0_Sexp_conv[7],cst_invariant_failed),_n2_]];
        return caml_call1(Core_kernel[238],_n3_)}
      var _nZ_=try_with(0,0,0,_nF_,0,0,f);
      return caml_call2(include$29[4][3],_nZ_,_nY_)}
    function check_field(t,f,wait_for_previous,field)
     {function _nR_(param)
       {function _nS_(param)
         {if(0 === param[0])return 0;
          var
           exn=param[1],
           _nU_=[0,[1,[0,_nG_,[0,caml_call1(Core_kernel[521],exn),0]]],0],
           _nV_=caml_call1(Base_Field[2],field),
           _nW_=[0,[1,[0,_nH_,[0,caml_call1(Core_kernel[455],_nV_),0]]],_nU_],
           _nX_=
            [1,
             [0,caml_call1(Sexplib0_Sexp_conv[7],cst_problem_with_field),_nW_]];
          return caml_call1(Core_kernel[238],_nX_)}
        var
         _nT_=
          try_with
           (0,
            0,
            0,
            _nI_,
            0,
            0,
            function(param)
             {return caml_call1(f,caml_call2(Base_Field[3],field,t))});
        return caml_call2(include$29[4][3],_nT_,_nS_)}
      return caml_call2(include$29[4][2],wait_for_previous,_nR_)}
    var Async$0=[0,invariant$23,check_field];
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$163);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel_Async_invaria$2);
    var Async_kernel_Async_invariant=[0,_nC_,_nD_,Async$0];
    caml_register_global
     (1401,Async_kernel_Async_invariant,"Async_kernel__Async_invariant");
    caml_call1(Ppx_module_timer_runtime[4],cst_Async_kernel);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1],cst_async_kernel$164);
    caml_call1(Expect_test_collector[4][1],cst_src_async_kernel_ml);
    caml_call2(Ppx_inline_test_lib_Runtime[2],cst_async_kernel$165,cst$60);
    var
     after$5=Async_kernel_Clock_ns[4],
     at$7=Async_kernel_Clock_ns[3],
     every$3=Async_kernel_Clock_ns[10],
     with_timeout$1=Async_kernel_Clock_ns[5],
     symbol$9=_lh_[3],
     return$6=include$29[1],
     symbol_bind$3=include$29[2],
     symbol_map$2=include$29[3],
     Let_syntax$1=include$29[4],
     Async_kernel_private=[0];
    function _nJ_(param)
     {var expect=runtime.core_kernel_gc_minor_words(0);
      caml_call1(return$6,0);
      return$0(0);
      caml_call1(include$29[1],0);
      caml_call1(include$29[4][1],0);
      var
       got=runtime.core_kernel_gc_minor_words(0),
       sexpifier=Core_kernel[340],
       equal=0,
       message=0,
       here=0;
      function comparator(a_001,b_002)
       {return caml_call2(Core_kernel[336],a_001,b_002)}
      return caml_call8
              (Ppx_assert_lib_Runtime[3],
               pos$4,
               sexpifier,
               comparator,
               here,
               message,
               equal,
               expect,
               got)}
    caml_call8
     (Ppx_inline_test_lib_Runtime[5],
      Inline_test_config,
      cst_return_does_not_allocate,
      0,
      cst_src_async_kernel_ml$0,
      86,
      0,
      443,
      _nJ_);
    caml_call1(Ppx_inline_test_lib_Runtime[3],cst_async_kernel$166);
    caml_call1(Expect_test_collector[4][2],0);
    caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2],0);
    caml_call1(Ppx_module_timer_runtime[5],cst_Async_kernel$0);
    var
     Async_kernel$0=
      [0,
       after$5,
       at$7,
       catch$0,
       choice,
       choose,
       don_t_wait_for,
       every$3,
       never,
       _kG_,
       _kF_,
       try_with,
       upon$1,
       with_timeout$1,
       _kD_,
       _kC_,
       symbol$9,
       symbol_bind$1,
       _k9_,
       return$6,
       symbol_bind$3,
       symbol_map$2,
       Let_syntax$1,
       Async_kernel_private];
    caml_register_global(1403,Async_kernel$0,"Async_kernel");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJhc3luY19rZXJuZWwuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlc0NvbnRlbnQiOltdfQ==
