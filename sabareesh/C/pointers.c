#include<stdio.h>
int main()
{
    int arr[100];
    int n,i;
    int *prt = arr;

    printf("enter the size of array:\n");
    scanf("%d",&n);

    printf("enter the elements in array:\n");
    for(i=0;i<n;i++)
    {
        scanf("%d",prt);

        prt++;
    }
    prt=arr;
    printf("array elements\n");
    for(i=0;i<n;i++)
    {
        printf("%d\t",*prt);
        prt++;
    }
    return 0;
}
