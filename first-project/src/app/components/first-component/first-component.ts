import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'first-component',
    templateUrl: './first-component.html',
    styleUrls: [`./first-component.css`]
})
export class FirstComponent implements OnInit, OnDestroy {
    title = 'Hi, from Component';

    calculate = (firstNumber: number, secondNumber: number): number => {
        return firstNumber + secondNumber;
    }
    
    ngOnInit(): void {
        console.log('Created');
    }

    ngOnDestroy(): void {
        console.log('Destroyed');
    }
}