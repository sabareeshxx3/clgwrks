#include <stdio.h>
void swaping( int *x,int *y)
{
    int t;
    t = *x;
    *x = *y;
    *y = t;
}
int main()
{
    int a,b;
    printf("enter the fist number:\n");
    scanf("%d",&a);
    printf("enter the second number:\n");
    scanf("%d",&b);
    printf("before swaping first number is %d ,second number %d \n",a,b);
    swaping(&a,&b);
    printf("after swaping first number is %d ,second number %d \n",a,b);
    return 0;
}