export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wxbea3f949146f9d4d",

    // 公众号APP_SECRET
    APP_SECRET: "437634d6b5f88fa0a64aaf565e981646",

    // 模板消息id
    TEMPLATE_ID: "ALHiqONeAz4ZmhfeCFxgwPr2QgRbUUzZkUhdQhHVp3o",

    // 回调消息模板id, 用来看自己有没有发送成功的那个模板
    CALLBACK_TEMPLATE_ID: "",


    /**
     * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
     * [
     *   {name: '老婆0', id: "ohxOO6VskYv0Kuf-ywIZVRMpuXhk"}, 
     *   {name: '老婆1', id: "2hxOO6VskYv0Kuf-y你懂的,填错狗头打烂RMpuXhk"},
     * ]
     */
    USERS: [
      {name: '老婆', id: "obvb457mzGG1cY1ylYcf35DriVg4"}
    ],
    // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
    CALLBACK_USERS: [
      {name: '自己',id: "obvb457mzGG1cY1ylYcf35DriVg4"}, 
    ],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "山东",
    // 所在城市
    CITY: "济南",

    /** 重要节日相关 */

    /**
     * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
     * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
     * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
     * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
     */
    FESTIVALS: [
      {"type": "生日", "name": "老婆", "year": "1996", "date": "10-30"},
      {"type": "节日", "name": "结婚纪念日", "year": "2020", "date": "09-03"},
      {"type": "生日", "name": "李四", "year": "1996", "date": "09-31"},
      {"type": "节日", "name": "被搭讪纪念日", "year": "2021", "date": "09-01"},
    ],

    /**
     * 限制重要节日的展示条目, 需要填写数字; 
     * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
     * 如果为0, 则默认展示全部
     */
    FESTIVALS_LIMIT: 4,

    /** 日期相关 */

    /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
      * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
      * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
      * */
    CUSTOMIZED_DATE_LIST: [
      // 在一起的日子
      {"keyword": "love_day", date: "2015-05-01"},
      // 结婚纪念日
      {"keyword": "marry_day", date: "2020-01-04"},
      // 退伍日, 不用可以删掉
      {"keyword": "ex_day", date: "2022-08-31"},
      // sakana日
      // {"keyword": "sakana_day", date: "2022-01-06"},
      // ... 
    ],



// 共推送 {{need_post_num.DATA}}  人
// 成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
// 成功用户: {{success_post_ids.DATA}}
// 失败用户: {{fail_post_ids.DATA}}
