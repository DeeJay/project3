var title         = '2015_05_20_RussHallHospPrayerCentreDudley';
var intro         = '';
var footer        = '© 2015 - Powered by Porta';
var nbImages      = 74;
var smallDir      = 'small';
var mediumDir     = 'medium';
var largeDir      = 'large';
var smallImages   = 1;
var largeImages   = 0;
var currentImage  = 0;
var imageFilename = new Array( '0001.jpg', '0002.jpg', '0003.jpg', '0004.jpg', '0005.jpg', '0006.jpg', '0007.jpg', '0008.jpg', '0009.jpg', '0010.jpg', '0011.jpg', '0012.jpg', '0013.jpg', '0014.jpg', '0015.jpg', '0016.jpg', '0017.jpg', '0018.jpg', '0019.jpg', '0020.jpg', '0021.jpg', '0022.jpg', '0023.jpg', '0024.jpg', '0025.jpg', '0026.jpg', '0027.jpg', '0028.jpg', '0029.jpg', '0030.jpg', '0031.jpg', '0032.jpg', '0033.jpg', '0034.jpg', '0035.jpg', '0036.jpg', '0037.jpg', '0038.jpg', '0039.jpg', '0040.jpg', '0041.jpg', '0042.jpg', '0043.jpg', '0044.jpg', '0045.jpg', '0046.jpg', '0047.jpg', '0048.jpg', '0049.jpg', '0050.jpg', '0051.jpg', '0052.jpg', '0053.jpg', '0054.jpg', '0055.jpg', '0056.jpg', '0057.jpg', '0058.jpg', '0059.jpg', '0060.jpg', '0061.jpg', '0062.jpg', '0063.jpg', '0064.jpg', '0065.jpg', '0066.jpg', '0067.jpg', '0068.jpg', '0069.jpg', '0070.jpg', '0071.jpg', '0072.jpg', '0073.jpg', '0074.jpg' );
var smallWidth    = new Array( 80, 80, 80, 53, 53, 80, 80, 53, 53, 53, 53, 53, 53, 53, 80, 80, 53, 53, 80, 53, 53, 53, 53, 80, 80, 80, 53, 53, 53, 53, 53, 53, 53, 53, 53, 80, 80, 53, 53, 53, 53, 53, 53, 80, 53, 53, 80, 53, 53, 53, 53, 53, 53, 53, 53, 80, 80, 53, 53, 53, 53, 53, 53, 53, 53, 53, 80, 80, 80, 80, 80, 53, 80, 53 );
var smallHeight   = new Array( 53, 53, 53, 80, 80, 53, 53, 80, 80, 80, 80, 80, 80, 80, 53, 53, 80, 80, 53, 80, 80, 80, 80, 53, 53, 53, 80, 80, 80, 80, 80, 80, 80, 80, 80, 53, 53, 80, 80, 80, 80, 80, 80, 53, 80, 80, 53, 80, 80, 80, 80, 80, 80, 80, 80, 53, 53, 80, 80, 80, 80, 80, 80, 80, 80, 80, 53, 53, 53, 53, 53, 80, 53, 80 );
var minSmallW     = 53;
var minSmallH     = 53;
var maxSmallW     = 80;
var maxSmallH     = 80;
var mediumWidth   = new Array( 552, 552, 552, 368, 368, 552, 552, 368, 368, 368, 368, 368, 368, 368, 552, 552, 368, 368, 552, 368, 368, 368, 368, 552, 552, 552, 368, 368, 368, 368, 368, 368, 368, 368, 368, 552, 552, 368, 368, 368, 368, 368, 368, 552, 368, 368, 552, 368, 368, 368, 368, 368, 368, 368, 368, 552, 552, 368, 368, 368, 368, 368, 368, 368, 368, 368, 552, 552, 552, 552, 552, 368, 552, 368 );
var mediumHeight  = new Array( 368, 368, 368, 552, 552, 368, 368, 552, 552, 552, 552, 552, 552, 552, 368, 368, 552, 552, 368, 552, 552, 552, 552, 368, 368, 368, 552, 552, 552, 552, 552, 552, 552, 552, 552, 368, 368, 552, 552, 552, 552, 552, 552, 368, 552, 552, 368, 552, 552, 552, 552, 552, 552, 552, 552, 368, 368, 552, 552, 552, 552, 552, 552, 552, 552, 552, 368, 368, 368, 368, 368, 552, 368, 552 );
var minMediumW    = 368;
var minMediumH    = 368;
var maxMediumW    = 552;
var maxMediumH    = 552;
var majorCaption  = new Array( 'IMG_0741', 'IMG_0742', 'IMG_0743', 'IMG_0744', 'IMG_0745', 'IMG_0746', 'IMG_0747', 'IMG_0748', 'IMG_0749', 'IMG_0750', 'IMG_0751', 'IMG_0752', 'IMG_0753', 'IMG_0754', 'IMG_0755', 'IMG_0756', 'IMG_0757', 'IMG_0758', 'IMG_0759', 'IMG_0760', 'IMG_0761', 'IMG_0762', 'IMG_0763', 'IMG_0764', 'IMG_0765', 'IMG_0766', 'IMG_0767', 'IMG_0768', 'IMG_0769', 'IMG_0770', 'IMG_0771', 'IMG_0772', 'IMG_0773', 'IMG_0774', 'IMG_0775', 'IMG_0776', 'IMG_0777', 'IMG_0778', 'IMG_0779', 'IMG_0780', 'IMG_0781', 'IMG_0782', 'IMG_0783', 'IMG_0784', 'IMG_0785', 'IMG_0786', 'IMG_0787', 'IMG_0788', 'IMG_0789', 'IMG_0790', 'IMG_0791', 'IMG_0792', 'IMG_0793', 'IMG_0794', 'IMG_0795', 'IMG_0796', 'IMG_0797', 'IMG_0798', 'IMG_0799', 'IMG_0800', 'IMG_0801', 'IMG_0802', 'IMG_0803', 'IMG_0804', 'IMG_0805', 'IMG_0806', 'IMG_0807', 'IMG_0808', 'IMG_0809', 'IMG_0810', 'IMG_0811', 'IMG_0812', 'IMG_0813', 'IMG_0814' );
var minorCaption  = new Array( '1/25 s, f/5.6, 18 mm', '1/25 s, f/5.6, 18 mm', '1/25 s, f/5.6, 18 mm', '1/25 s, f/5.6, 24 mm', '1/25 s, f/5.6, 18 mm', '1/25 s, f/5.6, 18 mm', '1/25 s, f/5.6, 18 mm', '1/25 s, f/5.6, 18 mm', '1/25 s, f/5.6, 18 mm', '1/25 s, f/5.6, 18 mm', '1/30 s, f/5.6, 135 mm', '1/25 s, f/5.6, 37 mm', '1/25 s, f/5.6, 37 mm', '1/25 s, f/5.6, 18 mm', '1/25 s, f/5.6, 19 mm', '1/25 s, f/5.6, 19 mm', '1/25 s, f/5.6, 18 mm', '1/25 s, f/5.6, 18 mm', '1/25 s, f/5.6, 18 mm', '1/15 s, f/5.6, 57 mm', '1/30 s, f/5.6, 57 mm', '1/13 s, f/5.6, 24 mm', '1/13 s, f/5.6, 24 mm', '1/25 s, f/5.6, 18 mm', '1/25 s, f/5.6, 18 mm', '1/13 s, f/5.6, 26 mm', '1/15 s, f/5.6, 44 mm', '1/10 s, f/5.6, 29 mm', '1/30 s, f/5.6, 31 mm', '1/50 s, f/5.6, 47 mm', '1/80 s, f/5, 41 mm', '1/50 s, f/5, 47 mm', '1/500 s, f/5.6, 79 mm', '1/100 s, f/5.6, 79 mm', '1/50 s, f/5, 19 mm', '1/200 s, f/5, 20 mm', '1/80 s, f/5, 35 mm', '1/125 s, f/5.6, 135 mm', '1/125 s, f/5.6, 135 mm', '1/80 s, f/5, 39 mm', '1/60 s, f/5, 45 mm', '1/200 s, f/5, 30 mm', '1/320 s, f/5, 41 mm', '1/250 s, f/5, 42 mm', '1/125 s, f/5.6, 92 mm', '1/125 s, f/5.6, 69 mm', '1/200 s, f/5.6, 29 mm', '1/800 s, f/5.6, 30 mm', '1/800 s, f/5.6, 30 mm', '1/400 s, f/5.6, 20 mm', '1/200 s, f/5.6, 20 mm', '1/80 s, f/5.6, 55 mm', '1/60 s, f/6.3, 55 mm', '1/50 s, f/6.3, 39 mm', '1/30 s, f/6.3, 21 mm', '1/40 s, f/6.3, 18 mm', '1/30 s, f/6.3, 18 mm', '1/320 s, f/6.3, 75 mm', '1/250 s, f/5.6, 87 mm', '1/100 s, f/5.6, 87 mm', '1/80 s, f/5.6, 33 mm', '1/30 s, f/5.6, 18 mm', '1/100 s, f/5.6, 100 mm', '1/30 s, f/5.6, 18 mm', '1/50 s, f/5.6, 38 mm', '1/30 s, f/5.6, 28 mm', '1/500 s, f/5.6, 26 mm', '1/400 s, f/5.6, 26 mm', '1/125 s, f/5.6, 62 mm', '1/125 s, f/5.6, 62 mm', '1/50 s, f/5.6, 37 mm', '1/25 s, f/5.6, 19 mm', '1/30 s, f/5.6, 20 mm', '1/25 s, f/5.6, 25 mm' );
var smallPos      = 'left';
var clinks_href   = new Array();
var clinks_txt    = new Array();
var slink_href    = '';
var slink_txt     = '';
