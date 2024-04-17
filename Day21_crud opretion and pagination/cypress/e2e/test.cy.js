import data from "../../submissionData.json";

// const data = [
//   {
//     submission_link: "http://localhost:8080",
//     id: "shanti-local",
//     json_server_link: `http://localhost:9090/`,
//   },
// ];

let mock = {
  arts: [
    {
      id: 1,
      title: "Starry Night",
      artist: "Vincent van Gogh",
      year: 1889,
      medium: "Oil on Canvas",
      price: "1000",
      details: {
        paintbrushes: ["Round", "Flat"],
        solvents: ["Turpentine", "Mineral Spirits"],
      },
      image: "./server-files/images/StarryNight.jpg",
    },
    {
      id: 2,
      title: "Mona Lisa",
      artist: "Leonardo da Vinci",
      year: 1503,
      medium: "Oil on Panel",
      price: 8600,
      details: {
        paintbrushes: ["Round", "Filbert"],
        solvents: ["Linseed Oil", "Mineral Spirits"],
      },
      image: "./server-files/images/MonaLisa.jpg",
    },
    {
      id: 3,
      title: "The Persistence of Memory",
      artist: "Salvador Dalí",
      year: 1931,
      medium: "Oil on Canvas",
      price: 5750,
      details: {
        paintbrushes: ["Flat", "Fan"],
        solvents: ["Turpentine", "Acetone"],
      },
      image: "./server-files/images/ThePersistenceofMemory.jpg",
    },
    {
      id: 4,
      title: "Starry Night Over the Rhône",
      artist: "Vincent van Gogh",
      year: 1888,
      medium: "Oil on Canvas",
      price: 13000,
      details: {
        paintbrushes: ["Round", "Flat"],
        solvents: ["Turpentine", "Mineral Spirits"],
      },
      image: "./server-files/images/StarryNightOvertheRhône.jpg",
    },
    {
      id: 5,
      title: "The Scream",
      artist: "Edvard Munch",
      year: 1893,
      medium: "Tempera on Canvas",
      price: 12000,
      details: {
        paintbrushes: ["Round", "Flat"],
        solvents: ["Turpentine", "Mineral Spirits"],
      },
      image: "./server-files/images/TheScream.jpg",
    },
    {
      id: 6,
      title: "The Birth of Venus",
      artist: "Sandro Botticelli",
      year: 1484,
      medium: "Tempera on Canvas",
      price: 89000,
      details: {
        paintbrushes: ["Flat", "Filbert"],
        solvents: ["Linseed Oil", "Mineral Spirits"],
      },
      image: "./server-files/images/TheBirthofVenus.jpg",
    },
    {
      id: 7,
      title: "Guernica",
      artist: "Pablo Picasso",
      year: 1937,
      medium: "Oil on Canvas",
      price: 20000,
      details: {
        paintbrushes: ["Round", "Filbert"],
        solvents: ["Turpentine", "Mineral Spirits"],
      },
      image: "./server-files/images/Guernica.jpg",
    },
    {
      id: 8,
      title: "The Girl with a Pearl Earring",
      artist: "Johannes Vermeer",
      year: 1665,
      medium: "Oil on Canvas",
      price: 1000,
      details: {
        paintbrushes: ["Round", "Flat"],
        solvents: ["Linseed Oil", "Mineral Spirits"],
      },
      image: "./server-files/images/TheGirlwithaPearlEarring.jpg",
    },
    {
      id: 9,
      title: "Hare",
      artist: "Edvard Munch",
      year: 1922,
      medium: "Oil on Canvas",
      price: 1200,
      details: {
        paintbrushes: ["Round", "Filbert"],
        solvents: ["Turpentine", "Mineral Spirits"],
      },
      image: "./server-files/images/hare.jpg",
    },
    {
      id: 10,
      title: "Nighthawks",
      artist: "edward hopper",
      year: 1495,
      medium: "Fresco",
      price: 8000,
      details: {
        paintbrushes: ["Round", "Flat"],
        solvents: ["Linseed Oil", "Mineral Spirits"],
      },
      image: "./server-files/images/Nighthawks.jpg",
    },
    {
      id: 11,
      title: "cafe terrace at night",
      artist: "van gogh",
      year: 1931,
      medium: "Oil on Canvas",
      price: 57500,
      details: {
        paintbrushes: ["Flat", "Fan"],
        solvents: ["Turpentine", "Acetone"],
      },
      image: "./server-files/images/CaféTerraceAtNight.png",
    },
    {
      id: 12,
      title: "Sistine Chapel Ceiling",
      artist: "michelangelo",
      year: 1930,
      medium: "Oil on Beaverboard",
      price: 400000,
      details: {
        paintbrushes: ["Round", "Filbert"],
        solvents: ["Turpentine", "Mineral Spirits"],
      },
      image: "./server-files/images/SistineChapelCeiling.jpg",
    },
    {
      id: 13,
      title: "The Night Watch",
      artist: "Rembrandt",
      year: 1642,
      medium: "Oil on Canvas",
      price: 900000,
      details: {
        paintbrushes: ["Round", "Flat"],
        solvents: ["Linseed Oil", "Mineral Spirits"],
      },
      image: "./server-files/images/thenightwatch.png",
    },
    {
      id: 14,
      title: "Wanderer Above The Sea Of Fog",
      artist: "Caspar David Friedrich",
      year: 1484,
      medium: "Tempera on Canvas",
      price: 890,
      details: {
        paintbrushes: ["Flat", "Filbert"],
        solvents: ["Linseed Oil", "Mineral Spirits"],
      },
      image: "./server-files/images/WandererAboveTheSeaOfFog.jpg",
    },
    {
      id: 15,
      title: "Water Lilies",
      artist: "Claude Monet",
      year: 1919,
      medium: "Oil on Canvas",
      price: 5000,
      details: {
        paintbrushes: ["Round", "Flat"],
        solvents: ["Turpentine", "Mineral Spirits"],
      },
      image: "./server-files/images/WaterLilies.jpg",
    },
    {
      id: 16,
      title: "Whistler Mother",
      artist: "James McNeill Whistler",
      year: 1484,
      medium: "Tempera on Canvas",
      price: 85000,
      details: {
        paintbrushes: ["Flat", "Filbert"],
        solvents: ["Linseed Oil", "Mineral Spirits"],
      },
      image: "./server-files/images/Whistler’sMother.jpg",
    },
    {
      id: 17,
      title: "The Flower Carrier",
      artist: "Diego Rivera",
      year: 1888,
      medium: "Oil on Canvas",
      price: 1250000,
      details: {
        paintbrushes: ["Round", "Flat"],
        solvents: ["Turpentine", "Mineral Spirits"],
      },
      image: "./server-files/images/TheFlowerCarrier.jpg",
    },
    {
      id: 18,
      title: "Impression, Sunrise",
      artist: "Edvard Munch",
      year: 1893,
      medium: "Tempera on Canvas",
      price: 11500,
      details: {
        paintbrushes: ["Round", "Flat"],
        solvents: ["Turpentine", "Mineral Spirits"],
      },
      image: "./server-files/images/ImpressionSunrise.jpg",
    },
    {
      id: 19,
      title: "A Sunday Afternoon on the Island of La Grande Jatte",
      artist: "Georges Seurat",
      year: 1665,
      medium: "Oil on Canvas",
      price: 95000,
      details: {
        paintbrushes: ["Round", "Flat"],
        solvents: ["Linseed Oil", "Mineral Spirits"],
      },
      image:
        "./server-files/images/ASundayAfternoonontheIslandofLaGrandeJatte.jpg",
    },
    {
      id: 20,
      title: "The Night Watch",
      artist: "Rembrandt van Rijn",
      year: 1930,
      medium: "Tempera on Canvas",
      price: 380000,
      details: {
        paintbrushes: ["Round", "Filbert"],
        solvents: ["Turpentine", "Mineral Spirits"],
      },
      image: "./server-files/images/TheNightWatch.jpg",
    },
  ],
};

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("React Assignment", function () {
    let acc_score = 1;
    beforeEach(() => {
      cy.clearCookies();
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      if (server_url.charAt(server_url.length - 1) != "/") {
        server_url = server_url + "/";
      }
      cy.writeFile("db.json", mock, (err) => {
        if (err) {
          console.error(err);
        }
      });
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
    it("Shows the correct initial data", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        const numOfArts = 5;
        const cards = ".data-list-wrapper .card-list .card";
        cy.get(".card-list").children().should("have.length", numOfArts);
        cy.get(cards)
          .should("have.length", numOfArts)
          .first()
          .should("contain", mock.arts[0].title);
        cy.get(cards)
          .eq(Math.ceil(numOfArts / 2))
          .should("contain", mock.arts[Math.ceil(numOfArts / 2)].title);
        cy.get(cards)
          .should("have.length", numOfArts)
          .last()
          .should("contain", mock.arts[numOfArts - 1].title);
        cy.then(() => {
          acc_score += 3;
        });
      });
    }); // 3
    it("Able to add new arts", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.intercept("POST", "**/arts**").as("postRequest");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        cy.get("#pagination-wrapper").children().should("have.length", 4);
        let data = {
          title: "The Persistence of Memory",
          artist: "Salvador Dalí",
          year: 1987,
          medium: "Oil on Canvas",
          price: 7000,
          paintbrushes: ["Flat", "Fan"],
          image:
            "https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/airtel-logo-white-text-vertical.jpg",
        };
        cy.get("#art-title").type(data.title);
        cy.get("#art-image").type(data.image);
        cy.get("#art-artist").type(data.artist);
        cy.get("#art-year").type(data.year);
        cy.get("#art-paintbrushes").type("Flat,Fan");
        cy.get("#art-price").type(data.price);
        cy.get("#add-art").should("be.visible").click();
        cy.wait("@postRequest").then(() => {
          cy.wait("@getArts").then(() => {
            cy.wait(1000);
            cy.get("#pagination-wrapper").children().last().click();
            cy.wait(500);

            cy.get(".card-list").children().should("have.length", 1);
            cy.get(".card-list")
              .children()
              .first()
              .contains("The Persistence of Memory");
            cy.get(".card-list").children().first().contains("Salvador Dalí");

            cy.then(() => {
              acc_score += 2;
            });
          });
        });
      });
    }); //2
    it("Check by adding a new art the pagination button should increased", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.intercept("POST", "**/arts**").as("postRequest");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        cy.get("#pagination-wrapper").children().should("have.length", 4);
        let data = {
          title: "React Developer",
          artist: "Airtel",
          year: 4,
          medium: "Banglore",
          price: 7,
          paintbrushes: "Full Time, Permanent",
          image: "https://s3",
        };
        cy.get("#art-title").type(data.title);
        cy.get("#art-image").type(data.image);
        cy.get("#art-artist").type(data.artist);
        cy.get("#art-year").type(data.year);
        cy.get("#art-paintbrushes").type(data.paintbrushes);
        cy.get("#art-price").type(data.price);
        cy.get("#add-art").should("be.visible").click();
        cy.wait("@postRequest").then(() => {
          cy.wait("@getArts");
          cy.wait(1000).then(() => {
            cy.get("#pagination-wrapper").children().should("have.length", 5);
            cy.get("#pagination-wrapper").children().last().click();
            cy.wait(500);
            cy.get(".card-list").children().should("have.length", 1);
            cy.get(".card-list").children().first().contains("React Developer");
            cy.get(".card-list").children().first().contains("Airtel");

            cy.then(() => {
              acc_score += 1;
            });
          });
        });
      });
    }); //1
    it("Able to delete a arts", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.intercept("DELETE", "**/arts/**").as("deleteRequest");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        cy.get(".card-list").children().first().find(".card-button").click();
        const cards = ".data-list-wrapper .card-list .card";
        cy.wait("@deleteRequest").then(() => {
          cy.wait("@getArts").then(() => {
            cy.wait(1000);
            cy.get(".card-list").children().should("have.length", 5);
            cy.get(cards).first().should("contain", "Mona Lisa");
            cy.get(cards).last().should("contain", "The Birth of Venus");
            cy.then(() => {
              acc_score += 2;
            });
          });
        });
      });
    }); //2
    it("Able to edit all fields of the arts", () => {
      cy.intercept("PATCH", `**/arts/**`).as("patchedArt");
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        const cards = ".data-list-wrapper .card-list .card";
        cy.get(cards).last().find(".card-link").click();
        cy.wait(1000).then(() => {
          cy.get("#update-art-title").clear().type("Guernica");
          cy.get("#update-art-image")
            .clear()
            .type("./server-files/images/Guernica.jpg");
          cy.get("#update-art-artist").clear().type("Masai school");
          cy.get("#update-art-year").clear().type(1645);
          cy.get("#update-art-paintbrushes").clear().type("round,curve");
          cy.get("#update-art-price").clear().type(78451);
          cy.get("#update-art").should("be.visible").click();
          cy.wait("@patchedArt");
          cy.wait("@getArts").then(() => {
            cy.wait(1000).then(() => {
              cy.get(cards).last().contains("Masai school");
              cy.get(cards).last().contains(1645);
              cy.get(cards).last().contains("round");
              cy.get(cards).last().contains("curve");
              cy.get(cards).last().contains(78451);
              cy.then(() => {
                acc_score += 2;
              });
            });
          });
        });
      });
    }); //2
    it("Able to edit the package", () => {
      cy.intercept("PATCH", `**/arts/**`).as("patchedArt");
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        const cards = ".data-list-wrapper .card-list .card";
        cy.get(cards).first().find(".card-link").click();
        //add condition in problem statement
        cy.wait(1000);
        cy.get("#update-package-art-package").clear().type(6.9);
        cy.get("#update-package-art").click();
        cy.wait("@patchedArt");
        cy.wait("@getArts").then(() => {
          cy.wait(1000);
          cy.get(cards).first().contains(6.9);
          cy.then(() => {
            acc_score += 1;
          });
        });
      });
    }); //1
    it("Low-to-high Sorts as expected", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        const cards = ".data-list-wrapper .card-list .card";
        cy.get("#sort-low-to-high").click();
        cy.wait(500).then(() => {
          let arr = [];
          cy.get(cards)
            .each(($el) => {
              arr.push(+$el.find(".card-price").text());
            })
            .then(() => {
              const isSorted = arr.reduce(
                (n, item) => n !== false && item >= n && item
              );
              expect(!!isSorted).to.be.true;
              expect(arr.length).to.be.greaterThan(0);
            });
        });

        cy.then(() => {
          acc_score += 1;
        });
      });
    }); // 1
    it("high-to-low Sorts as expected", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        const cards = ".data-list-wrapper .card-list .card";
        cy.get("#sort-high-to-low").click();
        cy.wait(500).then(() => {
          let arr2 = [];
          cy.get(cards)
            .each(($el) => {
              arr2.push(+$el.find(".card-price").text());
            })
            .then(() => {
              //console.log(arr2, arr2.length);
              const isSorted = arr2.reduce(
                (n, item) => n !== false && item <= n && item
              );
              expect(!!isSorted).to.be.true;
              expect(arr2.length).to.be.greaterThan(0);
            });
        });

        cy.then(() => {
          acc_score += 1;
        });
      });
    }); // 1
    it("Filters as expected", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        cy.get("#filter-Tempera-on-Canvas").click();
        const cards = ".data-list-wrapper .card-list .card";
        cy.wait(500).then(() => {
          let arr = [];
          cy.get(cards)
            .each((el) => {
              arr.push(el.find(".card-medium").text().trim());
            })
            .then(() => {
              const is = arr.reduce(
                (n, item) => n !== false && item === "Tempera on Canvas"
              );
              expect(!!is).to.be.true;
              expect(arr.length).to.be.greaterThan(0);
            });
        });

        cy.get("#filter-Oil-on-Canvas").click();
        cy.wait(500).then(() => {
          let arr2 = [];
          cy.get(cards)
            .each((el) => {
              arr2.push(el.find(".card-medium").text().trim());
            })
            .then(() => {
              //console.log(arr2, arr2.length);
              const isKidsroom = arr2.reduce(
                (n, item) => n !== false && item === "Oil on Canvas"
              );
              expect(!!isKidsroom).to.be.true;
              expect(arr2.length).to.be.greaterThan(0);
            });
        });

        cy.then(() => {
          acc_score += 1;
        });
      });
    }); // 1
    it("Low-to-high Sorts as expected with pagination", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        cy.get("#pagination-wrapper").children().should("have.length", 4);
        const cards = ".data-list-wrapper .card-list .card";
        cy.get("#sort-low-to-high").click();
        cy.wait(500).then(() => {
          cy.get("#pagination-wrapper").children().should("have.length", 4);
          let arr = [];
          cy.get(cards)
            .each(($el) => {
              arr.push(+$el.find(".card-price").text());
            })
            .then(() => {
              // console.log(arr, arr.length);
              const isSorted = arr.reduce(
                (n, item) => n !== false && item >= n && item
              );
              expect(!!isSorted).to.be.true;
              expect(arr.length).to.be.greaterThan(0);
            });
        });

        cy.get("#pagination-wrapper").children().last().click();
        cy.wait(500).then(() => {
          let arr2 = [];
          cy.get(cards)
            .each(($el) => {
              arr2.push(+$el.find(".card-price").text());
            })
            .then(() => {
              // console.log(arr, arr.length);
              const isSorted = arr2.reduce(
                (n, item) => n !== false && item >= n && item
              );
              expect(!!isSorted).to.be.true;
              expect(arr2.length).to.be.greaterThan(0);
            });
        });

        cy.then(() => {
          acc_score += 1;
        });
      });
    }); // 1
    it("high-to-low Sorts as expected with pagination", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        cy.get("#pagination-wrapper").children().should("have.length", 4);
        const cards = ".data-list-wrapper .card-list .card";
        cy.get("#sort-high-to-low").click();
        cy.wait(500).then(() => {
          cy.get("#pagination-wrapper").children().should("have.length", 4);
          let arr2 = [];
          cy.get(cards)
            .each(($el) => {
              arr2.push(+$el.find(".card-price").text());
            })
            .then(() => {
              //console.log(arr2, arr2.length);
              const isSorted = arr2.reduce(
                (n, item) => n !== false && item <= n && item
              );
              expect(!!isSorted).to.be.true;
              expect(arr2.length).to.be.greaterThan(0);
            });
        });

        cy.get("#pagination-wrapper").children().last().click();
        cy.wait(500).then(() => {
          let arr3 = [];
          cy.get(cards)
            .each(($el) => {
              arr3.push(+$el.find(".card-price").text());
            })
            .then(() => {
              const isSorted = arr3.reduce(
                (n, item) => n !== false && item <= n && item
              );
              expect(!!isSorted).to.be.true;
              expect(arr3.length).to.be.greaterThan(0);
            });
        });

        cy.then(() => {
          acc_score += 1;
        });
      });
    }); // 1
    it("Filters as expected with pagination", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        cy.get("#pagination-wrapper").children().should("have.length", 4);
        cy.get("#filter-Tempera-on-Canvas").click();
        const cards = ".data-list-wrapper .card-list .card";
        cy.wait(500).then(() => {
          cy.get("#pagination-wrapper").children().should("have.length", 2);
          let arr = [];
          cy.get(cards)
            .each((el) => {
              arr.push(el.find(".card-medium").text().trim());
            })
            .then(() => {
              const is = arr.reduce(
                (n, item) => n !== false && item === "Tempera on Canvas"
              );
              expect(!!is).to.be.true;
              expect(arr.length).to.be.greaterThan(0);
            });
        });

        cy.get("#filter-Oil-on-Canvas").click();
        cy.wait(500).then((res) => {
          cy.get("#pagination-wrapper").children().should("have.length", 3);
          let arr2 = [];
          cy.get(cards)
            .each((el) => {
              arr2.push(el.find(".card-medium").text().trim());
            })
            .then(() => {
              //console.log(arr2, arr2.length);
              const isKidsroom = arr2.reduce(
                (n, item) => n !== false && item === "Oil on Canvas"
              );
              expect(!!isKidsroom).to.be.true;
              expect(arr2.length).to.be.greaterThan(0);
            });
        });

        cy.then(() => {
          acc_score += 1;
        });
      });
    }); // 1
    it("check for pagination functionality", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        cy.get("#pagination-wrapper").children().should("have.length", 4);
        cy.get("#pagination-wrapper").children().last().click();
        cy.wait(500).then(() => {
          cy.get(".card-list").children().should("have.length", 5);
          cy.get(".card-list").children().first().contains("Whistler Mother");
          cy.get(".card-list")
            .children()
            .first()
            .contains("James McNeill Whistler");
          cy.get(".card-list").children().last().contains("The Night Watch");
          cy.get(".card-list").children().last().contains("Rembrandt van Rijn");
        });

        cy.then(() => {
          acc_score += 2;
        });
      });
    }); //2
    it("Able to search by title", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        cy.get("#search-by-select").select("title");
        cy.get("#search-by-input").clear().type("Starry Night Over the Rhône");
        cy.get("#search-by-button").click();
        cy.wait(500).then(() => {
          cy.get(".card-list").children().should("have.length", 1);
          cy.get(".card-list")
            .children()
            .first()
            .contains("Starry Night Over the Rhône");
          cy.get(".card-list").children().first().contains("Vincent van Gogh");
        });

        cy.then(() => {
          acc_score += 1;
        });
      });
    }); //1
    it("Able to search by the artist", () => {
      cy.intercept("GET", "**/arts**").as("getArts");
      cy.visit(url);
      cy.wait("@getArts").then(() => {
        cy.get("#search-by-select").select("artist");
        cy.get("#search-by-input").clear().type("James McNeill Whistler");
        cy.get("#search-by-button").click();
        cy.wait(500).then(() => {
          cy.get(".card-list").children().should("have.length", 1);
          cy.get(".card-list").children().first().contains("Whistler Mother");
          cy.get(".card-list").children().first().contains("Tempera on Canvas");
        });

        cy.then(() => {
          acc_score += 1;
        });
      });
    }); //1

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
