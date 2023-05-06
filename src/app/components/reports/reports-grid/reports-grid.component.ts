import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { SurveyService } from 'src/app/services/survey/survey.service';

@Component({
  selector: 'app-reports-grid',
  templateUrl: './reports-grid.component.html',
  styleUrls: ['./reports-grid.component.css']
})
export class ReportsGridComponent implements OnInit {
  data: any;
  listType: string = 'identification';
  constructor(private surveyService: SurveyService) { };
  displayedColumnsIdentification: string[] = ['position', 'gender', 'age', 'height', 'weight', 'email', 'familyHasDiabetes', 'isPregnant'];
  displayedColumnsSymptom: string[] = ['symptomPosition', 'urination', 'thirst', 'fatigue', 'blurred', 'slowhealing', 'tingling', 'dry', 'weightChange', 'moodChanges'];
  displayedColumnsLifestyle: string[] = ['lifestylePosition', 'question1', 'question2', 'question3', 'question4', 'question5'];
  ngOnInit() {
    this.surveyService.getListOfEntry()
      .subscribe((res: any) => {
        this.data = res;
        this.data = this.data.map((obj: any, index: number) => {
          let question1Str = "";
          if (obj.lifestyle.question1.bread) {
            question1Str += 'bread, '
          }
          if (obj.lifestyle.question1.sugar) {
            question1Str += 'sugar, '
          }
          if (obj.lifestyle.question1.salt) {
            question1Str += 'salt, '
          }
          if (obj.lifestyle.question1.flour) {
            question1Str += 'flour, '
          }

          question1Str = question1Str.slice(0, question1Str.length - 2);

          let question4Str = "";
          if (obj.lifestyle.question4.airPollution) {
            question4Str += 'air pollution, '
          }
          if (obj.lifestyle.question4.waterPollution) {
            question4Str += 'lack of clean drinking water, '
          }
          if (obj.lifestyle.question4.toxins) {
            question4Str += 'exposure to toxins, '
          }

          question4Str = question4Str.slice(0, question4Str.length - 2);

          let question5Str = "";
          if (obj.lifestyle.question5.trauma) {
            question5Str += 'historical trauma, '
          }
          if (obj.lifestyle.question5.finances) {
            question5Str += 'financial issue, '
          }
          if (obj.lifestyle.question5.other) {
            question5Str += 'other reasons, '
          }

          if (question5Str == "") {
            question5Str = "happy, do not have any mental health"
          }

          question5Str = question5Str.slice(0, question5Str.length - 2);

          let formattedObj = {
            formattedIdentification: {
              age: obj.identification.age,
              gender: obj.identification.gender.charAt(0).toUpperCase() + obj.identification.gender.slice(1),
              height: obj.identification.height,
              weight: obj.identification.weight,
              email: obj.identification.email,
              familyHasDiabetes: obj.identification.familyHasDiabetes ? "Yes" : "No",
              isPregnant: obj.identification.isPregnant ? "Yes" : "No"
            },
            formattedSymptoms: {
              urination: obj.symptoms.urination ? 'Yes' : 'No',
              thirst: obj.symptoms.thirst ? 'Yes' : 'No',
              hunger: obj.symptoms.hunger ? 'Yes' : 'No',
              fatigue: obj.symptoms.fatigue ? 'Yes' : 'No',
              blurred: obj.symptoms.blurred ? 'Yes' : 'No',
              slowhealing: obj.symptoms.slowhealing ? 'Yes' : 'No',
              tingling: obj.symptoms.tingling ? 'Yes' : 'No',
              dry: obj.symptoms.dry ? 'Yes' : 'No',
              weightChange: obj.symptoms.weightChange ? 'Yes' : 'No',
              moodChanges: obj.symptoms.moodChanges ? 'Yes' : 'No'
            },
            formattedlifeStyle: {
              question1: question1Str.charAt(0).toUpperCase() + question1Str.slice(1),
              question2: obj.lifestyle.question2.charAt(0).toUpperCase() + obj.lifestyle.question2.slice(1),
              question3: obj.lifestyle.question3.charAt(0).toUpperCase() + obj.lifestyle.question3.slice(1),
              question4: question4Str.charAt(0).toUpperCase() + question4Str.slice(1),
              question5: question5Str.charAt(0).toUpperCase() + question5Str.slice(1),
            },
            id: index + 1,
          }
          return formattedObj;

        }

        )
        console.log(this.data);

      },
        err => {
          console.error(err);
        });
  }
}
