// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'img/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 35;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 3;
var ary_TitleData = [
  "Generation 0",
  "Generation 1",
  "Generation 2",
  "hololive GAMERS",
  "Generation 3",
  "Generation 4",
  "Generation 5",
  "hololive EN",
  "hololive ID",
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  [1, "Tokino Sora",      [1,0,0,0,0,0,0,0,0], "gen0/tokinosora.png"],
  [1, "Roboco",           [1,0,0,0,0,0,0,0,0], "gen0/roboco.png"],
  [1, "Sakura Miko",      [1,0,0,0,0,0,0,0,0], "gen0/sakuramiko.png"],
  [1, "Hoshimachi Suisei",[1,0,0,0,0,0,0,0,0], "gen0/hoshimachisuisei.png"],
  [1, "Yozora Mel",       [0,1,0,0,0,0,0,0,0], "gen1/yozoramel.png"],
  [1, "Shirakami Fubuki", [0,1,0,1,0,0,0,0,0], "gen1/shirakamifubuki.png"],
  [1, "Natsuiro Matsuri", [0,1,0,0,0,0,0,0,0], "gen1/natsuiromatsuri.png"],
  [1, "Aki Rosenthal",    [0,1,0,0,0,0,0,0,0], "gen1/akirosenthal.png"],
  [1, "Akai Haato",       [0,1,0,0,0,0,0,0,0], "gen1/akaihaato.png"],
  [1, "Minato Aqua",      [0,0,1,0,0,0,0,0,0], "gen2/minatoaqua.png"],
  [1, "Murasaki Shion",   [0,0,1,0,0,0,0,0,0], "gen2/murasakishion.png"],
  [1, "Nakiri Ayame",     [0,0,1,0,0,0,0,0,0], "gen2/nakiriayame.png"],
  [1, "Yuzuki Choco",     [0,0,1,0,0,0,0,0,0], "gen2/yuzukichoco.png"],
  [1, "Oozora Subaru",    [0,0,1,0,0,0,0,0,0], "gen2/oozorasubaru.png"],
  [1, "Ookami Mio",       [0,0,0,1,0,0,0,0,0], "gamers/ookamimio.png"],
  [1, "Nekomata Okayu",   [0,0,0,1,0,0,0,0,0], "gamers/nekomataokayu.png"],
  [1, "Inugami Korone",   [0,0,0,1,0,0,0,0,0], "gamers/inugamikorone.png"],
  [1, "Usada Pekora",     [0,0,0,0,1,0,0,0,0], "gen3/usadapekora.png"],
  [1, "Uruha Rushia",     [0,0,0,0,1,0,0,0,0], "gen3/uruharushia.png"],
  [1, "Shiranui Flare",   [0,0,0,0,1,0,0,0,0], "gen3/shiranuiflare.png"],
  [1, "Shirogane Noel",   [0,0,0,0,1,0,0,0,0], "gen3/shiroganenoel.png"],
  [1, "Houshou Marine",   [0,0,0,0,1,0,0,0,0], "gen3/houshoumarine.png"],
  [1, "Amane Kanata",     [0,0,0,0,0,1,0,0,0], "gen4/amanekanata.png"],
  [1, "Kiryu Coco",       [0,0,0,0,0,1,0,0,0], "gen4/kiryucoco.png"],
  [1, "Tsunomaki Watame", [0,0,0,0,0,1,0,0,0], "gen4/tsunomakiwatame.png"],
  [1, "Tokoyami Towa",    [0,0,0,0,0,1,0,0,0], "gen4/tokoyamitowa.png"],
  [1, "Himemori Luna",    [0,0,0,0,0,1,0,0,0], "gen4/himemoriluna.png"],
  [1, "Yukihana Lamy",    [0,0,0,0,0,0,1,0,0], "gen5/yukihanalamy.png"],
  [1, "Momosuzu Nene",    [0,0,0,0,0,0,1,0,0], "gen5/momosuzunene.png"],
  [1, "Shishiro Botan",   [0,0,0,0,0,0,1,0,0], "gen5/shishirobotan.png"],
  [1, "Omaru Polka",      [0,0,0,0,0,0,1,0,0], "gen5/omarupolka.png"],
  [1, "Mori Calliope",    [0,0,0,0,0,0,0,1,0], "en/moricalliope.png"],
  [1, "Takanashi Kiara",  [0,0,0,0,0,0,0,1,0], "en/takanashikiara.png"],
  [1, "Ninomae Ina'nis",  [0,0,0,0,0,0,0,1,0], "en/ninomaeinanis.png"],
  [1, "Gawr Gura",        [0,0,0,0,0,0,0,1,0], "en/gawrgura.png"],
  [1, "Watson Amelia",    [0,0,0,0,0,0,0,1,0], "en/watsonamelia.png"],
  [1, "Ayunda Risu",      [0,0,0,0,0,0,0,0,1], "id/ayundarisu.png"],
  [1, "Hoshinova Moona",  [0,0,0,0,0,0,0,0,1], "id/hoshinovamoona.png"],
  [1, "Airani Iofifteen", [0,0,0,0,0,0,0,0,1], "id/airaniiofifteen.png"]
];
