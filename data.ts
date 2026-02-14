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
}
];