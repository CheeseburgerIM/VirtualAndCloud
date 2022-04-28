(function(){"use strict";var e={1073:function(e,n,o){o(6992),o(8674),o(9601),o(7727);var t,d,a,s,l,c,i,r,u,p,m,y,x,h,b,f,v,B,j,k,g,C,w,F,E,Z,_,T,S,z,O,L,P,R,A,D,I,M,$,N,W,q,J,H,G=o(8935),U=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{attrs:{id:"app"}},[o("IndexPage")],1)},K=[],Q=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{attrs:{id:"IndexPage"}},[o("div",{attrs:{id:"siteBackground"}}),o("div",{attrs:{id:"index"}},[o("transition",{attrs:{name:"navigation",appear:""}},[o("div",{attrs:{id:"navigation"}},[o("div",{attrs:{id:"menu"}},[o("div",{attrs:{id:"menuList"}},[o("div",{staticClass:"menuChild",attrs:{onclick:"window.scroll({top:0,left:0,behavior:'instant'})"}},[o("router-link",{attrs:{to:"/index","active-class":"menuActive"}},[o("i",{staticClass:"el-icon-s-home"}),o("span",[e._v("主页")])])],1),o("div",{staticClass:"menuChild",attrs:{onclick:"window.scroll({top:0,left:0,behavior:'instant'})"}},[o("router-link",{attrs:{to:"/code","active-class":"menuActive"}},[o("i",{staticClass:"el-icon-s-tools"}),o("span",[e._v("代码")])])],1),o("div",{staticClass:"menuChild",attrs:{onclick:"window.scroll({top:0,left:0,behavior:'instant'})"}},[o("router-link",{attrs:{to:"/document","active-class":"menuActive"}},[o("i",{staticClass:"el-icon-s-management"}),o("span",[e._v("文档")])])],1),o("div",{staticClass:"menuChild",attrs:{onclick:"window.scroll({top:0,left:0,behavior:'instant'})"}},[o("router-link",{attrs:{to:"/about","active-class":"menuActive"}},[o("i",{staticClass:"el-icon-s-custom"}),o("span",[e._v("关于")])])],1)])])])])],1),o("h1",{staticStyle:{"margin-top":"70px"}},[e._v("虚拟化技术与云计算 - 基于Serverless的数据预处理服务")]),o("transition",{attrs:{name:"content",appear:""}},[o("keep-alive",[o("router-view")],1)],1)],1)},V=[],X={name:"IndexPage",methods:{},mounted:function(){},data:function(){return{}}},Y=X,ee=o(1001),ne=(0,ee.Z)(Y,Q,V,!1,null,null,null),oe=ne.exports,te={name:"App",components:{IndexPage:oe}},de=te,ae=(0,ee.Z)(de,U,K,!1,null,null,null),se=ae.exports,le=o(2809),ce=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{attrs:{id:"Home"}},[o("el-select",{staticStyle:{"margin-right":"17px"},attrs:{placeholder:"请选择云函数",filterable:"","default-first-option":!0},on:{change:function(n){return e.selectionChange()}},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}},e._l(e.options,(function(e){return o("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})})),1),o("el-button",{staticStyle:{"margin-left":"17px"},attrs:{type:"primary",plain:""},on:{click:function(n){return e.input()}}},[e._v("代码测试 RUN")]),o("div",{attrs:{id:"IO"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:11,maxRows:11},placeholder:e.example,size:"large"},model:{value:e.text,callback:function(n){e.text=n},expression:"text"}}),o("el-input",{attrs:{type:"textarea",autosize:{minRows:11,maxRows:11},placeholder:e.expected,size:"large"},model:{value:e.result,callback:function(n){e.result=n},expression:"result"}})],1)],1)},ie=[],re=(o(4916),o(3123),o(6699),o(2023),'# -*- coding:utf-8 -*-\nimport json\nimport numpy as np\nimport base64\n\n\ndef handler(event, context):\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody).decode()\n    jsonBody = json.loads(decodedBody)\n\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": False,\n        "body": str(np.mean(jsonBody)),\n        "headers": {"Content-Type": "application/json"},\n    }\n'),ue="[1,2,3,4,5,6,7]",pe="4",me={code:re,example:ue,result:pe},ye=me,xe=(0,ee.Z)(ye,t,d,!1,null,null,null),he=xe.exports,be='# -*- coding:utf-8 -*-\nimport json\nimport numpy as np\nimport base64\n\n\ndef handler(event, context):\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody).decode()\n    jsonBody = json.loads(decodedBody)\n\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": False,\n        "body": str(max(jsonBody)),\n        "headers": {"Content-Type": "application/json"},\n    }\n',fe="[5,20,10]",ve="20",Be={code:be,example:fe,result:ve},je=Be,ke=(0,ee.Z)(je,a,s,!1,null,null,null),ge=ke.exports,Ce='# -*- coding:utf-8 -*-\nimport json\nimport numpy as np\nimport base64\n\n\ndef handler(event, context):\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody).decode()\n    jsonBody = json.loads(decodedBody)\n\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": False,\n        "body": str(min(jsonBody)),\n        "headers": {"Content-Type": "application/json"},\n    }\n',we="[5,20,10]",Fe="5",Ee={code:Ce,example:we,result:Fe},Ze=Ee,_e=(0,ee.Z)(Ze,l,c,!1,null,null,null),Te=_e.exports,Se='# -*- coding:utf-8 -*-\nimport json\nimport numpy as np\nimport base64\n\n\ndef handler(event, context):\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody).decode()\n    jsonBody = json.loads(decodedBody)\n\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": False,\n        "body": str(np.average(jsonBody["data"], weights=jsonBody["weight"])),\n        "headers": {"Content-Type": "application/json"},\n    }\n\n',ze='\n{\n    "data": [4,5,2,1,3],\n    "weight": [1,1,1,3,2]\n}\n',Oe="2.5",Le={code:Se,example:ze,result:Oe},Pe=Le,Re=(0,ee.Z)(Pe,i,r,!1,null,null,null),Ae=Re.exports,De='# -*- coding:utf-8 -*-\nimport json\nimport numpy as np\nfrom collections import Counter\nimport base64\n\n\ndef handler(event, context):\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody).decode()\n    jsonBody = json.loads(decodedBody)\n\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": False,\n        "body": str(Counter(jsonBody)),\n        "headers": {"Content-Type": "application/json"},\n    }\n',Ie="[1,2,3,3,4,4,4,5]",Me="\nCounter({\n    3: 2,\n    1: 1,\n    2: 1,\n    4: 1\n})",$e={code:De,example:Ie,result:Me},Ne=$e,We=(0,ee.Z)(Ne,u,p,!1,null,null,null),qe=We.exports,Je='# -*- coding:utf-8 -*-\nimport json\nimport numpy as np\nfrom collections import Counter\nimport base64\n\n\ndef handler(event, context):\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody).decode()\n    jsonBody = json.loads(decodedBody)\n\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": False,\n        "body": str(np.around(jsonBody["data"], jsonBody["bitcount"])),\n        "headers": {"Content-Type": "application/json"},\n    }\n',He='\n{\n    "data": [1.936,4.656,3.074,4.7767],\n    "bitcount": 2\n}',Ge="\n[\n    1.94 4.66 3.07 4.78\n]",Ue={code:Je,example:He,result:Ge},Ke=Ue,Qe=(0,ee.Z)(Ke,m,y,!1,null,null,null),Ve=Qe.exports,Xe='# -*- coding:utf-8 -*-\nimport json\nimport numpy as np\nimport base64\n\ndef handler (event, context):\n\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody).decode()\n    jsonBody = json.loads(decodedBody)\n\n    x = np.var(jsonBody)\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": False,\n        "body": str(x),\n        "headers": {\n            "Content-Type": "application/json"\n        }\n    }\n',Ye="\n[1,3,7,9,4,0,-1,-3,-7,11,16]",en="\n40.59504132231405",nn={code:Xe,example:Ye,result:en},on=nn,tn=(0,ee.Z)(on,x,h,!1,null,null,null),dn=tn.exports,an='# -*- coding:utf-8 -*-\nimport json\nimport numpy as np\nimport base64\n\n\ndef handler(event, context):\n\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody).decode()\n    jsonBody = json.loads(decodedBody)\n\n    x = sorted(jsonBody)\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": False,\n        "body": str(x),\n        "headers": {"Content-Type": "application/json"},\n    }\n\n',sn="\n[1,5,2,-5,4,3,0,-1,-3]",ln="\n-5,-3,-1,0,1,2,3,4,5",cn={code:an,example:sn,result:ln},rn=cn,un=(0,ee.Z)(rn,b,f,!1,null,null,null),pn=un.exports,mn='# -*- coding:utf-8 -*-\nimport json\nimport numpy as np\nimport base64\n# from scipy import stats\n\n\ndef handler (event, context):\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody).decode()\n    jsonBody = json.loads(decodedBody)\n    counts = np.bincount(jsonBody)\n    print(np.argmax(counts))\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": False,\n        "body": str(np.argmax(counts)),\n        "headers": {\n            "Content-Type": "application/json"\n        }\n    }\n',yn="\n[3,2,6,8,1,2,3,4,3]",xn="3",hn={code:mn,example:yn,result:xn},bn=hn,fn=(0,ee.Z)(bn,v,B,!1,null,null,null),vn=fn.exports,Bn='# -*- coding:utf-8 -*-\nimport json\nimport numpy as np\nimport base64\n\n\ndef handler (event, context):\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody).decode()\n    jsonBody = json.loads(decodedBody)\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": False,\n        "body": str(np.median(jsonBody)),\n        "headers": {\n            "Content-Type": "application/json"\n        }\n    }\n',jn="\n[1,2,3,4,5,6,7,8]",kn="4.5",gn={code:Bn,example:jn,result:kn},Cn=gn,wn=(0,ee.Z)(Cn,j,k,!1,null,null,null),Fn=wn.exports,En='# -*- coding:utf-8 -*-\nimport json\nimport numpy as np\nimport base64\n\n\ndef handler(event, context):\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody).decode()\n    jsonBody = json.loads(decodedBody)\n\n    k = jsonBody["key"]\n    for key in k:\n        print(key, ": ", k[key])\n    m = jsonBody["data"]\n    c = len(m[0])\n    r = len(m)\n    t = [[0 for col in range(c)] for row in range(r)]\n    for i in range(r):\n        for j in range(c):\n            if t[i][j] == 0:\n                for key in k:\n                    if m[i][j] == float(key):\n                        m[i][j] = k[key]\n                        t[i][j] = 1\n                        break\n\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": False,\n        "body": str(m),\n        "headers": {"Content-Type": "application/json"},\n    }\n',Zn='\n{\n    "key":{\n        "1":0,\n        "0":1\n    },\n    "data":[\n        [0,1,2,3],\n        [1,2,3,4]\n    ]\n}',_n="[1,0,2,3]\n[0,2,3,4]",Tn={code:En,example:Zn,result:_n},Sn=Tn,zn=(0,ee.Z)(Sn,g,C,!1,null,null,null),On=zn.exports,Ln='# -*- coding:utf-8 -*-\nimport json\nimport numpy as np\nimport base64\n\n\ndef handler(event, context):\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody).decode()\n    jsonBody = json.loads(decodedBody)\n    jsonBody = jsonBody.split(".")\n    str1 = jsonBody[0].replace("[", "").replace("]", "")\n    str2 = jsonBody[1].replace("[", "").replace("]", "")\n    list1 = str1.split(",")\n    list2 = []\n    for i in list1:\n        i = float(i)\n        list2.append(i)\n    list3 = str2.split(",")\n    list4 = []\n    for i in list3:\n        i = float(i)\n        list4.append(i)\n    a = np.array([list2, list4])\n    ans = np.cov(a)\n    # avg1 = np.mean(list1)\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": False,\n        "body": str(ans),\n        "headers": {"Content-Type": "application/json"},\n    }\n',Pn='"[3,2,6,8,1,2,3,4,3].[1,2,3,4,5,6,7,8,9]"',Rn="\n[[ 4.77777778 -0.75      ]\n [-0.75        7.5       ]]",An={code:Ln,example:Pn,result:Rn},Dn=An,In=(0,ee.Z)(Dn,w,F,!1,null,null,null),Mn=In.exports,$n='# -- coding:utf-8 --\nimport json\nimport numpy as np\nimport base64\n\n\ndef handler(event, context):\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody).decode()\n    jsonBody = json.loads(decodedBody)\n    list1 = []\n    for i in jsonBody:\n        list1.append((i - min(jsonBody)) / (max(jsonBody) - min(jsonBody)))\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": False,\n        "body": str(list1),\n        "headers": {"Content-Type": "application/json"},\n    }\n',Nn="[3,4,1,2,0]",Wn="\n[0.75, 1.0, 0.25, 0.5, 0.0]",qn={code:$n,example:Nn,result:Wn},Jn=qn,Hn=(0,ee.Z)(Jn,E,Z,!1,null,null,null),Gn=Hn.exports,Un='# -*- coding:utf-8 -*-\nimport json\nimport numpy as np\nimport base64\n\n\ndef handler(event, context):\n\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody).decode()\n    jsonBody = json.loads(decodedBody)\n\n    a = np.array(jsonBody, dtype=np.float)\n    raw = len(a)\n    col = len(a[0])\n    temp = []\n    # ans = []\n    for i in range(0, raw):\n        vec = a[i]\n        for j in range(0, col):\n            if np.isnan(vec[j]):\n                a[i][j] = 0\n    # ans = np.array(ans)\n\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": False,\n        "body": json.dumps(a.tolist()),\n        "headers": {"Content-Type": "application/json"},\n    }\n',Kn="\n[\n    [1,2,null,4],\n    [null,3,4,5],\n    [5,2,null,7],\n    [6,1,2,10]\n]",Qn="[1,0,2,3]\n[0,2,3,4]",Vn={code:Un,example:Kn,result:Qn},Xn=Vn,Yn=(0,ee.Z)(Xn,_,T,!1,null,null,null),eo=Yn.exports,no='# -*- coding:utf-8 -*-\nimport json\nimport numpy as np\nimport base64\n\n\ndef handler(event, context):\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody).decode()\n    jsonBody = json.loads(decodedBody)\n\n    a = jsonBody["axis"]\n    m = jsonBody["data"]\n    l = len(jsonBody)\n    ans = []\n    if l == 1:\n        ans.append(m)\n    else:\n        ans.append(np.concatenate(m,int(a)))\n        # for i in range(l - 1):\n        #     ans.append(np.append(m[i], m[i + 1], int(a)))\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": False,\n        "body": str(ans),\n        "headers": {"Content-Type": "application/json"},\n    }\n',oo='\n{\n    "axis": 0, // 0为行拼接;1为列拼接\n    "data": [\n        [\n            [1,2,3],\n            [2,3,4]\n        ],\n        [\n            [5,6,7],\n            [6,7,8]\n        ],\n        [\n            ["a","b","c"],\n            ["d","e","f"]\n        ]\n    ]\n}',to="\n[['1', '2', '3'],\n['2', '3', '4'],\n['5', '6', '7'],\n['6', '7', '8'],\n['a', 'b', 'c'],\n['d', 'e', 'f']]",ao={code:no,example:oo,result:to},so=ao,lo=(0,ee.Z)(so,S,z,!1,null,null,null),co=lo.exports,io='# -*- coding:utf-8 -*-\nimport json\nimport numpy as np\nfrom collections import Counter\nimport base64\n\n\ndef handler(event, context):\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody)\n    jsonBody = json.loads(decodedBody)\n    decodedBody = decodedBody.decode()\n    arr = np.array(jsonBody)\n\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": False,\n        "body": str(np.array(list(set([tuple(t) for t in arr])))),\n        "headers": {"Content-Type": "application/json"},\n    }\n',ro="\n[\n    [1,2,3],\n    [1,2,3],\n    [2,3,4]\n]",uo="\n[[2 3 4]\n [1 2 3]]",po={code:io,example:ro,result:uo},mo=po,yo=(0,ee.Z)(mo,O,L,!1,null,null,null),xo=yo.exports,ho='# -*- coding:utf-8 -*-\nimport json\nimport numpy as np\nimport base64\n\n\ndef handler(event, context):\n\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody).decode()\n    jsonBody = json.loads(decodedBody)\n\n    mean = np.mean(jsonBody)\n    std = np.std(jsonBody)\n    sigma = std * 3\n    a = np.array(jsonBody, dtype=float)\n    row = len(a)\n    col = len(a[0])\n\n    # ans = np.array()\n    counterlist = []\n    for i in range(0, row):\n        for j in range(0, col):\n            if (a[i][j] - mean) > sigma:\n                counterlist.append(i)\n    for i in counterlist:\n        a = np.delete(a, i, 0)\n\n    # x = sorted(jsonBody)\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": False,\n        "body": json.dumps(a.tolist()),\n        "headers": {"Content-Type": "application/json"},\n    }\n',bo="\n[\n    [2,3,4,5],\n    [5,2,4,7],\n    [1,2,10000,4],\n    [10000,100000,10000,10000]\n]",fo="\n[2,3,4,5]\n[5,2,4,7]\n[1,2,10000,4]",vo={code:ho,example:bo,result:fo},Bo=vo,jo=(0,ee.Z)(Bo,P,R,!1,null,null,null),ko=jo.exports,go='# -*- coding:utf-8 -*-\nimport json\nimport numpy as np\nimport base64\n\n\ndef handler(event, context):\n\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody).decode()\n    jsonBody = json.loads(decodedBody)\n\n    a = jsonBody["data"]\n    a = sorted(a)\n    l = len(a)\n    w = jsonBody["width"]\n    maximum = max(a)\n    minimum = min(a)\n    x = int((maximum - minimum) / w)  # 结果共有x(+1)组数据\n    print(a, l, w, x)\n    ans = {}\n    index = -1\n    for i in range(x):\n        key = str(w * i) + "~" + str((w * (i + 1)))\n        value = []\n        for j in range(index + 1, l):\n            if a[j] <= w * (i + 1):\n                index = j\n                value.append(a[j])\n        ans[key] = value\n        print(key, " - ", value)\n\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": False,\n        "body": json.dumps(ans),\n        "headers": {"Content-Type": "application/json"},\n    }\n',Co='\n{\n    "width":4,\n    "data":[3,6,1,8,3,0,5]\n}',wo="\n0~4: 0,1,3,3\n4~8: 5,6,8",Fo={code:go,example:Co,result:wo},Eo=Fo,Zo=(0,ee.Z)(Eo,A,D,!1,null,null,null),_o=Zo.exports,To='# -*- coding:utf-8 -*-\nimport json\nimport numpy as np\nimport base64\n\n\ndef handler(event, context):\n\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody).decode()\n    jsonBody = json.loads(decodedBody)\n\n    a = jsonBody["data"]\n    a = sorted(a)\n    l = len(a)\n    f = jsonBody["frequency"]\n    n = int(l * f)  # 每组数据的个数\n    x = int(l / n)  # 结果共有x(+1)组数据\n    y = l - x * n  # 第x+1组的数据\n    print(a, l, f, n, x, y)\n    ans = {}\n    for i in range(x):\n        key = str(n * i) + "~" + str((n * (i + 1)))\n        value = a[n * i : (n * (i + 1))]\n        ans[key] = value\n        print(key, " - ", value)\n    if y != 0:\n        key = str(n * x) + "~" + str(l)\n        value = a[n * x :]\n        ans[key] = value\n        print(key, " - ", value)\n\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": False,\n        "body": json.dumps(ans),\n        "headers": {"Content-Type": "application/json"},\n    }\n',So='\n{\n    "frequency":0.4,\n    "data":[3,6,1,8,3,0,5]\n}',zo="\n0~2: 0,1\n2~4: 3,3\n4~6: 5,6\n6~7: 8",Oo={code:To,example:So,result:zo},Lo=Oo,Po=(0,ee.Z)(Lo,I,M,!1,null,null,null),Ro=Po.exports,Ao='# -*- coding:utf-8 -*-\nimport json\nimport numpy as np\nimport base64\n\n\ndef handler(event, context):\n\n    encodedBody = event["body"]\n    decodedBody = base64.b64decode(encodedBody).decode()\n    jsonBody = json.loads(decodedBody)\n\n    mean = np.mean(jsonBody)\n    # std = np.std(jsonBody)\n    # sigma = std * 3\n    a = np.array(jsonBody, dtype=float)\n    row = len(a)\n    col = len(a[0])\n\n    # ans = np.array()\n    tempSet = set()\n    counterlist = []\n    for i in range(0, col):\n        for j in range(0, row):\n            tempSet.add(a[j][i])\n        if len(tempSet) == row:\n            counterlist.append(i)\n        tempSet = set()\n    print(counterlist)\n    for i in range(len(counterlist) - 1, -1, -1):\n        a = np.delete(a, counterlist[i], 1)\n\n    # x = sorted(jsonBody)\n    return {\n        "statusCode": 200,\n        "isBase64Encoded": False,\n        "body": json.dumps(a.tolist()),\n        "headers": {"Content-Type": "application/json"},\n    }\n',Do="\n[\n    [1,3,5,7],\n    [2,4,6,8],\n    [3,6,9,12],\n    [2,5,7,8]\n]",Io="\n[1,7]\n[2,8]\n[3,12]\n[2,8]",Mo={code:Ao,example:Do,result:Io},$o=Mo,No=(0,ee.Z)($o,$,N,!1,null,null,null),Wo=No.exports,qo="# Please select a function first",Jo={code:he.code,example:he.example,result:he.result},Ho={code:ge.code,example:ge.example,result:ge.result},Go={code:Te.code,example:Te.example,result:Te.result},Uo={code:Ae.code,example:Ae.example,result:Ae.result},Ko={code:qe.code,example:qe.example,result:qe.result},Qo={code:Ve.code,example:Ve.example,result:Ve.result},Vo={code:dn.code,example:dn.example,result:dn.result},Xo={code:pn.code,example:pn.example,result:pn.result},Yo={code:vn.code,example:vn.example,result:vn.result},et={code:Fn.code,example:Fn.example,result:Fn.result},nt={code:On.code,example:On.example,result:On.result},ot={code:Mn.code,example:Mn.example,result:Mn.result},tt={code:Gn.code,example:Gn.example,result:Gn.result},dt={code:eo.code,example:eo.example,result:eo.result},at={code:co.code,example:co.example,result:co.result},st={code:xo.code,example:xo.example,result:xo.result},lt={code:ko.code,example:ko.example,result:ko.result},ct={code:_o.code,example:_o.example,result:_o.result},it={code:Ro.code,example:Ro.example,result:Ro.result},rt={code:Wo.code,example:Wo.example,result:Wo.result},ut={code:qo,code1:Jo,code2:Ho,code3:Go,code4:Uo,code5:Ko,code6:Qo,code7:Vo,code8:Xo,code9:Yo,code10:et,code11:nt,code12:ot,code13:tt,code14:dt,code15:at,code16:st,code17:lt,code18:ct,code19:it,code20:rt},pt=ut,mt=(0,ee.Z)(pt,W,q,!1,null,null,null),yt=mt.exports,xt=[{key:"1",value:"平均值"},{key:"2",value:"最大值"},{key:"3",value:"最小值"},{key:"4",value:"加权平均"},{key:"5",value:"计数"},{key:"6",value:"保留小数"},{key:"7",value:"方差"},{key:"8",value:"排序"},{key:"9",value:"众数"},{key:"10",value:"中位数"},{key:"11",value:"数据替换"},{key:"12",value:"协方差"},{key:"13",value:"归一化"},{key:"14",value:"填补空缺值"},{key:"15",value:"多数组拼接"},{key:"16",value:"去除冗余"},{key:"17",value:"去除离群值"},{key:"18",value:"等宽离散化"},{key:"19",value:"等频离散化"},{key:"20",value:"去除唯一属性"}],ht={FunctionList:xt},bt=ht,ft=(0,ee.Z)(bt,J,H,!1,null,null,null),vt=ft.exports,Bt={name:"Home",components:{},methods:{selectionChange:function(){this.text="",this.result="";var e="请以JSON格式输入函数所需参数\nExample: ",n="Expected Result: ";switch(this.value){case"1":this.example=e+yt.code1.example,this.expected=n+yt.code1.result;break;case"2":this.example=e+yt.code2.example,this.expected=n+yt.code2.result;break;case"3":this.example=e+yt.code3.example,this.expected=n+yt.code3.result;break;case"4":this.example=e+yt.code4.example,this.expected=n+yt.code4.result;break;case"5":this.example=e+yt.code5.example,this.expected=n+yt.code5.result;break;case"6":this.example=e+yt.code6.example,this.expected=n+yt.code6.result;break;case"7":this.example=e+yt.code7.example,this.expected=n+yt.code7.result;break;case"8":this.example=e+yt.code8.example,this.expected=n+yt.code8.result;break;case"9":this.example=e+yt.code9.example,this.expected=n+yt.code9.result;break;case"10":this.example=e+yt.code10.example,this.expected=n+yt.code10.result;break;case"11":this.example=e+yt.code11.example,this.expected=n+yt.code11.result;break;case"12":this.example=e+yt.code12.example,this.expected=n+yt.code12.result;break;case"13":this.example=e+yt.code13.example,this.expected=n+yt.code13.result;break;case"14":this.example=e+yt.code14.example,this.expected=n+yt.code14.result;break;case"15":this.example=e+yt.code15.example,this.expected=n+yt.code15.result;break;case"16":this.example=e+yt.code16.example,this.expected=n+yt.code16.result;break;case"17":this.example=e+yt.code17.example,this.expected=n+yt.code17.result;break;case"18":this.example=e+yt.code18.example,this.expected=n+yt.code18.result;break;case"19":this.example=e+yt.code19.example,this.expected=n+yt.code19.result;break;case"20":this.example=e+yt.code20.example,this.expected=n+yt.code20.result;break;default:this.example="请以JSON格式输入函数所需参数",this.expected="云函数执行结果, 非必要请勿修改";break}},input:function(){if(""!=this.value)if(""!=this.text)switch(this.result="Loading...",console.log(new Date),this.value){case"1":this.callCloudFunction("Average","pyz");break;case"2":this.callCloudFunction("Maximum","pyz");break;case"3":this.callCloudFunction("Minimum","pyz");break;case"4":this.callCloudFunction("weightaverage","pyz");break;case"5":this.callCloudFunction("count","pyz");break;case"6":this.callCloudFunction("finitebit","pyz");break;case"7":this.callCloudFunction("variance","sj");break;case"8":this.callCloudFunction("sort","sj");break;case"9":this.callCloudFunction("mode","sj");break;case"10":this.callCloudFunction("medium","sj");break;case"11":this.callCloudFunction("replace","pyz",11);break;case"12":this.callCloudFunction("covariance","sj");break;case"13":this.callCloudFunction("normalize","sj");break;case"14":this.callCloudFunction("Missing_value","sj",14);break;case"15":this.callCloudFunction("combine","pyz",15);break;case"16":this.callCloudFunction("redundant","pyz");break;case"17":this.callCloudFunction("Remove_outlier_values","sj",17);break;case"18":this.callCloudFunction("WidthDiscrete","pyz",18);break;case"19":this.callCloudFunction("FrequencyDiscrete","pyz",19);break;case"20":this.callCloudFunction("sole","sj",20);break;default:break}else this.result="Empty Input";else this.result="Please select a function first"},callCloudFunction:function(e,n,t){var d=this,a=o(6166),s=".api.cheeseburgerim.space/",l={method:"post",url:"https://"+n+s+e,data:d.text};a(l).then((function(e){var n=e.data;if(console.log(n),11==t||14==t||17==t||20==t){for(var o=(new Date).toLocaleString()+"\nClould Function Result: \n",a=0;a<n.length;a++)o=o+"["+n[a]+"]\n";d.result=o}else if(15==t){var s=(new Date).toLocaleString()+"\nClould Function Result: \n";s=s+"      "+n.split("(")[1].split(", dtype")[0],s.includes(")")&&(s=s.split(")")[0]),d.result=s}else if(18==t||19==t){var l=(new Date).toLocaleString()+"\nClould Function Result: \n";for(var c in n)l=l+c+": "+n[c]+"\n";d.result=l}else d.result=(new Date).toLocaleString()+"\nClould Function Result: \n"+n})).catch((function(e){console.log(e)}))}},data:function(){return{options:vt.FunctionList,value:"",text:"",result:"",example:"请以JSON格式输入函数所需参数",expected:"云函数执行结果, 非必要请勿修改"}}},jt=Bt,kt=(0,ee.Z)(jt,ce,ie,!1,null,null,null),gt=kt.exports,Ct=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{attrs:{id:"Code"}},[o("el-menu",{staticClass:"hoverEffect",attrs:{mode:"vertical"}},e._l(e.itemList,(function(n){return o("el-menu-item",{key:n.key,on:{click:function(o){return e.itemChange(n.key)}}},[e._v(e._s(n.value))])})),1),o("editor",{staticClass:"hoverEffect",staticStyle:{"margin-right":"17px"},attrs:{lang:"python",theme:"chrome",width:"87%",height:"77vh",options:e.options},on:{init:e.editorInit},model:{value:e.content,callback:function(n){e.content=n},expression:"content"}})],1)},wt=[],Ft={name:"Code",components:{editor:o(1190)},methods:{editorInit:function(){o(6932),o(803),o(3277),o(3139)},itemChange:function(e){switch(this.item=e,this.item){case"1":this.content=yt.code1.code;break;case"2":this.content=yt.code2.code;break;case"3":this.content=yt.code3.code;break;case"4":this.content=yt.code4.code;break;case"5":this.content=yt.code5.code;break;case"6":this.content=yt.code6.code;break;case"7":this.content=yt.code7.code;break;case"8":this.content=yt.code8.code;break;case"9":this.content=yt.code9.code;break;case"10":this.content=yt.code10.code;break;case"11":this.content=yt.code11.code;break;case"12":this.content=yt.code12.code;break;case"13":this.content=yt.code13.code;break;case"14":this.content=yt.code14.code;break;case"15":this.content=yt.code15.code;break;case"16":this.content=yt.code16.code;break;case"17":this.content=yt.code17.code;break;case"18":this.content=yt.code18.code;break;case"19":this.content=yt.code19.code;break;case"20":this.content=yt.code20.code;break;default:this.content=yt.code;break}}},data:function(){return{options:{enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0,printMarginColumn:30,displayIndentGuides:!1,enableEmmet:!0,tabSize:6,fontSize:18,useWorker:!0,showPrintMargin:!1,enableMultiselect:!0,readOnly:!1,showFoldWidgets:!0,fadeFoldWidgets:!0,wrap:!0},itemList:vt.FunctionList,content:yt.code,item:""}}},Et=Ft,Zt=(0,ee.Z)(Et,Ct,wt,!1,null,null,null),_t=Zt.exports,Tt=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{attrs:{id:"Document"}})},St=[],zt={name:"Document"},Ot=zt,Lt=(0,ee.Z)(Ot,Tt,St,!1,null,null,null),Pt=Lt.exports,Rt=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{attrs:{id:"About"}})},At=[],Dt={name:"About"},It=Dt,Mt=(0,ee.Z)(It,Rt,At,!1,null,null,null),$t=Mt.exports,Nt=new le.Z({mode:"history",routes:[{path:"/",redirect:"/index"},{path:"/index",component:gt},{path:"/code",component:_t},{path:"/document",component:Pt},{path:"/about",component:$t}]}),Wt=o(4549),qt=o.n(Wt);G["default"].use(le.Z),G["default"].use(qt()),G["default"].config.productionTip=!1,new G["default"]({render:function(e){return e(se)},router:Nt}).$mount("#app")}},n={};function o(t){var d=n[t];if(void 0!==d)return d.exports;var a=n[t]={exports:{}};return e[t](a,a.exports,o),a.exports}o.m=e,function(){o.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){var e=[];o.O=function(n,t,d,a){if(!t){var s=1/0;for(r=0;r<e.length;r++){t=e[r][0],d=e[r][1],a=e[r][2];for(var l=!0,c=0;c<t.length;c++)(!1&a||s>=a)&&Object.keys(o.O).every((function(e){return o.O[e](t[c])}))?t.splice(c--,1):(l=!1,a<s&&(s=a));if(l){e.splice(r--,1);var i=d();void 0!==i&&(n=i)}}return n}a=a||0;for(var r=e.length;r>0&&e[r-1][2]>a;r--)e[r]=e[r-1];e[r]=[t,d,a]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(n){return 0===e[n]};var n=function(n,t){var d,a,s=t[0],l=t[1],c=t[2],i=0;if(s.some((function(n){return 0!==e[n]}))){for(d in l)o.o(l,d)&&(o.m[d]=l[d]);if(c)var r=c(o)}for(n&&n(t);i<s.length;i++)a=s[i],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(r)},t=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(1073)}));t=o.O(t)})();
//# sourceMappingURL=app-legacy.59697978.js.map