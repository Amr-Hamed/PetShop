import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { has as _has } from 'lodash'

import { PSScreen, PSDivider, PSHorizontalScroller, PSVerticalScroller } from '../../Components'
import { strings, Images } from '../../Assets'
import { CATEGORIES, Types, SCREENS } from '../../Utils'

import styles from './Home.style'

const _categories = [{
  id: 1,
  key: CATEGORIES.all
}, {
  id: 2,
  key: CATEGORIES.dogs,
  pets: [{
    id: 10,
    image: Images.dog1,
    name: 'Lola',
    gender: 'Female',
    breed: 'Golden Retriever',
    price: 40,
    age: 3,
    color: 'Golden',
    height: 0.8,
    description: 'The Golden Retriever is one of the most popular dog breeds in the United States. The breed\'s friendly, tolerant attitude makes them great family pets, and their intelligence makes them highly capable working dogs.'
  }, {
    id: 11,
    image: Images.dog2,
    name: 'Diesel',
    gender: 'Male',
    breed: 'German Shepherd',
    price: 50,
    age: 2,
    color: 'Golden/Black',
    height: 0.7,
    description: 'A strongly built, relatively long-bodied dog, the German shepherd stands 22 to 26 inches (56 to 66 cm) and weighs 75 to 95 pounds (34 to 43 kg).'
  }, {
    id: 12,
    image: Images.dog3,
    name: 'Milo',
    gender: 'Female',
    breed: 'Huskey',
    price: 45,
    age: 1.5,
    color: 'White/Black',
    height: 0.8,
    description: 'The Siberian Husky is a medium-sized working dog, quick and light on his feet and free and graceful in action. His moderately compact and well furred body, erect ears and brush tail suggest his Northern heritage. His characteristic gait is smooth and seemingly effortless.'
  }, {
    id: 13,
    image: Images.dog4,
    name: 'Zeus',
    gender: 'Male',
    breed: 'Rottweiler',
    price: 70,
    age: 2.5,
    color: 'Golden/Black',
    height: 0.75,
    description: 'The ideal Rottweiler is a medium large, robust and powerful dog, black with clearly defined rust markings. His compact and substantial build denotes great strength, agility and endurance.'
  }],
  accessories: [{
    id: 1,
    image: Images.dogacc1,
    name: 'Dog leash',
    price: 30,
    color: 'Colorful',
    description: 'Dog\'s leash helps owner control the dog while going for a walk outside.'
  },{
    id: 2,
    image: Images.dogacc2,
    name: 'Dog swim Jacket',
    price: 40,
    color: 'Yellow',
    description: 'Dog\'s swim jacket helps the dog to float in the water while swimming, it\'s very useful'
  },{
    id: 1,
    image: Images.dogacc3,
    name: 'Dog Food',
    price: 15,
    color: 'Brown',
    description: 'Dry food for the dog, it\'s rich with all the nutritions that the dog needs to be healthy'
  },{
    id: 1,
    image: Images.dogacc1,
    name: 'Dog Comb',
    price: 5,
    color: 'Blue/Pink',
    description: 'Dog\'s comb helps comb the hair of the dog, maintaining clean, stylish hair for your dog'
  }]
}, {
  id: 3,
  key: CATEGORIES.cats,
  pets: [
    {
    id: 14,
    image: Images.cat1,
      name: 'Mist',
      gender: 'Female',
      breed: 'Ragdoll',
      price: 30,
      age: 1.5,
      color: 'White/Brown',
      height: 0.3,
      description: 'With positive reinforcement, Ragdoll cats learn quickly and can pick up tricks as well as good behaviors such as using a scratching post. The Ragdoll cat is an all-around best buddy to just about everyone. They love their human families–even children–and will get along with other pets fairly well.'
    }, {
    id: 15,
    image: Images.cat2,
      name: 'Cookie',
      gender: 'Female',
      breed: 'Egyptian Mau',
      price: 15,
      age: 0.7,
      color: 'White/green',
      height: 0.4,
      description: 'The Egyptian Mau is a long cat although she tends to be medium in size, with the males larger than the females. The Mau is heavily muscled and strong. The Mau has a triangular shaped head with large almond shaped eyes and slightly shaped ears.'
    }, {
    id: 16,
    image: Images.cat3,
      name: 'Thunder',
      gender: 'Male',
      breed: 'Sphynx',
      price: 40,
      age: 2,
      color: 'Salmon',
      height: 0.6,
      description: 'The sphynx is a medium-sized cat with a striking appearance, identified by her hairless, wrinkled skin and large ears. She has a sleek, muscular body that is dense and heavy for her size. The breed is medium sized but nicely muscled.'
    }, {
    id: 17,
    image: Images.cat4,
      name: 'Alex',
      gender: 'Male',
      breed: 'Himalayan',
      price: 35,
      age: 2,
      color: 'White',
      height: 0.4,
      description: 'The Himalayan is an extreme looking breed. The body is short but thick with thick legs and a short, thick neck. The boning is heavy but the tail is short and the ears are small. The head of the Himalayan is round and has large, round eyes. When viewed in profile, the face is flat with the nose changing direction so that you see primarily the colored skin on the nose (nose leather).'
    }
  ],
  accessories: [{
    id: 5,
    image: Images.catacc1,
    name: 'Cat comb',
    price: 30,
    color: 'Colorful',
    description: 'Cat\'s comb helps comb the hair of the cat, maintaining clean, stylish hair for your cat'
  },{
    id: 6,
    image: Images.catacc2,
    name: 'Cat food',
    price: 20,
    color: 'Brown',
    description: 'Dry food for the cat, it\'s rich with all the nutritions that the cat needs to be healthy'
  },{
    id: 7,
    image: Images.catacc3,
    name: 'Cat leash',
    price: 25,
    color: 'Brown',
    description: 'Cat\'s leash helps owner control the cat while going for a walk outside.'
  },{
    id: 8,
    image: Images.catacc4,
    name: 'Cat liter box',
    price: 50,
    color: 'Red',
    description: 'Cat\'s liter box is where the cat can go to the bathroom in, uses special kind of sand that absorbs the scent to keep the home smelling good'
  }]
}, {
  id: 4,
  key: CATEGORIES.birds,
  pets: [
    {
    id: 18,
    image: Images.bird1,
      name: 'Charlie',
      gender: 'Male',
      breed: 'Eastern bluebird',
      price: 60,
      age: 1.5,
      color: 'Green/Blue',
      height: 0.3,
      description: 'Male Eastern Bluebirds are vivid, deep blue above and rusty or brick-red on the throat and breast. Blue in birds always depends on the light, and males often look plain gray-brown from a distance. Females are grayish above with bluish wings and tail, and a subdued orange-brown breast.'
    }, {
    id: 19,
    image: Images.bird2,
      name: 'Penny',
      gender: 'Male',
      breed: 'Northern cardinal',
      price: 75,
      age: 2,
      color: 'Yellow/Red',
      height: 0.35,
      description: 'The northern cardinal is a mid-sized songbird with a body length of 21–23 cm (8.3–9.1 in). It has a distinctive crest on the head and a mask on the face which is black in the male and gray in the female. The male is a vibrant red, while the female is a reddish olive color'
    }, {
    id: 20,
    image: Images.bird3,
      name: 'Feathers',
      gender: 'Female',
      breed: 'Parrot',
      price: 100,
      age: 2.5,
      color: 'Colorful',
      height: 1,
      description: 'Parrots are not very heavy, in relation to their size, and compact body with a large head and a short neck. Their beaks are short, strong and curved. The two parts of the beak are very strong and used to break fruits and seeds. The tongue is large and strong.'
    }, {
    id: 21,
    image: Images.bird4,
      name: 'Daisy',
      gender: 'Male',
      breed: 'Barn Owl',
      price: 120,
      age: 1.7,
      color: 'White',
      height: 0.8,
      description: 'Owls are birds from the order Strigiformes /ˈstrɪdʒɪfɔːrmiːz/, which includes over 200 species of mostly solitary and nocturnal birds of prey typified by an upright stance, a large, broad head, binocular vision, binaural hearing, sharp talons, and feathers adapted for silent flight.'
    }
  ],
  accessories: [{
    id: 9,
    image: Images.birdacc1,
    name: 'Bird food',
    price: 15,
    color: 'Brown',
    description: 'Bird food that\'s full of nutritions for all kind of cage birds, they love it and it\'s easy to add and remove'
  },{
    id: 10,
    image: Images.birdacc2,
    name: 'Bird cage',
    price: 60,
    color: 'Black',
    description: 'Cage for birds, it\'s used to contain the birds inside the home, stylish and spacious'
  },{
    id: 11,
    image: Images.birdacc3,
    name: 'Bird stand',
    price: 15,
    color: 'Brown/Black',
    description: 'Bird stand is a very useful bird accessory, the bird can be set free in the home and stands on it for a rest'
  },{
    id: 12,
    image: Images.birdacc4,
    name: 'Bird stand with bells',
    price: 20,
    color: 'Brown',
    description: 'Bird stand is a very useful bird accessory, the bird can be set free in the home and stands on it for a rest, it has bells for bird amusement'
  }]
}, {
  id: 5,
  key: CATEGORIES.reptiles,
  pets: [
    {
    id: 22,
    image: Images.reptile1,
      name: 'Apollo',
      gender: 'Male',
      breed: 'Chameleon',
      price: 130,
      age: 2,
      color: 'Colorful',
      height: 1.5,
      description: 'Chameleon, (family Chamaeleonidae), any of a group of primarily arboreal (tree-dwelling) Old World lizards best known for their ability to change body colour.'
    }, {
    id: 23,
    image: Images.reptile2,
      name: 'Delta',
      gender: 'Female',
      breed: 'Water Lizard',
      price: 150,
      age: 3,
      color: 'Green',
      height: 1.8,
      description: 'When this unique creature feels threatened, it rises on its hind legs, opens its yellow-colored mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.'
    }, {
    id: 24,
    image: Images.reptile3,
      name: 'Caesar',
      gender: 'Male',
      breed: 'Eastern Green Mamba',
      price: 200,
      age: 2.7,
      color: 'Green',
      height: 3.2,
      description: 'The eastern green mamba (Dendroaspis angusticeps) is a highly venomous snake species of the mamba genus Dendroaspis native to the coastal regions of southern East Africa. Described by Scottish surgeon and zoologist Andrew Smith in 1849, it has a slender build with bright green upperparts and yellow-green underparts.'
    }, {
    id: 25,
    image: Images.reptile4,
      name: 'Spike',
      gender: 'Female',
      breed: 'American Crocodile',
      price: 350,
      age: 4,
      color: 'Black',
      height: 4.8,
      description: 'The American crocodile has a large lizard-like body with four short legs and a long muscular tail. Their hides are rough and scaled. Juvenile American crocodiles are dark olive brown with darker cross-bands on tail and body, while adults are uniformly brown with darker cross-bands on tail.'
    }
  ],
  accessories: [{
    id: 13,
    image: Images.reptileacc1,
    name: 'Reptile leash',
    price: 25,
    color: 'Cyan',
    description: 'Reptile\'s leash helps owner control the reptile while going for a walk outside.'
  },{
    id: 14,
    image: Images.reptileacc2,
    name: 'Reptile cage',
    price: 60,
    color: 'Black',
    description: 'Cage for reptile, it\'s used to contain the reptiles inside the home, stylish and spacious'
  },{
    id: 15,
    image: Images.reptileacc3,
    name: 'Reptile food',
    price: 20,
    color: 'Brown',
    description: 'Reptile food that\'s full of nutritions for all kind of reptiles, they love it and it\'s easy to add and remove'
  },{
    id: 16,
    image: Images.reptileacc4,
    name: 'Reptiles cleaner',
    price: 25,
    color: 'Blue',
    description: 'Reptile cleaner, a shampoo used for cleaning the dirt of your reptile and keeping it clean and shinny'
  }]
}, {
  id: 6,
  key: CATEGORIES.fish,
  pets: [
    {
    id: 26,
    image: Images.fish1,
      name: 'Bruce',
      gender: 'Male',
      breed: 'Red Crab',
      price: 30,
      age: 1.2,
      color: 'Red',
      height: 0.5,
      description: 'Red crabs are dark red or orange red. They have a squarish carapace distinguished by its five spines and long, thin walking legs with two claws of roughly equal size.'
    }, {
    id: 27,
    image: Images.fish2,
      name: 'Nemo',
      gender: 'Male',
      breed: 'Blue Tang',
      price: 80,
      age: 2.9,
      color: 'Blue/Black',
      height: 1.2,
      description: 'Blue tangs are high-bodied, compressed, pancake-shaped fishes with pointed snouts and small scales. Their eyes are located high on their heads and their mouths are small and positioned low. Their dorsal fins are continuous.'
    }, {
    id: 28,
    image: Images.fish3,
      name: 'Fin',
      gender: 'Female',
      breed: 'Betta',
      price: 110,
      age: 1.5,
      color: 'Colorful',
      height: 0.1,
      description: 'The Betta, on average, is 7.5 centimeters in length. Its body shape is streamlined, allowing it to slip smoothly and effortlessly through open water. ... Wild Bettas do not possess the vibrant bright red, lime green, and royal blue colors of their selectively bred counterparts. In fact, they are unusually dull and drab.'
    }, {
    id: 29,
    image: Images.fish4,
      name: 'Star',
      gender: 'Female',
      breed: 'Colorful Seahorse',
      price: 140,
      age: 2.4,
      color: 'Yellow/Blue',
      height: 2.5,
      description: 'Seahorses are an upright fish. Rather than a head out front and a tail in back, these creatures “stand” in the water column. They have a horse-shaped head, with a long snout and puckered mouth. They swim using the dorsal fin on their backs, and steer using the pectoral fins on either side of their heads.'
    }
  ],
  accessories: [{
    id: 17,
    image: Images.fishacc1,
    name: 'Fish tank',
    price: 80,
    color: 'Black',
    description: 'Tank for the fish, considered home for your pet fish, portable and stylish and has some cool decorations'
  },{
    id: 18,
    image: Images.fishacc2,
    name: 'Fish food',
    price: 10,
    color: 'Colorful',
    description: 'Fish food that\'s full of nutritions for all kind of fish, they love it and it\'s easy to add'
  },{
    id: 19,
    image: Images.fishacc3,
    name: 'Fish tank decoration',
    price: 20,
    color: 'Brown/Green',
    description: 'A piece of decoration to be placed inside your fish tank, the fish to play around and go in and out of it'
  },{
    id: 20,
    image: Images.fishacc4,
    name: 'Fish tank air tube',
    price: 10,
    color: 'Transparent',
    description: 'You need this piece to pass air inside your fish tank, it\'s supported with a small compressor to push air into your fish tank to renew oxygen'
  }]
}]

