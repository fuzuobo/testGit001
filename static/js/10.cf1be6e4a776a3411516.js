webpackJsonp([10],{GNAi:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"hello",data:function(){return{echartData:[],langType:"cn"}},mounted:function(){this.toggleLang(),this.getProfessionalData()},watch:{"$route.fullPath":{handler:function(){this.toggleLang(),this.getProfessionalData()}}},methods:{drawLine:function(){var t=this,e=document.getElementById("myChart"),a=e.clientWidth,o=a+"px",n=a+"px",i=this.$echarts.init(e,null,{width:o,height:n});i.setOption({tooltip:{trigger:"item",backgroundColor:"#dadada",textStyle:{color:"#000"},formatter:function(t){return"<b>"+t.name+"：</b>"+t.value}},legend:{show:!0,bottom:0,borderRadius:0,itemHeight:25},color:["#00a0e9","#005982","#5d9cec","#7ecef4"],series:[{name:"职称统计",type:"pie",radius:["0","86%"],center:["50%","43%"],avoidLabelOverlap:!1,hoverAnimation:!1,minAngle:30,label:{show:!0,color:"#fff",position:"inside",textStyle:{fontSize:"16"},rotate:90},labelLine:{show:!1},data:this.echartData}]}),i.on("click",function(e){var a=e.data.workCode,o={workkey:a,name:e.data.name};e={workTitles:a,size:12,page:1};t.$router.push({name:"cn"!=t.langType?t.langType+"search":"search"}),t.$store.commit("clearkeySerach"),t.$store.commit("setflg",!1),t.$store.commit("setworkTitlesparams",o),t.$store.commit("search_More",e)}),i.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:0})},getProfessionalData:function(){var t=this;this.$store.commit("fetchloading",!0),this.commonMethods.emitAjax({path:"/api/front/psons/count/title",success:function(e){t.$store.commit("fetchloading",!1),t.echartData=[];for(var a=0;a<e.length;a++){var o=e[a];t.echartData.push({value:o.count,name:o.work_title,workCode:o.work_title_code})}t.drawLine()}})},toggleLang:function(){var t=this;this.commonMethods.selectLangType(function(e){t.langType=e})}}},n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"echart",attrs:{id:"index"}},[e("div",{attrs:{id:"myChart"}})])}]},i=a("VU/8")(o,n,!1,null,null,null);e.default=i.exports}});
//# sourceMappingURL=10.cf1be6e4a776a3411516.js.map