(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_channel_descriptor=runtime.caml_channel_descriptor,
     caml_check_bound=runtime.caml_check_bound,
     caml_ml_bytes_length=runtime.caml_ml_bytes_length,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_register_global=runtime.caml_register_global,
     caml_string_equal=runtime.caml_string_equal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_sys_exit=runtime.caml_sys_exit,
     caml_sys_unsafe_getenv=runtime.caml_sys_unsafe_getenv,
     caml_wrap_exception=runtime.caml_wrap_exception,
     unix_inet_addr_of_string=runtime.unix_inet_addr_of_string;
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
    var
     global_data=runtime.caml_get_global_data(),
     cst_close_process_full=caml_string_of_jsbytes("close_process_full"),
     cst_close_process=caml_string_of_jsbytes("close_process"),
     cst_close_process_out=caml_string_of_jsbytes("close_process_out"),
     cst_close_process_in=caml_string_of_jsbytes("close_process_in"),
     cst_process_full_pid=caml_string_of_jsbytes("process_full_pid"),
     cst_process_pid=caml_string_of_jsbytes("process_pid"),
     cst_process_out_pid=caml_string_of_jsbytes("process_out_pid"),
     cst_process_in_pid=caml_string_of_jsbytes("process_in_pid"),
     cst$9=caml_string_of_jsbytes(""),
     cst_c$0=caml_string_of_jsbytes("-c"),
     cst_c=caml_string_of_jsbytes("-c"),
     cst$8=caml_string_of_jsbytes(""),
     cst_udp$1=caml_string_of_jsbytes("udp"),
     cst_tcp$1=caml_string_of_jsbytes("tcp"),
     cst$5=caml_string_of_jsbytes(""),
     cst$7=caml_string_of_jsbytes(""),
     cst_tcp=caml_string_of_jsbytes("tcp"),
     cst_udp=caml_string_of_jsbytes("udp"),
     cst_udp$0=caml_string_of_jsbytes("udp"),
     cst_tcp$0=caml_string_of_jsbytes("tcp"),
     cst$6=caml_string_of_jsbytes(""),
     cst_0_0_0_0$0=caml_string_of_jsbytes("0.0.0.0"),
     cst_127_0_0_1$0=caml_string_of_jsbytes("127.0.0.1"),
     cst_Unix_sendto=caml_string_of_jsbytes("Unix.sendto"),
     cst_Unix_send=caml_string_of_jsbytes("Unix.send"),
     cst_Unix_recvfrom=caml_string_of_jsbytes("Unix.recvfrom"),
     cst_Unix_recv=caml_string_of_jsbytes("Unix.recv"),
     cst_Unix_single_write=caml_string_of_jsbytes("Unix.single_write"),
     cst_Unix_write=caml_string_of_jsbytes("Unix.write"),
     cst_Unix_read=caml_string_of_jsbytes("Unix.read"),
     cst$4=caml_string_of_jsbytes(""),
     cst_execvpe=caml_string_of_jsbytes("execvpe"),
     cst_PATH=caml_string_of_jsbytes("PATH"),
     cst_bin_usr_bin=caml_string_of_jsbytes("/bin:/usr/bin"),
     cst$1=caml_string_of_jsbytes(': "'),
     cst_failed=caml_string_of_jsbytes('" failed'),
     cst_on=caml_string_of_jsbytes(' on "'),
     cst$2=caml_string_of_jsbytes('"'),
     cst$3=caml_string_of_jsbytes(": "),
     cst_E2BIG=caml_string_of_jsbytes("E2BIG"),
     cst_EACCES=caml_string_of_jsbytes("EACCES"),
     cst_EAGAIN=caml_string_of_jsbytes("EAGAIN"),
     cst_EBADF=caml_string_of_jsbytes("EBADF"),
     cst_EBUSY=caml_string_of_jsbytes("EBUSY"),
     cst_ECHILD=caml_string_of_jsbytes("ECHILD"),
     cst_EDEADLK=caml_string_of_jsbytes("EDEADLK"),
     cst_EDOM=caml_string_of_jsbytes("EDOM"),
     cst_EEXIST=caml_string_of_jsbytes("EEXIST"),
     cst_EFAULT=caml_string_of_jsbytes("EFAULT"),
     cst_EFBIG=caml_string_of_jsbytes("EFBIG"),
     cst_EINTR=caml_string_of_jsbytes("EINTR"),
     cst_EINVAL=caml_string_of_jsbytes("EINVAL"),
     cst_EIO=caml_string_of_jsbytes("EIO"),
     cst_EISDIR=caml_string_of_jsbytes("EISDIR"),
     cst_EMFILE=caml_string_of_jsbytes("EMFILE"),
     cst_EMLINK=caml_string_of_jsbytes("EMLINK"),
     cst_ENAMETOOLONG=caml_string_of_jsbytes("ENAMETOOLONG"),
     cst_ENFILE=caml_string_of_jsbytes("ENFILE"),
     cst_ENODEV=caml_string_of_jsbytes("ENODEV"),
     cst_ENOENT=caml_string_of_jsbytes("ENOENT"),
     cst_ENOEXEC=caml_string_of_jsbytes("ENOEXEC"),
     cst_ENOLCK=caml_string_of_jsbytes("ENOLCK"),
     cst_ENOMEM=caml_string_of_jsbytes("ENOMEM"),
     cst_ENOSPC=caml_string_of_jsbytes("ENOSPC"),
     cst_ENOSYS=caml_string_of_jsbytes("ENOSYS"),
     cst_ENOTDIR=caml_string_of_jsbytes("ENOTDIR"),
     cst_ENOTEMPTY=caml_string_of_jsbytes("ENOTEMPTY"),
     cst_ENOTTY=caml_string_of_jsbytes("ENOTTY"),
     cst_ENXIO=caml_string_of_jsbytes("ENXIO"),
     cst_EPERM=caml_string_of_jsbytes("EPERM"),
     cst_EPIPE=caml_string_of_jsbytes("EPIPE"),
     cst_ERANGE=caml_string_of_jsbytes("ERANGE"),
     cst_EROFS=caml_string_of_jsbytes("EROFS"),
     cst_ESPIPE=caml_string_of_jsbytes("ESPIPE"),
     cst_ESRCH=caml_string_of_jsbytes("ESRCH"),
     cst_EXDEV=caml_string_of_jsbytes("EXDEV"),
     cst_EWOULDBLOCK=caml_string_of_jsbytes("EWOULDBLOCK"),
     cst_EINPROGRESS=caml_string_of_jsbytes("EINPROGRESS"),
     cst_EALREADY=caml_string_of_jsbytes("EALREADY"),
     cst_ENOTSOCK=caml_string_of_jsbytes("ENOTSOCK"),
     cst_EDESTADDRREQ=caml_string_of_jsbytes("EDESTADDRREQ"),
     cst_EMSGSIZE=caml_string_of_jsbytes("EMSGSIZE"),
     cst_EPROTOTYPE=caml_string_of_jsbytes("EPROTOTYPE"),
     cst_ENOPROTOOPT=caml_string_of_jsbytes("ENOPROTOOPT"),
     cst_EPROTONOSUPPORT=caml_string_of_jsbytes("EPROTONOSUPPORT"),
     cst_ESOCKTNOSUPPORT=caml_string_of_jsbytes("ESOCKTNOSUPPORT"),
     cst_EOPNOTSUPP=caml_string_of_jsbytes("EOPNOTSUPP"),
     cst_EPFNOSUPPORT=caml_string_of_jsbytes("EPFNOSUPPORT"),
     cst_EAFNOSUPPORT=caml_string_of_jsbytes("EAFNOSUPPORT"),
     cst_EADDRINUSE=caml_string_of_jsbytes("EADDRINUSE"),
     cst_EADDRNOTAVAIL=caml_string_of_jsbytes("EADDRNOTAVAIL"),
     cst_ENETDOWN=caml_string_of_jsbytes("ENETDOWN"),
     cst_ENETUNREACH=caml_string_of_jsbytes("ENETUNREACH"),
     cst_ENETRESET=caml_string_of_jsbytes("ENETRESET"),
     cst_ECONNABORTED=caml_string_of_jsbytes("ECONNABORTED"),
     cst_ECONNRESET=caml_string_of_jsbytes("ECONNRESET"),
     cst_ENOBUFS=caml_string_of_jsbytes("ENOBUFS"),
     cst_EISCONN=caml_string_of_jsbytes("EISCONN"),
     cst_ENOTCONN=caml_string_of_jsbytes("ENOTCONN"),
     cst_ESHUTDOWN=caml_string_of_jsbytes("ESHUTDOWN"),
     cst_ETOOMANYREFS=caml_string_of_jsbytes("ETOOMANYREFS"),
     cst_ETIMEDOUT=caml_string_of_jsbytes("ETIMEDOUT"),
     cst_ECONNREFUSED=caml_string_of_jsbytes("ECONNREFUSED"),
     cst_EHOSTDOWN=caml_string_of_jsbytes("EHOSTDOWN"),
     cst_EHOSTUNREACH=caml_string_of_jsbytes("EHOSTUNREACH"),
     cst_ELOOP=caml_string_of_jsbytes("ELOOP"),
     cst_EOVERFLOW=caml_string_of_jsbytes("EOVERFLOW"),
     shell=caml_string_of_jsbytes("/bin/sh"),
     cst_Unix_Unix_error=caml_string_of_jsbytes("Unix.Unix_error"),
     cst=caml_string_of_jsbytes(""),
     cst$0=caml_string_of_jsbytes(""),
     cst_Unix_Unix_error$0=caml_string_of_jsbytes("Unix.Unix_error"),
     cst_0_0_0_0=caml_string_of_jsbytes("0.0.0.0"),
     cst_127_0_0_1=caml_string_of_jsbytes("127.0.0.1"),
     cst$10=caml_string_of_jsbytes("::"),
     cst_1=caml_string_of_jsbytes("::1"),
     Stdlib=global_data.Stdlib,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_int=global_data.Stdlib__int,
     Stdlib_array=global_data.Stdlib__array,
     Stdlib_bytes=global_data.Stdlib__bytes,
     Stdlib_filename=global_data.Stdlib__filename,
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_printf=global_data.Stdlib__printf,
     Stdlib_callback=global_data.Stdlib__callback,
     Stdlib_printexc=global_data.Stdlib__printexc,
     Unix_error=[248,cst_Unix_Unix_error,runtime.caml_fresh_oo_id(0)];
    caml_call2
     (Stdlib_callback[2],cst_Unix_Unix_error$0,[0,Unix_error,0,cst$0,cst]);
    var
     _p_=[0,1],
     _q_=[0,1],
     _o_=[0,1],
     _l_=[0,1],
     _m_=[0,1],
     _n_=[0,1],
     _j_=[0,1],
     _k_=[0,1],
     _i_=[0,1],
     _h_=[0,1],
     _e_=[0,0],
     _f_=[0,0],
     _g_=[0,0],
     _d_=runtime.caml_int64_create_lo_mi_hi(0,0,0),
     _c_=
      [0,
       [11,caml_string_of_jsbytes("EUNKNOWNERR "),[4,0,0,0,0]],
       caml_string_of_jsbytes("EUNKNOWNERR %d")],
     _b_=
      [0,
       [11,
        caml_string_of_jsbytes("Unix.Unix_error(Unix."),
        [2,
         0,
         [11,
          caml_string_of_jsbytes(", "),
          [3,0,[11,caml_string_of_jsbytes(", "),[3,0,[12,41,0]]]]]]],
       caml_string_of_jsbytes("Unix.Unix_error(Unix.%s, %S, %S)")];
    function _a_(param)
     {if(param[1] === Unix_error)
       {var s=param[4],s$0=param[3],e=param[2];
        if(typeof e === "number")
         {var _dz_=e;
          if(34 <= _dz_)
           switch(_dz_)
            {case 34:var msg=cst_ESPIPE;break;
             case 35:var msg=cst_ESRCH;break;
             case 36:var msg=cst_EXDEV;break;
             case 37:var msg=cst_EWOULDBLOCK;break;
             case 38:var msg=cst_EINPROGRESS;break;
             case 39:var msg=cst_EALREADY;break;
             case 40:var msg=cst_ENOTSOCK;break;
             case 41:var msg=cst_EDESTADDRREQ;break;
             case 42:var msg=cst_EMSGSIZE;break;
             case 43:var msg=cst_EPROTOTYPE;break;
             case 44:var msg=cst_ENOPROTOOPT;break;
             case 45:var msg=cst_EPROTONOSUPPORT;break;
             case 46:var msg=cst_ESOCKTNOSUPPORT;break;
             case 47:var msg=cst_EOPNOTSUPP;break;
             case 48:var msg=cst_EPFNOSUPPORT;break;
             case 49:var msg=cst_EAFNOSUPPORT;break;
             case 50:var msg=cst_EADDRINUSE;break;
             case 51:var msg=cst_EADDRNOTAVAIL;break;
             case 52:var msg=cst_ENETDOWN;break;
             case 53:var msg=cst_ENETUNREACH;break;
             case 54:var msg=cst_ENETRESET;break;
             case 55:var msg=cst_ECONNABORTED;break;
             case 56:var msg=cst_ECONNRESET;break;
             case 57:var msg=cst_ENOBUFS;break;
             case 58:var msg=cst_EISCONN;break;
             case 59:var msg=cst_ENOTCONN;break;
             case 60:var msg=cst_ESHUTDOWN;break;
             case 61:var msg=cst_ETOOMANYREFS;break;
             case 62:var msg=cst_ETIMEDOUT;break;
             case 63:var msg=cst_ECONNREFUSED;break;
             case 64:var msg=cst_EHOSTDOWN;break;
             case 65:var msg=cst_EHOSTUNREACH;break;
             case 66:var msg=cst_ELOOP;break;
             default:var msg=cst_EOVERFLOW}
          else
           switch(_dz_)
            {case 0:var msg=cst_E2BIG;break;
             case 1:var msg=cst_EACCES;break;
             case 2:var msg=cst_EAGAIN;break;
             case 3:var msg=cst_EBADF;break;
             case 4:var msg=cst_EBUSY;break;
             case 5:var msg=cst_ECHILD;break;
             case 6:var msg=cst_EDEADLK;break;
             case 7:var msg=cst_EDOM;break;
             case 8:var msg=cst_EEXIST;break;
             case 9:var msg=cst_EFAULT;break;
             case 10:var msg=cst_EFBIG;break;
             case 11:var msg=cst_EINTR;break;
             case 12:var msg=cst_EINVAL;break;
             case 13:var msg=cst_EIO;break;
             case 14:var msg=cst_EISDIR;break;
             case 15:var msg=cst_EMFILE;break;
             case 16:var msg=cst_EMLINK;break;
             case 17:var msg=cst_ENAMETOOLONG;break;
             case 18:var msg=cst_ENFILE;break;
             case 19:var msg=cst_ENODEV;break;
             case 20:var msg=cst_ENOENT;break;
             case 21:var msg=cst_ENOEXEC;break;
             case 22:var msg=cst_ENOLCK;break;
             case 23:var msg=cst_ENOMEM;break;
             case 24:var msg=cst_ENOSPC;break;
             case 25:var msg=cst_ENOSYS;break;
             case 26:var msg=cst_ENOTDIR;break;
             case 27:var msg=cst_ENOTEMPTY;break;
             case 28:var msg=cst_ENOTTY;break;
             case 29:var msg=cst_ENXIO;break;
             case 30:var msg=cst_EPERM;break;
             case 31:var msg=cst_EPIPE;break;
             case 32:var msg=cst_ERANGE;break;
             default:var msg=cst_EROFS}}
        else
         var x=e[1],msg=caml_call2(Stdlib_printf[4],_c_,x);
        return [0,caml_call4(Stdlib_printf[4],_b_,msg,s$0,s)]}
      return 0}
    caml_call1(Stdlib_printexc[9],_a_);
    function handle_unix_error(f,arg)
     {try
       {var _dy_=caml_call1(f,arg);return _dy_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Unix_error)
         {var
           arg$0=exn[4],
           fun_name=exn[3],
           err=exn[2],
           _dw_=caml_check_bound(runtime.caml_sys_argv(0),0)[1];
          caml_call1(Stdlib[49],_dw_);
          caml_call1(Stdlib[49],cst$1);
          caml_call1(Stdlib[49],fun_name);
          caml_call1(Stdlib[49],cst_failed);
          if(0 < caml_ml_string_length(arg$0))
           {caml_call1(Stdlib[49],cst_on);
            caml_call1(Stdlib[49],arg$0);
            caml_call1(Stdlib[49],cst$2)}
          caml_call1(Stdlib[49],cst$3);
          var _dx_=runtime.unix_error_message(err);
          caml_call1(Stdlib[53],_dx_);
          return caml_call1(Stdlib[99],2)}
        throw exn}}
    function execvpe(name,args,env)
     {try
       {var _dq_=runtime.unix_execvpe(name,args,env);return _dq_}
      catch(_dr_)
       {_dr_ = caml_wrap_exception(_dr_);
        if(_dr_[1] === Unix_error)
         {var _dp_=_dr_[2];
          if(typeof _dp_ === "number" && 25 === _dp_)
           {var
             exec=
              function(file)
               {try
                 {var _du_=runtime.unix_execve(file,args,env);return _du_}
                catch(_dv_)
                 {_dv_ = caml_wrap_exception(_dv_);
                  if(_dv_[1] === Unix_error)
                   {var _dt_=_dv_[2];
                    if(typeof _dt_ === "number" && 21 === _dt_)
                     {var
                       argc=args.length - 1,
                       args$0=
                        0 === argc
                         ?args
                         :caml_call3(Stdlib_array[7],args,1,argc - 1 | 0),
                       new_args=caml_call2(Stdlib_array[5],[0,shell,file],args$0);
                      return runtime.unix_execve
                              (caml_check_bound(new_args,0)[1],new_args,env)}}
                  throw _dv_}};
            if(caml_call2(Stdlib_string[22],name,47))return exec(name);
            try
             {var _do_=caml_sys_unsafe_getenv(cst_PATH),_dn_=_do_}
            catch(_ds_)
             {_ds_ = caml_wrap_exception(_ds_);
              if(_ds_ !== Stdlib[8])throw _ds_;
              var _dn_=cst_bin_usr_bin}
            var
             param$0=caml_call2(Stdlib_string[35],58,_dn_),
             eacces=0,
             param=param$0;
            for(;;)
             {if(param)
               {var
                 rem=param[2],
                 dir=param[1],
                 dir$0=caml_string_equal(dir,cst$4)?Stdlib_filename[1]:dir;
                try
                 {var _dl_=exec(caml_call2(Stdlib_filename[4],dir$0,name));
                  return _dl_}
                catch(exn)
                 {exn = caml_wrap_exception(exn);
                  if(exn[1] === Unix_error)
                   {var err=exn[2];
                    if(typeof err === "number")
                     {var _dk_=err - 62 | 0,switch$0=0;
                      if(4 < _dk_ >>> 0)
                       {if(! (-35 <= _dk_))
                         {var switcher=_dk_ + 62 | 0;
                          switch(switcher)
                           {case 1:var eacces=1,param=rem;continue;
                            case 14:
                            case 17:
                            case 19:
                            case 20:
                            case 26:switch$0 = 1;break
                            }}}
                      else
                       if(2 < (_dk_ - 1 | 0) >>> 0)switch$0 = 1;
                      if(switch$0){var param=rem;continue}}
                    throw exn}
                  throw exn}}
              var _dm_=eacces?1:20;
              throw [0,Unix_error,_dm_,cst_execvpe,name]}}}
        throw _dr_}}
    var stdin=0,stdout=1,stderr=2;
    function read(fd,buf,ofs,len)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buf) - len | 0) < ofs))
       return runtime.unix_read(fd,buf,ofs,len);
      return caml_call1(Stdlib[1],cst_Unix_read)}
    function write(fd,buf,ofs,len)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buf) - len | 0) < ofs))
       return runtime.unix_write(fd,buf,ofs,len);
      return caml_call1(Stdlib[1],cst_Unix_write)}
    function single_write(fd,buf,ofs,len)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buf) - len | 0) < ofs))
       return runtime.unix_single_write(fd,buf,ofs,len);
      return caml_call1(Stdlib[1],cst_Unix_single_write)}
    function write_substring(fd,buf,ofs,len)
     {return write(fd,caml_call1(Stdlib_bytes[43],buf),ofs,len)}
    function single_write_substring(fd,buf,ofs,len)
     {return single_write(fd,caml_call1(Stdlib_bytes[43],buf),ofs,len)}
    function map_file(fd,opt,kind,layout,shared,dims)
     {if(opt)var sth=opt[1],pos=sth;else var pos=_d_;
      return runtime.caml_unix_map_file_bytecode
              (fd,kind,layout,shared,dims,pos)}
    function pause(param)
     {var sigs=runtime.unix_sigprocmask(1,0);
      return runtime.unix_sigsuspend(sigs)}
    function sleep(duration){return runtime.unix_sleep(duration)}
    var
     inet_addr_any=unix_inet_addr_of_string(cst_0_0_0_0),
     inet_addr_loopback=unix_inet_addr_of_string(cst_127_0_0_1);
    try
     {var _A_=unix_inet_addr_of_string(cst$10),inet_addr_any$0=_A_}
    catch(_dj_)
     {_dj_ = caml_wrap_exception(_dj_);
      if(_dj_[1] !== Stdlib[7])throw _dj_;
      var inet_addr_any$0=inet_addr_any}
    try
     {var _z_=unix_inet_addr_of_string(cst_1),inet6_addr_loopback=_z_}
    catch(_di_)
     {_di_ = caml_wrap_exception(_di_);
      if(_di_[1] !== Stdlib[7])throw _di_;
      var inet6_addr_loopback=inet_addr_loopback}
    function domain_of_sockaddr(param)
     {if(0 === param[0])return 0;
      var a=param[1];
      return 16 === caml_ml_string_length(a)?2:1}
    function recv(fd,buf,ofs,len,flags)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buf) - len | 0) < ofs))
       return runtime.unix_recv(fd,buf,ofs,len,flags);
      return caml_call1(Stdlib[1],cst_Unix_recv)}
    function recvfrom(fd,buf,ofs,len,flags)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buf) - len | 0) < ofs))
       return runtime.unix_recvfrom(fd,buf,ofs,len,flags);
      return caml_call1(Stdlib[1],cst_Unix_recvfrom)}
    function send(fd,buf,ofs,len,flags)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buf) - len | 0) < ofs))
       return runtime.unix_send(fd,buf,ofs,len,flags);
      return caml_call1(Stdlib[1],cst_Unix_send)}
    function sendto(fd,buf,ofs,len,flags,addr)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buf) - len | 0) < ofs))
       return runtime.unix_sendto(fd,buf,ofs,len,flags,addr);
      return caml_call1(Stdlib[1],cst_Unix_sendto)}
    function send_substring(fd,buf,ofs,len,flags)
     {return send(fd,caml_call1(Stdlib_bytes[43],buf),ofs,len,flags)}
    function sendto_substring(fd,buf,ofs,len,flags,addr)
     {return sendto(fd,caml_call1(Stdlib_bytes[43],buf),ofs,len,flags,addr)}
    function getsockopt(fd,opt){return runtime.unix_getsockopt(0,fd,opt)}
    function setsockopt(fd,opt,v){return runtime.unix_setsockopt(0,fd,opt,v)}
    function getsockopt_int(fd,opt){return runtime.unix_getsockopt(1,fd,opt)}
    function setsockopt_int(fd,opt,v)
     {return runtime.unix_setsockopt(1,fd,opt,v)}
    function getsockopt_optint(fd,opt)
     {return runtime.unix_getsockopt(2,fd,opt)}
    function setsockopt_optint(fd,opt,v)
     {return runtime.unix_setsockopt(2,fd,opt,v)}
    function getsockopt_float(fd,opt)
     {return runtime.unix_getsockopt(3,fd,opt)}
    function setsockopt_float(fd,opt,v)
     {return runtime.unix_setsockopt(3,fd,opt,v)}
    function getsockopt_error(fd){return runtime.unix_getsockopt(4,fd,0)}
    function getaddrinfo(node,service,opts)
     {try
       {var
         _c__=runtime.unix_getaddrinfo(node,service,opts),
         _c$_=caml_call1(Stdlib_list[9],_c__);
        return _c$_}
      catch(_da_)
       {_da_ = caml_wrap_exception(_da_);
        if(_da_[1] === Stdlib[6])
         {var
           opt_socktype=[0,0],
           opt_protocol=[0,0],
           opt_passive=[0,0],
           _cX_=
            function(param)
             {if(typeof param === "number")
               {if(2 === param){opt_passive[1] = 1;return 0}}
              else
               switch(param[0])
                {case 1:var s=param[1];opt_socktype[1] = [0,s];return 0;
                 case 2:var p=param[1];opt_protocol[1] = p;return 0
                 }
              return 0};
          caml_call2(Stdlib_list[15],_cX_,opts);
          var
           get_port=
            function(ty,kind)
             {if(caml_string_equal(service,cst$5))return [0,[0,ty,0],0];
              try
               {var _df_=[0,[0,ty,runtime.caml_int_of_string(service)],0];
                return _df_}
              catch(_dg_)
               {_dg_ = caml_wrap_exception(_dg_);
                if(_dg_[1] === Stdlib[7])
                 try
                  {var
                    _de_=
                     [0,[0,ty,runtime.unix_getservbyname(service,kind)[3]],0];
                   return _de_}
                 catch(_dh_)
                  {_dh_ = caml_wrap_exception(_dh_);
                   if(_dh_ === Stdlib[8])return 0;
                   throw _dh_}
                throw _dg_}},
           _cY_=opt_socktype[1];
          if(_cY_)
           var
            _cZ_=_cY_[1],
            _c0_=
             1 === _cZ_
              ?get_port(1,cst_udp)
              :_cZ_
                ?caml_string_equal(service,cst$7)?[0,[0,_cZ_,0],0]:0
                :get_port(0,cst_tcp),
            ports=_c0_;
          else
           var
            _c8_=get_port(1,cst_udp$0),
            _c9_=get_port(0,cst_tcp$0),
            ports=caml_call2(Stdlib[37],_c9_,_c8_);
          if(caml_string_equal(node,cst$6))
           var
            addresses=
             caml_call2(Stdlib_list[34],2,opts)
              ?[0,[0,inet_addr_any,cst_0_0_0_0$0],0]
              :[0,[0,inet_addr_loopback,cst_127_0_0_1$0],0];
          else
           try
            {var
              _c7_=[0,[0,unix_inet_addr_of_string(node),node],0],
              addresses=_c7_}
           catch(_dc_)
            {_dc_ = caml_wrap_exception(_dc_);
             if(_dc_[1] !== Stdlib[7])throw _dc_;
             try
              {var
                he=runtime.unix_gethostbyname(node),
                _c4_=caml_call1(Stdlib_array[11],he[4]),
                _c5_=function(a){return [0,a,he[1]]},
                _c6_=caml_call2(Stdlib_list[17],_c5_,_c4_),
                _c3_=_c6_}
             catch(_dd_)
              {_dd_ = caml_wrap_exception(_dd_);
               if(_dd_ !== Stdlib[8])throw _dd_;
               var _c3_=0}
             var addresses=_c3_}
          var
           _c1_=
            function(param)
             {var port=param[2],ty=param[1];
              function _db_(param)
               {var name=param[2],addr=param[1];
                return [0,1,ty,opt_protocol[1],[1,addr,port],name]}
              return caml_call2(Stdlib_list[17],_db_,addresses)},
           _c2_=caml_call2(Stdlib_list[17],_c1_,ports);
          return caml_call1(Stdlib_list[14],_c2_)}
        throw _da_}}
    function getnameinfo(addr,opts)
     {try
       {var _cT_=runtime.unix_getnameinfo(addr,opts);return _cT_}
      catch(_cU_)
       {_cU_ = caml_wrap_exception(_cU_);
        if(_cU_[1] === Stdlib[6])
         {if(0 === addr[0]){var f=addr[1];return [0,cst$8,f]}
          var p=addr[2],a=addr[1];
          try
           {if(caml_call2(Stdlib_list[34],1,opts))throw Stdlib[8];
            var _cS_=runtime.unix_gethostbyaddr(a)[1],hostname=_cS_}
          catch(_cW_)
           {_cW_ = caml_wrap_exception(_cW_);
            if(_cW_ !== Stdlib[8])throw _cW_;
            if(caml_call2(Stdlib_list[34],2,opts))throw Stdlib[8];
            var hostname=runtime.unix_string_of_inet_addr(a)}
          try
           {if(caml_call2(Stdlib_list[34],3,opts))throw Stdlib[8];
            var
             kind=caml_call2(Stdlib_list[34],4,opts)?cst_udp$1:cst_tcp$1,
             _cR_=runtime.unix_getservbyport(p,kind)[1],
             service=_cR_}
          catch(_cV_)
           {_cV_ = caml_wrap_exception(_cV_);
            if(_cV_ !== Stdlib[8])throw _cV_;
            var service=caml_call1(Stdlib_int[10],p)}
          return [0,hostname,service]}
        throw _cU_}}
    function waitpid_non_intr(pid)
     {for(;;)
       try
        {var _cP_=runtime.unix_waitpid(0,pid);return _cP_}
       catch(_cQ_)
        {_cQ_ = caml_wrap_exception(_cQ_);
         if(_cQ_[1] === Unix_error)
          {var _cO_=_cQ_[2];
           if(typeof _cO_ === "number" && 11 === _cO_)continue}
         throw _cQ_}}
    function system(cmd)
     {var id=runtime.unix_fork(0);
      if(0 === id)
       try
        {var _cM_=runtime.unix_execv(shell,[0,shell,cst_c,cmd]);return _cM_}
       catch(_cN_){return caml_sys_exit(127)}
      return waitpid_non_intr(id)[2]}
    function file_descr_not_standard(fd)
     {var fd$0=fd;
      for(;;)
       {if(3 <= fd$0)return fd$0;
        var fd$1=runtime.unix_dup(0,fd$0),fd$0=fd$1;
        continue}}
    function safe_close(fd)
     {try
       {var _cK_=runtime.unix_close(fd);return _cK_}
      catch(_cL_)
       {_cL_ = caml_wrap_exception(_cL_);
        if(_cL_[1] === Unix_error)return 0;
        throw _cL_}}
    function perform_redirections(new_stdin,new_stdout,new_stderr)
     {var
       new_stdin$0=file_descr_not_standard(new_stdin),
       new_stdout$0=file_descr_not_standard(new_stdout),
       new_stderr$0=file_descr_not_standard(new_stderr);
      runtime.unix_dup2(_e_,new_stdin$0,0);
      runtime.unix_dup2(_f_,new_stdout$0,1);
      runtime.unix_dup2(_g_,new_stderr$0,2);
      safe_close(new_stdin$0);
      safe_close(new_stdout$0);
      return safe_close(new_stderr$0)}
    function create_process(cmd,args,new_stdin,new_stdout,new_stderr)
     {var id=runtime.unix_fork(0);
      if(0 === id)
       try
        {perform_redirections(new_stdin,new_stdout,new_stderr);
         var _cI_=runtime.unix_execvp(cmd,args);
         return _cI_}
       catch(_cJ_){return caml_sys_exit(127)}
      return id}
    function create_process_env(cmd,args,env,new_stdin,new_stdout,new_stderr)
     {var id=runtime.unix_fork(0);
      if(0 === id)
       try
        {perform_redirections(new_stdin,new_stdout,new_stderr);
         var _cG_=execvpe(cmd,args,env);
         return _cG_}
       catch(_cH_){return caml_sys_exit(127)}
      return id}
    var popen_processes=caml_call2(Stdlib_hashtbl[1],0,7);
    function open_proc(prog,args,envopt,proc,input,output,error)
     {var id=runtime.unix_fork(0);
      if(0 === id)
       {perform_redirections(input,output,error);
        try
         {if(envopt)
           var env=envopt[1],_cE_=runtime.unix_execve(prog,args,env);
          else
           var _cE_=runtime.unix_execv(prog,args);
          return _cE_}
        catch(_cF_){return caml_sys_exit(127)}}
      return caml_call3(Stdlib_hashtbl[5],popen_processes,proc,id)}
    function open_process_args_in(prog,args)
     {var
       match=runtime.unix_pipe(_h_,0),
       in_write=match[2],
       in_read=match[1],
       inchan=runtime.unix_inchannel_of_filedescr(in_read);
      try
       {open_proc(prog,args,0,[1,inchan],stdin,in_write,stderr)}
      catch(e)
       {e = caml_wrap_exception(e);
        caml_call1(Stdlib[93],inchan);
        runtime.unix_close(in_write);
        throw e}
      runtime.unix_close(in_write);
      return inchan}
    function open_process_args_out(prog,args)
     {var
       match=runtime.unix_pipe(_i_,0),
       out_write=match[2],
       out_read=match[1],
       outchan=runtime.unix_outchannel_of_filedescr(out_write);
      try
       {open_proc(prog,args,0,[2,outchan],out_read,stdout,stderr)}
      catch(e)
       {e = caml_wrap_exception(e);
        caml_call1(Stdlib[76],outchan);
        runtime.unix_close(out_read);
        throw e}
      runtime.unix_close(out_read);
      return outchan}
    function open_process_args(prog,args)
     {var match=runtime.unix_pipe(_j_,0),in_write=match[2],in_read=match[1];
      try
       {var match$0=runtime.unix_pipe(_k_,0)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        throw e}
      var
       out_write=match$0[2],
       out_read=match$0[1],
       inchan=runtime.unix_inchannel_of_filedescr(in_read),
       outchan=runtime.unix_outchannel_of_filedescr(out_write);
      try
       {open_proc(prog,args,0,[0,inchan,outchan],out_read,in_write,stderr)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(out_read);
        runtime.unix_close(out_write);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        throw e}
      runtime.unix_close(out_read);
      runtime.unix_close(in_write);
      return [0,inchan,outchan]}
    function open_process_args_full(prog,args,env)
     {var match=runtime.unix_pipe(_l_,0),in_write=match[2],in_read=match[1];
      try
       {var match$0=runtime.unix_pipe(_m_,0)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        throw e}
      var out_write=match$0[2],out_read=match$0[1];
      try
       {var match$1=runtime.unix_pipe(_n_,0)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        runtime.unix_close(out_read);
        runtime.unix_close(out_write);
        throw e}
      var
       err_write=match$1[2],
       err_read=match$1[1],
       inchan=runtime.unix_inchannel_of_filedescr(in_read),
       outchan=runtime.unix_outchannel_of_filedescr(out_write),
       errchan=runtime.unix_inchannel_of_filedescr(err_read);
      try
       {open_proc
         (prog,
          args,
          [0,env],
          [3,inchan,outchan,errchan],
          out_read,
          in_write,
          err_write)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(out_read);
        runtime.unix_close(out_write);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        runtime.unix_close(err_read);
        runtime.unix_close(err_write);
        throw e}
      runtime.unix_close(out_read);
      runtime.unix_close(in_write);
      runtime.unix_close(err_write);
      return [0,inchan,outchan,errchan]}
    function open_process_shell(fn,cmd)
     {return caml_call2(fn,shell,[0,shell,cst_c$0,cmd])}
    function open_process_in(cmd)
     {return open_process_shell(open_process_args_in,cmd)}
    function open_process_out(cmd)
     {return open_process_shell(open_process_args_out,cmd)}
    function open_process(cmd)
     {return open_process_shell(open_process_args,cmd)}
    function open_process_full(cmd)
     {return open_process_shell(open_process_args_full,cmd)}
    function find_proc_id(fun_name,proc)
     {try
       {var _cC_=caml_call2(Stdlib_hashtbl[6],popen_processes,proc);
        return _cC_}
      catch(_cD_)
       {_cD_ = caml_wrap_exception(_cD_);
        if(_cD_ === Stdlib[8])throw [0,Unix_error,3,fun_name,cst$9];
        throw _cD_}}
    function remove_proc_id(proc)
     {return caml_call2(Stdlib_hashtbl[10],popen_processes,proc)}
    function process_in_pid(inchan)
     {return find_proc_id(cst_process_in_pid,[1,inchan])}
    function process_out_pid(outchan)
     {return find_proc_id(cst_process_out_pid,[2,outchan])}
    function process_pid(param)
     {var outchan=param[2],inchan=param[1];
      return find_proc_id(cst_process_pid,[0,inchan,outchan])}
    function process_full_pid(param)
     {var errchan=param[3],outchan=param[2],inchan=param[1];
      return find_proc_id(cst_process_full_pid,[3,inchan,outchan,errchan])}
    function close_process_in(inchan)
     {var proc=[1,inchan],pid=find_proc_id(cst_close_process_in,proc);
      remove_proc_id(proc);
      caml_call1(Stdlib[93],inchan);
      return waitpid_non_intr(pid)[2]}
    function close_process_out(outchan)
     {var proc=[2,outchan],pid=find_proc_id(cst_close_process_out,proc);
      remove_proc_id(proc);
      try
       {caml_call1(Stdlib[76],outchan)}
      catch(_cB_)
       {_cB_ = caml_wrap_exception(_cB_);if(_cB_[1] !== Stdlib[11])throw _cB_}
      return waitpid_non_intr(pid)[2]}
    function close_process(param)
     {var
       outchan=param[2],
       inchan=param[1],
       proc=[0,inchan,outchan],
       pid=find_proc_id(cst_close_process,proc);
      remove_proc_id(proc);
      caml_call1(Stdlib[93],inchan);
      try
       {caml_call1(Stdlib[76],outchan)}
      catch(_cA_)
       {_cA_ = caml_wrap_exception(_cA_);if(_cA_[1] !== Stdlib[11])throw _cA_}
      return waitpid_non_intr(pid)[2]}
    function close_process_full(param)
     {var
       errchan=param[3],
       outchan=param[2],
       inchan=param[1],
       proc=[3,inchan,outchan,errchan],
       pid=find_proc_id(cst_close_process_full,proc);
      remove_proc_id(proc);
      caml_call1(Stdlib[93],inchan);
      try
       {caml_call1(Stdlib[76],outchan)}
      catch(_cz_)
       {_cz_ = caml_wrap_exception(_cz_);if(_cz_[1] !== Stdlib[11])throw _cz_}
      caml_call1(Stdlib[93],errchan);
      return waitpid_non_intr(pid)[2]}
    function open_connection(sockaddr)
     {var sock=runtime.unix_socket(_o_,domain_of_sockaddr(sockaddr),0,0);
      try
       {runtime.unix_connect(sock,sockaddr);
        var
         _cx_=runtime.unix_outchannel_of_filedescr(sock),
         _cy_=[0,runtime.unix_inchannel_of_filedescr(sock),_cx_];
        return _cy_}
      catch(exn)
       {exn = caml_wrap_exception(exn);runtime.unix_close(sock);throw exn}}
    function shutdown_connection(inchan)
     {return runtime.unix_shutdown(caml_channel_descriptor(inchan),1)}
    function accept_non_intr(s)
     {for(;;)
       try
        {var _cv_=runtime.unix_accept(_p_,s);return _cv_}
       catch(_cw_)
        {_cw_ = caml_wrap_exception(_cw_);
         if(_cw_[1] === Unix_error)
          {var _cu_=_cw_[2];
           if(typeof _cu_ === "number" && 11 === _cu_)continue}
         throw _cw_}}
    function establish_server(server_fun,sockaddr)
     {var sock=runtime.unix_socket(_q_,domain_of_sockaddr(sockaddr),0,0);
      runtime.unix_setsockopt(0,sock,2,1);
      runtime.unix_bind(sock,sockaddr);
      runtime.unix_listen(sock,5);
      for(;;)
       {var match=accept_non_intr(sock),s=match[1],id=runtime.unix_fork(0);
        if(0 === id)
         {if(0 !== runtime.unix_fork(0))caml_sys_exit(0);
          runtime.unix_close(sock);
          var
           inchan=runtime.unix_inchannel_of_filedescr(s),
           outchan=runtime.unix_outchannel_of_filedescr(s);
          caml_call2(server_fun,inchan,outchan);
          caml_call1(Stdlib[99],0)}
        else
         {runtime.unix_close(s);waitpid_non_intr(id)}
        continue}}
    function setsid(_ct_){return runtime.unix_setsid(_ct_)}
    function tcflow(_cs_,_cr_){return runtime.unix_tcflow(_cs_,_cr_)}
    function tcflush(_cq_,_cp_){return runtime.unix_tcflush(_cq_,_cp_)}
    function tcdrain(_co_){return runtime.unix_tcdrain(_co_)}
    function tcsendbreak(_cn_,_cm_)
     {return runtime.unix_tcsendbreak(_cn_,_cm_)}
    function tcsetattr(_cl_,_ck_,_cj_)
     {return runtime.unix_tcsetattr(_cl_,_ck_,_cj_)}
    function tcgetattr(_ci_){return runtime.unix_tcgetattr(_ci_)}
    function getservbyport(_ch_,_cg_)
     {return runtime.unix_getservbyport(_ch_,_cg_)}
    function getservbyname(_cf_,_ce_)
     {return runtime.unix_getservbyname(_cf_,_ce_)}
    function getprotobynumber(_cd_)
     {return runtime.unix_getprotobynumber(_cd_)}
    function getprotobyname(_cc_){return runtime.unix_getprotobyname(_cc_)}
    function gethostbyaddr(_cb_){return runtime.unix_gethostbyaddr(_cb_)}
    function gethostbyname(_ca_){return runtime.unix_gethostbyname(_ca_)}
    function gethostname(_b$_){return runtime.unix_gethostname(_b$_)}
    function getpeername(_b__){return runtime.unix_getpeername(_b__)}
    function getsockname(_b9_){return runtime.unix_getsockname(_b9_)}
    function shutdown(_b8_,_b7_){return runtime.unix_shutdown(_b8_,_b7_)}
    function listen(_b6_,_b5_){return runtime.unix_listen(_b6_,_b5_)}
    function connect(_b4_,_b3_){return runtime.unix_connect(_b4_,_b3_)}
    function bind(_b2_,_b1_){return runtime.unix_bind(_b2_,_b1_)}
    function accept(_b0_,_bZ_){return runtime.unix_accept(_b0_,_bZ_)}
    function socketpair(_bY_,_bX_,_bW_,_bV_)
     {return runtime.unix_socketpair(_bY_,_bX_,_bW_,_bV_)}
    function socket(_bU_,_bT_,_bS_,_bR_)
     {return runtime.unix_socket(_bU_,_bT_,_bS_,_bR_)}
    function string_of_inet_addr(_bQ_)
     {return runtime.unix_string_of_inet_addr(_bQ_)}
    function inet_addr_of_string(_bP_){return unix_inet_addr_of_string(_bP_)}
    function getgrgid(_bO_){return runtime.unix_getgrgid(_bO_)}
    function getpwuid(_bN_){return runtime.unix_getpwuid(_bN_)}
    function getgrnam(_bM_){return runtime.unix_getgrnam(_bM_)}
    function getpwnam(_bL_){return runtime.unix_getpwnam(_bL_)}
    function getlogin(_bK_){return runtime.unix_getlogin(_bK_)}
    function initgroups(_bJ_,_bI_){return runtime.unix_initgroups(_bJ_,_bI_)}
    function setgroups(_bH_){return runtime.unix_setgroups(_bH_)}
    function getgroups(_bG_){return runtime.unix_getgroups(_bG_)}
    function setgid(_bF_){return runtime.unix_setgid(_bF_)}
    function getegid(_bE_){return runtime.unix_getegid(_bE_)}
    function getgid(_bD_){return runtime.unix_getgid(_bD_)}
    function setuid(_bC_){return runtime.unix_setuid(_bC_)}
    function geteuid(_bB_){return runtime.unix_geteuid(_bB_)}
    function getuid(_bA_){return runtime.unix_getuid(_bA_)}
    function setitimer(_bz_,_by_){return runtime.unix_setitimer(_bz_,_by_)}
    function getitimer(_bx_){return runtime.unix_getitimer(_bx_)}
    function utimes(_bw_,_bv_,_bu_)
     {return runtime.unix_utimes(_bw_,_bv_,_bu_)}
    function times(_bt_){return runtime.unix_times(_bt_)}
    function _r_(_bs_){return runtime.unix_sleep(_bs_)}
    function alarm(_br_){return runtime.unix_alarm(_br_)}
    var
     mktime=runtime.unix_mktime,
     localtime=runtime.unix_localtime,
     gmtime=runtime.unix_gmtime;
    function gettimeofday(_bq_){return runtime.unix_gettimeofday(_bq_)}
    function time(_bp_){return runtime.unix_time(_bp_)}
    function sigsuspend(_bo_){return runtime.unix_sigsuspend(_bo_)}
    function sigpending(_bn_){return runtime.unix_sigpending(_bn_)}
    function sigprocmask(_bm_,_bl_)
     {return runtime.unix_sigprocmask(_bm_,_bl_)}
    function kill(_bk_,_bj_){return runtime.unix_kill(_bk_,_bj_)}
    function lockf(_bi_,_bh_,_bg_){return runtime.unix_lockf(_bi_,_bh_,_bg_)}
    function select(_bf_,_be_,_bd_,_bc_)
     {return runtime.unix_select(_bf_,_be_,_bd_,_bc_)}
    function readlink(_bb_){return runtime.unix_readlink(_bb_)}
    function has_symlink(_ba_){return runtime.unix_has_symlink(_ba_)}
    function symlink(_a$_,_a__,_a9_)
     {return runtime.unix_symlink(_a$_,_a__,_a9_)}
    function mkfifo(_a8_,_a7_){return runtime.unix_mkfifo(_a8_,_a7_)}
    function pipe(_a6_,_a5_){return runtime.unix_pipe(_a6_,_a5_)}
    function closedir(_a4_){return runtime.unix_closedir(_a4_)}
    function rewinddir(_a3_){return runtime.unix_rewinddir(_a3_)}
    function readdir(_a2_){return runtime.unix_readdir(_a2_)}
    function opendir(_a1_){return runtime.unix_opendir(_a1_)}
    function chroot(_a0_){return runtime.unix_chroot(_a0_)}
    function getcwd(_aZ_){return runtime.unix_getcwd(_aZ_)}
    function chdir(_aY_){return runtime.unix_chdir(_aY_)}
    function rmdir(_aX_){return runtime.unix_rmdir(_aX_)}
    function mkdir(_aW_,_aV_){return runtime.unix_mkdir(_aW_,_aV_)}
    function clear_close_on_exec(_aU_)
     {return runtime.unix_clear_close_on_exec(_aU_)}
    function set_close_on_exec(_aT_)
     {return runtime.unix_set_close_on_exec(_aT_)}
    function clear_nonblock(_aS_){return runtime.unix_clear_nonblock(_aS_)}
    function set_nonblock(_aR_){return runtime.unix_set_nonblock(_aR_)}
    function dup2(_aQ_,_aP_,_aO_){return runtime.unix_dup2(_aQ_,_aP_,_aO_)}
    function dup(_aN_,_aM_){return runtime.unix_dup(_aN_,_aM_)}
    function access(_aL_,_aK_){return runtime.unix_access(_aL_,_aK_)}
    function umask(_aJ_){return runtime.unix_umask(_aJ_)}
    function fchown(_aI_,_aH_,_aG_)
     {return runtime.unix_fchown(_aI_,_aH_,_aG_)}
    function chown(_aF_,_aE_,_aD_){return runtime.unix_chown(_aF_,_aE_,_aD_)}
    function fchmod(_aC_,_aB_){return runtime.unix_fchmod(_aC_,_aB_)}
    function chmod(_aA_,_az_){return runtime.unix_chmod(_aA_,_az_)}
    function link(_ay_,_ax_,_aw_){return runtime.unix_link(_ay_,_ax_,_aw_)}
    function rename(_av_,_au_){return runtime.unix_rename(_av_,_au_)}
    function unlink(_at_){return runtime.unix_unlink(_at_)}
    function _s_(_as_){return runtime.unix_fstat_64(_as_)}
    function _t_(_ar_){return runtime.unix_lstat_64(_ar_)}
    function _u_(_aq_){return runtime.unix_stat_64(_aq_)}
    function _v_(_ap_,_ao_){return runtime.unix_ftruncate_64(_ap_,_ao_)}
    function _w_(_an_,_am_){return runtime.unix_truncate_64(_an_,_am_)}
    var
     LargeFile=
      [0,
       function(_al_,_ak_,_aj_){return runtime.unix_lseek_64(_al_,_ak_,_aj_)},
       _w_,
       _v_,
       _u_,
       _t_,
       _s_],
     isatty=runtime.unix_isatty;
    function fstat(_ai_){return runtime.unix_fstat(_ai_)}
    function lstat(_ah_){return runtime.unix_lstat(_ah_)}
    function stat(_ag_){return runtime.unix_stat(_ag_)}
    function ftruncate(_af_,_ae_){return runtime.unix_ftruncate(_af_,_ae_)}
    function truncate(_ad_,_ac_){return runtime.unix_truncate(_ad_,_ac_)}
    function lseek(_ab_,_aa_,_$_){return runtime.unix_lseek(_ab_,_aa_,_$_)}
    var
     descr_of_out_channel=caml_channel_descriptor,
     descr_of_in_channel=caml_channel_descriptor;
    function out_channel_of_descr(___)
     {return runtime.unix_outchannel_of_filedescr(___)}
    function in_channel_of_descr(_Z_)
     {return runtime.unix_inchannel_of_filedescr(_Z_)}
    function _x_(_Y_){return runtime.unix_fsync(_Y_)}
    function close(_X_){return runtime.unix_close(_X_)}
    function openfile(_W_,_V_,_U_){return runtime.unix_open(_W_,_V_,_U_)}
    function nice(_T_){return runtime.unix_nice(_T_)}
    function getppid(_S_){return runtime.unix_getppid(_S_)}
    function getpid(_R_){return runtime.unix_getpid(_R_)}
    function waitpid(_Q_,_P_){return runtime.unix_waitpid(_Q_,_P_)}
    function wait(_O_){return runtime.unix_wait(_O_)}
    function fork(_N_){return runtime.unix_fork(_N_)}
    function execvp(_M_,_L_){return runtime.unix_execvp(_M_,_L_)}
    function execve(_K_,_J_,_I_){return runtime.unix_execve(_K_,_J_,_I_)}
    function execv(_H_,_G_){return runtime.unix_execv(_H_,_G_)}
    function putenv(_F_,_E_){return runtime.unix_putenv(_F_,_E_)}
    var unsafe_getenv=caml_sys_unsafe_getenv,getenv=runtime.caml_sys_getenv;
    function _y_(_D_){return runtime.unix_environment_unsafe(_D_)}
    function environment(_C_){return runtime.unix_environment(_C_)}
    function error_message(_B_){return runtime.unix_error_message(_B_)}
    var
     include=
      [0,
       Unix_error,
       error_message,
       handle_unix_error,
       environment,
       _y_,
       getenv,
       unsafe_getenv,
       putenv,
       execv,
       execve,
       execvp,
       execvpe,
       fork,
       wait,
       waitpid,
       system,
       getpid,
       getppid,
       nice,
       stdin,
       stdout,
       stderr,
       openfile,
       close,
       _x_,
       read,
       write,
       single_write,
       write_substring,
       single_write_substring,
       in_channel_of_descr,
       out_channel_of_descr,
       descr_of_in_channel,
       descr_of_out_channel,
       lseek,
       truncate,
       ftruncate,
       stat,
       lstat,
       fstat,
       isatty,
       LargeFile,
       map_file,
       unlink,
       rename,
       link,
       chmod,
       fchmod,
       chown,
       fchown,
       umask,
       access,
       dup,
       dup2,
       set_nonblock,
       clear_nonblock,
       set_close_on_exec,
       clear_close_on_exec,
       mkdir,
       rmdir,
       chdir,
       getcwd,
       chroot,
       opendir,
       readdir,
       rewinddir,
       closedir,
       pipe,
       mkfifo,
       create_process,
       create_process_env,
       open_process_in,
       open_process_out,
       open_process,
       open_process_full,
       open_process_args_in,
       open_process_args_out,
       open_process_args,
       open_process_args_full,
       process_in_pid,
       process_out_pid,
       process_pid,
       process_full_pid,
       close_process_in,
       close_process_out,
       close_process,
       close_process_full,
       symlink,
       has_symlink,
       readlink,
       select,
       lockf,
       kill,
       sigprocmask,
       sigpending,
       sigsuspend,
       pause,
       time,
       gettimeofday,
       gmtime,
       localtime,
       mktime,
       alarm,
       sleep,
       _r_,
       times,
       utimes,
       getitimer,
       setitimer,
       getuid,
       geteuid,
       setuid,
       getgid,
       getegid,
       setgid,
       getgroups,
       setgroups,
       initgroups,
       getlogin,
       getpwnam,
       getgrnam,
       getpwuid,
       getgrgid,
       inet_addr_of_string,
       string_of_inet_addr,
       inet_addr_any,
       inet_addr_loopback,
       inet_addr_any$0,
       inet6_addr_loopback,
       socket,
       domain_of_sockaddr,
       socketpair,
       accept,
       bind,
       connect,
       listen,
       shutdown,
       getsockname,
       getpeername,
       recv,
       recvfrom,
       send,
       send_substring,
       sendto,
       sendto_substring,
       getsockopt,
       setsockopt,
       getsockopt_int,
       setsockopt_int,
       getsockopt_optint,
       setsockopt_optint,
       getsockopt_float,
       setsockopt_float,
       getsockopt_error,
       open_connection,
       shutdown_connection,
       establish_server,
       gethostname,
       gethostbyname,
       gethostbyaddr,
       getprotobyname,
       getprotobynumber,
       getservbyname,
       getservbyport,
       getaddrinfo,
       getnameinfo,
       tcgetattr,
       tcsetattr,
       tcsendbreak,
       tcdrain,
       tcflush,
       tcflow,
       setsid];
    caml_register_global(143,include,"Unix");
    var
     UnixLabels=
      [0,
       Unix_error,
       error_message,
       handle_unix_error,
       environment,
       getenv,
       unsafe_getenv,
       putenv,
       execv,
       execve,
       execvp,
       execvpe,
       fork,
       wait,
       waitpid,
       system,
       getpid,
       getppid,
       nice,
       stdin,
       stdout,
       stderr,
       openfile,
       close,
       read,
       write,
       single_write,
       write_substring,
       single_write_substring,
       in_channel_of_descr,
       out_channel_of_descr,
       descr_of_in_channel,
       descr_of_out_channel,
       lseek,
       truncate,
       ftruncate,
       stat,
       lstat,
       fstat,
       isatty,
       LargeFile,
       map_file,
       unlink,
       rename,
       link,
       chmod,
       fchmod,
       chown,
       fchown,
       umask,
       access,
       dup,
       dup2,
       set_nonblock,
       clear_nonblock,
       set_close_on_exec,
       clear_close_on_exec,
       mkdir,
       rmdir,
       chdir,
       getcwd,
       chroot,
       opendir,
       readdir,
       rewinddir,
       closedir,
       pipe,
       mkfifo,
       create_process,
       create_process_env,
       open_process_in,
       open_process_out,
       open_process,
       open_process_full,
       open_process_args_in,
       open_process_args_out,
       open_process_args,
       open_process_args_full,
       close_process_in,
       close_process_out,
       close_process,
       close_process_full,
       symlink,
       has_symlink,
       readlink,
       select,
       lockf,
       kill,
       sigprocmask,
       sigpending,
       sigsuspend,
       pause,
       time,
       gettimeofday,
       gmtime,
       localtime,
       mktime,
       alarm,
       sleep,
       times,
       utimes,
       getitimer,
       setitimer,
       getuid,
       geteuid,
       setuid,
       getgid,
       getegid,
       setgid,
       getgroups,
       setgroups,
       initgroups,
       getlogin,
       getpwnam,
       getgrnam,
       getpwuid,
       getgrgid,
       inet_addr_of_string,
       string_of_inet_addr,
       inet_addr_any,
       inet_addr_loopback,
       inet_addr_any$0,
       inet6_addr_loopback,
       socket,
       domain_of_sockaddr,
       socketpair,
       accept,
       bind,
       connect,
       listen,
       shutdown,
       getsockname,
       getpeername,
       recv,
       recvfrom,
       send,
       send_substring,
       sendto,
       sendto_substring,
       getsockopt,
       setsockopt,
       getsockopt_int,
       setsockopt_int,
       getsockopt_optint,
       setsockopt_optint,
       getsockopt_float,
       setsockopt_float,
       getsockopt_error,
       open_connection,
       shutdown_connection,
       establish_server,
       gethostname,
       gethostbyname,
       gethostbyaddr,
       getprotobyname,
       getprotobynumber,
       getservbyname,
       getservbyport,
       getaddrinfo,
       getnameinfo,
       tcgetattr,
       tcsetattr,
       tcsendbreak,
       tcdrain,
       tcflush,
       tcflow,
       setsid];
    caml_register_global(144,UnixLabels,"UnixLabels");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ1bml4LmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
