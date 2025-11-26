async function createKomik(database, komikData) {
    const { judul, deskripsi, penulis, imageType, imageName, imageData } = komikData;

    if (!judul || !deskripsi || !penulis) {
        throw new Error('Title, description, dan author wajib diisi');
    }

    const newKomik = await database.Komik.create({
        judul,
        deskripsi,
        penulis,
        imageType: imageType || null,
        imageName: imageName || null,
        imageData: imageData || null,
    });

    return newKomik;
}


