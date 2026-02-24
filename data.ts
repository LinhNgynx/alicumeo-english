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
    topic: 'Day 26-1: Transportation & Actions',
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
    topic: 'Day 27-1: Workplace Success',
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
    topic: 'Day 9-2: Communication & Character',
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
  },
  {
  id: 'l8',
  topic: 'Day 10-2: Business & Decision Making',
  focus: 'Conditionals (If/Had), Business & Retail Vocabulary',
  explanation: 'Learn conditional sentences (past unreal: "If S had V3, S would have V3" or "Had S V3, S would have V3") and professional business vocabulary.',
  explanationVi: 'Học câu điều kiện (quá khứ không có thật: "If S had V3, S would have V3" hoặc "Had S V3, S would have V3") và từ vựng kinh doanh chuyên nghiệp.',
  storyEn: [
    "The retail outlet obtained a business license to incorporate as a legal company.",
    "The mayor promised substantial support to the city council.",
    "They exhibit a vast assortment of reasonably priced products with limitless options.",
    "The initial display was modified; otherwise, it would have failed.",
    "Had the guard landed a hand, we would have proceeded into the store earlier.",
    "Even if the market changes, our cultural heritage items remain priceless artifacts.",
    "The work crew was fiercely determined to demonstrate they were worthy of recognition.",
    "Thus, the advanced forecast and statistical data helped us hold the team accountable.",
    "We are supposed to enroll in the program; we feel nervous but remain outwardly calm.",
    "The optimal strategy is better than a mediocre one with constructive suggestions nightly reviewed."
  ],
  storyVi: [
    "Cửa hàng bán lẻ đã có được giấy phép kinh doanh để thành lập công ty hợp pháp.",
    "Thị trưởng hứa hỗ trợ đáng kể cho hội đồng thành phố.",
    "Họ trưng bày đa dạng sản phẩm với giá phải chăng và lựa chọn không giới hạn.",
    "Màn trưng bày ban đầu đã được điều chỉnh; nếu không thì đã thất bại.",
    "Nếu người bảo vệ giúp đỡ, chúng tôi đã vào cửa hàng sớm hơn.",
    "Ngay cả khi thị trường thay đổi, các vật phẩm di sản văn hóa của chúng tôi vẫn là hiện vật vô giá.",
    "Đội công nhân quyết tâm cao độ để chứng minh họ xứng đáng được công nhận.",
    "Do đó, dự báo nâng cao và dữ liệu thống kê giúp chúng tôi buộc đội phải chịu trách nhiệm.",
    "Chúng tôi được cho là phải đăng ký chương trình; chúng tôi cảm thấy lo lắng nhưng tỏ ra bình thản.",
    "Chiến lược tối ưu tốt hơn chiến lược trung bình với các góp ý xây dựng được xem xét hằng đêm."
  ],
  vocabulary: [
    {
      word: "obtain",
      ipa: "/əbˈteɪn/",
      form: "verb",
      meaningEn: "To get or acquire something.",
      meaningVi: "Có được, đạt được",
      exampleEn: "We need to obtain a business license.",
      exampleVi: "Chúng ta cần có được giấy phép kinh doanh."
    },
    {
      word: "retail outlet",
      ipa: "/ˈriːteɪl ˈaʊtlet/",
      form: "noun phrase",
      meaningEn: "A store that sells goods directly to customers.",
      meaningVi: "Cửa hàng bán lẻ",
      exampleEn: "The retail outlet is open daily.",
      exampleVi: "Cửa hàng bán lẻ mở cửa hằng ngày."
    },
    {
      word: "business license",
      ipa: "/ˈbɪznəs ˈlaɪsns/",
      form: "noun phrase",
      meaningEn: "Official permission to operate a business.",
      meaningVi: "Giấy phép kinh doanh",
      exampleEn: "You must have a business license to operate legally.",
      exampleVi: "Bạn phải có giấy phép kinh doanh để hoạt động hợp pháp."
    },
    {
      word: "engage in",
      ipa: "/ɪnˈɡeɪdʒ ɪn/",
      form: "verb phrase",
      meaningEn: "To participate or take part in an activity.",
      meaningVi: "Tham gia vào",
      exampleEn: "They engage in community service projects.",
      exampleVi: "Họ tham gia vào các dự án phục vụ cộng đồng."
    },
    {
      word: "incorporate",
      ipa: "/ɪnˈkɔːpəreɪt/",
      form: "verb",
      meaningEn: "To form a legal corporation; to include.",
      meaningVi: "Thành lập công ty hợp pháp; kết hợp",
      exampleEn: "We decided to incorporate our business.",
      exampleVi: "Chúng tôi quyết định thành lập công ty hợp pháp."
    },
    {
      word: "promise",
      ipa: "/ˈprɒmɪs/",
      form: "verb/noun",
      meaningEn: "To give assurance; a commitment to do something.",
      meaningVi: "Hứa; lời hứa",
      exampleEn: "The mayor made a promise to improve education.",
      exampleVi: "Thị trưởng đã hứa cải thiện giáo dục."
    },
    {
      word: "substantial",
      ipa: "/səbˈstænʃl/",
      form: "adjective",
      meaningEn: "Large in amount, value, or importance.",
      meaningVi: "Đáng kể, quan trọng",
      exampleEn: "They received substantial funding.",
      exampleVi: "Họ đã nhận được nguồn vốn đáng kể."
    },
    {
      word: "mayor",
      ipa: "/meə/",
      form: "noun",
      meaningEn: "The elected head of a city government.",
      meaningVi: "Thị trưởng",
      exampleEn: "The mayor announced new policies today.",
      exampleVi: "Thị trưởng đã công bố chính sách mới hôm nay."
    },
    {
      word: "city council",
      ipa: "/ˈsɪti ˈkaʊnsl/",
      form: "noun phrase",
      meaningEn: "A group of elected officials who govern a city.",
      meaningVi: "Hội đồng thành phố",
      exampleEn: "The city council voted on the new budget.",
      exampleVi: "Hội đồng thành phố đã bỏ phiếu về ngân sách mới."
    },
    {
      word: "vast assortment of",
      ipa: "/vɑːst əˈsɔːtmənt ɒv/",
      form: "noun phrase",
      meaningEn: "A large variety of different things.",
      meaningVi: "Đa dạng, nhiều loại",
      exampleEn: "The store offers a vast assortment of products.",
      exampleVi: "Cửa hàng cung cấp nhiều loại sản phẩm đa dạng."
    },
    {
      word: "reasonably priced",
      ipa: "/ˈriːznəbli praɪst/",
      form: "adjective phrase",
      meaningEn: "Affordable; not too expensive.",
      meaningVi: "Giá phải chăng",
      exampleEn: "All items here are reasonably priced.",
      exampleVi: "Tất cả hàng hóa ở đây đều có giá phải chăng."
    },
    {
      word: "limitless",
      ipa: "/ˈlɪmɪtləs/",
      form: "adjective",
      meaningEn: "Without limits; unlimited.",
      meaningVi: "Không giới hạn",
      exampleEn: "The possibilities are limitless.",
      exampleVi: "Các khả năng là không giới hạn."
    },
    {
      word: "initial",
      ipa: "/ɪˈnɪʃl/",
      form: "adjective",
      meaningEn: "First; happening at the beginning.",
      meaningVi: "Ban đầu, đầu tiên",
      exampleEn: "The initial plan was modified later.",
      exampleVi: "Kế hoạch ban đầu đã được điều chỉnh sau này."
    },
    {
      word: "exhibit",
      ipa: "/ɪɡˈzɪbɪt/",
      form: "verb",
      meaningEn: "To display or show publicly.",
      meaningVi: "Trưng bày, thể hiện",
      exampleEn: "The museum exhibits ancient artifacts.",
      exampleVi: "Bảo tàng trưng bày các hiện vật cổ đại."
    },
    {
      word: "otherwise",
      ipa: "/ˈʌðəwaɪz/",
      form: "adverb",
      meaningEn: "In a different way; if not (used at the start of a sentence).",
      meaningVi: "Nếu không thì",
      exampleEn: "Hurry up; otherwise, we'll be late.",
      exampleVi: "Nhanh lên; nếu không chúng ta sẽ muộn."
    },
    {
      word: "even if",
      ipa: "/ˈiːvn ɪf/",
      form: "conjunction",
      meaningEn: "Despite the possibility that (introduces a hypothetical condition).",
      meaningVi: "Ngay cả khi",
      exampleEn: "Even if it rains, we will go hiking.",
      exampleVi: "Ngay cả khi trời mưa, chúng tôi vẫn sẽ đi leo núi."
    },
    {
      word: "proceed into",
      ipa: "/prəˈsiːd ˈɪntuː/",
      form: "verb phrase",
      meaningEn: "To move forward into a place or continue.",
      meaningVi: "Đi vào, tiến vào",
      exampleEn: "Please proceed into the conference room.",
      exampleVi: "Vui lòng đi vào phòng hội nghị."
    },
    {
      word: "guard",
      ipa: "/ɡɑːd/",
      form: "noun",
      meaningEn: "A person who protects or watches over something.",
      meaningVi: "Người bảo vệ",
      exampleEn: "The security guard checked our IDs.",
      exampleVi: "Người bảo vệ đã kiểm tra thẻ của chúng tôi."
    },
    {
      word: "lend a hand",
      ipa: "/lend ə hænd/",
      form: "idiom",
      meaningEn: "To help or assist someone.",
      meaningVi: "Giúp đỡ",
      exampleEn: "Can you lend a hand with this project?",
      exampleVi: "Bạn có thể giúp đỡ dự án này không?"
    },
    {
      word: "modified",
      ipa: "/ˈmɒdɪfaɪd/",
      form: "adjective",
      meaningEn: "Changed or adjusted slightly.",
      meaningVi: "Được điều chỉnh, thay đổi",
      exampleEn: "The modified design is better.",
      exampleVi: "Thiết kế đã được điều chỉnh tốt hơn."
    },
    {
      word: "cultural heritage",
      ipa: "/ˈkʌltʃərəl ˈherɪtɪdʒ/",
      form: "noun phrase",
      meaningEn: "The traditions, monuments, and artifacts of a culture.",
      meaningVi: "Di sản văn hóa",
      exampleEn: "We must protect our cultural heritage.",
      exampleVi: "Chúng ta phải bảo vệ di sản văn hóa của mình."
    },
    {
      word: "seek to preserve",
      ipa: "/siːk tuː prɪˈzɜːv/",
      form: "verb phrase",
      meaningEn: "To try to protect or maintain something.",
      meaningVi: "Tìm cách bảo tồn",
      exampleEn: "They seek to preserve historical buildings.",
      exampleVi: "Họ tìm cách bảo tồn các tòa nhà lịch sử."
    },
    {
      word: "priceless artifact",
      ipa: "/ˈpraɪsləs ˈɑːtɪfækt/",
      form: "noun phrase",
      meaningEn: "An object of great historical value that cannot be priced.",
      meaningVi: "Hiện vật vô giá",
      exampleEn: "The museum has many priceless artifacts.",
      exampleVi: "Bảo tàng có nhiều hiện vật vô giá."
    },
    {
      word: "dimension",
      ipa: "/daɪˈmenʃn/",
      form: "noun",
      meaningEn: "A measurable extent (length, width, height); an aspect.",
      meaningVi: "Chiều không gian, khía cạnh",
      exampleEn: "What are the dimensions of this room?",
      exampleVi: "Các kích thước của căn phòng này là gì?"
    },
    {
      word: "border",
      ipa: "/ˈbɔːdə/",
      form: "noun",
      meaningEn: "A line separating two areas, countries, or regions.",
      meaningVi: "Biên giới, ranh giới",
      exampleEn: "We crossed the border into Canada.",
      exampleVi: "Chúng tôi đã băng qua biên giới vào Canada."
    },
    {
      word: "expression",
      ipa: "/ɪkˈspreʃn/",
      form: "noun",
      meaningEn: "A look on someone's face; a phrase or saying.",
      meaningVi: "Biểu cảm, biểu hiện",
      exampleEn: "Her expression showed happiness.",
      exampleVi: "Biểu cảm của cô ấy thể hiện sự vui mừng."
    },
    {
      word: "work crew",
      ipa: "/wɜːk kruː/",
      form: "noun phrase",
      meaningEn: "A group of workers doing a job together.",
      meaningVi: "Đội công nhân",
      exampleEn: "The work crew finished the project on time.",
      exampleVi: "Đội công nhân đã hoàn thành dự án đúng hạn."
    },
    {
      word: "fiercely determined",
      ipa: "/ˈfɪəsli dɪˈtɜːmɪnd/",
      form: "adjective phrase",
      meaningEn: "Highly motivated with strong resolve.",
      meaningVi: "Quyết tâm cao độ",
      exampleEn: "She is fiercely determined to succeed.",
      exampleVi: "Cô ấy quyết tâm cao độ để thành công."
    },
    {
      word: "demonstrate",
      ipa: "/ˈdemənstreɪt/",
      form: "verb",
      meaningEn: "To show or prove something clearly.",
      meaningVi: "Chứng minh, trình diễn",
      exampleEn: "Let me demonstrate how this works.",
      exampleVi: "Để tôi trình diễn cách hoạt động của cái này."
    },
    {
      word: "be worthy of",
      ipa: "/bi ˈwɜːði ɒv/",
      form: "phrase",
      meaningEn: "To deserve something; to be good enough for.",
      meaningVi: "Xứng đáng với",
      exampleEn: "Your work is worthy of recognition.",
      exampleVi: "Công việc của bạn xứng đáng được công nhận."
    },
    {
      word: "thus",
      ipa: "/ðʌs/",
      form: "adverb",
      meaningEn: "Therefore; as a result; in this way.",
      meaningVi: "Do đó, vì vậy",
      exampleEn: "He studied hard; thus, he passed the exam.",
      exampleVi: "Anh ấy học chăm chỉ; do đó, anh ấy đã đậu kỳ thi."
    },
    {
      word: "advanced",
      ipa: "/ədˈvɑːnst/",
      form: "adjective",
      meaningEn: "At a higher level; sophisticated.",
      meaningVi: "Nâng cao, tiên tiến",
      exampleEn: "This is an advanced course in mathematics.",
      exampleVi: "Đây là khóa học toán nâng cao."
    },
    {
      word: "forecast",
      ipa: "/ˈfɔːkɑːst/",
      form: "verb/noun",
      meaningEn: "To predict future events or conditions.",
      meaningVi: "Dự báo",
      exampleEn: "The weather forecast predicts rain.",
      exampleVi: "Dự báo thời tiết dự đoán mưa."
    },
    {
      word: "statistical",
      ipa: "/stəˈtɪstɪkl/",
      form: "adjective",
      meaningEn: "Relating to statistics or numerical data.",
      meaningVi: "Thuộc thống kê",
      exampleEn: "We need statistical evidence for this claim.",
      exampleVi: "Chúng ta cần bằng chứng thống kê cho tuyên bố này."
    },
    {
      word: "hold accountable for",
      ipa: "/həʊld əˈkaʊntəbl fɔː/",
      form: "verb phrase",
      meaningEn: "To make someone responsible for something.",
      meaningVi: "Buộc phải chịu trách nhiệm",
      exampleEn: "We hold managers accountable for team performance.",
      exampleVi: "Chúng tôi buộc các quản lý phải chịu trách nhiệm về hiệu suất của đội."
    },
    {
      word: "be supposed to",
      ipa: "/bi səˈpəʊzd tuː/",
      form: "phrase",
      meaningEn: "To be expected or required to do something.",
      meaningVi: "Được cho là, được yêu cầu",
      exampleEn: "You are supposed to arrive at 9 AM.",
      exampleVi: "Bạn được yêu cầu đến lúc 9 giờ sáng."
    },
    {
      word: "nightly",
      ipa: "/ˈnaɪtli/",
      form: "adjective/adverb",
      meaningEn: "Happening every night.",
      meaningVi: "Hằng đêm, mỗi đêm",
      exampleEn: "We have nightly meetings to review progress.",
      exampleVi: "Chúng tôi có các cuộc họp hằng đêm để xem xét tiến độ."
    },
    {
      word: "optimal",
      ipa: "/ˈɒptɪməl/",
      form: "adjective",
      meaningEn: "Best or most favorable; ideal.",
      meaningVi: "Tối ưu",
      exampleEn: "This is the optimal solution to the problem.",
      exampleVi: "Đây là giải pháp tối ưu cho vấn đề."
    },
    {
      word: "mediocre",
      ipa: "/ˌmiːdiˈəʊkə/",
      form: "adjective",
      meaningEn: "Of average or moderate quality; not very good.",
      meaningVi: "Trung bình, tầm thường",
      exampleEn: "The food was mediocre at best.",
      exampleVi: "Đồ ăn chỉ ở mức trung bình."
    },
    {
      word: "constructive suggestion",
      ipa: "/kənˈstrʌktɪv səˈdʒestʃən/",
      form: "noun phrase",
      meaningEn: "A helpful recommendation meant to improve something.",
      meaningVi: "Góp ý xây dựng",
      exampleEn: "Thank you for your constructive suggestions.",
      exampleVi: "Cảm ơn bạn vì những góp ý xây dựng."
    },
    {
      word: "enroll in",
      ipa: "/ɪnˈrəʊl ɪn/",
      form: "verb phrase",
      meaningEn: "To register or sign up for a course or program.",
      meaningVi: "Ghi danh, đăng ký",
      exampleEn: "I want to enroll in a language course.",
      exampleVi: "Tôi muốn đăng ký một khóa học ngôn ngữ."
    },
    {
      word: "nervous",
      ipa: "/ˈnɜːvəs/",
      form: "adjective",
      meaningEn: "Worried or anxious about something.",
      meaningVi: "Lo lắng",
      exampleEn: "I feel nervous before exams.",
      exampleVi: "Tôi cảm thấy lo lắng trước kỳ thi."
    },
    {
      word: "outwardly calm",
      ipa: "/ˈaʊtwədli kɑːm/",
      form: "adjective phrase",
      meaningEn: "Appearing calm on the outside, regardless of inner feelings.",
      meaningVi: "Tỏ ra bình thản",
      exampleEn: "Despite her anxiety, she remained outwardly calm.",
      exampleVi: "Mặc dù lo lắng, cô ấy vẫn tỏ ra bình thản."
    }
  ],
  exercises: [
    {
      id: 'e8_1',
      type: 'fill',
      questionEn: "Had he studied harder, he ____ (pass) the exam.",
      questionVi: "Nếu anh ấy học chăm hơn, anh ấy ____ kỳ thi.",
      correctAnswer: "would have passed"
    },
    {
      id: 'e8_2',
      type: 'mcq',
      questionEn: "We need to ____ a business license before opening.",
      questionVi: "Chúng ta cần ____ giấy phép kinh doanh trước khi mở cửa.",
      options: ["obtain", "maintain", "reject"],
      correctAnswer: "obtain"
    },
    {
      id: 'e8_3',
      type: 'complete',
      questionEn: "The store offers products at ____ prices.",
      questionVi: "Cửa hàng cung cấp sản phẩm với giá ____.",
      correctAnswer: "reasonable"
    },
    {
      id: 'e8_4',
      type: 'meaning',
      questionEn: "Which phrase means 'to help someone'?",
      questionVi: "Cụm từ nào có nghĩa là 'giúp đỡ ai đó'?",
      options: ["Lend a hand", "Hold accountable", "Proceed into"],
      correctAnswer: "Lend a hand"
    },
    {
      id: 'e8_5',
      type: 'fill',
      questionEn: "The ____ promised to improve public services.",
      questionVi: "____ hứa cải thiện các dịch vụ công.",
      correctAnswer: "mayor"
    },
    {
      id: 'e8_6',
      type: 'mcq',
      questionEn: "____ we had more time, we would have finished the project.",
      questionVi: "____ chúng tôi có nhiều thời gian hơn, chúng tôi đã hoàn thành dự án.",
      options: ["If", "Had", "Both are correct"],
      correctAnswer: "Both are correct"
    },
    {
      id: 'e8_7',
      type: 'complete',
      questionEn: "The museum exhibits ____ artifacts from ancient civilizations.",
      questionVi: "Bảo tàng trưng bày các hiện vật ____ từ các nền văn minh cổ đại.",
      correctAnswer: "priceless"
    },
    {
      id: 'e8_8',
      type: 'fill',
      questionEn: "____ you don't hurry, we will miss the bus.",
      questionVi: "____ bạn không nhanh lên, chúng ta sẽ lỡ xe buýt.",
      correctAnswer: "If"
    },
    {
      id: 'e8_9',
      type: 'mcq',
      questionEn: "The team was ____ to win the championship.",
      questionVi: "Đội đã ____ để giành chức vô địch.",
      options: ["fiercely determined", "outwardly calm", "reasonably priced"],
      correctAnswer: "fiercely determined"
    },
    {
      id: 'e8_10',
      type: 'complete',
      questionEn: "We must seek to ____ our cultural heritage.",
      questionVi: "Chúng ta phải tìm cách ____ di sản văn hóa của mình.",
      correctAnswer: "preserve"
    },
    {
      id: 'e8_11',
      type: 'fill',
      questionEn: "The company decided to ____ as a legal entity.",
      questionVi: "Công ty quyết định ____ như một thực thể hợp pháp.",
      correctAnswer: "incorporate"
    },
    {
      id: 'e8_12',
      type: 'mcq',
      questionEn: "Which word means 'unlimited'?",
      questionVi: "Từ nào có nghĩa là 'không giới hạn'?",
      options: ["Limited", "Limitless", "Initial"],
      correctAnswer: "Limitless"
    },
    {
      id: 'e8_13',
      type: 'complete',
      questionEn: "We hold employees ____ for their performance.",
      questionVi: "Chúng tôi buộc nhân viên phải ____ về hiệu suất của họ.",
      correctAnswer: "accountable"
    },
    {
      id: 'e8_14',
      type: 'fill',
      questionEn: "The plan was ____; otherwise, it would have failed.",
      questionVi: "Kế hoạch đã được ____; nếu không nó đã thất bại.",
      correctAnswer: "modified"
    },
    {
      id: 'e8_15',
      type: 'mcq',
      questionEn: "What does 'optimal' mean?",
      questionVi: "'Optimal' có nghĩa là gì?",
      options: ["Average", "Best or most favorable", "Worst"],
      correctAnswer: "Best or most favorable"
    },
    {
      id: 'e8_16',
      type: 'complete',
      questionEn: "Students must ____ in the course by Friday.",
      questionVi: "Sinh viên phải ____ khóa học trước thứ Sáu.",
      correctAnswer: "enroll"
    },
    {
      id: 'e8_17',
      type: 'fill',
      questionEn: "The ____ council approved the new regulations.",
      questionVi: "Hội đồng ____ đã phê duyệt các quy định mới.",
      correctAnswer: "city"
    },
    {
      id: 'e8_18',
      type: 'mcq',
      questionEn: "____ if the weather is bad, we will continue with the event.",
      questionVi: "____ thời tiết xấu, chúng tôi vẫn tiếp tục sự kiện.",
      options: ["Although", "Even if", "Despite"],
      correctAnswer: "Even if"
    },
    {
      id: 'e8_19',
      type: 'complete',
      questionEn: "The store has a ____ assortment of products.",
      questionVi: "Cửa hàng có ____ các sản phẩm đa dạng.",
      correctAnswer: "vast"
    },
    {
      id: 'e8_20',
      type: 'fill',
      questionEn: "She is ____ to arrive at 8 AM tomorrow.",
      questionVi: "Cô ấy ____ đến lúc 8 giờ sáng ngày mai.",
      correctAnswer: "supposed"
    },
    {
      id: 'e8_21',
      type: 'mcq',
      questionEn: "The opposite of 'mediocre' is ____.",
      questionVi: "Trái nghĩa của 'mediocre' là ____.",
      options: ["average", "excellent", "poor"],
      correctAnswer: "excellent"
    },
    {
      id: 'e8_22',
      type: 'complete',
      questionEn: "We use ____ data to make informed decisions.",
      questionVi: "Chúng tôi sử dụng dữ liệu ____ để đưa ra quyết định có cơ sở.",
      correctAnswer: "statistical"
    },
    {
      id: 'e8_23',
      type: 'fill',
      questionEn: "The work ____ completed the construction ahead of schedule.",
      questionVi: "____ công nhân đã hoàn thành công trình trước thời hạn.",
      correctAnswer: "crew"
    },
    {
      id: 'e8_24',
      type: 'mcq',
      questionEn: "What does 'demonstrate' mean?",
      questionVi: "'Demonstrate' có nghĩa là gì?",
      options: ["To hide", "To show or prove", "To cancel"],
      correctAnswer: "To show or prove"
    },
    {
      id: 'e8_25',
      type: 'complete',
      questionEn: "Your hard work is ____ of recognition.",
      questionVi: "Công việc chăm chỉ của bạn ____ được công nhận.",
      correctAnswer: "worthy"
    },
    {
      id: 'e8_26',
      type: 'fill',
      questionEn: "He felt nervous but remained ____ calm during the presentation.",
      questionVi: "Anh ấy cảm thấy lo lắng nhưng vẫn tỏ ra ____ trong buổi thuyết trình.",
      correctAnswer: "outwardly"
    },
    {
      id: 'e8_27',
      type: 'mcq',
      questionEn: "The ____ design turned out to be better than expected.",
      questionVi: "Thiết kế ____ hóa ra tốt hơn dự kiến.",
      options: ["initial", "final", "modified"],
      correctAnswer: "initial"
    },
    {
      id: 'e8_28',
      type: 'complete',
      questionEn: "They made a ____ contribution to the project.",
      questionVi: "Họ đã có đóng góp ____ cho dự án.",
      correctAnswer: "substantial"
    },
    {
      id: 'e8_29',
      type: 'fill',
      questionEn: "We review performance data ____.",
      questionVi: "Chúng tôi xem xét dữ liệu hiệu suất ____.",
      correctAnswer: "nightly"
    },
    {
      id: 'e8_30',
      type: 'meaning',
      questionEn: "What is a 'retail outlet'?",
      questionVi: "'Retail outlet' là gì?",
      options: ["A factory", "A store selling to customers", "An office"],
      correctAnswer: "A store selling to customers"
    }
  ],
  rearrangeExercises: [
    {
      sentenceEn: "The retail outlet obtained a business license.",
      sentenceVi: "Cửa hàng bán lẻ đã có được giấy phép kinh doanh."
    },
    {
      sentenceEn: "The mayor promised substantial support.",
      sentenceVi: "Thị trưởng hứa hỗ trợ đáng kể."
    },
    {
      sentenceEn: "We exhibit a vast assortment of products.",
      sentenceVi: "Chúng tôi trưng bày đa dạng sản phẩm."
    },
    {
      sentenceEn: "Had the guard helped, we would have entered earlier.",
      sentenceVi: "Nếu người bảo vệ giúp đỡ, chúng tôi đã vào sớm hơn."
    },
    {
      sentenceEn: "The company decided to incorporate legally.",
      sentenceVi: "Công ty quyết định thành lập hợp pháp."
    },
    {
      sentenceEn: "The initial plan was modified.",
      sentenceVi: "Kế hoạch ban đầu đã được điều chỉnh."
    },
    {
      sentenceEn: "We seek to preserve cultural heritage.",
      sentenceVi: "Chúng tôi tìm cách bảo tồn di sản văn hóa."
    },
    {
      sentenceEn: "The work crew was fiercely determined.",
      sentenceVi: "Đội công nhân quyết tâm cao độ."
    },
    {
      sentenceEn: "Thus, the forecast helped us plan.",
      sentenceVi: "Do đó, dự báo đã giúp chúng tôi lập kế hoạch."
    },
    {
      sentenceEn: "We hold managers accountable for results.",
      sentenceVi: "Chúng tôi buộc các quản lý chịu trách nhiệm về kết quả."
    },
    {
      sentenceEn: "Students are supposed to enroll by Friday.",
      sentenceVi: "Sinh viên được yêu cầu đăng ký trước thứ Sáu."
    },
    {
      sentenceEn: "The optimal strategy is better than mediocre ones.",
      sentenceVi: "Chiến lược tối ưu tốt hơn các chiến lược trung bình."
    },
    {
      sentenceEn: "She remained outwardly calm despite feeling nervous.",
      sentenceVi: "Cô ấy vẫn tỏ ra bình thản mặc dù cảm thấy lo lắng."
    },
    {
      sentenceEn: "Even if prices rise, we will continue.",
      sentenceVi: "Ngay cả khi giá tăng, chúng tôi vẫn sẽ tiếp tục."
    },
    {
      sentenceEn: "Otherwise, the project would have failed.",
      sentenceVi: "Nếu không, dự án đã thất bại."
    },
    {
      sentenceEn: "The museum exhibits priceless artifacts.",
      sentenceVi: "Bảo tàng trưng bày các hiện vật vô giá."
    },
    {
      sentenceEn: "We need constructive suggestions to improve.",
      sentenceVi: "Chúng tôi cần góp ý xây dựng để cải thiện."
    },
    {
      sentenceEn: "The city council approved the new budget.",
      sentenceVi: "Hội đồng thành phố đã phê duyệt ngân sách mới."
    }
  ]
},
{
  id: 'l9',
  topic: 'Day 12-2: Business Operations & Problem Solving',
  focus: 'Professional Vocabulary & Synonyms',
  explanation: 'Learn essential business terminology, decision-making vocabulary, and professional synonyms for workplace communication.',
  explanationVi: 'Học từ vựng kinh doanh thiết yếu, từ vựng ra quyết định và từ đồng nghĩa chuyên nghiệp cho giao tiếp nơi làm việc.',
  storyEn: [
    "The board members review the approval process for new proposals.",
    "They occasionally revise the organized stack of documents on their desks.",
    "Despite being optimistic about growth, some remain pessimistic about market conditions.",
    "We suspect the building has badly deteriorated and needs renovation.",
    "The company can be salvaged if we address the flaws immediately.",
    "The brake system requires inspection as part of the safety protocol.",
    "The time it takes to complete renovation will depend on resources.",
    "Our facility will undergo renovation next quarter.",
    "Management is not yet aware of the defects in the new product line.",
    "A stable workforce and good employee retention are crucial for success.",
    "The team was reluctant to change the established procedures."
  ],
  storyVi: [
    "Các thành viên hội đồng quản trị xem xét quy trình phê duyệt cho các đề xuất mới.",
    "Họ thỉnh thoảng xem lại chồng tài liệu được sắp gọn gàng trên bàn làm việc.",
    "Mặc dù tích cực về tăng trưởng, một số vẫn bi quan về điều kiện thị trường.",
    "Chúng tôi nghi ngờ tòa nhà đã xuống cấp nghiêm trọng và cần cải tạo.",
    "Công ty có thể được cứu vãn nếu chúng ta giải quyết các lỗi ngay lập tức.",
    "Hệ thống phanh cần kiểm tra như một phần của quy trình an toàn.",
    "Thời gian hoàn thành việc cải tạo sẽ phụ thuộc vào nguồn lực.",
    "Cơ sở của chúng tôi sẽ trải qua cải tạo vào quý tới.",
    "Ban quản lý chưa biết về các lỗi trong dòng sản phẩm mới.",
    "Lực lượng lao động ổn định và giữ chân nhân viên tốt là rất quan trọng cho sự thành công.",
    "Đội ngũ do dự thay đổi các quy trình đã thiết lập."
  ],
  vocabulary: [
    {
      word: "approval process",
      ipa: "/əˈpruːvəl ˈprəʊses/",
      form: "noun phrase",
      meaningEn: "The formal procedure for getting authorization or permission.",
      meaningVi: "Quy trình phê duyệt",
      exampleEn: "The approval process takes about two weeks.",
      exampleVi: "Quy trình phê duyệt mất khoảng hai tuần."
    },
    {
      word: "proposal",
      ipa: "/prəˈpəʊzl/",
      form: "noun",
      meaningEn: "A formal suggestion or plan put forward for consideration.",
      meaningVi: "Đề xuất",
      exampleEn: "We submitted a proposal for the new project.",
      exampleVi: "Chúng tôi đã nộp đề xuất cho dự án mới."
    },
    {
      word: "suggestion",
      ipa: "/səˈdʒestʃən/",
      form: "noun",
      meaningEn: "An idea or plan put forward for consideration (synonym of proposal).",
      meaningVi: "Đề xuất, gợi ý",
      exampleEn: "Thank you for your helpful suggestion.",
      exampleVi: "Cảm ơn bạn vì đề xuất hữu ích."
    },
    {
      word: "occasionally revise",
      ipa: "/əˈkeɪʒnəli rɪˈvaɪz/",
      form: "verb phrase",
      meaningEn: "To update or review something from time to time.",
      meaningVi: "Thỉnh thoảng xem lại, chỉnh sửa",
      exampleEn: "We occasionally revise our company policies.",
      exampleVi: "Chúng tôi thỉnh thoảng xem lại các chính sách công ty."
    },
    {
      word: "organized stack",
      ipa: "/ˈɔːɡənaɪzd stæk/",
      form: "noun phrase",
      meaningEn: "A neat pile of items arranged in order.",
      meaningVi: "Một chồng được sắp gọn gàng",
      exampleEn: "Keep your files in an organized stack.",
      exampleVi: "Giữ các tệp của bạn trong một chồng được sắp gọn gàng."
    },
    {
      word: "optimistic",
      ipa: "/ˌɒptɪˈmɪstɪk/",
      form: "adjective",
      meaningEn: "Hopeful and confident about the future; positive.",
      meaningVi: "Tích cực, lạc quan",
      exampleEn: "We are optimistic about the company's future.",
      exampleVi: "Chúng tôi tích cực về tương lai của công ty."
    },
    {
      word: "pessimistic",
      ipa: "/ˌpesɪˈmɪstɪk/",
      form: "adjective",
      meaningEn: "Tending to see the worst aspect of things; negative.",
      meaningVi: "Bi quan",
      exampleEn: "Don't be so pessimistic about the outcome.",
      exampleVi: "Đừng quá bi quan về kết quả."
    },
    {
      word: "board members",
      ipa: "/bɔːd ˈmembəz/",
      form: "noun phrase",
      meaningEn: "People elected or appointed to the governing body of an organization.",
      meaningVi: "Thành viên hội đồng quản trị",
      exampleEn: "The board members voted on the merger.",
      exampleVi: "Các thành viên hội đồng quản trị đã bỏ phiếu về việc sáp nhập."
    },
    {
      word: "suspect",
      ipa: "/səˈspekt/",
      form: "verb",
      meaningEn: "To believe something to be true without proof; to doubt.",
      meaningVi: "Nghi ngờ",
      exampleEn: "I suspect there may be some errors in the report.",
      exampleVi: "Tôi nghi ngờ có thể có một số lỗi trong báo cáo."
    },
    {
      word: "doubt",
      ipa: "/daʊt/",
      form: "verb/noun",
      meaningEn: "To feel uncertain about something (synonym of suspect).",
      meaningVi: "Nghi ngờ",
      exampleEn: "I doubt he will arrive on time.",
      exampleVi: "Tôi nghi ngờ anh ấy sẽ đến đúng giờ."
    },
    {
      word: "badly deteriorated",
      ipa: "/ˈbædli dɪˈtɪəriəreɪtɪd/",
      form: "adjective phrase",
      meaningEn: "Severely worsened in condition or quality.",
      meaningVi: "Xuống cấp nghiêm trọng",
      exampleEn: "The building has badly deteriorated over the years.",
      exampleVi: "Tòa nhà đã xuống cấp nghiêm trọng qua nhiều năm."
    },
    {
      word: "be salvaged",
      ipa: "/bi ˈsælvɪdʒd/",
      form: "verb phrase (passive)",
      meaningEn: "To be rescued or saved from loss or destruction.",
      meaningVi: "Được cứu vãn",
      exampleEn: "The project can still be salvaged if we act quickly.",
      exampleVi: "Dự án vẫn có thể được cứu vãn nếu chúng ta hành động nhanh."
    },
    {
      word: "brake",
      ipa: "/breɪk/",
      form: "noun",
      meaningEn: "A device for slowing or stopping a vehicle.",
      meaningVi: "Phanh xe",
      exampleEn: "The brake system needs maintenance.",
      exampleVi: "Hệ thống phanh cần bảo trì."
    },
    {
      word: "the time sb takes to do sth",
      ipa: "/ðə taɪm ... teɪks tuː duː .../",
      form: "phrase",
      meaningEn: "The duration required for someone to complete an action.",
      meaningVi: "Thời gian ai đó mất để làm gì",
      exampleEn: "The time it takes to finish depends on experience.",
      exampleVi: "Thời gian mất để hoàn thành phụ thuộc vào kinh nghiệm."
    },
    {
      word: "how long it takes to do sth",
      ipa: "/haʊ lɒŋ ɪt teɪks tuː duː .../",
      form: "phrase",
      meaningEn: "The duration needed to complete something (synonym phrase).",
      meaningVi: "Mất bao lâu để làm gì",
      exampleEn: "How long does it take to process the application?",
      exampleVi: "Mất bao lâu để xử lý đơn đăng ký?"
    },
    {
      word: "undergo renovation",
      ipa: "/ˌʌndəˈɡəʊ ˌrenəˈveɪʃn/",
      form: "verb phrase",
      meaningEn: "To experience repair and improvement work.",
      meaningVi: "Trải qua cải tạo",
      exampleEn: "The office will undergo renovation this summer.",
      exampleVi: "Văn phòng sẽ trải qua cải tạo vào mùa hè này."
    },
    {
      word: "not yet aware of",
      ipa: "/nɒt jet əˈweə ɒv/",
      form: "phrase",
      meaningEn: "Not having knowledge about something at this time.",
      meaningVi: "Chưa biết về",
      exampleEn: "They are not yet aware of the changes.",
      exampleVi: "Họ chưa biết về những thay đổi."
    },
    {
      word: "flaw",
      ipa: "/flɔː/",
      form: "noun",
      meaningEn: "A defect or imperfection; a fault.",
      meaningVi: "Lỗi, khuyết điểm",
      exampleEn: "We found a major flaw in the design.",
      exampleVi: "Chúng tôi tìm thấy một lỗi lớn trong thiết kế."
    },
    {
      word: "defect",
      ipa: "/ˈdiːfekt/",
      form: "noun",
      meaningEn: "A shortcoming or imperfection (synonym of flaw).",
      meaningVi: "Lỗi kỹ thuật, khuyết tật",
      exampleEn: "The product has several defects.",
      exampleVi: "Sản phẩm có một số lỗi kỹ thuật."
    },
    {
      word: "fault",
      ipa: "/fɔːlt/",
      form: "noun",
      meaningEn: "A defect or mistake (synonym of flaw and defect).",
      meaningVi: "Lỗi",
      exampleEn: "It's not your fault that the system crashed.",
      exampleVi: "Không phải lỗi của bạn khi hệ thống gặp sự cố."
    },
    {
      word: "stable workforce",
      ipa: "/ˈsteɪbl ˈwɜːkfɔːs/",
      form: "noun phrase",
      meaningEn: "A consistent and reliable group of employees.",
      meaningVi: "Lực lượng lao động ổn định",
      exampleEn: "A stable workforce leads to better productivity.",
      exampleVi: "Lực lượng lao động ổn định dẫn đến năng suất tốt hơn."
    },
    {
      word: "consistent staff",
      ipa: "/kənˈsɪstənt stɑːf/",
      form: "noun phrase",
      meaningEn: "Employees who remain with the company over time (synonym).",
      meaningVi: "Đội ngũ nhân viên ổn định",
      exampleEn: "We value our consistent staff members.",
      exampleVi: "Chúng tôi đánh giá cao các thành viên nhân viên ổn định."
    },
    {
      word: "employee retention",
      ipa: "/ɪmˈplɔɪiː rɪˈtenʃn/",
      form: "noun phrase",
      meaningEn: "The ability to keep employees working for the company.",
      meaningVi: "Giữ chân nhân viên",
      exampleEn: "Employee retention is a key priority for HR.",
      exampleVi: "Giữ chân nhân viên là ưu tiên chính của phòng nhân sự."
    },
    {
      word: "as well as",
      ipa: "/əz wel æz/",
      form: "conjunction",
      meaningEn: "In addition to; and also.",
      meaningVi: "Cũng như",
      exampleEn: "We offer training as well as development programs.",
      exampleVi: "Chúng tôi cung cấp đào tạo cũng như các chương trình phát triển."
    },
    {
      word: "be reluctant to",
      ipa: "/bi rɪˈlʌktənt tuː/",
      form: "phrase",
      meaningEn: "To be unwilling or hesitant to do something.",
      meaningVi: "Do dự, miễn cưỡng",
      exampleEn: "Employees are reluctant to accept the new policy.",
      exampleVi: "Nhân viên do dự chấp nhận chính sách mới."
    },
    {
      word: "hesitate to",
      ipa: "/ˈhezɪteɪt tuː/",
      form: "verb phrase",
      meaningEn: "To pause before doing something (synonym of be reluctant to).",
      meaningVi: "Do dự",
      exampleEn: "Don't hesitate to ask for help.",
      exampleVi: "Đừng do dự để yêu cầu giúp đỡ."
    },
    {
      word: "unwilling to",
      ipa: "/ʌnˈwɪlɪŋ tuː/",
      form: "adjective phrase",
      meaningEn: "Not ready or wanting to do something (synonym).",
      meaningVi: "Không sẵn lòng",
      exampleEn: "They are unwilling to compromise.",
      exampleVi: "Họ không sẵn lòng thỏa hiệp."
    }
  ],
  exercises: [
    {
      id: 'e9_1',
      type: 'fill',
      questionEn: "The ____ process usually takes two weeks.",
      questionVi: "Quy trình ____ thường mất hai tuần.",
      correctAnswer: "approval"
    },
    {
      id: 'e9_2',
      type: 'mcq',
      questionEn: "We need to submit a ____ for the new project.",
      questionVi: "Chúng ta cần nộp một ____ cho dự án mới.",
      options: ["proposal", "approval", "renovation"],
      correctAnswer: "proposal"
    },
    {
      id: 'e9_3',
      type: 'complete',
      questionEn: "We ____ revise our policies every year.",
      questionVi: "Chúng tôi ____ xem lại chính sách hằng năm.",
      correctAnswer: "occasionally"
    },
    {
      id: 'e9_4',
      type: 'meaning',
      questionEn: "Which word means 'hopeful about the future'?",
      questionVi: "Từ nào có nghĩa là 'hy vọng về tương lai'?",
      options: ["Pessimistic", "Optimistic", "Reluctant"],
      correctAnswer: "Optimistic"
    },
    {
      id: 'e9_5',
      type: 'fill',
      questionEn: "The ____ members will vote on the decision tomorrow.",
      questionVi: "Các thành viên ____ sẽ bỏ phiếu về quyết định vào ngày mai.",
      correctAnswer: "board"
    },
    {
      id: 'e9_6',
      type: 'mcq',
      questionEn: "I ____ there might be some errors in the report.",
      questionVi: "Tôi ____ có thể có một số lỗi trong báo cáo.",
      options: ["suspect", "suggest", "salvage"],
      correctAnswer: "suspect"
    },
    {
      id: 'e9_7',
      type: 'complete',
      questionEn: "The building has badly ____.",
      questionVi: "Tòa nhà đã ____ nghiêm trọng.",
      correctAnswer: "deteriorated"
    },
    {
      id: 'e9_8',
      type: 'fill',
      questionEn: "The project can still ____ salvaged if we act now.",
      questionVi: "Dự án vẫn có thể ____ cứu vãn nếu chúng ta hành động ngay.",
      correctAnswer: "be"
    },
    {
      id: 'e9_9',
      type: 'mcq',
      questionEn: "What is a synonym for 'flaw'?",
      questionVi: "Từ đồng nghĩa của 'flaw' là gì?",
      options: ["Perfect", "Defect", "Quality"],
      correctAnswer: "Defect"
    },
    {
      id: 'e9_10',
      type: 'complete',
      questionEn: "The office will undergo ____ next month.",
      questionVi: "Văn phòng sẽ trải qua ____ tháng tới.",
      correctAnswer: "renovation"
    },
    {
      id: 'e9_11',
      type: 'fill',
      questionEn: "They are not ____ aware of the changes.",
      questionVi: "Họ chưa ____ về những thay đổi.",
      correctAnswer: "yet"
    },
    {
      id: 'e9_12',
      type: 'mcq',
      questionEn: "A ____ workforce is important for company success.",
      questionVi: "Lực lượng lao động ____ quan trọng cho sự thành công của công ty.",
      options: ["stable", "unstable", "temporary"],
      correctAnswer: "stable"
    },
    {
      id: 'e9_13',
      type: 'complete',
      questionEn: "Employee ____ is a key priority for HR.",
      questionVi: "____ nhân viên là ưu tiên chính của phòng nhân sự.",
      correctAnswer: "retention"
    },
    {
      id: 'e9_14',
      type: 'fill',
      questionEn: "Employees are ____ to accept the new changes.",
      questionVi: "Nhân viên ____ chấp nhận những thay đổi mới.",
      correctAnswer: "reluctant"
    },
    {
      id: 'e9_15',
      type: 'mcq',
      questionEn: "What does 'as well as' mean?",
      questionVi: "'As well as' có nghĩa là gì?",
      options: ["Instead of", "In addition to", "Because of"],
      correctAnswer: "In addition to"
    },
    {
      id: 'e9_16',
      type: 'complete',
      questionEn: "Don't ____ to ask for help when you need it.",
      questionVi: "Đừng ____ yêu cầu giúp đỡ khi bạn cần.",
      correctAnswer: "hesitate"
    },
    {
      id: 'e9_17',
      type: 'fill',
      questionEn: "The ____ system needs to be checked regularly.",
      questionVi: "Hệ thống ____ cần được kiểm tra thường xuyên.",
      correctAnswer: "brake"
    },
    {
      id: 'e9_18',
      type: 'mcq',
      questionEn: "The opposite of 'optimistic' is ____.",
      questionVi: "Trái nghĩa của 'optimistic' là ____.",
      options: ["positive", "pessimistic", "organized"],
      correctAnswer: "pessimistic"
    },
    {
      id: 'e9_19',
      type: 'complete',
      questionEn: "Keep your documents in an organized ____.",
      questionVi: "Giữ tài liệu của bạn trong một ____ được sắp gọn gàng.",
      correctAnswer: "stack"
    },
    {
      id: 'e9_20',
      type: 'fill',
      questionEn: "How long does it ____ to complete the training?",
      questionVi: "Mất bao lâu để ____ khóa đào tạo?",
      correctAnswer: "take"
    },
    {
      id: 'e9_21',
      type: 'meaning',
      questionEn: "Which phrase means 'to update from time to time'?",
      questionVi: "Cụm từ nào có nghĩa là 'cập nhật theo thời gian'?",
      options: ["Occasionally revise", "Badly deteriorate", "Undergo renovation"],
      correctAnswer: "Occasionally revise"
    },
    {
      id: 'e9_22',
      type: 'mcq',
      questionEn: "We found a major ____ in the software.",
      questionVi: "Chúng tôi tìm thấy một ____ lớn trong phần mềm.",
      options: ["proposal", "flaw", "board"],
      correctAnswer: "flaw"
    },
    {
      id: 'e9_23',
      type: 'fill',
      questionEn: "The team is ____ to change their approach.",
      questionVi: "Đội ngũ ____ thay đổi cách tiếp cận của họ.",
      correctAnswer: "unwilling"
    },
    {
      id: 'e9_24',
      type: 'complete',
      questionEn: "A 'suggestion' is another word for a ____.",
      questionVi: "'Suggestion' là từ khác của ____.",
      correctAnswer: "proposal"
    },
    {
      id: 'e9_25',
      type: 'mcq',
      questionEn: "What do we call people on the governing body of an organization?",
      questionVi: "Chúng ta gọi những người trong cơ quan quản lý của một tổ chức là gì?",
      options: ["Board members", "Work crew", "City council"],
      correctAnswer: "Board members"
    }
  ],
  rearrangeExercises: [
    {
      sentenceEn: "The approval process takes two weeks.",
      sentenceVi: "Quy trình phê duyệt mất hai tuần."
    },
    {
      sentenceEn: "We occasionally revise our policies.",
      sentenceVi: "Chúng tôi thỉnh thoảng xem lại chính sách."
    },
    {
      sentenceEn: "Board members voted on the proposal.",
      sentenceVi: "Các thành viên hội đồng quản trị bỏ phiếu về đề xuất."
    },
    {
      sentenceEn: "I suspect there are some errors.",
      sentenceVi: "Tôi nghi ngờ có một số lỗi."
    },
    {
      sentenceEn: "The building has badly deteriorated.",
      sentenceVi: "Tòa nhà đã xuống cấp nghiêm trọng."
    },
    {
      sentenceEn: "The project can be salvaged.",
      sentenceVi: "Dự án có thể được cứu vãn."
    },
    {
      sentenceEn: "The office will undergo renovation.",
      sentenceVi: "Văn phòng sẽ trải qua cải tạo."
    },
    {
      sentenceEn: "They are not yet aware of the changes.",
      sentenceVi: "Họ chưa biết về những thay đổi."
    },
    {
      sentenceEn: "We found a flaw in the design.",
      sentenceVi: "Chúng tôi tìm thấy lỗi trong thiết kế."
    },
    {
      sentenceEn: "A stable workforce improves productivity.",
      sentenceVi: "Lực lượng lao động ổn định cải thiện năng suất."
    },
    {
      sentenceEn: "Employee retention is very important.",
      sentenceVi: "Giữ chân nhân viên rất quan trọng."
    },
    {
      sentenceEn: "They are reluctant to change procedures.",
      sentenceVi: "Họ do dự thay đổi quy trình."
    },
    {
      sentenceEn: "We are optimistic about the future.",
      sentenceVi: "Chúng tôi tích cực về tương lai."
    },
    {
      sentenceEn: "Don't be pessimistic about the results.",
      sentenceVi: "Đừng bi quan về kết quả."
    },
    {
      sentenceEn: "Keep files in an organized stack.",
      sentenceVi: "Giữ các tệp trong một chồng được sắp gọn gàng."
    },
    {
      sentenceEn: "The brake system needs maintenance.",
      sentenceVi: "Hệ thống phanh cần bảo trì."
    }
  ]
},
{
  id: 'l10',
  topic: 'Day 13-2: Customer Service & Workplace Communication',
  focus: 'Conditional Phrases, Service Vocabulary & Professional Expressions',
  explanation: 'Learn customer service vocabulary, conditional expressions (on condition that, as opposed to), and professional workplace communication terms.',
  explanationVi: 'Học từ vựng dịch vụ khách hàng, cụm điều kiện (on condition that, as opposed to), và thuật ngữ giao tiếp chuyên nghiệp tại nơi làm việc.',
  storyEn: [
    "The flight attendant helped passengers retrieve their luggage from overhead compartments.",
    "Nearly all customers were in favor of the new service policy.",
    "In contrast to the previous system, the new process eliminates unnecessary extra work.",
    "The sales associate served customers in a professional manner.",
    "The entrepreneur prefers an aisle seat as opposed to a window seat when traveling.",
    "On condition that the plan is followed precisely, we will achieve our goals.",
    "A minority of employees were unsure of what caused the system delay.",
    "The team discussed why certain procedures cause unnecessary complications.",
    "Attendants must handle complaints in a calm manner to maintain customer satisfaction."
  ],
  storyVi: [
    "Tiếp viên hàng không đã giúp hành khách lấy hành lý từ ngăn trên đầu.",
    "Gần như tất cả khách hàng đều ủng hộ chính sách dịch vụ mới.",
    "Trái ngược với hệ thống trước đây, quy trình mới loại bỏ công việc thừa thãi không cần thiết.",
    "Nhân viên bán hàng phục vụ khách hàng một cách chuyên nghiệp.",
    "Doanh nhân thích ghế cạnh lối đi thay vì ghế cạnh cửa sổ khi đi du lịch.",
    "Với điều kiện là kế hoạch được thực hiện chính xác, chúng ta sẽ đạt được mục tiêu.",
    "Thiểu số nhân viên không chắc chắn về điều gì gây ra sự chậm trễ của hệ thống.",
    "Đội ngũ thảo luận tại sao một số quy trình gây ra những phức tạp không cần thiết.",
    "Nhân viên phục vụ phải xử lý khiếu nại một cách bình tĩnh để duy trì sự hài lòng của khách hàng."
  ],
  vocabulary: [
    {
      word: "retrieve",
      ipa: "/rɪˈtriːv/",
      form: "verb",
      meaningEn: "To get back or recover something; to fetch.",
      meaningVi: "Lấy lại, thu hồi lại",
      exampleEn: "Please retrieve your belongings from the locker.",
      exampleVi: "Vui lòng lấy lại đồ của bạn từ tủ khóa."
    },
    {
      word: "attendant",
      ipa: "/əˈtendənt/",
      form: "noun",
      meaningEn: "A person employed to provide service to customers or passengers.",
      meaningVi: "Người phục vụ, nhân viên hỗ trợ",
      exampleEn: "The parking attendant will help you find a spot.",
      exampleVi: "Nhân viên bãi đỗ xe sẽ giúp bạn tìm chỗ."
    },
    {
      word: "flight attendant",
      ipa: "/flaɪt əˈtendənt/",
      form: "noun phrase",
      meaningEn: "A person who serves passengers on an aircraft.",
      meaningVi: "Tiếp viên hàng không",
      exampleEn: "The flight attendant demonstrated safety procedures.",
      exampleVi: "Tiếp viên hàng không đã trình diễn các quy trình an toàn."
    },
    {
      word: "nearly",
      ipa: "/ˈnɪəli/",
      form: "adverb",
      meaningEn: "Almost; very close to; not quite.",
      meaningVi: "Hầu như, gần như",
      exampleEn: "Nearly all employees attended the meeting.",
      exampleVi: "Hầu như tất cả nhân viên đã tham dự cuộc họp."
    },
    {
      word: "nearly all",
      ipa: "/ˈnɪəli ɔːl/",
      form: "phrase",
      meaningEn: "Almost everyone or everything in a group.",
      meaningVi: "Gần như tất cả",
      exampleEn: "Nearly all customers were satisfied with the service.",
      exampleVi: "Gần như tất cả khách hàng đều hài lòng với dịch vụ."
    },
    {
      word: "minority",
      ipa: "/maɪˈnɒrəti/",
      form: "noun",
      meaningEn: "A smaller number or part; less than half.",
      meaningVi: "Thiểu số, số ít",
      exampleEn: "Only a minority of people disagreed with the decision.",
      exampleVi: "Chỉ thiểu số người không đồng ý với quyết định."
    },
    {
      word: "in favor of",
      ipa: "/ɪn ˈfeɪvər ɒv/",
      form: "phrase",
      meaningEn: "In support of; approving of something.",
      meaningVi: "Ủng hộ, tán thành",
      exampleEn: "Most voters were in favor of the new policy.",
      exampleVi: "Hầu hết cử tri đều ủng hộ chính sách mới."
    },
    {
      word: "entrepreneur",
      ipa: "/ˌɒntrəprəˈnɜː/",
      form: "noun",
      meaningEn: "A person who starts and runs a business.",
      meaningVi: "Doanh nhân, chủ doanh nghiệp",
      exampleEn: "She is a successful entrepreneur in the tech industry.",
      exampleVi: "Cô ấy là một doanh nhân thành công trong ngành công nghệ."
    },
    {
      word: "sales associate",
      ipa: "/seɪlz əˈsəʊʃiət/",
      form: "noun phrase",
      meaningEn: "An employee who helps customers and sells products.",
      meaningVi: "Nhân viên bán hàng",
      exampleEn: "The sales associate provided excellent customer service.",
      exampleVi: "Nhân viên bán hàng đã cung cấp dịch vụ khách hàng xuất sắc."
    },
    {
      word: "manner",
      ipa: "/ˈmænə/",
      form: "noun",
      meaningEn: "The way something is done or happens; behavior or attitude.",
      meaningVi: "Cách thức, thái độ, cử chỉ",
      exampleEn: "She spoke in a calm and professional manner.",
      exampleVi: "Cô ấy nói một cách bình tĩnh và chuyên nghiệp."
    },
    {
      word: "unnecessary extra work",
      ipa: "/ʌnˈnesəsəri ˈekstrə wɜːk/",
      form: "noun phrase",
      meaningEn: "Additional tasks that are not needed; redundant effort.",
      meaningVi: "Công việc thừa thãi không cần thiết",
      exampleEn: "The new system eliminates unnecessary extra work.",
      exampleVi: "Hệ thống mới loại bỏ công việc thừa thãi không cần thiết."
    },
    {
      word: "followed precisely",
      ipa: "/ˈfɒləʊd prɪˈsaɪsli/",
      form: "verb phrase",
      meaningEn: "Done exactly as instructed or planned.",
      meaningVi: "Được thực hiện chính xác",
      exampleEn: "The instructions must be followed precisely.",
      exampleVi: "Hướng dẫn phải được thực hiện chính xác."
    },
    {
      word: "aisle seat",
      ipa: "/aɪl siːt/",
      form: "noun phrase",
      meaningEn: "A seat next to the passage between rows (on plane or bus).",
      meaningVi: "Ghế cạnh lối đi",
      exampleEn: "I prefer an aisle seat for easy access.",
      exampleVi: "Tôi thích ghế cạnh lối đi để dễ di chuyển."
    },
    {
      word: "window seat",
      ipa: "/ˈwɪndəʊ siːt/",
      form: "noun phrase",
      meaningEn: "A seat next to the window on a plane, train, or bus.",
      meaningVi: "Ghế cạnh cửa sổ",
      exampleEn: "Children usually want the window seat to see outside.",
      exampleVi: "Trẻ em thường muốn ghế cạnh cửa sổ để nhìn ra ngoài."
    },
    {
      word: "in contrast to",
      ipa: "/ɪn ˈkɒntrɑːst tuː/",
      form: "phrase",
      meaningEn: "Showing a difference when compared with something.",
      meaningVi: "Trái ngược với",
      exampleEn: "In contrast to last year, sales have increased.",
      exampleVi: "Trái ngược với năm ngoái, doanh số đã tăng."
    },
    {
      word: "as opposed to",
      ipa: "/æz əˈpəʊzd tuː/",
      form: "phrase",
      meaningEn: "In contrast with; rather than; instead of.",
      meaningVi: "Thay vì, đối lập với",
      exampleEn: "We chose quality as opposed to quantity.",
      exampleVi: "Chúng tôi chọn chất lượng thay vì số lượng."
    },
    {
      word: "on condition that",
      ipa: "/ɒn kənˈdɪʃn ðæt/",
      form: "phrase",
      meaningEn: "Only if; provided that; with the requirement that.",
      meaningVi: "Với điều kiện là",
      exampleEn: "I will help you on condition that you finish your homework first.",
      exampleVi: "Tôi sẽ giúp bạn với điều kiện là bạn hoàn thành bài tập trước."
    },
    {
      word: "what + S + V",
      ipa: "/wɒt .../",
      form: "phrase structure",
      meaningEn: "Used to introduce a noun clause about something unknown.",
      meaningVi: "Điều mà (cấu trúc mệnh đề danh từ)",
      exampleEn: "What you said was very helpful.",
      exampleVi: "Điều bạn nói rất hữu ích."
    },
    {
      word: "why + S + V",
      ipa: "/waɪ .../",
      form: "phrase structure",
      meaningEn: "Used to introduce a noun clause about reasons.",
      meaningVi: "Lý do tại sao (cấu trúc mệnh đề danh từ)",
      exampleEn: "I understand why you are upset.",
      exampleVi: "Tôi hiểu lý do tại sao bạn khó chịu."
    },
    {
      word: "unsure of",
      ipa: "/ʌnˈʃɔːr ɒv/",
      form: "adjective phrase",
      meaningEn: "Not confident about; uncertain about something.",
      meaningVi: "Không chắc chắn về",
      exampleEn: "I am unsure of the correct answer.",
      exampleVi: "Tôi không chắc chắn về câu trả lời đúng."
    },
    {
      word: "cause something to do",
      ipa: "/kɔːz ˈsʌmθɪŋ tuː duː/",
      form: "verb pattern",
      meaningEn: "To make something happen; to bring about a result.",
      meaningVi: "Gây ra việc gì, khiến cái gì đó bị làm sao",
      exampleEn: "The error caused the system to crash.",
      exampleVi: "Lỗi đã khiến hệ thống bị sập."
    },
    {
      word: "overhead compartment",
      ipa: "/ˌəʊvəˈhed kəmˈpɑːtmənt/",
      form: "noun phrase",
      meaningEn: "Storage space above seats on an airplane.",
      meaningVi: "Ngăn hành lý trên đầu (máy bay)",
      exampleEn: "Please store your bag in the overhead compartment.",
      exampleVi: "Vui lòng cất túi của bạn vào ngăn trên đầu."
    },
    {
      word: "passenger",
      ipa: "/ˈpæsɪndʒə/",
      form: "noun",
      meaningEn: "A person traveling in a vehicle, plane, or ship.",
      meaningVi: "Hành khách",
      exampleEn: "All passengers must fasten their seatbelts.",
      exampleVi: "Tất cả hành khách phải thắt dây an toàn."
    },
    {
      word: "luggage",
      ipa: "/ˈlʌɡɪdʒ/",
      form: "noun",
      meaningEn: "Bags and suitcases used for traveling.",
      meaningVi: "Hành lý",
      exampleEn: "You can collect your luggage at baggage claim.",
      exampleVi: "Bạn có thể lấy hành lý ở khu vực nhận hành lý."
    },
    {
      word: "eliminate",
      ipa: "/ɪˈlɪmɪneɪt/",
      form: "verb",
      meaningEn: "To remove or get rid of something completely.",
      meaningVi: "Loại bỏ",
      exampleEn: "We need to eliminate unnecessary steps in the process.",
      exampleVi: "Chúng ta cần loại bỏ các bước không cần thiết trong quy trình."
    },
    {
      word: "complaint",
      ipa: "/kəmˈpleɪnt/",
      form: "noun",
      meaningEn: "A statement expressing dissatisfaction about something.",
      meaningVi: "Khiếu nại",
      exampleEn: "We received several complaints about the service.",
      exampleVi: "Chúng tôi nhận được nhiều khiếu nại về dịch vụ."
    },
    {
      word: "maintain",
      ipa: "/meɪnˈteɪn/",
      form: "verb",
      meaningEn: "To keep something in good condition; to preserve.",
      meaningVi: "Duy trì",
      exampleEn: "We must maintain high standards of customer service.",
      exampleVi: "Chúng ta phải duy trì tiêu chuẩn dịch vụ khách hàng cao."
    },
    {
      word: "customer satisfaction",
      ipa: "/ˈkʌstəmə ˌsætɪsˈfækʃn/",
      form: "noun phrase",
      meaningEn: "The degree to which customers are pleased with services or products.",
      meaningVi: "Sự hài lòng của khách hàng",
      exampleEn: "Customer satisfaction is our top priority.",
      exampleVi: "Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi."
    },
    {
      word: "system delay",
      ipa: "/ˈsɪstəm dɪˈleɪ/",
      form: "noun phrase",
      meaningEn: "A slowdown or pause in a system's operation.",
      meaningVi: "Sự chậm trễ của hệ thống",
      exampleEn: "The system delay affected all transactions.",
      exampleVi: "Sự chậm trễ của hệ thống đã ảnh hưởng đến tất cả giao dịch."
    }
  ],
  exercises: [
    {
      id: 'e10_1',
      type: 'fill',
      questionEn: "Please ____ your luggage from the overhead compartment.",
      questionVi: "Vui lòng ____ hành lý của bạn từ ngăn trên đầu.",
      correctAnswer: "retrieve"
    },
    {
      id: 'e10_2',
      type: 'mcq',
      questionEn: "A ____ helps serve passengers on an airplane.",
      questionVi: "____ giúp phục vụ hành khách trên máy bay.",
      options: ["flight attendant", "entrepreneur", "sales associate"],
      correctAnswer: "flight attendant"
    },
    {
      id: 'e10_3',
      type: 'complete',
      questionEn: "____ all customers were satisfied with the service.",
      questionVi: "____ tất cả khách hàng đều hài lòng với dịch vụ.",
      correctAnswer: "Nearly"
    },
    {
      id: 'e10_4',
      type: 'meaning',
      questionEn: "What does 'in favor of' mean?",
      questionVi: "'In favor of' có nghĩa là gì?",
      options: ["Against", "In support of", "Unsure about"],
      correctAnswer: "In support of"
    },
    {
      id: 'e10_5',
      type: 'fill',
      questionEn: "The ____ provided excellent customer service.",
      questionVi: "____ đã cung cấp dịch vụ khách hàng xuất sắc.",
      correctAnswer: "sales associate"
    },
    {
      id: 'e10_6',
      type: 'mcq',
      questionEn: "She spoke in a professional ____.",
      questionVi: "Cô ấy nói một cách chuyên nghiệp ____.",
      options: ["manner", "minority", "delay"],
      correctAnswer: "manner"
    },
    {
      id: 'e10_7',
      type: 'complete',
      questionEn: "The new system eliminates ____ extra work.",
      questionVi: "Hệ thống mới loại bỏ công việc thừa thãi ____.",
      correctAnswer: "unnecessary"
    },
    {
      id: 'e10_8',
      type: 'fill',
      questionEn: "I prefer an ____ seat ____ opposed to a window seat.",
      questionVi: "Tôi thích ghế cạnh lối đi ____ vì ghế cạnh cửa sổ.",
      correctAnswer: "as"
    },
    {
      id: 'e10_9',
      type: 'mcq',
      questionEn: "____ contrast to last year, sales have increased.",
      questionVi: "____ ngược với năm ngoái, doanh số đã tăng.",
      options: ["As", "In", "On"],
      correctAnswer: "In"
    },
    {
      id: 'e10_10',
      type: 'complete',
      questionEn: "You can go ____ condition that you finish your work.",
      questionVi: "Bạn có thể đi ____ điều kiện là bạn hoàn thành công việc.",
      correctAnswer: "on"
    },
    {
      id: 'e10_11',
      type: 'fill',
      questionEn: "Only a ____ of people disagreed with the decision.",
      questionVi: "Chỉ ____ người không đồng ý với quyết định.",
      correctAnswer: "minority"
    },
    {
      id: 'e10_12',
      type: 'mcq',
      questionEn: "She is a successful ____ in the tech industry.",
      questionVi: "Cô ấy là một ____ thành công trong ngành công nghệ.",
      options: ["attendant", "entrepreneur", "passenger"],
      correctAnswer: "entrepreneur"
    },
    {
      id: 'e10_13',
      type: 'complete',
      questionEn: "I am ____ of the correct answer.",
      questionVi: "Tôi không ____ về câu trả lời đúng.",
      correctAnswer: "unsure"
    },
    {
      id: 'e10_14',
      type: 'fill',
      questionEn: "The error caused the system ____ crash.",
      questionVi: "Lỗi đã khiến hệ thống ____ sập.",
      correctAnswer: "to"
    },
    {
      id: 'e10_15',
      type: 'mcq',
      questionEn: "What is the opposite of 'nearly all'?",
      questionVi: "Trái nghĩa của 'nearly all' là gì?",
      options: ["Majority", "Minority", "Everyone"],
      correctAnswer: "Minority"
    },
    {
      id: 'e10_16',
      type: 'complete',
      questionEn: "The instructions must be followed ____.",
      questionVi: "Hướng dẫn phải được thực hiện ____.",
      correctAnswer: "precisely"
    },
    {
      id: 'e10_17',
      type: 'fill',
      questionEn: "We must ____ high standards of customer service.",
      questionVi: "Chúng ta phải ____ tiêu chuẩn dịch vụ khách hàng cao.",
      correctAnswer: "maintain"
    },
    {
      id: 'e10_18',
      type: 'mcq',
      questionEn: "All ____ must fasten their seatbelts.",
      questionVi: "Tất cả ____ phải thắt dây an toàn.",
      options: ["passengers", "entrepreneurs", "associates"],
      correctAnswer: "passengers"
    },
    {
      id: 'e10_19',
      type: 'complete',
      questionEn: "We received several ____ about the service.",
      questionVi: "Chúng tôi nhận được nhiều ____ về dịch vụ.",
      correctAnswer: "complaints"
    },
    {
      id: 'e10_20',
      type: 'fill',
      questionEn: "Customer ____ is our top priority.",
      questionVi: "____ của khách hàng là ưu tiên hàng đầu của chúng tôi.",
      correctAnswer: "satisfaction"
    },
    {
      id: 'e10_21',
      type: 'meaning',
      questionEn: "Which phrase means 'rather than' or 'instead of'?",
      questionVi: "Cụm từ nào có nghĩa là 'thay vì' hoặc 'đối lập với'?",
      options: ["In favor of", "As opposed to", "On condition that"],
      correctAnswer: "As opposed to"
    },
    {
      id: 'e10_22',
      type: 'mcq',
      questionEn: "The ____ affected all transactions.",
      questionVi: "____ đã ảnh hưởng đến tất cả giao dịch.",
      options: ["system delay", "aisle seat", "overhead compartment"],
      correctAnswer: "system delay"
    },
    {
      id: 'e10_23',
      type: 'fill',
      questionEn: "I understand ____ you are upset about the situation.",
      questionVi: "Tôi hiểu ____ bạn khó chịu về tình huống.",
      correctAnswer: "why"
    },
    {
      id: 'e10_24',
      type: 'complete',
      questionEn: "Store your bag in the overhead ____.",
      questionVi: "Cất túi của bạn vào ____ trên đầu.",
      correctAnswer: "compartment"
    },
    {
      id: 'e10_25',
      type: 'mcq',
      questionEn: "What does 'eliminate' mean?",
      questionVi: "'Eliminate' có nghĩa là gì?",
      options: ["To add", "To remove completely", "To maintain"],
      correctAnswer: "To remove completely"
    },
    {
      id: 'e10_26',
      type: 'fill',
      questionEn: "You can collect your ____ at baggage claim.",
      questionVi: "Bạn có thể lấy ____ ở khu vực nhận hành lý.",
      correctAnswer: "luggage"
    },
    {
      id: 'e10_27',
      type: 'complete',
      questionEn: "____ you said was very helpful.",
      questionVi: "____ bạn nói rất hữu ích.",
      correctAnswer: "What"
    },
    {
      id: 'e10_28',
      type: 'mcq',
      questionEn: "Attendants must handle complaints in a calm ____.",
      questionVi: "Nhân viên phục vụ phải xử lý khiếu nại một cách bình tĩnh ____.",
      options: ["minority", "manner", "delay"],
      correctAnswer: "manner"
    },
    {
      id: 'e10_29',
      type: 'fill',
      questionEn: "I will agree ____ condition that the plan is followed precisely.",
      questionVi: "Tôi sẽ đồng ý ____ điều kiện là kế hoạch được thực hiện chính xác.",
      correctAnswer: "on"
    },
    {
      id: 'e10_30',
      type: 'meaning',
      questionEn: "What is an 'aisle seat'?",
      questionVi: "'Aisle seat' là gì?",
      options: ["A seat next to the window", "A seat next to the passage", "A seat in the back"],
      correctAnswer: "A seat next to the passage"
    }
  ],
  rearrangeExercises: [
    {
      sentenceEn: "The flight attendant helped retrieve luggage.",
      sentenceVi: "Tiếp viên hàng không đã giúp lấy hành lý."
    },
    {
      sentenceEn: "Nearly all customers were satisfied.",
      sentenceVi: "Gần như tất cả khách hàng đều hài lòng."
    },
    {
      sentenceEn: "Most people are in favor of the new policy.",
      sentenceVi: "Hầu hết mọi người đều ủng hộ chính sách mới."
    },
    {
      sentenceEn: "The sales associate serves customers professionally.",
      sentenceVi: "Nhân viên bán hàng phục vụ khách hàng chuyên nghiệp."
    },
    {
      sentenceEn: "The entrepreneur prefers an aisle seat.",
      sentenceVi: "Doanh nhân thích ghế cạnh lối đi."
    },
    {
      sentenceEn: "In contrast to last year, sales increased.",
      sentenceVi: "Trái ngược với năm ngoái, doanh số tăng."
    },
    {
      sentenceEn: "We chose quality as opposed to quantity.",
      sentenceVi: "Chúng tôi chọn chất lượng thay vì số lượng."
    },
    {
      sentenceEn: "On condition that you finish first.",
      sentenceVi: "Với điều kiện là bạn hoàn thành trước."
    },
    {
      sentenceEn: "I am unsure of the answer.",
      sentenceVi: "Tôi không chắc chắn về câu trả lời."
    },
    {
      sentenceEn: "The error caused the system to crash.",
      sentenceVi: "Lỗi đã khiến hệ thống bị sập."
    },
    {
      sentenceEn: "The new system eliminates unnecessary work.",
      sentenceVi: "Hệ thống mới loại bỏ công việc không cần thiết."
    },
    {
      sentenceEn: "Instructions must be followed precisely.",
      sentenceVi: "Hướng dẫn phải được thực hiện chính xác."
    },
    {
      sentenceEn: "Only a minority of people disagreed.",
      sentenceVi: "Chỉ thiểu số người không đồng ý."
    },
    {
      sentenceEn: "We must maintain customer satisfaction.",
      sentenceVi: "Chúng ta phải duy trì sự hài lòng của khách hàng."
    },
    {
      sentenceEn: "Handle complaints in a calm manner.",
      sentenceVi: "Xử lý khiếu nại một cách bình tĩnh."
    },
    {
      sentenceEn: "All passengers must fasten seatbelts.",
      sentenceVi: "Tất cả hành khách phải thắt dây an toàn."
    },
    {
      sentenceEn: "Store your bag in the overhead compartment.",
      sentenceVi: "Cất túi vào ngăn trên đầu."
    },
    {
      sentenceEn: "I understand why you are upset.",
      sentenceVi: "Tôi hiểu tại sao bạn khó chịu."
    }
  ]
},
{
    id: 'l11',
    topic: 'Feb 20: Benefits, Finance & Grammar Structures',
    focus: 'Synonyms, Conditional Structures & Workplace Benefits Vocabulary',
    explanation: 'Learn workplace benefits vocabulary, financial terms, and key grammar structures including "Reported to be", "have yet to", "however = no matter how", and synonym groups.',
    explanationVi: 'Học từ vựng phúc lợi nơi làm việc, thuật ngữ tài chính và các cấu trúc ngữ pháp quan trọng bao gồm "Reported to be", "have yet to", "however = no matter how" và nhóm từ đồng nghĩa.',
    storyEn: [
      "The corporation offers dental coverage and a pension plan to all eligible employees.",
      "Earlier this morning, the finance minister announced new regulations on college tuition.",
      "The transport official persuasively presented the landscaping project to the board.",
      "Employees can undergo training to remain accessible and responsive to clients.",
      "A bulk purchase discount is available; hence, we should proceed with the bulk order.",
      "More and more staff have yet to recover their earnings after the deductions.",
      "The government grant is reported to be accessible to any eligible applicant.",
      "However intense the negotiations, we will never compromise on regulations.",
      "No matter how many times we ask, proximity to the office remains a frequent concern.",
      "Otherwise, the corporation would struggle to maintain its revenue targets."
    ],
    storyVi: [
      "Tập đoàn cung cấp bảo hiểm nha khoa và kế hoạch hưu trí cho tất cả nhân viên đủ điều kiện.",
      "Sáng sớm hôm nay, bộ trưởng tài chính đã công bố quy định mới về học phí đại học.",
      "Quan chức giao thông đã thuyết phục trình bày dự án thi công sân vườn trước hội đồng.",
      "Nhân viên có thể trải qua đào tạo để duy trì khả năng tiếp cận và phản hồi tốt với khách hàng.",
      "Mức giảm giá mua nhiều có sẵn; do đó, chúng ta nên tiếp tục với đơn hàng số lượng lớn.",
      "Ngày càng nhiều nhân viên vẫn chưa lấy lại thu nhập sau các khoản khấu trừ.",
      "Tài trợ của chính phủ được cho là dễ tiếp cận với bất kỳ người nộp đơn đủ điều kiện nào.",
      "Cho dù cuộc đàm phán có mãnh liệt đến đâu, chúng tôi sẽ không bao giờ nhượng bộ về quy định.",
      "Cho dù chúng tôi hỏi bao nhiêu lần, khoảng cách gần với văn phòng vẫn là mối lo ngại thường xuyên.",
      "Nếu không, tập đoàn sẽ gặp khó khăn để duy trì mục tiêu doanh thu."
    ],
    vocabulary: [
      {
        word: "dental coverage",
        ipa: "/ˈdentl ˈkʌvərɪdʒ/",
        form: "noun phrase",
        meaningEn: "Health insurance that covers dental care expenses.",
        meaningVi: "Bảo hiểm nha khoa",
        exampleEn: "The company provides dental coverage for all full-time employees.",
        exampleVi: "Công ty cung cấp bảo hiểm nha khoa cho tất cả nhân viên toàn thời gian."
      },
      {
        word: "pension plan",
        ipa: "/ˈpenʃn plæn/",
        form: "noun phrase",
        meaningEn: "A retirement savings program funded by employer and/or employee.",
        meaningVi: "Kế hoạch hưu trí",
        exampleEn: "She enrolled in the company pension plan on her first day.",
        exampleVi: "Cô ấy đăng ký kế hoạch hưu trí của công ty vào ngày đầu tiên."
      },
      {
        word: "earlier this morning",
        ipa: "/ˈɜːliə ðɪs ˈmɔːnɪŋ/",
        form: "phrase",
        meaningEn: "At some point this morning; same meaning as 'this morning'.",
        meaningVi: "Sáng sớm hôm nay (= this morning)",
        exampleEn: "Earlier this morning, the manager called a meeting.",
        exampleVi: "Sáng sớm hôm nay, người quản lý đã triệu tập một cuộc họp."
      },
      {
        word: "transport official",
        ipa: "/ˈtrænspɔːt əˈfɪʃl/",
        form: "noun phrase",
        meaningEn: "A government officer responsible for transportation matters.",
        meaningVi: "Quan chức giao thông",
        exampleEn: "Transport officials announced new road regulations today.",
        exampleVi: "Quan chức giao thông đã công bố các quy định đường bộ mới hôm nay."
      },
      {
        word: "persuasively",
        ipa: "/pəˈsweɪsɪvli/",
        form: "adverb",
        meaningEn: "In a way that effectively convinces someone.",
        meaningVi: "Một cách thuyết phục",
        exampleEn: "She argued persuasively for the new policy.",
        exampleVi: "Cô ấy lập luận một cách thuyết phục cho chính sách mới."
      },
      {
        word: "bulk purchase discount",
        ipa: "/bʌlk ˈpɜːtʃəs ˈdɪskaʊnt/",
        form: "noun phrase",
        meaningEn: "A price reduction offered when buying large quantities.",
        meaningVi: "Mức giảm giá dành cho khách hàng mua nhiều",
        exampleEn: "The supplier offers a bulk purchase discount for orders over 100 units.",
        exampleVi: "Nhà cung cấp cung cấp mức giảm giá cho đơn hàng trên 100 đơn vị."
      },
      {
        word: "eligible for",
        ipa: "/ˈelɪdʒəbl fɔː/",
        form: "adjective phrase",
        meaningEn: "Meeting the necessary requirements. (= qualified for = entitled to)",
        meaningVi: "Đủ điều kiện (= qualified for = entitled to)",
        exampleEn: "Employees with two years of service are eligible for the bonus.",
        exampleVi: "Nhân viên có hai năm thâm niên đủ điều kiện nhận thưởng."
      },
      {
        word: "deduct",
        ipa: "/dɪˈdʌkt/",
        form: "verb",
        meaningEn: "To subtract an amount from a total. (= subtract)",
        meaningVi: "Khấu trừ (= subtract)",
        exampleEn: "The company will deduct taxes from your monthly paycheck.",
        exampleVi: "Công ty sẽ khấu trừ thuế từ phiếu lương hàng tháng của bạn."
      },
      {
        word: "more and more",
        ipa: "/mɔː ænd mɔː/",
        form: "phrase",
        meaningEn: "An increasing amount or number; progressively greater.",
        meaningVi: "Ngày càng nhiều",
        exampleEn: "More and more companies are adopting remote work policies.",
        exampleVi: "Ngày càng nhiều công ty đang áp dụng chính sách làm việc từ xa."
      },
      {
        word: "undergo",
        ipa: "/ˌʌndəˈɡəʊ/",
        form: "verb",
        meaningEn: "To go through or experience something. (= experience)",
        meaningVi: "Trải qua (= experience)",
        exampleEn: "The system will undergo maintenance this weekend.",
        exampleVi: "Hệ thống sẽ trải qua bảo trì cuối tuần này."
      },
      {
        word: "otherwise",
        ipa: "/ˈʌðəwaɪz/",
        form: "adverb",
        meaningEn: "If not; in a different situation.",
        meaningVi: "Nếu không thì",
        exampleEn: "Submit the form today; otherwise, you will miss the deadline.",
        exampleVi: "Nộp biểu mẫu hôm nay; nếu không bạn sẽ bỏ lỡ thời hạn."
      },
      {
        word: "hence",
        ipa: "/hens/",
        form: "adverb",
        meaningEn: "Therefore; for this reason. Used after a semicolon. (= so = therefore)",
        meaningVi: "Do đó, vì vậy (dùng sau dấu chấm phẩy ; = so = therefore)",
        exampleEn: "The data was unclear; hence, we requested a new report.",
        exampleVi: "Dữ liệu không rõ ràng; do đó, chúng tôi yêu cầu một báo cáo mới."
      },
      {
        word: "however",
        ipa: "/haʊˈevə/",
        form: "conjunction/adverb",
        meaningEn: "No matter how; despite that. (= no matter how)",
        meaningVi: "Cho dù, dù thế nào (= no matter how)",
        exampleEn: "However difficult the task, we will complete it.",
        exampleVi: "Cho dù nhiệm vụ khó khăn đến đâu, chúng tôi sẽ hoàn thành nó."
      },
      {
        word: "never ... however many times",
        ipa: "/ˈnevə ... haʊˈevə meni taɪmz/",
        form: "grammar structure",
        meaningEn: "No matter how many times something happens, the result does not change.",
        meaningVi: "Dù bao nhiêu lần... cũng không bao giờ (= no matter how many times)",
        exampleEn: "Never give up, however many times you fail.",
        exampleVi: "Đừng bao giờ bỏ cuộc, dù bạn thất bại bao nhiêu lần."
      },
      {
        word: "responsive",
        ipa: "/rɪˈspɒnsɪv/",
        form: "adjective",
        meaningEn: "Reacting quickly and positively; meeting needs effectively.",
        meaningVi: "Phản hồi nhanh; đáp ứng tốt",
        exampleEn: "Our customer service team is highly responsive to complaints.",
        exampleVi: "Đội dịch vụ khách hàng của chúng tôi phản hồi rất nhanh với các khiếu nại."
      },
      {
        word: "landscaping project",
        ipa: "/ˈlændskeɪpɪŋ ˈprɒdʒekt/",
        form: "noun phrase",
        meaningEn: "A project involving the design and improvement of outdoor spaces.",
        meaningVi: "Dự án thi công sân vườn",
        exampleEn: "The landscaping project will take three months to complete.",
        exampleVi: "Dự án thi công sân vườn sẽ mất ba tháng để hoàn thành."
      },
      {
        word: "intense",
        ipa: "/ɪnˈtens/",
        form: "adjective",
        meaningEn: "Very strong, extreme, or forceful.",
        meaningVi: "Mãnh liệt, căng thẳng",
        exampleEn: "The negotiations were intense but productive.",
        exampleVi: "Các cuộc đàm phán rất căng thẳng nhưng hiệu quả."
      },
      {
        word: "finance minister",
        ipa: "/ˈfaɪnæns ˈmɪnɪstə/",
        form: "noun phrase",
        meaningEn: "A government official responsible for financial policy.",
        meaningVi: "Bộ trưởng tài chính",
        exampleEn: "The finance minister announced tax reforms this morning.",
        exampleVi: "Bộ trưởng tài chính đã công bố cải cách thuế sáng nay."
      },
      {
        word: "corporation",
        ipa: "/ˌkɔːpəˈreɪʃn/",
        form: "noun",
        meaningEn: "A large company or group of companies.",
        meaningVi: "Tập đoàn",
        exampleEn: "The corporation operates in over 50 countries.",
        exampleVi: "Tập đoàn hoạt động ở hơn 50 quốc gia."
      },
      {
        word: "recover",
        ipa: "/rɪˈkʌvə/",
        form: "verb",
        meaningEn: "To get back something lost; to return to a normal state.",
        meaningVi: "Lấy lại, phục hồi",
        exampleEn: "The market is slowly recovering from the recession.",
        exampleVi: "Thị trường đang dần phục hồi sau suy thoái."
      },
      {
        word: "regulation",
        ipa: "/ˌreɡjuˈleɪʃn/",
        form: "noun",
        meaningEn: "An official rule or law. (= rule = law)",
        meaningVi: "Quy định (= rule = law)",
        exampleEn: "All employees must comply with workplace safety regulations.",
        exampleVi: "Tất cả nhân viên phải tuân thủ các quy định an toàn nơi làm việc."
      },
      {
        word: "earnings",
        ipa: "/ˈɜːnɪŋz/",
        form: "noun",
        meaningEn: "Money received as wages or profit. (= income = revenue)",
        meaningVi: "Thu nhập, doanh thu (= income = revenue)",
        exampleEn: "The company's earnings increased by 15% this quarter.",
        exampleVi: "Thu nhập của công ty tăng 15% trong quý này."
      },
      {
        word: "government grant",
        ipa: "/ˈɡʌvənmənt ɡrɑːnt/",
        form: "noun phrase",
        meaningEn: "Money provided by the government for a specific purpose.",
        meaningVi: "Tài trợ của chính phủ",
        exampleEn: "They received a government grant to fund their research.",
        exampleVi: "Họ đã nhận được tài trợ của chính phủ để tài trợ cho nghiên cứu."
      },
      {
        word: "college tuition",
        ipa: "/ˈkɒlɪdʒ tjuˈɪʃn/",
        form: "noun phrase",
        meaningEn: "The fee charged for university or college education.",
        meaningVi: "Học phí đại học",
        exampleEn: "College tuition has increased significantly over the past decade.",
        exampleVi: "Học phí đại học đã tăng đáng kể trong thập kỷ qua."
      },
      {
        word: "accessible",
        ipa: "/əkˈsesəbl/",
        form: "adjective",
        meaningEn: "Easy to reach, enter, or use. 'Be accessible' = to be available/reachable.",
        meaningVi: "Dễ tiếp cận; 'be accessible' = có thể tiếp cận được",
        exampleEn: "The new platform makes financial tools accessible to everyone.",
        exampleVi: "Nền tảng mới giúp các công cụ tài chính dễ tiếp cận với mọi người."
      },
      {
        word: "have yet to",
        ipa: "/hæv jet tuː/",
        form: "phrase",
        meaningEn: "Have not done something up to now; still have not.",
        meaningVi: "Vẫn chưa",
        exampleEn: "We have yet to receive the signed contract.",
        exampleVi: "Chúng tôi vẫn chưa nhận được hợp đồng đã ký."
      },
      {
        word: "proximity to",
        ipa: "/prɒkˈsɪməti tuː/",
        form: "noun phrase",
        meaningEn: "Nearness in distance or time to something.",
        meaningVi: "Khoảng cách gần, sự gần gũi",
        exampleEn: "The office's proximity to the train station is convenient.",
        exampleVi: "Vị trí gần ga tàu của văn phòng rất thuận tiện."
      },
      {
        word: "frequent",
        ipa: "/ˈfriːkwənt/",
        form: "adjective",
        meaningEn: "Happening often; visiting a place regularly.",
        meaningVi: "Thường xuyên lui tới",
        exampleEn: "She is a frequent visitor to the downtown branch.",
        exampleVi: "Cô ấy thường xuyên lui tới chi nhánh trung tâm thành phố."
      },
      {
        word: "proceed with",
        ipa: "/prəˈsiːd wɪð/",
        form: "verb phrase",
        meaningEn: "To continue with a plan or action. (= continue)",
        meaningVi: "Tiếp tục (= continue)",
        exampleEn: "We will proceed with the project as planned.",
        exampleVi: "Chúng tôi sẽ tiếp tục dự án như kế hoạch."
      },
      {
        word: "Reported to be + adj/N",
        ipa: "/rɪˈpɔːtɪd tuː biː/",
        form: "grammar structure",
        meaningEn: "Used to indicate something is claimed or said to be true (passive relative clause structure).",
        meaningVi: "Được cho là... (cấu trúc mệnh đề quan hệ bị động)",
        exampleEn: "The new system is reported to be highly efficient.",
        exampleVi: "Hệ thống mới được cho là rất hiệu quả."
      }
    ],
    exercises: [
      {
        id: 'e11_1',
        type: 'fill',
        questionEn: "All full-time staff are ____ for dental coverage.",
        questionVi: "Tất cả nhân viên toàn thời gian đủ ____ để nhận bảo hiểm nha khoa.",
        correctAnswer: "eligible"
      },
      {
        id: 'e11_2',
        type: 'mcq',
        questionEn: "The company will ____ taxes from your salary each month.",
        questionVi: "Công ty sẽ ____ thuế từ lương của bạn mỗi tháng.",
        options: ["deduct", "recover", "proceed"],
        correctAnswer: "deduct"
      },
      {
        id: 'e11_3',
        type: 'complete',
        questionEn: "The contract was unclear; ____, we requested a revision.",
        questionVi: "Hợp đồng không rõ ràng; ____, chúng tôi yêu cầu sửa đổi.",
        correctAnswer: "hence"
      },
      {
        id: 'e11_4',
        type: 'meaning',
        questionEn: "What does 'have yet to' mean?",
        questionVi: "'Have yet to' có nghĩa là gì?",
        options: ["Already done", "Still have not done", "About to do"],
        correctAnswer: "Still have not done"
      },
      {
        id: 'e11_5',
        type: 'fill',
        questionEn: "The new policy is ____ to be very effective.",
        questionVi: "Chính sách mới ____ là rất hiệu quả.",
        correctAnswer: "reported"
      },
      {
        id: 'e11_6',
        type: 'mcq',
        questionEn: "She enrolled in the company ____ plan to secure her retirement.",
        questionVi: "Cô ấy đăng ký kế hoạch ____ của công ty để đảm bảo hưu trí.",
        options: ["pension", "dental", "tuition"],
        correctAnswer: "pension"
      },
      {
        id: 'e11_7',
        type: 'complete',
        questionEn: "____ difficult the task, we will finish it on time.",
        questionVi: "____ nhiệm vụ khó đến đâu, chúng tôi sẽ hoàn thành đúng hạn.",
        correctAnswer: "However"
      },
      {
        id: 'e11_8',
        type: 'fill',
        questionEn: "More and ____ companies are offering remote work options.",
        questionVi: "Ngày càng ____ công ty đang cung cấp tùy chọn làm việc từ xa.",
        correctAnswer: "more"
      },
      {
        id: 'e11_9',
        type: 'mcq',
        questionEn: "The supplier offers a ____ discount for large orders.",
        questionVi: "Nhà cung cấp cung cấp giảm giá ____ cho đơn hàng lớn.",
        options: ["bulk purchase", "college tuition", "government grant"],
        correctAnswer: "bulk purchase"
      },
      {
        id: 'e11_10',
        type: 'complete',
        questionEn: "We have ____ to receive confirmation from the client.",
        questionVi: "Chúng tôi vẫn ____ nhận được xác nhận từ khách hàng.",
        correctAnswer: "yet"
      },
      {
        id: 'e11_11',
        type: 'fill',
        questionEn: "The staff must ____ training before using the new software.",
        questionVi: "Nhân viên phải ____ đào tạo trước khi sử dụng phần mềm mới.",
        correctAnswer: "undergo"
      },
      {
        id: 'e11_12',
        type: 'mcq',
        questionEn: "Submit the report today; ____, the deadline will be missed.",
        questionVi: "Nộp báo cáo hôm nay; ____, thời hạn sẽ bị bỏ lỡ.",
        options: ["otherwise", "hence", "however"],
        correctAnswer: "otherwise"
      },
      {
        id: 'e11_13',
        type: 'complete',
        questionEn: "The team is ____ to questions and feedback from clients.",
        questionVi: "Đội nhóm ____ với các câu hỏi và phản hồi từ khách hàng.",
        correctAnswer: "responsive"
      },
      {
        id: 'e11_14',
        type: 'fill',
        questionEn: "They received a ____ grant to support the training program.",
        questionVi: "Họ đã nhận được tài trợ ____ để hỗ trợ chương trình đào tạo.",
        correctAnswer: "government"
      },
      {
        id: 'e11_15',
        type: 'mcq',
        questionEn: "Which word means 'a large company or group of companies'?",
        questionVi: "Từ nào có nghĩa là 'một công ty lớn hoặc tập đoàn'?",
        options: ["Corporation", "Regulation", "Grant"],
        correctAnswer: "Corporation"
      },
      {
        id: 'e11_16',
        type: 'fill',
        questionEn: "We will ____ with the plan after receiving approval.",
        questionVi: "Chúng tôi sẽ ____ với kế hoạch sau khi nhận được phê duyệt.",
        correctAnswer: "proceed"
      },
      {
        id: 'e11_17',
        type: 'mcq',
        questionEn: "'Earnings' is the same as ____.",
        questionVi: "'Earnings' có nghĩa tương tự là ____.",
        options: ["Expenses", "Revenue", "Discount"],
        correctAnswer: "Revenue"
      },
      {
        id: 'e11_18',
        type: 'complete',
        questionEn: "The office's ____ to public transport is very convenient.",
        questionVi: "Vị trí ____ của văn phòng với giao thông công cộng rất thuận tiện.",
        correctAnswer: "proximity"
      },
      {
        id: 'e11_19',
        type: 'fill',
        questionEn: "She ____ argued for a higher budget allocation.",
        questionVi: "Cô ấy lập luận ____ cho việc phân bổ ngân sách cao hơn.",
        correctAnswer: "persuasively"
      },
      {
        id: 'e11_20',
        type: 'mcq',
        questionEn: "The company has yet ____ recover from last year's losses.",
        questionVi: "Công ty vẫn chưa ____ phục hồi sau tổn thất năm ngoái.",
        options: ["to", "for", "with"],
        correctAnswer: "to"
      },
      {
        id: 'e11_21',
        type: 'meaning',
        questionEn: "Which phrase means 'never, regardless of how many times'?",
        questionVi: "Cụm từ nào có nghĩa là 'không bao giờ, bất kể bao nhiêu lần'?",
        options: ["Never ... however many times", "More and more", "Have yet to"],
        correctAnswer: "Never ... however many times"
      },
      {
        id: 'e11_22',
        type: 'fill',
        questionEn: "The information is easily ____ on the company website.",
        questionVi: "Thông tin có thể dễ dàng ____ trên trang web công ty.",
        correctAnswer: "accessible"
      },
      {
        id: 'e11_23',
        type: 'complete',
        questionEn: "The landscaping ____ will be completed by next month.",
        questionVi: "Dự án thi công sân ____ sẽ hoàn thành vào tháng tới.",
        correctAnswer: "project"
      },
      {
        id: 'e11_24',
        type: 'mcq',
        questionEn: "The ____ minister announced a reduction in college tuition.",
        questionVi: "Bộ trưởng ____ đã công bố giảm học phí đại học.",
        options: ["finance", "transport", "regulation"],
        correctAnswer: "finance"
      },
      {
        id: 'e11_25',
        type: 'fill',
        questionEn: "She is a ____ customer who visits the store every week.",
        questionVi: "Cô ấy là khách hàng ____ lui tới cửa hàng mỗi tuần.",
        correctAnswer: "frequent"
      }
    ],
    rearrangeExercises: [
      {
        sentenceEn: "The company offers dental coverage to eligible staff.",
        sentenceVi: "Công ty cung cấp bảo hiểm nha khoa cho nhân viên đủ điều kiện."
      },
      {
        sentenceEn: "She enrolled in the pension plan on her first day.",
        sentenceVi: "Cô ấy đăng ký kế hoạch hưu trí vào ngày đầu tiên."
      },
      {
        sentenceEn: "The policy is reported to be effective.",
        sentenceVi: "Chính sách được cho là hiệu quả."
      },
      {
        sentenceEn: "We have yet to receive approval.",
        sentenceVi: "Chúng tôi vẫn chưa nhận được phê duyệt."
      },
      {
        sentenceEn: "The tax will be deducted from earnings.",
        sentenceVi: "Thuế sẽ được khấu trừ từ thu nhập."
      },
      {
        sentenceEn: "More and more staff use bulk purchase discounts.",
        sentenceVi: "Ngày càng nhiều nhân viên sử dụng giảm giá mua số lượng lớn."
      },
      {
        sentenceEn: "However intense, the negotiations succeeded.",
        sentenceVi: "Cho dù căng thẳng đến đâu, các cuộc đàm phán đã thành công."
      },
      {
        sentenceEn: "The data was incomplete; hence, we revised it.",
        sentenceVi: "Dữ liệu không đầy đủ; do đó, chúng tôi đã sửa đổi."
      },
      {
        sentenceEn: "The regulation is accessible online.",
        sentenceVi: "Quy định có thể truy cập trực tuyến."
      },
      {
        sentenceEn: "They received a government grant for the project.",
        sentenceVi: "Họ đã nhận được tài trợ của chính phủ cho dự án."
      },
      {
        sentenceEn: "Submit the form; otherwise, you will miss the deadline.",
        sentenceVi: "Nộp biểu mẫu; nếu không bạn sẽ bỏ lỡ thời hạn."
      },
      {
        sentenceEn: "The staff will undergo training next week.",
        sentenceVi: "Nhân viên sẽ trải qua đào tạo vào tuần tới."
      },
      {
        sentenceEn: "Never give up, however many times you fail.",
        sentenceVi: "Đừng bao giờ bỏ cuộc, dù bạn thất bại bao nhiêu lần."
      },
      {
        sentenceEn: "The team is responsive to all client feedback.",
        sentenceVi: "Đội nhóm phản hồi tốt với mọi phản hồi của khách hàng."
      },
      {
        sentenceEn: "The office's proximity to the station is an advantage.",
        sentenceVi: "Vị trí gần ga của văn phòng là một lợi thế."
      }
    ]
  },

 {
    id: 'l12',
    topic: 'Feb 21: Reduced Clauses, Grammar Structures & General Vocabulary',
    focus: 'N + V3 Reduction, Those/Whoever Structures & Travel/Discovery Vocabulary',
    explanation: 'Learn how to reduce relative clauses (N + that/which are + V3 → N + V3), use "Those + V3/adj" and "Whoever" structures, plus vocabulary about negotiations, discovery, and timing.',
    explanationVi: 'Học cách rút gọn mệnh đề quan hệ (N + that/which are + V3 → N + V3), sử dụng cấu trúc "Those + V3/adj" và "Whoever", cùng từ vựng về đàm phán, khám phá và thời gian.',
    storyEn: [
      "Products approved by the board will be launched in the near future.",
      "The upcoming journal features articles about attractions discovered last year.",
      "Those selected for the program must attend an orientation session.",
      "Whoever is assigned to the role should settle the tough negotiation quickly.",
      "The construction project has been halted; ultimately, a new plan was abandoned.",
      "The appeal of the antique shop dates back to its intense color displays.",
      "They track market changes at regular intervals to stay up to date.",
      "N + V3 structure: Documents submitted late will not be accepted."
    ],
    storyVi: [
      "Các sản phẩm được hội đồng phê duyệt sẽ được ra mắt trong tương lai gần.",
      "Tạp chí sắp tới có các bài viết về điểm tham quan được phát hiện năm ngoái.",
      "Những người được chọn cho chương trình phải tham dự buổi định hướng.",
      "Bất kỳ ai được phân công vai trò này nên giải quyết cuộc đàm phán khó khăn nhanh chóng.",
      "Dự án xây dựng đã bị tạm dừng; cuối cùng, một kế hoạch mới đã bị bỏ.",
      "Sức hấp dẫn của cửa hàng đồ cổ bắt nguồn từ màu sắc đậm đà của các màn trưng bày.",
      "Họ theo dõi những thay đổi thị trường đều đặn để luôn cập nhật.",
      "Cấu trúc N + V3: Tài liệu nộp trễ sẽ không được chấp nhận."
    ],
    vocabulary: [
      {
        word: "N + V3 (reduced relative clause)",
        ipa: "/ˌredjuːst ˈrelətɪv klɔːz/",
        form: "grammar structure",
        meaningEn: "Shortened form of 'N + that/which are + V3'. Also written as 'N + can be made'. Describes nouns with a passive meaning.",
        meaningVi: "Rút gọn của 'N + that/which are + V3'. Dùng để mô tả danh từ với nghĩa bị động.",
        exampleEn: "Products made locally are fresher. (= Products that are made locally)",
        exampleVi: "Sản phẩm làm tại địa phương tươi hơn. (= Sản phẩm được làm tại địa phương)"
      },
      {
        word: "journal",
        ipa: "/ˈdʒɜːnl/",
        form: "noun",
        meaningEn: "A magazine or periodical, especially one focused on a specific subject. (= magazine)",
        meaningVi: "Tạp chí (= magazine)",
        exampleEn: "She published her research in a scientific journal.",
        exampleVi: "Cô ấy đã công bố nghiên cứu của mình trên một tạp chí khoa học."
      },
      {
        word: "in the near future",
        ipa: "/ɪn ðə nɪə ˈfjuːtʃə/",
        form: "phrase",
        meaningEn: "Very soon; within a short time from now.",
        meaningVi: "Trong tương lai gần",
        exampleEn: "We plan to open a new branch in the near future.",
        exampleVi: "Chúng tôi dự định mở một chi nhánh mới trong tương lai gần."
      },
      {
        word: "upcoming",
        ipa: "/ˈʌpkʌmɪŋ/",
        form: "adjective",
        meaningEn: "About to happen; happening soon.",
        meaningVi: "Sắp tới",
        exampleEn: "The upcoming conference will address new industry trends.",
        exampleVi: "Hội nghị sắp tới sẽ đề cập đến các xu hướng ngành mới."
      },
      {
        word: "have been halted",
        ipa: "/hæv bɪn ˈhɔːltɪd/",
        form: "verb phrase (passive perfect)",
        meaningEn: "Have been stopped or paused temporarily.",
        meaningVi: "Đã được tạm dừng",
        exampleEn: "Operations have been halted due to safety concerns.",
        exampleVi: "Hoạt động đã được tạm dừng do lo ngại về an toàn."
      },
      {
        word: "ultimately",
        ipa: "/ˈʌltɪmətli/",
        form: "adverb",
        meaningEn: "In the end; finally, after everything else. (= finally)",
        meaningVi: "Cuối cùng thì (= finally)",
        exampleEn: "Ultimately, the board approved the new strategy.",
        exampleVi: "Cuối cùng thì, hội đồng đã phê duyệt chiến lược mới."
      },
      {
        word: "date back to",
        ipa: "/deɪt bæk tuː/",
        form: "verb phrase",
        meaningEn: "To have originated or existed since a particular time in the past.",
        meaningVi: "Bắt nguồn từ, có từ",
        exampleEn: "This tradition dates back to the 18th century.",
        exampleVi: "Truyền thống này bắt nguồn từ thế kỷ 18."
      },
      {
        word: "abandon",
        ipa: "/əˈbændən/",
        form: "verb",
        meaningEn: "To leave behind permanently or stop continuing with something.",
        meaningVi: "Bỏ rơi, không tiếp tục nữa",
        exampleEn: "They were forced to abandon the project due to lack of funding.",
        exampleVi: "Họ buộc phải bỏ dự án do thiếu vốn."
      },
      {
        word: "discover",
        ipa: "/dɪˈskʌvə/",
        form: "verb",
        meaningEn: "To find or learn something for the first time.",
        meaningVi: "Phát hiện ra, tìm ra",
        exampleEn: "Researchers discovered a new method to improve efficiency.",
        exampleVi: "Các nhà nghiên cứu đã phát hiện ra một phương pháp mới để cải thiện hiệu quả."
      },
      {
        word: "attraction",
        ipa: "/əˈtrækʃn/",
        form: "noun",
        meaningEn: "A place or thing that draws people's interest; a tourist site.",
        meaningVi: "Điểm tham quan, sự thu hút",
        exampleEn: "The museum is the city's most popular attraction.",
        exampleVi: "Bảo tàng là điểm tham quan phổ biến nhất của thành phố."
      },
      {
        word: "appeal",
        ipa: "/əˈpiːl/",
        form: "noun/verb",
        meaningEn: "(n) The quality of being attractive or interesting. (v) To attract or interest someone.",
        meaningVi: "(n) Sự hấp dẫn, (v) sức hút, thu hút",
        exampleEn: "The destination's appeal lies in its natural beauty.",
        exampleVi: "Sức hấp dẫn của điểm đến nằm ở vẻ đẹp thiên nhiên."
      },
      {
        word: "Those + V3/adj",
        ipa: "/ðəʊz/",
        form: "grammar structure",
        meaningEn: "Shortened form of 'Those who are + V3/adj'. Refers to people who meet a certain condition.",
        meaningVi: "Rút gọn của 'Those who are + V3/adj'. Những người mà...",
        exampleEn: "Those interested in the role should apply by Friday.",
        exampleVi: "Những người quan tâm đến vị trí này nên nộp đơn trước thứ Sáu."
      },
      {
        word: "Whoever + S + V / Whoever is V3",
        ipa: "/huːˈevə/",
        form: "grammar structure",
        meaningEn: "Any person who; the person that. Used when the subject is unknown.",
        meaningVi: "Bất kỳ ai, người mà (dùng khi chủ thể chưa xác định)",
        exampleEn: "Whoever finishes first will receive a reward.",
        exampleVi: "Bất kỳ ai hoàn thành trước sẽ nhận được phần thưởng."
      },
      {
        word: "tough negotiation",
        ipa: "/tʌf nɪˌɡəʊʃiˈeɪʃn/",
        form: "noun phrase",
        meaningEn: "A difficult and demanding discussion aimed at reaching an agreement.",
        meaningVi: "Cuộc đàm phán khó khăn",
        exampleEn: "After tough negotiations, both sides reached a deal.",
        exampleVi: "Sau cuộc đàm phán khó khăn, cả hai bên đã đạt được thỏa thuận."
      },
      {
        word: "settle",
        ipa: "/ˈsetl/",
        form: "verb",
        meaningEn: "To resolve a dispute or argument; to reach a final decision.",
        meaningVi: "Giải quyết, dàn xếp",
        exampleEn: "The two companies settled their dispute out of court.",
        exampleVi: "Hai công ty đã giải quyết tranh chấp ngoài tòa án."
      },
      {
        word: "intense color",
        ipa: "/ɪnˈtens ˈkʌlə/",
        form: "noun phrase",
        meaningEn: "A very deep, rich, or strongly saturated color.",
        meaningVi: "Màu đậm",
        exampleEn: "The designer used intense colors to make the logo stand out.",
        exampleVi: "Nhà thiết kế sử dụng màu đậm để làm logo nổi bật."
      },
      {
        word: "at regular intervals",
        ipa: "/æt ˈreɡjələ ˈɪntəvlz/",
        form: "phrase",
        meaningEn: "Happening repeatedly at equal or consistent periods of time.",
        meaningVi: "Đều đặn, theo chu kỳ đều",
        exampleEn: "The system backs up data at regular intervals.",
        exampleVi: "Hệ thống sao lưu dữ liệu đều đặn."
      }
    ],
    exercises: [
      {
        id: 'e12_1',
        type: 'fill',
        questionEn: "Products ____ (approve) by the board will be launched next month.",
        questionVi: "Các sản phẩm ____ bởi hội đồng sẽ được ra mắt vào tháng tới.",
        correctAnswer: "approved"
      },
      {
        id: 'e12_2',
        type: 'mcq',
        questionEn: "____ selected for the program will receive an email.",
        questionVi: "____ được chọn cho chương trình sẽ nhận được email.",
        options: ["Those", "Whoever is", "Both are correct"],
        correctAnswer: "Both are correct"
      },
      {
        id: 'e12_3',
        type: 'complete',
        questionEn: "The tradition dates back ____ the early 1900s.",
        questionVi: "Truyền thống bắt nguồn ____ những năm 1900.",
        correctAnswer: "to"
      },
      {
        id: 'e12_4',
        type: 'meaning',
        questionEn: "What does 'ultimately' mean?",
        questionVi: "'Ultimately' có nghĩa là gì?",
        options: ["Initially", "Finally", "Frequently"],
        correctAnswer: "Finally"
      },
      {
        id: 'e12_5',
        type: 'fill',
        questionEn: "The negotiations were tough, but they were finally ____.",
        questionVi: "Các cuộc đàm phán rất khó khăn, nhưng cuối cùng đã được ____.",
        correctAnswer: "settled"
      },
      {
        id: 'e12_6',
        type: 'mcq',
        questionEn: "The construction has been ____ due to safety issues.",
        questionVi: "Việc xây dựng đã được ____ do các vấn đề an toàn.",
        options: ["halted", "settled", "discovered"],
        correctAnswer: "halted"
      },
      {
        id: 'e12_7',
        type: 'complete',
        questionEn: "The museum is the city's greatest tourist ____.",
        questionVi: "Bảo tàng là ____ du lịch lớn nhất của thành phố.",
        correctAnswer: "attraction"
      },
      {
        id: 'e12_8',
        type: 'fill',
        questionEn: "____ submits the best proposal will win the contract.",
        questionVi: "____ nộp đề xuất tốt nhất sẽ thắng hợp đồng.",
        correctAnswer: "Whoever"
      },
      {
        id: 'e12_9',
        type: 'mcq',
        questionEn: "We plan to launch the product in the ____ future.",
        questionVi: "Chúng tôi dự định ra mắt sản phẩm trong ____ tới.",
        options: ["near", "past", "distant"],
        correctAnswer: "near"
      },
      {
        id: 'e12_10',
        type: 'complete',
        questionEn: "The system sends reports at ____ intervals.",
        questionVi: "Hệ thống gửi báo cáo ____ đặn.",
        correctAnswer: "regular"
      },
      {
        id: 'e12_11',
        type: 'fill',
        questionEn: "The destination's ____ lies in its beautiful landscape.",
        questionVi: "____ của điểm đến nằm ở cảnh quan đẹp.",
        correctAnswer: "appeal"
      },
      {
        id: 'e12_12',
        type: 'mcq',
        questionEn: "A journal is the same as a ____.",
        questionVi: "Journal cũng có nghĩa tương tự là ____.",
        options: ["magazine", "report", "contract"],
        correctAnswer: "magazine"
      },
      {
        id: 'e12_13',
        type: 'fill',
        questionEn: "They had to ____ the project due to lack of funding.",
        questionVi: "Họ phải ____ dự án do thiếu vốn.",
        correctAnswer: "abandon"
      },
      {
        id: 'e12_14',
        type: 'complete',
        questionEn: "____ approved must complete the onboarding form.",
        questionVi: "____ được phê duyệt phải hoàn thành biểu mẫu đăng ký.",
        correctAnswer: "Those"
      },
      {
        id: 'e12_15',
        type: 'meaning',
        questionEn: "Which phrase means 'about to happen soon'?",
        questionVi: "Cụm từ nào có nghĩa là 'sắp xảy ra'?",
        options: ["Upcoming", "Ongoing", "Previous"],
        correctAnswer: "Upcoming"
      },
      {
        id: 'e12_16',
        type: 'fill',
        questionEn: "The designer used ____ colors to make the display stand out.",
        questionVi: "Nhà thiết kế sử dụng màu ____ để làm màn trưng bày nổi bật.",
        correctAnswer: "intense"
      },
      {
        id: 'e12_17',
        type: 'mcq',
        questionEn: "Researchers ____ a new treatment for the disease.",
        questionVi: "Các nhà nghiên cứu đã ____ ra một phương pháp điều trị mới.",
        options: ["discovered", "abandoned", "halted"],
        correctAnswer: "discovered"
      }
    ],
    rearrangeExercises: [
      {
        sentenceEn: "Documents submitted late will not be accepted.",
        sentenceVi: "Tài liệu nộp trễ sẽ không được chấp nhận."
      },
      {
        sentenceEn: "Those approved will receive an email notification.",
        sentenceVi: "Những người được phê duyệt sẽ nhận được thông báo qua email."
      },
      {
        sentenceEn: "Whoever is selected must attend training.",
        sentenceVi: "Bất kỳ ai được chọn phải tham dự đào tạo."
      },
      {
        sentenceEn: "The tradition dates back to the 1800s.",
        sentenceVi: "Truyền thống bắt nguồn từ những năm 1800."
      },
      {
        sentenceEn: "The negotiations were ultimately settled.",
        sentenceVi: "Các cuộc đàm phán cuối cùng đã được giải quyết."
      },
      {
        sentenceEn: "Operations have been halted temporarily.",
        sentenceVi: "Hoạt động đã tạm thời bị dừng lại."
      },
      {
        sentenceEn: "We publish reports at regular intervals.",
        sentenceVi: "Chúng tôi xuất bản báo cáo đều đặn."
      },
      {
        sentenceEn: "The upcoming journal will be released next week.",
        sentenceVi: "Tạp chí sắp tới sẽ được phát hành vào tuần tới."
      },
      {
        sentenceEn: "The museum's appeal is its rich history.",
        sentenceVi: "Sức hấp dẫn của bảo tàng là lịch sử phong phú."
      },
      {
        sentenceEn: "They abandoned the project last year.",
        sentenceVi: "Họ đã bỏ dự án năm ngoái."
      },
      {
        sentenceEn: "Researchers discovered a new attraction near the city.",
        sentenceVi: "Các nhà nghiên cứu đã phát hiện một điểm tham quan mới gần thành phố."
      },
      {
        sentenceEn: "The designer used intense colors throughout the display.",
        sentenceVi: "Nhà thiết kế sử dụng màu đậm trong suốt màn trưng bày."
      }
    ]
  },

  {
    id: 'l14',
    topic: 'Feb 23: Finance, Qualifications & Workplace Terms',
    focus: 'Reliability Word Family, Qualified Structures & Financial Vocabulary',
    explanation: 'Learn the rely/reliable/reliability word family, qualified for/to/in structures, financial terms, and key workplace expressions.',
    explanationVi: 'Học họ từ rely/reliable/reliability, cấu trúc qualified for/to/in, thuật ngữ tài chính và các cụm từ quan trọng nơi làm việc.',
    storyEn: [
      "The manufacturing plant relies on reliable machinery with proven reliability.",
      "Staff who are qualified in accounting specialize in financial reporting.",
      "Employees are grateful to the manager for approving their travel expense reimbursements.",
      "We are grateful for the ample time left before the deadline.",
      "The expansion took longer than expected due to unforeseen circumstances.",
      "The new equipment comes with a warranty and is generally cost-effective.",
      "The fund-raising event will be held promptly; those responsible must be top priority.",
      "An abundance of staff frequently visited the staff lounge to master new techniques.",
      "She remained relieved and delightful after being qualified for the promotion.",
      "Unseasonably cold temperatures abruptly changed conditions at the manufacturing plant."
    ],
    storyVi: [
      "Nhà máy sản xuất dựa vào máy móc đáng tin cậy với độ tin cậy đã được chứng minh.",
      "Nhân viên có chuyên môn kế toán chuyên về báo cáo tài chính.",
      "Nhân viên biết ơn người quản lý vì đã phê duyệt hoàn trả chi phí đi lại.",
      "Chúng tôi biết ơn vì còn dư nhiều thời gian trước thời hạn.",
      "Việc mở rộng mất nhiều thời gian hơn dự kiến do những tình huống không lường trước.",
      "Thiết bị mới đi kèm bảo hành và thường tiết kiệm chi phí.",
      "Sự kiện gây quỹ sẽ được tổ chức ngay; những người có trách nhiệm phải ưu tiên hàng đầu.",
      "Rất nhiều nhân viên thường xuyên lui tới phòng nghỉ để thành thạo kỹ thuật mới.",
      "Cô ấy cảm thấy nhẹ nhõm và vui sướng sau khi đủ điều kiện thăng chức.",
      "Nhiệt độ lạnh bất thường so với mùa đã thay đổi đột ngột điều kiện tại nhà máy sản xuất."
    ],
    vocabulary: [
      {
        word: "rely on",
        ipa: "/rɪˈlaɪ ɒn/",
        form: "verb phrase",
        meaningEn: "To depend on someone or something.",
        meaningVi: "Dựa vào, phụ thuộc vào",
        exampleEn: "We rely on our suppliers to deliver on time.",
        exampleVi: "Chúng tôi dựa vào nhà cung cấp để giao hàng đúng hạn."
      },
      {
        word: "reliable",
        ipa: "/rɪˈlaɪəbl/",
        form: "adjective",
        meaningEn: "Consistently dependable and trustworthy.",
        meaningVi: "Đáng tin cậy",
        exampleEn: "We need a reliable system to track expenses.",
        exampleVi: "Chúng ta cần hệ thống đáng tin cậy để theo dõi chi phí."
      },
      {
        word: "reliability",
        ipa: "/rɪˌlaɪəˈbɪləti/",
        form: "noun",
        meaningEn: "The quality of being consistently dependable.",
        meaningVi: "Độ tin cậy",
        exampleEn: "The reliability of the data is crucial for decision-making.",
        exampleVi: "Độ tin cậy của dữ liệu rất quan trọng cho việc ra quyết định."
      },
      {
        word: "gas mileage",
        ipa: "/ɡæs ˈmaɪlɪdʒ/",
        form: "noun phrase",
        meaningEn: "The distance a vehicle can travel per unit of fuel.",
        meaningVi: "Mức tiêu hao xăng",
        exampleEn: "This hybrid car has excellent gas mileage.",
        exampleVi: "Xe hybrid này có mức tiêu hao xăng tuyệt vời."
      },
      {
        word: "grateful for",
        ipa: "/ˈɡreɪtfl fɔː/",
        form: "adjective phrase",
        meaningEn: "Thankful because of something (a thing or situation).",
        meaningVi: "Biết ơn vì cái gì",
        exampleEn: "We are grateful for the support received.",
        exampleVi: "Chúng tôi biết ơn vì sự hỗ trợ nhận được."
      },
      {
        word: "grateful to",
        ipa: "/ˈɡreɪtfl tuː/",
        form: "adjective phrase",
        meaningEn: "Thankful toward a person.",
        meaningVi: "Biết ơn ai",
        exampleEn: "I am grateful to my team for their hard work.",
        exampleVi: "Tôi biết ơn đội nhóm của tôi vì sự chăm chỉ của họ."
      },
      {
        word: "be held promptly",
        ipa: "/bi held ˈprɒmptli/",
        form: "verb phrase (passive)",
        meaningEn: "To take place without delay; to be conducted immediately.",
        meaningVi: "Được tổ chức ngay, không trì hoãn",
        exampleEn: "The emergency meeting will be held promptly at noon.",
        exampleVi: "Cuộc họp khẩn cấp sẽ được tổ chức ngay lúc 12 giờ."
      },
      {
        word: "reimbursement",
        ipa: "/ˌriːɪmˈbɜːsmənt/",
        form: "noun",
        meaningEn: "Repayment of money spent. (= refund = repayment = payback)",
        meaningVi: "Hoàn trả tiền",
        exampleEn: "Submit your receipts to request reimbursement.",
        exampleVi: "Nộp biên lai để yêu cầu hoàn trả."
      },
      {
        word: "paycheck",
        ipa: "/ˈpeɪtʃek/",
        form: "noun",
        meaningEn: "An employee's salary payment. (= salary)",
        meaningVi: "Phiếu lương",
        exampleEn: "His paycheck is deposited on the last Friday of each month.",
        exampleVi: "Phiếu lương của anh ấy được chuyển vào ngày thứ Sáu cuối cùng của mỗi tháng."
      },
      {
        word: "travel expense",
        ipa: "/ˈtrævl ɪkˈspens/",
        form: "noun phrase",
        meaningEn: "Costs incurred while traveling for business.",
        meaningVi: "Chi phí đi lại công tác",
        exampleEn: "All travel expenses must be approved in advance.",
        exampleVi: "Tất cả chi phí đi lại phải được phê duyệt trước."
      },
      {
        word: "expansion",
        ipa: "/ɪkˈspænʃn/",
        form: "noun",
        meaningEn: "The process of becoming larger or more extensive.",
        meaningVi: "Sự mở rộng",
        exampleEn: "The company's expansion into Europe begins next year.",
        exampleVi: "Việc mở rộng của công ty sang châu Âu bắt đầu năm sau."
      },
      {
        word: "staff lounge",
        ipa: "/stɑːf laʊndʒ/",
        form: "noun phrase",
        meaningEn: "A room in a workplace where employees can rest and relax.",
        meaningVi: "Phòng nghỉ của nhân viên",
        exampleEn: "Coffee and snacks are available in the staff lounge.",
        exampleVi: "Cà phê và đồ ăn nhẹ có sẵn trong phòng nghỉ của nhân viên."
      },
      {
        word: "manufacturing plant",
        ipa: "/ˌmænjʊˈfæktʃərɪŋ plɑːnt/",
        form: "noun phrase",
        meaningEn: "A factory where goods are produced.",
        meaningVi: "Nhà máy sản xuất",
        exampleEn: "The new manufacturing plant will create 500 jobs.",
        exampleVi: "Nhà máy sản xuất mới sẽ tạo ra 500 việc làm."
      },
      {
        word: "master something",
        ipa: "/ˈmɑːstə ˈsʌmθɪŋ/",
        form: "verb phrase",
        meaningEn: "To become highly skilled or proficient at something.",
        meaningVi: "Thành thạo cái gì đó",
        exampleEn: "It takes years to master a new language.",
        exampleVi: "Cần nhiều năm để thành thạo một ngôn ngữ mới."
      },
      {
        word: "relieved",
        ipa: "/rɪˈliːvd/",
        form: "adjective",
        meaningEn: "Feeling less anxious because something worrying has ended.",
        meaningVi: "Nhẹ nhõm, thở phào",
        exampleEn: "She was relieved to hear the project was approved.",
        exampleVi: "Cô ấy cảm thấy nhẹ nhõm khi nghe dự án được phê duyệt."
      },
      {
        word: "delightful",
        ipa: "/dɪˈlaɪtfl/",
        form: "adjective",
        meaningEn: "Causing delight or great pleasure.",
        meaningVi: "Vui sướng, trải nghiệm gây vui",
        exampleEn: "The team had a delightful celebration after the launch.",
        exampleVi: "Đội nhóm có một buổi ăn mừng vui sướng sau khi ra mắt."
      },
      {
        word: "top priority",
        ipa: "/tɒp praɪˈɒrəti/",
        form: "noun phrase",
        meaningEn: "The most important matter requiring immediate attention.",
        meaningVi: "Ưu tiên hàng đầu",
        exampleEn: "Employee safety is our top priority.",
        exampleVi: "Sự an toàn của nhân viên là ưu tiên hàng đầu của chúng tôi."
      },
      {
        word: "abruptly change",
        ipa: "/əˈbrʌptli tʃeɪndʒ/",
        form: "verb phrase",
        meaningEn: "To change suddenly and unexpectedly. (= suddenly change)",
        meaningVi: "Thay đổi đột ngột",
        exampleEn: "Market conditions abruptly changed after the announcement.",
        exampleVi: "Điều kiện thị trường đã thay đổi đột ngột sau thông báo."
      },
      {
        word: "an abundance of",
        ipa: "/ən əˈbʌndəns ɒv/",
        form: "phrase",
        meaningEn: "A very large quantity of something. (= a large number of)",
        meaningVi: "Rất nhiều",
        exampleEn: "There is an abundance of opportunities in this market.",
        exampleVi: "Có rất nhiều cơ hội trong thị trường này."
      },
      {
        word: "qualified for",
        ipa: "/ˈkwɒlɪfaɪd fɔː/",
        form: "adjective phrase",
        meaningEn: "Meeting the requirements for a job or position.",
        meaningVi: "Đủ điều kiện (cho công việc/vị trí)",
        exampleEn: "She is qualified for the senior analyst position.",
        exampleVi: "Cô ấy đủ điều kiện cho vị trí chuyên viên phân tích cấp cao."
      },
      {
        word: "qualified to",
        ipa: "/ˈkwɒlɪfaɪd tuː/",
        form: "adjective phrase",
        meaningEn: "Having the ability or authorization to do something.",
        meaningVi: "Đủ điều kiện để làm gì",
        exampleEn: "Only certified staff are qualified to operate the equipment.",
        exampleVi: "Chỉ nhân viên được chứng nhận mới đủ điều kiện để vận hành thiết bị."
      },
      {
        word: "qualified in",
        ipa: "/ˈkwɒlɪfaɪd ɪn/",
        form: "adjective phrase",
        meaningEn: "Having professional expertise in a specific field.",
        meaningVi: "Có chuyên môn trong (lĩnh vực)",
        exampleEn: "He is qualified in both finance and marketing.",
        exampleVi: "Anh ấy có chuyên môn cả tài chính lẫn marketing."
      },
      {
        word: "take longer than expected",
        ipa: "/teɪk ˈlɒŋɡə ðæn ɪkˈspektɪd/",
        form: "phrase",
        meaningEn: "To require more time than was originally planned.",
        meaningVi: "Mất nhiều thời gian hơn dự kiến",
        exampleEn: "The renovation took longer than expected due to supply issues.",
        exampleVi: "Việc cải tạo mất nhiều thời gian hơn dự kiến do vấn đề cung cấp."
      },
      {
        word: "come with a warranty",
        ipa: "/kʌm wɪð ə ˈwɒrənti/",
        form: "phrase",
        meaningEn: "To include a guarantee of repair or replacement if defective.",
        meaningVi: "Đi kèm bảo hành",
        exampleEn: "All our products come with a one-year warranty.",
        exampleVi: "Tất cả sản phẩm của chúng tôi đều đi kèm bảo hành một năm."
      },
      {
        word: "be composed of",
        ipa: "/bi kəmˈpəʊzd ɒv/",
        form: "phrase (passive)",
        meaningEn: "To consist of; to be made up of. (= consist of = include)",
        meaningVi: "Bao gồm",
        exampleEn: "The team is composed of five specialists.",
        exampleVi: "Đội nhóm bao gồm năm chuyên gia."
      },
      {
        word: "unforeseen circumstances",
        ipa: "/ˌʌnfɔːˈsiːn ˈsɜːkəmstənsɪz/",
        form: "noun phrase",
        meaningEn: "Unexpected events or situations that could not be predicted.",
        meaningVi: "Những tình huống không lường trước",
        exampleEn: "Due to unforeseen circumstances, the event was postponed.",
        exampleVi: "Do những tình huống không lường trước, sự kiện đã bị hoãn."
      },
      {
        word: "specialize in",
        ipa: "/ˈspeʃəlaɪz ɪn/",
        form: "verb phrase",
        meaningEn: "To focus on and become expert in a particular area.",
        meaningVi: "Chuyên về",
        exampleEn: "Our firm specializes in corporate law.",
        exampleVi: "Công ty chúng tôi chuyên về luật doanh nghiệp."
      },
      {
        word: "ample time left",
        ipa: "/ˈæmpl taɪm left/",
        form: "noun phrase",
        meaningEn: "More than enough time remaining.",
        meaningVi: "Còn dư nhiều thời gian",
        exampleEn: "There is ample time left to review the proposal.",
        exampleVi: "Còn dư nhiều thời gian để xem xét đề xuất."
      },
      {
        word: "responsible",
        ipa: "/rɪˈspɒnsəbl/",
        form: "adjective",
        meaningEn: "Having a duty to deal with something; accountable.",
        meaningVi: "Có trách nhiệm",
        exampleEn: "Each manager is responsible for their team's performance.",
        exampleVi: "Mỗi người quản lý có trách nhiệm về hiệu suất của nhóm."
      },
      {
        word: "unseasonably cold temperature",
        ipa: "/ʌnˈsiːznəbli kəʊld ˈtemprɪtʃə/",
        form: "noun phrase",
        meaningEn: "A temperature that is colder than normal for that time of year.",
        meaningVi: "Nhiệt độ lạnh bất thường so với mùa",
        exampleEn: "Unseasonably cold temperatures damaged the crops.",
        exampleVi: "Nhiệt độ lạnh bất thường so với mùa đã làm hỏng mùa màng."
      },
      {
        word: "fund-raising",
        ipa: "/ˈfʌnd reɪzɪŋ/",
        form: "noun/adjective",
        meaningEn: "The activity of collecting money for a cause or organization.",
        meaningVi: "Gây quỹ",
        exampleEn: "The fund-raising event raised over $10,000 for charity.",
        exampleVi: "Sự kiện gây quỹ đã huy động được hơn $10,000 cho từ thiện."
      },
      {
        word: "distinguish from",
        ipa: "/dɪˈstɪŋɡwɪʃ frɒm/",
        form: "verb phrase",
        meaningEn: "To recognize the difference between two things.",
        meaningVi: "Phân biệt cái gì với cái gì",
        exampleEn: "It is important to distinguish facts from opinions.",
        exampleVi: "Điều quan trọng là phân biệt sự thật với ý kiến."
      },
      {
        word: "occasionally",
        ipa: "/əˈkeɪʒnəli/",
        form: "adverb",
        meaningEn: "Sometimes but not regularly. (= sometimes)",
        meaningVi: "Thỉnh thoảng",
        exampleEn: "We occasionally hold team-building events.",
        exampleVi: "Chúng tôi thỉnh thoảng tổ chức các sự kiện xây dựng đội nhóm."
      }
    ],
    exercises: [
      {
        id: 'e14_1',
        type: 'fill',
        questionEn: "We ____ on our IT team to resolve system issues.",
        questionVi: "Chúng tôi ____ vào đội IT để giải quyết các vấn đề hệ thống.",
        correctAnswer: "rely"
      },
      {
        id: 'e14_2',
        type: 'mcq',
        questionEn: "She is ____ in finance and has years of experience.",
        questionVi: "Cô ấy có ____ tài chính và có nhiều năm kinh nghiệm.",
        options: ["qualified in", "qualified for", "qualified to"],
        correctAnswer: "qualified in"
      },
      {
        id: 'e14_3',
        type: 'complete',
        questionEn: "All products ____ with a two-year warranty.",
        questionVi: "Tất cả sản phẩm ____ bảo hành hai năm.",
        correctAnswer: "come"
      },
      {
        id: 'e14_4',
        type: 'meaning',
        questionEn: "What does 'relieved' mean?",
        questionVi: "'Relieved' có nghĩa là gì?",
        options: ["Excited", "Feeling less anxious", "Delightful"],
        correctAnswer: "Feeling less anxious"
      },
      {
        id: 'e14_5',
        type: 'fill',
        questionEn: "The renovation took longer ____ expected.",
        questionVi: "Việc cải tạo mất nhiều thời gian hơn ____ kiến.",
        correctAnswer: "than"
      },
      {
        id: 'e14_6',
        type: 'mcq',
        questionEn: "The event will be held ____ at 9 AM sharp.",
        questionVi: "Sự kiện sẽ được tổ chức ____ lúc đúng 9 giờ sáng.",
        options: ["promptly", "abruptly", "occasionally"],
        correctAnswer: "promptly"
      },
      {
        id: 'e14_7',
        type: 'complete',
        questionEn: "Due to ____ circumstances, the deadline was extended.",
        questionVi: "Do những tình huống ____ trước, thời hạn đã được gia hạn.",
        correctAnswer: "unforeseen"
      },
      {
        id: 'e14_8',
        type: 'fill',
        questionEn: "There is an ____ of candidates for the position.",
        questionVi: "Có ____ nhiều ứng viên cho vị trí này.",
        correctAnswer: "abundance"
      },
      {
        id: 'e14_9',
        type: 'mcq',
        questionEn: "Which word describes trustworthiness of a system?",
        questionVi: "Từ nào mô tả độ tin cậy của một hệ thống?",
        options: ["Reliability", "Reimbursement", "Expansion"],
        correctAnswer: "Reliability"
      },
      {
        id: 'e14_10',
        type: 'complete',
        questionEn: "I am grateful ____ my mentor for her guidance.",
        questionVi: "Tôi biết ơn ____ người cố vấn của tôi vì sự hướng dẫn.",
        correctAnswer: "to"
      },
      {
        id: 'e14_11',
        type: 'fill',
        questionEn: "The team ____ in data analytics and business intelligence.",
        questionVi: "Đội nhóm ____ về phân tích dữ liệu và tình báo kinh doanh.",
        correctAnswer: "specializes"
      },
      {
        id: 'e14_12',
        type: 'mcq',
        questionEn: "She was ____ to hear she passed the certification exam.",
        questionVi: "Cô ấy cảm thấy ____ khi nghe đã vượt qua kỳ thi chứng chỉ.",
        options: ["relieved", "delightful", "abruptly"],
        correctAnswer: "relieved"
      },
      {
        id: 'e14_13',
        type: 'complete',
        questionEn: "We are grateful ____ the extra funding received.",
        questionVi: "Chúng tôi biết ơn ____ nguồn vốn bổ sung nhận được.",
        correctAnswer: "for"
      },
      {
        id: 'e14_14',
        type: 'fill',
        questionEn: "Staff must submit travel ____ within 30 days.",
        questionVi: "Nhân viên phải nộp ____ đi lại trong vòng 30 ngày.",
        correctAnswer: "expenses"
      },
      {
        id: 'e14_15',
        type: 'mcq',
        questionEn: "The temperatures ____ changed, disrupting operations.",
        questionVi: "Nhiệt độ đã ____ thay đổi, làm gián đoạn hoạt động.",
        options: ["abruptly", "gradually", "frequently"],
        correctAnswer: "abruptly"
      },
      {
        id: 'e14_16',
        type: 'complete',
        questionEn: "The committee is composed ____ five senior members.",
        questionVi: "Ủy ban bao gồm ____ năm thành viên cấp cao.",
        correctAnswer: "of"
      },
      {
        id: 'e14_17',
        type: 'fill',
        questionEn: "It is important to ____ facts from opinions.",
        questionVi: "Điều quan trọng là ____ sự thật với ý kiến.",
        correctAnswer: "distinguish"
      },
      {
        id: 'e14_18',
        type: 'mcq',
        questionEn: "The fund-raising event is our ____ for this month.",
        questionVi: "Sự kiện gây quỹ là ____ của chúng tôi trong tháng này.",
        options: ["top priority", "travel expense", "staff lounge"],
        correctAnswer: "top priority"
      },
      {
        id: 'e14_19',
        type: 'complete',
        questionEn: "There is ample time ____ to complete the review.",
        questionVi: "Còn dư nhiều thời gian ____ để hoàn thành việc xem xét.",
        correctAnswer: "left"
      },
      {
        id: 'e14_20',
        type: 'fill',
        questionEn: "She is ____ for the director role based on her experience.",
        questionVi: "Cô ấy ____ cho vai trò giám đốc dựa trên kinh nghiệm của mình.",
        correctAnswer: "qualified"
      },
      {
        id: 'e14_21',
        type: 'meaning',
        questionEn: "What does 'reimbursement' mean?",
        questionVi: "'Reimbursement' có nghĩa là gì?",
        options: ["A salary increase", "Repayment of money spent", "A performance bonus"],
        correctAnswer: "Repayment of money spent"
      },
      {
        id: 'e14_22',
        type: 'mcq',
        questionEn: "We ____ hold workshops to upskill our team.",
        questionVi: "Chúng tôi ____ tổ chức hội thảo để nâng cao kỹ năng đội nhóm.",
        options: ["occasionally", "abruptly", "promptly"],
        correctAnswer: "occasionally"
      },
      {
        id: 'e14_23',
        type: 'complete',
        questionEn: "It takes years to ____ a complex skill.",
        questionVi: "Cần nhiều năm để ____ một kỹ năng phức tạp.",
        correctAnswer: "master"
      },
      {
        id: 'e14_24',
        type: 'fill',
        questionEn: "The new plant will ____ in automobile parts manufacturing.",
        questionVi: "Nhà máy mới sẽ ____ sản xuất phụ tùng ô tô.",
        correctAnswer: "specialize"
      },
      {
        id: 'e14_25',
        type: 'meaning',
        questionEn: "Which phrase means 'very large amount of something'?",
        questionVi: "Cụm từ nào có nghĩa là 'lượng rất lớn của cái gì đó'?",
        options: ["Ample time left", "An abundance of", "Top priority"],
        correctAnswer: "An abundance of"
      }
    ],
    rearrangeExercises: [
      {
        sentenceEn: "We rely on reliable systems for accuracy.",
        sentenceVi: "Chúng tôi dựa vào các hệ thống đáng tin cậy để đảm bảo độ chính xác."
      },
      {
        sentenceEn: "She is qualified in finance and accounting.",
        sentenceVi: "Cô ấy có chuyên môn tài chính và kế toán."
      },
      {
        sentenceEn: "The meeting will be held promptly at noon.",
        sentenceVi: "Cuộc họp sẽ được tổ chức ngay lúc 12 giờ."
      },
      {
        sentenceEn: "All products come with a warranty.",
        sentenceVi: "Tất cả sản phẩm đều đi kèm bảo hành."
      },
      {
        sentenceEn: "The expansion took longer than expected.",
        sentenceVi: "Việc mở rộng mất nhiều thời gian hơn dự kiến."
      },
      {
        sentenceEn: "There is an abundance of candidates available.",
        sentenceVi: "Có rất nhiều ứng viên sẵn có."
      },
      {
        sentenceEn: "Staff are grateful to the manager for approvals.",
        sentenceVi: "Nhân viên biết ơn người quản lý vì đã phê duyệt."
      },
      {
        sentenceEn: "Due to unforeseen circumstances, we delayed the launch.",
        sentenceVi: "Do những tình huống không lường trước, chúng tôi trì hoãn việc ra mắt."
      },
      {
        sentenceEn: "The team specializes in data analysis.",
        sentenceVi: "Đội nhóm chuyên về phân tích dữ liệu."
      },
      {
        sentenceEn: "She was relieved after receiving the approval.",
        sentenceVi: "Cô ấy cảm thấy nhẹ nhõm sau khi nhận được sự phê duyệt."
      },
      {
        sentenceEn: "Temperatures abruptly changed last night.",
        sentenceVi: "Nhiệt độ đã thay đổi đột ngột tối qua."
      },
      {
        sentenceEn: "Employee safety is our top priority.",
        sentenceVi: "Sự an toàn của nhân viên là ưu tiên hàng đầu của chúng tôi."
      },
      {
        sentenceEn: "There is ample time left to finish the task.",
        sentenceVi: "Còn dư nhiều thời gian để hoàn thành nhiệm vụ."
      },
      {
        sentenceEn: "We occasionally review our training materials.",
        sentenceVi: "Chúng tôi thỉnh thoảng xem lại tài liệu đào tạo."
      },
      {
        sentenceEn: "The fund-raising event was a great success.",
        sentenceVi: "Sự kiện gây quỹ đã thành công rực rỡ."
      },
      {
        sentenceEn: "Submit travel expenses for reimbursement.",
        sentenceVi: "Nộp chi phí đi lại để được hoàn trả."
      }
    ]
  },
  {
    id: 'l13',
    topic: 'Feb 22: Advanced Grammar Connectors & Business Operations',
    focus: '"After/During/Before which", Synonyms & Professional Vocabulary',
    explanation: 'Learn advanced relative connectors (after which, during which, before which, in/on/at which), key synonym groups, and professional business vocabulary.',
    explanationVi: 'Học các liên từ quan hệ nâng cao (after which, during which, before which, in/on/at which), nhóm từ đồng nghĩa quan trọng và từ vựng kinh doanh chuyên nghiệp.',
    storyEn: [
      "The board of directors held a meeting, after which they approved the contract.",
      "There was a workshop, during which staff discussed the manufacturing system.",
      "They reviewed the inventory before which the approval had been granted.",
      "The antique shop was inspected, at which point a suspicious email was discovered.",
      "The manager sought to actively solicit feedback and move the ongoing project forward.",
      "Diligent staff work precisely and with certainty to locate underground minerals.",
      "They used a fixed price assurance rather than a variable model to compensate for lumber costs.",
      "The remaining inventory would not be sufficient; hence, they used a bulk purchase strategy.",
      "Both plans were presented, but neither was met with opposition from the diagnostic team.",
      "Cash register data and OTC medication sales were tracked extensively across all outlets."
    ],
    storyVi: [
      "Hội đồng quản trị đã họp, sau đó họ phê duyệt hợp đồng.",
      "Có một hội thảo, trong đó nhân viên thảo luận về hệ thống sản xuất.",
      "Họ đã xem xét hàng tồn kho trước khi sự phê duyệt được cấp.",
      "Cửa hàng đồ cổ đã được kiểm tra, lúc đó một email đáng ngờ được phát hiện.",
      "Người quản lý tìm cách chủ động kêu gọi phản hồi và tiến lên với dự án đang diễn ra.",
      "Nhân viên chăm chỉ làm việc chính xác và chắc chắn để xác định vị trí khoáng sản.",
      "Họ sử dụng cam kết giá cố định thay vì mô hình biến đổi để bù đắp chi phí gỗ.",
      "Hàng tồn kho còn lại sẽ không đủ; do đó, họ sử dụng chiến lược mua số lượng lớn.",
      "Cả hai kế hoạch được trình bày, nhưng không có kế hoạch nào gặp phải sự phản đối từ nhóm chẩn đoán.",
      "Dữ liệu máy tính tiền và doanh số thuốc không kê toa được theo dõi sâu rộng trên tất cả các cửa hàng."
    ],
    vocabulary: [
      {
        word: "after which",
        ipa: "/ˈɑːftə wɪtʃ/",
        form: "phrase",
        meaningEn: "Following that event; 'which' replaces the entire preceding clause.",
        meaningVi: "Sau đó thì; 'which' thay thế cho cả mệnh đề phía trước",
        exampleEn: "We completed the audit, after which we submitted the report.",
        exampleVi: "Chúng tôi hoàn thành kiểm toán, sau đó nộp báo cáo."
      },
      {
        word: "before which",
        ipa: "/bɪˈfɔː wɪtʃ/",
        form: "phrase",
        meaningEn: "Prior to that event; 'which' replaces the entire preceding clause.",
        meaningVi: "Trước đó; 'which' thay thế cho cả mệnh đề phía trước",
        exampleEn: "We reviewed the data before which the contract was signed.",
        exampleVi: "Chúng tôi đã xem xét dữ liệu trước khi hợp đồng được ký."
      },
      {
        word: "during which",
        ipa: "/ˈdjʊərɪŋ wɪtʃ/",
        form: "phrase",
        meaningEn: "Throughout the period of the event previously mentioned.",
        meaningVi: "Trong suốt thời gian đó",
        exampleEn: "We held a workshop, during which employees shared ideas.",
        exampleVi: "Chúng tôi tổ chức hội thảo, trong đó nhân viên chia sẻ ý tưởng."
      },
      {
        word: "in/on/at which",
        ipa: "/ɪn/ɒn/æt wɪtʃ/",
        form: "phrase",
        meaningEn: "Used to refer back to a time, place, or moment; 'at/in/on that point/time/place'.",
        meaningVi: "Khi đó, lúc đó, tại đó",
        exampleEn: "The approval was granted, at which point we began work.",
        exampleVi: "Sự phê duyệt được cấp, lúc đó chúng tôi bắt đầu công việc."
      },
      {
        word: "the last",
        ipa: "/ðə lɑːst/",
        form: "adjective",
        meaningEn: "The final one in a series or sequence.",
        meaningVi: "Cuối cùng (trong chuỗi)",
        exampleEn: "He was the last person to leave the office.",
        exampleVi: "Anh ấy là người cuối cùng rời văn phòng."
      },
      {
        word: "the latest",
        ipa: "/ðə ˈleɪtɪst/",
        form: "adjective",
        meaningEn: "The most recent or newest. (≠ 'the last' = the final one)",
        meaningVi: "Mới nhất, gần đây nhất (≠ 'the last' = cuối cùng)",
        exampleEn: "Have you seen the latest report on sales figures?",
        exampleVi: "Bạn đã xem báo cáo mới nhất về doanh số chưa?"
      },
      {
        word: "antique shop",
        ipa: "/ænˈtiːk ʃɒp/",
        form: "noun phrase",
        meaningEn: "A store that sells old, collectible, or historically valuable items.",
        meaningVi: "Cửa hàng đồ cổ",
        exampleEn: "She found a rare vase at the antique shop.",
        exampleVi: "Cô ấy tìm thấy một chiếc bình hiếm tại cửa hàng đồ cổ."
      },
      {
        word: "ongoing project",
        ipa: "/ˈɒnɡəʊɪŋ ˈprɒdʒekt/",
        form: "noun phrase",
        meaningEn: "A project that is currently in progress and not yet finished.",
        meaningVi: "Dự án đang diễn ra",
        exampleEn: "The ongoing project requires daily status updates.",
        exampleVi: "Dự án đang diễn ra yêu cầu cập nhật trạng thái hàng ngày."
      },
      {
        word: "as a result of",
        ipa: "/æz ə rɪˈzʌlt ɒv/",
        form: "phrase",
        meaningEn: "Because of; due to something.",
        meaningVi: "Vì, do, là kết quả của",
        exampleEn: "As a result of the merger, 200 new jobs were created.",
        exampleVi: "Do việc sáp nhập, 200 việc làm mới đã được tạo ra."
      },
      {
        word: "suspicious email",
        ipa: "/səˈspɪʃəs ˈiːmeɪl/",
        form: "noun phrase",
        meaningEn: "An email that appears fraudulent or potentially harmful. (= scam email)",
        meaningVi: "Email đáng ngờ (= scam email)",
        exampleEn: "Do not click on links in suspicious emails.",
        exampleVi: "Đừng nhấp vào các liên kết trong email đáng ngờ."
      },
      {
        word: "leave for",
        ipa: "/liːv fɔː/",
        form: "verb phrase",
        meaningEn: "To depart in order to go to a particular place.",
        meaningVi: "Rời đi để đến nơi nào đó",
        exampleEn: "She will leave for the conference tomorrow morning.",
        exampleVi: "Cô ấy sẽ rời đi để đến hội nghị vào sáng mai."
      },
      {
        word: "oversee",
        ipa: "/ˌəʊvəˈsiː/",
        form: "verb",
        meaningEn: "To supervise and manage. (= supervise = monitor)",
        meaningVi: "Giám sát, trông coi (= supervise = monitor)",
        exampleEn: "She was hired to oversee the entire production process.",
        exampleVi: "Cô ấy được tuyển dụng để giám sát toàn bộ quy trình sản xuất."
      },
      {
        word: "vary",
        ipa: "/ˈveəri/",
        form: "verb",
        meaningEn: "To make or become different; to add variety.",
        meaningVi: "Làm đa dạng, thay đổi",
        exampleEn: "The prices vary depending on the season.",
        exampleVi: "Giá cả thay đổi tùy theo mùa."
      },
      {
        word: "over-the-counter medication (OTC)",
        ipa: "/ˌəʊvə ðə ˈkaʊntə ˌmedɪˈkeɪʃn/",
        form: "noun phrase",
        meaningEn: "Medicine that can be purchased without a doctor's prescription.",
        meaningVi: "Thuốc không cần kê toa",
        exampleEn: "Aspirin is an over-the-counter medication.",
        exampleVi: "Aspirin là thuốc không cần kê toa."
      },
      {
        word: "seek",
        ipa: "/siːk/",
        form: "verb",
        meaningEn: "To look for or try to obtain or achieve something.",
        meaningVi: "Tìm kiếm, cố gắng đạt được",
        exampleEn: "They seek to improve customer satisfaction every quarter.",
        exampleVi: "Họ cố gắng cải thiện sự hài lòng của khách hàng mỗi quý."
      },
      {
        word: "cash register",
        ipa: "/kæʃ ˈredʒɪstə/",
        form: "noun phrase",
        meaningEn: "A machine used in stores to calculate and record sales transactions.",
        meaningVi: "Máy tính tiền",
        exampleEn: "The cashier processed the payment at the cash register.",
        exampleVi: "Thu ngân đã xử lý thanh toán tại máy tính tiền."
      },
      {
        word: "remaining inventory",
        ipa: "/rɪˈmeɪnɪŋ ˈɪnvəntri/",
        form: "noun phrase",
        meaningEn: "Stock or goods that are still available or left over.",
        meaningVi: "Hàng tồn kho còn lại",
        exampleEn: "We need to sell the remaining inventory before year end.",
        exampleVi: "Chúng tôi cần bán hết hàng tồn kho còn lại trước cuối năm."
      },
      {
        word: "precisely",
        ipa: "/prɪˈsaɪsli/",
        form: "adverb",
        meaningEn: "Exactly; with complete accuracy. (= exactly = accurately)",
        meaningVi: "Chính xác (= exactly = accurately)",
        exampleEn: "Follow the instructions precisely.",
        exampleVi: "Làm theo hướng dẫn một cách chính xác."
      },
      {
        word: "infinitely",
        ipa: "/ˈɪnfɪnətli/",
        form: "adverb",
        meaningEn: "To an unlimited degree; extremely. (= extremely)",
        meaningVi: "Vô hạn, cực kỳ (= extremely)",
        exampleEn: "This approach is infinitely better than the previous one.",
        exampleVi: "Cách tiếp cận này cực kỳ tốt hơn so với cách trước đó."
      },
      {
        word: "locate underground minerals",
        ipa: "/ləʊˈkeɪt ˌʌndəˈɡraʊnd ˈmɪnərəlz/",
        form: "verb phrase",
        meaningEn: "To identify and find the position of minerals beneath the earth's surface.",
        meaningVi: "Xác định vị trí khoáng sản dưới lòng đất",
        exampleEn: "The team used advanced tools to locate underground minerals.",
        exampleVi: "Đội đã sử dụng các công cụ tiên tiến để xác định vị trí khoáng sản."
      },
      {
        word: "would not be + adj/N",
        ipa: "/wʊd nɒt biː/",
        form: "grammar structure",
        meaningEn: "Used to express a hypothetical negative state or condition.",
        meaningVi: "Sẽ không là... (cấu trúc giả định phủ định)",
        exampleEn: "This would not be possible without your support.",
        exampleVi: "Điều này sẽ không thể thực hiện được nếu không có sự hỗ trợ của bạn."
      },
      {
        word: "with certainty",
        ipa: "/wɪð ˈsɜːtnti/",
        form: "phrase",
        meaningEn: "Without doubt; in a definite and sure manner.",
        meaningVi: "Một cách chắc chắn",
        exampleEn: "We cannot say with certainty when the project will end.",
        exampleVi: "Chúng tôi không thể nói một cách chắc chắn khi nào dự án sẽ kết thúc."
      },
      {
        word: "solicit",
        ipa: "/səˈlɪsɪt/",
        form: "verb",
        meaningEn: "To ask for or try to obtain something. (= ask for = request = seek)",
        meaningVi: "Kêu gọi, vận động (= ask for = request = seek)",
        exampleEn: "The company solicits feedback from all customers.",
        exampleVi: "Công ty kêu gọi phản hồi từ tất cả khách hàng."
      },
      {
        word: "actively solicit",
        ipa: "/ˈæktɪvli səˈlɪsɪt/",
        form: "verb phrase",
        meaningEn: "To proactively and energetically seek input or responses.",
        meaningVi: "Chủ động, tích cực kêu gọi",
        exampleEn: "Managers actively solicit ideas from their teams.",
        exampleVi: "Các quản lý chủ động kêu gọi ý tưởng từ nhóm của họ."
      },
      {
        word: "intend to",
        ipa: "/ɪnˈtend tuː/",
        form: "verb phrase",
        meaningEn: "To plan or mean to do something. (= plan to)",
        meaningVi: "Dự định, có ý định (= plan to)",
        exampleEn: "We intend to launch the product next quarter.",
        exampleVi: "Chúng tôi dự định ra mắt sản phẩm vào quý tới."
      },
      {
        word: "be intended to",
        ipa: "/bi ɪnˈtendɪd tuː/",
        form: "phrase (passive)",
        meaningEn: "To be designed or meant for a specific purpose.",
        meaningVi: "Được thiết kế, được dự định để",
        exampleEn: "This feature is intended to improve user experience.",
        exampleVi: "Tính năng này được thiết kế để cải thiện trải nghiệm người dùng."
      },
      {
        word: "absorb",
        ipa: "/əbˈzɔːb/",
        form: "verb",
        meaningEn: "To take in or soak up (water, heat, ideas, costs).",
        meaningVi: "Hấp thụ (nước, nhiệt, ý tưởng, chi phí)",
        exampleEn: "New staff quickly absorb the company culture.",
        exampleVi: "Nhân viên mới nhanh chóng hấp thụ văn hóa công ty."
      },
      {
        word: "manufacturing system",
        ipa: "/ˌmænjʊˈfæktʃərɪŋ ˈsɪstəm/",
        form: "noun phrase",
        meaningEn: "The processes and equipment used to produce goods in a factory.",
        meaningVi: "Hệ thống sản xuất",
        exampleEn: "The new manufacturing system reduced production time by 30%.",
        exampleVi: "Hệ thống sản xuất mới đã giảm thời gian sản xuất 30%."
      },
      {
        word: "board of directors",
        ipa: "/bɔːd ɒv dɪˈrektəz/",
        form: "noun phrase",
        meaningEn: "The group of people elected to govern and oversee a company.",
        meaningVi: "Hội đồng quản trị",
        exampleEn: "The board of directors meets quarterly to review performance.",
        exampleVi: "Hội đồng quản trị họp hàng quý để xem xét hiệu suất."
      },
      {
        word: "his role in",
        ipa: "/hɪz rəʊl ɪn/",
        form: "noun phrase",
        meaningEn: "The function or position a person holds within an activity or organization.",
        meaningVi: "Vai trò của anh ấy trong (việc/tổ chức)",
        exampleEn: "His role in the project was to oversee quality control.",
        exampleVi: "Vai trò của anh ấy trong dự án là giám sát kiểm soát chất lượng."
      },
      {
        word: "approval",
        ipa: "/əˈpruːvl/",
        form: "noun",
        meaningEn: "Official agreement or permission; a positive decision.",
        meaningVi: "Sự đồng ý, sự phê duyệt",
        exampleEn: "The project received approval from the board last week.",
        exampleVi: "Dự án đã nhận được sự phê duyệt từ hội đồng tuần trước."
      },
      {
        word: "move forward",
        ipa: "/muːv ˈfɔːwəd/",
        form: "verb phrase",
        meaningEn: "To progress or advance; to continue with a plan.",
        meaningVi: "Tiến lên, tiếp tục tiến",
        exampleEn: "Once approved, we can move forward with the plan.",
        exampleVi: "Sau khi được phê duyệt, chúng tôi có thể tiến lên với kế hoạch."
      },
      {
        word: "compensate for",
        ipa: "/ˈkɒmpenseɪt fɔː/",
        form: "verb phrase",
        meaningEn: "To make up for something; to offset a loss or disadvantage.",
        meaningVi: "Bù đắp cho",
        exampleEn: "The bonus will compensate for the overtime hours worked.",
        exampleVi: "Tiền thưởng sẽ bù đắp cho những giờ làm thêm."
      },
      {
        word: "a little",
        ipa: "/ə ˈlɪtl/",
        form: "quantifier",
        meaningEn: "A small amount; some (positive meaning — there IS some).",
        meaningVi: "Có một chút (mang nghĩa tích cực — có một ít)",
        exampleEn: "There is a little time left before the meeting.",
        exampleVi: "Còn một chút thời gian trước cuộc họp."
      },
      {
        word: "little",
        ipa: "/ˈlɪtl/",
        form: "quantifier",
        meaningEn: "Very small amount; almost none (negative meaning — barely any).",
        meaningVi: "Rất ít, hầu như không, thiếu hụt (mang nghĩa tiêu cực)",
        exampleEn: "There is little time left; we must hurry.",
        exampleVi: "Còn rất ít thời gian; chúng ta phải nhanh lên."
      },
      {
        word: "accumulate",
        ipa: "/əˈkjuːmjəleɪt/",
        form: "verb",
        meaningEn: "To gradually gather or collect something over time.",
        meaningVi: "Tích lũy",
        exampleEn: "She accumulated years of experience in the industry.",
        exampleVi: "Cô ấy đã tích lũy nhiều năm kinh nghiệm trong ngành."
      },
      {
        word: "both ... but neither",
        ipa: "/bəʊθ ... bʌt ˈnaɪðə/",
        form: "grammar structure",
        meaningEn: "Used to indicate two options exist but neither of them applies/qualifies.",
        meaningVi: "Cả hai... nhưng không ai được / không cái nào được",
        exampleEn: "Both plans were presented, but neither was approved.",
        exampleVi: "Cả hai kế hoạch được trình bày, nhưng không có kế hoạch nào được phê duyệt."
      },
      {
        word: "contact",
        ipa: "/ˈkɒntækt/",
        form: "verb/noun",
        meaningEn: "(v) To communicate with someone. (n) A person you know professionally.",
        meaningVi: "Liên hệ; mối liên lạc",
        exampleEn: "Please contact us if you have any questions.",
        exampleVi: "Vui lòng liên hệ với chúng tôi nếu bạn có câu hỏi."
      },
      {
        word: "contract",
        ipa: "/ˈkɒntrækt/",
        form: "noun",
        meaningEn: "A formal written agreement between parties. (= agreement)",
        meaningVi: "Hợp đồng (= agreement)",
        exampleEn: "Both parties signed the contract yesterday.",
        exampleVi: "Cả hai bên đã ký hợp đồng hôm qua."
      },
      {
        word: "parking restriction",
        ipa: "/ˈpɑːkɪŋ rɪˈstrɪkʃn/",
        form: "noun phrase",
        meaningEn: "A rule that limits or prohibits parking in a certain area.",
        meaningVi: "Quy định đỗ xe",
        exampleEn: "New parking restrictions were introduced in the city center.",
        exampleVi: "Các quy định đỗ xe mới được áp dụng ở trung tâm thành phố."
      },
      {
        word: "be met with opposition",
        ipa: "/bi met wɪð ˌɒpəˈzɪʃn/",
        form: "phrase",
        meaningEn: "To encounter resistance, disagreement, or objection.",
        meaningVi: "Gặp phải sự phản đối",
        exampleEn: "The new parking restrictions were met with strong opposition.",
        exampleVi: "Các quy định đỗ xe mới đã gặp phải sự phản đối mạnh mẽ."
      },
      {
        word: "extensive",
        ipa: "/ɪkˈstensɪv/",
        form: "adjective",
        meaningEn: "Covering a large area or range; thorough and wide-ranging.",
        meaningVi: "Sâu rộng, phong phú",
        exampleEn: "She has extensive experience in project management.",
        exampleVi: "Cô ấy có kinh nghiệm sâu rộng trong quản lý dự án."
      },
      {
        word: "diligent",
        ipa: "/ˈdɪlɪdʒənt/",
        form: "adjective",
        meaningEn: "Showing care and consistent effort in work. (= hardworking)",
        meaningVi: "Chăm chỉ, siêng năng (= hardworking)",
        exampleEn: "She is a diligent worker who always meets deadlines.",
        exampleVi: "Cô ấy là nhân viên chăm chỉ luôn đáp ứng thời hạn."
      },
      {
        word: "fixed price assurance",
        ipa: "/fɪkst praɪs əˈʃʊərəns/",
        form: "noun phrase",
        meaningEn: "A guarantee that the price agreed upon will not change.",
        meaningVi: "Cam kết giá cố định",
        exampleEn: "The contractor offered a fixed price assurance for the renovation.",
        exampleVi: "Nhà thầu cung cấp cam kết giá cố định cho việc cải tạo."
      },
      {
        word: "rather than",
        ipa: "/ˈrɑːðə ðæn/",
        form: "phrase",
        meaningEn: "Instead of; used to show preference for one thing over another.",
        meaningVi: "Chứ không phải, thay vì",
        exampleEn: "We chose quality rather than quantity.",
        exampleVi: "Chúng tôi chọn chất lượng chứ không phải số lượng."
      },
      {
        word: "inventory",
        ipa: "/ˈɪnvəntri/",
        form: "noun",
        meaningEn: "All goods or stock held by a business.",
        meaningVi: "Hàng hóa, hàng tồn kho",
        exampleEn: "We conduct a full inventory check every quarter.",
        exampleVi: "Chúng tôi kiểm tra toàn bộ hàng tồn kho mỗi quý."
      },
      {
        word: "lumber",
        ipa: "/ˈlʌmbə/",
        form: "noun",
        meaningEn: "Timber or wood that has been cut and prepared for use in building.",
        meaningVi: "Gỗ xẻ",
        exampleEn: "They ordered lumber for the new construction project.",
        exampleVi: "Họ đặt gỗ xẻ cho dự án xây dựng mới."
      },
      {
        word: "diagnostic",
        ipa: "/ˌdaɪəɡˈnɒstɪk/",
        form: "adjective",
        meaningEn: "Relating to the process of identifying a problem or disease.",
        meaningVi: "Mang tính chẩn đoán",
        exampleEn: "The doctor ordered diagnostic tests.",
        exampleVi: "Bác sĩ đã yêu cầu các xét nghiệm chẩn đoán."
      },
      {
        word: "diagnosable",
        ipa: "/ˌdaɪəɡˈnəʊzəbl/",
        form: "adjective",
        meaningEn: "Able to be identified or diagnosed.",
        meaningVi: "Có thể chẩn đoán được",
        exampleEn: "The condition is diagnosable through a simple blood test.",
        exampleVi: "Tình trạng có thể chẩn đoán được thông qua xét nghiệm máu đơn giản."
      },
      {
        word: "diagnosed",
        ipa: "/ˌdaɪəɡˈnəʊzd/",
        form: "verb (V3/past participle)",
        meaningEn: "Identified as having a particular condition or problem.",
        meaningVi: "Đã được chẩn đoán",
        exampleEn: "She was diagnosed with the condition last year.",
        exampleVi: "Cô ấy đã được chẩn đoán mắc bệnh vào năm ngoái."
      }
    ],
    exercises: [
      {
        id: 'e13_1',
        type: 'fill',
        questionEn: "We had a meeting, ____ which we finalized the contract.",
        questionVi: "Chúng tôi đã họp, ____ đó chúng tôi hoàn thiện hợp đồng.",
        correctAnswer: "after"
      },
      {
        id: 'e13_2',
        type: 'mcq',
        questionEn: "She was appointed to ____ the entire project.",
        questionVi: "Cô ấy được bổ nhiệm để ____ toàn bộ dự án.",
        options: ["oversee", "absorb", "solicit"],
        correctAnswer: "oversee"
      },
      {
        id: 'e13_3',
        type: 'complete',
        questionEn: "The system is ____ to process large volumes of data.",
        questionVi: "Hệ thống được ____ để xử lý khối lượng dữ liệu lớn.",
        correctAnswer: "intended"
      },
      {
        id: 'e13_4',
        type: 'meaning',
        questionEn: "What is the difference between 'a little' and 'little'?",
        questionVi: "Sự khác biệt giữa 'a little' và 'little' là gì?",
        options: ["No difference", "'a little' is positive (some), 'little' is negative (almost none)", "'little' means more than 'a little'"],
        correctAnswer: "'a little' is positive (some), 'little' is negative (almost none)"
      },
      {
        id: 'e13_5',
        type: 'fill',
        questionEn: "The policy was met ____ strong opposition from staff.",
        questionVi: "Chính sách đã gặp phải ____ sự phản đối mạnh mẽ từ nhân viên.",
        correctAnswer: "with"
      },
      {
        id: 'e13_6',
        type: 'mcq',
        questionEn: "We held a seminar, ____ which employees asked questions.",
        questionVi: "Chúng tôi tổ chức hội thảo, ____ đó nhân viên đặt câu hỏi.",
        options: ["after", "during", "at"],
        correctAnswer: "during"
      },
      {
        id: 'e13_7',
        type: 'complete',
        questionEn: "The company will ____ for overtime hours with bonuses.",
        questionVi: "Công ty sẽ ____ cho những giờ làm thêm bằng tiền thưởng.",
        correctAnswer: "compensate"
      },
      {
        id: 'e13_8',
        type: 'fill',
        questionEn: "We need to sell the ____ inventory before the holiday.",
        questionVi: "Chúng ta cần bán hết hàng tồn kho ____ trước kỳ nghỉ.",
        correctAnswer: "remaining"
      },
      {
        id: 'e13_9',
        type: 'mcq',
        questionEn: "She ____ years of expertise in financial management.",
        questionVi: "Cô ấy đã ____ nhiều năm chuyên môn trong quản lý tài chính.",
        options: ["accumulated", "absorbed", "solicited"],
        correctAnswer: "accumulated"
      },
      {
        id: 'e13_10',
        type: 'complete',
        questionEn: "We chose online rather ____ in-person training.",
        questionVi: "Chúng tôi chọn đào tạo trực tuyến ____ đào tạo trực tiếp.",
        correctAnswer: "than"
      },
      {
        id: 'e13_11',
        type: 'fill',
        questionEn: "The contract was approved, ____ which we started the work.",
        questionVi: "Hợp đồng được phê duyệt, lúc ____ chúng tôi bắt đầu công việc.",
        correctAnswer: "at"
      },
      {
        id: 'e13_12',
        type: 'mcq',
        questionEn: "'Solicit' is closest in meaning to ____.",
        questionVi: "'Solicit' gần nghĩa nhất với ____.",
        options: ["provide", "request", "refuse"],
        correctAnswer: "request"
      },
      {
        id: 'e13_13',
        type: 'complete',
        questionEn: "As a result ____ the merger, new jobs were created.",
        questionVi: "Do ____ việc sáp nhập, các việc làm mới đã được tạo ra.",
        correctAnswer: "of"
      },
      {
        id: 'e13_14',
        type: 'fill',
        questionEn: "The contractor provided a ____ price assurance for the project.",
        questionVi: "Nhà thầu cung cấp cam kết giá ____ cho dự án.",
        correctAnswer: "fixed"
      },
      {
        id: 'e13_15',
        type: 'meaning',
        questionEn: "What does 'board of directors' mean?",
        questionVi: "'Board of directors' là gì?",
        options: ["A team of workers", "The governing group of a company", "A finance committee"],
        correctAnswer: "The governing group of a company"
      },
      {
        id: 'e13_16',
        type: 'fill',
        questionEn: "Do not open ____ emails from unknown senders.",
        questionVi: "Đừng mở email ____ từ người gửi không quen biết.",
        correctAnswer: "suspicious"
      },
      {
        id: 'e13_17',
        type: 'mcq',
        questionEn: "The prices ____ depending on the time of year.",
        questionVi: "Giá cả ____ tùy theo thời điểm trong năm.",
        options: ["vary", "seek", "locate"],
        correctAnswer: "vary"
      },
      {
        id: 'e13_18',
        type: 'complete',
        questionEn: "She has ____ experience in international project management.",
        questionVi: "Cô ấy có kinh nghiệm ____ trong quản lý dự án quốc tế.",
        correctAnswer: "extensive"
      },
      {
        id: 'e13_19',
        type: 'fill',
        questionEn: "Both reports were reviewed, but ____ was approved.",
        questionVi: "Cả hai báo cáo đã được xem xét, nhưng không có báo cáo ____ được phê duyệt.",
        correctAnswer: "neither"
      },
      {
        id: 'e13_20',
        type: 'mcq',
        questionEn: "The patient was ____ with a rare condition.",
        questionVi: "Bệnh nhân đã được ____ mắc một bệnh hiếm gặp.",
        options: ["diagnosed", "diagnostic", "diagnosable"],
        correctAnswer: "diagnosed"
      },
      {
        id: 'e13_21',
        type: 'fill',
        questionEn: "We reviewed the data ____ which the plan was finalized.",
        questionVi: "Chúng tôi đã xem xét dữ liệu ____ đó kế hoạch được hoàn thiện.",
        correctAnswer: "before"
      },
      {
        id: 'e13_22',
        type: 'complete',
        questionEn: "The team ____ to improve the manufacturing system.",
        questionVi: "Đội nhóm ____ để cải thiện hệ thống sản xuất.",
        correctAnswer: "seeks"
      },
      {
        id: 'e13_23',
        type: 'mcq',
        questionEn: "He left ____ the conference in Singapore.",
        questionVi: "Anh ấy đã rời đi ____ hội nghị ở Singapore.",
        options: ["for", "to", "with"],
        correctAnswer: "for"
      },
      {
        id: 'e13_24',
        type: 'fill',
        questionEn: "We need to ____ with the plan after receiving board approval.",
        questionVi: "Chúng tôi cần ____ với kế hoạch sau khi nhận được sự phê duyệt của hội đồng.",
        correctAnswer: "move forward"
      },
      {
        id: 'e13_25',
        type: 'meaning',
        questionEn: "Which word means 'to take in or soak up'?",
        questionVi: "Từ nào có nghĩa là 'hấp thụ'?",
        options: ["Absorb", "Accumulate", "Compensate"],
        correctAnswer: "Absorb"
      }
    ],
    rearrangeExercises: [
      {
        sentenceEn: "We held a meeting, after which we decided.",
        sentenceVi: "Chúng tôi tổ chức cuộc họp, sau đó chúng tôi quyết định."
      },
      {
        sentenceEn: "During which, staff shared their concerns.",
        sentenceVi: "Trong suốt thời gian đó, nhân viên chia sẻ mối quan tâm."
      },
      {
        sentenceEn: "The board of directors approved the plan.",
        sentenceVi: "Hội đồng quản trị đã phê duyệt kế hoạch."
      },
      {
        sentenceEn: "The policy was met with strong opposition.",
        sentenceVi: "Chính sách đã gặp phải sự phản đối mạnh mẽ."
      },
      {
        sentenceEn: "She accumulated years of experience.",
        sentenceVi: "Cô ấy đã tích lũy nhiều năm kinh nghiệm."
      },
      {
        sentenceEn: "The system is intended to absorb large amounts of data.",
        sentenceVi: "Hệ thống được thiết kế để hấp thụ lượng dữ liệu lớn."
      },
      {
        sentenceEn: "We chose quality rather than cost.",
        sentenceVi: "Chúng tôi chọn chất lượng chứ không phải chi phí."
      },
      {
        sentenceEn: "The company actively solicits feedback.",
        sentenceVi: "Công ty chủ động kêu gọi phản hồi."
      },
      {
        sentenceEn: "She oversees the entire manufacturing system.",
        sentenceVi: "Cô ấy giám sát toàn bộ hệ thống sản xuất."
      },
      {
        sentenceEn: "We cannot say with certainty when it will end.",
        sentenceVi: "Chúng tôi không thể nói chắc chắn khi nào nó sẽ kết thúc."
      },
      {
        sentenceEn: "Both plans were presented but neither was approved.",
        sentenceVi: "Cả hai kế hoạch được trình bày nhưng không cái nào được phê duyệt."
      },
      {
        sentenceEn: "The remaining inventory must be sold before year end.",
        sentenceVi: "Hàng tồn kho còn lại phải được bán trước cuối năm."
      },
      {
        sentenceEn: "She was diagnosed with a rare condition.",
        sentenceVi: "Cô ấy đã được chẩn đoán mắc bệnh hiếm."
      },
      {
        sentenceEn: "The contractor offered a fixed price assurance.",
        sentenceVi: "Nhà thầu cung cấp cam kết giá cố định."
      },
      {
        sentenceEn: "New parking restrictions were met with opposition.",
        sentenceVi: "Các quy định đỗ xe mới đã gặp phải sự phản đối."
      }
    ]
  }

];