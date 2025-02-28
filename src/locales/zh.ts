import { Descriptions } from "@douyinfe/semi-ui";
import { title } from "framer-motion/client";

export default {
  common: {
    loading: '加载中...',
    error: '发生错误',
    retry: '重试',
  },
  nav: {
    home: '首页',
    about: '关于',
    how: '玩法',
    trade: '交易',
    stake: '质押',
    presale: '认购',
    docs: '文档',
    community: '社区',
    mywallet: '我的钱包',
  },
  mh: {
    title: '神秘盲盒，惊喜连连',
    description: '我们独特的盲盒系统为每位玩家带来无尽惊喜。每个盲盒都可能包含稀有道具、强力装备或限量版角色。开启盲盒时，炫目的光效将为你揭示宝藏的真面目。盲盒的稀有度从普通到传说不等，越稀有的盲盒，获得珍稀物品的几率越高。',
  },
  mint: {
    title: '挖矿系统：财富的源泉',
    mint1:{
      title: '荒岩深渊',
      description: '一个被遗忘的矿山。这个矿山位于一片废弃的山脉深处，那里曾是一个繁忙的矿区，但由于一个神秘的岩浆喷发，矿脉被封印了。多年后，矿工们凭借对矿山的了解重新找到这里，但遗迹中充满了岩浆和熔岩怪物，甚至还有隐藏的古老机械装置。只有经验丰富的矿工才能够在危险的环境中找到那些蕴藏在深处的稀有矿石与资源。'
    },
    mint2:{
      title: '风语之谷',
      description: '一个隐秘的、浮动在云雾中的矿山。这个矿山的矿脉与风元素的力量密切相关，矿脉本身不在地下，而是藏匿在云雾环绕的悬崖之中。精灵通过元素的力量与矿脉建立了联系，她们能够听到风中的矿石低语，指引找到隐藏在其中的稀有资源。传说，这些矿脉是由古代风神所赐，它们拥有强大的能量，可以调动风暴的力量。'
    },
    mint3:{
      title: '炼金之渊',
      description: '隐藏在古老地下城市下的神秘矿山。这个矿山是一座庞大的地下迷宫，充满了炼金术的符文与古老的实验室遗迹。传闻，这里曾是伟大炼金术士的实验基地，矿脉中蕴藏着古代炼金材料，甚至可能是炼金术的源泉。矿工们来到这里，试图解开那些与炼金术相关的谜团，寻找能够使世界平衡的力量。'
    }
  },
  faq: {
    title: 'FAQ',
    description: '常见问题解答',
    question1: '> 什么是TGS？？',
    answer1: 'TGS 是游戏的主要货币，起始发行量为1000 000 000枚。',
    question2: '> 如何获得TGS？',
    answer2: '您可以通过多种方式获取TGS：',
    answer3: '• 通过开采矿区获得',
    answer4: '• 在PVE/PVP资源战中获得：',
    answer5: '• 通过swap获得',
    answer6: '• 通过质押获得，持有者可从所有玩家的游戏内行为（游戏内物品购买和所有交易）中获得奖励',
    question3: '> 如何为社区做贡献？',
    answer31: '• 转发The Genesis',
    answer32: '• 通过开采矿区获得',
    answer33: '• 为我们的玩家创建指南',
    answer34: '• 向您的朋友介绍The Genesis',
    answer35: '• 开始 The Genesis 播客或频道',
    answer36: '• 请随意在社交网络上标记我们并向我们发送您的作品链接！'
  },
  home: {
    title: 'The Genesis: 挖掘属于你的财富，开启Crypto大陆的冒险！',
    description: '在古老的Crypto大陆上，所有的矿石和资源都蕴藏着巨大的能量。大陆的居民发现，能量集中到某些特殊区域，形成了神秘的"矿区"。为了解开这些能量的奥秘，各种不同的文明派出了他们的代表——矿工们、元素精灵、炼金术士等，开始了漫长的探索与挖掘。',
    description1: '随着探索的深入，玩家会逐步解锁更强大的矿区和稀有资源，甚至发掘出古代文明遗留下的强大道具和神器。这些道具不仅是单纯的资源，更承载了古代文明的智慧与能量。',
    platformInterface: '平台界面',
    startNow: "立即开始",
    toPreSale: "参与认购",
    learnMore: "了解更多",
    overview: {
      title: '合成资产概览',
      what: {
        title: '什么是合成资产？',
        description: '合成资产是追踪基础资产价值的数字金融工具，为金融市场提供更大的灵活性和可访问性。'
      },
      benefits: {
        title: '合成资产的优势',
        description: '提高流动性、降低交易对手风险，以及获得多样化资产敞口的能力是合成资产的一些主要优势。'
      },
      applications: {
        title: '合成资产的应用',
        description: '合成资产可用于对冲、投机和投资组合多样化，为投资者和交易者提供新的机会。'
      }
    },
    features: {
      title: '角色介绍：你的冒险伙伴',
      decentralized: {
        title: '矿工阿尔德',
        description: '经验丰富的矿工，擅长寻找稀有矿石。他的特殊技能可以提高挖矿效率，是新手玩家的最佳选择。'
      },
      multiAsset: {
        title: '元素精灵弗莉娜',
        description: '掌握元素魔法的精灵，能够感知矿石的元素属性。她的技能可以增加获得高品质矿石的机会。'
      },
      transparency: {
        title: '炼金术士莫里斯',
        description: '神秘的炼金术士，能将普通矿石转化为稀有资源。他的存在大大增加了玩家的收益潜力。'
      }
    },

    marketData: {
      title: '产品路线图：',
      comprehensive: {
        title: '阶段1：推广与宣发',
        description: '• 上线beta版本，进行市场推广。',
        description1: '• 与BSC生态中的其他项目合作，提升产品曝光度。'
      },
      analytics: {
        title: '阶段2：运营上线',
        description: '• 开始进行盲盒发售。收集用户反馈，优化游戏体验。',
        description1: '• 进一步完善任务系统和社交功能，增强用户粘性。'
      },
      dashboards: {
        title: '阶段3：功能扩展',
        description: '• 开启角色，开始探索与挖掘。',
        description1: '• 增加跨链功能，支持多个公链的用户。',
        description2: '• 推出更多主题盲盒、限时活动、合作项目。'
      },
      historical: {
        title: '阶段4：全球化与DAO治理阶段',
        description: '• 实现去中心化自治（DAO）机制，让用户能够参与决策。',
        description1: '• 推出全球范围的市场与竞赛功能，提升产品的长期活力。'
      }
    }
  },
  hero: {
    title: '去中心化',
    subtitle: '衍生品协议',
    description: '在链上交易合成资产，享受无限流动性。访问真实世界资产并优化您的 DeFi 策略。',
    launchApp: '启动应用',
    readDocs: '阅读文档',
    stats: {
      tvl: '总锁仓量',
      volume: '总交易量',
      traders: '独立交易者',
      markets: '可用市场'
    }
  },
  features: {
    title: '加入我们，开启你的CryptoCraft冒险！',
    secure: {
      title: '连接钱包',
      description: '安全连接你的加密钱包，即可创建你的The Genesis账户，开始你的冒险之旅。'
    },
    fast: {
      title: '选择盲盒',
      description: '每个盲盒内包含一个 NFT 道具，分为不同稀有度，对应挖矿能力不同。'
    },
    liquidity: {
      title: '开启角色',
      description: '领取你心仪的角色，每个角色都有独特的技能和背景故事。'
    },
    decentralized: {
      title: '开始冒险',
      description: '进入游戏世界，开始你的挖矿冒险，赢取丰厚奖励！'
    }
  },
  footer: {
    products: '产品',
    developers: '开发者',
    governance: '治理',
    community: '社区',
    subscribe: {
      title: '订阅更新',
      placeholder: '输入邮箱地址',
      button: '订阅'
    },
    rights: '版权所有'
  },
  tradingView: {
    buy: '买入',
    sell: '卖出',
    price: '价格',
    amount: '数量',
    total: '总额'
  },
  wallet: {
    connect: '连接钱包',
    disconnect: '断开连接',
    balance: '余额'
  },
  "modal": {
    "terms": {
      "title": "服务条款",
      "description": "使用本网站即表示您接受以下政策、条款和条件",
      "agreement": "我已阅读并同意<terms>服务条款</terms>和<privacy>隐私政策</privacy>",
      "notUsPerson": "我不是美国公民",
      "agreeButton": "同意并继续"
    }
  },
  trade: {
    story: {
      title: '《The Genesis》：魔力矿脉的传奇',
      chapter1: {
        title: '第一章：神秘的爆发',
        description: '在遥远的 Crypto 大陆，这个世界曾经是平静且富饶的。大陆上的每个地区都有着自己独特的矿脉、魔法和元素力量。历史上，矿脉与元素的力量息息相关，它们维持着大陆的平衡与和谐，精灵与矿工之间曾有着深厚的合作与信任。',
        description1: '然而，平静的日子并没有持续太久。数年前，一场突如其来的 岩浆喷发 打破了这一切。这次喷发不仅改变了地貌，还导致了 矿脉的封印。所有的资源突然消失，神秘的光辉笼罩了整个大陆，曾经的矿区成了荒废的废墟。传闻说，这次喷发是由一种未知的力量引发的，而这股力量正是 魔力矿脉的前兆。',
        description2: '随着神秘的矿脉重现，巨大的魔法元素开始觉醒，一股新兴的力量悄然滋生。它们被称为 魔力矿脉，拥有无限的能量与巨大的潜力。这个世界的平衡再次开始动摇，古老的力量与现代的科技开始交织，等待着新一代冒险者的到来。'
      },
      chapter2: {
        title: '第二章：矿脉的复苏',
        description: '在神秘矿脉的复苏之后，元素精灵和炼金术士的古老传说逐渐被传开。根据古老的文献记载，元素精灵曾是矿脉与元素力量的守护者，而炼金术士则是掌控炼金术与魔法的智慧存在。随着魔力矿脉的复苏，这些守护者们的踪迹也开始被发现。',
        description1: '传言称，这些神秘的矿脉不仅蕴藏着极其珍贵的资源，还散发着神秘的光辉，吸引了无数冒险者的到来。矿脉中所隐藏的 元素、符文、魔法生物与机械宠物都充满着未知的力量，它们被认为是所有财富和秘密的源泉。',
        description2: '然而，这并非只是一个简单的寻宝之旅。矿脉中的 古老机械装置 逐渐觉醒，隐藏在深处的 机械怪物开始复苏。许多人前往矿区探险，然而只有那些足够聪明和勇敢的冒险者才能生还，他们不仅要面对来自矿脉深处的怪物威胁，还要与其他冒险者争夺资源和宝藏。'
      },
      chapter3: {
        title: '第三章：矿工的崛起',
        description: '在 Crypto 大陆 的边缘，一群矿工开始了他们的冒险旅程。年轻的矿工 阿尔德 就是其中之一。他一直在追寻那传说中的魔力矿脉，梦想着有朝一日能够挖掘到这片大陆上最神秘、最强大的矿石。他的父亲曾是一位著名的矿工，但在一次探险中失踪，而他留给阿尔德的唯一线索便是那段关于魔力矿脉的传说。',
        description1: '阿尔德并不是唯一一个追寻矿脉的人。随着矿脉的复苏，来自各地的冒险者纷纷涌入，建立了自己的基地，开始探索这些神秘的矿区。每个人都有自己的目标，有的为财富，有的为力量，有的为了寻求失落的亲人和朋友。'
      },
      chapter4: {
        title: '第四章：元素精灵与魔力',
        description: '而在 风语之谷 中，一位神秘的 元素精灵 —— 弗莉娜，一直在默默守护着这个世界的平衡。她与阿尔德的命运注定是交织在一起的。当阿尔德第一次接触到魔力矿脉时，他的冒险旅程便开始了。',
        description1: '弗莉娜不仅是矿脉的守护者，还是 风元素的使者。她能够通过操控风的力量，帮助矿工在复杂的矿脉中找到隐藏的宝藏和资源。她的存在不仅仅是为了保护矿脉，更是为了确保这些强大的元素不被滥用。她对待每一位冒险者的态度都充满警惕，只有那些拥有智慧与勇气的矿工，才能得到她的帮助。',
        description2: '随着冒险的推进，阿尔德逐渐意识到，弗莉娜并不是简单的魔法生物，而是与矿脉的秘密息息相关的关键存在。她的每一个举动、每一次指引，都像是在揭示着更深层次的秘密。而这些秘密，正是 炼金术士莫里斯 所试图探索的。'
      },
      chapter5: {
        title: '第五章：炼金术士莫里斯的遗产',
        description: '莫里斯曾是最伟大的炼金术士之一，他的研究结合了魔法与科技，创造了无数神奇的发明与设备。遗憾的是，莫里斯在一次神秘的实验中消失，他的实验室也随之消失得无影无踪。',
        description1: '不过，他留下的遗产并未彻底消失。阿尔德在探索矿脉的过程中，发现了与莫里斯相关的 炼金术符文，并且通过这些符文解锁了一些古老的秘密。最终，阿尔德意识到，莫里斯的消失可能与魔力矿脉的爆发息息相关，甚至与大陆的 元素失衡 密切相关。'
      },
      chapter6: {
        title: '第六章：冒险的终章',
        description: '在这场冒险的终章中，玩家不仅要面对来自矿脉中的怪物和陷阱的威胁，还要与其他玩家竞争资源和装备。最终，玩家将揭开大陆隐藏的巨大秘密，重新平衡 元素力量，并且对抗那些试图利用魔力矿脉的黑暗势力。',
        description1: 'The Genesis 的故事不仅是一个关于冒险和挖矿的故事，它更是关于 探索、发现 和 命运 的传奇。每个玩家都将是这段历史的一部分，选择自己的道路，成为矿脉的发现者、魔法的掌控者，或者 科技的缔造者。最终，谁将能够解开这个世界的最终秘密？谁将成为真正的 Crypto 大陆的传奇人物？'
      }
    }
  },
  gameplay: {
      title: '游戏玩法',
      descriptions:'The Genesis是一款结合区块链与游戏化机制的去中心化冒险与挖矿游戏，核心玩法围绕着盲盒开箱、角色成长、资源开采、市场交易等内容展开。玩家通过购买或解锁盲盒，获得角色与道具，进行挖矿并获取奖励。',
      chapter1: {
        title: '1. 盲盒开箱：',
        description: '•	盲盒系统：游戏的起点是盲盒开箱，玩家可以购买由系统生成的盲盒（使用BNB、热门代币等）。每个盲盒中都有不同的道具、角色或资源（如矿工、元素精灵、机械宠物、魔法符文等），每次开箱的内容都是随机的，玩家需要依靠运气与策略来获得稀有物品。',
        description1: '•	盲盒等级：盲盒分为不同等级，包含普通、稀有、传说等，每个等级的物品稀有度和实力都会有所不同。稀有物品如“元素精灵弗莉娜”或“炼金术士莫里斯”能够为玩家带来更强大的挖矿能力或特殊技能。'
      },
      chapter2: {
        title: '2. 角色技能：',
        description: '•	矿工角色：玩家可以获得不同类型的矿工角色，每个矿工角色有独特的技能与属性，玩家可以通过挖矿、战斗等方式提升角色的能力，解锁更高级的技能和道具使用能力。例如，矿工阿尔德可以提高开采效率，而其他矿工则擅长发现隐藏资源或提高资源回报。',
        description1: '•	元素精灵：这些小型的魔法生命体拥有强大的元素力量。玩家通过与精灵互动，可以提升其技能，使用其力量来强化矿脉开采或保卫矿区。',
        description2: '•	炼金术士：这些由先进技术打造的机械生命体能够协助玩家提高挖矿效率、保护玩家免受其他玩家的攻击或防止矿区中的危险生物侵袭。'
      },
      chapter3: {
        title: '3. 挖矿系统：',
        description: '•	矿脉开采：玩家需要选择不同的矿脉进行开采。每个矿脉都有不同的资源和难度，玩家需要根据自己拥有的角色、道具和技能选择合适的矿脉进行开采。',
        description1: '•	挖矿奖励：玩家通过开采矿脉，能够获得不同类型的资源，如矿石、魔法元素、稀有符文等。这些资源可以用于提升角色能力、交易或出售。',
        description2: '•	挖矿危机：随着开采的深入，矿区的危险性逐渐增加。可能会遇到深层矿脉中的怪物、机械陷阱，甚至其他玩家的竞争。玩家需要谨慎应对，不断提升角色和道具的能力。'
      },
      chapter4: {
        title: '4. 市场与交易：',
        description: '•	资源与道具交易：玩家可以将自己获得的矿石、元素精灵、机械宠物等资源或道具，通过市场进行买卖交易。市场采用区块链技术，确保交易的透明性和安全性。',
        description1: '•	装备提升与合成：通过合成、强化等方式，玩家可以将自己的道具和角色进行升级，打造出更强大的装备和能力。稀有装备可以成为游戏中不可或缺的资源，也可能成为交易市场中的珍品。'
      },
      chapter5: {
        title: '5. 经济系统与代币机制：',
        description: '•	代币系统：游戏内主要代币包括BNB（用于购买盲盒、交易道具、支付手续费等）和TGS（用于参与游戏内主要活动）。玩家可以通过挖矿、完成任务等方式赚取TGS或其他奖励代币。',
        description1: '•	锁仓与质押机制：玩家可以将自己的代币进行锁仓或质押，获得额外的奖励或游戏内的特殊物品。锁仓代币不仅可以获得奖励，还可以提升玩家在游戏中的地位和能力。'
      },
      chapter6: {
        title: '6. 社交与互动：',
        description: '•	公会系统：玩家可以创建或加入公会，与其他玩家组队合作，共同开采矿脉、击败敌人或参与公会战。公会还可以共享资源、互相帮助提升等级。',
        description1: '•	PVP竞技：在某些区域，玩家可以与其他玩家进行实时对战，争夺资源、矿脉或其他有价值的物品。PVP战斗具有较高风险，但同时也有高回报。',
        description2: '•	排行榜与成就：玩家可以通过竞赛、任务和挖矿等方式提升排名，获得丰厚奖励。排行榜展示最强玩家、最富有矿工和最受欢迎的精灵。'
      },
      chapter7: {
        title: '游戏特色：',
        description: '•	多样化角色与技能树：根据不同的矿工角色和精灵，玩家可以选择不同的玩法策略，提升技能并获得不同的游戏体验。',
        description1: '•	去中心化交易：所有的道具、资源和角色均可通过区块链技术进行交易，确保透明和安全。',
        description2: '•	NFT盲盒系统：玩家通过开盲盒来获取游戏内的稀有物品，增加游戏的趣味性和随机性。',
        description3: '•	自由探索与竞争：在游戏中，玩家不仅可以自由探索矿脉和世界，还可以与其他玩家竞争、合作，争夺资源，增添社交和互动体验。'
      },
      conclusion:'The Genesis 为玩家提供了一个充满冒险、挑战与奇遇的幻想世界，融合了区块链技术、NFT、PVP与PVE元素。无论是开盲盒，还是与其他玩家对战、合作，游戏中的每一次决策都充满着可能性和变化。玩家将不仅仅是一个矿工，更是一个冒险家、商人和策略家，最终在这个充满神秘与魔力的世界中，书写属于自己的传奇！'
  },
  subscription: {
    title: '邀请好友',
    description: '通过分享你的邀请链接，被邀请人购买盲盒时将你获得10%的奖励',
    inviteLinkPrefix: '点击复制邀请链接：',
    copySuccess: '邀请链接已复制到剪贴板！',
    presaleContent: '参与认购的用户将获得一枚专属早鸟会员徽章，标志着他们在 TheGenesis 中的独特地位。',
    walletAddress: '钱包地址：',
    myInviteList: '我的邀请列表',
    listdefualt:'暂无邀请人',
    moreinfo:'更多详情 >',
  }
} 