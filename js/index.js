$(function() {
	//矿池按钮
	function btnOrePool(btn, popup) {
		$(btn).click(function() {
			$(popup).siblings('.popup-box').hide();
			$(popup).stop().slideToggle(500);
		});
	}
	btnOrePool('.pool-transaction', '.pool-transaction-box'); //交易矿池
	btnOrePool('.pool-computing-power', '.pool-computing-power-box'); //算力矿池

	//首页按钮组
	function indexBtnItem(btn, popup, title) {
		$(btn).click(function() {
			var $this = $(this);
			$this.find('img').eq(1).fadeIn(100, function() {
				$(popup).find('.box-content').hide();
				$(popup).find('.box-content').eq(0).show();
				var btnGroupLen = $(popup).find('.btn-top-popup-control-group > div').length;
				//				alert(btnGroupLen);
				if($(btn).parent().hasClass('index-btn-item-my')) {
					for(var i = 0; i < btnGroupLen; i++) {
						$(popup).find('.btn-top-popup-control-group > div').eq(i).find('img').eq(1).hide();
					}
				} else {
					if(!$(popup).find('.btn-top-popup-control-group > div').eq(0).hasClass('icon-drop-down')) {
						$(popup).find('.btn-top-popup-control-group > div').eq(0).find('img').eq(1).show();
					}
					for(var i = 1; i < btnGroupLen; i++) {
						$(popup).find('.btn-top-popup-control-group > div').eq(i).find('img').eq(1).hide();
					}
				}
				$(popup).find('.box-title').text(title);
				$(popup).siblings('.popup-box').hide();
				$(popup).stop().slideToggle(500, function() {
					$this.find('img').eq(1).hide();
				});
			});
		});
	}
	indexBtnItem('.index-btn-item-market a', '.popup-of-market', '雇佣矿工'); //市场
	indexBtnItem('.index-btn-item-hammer a', '.popup-of-hammer', '转让锤子'); //锤子
	indexBtnItem('.index-btn-item-my a', '.popup-of-my', ''); //我的
	indexBtnItem('.index-btn-item-steal-ore a', '.popup-of-steal-mineral', '偷矿石'); //偷矿石

	//切换弹出框内容
	function changeTab(btn, popupcon, title) {
		$(btn).click(function() {
			var $this = $(this);
			var btnGroupLen = $this.siblings().length;
			for(var i = 0; i < btnGroupLen; i++) {
				$this.siblings().eq(i).find('img').eq(1).hide();
			}
			$this.parents('.popup-box').removeClass('high-popup-box');
			$this.find('img').eq(1).show();
			$this.parents('.btn-top-popup-control-group').siblings('.box-content').hide();
			$this.parents('.btn-top-popup-control-group').siblings(popupcon).show();
			$this.parents('.popup-box').find('.box-title').text(title);
		});
	}
	changeTab('.icon-buy-ore', '.boxcon-buy-ore-step-1', '购买矿石'); //购买矿石
	changeTab('.icon-hire-miners', '.boxcon-hire-miners-area', '雇佣矿工'); //雇佣矿工
	changeTab('.icon-sale-ore', '.boxcon-sell-ore-step-1', '出售矿石'); //出售矿石
	changeTab('.icon-perfect-info', '.boxcon-perfect-information', '完善信息'); //完善信息
	changeTab('.icon-activation-code', '.boxcon-my-cdk', ''); //my CDK
	changeTab('.icon-my-partner', '.boxcon-my-partner', '我的伙伴'); //我的伙伴
	changeTab('.icon-change-pwd', '.boxcon-change-pwd', '修改密码'); //修改密码
	changeTab('.icon-system', '.boxcon-system-bulletin', '系统公告'); //系统公告

	//收缩弹框
	$('.icon-drop-down').click(function() {
		//		alert($(this).parents('.popup-box').attr('class'));
		$(this).find('img').eq(1).fadeIn(100, function() {
			$(this).parents('.popup-box').stop().slideToggle(500, function() {
				$(this).find('img').eq(1).hide();
			});
		});
	});
	
	//关闭确认取消对话框
	$('#btn-cancel').click(function(){
		$('.mask').hide();
	});

	//购买矿石
	$('.item-choice').click(function() {
		var num = $(this).text();
		$('#sell-total-num').text(num);
	});
	$('#btn-buying-in').click(function() {
		var $this = $(this);
		$('#popup-con-text').text('确认买入？')
		$('.mask').fadeIn(500,function(){
			$('#btn-ok').click(function(){
				$('.mask').hide();
				$this.parents('.popup-box').find('.box-title').text('买入矿石');
				$('.boxcon-buy-ore-step-2').siblings('.box-content').hide();
				$('.boxcon-buy-ore-step-2').show();
				$('#btn-ok').off('click');
			});
		});
	});
	$('.buy-ore-two-list li').click(function() {
		$(this).parents('.popup-box').addClass('high-popup-box');
		$(this).parents('.box-content').hide();
		$('.boxcon-buy-ore-step-3').show();
	});
	$('.photo-area-buy-in').click(function() {
		uploadImg('#upload-img-buy-in', '#img-buy-in');
	});
	$('#btn-sub-buy-info').click(function() {
		$(this).parents('.box-content').hide();
		$(this).parents('.popup-box').removeClass('high-popup-box');
		$('.boxcon-buy-ore-step-4').show();
	});

	//出售矿石
	$('#btn-pub-sell-info').click(function() {
		$('.sell-ore-one-con').show();
	});
	$('#btn-sell-out').click(function() {
		$('#popup-con-text').text('确认卖出？')
		$('.mask').fadeIn(500,function(){
			$('#btn-ok').click(function(){
				$('.mask').hide();
				$('.boxcon-sell-ore-step-2').siblings('.box-title').text('卖出矿石');
				$('.boxcon-sell-ore-step-2').siblings('.box-content').hide();
				$('.boxcon-sell-ore-step-2').show();
				$('#btn-ok').off('click');
			});
		});
	});
	$('.sell-ore-two-list li').click(function() {
		$(this).parents('.popup-box').addClass('high-popup-box');
		$(this).parents('.box-content').hide();
		$('.boxcon-sell-ore-step-3').show();
	});
	$('.photo-area-sell-out').click(function() {
		uploadImg('#upload-img-sell-out', '#img-sell-out');
	});
	$('#btn-sub-sell-info').click(function() {
		$(this).parents('.box-content').hide();
		$(this).parents('.popup-box').removeClass('high-popup-box');
		$('.boxcon-sell-ore-step-4').show();
	});

	//我的
	$('.edit-part').hide();

	//偷矿石
	$('.steal-mineral-list li .item-steal').click(function() {
		var $this = $(this);
		if(!$this.find('img.icon-steal').hasClass('hide')) {
			$this.find('img.icon-steal').hide();
			$this.find('.num-stolen').removeClass('hide').find('span.num').text('0.67');
		}
	});

	//上传照片公共方法
	function uploadImg(uploadId, imgId) {
		$(uploadId).change(function() {
			var fil = this.files;
			reads(fil[0], imgId);
		});
	}
	//读取上传的照片照片公共方法
	function reads(fil, img) {
		var reader = new FileReader();
		reader.readAsDataURL(fil);
		reader.onload = function() {
			$(img).attr('src', reader.result);
		};
	}

});
//btn-only-up-down-control