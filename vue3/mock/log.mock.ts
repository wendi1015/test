import { defineMock } from "./base";

export default defineMock([
  {
    url: "logs/page",
    method: ["GET"],
    body: {
      code: "00000",
      data: {
        list: [
          {
            id: 36192,
            module: "菜单",
            content: "菜单列表",
            requestUri: "/api/v1/menus",
            method: null,
            ip: "183.156.148.241",
            region: "浙江省 杭州市",
            browser: "Chrome 109.0.0.0",
            os: "OSX",
            executionTime: 5,
            createBy: null,
            createTime: "2024-07-07 20:38:47",
            operator: "系统管理员",
          },
          {
            id: 36190,
            module: "字典",
            content: "字典分页列表",
            requestUri: "/api/v1/dict/page",
            method: null,
            ip: "183.156.148.241",
            region: "浙江省 杭州市",
            browser: "Chrome 109.0.0.0",
            os: "OSX",
            executionTime: 9,
            createBy: null,
            createTime: "2024-07-07 20:38:45",
            operator: "系统管理员",
          },
          {
            id: 36193,
            module: "部门",
            content: "部门列表",
            requestUri: "/api/v1/dept",
            method: null,
            ip: "192.168.31.134",
            region: "0 内网IP",
            browser: "Chrome 125.0.0.0",
            os: "Windows 10 or Windows Server 2016",
            executionTime: 27,
            createBy: null,
            createTime: "2024-07-07 20:38:45",
            operator: "系统管理员",
          },
          {
            id: 36191,
            module: "菜单",
            content: "菜单列表",
            requestUri: "/api/v1/menus",
            method: null,
            ip: "192.168.31.134",
            region: "0 内网IP",
            browser: "Chrome 125.0.0.0",
            os: "Windows 10 or Windows Server 2016",
            executionTime: 39,
            createBy: null,
            createTime: "2024-07-07 20:38:44",
            operator: "系统管理员",
          },
          {
            id: 36189,
            module: "角色",
            content: "角色分页列表",
            requestUri: "/api/v1/roles/page",
            method: null,
            ip: "192.168.31.134",
            region: "0 内网IP",
            browser: "Chrome 125.0.0.0",
            os: "Windows 10 or Windows Server 2016",
            executionTime: 55,
            createBy: null,
            createTime: "2024-07-07 20:38:43",
            operator: "系统管理员",
          },
          {
            id: 36188,
            module: "用户",
            content: "用户分页列表",
            requestUri: "/api/v1/users/page",
            method: null,
            ip: "192.168.31.134",
            region: "0 内网IP",
            browser: "Chrome 125.0.0.0",
            os: "Windows 10 or Windows Server 2016",
            executionTime: 92,
            createBy: null,
            createTime: "2024-07-07 20:38:42",
            operator: "系统管理员",
          },
          {
            id: 36187,
            module: "登录",
            content: "登录",
            requestUri: "/api/v1/auth/login",
            method: null,
            ip: "192.168.31.134",
            region: "0 内网IP",
            browser: "Chrome 125.0.0.0",
            os: "Windows 10 or Windows Server 2016",
            executionTime: 19340,
            createBy: null,
            createTime: "2024-07-07 20:38:09",
            operator: "系统管理员",
          },
          {
            id: 36186,
            module: "登录",
            content: "登录",
            requestUri: "/api/v1/auth/login",
            method: null,
            ip: "192.168.31.134",
            region: "0 内网IP",
            browser: "Chrome 125.0.0.0",
            os: "Windows 10 or Windows Server 2016",
            executionTime: 19869,
            createBy: null,
            createTime: "2024-07-07 20:37:59",
            operator: "系统管理员",
          },
          {
            id: 36185,
            module: "登录",
            content: "登录",
            requestUri: "/api/v1/auth/login",
            method: null,
            ip: "112.103.111.59",
            region: "黑龙江省 哈尔滨市",
            browser: "Chrome 97.0.4692.98",
            os: "Android",
            executionTime: 96,
            createBy: null,
            createTime: "2024-07-07 20:37:21",
            operator: "系统管理员",
          },
          {
            id: 36184,
            module: "登录",
            content: "登录",
            requestUri: "/api/v1/auth/login",
            method: null,
            ip: "114.86.204.190",
            region: "上海 上海市",
            browser: "Chrome 125.0.0.0",
            os: "Windows 10 or Windows Server 2016",
            executionTime: 89,
            createBy: null,
            createTime: "2024-07-07 20:29:37",
            operator: "系统管理员",
          },
        ],
        total: 36188,
      },
      msg: "一切ok",
    },
  },
  {
    url: "logs/visit-trend",
    method: ["GET"],
    body: {
      code: "00000",
      data: {
        dates: [
          "2024-06-30",
          "2024-07-01",
          "2024-07-02",
          "2024-07-03",
          "2024-07-04",
          "2024-07-05",
          "2024-07-06",
          "2024-07-07",
        ],
        pvList: [1751, 5168, 4882, 5301, 4721, 4885, 1901, 1003],
        uvList: null,
        ipList: [207, 566, 565, 631, 579, 496, 222, 152],
      },
      msg: "一切ok",
    },
  },

  {
    url: "logs/visit-stats",
    method: ["GET"],
    body: {
      code: "00000",
      data: {
        todayPvCount: 1629,
        totalPvCount: 286086,
        pvGrowthRate: -0.65,
        todayIpCount: 169,
        totalIpCount: 19985,
        ipGrowthRate: -0.57,
      },
      msg: "一切ok",
    },
  },
]);
