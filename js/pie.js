/*
* @Author: Administrator
* @Date:   2017-08-22 09:38:50
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-22 17:49:55
*/
$(function(){
    var myCharts1 = echarts.init(document.getElementById('js_echarts1'));
    var option1 = {
    	color:['#f86a72','#fc8c28', '#d6e64e'],
	    tooltip : {
	        trigger: 'item',
	        confine:true,
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        x : 'center',
       		y : 'bottom',
       		itemWidth:8,
       		itemHeight:8,
       		data:['vivo','oppo','iphone'],
	        textStyle:{
	        	color:'#000'
	        }
	    },
	    calculable : true,
	    series : [
	        {
	        	name:'刑事案由分布',
	            type:'pie',
	            radius : '50%',
	            center: ['51%', '40%'],
	            label:{
	            	normal:{
	            		textStyle:{
	            			color:'#000',

	            		},
	            		lineHeight:16,
	            		formatter:function(data){
		            		return [
					            '{a|'+data.value+'件,'+parseInt(data.percent)+'%,\n同比}',
					            '{b|}',
					            '{a|5%}'
					        ].join('')
	            		},
	            		rich: {
				            a: {
				                color: '#000'
				            },
				            b:{
                                color:'#e19505',
                                backgroundColor: {
    								image: 'img/pointer.png'
    							},

				            }
				            
				        }
	            	}
	            },
	            hoverAnimation:false,
	            data:[
	                {value:502, name:'vivo'},
	                {value:310, name:'oppo'},
	                {value:234, name:'iphone'}
	            ]
	        }
	    ]
	};
    myCharts1.setOption(option1);
    var myCharts11 = echarts.init(document.getElementById('js_echarts11'));
    var option11 = {
    	color:['red'],
	    legend: {
	        show:false
	    },
	    calculable : true,
	    series : [
	        {
	            type:'pie',
	            radius : '54%',
	            center: ['51%', '40%'],
	            label:{
	            	normal:{
	            		show:false
	            	},
	            	emphasis:{
	            		show:false
	            	}
	            },
	            hoverAnimation:false,
	            data:[
	                {value:100, name:'全部'}
	            ]
	        }
	    ]
	};
    myCharts11.setOption(option11);                 
	$(window).resize(function(){
		myCharts1.resize();
		myCharts11.resize();
	})
});