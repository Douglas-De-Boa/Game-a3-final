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
        this.pontuacao = 0; // Inicializa a pontuação
        this.numeroSprites = []; // Certifique-se de que a variável está inicializada // Texto na interface inferior // Flag para indicar o início do jogo
    }

    preload() {
        this.load.image(
            "mostrarPalavras",
            "./assets/img/conteudo/Background/navbarpalavras.png"
        );
        // Substitua pelo caminho real da imagem do botão
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
            "botaovoltar",
            "./assets/img/conteudo/BOTÃO/botaoVoltar.png"
        );
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
        ); // Substitua pelo caminho real da imagem do botão
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
                frameWidth: 92, // Largura de cada quadro
                frameHeight: 92, // Altura de cada quadro
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
        //this.add.image(400, 300, "bgC1");

        // Criar o personagem com física
        this.physics.world.on("worldbounds", (body) => {
            const letra = body.gameObject;
            if (
                letra &&
                letra.texture &&
                letra.y > this.sys.game.config.height
            ) {
                letra.destroy(); // Destrói a letra quando atinge o limite
                console.log(`Letra destruída: ${letra.texture.key}`);
            }
        });
        this.botaoApagar = this.add.image(900, 850, "botaoApagar1Letra"); // Substitua "botaoplay" pela imagem do botão desejado
        this.botaoApagar.setInteractive().setScale(0.5); // Tornar o botão interativo e ajustar o tamanho
        this.botaoApagar.on("pointerdown", () => {
            this.removerUltimaLetra();
        });
        this.player = this.physics.add.sprite(800, 800, "BN");
        this.player.setCollideWorldBounds(true); // Impede que o personagem saia da tela
        this.player.body.onWorldBounds = true;
        //this.player.setVelocity(0); // Inicia sem velocidade
        chao.setCollisionByExclusion([-1]); // Configura colisões no chão
        this.physics.add.collider(this.player, chao);
        // Habilita colisão para as camadas desejadas
        this.physics.add.collider(this.player, parede);
        parede.setCollisionByExclusion([-1]); // Colisões em paredes,
        this.letras = this.physics.add.group();

        // Criar o personagem com física
        this.botaoConfirmarVerde = this.add.image(
            600,
            600,
            "botaoConfirmarVerde"
        );
        this.botaoConfirmarVerde.setVisible(false).setScale(0.5);

        this.botaoConfirmarVermelho = this.add.image(
            600,
            600,
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
            // Adicione mais imagens e palavras conforme necessário
        ];
        this.selecionarImagem();
        // Criar as teclas de controle
        this.cursors = this.input.keyboard.createCursorKeys();
        // Define a profundidade para estar acima de outras camadas
        // Animação para movimento para baixo (quadros 0, 4, 8, 12)
        this.anims.create({
            key: "down",
            frames: this.anims.generateFrameNumbers("BN", {
                frames: [0, 4, 8, 12],
            }),
            frameRate: 10,
            repeat: -1,
        });

        // Animação para movimento para cima (quadros 1, 5, 9, 13)
        this.anims.create({
            key: "up",
            frames: this.anims.generateFrameNumbers("BN", {
                frames: [2, 6, 10, 14],
            }),
            frameRate: 10,
            repeat: -1,
        });

        // Animação para movimento para a esquerda (quadros 2, 6, 10, 14)
        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("BN", {
                frames: [1, 5, 9, 13],
            }),
            frameRate: 10,
            repeat: -1,
        });

        // Animação para movimento para a direita (quadros 3, 7, 11, 15)
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
            .setOrigin(0.5); // Centraliza o texto

        // Evento para decrementar o timer a cada segundo
        this.time.addEvent({
            delay: 1000, // 1 segundo
            callback: this.updateStartTimer,
            callbackScope: this,
            loop: true,
        });

        // Pausar interações do jogo enquanto o timer não acaba
        this.physics.pause();

        this.time.addEvent({
            delay: 2000, // A cada 1 segundo
            callback: this.spawnLetra,
            callbackScope: this,
            loop: true,
        });

        this.mostrarPalavras = this.add.image(100, 850, "mostrarPalavras");
        this.mostrarPalavras.setOrigin(0.1);
        this.areaEntrega = this.add.image(120, 200, "areaEntrega");
        this.teclaSoltar = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        ); // Ajuste para Phaser 3.x
        this.areaEntrega.setOrigin(0.5); // Centraliza a imagem
        this.areaEntrega.setScale(0.8); // Ajusta o tamanho, se necessário
        this.physics.add.existing(this.areaEntrega, true);
        this.physics.add.existing(this.areaEntrega, true); // Tornar a área estática
        this.letrasExibidas = [];
        this.palavraFormada = "";
        // Detectar colisão com a área de entrega
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
                    // Atraso para dar tempo de ver a queda
                    letra.destroy(); // Remove a letra da cena
                });
                // Faz a letra cair para baixo (ajuste a velocidade conforme necessário)
                this.carregandoLetra = null; // A letra não está mais com o jogador
            }
        };
        this.anims.create({
            key: "pickup",
            frames: this.anims.generateFrameNumbers("BN", {
                start: 16,
                end: 19,
            }), // Ajuste os frames
            frameRate: 10,
            repeat: 0, // Toca uma vez
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
            .setVisible(false); // A imagem começa invisível

        // Criar o botão de voltar, mas também escondido inicialmente
        this.botaovoltar = this.add
            .image(
                this.cameras.main.centerX,
                this.cameras.main.centerY + 100,
                "botaovoltar"
            )
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .setDepth(100) // Garante que está acima de outros elementos
            .setVisible(false);
        // O botão começa invisível

        // Adicionar interatividade no botão de voltar

        this.palavraImagemAtual = "";
        this.jogoTerminado = false;
    }
    atualizarPontuacao() {
        // Remove os números antigos da pontuação
        this.numeroSprites.forEach((sprite) => sprite.destroy());
        this.numeroSprites = [];

        // Converte a pontuação para uma string
        const pontosStr = this.pontuacao.toString();

        // Cria os sprites de números
        let posX = 800; // Posição inicial para os números na tela
        for (let i = 0; i < pontosStr.length; i++) {
            const numero = pontosStr[i];
            const numeroSprite = this.add.image(posX, 50, `numero_${numero}`); // Usando um sprite de número
            numeroSprite.setOrigin(0.5);
            numeroSprite.setScale(0.5);
            this.numeroSprites.push(numeroSprite);
            posX += 40; // Espaço entre os números
        }
    }
    adicionarPontos() {
        this.pontuacao += 100; // Adiciona 100 pontos por palavra correta
        this.atualizarPontuacao(); // Atualiza a exibição da pontuação
        this.palavraFormada = ""; // Reseta a palavra formada
        this.letrasExibidas.forEach((letra) => letra.destroy()); // Apaga as letras exibidas
        this.letrasExibidas = [];
        console.log(`Pontuação atual: ${this.pontuacao}`);
    }

    limparLetras() {
        this.letras.clear(true, true); // Remove todos os sprites do grupo
        console.log("Todas as letras foram removidas.");
    }

    exibirTelaFimJogo() {
        this.physics.pause();
        this.limparLetras();
        this.fimJogoImagem.setVisible(true);

        this.botaovoltar
            .setVisible(true)
            .setInteractive({ useHandCursor: true })
            .setDepth(100);

        this.botaovoltar.removeAllListeners(); // Remove eventos antigos
        this.botaovoltar.on("pointerdown", () => {
            console.log("Botão Voltar clicado!");
            this.scene.start("CenaPF");
        });

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
        // Remove a RenderTexture anterior, se existir
        if (this.renderTexture) {
            this.renderTexture.destroy();
        }

        // Escolhe uma imagem aleatória e a palavra correspondente
        const escolha = Phaser.Utils.Array.GetRandom(this.imagensPalavras);
        this.imagemExibida = escolha.imagem; // Armazena o nome da imagem
        this.palavraCorreta = escolha.palavra; // Armazena a palavra correta associada

        // Pegue as dimensões da textura da moldura
        const molduraKey = "moldura";
        const moldura = this.textures.get(molduraKey).getSourceImage();

        const molduraWidth = moldura.width;
        const molduraHeight = moldura.height;

        // Pegue as dimensões da textura da imagem selecionada
        const imagemKey = this.imagemExibida;
        const imagem = this.textures.get(imagemKey).getSourceImage();

        const imagemWidth = imagem.width;
        const imagemHeight = imagem.height;

        // Define as dimensões da RenderTexture como as maiores entre moldura e imagem
        const renderTextureWidth = Math.max(molduraWidth, imagemWidth);
        const renderTextureHeight = Math.max(molduraHeight, imagemHeight);

        // Cria uma nova RenderTexture para a imagem atual
        this.renderTexture = this.add.renderTexture(
            120, // Posição X na tela
            760, // Posição Y na tela
            renderTextureWidth,
            renderTextureHeight
        );

        // Desenhe a moldura centralizada na RenderTexture
        const molduraX = (renderTextureWidth - molduraWidth) / 2;
        const molduraY = (renderTextureHeight - molduraHeight) / 2;
        this.renderTexture.draw(molduraKey, molduraX, molduraY);

        // Centralize a imagem dentro da moldura
        const imagemX = molduraX + (molduraWidth - imagemWidth) / 2;
        const imagemY = molduraY + (molduraHeight - imagemHeight) / 2;

        // Desenhe a imagem selecionada
        this.renderTexture.draw(imagemKey, imagemX, imagemY);

        console.log(
            `Imagem exibida: ${this.imagemExibida}, Palavra correta: ${this.palavraCorreta}`
        );
    }

    removerUltimaLetra() {
        if (this.palavraFormada.length > 0) {
            // Remove a última letra da palavra formada
            this.palavraFormada = this.palavraFormada.slice(0, -1);

            // Atualiza a exibição de letras na interface
            this.atualizarExibicaoLetras();

            console.log(`Palavra atualizada: ${this.palavraFormada}`);

            // Reavalia o progresso para atualizar os botões corretamente
            this.validarProgresso();
        } else {
            console.log("Não há letras para remover.");
        }
    }

    pegarLetra(player, letra) {
        if (!this.carregandoLetra) {
            // Verifica se o jogador já está carregando uma letra
            console.log(`Pegou a letra: ${letra.texture.key}`);
            this.carregandoLetra = letra; // Armazena a letra carregada
            letra.body.setVelocity(0); // Para o movimento da letra
            letra.setCollideWorldBounds(false); // Remove colisão com as bordas
            letra.body.enable = false; // Desativa o corpo físico da letra
            letra.setAlpha(0.5); // Ajusta a opacidade para indicar que está sendo carregada
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

                // Adiciona a letra à palavra formada
                this.palavraFormada += letraAtual;

                // Logs detalhados para debug
                console.log(`Letra entregue: ${letraAtual}`);
                console.log(
                    `Palavra formada até agora: ${this.palavraFormada}`
                );
                console.log(`Palavra correta: ${this.palavraCorreta}`);

                // Atualizar a exibição de letras na interface
                this.atualizarExibicaoLetras();

                // Remover a letra do jogo
                this.carregandoLetra.destroy();
                this.carregandoLetra = null;

                // Validar progressivamente
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

        // Garante que os botões estão ocultos antes de avaliar
        this.botaoConfirmarVerde.setVisible(false);
        this.botaoConfirmarVermelho.setVisible(false);

        // Se a palavra formada está vazia, nenhum botão deve ser exibido
        if (this.palavraFormada.length === 0) {
            console.log("Nenhuma letra formada. Ocultando botões.");
            return;
        }

        // Verifica se a palavra formada é um prefixo válido da palavra correta
        if (this.palavraCorreta.startsWith(this.palavraFormada)) {
            console.log(`Progresso correto: ${this.palavraFormada}`);
            this.botaoConfirmarVerde.setVisible(true);

            // Verifica se a palavra está completa
            if (this.palavraFormada === this.palavraCorreta) {
                console.log("Palavra completa!");
                this.adicionarPontos();
                this.reiniciarJogo(); // Reinicia o jogo com uma nova palavra
            }
        } else {
            console.log(`Progresso errado: ${this.palavraFormada}`);
            this.botaoConfirmarVermelho.setVisible(true);
        }
    }

    reiniciarJogo() {
        // Limpa a palavra formada pelo jogador
        this.palavraFormada = "";
        this.atualizarExibicaoLetras(); // Atualiza a exibição das letras (na interface)

        // Exibe uma nova imagem e palavra
        this.exibirNovaImagem();

        // Reposiciona as letras no topo da tela
        this.reposicionarLetras();
    }
    reposicionarLetras() {
        // Remove todas as letras antigas
        if (this.letras) {
            this.letras.getChildren().forEach((letra) => {
                letra.destroy();
            });
        }

        // Recria as letras no topo
        this.spawnLetra(); // Isso criará uma nova letra para o jogador pegar
    }

    // Método para exibir uma nova imagem
    exibirNovaImagem() {
        // Usa selecionarImagem para trocar a imagem exibida
        this.selecionarImagem();

        // Limpa a palavra formada pelo jogador
        this.palavraFormada = "";
        this.atualizarExibicaoLetras();

        // Esconde os botões de validação no início
        this.botaoConfirmarVerde.setVisible(false);
        this.botaoConfirmarVermelho.setVisible(false);
    }

    adicionarPontos() {
        if (this.gameOver) return; // Impede a atualização de pontos após o fim do jogo
        this.pontuacao += 100;
        this.atualizarPontuacao();
        this.palavraFormada = ""; // Reseta a palavra formada
        this.letrasExibidas.forEach((letra) => letra.destroy()); // Apaga as letras exibidas
        this.letrasExibidas = [];
        console.log(`Pontuação atual: ${this.pontuacao}`);
    }

    atualizarExibicaoLetras() {
        // Limpa as letras exibidas antes de recriar
        this.letrasExibidas.forEach((letra) => letra.destroy());
        this.letrasExibidas = [];

        // Espaçamento entre as letras
        const espacamento = 70;

        // Recria os sprites das letras na nova ordem
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
        // Verificar se imagensPalavras é um array válido
        if (!Array.isArray(this.imagensPalavras)) {
            console.error("imagensPalavras não é um array válido");
            return; // Saímos da função se não for um array válido
        }

        // Procurar a palavra formada no array imagensPalavras
        const palavraCorreta = this.imagensPalavras.find(
            (item) => item.palavra === this.palavraFormada
        );

        if (palavraCorreta) {
            console.log("Parabéns! Você formou uma palavra correta!");
            this.botaoConfirmarVerde.setVisible(true); // Exibe o botão verde
            this.botaoConfirmarVermelho.setVisible(false); // Oculta o botão vermelho
        } else {
            console.log("Palavra inválida!");
            this.botaoConfirmarVerde.setVisible(false); // Oculta o botão verde
            this.botaoConfirmarVermelho.setVisible(true); // Exibe o botão vermelho
        }
    }

    apagarPalavra() {
        if (this.palavraFormada.length > 0) {
            // Remove a última letra da palavra formada
            this.palavraFormada = this.palavraFormada.slice(0, -1);

            // Atualiza a exibição de letras na interface
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

                // Inicia o timer principal
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
            return; // Evita criar letras caso o jogo não tenha começado
        }

        const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // Letras disponíveis
        const numLetras = Phaser.Math.Between(4, 6); // Número aleatório de letras a serem geradas (entre 5 e 10)
        const espacamento = 130; // Espaçamento entre as letras
        let x = Phaser.Math.Between(180, 900); // Posição X inicial aleatória
        let y = -50; // Posição inicial da letra fora da tela
        const larguraTela = this.sys.game.config.width; // Largura da tela

        for (let i = 0; i < numLetras; i++) {
            const letraAleatoria =
                letras[Phaser.Math.Between(0, letras.length - 1)]; // Escolhe uma letra aleatória

            if (!this.textures.exists(letraAleatoria)) {
                console.error(
                    `Erro: Imagem da letra '${letraAleatoria}' não foi carregada.`
                );
                return;
            }

            if (x + espacamento > larguraTela) {
                x = 150; // Resetando a posição X para o começo
                y += 100; // Aumenta a posição Y para criar a próxima linha de letras
            }

            const letra = this.letras.create(x, y, letraAleatoria); // Cria o sprite da letra

            if (!letra) {
                console.error("Erro: Letra não foi criada corretamente.");
                return;
            }

            letra.setVelocityY(Phaser.Math.Between(100, 280)); // Faz a letra cair para baixo com velocidade aleatória
            letra.body.setCollideWorldBounds(false); // Sem colisão com bordas
            letra.body.onWorldBounds = true; // Detecta limites do mundo

            letra.body.world.on("worldbounds", (body) => {
                if (
                    body.gameObject === letra &&
                    letra.y > this.sys.game.config.height
                ) {
                    letra.destroy(); // Destrói a letra quando sair da tela
                    console.log(`Letra destruída: ${letra.texture.key}`);
                }
            });

            x += espacamento; // Aumenta a posição X para a próxima letra
            console.log(`Letra criada: ${letraAleatoria}`);
        }
    }

    updateTimer() {
        if (this.timeLeft > 0) {
            this.timeLeft--;
        } else {
            console.log("Time's Up!");

            // Verifica se o evento de timer ainda existe antes de tentar removê-lo
            if (this.gameTimerEvent) {
                this.gameTimerEvent.remove();
                this.gameTimerEvent = null;
            }

            // Pausa a cena
            this.scene.pause();
            this.exibirTelaFimJogo();
        }
    }
    update() {
        if (!this.gameStarted || !this.player) return; // Garantir que o player existe antes de prosseguir

        // Reseta a velocidade do personagem a cada frame
        this.player.setVelocity(0);

        if (this.teclaSoltar.isDown) {
            this.soltarLetra.call(this); // Chama a função de soltar a letra
        }
        if (
            this.input.keyboard.checkDown(
                this.input.keyboard.addKey(
                    Phaser.Input.Keyboard.KeyCodes.BACKSPACE
                ),
                300
            )
        ) {
            this.apagarPalavra(); // Chama a função de apagar a palavra
        }
        // Movimenta o personagem com as setas e aplica as animações
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-260); // Para mover para a esquerda
            this.player.anims.play("left", true); // Toca a animação 'left'
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(260); // Para mover para a direita
            this.player.anims.play("right", true); // Toca a animação 'right'
        } else if (this.cursors.up.isDown) {
            this.player.setVelocityY(-260); // Para mover para cima
            this.player.anims.play("up", true); // Toca a animação 'up'
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(360); // Para mover para baixo
            this.player.anims.play("down", true); // Toca a animação 'down'
        } else {
            // Se nenhuma tecla estiver pressionada, pare a animação
            this.player.anims.stop();
        }

        if (this.carregandoLetra) {
            // Garantir que a letra carregada siga o jogador
            this.carregandoLetra.x = this.player.x;
            this.carregandoLetra.y = this.player.y - 20; // Ajusta para ficar acima do jogador
        }
    }
}
