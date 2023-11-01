
export const locale = {
    language: 'pt',
    availableLanguages: ['pt'],
    localeDetection: true,
    translations: {
        pt: {
            actions: {
                new: "Criar novo",
                edit: "Editar",
                show: "Detalhes",
                delete: "Deletar",
                search: "Buscar",
                resetPassword:"Resetar senha",
                list: "Listagem",
                bulkDelete: "Deletar Selecionados"
            },
            properties: {
                name: "Nome",
                password_hash:"Senha",
                role: "Cargo",
                createdAt:"Criado em",
                updatedAt:"Atualizado em",
                title: "Título",
                content: "Conteúdo",
                author: "Autor"
                
            },
            buttons: {
                save: "Salvar",
                createFirstRecord: "Criar nova postagem",
                filter: "Filtrar",
                logout: "Sair"
            },
            components: {
                Login: {
                    welcomeHeader: "Bem-Vindo",
                    welcomeMessage:"Faça Login para acessar a pagina de Administração",
                    properties: {
                        email: "Email",
                        password: "Senha"
                    },
                    loginButton: "Entrar"
                }
            },
            labels: {
                dashboard: "Página Inicial",
                navigation: "Navegação",
                users: "Usuários",
                posts: "Postagens",
                selectedRecords: "Itens Selecionados"
            },
            messages: {
                noRecords: "Nenhuma Postagem",
                noRecordsInResource: "Nenhuma postagem feita por aqui!",
                welcomeOnBoard_title: "Seja Bem-Vindo",
                welcomeOnBoard_subtitle: "Pagina de Administração",
                invalidCredentials: "Email ou Senha incorretos",
            }
        }
    }
  };