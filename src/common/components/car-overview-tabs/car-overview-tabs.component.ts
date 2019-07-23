import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-overview-tabs',
  templateUrl: './car-overview-tabs.component.html',
  styleUrls: ['./car-overview-tabs.component.scss']
})
export class CarOverviewTabsComponent implements OnInit {

  primitiveExtraFeatureData = [
    { display: 'Hệ thống sưởi', isHave: true },
    { display: 'Bluetooth', isHave: true },
    { display: 'CD player', isHave: true },
    { display: 'Central locking', isHave: false },
    { display: 'Head-up display', isHave: true },
    { display: 'MP3 interface', isHave: true },
    { display: 'Navigation system', isHave: true },
    { display: 'Panoramic roof', isHave: false },
    { display: 'Alloy wheels', isHave: true },
    { display: 'Electric side mirror', isHave: false },
    { display: 'Sports package', isHave: true },
    { display: 'Sports suspension', isHave: true },
    { display: 'MP3 interface', isHave: true },
    { display: 'Navigation system', isHave: false },
    { display: 'Panoramic roof', isHave: true },
    { display: 'Parking sensors', isHave: true },
  ];

  overview = {
    overviewHeader: 'Toyota Yaris giá tốt thế hệ mới với hộp số tự động 4 cấp, tay lái trợ lực điện và khả năng tiết kiệm xăng bên trong dáng vẻ nhỏ gọn mà thanh lịch, Toyota Yaris là sự lựa chọn tinh tế cho phụ nữ hiện đại.',
    overviewSub: [
      { subTitle: 'Sơ lược', subContent: `Toyota Yaris (tên khác: Toyota Yarisu, Toyota Echo) là dòng xe hạng nhỏ (subcompact car)
      của hãng xe Toyota, Nhật Bản. Yaris ra đời năm 1999 thay thế cho dòng Toyota Starlet trước đó. Yaris có 2
      phiên bản là Yaris sedan (cũng chính là Toyota Vios) và Yaris hatchback. Toyota Yaris thường sử dụng động cơ
      xăng dung tích nhỏ 1.2L, 1.3L và 1.5L, dùng chung nền tảng khung gầm (platform) với Toyota Vios. Toyota
      Yaris hiện đang ở thế hệ thứ 3 (2013-nay, mã XP150). Hai thế hệ trước đó là Yaris XP10 (1999-2005) và Yaris
      XP90 (2005-2013).` },
      { subTitle: 'Đánh giá Ngoại Thất', subContent: `Yaris thế hệ mới với thiết kế đột phá, ấn tượng, dáng vẻ năng động và cá tính mang đến
      cảm giác đầy kiêu hãnh và tự hào khi sở hữu một dòng xe đậm dấu ấn riêng.`}
    ]
  }
  overviewHeader;
  overviewSub;  
  customerExtraFeatureData = [];
  technicalHeader = [
    { text: 'Khung xe', iconClass: 'fas fa-car' }, 
    { text: 'Động cơ', iconClass: 'fab fa-whmcs' },
    { text: 'Tiêu thụ nhiên liệu', iconClass: 'fas fa-gas-pump' }
  ]
  technicalData = [
    {display: 'Kích thước tổng thể bên ngoài (D x R x C)(mm x mm x mm)', value: '4795 x 1855 x 1835', group: 'Khung xe'},
    {display: 'Chiều dài cơ sở (mm)', value: '2745', group: 'Khung xe'},
    {display: 'Chiều rộng cở sở (trước/sau) (mm)', value: '1545/1555', group: 'Khung xe'},
    {display: 'Khoảng cách gầm xe (mm)', value: '219', group: 'Khung xe'},
    {display: 'Trọng lượng không tải', value: '1995', group: 'Khung xe'},
    {display: 'Trọng lượng toàn tải', value: '2605', group: 'Khung xe'},
    {display: 'Dung tích bình nhiên liệu', value: '80', group: 'Khung xe'},
    {display: 'Loại động cơ', value: '2GD FIV (2.4L)', group: 'Động cơ'},
    {display: 'Số xy lanh', value: '4', group: 'Động cơ'},
    {display: 'Loại nhiên liệu', value: 'Dầu/Diesel', group: 'Động cơ'},
    {display: 'Tiêu chuẩn khí thải', value: 'Euro 4', group: 'Động cơ'},
    {display: 'Kết hợp', value: '7.49', group: 'Tiêu thụ nhiên liệu'},
    {display: 'Trong đô thị', value: '9.05', group: 'Tiêu thụ nhiên liệu'},
    {display: 'Trong thành phố', value: '6.57', group: 'Tiêu thụ nhiên liệu'}
  ]
  constructor() { }

  ngOnInit() {
    this.sliceData();
  }

  sliceData(){
    this.customerExtraFeatureData[0] = this.primitiveExtraFeatureData.slice(0, 4);
    this.customerExtraFeatureData[1] = this.primitiveExtraFeatureData.slice(4, 8);
    this.customerExtraFeatureData[2] = this.primitiveExtraFeatureData.slice(8, 12);
    this.customerExtraFeatureData[3] = this.primitiveExtraFeatureData.slice(12, 16);
    
    this.overviewHeader = this.overview.overviewHeader;
    this.overviewSub = this.overview.overviewSub;
  }

}
