import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-customer-review",
  templateUrl: "./customer-review.component.html",
  styleUrls: ["./customer-review.component.scss"]
})
export class CustomerReviewComponent implements OnInit {
  data = [
    [
      {
        cardImageTopUrl: "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/46479527_2049570018439326_2209303384329027584_n.jpg?_nc_cat=111&_nc_oc=AQndqpnZ0W8MVQKYKoMI2pPD7rfzJIL5j8Oy7-osz7WBRvR858SLWk0soW4PUIXNMKc&_nc_ht=scontent.fsgn2-1.fna&oh=9ff0bf8948ceab875e7547be41f863a8&oe=5DEECA81",
        customerFaceUrl: "assets/images/customers/1.2.jpg",
        customerName: "Chú Trung",
        customerAddress: "Quảng Ngãi",
        customerReview:
          "Tôi rất hài lòng về chất lượng dịch vụ của AutoZone. Tôi đã tìm được chiếc xe mơ ước của mình. Nếu gia đình tôi cần mua xe tôi sẽ nói họ tìm đến AutoZone."
      },
      {
        cardImageTopUrl: "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/55680210_2240269482702711_5241248578147450880_n.jpg?_nc_cat=111&_nc_oc=AQmaGdqin9NxPkBkI5a_nu68ivYQPoVCTlR9ubKAXVAWuwzhz5r5MZp5C8CsiH2Pmt0&_nc_ht=scontent.fsgn2-1.fna&oh=33dc7f1d49fcef0c83cb2d70856b5c80&oe=5DC18516",
        customerFaceUrl: "assets/images/customers/1.1.jpg",
        customerName: "Anh Hổ",
        customerAddress: "Đà Nẵng",
        customerReview:
          "Tôi rất hài lòng về chất lượng dịch vụ của AutoZone. Tôi đã tìm được chiếc xe mơ ước của mình. Nếu gia đình tôi cần mua xe tôi sẽ nói họ tìm đến AutoZone."
      },
      {
        cardImageTopUrl: "https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/45430429_2028114397251555_8992477313736114176_n.jpg?_nc_cat=102&_nc_oc=AQnJWi5pGFVny5CGoOxoysi2_oIFjKqdAaj_B5QCIsnGKeHy7vb3hle8TakOFoSoYik&_nc_ht=scontent.fsgn2-2.fna&oh=44a17d905a2063fe2faf37ed736c229a&oe=5DB0F3F5",
        customerFaceUrl: "assets/images/customers/1.3.jpg",
        customerName: "Chị Hà",
        customerAddress: "Quận 10",
        customerReview:
          "Tôi rất hài lòng về chất lượng dịch vụ của AutoZone. Tôi đã tìm được chiếc xe mơ ước của mình. Nếu gia đình tôi cần mua xe tôi sẽ nói họ tìm đến AutoZone."
      },
      {
        cardImageTopUrl: "https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/55604911_2240265672703092_4238307572035092480_n.jpg?_nc_cat=103&_nc_oc=AQnV4kKg0YB91JdHMT6dkqsLr2FU7r-27r0HvllyVN_hHu5t5vTkKb6WDqNsNsKKXBU&_nc_ht=scontent.fsgn2-2.fna&oh=055862dbb6e9ea5eb0cb706de224952a&oe=5DC2AB9D",
        customerFaceUrl: "assets/images/customers/1.4.jpg",
        customerName: "Anh An",
        customerAddress: "Nhà bè",
        customerReview:
          "Tôi rất hài lòng về chất lượng dịch vụ của AutoZone. Tôi đã tìm được chiếc xe mơ ước của mình. Nếu gia đình tôi cần mua xe tôi sẽ nói họ tìm đến AutoZone."
      }
    ],
    [
      {
        cardImageTopUrl: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/51286698_2157776204285373_704112020768686080_n.jpg?_nc_cat=101&_nc_oc=AQl8iz4nZIMenRrYk3XSpp8uE_onWtqx6ZK3yew-S6MWdKGX48t__t0vlJrLX-_E7GY&_nc_ht=scontent.fsgn2-4.fna&oh=9248d24d8d8e5e2d67b3803f45da3409&oe=5DA2A400",
        customerFaceUrl: "assets/images/customers/1.5.jpg",
        customerName: "Anh Quang",
        customerAddress: "Nghệ An",
        customerReview:
          "Tôi rất hài lòng về chất lượng dịch vụ của AutoZone. Tôi đã tìm được chiếc xe mơ ước của mình. Nếu gia đình tôi cần mua xe tôi sẽ nói họ tìm đến AutoZone."
      },
      {
        cardImageTopUrl: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/64926792_2376590262403965_6902208119087038464_n.jpg?_nc_cat=101&_nc_oc=AQlIQWi6QAl9K9eYluogTRfntPUK-hNDV-HrpWjEEG1vKIpC5sjYOxpOuax1DfvvZn0&_nc_ht=scontent.fsgn2-4.fna&oh=84123072916248dc1c711250dd78494d&oe=5DA19BE1",
        customerFaceUrl: "assets/images/customers/1.6.jpg",
        customerName: "Chị Thúy",
        customerAddress: "Quảng Ngãi",
        customerReview:
          "Tôi rất hài lòng về chất lượng dịch vụ của AutoZone. Tôi đã tìm được chiếc xe mơ ước của mình. Nếu gia đình tôi cần mua xe tôi sẽ nói họ tìm đến AutoZone."
      },
      {
        cardImageTopUrl: "https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/46226430_2043222925740702_5196517017745620992_n.jpg?_nc_cat=104&_nc_oc=AQm35L54qYPaIgAZD9RtWqSTyO-iG28vGX10asiSNaqvtopvhHx6ybr_TvBeehDdZVc&_nc_ht=scontent.fsgn2-1.fna&oh=7f802df624ef4e089b7bb5e6a20ada4c&oe=5DB7149E",
        customerFaceUrl: "assets/images/customers/1.7.jpg",
        customerName: "Anh Đạt",
        customerAddress: "Quảng Ngãi",
        customerReview:
          "Tôi rất hài lòng về chất lượng dịch vụ của AutoZone. Tôi đã tìm được chiếc xe mơ ước của mình. Nếu gia đình tôi cần mua xe tôi sẽ nói họ tìm đến AutoZone."
      },
      {
        cardImageTopUrl: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/49059746_2108208749242119_1939092156920627200_n.jpg?_nc_cat=110&_nc_oc=AQlZArwqP_U_MyilSpZRpmxcbtUmFuPDn1go3cqWZxXTmXE39TnVvTFb5puRuBVJYZ0&_nc_ht=scontent.fsgn2-3.fna&oh=24a56b379675b0e1f2a54f03ff49c5cb&oe=5DB14F69",
        customerFaceUrl: "assets/images/customers/1.8.jpg",
        customerName: "Anh Công",
        customerAddress: "Biên Hòa",
        customerReview:
          "Tôi rất hài lòng về chất lượng dịch vụ của AutoZone. Tôi đã tìm được chiếc xe mơ ước của mình. Nếu gia đình tôi cần mua xe tôi sẽ nói họ tìm đến AutoZone."
      }
    ]
  ];
  constructor() {}

  ngOnInit() {}
}
