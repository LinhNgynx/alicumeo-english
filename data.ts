import { GrammarLesson } from './types';

/**
 * EXTENDED LESSONS DATA - 3 Days of Learning
 * Day 1 (Jan 26): Transportation & Daily Activities
 * Day 2 (Jan 27): Workplace & Professional Development  
 * Day 3 (Feb 9): Communication & Personal Qualities
 */

export const LESSONS: GrammarLesson[] = [
  {
    id: 'l5',
    topic: 'Day 1: Transportation & Actions',
    focus: 'Present Continuous & Action Verbs',
    explanation: 'Use Present Continuous (am/is/are + verb-ing) for actions happening now. Learn transportation and action vocabulary.',
    explanationVi: 'Sử dụng thì Hiện tại tiếp diễn (am/is/are + động từ-ing) cho hành động đang xảy ra. Học từ vựng về giao thông và hành động.',
    storyEn: [
      "Tom is changing a tire on his car right now.",
      "He is putting fuel into his car at the gas station.",
      "A cyclist is riding past the parking lot.",
      "Some pedestrians are walking on the sidewalk.",
      "The mechanic is spreading out the wires to check them.",
      "Everything is folded and rolled up neatly.",
      "A woman is folding a scarf carefully."
    ],
    storyVi: [
      "Tom đang thay lốp xe ngay bây giờ.",
      "Anh ấy đang đổ nhiên liệu vào xe tại trạm xăng.",
      "Một người đi xe đạp đang chạy ngang qua bãi đậu xe.",
      "Một số người đi bộ đang đi trên vỉa hè.",
      "Người thợ máy đang trải các sợi dây ra để kiểm tra.",
      "Mọi thứ được gấp và cuộn lại gọn gàng.",
      "Một phụ nữ đang gấp một chiếc khăn quàng cẩn thận."
    ],
    vocabulary: [
      {
        word: "changing a tire",
        ipa: "/ˈtʃeɪndʒɪŋ ə ˈtaɪə/",
        form: "verb phrase",
        meaningEn: "Replacing a wheel on a vehicle.",
        meaningVi: "Thay lốp xe",
        exampleEn: "He is changing a tire because it's flat.",
        exampleVi: "Anh ấy đang thay lốp xe vì nó bị xẹp."
      },
      {
        word: "putting fuel",
        ipa: "/ˈpʊtɪŋ ˈfjuːəl/",
        form: "verb phrase",
        meaningEn: "Adding gas or petrol to a vehicle.",
        meaningVi: "Đổ nhiên liệu vào xe",
        exampleEn: "She is putting fuel into her car.",
        exampleVi: "Cô ấy đang đổ nhiên liệu vào xe."
      },
      {
        word: "spreading out",
        ipa: "/ˈspredɪŋ aʊt/",
        form: "verb phrase",
        meaningEn: "To extend or open something over an area.",
        meaningVi: "Trải ra",
        exampleEn: "She is spreading out the map on the table.",
        exampleVi: "Cô ấy đang trải bản đồ ra trên bàn."
      },
      {
        word: "folding",
        ipa: "/ˈfəʊldɪŋ/",
        form: "verb",
        meaningEn: "Bending something over on itself.",
        meaningVi: "Gấp",
        exampleEn: "He is folding a scarf neatly.",
        exampleVi: "Anh ấy đang gấp một chiếc khăn quàng gọn gàng."
      },
      {
        word: "wire",
        ipa: "/ˈwaɪə/",
        form: "noun",
        meaningEn: "A thin metal thread used for electrical connections.",
        meaningVi: "Sợi dây",
        exampleEn: "The wires are connected to the battery.",
        exampleVi: "Các sợi dây được kết nối với pin."
      },
      {
        word: "rolled up",
        ipa: "/rəʊld ʌp/",
        form: "adjective/verb phrase",
        meaningEn: "Formed into a roll; wrapped around itself.",
        meaningVi: "Được cuộn lại",
        exampleEn: "The map is rolled up in the car.",
        exampleVi: "Bản đồ được cuộn lại trong xe."
      },
      {
        word: "cyclist",
        ipa: "/ˈsaɪklɪst/",
        form: "noun",
        meaningEn: "A person who rides a bicycle.",
        meaningVi: "Người đi xe đạp",
        exampleEn: "The cyclist is riding past the park.",
        exampleVi: "Người đi xe đạp đang chạy ngang qua công viên."
      },
      {
        word: "riding past",
        ipa: "/ˈraɪdɪŋ pɑːst/",
        form: "verb phrase",
        meaningEn: "Moving by on a bicycle or vehicle.",
        meaningVi: "Chạy ngang qua",
        exampleEn: "He is riding past the school.",
        exampleVi: "Anh ấy đang chạy ngang qua trường học."
      },
      {
        word: "pedestrian",
        ipa: "/pəˈdestriən/",
        form: "noun",
        meaningEn: "A person walking on foot.",
        meaningVi: "Người đi bộ",
        exampleEn: "Pedestrians must use the crosswalk.",
        exampleVi: "Người đi bộ phải sử dụng vạch qua đường."
      }
    ],
    exercises: [
      {
        id: 'e5_1',
        type: 'fill',
        questionEn: "He ____ (change) a tire right now.",
        questionVi: "Anh ấy ____ thay lốp xe ngay bây giờ.",
        correctAnswer: "is changing"
      },
      {
        id: 'e5_2',
        type: 'mcq',
        questionEn: "The ____ is riding past the store.",
        questionVi: "Người ____ đang chạy ngang qua cửa hàng.",
        options: ["pedestrian", "cyclist", "driver"],
        correctAnswer: "cyclist"
      },
      {
        id: 'e5_3',
        type: 'complete',
        questionEn: "She is putting ____ into her car.",
        questionVi: "Cô ấy đang đổ ____ vào xe.",
        correctAnswer: "fuel"
      },
      {
        id: 'e5_4',
        type: 'meaning',
        questionEn: "Which phrase means to extend over an area?",
        questionVi: "Cụm từ nào có nghĩa là trải ra trên một khu vực?",
        options: ["Folding", "Spreading out", "Rolling up"],
        correctAnswer: "Spreading out"
      },
      {
        id: 'e5_5',
        type: 'fill',
        questionEn: "The mechanic ____ (spread) out the wires on the table.",
        questionVi: "Người thợ máy ____ các sợi dây trên bàn.",
        correctAnswer: "is spreading"
      },
      {
        id: 'e5_6',
        type: 'mcq',
        questionEn: "What do we call a person walking on foot?",
        questionVi: "Chúng ta gọi người đi bộ là gì?",
        options: ["Cyclist", "Pedestrian", "Driver"],
        correctAnswer: "Pedestrian"
      },
      {
        id: 'e5_7',
        type: 'fill',
        questionEn: "She ____ (fold) her scarf carefully before leaving.",
        questionVi: "Cô ấy ____ chiếc khăn quàng cẩn thận trước khi rời đi.",
        correctAnswer: "is folding"
      },
      {
        id: 'e5_8',
        type: 'mcq',
        questionEn: "The opposite of 'spreading out' is ____.",
        questionVi: "Trái nghĩa của 'trải ra' là ____.",
        options: ["rolling up", "opening", "extending"],
        correctAnswer: "rolling up"
      },
      {
        id: 'e5_9',
        type: 'complete',
        questionEn: "The electrical ____ connect to the battery.",
        questionVi: "Các ____ điện kết nối với pin.",
        correctAnswer: "wires"
      },
      {
        id: 'e5_10',
        type: 'fill',
        questionEn: "Look! A cyclist ____ (ride) past our house.",
        questionVi: "Nhìn kìa! Một người đi xe đạp ____ ngang qua nhà chúng ta.",
        correctAnswer: "is riding"
      },
      {
        id: 'e5_11',
        type: 'mcq',
        questionEn: "Choose the correct present continuous form:",
        questionVi: "Chọn dạng hiện tại tiếp diễn đúng:",
        options: ["They putting fuel", "They are putting fuel", "They puts fuel"],
        correctAnswer: "They are putting fuel"
      },
      {
        id: 'e5_12',
        type: 'meaning',
        questionEn: "Which action involves making something into a cylinder shape?",
        questionVi: "Hành động nào liên quan đến việc làm thứ gì đó thành hình trụ?",
        options: ["Folding", "Rolling up", "Spreading"],
        correctAnswer: "Rolling up"
      }
    ],
    rearrangeExercises: [
      {
        sentenceEn: "He is changing a tire now.",
        sentenceVi: "Anh ấy đang thay lốp xe bây giờ."
      },
      {
        sentenceEn: "A cyclist is riding past.",
        sentenceVi: "Một người đi xe đạp đang chạy ngang qua."
      },
      {
        sentenceEn: "The scarf is folded neatly.",
        sentenceVi: "Chiếc khăn quàng được gấp gọn gàng."
      },
      {
        sentenceEn: "The wires are rolled up.",
        sentenceVi: "Các sợi dây được cuộn lại."
      },
      {
        sentenceEn: "She is putting fuel into the car.",
        sentenceVi: "Cô ấy đang đổ nhiên liệu vào xe."
      },
      {
        sentenceEn: "Pedestrians are walking on the sidewalk.",
        sentenceVi: "Người đi bộ đang đi trên vỉa hè."
      },
      {
        sentenceEn: "The mechanic is spreading out the wires.",
        sentenceVi: "Người thợ máy đang trải các sợi dây ra."
      },
      {
        sentenceEn: "The cyclist is riding past the school.",
        sentenceVi: "Người đi xe đạp đang chạy ngang qua trường học."
      }
    ]
  },

  {
    id: 'l6',
    topic: 'Day 2: Workplace Success',
    focus: 'Despite + Noun & Professional Vocabulary',
    explanation: 'Use "despite" + noun to show contrast. Learn workplace and business vocabulary.',
    explanationVi: 'Sử dụng "despite" + danh từ để thể hiện sự tương phản. Học từ vựng về công việc và kinh doanh.',
    storyEn: [
      "Despite her youth, she was promoted to manager.",
      "The organization conducted a full-scale review of operations.",
      "They took measures to reduce costs throughout the company.",
      "The manager thoughtfully considered the decision.",
      "She represents our team and tracks all the data.",
      "The company is rapidly expanding in new markets.",
      "Previously, we struggled with efficiency.",
      "Nearly all employees supported the changes."
    ],
    storyVi: [
      "Mặc dù còn trẻ, cô ấy đã được thăng chức lên quản lý.",
      "Tổ chức đã tiến hành đánh giá toàn diện các hoạt động.",
      "Họ đã thực hiện biện pháp cắt giảm chi phí khắp công ty.",
      "Người quản lý đã cân nhắc quyết định một cách chu đáo.",
      "Cô ấy đại diện cho nhóm chúng tôi và theo dõi tất cả dữ liệu.",
      "Công ty đang mở rộng nhanh chóng tại các thị trường mới.",
      "Trước đây, chúng tôi gặp khó khăn với hiệu quả.",
      "Gần như tất cả nhân viên đều ủng hộ các thay đổi."
    ],
    vocabulary: [
      {
        word: "despite",
        ipa: "/dɪˈspaɪt/",
        form: "preposition",
        meaningEn: "Without being affected by; in spite of.",
        meaningVi: "Mặc dù",
        exampleEn: "Despite the rain, we went hiking.",
        exampleVi: "Mặc dù trời mưa, chúng tôi vẫn đi leo núi."
      },
      {
        word: "full-scale",
        ipa: "/ˌfʊl ˈskeɪl/",
        form: "adjective",
        meaningEn: "Complete and thorough; involving all aspects.",
        meaningVi: "Quy mô đầy đủ, toàn diện",
        exampleEn: "They launched a full-scale investigation.",
        exampleVi: "Họ đã khởi động một cuộc điều tra toàn diện."
      },
      {
        word: "conduct",
        ipa: "/kənˈdʌkt/",
        form: "verb",
        meaningEn: "To organize and carry out an activity.",
        meaningVi: "Tổ chức và thực hiện",
        exampleEn: "We will conduct a meeting tomorrow.",
        exampleVi: "Chúng tôi sẽ tổ chức một cuộc họp vào ngày mai."
      },
      {
        word: "be promoted to",
        ipa: "/bi prəˈməʊtɪd tuː/",
        form: "verb phrase",
        meaningEn: "To be given a higher position or rank.",
        meaningVi: "Được thăng chức lên",
        exampleEn: "She was promoted to senior manager.",
        exampleVi: "Cô ấy được thăng chức lên quản lý cấp cao."
      },
      {
        word: "thoughtfully",
        ipa: "/ˈθɔːtfəli/",
        form: "adverb",
        meaningEn: "In a careful and considerate way.",
        meaningVi: "Một cách chu đáo",
        exampleEn: "He answered thoughtfully.",
        exampleVi: "Anh ấy trả lời một cách chu đáo."
      },
      {
        word: "throughout",
        ipa: "/θruːˈaʊt/",
        form: "preposition",
        meaningEn: "In every part of; all through.",
        meaningVi: "Khắp, suốt",
        exampleEn: "We work throughout the year.",
        exampleVi: "Chúng tôi làm việc suốt cả năm."
      },
      {
        word: "represent",
        ipa: "/ˌreprɪˈzent/",
        form: "verb",
        meaningEn: "To act or speak on behalf of someone.",
        meaningVi: "Đại diện",
        exampleEn: "I represent the marketing department.",
        exampleVi: "Tôi đại diện cho phòng marketing."
      },
      {
        word: "track",
        ipa: "/træk/",
        form: "verb",
        meaningEn: "To monitor or observe data and trends.",
        meaningVi: "Theo dõi, giám sát",
        exampleEn: "We track customer satisfaction.",
        exampleVi: "Chúng tôi theo dõi sự hài lòng của khách hàng."
      },
      {
        word: "take measures",
        ipa: "/teɪk ˈmeʒəz/",
        form: "verb phrase",
        meaningEn: "To take action to achieve something.",
        meaningVi: "Thực hiện biện pháp",
        exampleEn: "We must take measures to improve quality.",
        exampleVi: "Chúng ta phải thực hiện biện pháp để cải thiện chất lượng."
      },
      {
        word: "rapidly expanding",
        ipa: "/ˈræpɪdli ɪkˈspændɪŋ/",
        form: "adjective phrase",
        meaningEn: "Growing or developing very quickly.",
        meaningVi: "Đang mở rộng nhanh chóng",
        exampleEn: "This is a rapidly expanding market.",
        exampleVi: "Đây là một thị trường đang mở rộng nhanh chóng."
      },
      {
        word: "previously",
        ipa: "/ˈpriːviəsli/",
        form: "adverb",
        meaningEn: "At an earlier time; before now.",
        meaningVi: "Trước đây",
        exampleEn: "He previously worked in London.",
        exampleVi: "Trước đây anh ấy làm việc ở London."
      },
      {
        word: "nearly",
        ipa: "/ˈnɪəli/",
        form: "adverb",
        meaningEn: "Almost; close to.",
        meaningVi: "Gần như",
        exampleEn: "Nearly everyone attended the meeting.",
        exampleVi: "Gần như mọi người đều tham dự cuộc họp."
      },
      {
        word: "struggle with",
        ipa: "/ˈstrʌɡl wɪð/",
        form: "verb phrase",
        meaningEn: "To have difficulty with something.",
        meaningVi: "Gặp khó khăn với",
        exampleEn: "I struggle with math problems.",
        exampleVi: "Tôi gặp khó khăn với bài toán."
      }
    ],
    exercises: [
      {
        id: 'e6_1',
        type: 'fill',
        questionEn: "____ her youth, she became CEO.",
        questionVi: "____ còn trẻ, cô ấy đã trở thành CEO.",
        correctAnswer: "Despite"
      },
      {
        id: 'e6_2',
        type: 'mcq',
        questionEn: "She was ____ to manager last month.",
        questionVi: "Cô ấy đã được ____ lên quản lý tháng trước.",
        options: ["promoted", "demoted", "transferred"],
        correctAnswer: "promoted"
      },
      {
        id: 'e6_3',
        type: 'complete',
        questionEn: "They will conduct a ____-scale review.",
        questionVi: "Họ sẽ tiến hành đánh giá quy mô ____.",
        correctAnswer: "full"
      },
      {
        id: 'e6_4',
        type: 'meaning',
        questionEn: "Which word means to monitor data?",
        questionVi: "Từ nào có nghĩa là theo dõi dữ liệu?",
        options: ["Track", "Conduct", "Represent"],
        correctAnswer: "Track"
      },
      {
        id: 'e6_5',
        type: 'fill',
        questionEn: "We work ____ the year without breaks.",
        questionVi: "Chúng tôi làm việc ____ cả năm không nghỉ.",
        correctAnswer: "throughout"
      },
      {
        id: 'e6_6',
        type: 'mcq',
        questionEn: "____ the bad weather, we completed the project on time.",
        questionVi: "____ thời tiết xấu, chúng tôi hoàn thành dự án đúng hạn.",
        options: ["Although", "Despite", "Because"],
        correctAnswer: "Despite"
      },
      {
        id: 'e6_7',
        type: 'complete',
        questionEn: "The company is ____ expanding into Asian markets.",
        questionVi: "Công ty đang mở rộng ____ vào thị trường châu Á.",
        correctAnswer: "rapidly"
      },
      {
        id: 'e6_8',
        type: 'fill',
        questionEn: "She ____ (represent) our company at the conference.",
        questionVi: "Cô ấy ____ công ty chúng tôi tại hội nghị.",
        correctAnswer: "represents"
      },
      {
        id: 'e6_9',
        type: 'mcq',
        questionEn: "Which phrase means 'to have difficulty with'?",
        questionVi: "Cụm từ nào có nghĩa là 'gặp khó khăn với'?",
        options: ["Struggle with", "Deal with", "Agree with"],
        correctAnswer: "Struggle with"
      },
      {
        id: 'e6_10',
        type: 'complete',
        questionEn: "We must take ____ to improve safety.",
        questionVi: "Chúng ta phải thực hiện ____ để cải thiện an toàn.",
        correctAnswer: "measures"
      },
      {
        id: 'e6_11',
        type: 'fill',
        questionEn: "____, I worked in New York for five years.",
        questionVi: "____, tôi đã làm việc ở New York trong năm năm.",
        correctAnswer: "Previously"
      },
      {
        id: 'e6_12',
        type: 'mcq',
        questionEn: "The manager ____ considered all options before deciding.",
        questionVi: "Người quản lý đã cân nhắc tất cả các lựa chọn ____ trước khi quyết định.",
        options: ["thoughtful", "thoughtfully", "thinking"],
        correctAnswer: "thoughtfully"
      },
      {
        id: 'e6_13',
        type: 'fill',
        questionEn: "____ everyone agreed with the new policy.",
        questionVi: "____ mọi người đều đồng ý với chính sách mới.",
        correctAnswer: "Nearly"
      },
      {
        id: 'e6_14',
        type: 'meaning',
        questionEn: "What does 'conduct' mean in a business context?",
        questionVi: "'Conduct' có nghĩa gì trong bối cảnh kinh doanh?",
        options: ["To cancel", "To organize and carry out", "To postpone"],
        correctAnswer: "To organize and carry out"
      },
      {
        id: 'e6_15',
        type: 'complete',
        questionEn: "The IT department ____ all system performance.",
        questionVi: "Phòng IT ____ tất cả hiệu suất hệ thống.",
        correctAnswer: "tracks"
      }
    ],
    rearrangeExercises: [
      {
        sentenceEn: "Despite her youth, she succeeded.",
        sentenceVi: "Mặc dù còn trẻ, cô ấy đã thành công."
      },
      {
        sentenceEn: "We conducted a full-scale project.",
        sentenceVi: "Chúng tôi đã thực hiện một dự án toàn diện."
      },
      {
        sentenceEn: "She represents our organization.",
        sentenceVi: "Cô ấy đại diện cho tổ chức của chúng tôi."
      },
      {
        sentenceEn: "We track the data throughout the year.",
        sentenceVi: "Chúng tôi theo dõi dữ liệu suốt cả năm."
      },
      {
        sentenceEn: "The manager thoughtfully considered the options.",
        sentenceVi: "Người quản lý đã cân nhắc các lựa chọn một cách chu đáo."
      },
      {
        sentenceEn: "They took measures to reduce costs.",
        sentenceVi: "Họ đã thực hiện biện pháp để cắt giảm chi phí."
      },
      {
        sentenceEn: "The company is rapidly expanding.",
        sentenceVi: "Công ty đang mở rộng nhanh chóng."
      },
      {
        sentenceEn: "Previously we struggled with efficiency.",
        sentenceVi: "Trước đây chúng tôi gặp khó khăn với hiệu quả."
      },
      {
        sentenceEn: "Nearly all employees supported the changes.",
        sentenceVi: "Gần như tất cả nhân viên đều ủng hộ các thay đổi."
      },
      {
        sentenceEn: "She was promoted to senior manager.",
        sentenceVi: "Cô ấy được thăng chức lên quản lý cấp cao."
      }
    ]
  },

  {
    id: 'l7',
    topic: 'Day 3: Communication & Character',
    focus: 'Adjectives, Conjunctions & Media Vocabulary',
    explanation: 'Learn descriptive adjectives, conjunctions like "although" and "despite", and communication vocabulary.',
    explanationVi: 'Học tính từ mô tả, liên từ như "although" và "despite", và từ vựng về truyền thông.',
    storyEn: [
      "The authorized retailer will broadcast the event indefinitely.",
      "They will honor the winner at the ceremony.",
      "Despite objections, the exclusive content was up-to-date.",
      "She can diagnose problems and enhance the entire system.",
      "Consequently, the broadcast was amusing and not mundane.",
      "Although he seems naive, he is patient and generous.",
      "The notable appendix was removed from last month's issue.",
      "Even if the task is boring, she is bound to succeed.",
      "She expressed her dedication thoughtfully regarding the project."
    ],
    storyVi: [
      "Nhà bán lẻ được ủy quyền sẽ phát sóng sự kiện vô thời hạn.",
      "Họ sẽ vinh danh người chiến thắng tại buổi lễ.",
      "Mặc dù có phản đối, nội dung độc quyền đã được cập nhật.",
      "Cô ấy có thể chẩn đoán vấn đề và nâng cao toàn bộ hệ thống.",
      "Kết quả là, chương trình phát sóng thú vị và không nhàm chán.",
      "Mặc dù anh ấy có vẻ ngây thơ, anh ấy kiên nhẫn và rộng lượng.",
      "Phụ lục đáng chú ý đã được xóa khỏi số báo tháng trước.",
      "Ngay cả khi công việc nhàm chán, cô ấy chắc chắn sẽ thành công.",
      "Cô ấy bày tỏ sự cống hiến một cách chu đáo về dự án."
    ],
    vocabulary: [
      {
        word: "authorized retailer",
        ipa: "/ˈɔːθəraɪzd ˈriːteɪlə/",
        form: "noun phrase",
        meaningEn: "An officially approved seller.",
        meaningVi: "Nhà bán lẻ được ủy quyền",
        exampleEn: "Buy from an authorized retailer only.",
        exampleVi: "Chỉ mua từ nhà bán lẻ được ủy quyền."
      },
      {
        word: "indefinitely",
        ipa: "/ɪnˈdefɪnətli/",
        form: "adverb",
        meaningEn: "For an unlimited or unspecified period of time.",
        meaningVi: "Vô thời hạn",
        exampleEn: "The meeting is postponed indefinitely.",
        exampleVi: "Cuộc họp bị hoãn vô thời hạn."
      },
      {
        word: "have objection to",
        ipa: "/hæv əbˈdʒekʃn tuː/",
        form: "verb phrase",
        meaningEn: "To oppose or disagree with something.",
        meaningVi: "Phản đối",
        exampleEn: "I have no objection to the plan.",
        exampleVi: "Tôi không phản đối kế hoạch."
      },
      {
        word: "honor",
        ipa: "/ˈɒnə/",
        form: "verb",
        meaningEn: "To show respect or recognition for someone.",
        meaningVi: "Vinh danh",
        exampleEn: "We honor our veterans every year.",
        exampleVi: "Chúng tôi vinh danh các cựu chiến binh mỗi năm."
      },
      {
        word: "ceremony",
        ipa: "/ˈserəməni/",
        form: "noun",
        meaningEn: "A formal event held on a special occasion.",
        meaningVi: "Buổi lễ",
        exampleEn: "The graduation ceremony was beautiful.",
        exampleVi: "Buổi lễ tốt nghiệp rất đẹp."
      },
      {
        word: "endurance",
        ipa: "/ɪnˈdjʊərəns/",
        form: "noun",
        meaningEn: "The ability to continue for a long time.",
        meaningVi: "Sức chịu đựng, sự bền bỉ",
        exampleEn: "Marathon running requires great endurance.",
        exampleVi: "Chạy marathon đòi hỏi sức bền bỉ lớn."
      },
      {
        word: "capacity",
        ipa: "/kəˈpæsəti/",
        form: "noun",
        meaningEn: "The maximum amount that something can contain.",
        meaningVi: "Sức chứa",
        exampleEn: "The stadium has a capacity of 50,000.",
        exampleVi: "Sân vận động có sức chứa 50,000 người."
      },
      {
        word: "diagnose",
        ipa: "/ˈdaɪəɡnəʊz/",
        form: "verb",
        meaningEn: "To identify the nature of a problem.",
        meaningVi: "Chẩn đoán",
        exampleEn: "The doctor will diagnose the illness.",
        exampleVi: "Bác sĩ sẽ chẩn đoán bệnh."
      },
      {
        word: "consequently",
        ipa: "/ˈkɒnsɪkwəntli/",
        form: "adverb",
        meaningEn: "As a result; therefore.",
        meaningVi: "Kết quả là, do đó",
        exampleEn: "He was late; consequently, he missed the meeting.",
        exampleVi: "Anh ấy đến muộn; kết quả là anh ấy bỏ lỡ cuộc họp."
      },
      {
        word: "even if",
        ipa: "/ˈiːvn ɪf/",
        form: "conjunction",
        meaningEn: "Despite the possibility that; no matter whether.",
        meaningVi: "Cho dù, ngay cả khi",
        exampleEn: "Even if it rains, we will go.",
        exampleVi: "Cho dù trời mưa, chúng tôi vẫn sẽ đi."
      },
      {
        word: "generous",
        ipa: "/ˈdʒenərəs/",
        form: "adjective",
        meaningEn: "Willing to give more than necessary; kind.",
        meaningVi: "Rộng lượng",
        exampleEn: "He made a generous donation.",
        exampleVi: "Anh ấy đã quyên góp rộng lượng."
      },
      {
        word: "express",
        ipa: "/ɪkˈspres/",
        form: "verb",
        meaningEn: "To show or communicate a feeling or idea.",
        meaningVi: "Trình bày, thể hiện",
        exampleEn: "She expressed her opinion clearly.",
        exampleVi: "Cô ấy bày tỏ ý kiến rõ ràng."
      },
      {
        word: "entire",
        ipa: "/ɪnˈtaɪə/",
        form: "adjective",
        meaningEn: "Whole; complete; all of.",
        meaningVi: "Toàn bộ",
        exampleEn: "The entire team worked together.",
        exampleVi: "Toàn bộ đội đã làm việc cùng nhau."
      },
      {
        word: "amusing",
        ipa: "/əˈmjuːzɪŋ/",
        form: "adjective",
        meaningEn: "Funny; entertaining.",
        meaningVi: "Thú vị, buồn cười",
        exampleEn: "The movie was very amusing.",
        exampleVi: "Bộ phim rất thú vị."
      },
      {
        word: "dedicate",
        ipa: "/ˈdedɪkeɪt/",
        form: "verb",
        meaningEn: "To give time and effort to something important.",
        meaningVi: "Cống hiến",
        exampleEn: "She dedicated her life to teaching.",
        exampleVi: "Cô ấy cống hiến cả đời cho sự nghiệp giảng dạy."
      },
      {
        word: "exclusive",
        ipa: "/ɪkˈskluːsɪv/",
        form: "adjective",
        meaningEn: "Limited to only one person or group; not shared.",
        meaningVi: "Độc quyền",
        exampleEn: "This is an exclusive interview.",
        exampleVi: "Đây là một cuộc phỏng vấn độc quyền."
      },
      {
        word: "broadcast",
        ipa: "/ˈbrɔːdkɑːst/",
        form: "verb/noun",
        meaningEn: "To transmit a program on radio or TV.",
        meaningVi: "Phát sóng",
        exampleEn: "They broadcast the news at 6 PM.",
        exampleVi: "Họ phát sóng tin tức lúc 6 giờ chiều."
      },
      {
        word: "up-to-date",
        ipa: "/ˌʌp tə ˈdeɪt/",
        form: "adjective",
        meaningEn: "Having the latest information; current.",
        meaningVi: "Mới nhất, cập nhật",
        exampleEn: "Keep your software up-to-date.",
        exampleVi: "Giữ phần mềm của bạn luôn cập nhật."
      },
      {
        word: "enhance",
        ipa: "/ɪnˈhɑːns/",
        form: "verb",
        meaningEn: "To improve or increase in quality.",
        meaningVi: "Nâng cao, cải thiện",
        exampleEn: "This will enhance your skills.",
        exampleVi: "Điều này sẽ nâng cao kỹ năng của bạn."
      },
      {
        word: "notable",
        ipa: "/ˈnəʊtəbl/",
        form: "adjective",
        meaningEn: "Worthy of attention; remarkable.",
        meaningVi: "Đáng chú ý, nổi bật",
        exampleEn: "She made a notable contribution.",
        exampleVi: "Cô ấy đã có đóng góp đáng chú ý."
      },
      {
        word: "mundane",
        ipa: "/mʌnˈdeɪn/",
        form: "adjective",
        meaningEn: "Lacking interest or excitement; boring.",
        meaningVi: "Nhàm chán, tầm thường",
        exampleEn: "It was a mundane task.",
        exampleVi: "Đó là một công việc nhàm chán."
      },
      {
        word: "regarding",
        ipa: "/rɪˈɡɑːdɪŋ/",
        form: "preposition",
        meaningEn: "Concerning; about.",
        meaningVi: "Về, liên quan đến",
        exampleEn: "I have questions regarding the contract.",
        exampleVi: "Tôi có câu hỏi về hợp đồng."
      },
      {
        word: "patient",
        ipa: "/ˈpeɪʃnt/",
        form: "adjective",
        meaningEn: "Able to wait calmly without complaining.",
        meaningVi: "Kiên nhẫn",
        exampleEn: "She is very patient with children.",
        exampleVi: "Cô ấy rất kiên nhẫn với trẻ em."
      },
      {
        word: "tolerate",
        ipa: "/ˈtɒləreɪt/",
        form: "verb",
        meaningEn: "To accept or endure something unpleasant.",
        meaningVi: "Khoan dung, chịu đựng",
        exampleEn: "I cannot tolerate rudeness.",
        exampleVi: "Tôi không thể chịu đựng sự thô lỗ."
      },
      {
        word: "naive",
        ipa: "/naɪˈiːv/",
        form: "adjective",
        meaningEn: "Lacking experience; too trusting.",
        meaningVi: "Ngây thơ, tin người ngu ngốc",
        exampleEn: "It was naive to believe everything.",
        exampleVi: "Thật ngây thơ khi tin mọi thứ."
      },
      {
        word: "innocent",
        ipa: "/ˈɪnəsnt/",
        form: "adjective",
        meaningEn: "Pure, simple, or free from guilt.",
        meaningVi: "Ngây thơ trong sáng",
        exampleEn: "The child has an innocent smile.",
        exampleVi: "Đứa trẻ có nụ cười trong sáng."
      },
      {
        word: "be bound to",
        ipa: "/bi baʊnd tuː/",
        form: "phrase",
        meaningEn: "To be certain or likely to do something.",
        meaningVi: "Chắc chắn sẽ",
        exampleEn: "She is bound to succeed.",
        exampleVi: "Cô ấy chắc chắn sẽ thành công."
      },
      {
        word: "although",
        ipa: "/ɔːlˈðəʊ/",
        form: "conjunction",
        meaningEn: "Despite the fact that; even though.",
        meaningVi: "Mặc dù",
        exampleEn: "Although it was cold, we went out.",
        exampleVi: "Mặc dù trời lạnh, chúng tôi vẫn đi ra ngoài."
      },
      {
        word: "appendix",
        ipa: "/əˈpendɪks/",
        form: "noun",
        meaningEn: "A section at the end of a book with extra information.",
        meaningVi: "Phụ lục",
        exampleEn: "See the appendix for more details.",
        exampleVi: "Xem phụ lục để biết thêm chi tiết."
      },
      {
        word: "remove",
        ipa: "/rɪˈmuːv/",
        form: "verb",
        meaningEn: "To take away or delete something.",
        meaningVi: "Xóa, loại bỏ",
        exampleEn: "Please remove your shoes.",
        exampleVi: "Vui lòng cởi giày của bạn."
      }
    ],
    exercises: [
      {
        id: 'e7_1',
        type: 'fill',
        questionEn: "____ she is young, she is very wise.",
        questionVi: "____ cô ấy còn trẻ, cô ấy rất khôn ngoan.",
        correctAnswer: "Although"
      },
      {
        id: 'e7_2',
        type: 'mcq',
        questionEn: "This interview is ____; only one channel has it.",
        questionVi: "Cuộc phỏng vấn này ____; chỉ một kênh có nó.",
        options: ["exclusive", "public", "common"],
        correctAnswer: "exclusive"
      },
      {
        id: 'e7_3',
        type: 'complete',
        questionEn: "She is bound ____ win the competition.",
        questionVi: "Cô ấy chắc chắn ____ thắng cuộc thi.",
        correctAnswer: "to"
      },
      {
        id: 'e7_4',
        type: 'meaning',
        questionEn: "Which word means boring or lacking excitement?",
        questionVi: "Từ nào có nghĩa là nhàm chán hoặc thiếu sự thú vị?",
        options: ["Notable", "Mundane", "Amusing"],
        correctAnswer: "Mundane"
      },
      {
        id: 'e7_5',
        type: 'fill',
        questionEn: "The doctor will ____ the illness tomorrow.",
        questionVi: "Bác sĩ sẽ ____ bệnh vào ngày mai.",
        correctAnswer: "diagnose"
      },
      {
        id: 'e7_6',
        type: 'mcq',
        questionEn: "Which word means 'for an unlimited time'?",
        questionVi: "Từ nào có nghĩa là 'trong thời gian không giới hạn'?",
        options: ["Definitely", "Indefinitely", "Recently"],
        correctAnswer: "Indefinitely"
      },
      {
        id: 'e7_7',
        type: 'complete',
        questionEn: "They will ____ the winner at the ceremony.",
        questionVi: "Họ sẽ ____ người chiến thắng tại buổi lễ.",
        correctAnswer: "honor"
      },
      {
        id: 'e7_8',
        type: 'fill',
        questionEn: "He was late; ____, he missed the presentation.",
        questionVi: "Anh ấy đến muộn; ____, anh ấy bỏ lỡ buổi thuyết trình.",
        correctAnswer: "consequently"
      },
      {
        id: 'e7_9',
        type: 'mcq',
        questionEn: "The ____ team completed the project.",
        questionVi: "____ nhóm đã hoàn thành dự án.",
        options: ["entire", "partial", "some"],
        correctAnswer: "entire"
      },
      {
        id: 'e7_10',
        type: 'fill',
        questionEn: "____ if it rains, we will continue the event.",
        questionVi: "____ trời mưa, chúng tôi vẫn sẽ tiếp tục sự kiện.",
        correctAnswer: "Even"
      },
      {
        id: 'e7_11',
        type: 'complete',
        questionEn: "Keep your information up-to-____.",
        questionVi: "Giữ thông tin của bạn luôn ____.",
        correctAnswer: "date"
      },
      {
        id: 'e7_12',
        type: 'mcq',
        questionEn: "Which word describes someone who is too trusting?",
        questionVi: "Từ nào mô tả người quá tin người?",
        options: ["Patient", "Naive", "Generous"],
        correctAnswer: "Naive"
      },
      {
        id: 'e7_13',
        type: 'fill',
        questionEn: "This training will ____ your professional skills.",
        questionVi: "Khóa đào tạo này sẽ ____ kỹ năng chuyên môn của bạn.",
        correctAnswer: "enhance"
      },
      {
        id: 'e7_14',
        type: 'meaning',
        questionEn: "What does 'broadcast' mean?",
        questionVi: "'Broadcast' có nghĩa là gì?",
        options: ["To cancel", "To transmit on TV/radio", "To record"],
        correctAnswer: "To transmit on TV/radio"
      },
      {
        id: 'e7_15',
        type: 'complete',
        questionEn: "She ____ her opinion clearly at the meeting.",
        questionVi: "Cô ấy ____ ý kiến rõ ràng tại cuộc họp.",
        correctAnswer: "expressed"
      },
      {
        id: 'e7_16',
        type: 'fill',
        questionEn: "Teachers must be very ____ with young children.",
        questionVi: "Giáo viên phải rất ____ với trẻ nhỏ.",
        correctAnswer: "patient"
      },
      {
        id: 'e7_17',
        type: 'mcq',
        questionEn: "I have questions ____ the new policy.",
        questionVi: "Tôi có câu hỏi ____ chính sách mới.",
        options: ["about", "regarding", "both are correct"],
        correctAnswer: "both are correct"
      },
      {
        id: 'e7_18',
        type: 'complete',
        questionEn: "He made a ____ donation to the charity.",
        questionVi: "Anh ấy đã quyên góp ____ cho tổ chức từ thiện.",
        correctAnswer: "generous"
      },
      {
        id: 'e7_19',
        type: 'fill',
        questionEn: "The child has an ____ smile.",
        questionVi: "Đứa trẻ có nụ cười ____.",
        correctAnswer: "innocent"
      },
      {
        id: 'e7_20',
        type: 'mcq',
        questionEn: "Which word is the opposite of 'mundane'?",
        questionVi: "Từ nào trái nghĩa với 'mundane'?",
        options: ["Boring", "Amusing", "Dull"],
        correctAnswer: "Amusing"
      },
      {
        id: 'e7_21',
        type: 'fill',
        questionEn: "She dedicated her ____ life to medical research.",
        questionVi: "Cô ấy cống hiến ____ cuộc đời cho nghiên cứu y học.",
        correctAnswer: "entire"
      },
      {
        id: 'e7_22',
        type: 'complete',
        questionEn: "I cannot ____ rude behavior.",
        questionVi: "Tôi không thể ____ hành vi thô lỗ.",
        correctAnswer: "tolerate"
      },
      {
        id: 'e7_23',
        type: 'mcq',
        questionEn: "The ____ provides extra information at the end of the book.",
        questionVi: "____ cung cấp thông tin bổ sung ở cuối sách.",
        options: ["Index", "Appendix", "Chapter"],
        correctAnswer: "Appendix"
      },
      {
        id: 'e7_24',
        type: 'fill',
        questionEn: "Please ____ your shoes before entering.",
        questionVi: "Vui lòng ____ giày trước khi vào.",
        correctAnswer: "remove"
      },
      {
        id: 'e7_25',
        type: 'meaning',
        questionEn: "What does 'authorized retailer' mean?",
        questionVi: "'Authorized retailer' có nghĩa là gì?",
        options: ["Any seller", "Officially approved seller", "Online seller"],
        correctAnswer: "Officially approved seller"
      },
      {
        id: 'e7_26',
        type: 'complete',
        questionEn: "Marathon running requires great ____.",
        questionVi: "Chạy marathon đòi hỏi ____ lớn.",
        correctAnswer: "endurance"
      },
      {
        id: 'e7_27',
        type: 'fill',
        questionEn: "The stadium has a ____ of 80,000 people.",
        questionVi: "Sân vận động có ____ 80,000 người.",
        correctAnswer: "capacity"
      },
      {
        id: 'e7_28',
        type: 'mcq',
        questionEn: "She made a ____ contribution to science.",
        questionVi: "Cô ấy đã có đóng góp ____ cho khoa học.",
        options: ["mundane", "notable", "patient"],
        correctAnswer: "notable"
      }
    ],
    rearrangeExercises: [
      {
        sentenceEn: "The broadcast was up-to-date.",
        sentenceVi: "Chương trình phát sóng đã được cập nhật."
      },
      {
        sentenceEn: "Although tired, he continued working.",
        sentenceVi: "Mặc dù mệt, anh ấy vẫn tiếp tục làm việc."
      },
      {
        sentenceEn: "She is patient and generous.",
        sentenceVi: "Cô ấy kiên nhẫn và rộng lượng."
      },
      {
        sentenceEn: "Consequently, we made changes.",
        sentenceVi: "Kết quả là, chúng tôi đã thay đổi."
      },
      {
        sentenceEn: "The authorized retailer sells exclusive products.",
        sentenceVi: "Nhà bán lẻ được ủy quyền bán sản phẩm độc quyền."
      },
      {
        sentenceEn: "They will honor the winners at the ceremony.",
        sentenceVi: "Họ sẽ vinh danh người chiến thắng tại buổi lễ."
      },
      {
        sentenceEn: "The doctor will diagnose the problem.",
        sentenceVi: "Bác sĩ sẽ chẩn đoán vấn đề."
      },
      {
        sentenceEn: "This will enhance your skills.",
        sentenceVi: "Điều này sẽ nâng cao kỹ năng của bạn."
      },
      {
        sentenceEn: "Even if it rains we will go.",
        sentenceVi: "Cho dù trời mưa chúng tôi vẫn sẽ đi."
      },
      {
        sentenceEn: "She expressed her opinion clearly.",
        sentenceVi: "Cô ấy bày tỏ ý kiến rõ ràng."
      },
      {
        sentenceEn: "The entire team worked together.",
        sentenceVi: "Toàn bộ đội đã làm việc cùng nhau."
      },
      {
        sentenceEn: "The movie was very amusing.",
        sentenceVi: "Bộ phim rất thú vị."
      },
      {
        sentenceEn: "She is bound to succeed.",
        sentenceVi: "Cô ấy chắc chắn sẽ thành công."
      },
      {
        sentenceEn: "The meeting is postponed indefinitely.",
        sentenceVi: "Cuộc họp bị hoãn vô thời hạn."
      },
      {
        sentenceEn: "Marathon running requires great endurance.",
        sentenceVi: "Chạy marathon đòi hỏi sức bền bỉ lớn."
      },
      {
        sentenceEn: "I cannot tolerate rudeness.",
        sentenceVi: "Tôi không thể chịu đựng sự thô lỗ."
      }
    ]
  }
];