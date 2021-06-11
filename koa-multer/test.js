
// 取得傳的文件
const file = ctx.request.files.avatar;
// 建立可讀取的串流
const reader = fs.createReadStream(file.path);


let filePath = path.join(__dirname, 'public/upload/') + `/${file.name}`;
// 建立可寫入的串流
const upStream = fs.createWriteStream(filePath);
const upStream = fs.createWriteStream(`./public/upload/${file.name}`);


reader.pipe(upStream);
