import { post, fetch } from '@/until/http.js'
export default {
    //获取版本
    versions(data) {
        return post('/core/system-info', data)
    },
    //钉钉登录获取状态
    Dinglogin(data) {
        return post('/common/login/get-ddscancode', data)
    },
    //发送短信验证码    暂时未使用
    // Phonepin(data) {
    //     return post('https://api2.teammodel.net/service/sandsms/pin', data)
    // },
    //验证手机号和验证 暂时未使用
    // verifyCode(data) {
    //     return post('https://api2.teammodel.net/oauth2/login', data)
    // },
    //手机验证码都通过后，进行绑定操作 暂时未使用
    // bindUserid(data) {
    //     return post('/common/login/set-bind ', data)
    // },
    //正常醍摩豆账号或者手机号登录 暂时未使用
    // loginUser(data) {
    //     return post('https://api2.teammodel.cn/oauth2/login', data)  
    // },
    //获取组织架构
    getorganization(data) {
        return post('/dd/get-deptlist', data)
    },
    //正常醍摩豆/手机号码登录后 获取id_token,通过id_token获取人物信息
    teacherinfo(data) {
        return post('/common/login/get-teacherinfo', data)
    },
    //获取所有的附加权限表
    getAllpermission(data) {
        return post('/batchschool/get-teacher-authoritybilist', data)
    },
    //教室管理
    //人员管理
    getEveryinfo(data) {
        return post('/tabledd/get-ddusers', data)
    },
    //人员权限管理 ***    Headers[x-auth-authtoken]
    updateManege(data) {
        return post('/tabledd/set-permissions', data)
    },
    //根据部门ID获取部门下的人员
    getDeparttotal(data) {
        return post('/tabledd/get-dddeptiduser', data)
    },
    //设置系统管理员     Headers[x-auth-authtoken]
    setisAdmin(data) {
        return post('/tabledd/set-backend', data)
    },
    //同步某个人员信息  已完善 V2.0
    updateAlone(data) {
        return post('/tabledd/set-usettmdinfo', data)
    },
    //为用户设置关联学校或删除
    setAistschool(data) {
        return post('/schoolcheck/set-aistschool', data)
    },
    //获取区域内的微能力点
    getCapacity(data) {
        return post('/batcharea/get-areas', data)
    },
    //创建区域 ***   Headers[x-auth-authtoken]
    createAreas(data) {
        return post('/batcharea/batch-area', data)
    },
    //创建学校-根据手机号查询相关用户信息
    getUserdata(data) {
        return post('/biservers/get-mobileuserinfo', data)
    },
    //创建学校 ***    Headers[x-auth-authtoken]
    createdSchools(data) {
        return post('/batchschool/batch-school', data)
    },
    //批量创校的数据验证
    verifyContent(data) {
        return post('/batchschool/get-checkexists', data)
    },
    //获取学校简码
    getSchoolcode(data) {
        return post('/batchschool/get-schoolcode', data)
    },
    //修改学区简码 or 苏格拉底频道简码
    updateAreacode(data){
        return post('/batcharea/upd-area',data)
    },


    //区域管理和微能力点管理
    //切换为能力点 ***    Headers[x-auth-authtoken]
    changeCutstandard(data) {
        return post('/batcharea/cut-standard', data)
    },
    //根据方案获取册别（方案下的所有微能力点，例A1 A2 A3）
    getProjectAbility(data) {
        return post('/biabilitymgmt/get-abilitys', data)
    },
    //册别详情(例 A1详情和自我检测试卷内容)
    getAbilityInfo(data) {
        return post('/biabilitymgmt/get-abulityid', data)
    },
    //册别下的章节tree
    getAbilityDeatils(data) {
        return post('/biabilitytask/get-abilitytasksid', data)
    },
    //册别删除（删除某个能力点） ***   Headers[x-auth-authtoken]
    delAbility(data) {
        return post('/biabilitymgmt/del-ability', data)
    },
    //调整微能力点的必修、选修 *** Headers[x-auth-authtoken]
    saveAbility(data) {
        return post('/biabilitymgmt/upd-currency', data)
    },
    //同步微能力点
    getSynchronize(data) {
        return post('/batcharea/cut-full-statndard', data)
    },
    //获取未加入区域的学校
    // getNotjoinSchool(data) {
    //     return post('/schoolcheck/get-notarea', data)
    // },
    //未加入学区 新API
    getNotjoinSchool(data) {
        return post('/schoolcheck/get-nojoinsc', data)
    },
    //获取目前区域内拥有的学校
    getForareaSchool(data) {
        return post('/area/get-areaschools', data)
    },
    //区域内加入学校 ***  Headers[x-auth-authtoken]
    areaAddSchool(data) {
        return post('/schoolcheck/set-schooljoinarea', data)
    },
    //区域内移除学校 *** Headers[x-auth-authtoken]
    areaDeleSchool(data) {
        return post('/area/set-areashiftschool', data)
    },
    //学区内增加管理员
    areaAddadmins(data) {
        return post('/area/set-manage', data)
    },
    //获取学区的管理员列表
    getAreadmin(data) {
        return post('/area/get-manage', data)
    },
    //删除学区管理员
    deleteAdmin(data) {
        return post('/area/del-manage', data)
    },
    //管理员所管理学校
    adminRelevanceschool(data) {
        return post('/schoolcheck/get-managescs', data)
    },
    //添加管理员所管理的学校（人员管理-管理学校）
    adminAddschool(data) {
        return post('/schoolcheck/set-batchmageage', data)
    },


    //学校管理
    //获取所有学校或 单独某个学校信息
    getSchooldata(data) {
        return post('/batchschool/get-schoolsinfo', data)
    },
    //获取所有学校信息 V2.0
    getSchool(data) {
        return post('/school/get-scinfos', data)
    },
    //进入学校管理，获取所有顾问列表（目前是说去  研发中心B）(也可替代其他 组织架构，一层人员的获取。)
    getAllassist(data) {
        return post('/dd/get-tmdandddusers', data)
    },
    //对学校编辑提交更改 ***   Headers[x-auth-authtoken]   接口已对接  已完善V2.0
    updateSchoolinfo(data) {
        return post('/batchschool/upd-schoolassist', data)
    },
    //获取当前学校的学段管理数据
    getNowscholl(data) {
        return post('/schoolcheck/get-schoolid', data)
    },
    //修改学段管理内容    Headers[x-auth-authtoken]   接口已对接
    updateSchoolphase(data) {
        return post('/schoolcheck/upd-school', data)
    },
    //当前学校授权内容
    getschoolAuthorization(data) {
        return post('/product/get-school', data)
    },
    //绑定和解绑教室序列号
    operateClassroom(data) {
        return post('/schoolroom/set-bind', data)
    },
    //删除学校
    removeSchool(data) {
        return post('/schoolcheck/set-del', data)
    },
    //获取学校管理员列表
    getSchooladmin(data) {
        return post('/schoolcheck/get-scmanage', data)
    },
    //添加学校管理
    setSchooladmin(data) {
        return post('/schoolcheck/set-manage', data)
    },
    //删除学校管理员
    deleteSchooladmin(data) {
        return post('/schoolcheck/del-manage', data)
    },
    //获取简易学校列表，数据本地化核验使用 或后端查询学校是否存在
    getsimpleSchool(data) {
        return post('/schoolcheck/get-scsimple', data)
    },
    //获取所有学校(所有)
    getallSchool(data) {
        return post('/batchschool/get-allscinfo', data)
    },
    //透過位置取得學校資料
    getSchooBasicInfo(data) {
        return post('/batchschool/get-school-basic-info', data)
    },
    //弱歸戶
    updUserSchoolW(data) {
        return post('/batchschool/upd-user-schoolw', data)
    },    

    //首页dashboard数据接口
    //获取各城市的学校数量（bar）
    getEachSchool(data) {
        return post('/homestatis/get-cityschool', data)
    },
    //根据城市code获取 下面的学生、老师、学校数量
    getSchoolDetails(data) {
        return post('/homestatis/get-districtstics', data)
    },
    //获取全部教师数量、学生数量、创校数量、空间大小 总和
    geteachTotal(data) {
        return post('/homestatis/get-allnumber', data)
    },
    //地图 获取各个省的数据统计
    getEachProvince(data) {
        return post('/homestatis/get-provincestics', data)
    },
    //统计空间类型占比
    getSpacetype(data) {
        return post('/homestatis/get-datatypestics', data)
    },
    //各个模组的数据情况
    getModuledata(data) {
        return post('/product/get-allcount', data)
    },
    //强制刷新人员名单（从DD服务器拉取）  ***  Headers[x-auth-authtoken]
    getStaffList(data) {
        return post('/tabledd/get-dingdingusers', data)
    },


    //微能力点编辑
    //tree增加子节点 ***  Headers[x-auth-authtoken]  
    addChild(data) {
        return post('/biabilitytask/upd-abilitytask', data)
    },
    //tree删除父节点（一级@章节） ***  Headers[x-auth-authtoken]
    removeChildnodes(data) {
        return post('/biabilitytask/del-abilitytask', data)
    },
    //新增或编辑当前册别 （同时也支持添加实践任务）     Headers[x-auth-authtoken]   /**参数结构有所更改需要和后端对接、BI文档已更新。**/    你这里有重复API
    redactOraddAbility(data) {
        return post('/biabilitymgmt/upd-ability', data)
    },

    //操作日志类
    //获取所有日志
    getAlllog(data) {
        return post('/operatelog/get-record', data)
    },

    //查询工具类
    //根据选择类型查询数据
    searchTypedata(data) {
        return post('/jointly/get-info', data)
    },



    //区域服务
    //获取全区的数据(基础数据)
    getAlldata(data) {
        return post('/activity/get-all', data)
    },
    //统计所有的评量、投票、问卷、作业
    getclassify(data) {
        return post('/activity/get-allactivity', data)
    },
    //获取课例活动数据
    getClassData(data) {
        return post('/lesson/get-allarea', data)
    },
    //获取课例活跃
    getClassLively(data) {
        return post('/lesson/get-weekcount', data)
    },
    //获取所有学区列表
    getAreaList(data) {
        return post('/activity/get-areasanls', data)
    },

    //获取某个学区的数据统计
    getSchoolStatistics(data) {
        return post('/activity/get-areastics', data)
    },
    //获取数据占比 总数据、上周、本月
    getResearchdata(data) {
        return post('/lesson/get-schoolan', data)
    },
    //获取空间使用率和明细
    getEmploySizes(data) {
        return post('/bloblog/get-area', data)
    },
    //获取某个学区内的顾问人员列表
    getCounselorlist(data) {
        return post('/area/get-assists', data)
    },
    //获取某个学区内的学校列表
    getAreaSchoolList(data) {
        return post('/area/get-schools', data)
    },

    //系统配置
    //站点配置
    getSystemConfig(data) {
        return post('/syscfg/get-allconfig', data)
    },
    //修改系统配置信息or添加新站点
    updateSystemconfig(data) {
        return post('/syscfg/set-singleconfig', data)
    },
    //搜素人员
    searchPersonnel(data) {
        return post('/biservers/get-coreinfo', data)
    },
    //移除管理员
    // removeAdmin(data) {
    //     return post('/tabledd/set-backend', data)
    // },
    //切换站点
    cutSitesInfo(data) {
        return post('/syscfg/cut-site', data)
    },
    //添加系统管理员
    addAdmin(data) {
        return post('/tabledd/set-tmdadmin', data)
    },
    //变更BI权限和身份
    setRolesandPower(data) {
        return post('/tabledd/set-rolesper', data)
    },
    //API管理内 当天的API访问情况
    getNowapi(data) {
        return post('/analyse/get-dayapi', data)
    },
    //API列表
    getApiInfo(data) {
        return post('/analyse/get-dayapi', data)
    },
    //查询当前人员管理的学校列表
    adminMangeSchool(data) {
        return post('/schoolcheck/get-managescs', data)
    },



    //首页运维数据
    //首页基础数据统计
    getAllcount(data) {
        return post('/online/get-count', data)
    },
    //获得在线人数
    getOnline(data) {
        return post('/online/get-trend', data)
    },
    //获取课例活跃和Hiteach开课
    getLessontrend(data) {
        return post('/online/get-lessontrend', data)
    },
    //获取版本占比
    getVersions(data) {
        return post('/online/get-edition', data)
    },

    //区校掌握
    //基础数据以及排行
    getBasicsData(data) {
        return post('/schoolcheck/get-assisscbase', data)
    },
    //获取当前所有学校所有月份的数据（课例、活动、互动）
    getAllaspects(data) {
        return post('/schoolcheck/get-assissc', data)
    },
    //获取课例、活动、互动数据 同比较，以及line图
    getaspects(data) {
        return post('/schoolcheck/get-assissccnt', data)
    },
    //获取某个学校的详细信息
    schoolDetails(data) {
        return post('/schoolcheck/get-analyse', data)
    },
    //获取所有管理的学校服务模块和各个版本占比
    getServiceandVersions(data) {
        return post('/schoolcheck/get-proded', data)
    },
    //统计某个学校的年级、科目数据
    getGradeandSubjects(data) {
        return post('/schoolcheck/get-ratio', data)
    },
    //获取所有学区的数据 V2.1
    getAllarea(data) {
        return post('/school/get-allscstats ', data)
    },
    //获取某个学区内的数据 V2.1
    getoneselfArea(data) {
        return post('/school/get-areastats', data)
    },
    //获取所有学校数据 （区校掌握-学校情况）V2.1
    acquireAllschool(data) {
        return post('/school/get-rolestats', data)
    },
    //获取某个学校的详细信息 V2.1
    schooloneDetails(data) {
        return post('/school/get-scstats', data)
    },
    //获取某个学校的资源数和课堂数量
    classroomDatas(data) {
        return post('/school/get-leseoncnt', data)
    },


    //顾问使用（我参与的）
    //学校管理 数据统计
    schoolStatistics(data) {
        return post('/schoolcheck/get-schoolcnt', data)
    },
    //课例数据占比
    proportionData(data) {
        return post('/schoolcheck/get-schooldate', data)
    },
    //获取试卷资源
    getExaminations(data) {
        return post('/paper/get-list', data)
    },
    //根据不同学校获取 相应的sas
    getSchoolsas(data) {
        return post('/biservers/get-cntrkey', data)
    },
    //访问试卷信息
    getExamintionpaper(url) {
        return fetch(url, '')
    },
    //获取所有学校进行筛选（试卷拷贝功能）
    getschoolIntegration(data) {
        return post('/schoolcheck/get-schools', data)
    },
    //拷贝试卷
    copypaperTo(data) {
        return post('/paper/copy-infos', data)
    },


    //消息通知（端外通知）
    informSearch(data) {
        return post('/notice/get-info', data)
    },
    //发送端外通知（消息通知）
    sendMsgs(data) {
        return post('notice/push-info', data)
    },
    //获取消息列表
    getMsglist(data) {
        return post('/notice/get-infos', data)
    },
    //端外通知 v2
    sendPushnotify(data) {
        return post('https://api2.teammodel.net/service/PushNotify',data) 
     },
    //第三方相关API(BI)
    //创建or保存 第三方信息
    // setThirdparty(data) {
    //     return post('/business/set-info', data)
    // },
    // //获取所有第三方企业信息
    // getAllthirdparty(data) {
    //     return post('/business/get-info', data)
    // },
    // //查询企业相关的学校列表
    // relevanceSchool(data) {
    //     return post('/business/get-companyschool', data)
    // },
    // //企业关联学校
    // correlationSchool(data) {
    //     return post('/business/set-companyschool', data)
    // },
    // //重新生成token和密码
    // produceCipher(data) {
    //     return post('/business/reset-bus', data)
    // },
    // //企业移除关联学校
    // enterpriseRemoveSchool(data) {
    //     return post('/business/del-companysc', data)
    // },

    //7.1更正API
    //获取企业列表
    getAllenterprise(data) {
        return post('/bizconfig/get-infos', data)
    },
    //创建企业或修改企业信息
    updateThirdparty(data) {
        return post('/bizconfig/set-info', data)
    },
    //重新生成企业token秘钥
    generateToken(data) {
        return post('/bizconfig/reset-secretkey', data)
    },
    //企业添加或删除 关联学校
    addorremoveSchool(data) {
        return post('/bizconfig/rel-school', data)
    },
    //获取学校列表进行关联
    getschoolCorrelation(data) {
        return post('/bizconfig/get-schools', data)
    },
    //根据企业ID获取 用户列表
    getUserarr(data) {
        return post('/bizuser/get-bizid', data)
    },
    //根据手机号查询企业用户
    searchphoneUser(data) {
        return post('/bizuser/get-mobileuser', data)
    },
    //关联用户到企业
    getCorrelationUser(data) {
        return post('/bizuser/rel-biz', data)
    },
    //删除企业
    deleEnterprise(data) {
        return post('/bizconfig/del-info',data)
     },

    /*产品使用分析*/
    //搜索数据
    getUseproduct(data) {
        return post('/prodanalysis/get-iotstics', data)
    },
    //根据省、市、学区 获取相应其下的所有学校
    getfilterSchool(data) {
        return post('/prodanalysis/get-school', data)
    },
    //ID歸戶增量統計
    getTmidUseprod(data) {
        return post('/tmid/get-tmid-useprod', data)
    },
    /*产品使用分析end*/

    //获取地址location
    getlocation(key, location) {
        return fetch('https://restapi.amap.com/v3/ip?key=' + key + '&ip=' + location)
    },
    //获取天气的API
    getWeather(key, location) {
        return fetch('https://devapi.qweather.com/v7/weather/now?location=' + location + '&key=' + key)
    },

    //创建学校 BB验证数据，以及BB搜索学校信息s
    verifyDatainbb(data) {
        return post('https://bb.teammodel.net/ies5/search-cs-school', data)
    },
    //测试站
    verifyDatainbbrc(data) {
        return post('https://bb-rc.teammodel.net/ies5/search-cs-school', data)
    },
    //创建学校成功，数据回传BB
    successBack(data) {
        return post('https://bb.teammodel.net/ies5/create-cs-school ', data)
    },

    /*ID查询 相关*/
    getUserdatas(data) {
        return post('/tmid/get-tmidstics',data)
    },
    /*ID查询 IOT相关*/
    getUserIOT(data) {
        return post('/tmid/get-tmid-iot',data)
    },

    /*優惠券相關*/
    // 建立優惠券
    crtCoupon(data) {
        return post('/coupon/create-coupon',data)
    },
    // 歸戶
    consolidationCoupon(data) {
        return post('/coupon/consolidation-coupon',data)
    },

    /*簡版通知*/
    // 發送
    pushNotify(data) {
        return post('/coupon/push-notify',data)
    },
    //統購平台 - 縣市名額設定 ※目前只開放GL站 
    setPurchaseSeats(data, testflg=false) {
        let Domain = (testflg) ? 'bb-rc.teammodel.net' : 'bb.teammodel.net';
        return post(`https://${Domain}/bbauthapi/set-purchase-seats`, data)
    },
    //統購平台 - 取得統購平台列表
    getBBPurchase(data) {
        return post('/schoolcheck/get-bbpurchase',data)
    },
    //統購平台 - 取得縣市學校
    getCsSchoolByGeo(data) {
        return post('/schoolcheck/get-school-geo', data)
    },
}