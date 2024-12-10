class Cena2 extends Phaser.Scene {
    constructor() {
        super({ key: "Cena2" });
        this.player = null;
        this.letras = null;
        this.timeLeft = 500;
        this.startTimer = 3;
        this.timerText = null;
        this.gameStarted = false;
        this.startTimerEvent = null;
        this.gameTimerEvent = null;
        this.carregandoLetra = null;
        this.pontuacao = 0;
        this.numeroSprites = [];
    }

    preload() {
        this.load.image(
            "mostrarPalavras",
            "./assets/img/conteudo/Background/navbarpalavras.png"
        );

        this.load.image(
            "areaEntrega",
            "./assets/img/conteudo/Background/caixapalavras.png"
        );
        this.load.image(
            "moldura",
            "./assets/img/conteudo/BOTÃO/backgroundImage.png"
        );
        this.load.image("Cachorro", "./assets/img/conteudo/icones/cao.png");
        this.load.image("zebra", "./assets/img/conteudo/icones/zebra.png");
        this.load.image(
            "elefante",
            "./assets/img/conteudo/icones/elefante.png"
        );
        this.load.image("abacaxi", "./assets/img/conteudo/icones/abacaxi.png");
        this.load.image(
            "avestruz",
            "./assets/img/conteudo/icones/avestruz.png"
        );

        this.load.image("banana", "./assets/img/conteudo/icones/banana.png");
        this.load.image("celular", "./assets/img/conteudo/icones/celular2.png");

        this.load.image("chave", "./assets/img/conteudo/icones/chave.png");
        this.load.image("coelho", "./assets/img/conteudo/icones/coelho.png");
        this.load.image("garrafa", "./assets/img/conteudo/icones/garrafa.png");
        this.load.image("gato", "./assets/img/conteudo/icones/gato.png");
        this.load.image("girafa", "./assets/img/conteudo/icones/girafa.png");
        this.load.image("jacare", "./assets/img/conteudo/icones/jacare.png");
        this.load.image("lapis", "./assets/img/conteudo/icones/lapis.png");
        this.load.image("laranja", "./assets/img/conteudo/icones/laranja.png");
        this.load.image("largato", "./assets/img/conteudo/icones/largato.png");
        this.load.image("mochila", "./assets/img/conteudo/icones/mochila.png");
        this.load.image("morango", "./assets/img/conteudo/icones/morango.png");
        this.load.image(
            "mosquito",
            "./assets/img/conteudo/icones/mosquito.png"
        );
        this.load.image("oculos", "./assets/img/conteudo/icones/oculos.png");
        this.load.image(
            "papagaio",
            "./assets/img/conteudo/icones/papagaio.png"
        );
        this.load.image("pera", "./assets/img/conteudo/icones/pera.png");
        this.load.image(
            "rinoceronte",
            "./assets/img/conteudo/icones/rinoceronte.png"
        );
        this.load.image(
            "tartaruga",
            "./assets/img/conteudo/icones/tartaruga.png"
        );
        this.load.image(
            "televisao",
            "./assets/img/conteudo/icones/televisão.png"
        );
        this.load.image("tigre", "./assets/img/conteudo/icones/tigre.png");
        this.load.image("uva", "./assets/img/conteudo/icones/uva.png");
        this.load.image("vaca", "./assets/img/conteudo/icones/vaca.png");

        this.load.image(
            "botaoConfirmarVerde",
            "./assets/img/conteudo/BOTÃO/palavraCerta.png"
        );
        this.load.image(
            "botaoReiniciar",
            "./assets/img/conteudo/BOTÃO/BotaoReiniciar.png"
        );

        this.load.image(
            "botaoApagar1Letra",
            "./assets/img/conteudo/BOTÃO/botaoApagar.png"
        );
        this.load.image(
            "botaoConfirmarVermelho",
            "./assets/img/conteudo/BOTÃO/palavraErrada.png"
        );
        this.load.image(
            "A",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-AA2.png"
        );
        this.load.image(
            "B",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-bb.png"
        );
        this.load.image(
            "C",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-cc2.png"
        );
        this.load.image(
            "D",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-DD2.png"
        );
        this.load.image(
            "E",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-EE2.png"
        );
        this.load.image(
            "F",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-FF.png"
        );
        this.load.image(
            "G",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-GG2.png"
        );
        this.load.image(
            "H",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-HH2.png"
        );
        this.load.image(
            "I",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-II2.png"
        );
        this.load.image(
            "J",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-jj2.png"
        );
        this.load.image(
            "K",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-kk.png"
        );
        this.load.image(
            "L",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-ll.png"
        );
        this.load.image(
            "M",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-M.png"
        );
        this.load.image(
            "N",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-nn2.png"
        );
        this.load.image(
            "O",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-OO2.png"
        );
        this.load.image(
            "P",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-PP2.png"
        );
        this.load.image(
            "Q",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-QQ2.png"
        );
        this.load.image(
            "R",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-RR2.png"
        );
        this.load.image(
            "S",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-S.png"
        );
        this.load.image(
            "T",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-TT2.png"
        );
        this.load.image(
            "U",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-UU2.png"
        );
        this.load.image(
            "V",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-VV2.png"
        );
        this.load.image(
            "W",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-WW2.png"
        );
        this.load.image(
            "X",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-XX2.png"
        );
        this.load.image(
            "Y",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-YY2.png"
        );
        this.load.image(
            "Z",
            "./assets/img/conteudo/LITRTAS22/LITRTAS22/Sprite-ZZ2.png"
        );
        this.load.image(
            "botaoplay",
            "./assets/img/conteudo/BOTÃO/BOTÃO_PLAY.png"
        );
        this.load.tilemapTiledJSON("mapa", "./map-professor-att.json");
        this.load.image(
            "CFS1",
            "./assets/map_professor/Classroom_First_Spritesheet_1.png"
        );
        this.load.image(
            "AcabouTempo",
            "./assets/img/conteudo/Background/acaboutempo.png"
        );
        this.load.image(
            "CFS6",
            "./assets/map_professor/Classroom_First_Spritesheet_6.png"
        );
        this.load.image(
            "CPFSc",
            "./assets/map_professor/Classroom_PropsFirst_Spritesheet-cop.png"
        );
        this.load.image(
            "CPSP4",
            "./assets/map_professor/ClassroomPropsSecondSpritesheet4.png"
        );
        this.load.image(
            "CSS7",
            "./assets/map_professor/ClassroomSecondSpritesheet7.png"
        );
        this.load.image(
            "CSSC",
            "./assets/map_professor/ClassroomSecond_Spritesheet-cop.png"
        );
        this.load.image(
            "POFS4",
            "./assets/map_professor/PrincipalOfficeSecondSpritesheet4.png"
        );
        this.load.image(
            "POSS4",
            "./assets/map_professor/strokespritesheet20125.png"
        );
        this.load.image(
            "WFD5",
            "./assets/map_professor/Wallfloordoorw_First_Spritesheet_5.png"
        );
        this.load.image(
            "SPS",
            "./assets/map_professor/strokespritesheet20121.png"
        );
        this.load.spritesheet(
            "BN",
            "./assets/img/conteudo/PERSONAGEM/george_0.png",
            {
                frameWidth: 92,
                frameHeight: 92,
            }
        );
    }

    create() {
        const map = this.make.tilemap({ key: "mapa" });

        const CFS1 = map.addTilesetImage(
            "Classroom_First_Spritesheet_1",
            "CFS1"
        );
        const CFS6 = map.addTilesetImage(
            "Classroom_First_Spritesheet_6",
            "CFS6"
        );
        const CPFSc = map.addTilesetImage(
            "Classroom_PropsFirst_Spritesheet-cop",
            "CPFSc"
        );
        const CPSP4 = map.addTilesetImage(
            "ClassroomPropsSecondSpritesheet4",
            "CPSP4"
        );
        const CSS7 = map.addTilesetImage("ClassroomSecondSpritesheet7", "CSS7");
        const CSSC = map.addTilesetImage(
            "ClassroomSecond_Spritesheet-cop",
            "CSSC"
        );
        const POFS4 = map.addTilesetImage(
            "PrincipalOfficeSecondSpritesheet4",
            "POFS4"
        );
        const SPS = map.addTilesetImage("strokespritesheet20125", "SPS");
        const WFD5 = map.addTilesetImage(
            "Wallfloordoorw_First_Spritesheet_5",
            "WFD5"
        );

        const chao = map.createLayer("chao", [SPS], 0, 0);
        const parede = map.createLayer("parede", [WFD5], 0, 0);
        const quadro = map.createLayer("quadro", [CPFSc], 0, 0);

        const decoracao = map.createLayer(
            "decoracao",
            [CFS1, CPSP4, CSSC],
            0,
            0
        );

        this.physics.world.on("worldbounds", (body) => {
            const letra = body.gameObject;
            if (
                letra &&
                letra.texture &&
                letra.y > this.sys.game.config.height
            ) {
                letra.destroy();
                console.log(`Letra destruída: ${letra.texture.key}`);
            }
        });
        this.botaoApagar = this.add.image(800, 880, "botaoApagar1Letra");
        this.botaoApagar.setInteractive().setScale(0.5);
        this.botaoApagar.on("pointerdown", () => {
            this.removerUltimaLetra();
        });
        this.player = this.physics.add.sprite(800, 800, "BN");
        this.player.setCollideWorldBounds(true);
        this.player.body.onWorldBounds = true;
        chao.setCollisionByExclusion([-1]);
        this.physics.add.collider(this.player, chao);

        this.physics.add.collider(this.player, parede);
        parede.setCollisionByExclusion([-1]);
        this.letras = this.physics.add.group();

        this.botaoConfirmarVerde = this.add.image(
            100,
            100,
            "botaoConfirmarVerde"
        );
        this.botaoConfirmarVerde.setVisible(false).setScale(0.5);

        this.botaoConfirmarVermelho = this.add.image(
            100,
            100,
            "botaoConfirmarVermelho"
        );
        this.botaoConfirmarVermelho.setVisible(false).setScale(0.5);
        this.imagensPalavras = [
            { imagem: "Cachorro", palavra: "CAO" },
            { imagem: "zebra", palavra: "ZEBRA" },
            { imagem: "elefante", palavra: "ELEFANTE" },
            { imagem: "abacaxi", palavra: "ABACAXI" },
            { imagem: "avestruz", palavra: "AVESTRUZ" },
            { imagem: "banana", palavra: "BANANA" },
            { imagem: "celular", palavra: "CELULAR" },
            { imagem: "chave", palavra: "CHAVE" },
            { imagem: "coelho", palavra: "COELHO" },
            { imagem: "garrafa", palavra: "GARRAFA" },
            { imagem: "gato", palavra: "GATO" },
            { imagem: "girafa", palavra: "GIRAFA" },
            { imagem: "jacare", palavra: "JACARE" },
            { imagem: "lapis", palavra: "LAPIS" },
            { imagem: "laranja", palavra: "LARANJA" },
            { imagem: "largato", palavra: "LARGATO" },
            { imagem: "mochila", palavra: "MOCHILA" },
            { imagem: "morango", palavra: "MORANGO" },
            { imagem: "mosquito", palavra: "MOSQUITO" },
            { imagem: "oculos", palavra: "OCULOS" },
            { imagem: "papagaio", palavra: "PAPAGAIO" },
            { imagem: "pera", palavra: "PERA" },
            { imagem: "rinoceronte", palavra: "RINOCERONTE" },
            { imagem: "tartaruga", palavra: "TARTARUGA" },
            { imagem: "televisao", palavra: "TELEVISAO" },
            { imagem: "tigre", palavra: "TIGRE" },
            { imagem: "uva", palavra: "UVA" },
            { imagem: "vaca", palavra: "VACA" },
        ];
        this.selecionarImagem();

        this.cursors = this.input.keyboard.createCursorKeys();
        this.anims.create({
            key: "down",
            frames: this.anims.generateFrameNumbers("BN", {
                frames: [0, 4, 8, 12],
            }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: "up",
            frames: this.anims.generateFrameNumbers("BN", {
                frames: [2, 6, 10, 14],
            }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("BN", {
                frames: [1, 5, 9, 13],
            }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("BN", {
                frames: [3, 7, 11, 15],
            }),
            frameRate: 10,
            repeat: -1,
        });
        this.timerText = this.add
            .text(
                this.sys.game.config.width / 2,
                this.sys.game.config.height / 2,
                this.startTimer,
                { fontSize: "64px", fill: "#ffffff" }
            )
            .setOrigin(0.5);
        this.time.addEvent({
            delay: 1000,
            callback: this.updateStartTimer,
            callbackScope: this,
            loop: true,
        });

        this.physics.pause();

        this.time.addEvent({
            delay: 2000,
            callback: this.spawnLetra,
            callbackScope: this,
            loop: true,
        });

        this.mostrarPalavras = this.add.image(100, 850, "mostrarPalavras");
        this.mostrarPalavras.setOrigin(0.1);
        this.areaEntrega = this.add.image(120, 200, "areaEntrega");
        this.teclaSoltar = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );
        this.areaEntrega.setOrigin(0.5);
        this.areaEntrega.setScale(0.8);
        this.physics.add.existing(this.areaEntrega, true);
        this.physics.add.existing(this.areaEntrega, true);
        this.letrasExibidas = [];
        this.palavraFormada = "";
        this.physics.add.overlap(
            this.player,
            this.areaEntrega,
            this.entregarLetra,
            null,
            this
        );
        this.teclaSoltar.on("down", () => {
            if (this.carregandoLetra) {
                this.soltarLetra();
            }
        });
        this.soltarLetra = () => {
            if (this.carregandoLetra) {
                const letra = this.carregandoLetra;
                this.time.delayedCall(500, () => {
                    letra.destroy();
                });

                this.carregandoLetra = null;
            }
        };
        this.anims.create({
            key: "pickup",
            frames: this.anims.generateFrameNumbers("BN", {
                start: 16,
                end: 19,
            }),
            frameRate: 10,
            repeat: 0,
        });
        this.physics.add.overlap(
            this.player,
            this.letras,
            this.pegarLetra,
            null,
            this
        );
        this.physics.add.overlap(
            this.player,
            this.letras,
            this.pegarLetra,
            null,
            this
        );
        this.physics.add.overlap(
            this.player,
            this.areaEntrega,
            this.entregarLetra,
            null,
            this
        );
        this.fimJogoImagem = this.add
            .image(
                this.cameras.main.centerX,
                this.cameras.main.centerY,
                "AcabouTempo"
            )
            .setOrigin(0.5)
            .setVisible(false);

        this.palavraImagemAtual = "";
        this.jogoTerminado = false;
    }
    atualizarPontuacao() {
        this.numeroSprites.forEach((sprite) => sprite.destroy());
        this.numeroSprites = [];

        const pontosStr = this.pontuacao.toString();

        let posX = 800;
        for (let i = 0; i < pontosStr.length; i++) {
            const numero = pontosStr[i];
            const numeroSprite = this.add.image(posX, 50, `numero_${numero}`);
            numeroSprite.setScale(0.5);
            this.numeroSprites.push(numeroSprite);
            posX += 40;
        }
    }
    adicionarPontos() {
        this.pontuacao += 100;
        this.atualizarPontuacao();
        this.palavraFormada = "";
        this.letrasExibidas.forEach((letra) => letra.destroy());
        this.letrasExibidas = [];
        console.log(`Pontuação atual: ${this.pontuacao}`);
    }

    limparLetras() {
        this.letras.clear(true, true);
        console.log("Todas as letras foram removidas.");
    }

    exibirTelaFimJogo() {
        this.physics.pause();
        this.limparLetras();
        this.fimJogoImagem.setVisible(true);

        this.add
            .text(
                this.cameras.main.centerX,
                this.cameras.main.centerY - 80,
                `Pontuação: ${this.pontuacao}`,
                { font: "45px Arial", fill: "#fff" }
            )
            .setOrigin(0.5);

        if (this.moldura) this.moldura.setVisible(false);
        if (this.imagemAtual) this.imagemAtual.setVisible(false);
    }

    selecionarImagem() {
        if (this.renderTexture) {
            this.renderTexture.destroy();
        }

        const escolha = Phaser.Utils.Array.GetRandom(this.imagensPalavras);
        this.imagemExibida = escolha.imagem;
        this.palavraCorreta = escolha.palavra;

        const molduraKey = "moldura";
        const moldura = this.textures.get(molduraKey).getSourceImage();

        const molduraWidth = moldura.width;
        const molduraHeight = moldura.height;

        const imagemKey = this.imagemExibida;
        const imagem = this.textures.get(imagemKey).getSourceImage();

        const imagemWidth = imagem.width;
        const imagemHeight = imagem.height;

        const renderTextureWidth = Math.max(molduraWidth, imagemWidth);
        const renderTextureHeight = Math.max(molduraHeight, imagemHeight);

        this.renderTexture = this.add.renderTexture(
            120,
            760,
            renderTextureWidth,
            renderTextureHeight
        );

        const molduraX = (renderTextureWidth - molduraWidth) / 2;
        const molduraY = (renderTextureHeight - molduraHeight) / 2;
        this.renderTexture.draw(molduraKey, molduraX, molduraY);

        const imagemX = molduraX + (molduraWidth - imagemWidth) / 2;
        const imagemY = molduraY + (molduraHeight - imagemHeight) / 2;

        this.renderTexture.draw(imagemKey, imagemX, imagemY);

        console.log(
            `Imagem exibida: ${this.imagemExibida}, Palavra correta: ${this.palavraCorreta}`
        );
    }

    removerUltimaLetra() {
        if (this.palavraFormada.length > 0) {
            this.palavraFormada = this.palavraFormada.slice(0, -1);

            this.atualizarExibicaoLetras();

            console.log(`Palavra atualizada: ${this.palavraFormada}`);

            this.validarProgresso();
        } else {
            console.log("Não há letras para remover.");
        }
    }

    pegarLetra(player, letra) {
        if (!this.carregandoLetra) {
            console.log(`Pegou a letra: ${letra.texture.key}`);
            this.carregandoLetra = letra;
            letra.body.setVelocity(0);
            letra.setCollideWorldBounds(false);
            letra.body.enable = false;
            letra.setAlpha(0.5);
        }
    }

    entregarLetra(player, areaEntrega) {
        if (this.carregandoLetra) {
            const distancia = Phaser.Math.Distance.Between(
                player.x,
                player.y,
                areaEntrega.x,
                areaEntrega.y
            );

            if (distancia <= 120) {
                const letraAtual = this.carregandoLetra.texture.key;

                this.palavraFormada += letraAtual;

                console.log(`Letra entregue: ${letraAtual}`);
                console.log(
                    `Palavra formada até agora: ${this.palavraFormada}`
                );
                console.log(`Palavra correta: ${this.palavraCorreta}`);

                this.atualizarExibicaoLetras();

                this.carregandoLetra.destroy();
                this.carregandoLetra = null;

                this.validarProgresso();
            } else {
                console.log("Chegue mais perto para entregar a letra.");
            }
        }
    }

    validarProgresso() {
        console.log(
            "Palavra correta no momento da validação:",
            this.palavraCorreta
        );
        console.log("Palavra formada até o momento:", this.palavraFormada);

        if (!this.palavraCorreta) {
            console.error("Erro: Nenhuma palavra correta foi definida!");
            return;
        }

        this.botaoConfirmarVerde.setVisible(false);
        this.botaoConfirmarVermelho.setVisible(false);

        if (this.palavraFormada.length === 0) {
            console.log("Nenhuma letra formada. Ocultando botões.");
            return;
        }

        if (this.palavraCorreta.startsWith(this.palavraFormada)) {
            console.log(`Progresso correto: ${this.palavraFormada}`);
            this.botaoConfirmarVerde.setVisible(true);

            if (this.palavraFormada === this.palavraCorreta) {
                console.log("Palavra completa!");
                this.adicionarPontos();
                this.reiniciarJogo();
            }
        } else {
            console.log(`Progresso errado: ${this.palavraFormada}`);
            this.botaoConfirmarVermelho.setVisible(true);
        }
    }

    reiniciarJogo() {
        this.palavraFormada = "";
        this.atualizarExibicaoLetras();

        this.exibirNovaImagem();

        this.reposicionarLetras();
    }
    reposicionarLetras() {
        if (this.letras) {
            this.letras.getChildren().forEach((letra) => {
                letra.destroy();
            });
        }

        this.spawnLetra();
    }

    exibirNovaImagem() {
        this.selecionarImagem();

        this.palavraFormada = "";
        this.atualizarExibicaoLetras();

        this.botaoConfirmarVerde.setVisible(false);
        this.botaoConfirmarVermelho.setVisible(false);
    }

    adicionarPontos() {
        if (this.gameOver) return;
        this.pontuacao += 100;
        this.atualizarPontuacao();
        this.palavraFormada = "";
        this.letrasExibidas.forEach((letra) => letra.destroy());
        this.letrasExibidas = [];
        console.log(`Pontuação atual: ${this.pontuacao}`);
    }

    atualizarExibicaoLetras() {
        this.letrasExibidas.forEach((letra) => letra.destroy());
        this.letrasExibidas = [];

        const espacamento = 70;

        for (let i = 0; i < this.palavraFormada.length; i++) {
            const letra = this.palavraFormada[i];

            const novaPosicaoX = this.mostrarPalavras.x + 25 + i * espacamento;

            const novaLetra = this.add.image(
                novaPosicaoX,
                this.mostrarPalavras.y + this.mostrarPalavras.height / 2,
                letra
            );

            novaLetra.setOrigin(0.7);
            novaLetra.setScale(0.8);
            novaLetra.setDepth(1);

            this.letrasExibidas.push(novaLetra);
        }
    }

    validarPalavra() {
        if (!Array.isArray(this.imagensPalavras)) {
            console.error("imagensPalavras não é um array válido");
            return;
        }

        const palavraCorreta = this.imagensPalavras.find(
            (item) => item.palavra === this.palavraFormada
        );

        if (palavraCorreta) {
            console.log("Parabéns! Você formou uma palavra correta!");
            this.botaoConfirmarVerde.setVisible(true);
            this.botaoConfirmarVermelho.setVisible(false);
        } else {
            console.log("Palavra inválida!");
            this.botaoConfirmarVerde.setVisible(false);
            this.botaoConfirmarVermelho.setVisible(true);
        }
    }

    apagarPalavra() {
        if (this.palavraFormada.length > 0) {
            this.palavraFormada = this.palavraFormada.slice(0, -1);

            this.atualizarExibicaoLetras();

            console.log(
                "Última letra apagada. Palavra atualizada:",
                this.palavraFormada
            );
            this.validarProgresso();
        }
    }

    updateStartTimer() {
        if (this.startTimer > 1) {
            this.startTimer--;
            this.timerText.setText(this.startTimer);
        } else if (this.startTimer === 1) {
            this.startTimer = 0;
            this.timerText.setText("GO!");

            if (this.startTimerEvent) {
                this.startTimerEvent.remove();
                this.startTimerEvent = null;
            }

            this.time.delayedCall(500, () => {
                this.timerText.destroy();
                this.physics.resume();
                this.gameStarted = true;

                this.gameTimerEvent = this.time.addEvent({
                    delay: 1000,
                    callback: this.updateTimer,
                    callbackScope: this,
                    loop: true,
                });
            });
        }
    }

    spawnLetra() {
        if (!this.gameStarted) {
            return;
        }

        const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        const numLetras = Phaser.Math.Between(3, 6);
        const espacamento = 130;
        let x = Phaser.Math.Between(200, 900);
        let y = -50;
        const larguraTela = this.sys.game.config.width;

        for (let i = 0; i < numLetras; i++) {
            const letraAleatoria =
                letras[Phaser.Math.Between(0, letras.length - 1)];

            if (!this.textures.exists(letraAleatoria)) {
                console.error(
                    `Erro: Imagem da letra '${letraAleatoria}' não foi carregada.`
                );
                return;
            }

            if (x + espacamento > larguraTela) {
                x = 150;
                y += 100;
            }

            const letra = this.letras.create(x, y, letraAleatoria);

            if (!letra) {
                console.error("Erro: Letra não foi criada corretamente.");
                return;
            }

            letra.setVelocityY(Phaser.Math.Between(100, 280));
            letra.body.setCollideWorldBounds(false);
            letra.body.onWorldBounds = true;

            letra.body.world.on("worldbounds", (body) => {
                if (
                    body.gameObject === letra &&
                    letra.y > this.sys.game.config.height
                ) {
                    letra.destroy();
                    console.log(`Letra destruída: ${letra.texture.key}`);
                }
            });

            x += espacamento;
            console.log(`Letra criada: ${letraAleatoria}`);
        }
    }

    updateTimer() {
        if (this.timeLeft > 0) {
            this.timeLeft--;
        } else {
            console.log("Time's Up!");

            if (this.gameTimerEvent) {
                this.gameTimerEvent.remove();
                this.gameTimerEvent = null;
            }

            this.scene.pause();
            this.exibirTelaFimJogo();
        }
    }
    update() {
        if (!this.gameStarted || !this.player) return;

        this.player.setVelocity(0);

        if (this.teclaSoltar.isDown) {
            this.soltarLetra.call(this);
        }
        if (
            this.input.keyboard.checkDown(
                this.input.keyboard.addKey(
                    Phaser.Input.Keyboard.KeyCodes.BACKSPACE
                ),
                300
            )
        ) {
            this.apagarPalavra();
        }

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-260);
            this.player.anims.play("left", true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(260);
            this.player.anims.play("right", true);
        } else if (this.cursors.up.isDown) {
            this.player.setVelocityY(-260);
            this.player.anims.play("up", true);
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(360);
            this.player.anims.play("down", true);
        } else {
            this.player.anims.stop();
        }

        if (this.carregandoLetra) {
            this.carregandoLetra.x = this.player.x;
            this.carregandoLetra.y = this.player.y - 20;
        }
    }
}
