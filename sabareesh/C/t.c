#include <stdio.h>
int transpose (int r,int c,int m[][10]) 
{
    int transpose[c][r];
    for(int i=0;i<c;i++)
    for(int j=0;j<r;j++)
    {
        transpose[i][j]=m[j][i];
    }
    printf("transpose of matrix\n");
    for(int i=0;i<c;i++)
    {
        for(int j=0;j<r;j++)
        {
            printf("%d\t",transpose[i][j]);
        }
        printf("\n");
    }
}

int main()
{
    int m[10][10],r,c;

    printf("enter the rows and column of first matrix\n");
    scanf("%d%d",&r,&c);
    printf("enter the first matrix\n");
    for(int i=0;i<r;i++)
    {
    for(int j=0;j<c;j++)
    	{
        scanf("%d",&m[i][j]);
    	}
    printf("\n");
}
transpose(m,r,c)
return 0;
}