const onPetItemPress = (item, navigation) => {
  navigation.push(SCREENS.ItemDetails, item)
}

export default function Home ({
  navigation
}) {
  const [areCategoriesLoading, setAreCategoriesLoading] = useState(true)
  const [categories, setCategories] = useState([])
  const [tourPets, setTourPets] = useState([])
  const [accessories, setAccessories] = useState([])

  useEffect(() => {
    try {
      setTimeout(async () => {
        const _pets = []
        const _accessories = []
        for (let i = 0; i < _categories.length; i++) {
          _has(_categories[i], 'pets') && _pets.push(..._categories[i].pets)
          _has(_categories[i], 'accessories') && _accessories.push(..._categories[i].accessories)
        }
        setCategories(_categories)
        setTourPets(_pets)
        setAccessories(_accessories)
        setAreCategoriesLoading(false)
      }, 3000)

    } catch (error) {
      console.log('error')
    }
  }, [])
  return (
    <PSScreen withHeader>
      <Text style={styles.title}>{strings.homeTitle}</Text>
      <Text style={styles.subTitle}>{strings.homeSubTitle}</Text>
      <PSDivider style={styles.divider} />
      <Text style={styles.homeCategoriesTitle}>{strings.homeCategoriesTitle}</Text>
      <PSHorizontalScroller
        type={Types.HORIZONTAL_SCROLLER_TYPES.CATEGORIES}
        data={categories}
        isLoading={areCategoriesLoading}
        style={styles.categoriesScroller}
      />
      <PSHorizontalScroller
        type={Types.HORIZONTAL_SCROLLER_TYPES.PETS}
        data={tourPets}
        isLoading={areCategoriesLoading}
        style={styles.petsScroller}
        onItemPress={(item) => onPetItemPress(item, navigation)}
        onFavIconPress={() => {}}
      />
      <PSDivider style={styles.divider} />
      <Text style={styles.accTitle}>{strings.homeAccTitle}</Text>
      <PSVerticalScroller
        data={accessories}
        isLoading={false}
        style={styles.accessoriesScroller}
        numOfColumns={2}
        onItemPress={{}}
        onFavIconPress={{}}
      />
    </PSScreen>
  )
}
