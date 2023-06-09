import { Component, OnInit } from '@angular/core';
import { TitleService } from 'app/services/title.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {
  BMR:number = 0;
  calorie:number=1800;
  activity_factor:number = 1.2;
  age:number=0;
  openClicked = false;
  requiredCalorie=
    {
    "age_groups": [
      {
          "ranges": [
          {
            'range':{'min_age':1,'max_age':3},
            "age": "1-3 years old",
            "male_calorie_range": "1,000-1,400",
            "female_calorie_range": "1,000-1,200"
          },
          {
            'range':{'min_age':4,'max_age':8},
            "age": "4-8 years old",
            "male_calorie_range": "1,200-1,800",
            "female_calorie_range": "1,200-1,600"
          },
          {
            'range':{'min_age':9,'max_age':13},
            "age": "9-13 years old",
            "male_calorie_range": "1,600-2,200",
            "female_calorie_range": "1,400-2,200"
          }
        ]
      },
      {
        "ranges": [
          {
            'range':{'min_age':14,'max_age':18},
            "age": "14-18 years old",
            "male_calorie_range": "2,000-3,200",
            "female_calorie_range": "1,800-2,400"
          }
        ]
      },
      {
        "ranges": [
          {
            'range':{'min_age':19,'max_age':30},
            "age": "19-30 years old",
            "male_calorie_range": "2,400-3,000",
            "female_calorie_range": "2,000-2,400"
          },
          {
            'range':{'min_age':31,'max_age':50},
            "age": "31-50 years old",
            "male_calorie_range": "2,200-3,000",
            "female_calorie_range": "1,800-2,200"
          },
          {
            'range':{'min_age':51,'max_age':200},
            "age": "51+ years old",
            "male_calorie_range": "2,000-2,800",
            "female_calorie_range": "1,600-2,200"
          }
        ]
      }
    ]
  }
  
  // (25% protein, 55% carbohydrates, 20% fats 
  // x+y+z = total
  // 
  proteinFoods:any[] = [];
  carbohydrateFoods:any[] = [];
  fatFoods:any[] = [];
  
  openFoodRecommendation(){
    // Arrays to store recommended foods for each category
    this.openClicked = !this.openClicked;
// Calculate the total calories required
const totalCalories = this.calorie; 

// Calculate the target amounts for each macronutrient
let proteinCalories = totalCalories * 0.25;
let  carbohydrateCalories = totalCalories * 0.55;
let fatCalories = totalCalories * 0.20;

console.log("protien:" + proteinCalories);
console.log("carb:" + carbohydrateCalories);
console.log("fat:" + fatCalories);
// console.log("protien:" + proteinGrams);


// Iterate through the macronutrients and find matching foods
for (const macronutrient of this.nutritions.macronutrients) {
  if (macronutrient.category === 'Protein') {

      while(proteinCalories>0){
        for (const food of macronutrient.foods) {
          const minProtein = food.calories_per_serving.min_cal;
          const maxProtein = food.calories_per_serving.max_cal;  
        if (minProtein <= proteinCalories && maxProtein <= proteinCalories) {
          this.proteinFoods.push(food);
        }
        proteinCalories-=maxProtein;
        console.log(minProtein+" " +proteinCalories)
      }
    }
    if (this.proteinFoods.length === 0) {
      this.proteinFoods.push(macronutrient.foods[0]); // Add a default food if no match found
    }
  } else if (macronutrient.category === 'Carbohydrates') {
    while(carbohydrateCalories>0){
      for (const food of macronutrient.foods) {
        const minCarbohydrates = food.calories_per_serving.min_cal;
        const maxCarbohydrates = food.calories_per_serving.max_cal;
      if (minCarbohydrates <= carbohydrateCalories && maxCarbohydrates >= carbohydrateCalories) {
        this.carbohydrateFoods.push(food);
      }
      carbohydrateCalories-=minCarbohydrates;
    }
    }
    if (this.carbohydrateFoods.length === 0) {
      this.carbohydrateFoods.push(macronutrient.foods[0]); // Add a default food if no match found
    }
  } else if (macronutrient.category === 'Fats') {
    while(fatCalories>0){
      for (const food of macronutrient.foods) {
        const minFats = food.calories_per_serving.min_cal;
        const maxFats = food.calories_per_serving.max_cal;
      if (minFats <= fatCalories && maxFats >= fatCalories) {
        this.fatFoods.push(food);
      }
      fatCalories-=minFats;
    }
    }
    if (this.fatFoods.length === 0) {
      this.fatFoods.push(macronutrient.foods[0]); // Add a default food if no match found
    }
  }
}

// Display the recommended foods to the user
console.log('Recommended Protein Foods:', this.proteinFoods);
console.log('Recommended Carbohydrate Foods:', this.carbohydrateFoods);
console.log('Recommended Fat Foods:', this.fatFoods);

  


  }
  openRecommendationHistory(){
    //open stored database of previous recommendations
  }
  nutritions= {
    "macronutrients": [ 
      {"category": "Protein",
      "foods": [
        {"name": "Chicken breast","serving_size": "3 ounces","calories_per_serving":{'min_cal':165, 'max_cal':190}},
        {"name": "Turkey breast","serving_size": "3 ounces","calories_per_serving":{'min_cal':160, 'max_cal':170} },
        {"name": "Salmon","serving_size": "3 ounces","calories_per_serving":{'min_cal':280, 'max_cal':350} },
        {"name": "Eggs","serving_size": "1 large egg", "calories_per_serving":{'min_cal':70, 'max_cal':80}},
        {"name": "Greek yogurt","serving_size": "1 cup","calories_per_serving":{'min_cal':100, 'max_cal':150} },
        {"name": "Cottage cheese","serving_size": "1/2 cup","calories_per_serving":{'min_cal':80, 'max_cal':120} },
        {"name": "Tofu","serving_size": "1/2 cup","calories_per_serving":{'min_cal':80, 'max_cal':100}},
        {"name": "Lentils","serving_size": "1/2 cup","calories_per_serving":{'min_cal':115, 'max_cal':230}},
        {"name": "Chickpeas","serving_size": "1/2 cup","calories_per_serving":{'min_cal':140, 'max_cal':180} }
        ]
      },
      {"category": "Carbohydrates",
        "foods": [
        {"name": "Brown rice","serving_size": "1/2 cup cooked","calories_per_serving":{'min_cal':108, 'max_cal':115} },
        {"name": "Quinoa","serving_size": "1/2 cup cooked","calories_per_serving":{'min_cal':111, 'max_cal':125}},
        {"name": "Oats","serving_size": "1/2 cup dry","calories_per_serving":{'min_cal':150, 'max_cal':170} },
        {"name": "Sweet potatoes","serving_size": "1 medium potato","calories_per_serving":{'min_cal':100, 'max_cal':130} },
        {"name": "Bananas","serving_size": "1 medium banana","calories_per_serving":{'min_cal':90, 'max_cal':120}},
        {"name": "Apples","serving_size": "1 medium apple","calories_per_serving":{'min_cal':80, 'max_cal':100} },
        {"name": "Berries (mixed)","serving_size": "1 cup","calories_per_serving":{'min_cal':50, 'max_cal':80} },
        {"name": "Broccoli","serving_size": "1 cup","calories_per_serving":{'min_cal':30, 'max_cal':50} },
        {"name": "Whole grain bread","serving_size": "1 slice","calories_per_serving":{'min_cal':70, 'max_cal':90} }
        ]
      },
      {"category": "Fats",
      "foods": [
        {"name": "Avocado","serving_size": "1/4 avocado","calories_per_serving":{'min_cal':60, 'max_cal':100}},
          {"name": "Almonds","serving_size": "1/4 cup","calories_per_serving":{'min_cal':160, 'max_cal':180} },
          {"name": "Chia seeds","serving_size": "1 tablespoon","calories_per_serving":{'min_cal':60, 'max_cal':70} },
          {"name": "Olive oil","serving_size": "1 tablespoon","calories_per_serving":{'min_cal':120, 'max_cal':130} },
          {"name": "Coconut oil","serving_size": "1 tablespoon","calories_per_serving":{'min_cal':120, 'max_cal':130}},
          {"name": "Salmon (fillet)","serving_size": "3 ounces","calories_per_serving":{'min_cal':280, 'max_cal':350} },
          {"name": "Peanut butter","serving_size": "2 tablespoons","calories_per_serving":{'min_cal':180, 'max_cal':200} },
          {"name": "Cheese (cheddar)","serving_size": "1 ounce","calories_per_serving":{'min_cal':110, 'max_cal':120} },
          {"name": "Full-fat Greek yogurt","serving_size": "1 cup","calories_per_serving":{'min_cal':140, 'max_cal':180}}
        ]
      }
    ]
  }


  
  constructor(private titleService:TitleService, private userService:UserService) { 
    this.titleService.setTitle("Recommendations");
    
  }

  ngOnInit(): void {
    this.userService.userSubject.subscribe((userData)=>{
      console.log(userData);
      this.age = userData.age;
      // for other's ? will be BMR 
      if(userData.gender=="Male"){
        this.BMR = (10*userData.weight)+(6.25*userData.height)-(5*userData.age)+5;
      }else{
        this.BMR = (10*userData.weight)+(6.25*userData.height)-(5*userData.age)-161;
      }
      // getting activity_factor if one workout allowed perday
      if(userData.workouts.length > 0 && userData.workouts.length <= 3)
      this.activity_factor = 1.375;
      else if(userData.workouts.length > 3 && userData.workouts.length <= 5)
      this.activity_factor = 1.55;
      else if(userData.workouts.length > 5 && userData.workouts.length <= 7)
      this.activity_factor = 1.725;
      else if(userData.workouts.length > 7 )
      this.activity_factor = 1.9;
      // calorie calculation
      this.calorie = this.BMR*this.activity_factor;

    })
  
  }
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
